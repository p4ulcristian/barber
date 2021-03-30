goog.provide('barber.sente');
goog.require('cljs.core');
goog.require('taoensso.encore');
goog.require('cljs.core.async');
goog.require('taoensso.sente');
goog.require('re_frame.core');
goog.require('ajax.core');
barber.sente.__GT_output_BANG_ = (function barber$sente$__GT_output_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14667 = arguments.length;
var i__4731__auto___14668 = (0);
while(true){
if((i__4731__auto___14668 < len__4730__auto___14667)){
args__4736__auto__.push((arguments[i__4731__auto___14668]));

var G__14669 = (i__4731__auto___14668 + (1));
i__4731__auto___14668 = G__14669;
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
barber.sente.__GT_output_BANG_.cljs$lang$applyTo = (function (seq14622){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14622));
});

barber.sente._QMARK_csrf_token = (function (){var temp__5735__auto__ = document.getElementById("sente-csrf-token");
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
return el.getAttribute("data-csrf-token");
} else {
return null;
}
})();
barber.sente.local_uri_QMARK_ = (function barber$sente$local_uri_QMARK_(p__14624){
var map__14625 = p__14624;
var map__14625__$1 = (((((!((map__14625 == null))))?(((((map__14625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14625):map__14625);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14625__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
return cljs.core.not(cljs.core.re_find(/^\w+?:\/\//,uri));
});
barber.sente.default_headers = (function barber$sente$default_headers(request){
if(barber.sente.local_uri_QMARK_(request)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__14627_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, ["Accept","application/transit+json","x-csrf-token",barber.sente._QMARK_csrf_token], null),p1__14627_SHARP_], 0));
}));
} else {
return request;
}
});
barber.sente.load_interceptors_BANG_ = (function barber$sente$load_interceptors_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ajax.core.default_interceptors,cljs.core.conj,(function (){var G__14628 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default headers",new cljs.core.Keyword(null,"request","request",1772954723),barber.sente.default_headers], null);
return (ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1 ? ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1(G__14628) : ajax.core.to_interceptor.call(null,G__14628));
})());
});
barber.sente.load_interceptors_BANG_();
var rand_chsk_type_14671 = (((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() >= 0.5))?new cljs.core.Keyword(null,"ajax","ajax",814345549):new cljs.core.Keyword(null,"auto","auto",-566279492));
var __14672 = barber.sente.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Randomly selected chsk type: %s",rand_chsk_type_14671], 0));
var packer_14673 = new cljs.core.Keyword(null,"edn","edn",1317840885);
var map__14631_14674 = taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic("/chsk",barber.sente._QMARK_csrf_token,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),rand_chsk_type_14671,new cljs.core.Keyword(null,"packer","packer",66077544),packer_14673], null)], 0));
var map__14631_14675__$1 = (((((!((map__14631_14674 == null))))?(((((map__14631_14674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14631_14674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14631_14674):map__14631_14674);
var chsk_14676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14631_14675__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_14677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14631_14675__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_14678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14631_14675__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_14679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14631_14675__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
barber.sente.chsk = chsk_14676;

barber.sente.ch_chsk = ch_recv_14677;

barber.sente.chsk_send_BANG_ = send_fn_14678;

barber.sente.chsk_state = state_14679;
if((typeof barber !== 'undefined') && (typeof barber.sente !== 'undefined') && (typeof barber.sente._event_msg_handler !== 'undefined')){
} else {
/**
 * Multimethod to handle Sente `event-msg`s
 */
barber.sente._event_msg_handler = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__14634 = cljs.core.get_global_hierarchy;
return (fexpr__14634.cljs$core$IFn$_invoke$arity$0 ? fexpr__14634.cljs$core$IFn$_invoke$arity$0() : fexpr__14634.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("barber.sente","-event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
/**
 * Wraps `-event-msg-handler` with logging, error catching, etc.
 */
barber.sente.event_msg_handler = (function barber$sente$event_msg_handler(p__14635){
var map__14636 = p__14635;
var map__14636__$1 = (((((!((map__14636 == null))))?(((((map__14636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14636):map__14636);
var ev_msg = map__14636__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14636__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14636__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14636__$1,new cljs.core.Keyword(null,"event","event",301435442));
return (barber.sente._event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? barber.sente._event_msg_handler.cljs$core$IFn$_invoke$arity$1(ev_msg) : barber.sente._event_msg_handler.call(null,ev_msg));
});
barber.sente._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__14638){
var map__14639 = p__14638;
var map__14639__$1 = (((((!((map__14639 == null))))?(((((map__14639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14639):map__14639);
var ev_msg = map__14639__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14639__$1,new cljs.core.Keyword(null,"event","event",301435442));
return barber.sente.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unhandled event: %s",event], 0));
}));
barber.sente._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__14641){
var map__14642 = p__14641;
var map__14642__$1 = (((((!((map__14642 == null))))?(((((map__14642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14642):map__14642);
var ev_msg = map__14642__$1;
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14642__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__14644 = (function (){var e = (function (){try{if(cljs.core.vector_QMARK_(_QMARK_data)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e14647){if((e14647 instanceof Error)){
var e = e14647;
return e;
} else {
throw e14647;

}
}})();
if((e == null)){
return _QMARK_data;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"barber.sente",86,"(vector? ?data)",_QMARK_data,e,null);
}
})();
var old_state_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14644,(0),null);
var new_state_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14644,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(new_state_map))){
var G__14649 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"websocket?","websocket?",1552493139),true], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14649) : re_frame.core.dispatch.call(null,G__14649));
} else {
return barber.sente.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Channel socket state change: %s",new_state_map], 0));
}
}));
barber.sente._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__14650){
var map__14651 = p__14650;
var map__14651__$1 = (((((!((map__14651 == null))))?(((((map__14651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14651):map__14651);
var ev_msg = map__14651__$1;
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14651__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__14654 = _QMARK_data;
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14654,(0),null);
var the_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14654,(1),null);
var G__14657 = the_key;
var G__14657__$1 = (((G__14657 instanceof cljs.core.Keyword))?G__14657.fqn:null);
switch (G__14657__$1) {
case "calendar/update":
console.log(["Calendar update: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(the_data))].join(''));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(the_data),cljs.core.deref((function (){var G__14658 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__14658) : re_frame.core.subscribe.call(null,G__14658));
})()))){
var G__14659 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-reservations-and-brakes","get-reservations-and-brakes",-1670062908),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(the_data)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__14659) : re_frame.core.dispatch.call(null,G__14659));
} else {
return null;
}

break;
default:
return barber.sente.__GT_output_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Push event from server: %s",cljs.core.first(_QMARK_data)], 0));

}
}));
barber.sente._event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (p__14660){
var map__14661 = p__14660;
var map__14661__$1 = (((((!((map__14661 == null))))?(((((map__14661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14661):map__14661);
var ev_msg = map__14661__$1;
var _QMARK_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14661__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var vec__14664 = _QMARK_data;
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14664,(0),null);
var _QMARK_csrf_token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14664,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14664,(2),null);
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
