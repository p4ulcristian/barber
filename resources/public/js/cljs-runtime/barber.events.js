goog.provide('barber.events');
goog.require('cljs.core');
goog.require('barber.db');
goog.require('re_frame.core');
goog.require('cljs.spec.alpha');
goog.require('barber.sente');
goog.require('ajax.core');
goog.require('taoensso.sente');
goog.require('cljs.reader');
barber.events.get_day_from_date = (function barber$events$get_day_from_date(year,month,day){
var date = (new Date(year,(month - (1)),day));
var day_code = date.getDay();
var G__14689 = day_code;
switch (G__14689) {
case (1):
return new cljs.core.Keyword(null,"monday","monday",-1107743655);

break;
case (2):
return new cljs.core.Keyword(null,"tuesday","tuesday",299624080);

break;
case (3):
return new cljs.core.Keyword(null,"wednesday","wednesday",-2061677647);

break;
case (4):
return new cljs.core.Keyword(null,"thursday","thursday",1681780767);

break;
case (5):
return new cljs.core.Keyword(null,"friday","friday",459046165);

break;
case (6):
return new cljs.core.Keyword(null,"saturday","saturday",-1342278228);

break;
case (0):
return new cljs.core.Keyword(null,"sunday","sunday",1381770036);

break;
default:
return new cljs.core.Keyword(null,"unknown","unknown",-935977881);

}
});
barber.events.ajax_get = (function barber$events$ajax_get(p__14690){
var map__14695 = p__14690;
var map__14695__$1 = (((((!((map__14695 == null))))?(((((map__14695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14695):map__14695);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14695__$1,new cljs.core.Keyword(null,"url","url",276297046));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14695__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14695__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_handler], null)], 0));
});
barber.events.ajax_post = (function barber$events$ajax_post(p__14713){
var map__14717 = p__14713;
var map__14717__$1 = (((((!((map__14717 == null))))?(((((map__14717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14717):map__14717);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14717__$1,new cljs.core.Keyword(null,"url","url",276297046));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14717__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14717__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14717__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_handler], null)], 0));
});
barber.events.chsk_send = (function barber$events$chsk_send(p__14733){
var map__14735 = p__14733;
var map__14735__$1 = (((((!((map__14735 == null))))?(((((map__14735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14735):map__14735);
var event_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14735__$1,new cljs.core.Keyword(null,"event-key","event-key",2089664830));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14735__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14735__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var G__14748 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_key,data], null);
var G__14749 = (8000);
var G__14750 = ((function (G__14748,G__14749,map__14735,map__14735__$1,event_key,data,callback){
return (function (reply){
if(taoensso.sente.cb_success_QMARK_(reply)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(reply) : callback.call(null,reply));
} else {
return console.log("Sente error: ",reply);
}
});})(G__14748,G__14749,map__14735,map__14735__$1,event_key,data,callback))
;
return (barber.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 ? barber.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(G__14748,G__14749,G__14750) : barber.sente.chsk_send_BANG_.call(null,G__14748,G__14749,G__14750));
});
/**
 * Throws an exception if `db` doesn't match the Spec `a-spec`.
 */
barber.events.check_and_throw = (function barber$events$check_and_throw(a_spec,db){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(a_spec,db)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["spec check failed: ",cljs.spec.alpha.explain_str(a_spec,db)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
barber.events.check_spec_interceptor = (function (){var G__14765 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(barber.events.check_and_throw,new cljs.core.Keyword("barber.db","db","barber.db/db",-2134741513));
return (re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(G__14765) : re_frame.core.after.call(null,G__14765));
})();
barber.events.__GT_local_store = (re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(barber.db.todos__GT_local_store) : re_frame.core.after.call(null,barber.db.todos__GT_local_store));
barber.events.todo_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.events.check_spec_interceptor,(function (){var G__14766 = new cljs.core.Keyword(null,"todos","todos",630308868);
return (re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__14766) : re_frame.core.path.call(null,G__14766));
})(),barber.events.__GT_local_store], null);
/**
 * Returns the next todo id.
 *   Assumes todos are sorted.
 *   Returns one more than the current largest id.
 */
barber.events.allocate_next_id = (function barber$events$allocate_next_id(todos){
var G__14774 = cljs.core.last(cljs.core.keys(todos));
var fexpr__14773 = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0));
return (fexpr__14773.cljs$core$IFn$_invoke$arity$1 ? fexpr__14773.cljs$core$IFn$_invoke$arity$1(G__14774) : fexpr__14773.call(null,G__14774));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-to-db","add-to-db",218374651),(function (db,p__14781){
var vec__14782 = p__14781;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14782,(0),null);
var the_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14782,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db,the_map], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-modal","set-modal",312437679),(function (db,p__14789){
var vec__14790 = p__14789;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14790,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14790,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"modal","modal",-1031880850),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"modal","modal",-1031880850).cljs$core$IFn$_invoke$arity$1(db),new_state], 0)));
}));
barber.events.insert_at_index = (function barber$events$insert_at_index(idx,coll,value){
var vec__14796 = cljs.core.split_at(idx,coll);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14796,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14796,(1),null);
var new_vec = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(start,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([end], 0));
return new_vec;
});
barber.events.remove_at_index = (function barber$events$remove_at_index(coll,pos){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),pos),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,(pos + (1)))));
});
barber.events.anim_to = (function barber$events$anim_to(element,timeout,the_map){
return TweenMax.to(element,timeout,cljs.core.clj__GT_js(the_map));
});
barber.events.modify_position_in_vec = (function barber$events$modify_position_in_vec(coll,index_first,index_second){
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(coll,index_first);
return barber.events.insert_at_index(index_second,barber.events.remove_at_index(coll,index_first),value);
});
barber.events.reindex = (function barber$events$reindex(coll){
return cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__14802_SHARP_,p2__14801_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__14801_SHARP_,new cljs.core.Keyword(null,"priority","priority",1431093715),p1__14802_SHARP_);
}),coll));
});
barber.events.new_order = (function barber$events$new_order(coll,type,event_object){
var event_map = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(event_object,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__14804 = event_map;
var map__14804__$1 = (((((!((map__14804 == null))))?(((((map__14804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14804):map__14804);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14804__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var destination = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14804__$1,new cljs.core.Keyword(null,"destination","destination",-253872483));
var source_id = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(source);
var destination_id = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(destination);
if(cljs.core.truth_(destination_id)){
return cljs.core.vec(barber.events.reindex(barber.events.modify_position_in_vec(coll,source_id,destination_id)));
} else {
return coll;
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("termekek","get","termekek/get",-1432052085),(function (cofx,p__14806){
var vec__14807 = p__14806;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14807,(0),null);
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14807,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("termekek","get","termekek/get",-1432052085),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"number","number",1570378438),(20),new cljs.core.Keyword(null,"skip","skip",602715391),(20)], null),new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__14807,_,the_key){
return (function (){
return window.alert("hello");
});})(vec__14807,_,the_key))
], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modify-local-item","modify-local-item",-29576753),(function (db,p__14810){
var vec__14811 = p__14810;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14811,(0),null);
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14811,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14811,(2),null);
var to_change = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14811,(3),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14811,(4),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [the_key,cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__14811,_,the_key,id,to_change,value){
return (function (idx,val){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(val))){
return idx;
} else {
return null;
}
});})(vec__14811,_,the_key,id,to_change,value))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,the_key))),to_change], null),value);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modify-item","modify-item",-1391581039),(function (cofx,p__14816){
var vec__14817 = p__14816;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14817,(0),null);
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14817,(1),null);
var to_change = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14817,(2),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14817,(3),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14817,(4),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),(function (){var G__14822 = the_key;
var G__14822__$1 = (((G__14822 instanceof cljs.core.Keyword))?G__14822.fqn:null);
switch (G__14822__$1) {
case "employees":
return new cljs.core.Keyword("employees","modify-item","employees/modify-item",1246763006);

break;
case "services":
return new cljs.core.Keyword("services","modify-item","services/modify-item",-1856685965);

break;
default:
return new cljs.core.Keyword(null,"error","error",-978969032);

}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(the_key),new cljs.core.Keyword(null,"to-change","to-change",419117832),to_change,new cljs.core.Keyword(null,"_id","_id",-789960287),id,new cljs.core.Keyword(null,"value","value",305978217),value], null),new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__14817,_,the_key,to_change,id,value){
return (function (){
var G__14823 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modify-local-item","modify-local-item",-29576753),the_key,id,to_change,value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14823) : re_frame.core.dispatch.call(null,G__14823));
});})(vec__14817,_,the_key,to_change,id,value))
], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modify-employee-service","modify-employee-service",773866527),(function (cofx,p__14824){
var vec__14825 = p__14824;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14825,(0),null);
var emp_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14825,(1),null);
var modified_service = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14825,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("employees","modify-employee-service","employees/modify-employee-service",241595804),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modified-service","modified-service",223830893),modified_service,new cljs.core.Keyword(null,"emp-id","emp-id",-536192223),emp_id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__14825,_,emp_id,modified_service){
return (function (){
return console.log("hello there",emp_id,modified_service);
});})(vec__14825,_,emp_id,modified_service))
], null)], null);
}));
barber.events.key_plus_str = (function barber$events$key_plus_str(the_key,the_str){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest([cljs.core.str.cljs$core$IFn$_invoke$arity$1(the_key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(the_str)].join(''))));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-positions","restore-positions",-362463111),(function (db,p__14828){
var vec__14829 = p__14828;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14829,(0),null);
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14829,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,the_key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,barber.events.key_plus_str(the_key,"-last-order")));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drag-end","drag-end",-1884248888),(function (db,p__14832){
var vec__14833 = p__14832;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14833,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14833,(1),null);
var event_object = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14833,(2),null);
var modal_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14833,(3),null);
var event_map = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(event_object,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__14836 = event_map;
var map__14836__$1 = (((((!((map__14836 == null))))?(((((map__14836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14836):map__14836);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14836__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var destination = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14836__$1,new cljs.core.Keyword(null,"destination","destination",-253872483));
var source_id = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(source);
var destination_id = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(destination);
var G__14839 = (function (){var fexpr__14840 = ((function (event_map,map__14836,map__14836__$1,source,destination,source_id,destination_id,vec__14833,_,type,event_object,modal_content){
return (function (the_db){
if(cljs.core.truth_((function (){var and__4120__auto__ = destination_id;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(source_id,destination_id);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_db,new cljs.core.Keyword(null,"modal","modal",-1031880850),modal_content);
} else {
return the_db;
}
});})(event_map,map__14836,map__14836__$1,source,destination,source_id,destination_id,vec__14833,_,type,event_object,modal_content))
;
return fexpr__14840(db);
})();
var fexpr__14838 = ((function (G__14839,event_map,map__14836,map__14836__$1,source,destination,source_id,destination_id,vec__14833,_,type,event_object,modal_content){
return (function (the_db){
if(cljs.core.truth_(destination_id)){
cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_db,barber.events.key_plus_str(type,"-last-order"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,type));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_db,type,barber.events.new_order(cljs.core.vec(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,type)),type,event_object));
} else {
return the_db;
}
});})(G__14839,event_map,map__14836,map__14836__$1,source,destination,source_id,destination_id,vec__14833,_,type,event_object,modal_content))
;
return fexpr__14838(G__14839);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),(function (db,p__14841){
var vec__14842 = p__14841;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14842,(0),null);
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14842,(1),null);
var the_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14842,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,the_key,the_map);
}));
var G__14845_15107 = new cljs.core.Keyword(null,"ajax","ajax",814345549);
var G__14846_15108 = ((function (G__14845_15107){
return (function (config){
var G__14847 = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(config);
var G__14847__$1 = (((G__14847 instanceof cljs.core.Keyword))?G__14847.fqn:null);
switch (G__14847__$1) {
case "get":
return barber.events.ajax_get(config);

break;
case "post":
return barber.events.ajax_post(config);

break;
default:
return console.log(":ajax :method does not exist.");

}
});})(G__14845_15107))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__14845_15107,G__14846_15108) : re_frame.core.reg_fx.call(null,G__14845_15107,G__14846_15108));
var G__14848_15112 = new cljs.core.Keyword(null,"chsk","chsk",-863703081);
var G__14849_15113 = ((function (G__14848_15112){
return (function (params){
return barber.events.chsk_send(params);
});})(G__14848_15112))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__14848_15112,G__14849_15113) : re_frame.core.reg_fx.call(null,G__14848_15112,G__14849_15113));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-server-time","ws-server-time",-618838447),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),cljs.core.PersistentArrayMap.EMPTY], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-calendar-data","add-calendar-data",-302772189),(function (db,p__14851){
var vec__14852 = p__14851;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14852,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14852,(1),null);
var read_data = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(data);
var data_with_id = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (read_data,vec__14852,_,data){
return (function (p1__14850_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.second(p1__14850_SHARP_),new cljs.core.Keyword(null,"reservation-id","reservation-id",720153329),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__14850_SHARP_)));
});})(read_data,vec__14852,_,data))
,read_data);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"calendar-data","calendar-data",-253814436),data_with_id);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove-calendar-event","remove-calendar-event",-484550367),(function (cofx,p__14855){
var vec__14856 = p__14855;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14856,(0),null);
var res_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14856,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("calendar","remove-event","calendar/remove-event",263563058),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx)),new cljs.core.Keyword(null,"reservation-id","reservation-id",720153329),res_id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__14856,_,res_id){
return (function (){
var G__14859 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-to-db","add-to-db",218374651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reservation-editor","reservation-editor",1851449854),null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14859) : re_frame.core.dispatch.call(null,G__14859));
});})(vec__14856,_,res_id))
], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-modify-calendar-event","add-modify-calendar-event",1130389042),(function (cofx,p__14860){
var vec__14861 = p__14860;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14861,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14861,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("calendar","add-modify-event","calendar/add-modify-event",-1450875564),new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__14861,_,data){
return (function (){
var G__14864 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-to-db","add-to-db",218374651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reservation-editor","reservation-editor",1851449854),null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14864) : re_frame.core.dispatch.call(null,G__14864));
});})(vec__14861,_,data))
], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-reservations-and-brakes","get-reservations-and-brakes",-1670062908),(function (cofx,p__14867){
var vec__14869 = p__14867;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14869,(0),null);
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14869,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("calendar","get-reservations-and-brakes","calendar/get-reservations-and-brakes",-1827540478),new cljs.core.Keyword(null,"data","data",-232669377),date,new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__14869,_,date){
return (function (p1__14866_SHARP_){
var G__14872_15122 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-loader","dec-loader",2142016857)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14872_15122) : re_frame.core.dispatch.call(null,G__14872_15122));

var G__14873_15123 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"reservations","reservations",1033801659),new cljs.core.Keyword(null,"reservations","reservations",1033801659).cljs$core$IFn$_invoke$arity$1(p1__14866_SHARP_)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14873_15123) : re_frame.core.dispatch.call(null,G__14873_15123));

var G__14874 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"brakes","brakes",963017523),new cljs.core.Keyword(null,"brakes","brakes",963017523).cljs$core$IFn$_invoke$arity$1(p1__14866_SHARP_)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14874) : re_frame.core.dispatch.call(null,G__14874));
});})(vec__14869,_,date))
], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-employees","get-employees",-858911296),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("employees","get-all","employees/get-all",1068465330),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (p1__14875_SHARP_){
var G__14876_15126 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-loader","dec-loader",2142016857)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14876_15126) : re_frame.core.dispatch.call(null,G__14876_15126));

var G__14877_15127 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"employees","employees",1002695450),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"priority","priority",1431093715),p1__14875_SHARP_))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14877_15127) : re_frame.core.dispatch.call(null,G__14877_15127));

var G__14878 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"employees-last-order","employees-last-order",-2139480776),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"priority","priority",1431093715),p1__14875_SHARP_)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14878) : re_frame.core.dispatch.call(null,G__14878));
})], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-services","get-services",358609850),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("services","get-all","services/get-all",179758999),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (p1__14879_SHARP_){
var G__14880_15131 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-loader","dec-loader",2142016857)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14880_15131) : re_frame.core.dispatch.call(null,G__14880_15131));

var G__14881_15132 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"services","services",970478783),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"priority","priority",1431093715),p1__14879_SHARP_))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14881_15132) : re_frame.core.dispatch.call(null,G__14881_15132));

var G__14882 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"services-last-order","services-last-order",-2073794937),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"priority","priority",1431093715),p1__14879_SHARP_)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14882) : re_frame.core.dispatch.call(null,G__14882));
})], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-brake-types","get-brake-types",-525164371),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("brakes","get-brake-types","brakes/get-brake-types",-1830828779),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (p1__14883_SHARP_){
var G__14884_15135 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-loader","dec-loader",2142016857)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14884_15135) : re_frame.core.dispatch.call(null,G__14884_15135));

var G__14885 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"brake-types","brake-types",2060811971),p1__14883_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14885) : re_frame.core.dispatch.call(null,G__14885));
})], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove-brake-type","remove-brake-type",-1316197461),(function (_,p__14886){
var vec__14887 = p__14886;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14887,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14887,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("brakes","remove-brake-type","brakes/remove-brake-type",1790793315),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__14887,___$1,id){
return (function (){
var G__14890_15136 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-loader","dec-loader",2142016857)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14890_15136) : re_frame.core.dispatch.call(null,G__14890_15136));

var G__14891 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-brake-type-local","remove-brake-type-local",-1797531871),id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14891) : re_frame.core.dispatch.call(null,G__14891));
});})(vec__14887,___$1,id))
], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-brake-type","add-brake-type",1129805860),(function (_,p__14893){
var vec__14894 = p__14893;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14894,(0),null);
var braketype = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14894,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("brakes","add-brake-type","brakes/add-brake-type",361119356),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"braketype","braketype",-208750986),braketype], null),new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__14894,___$1,braketype){
return (function (p1__14892_SHARP_){
var G__14897_15137 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-loader","dec-loader",2142016857)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14897_15137) : re_frame.core.dispatch.call(null,G__14897_15137));

var G__14898 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-brake-type-local","add-brake-type-local",-346970807),p1__14892_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14898) : re_frame.core.dispatch.call(null,G__14898));
});})(vec__14894,___$1,braketype))
], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove-brake-type-local","remove-brake-type-local",-1797531871),(function (db,p__14900){
var vec__14901 = p__14900;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14901,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14901,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"brake-types","brake-types",2060811971),cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (vec__14901,_,id){
return (function (p1__14899_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(p1__14899_SHARP_))){
return p1__14899_SHARP_;
} else {
return null;
}
});})(vec__14901,_,id))
,new cljs.core.Keyword(null,"brake-types","brake-types",2060811971).cljs$core$IFn$_invoke$arity$1(db))));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-brake-type-local","add-brake-type-local",-346970807),(function (db,p__14904){
var vec__14905 = p__14904;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14905,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14905,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"brake-types","brake-types",2060811971),cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"brake-types","brake-types",2060811971).cljs$core$IFn$_invoke$arity$1(db),data)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modify-reservation","modify-reservation",-1711909658),(function (db,p__14910){
var vec__14912 = p__14910;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14912,(0),null);
var reservation_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14912,(1),null);
var with_this = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14912,(2),null);
var the_res = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__14912,_,reservation_id,with_this){
return (function (p1__14908_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reservation_id,new cljs.core.Keyword(null,"reservation-id","reservation-id",720153329).cljs$core$IFn$_invoke$arity$1(p1__14908_SHARP_));
});})(vec__14912,_,reservation_id,with_this))
,new cljs.core.Keyword(null,"reservations","reservations",1033801659).cljs$core$IFn$_invoke$arity$1(db)));
var without_the_res = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (the_res,vec__14912,_,reservation_id,with_this){
return (function (p1__14909_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__14909_SHARP_,the_res);
});})(the_res,vec__14912,_,reservation_id,with_this))
,new cljs.core.Keyword(null,"reservations","reservations",1033801659).cljs$core$IFn$_invoke$arity$1(db)));
var new_res = (cljs.core.truth_(the_res)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([the_res,with_this], 0)):without_the_res);
var with_new_res = cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(without_the_res,new_res));
if(cljs.core.truth_(reservation_id)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(the_res,new_res)){
var G__14916_15139 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-modal","set-modal",312437679),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"content","content",15833224),"Biztos m\u00F3dos\u00EDtod?",new cljs.core.Keyword(null,"no-fn","no-fn",-353517111),((function (the_res,without_the_res,new_res,with_new_res,vec__14912,_,reservation_id,with_this){
return (function (){
var G__14918 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-to-db","add-to-db",218374651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reservations","reservations",1033801659),new cljs.core.Keyword(null,"reservations","reservations",1033801659).cljs$core$IFn$_invoke$arity$1(db)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14918) : re_frame.core.dispatch.call(null,G__14918));
});})(the_res,without_the_res,new_res,with_new_res,vec__14912,_,reservation_id,with_this))
,new cljs.core.Keyword(null,"yes-fn","yes-fn",-193560811),((function (the_res,without_the_res,new_res,with_new_res,vec__14912,_,reservation_id,with_this){
return (function (){
var G__14920 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-modify-calendar-event","add-modify-calendar-event",1130389042),new_res], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14920) : re_frame.core.dispatch.call(null,G__14920));
});})(the_res,without_the_res,new_res,with_new_res,vec__14912,_,reservation_id,with_this))
], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14916_15139) : re_frame.core.dispatch.call(null,G__14916_15139));
} else {
}
} else {
var G__14922_15141 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-modal","set-modal",312437679),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"content","content",15833224),"Biztos hozz\u00E1adod?",new cljs.core.Keyword(null,"no-fn","no-fn",-353517111),((function (the_res,without_the_res,new_res,with_new_res,vec__14912,_,reservation_id,with_this){
return (function (){
var G__14923 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-to-db","add-to-db",218374651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reservations","reservations",1033801659),new cljs.core.Keyword(null,"reservations","reservations",1033801659).cljs$core$IFn$_invoke$arity$1(db)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14923) : re_frame.core.dispatch.call(null,G__14923));
});})(the_res,without_the_res,new_res,with_new_res,vec__14912,_,reservation_id,with_this))
,new cljs.core.Keyword(null,"yes-fn","yes-fn",-193560811),((function (the_res,without_the_res,new_res,with_new_res,vec__14912,_,reservation_id,with_this){
return (function (){
var G__14925 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-modify-calendar-event","add-modify-calendar-event",1130389042),with_this], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14925) : re_frame.core.dispatch.call(null,G__14925));
});})(the_res,without_the_res,new_res,with_new_res,vec__14912,_,reservation_id,with_this))
], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14922_15141) : re_frame.core.dispatch.call(null,G__14922_15141));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"reservations","reservations",1033801659),with_new_res);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-brakes-on-dates","get-brakes-on-dates",1468232405),(function (_,p__14928){
var vec__14929 = p__14928;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14929,(0),null);
var dates = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14929,(1),null);
var employees = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14929,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("brakes","get-brakes-on-dates","brakes/get-brakes-on-dates",-1439593347),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dates","dates",-1600154075),dates,new cljs.core.Keyword(null,"employees","employees",1002695450),employees], null),new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__14929,___$1,dates,employees){
return (function (p1__14927_SHARP_){
var G__14933_15142 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-loader","dec-loader",2142016857)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14933_15142) : re_frame.core.dispatch.call(null,G__14933_15142));

var G__14935 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"brakes-on-dates","brakes-on-dates",-1585186918),p1__14927_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14935) : re_frame.core.dispatch.call(null,G__14935));
});})(vec__14929,___$1,dates,employees))
], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-clients","get-clients",-794960615),(function (cofx,p__14937){
var vec__14939 = p__14937;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14939,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"clients-skip","clients-skip",72078062),((20) + (cljs.core.truth_(new cljs.core.Keyword(null,"clients-skip","clients-skip",72078062).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx)))?new cljs.core.Keyword(null,"clients-skip","clients-skip",72078062).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx)):(0)))], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("clients","get-some","clients/get-some",1926466251),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip","skip",602715391),(cljs.core.truth_(new cljs.core.Keyword(null,"clients-skip","clients-skip",72078062).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx)))?new cljs.core.Keyword(null,"clients-skip","clients-skip",72078062).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx)):(0))], null),new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__14939,_){
return (function (p1__14936_SHARP_){
var G__14944 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"clients","clients",1436018090),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clients","clients",1436018090).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx)),p1__14936_SHARP_)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14944) : re_frame.core.dispatch.call(null,G__14944));
});})(vec__14939,_))
], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-clients-count","get-clients-count",401348888),(function (cofx,p__14948){
var vec__14949 = p__14948;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14949,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("clients","get-count","clients/get-count",987096167),new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__14949,_){
return (function (p1__14945_SHARP_){
var G__14952 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"clients-count","clients-count",-190617829),p1__14945_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14952) : re_frame.core.dispatch.call(null,G__14952));
});})(vec__14949,_))
], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-brakes-to-dates","add-brakes-to-dates",-570394383),(function (cofx,p__14954){
var vec__14955 = p__14954;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14955,(0),null);
var dates = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14955,(1),null);
var employees = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14955,(2),null);
var brake_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14955,(3),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("brakes","add-brakes-to-dates","brakes/add-brakes-to-dates",-21949543),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dates","dates",-1600154075),dates,new cljs.core.Keyword(null,"employees","employees",1002695450),employees,new cljs.core.Keyword(null,"brakes","brakes",963017523),new cljs.core.Keyword(null,"brakes","brakes",963017523).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__14955,_,dates,employees,brake_id){
return (function (p1__14953_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(p1__14953_SHARP_),brake_id);
});})(vec__14955,_,dates,employees,brake_id))
,new cljs.core.Keyword(null,"brake-types","brake-types",2060811971).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx)))))], null),new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__14955,_,dates,employees,brake_id){
return (function (){
var G__14960_15146 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-loader","dec-loader",2142016857)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14960_15146) : re_frame.core.dispatch.call(null,G__14960_15146));

var G__14961 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-brakes-on-dates","get-brakes-on-dates",1468232405),dates,employees], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14961) : re_frame.core.dispatch.call(null,G__14961));
});})(vec__14955,_,dates,employees,brake_id))
], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-user-data","get-user-data",-1003256191),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("user","get","user/get",1694132314),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (p1__14962_SHARP_){
var G__14963_15147 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-loader","dec-loader",2142016857)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14963_15147) : re_frame.core.dispatch.call(null,G__14963_15147));

var G__14964 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"user-data","user-data",2143823568),p1__14962_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14964) : re_frame.core.dispatch.call(null,G__14964));
})], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-new","add-new",-1399275206),(function (_,p__14965){
var vec__14966 = p__14965;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14966,(0),null);
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14966,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("employee-service","add","employee-service/add",222246753),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-key","the-key",1477428790),cljs.core.name(the_key)], null),new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__14966,___$1,the_key){
return (function (){
var G__14969 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["get-",cljs.core.name(the_key)].join(''))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14969) : re_frame.core.dispatch.call(null,G__14969));
});})(vec__14966,___$1,the_key))
], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove-employee-service","remove-employee-service",-1235467788),(function (_,p__14970){
var vec__14971 = p__14970;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14971,(0),null);
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14971,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14971,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("employee-service","remove","employee-service/remove",-135295152),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"the-key","the-key",1477428790),cljs.core.name(the_key),new cljs.core.Keyword(null,"_id","_id",-789960287),id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__14971,___$1,the_key,id){
return (function (){
var G__14974 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["get-",cljs.core.name(the_key)].join(''))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14974) : re_frame.core.dispatch.call(null,G__14974));
});})(vec__14971,___$1,the_key,id))
], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-opening-hours","get-opening-hours",2118398207),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("shop","opening-hours","shop/opening-hours",1892307679),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (p1__14975_SHARP_){
var G__14976_15165 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-loader","dec-loader",2142016857)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14976_15165) : re_frame.core.dispatch.call(null,G__14976_15165));

var G__14977 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"opening-hours","opening-hours",1887464433),p1__14975_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14977) : re_frame.core.dispatch.call(null,G__14977));
})], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-calendar-data","get-calendar-data",1380390569),(function (db,p__14978){
var vec__14980 = p__14978;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14980,(0),null);
var G__14984_15167 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-opening-hours","get-opening-hours",2118398207)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14984_15167) : re_frame.core.dispatch.call(null,G__14984_15167));

var G__14985_15168 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-user-data","get-user-data",-1003256191)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14985_15168) : re_frame.core.dispatch.call(null,G__14985_15168));

var G__14986_15169 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-services","get-services",358609850)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14986_15169) : re_frame.core.dispatch.call(null,G__14986_15169));

var G__14987_15170 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-employees","get-employees",-858911296)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14987_15170) : re_frame.core.dispatch.call(null,G__14987_15170));

var G__14988_15171 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-server-time","get-server-time",-1141640499)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14988_15171) : re_frame.core.dispatch.call(null,G__14988_15171));

var G__14989_15172 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-brake-types","get-brake-types",-525164371)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14989_15172) : re_frame.core.dispatch.call(null,G__14989_15172));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"netflix-counter-init","netflix-counter-init",448533285),(function (db,p__14993){
var vec__14994 = p__14993;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14994,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14994,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"netflix-counter","netflix-counter",880669636),id], null),(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"netflix-counter","netflix-counter",880669636),(function (db,p__14998){
var vec__15000 = p__14998;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15000,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15000,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"netflix-counter","netflix-counter",880669636),id], null),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"netflix-counter","netflix-counter",880669636),id], null)) + (1)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dec-loader","dec-loader",2142016857),(function (db,p__15004){
var vec__15005 = p__15004;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15005,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"loader-count","loader-count",-219063182).cljs$core$IFn$_invoke$arity$1(db))){
var element_15173 = document.getElementById("x-loader");
element_15173.classList.add("animated-hide");

window.setTimeout(((function (element_15173,vec__15005,_){
return (function (){
return (element_15173.style["display"] = "none");
});})(element_15173,vec__15005,_))
,(1500));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loader-count","loader-count",-219063182),(new cljs.core.Keyword(null,"loader-count","loader-count",-219063182).cljs$core$IFn$_invoke$arity$1(db) - (1)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396),(function (db,p__15009){
var vec__15010 = p__15009;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15010,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loader-count","loader-count",-219063182),(new cljs.core.Keyword(null,"loader-count","loader-count",-219063182).cljs$core$IFn$_invoke$arity$1(db) + (1)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"select-date","select-date",-180125912),(function (db,p__15014){
var vec__15015 = p__15014;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15015,(0),null);
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15015,(1),null);
var G__15018_15175 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-reservations-and-brakes","get-reservations-and-brakes",-1670062908),date], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15018_15175) : re_frame.core.dispatch.call(null,G__15018_15175));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"reservations","reservations",1033801659),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"brakes","brakes",963017523),null,new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548),date,new cljs.core.Keyword(null,"selected-day","selected-day",1859078310),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(barber.events.get_day_from_date,clojure.string.split.cljs$core$IFn$_invoke$arity$2(date,/-/))], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-server-time","get-server-time",-1141640499),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"/server-time",new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__15019_SHARP_){
var date = cljs.core.first(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__15019_SHARP_));
var G__15020_15176 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"today","today",945271563),date], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15020_15176) : re_frame.core.dispatch.call(null,G__15020_15176));

var G__15021 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-date","select-date",-180125912),date], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15021) : re_frame.core.dispatch.call(null,G__15021));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return console.log("Failed to get server-time");
})], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"post-request","post-request",-1735378278),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/post-request",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback-data","callback-data",-820784828),"data"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__15022_SHARP_){
var G__15024 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-to-db","add-to-db",218374651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-request","post-request",-1735378278),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(p1__15022_SHARP_)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__15024) : re_frame.core.dispatch.call(null,G__15024));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__15023_SHARP_){
return console.log(["Failed to post request: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15023_SHARP_)].join(''));
})], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-to-mongo","add-to-mongo",1484084037),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/add-to-mongo",new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
return UIkit.notification("Added item to database");
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__15025_SHARP_){
return console.log(["Failed to add to mongo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15025_SHARP_)].join(''));
})], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-user","add-user",-1150614693),(function (_,p__15028){
var vec__15029 = p__15028;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15029,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15029,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/add-user",new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__15029,___$1,params){
return (function (p1__15026_SHARP_){
return UIkit.notification(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15026_SHARP_));
});})(vec__15029,___$1,params))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__15029,___$1,params){
return (function (p1__15027_SHARP_){
return console.log(["Failed to add user ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15027_SHARP_)].join(''));
});})(vec__15029,___$1,params))
], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15032 = new cljs.core.Keyword(null,"local-store-todos","local-store-todos",-1573636976);
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__15032) : re_frame.core.inject_cofx.call(null,G__15032));
})(),barber.events.check_spec_interceptor], null),(function (p__15033,_){
var map__15034 = p__15033;
var map__15034__$1 = (((((!((map__15034 == null))))?(((((map__15034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15034):map__15034);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15034__$1,new cljs.core.Keyword(null,"db","db",993250759));
var local_store_todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15034__$1,new cljs.core.Keyword(null,"local-store-todos","local-store-todos",-1573636976));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(barber.db.default_db,new cljs.core.Keyword(null,"todos","todos",630308868),local_store_todos,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loader-count","loader-count",-219063182),(0),new cljs.core.Keyword(null,"netflix-counter","netflix-counter",880669636),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null),new cljs.core.Keyword(null,"sidebar-open?","sidebar-open?",-1099774467),true,new cljs.core.Keyword(null,"actual-page","actual-page",1366885368),new cljs.core.Keyword(null,"calendar","calendar",62308146)], 0))], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.events.check_spec_interceptor], null),(function (db,p__15037){
var vec__15038 = p__15037;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15038,(0),null);
var new_filter_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15038,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"showing","showing",798009604),new_filter_kw);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"add-todo","add-todo",-1657891401),barber.events.todo_interceptors,(function (todos,p__15043){
var vec__15044 = p__15043;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15044,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15044,(1),null);
var id = barber.events.allocate_next_id(todos);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(todos,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),text,new cljs.core.Keyword(null,"done","done",-889844188),false], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"toggle-done","toggle-done",-77894994),barber.events.todo_interceptors,(function (todos,p__15047){
var vec__15048 = p__15047;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15048,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15048,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(todos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"done","done",-889844188)], null),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"save","save",1850079149),barber.events.todo_interceptors,(function (todos,p__15051){
var vec__15052 = p__15051;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15052,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15052,(1),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15052,(2),null);
return cljs.core.assoc_in(todos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null),title);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"delete-todo","delete-todo",-134034723),barber.events.todo_interceptors,(function (todos,p__15057){
var vec__15058 = p__15057;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15058,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15058,(1),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(todos,id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961),barber.events.todo_interceptors,(function (todos,_){
var done_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.vals(todos)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,todos,done_ids);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"complete-all-toggle","complete-all-toggle",1745771156),barber.events.todo_interceptors,(function (todos,_){
var new_done = cljs.core.not_every_QMARK_(new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.vals(todos));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (new_done){
return (function (p1__15061_SHARP_,p2__15062_SHARP_){
return cljs.core.assoc_in(p1__15061_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__15062_SHARP_,new cljs.core.Keyword(null,"done","done",-889844188)], null),new_done);
});})(new_done))
,todos,cljs.core.keys(todos));
}));

//# sourceMappingURL=barber.events.js.map
