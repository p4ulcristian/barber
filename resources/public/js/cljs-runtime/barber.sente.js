goog.provide('barber.sente');
goog.require('cljs.core');
goog.require('taoensso.encore');
goog.require('cljs.core.async');
goog.require('taoensso.sente');
goog.require('re_frame.core');
goog.require('ajax.core');
barber.sente.__GT_output_BANG_ = (function barber$sente$__GT_output_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___67414 = arguments.length;
var i__4731__auto___67415 = (0);
while(true){
if((i__4731__auto___67415 < len__4730__auto___67414)){
args__4736__auto__.push((arguments[i__4731__auto___67415]));

var G__67416 = (i__4731__auto___67415 + (1));
i__4731__auto___67415 = G__67416;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return barber.sente.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

barber.sente.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log(["Sente message: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args))].join(''));
});

barber.sente.__GT_output_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
barber.sente.__GT_output_BANG_.cljs$lang$applyTo = (function (seq67376){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67376));
});

barber.sente._QMARK_csrf_token = (function (){var temp__5735__auto__ = document.getElementById("sente-csrf-token");
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
return el.getAttribute("data-csrf-token");
} else {
return null;
}
})();
barber.sente.local_uri_QMARK_ = (function barber$sente$local_uri_QMARK_(p__67377){
var map__67378 = p__67377;
var map__67378__$1 = (((((!((map__67378 == null))))?(((((map__67378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67378):map__67378);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67378__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
return cljs.core.not(cljs.core.re_find(/^\w+?:\/\//,uri));
});
barber.sente.default_headers = (function barber$sente$default_headers(request){
if(barber.sente.local_uri_QMARK_(request)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__67380_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, ["Accept","application/transit+json","x-csrf-token",barber.sente._QMARK_csrf_token], null),p1__67380_SHARP_], 0));
}));
} else {
return request;
}
});
barber.sente.load_interceptors_BANG_ = (function barber$sente$load_interceptors_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ajax.core.default_interceptors,cljs.core.conj,(function (){var G__67381 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default headers",new cljs.core.Keyword(null,"request","request",1772954723),barber.sente.default_headers], null);
return (ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1 ? ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1(G__67381) : ajax.core.to_interceptor.call(null,G__67381));
})());
});
barber.sente.load_interceptors_BANG_();
var rand_chsk_type_67431 = (((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() >= 0.5))?new cljs.core.Keyword(null,"ajax","ajax",814345549):new cljs.core.Keyword(null,"auto","auto",-566279492));
var __67432 = barber.sente.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Randomly selected chsk type: %s",rand_chsk_type_67431], 0));
var packer_67433 = new cljs.core.Keyword(null,"edn","edn",1317840885);
var map__67382_67434 = taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic("/chsk",barber.sente._QMARK_csrf_token,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),rand_chsk_type_67431,new cljs.core.Keyword(null,"packer","packer",66077544),packer_67433], null)], 0));
var map__67382_67435__$1 = (((((!((map__67382_67434 == null))))?(((((map__67382_67434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67382_67434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67382_67434):map__67382_67434);
var chsk_67436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67382_67435__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_67437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67382_67435__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_67438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67382_67435__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_67439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67382_67435__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
barber.sente.chsk = chsk_67436;

barber.sente.ch_chsk = ch_recv_67437;

barber.sente.chsk_send_BANG_ = send_fn_67438;

barber.sente.chsk_state = state_67439;
if((typeof barber !== 'undefined') && (typeof barber.sente !== 'undefined') && (typeof barber.sente._event_msg_handler !== 'undefined')){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
barber.sente._event_msg_handler = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__67384 = cljs.core.get_global_hierarchy;
return (fexpr__67384.cljs$core$IFn$_invoke$arity$0 ? fexpr__67384.cljs$core$IFn$_invoke$arity$0() : fexpr__67384.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("barber.sente","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
/**
 * Wraps `-event-msg-handler` with logging, error catching, etc.
 */
barber.sente.event_msg_handler = (function barber$sente$event_msg_handler(p__67385){
var map__67386 = p__67385;
var map__67386__$1 = (((((!((map__67386 == null))))?(((((map__67386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67386):map__67386);
var ev_msg = map__67386__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67386__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67386__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67386__$1,new cljs.core.Keyword(null,"event","event",301435442));
return (barber.sente._event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? barber.sente._event_msg_handler.cljs$core$IFn$_invoke$arity$1(ev_msg) : barber.sente._event_msg_handler.call(null,ev_msg));
});
barber.sente._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__67388){
var map__67389 = p__67388;
var map__67389__$1 = (((((!((map__67389 == null))))?(((((map__67389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67389):map__67389);
var ev_msg = map__67389__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67389__$1,new cljs.core.Keyword(null,"event","event",301435442));
return barber.sente.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unhandled event: %s",event], 0));
}));
barber.sente._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__67391){
var map__67392 = p__67391;
var map__67392__$1 = (((((!((map__67392 == null))))?(((((map__67392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67392):map__67392);
var ev_msg = map__67392__$1;
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67392__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__67394 = (function (){var e = (function (){try{if(cljs.core.vector_QMARK_(_QMARK_data)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e67397){if((e67397 instanceof Error)){
var e = e67397;
return e;
} else {
throw e67397;

}
}})();
if((e == null)){
return _QMARK_data;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"barber.sente",86,"(vector? ?data)",_QMARK_data,e,null);
}
})();
var old_state_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67394,(0),null);
var new_state_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67394,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(new_state_map))){
var G__67398 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"websocket?","websocket?",1552493139),true], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__67398) : re_frame.core.dispatch.call(null,G__67398));
} else {
return barber.sente.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Channel socket state change: %s",new_state_map], 0));
}
}));
barber.sente._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__67399){
var map__67400 = p__67399;
var map__67400__$1 = (((((!((map__67400 == null))))?(((((map__67400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67400):map__67400);
var ev_msg = map__67400__$1;
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67400__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__67402 = _QMARK_data;
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67402,(0),null);
var the_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67402,(1),null);
var G__67405 = the_key;
var G__67405__$1 = (((G__67405 instanceof cljs.core.Keyword))?G__67405.fqn:null);
switch (G__67405__$1) {
case "calendar/update":
console.log(["Calendar update: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(the_data))].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(the_data),cljs.core.deref((function (){var G__67406 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__67406) : re_frame.core.subscribe.call(null,G__67406));
})()))){
var G__67407 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-reservations-and-brakes","get-reservations-and-brakes",-1670062908),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(the_data)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__67407) : re_frame.core.dispatch.call(null,G__67407));
} else {
return null;
}

break;
default:
return barber.sente.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Push event from server: %s",cljs.core.first(_QMARK_data)], 0));

}
}));
barber.sente._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__67408){
var map__67409 = p__67408;
var map__67409__$1 = (((((!((map__67409 == null))))?(((((map__67409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67409):map__67409);
var ev_msg = map__67409__$1;
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67409__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__67411 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67411,(0),null);
var _QMARK_csrf_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67411,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67411,(2),null);
return barber.sente.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Handshake: %s",_QMARK_data], 0));
}));
if((typeof barber !== 'undefined') && (typeof barber.sente !== 'undefined') && (typeof barber.sente.router_ !== 'undefined')){
} else {
barber.sente.router_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
barber.sente.stop_router_BANG_ = (function barber$sente$stop_router_BANG_(){
var temp__5735__auto__ = cljs.core.deref(barber.sente.router_);
if(cljs.core.truth_(temp__5735__auto__)){
var stop_f = temp__5735__auto__;
return (stop_f.cljs$core$IFn$_invoke$arity$0 ? stop_f.cljs$core$IFn$_invoke$arity$0() : stop_f.call(null));
} else {
return null;
}
});
barber.sente.start_router_BANG_ = (function barber$sente$start_router_BANG_(){
barber.sente.stop_router_BANG_();

return cljs.core.reset_BANG_(barber.sente.router_,taoensso.sente.start_client_chsk_router_BANG_(barber.sente.ch_chsk,barber.sente.event_msg_handler));
});
barber.sente.start_BANG_ = (function barber$sente$start_BANG_(){
if(cljs.core.truth_(barber.sente._QMARK_csrf_token)){
barber.sente.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["CSRF token detected in HTML, great!"], 0));

return barber.sente.start_router_BANG_();
} else {
return barber.sente.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["CSRF token NOT detected in HTML, default Sente config will reject requests"], 0));
}
});

//# sourceMappingURL=barber.sente.js.map
