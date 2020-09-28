Search.setIndex({docnames:["api/orion","api/orion.analysis","api/orion.benchmark","api/orion.cli","api/orion.core","api/orion.data","api/orion.db","api/orion.db.base","api/orion.db.explorer","api/orion.db.schema","api/orion.evaluation","api/orion.evaluation.common","api/orion.evaluation.contextual","api/orion.evaluation.point","api/orion.evaluation.utils","api/orion.functional","api/orion.primitives","api/orion.primitives.azure_anomaly_detector","api/orion.primitives.detectors","api/orion.primitives.estimators","api/orion.primitives.intervals","api/orion.primitives.tadgan","api/orion.primitives.timeseries_anomalies","api/orion.runner","api/orion.utils","authors","benchmark","contributing","database","docker","history","index","readme"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api/orion.rst","api/orion.analysis.rst","api/orion.benchmark.rst","api/orion.cli.rst","api/orion.core.rst","api/orion.data.rst","api/orion.db.rst","api/orion.db.base.rst","api/orion.db.explorer.rst","api/orion.db.schema.rst","api/orion.evaluation.rst","api/orion.evaluation.common.rst","api/orion.evaluation.contextual.rst","api/orion.evaluation.point.rst","api/orion.evaluation.utils.rst","api/orion.functional.rst","api/orion.primitives.rst","api/orion.primitives.azure_anomaly_detector.rst","api/orion.primitives.detectors.rst","api/orion.primitives.estimators.rst","api/orion.primitives.intervals.rst","api/orion.primitives.tadgan.rst","api/orion.primitives.timeseries_anomalies.rst","api/orion.runner.rst","api/orion.utils.rst","authors.rst","benchmark.rst","contributing.rst","database.rst","docker.rst","history.rst","index.rst","readme.rst"],objects:{"":{orion:[0,0,0,"-"]},"orion.Orion":{DEFAULT_PIPELINE:[0,2,1,""],PIPELINES:[0,2,1,""],PIPELINES_DIR:[0,2,1,""],detect:[0,3,1,""],evaluate:[0,3,1,""],fit:[0,3,1,""],fit_detect:[0,3,1,""],load:[0,3,1,""],save:[0,3,1,""]},"orion.analysis":{analyze:[1,4,1,""]},"orion.benchmark":{benchmark:[2,4,1,""],main:[2,4,1,""]},"orion.core":{Orion:[4,1,1,""]},"orion.core.Orion":{DEFAULT_PIPELINE:[4,2,1,""],PIPELINES:[4,2,1,""],PIPELINES_DIR:[4,2,1,""],detect:[4,3,1,""],evaluate:[4,3,1,""],fit:[4,3,1,""],fit_detect:[4,3,1,""],load:[4,3,1,""],save:[4,3,1,""]},"orion.data":{download:[5,4,1,""],download_demo:[5,4,1,""],load_anomalies:[5,4,1,""],load_csv:[5,4,1,""],load_signal:[5,4,1,""]},"orion.db":{OrionDBExplorer:[6,1,1,""],base:[7,0,0,"-"],explorer:[8,0,0,"-"],schema:[9,0,0,"-"]},"orion.db.OrionDBExplorer":{add_annotation:[6,3,1,""],add_datarun:[6,3,1,""],add_dataset:[6,3,1,""],add_event:[6,3,1,""],add_experiment:[6,3,1,""],add_pipeline:[6,3,1,""],add_signal:[6,3,1,""],add_signalrun:[6,3,1,""],add_signals:[6,3,1,""],add_template:[6,3,1,""],drop_database:[6,3,1,""],get_annotation:[6,3,1,""],get_annotations:[6,3,1,""],get_datarun:[6,3,1,""],get_dataruns:[6,3,1,""],get_dataset:[6,3,1,""],get_datasets:[6,3,1,""],get_event:[6,3,1,""],get_events:[6,3,1,""],get_experiment:[6,3,1,""],get_experiments:[6,3,1,""],get_pipeline:[6,3,1,""],get_pipelines:[6,3,1,""],get_signal:[6,3,1,""],get_signalrun:[6,3,1,""],get_signalruns:[6,3,1,""],get_signals:[6,3,1,""],get_template:[6,3,1,""],get_templates:[6,3,1,""]},"orion.db.base":{OrionDocument:[7,1,1,""],OrionMeta:[7,1,1,""],PipelineField:[7,1,1,""],Status:[7,1,1,""],key_has_dollar:[7,4,1,""],remove_dots:[7,4,1,""],restore_dots:[7,4,1,""],walk:[7,4,1,""]},"orion.db.base.OrionDocument":{find:[7,3,1,""],find_one:[7,3,1,""],find_or_insert:[7,3,1,""],get:[7,3,1,""],insert:[7,3,1,""],insert_time:[7,2,1,""],last:[7,3,1,""]},"orion.db.base.PipelineField":{to_mongo:[7,3,1,""],to_python:[7,3,1,""],validate:[7,3,1,""]},"orion.db.base.Status":{STATUS_ERRORED:[7,2,1,""],STATUS_PENDING:[7,2,1,""],STATUS_RUNNING:[7,2,1,""],STATUS_SUCCESS:[7,2,1,""],get_status:[7,3,1,""],status:[7,2,1,""]},"orion.db.explorer":{OrionDBExplorer:[8,1,1,""]},"orion.db.explorer.OrionDBExplorer":{add_annotation:[8,3,1,""],add_datarun:[8,3,1,""],add_dataset:[8,3,1,""],add_event:[8,3,1,""],add_experiment:[8,3,1,""],add_pipeline:[8,3,1,""],add_signal:[8,3,1,""],add_signalrun:[8,3,1,""],add_signals:[8,3,1,""],add_template:[8,3,1,""],drop_database:[8,3,1,""],get_annotation:[8,3,1,""],get_annotations:[8,3,1,""],get_datarun:[8,3,1,""],get_dataruns:[8,3,1,""],get_dataset:[8,3,1,""],get_datasets:[8,3,1,""],get_event:[8,3,1,""],get_events:[8,3,1,""],get_experiment:[8,3,1,""],get_experiments:[8,3,1,""],get_pipeline:[8,3,1,""],get_pipelines:[8,3,1,""],get_signal:[8,3,1,""],get_signalrun:[8,3,1,""],get_signalruns:[8,3,1,""],get_signals:[8,3,1,""],get_template:[8,3,1,""],get_templates:[8,3,1,""]},"orion.db.schema":{Annotation:[9,1,1,""],Datarun:[9,1,1,""],Dataset:[9,1,1,""],Event:[9,1,1,""],EventInteraction:[9,1,1,""],Experiment:[9,1,1,""],Pipeline:[9,1,1,""],Signal:[9,1,1,""],Signalrun:[9,1,1,""],Template:[9,1,1,""]},"orion.db.schema.Annotation":{DoesNotExist:[9,5,1,""],MultipleObjectsReturned:[9,5,1,""],comment:[9,2,1,""],created_by:[9,2,1,""],event:[9,2,1,""],id:[9,2,1,""],objects:[9,2,1,""],save:[9,3,1,""],tag:[9,2,1,""]},"orion.db.schema.Datarun":{DoesNotExist:[9,5,1,""],MultipleObjectsReturned:[9,5,1,""],budget_amount:[9,2,1,""],budget_type:[9,2,1,""],end:[9,3,1,""],end_time:[9,2,1,""],experiment:[9,2,1,""],id:[9,2,1,""],num_events:[9,2,1,""],objects:[9,2,1,""],pipeline:[9,2,1,""],signalruns:[9,3,1,""],software_versions:[9,2,1,""],start:[9,3,1,""],start_time:[9,2,1,""]},"orion.db.schema.Dataset":{DoesNotExist:[9,5,1,""],MultipleObjectsReturned:[9,5,1,""],created_by:[9,2,1,""],entity:[9,2,1,""],id:[9,2,1,""],name:[9,2,1,""],objects:[9,2,1,""],signals:[9,3,1,""],unique_key_fields:[9,2,1,""]},"orion.db.schema.Event":{DoesNotExist:[9,5,1,""],MultipleObjectsReturned:[9,5,1,""],SOURCE_CHOICES:[9,2,1,""],SOURCE_MANUALLY_CREATED:[9,2,1,""],SOURCE_ORION:[9,2,1,""],SOURCE_SHAPE_MATCHING:[9,2,1,""],annotations:[9,3,1,""],event_interactions:[9,3,1,""],id:[9,2,1,""],latest_event_interaction:[9,3,1,""],num_annotations:[9,2,1,""],objects:[9,2,1,""],severity:[9,2,1,""],signal:[9,2,1,""],signalrun:[9,2,1,""],source:[9,2,1,""],start_time:[9,2,1,""],stop_time:[9,2,1,""]},"orion.db.schema.EventInteraction":{DoesNotExist:[9,5,1,""],MultipleObjectsReturned:[9,5,1,""],action:[9,2,1,""],created_by:[9,2,1,""],event:[9,2,1,""],id:[9,2,1,""],objects:[9,2,1,""],start_time:[9,2,1,""],stop_time:[9,2,1,""]},"orion.db.schema.Experiment":{DoesNotExist:[9,5,1,""],MultipleObjectsReturned:[9,5,1,""],created_by:[9,2,1,""],dataruns:[9,3,1,""],dataset:[9,2,1,""],id:[9,2,1,""],name:[9,2,1,""],objects:[9,2,1,""],project:[9,2,1,""],signals:[9,2,1,""],template:[9,2,1,""],unique_key_fields:[9,2,1,""]},"orion.db.schema.Pipeline":{DoesNotExist:[9,5,1,""],MultipleObjectsReturned:[9,5,1,""],created_by:[9,2,1,""],id:[9,2,1,""],json:[9,2,1,""],load:[9,3,1,""],name:[9,2,1,""],objects:[9,2,1,""],template:[9,2,1,""],unique_key_fields:[9,2,1,""]},"orion.db.schema.Signal":{DoesNotExist:[9,5,1,""],MultipleObjectsReturned:[9,5,1,""],created_by:[9,2,1,""],data_location:[9,2,1,""],dataset:[9,2,1,""],id:[9,2,1,""],load:[9,3,1,""],name:[9,2,1,""],objects:[9,2,1,""],start_time:[9,2,1,""],stop_time:[9,2,1,""],timestamp_column:[9,2,1,""],unique_key_fields:[9,2,1,""],value_column:[9,2,1,""]},"orion.db.schema.Signalrun":{DoesNotExist:[9,5,1,""],MultipleObjectsReturned:[9,5,1,""],datarun:[9,2,1,""],end:[9,3,1,""],end_time:[9,2,1,""],events:[9,3,1,""],id:[9,2,1,""],metrics_location:[9,2,1,""],model_location:[9,2,1,""],num_events:[9,2,1,""],objects:[9,2,1,""],signal:[9,2,1,""],start:[9,3,1,""],start_time:[9,2,1,""]},"orion.db.schema.Template":{DoesNotExist:[9,5,1,""],MultipleObjectsReturned:[9,5,1,""],created_by:[9,2,1,""],id:[9,2,1,""],json:[9,2,1,""],load:[9,3,1,""],name:[9,2,1,""],objects:[9,2,1,""],pipelines:[9,3,1,""],unique_key_fields:[9,2,1,""]},"orion.evaluation":{common:[11,0,0,"-"],contextual:[12,0,0,"-"],contextual_accuracy:[10,4,1,""],contextual_confusion_matrix:[10,4,1,""],contextual_f1_score:[10,4,1,""],contextual_precision:[10,4,1,""],contextual_recall:[10,4,1,""],point:[13,0,0,"-"],point_accuracy:[10,4,1,""],point_confusion_matrix:[10,4,1,""],point_f1_score:[10,4,1,""],point_precision:[10,4,1,""],point_recall:[10,4,1,""],utils:[14,0,0,"-"]},"orion.evaluation.contextual":{contextual_accuracy:[12,4,1,""],contextual_confusion_matrix:[12,4,1,""],contextual_f1_score:[12,4,1,""],contextual_precision:[12,4,1,""],contextual_recall:[12,4,1,""]},"orion.evaluation.point":{point_accuracy:[13,4,1,""],point_confusion_matrix:[13,4,1,""],point_f1_score:[13,4,1,""],point_precision:[13,4,1,""],point_recall:[13,4,1,""]},"orion.evaluation.utils":{from_list_points_labels:[14,4,1,""],from_list_points_timestamps:[14,4,1,""],from_pandas_contextual:[14,4,1,""],from_pandas_points:[14,4,1,""],from_pandas_points_labels:[14,4,1,""]},"orion.functional":{detect_anomalies:[15,4,1,""],evaluate_pipeline:[15,4,1,""],fit_pipeline:[15,4,1,""]},"orion.primitives":{azure_anomaly_detector:[17,0,0,"-"],detectors:[18,0,0,"-"],estimators:[19,0,0,"-"],intervals:[20,0,0,"-"],tadgan:[21,0,0,"-"],timeseries_anomalies:[22,0,0,"-"]},"orion.primitives.azure_anomaly_detector":{detect_anomalies:[17,4,1,""],split_sequence:[17,4,1,""]},"orion.primitives.detectors":{ThresholdDetector:[18,1,1,""]},"orion.primitives.detectors.ThresholdDetector":{detect:[18,3,1,""],fit:[18,3,1,""]},"orion.primitives.estimators":{MeanEstimator:[19,1,1,""]},"orion.primitives.estimators.MeanEstimator":{fit:[19,3,1,""],predict:[19,3,1,""]},"orion.primitives.intervals":{build_anomaly_intervals:[20,4,1,""]},"orion.primitives.tadgan":{RandomWeightedAverage:[21,1,1,""],TadGAN:[21,1,1,""],score_anomalies:[21,4,1,""]},"orion.primitives.tadgan.TadGAN":{fit:[21,3,1,""],predict:[21,3,1,""]},"orion.primitives.timeseries_anomalies":{count_above:[22,4,1,""],deltas:[22,4,1,""],find_anomalies:[22,4,1,""],regression_errors:[22,4,1,""],z_cost:[22,4,1,""]},"orion.runner":{get_outputs_spec:[23,4,1,""],process_pipeline_output:[23,4,1,""],start_datarun:[23,4,1,""],start_signalrun:[23,4,1,""]},"orion.utils":{logging_setup:[24,4,1,""]},orion:{Orion:[0,1,1,""],analysis:[1,0,0,"-"],benchmark:[2,0,0,"-"],core:[4,0,0,"-"],data:[5,0,0,"-"],db:[6,0,0,"-"],detect_anomalies:[0,4,1,""],evaluate_pipeline:[0,4,1,""],evaluation:[10,0,0,"-"],fit_pipeline:[0,4,1,""],functional:[15,0,0,"-"],primitives:[16,0,0,"-"],runner:[23,0,0,"-"],utils:[24,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function","5":"py:exception"},terms:{"24h":[31,32],"boolean":[10,12],"case":[6,8,22,26,27,29],"class":[0,4,6,7,8,9,15,18,19,21,30,31,32],"default":[0,4,5,6,7,8,9,15,28,31,32],"final":[2,26],"float":[5,6,8,9,10,12,13,17,21,22,28,31,32],"function":[0,2,4,5,7,9,17,20,22,23,27,30,31,32],"import":[26,31,32],"int":[6,8,10,12,13,14,17,21,22,28],"new":[6,7,8,9,22,27,28,29,30],"null":9,"public":[29,31,32],"return":[0,2,4,5,6,8,9,10,12,13,14,15,17,18,19,20,21,22,26],"short":[9,31,32],"throw":9,"true":[0,4,7,9,10,12,13,18,20,22,31,32],"try":[9,27,31,32],"while":27,AWS:[31,32],Added:9,And:[26,27],For:[9,26,27,31,32],IDs:28,The:[0,2,4,5,6,8,9,15,17,21,22,23,26,27,28,29,31,32],Then:29,These:[31,32],Use:[7,9,26],Used:[10,12,13,21],Uses:[7,9],Using:[31,32],With:[31,32],__init__:27,__meta__:9,__name__:[2,26],_cl:9,_id:28,_merg:21,_ref:9,a_modul:27,abl:[9,28,29,31,32],about:[6,8,9,26,27,28,30,31,32],abov:[22,26,31,32],absolut:22,accept:[9,17],access:[6,8,9,29,31,32],accord:[17,31,32],accross:[2,26],accur:[7,9],accuracci:26,accuraci:[0,2,4,10,12,13,26,31,32],accuracy_scor:26,achiev:29,action:[9,28],actual:18,adapt:[31,32],add:[6,7,8,9,27],add_annot:[6,8],add_datarun:[6,8],add_dataset:[6,8],add_ev:[6,8],add_experi:[6,8],add_pipelin:[6,8],add_sign:[6,8],add_signalrun:[6,8],add_templ:[6,8],added:[6,8,9,22],addit:[0,4,6,8,29],addition:29,address:[6,8],adjust:[28,30],admin:[6,8],advanc:17,after:[22,28,29],afterward:[29,31,32],again:[0,4],against:[0,2,4,6,8,15],aggreg:[31,32],ahead:[31,32],algorithm:[10,12],all:[0,2,4,5,6,7,8,9,10,15,22,26,27,28,29,31,32],allow:[5,6,8,9,14,15,22,28,29,31,32],along:22,alpha:[31,32],alreadi:[6,8,9,29,31,32],also:[0,4,6,8,9,18,27,28,29,31,32],alter:[5,31,32],altern:[7,9],although:[31,32],alvarez:25,alwai:[9,19,27],amazon:5,amazonaw:5,among:[31,32],amount:28,analysi:0,analyz:[0,1,2,15,22,28,31,32],ani:[7,9,18,27,29,31,32],annot:[6,8,9],anomal:[9,17,20,22,28,31,32],anomali:[0,2,4,10,12,13,14,15,17,18,20,21,22,26,28],anomaly_pad:22,anoth:[5,22,26,31,32],anyth:[9,27],apart:[6,8],api:[15,17,27],appli:[0,4,15,21,22],applic:[31,32],appreci:27,appropri:27,area:21,arg:[7,9],argument:[6,8,9],arima:[0,4,31,32],around:[9,22],arrai:[17,21,22,26],articl:27,arxiv:22,as_df_:7,assist:7,assocai:9,associ:[6,8,9,27,28],assum:27,attribut:7,audit:[31,32],authent:[6,8,17],authentication_sourc:[6,8],autom:[31,32],automat:[9,17],avail:[2,7,9,26,29],availab:[6,8],averag:[2,20,26],avoid:[31,32],awai:[15,18],azur:[0,4,17],azure_anomaly_detector:[0,16],bad:22,base:[0,2,4,6,8,9,18,19,21,26,27,29,30,31,32],batch_siz:21,becaus:9,been:[0,4,5,20,26,27,29,31,32],befor:[0,4,5,9,15,22,27],behavior:[27,31,32],being:[0,7,15,26,27],belong:[6,8,9,23,28],below:22,benchmark:[0,30,31,32],best:[26,27],better:22,between:[5,10,12,13,14,17,18,22],big:5,binari:14,bit:[9,27],blog:27,bool:[0,2,4,22],both:[6,7,8,26,27,31,32],bottl:30,boundari:20,branch:27,briefli:27,broken:[7,9],brows:[31,32],browser:29,bucket:[5,31,32],budget:28,budget_amount:[9,28],budget_typ:[9,28],bug:30,bugfix:27,build:[0,4,5,27],build_anomaly_interv:20,built:[29,31,32],bumpvers:27,cach:5,calcul:[21,22],call:[0,4,6,8,9,26,27,29,31,32],callabl:[0,15],can:[0,4,6,7,8,9,15,17,21,22,26,27,28,29,31,32],cannot:9,captur:[0,4,9],carl:25,cascad:9,cascade_kwarg:9,cfg:27,chang:[9,22,27,29],check:[7,27],checkout:27,child:7,children:9,chosen:22,classifi:18,classmethod:[0,4,7],clean:9,cli:0,clone:[27,29],code:[6,10,27],collect:[6,8,9,15,28,31,32],column:[0,4,6,8,10,12,13,14,17,28,31,32],com:[5,25,27,31,32],comb:21,combin:[21,22,27],come:[6,8,29,31,32],command:[9,27,29,31,32],comment:[6,8,9,27,28,31,32],commit:27,common:[0,9,10,28],compar:[22,31,32],compat:[7,29],complet:[9,26,31,32],complex:15,complexdatetimefield:[7,9],compli:27,compon:[31,32],compos:[31,32],comput:[0,2,10,12,13,15,20,21,22,26],condit:9,configur:[28,29,31,32],confus:[10,12,13],connect:[6,8,29],consecut:[20,22,26],consequ:27,consid:9,consist:[6,8,9,19,31,32],constant:19,contact:5,contain:[0,2,4,5,6,7,8,9,10,12,13,14,15,17,21,22,26,27,28,29,31,32],context:[9,28],contextu:[0,10,14],contextual_accuraci:[0,2,4,10,12],contextual_confusion_matrix:[10,12],contextual_f1_scor:[0,2,4,10,12],contextual_precis:[0,2,4,10,12],contextual_recal:[0,2,4,10,12],continu:22,contribut:[31,32],control:9,convert:[7,9,14,22],copi:[6,8,27,29],core:[0,15],correspond:[0,2,6,8,15,22,27],cost:22,could:27,count:22,count_abov:22,cover:27,coverag:27,creat:[6,8,9,15,17,23,27,28,29,31,32],created_bi:[6,8,9,28],credit:27,critic:21,critic_smooth_window:21,critic_x_input_shap:21,critic_z_input_shap:21,csail:25,csala:[25,30],csv:[0,5,6,8,15],cuda:2,curat:[31,32],current:[7,9,15,17],custom:9,custom_interv:17,cyclegan:30,daili:17,dask:2,data:[0,4,6,8,10,12,13,14,15,17],data_loc:[6,8,9,28],data_path:5,data_span:26,databas:[6,7,8,9,23,27],datafram:[0,2,4,5,6,8,10,12,13,14,15,26,31,32],datarun:[6,8,9,23],datarun_id:28,dataset:[2,6,8,9],dataset_id:28,date:[7,9,31,32],datetim:[7,9,28],datetimefield:[7,9],dateutil:[7,9],dbref:9,decod:30,default_pipelin:[0,4],defin:[4,7,8,9,14,22,28],delet:[9,28],delta:22,delta_mean:22,delta_std:22,demo:[5,26,31,32],deni:9,denot:[17,22],depend:[9,28,29,31,32],depened:29,derefer:9,dereferenc:9,deriv:[6,8,9],describ:[26,28,31,32],descript:[6,8,27,31,32],descriv:9,detail:[6,8,9,27,28,31,32],detect:[0,2,4,9,10,12,13,15,17,18,20,22,26,28,30],detect_anomali:[0,15,17],detector:[0,16,20],determin:17,detrend:2,dev:[0,4,5,31,32],develop:[6,8,27,31,32],deviat:22,diagram:26,dict:[0,2,4,6,7,8,15,26],dictfield:[7,9],dictionari:[2,6,8,9,26],differ:[0,4,6,8,9,18],dimension:[17,21],direct:9,directli:[0,4,5,6,8,26,31,32],directori:5,distanc:18,distribut:[2,31,32],do_noth:9,doc:27,docstr:27,document:[7,9,26,31,32],doe:[9,14,17,27],doesnotexist:9,dollar:7,domain:[28,31,32],dominguez:25,don:9,done:[27,29],down:9,download:[5,29,31,32],download_demo:5,driven:27,drop:[6,8],drop_databas:[6,8],dtw:21,dtype:[31,32],dummi:[0,4,14,18,19,20,31,32],dure:[0,4,6,8,18,28],dynam:[22,31,32],dyuliu:30,each:[0,2,4,6,8,14,17,20,21,22,26,27,28],eas:7,easier:[27,31,32],easiest:[31,32],easili:[31,32],edg:5,edu:25,effect:[7,9],either:[6,8,14],element:[0,4],els:[10,12],embeddeddocu:9,empti:[6,8,9],encod:30,encoder_input_shap:21,end:[6,8,9,10,12,13,14,17,22,26,28,31,32],end_tim:[9,28],endpoint:17,enhanc:27,enough:29,ensur:7,entir:22,entiti:[6,8,9,28],entri:27,environ:[9,28,31,32],epoch:[21,30,31,32],epsilon:22,equival:[0,4],error:[7,9,21,22,31,32],error_smooth_window:21,especi:9,estim:[0,16],evalu:[0,2,4,15,30],evaluate_pipelin:[0,15,26],even:[7,27,31,32],event:[0,4,6,8,9,30,31,32],event_id:28,event_interact:9,eventinteract:9,everi:27,everytim:9,evolut:[31,32],ewma:22,exact:[31,32],exactli:[0,4],exampl:[6,8,9,17,26,31,32],except:[6,8,9],exclude_:7,execut:[0,4,9,15,23,28,29,31,32],exist:[6,8,9],expect:[10,12,13,18,22,26,28,31,32],experi:[6,8,9,23,31,32],experiment_id:28,expert:[28,31,32],explain:[26,27,31,32],explor:[0,6,23,31,32],express:22,extend:9,extern:[9,28],extra:9,extract:[10,12,13],f1_score:26,fail:[9,27,28],failur:[9,31,32],fals:[0,2,4,5,7,9,10,12,13,20,22],far:[27,31,32],featur:[7,9],feel:27,few:[7,29],field:[6,7,8,9],file:[0,4,6,8,15,27,30,31,32],filenam:[6,8],find:[7,22],find_anomali:22,find_on:7,find_or_insert:7,fine:9,finish:28,first:[0,2,9,15,22,26,30,31,32],fit:[0,4,15,18,19,21,28,31,32],fit_detect:[0,4],fit_pipelin:[0,15],fix:[22,30],fixed_threshold:22,flag:[9,10,12,20,31,32],flip:22,float64:[31,32],fmin:22,focu:[31,32],folder:[5,6,8,27,29,31,32],follow:[0,4,5,6,8,26,27,28,29,31,32],foo:27,forc:9,force_insert:9,foreign:28,fork:27,format:[0,5,6,7,8,9,15],formula:22,found:[5,6,8,9,22,28,29,31,32],frame:[0,4,15],free:[9,27],frequenc:17,frienli:[6,8],from:[0,4,5,6,7,8,9,17,18,19,26,27,28,29,31,32],from_list_points_label:14,from_list_points_timestamp:14,from_pandas_contextu:14,from_pandas_point:14,from_pandas_points_label:14,fsync:9,full:[6,8],fulli:[7,9,31,32],further:[18,27],futur:[6,8],gan:[31,32],gap:14,gener:[2,9,27,28,31,32],generator_input_shap:21,get:[6,7,8,9],get_annot:[6,8],get_datarun:[6,8],get_dataset:[6,8],get_ev:[6,8],get_experi:[6,8],get_outputs_spec:23,get_pipelin:[6,8],get_sign:[6,8],get_signalrun:[6,8],get_statu:7,get_templ:[6,8],getlasterror:9,git:27,github:[27,31,32],githubusernam:27,give:2,given:[0,2,4,5,6,8,9,15,17,19,21,22,26,27,28],good:[22,26,31,32],googl:27,grain:9,granular:17,greatli:27,ground:[0,4,10,12,13,15,21,22,31,32],ground_truth:[0,4,26,31,32],group:[6,8,9,20,28],grow:[31,32],guid:[31,32],hack:27,handl:9,happen:9,has:[0,4,5,6,8,21,26,27,28,29,31,32],have:[0,4,6,8,9,17,20,26,27,28,29,31,32],hector:25,hedb_12:25,help:27,here:[0,4,5,18,19,20,26,27,29,31,32],hid:15,higher:[22,31,32],highest:22,highli:[31,32],histor:[31,32],histori:[27,28,31,32],holdout:2,home:[0,4,5],homepag:[31,32],host:[6,8],hostnam:[6,8],hotmail:25,hourli:17,how:[21,22,26,27,31,32],http:[5,22,29,30,31,32],human:[31,32],hyperparam:[1,6,8],hyperparamet:[0,2,4,6,8,9,15,21,28,31,32],ident:[31,32],identifi:[6,8,14,28,31,32],identitifi:[6,8],ignor:[0,15,31,32],iii:[31,32],imag:[31,32],immedi:29,implement:[9,15,22,26,30],impli:9,improv:[31,32],includ:[9,17,27,28,31,32],increas:[31,32],index:[0,4,6,7,8,17,21,22,28,31],indic:[2,5,6,8,17,20,22,26,27,32],inform:[6,8,9,26,28],initi:[6,8,21],input:[0,4,17,19,21,29],insert:[7,9,28],insert_tim:[7,28],insid:[5,23,27,29,31,32],inspir:[22,31,32],instal:[7,9,27,28,29],instanc:[0,4,6,8,9,15,23,31,32],instert_tim:7,instruct:[29,31,32],integ:[9,17,28,31,32],intend:[18,19,20],interact:[0,4,6,7,8,9,31,32],interest:[31,32],interf:[31,32],interfac:[6,8,29,30],interfer:[31,32],intermediatri:2,internet:29,intersect:26,interv:[0,14,16,17,26,28,30,31,32],invaliddocumenterror:9,invert:22,investig:[31,32],involv:27,issu:[27,30],iter:[17,27,28],iterations_crit:21,its:[0,4,5,6,7,8,9,22,27,28,31,32],json:[0,2,4,6,8,9,15,26,28,31,32],just:27,kalyan:25,keep:[27,31,32],kei:[2,7,17,26,28],kera:[21,31,32],key_has_dollar:7,keyerror:14,keyword:9,kind:27,know:26,knowledg:[31,32],known:[0,2,9,15,26,31,32],kwarg:[7,9,21],lab:[31,32],label:[14,31,32],lambda:21,lambda_rec:21,larger:17,last:[7,27],lastli:22,latent_dim:21,later:[0,2,4,9,15,22,28,31,32],latest:[29,31,32],latest_event_interact:9,layer:21,layers_critic_x:21,layers_critic_z:21,layers_encod:21,layers_gener:21,lazili:9,lazyreferencefield:9,lead:9,leaderboard:26,learn:[0,15,26,27,31,32],learning_r:21,least:[6,8,9,27,31,32],length:[17,22,26],less:17,let:[31,32],librari:[7,9,27],licens:[31,32],like:[6,8,18,19,20,27],lint:27,list:[0,2,4,6,7,8,9,10,12,13,14,15,17,22,26,27,28,31,32],listen:[6,8],listfield:9,littl:[15,27],live:7,load:[0,4,5,6,8,9,15,28,29],load_anomali:[5,31,32],load_csv:5,load_sign:[5,31,32],local:[5,27,29],localhost:[6,8],locat:[2,27,31,32],logfil:24,logger_nam:24,logging_setup:24,login:29,look:[18,19,20,27],low:22,lower:[17,22],lower_threshold:22,lstm:[31,32],lstm_dynamic_threshold:[0,4,26,31,32],lstmtimeseriesregressor:[31,32],machin:[27,29,31,32],mai:[27,31,32],main:[0,2,4,31,32],maintain:[31,32],major:27,make:[5,7,14,22,26,27,29,31,32],manag:[5,9],mandatori:[31,32],mani:[9,27],manual:[6,8],manually_cr:[9,28],manuel:25,mapfield:9,margin:17,mark:[9,14],master:27,match:[6,8,9],matrix:[10,12,13],max:[17,26],max_anomaly_ratio:17,maximum:[6,8,9,10,12,13,18,28],mean:[9,17,19,22,29,30,31,32],mean_24h_lstm:[31,32],meanestim:19,median:[31,32],median_24h_lstm:[31,32],meet:[22,27],merg:[7,21,27],meta:[7,9],metaclass:7,metadata:[9,28],method:[0,4,6,7,8,9,21,27,31,32],metric:[0,2,4,9,15,26,28,30],metrics_loc:[9,28],microsecond:[7,9],microsoft:17,might:[27,31,32],millisecond:[7,9],min:26,min_perc:22,minim:[22,31,32],minimum:[6,8,9,10,12,13,28],minor:27,minut:[17,29],mit:[25,31,32],mixin:7,mkvirtualenv:27,mlblock:[0,4,6,8,15,31,32],mlpipelin:[0,4,6,8,9,15,31,32],mlprimit:[31,32],mock:27,model:[6,7,8,9,17,21,27,28,31,32],model_loc:[9,28],modifi:[5,9],modul:[0,6,10,16,27,31],mongodb:[6,7,8,9],mongodb_config:[6,8],mongoengin:[7,9],monthli:17,more:[0,6,8,15,27,28,31,32],most:[6,8],mount:29,move:22,mult:21,multipl:[6,8,9,21,26,28,31,32],multipleobjectsreturn:9,must:[6,8,9],my_usernam:[6,8],name:[0,2,4,5,6,8,9,15,26,27,28,29,31,32],narrow:27,nasa:[5,26,31,32],ndarrai:[17,21,22],nearest:[7,9],necessari:[9,27],neck:30,need:[6,7,8,9,22,29,31,32],neg:[10,12,13,22],neither:[6,8],never:5,next:[27,31,32],nof:22,non:[17,22],none:[0,1,2,4,5,6,7,8,10,12,13,15,17,22,24,27],nonparametr:[31,32],normal:27,note:[7,9,17,27],notebook:29,notuniqueerror:[6,8],now:[9,27],nullifi:9,num_annot:[9,28],num_ev:[9,28],num_rev:28,number:[9,10,12,13,22,28,31,32],object:[0,4,6,7,8,9,18,19,21,28],objectid:[6,8,9,23,28],observ:[9,10,12,13,28,31,32],obtain:[2,26,31,32],off:9,offici:27,offlin:[29,31,32],old:27,omit:[6,8],onc:[0,4,26,27,29,31,32],one:[0,4,5,6,7,8,9,10,13,14,15,17,21,22,26,27,28,30,31,32],onli:[0,4,6,8,9,17,18,19,20,26,27,29],only_:7,open:[27,31,32],oper:[27,31,32],operationerror:9,optim:21,option:[0,6,8,9,15,18,20,21,22,26,31,32],order:[2,5,6,8,26,29,31,32],orex:[6,8,23],org:[9,22,30],origin:[10,12,13,22,27,31,32],orion:[26,27,28,30],oriondbexplor:[6,8],oriondocu:[7,9],orionexplor:[6,8,23],orionexpor:[6,8],orionmeta:7,other:[5,27,31,32],otherwis:[5,6,8,9],our:[26,27,31,32],out:[22,26],outcom:[31,32],output:[0,4,22,26,29],output_nam:23,output_path:2,outsid:27,over:[9,17,21,28,29,31,32],overal:26,overlap:[10,12,17,22],overlap_s:17,overwrit:9,own:27,owner:9,p8888:29,packag:[5,27,30],pad:17,page:[27,31],pair:[22,26],panda:[0,2,4,5,6,8,10,12,13,14,15,26,31,32],paper:[22,31,32],paramet:[0,2,4,5,6,8,9,10,12,13,14,15,17,21,22,23],parent:7,pars:[7,9],parser:[7,9],part:[5,6,8,27,31,32],parti:27,partit:17,pass:[0,4,6,8,9,10,12,13,14,15,26,27,31,32],password:[6,8],patch:27,path:[0,2,4,5,6,8,15,26,27],pattern:[31,32],pdf:22,pend:7,percentag:22,perform:[0,2,4,9,15,26,28],period:[9,17],permiss:29,phase:[0,4,18],pickl:[0,4,15],pipein:[0,15],pipelin:[0,1,2,4,6,8,9,15,23],pipeline_id:28,pipeline_output:23,pipelinefield:7,pipelines_dir:[0,4],place:[9,27,28],pleas:[6,8,27,31,32],point:[0,9,10,14,21,22,27,29],point_accuraci:[10,13],point_confusion_matrix:[10,13],point_f1_scor:[10,13],point_precis:[10,13],point_recal:[10,13],poor:9,popul:[6,8,9],port:[6,8],portion:22,posit:[10,12,13,21,22],possibl:[0,6,8,15,17,27,29,31,32],post:27,potenti:[9,28],pre:[7,9,31,32],precis:[0,2,4,9,10,12,13,26,31,32],predict:[0,4,19,21,22,31,32],prefix:27,preprocess:[31,32],present:9,prespecifi:2,prevent:9,previou:[17,26,31,32],previous:[0,4,15,26],prevoiusli:26,primari:9,primit:[0,28,30,31,32],print:[31,32],privat:29,probabl:9,proce:[31,32],procedur:[22,31,32],process:[9,27],process_pipeline_output:23,produc:[6,8],program:[6,8],programat:8,project:[6,8,9,27,28,29,30,31,32],proper:[31,32],properli:27,properti:9,proport:[5,22],proportion:5,propos:27,provid:[0,4,6,8,15,31,32],publish:27,pull:[9,29,31,32],purpos:[6,8],push:[27,29],put:27,pypi:[30,31,32],pytest:27,pythiac:25,python:[7,9,15,27,28,29],queri:[6,8],queryset:9,rais:[0,4,6,8,9,14],random:27,randomweightedaverag:21,rang:[14,22,28],rank:[2,26],rare:[31,32],ratio:[17,18],read:[8,27,31,32],readabl:[6,8],readi:[27,29,31,32],readm:[26,30],real:[18,19,20],reason:29,rec:21,rec_error_typ:21,recal:[0,2,4,10,12,13,26,31,32],receiv:[14,29],recent:29,recommend:[31,32],reconstruct:[21,31,32],record:[9,28],recurs:7,reduc:[31,32],refactor:30,refer:[9,18,19,20,27],referenc:9,referencefield:9,regist:[0,4,6,8,9,15,28,31,32],register_delete_rul:9,regression_error:22,relat:[6,9,10,15,28],releas:[30,31,32],rememb:[27,29],remov:[6,8],remove_dot:7,renam:30,repeat:22,replic:[31,32],repo:27,repositori:[26,29,31,32],repres:[9,10,12,28,31,32],represent:[6,8,28],reproduc:[9,27,28,31,32],request:17,requir:[9,14,27,28],resolv:[6,8,27],resourc:17,respons:[0,4,23],restore_dot:7,result:[2,9,22,23,28,31,32],retreiv:[6,8,26],retriev:9,reverse_delete_rul:9,review:[31,32],right:27,root:29,round:[7,9],rule:9,run:[7,9,27,28,31,32],runner:0,safe:[31,32],sala:25,same:[6,8,9,22,31,32],sampl:[20,31,32],sample_weight:26,sandbox:[0,4],sarahmish:30,satellit:[31,32],satisfi:9,save:[0,2,4,9,15,29,30],save_condit:9,save_path:[0,15],saveconditionerror:9,scalabl:[31,32],scenario:[18,19,20,27],schema:[0,6,7,31,32],scheme:27,scikit:26,scipi:[2,22],scope:27,score:[0,2,6,8,9,10,12,13,15,17,21,22,28,30,31,32],score_anomali:[21,30],score_window:21,search:[0,15,31,32],second:[0,4,5,9,31,32],secret_password:[6,8],see:9,seen:18,segment:[10,12],select:[31,32],send:[17,27],sensit:17,separ:[0,15,22,27],sequenc:[17,21,22,26],sequence_s:17,sequenti:[31,32],sequnc:17,seri:[0,4,17,22,26,31,32],serial:[0,4,15],serv:[18,19,20],server:9,session:[6,8],set:[0,4,9,15,17,26,27,28],setup:27,sever:[6,8,9,18,20,27,28,29,31,32],shape:[6,8,21],shape_match:[9,28],shift:22,should:[0,2,9,15,22,26,27,29],show:[29,31,32],showcas:[31,32],sign:7,signal:[0,2,4,5,6,8,9,15,23,26,31,32],signal_id:28,signal_kwarg:9,signalrun:[6,8,9,23,30],signalrun_id:28,signals_path:[6,8],similar:[26,27],simpl:[6,8,15,29],simplest:29,simpli:18,sinc:27,singl:[5,6,8,9,28,31,32],size:[5,17,21,22,30],skew:[31,32],skew_24h_lstm:[26,31,32],skip:9,slice:17,smooth:[21,22],smoothing_window:22,softwar:[9,31,32],software_vers:[9,28],solut:26,solv:9,some:[7,9,27,28,29,31,32],some_method:27,sort:[2,26],sourc:[0,1,2,4,5,6,7,8,9,10,12,13,14,15,17,18,19,20,21,22,23,24,28,29,31,32],source_choic:9,source_manually_cr:9,source_orion:9,source_shape_match:9,spacecraft:[31,32],span:17,special:[31,32],specif:[0,4,6,8,9,15],specifi:[5,9,17,22],split:[2,5,17,27,28],split_sequ:17,stabl:[27,31,32],stai:29,standard:[9,17,22],start:[0,4,6,8,9,10,12,13,14,17,21,22,23,26,28,29,31,32],start_datarun:23,start_signalrun:23,start_tim:[6,8,9,28],statu:[6,7,8,9,27,28,31,32],status_error:7,status_pend:7,status_run:7,status_success:7,std:22,step:[6,8,15,22,27,31,32],still:[28,29],stop:[0,4,9,10,12,14,22,26,28],stop_tim:[6,8,9,28],store:[0,4,5,9,15,22,23,28,31,32],str:[0,2,4,5,6,8,15,17,21,23,26],strictli:[31,32],string:[0,4,6,7,8,9,28],strptime:[7,9],style:27,sub:30,subdocu:28,subpackag:[6,10],subscription_kei:17,subset:[6,8,9,27,28],success:[7,9,28],successfulli:28,suit:27,sum:[9,21,31,32],sum_24h_lstm:[31,32],summar:26,support:[7,9,27],sure:[7,27],syntax:9,system:[26,27,28,29,31,32],tabl:[0,2,6,8,15,26],tadgan:[0,4,16,30,31,32],tag:[6,8,9,27,28,29],tar:29,target:[17,28],target_column:17,techniqu:[31,32],telemanom:[5,26],telemetri:[31,32],templat:[6,8,9],template_id:28,test:[1,2,5,31,32],test_:27,test_a_modul:27,test_data:[31,32],test_error:27,test_orion:27,test_siz:5,test_some_methed_input_non:27,test_some_method_1:27,test_some_method_timeout:27,test_some_method_value_error:27,text:[6,8,9,28],than:[6,8,18,27,31,32],thank:[31,32],thei:[2,26,27,28,31,32],them:[6,7,8,26,27,29,31,32],themselv:[2,22,26],thi:[0,4,5,6,7,8,9,10,15,18,19,20,22,26,27,28,29],thing:[27,31,32],third:[27,31,32],those:[31,32],thought:[31,32],threshold:[18,22,31,32],thresholddetector:18,through:[27,29],time:[7,9,17,21,22,26,28,31,32],time_column:20,timeseri:[0,9,15,26,28],timeseries_anomali:[0,16],timestamp:[0,4,6,8,9,10,12,13,14,21,26,28,31,32],timestamp_column:[5,6,8,9,28],titl:27,to_mongo:7,to_python:7,togeth:[6,7,8,9,20,28],took:[9,28],tool:[17,27,31,32],topleveldocumentmetaclass:7,total:22,track:[31,32],train:[0,1,2,4,5,21,31,32],train_data:[0,4,15,31,32],transform:7,travi:[0,4,5,27],troubleshoot:27,truth:[0,4,10,12,13,15,21,22,26,31,32],tunabl:28,tune:[31,32],tupl:[0,4,5,10,12,13,14,17],turn:9,twice:[31,32],two:[0,4,5,9,10,12,14,22,29,30,31,32],type:[0,2,4,7,9,10,12,13,14,15,17,21,22,28],under:[2,9,28,31,32],underli:[0,4,31,32],unicod:[7,9],union:[0,4,15],uniqu:[6,8,28],unique_key_field:9,unittest:27,unix:[31,32],unset:9,until:9,unusu:22,updat:[9,27],uri:28,usag:[6,7,10,14,15,31,32],use:[0,2,4,6,7,8,9,10,12,15,22,23,26,27,29],use_db_field:7,used:[0,2,4,6,7,8,9,15,17,18,19,20,21,22,27,28,29,31,32],useful:9,user:[6,8,9,28,29],usernam:[6,8,27],uses:[31,32],using:[0,2,4,6,8,9,15,21,23,26,27],usual:[9,28],utc:[7,9],utcnow:[7,9],util:[0,7,10],utilis:[7,9],valid:[7,9,17,27],valu:[0,2,4,5,6,7,8,9,17,18,19,21,22,26,27,28,31,32],value_column:[5,6,8,9,18,19,28],valueerror:[0,4,6,8],vari:[7,9],vector:26,veeramachaneni:25,verbos:[24,31,32],verifi:[0,2,4,17],version:[5,9,27,28,29,31,32],view:27,virtualenv:[27,28,31,32],virtualenvwrapp:27,visibl:[31,32],visual:[0,4,31,32],volunt:27,wai:[9,15,27,29,31,32],wait:9,walk:7,want:[6,8,9,22,27,28,31,32],warn:[31,32],web:[27,31,32],websit:27,weekli:17,weight:[10,12,21],welcom:27,well:[4,5,7,9,28,31,32],were:[9,28,31,32],west:5,what:[9,18,19,20,27],when:[7,9,27,28,30],whenev:27,where:[0,4,6,8,9,14,15,22,27,28,31,32],whether:[0,2,4,9,17,22,27,28],which:[0,4,6,8,9,10,12,15,17,18,19,21,22,23,26,27,28,29,31,32],who:28,whoever:27,whole:[0,4,26],window:[17,21,22],window_s:22,window_size_port:22,window_step_s:22,window_step_size_port:22,within:[5,9,28,29,31,32],without:[0,4,5,6,8,15],work:[5,27,29,31,32],would:[26,27],wrap:9,wrapper:9,write:[9,29],write_concern:9,y_hat:[21,22],yearli:17,you:[7,9,27,29,31,32],your:[17,27,29],your_name_her:27,z_cost:22,z_rang:22,zip:5},titles:["orion package","orion.analysis module","orion.benchmark module","orion.cli module","orion.core module","orion.data module","orion.db package","orion.db.base module","orion.db.explorer module","orion.db.schema module","orion.evaluation package","orion.evaluation.common module","orion.evaluation.contextual module","orion.evaluation.point module","orion.evaluation.utils module","orion.functional module","orion.primitives package","orion.primitives.azure_anomaly_detector module","orion.primitives.detectors module","orion.primitives.estimators module","orion.primitives.intervals module","orion.primitives.tadgan module","orion.primitives.timeseries_anomalies module","orion.runner module","orion.utils module","Credits","Benchmark","Contributing","Database Schema","Docker Usage","History","Orion","Orion"],titleterms:{"function":[15,26],analysi:1,annot:28,anomali:[31,32],avail:[31,32],azure_anomaly_detector:17,base:7,benchmark:[2,26],bug:27,build:29,calcul:26,cli:3,code:29,common:11,content:[31,32],contextu:12,contribut:27,core:4,credit:25,current:[31,32],data:[5,26,31,32],databas:[28,31,32],datarun:28,dataset:[28,31,32],detect:[31,32],detector:18,distribut:29,docker:[29,31,32],document:27,estim:19,evalu:[10,11,12,13,14,26,31,32],event:28,experi:28,explor:8,featur:27,feedback:27,field:28,file:29,fix:27,format:[31,32],get:27,guidelin:27,histori:30,imag:29,implement:27,indic:31,input:[26,31,32],instal:[31,32],interact:28,interv:20,jupyt:29,label:26,leaderboard:[31,32],librari:[31,32],load:[31,32],modul:[1,2,3,4,5,7,8,9,11,12,13,14,15,17,18,19,20,21,22,23,24],mongodb:[31,32],orion:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,29,31,32],output:[31,32],overview:[31,32],packag:[0,6,10,16],perform:[31,32],pip:[31,32],pipelin:[26,28,31,32],point:13,primit:[16,17,18,19,20,21,22],process:26,pull:27,python:[31,32],quickstart:[31,32],reformat:26,registri:29,releas:27,report:27,request:27,requir:[29,31,32],run:29,runner:23,schema:[9,28],score:26,signal:28,signalrun:28,start:27,submit:27,submodul:[0,6,10,16],subpackag:0,tabl:[31,32],tadgan:21,templat:28,test:27,thi:[31,32],timeseries_anomali:22,tip:27,type:27,unit:27,usag:29,use:[31,32],used:26,using:[29,31,32],util:[14,24],weight:26,without:29,workflow:27,write:27,your:[31,32]}})