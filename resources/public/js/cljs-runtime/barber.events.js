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
var G__74278 = day_code;
switch (G__74278) {
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
barber.events.ajax_get = (function barber$events$ajax_get(p__74279){
var map__74280 = p__74279;
var map__74280__$1 = (((((!((map__74280 == null))))?(((((map__74280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74280):map__74280);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74280__$1,new cljs.core.Keyword(null,"url","url",276297046));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74280__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74280__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_handler], null)], 0));
});
barber.events.ajax_post = (function barber$events$ajax_post(p__74282){
var map__74283 = p__74282;
var map__74283__$1 = (((((!((map__74283 == null))))?(((((map__74283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74283):map__74283);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74283__$1,new cljs.core.Keyword(null,"url","url",276297046));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74283__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74283__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74283__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_handler], null)], 0));
});
barber.events.chsk_send = (function barber$events$chsk_send(p__74285){
var map__74286 = p__74285;
var map__74286__$1 = (((((!((map__74286 == null))))?(((((map__74286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74286):map__74286);
var event_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74286__$1,new cljs.core.Keyword(null,"event-key","event-key",2089664830));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74286__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74286__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var G__74288 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_key,data], null);
var G__74289 = (8000);
var G__74290 = ((function (G__74288,G__74289,map__74286,map__74286__$1,event_key,data,callback){
return (function (reply){
if(taoensso.sente.cb_success_QMARK_(reply)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(reply) : callback.call(null,reply));
} else {
return console.log("Sente error: ",reply);
}
});})(G__74288,G__74289,map__74286,map__74286__$1,event_key,data,callback))
;
return (barber.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 ? barber.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(G__74288,G__74289,G__74290) : barber.sente.chsk_send_BANG_.call(null,G__74288,G__74289,G__74290));
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
barber.events.check_spec_interceptor = (function (){var G__74291 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(barber.events.check_and_throw,new cljs.core.Keyword("barber.db","db","barber.db/db",-2134741513));
return (re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(G__74291) : re_frame.core.after.call(null,G__74291));
})();
barber.events.__GT_local_store = (re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(barber.db.todos__GT_local_store) : re_frame.core.after.call(null,barber.db.todos__GT_local_store));
barber.events.todo_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.events.check_spec_interceptor,(function (){var G__74292 = new cljs.core.Keyword(null,"todos","todos",630308868);
return (re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__74292) : re_frame.core.path.call(null,G__74292));
})(),barber.events.__GT_local_store], null);
/**
 * Returns the next todo id.
 *   Assumes todos are sorted.
 *   Returns one more than the current largest id.
 */
barber.events.allocate_next_id = (function barber$events$allocate_next_id(todos){
var G__74294 = cljs.core.last(cljs.core.keys(todos));
var fexpr__74293 = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0));
return (fexpr__74293.cljs$core$IFn$_invoke$arity$1 ? fexpr__74293.cljs$core$IFn$_invoke$arity$1(G__74294) : fexpr__74293.call(null,G__74294));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-to-db","add-to-db",218374651),(function (db,p__74295){
var vec__74296 = p__74295;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74296,(0),null);
var the_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74296,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db,the_map], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-modal","set-modal",312437679),(function (db,p__74299){
var vec__74300 = p__74299;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74300,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74300,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"modal","modal",-1031880850),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"modal","modal",-1031880850).cljs$core$IFn$_invoke$arity$1(db),new_state], 0)));
}));
barber.events.insert_at_index = (function barber$events$insert_at_index(idx,coll,value){
var vec__74303 = cljs.core.split_at(idx,coll);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74303,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74303,(1),null);
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
return cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__74307_SHARP_,p2__74306_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__74306_SHARP_,new cljs.core.Keyword(null,"priority","priority",1431093715),p1__74307_SHARP_);
}),coll));
});
barber.events.new_order = (function barber$events$new_order(coll,type,event_object){
var event_map = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(event_object,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__74308 = event_map;
var map__74308__$1 = (((((!((map__74308 == null))))?(((((map__74308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74308):map__74308);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74308__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var destination = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74308__$1,new cljs.core.Keyword(null,"destination","destination",-253872483));
var source_id = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(source);
var destination_id = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(destination);
if(cljs.core.truth_(destination_id)){
return cljs.core.vec(barber.events.reindex(barber.events.modify_position_in_vec(coll,source_id,destination_id)));
} else {
return coll;
}
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modify-positions","modify-positions",1855295881),(function (cofx,p__74311){
var vec__74312 = p__74311;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74312,(0),null);
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74312,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),(function (){var G__74315 = the_key;
var G__74315__$1 = (((G__74315 instanceof cljs.core.Keyword))?G__74315.fqn:null);
switch (G__74315__$1) {
case "employees":
return new cljs.core.Keyword("employees","modify-positions","employees/modify-positions",491487248);

break;
case "services":
return new cljs.core.Keyword("services","modify-positions","services/modify-positions",541630759);

break;
default:
return new cljs.core.Keyword(null,"error","error",-978969032);

}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(the_key),new cljs.core.Keyword(null,"new-order","new-order",-240427159),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__74312,_,the_key){
return (function (p1__74310_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"_id","_id",-789960287),new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(p1__74310_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(p1__74310_SHARP_)], 0));
});})(vec__74312,_,the_key))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),the_key))], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modify-local-item","modify-local-item",-29576753),(function (db,p__74316){
var vec__74317 = p__74316;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74317,(0),null);
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74317,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74317,(2),null);
var to_change = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74317,(3),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74317,(4),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [the_key,cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__74317,_,the_key,id,to_change,value){
return (function (idx,val){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(val))){
return idx;
} else {
return null;
}
});})(vec__74317,_,the_key,id,to_change,value))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,the_key))),to_change], null),value);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modify-item","modify-item",-1391581039),(function (cofx,p__74320){
var vec__74321 = p__74320;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74321,(0),null);
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74321,(1),null);
var to_change = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74321,(2),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74321,(3),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74321,(4),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),(function (){var G__74324 = the_key;
var G__74324__$1 = (((G__74324 instanceof cljs.core.Keyword))?G__74324.fqn:null);
switch (G__74324__$1) {
case "employees":
return new cljs.core.Keyword("employees","modify-item","employees/modify-item",1246763006);

break;
case "services":
return new cljs.core.Keyword("services","modify-item","services/modify-item",-1856685965);

break;
default:
return new cljs.core.Keyword(null,"error","error",-978969032);

}
})(),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name(the_key),new cljs.core.Keyword(null,"to-change","to-change",419117832),to_change,new cljs.core.Keyword(null,"_id","_id",-789960287),id,new cljs.core.Keyword(null,"value","value",305978217),value], null),new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__74321,_,the_key,to_change,id,value){
return (function (){
var G__74325 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modify-local-item","modify-local-item",-29576753),the_key,id,to_change,value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74325) : re_frame.core.dispatch.call(null,G__74325));
});})(vec__74321,_,the_key,to_change,id,value))
], null)], null);
}));
barber.events.key_plus_str = (function barber$events$key_plus_str(the_key,the_str){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest([cljs.core.str.cljs$core$IFn$_invoke$arity$1(the_key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(the_str)].join(''))));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restore-positions","restore-positions",-362463111),(function (db,p__74326){
var vec__74327 = p__74326;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74327,(0),null);
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74327,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,the_key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,barber.events.key_plus_str(the_key,"-last-order")));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drag-end","drag-end",-1884248888),(function (db,p__74330){
var vec__74331 = p__74330;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74331,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74331,(1),null);
var event_object = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74331,(2),null);
var modal_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74331,(3),null);
var event_map = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(event_object,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__74334 = event_map;
var map__74334__$1 = (((((!((map__74334 == null))))?(((((map__74334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74334):map__74334);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74334__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var destination = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74334__$1,new cljs.core.Keyword(null,"destination","destination",-253872483));
var source_id = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(source);
var destination_id = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(destination);
var G__74337 = (function (){var fexpr__74338 = ((function (event_map,map__74334,map__74334__$1,source,destination,source_id,destination_id,vec__74331,_,type,event_object,modal_content){
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
});})(event_map,map__74334,map__74334__$1,source,destination,source_id,destination_id,vec__74331,_,type,event_object,modal_content))
;
return fexpr__74338(db);
})();
var fexpr__74336 = ((function (G__74337,event_map,map__74334,map__74334__$1,source,destination,source_id,destination_id,vec__74331,_,type,event_object,modal_content){
return (function (the_db){
if(cljs.core.truth_(destination_id)){
cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_db,barber.events.key_plus_str(type,"-last-order"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,type));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_db,type,barber.events.new_order(cljs.core.vec(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,type)),type,event_object));
} else {
return the_db;
}
});})(G__74337,event_map,map__74334,map__74334__$1,source,destination,source_id,destination_id,vec__74331,_,type,event_object,modal_content))
;
return fexpr__74336(G__74337);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),(function (db,p__74339){
var vec__74340 = p__74339;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74340,(0),null);
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74340,(1),null);
var the_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74340,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,the_key,the_map);
}));
var G__74343_74535 = new cljs.core.Keyword(null,"ajax","ajax",814345549);
var G__74344_74536 = ((function (G__74343_74535){
return (function (config){
var G__74345 = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(config);
var G__74345__$1 = (((G__74345 instanceof cljs.core.Keyword))?G__74345.fqn:null);
switch (G__74345__$1) {
case "get":
return barber.events.ajax_get(config);

break;
case "post":
return barber.events.ajax_post(config);

break;
default:
return console.log(":ajax :method does not exist.");

}
});})(G__74343_74535))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__74343_74535,G__74344_74536) : re_frame.core.reg_fx.call(null,G__74343_74535,G__74344_74536));
var G__74346_74538 = new cljs.core.Keyword(null,"chsk","chsk",-863703081);
var G__74347_74539 = ((function (G__74346_74538){
return (function (params){
return barber.events.chsk_send(params);
});})(G__74346_74538))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__74346_74538,G__74347_74539) : re_frame.core.reg_fx.call(null,G__74346_74538,G__74347_74539));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-server-time","ws-server-time",-618838447),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),cljs.core.PersistentArrayMap.EMPTY], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-calendar-data","add-calendar-data",-302772189),(function (db,p__74349){
var vec__74350 = p__74349;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74350,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74350,(1),null);
var read_data = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(data);
var data_with_id = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (read_data,vec__74350,_,data){
return (function (p1__74348_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.second(p1__74348_SHARP_),new cljs.core.Keyword(null,"reservation-id","reservation-id",720153329),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__74348_SHARP_)));
});})(read_data,vec__74350,_,data))
,read_data);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"calendar-data","calendar-data",-253814436),data_with_id);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove-calendar-event","remove-calendar-event",-484550367),(function (cofx,p__74353){
var vec__74354 = p__74353;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74354,(0),null);
var res_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74354,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("calendar","remove-event","calendar/remove-event",263563058),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx)),new cljs.core.Keyword(null,"reservation-id","reservation-id",720153329),res_id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__74354,_,res_id){
return (function (){
var G__74357 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-to-db","add-to-db",218374651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reservation-editor","reservation-editor",1851449854),null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74357) : re_frame.core.dispatch.call(null,G__74357));
});})(vec__74354,_,res_id))
], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-modify-calendar-event","add-modify-calendar-event",1130389042),(function (cofx,p__74358){
var vec__74359 = p__74358;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74359,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74359,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("calendar","add-modify-event","calendar/add-modify-event",-1450875564),new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__74359,_,data){
return (function (){
var G__74362 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-to-db","add-to-db",218374651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reservation-editor","reservation-editor",1851449854),null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74362) : re_frame.core.dispatch.call(null,G__74362));
});})(vec__74359,_,data))
], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-reservations-and-brakes","get-reservations-and-brakes",-1670062908),(function (cofx,p__74364){
var vec__74365 = p__74364;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74365,(0),null);
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74365,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("calendar","get-reservations-and-brakes","calendar/get-reservations-and-brakes",-1827540478),new cljs.core.Keyword(null,"data","data",-232669377),date,new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__74365,_,date){
return (function (p1__74363_SHARP_){
var G__74368_74540 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-loader","dec-loader",2142016857)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74368_74540) : re_frame.core.dispatch.call(null,G__74368_74540));

var G__74369_74541 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"reservations","reservations",1033801659),new cljs.core.Keyword(null,"reservations","reservations",1033801659).cljs$core$IFn$_invoke$arity$1(p1__74363_SHARP_)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74369_74541) : re_frame.core.dispatch.call(null,G__74369_74541));

var G__74370 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"brakes","brakes",963017523),new cljs.core.Keyword(null,"brakes","brakes",963017523).cljs$core$IFn$_invoke$arity$1(p1__74363_SHARP_)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74370) : re_frame.core.dispatch.call(null,G__74370));
});})(vec__74365,_,date))
], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-employees","get-employees",-858911296),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("employees","get-all","employees/get-all",1068465330),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (p1__74371_SHARP_){
var G__74372_74542 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-loader","dec-loader",2142016857)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74372_74542) : re_frame.core.dispatch.call(null,G__74372_74542));

var G__74373_74543 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"employees","employees",1002695450),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"priority","priority",1431093715),p1__74371_SHARP_))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74373_74543) : re_frame.core.dispatch.call(null,G__74373_74543));

var G__74374 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"employees-last-order","employees-last-order",-2139480776),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"priority","priority",1431093715),p1__74371_SHARP_)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74374) : re_frame.core.dispatch.call(null,G__74374));
})], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-services","get-services",358609850),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("services","get-all","services/get-all",179758999),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (p1__74375_SHARP_){
var G__74376_74544 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-loader","dec-loader",2142016857)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74376_74544) : re_frame.core.dispatch.call(null,G__74376_74544));

var G__74377_74545 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"services","services",970478783),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"priority","priority",1431093715),p1__74375_SHARP_))], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74377_74545) : re_frame.core.dispatch.call(null,G__74377_74545));

var G__74378 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"services-last-order","services-last-order",-2073794937),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"priority","priority",1431093715),p1__74375_SHARP_)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74378) : re_frame.core.dispatch.call(null,G__74378));
})], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-brake-types","get-brake-types",-525164371),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("brakes","get-brake-types","brakes/get-brake-types",-1830828779),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (p1__74379_SHARP_){
var G__74380_74546 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-loader","dec-loader",2142016857)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74380_74546) : re_frame.core.dispatch.call(null,G__74380_74546));

var G__74381 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"brake-types","brake-types",2060811971),p1__74379_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74381) : re_frame.core.dispatch.call(null,G__74381));
})], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove-brake-type","remove-brake-type",-1316197461),(function (_,p__74382){
var vec__74383 = p__74382;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74383,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74383,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("brakes","remove-brake-type","brakes/remove-brake-type",1790793315),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__74383,___$1,id){
return (function (){
var G__74386_74547 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-loader","dec-loader",2142016857)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74386_74547) : re_frame.core.dispatch.call(null,G__74386_74547));

var G__74387 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-brake-type-local","remove-brake-type-local",-1797531871),id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74387) : re_frame.core.dispatch.call(null,G__74387));
});})(vec__74383,___$1,id))
], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-brake-type","add-brake-type",1129805860),(function (_,p__74389){
var vec__74390 = p__74389;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74390,(0),null);
var braketype = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74390,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("brakes","add-brake-type","brakes/add-brake-type",361119356),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"braketype","braketype",-208750986),braketype], null),new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__74390,___$1,braketype){
return (function (p1__74388_SHARP_){
var G__74393_74548 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-loader","dec-loader",2142016857)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74393_74548) : re_frame.core.dispatch.call(null,G__74393_74548));

var G__74394 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-brake-type-local","add-brake-type-local",-346970807),p1__74388_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74394) : re_frame.core.dispatch.call(null,G__74394));
});})(vec__74390,___$1,braketype))
], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove-brake-type-local","remove-brake-type-local",-1797531871),(function (db,p__74396){
var vec__74397 = p__74396;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74397,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74397,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"brake-types","brake-types",2060811971),cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (vec__74397,_,id){
return (function (p1__74395_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(p1__74395_SHARP_))){
return p1__74395_SHARP_;
} else {
return null;
}
});})(vec__74397,_,id))
,new cljs.core.Keyword(null,"brake-types","brake-types",2060811971).cljs$core$IFn$_invoke$arity$1(db))));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-brake-type-local","add-brake-type-local",-346970807),(function (db,p__74400){
var vec__74401 = p__74400;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74401,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74401,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"brake-types","brake-types",2060811971),cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"brake-types","brake-types",2060811971).cljs$core$IFn$_invoke$arity$1(db),data)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modify-reservation","modify-reservation",-1711909658),(function (db,p__74406){
var vec__74407 = p__74406;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74407,(0),null);
var reservation_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74407,(1),null);
var with_this = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74407,(2),null);
var the_res = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__74407,_,reservation_id,with_this){
return (function (p1__74404_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reservation_id,new cljs.core.Keyword(null,"reservation-id","reservation-id",720153329).cljs$core$IFn$_invoke$arity$1(p1__74404_SHARP_));
});})(vec__74407,_,reservation_id,with_this))
,new cljs.core.Keyword(null,"reservations","reservations",1033801659).cljs$core$IFn$_invoke$arity$1(db)));
var without_the_res = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (the_res,vec__74407,_,reservation_id,with_this){
return (function (p1__74405_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__74405_SHARP_,the_res);
});})(the_res,vec__74407,_,reservation_id,with_this))
,new cljs.core.Keyword(null,"reservations","reservations",1033801659).cljs$core$IFn$_invoke$arity$1(db)));
var new_res = (cljs.core.truth_(the_res)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([the_res,with_this], 0)):without_the_res);
var with_new_res = cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(without_the_res,new_res));
if(cljs.core.truth_(reservation_id)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(the_res,new_res)){
var G__74410_74549 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-modal","set-modal",312437679),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"content","content",15833224),"Biztos m\u00F3dos\u00EDtod?",new cljs.core.Keyword(null,"no-fn","no-fn",-353517111),((function (the_res,without_the_res,new_res,with_new_res,vec__74407,_,reservation_id,with_this){
return (function (){
var G__74411 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-to-db","add-to-db",218374651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reservations","reservations",1033801659),new cljs.core.Keyword(null,"reservations","reservations",1033801659).cljs$core$IFn$_invoke$arity$1(db)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74411) : re_frame.core.dispatch.call(null,G__74411));
});})(the_res,without_the_res,new_res,with_new_res,vec__74407,_,reservation_id,with_this))
,new cljs.core.Keyword(null,"yes-fn","yes-fn",-193560811),((function (the_res,without_the_res,new_res,with_new_res,vec__74407,_,reservation_id,with_this){
return (function (){
var G__74412 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-modify-calendar-event","add-modify-calendar-event",1130389042),new_res], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74412) : re_frame.core.dispatch.call(null,G__74412));
});})(the_res,without_the_res,new_res,with_new_res,vec__74407,_,reservation_id,with_this))
], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74410_74549) : re_frame.core.dispatch.call(null,G__74410_74549));
} else {
}
} else {
var G__74413_74550 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-modal","set-modal",312437679),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"content","content",15833224),"Biztos hozz\u00E1adod?",new cljs.core.Keyword(null,"no-fn","no-fn",-353517111),((function (the_res,without_the_res,new_res,with_new_res,vec__74407,_,reservation_id,with_this){
return (function (){
var G__74414 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-to-db","add-to-db",218374651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reservations","reservations",1033801659),new cljs.core.Keyword(null,"reservations","reservations",1033801659).cljs$core$IFn$_invoke$arity$1(db)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74414) : re_frame.core.dispatch.call(null,G__74414));
});})(the_res,without_the_res,new_res,with_new_res,vec__74407,_,reservation_id,with_this))
,new cljs.core.Keyword(null,"yes-fn","yes-fn",-193560811),((function (the_res,without_the_res,new_res,with_new_res,vec__74407,_,reservation_id,with_this){
return (function (){
var G__74415 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-modify-calendar-event","add-modify-calendar-event",1130389042),with_this], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74415) : re_frame.core.dispatch.call(null,G__74415));
});})(the_res,without_the_res,new_res,with_new_res,vec__74407,_,reservation_id,with_this))
], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74413_74550) : re_frame.core.dispatch.call(null,G__74413_74550));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"reservations","reservations",1033801659),with_new_res);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-brakes-on-dates","get-brakes-on-dates",1468232405),(function (_,p__74417){
var vec__74418 = p__74417;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74418,(0),null);
var dates = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74418,(1),null);
var employees = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74418,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("brakes","get-brakes-on-dates","brakes/get-brakes-on-dates",-1439593347),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dates","dates",-1600154075),dates,new cljs.core.Keyword(null,"employees","employees",1002695450),employees], null),new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__74418,___$1,dates,employees){
return (function (p1__74416_SHARP_){
var G__74421_74551 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-loader","dec-loader",2142016857)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74421_74551) : re_frame.core.dispatch.call(null,G__74421_74551));

var G__74422 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"brakes-on-dates","brakes-on-dates",-1585186918),p1__74416_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74422) : re_frame.core.dispatch.call(null,G__74422));
});})(vec__74418,___$1,dates,employees))
], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-clients","get-clients",-794960615),(function (cofx,p__74424){
var vec__74425 = p__74424;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74425,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"clients-skip","clients-skip",72078062),((20) + (cljs.core.truth_(new cljs.core.Keyword(null,"clients-skip","clients-skip",72078062).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx)))?new cljs.core.Keyword(null,"clients-skip","clients-skip",72078062).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx)):(0)))], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("clients","get-some","clients/get-some",1926466251),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip","skip",602715391),(cljs.core.truth_(new cljs.core.Keyword(null,"clients-skip","clients-skip",72078062).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx)))?new cljs.core.Keyword(null,"clients-skip","clients-skip",72078062).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx)):(0))], null),new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__74425,_){
return (function (p1__74423_SHARP_){
var G__74428 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"clients","clients",1436018090),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clients","clients",1436018090).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx)),p1__74423_SHARP_)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74428) : re_frame.core.dispatch.call(null,G__74428));
});})(vec__74425,_))
], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-clients-count","get-clients-count",401348888),(function (cofx,p__74430){
var vec__74431 = p__74430;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74431,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("clients","get-count","clients/get-count",987096167),new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__74431,_){
return (function (p1__74429_SHARP_){
var G__74434 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"clients-count","clients-count",-190617829),p1__74429_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74434) : re_frame.core.dispatch.call(null,G__74434));
});})(vec__74431,_))
], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-brakes-to-dates","add-brakes-to-dates",-570394383),(function (cofx,p__74436){
var vec__74437 = p__74436;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74437,(0),null);
var dates = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74437,(1),null);
var employees = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74437,(2),null);
var brake_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74437,(3),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("brakes","add-brakes-to-dates","brakes/add-brakes-to-dates",-21949543),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dates","dates",-1600154075),dates,new cljs.core.Keyword(null,"employees","employees",1002695450),employees,new cljs.core.Keyword(null,"brakes","brakes",963017523),new cljs.core.Keyword(null,"brakes","brakes",963017523).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__74437,_,dates,employees,brake_id){
return (function (p1__74435_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(p1__74435_SHARP_),brake_id);
});})(vec__74437,_,dates,employees,brake_id))
,new cljs.core.Keyword(null,"brake-types","brake-types",2060811971).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx)))))], null),new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__74437,_,dates,employees,brake_id){
return (function (){
var G__74440_74552 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-loader","dec-loader",2142016857)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74440_74552) : re_frame.core.dispatch.call(null,G__74440_74552));

var G__74441 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-brakes-on-dates","get-brakes-on-dates",1468232405),dates,employees], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74441) : re_frame.core.dispatch.call(null,G__74441));
});})(vec__74437,_,dates,employees,brake_id))
], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-user-data","get-user-data",-1003256191),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("user","get","user/get",1694132314),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (p1__74442_SHARP_){
var G__74443_74553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-loader","dec-loader",2142016857)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74443_74553) : re_frame.core.dispatch.call(null,G__74443_74553));

var G__74444 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"user-data","user-data",2143823568),p1__74442_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74444) : re_frame.core.dispatch.call(null,G__74444));
})], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-new","add-new",-1399275206),(function (_,p__74445){
var vec__74446 = p__74445;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74446,(0),null);
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74446,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("employee-service","add","employee-service/add",222246753),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"the-key","the-key",1477428790),cljs.core.name(the_key)], null),new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__74446,___$1,the_key){
return (function (){
var G__74449 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["get-",cljs.core.name(the_key)].join(''))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74449) : re_frame.core.dispatch.call(null,G__74449));
});})(vec__74446,___$1,the_key))
], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove-employee-service","remove-employee-service",-1235467788),(function (_,p__74450){
var vec__74451 = p__74450;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74451,(0),null);
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74451,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74451,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("employee-service","add","employee-service/add",222246753),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"the-key","the-key",1477428790),cljs.core.name(the_key),new cljs.core.Keyword(null,"_id","_id",-789960287),id], null),new cljs.core.Keyword(null,"callback","callback",-705136228),((function (vec__74451,___$1,the_key,id){
return (function (){
var G__74454 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["get-",cljs.core.name(the_key)].join(''))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74454) : re_frame.core.dispatch.call(null,G__74454));
});})(vec__74451,___$1,the_key,id))
], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-opening-hours","get-opening-hours",2118398207),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-key","event-key",2089664830),new cljs.core.Keyword("shop","opening-hours","shop/opening-hours",1892307679),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (p1__74455_SHARP_){
var G__74456_74554 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-loader","dec-loader",2142016857)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74456_74554) : re_frame.core.dispatch.call(null,G__74456_74554));

var G__74457 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"opening-hours","opening-hours",1887464433),p1__74455_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74457) : re_frame.core.dispatch.call(null,G__74457));
})], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-calendar-data","get-calendar-data",1380390569),(function (db,p__74458){
var vec__74459 = p__74458;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74459,(0),null);
var G__74462_74555 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-opening-hours","get-opening-hours",2118398207)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74462_74555) : re_frame.core.dispatch.call(null,G__74462_74555));

var G__74463_74556 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-user-data","get-user-data",-1003256191)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74463_74556) : re_frame.core.dispatch.call(null,G__74463_74556));

var G__74464_74557 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-services","get-services",358609850)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74464_74557) : re_frame.core.dispatch.call(null,G__74464_74557));

var G__74465_74558 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-employees","get-employees",-858911296)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74465_74558) : re_frame.core.dispatch.call(null,G__74465_74558));

var G__74466_74559 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-server-time","get-server-time",-1141640499)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74466_74559) : re_frame.core.dispatch.call(null,G__74466_74559));

var G__74467_74560 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-brake-types","get-brake-types",-525164371)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74467_74560) : re_frame.core.dispatch.call(null,G__74467_74560));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"netflix-counter-init","netflix-counter-init",448533285),(function (db,p__74468){
var vec__74469 = p__74468;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74469,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74469,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"netflix-counter","netflix-counter",880669636),id], null),(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"netflix-counter","netflix-counter",880669636),(function (db,p__74472){
var vec__74473 = p__74472;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74473,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74473,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"netflix-counter","netflix-counter",880669636),id], null),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"netflix-counter","netflix-counter",880669636),id], null)) + (1)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dec-loader","dec-loader",2142016857),(function (db,p__74476){
var vec__74477 = p__74476;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74477,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"loader-count","loader-count",-219063182).cljs$core$IFn$_invoke$arity$1(db))){
var element_74561 = document.getElementById("x-loader");
element_74561.classList.add("animated-hide");

window.setTimeout(((function (element_74561,vec__74477,_){
return (function (){
return (element_74561.style["display"] = "none");
});})(element_74561,vec__74477,_))
,(1500));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loader-count","loader-count",-219063182),(new cljs.core.Keyword(null,"loader-count","loader-count",-219063182).cljs$core$IFn$_invoke$arity$1(db) - (1)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396),(function (db,p__74480){
var vec__74481 = p__74480;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74481,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loader-count","loader-count",-219063182),(new cljs.core.Keyword(null,"loader-count","loader-count",-219063182).cljs$core$IFn$_invoke$arity$1(db) + (1)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"select-date","select-date",-180125912),(function (db,p__74484){
var vec__74485 = p__74484;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74485,(0),null);
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74485,(1),null);
var G__74488_74562 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-reservations-and-brakes","get-reservations-and-brakes",-1670062908),date], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74488_74562) : re_frame.core.dispatch.call(null,G__74488_74562));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"reservations","reservations",1033801659),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"brakes","brakes",963017523),null,new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548),date,new cljs.core.Keyword(null,"selected-day","selected-day",1859078310),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(barber.events.get_day_from_date,clojure.string.split.cljs$core$IFn$_invoke$arity$2(date,/-/))], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-server-time","get-server-time",-1141640499),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"/server-time",new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__74489_SHARP_){
var date = cljs.core.first(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__74489_SHARP_));
var G__74490_74563 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"today","today",945271563),date], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74490_74563) : re_frame.core.dispatch.call(null,G__74490_74563));

var G__74491 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-date","select-date",-180125912),date], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74491) : re_frame.core.dispatch.call(null,G__74491));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (){
return console.log("Failed to get server-time");
})], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"post-request","post-request",-1735378278),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/post-request",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"callback-data","callback-data",-820784828),"data"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__74492_SHARP_){
var G__74494 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-to-db","add-to-db",218374651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-request","post-request",-1735378278),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(p1__74492_SHARP_)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__74494) : re_frame.core.dispatch.call(null,G__74494));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__74493_SHARP_){
return console.log(["Failed to post request: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__74493_SHARP_)].join(''));
})], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-to-mongo","add-to-mongo",1484084037),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/add-to-mongo",new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
return UIkit.notification("Added item to database");
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__74495_SHARP_){
return console.log(["Failed to add to mongo: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__74495_SHARP_)].join(''));
})], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-user","add-user",-1150614693),(function (_,p__74498){
var vec__74499 = p__74498;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74499,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74499,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/add-user",new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"handler","handler",-195596612),((function (vec__74499,___$1,params){
return (function (p1__74496_SHARP_){
return UIkit.notification(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__74496_SHARP_));
});})(vec__74499,___$1,params))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (vec__74499,___$1,params){
return (function (p1__74497_SHARP_){
return console.log(["Failed to add user ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__74497_SHARP_)].join(''));
});})(vec__74499,___$1,params))
], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__74502 = new cljs.core.Keyword(null,"local-store-todos","local-store-todos",-1573636976);
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__74502) : re_frame.core.inject_cofx.call(null,G__74502));
})(),barber.events.check_spec_interceptor], null),(function (p__74503,_){
var map__74504 = p__74503;
var map__74504__$1 = (((((!((map__74504 == null))))?(((((map__74504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74504):map__74504);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74504__$1,new cljs.core.Keyword(null,"db","db",993250759));
var local_store_todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74504__$1,new cljs.core.Keyword(null,"local-store-todos","local-store-todos",-1573636976));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(barber.db.default_db,new cljs.core.Keyword(null,"todos","todos",630308868),local_store_todos,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loader-count","loader-count",-219063182),(0),new cljs.core.Keyword(null,"netflix-counter","netflix-counter",880669636),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null),new cljs.core.Keyword(null,"sidebar-open?","sidebar-open?",-1099774467),true,new cljs.core.Keyword(null,"actual-page","actual-page",1366885368),new cljs.core.Keyword(null,"calendar","calendar",62308146)], 0))], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"set-showing","set-showing",-429468401),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.events.check_spec_interceptor], null),(function (db,p__74506){
var vec__74507 = p__74506;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74507,(0),null);
var new_filter_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74507,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"showing","showing",798009604),new_filter_kw);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"add-todo","add-todo",-1657891401),barber.events.todo_interceptors,(function (todos,p__74510){
var vec__74511 = p__74510;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74511,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74511,(1),null);
var id = barber.events.allocate_next_id(todos);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(todos,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),text,new cljs.core.Keyword(null,"done","done",-889844188),false], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"toggle-done","toggle-done",-77894994),barber.events.todo_interceptors,(function (todos,p__74514){
var vec__74515 = p__74514;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74515,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74515,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(todos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"done","done",-889844188)], null),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"save","save",1850079149),barber.events.todo_interceptors,(function (todos,p__74518){
var vec__74519 = p__74518;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74519,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74519,(1),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74519,(2),null);
return cljs.core.assoc_in(todos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null),title);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"delete-todo","delete-todo",-134034723),barber.events.todo_interceptors,(function (todos,p__74522){
var vec__74523 = p__74522;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74523,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74523,(1),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(todos,id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961),barber.events.todo_interceptors,(function (todos,_){
var done_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.vals(todos)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,todos,done_ids);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"complete-all-toggle","complete-all-toggle",1745771156),barber.events.todo_interceptors,(function (todos,_){
var new_done = cljs.core.not_every_QMARK_(new cljs.core.Keyword(null,"done","done",-889844188),cljs.core.vals(todos));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (new_done){
return (function (p1__74526_SHARP_,p2__74527_SHARP_){
return cljs.core.assoc_in(p1__74526_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__74527_SHARP_,new cljs.core.Keyword(null,"done","done",-889844188)], null),new_done);
});})(new_done))
,todos,cljs.core.keys(todos));
}));

//# sourceMappingURL=barber.events.js.map
