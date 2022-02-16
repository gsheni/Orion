# -*- coding: utf-8 -*-

import logging
import math
import tempfile
from typing import Union, Optional

import numpy as np
import pandas as pd
import tensorflow as tf
from mlprimitives.utils import import_object
from scipy import stats
from tensorflow.keras import backend as K
from tensorflow.keras.layers import Input
from tensorflow.keras.models import Model, Sequential
from tensorflow.python.keras.losses import mean_squared_error

from orion.primitives.timeseries_errors import reconstruction_errors

LOGGER = logging.getLogger(__name__)
tf.keras.backend.set_floatx('float32')


def build_layer(layer: dict, hyperparameters: dict):
    layer_class = import_object(layer['class'])
    layer_kwargs = layer['parameters'].copy()
    # TODO: Upgrade to using tf.keras.layers.Wrapper in mlprimitives.
    if issubclass(layer_class, tf.keras.layers.Wrapper):
        layer_kwargs['layer'] = build_layer(layer_kwargs['layer'], hyperparameters)
    for key, value in layer_kwargs.items():
        if isinstance(value, str):
            layer_kwargs[key] = hyperparameters.get(value, value)
    return layer_class(**layer_kwargs)


class TadGAN(Model):
    """Tensorflow 2.x TadGAN model for time series reconstruction.

    References:
        - https://keras.io/examples/generative/wgan_gp/

    Attributes:
        layers_encoder (list): Layers of encoder.
        layers_generator (list): Layers of generator.
        layers_critic_x (list): Layers of critic_x.
        layers_critic_z (list) Layers of critic_z.
        shape (tuple): Shape of an input sample.
        latent_dim (int): Dimension of latent space. Default 20.
        latent_shape (tuple): Shape of an latent sample.
        target_shape (tuple): Shape of an output sample.
        encoder_input_shape (tuple): Tuple denoting shape of encoder input.
        generator_input_shape (tuple): Shape of generator input.
        critic_x_input_shape (tuple): Shape of critic_x input.
        critic_z_input_shape (tuple): Shape of critic_z input.
        learning_rate (float): Learning rate of the optimizer. Default 0.0005.
        optimizer (tensorflow.keras.optimizers.Optimizer): Keras optimizer.
        epochs (int):Number of epochs. Default 2000.
        batch_size (int): The batch size. Default 64.
        iterations_critic (Optional[Integer]): Number of critic training steps per one
            Generator/Encoder training step. Default 5.
        shuffle (bool): Whether to shuffle the dataset for each epoch.
        validation_split (Optional[Float]): Number between 0 and 1. Fraction of the training data
            to be used as validation data. Default 0.2.
        callbacks (Optional[dict]): Callbacks to apply during training.
        verbose (Optional[Union[int, bool]]): Verbosity mode where 0 = silent, 1 = progress bar,
            2 = one line per epoch. Default False.
        detailed_losses (Optional[bool]): Whether to output all loss values in verbose mode.
        **hyperparameters (Optional[dict]): additional inputs.
    """

    def __init__(self, layers_encoder: list, layers_generator: list, layers_critic_x: list,
                 layers_critic_z: list, optimizer: str, input_shape: tuple = (100, 1),
                 latent_shape: Optional[tuple] = None, target_shape: Optional[tuple] = None,
                 latent_dim: int = 20, learning_rate: float = 0.0005, epochs: int = 2000,
                 batch_size: int = 64, iterations_critic: int = 5, shuffle: bool = True,
                 callbacks: tuple = tuple(), validation_ratio: float = 0.2,
                 detailed_losses: bool = True, verbose: Union[int, bool] = True,
                 **hyperparameters):
        """Initialize the TadGAN model."""
        super(TadGAN, self).__init__()

        # Required model hyperparameters to construct model.
        self.layers_encoder, self.layers_generator = layers_encoder, layers_generator
        self.layers_critic_x, self.layers_critic_z = layers_critic_x, layers_critic_z

        # Optional model hyperparameters.
        self.shape = input_shape
        self.latent_dim = latent_dim
        self.latent_shape = latent_shape if latent_shape else (latent_dim, 1)
        self.target_shape = target_shape if target_shape else input_shape

        # Calculated model hyperparameters
        self.encoder_input_shape = hyperparameters.get('encoder_input_shape', self.shape)
        self.generator_input_shape = hyperparameters.get('generator_input_shape', self.latent_shape)
        self.critic_x_input_shape = hyperparameters.get('critic_x_input_shape', self.target_shape)
        self.critic_z_input_shape = hyperparameters.get('critic_z_input_shape', self.latent_shape)

        self._setdefault(hyperparameters, 'generator_reshape_dim', self.shape[0] // 2)
        self._setdefault(hyperparameters, 'generator_reshape_shape', (self.shape[0] // 2, 1))
        self._setdefault(hyperparameters, 'encoder_reshape_shape', self.latent_shape)
        self.hyperparameters = hyperparameters

        self.encoder = self._build_model(
            hyperparameters, self.layers_encoder, self.encoder_input_shape, name='encoder')
        self.generator = self._build_model(
            hyperparameters, self.layers_generator, self.generator_input_shape, name='generator')
        self.critic_x = self._build_model(
            hyperparameters, self.layers_critic_x, self.critic_x_input_shape, name='critic_x')
        self.critic_z = self._build_model(
            hyperparameters, self.layers_critic_z, self.critic_z_input_shape, name='critic_z')

        # Training parameters
        self.learning_rate = learning_rate
        self.optimizer = import_object(optimizer)(learning_rate)
        self.epochs = epochs
        self.batch_size = batch_size
        self.iterations_critic = iterations_critic
        self.shuffle = shuffle
        self.validation_ratio = validation_ratio
        for callback in callbacks:
            callback['class'] = import_object(callback['class'])
        self.callbacks = callbacks
        self.verbose = verbose
        self.detailed_losses = detailed_losses

        self.compile()

    def compile(self, **kwargs):
        super(TadGAN, self).compile(**kwargs)

    @classmethod
    def _setdefault(cls, kwargs, key, value):
        if kwargs.get(key) is None:
            kwargs[key] = value

    def __getstate__(self):
        networks = ['critic_x', 'critic_z', 'encoder', 'generator']
        modules = ['optimizer', 'critic_x_model', 'critic_z_model', 'encoder_generator_model']

        state = self.__dict__.copy()

        for module in modules:
            del state[module]

        for network in networks:
            with tempfile.NamedTemporaryFile(suffix='.hdf5', delete=False) as fd:
                tf.keras.models.save_model(state.pop(network), fd.name, overwrite=True)

                state[network + '_str'] = fd.read()

        return state

    def __setstate__(self, state: dict):
        networks = ['critic_x', 'critic_z', 'encoder', 'generator']
        for network in networks:
            with tempfile.NamedTemporaryFile(suffix='.hdf5', delete=False) as fd:
                fd.write(state.pop(network + '_str'))
                fd.flush()

                state[network] = tf.keras.models.load_model(fd.name)

        self.__dict__ = state

    @classmethod
    def _build_model(cls, hyperparameters: dict, layers: list, input_shape: tuple,
                     name: str) -> Model:
        x = Input(shape=input_shape)
        model = Sequential(name=name)

        for layer in layers:
            built_layer = build_layer(layer, hyperparameters)
            model.add(built_layer)

        return Model(x, model(x))

    @classmethod
    def _wasserstein_loss(cls, y_true, y_pred):
        return K.mean(y_true * y_pred)

    @classmethod
    def _gradient_penalty_loss(cls, real, fake, critic):

        # Random Weighted Average
        batch_size = real.shape[0]
        alpha = tf.random.uniform([batch_size, 1, 1], dtype=tf.float32)
        interpolated = (alpha * real) + ((1 - alpha) * fake)

        # TODO: Replace with tensorflow functions.
        with tf.GradientTape() as gp_tape:
            gp_tape.watch(interpolated)
            validity_interpolated = critic(interpolated)
        gradients = gp_tape.gradient(validity_interpolated, [interpolated])[0]
        gradients_sqr = K.square(gradients)
        gradients_sqr_sum = K.sum(gradients_sqr, axis=np.arange(1, len(gradients_sqr.shape)))
        gradient_l2_norm = K.sqrt(gradients_sqr_sum)
        gradient_penalty = K.square(1 - gradient_l2_norm)
        return K.mean(gradient_penalty)

    def call(self, data, training=None, mask=None):
        x, target = data
        z_ = self.encoder(x)
        y_hat = self.generator(z_)
        critic = self.critic_x(target)
        return y_hat, critic

    def train_step(self, data) -> dict:
        X, target = data
        batch_size = tf.shape(X)[0]
        mini_batch_size = batch_size // self.iterations_critic

        fake = tf.ones((mini_batch_size, 1), dtype=tf.float32)
        valid = -tf.ones((mini_batch_size, 1), dtype=tf.float32)

        batch_g_loss, batch_cx_loss, batch_cz_loss = [], [], []

        # Train the critics
        for j in range(self.iterations_critic):
            x = X[j * mini_batch_size: (j + 1) * mini_batch_size]
            y = target[j * mini_batch_size: (j + 1) * mini_batch_size]
            z = tf.random.normal(shape=(mini_batch_size, self.latent_shape[0],
                                        self.latent_shape[1]), dtype=tf.float32)

            with tf.GradientTape(persistent=True) as tape:
                # Train critic x
                x_ = self.generator(z, training=True)
                cx_valid = self.critic_x(y, training=True)
                cx_fake = self.critic_x(x_, training=True)

                cx_valid_loss = self._wasserstein_loss(valid, cx_valid)
                cx_fake_loss = self._wasserstein_loss(fake, cx_fake)
                cx_gp = self._gradient_penalty_loss(y, x_, self.critic_x)
                cx_loss = cx_valid_loss + cx_fake_loss + 10 * cx_gp

                # Train critic z
                z_ = self.encoder(x, training=True)
                cz_valid = self.critic_z(z, training=True)
                cz_fake = self.critic_z(z_, training=True)

                cz_valid_loss = self._wasserstein_loss(valid, cz_valid)
                cz_fake_loss = self._wasserstein_loss(fake, cz_fake)
                cz_gp = self._gradient_penalty_loss(z, z_, self.critic_z)
                cz_loss = cz_valid_loss + cz_fake_loss + 10 * cz_gp

            # Get the gradients for the critics
            cx_grads = tape.gradient(cx_loss, self.critic_x.trainable_weights)
            cz_grads = tape.gradient(cz_loss, self.critic_z.trainable_weights)

            # Update the weights of the critics
            self.optimizer.apply_gradients(zip(cx_grads, self.critic_x.trainable_weights))
            self.optimizer.apply_gradients(zip(cz_grads, self.critic_z.trainable_weights))

            # Record loss
            batch_cx_loss.append([cx_loss, cx_valid_loss, cx_fake_loss, cx_gp])
            batch_cz_loss.append([cz_loss, cz_valid_loss, cz_fake_loss, cz_gp])

        # Train encoder generator
        with tf.GradientTape() as tape:
            x_ = self.generator(z, training=True)
            cx_fake = self.critic_x(x_, training=True)
            z_ = self.encoder(x, training=True)
            cz_fake = self.critic_z(z_, training=True)
            x_rec_ = self.generator(z_, training=True)

            # Encoder Generator Loss
            eg_x_loss = self._wasserstein_loss(valid, cx_fake)
            eg_z_loss = self._wasserstein_loss(valid, cz_fake)
            eg_mse = mean_squared_error(x, x_rec_)
            eg_loss = eg_x_loss + eg_z_loss + 10 * eg_mse

        # Get the gradients for the encoder/generator
        encoder_generator_grads = tape.gradient(eg_loss,
                                                self.encoder.trainable_variables +
                                                self.generator.trainable_variables)
        self.optimizer.apply_gradients(
            zip(encoder_generator_grads, self.encoder.trainable_variables +
                self.generator.trainable_variables))

        batch_cx_loss = np.mean(np.array(batch_cx_loss), axis=1)
        batch_cz_loss = np.mean(np.array(batch_cz_loss), axis=1)
        batch_eg_loss = (eg_loss, eg_x_loss, eg_z_loss, eg_mse)
        output = self._format_losses([batch_cx_loss, batch_cz_loss, batch_eg_loss])

        return output

    def test_step(self, data) -> dict:
        x, y = data
        batch_size = tf.shape(x)[0]

        fake = tf.ones((batch_size, 1), dtype=tf.float32)
        valid = -tf.ones((batch_size, 1), dtype=tf.float32)

        z = tf.random.normal(shape=(batch_size, self.latent_shape[0], self.latent_shape[1]),
                             dtype=tf.float32)

        # Critic x loss
        x_ = self.generator(z)
        cx_valid = self.critic_x(y)
        cx_fake = self.critic_x(x_)
        cx_valid_loss = self._wasserstein_loss(valid, cx_valid)
        cx_fake_loss = self._wasserstein_loss(fake, cx_fake)
        cx_gp = self._gradient_penalty_loss(y, x_, self.critic_x)
        cx_loss = cx_valid_loss + cx_fake_loss + 10 * cx_gp

        # Critic z loss
        z_ = self.encoder(x)
        cz_valid = self.critic_z(z)
        cz_fake = self.critic_z(z_)
        cz_valid_loss = self._wasserstein_loss(valid, cz_valid)
        cz_fake_loss = self._wasserstein_loss(fake, cz_fake)
        cz_gp = self._gradient_penalty_loss(z, z_, self.critic_z)
        cz_loss = cz_valid_loss + cz_fake_loss + 10 * cz_gp

        # Encoder Generator Loss
        x_rec_ = self.generator(z_)
        eg_x_loss = self._wasserstein_loss(valid, cx_fake)
        eg_z_loss = self._wasserstein_loss(valid, cz_fake)
        eg_mse = mean_squared_error(x, x_rec_)
        eg_loss = eg_x_loss + eg_z_loss + 10 * eg_mse

        batch_loss = [
            [cx_loss, cx_valid_loss, cx_fake_loss, cx_gp],
            [cz_loss, cz_valid_loss, cz_fake_loss, cz_gp],
            [eg_loss, eg_x_loss, eg_z_loss, eg_mse]
        ]
        output = self._format_losses(batch_loss)

        return output

    def _format_losses(self, losses: list) -> dict:
        loss_names = [
            ['cx_loss', 'cx_real', 'cx_fake', 'cx_gp'],
            ['cz_loss', 'cz_real', 'cz_fake', 'cz_gp'],
            ['eg_loss', 'eg_x', 'eg_z', 'eg_mse']
        ]
        output = dict()
        if self.detailed_losses:
            for i in range(len(loss_names)):
                for j in range(len(loss_names[i])):
                    output[loss_names[i][j]] = losses[i][j]
        else:
            for i in range(len(loss_names)):
                output[loss_names[i][0]] = losses[i][0]

        return output

    def fit(self, X: np.ndarray, y: Optional[np.ndarray] = None, **kwargs):
        """Fit the TadGAN model.

        Args:
            X (ndarray):
                N-dimensional array containing the input encoder sequences for the model.
            y (ndarray):
                N-dimensional array containing the input critic x sequences for the model.
            **kwargs (dict):
                Additional hyperparameters.
        """
        y = y if y is not None else X
        x, y = X.astype(np.float32), y.astype(np.float32)

        train = (x.copy(), y.copy())
        valid = None
        callbacks = None

        if self.validation_ratio > 0:
            valid_length = round(len(x) * self.validation_ratio)
            train = (x[:-valid_length].copy(), y[:-valid_length].copy())
            valid = (x[-valid_length:].copy(), y[-valid_length:].copy())

            valid = tf.data.Dataset.from_tensor_slices(valid).shuffle(valid[0].shape[0])
            valid = valid.batch(self.batch_size, drop_remainder=True)

            callbacks = [
                callback['class'](**callback.get('args', dict()))
                for callback in self.callbacks
            ]

        train = tf.data.Dataset.from_tensor_slices(train).shuffle(train[0].shape[0])
        train = train.batch(self.batch_size, drop_remainder=True)
        super().fit(train, validation_data=valid, epochs=self.epochs, verbose=self.verbose,
                    callbacks=callbacks, batch_size=self.batch_size, shuffle=self.shuffle,
                    **kwargs)

    def predict(self, X: np.ndarray, y: Optional[np.ndarray] = None) -> tuple:
        """Predict using TadGAN model.

        Args:
            X (ndarray):
                N-dimensional array containing the input encoder sequences for the model.
            y (ndarray):
                N-dimensional array containing the input critic x sequences for the model.
        Returns:
            ndarray:
                N-dimensional array containing the reconstructions for each input sequence.
            ndarray:
                N-dimensional array containing the critic scores for each input sequence.
        """
        y = y if y is not None else X
        test = (X.astype(np.float32), y.astype(np.float32))
        y_hat, critic = self.call(test)

        return y_hat.numpy(), critic.numpy()


def _compute_critic_score(critics, smooth_window):
    """Compute an array of anomaly scores.

    Args:
        critics (ndarray):
            Critic values.
        smooth_window (int):
            Smooth window that will be applied to compute smooth errors.

    Returns:
        ndarray:
            Array of anomaly scores.
    """
    critics = np.asarray(critics)
    l_quantile = np.quantile(critics, 0.25)
    u_quantile = np.quantile(critics, 0.75)
    in_range = np.logical_and(critics >= l_quantile, critics <= u_quantile)
    critic_mean = np.mean(critics[in_range])
    critic_std = np.std(critics)

    z_scores = np.absolute((np.asarray(critics) - critic_mean) / critic_std) + 1
    z_scores = pd.Series(z_scores).rolling(
        smooth_window, center=True, min_periods=smooth_window // 2).mean().values

    return z_scores


def score_anomalies(y, y_hat, critic, index, score_window=10, critic_smooth_window=None,
                    error_smooth_window=None, smooth=True, rec_error_type="point", comb="mult",
                    lambda_rec=0.5):
    """Compute an array of anomaly scores.

    Anomaly scores are calculated using a combination of reconstruction error and critic score.

    Args:
        y (ndarray):
            Ground truth.
        y_hat (ndarray):
            Predicted values. Each timestamp has multiple predictions.
        index (ndarray):
            time index for each y (start position of the window)
        critic (ndarray):
            Critic score. Each timestamp has multiple critic scores.
        score_window (int):
            Optional. Size of the window over which the scores are calculated.
            If not given, 10 is used.
        critic_smooth_window (int):
            Optional. Size of window over which smoothing is applied to critic.
            If not given, 200 is used.
        error_smooth_window (int):
            Optional. Size of window over which smoothing is applied to error.
            If not given, 200 is used.
        smooth (bool):
            Optional. Indicates whether errors should be smoothed.
            If not given, `True` is used.
        rec_error_type (str):
            Optional. The method to compute reconstruction error. Can be one of
            `["point", "area", "dtw"]`. If not given, 'point' is used.
        comb (str):
            Optional. How to combine critic and reconstruction error. Can be one
            of `["mult", "sum", "rec"]`. If not given, 'mult' is used.
        lambda_rec (float):
            Optional. Used if `comb="sum"` as a lambda weighted sum to combine
            scores. If not given, 0.5 is used.

    Returns:
        ndarray:
            Array of anomaly scores.
    """

    critic_smooth_window = critic_smooth_window or math.trunc(y.shape[0] * 0.01)
    error_smooth_window = error_smooth_window or math.trunc(y.shape[0] * 0.01)

    step_size = 1  # expected to be 1

    true_index = index  # no offset

    true = [item[0] for item in y.reshape((y.shape[0], -1))]

    for item in y[-1][1:]:
        true.extend(item)

    critic_extended = list()
    for c in critic:
        critic_extended.extend(np.repeat(c, y_hat.shape[1]).tolist())

    critic_extended = np.asarray(critic_extended).reshape((-1, y_hat.shape[1]))

    critic_kde_max = []
    pred_length = y_hat.shape[1]
    num_errors = y_hat.shape[1] + step_size * (y_hat.shape[0] - 1)

    for i in range(num_errors):
        critic_intermediate = []

        for j in range(max(0, i - num_errors + pred_length), min(i + 1, pred_length)):
            critic_intermediate.append(critic_extended[i - j, j])

        if len(critic_intermediate) > 1:
            discr_intermediate = np.asarray(critic_intermediate)
            try:
                critic_kde_max.append(discr_intermediate[np.argmax(
                    stats.gaussian_kde(discr_intermediate)(critic_intermediate))])
            except np.linalg.LinAlgError:
                critic_kde_max.append(np.median(discr_intermediate))
        else:
            critic_kde_max.append(np.median(np.asarray(critic_intermediate)))

    # Compute critic scores
    critic_scores = _compute_critic_score(critic_kde_max, critic_smooth_window)

    # Compute reconstruction scores
    rec_scores, predictions = reconstruction_errors(
        y, y_hat, step_size, score_window, error_smooth_window, smooth, rec_error_type)

    rec_scores = stats.zscore(rec_scores)
    rec_scores = np.clip(rec_scores, a_min=0, a_max=None) + 1

    # Combine the two scores
    if comb == "mult":
        final_scores = np.multiply(critic_scores, rec_scores)

    elif comb == "sum":
        final_scores = (1 - lambda_rec) * (critic_scores - 1) + lambda_rec * (rec_scores - 1)

    elif comb == "rec":
        final_scores = rec_scores

    else:
        raise ValueError(
            'Unknown combination specified {}, use "mult", "sum", or "rec" instead.'.format(comb))

    true = [[t] for t in true]
    return final_scores, true_index, true, predictions
