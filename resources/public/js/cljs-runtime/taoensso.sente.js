goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
if(cljs.core.vector_QMARK_(taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(105),(0)], null));
} else {
taoensso.encore.assert_min_encore_version(2.105);
}
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
if((typeof taoensso !== 'undefined') && (typeof taoensso.sente !== 'undefined') && (typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined')){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
taoensso.sente.expected = (function taoensso$sente$expected(expected,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),expected,new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword(null,"value","value",305978217),x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if((!(cljs.core.vector_QMARK_(x)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915),taoensso.sente.expected(new cljs.core.Keyword(null,"vector","vector",1902966158),x)], null);
} else {
if(cljs.core.not((function (){var G__69564 = cljs.core.count(x);
var fexpr__69563 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null);
return (fexpr__69563.cljs$core$IFn$_invoke$arity$1 ? fexpr__69563.cljs$core$IFn$_invoke$arity$1(G__69564) : fexpr__69563.call(null,G__69564));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__69565 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69565,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69565,(1),null);
if((!((ev_id instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689),taoensso.sente.expected(new cljs.core.Keyword(null,"keyword","keyword",811389747),ev_id)], null);
} else {
if(cljs.core.not(cljs.core.namespace(ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772),taoensso.sente.expected(new cljs.core.Keyword(null,"namespaced-keyword","namespaced-keyword",131372895),ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__5735__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5735__auto__)){
var errs = temp__5735__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"errors","errors",-908790718),errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event(x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__5733__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5733__auto__)){
var errs = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
var and__4120__auto__ = cljs.core.map_QMARK_(x);
if(and__4120__auto__){
var and__4120__auto____$1 = taoensso.encore.ks_EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__4120__auto____$1){
var map__69585 = x;
var map__69585__$1 = (((((!((map__69585 == null))))?(((((map__69585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69585):map__69585);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69585__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69585__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69585__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69585__$1,new cljs.core.Keyword(null,"event","event",301435442));
return ((taoensso.encore.chan_QMARK_(ch_recv)) && (cljs.core.ifn_QMARK_(send_fn)) && (taoensso.encore.atom_QMARK_(state)) && (taoensso.sente.event_QMARK_(event)));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
var and__4120__auto__ = cljs.core.map_QMARK_(x);
if(and__4120__auto__){
var and__4120__auto____$1 = taoensso.encore.ks_EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x);
if(and__4120__auto____$1){
var map__69606 = x;
var map__69606__$1 = (((((!((map__69606 == null))))?(((((map__69606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69606):map__69606);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69606__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69606__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69606__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69606__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69606__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69606__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69606__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
return ((taoensso.encore.chan_QMARK_(ch_recv)) && (cljs.core.ifn_QMARK_(send_fn)) && (taoensso.encore.atom_QMARK_(connected_uids)) && (cljs.core.map_QMARK_(ring_req)) && (taoensso.encore.nblank_str_QMARK_(client_id)) && (taoensso.sente.event_QMARK_(event)) && ((((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_(_QMARK_reply_fn)))));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__69609){
var map__69610 = p__69609;
var map__69610__$1 = (((((!((map__69610 == null))))?(((((map__69610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69610):map__69610);
var ev_msg = map__69610__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69610__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69610__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__69613 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69613,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69613,(1),null);
var valid_event = vec__69613;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null)], 0));
if((!(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_)))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,189,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__69613,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__69610,map__69610__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__69613,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__69610,map__69610__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,-454500317);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
var fexpr__69616 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null);
return (fexpr__69616.cljs$core$IFn$_invoke$arity$1 ? fexpr__69616.cljs$core$IFn$_invoke$arity$1(cb_reply_clj) : fexpr__69616.call(null,cb_reply_clj));
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not(taoensso.sente.cb_error_QMARK_(cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",203,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_(prefixed_pstr,"+");
var pstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack(packer,pstr);
}catch (e69627){var t = e69627;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,210,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,-1378246313);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__69623 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69623,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69623,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,216,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__69623,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__69623,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,-1382360991);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__69629 = arguments.length;
switch (G__69629) {
case 2:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2 = (function (packer,clj){
var pstr = ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,223,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",clj,pstr], null);
});})(pstr))
,null)),null,-36370260);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,wrapped_clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,232,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",wrapped_clj,pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,-1293574282);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = 3;


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
});
taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1(x);
});

taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(s);
});

taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.sente.EdnPacker.cljs$lang$type = true;

taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker";

taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"taoensso.sente/EdnPacker");
});

/**
 * Positional factory function for taoensso.sente/EdnPacker.
 */
taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (){var fexpr__69642 = (function (p1__69639_SHARP_){
if((!((p1__69639_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__69639_SHARP_.taoensso$sente$interfaces$IPacker$)))){
return true;
} else {
if((!p1__69639_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__69639_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__69639_SHARP_);
}
});
return fexpr__69642(x);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e69640){if((e69640 instanceof Error)){
var e = e69640;
return e;
} else {
throw e69640;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",245,"((fn* [p1__69639#] (satisfies? interfaces/IPacker p1__69639#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.idx_fn();


/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ;  (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; ?(fn [ring-req]) -> CSRF-token for Ajax POSTs and WS handshake.
 *                     ;                    CSRF check will be skipped iff nil (NOT RECOMMENDED!).
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71243 = arguments.length;
var i__4731__auto___71244 = (0);
while(true){
if((i__4731__auto___71244 < len__4730__auto___71243)){
args__4736__auto__.push((arguments[i__4731__auto___71244]));

var G__71245 = (i__4731__auto___71244 + (1));
i__4731__auto___71244 = G__71245;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__69655){
var vec__69656 = p__69655;
var map__69659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69656,(0),null);
var map__69659__$1 = (((((!((map__69659 == null))))?(((((map__69659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69659):map__69659);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69659__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(25)], 0)));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69659__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69659__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(20)], 0)));
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69659__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms){
return (function (ring_req){
var or__4131__auto__ = new cljs.core.Keyword(null,"anti-forgery-token","anti-forgery-token",806990841).cljs$core$IFn$_invoke$arity$1(ring_req);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
}
});})(vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms))
);
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69659__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69659__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69659__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax){
return (function (ring_req){
return null;
});})(vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax))
);
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69659__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn){
return (function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn))
);
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69659__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((1000)));
var bad_csrf_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69659__$1,new cljs.core.Keyword(null,"bad-csrf-fn","bad-csrf-fn",16619032),((function (vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Bad CSRF token"], null);
});})(vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e69662){if((e69662 instanceof Error)){
var e = e69662;
return e;
} else {
throw e69662;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",320,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e69666){if((e69666 instanceof Error)){
var e = e69666;
return e;
} else {
throw e69666;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",320,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_71257 = (function (){try{if((function (){var fexpr__69669 = ((function (vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (p1__69648_SHARP_){
if((!((p1__69648_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__69648_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)))){
return true;
} else {
if((!p1__69648_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__69648_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__69648_SHARP_);
}
});})(vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
return fexpr__69669(web_server_ch_adapter);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e69667){if((e69667 instanceof Error)){
var e = e69667;
return e;
} else {
throw e69667;

}
}})();
if((e_71257 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",321,"((fn* [p1__69648#] (satisfies? interfaces/IServerChanAdapter p1__69648#)) web-server-ch-adapter)",web_server_ch_adapter,e_71257,null);
}

var max_ms_71258 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_71258)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_71258)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_71258], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (ring_req,client_id){
var or__4131__auto__ = (function (){var G__69672 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__69672) : user_id_fn.call(null,G__69672));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
var conns_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function() {
var G__71263 = null;
var G__71263__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (_QMARK_v){
var vec__69673 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69673,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69673,(1),null);
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);
});
var G__71263__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);
});
G__71263 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__71263__3.call(this,conn_type,uid,client_id);
case 4:
return G__71263__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__71263.cljs$core$IFn$_invoke$arity$3 = G__71263__3;
G__71263.cljs$core$IFn$_invoke$arity$4 = G__71263__4;
return G__71263;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e69677){if((e69677 instanceof Error)){
var e = e69677;
return e;
} else {
throw e69677;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",365,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (p__69681){
var map__69682 = p__69681;
var map__69682__$1 = (((((!((map__69682 == null))))?(((((map__69682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69682):map__69682);
var old_m = map__69682__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69682__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69682__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69682__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__69684 = conn_type;
var G__69684__$1 = (((G__69684 instanceof cljs.core.Keyword))?G__69684.fqn:null);
switch (G__69684__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax__$1,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69684__$1)].join('')));

}
})();
return taoensso.encore.swapped(new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((((!(cljs.core.contains_QMARK_(old_any,uid)))) && (cljs.core.contains_QMARK_(new_any,uid)))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e69686){if((e69686 instanceof Error)){
var e = e69686;
return e;
} else {
throw e69686;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",382,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (p__69687){
var map__69688 = p__69687;
var map__69688__$1 = (((((!((map__69688 == null))))?(((((map__69688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69688):map__69688);
var old_m = map__69688__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69688__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69688__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69688__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref(conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = ((any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_));
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(any,uid))], null);
return taoensso.encore.swapped(new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if(((cljs.core.contains_QMARK_(old_any,uid)) && ((!(cljs.core.contains_QMARK_(new_any,uid)))))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function() { 
var G__71294__delegate = function (user_id,ev,p__69691){
var vec__69692 = p__69691;
var map__69695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69692,(0),null);
var map__69695__$1 = (((((!((map__69695 == null))))?(((((map__69695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69695):map__69695);
var opts = map__69695__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69695__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_71309 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __71310 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,408,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_71309,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_71309,ev], null);
});})(uid_71309,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,null)),null,-1368166526);
var __71311__$1 = (cljs.core.truth_(uid_71309)?null:(function(){throw (new Error(["Assert failed: ",["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join(''),"\n","uid"].join('')))})());
var __71312__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_71313 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__71314 = ((function (uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (conn_type){
var temp__5735__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (m){
var vec__69697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_71309);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69697,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69697,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_71313)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_71309),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_71309));
} else {
return taoensso.encore.swapped(m,null);
}
});})(uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);
if(cljs.core.truth_(temp__5735__auto__)){
var pulled = temp__5735__auto__;
var vec__69700 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69700,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69700,(1),null);
if(cljs.core.vector_QMARK_(buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",435,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_(ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",436,"(set? ev-uuids)",ev_uuids,null,null);
}

var buffered_evs_ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,buffered_evs);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,439,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (buffered_evs_ppstr,vec__69700,buffered_evs,ev_uuids,pulled,temp__5735__auto__,uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s",buffered_evs_ppstr], null);
});})(buffered_evs_ppstr,vec__69700,buffered_evs,ev_uuids,pulled,temp__5735__auto__,uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,null)),null,-1780856363);

var G__69708 = conn_type;
var G__69708__$1 = (((G__69708 instanceof cljs.core.Keyword))?G__69708.fqn:null);
switch (G__69708__$1) {
case "ws":
return (taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4 ? taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4(conns_,uid_71309,buffered_evs_ppstr,upd_conn_BANG_) : taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_71309,buffered_evs_ppstr,upd_conn_BANG_));

break;
case "ajax":
return (taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,uid_71309,buffered_evs_ppstr) : taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_71309,buffered_evs_ppstr));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__69708__$1)].join('')));

}
} else {
return null;
}
});})(uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,448,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,flush_buffer_BANG__71314,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_71309], null);
});})(uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,flush_buffer_BANG__71314,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,null)),null,-733655213);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__71314(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__71314(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__69712_71316 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_71309], null))));
var chunk__69713_71317 = null;
var count__69714_71318 = (0);
var i__69715_71319 = (0);
while(true){
if((i__69715_71319 < count__69714_71318)){
var vec__69760_71320 = chunk__69713_71317.cljs$core$IIndexed$_nth$arity$2(null,i__69715_71319);
var _QMARK_sch_71321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69760_71320,(0),null);
var _udt_71322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69760_71320,(1),null);
var temp__5735__auto___71323 = _QMARK_sch_71321;
if(cljs.core.truth_(temp__5735__auto___71323)){
var sch_71324 = temp__5735__auto___71323;
taoensso.sente.interfaces.sch_close_BANG_(sch_71324);
} else {
}


var G__71325 = seq__69712_71316;
var G__71326 = chunk__69713_71317;
var G__71327 = count__69714_71318;
var G__71328 = (i__69715_71319 + (1));
seq__69712_71316 = G__71325;
chunk__69713_71317 = G__71326;
count__69714_71318 = G__71327;
i__69715_71319 = G__71328;
continue;
} else {
var temp__5735__auto___71329 = cljs.core.seq(seq__69712_71316);
if(temp__5735__auto___71329){
var seq__69712_71330__$1 = temp__5735__auto___71329;
if(cljs.core.chunked_seq_QMARK_(seq__69712_71330__$1)){
var c__4550__auto___71331 = cljs.core.chunk_first(seq__69712_71330__$1);
var G__71332 = cljs.core.chunk_rest(seq__69712_71330__$1);
var G__71333 = c__4550__auto___71331;
var G__71334 = cljs.core.count(c__4550__auto___71331);
var G__71335 = (0);
seq__69712_71316 = G__71332;
chunk__69713_71317 = G__71333;
count__69714_71318 = G__71334;
i__69715_71319 = G__71335;
continue;
} else {
var vec__69764_71336 = cljs.core.first(seq__69712_71330__$1);
var _QMARK_sch_71337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69764_71336,(0),null);
var _udt_71338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69764_71336,(1),null);
var temp__5735__auto___71339__$1 = _QMARK_sch_71337;
if(cljs.core.truth_(temp__5735__auto___71339__$1)){
var sch_71340 = temp__5735__auto___71339__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_71340);
} else {
}


var G__71341 = cljs.core.next(seq__69712_71330__$1);
var G__71342 = null;
var G__71343 = (0);
var G__71344 = (0);
seq__69712_71316 = G__71341;
chunk__69713_71317 = G__71342;
count__69714_71318 = G__71343;
i__69715_71319 = G__71344;
continue;
}
} else {
}
}
break;
}

var seq__69768_71345 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_71309], null))));
var chunk__69769_71346 = null;
var count__69770_71347 = (0);
var i__69771_71348 = (0);
while(true){
if((i__69771_71348 < count__69770_71347)){
var vec__69782_71351 = chunk__69769_71346.cljs$core$IIndexed$_nth$arity$2(null,i__69771_71348);
var _QMARK_sch_71352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69782_71351,(0),null);
var _udt_71353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69782_71351,(1),null);
var temp__5735__auto___71356 = _QMARK_sch_71352;
if(cljs.core.truth_(temp__5735__auto___71356)){
var sch_71357 = temp__5735__auto___71356;
taoensso.sente.interfaces.sch_close_BANG_(sch_71357);
} else {
}


var G__71358 = seq__69768_71345;
var G__71359 = chunk__69769_71346;
var G__71360 = count__69770_71347;
var G__71361 = (i__69771_71348 + (1));
seq__69768_71345 = G__71358;
chunk__69769_71346 = G__71359;
count__69770_71347 = G__71360;
i__69771_71348 = G__71361;
continue;
} else {
var temp__5735__auto___71362 = cljs.core.seq(seq__69768_71345);
if(temp__5735__auto___71362){
var seq__69768_71363__$1 = temp__5735__auto___71362;
if(cljs.core.chunked_seq_QMARK_(seq__69768_71363__$1)){
var c__4550__auto___71364 = cljs.core.chunk_first(seq__69768_71363__$1);
var G__71365 = cljs.core.chunk_rest(seq__69768_71363__$1);
var G__71366 = c__4550__auto___71364;
var G__71367 = cljs.core.count(c__4550__auto___71364);
var G__71368 = (0);
seq__69768_71345 = G__71365;
chunk__69769_71346 = G__71366;
count__69770_71347 = G__71367;
i__69771_71348 = G__71368;
continue;
} else {
var vec__69789_71369 = cljs.core.first(seq__69768_71363__$1);
var _QMARK_sch_71370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69789_71369,(0),null);
var _udt_71371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69789_71369,(1),null);
var temp__5735__auto___71374__$1 = _QMARK_sch_71370;
if(cljs.core.truth_(temp__5735__auto___71374__$1)){
var sch_71375 = temp__5735__auto___71374__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_71375);
} else {
}


var G__71376 = cljs.core.next(seq__69768_71363__$1);
var G__71377 = null;
var G__71378 = (0);
var G__71379 = (0);
seq__69768_71345 = G__71376;
chunk__69769_71346 = G__71377;
count__69770_71347 = G__71378;
i__69771_71348 = G__71379;
continue;
}
} else {
}
}
break;
}
} else {
var seq__69795_71380 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__69796_71381 = null;
var count__69797_71382 = (0);
var i__69798_71383 = (0);
while(true){
if((i__69798_71383 < count__69797_71382)){
var conn_type_71384 = chunk__69796_71381.cljs$core$IIndexed$_nth$arity$2(null,i__69798_71383);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_71384,uid_71309], null),((function (seq__69795_71380,chunk__69796_71381,count__69797_71382,i__69798_71383,conn_type_71384,uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,flush_buffer_BANG__71314,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_71313])], null);
} else {
var vec__69814 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69814,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69814,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_71313)], null);
}
});})(seq__69795_71380,chunk__69796_71381,count__69797_71382,i__69798_71383,conn_type_71384,uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,flush_buffer_BANG__71314,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);


var G__71387 = seq__69795_71380;
var G__71388 = chunk__69796_71381;
var G__71389 = count__69797_71382;
var G__71390 = (i__69798_71383 + (1));
seq__69795_71380 = G__71387;
chunk__69796_71381 = G__71388;
count__69797_71382 = G__71389;
i__69798_71383 = G__71390;
continue;
} else {
var temp__5735__auto___71391 = cljs.core.seq(seq__69795_71380);
if(temp__5735__auto___71391){
var seq__69795_71392__$1 = temp__5735__auto___71391;
if(cljs.core.chunked_seq_QMARK_(seq__69795_71392__$1)){
var c__4550__auto___71393 = cljs.core.chunk_first(seq__69795_71392__$1);
var G__71394 = cljs.core.chunk_rest(seq__69795_71392__$1);
var G__71395 = c__4550__auto___71393;
var G__71396 = cljs.core.count(c__4550__auto___71393);
var G__71397 = (0);
seq__69795_71380 = G__71394;
chunk__69796_71381 = G__71395;
count__69797_71382 = G__71396;
i__69798_71383 = G__71397;
continue;
} else {
var conn_type_71398 = cljs.core.first(seq__69795_71392__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_71398,uid_71309], null),((function (seq__69795_71380,chunk__69796_71381,count__69797_71382,i__69798_71383,conn_type_71398,seq__69795_71392__$1,temp__5735__auto___71391,uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,flush_buffer_BANG__71314,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_71313])], null);
} else {
var vec__69818 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69818,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69818,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_71313)], null);
}
});})(seq__69795_71380,chunk__69796_71381,count__69797_71382,i__69798_71383,conn_type_71398,seq__69795_71392__$1,temp__5735__auto___71391,uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,flush_buffer_BANG__71314,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);


var G__71401 = cljs.core.next(seq__69795_71392__$1);
var G__71402 = null;
var G__71403 = (0);
var G__71404 = (0);
seq__69795_71380 = G__71401;
chunk__69796_71381 = G__71402;
count__69797_71382 = G__71403;
i__69798_71383 = G__71404;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__71314(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__71314(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_71405 = cljs.core.async.timeout(send_buf_ms_ws);
var ajax_timeout_71406 = cljs.core.async.timeout(send_buf_ms_ajax);
var c__60039__auto___71407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60039__auto___71407,ws_timeout_71405,ajax_timeout_71406,uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,flush_buffer_BANG__71314,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
var f__60040__auto__ = (function (){var switch__59756__auto__ = ((function (c__60039__auto___71407,ws_timeout_71405,ajax_timeout_71406,uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,flush_buffer_BANG__71314,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (state_69826){
var state_val_69827 = (state_69826[(1)]);
if((state_val_69827 === (1))){
var state_69826__$1 = state_69826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69826__$1,(2),ws_timeout_71405);
} else {
if((state_val_69827 === (2))){
var inst_69823 = (state_69826[(2)]);
var inst_69824 = flush_buffer_BANG__71314(new cljs.core.Keyword(null,"ws","ws",86841443));
var state_69826__$1 = (function (){var statearr_69828 = state_69826;
(statearr_69828[(7)] = inst_69823);

return statearr_69828;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_69826__$1,inst_69824);
} else {
return null;
}
}
});})(c__60039__auto___71407,ws_timeout_71405,ajax_timeout_71406,uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,flush_buffer_BANG__71314,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
return ((function (switch__59756__auto__,c__60039__auto___71407,ws_timeout_71405,ajax_timeout_71406,uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,flush_buffer_BANG__71314,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function() {
var taoensso$sente$state_machine__59757__auto__ = null;
var taoensso$sente$state_machine__59757__auto____0 = (function (){
var statearr_69831 = [null,null,null,null,null,null,null,null];
(statearr_69831[(0)] = taoensso$sente$state_machine__59757__auto__);

(statearr_69831[(1)] = (1));

return statearr_69831;
});
var taoensso$sente$state_machine__59757__auto____1 = (function (state_69826){
while(true){
var ret_value__59758__auto__ = (function (){try{while(true){
var result__59759__auto__ = switch__59756__auto__(state_69826);
if(cljs.core.keyword_identical_QMARK_(result__59759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59759__auto__;
}
break;
}
}catch (e69832){if((e69832 instanceof Object)){
var ex__59760__auto__ = e69832;
var statearr_69833_71410 = state_69826;
(statearr_69833_71410[(5)] = ex__59760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69832;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71411 = state_69826;
state_69826 = G__71411;
continue;
} else {
return ret_value__59758__auto__;
}
break;
}
});
taoensso$sente$state_machine__59757__auto__ = function(state_69826){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__59757__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__59757__auto____1.call(this,state_69826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__59757__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__59757__auto____0;
taoensso$sente$state_machine__59757__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__59757__auto____1;
return taoensso$sente$state_machine__59757__auto__;
})()
;})(switch__59756__auto__,c__60039__auto___71407,ws_timeout_71405,ajax_timeout_71406,uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,flush_buffer_BANG__71314,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
})();
var state__60041__auto__ = (function (){var statearr_69837 = (f__60040__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60040__auto__.cljs$core$IFn$_invoke$arity$0() : f__60040__auto__.call(null));
(statearr_69837[(6)] = c__60039__auto___71407);

return statearr_69837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60041__auto__);
});})(c__60039__auto___71407,ws_timeout_71405,ajax_timeout_71406,uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,flush_buffer_BANG__71314,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);


var c__60039__auto___71412 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60039__auto___71412,ws_timeout_71405,ajax_timeout_71406,uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,flush_buffer_BANG__71314,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
var f__60040__auto__ = (function (){var switch__59756__auto__ = ((function (c__60039__auto___71412,ws_timeout_71405,ajax_timeout_71406,uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,flush_buffer_BANG__71314,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (state_69844){
var state_val_69845 = (state_69844[(1)]);
if((state_val_69845 === (1))){
var state_69844__$1 = state_69844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69844__$1,(2),ajax_timeout_71406);
} else {
if((state_val_69845 === (2))){
var inst_69841 = (state_69844[(2)]);
var inst_69842 = flush_buffer_BANG__71314(new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_69844__$1 = (function (){var statearr_69846 = state_69844;
(statearr_69846[(7)] = inst_69841);

return statearr_69846;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_69844__$1,inst_69842);
} else {
return null;
}
}
});})(c__60039__auto___71412,ws_timeout_71405,ajax_timeout_71406,uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,flush_buffer_BANG__71314,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
return ((function (switch__59756__auto__,c__60039__auto___71412,ws_timeout_71405,ajax_timeout_71406,uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,flush_buffer_BANG__71314,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function() {
var taoensso$sente$state_machine__59757__auto__ = null;
var taoensso$sente$state_machine__59757__auto____0 = (function (){
var statearr_69847 = [null,null,null,null,null,null,null,null];
(statearr_69847[(0)] = taoensso$sente$state_machine__59757__auto__);

(statearr_69847[(1)] = (1));

return statearr_69847;
});
var taoensso$sente$state_machine__59757__auto____1 = (function (state_69844){
while(true){
var ret_value__59758__auto__ = (function (){try{while(true){
var result__59759__auto__ = switch__59756__auto__(state_69844);
if(cljs.core.keyword_identical_QMARK_(result__59759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59759__auto__;
}
break;
}
}catch (e69848){if((e69848 instanceof Object)){
var ex__59760__auto__ = e69848;
var statearr_69849_71417 = state_69844;
(statearr_69849_71417[(5)] = ex__59760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69848;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71418 = state_69844;
state_69844 = G__71418;
continue;
} else {
return ret_value__59758__auto__;
}
break;
}
});
taoensso$sente$state_machine__59757__auto__ = function(state_69844){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__59757__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__59757__auto____1.call(this,state_69844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__59757__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__59757__auto____0;
taoensso$sente$state_machine__59757__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__59757__auto____1;
return taoensso$sente$state_machine__59757__auto__;
})()
;})(switch__59756__auto__,c__60039__auto___71412,ws_timeout_71405,ajax_timeout_71406,uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,flush_buffer_BANG__71314,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
})();
var state__60041__auto__ = (function (){var statearr_69852 = (f__60040__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60040__auto__.cljs$core$IFn$_invoke$arity$0() : f__60040__auto__.call(null));
(statearr_69852[(6)] = c__60039__auto___71412);

return statearr_69852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60041__auto__);
});})(c__60039__auto___71412,ws_timeout_71405,ajax_timeout_71406,uid_71309,__71310,__71311__$1,__71312__$2,ev_uuid_71313,flush_buffer_BANG__71314,vec__69692,map__69695,map__69695__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);

}
}

return null;
};
var G__71294 = function (user_id,ev,var_args){
var p__69691 = null;
if (arguments.length > 2) {
var G__71419__i = 0, G__71419__a = new Array(arguments.length -  2);
while (G__71419__i < G__71419__a.length) {G__71419__a[G__71419__i] = arguments[G__71419__i + 2]; ++G__71419__i;}
  p__69691 = new cljs.core.IndexedSeq(G__71419__a,0,null);
} 
return G__71294__delegate.call(this,user_id,ev,p__69691);};
G__71294.cljs$lang$maxFixedArity = 2;
G__71294.cljs$lang$applyTo = (function (arglist__71420){
var user_id = cljs.core.first(arglist__71420);
arglist__71420 = cljs.core.next(arglist__71420);
var ev = cljs.core.first(arglist__71420);
var p__69691 = cljs.core.rest(arglist__71420);
return G__71294__delegate(user_id,ev,p__69691);
});
G__71294.cljs$core$IFn$_invoke$arity$variadic = G__71294__delegate;
return G__71294;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
var bad_csrf_QMARK_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (ring_req){
if((csrf_token_fn == null)){
return false;
} else {
var temp__5733__auto__ = (csrf_token_fn.cljs$core$IFn$_invoke$arity$1 ? csrf_token_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : csrf_token_fn.call(null,ring_req));
if(cljs.core.truth_(temp__5733__auto__)){
var reference_csrf_token = temp__5733__auto__;
var csrf_token_from_client = (function (){var or__4131__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"x-csrf-token"], null));
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"x-xsrf-token"], null));
}
}
})();
return cljs.core.not(taoensso.encore.const_str_EQ_(reference_csrf_token,csrf_token_from_client));
} else {
return true;
}
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (ring_req){
if(bad_csrf_QMARK_(ring_req)){
return (bad_csrf_fn.cljs$core$IFn$_invoke$arity$1 ? bad_csrf_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_csrf_fn.call(null,ring_req));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__69861 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69861,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69861,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__69861,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (resp_clj){
if(cljs.core.compare_and_set_BANG_(replied_QMARK__,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,542,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__69861,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__69861,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,null)),null,125440232);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__69861,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1(ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)], 0)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__5735__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5735__auto__)){
var ms = temp__5735__auto__;
var c__60039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60039__auto__,ms,temp__5735__auto__,params,ppstr,client_id,vec__69861,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
var f__60040__auto__ = (function (){var switch__59756__auto__ = ((function (c__60039__auto__,ms,temp__5735__auto__,params,ppstr,client_id,vec__69861,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (state_69877){
var state_val_69878 = (state_69877[(1)]);
if((state_val_69878 === (1))){
var inst_69872 = cljs.core.async.timeout(ms);
var state_69877__$1 = state_69877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69877__$1,(2),inst_69872);
} else {
if((state_val_69878 === (2))){
var inst_69874 = (state_69877[(2)]);
var inst_69875 = (function (){var G__69883 = new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489);
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__69883) : reply_fn.call(null,G__69883));
})();
var state_69877__$1 = (function (){var statearr_69884 = state_69877;
(statearr_69884[(7)] = inst_69874);

return statearr_69884;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_69877__$1,inst_69875);
} else {
return null;
}
}
});})(c__60039__auto__,ms,temp__5735__auto__,params,ppstr,client_id,vec__69861,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
return ((function (switch__59756__auto__,c__60039__auto__,ms,temp__5735__auto__,params,ppstr,client_id,vec__69861,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function() {
var taoensso$sente$state_machine__59757__auto__ = null;
var taoensso$sente$state_machine__59757__auto____0 = (function (){
var statearr_69885 = [null,null,null,null,null,null,null,null];
(statearr_69885[(0)] = taoensso$sente$state_machine__59757__auto__);

(statearr_69885[(1)] = (1));

return statearr_69885;
});
var taoensso$sente$state_machine__59757__auto____1 = (function (state_69877){
while(true){
var ret_value__59758__auto__ = (function (){try{while(true){
var result__59759__auto__ = switch__59756__auto__(state_69877);
if(cljs.core.keyword_identical_QMARK_(result__59759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59759__auto__;
}
break;
}
}catch (e69886){if((e69886 instanceof Object)){
var ex__59760__auto__ = e69886;
var statearr_69887_71449 = state_69877;
(statearr_69887_71449[(5)] = ex__59760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69886;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71451 = state_69877;
state_69877 = G__71451;
continue;
} else {
return ret_value__59758__auto__;
}
break;
}
});
taoensso$sente$state_machine__59757__auto__ = function(state_69877){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__59757__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__59757__auto____1.call(this,state_69877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__59757__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__59757__auto____0;
taoensso$sente$state_machine__59757__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__59757__auto____1;
return taoensso$sente$state_machine__59757__auto__;
})()
;})(switch__59756__auto__,c__60039__auto__,ms,temp__5735__auto__,params,ppstr,client_id,vec__69861,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
})();
var state__60041__auto__ = (function (){var statearr_69890 = (f__60040__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60040__auto__.cljs$core$IFn$_invoke$arity$0() : f__60040__auto__.call(null));
(statearr_69890[(6)] = c__60039__auto__);

return statearr_69890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60041__auto__);
});})(c__60039__auto__,ms,temp__5735__auto__,params,ppstr,client_id,vec__69861,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);

return c__60039__auto__;
} else {
return null;
}
} else {
var G__69891 = new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337);
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__69891) : reply_fn.call(null,G__69891));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
], null));

}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1(ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.cljs$core$IFn$_invoke$arity$2(event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)], 0)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;})(sch_uuid,params,client_id,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,586,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,null)),null,-175853212);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null,ring_req));
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,handshake_ev));
});})(sch_uuid,params,client_id,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,599,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[err_msg,": %s"].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,null)),null,-588474439);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
if(bad_csrf_QMARK_(ring_req)){
return (bad_csrf_fn.cljs$core$IFn$_invoke$arity$1 ? bad_csrf_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_csrf_fn.call(null,ring_req));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,612,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,null)),null,724722135);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

send_handshake_BANG_(server_ch,websocket_QMARK_);

var temp__5735__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__5735__auto__)){
var ms = temp__5735__auto__;
var c__60039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60039__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
var f__60040__auto__ = (function (){var switch__59756__auto__ = ((function (c__60039__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (state_69945){
var state_val_69946 = (state_69945[(1)]);
if((state_val_69946 === (7))){
var inst_69941 = (state_69945[(2)]);
var state_69945__$1 = state_69945;
var statearr_69950_71487 = state_69945__$1;
(statearr_69950_71487[(2)] = inst_69941);

(statearr_69950_71487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69946 === (1))){
var inst_69901 = udt_open;
var state_69945__$1 = (function (){var statearr_69952 = state_69945;
(statearr_69952[(7)] = inst_69901);

return statearr_69952;
})();
var statearr_69953_71488 = state_69945__$1;
(statearr_69953_71488[(2)] = null);

(statearr_69953_71488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69946 === (4))){
var inst_69914 = (state_69945[(8)]);
var inst_69905 = (state_69945[(2)]);
var inst_69909 = cljs.core.deref(conns_);
var inst_69911 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69912 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_69913 = (new cljs.core.PersistentVector(null,3,(5),inst_69911,inst_69912,null));
var inst_69914__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_69909,inst_69913);
var state_69945__$1 = (function (){var statearr_69956 = state_69945;
(statearr_69956[(8)] = inst_69914__$1);

(statearr_69956[(9)] = inst_69905);

return statearr_69956;
})();
if(cljs.core.truth_(inst_69914__$1)){
var statearr_69958_71498 = state_69945__$1;
(statearr_69958_71498[(1)] = (5));

} else {
var statearr_69959_71499 = state_69945__$1;
(statearr_69959_71499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69946 === (13))){
var inst_69921 = (state_69945[(10)]);
var inst_69934 = (state_69945[(2)]);
var inst_69901 = inst_69921;
var state_69945__$1 = (function (){var statearr_69960 = state_69945;
(statearr_69960[(7)] = inst_69901);

(statearr_69960[(11)] = inst_69934);

return statearr_69960;
})();
var statearr_69961_71500 = state_69945__$1;
(statearr_69961_71500[(2)] = null);

(statearr_69961_71500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69946 === (6))){
var state_69945__$1 = state_69945;
var statearr_69962_71501 = state_69945__$1;
(statearr_69962_71501[(2)] = null);

(statearr_69962_71501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69946 === (3))){
var inst_69943 = (state_69945[(2)]);
var state_69945__$1 = state_69945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69945__$1,inst_69943);
} else {
if((state_val_69946 === (12))){
var state_69945__$1 = state_69945;
var statearr_69965_71502 = state_69945__$1;
(statearr_69965_71502[(2)] = null);

(statearr_69965_71502[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69946 === (2))){
var inst_69903 = cljs.core.async.timeout(ms);
var state_69945__$1 = state_69945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69945__$1,(4),inst_69903);
} else {
if((state_val_69946 === (11))){
var inst_69927 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_69928 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_69927);
var state_69945__$1 = state_69945;
var statearr_69967_71503 = state_69945__$1;
(statearr_69967_71503[(2)] = inst_69928);

(statearr_69967_71503[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69946 === (9))){
var state_69945__$1 = state_69945;
var statearr_69968_71504 = state_69945__$1;
(statearr_69968_71504[(2)] = null);

(statearr_69968_71504[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69946 === (5))){
var inst_69914 = (state_69945[(8)]);
var inst_69920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69914,(0),null);
var inst_69921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69914,(1),null);
var inst_69923 = taoensso.sente.interfaces.sch_open_QMARK_(server_ch);
var state_69945__$1 = (function (){var statearr_69970 = state_69945;
(statearr_69970[(12)] = inst_69920);

(statearr_69970[(10)] = inst_69921);

return statearr_69970;
})();
if(cljs.core.truth_(inst_69923)){
var statearr_69971_71505 = state_69945__$1;
(statearr_69971_71505[(1)] = (8));

} else {
var statearr_69972_71506 = state_69945__$1;
(statearr_69972_71506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69946 === (10))){
var inst_69938 = (state_69945[(2)]);
var state_69945__$1 = state_69945;
var statearr_69973_71507 = state_69945__$1;
(statearr_69973_71507[(2)] = inst_69938);

(statearr_69973_71507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69946 === (8))){
var inst_69901 = (state_69945[(7)]);
var inst_69921 = (state_69945[(10)]);
var inst_69925 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_69921,inst_69901);
var state_69945__$1 = state_69945;
if(inst_69925){
var statearr_69975_71508 = state_69945__$1;
(statearr_69975_71508[(1)] = (11));

} else {
var statearr_69976_71509 = state_69945__$1;
(statearr_69976_71509[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__60039__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
return ((function (switch__59756__auto__,c__60039__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function() {
var taoensso$sente$state_machine__59757__auto__ = null;
var taoensso$sente$state_machine__59757__auto____0 = (function (){
var statearr_69977 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69977[(0)] = taoensso$sente$state_machine__59757__auto__);

(statearr_69977[(1)] = (1));

return statearr_69977;
});
var taoensso$sente$state_machine__59757__auto____1 = (function (state_69945){
while(true){
var ret_value__59758__auto__ = (function (){try{while(true){
var result__59759__auto__ = switch__59756__auto__(state_69945);
if(cljs.core.keyword_identical_QMARK_(result__59759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59759__auto__;
}
break;
}
}catch (e69978){if((e69978 instanceof Object)){
var ex__59760__auto__ = e69978;
var statearr_69979_71510 = state_69945;
(statearr_69979_71510[(5)] = ex__59760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69978;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71511 = state_69945;
state_69945 = G__71511;
continue;
} else {
return ret_value__59758__auto__;
}
break;
}
});
taoensso$sente$state_machine__59757__auto__ = function(state_69945){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__59757__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__59757__auto____1.call(this,state_69945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__59757__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__59757__auto____0;
taoensso$sente$state_machine__59757__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__59757__auto____1;
return taoensso$sente$state_machine__59757__auto__;
})()
;})(switch__59756__auto__,c__60039__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
})();
var state__60041__auto__ = (function (){var statearr_69980 = (f__60040__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60040__auto__.cljs$core$IFn$_invoke$arity$0() : f__60040__auto__.call(null));
(statearr_69980[(6)] = c__60039__auto__);

return statearr_69980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60041__auto__);
});})(c__60039__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);

return c__60039__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,641,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,null)),null,1362475913);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_(server_ch,websocket_QMARK_);
} else {
var temp__5735__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5735__auto__)){
var ms = temp__5735__auto__;
var c__60039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60039__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
var f__60040__auto__ = (function (){var switch__59756__auto__ = ((function (c__60039__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (state_70010){
var state_val_70011 = (state_70010[(1)]);
if((state_val_70011 === (1))){
var inst_69985 = cljs.core.async.timeout(ms);
var state_70010__$1 = state_70010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70010__$1,(2),inst_69985);
} else {
if((state_val_70011 === (2))){
var inst_69992 = (state_70010[(7)]);
var inst_69987 = (state_70010[(2)]);
var inst_69988 = cljs.core.deref(conns_);
var inst_69989 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_69990 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_69991 = (new cljs.core.PersistentVector(null,3,(5),inst_69989,inst_69990,null));
var inst_69992__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_69988,inst_69991);
var state_70010__$1 = (function (){var statearr_70012 = state_70010;
(statearr_70012[(7)] = inst_69992__$1);

(statearr_70012[(8)] = inst_69987);

return statearr_70012;
})();
if(cljs.core.truth_(inst_69992__$1)){
var statearr_70013_71512 = state_70010__$1;
(statearr_70013_71512[(1)] = (3));

} else {
var statearr_70014_71513 = state_70010__$1;
(statearr_70014_71513[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70011 === (3))){
var inst_69992 = (state_70010[(7)]);
var inst_69997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69992,(0),null);
var inst_69998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_69992,(1),null);
var inst_69999 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_69998,udt_open);
var state_70010__$1 = (function (){var statearr_70015 = state_70010;
(statearr_70015[(9)] = inst_69997);

return statearr_70015;
})();
if(inst_69999){
var statearr_70016_71514 = state_70010__$1;
(statearr_70016_71514[(1)] = (6));

} else {
var statearr_70017_71515 = state_70010__$1;
(statearr_70017_71515[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70011 === (4))){
var state_70010__$1 = state_70010;
var statearr_70018_71516 = state_70010__$1;
(statearr_70018_71516[(2)] = null);

(statearr_70018_71516[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70011 === (5))){
var inst_70008 = (state_70010[(2)]);
var state_70010__$1 = state_70010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70010__$1,inst_70008);
} else {
if((state_val_70011 === (6))){
var inst_70001 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_70002 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_70001);
var state_70010__$1 = state_70010;
var statearr_70019_71517 = state_70010__$1;
(statearr_70019_71517[(2)] = inst_70002);

(statearr_70019_71517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70011 === (7))){
var state_70010__$1 = state_70010;
var statearr_70020_71518 = state_70010__$1;
(statearr_70020_71518[(2)] = null);

(statearr_70020_71518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70011 === (8))){
var inst_70005 = (state_70010[(2)]);
var state_70010__$1 = state_70010;
var statearr_70021_71519 = state_70010__$1;
(statearr_70021_71519[(2)] = inst_70005);

(statearr_70021_71519[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__60039__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
return ((function (switch__59756__auto__,c__60039__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function() {
var taoensso$sente$state_machine__59757__auto__ = null;
var taoensso$sente$state_machine__59757__auto____0 = (function (){
var statearr_70022 = [null,null,null,null,null,null,null,null,null,null];
(statearr_70022[(0)] = taoensso$sente$state_machine__59757__auto__);

(statearr_70022[(1)] = (1));

return statearr_70022;
});
var taoensso$sente$state_machine__59757__auto____1 = (function (state_70010){
while(true){
var ret_value__59758__auto__ = (function (){try{while(true){
var result__59759__auto__ = switch__59756__auto__(state_70010);
if(cljs.core.keyword_identical_QMARK_(result__59759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59759__auto__;
}
break;
}
}catch (e70023){if((e70023 instanceof Object)){
var ex__59760__auto__ = e70023;
var statearr_70024_71520 = state_70010;
(statearr_70024_71520[(5)] = ex__59760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_70010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70023;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71521 = state_70010;
state_70010 = G__71521;
continue;
} else {
return ret_value__59758__auto__;
}
break;
}
});
taoensso$sente$state_machine__59757__auto__ = function(state_70010){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__59757__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__59757__auto____1.call(this,state_70010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__59757__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__59757__auto____0;
taoensso$sente$state_machine__59757__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__59757__auto____1;
return taoensso$sente$state_machine__59757__auto__;
})()
;})(switch__59756__auto__,c__60039__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
})();
var state__60041__auto__ = (function (){var statearr_70025 = (f__60040__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60040__auto__.cljs$core$IFn$_invoke$arity$0() : f__60040__auto__.call(null));
(statearr_70025[(6)] = c__60039__auto__);

return statearr_70025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60041__auto__);
});})(c__60039__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);

return c__60039__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__70030 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70030,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70030,(1),null);
return receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$2(clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__70030,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,671,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__70030,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__70030,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,null)),null,68650799);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,resp_clj,_QMARK_cb_uuid));
});})(vec__70030,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
:null));
});})(sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,680,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,null)),null,-2124998526);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__60039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60039__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
var f__60040__auto__ = (function (){var switch__59756__auto__ = ((function (c__60039__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (state_70088){
var state_val_70089 = (state_70088[(1)]);
if((state_val_70089 === (7))){
var state_70088__$1 = state_70088;
var statearr_70094_71523 = state_70088__$1;
(statearr_70094_71523[(2)] = null);

(statearr_70094_71523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70089 === (1))){
var inst_70033 = cljs.core.async.timeout((5000));
var state_70088__$1 = state_70088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70088__$1,(2),inst_70033);
} else {
if((state_val_70089 === (4))){
var state_70088__$1 = state_70088;
var statearr_70095_71524 = state_70088__$1;
(statearr_70095_71524[(2)] = null);

(statearr_70095_71524[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70089 === (13))){
var state_70088__$1 = state_70088;
var statearr_70096_71525 = state_70088__$1;
(statearr_70096_71525[(2)] = null);

(statearr_70096_71525[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70089 === (6))){
var inst_70043 = (state_70088[(7)]);
var inst_70063 = (state_70088[(8)]);
var inst_70045 = (state_70088[(9)]);
var inst_70046 = (state_70088[(10)]);
var inst_70058 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70059 = [conn_type,uid,client_id];
var inst_70060 = (new cljs.core.PersistentVector(null,3,(5),inst_70058,inst_70059,null));
var inst_70062 = (function (){var vec__70036 = inst_70043;
var __QMARK_sch = inst_70045;
var udt_t1 = inst_70046;
return ((function (vec__70036,__QMARK_sch,udt_t1,inst_70043,inst_70063,inst_70045,inst_70046,inst_70058,inst_70059,inst_70060,state_val_70089,c__60039__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (p__70061){
var vec__70101 = p__70061;
var _sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70101,(0),null);
var udt_t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70101,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1__$1,udt_close)){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped(udt_t1__$1,false);
}
});
;})(vec__70036,__QMARK_sch,udt_t1,inst_70043,inst_70063,inst_70045,inst_70046,inst_70058,inst_70059,inst_70060,state_val_70089,c__60039__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
})();
var inst_70063__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_70060,inst_70062);
var state_70088__$1 = (function (){var statearr_70106 = state_70088;
(statearr_70106[(8)] = inst_70063__$1);

return statearr_70106;
})();
if(cljs.core.truth_(inst_70063__$1)){
var statearr_70108_71526 = state_70088__$1;
(statearr_70108_71526[(1)] = (9));

} else {
var statearr_70109_71527 = state_70088__$1;
(statearr_70109_71527[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70089 === (3))){
var inst_70043 = (state_70088[(7)]);
var inst_70045 = (state_70088[(9)]);
var inst_70046 = (state_70088[(10)]);
var inst_70049 = (function (){var vec__70036 = inst_70043;
var __QMARK_sch = inst_70045;
var udt_t1 = inst_70046;
return ((function (vec__70036,__QMARK_sch,udt_t1,inst_70043,inst_70045,inst_70046,state_val_70089,c__60039__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__70036,__QMARK_sch,udt_t1,inst_70043,inst_70045,inst_70046,state_val_70089,c__60039__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
})();
var inst_70050 = (new cljs.core.Delay(inst_70049,null));
var inst_70051 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,694,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_70050,null,1873240380);
var state_70088__$1 = state_70088;
var statearr_70112_71528 = state_70088__$1;
(statearr_70112_71528[(2)] = inst_70051);

(statearr_70112_71528[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70089 === (12))){
var inst_70073 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70074 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_70075 = (new cljs.core.PersistentVector(null,2,(5),inst_70073,inst_70074,null));
var inst_70076 = receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(inst_70075);
var state_70088__$1 = state_70088;
var statearr_70114_71529 = state_70088__$1;
(statearr_70114_71529[(2)] = inst_70076);

(statearr_70114_71529[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70089 === (2))){
var inst_70043 = (state_70088[(7)]);
var inst_70035 = (state_70088[(2)]);
var inst_70039 = cljs.core.deref(conns_);
var inst_70040 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70041 = [conn_type,uid,client_id];
var inst_70042 = (new cljs.core.PersistentVector(null,3,(5),inst_70040,inst_70041,null));
var inst_70043__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_70039,inst_70042);
var inst_70045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70043__$1,(0),null);
var inst_70046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_70043__$1,(1),null);
var inst_70047 = cljs.core.deref(taoensso.sente.debug_mode_QMARK__);
var state_70088__$1 = (function (){var statearr_70116 = state_70088;
(statearr_70116[(7)] = inst_70043__$1);

(statearr_70116[(9)] = inst_70045);

(statearr_70116[(10)] = inst_70046);

(statearr_70116[(11)] = inst_70035);

return statearr_70116;
})();
if(cljs.core.truth_(inst_70047)){
var statearr_70118_71531 = state_70088__$1;
(statearr_70118_71531[(1)] = (3));

} else {
var statearr_70119_71532 = state_70088__$1;
(statearr_70119_71532[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70089 === (11))){
var inst_70082 = (state_70088[(2)]);
var state_70088__$1 = state_70088;
var statearr_70125_71533 = state_70088__$1;
(statearr_70125_71533[(2)] = inst_70082);

(statearr_70125_71533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70089 === (9))){
var inst_70043 = (state_70088[(7)]);
var inst_70063 = (state_70088[(8)]);
var inst_70045 = (state_70088[(9)]);
var inst_70046 = (state_70088[(10)]);
var inst_70065 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70066 = [conn_type,uid];
var inst_70067 = (new cljs.core.PersistentVector(null,2,(5),inst_70065,inst_70066,null));
var inst_70068 = (function (){var vec__70036 = inst_70043;
var __QMARK_sch = inst_70045;
var udt_t1 = inst_70046;
var disconnect_QMARK_ = inst_70063;
return ((function (vec__70036,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_70043,inst_70063,inst_70045,inst_70046,inst_70065,inst_70066,inst_70067,state_val_70089,c__60039__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_(_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
;})(vec__70036,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_70043,inst_70063,inst_70045,inst_70046,inst_70065,inst_70066,inst_70067,state_val_70089,c__60039__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
})();
var inst_70069 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_70067,inst_70068);
var inst_70070 = upd_connected_uid_BANG_(uid);
var state_70088__$1 = (function (){var statearr_70132 = state_70088;
(statearr_70132[(12)] = inst_70069);

return statearr_70132;
})();
if(cljs.core.truth_(inst_70070)){
var statearr_70135_71536 = state_70088__$1;
(statearr_70135_71536[(1)] = (12));

} else {
var statearr_70136_71537 = state_70088__$1;
(statearr_70136_71537[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70089 === (5))){
var inst_70046 = (state_70088[(10)]);
var inst_70054 = (state_70088[(2)]);
var inst_70055 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_70046,udt_close);
var state_70088__$1 = (function (){var statearr_70138 = state_70088;
(statearr_70138[(13)] = inst_70054);

return statearr_70138;
})();
if(inst_70055){
var statearr_70141_71538 = state_70088__$1;
(statearr_70141_71538[(1)] = (6));

} else {
var statearr_70143_71539 = state_70088__$1;
(statearr_70143_71539[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70089 === (14))){
var inst_70079 = (state_70088[(2)]);
var state_70088__$1 = state_70088;
var statearr_70145_71540 = state_70088__$1;
(statearr_70145_71540[(2)] = inst_70079);

(statearr_70145_71540[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70089 === (10))){
var state_70088__$1 = state_70088;
var statearr_70148_71541 = state_70088__$1;
(statearr_70148_71541[(2)] = null);

(statearr_70148_71541[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70089 === (8))){
var inst_70086 = (state_70088[(2)]);
var state_70088__$1 = state_70088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70088__$1,inst_70086);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__60039__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
return ((function (switch__59756__auto__,c__60039__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function() {
var taoensso$sente$state_machine__59757__auto__ = null;
var taoensso$sente$state_machine__59757__auto____0 = (function (){
var statearr_70151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70151[(0)] = taoensso$sente$state_machine__59757__auto__);

(statearr_70151[(1)] = (1));

return statearr_70151;
});
var taoensso$sente$state_machine__59757__auto____1 = (function (state_70088){
while(true){
var ret_value__59758__auto__ = (function (){try{while(true){
var result__59759__auto__ = switch__59756__auto__(state_70088);
if(cljs.core.keyword_identical_QMARK_(result__59759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59759__auto__;
}
break;
}
}catch (e70152){if((e70152 instanceof Object)){
var ex__59760__auto__ = e70152;
var statearr_70153_71542 = state_70088;
(statearr_70153_71542[(5)] = ex__59760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_70088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70152;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71543 = state_70088;
state_70088 = G__71543;
continue;
} else {
return ret_value__59758__auto__;
}
break;
}
});
taoensso$sente$state_machine__59757__auto__ = function(state_70088){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__59757__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__59757__auto____1.call(this,state_70088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__59757__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__59757__auto____0;
taoensso$sente$state_machine__59757__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__59757__auto____1;
return taoensso$sente$state_machine__59757__auto__;
})()
;})(switch__59756__auto__,c__60039__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
})();
var state__60041__auto__ = (function (){var statearr_70155 = (f__60040__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60040__auto__.cljs$core$IFn$_invoke$arity$0() : f__60040__auto__.call(null));
(statearr_70155[(6)] = c__60039__auto__);

return statearr_70155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60041__auto__);
});})(c__60039__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);

return c__60039__auto__;
});})(sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,716,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,null)),null,-326995842);
});})(sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
], null));

}
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__69656,map__69659,map__69659__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq69653){
var G__69654 = cljs.core.first(seq69653);
var seq69653__$1 = cljs.core.next(seq69653);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69654,seq69653__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,722,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,355950406);

var seq__70157 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__70158 = null;
var count__70159 = (0);
var i__70160 = (0);
while(true){
if((i__70160 < count__70159)){
var vec__70202 = chunk__70158.cljs$core$IIndexed$_nth$arity$2(null,i__70160);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70202,(0),null);
var vec__70205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70202,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70205,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70205,(1),null);
var temp__5735__auto___71547 = _QMARK_sch;
if(cljs.core.truth_(temp__5735__auto___71547)){
var sch_71548 = temp__5735__auto___71547;
var G__70211_71549 = new cljs.core.Keyword(null,"ws","ws",86841443);
var G__70212_71550 = uid;
var G__70213_71551 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__70211_71549,G__70212_71550,G__70213_71551) : upd_conn_BANG_.call(null,G__70211_71549,G__70212_71550,G__70213_71551));

taoensso.sente.interfaces.sch_send_BANG_(sch_71548,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__71552 = seq__70157;
var G__71553 = chunk__70158;
var G__71554 = count__70159;
var G__71555 = (i__70160 + (1));
seq__70157 = G__71552;
chunk__70158 = G__71553;
count__70159 = G__71554;
i__70160 = G__71555;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__70157);
if(temp__5735__auto__){
var seq__70157__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70157__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__70157__$1);
var G__71556 = cljs.core.chunk_rest(seq__70157__$1);
var G__71557 = c__4550__auto__;
var G__71558 = cljs.core.count(c__4550__auto__);
var G__71559 = (0);
seq__70157 = G__71556;
chunk__70158 = G__71557;
count__70159 = G__71558;
i__70160 = G__71559;
continue;
} else {
var vec__70226 = cljs.core.first(seq__70157__$1);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70226,(0),null);
var vec__70229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70226,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70229,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70229,(1),null);
var temp__5735__auto___71560__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__5735__auto___71560__$1)){
var sch_71561 = temp__5735__auto___71560__$1;
var G__70232_71562 = new cljs.core.Keyword(null,"ws","ws",86841443);
var G__70233_71563 = uid;
var G__70234_71564 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__70232_71562,G__70233_71563,G__70234_71564) : upd_conn_BANG_.call(null,G__70232_71562,G__70233_71563,G__70234_71564));

taoensso.sente.interfaces.sch_send_BANG_(sch_71561,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__71565 = cljs.core.next(seq__70157__$1);
var G__71566 = null;
var G__71567 = (0);
var G__71568 = (0);
seq__70157 = G__71565;
chunk__70158 = G__71566;
count__70159 = G__71567;
i__70160 = G__71568;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,732,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-1003464603);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_(client_ids_unsatisfied)){
return null;
} else {
var c__60039__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60039__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__60040__auto__ = (function (){var switch__59756__auto__ = ((function (c__60039__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_70339){
var state_val_70340 = (state_70339[(1)]);
if((state_val_70340 === (7))){
var inst_70291 = (state_70339[(7)]);
var inst_70283 = (state_70339[(8)]);
var inst_70282 = (state_70339[(9)]);
var inst_70311 = (function (){var n = inst_70282;
var client_ids_satisfied = inst_70283;
var _QMARK_pulled = inst_70291;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_70291,inst_70283,inst_70282,state_val_70340,c__60039__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__70310){
var vec__70343 = p__70310;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70343,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70343,(1),null);
var sent_QMARK_ = (function (){var temp__5735__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__5735__auto__)){
var sch = temp__5735__auto__;
return taoensso.sente.interfaces.sch_send_BANG_(_QMARK_sch,cljs.core.not(new cljs.core.Keyword(null,"websocket","websocket",-1714963101)),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,client_id);
} else {
return s;
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_70291,inst_70283,inst_70282,state_val_70340,c__60039__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_70312 = cljs.core.PersistentHashSet.EMPTY;
var inst_70313 = cljs.core.reduce_kv(inst_70311,inst_70312,inst_70291);
var state_70339__$1 = state_70339;
var statearr_70363_71569 = state_70339__$1;
(statearr_70363_71569[(2)] = inst_70313);

(statearr_70363_71569[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70340 === (1))){
var inst_70281 = cljs.core.PersistentHashSet.EMPTY;
var inst_70282 = (0);
var inst_70283 = inst_70281;
var state_70339__$1 = (function (){var statearr_70379 = state_70339;
(statearr_70379[(8)] = inst_70283);

(statearr_70379[(9)] = inst_70282);

return statearr_70379;
})();
var statearr_70380_71570 = state_70339__$1;
(statearr_70380_71570[(2)] = null);

(statearr_70380_71570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70340 === (4))){
var state_70339__$1 = state_70339;
var statearr_70381_71571 = state_70339__$1;
(statearr_70381_71571[(2)] = true);

(statearr_70381_71571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70340 === (15))){
var inst_70332 = (state_70339[(2)]);
var state_70339__$1 = state_70339;
var statearr_70382_71572 = state_70339__$1;
(statearr_70382_71572[(2)] = inst_70332);

(statearr_70382_71572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70340 === (13))){
var inst_70318 = (state_70339[(10)]);
var inst_70323 = cljs.core.rand_int(inst_70318);
var inst_70324 = (inst_70318 + inst_70323);
var inst_70325 = cljs.core.async.timeout(inst_70324);
var state_70339__$1 = state_70339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70339__$1,(16),inst_70325);
} else {
if((state_val_70340 === (6))){
var inst_70291 = (state_70339[(7)]);
var inst_70308 = (state_70339[(2)]);
var state_70339__$1 = (function (){var statearr_70385 = state_70339;
(statearr_70385[(11)] = inst_70308);

return statearr_70385;
})();
if(cljs.core.truth_(inst_70291)){
var statearr_70386_71573 = state_70339__$1;
(statearr_70386_71573[(1)] = (7));

} else {
var statearr_70387_71574 = state_70339__$1;
(statearr_70387_71574[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70340 === (3))){
var inst_70337 = (state_70339[(2)]);
var state_70339__$1 = state_70339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70339__$1,inst_70337);
} else {
if((state_val_70340 === (12))){
var inst_70335 = (state_70339[(2)]);
var state_70339__$1 = state_70339;
var statearr_70389_71575 = state_70339__$1;
(statearr_70389_71575[(2)] = inst_70335);

(statearr_70389_71575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70340 === (2))){
var inst_70291 = (state_70339[(7)]);
var inst_70283 = (state_70339[(8)]);
var inst_70282 = (state_70339[(9)]);
var inst_70287 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70288 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_70289 = (new cljs.core.PersistentVector(null,2,(5),inst_70287,inst_70288,null));
var inst_70290 = (function (){var n = inst_70282;
var client_ids_satisfied = inst_70283;
return ((function (n,client_ids_satisfied,inst_70291,inst_70283,inst_70282,inst_70287,inst_70288,inst_70289,state_val_70340,c__60039__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(client_ids_satisfied,cljs.core.keys(m));
if(cljs.core.empty_QMARK_(ks_to_pull)){
return taoensso.encore.swapped(m,null);
} else {
return taoensso.encore.swapped(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks_to_pull,n,client_ids_satisfied,inst_70291,inst_70283,inst_70282,inst_70287,inst_70288,inst_70289,state_val_70340,c__60039__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__70390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70390,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70390,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_70291,inst_70283,inst_70282,inst_70287,inst_70288,inst_70289,state_val_70340,c__60039__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys(m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_70291,inst_70283,inst_70282,inst_70287,inst_70288,inst_70289,state_val_70340,c__60039__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_70291__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_70289,inst_70290);
var inst_70300 = (function (){var n = inst_70282;
var client_ids_satisfied = inst_70283;
var _QMARK_pulled = inst_70291__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_70291,inst_70283,inst_70282,inst_70287,inst_70288,inst_70289,inst_70290,inst_70291__$1,state_val_70340,c__60039__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__4131__auto__ = (x == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__70400 = taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_);
return (fexpr__70400.cljs$core$IFn$_invoke$arity$1 ? fexpr__70400.cljs$core$IFn$_invoke$arity$1(x) : fexpr__70400.call(null,x));
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_70291,inst_70283,inst_70282,inst_70287,inst_70288,inst_70289,inst_70290,inst_70291__$1,state_val_70340,c__60039__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_70301 = (inst_70300.cljs$core$IFn$_invoke$arity$1 ? inst_70300.cljs$core$IFn$_invoke$arity$1(inst_70291__$1) : inst_70300.call(null,inst_70291__$1));
var state_70339__$1 = (function (){var statearr_70401 = state_70339;
(statearr_70401[(7)] = inst_70291__$1);

return statearr_70401;
})();
if(cljs.core.truth_(inst_70301)){
var statearr_70402_71583 = state_70339__$1;
(statearr_70402_71583[(1)] = (4));

} else {
var statearr_70404_71584 = state_70339__$1;
(statearr_70404_71584[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70340 === (11))){
var state_70339__$1 = state_70339;
var statearr_70408_71585 = state_70339__$1;
(statearr_70408_71585[(2)] = null);

(statearr_70408_71585[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70340 === (9))){
var inst_70318 = (state_70339[(10)]);
var inst_70283 = (state_70339[(8)]);
var inst_70282 = (state_70339[(9)]);
var inst_70316 = (state_70339[(2)]);
var inst_70317 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_70283,inst_70316);
var inst_70318__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms_backoffs,inst_70282);
var state_70339__$1 = (function (){var statearr_70409 = state_70339;
(statearr_70409[(10)] = inst_70318__$1);

(statearr_70409[(12)] = inst_70317);

return statearr_70409;
})();
if(cljs.core.truth_(inst_70318__$1)){
var statearr_70410_71606 = state_70339__$1;
(statearr_70410_71606[(1)] = (10));

} else {
var statearr_70411_71607 = state_70339__$1;
(statearr_70411_71607[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70340 === (5))){
var inst_70291 = (state_70339[(7)]);
var inst_70306 = taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",759,"([:or nil? map?] ?pulled)",inst_70291,null,null);
var state_70339__$1 = state_70339;
var statearr_70412_71608 = state_70339__$1;
(statearr_70412_71608[(2)] = inst_70306);

(statearr_70412_71608[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70340 === (14))){
var state_70339__$1 = state_70339;
var statearr_70413_71612 = state_70339__$1;
(statearr_70413_71612[(2)] = null);

(statearr_70413_71612[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70340 === (16))){
var inst_70282 = (state_70339[(9)]);
var inst_70317 = (state_70339[(12)]);
var inst_70327 = (state_70339[(2)]);
var inst_70328 = (inst_70282 + (1));
var inst_70282__$1 = inst_70328;
var inst_70283 = inst_70317;
var state_70339__$1 = (function (){var statearr_70414 = state_70339;
(statearr_70414[(8)] = inst_70283);

(statearr_70414[(9)] = inst_70282__$1);

(statearr_70414[(13)] = inst_70327);

return statearr_70414;
})();
var statearr_70415_71613 = state_70339__$1;
(statearr_70415_71613[(2)] = null);

(statearr_70415_71613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70340 === (10))){
var inst_70317 = (state_70339[(12)]);
var inst_70320 = cljs.core.complement(inst_70317);
var inst_70321 = taoensso.encore.rsome(inst_70320,client_ids_unsatisfied);
var state_70339__$1 = state_70339;
if(cljs.core.truth_(inst_70321)){
var statearr_70418_71614 = state_70339__$1;
(statearr_70418_71614[(1)] = (13));

} else {
var statearr_70419_71617 = state_70339__$1;
(statearr_70419_71617[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70340 === (8))){
var state_70339__$1 = state_70339;
var statearr_70420_71618 = state_70339__$1;
(statearr_70420_71618[(2)] = null);

(statearr_70420_71618[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__60039__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__59756__auto__,c__60039__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__59757__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__59757__auto____0 = (function (){
var statearr_70422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70422[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__59757__auto__);

(statearr_70422[(1)] = (1));

return statearr_70422;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__59757__auto____1 = (function (state_70339){
while(true){
var ret_value__59758__auto__ = (function (){try{while(true){
var result__59759__auto__ = switch__59756__auto__(state_70339);
if(cljs.core.keyword_identical_QMARK_(result__59759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59759__auto__;
}
break;
}
}catch (e70425){if((e70425 instanceof Object)){
var ex__59760__auto__ = e70425;
var statearr_70426_71621 = state_70339;
(statearr_70426_71621[(5)] = ex__59760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_70339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70425;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71622 = state_70339;
state_70339 = G__71622;
continue;
} else {
return ret_value__59758__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__59757__auto__ = function(state_70339){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__59757__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__59757__auto____1.call(this,state_70339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__59757__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__59757__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__59757__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__59757__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__59757__auto__;
})()
;})(switch__59756__auto__,c__60039__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__60041__auto__ = (function (){var statearr_70427 = (f__60040__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60040__auto__.cljs$core$IFn$_invoke$arity$0() : f__60040__auto__.call(null));
(statearr_70427[(6)] = c__60039__auto__);

return statearr_70427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60041__auto__);
});})(c__60039__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__60039__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
var x__4433__auto__ = (((chsk == null))?null:chsk);
var m__4434__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4434__auto__.call(null,chsk));
} else {
var m__4431__auto__ = (taoensso.sente._chsk_connect_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4431__auto__.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-connect!",chsk);
}
}
}
});

taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
var x__4433__auto__ = (((chsk == null))?null:chsk);
var m__4434__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__4434__auto__.call(null,chsk,reason));
} else {
var m__4431__auto__ = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__4431__auto__.call(null,chsk,reason));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-disconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__4433__auto__ = (((chsk == null))?null:chsk);
var m__4434__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4434__auto__.call(null,chsk));
} else {
var m__4431__auto__ = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4431__auto__.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-reconnect!",chsk);
}
}
}
});

taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
var x__4433__auto__ = (((chsk == null))?null:chsk);
var m__4434__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__4434__auto__.call(null,chsk,ev,opts));
} else {
var m__4431__auto__ = (taoensso.sente._chsk_send_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__4431__auto__.call(null,chsk,ev,opts));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-send!",chsk);
}
}
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_(chsk);
});

taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_(chsk,new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641));
});

/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_(chsk);
});

/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var G__70477 = arguments.length;
switch (G__70477) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,809,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$(new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,-1241503493);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,814,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,-1581996146);

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__70506_71673 = new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264);
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__70506_71673) : _QMARK_cb_fn.call(null,G__70506_71673));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event(x);

if((((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null)))) || (taoensso.encore.nat_int_QMARK_(_QMARK_timeout_ms)))){
} else {
throw (new Error(["Assert failed: ",["cb requires a timeout; timeout-ms should be a +ive integer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_timeout_ms)].join(''),"\n","(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))"].join('')));
}

if((((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)) || (taoensso.encore.chan_QMARK_(_QMARK_cb)))){
return null;
} else {
throw (new Error(["Assert failed: ",["cb should be nil, an ifn, or a channel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(_QMARK_cb))].join(''),"\n","(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))"].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__5735__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5735__auto__)){
var cb_uuid = temp__5735__auto__;
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__5735__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__5735__auto__))
);
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__70512 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null,old_state));
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped(new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70512,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70512,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_71680 = (function (){try{if(cljs.core.map_QMARK_(state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e70522){if((e70522 instanceof Error)){
var e = e70522;
return e;
} else {
throw e70522;

}
}})();
if((e_71680 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",861,"(map? state)",state,e_71680,null);
}

var e_71681 = (function (){try{if((function (){var fexpr__70530 = (function (x){
return cljs.core.contains_QMARK_((function (){var G__70531 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__70531) : taoensso.truss.impl.set_STAR_.call(null,G__70531));
})(),x);
});
return fexpr__70530(reason);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e70528){if((e70528 instanceof Error)){
var e = e70528;
return e;
} else {
throw e70528;

}
}})();
if((e_71681 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",862,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_71681,null);
}

if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(reason,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)),new cljs.core.Keyword(null,"open?","open?",1238443125),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null)], 0));
} else {
return state;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if((((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)))){
return _QMARK_cb;
} else {
var e_71688 = (function (){try{if(taoensso.encore.chan_QMARK_(_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e70536){if((e70536 instanceof Error)){
var e = e70536;
return e;
} else {
throw e70536;

}
}})();
if((e_71688 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",883,"(enc/chan? ?cb)",_QMARK_cb,e_71688,null);
}

taoensso.sente.assert_event(ev);

var vec__70541 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70541,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70541,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__70541,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([taoensso.encore.as_qname(ev_id),".cb"].join('')),reply], null));
});
;})(vec__70541,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,894,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,-1906030542);

var buffered_evs = ((cljs.core.vector_QMARK_(clj))?clj:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",895,"(vector? clj)",clj,null,null));
var seq__70551 = cljs.core.seq(buffered_evs);
var chunk__70552 = null;
var count__70553 = (0);
var i__70554 = (0);
while(true){
if((i__70554 < count__70553)){
var ev = chunk__70552.cljs$core$IIndexed$_nth$arity$2(null,i__70554);
taoensso.sente.assert_event(ev);

var vec__70572_71744 = ev;
var id_71745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70572_71744,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_71745),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__71748 = seq__70551;
var G__71749 = chunk__70552;
var G__71750 = count__70553;
var G__71751 = (i__70554 + (1));
seq__70551 = G__71748;
chunk__70552 = G__71749;
count__70553 = G__71750;
i__70554 = G__71751;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__70551);
if(temp__5735__auto__){
var seq__70551__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70551__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__70551__$1);
var G__71757 = cljs.core.chunk_rest(seq__70551__$1);
var G__71758 = c__4550__auto__;
var G__71759 = cljs.core.count(c__4550__auto__);
var G__71760 = (0);
seq__70551 = G__71757;
chunk__70552 = G__71758;
count__70553 = G__71759;
i__70554 = G__71760;
continue;
} else {
var ev = cljs.core.first(seq__70551__$1);
taoensso.sente.assert_event(ev);

var vec__70576_71770 = ev;
var id_71771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70576_71770,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_71771),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__71777 = cljs.core.next(seq__70551__$1);
var G__71778 = null;
var G__71779 = (0);
var G__71780 = (0);
seq__70551 = G__71777;
chunk__70552 = G__71778;
count__70553 = G__71779;
i__70554 = G__71780;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
var and__4120__auto__ = cljs.core.vector_QMARK_(x);
if(and__4120__auto__){
var vec__70585 = x;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70585,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__4120__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_71785 = (function (){try{if((function (){var fexpr__70599 = (function (x){
return cljs.core.contains_QMARK_((function (){var G__70600 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__70600) : taoensso.truss.impl.set_STAR_.call(null,G__70600));
})(),x);
});
return fexpr__70599(chsk_type);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e70594){if((e70594 instanceof Error)){
var e = e70594;
return e;
} else {
throw e70594;

}
}})();
if((e_71785 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",909,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_71785,null);
}

var e_71788 = (function (){try{if(taoensso.sente.handshake_QMARK_(clj)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e70601){if((e70601 instanceof Error)){
var e = e70601;
return e;
} else {
throw e70601;

}
}})();
if((e_71788 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",910,"(handshake? clj)",clj,e_71788,null);
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,911,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,1887119093);

var vec__70606 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70606,(0),null);
var vec__70609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70606,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70609,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70609,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70609,(2),null);
var map__70612 = chsk;
var map__70612__$1 = (((((!((map__70612 == null))))?(((((map__70612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70612):map__70612);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70612__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70612__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_(ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,null,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event(handshake_ev);

taoensso.sente.swap_chsk_state_BANG_(chsk,((function (vec__70606,_,vec__70609,_QMARK_uid,___$1,_QMARK_handshake_data,map__70612,map__70612__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__70588_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__70588_SHARP_,new_state], 0));
});})(vec__70606,_,vec__70609,_QMARK_uid,___$1,_QMARK_handshake_data,map__70612,map__70612__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
);

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (new cljs.core.Delay((function (){
if(((taoensso.sente.node_target_QMARK_) && ((typeof require !== 'undefined')))){
try{return require("websocket");
}catch (e70622){var e = e70622;
return null;
}} else {
return null;
}
}),null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.ws_kalive_ms = ws_kalive_ms;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k70636,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__70641 = k70636;
var G__70641__$1 = (((G__70641 instanceof cljs.core.Keyword))?G__70641.fqn:null);
switch (G__70641__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "socket_":
return self__.socket_;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k70636,else__4388__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__70644){
var vec__70647 = p__70644;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70647,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70647,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__70635){
var self__ = this;
var G__70635__$1 = this;
return (new cljs.core.RecordIter((0),G__70635__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__70653 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__70653(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this70637,other70638){
var self__ = this;
var this70637__$1 = this;
return (((!((other70638 == null)))) && ((this70637__$1.constructor === other70638.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70637__$1.client_id,other70638.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70637__$1.chs,other70638.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70637__$1.params,other70638.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70637__$1.packer,other70638.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70637__$1.url,other70638.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70637__$1.ws_kalive_ms,other70638.ws_kalive_ms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70637__$1.state_,other70638.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70637__$1.instance_handle_,other70638.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70637__$1.retry_count_,other70638.retry_count_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70637__$1.ever_opened_QMARK__,other70638.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70637__$1.backoff_ms_fn,other70638.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70637__$1.cbs_waiting_,other70638.cbs_waiting_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70637__$1.socket_,other70638.socket_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70637__$1.udt_last_comms_,other70638.udt_last_comms_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70637__$1.__extmap,other70638.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__70635){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__70661 = cljs.core.keyword_identical_QMARK_;
var expr__70662 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__70664 = new cljs.core.Keyword(null,"client-id","client-id",-464622140);
var G__70665 = expr__70662;
return (pred__70661.cljs$core$IFn$_invoke$arity$2 ? pred__70661.cljs$core$IFn$_invoke$arity$2(G__70664,G__70665) : pred__70661.call(null,G__70664,G__70665));
})())){
return (new taoensso.sente.ChWebSocket(G__70635,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70668 = new cljs.core.Keyword(null,"chs","chs",376886120);
var G__70669 = expr__70662;
return (pred__70661.cljs$core$IFn$_invoke$arity$2 ? pred__70661.cljs$core$IFn$_invoke$arity$2(G__70668,G__70669) : pred__70661.call(null,G__70668,G__70669));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__70635,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70678 = new cljs.core.Keyword(null,"params","params",710516235);
var G__70679 = expr__70662;
return (pred__70661.cljs$core$IFn$_invoke$arity$2 ? pred__70661.cljs$core$IFn$_invoke$arity$2(G__70678,G__70679) : pred__70661.call(null,G__70678,G__70679));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__70635,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70680 = new cljs.core.Keyword(null,"packer","packer",66077544);
var G__70681 = expr__70662;
return (pred__70661.cljs$core$IFn$_invoke$arity$2 ? pred__70661.cljs$core$IFn$_invoke$arity$2(G__70680,G__70681) : pred__70661.call(null,G__70680,G__70681));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__70635,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70684 = new cljs.core.Keyword(null,"url","url",276297046);
var G__70685 = expr__70662;
return (pred__70661.cljs$core$IFn$_invoke$arity$2 ? pred__70661.cljs$core$IFn$_invoke$arity$2(G__70684,G__70685) : pred__70661.call(null,G__70684,G__70685));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__70635,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70686 = new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968);
var G__70687 = expr__70662;
return (pred__70661.cljs$core$IFn$_invoke$arity$2 ? pred__70661.cljs$core$IFn$_invoke$arity$2(G__70686,G__70687) : pred__70661.call(null,G__70686,G__70687));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__70635,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70689 = new cljs.core.Keyword(null,"state_","state_",957667102);
var G__70690 = expr__70662;
return (pred__70661.cljs$core$IFn$_invoke$arity$2 ? pred__70661.cljs$core$IFn$_invoke$arity$2(G__70689,G__70690) : pred__70661.call(null,G__70689,G__70690));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__70635,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70691 = new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457);
var G__70692 = expr__70662;
return (pred__70661.cljs$core$IFn$_invoke$arity$2 ? pred__70661.cljs$core$IFn$_invoke$arity$2(G__70691,G__70692) : pred__70661.call(null,G__70691,G__70692));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__70635,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70693 = new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093);
var G__70694 = expr__70662;
return (pred__70661.cljs$core$IFn$_invoke$arity$2 ? pred__70661.cljs$core$IFn$_invoke$arity$2(G__70693,G__70694) : pred__70661.call(null,G__70693,G__70694));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__70635,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70695 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913);
var G__70696 = expr__70662;
return (pred__70661.cljs$core$IFn$_invoke$arity$2 ? pred__70661.cljs$core$IFn$_invoke$arity$2(G__70695,G__70696) : pred__70661.call(null,G__70695,G__70696));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__70635,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70697 = new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955);
var G__70698 = expr__70662;
return (pred__70661.cljs$core$IFn$_invoke$arity$2 ? pred__70661.cljs$core$IFn$_invoke$arity$2(G__70697,G__70698) : pred__70661.call(null,G__70697,G__70698));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__70635,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70702 = new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061);
var G__70703 = expr__70662;
return (pred__70661.cljs$core$IFn$_invoke$arity$2 ? pred__70661.cljs$core$IFn$_invoke$arity$2(G__70702,G__70703) : pred__70661.call(null,G__70702,G__70703));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__70635,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70704 = new cljs.core.Keyword(null,"socket_","socket_",-361048908);
var G__70705 = expr__70662;
return (pred__70661.cljs$core$IFn$_invoke$arity$2 ? pred__70661.cljs$core$IFn$_invoke$arity$2(G__70704,G__70705) : pred__70661.call(null,G__70704,G__70705));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__70635,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70706 = new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639);
var G__70707 = expr__70662;
return (pred__70661.cljs$core$IFn$_invoke$arity$2 ? pred__70661.cljs$core$IFn$_invoke$arity$2(G__70706,G__70707) : pred__70661.call(null,G__70706,G__70707));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__70635,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__70635),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_,null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__70635){
var self__ = this;
var this__4384__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__70635,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (chsk__$1){
return (function (p1__70623_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__70623_SHARP_,reason);
});})(chsk__$1))
);

var temp__5735__auto__ = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__70708 = opts;
var map__70708__$1 = (((((!((map__70708 == null))))?(((((map__70708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70708):map__70708);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70708__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70708__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70708__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,_QMARK_cb_uuid);
var temp__5735__auto___71920 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5735__auto___71920)){
var cb_uuid_71921 = temp__5735__auto___71920;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_71921], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e70724){if((e70724 instanceof Error)){
var e = e70724;
return e;
} else {
throw e70724;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",996,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__5735__auto___71922__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5735__auto___71922__$1)){
var timeout_ms_71923 = temp__5735__auto___71922__$1;
var c__60039__auto___71924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60039__auto___71924,timeout_ms_71923,temp__5735__auto___71922__$1,cb_uuid_71921,temp__5735__auto___71920,_QMARK_cb_uuid,ppstr,map__70708,map__70708__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__60040__auto__ = (function (){var switch__59756__auto__ = ((function (c__60039__auto___71924,timeout_ms_71923,temp__5735__auto___71922__$1,cb_uuid_71921,temp__5735__auto___71920,_QMARK_cb_uuid,ppstr,map__70708,map__70708__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_70753){
var state_val_70754 = (state_70753[(1)]);
if((state_val_70754 === (1))){
var inst_70739 = cljs.core.async.timeout(timeout_ms_71923);
var state_70753__$1 = state_70753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70753__$1,(2),inst_70739);
} else {
if((state_val_70754 === (2))){
var inst_70742 = (state_70753[(7)]);
var inst_70741 = (state_70753[(2)]);
var inst_70742__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_70753__$1 = (function (){var statearr_70756 = state_70753;
(statearr_70756[(7)] = inst_70742__$1);

(statearr_70756[(8)] = inst_70741);

return statearr_70756;
})();
if(cljs.core.truth_(inst_70742__$1)){
var statearr_70757_71926 = state_70753__$1;
(statearr_70757_71926[(1)] = (3));

} else {
var statearr_70758_71927 = state_70753__$1;
(statearr_70758_71927[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70754 === (3))){
var inst_70742 = (state_70753[(7)]);
var inst_70748 = (function (){var G__70759 = new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489);
return (inst_70742.cljs$core$IFn$_invoke$arity$1 ? inst_70742.cljs$core$IFn$_invoke$arity$1(G__70759) : inst_70742.call(null,G__70759));
})();
var state_70753__$1 = state_70753;
var statearr_70760_71928 = state_70753__$1;
(statearr_70760_71928[(2)] = inst_70748);

(statearr_70760_71928[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70754 === (4))){
var state_70753__$1 = state_70753;
var statearr_70761_71929 = state_70753__$1;
(statearr_70761_71929[(2)] = null);

(statearr_70761_71929[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70754 === (5))){
var inst_70751 = (state_70753[(2)]);
var state_70753__$1 = state_70753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70753__$1,inst_70751);
} else {
return null;
}
}
}
}
}
});})(c__60039__auto___71924,timeout_ms_71923,temp__5735__auto___71922__$1,cb_uuid_71921,temp__5735__auto___71920,_QMARK_cb_uuid,ppstr,map__70708,map__70708__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__59756__auto__,c__60039__auto___71924,timeout_ms_71923,temp__5735__auto___71922__$1,cb_uuid_71921,temp__5735__auto___71920,_QMARK_cb_uuid,ppstr,map__70708,map__70708__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__59757__auto__ = null;
var taoensso$sente$state_machine__59757__auto____0 = (function (){
var statearr_70762 = [null,null,null,null,null,null,null,null,null];
(statearr_70762[(0)] = taoensso$sente$state_machine__59757__auto__);

(statearr_70762[(1)] = (1));

return statearr_70762;
});
var taoensso$sente$state_machine__59757__auto____1 = (function (state_70753){
while(true){
var ret_value__59758__auto__ = (function (){try{while(true){
var result__59759__auto__ = switch__59756__auto__(state_70753);
if(cljs.core.keyword_identical_QMARK_(result__59759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59759__auto__;
}
break;
}
}catch (e70763){if((e70763 instanceof Object)){
var ex__59760__auto__ = e70763;
var statearr_70764_71930 = state_70753;
(statearr_70764_71930[(5)] = ex__59760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_70753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70763;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71938 = state_70753;
state_70753 = G__71938;
continue;
} else {
return ret_value__59758__auto__;
}
break;
}
});
taoensso$sente$state_machine__59757__auto__ = function(state_70753){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__59757__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__59757__auto____1.call(this,state_70753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__59757__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__59757__auto____0;
taoensso$sente$state_machine__59757__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__59757__auto____1;
return taoensso$sente$state_machine__59757__auto__;
})()
;})(switch__59756__auto__,c__60039__auto___71924,timeout_ms_71923,temp__5735__auto___71922__$1,cb_uuid_71921,temp__5735__auto___71920,_QMARK_cb_uuid,ppstr,map__70708,map__70708__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__60041__auto__ = (function (){var statearr_70765 = (f__60040__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60040__auto__.cljs$core$IFn$_invoke$arity$0() : f__60040__auto__.call(null));
(statearr_70765[(6)] = c__60039__auto___71924);

return statearr_70765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60041__auto__);
});})(c__60039__auto___71924,timeout_ms_71923,temp__5735__auto___71922__$1,cb_uuid_71921,temp__5735__auto___71920,_QMARK_cb_uuid,ppstr,map__70708,map__70708__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref(self__.socket_).send(ppstr);

cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e70767){var e = e70767;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1008,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__70708,map__70708__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__70708,map__70708__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,-74815637);

var temp__5735__auto___71943 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5735__auto___71943)){
var cb_uuid_71944 = temp__5735__auto___71943;
var cb_fn_STAR__71945 = (function (){var or__4131__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_71944);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e70768){if((e70768 instanceof Error)){
var e__$1 = e70768;
return e__$1;
} else {
throw e70768;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1011,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
var G__70769_71948 = new cljs.core.Keyword("chsk","error","chsk/error",-984175439);
(cb_fn_STAR__71945.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__71945.cljs$core$IFn$_invoke$arity$1(G__70769_71948) : cb_fn_STAR__71945.call(null,G__70769_71948));
} else {
}

return false;
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5735__auto__ = (function (){var or__4131__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"WebSocket");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"MozWebSocket");
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var WebSocket = temp__5735__auto__;
var instance_handle = cljs.core.reset_BANG_(self__.instance_handle_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var have_handle_QMARK_ = ((function (instance_handle,WebSocket,temp__5735__auto__,chsk__$1){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.instance_handle_),instance_handle);
});})(instance_handle,WebSocket,temp__5735__auto__,chsk__$1))
;
var connect_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function taoensso$sente$connect_fn(){
if(have_handle_QMARK_()){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.retry_count_,cljs.core.inc);
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1033,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
,null)),null,-319817482);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (p1__70625_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__70625_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))], null)], 0)))));
}catch (e70773){var e = e70773;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1048,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
,null)),null,-1179474835);

return null;
}})();
if(cljs.core.not(_QMARK_socket)){
return retry_fn();
} else {
return cljs.core.reset_BANG_(self__.socket_,(function (){var G__70774 = _QMARK_socket;
(G__70774["onerror"] = ((function (G__70774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1058,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__70774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ws_ev);
}catch (e70775){var _ = e70775;
return ws_ev;
}})()], null);
});})(G__70774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
,null)),null,1739155292);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (last_ws_error,G__70774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (p1__70629_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__70629_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error);
});})(last_ws_error,G__70774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
);
});})(G__70774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
);

(G__70774["onmessage"] = ((function (G__70774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__70777 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70777,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70777,(1),null);
cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

var or__4131__auto__ = ((taoensso.sente.handshake_QMARK_(clj))?(function (){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_(self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var temp__5733__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5733__auto__)){
var cb_uuid = temp__5733__auto__;
var temp__5733__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__5733__auto____$1)){
var cb_fn = temp__5733__auto____$1;
return (cb_fn.cljs$core$IFn$_invoke$arity$1 ? cb_fn.cljs$core$IFn$_invoke$arity$1(clj) : cb_fn.call(null,clj));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1094,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__5733__auto____$1,cb_uuid,temp__5733__auto__,or__4131__auto____$1,or__4131__auto__,ppstr,vec__70777,clj,_QMARK_cb_uuid,G__70774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__5733__auto____$1,cb_uuid,temp__5733__auto__,or__4131__auto____$1,or__4131__auto__,ppstr,vec__70777,clj,_QMARK_cb_uuid,G__70774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
,null)),null,-1815615110);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});})(G__70774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
);

(G__70774["onclose"] = ((function (G__70774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"wasClean");
var code = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"code");
var reason = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente",null,1116,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__70774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__70774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
,null)),null,1570625808);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__70774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (p1__70633_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__70633_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__70774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__70774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (p1__70634_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.sente.chsk_state__GT_closed(p1__70634_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__70774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
);

return retry_fn();
}
});})(G__70774,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
);

return G__70774;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
;
var temp__5735__auto___71966__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5735__auto___71966__$1)){
var ms_71967 = temp__5735__auto___71966__$1;
var c__60039__auto___71968 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60039__auto___71968,ms_71967,temp__5735__auto___71966__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5735__auto__,chsk__$1){
return (function (){
var f__60040__auto__ = (function (){var switch__59756__auto__ = ((function (c__60039__auto___71968,ms_71967,temp__5735__auto___71966__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5735__auto__,chsk__$1){
return (function (state_70821){
var state_val_70822 = (state_70821[(1)]);
if((state_val_70822 === (7))){
var inst_70817 = (state_70821[(2)]);
var state_70821__$1 = state_70821;
var statearr_70823_71969 = state_70821__$1;
(statearr_70823_71969[(2)] = inst_70817);

(statearr_70823_71969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70822 === (1))){
var state_70821__$1 = state_70821;
var statearr_70824_71970 = state_70821__$1;
(statearr_70824_71970[(2)] = null);

(statearr_70824_71970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70822 === (4))){
var inst_70798 = (state_70821[(2)]);
var inst_70799 = have_handle_QMARK_();
var state_70821__$1 = (function (){var statearr_70825 = state_70821;
(statearr_70825[(7)] = inst_70798);

return statearr_70825;
})();
if(inst_70799){
var statearr_70826_71971 = state_70821__$1;
(statearr_70826_71971[(1)] = (5));

} else {
var statearr_70827_71972 = state_70821__$1;
(statearr_70827_71972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70822 === (6))){
var state_70821__$1 = state_70821;
var statearr_70830_71974 = state_70821__$1;
(statearr_70830_71974[(2)] = null);

(statearr_70830_71974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70822 === (3))){
var inst_70819 = (state_70821[(2)]);
var state_70821__$1 = state_70821;
return cljs.core.async.impl.ioc_helpers.return_chan(state_70821__$1,inst_70819);
} else {
if((state_val_70822 === (2))){
var inst_70795 = cljs.core.deref(self__.udt_last_comms_);
var inst_70796 = cljs.core.async.timeout(ms_71967);
var state_70821__$1 = (function (){var statearr_70831 = state_70821;
(statearr_70831[(8)] = inst_70795);

return statearr_70831;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_70821__$1,(4),inst_70796);
} else {
if((state_val_70822 === (9))){
var state_70821__$1 = state_70821;
var statearr_70832_71976 = state_70821__$1;
(statearr_70832_71976[(2)] = null);

(statearr_70832_71976[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70822 === (5))){
var inst_70795 = (state_70821[(8)]);
var inst_70801 = cljs.core.deref(self__.udt_last_comms_);
var inst_70802 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_70795,inst_70801);
var state_70821__$1 = state_70821;
if(inst_70802){
var statearr_70834_71977 = state_70821__$1;
(statearr_70834_71977[(1)] = (8));

} else {
var statearr_70835_71978 = state_70821__$1;
(statearr_70835_71978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70822 === (10))){
var inst_70813 = (state_70821[(2)]);
var state_70821__$1 = (function (){var statearr_70836 = state_70821;
(statearr_70836[(9)] = inst_70813);

return statearr_70836;
})();
var statearr_70838_71979 = state_70821__$1;
(statearr_70838_71979[(2)] = null);

(statearr_70838_71979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70822 === (8))){
var inst_70804 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70805 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_70806 = (new cljs.core.PersistentVector(null,1,(5),inst_70804,inst_70805,null));
var inst_70807 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_70808 = [true];
var inst_70809 = cljs.core.PersistentHashMap.fromArrays(inst_70807,inst_70808);
var inst_70810 = chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null,inst_70806,inst_70809);
var state_70821__$1 = state_70821;
var statearr_70841_71980 = state_70821__$1;
(statearr_70841_71980[(2)] = inst_70810);

(statearr_70841_71980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__60039__auto___71968,ms_71967,temp__5735__auto___71966__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5735__auto__,chsk__$1))
;
return ((function (switch__59756__auto__,c__60039__auto___71968,ms_71967,temp__5735__auto___71966__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5735__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__59757__auto__ = null;
var taoensso$sente$state_machine__59757__auto____0 = (function (){
var statearr_70842 = [null,null,null,null,null,null,null,null,null,null];
(statearr_70842[(0)] = taoensso$sente$state_machine__59757__auto__);

(statearr_70842[(1)] = (1));

return statearr_70842;
});
var taoensso$sente$state_machine__59757__auto____1 = (function (state_70821){
while(true){
var ret_value__59758__auto__ = (function (){try{while(true){
var result__59759__auto__ = switch__59756__auto__(state_70821);
if(cljs.core.keyword_identical_QMARK_(result__59759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59759__auto__;
}
break;
}
}catch (e70843){if((e70843 instanceof Object)){
var ex__59760__auto__ = e70843;
var statearr_70844_71981 = state_70821;
(statearr_70844_71981[(5)] = ex__59760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_70821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70843;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71983 = state_70821;
state_70821 = G__71983;
continue;
} else {
return ret_value__59758__auto__;
}
break;
}
});
taoensso$sente$state_machine__59757__auto__ = function(state_70821){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__59757__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__59757__auto____1.call(this,state_70821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__59757__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__59757__auto____0;
taoensso$sente$state_machine__59757__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__59757__auto____1;
return taoensso$sente$state_machine__59757__auto__;
})()
;})(switch__59756__auto__,c__60039__auto___71968,ms_71967,temp__5735__auto___71966__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5735__auto__,chsk__$1))
})();
var state__60041__auto__ = (function (){var statearr_70845 = (f__60040__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60040__auto__.cljs$core$IFn$_invoke$arity$0() : f__60040__auto__.call(null));
(statearr_70845[(6)] = c__60039__auto___71968);

return statearr_70845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60041__auto__);
});})(c__60039__auto___71968,ms_71967,temp__5735__auto___71966__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5735__auto__,chsk__$1))
);

} else {
}

cljs.core.reset_BANG_(self__.retry_count_,(0));

connect_fn();

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"ws-kalive-ms","ws-kalive-ms",-1212255801,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"udt-last-comms_","udt-last-comms_",1494731888,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChWebSocket",null,(1),null));
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"taoensso.sente/ChWebSocket");
});

/**
 * Positional factory function for taoensso.sente/ChWebSocket.
 */
taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChWebSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__70639){
var extmap__4424__auto__ = (function (){var G__70849 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__70639,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], 0));
if(cljs.core.record_QMARK_(G__70639)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__70849);
} else {
return G__70849;
}
})();
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__70639),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__70639),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__70639),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__70639),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__70639),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__70639),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__70639),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__70639),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__70639),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__70639),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__70639),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__70639),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__70639),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__70639),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChWebSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(60)], 0));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k70861,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__70871 = k70861;
var G__70871__$1 = (((G__70871 instanceof cljs.core.Keyword))?G__70871.fqn:null);
switch (G__70871__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k70861,else__4388__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__70874){
var vec__70875 = p__70874;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70875,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70875,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__70860){
var self__ = this;
var G__70860__$1 = this;
return (new cljs.core.RecordIter((0),G__70860__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__70880 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__70880(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this70862,other70863){
var self__ = this;
var this70862__$1 = this;
return (((!((other70863 == null)))) && ((this70862__$1.constructor === other70863.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70862__$1.client_id,other70863.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70862__$1.chs,other70863.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70862__$1.params,other70863.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70862__$1.packer,other70863.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70862__$1.url,other70863.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70862__$1.state_,other70863.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70862__$1.instance_handle_,other70863.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70862__$1.ever_opened_QMARK__,other70863.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70862__$1.backoff_ms_fn,other70863.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70862__$1.ajax_opts,other70863.ajax_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70862__$1.curr_xhr_,other70863.curr_xhr_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70862__$1.__extmap,other70863.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__70860){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__70882 = cljs.core.keyword_identical_QMARK_;
var expr__70883 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__70886 = new cljs.core.Keyword(null,"client-id","client-id",-464622140);
var G__70887 = expr__70883;
return (pred__70882.cljs$core$IFn$_invoke$arity$2 ? pred__70882.cljs$core$IFn$_invoke$arity$2(G__70886,G__70887) : pred__70882.call(null,G__70886,G__70887));
})())){
return (new taoensso.sente.ChAjaxSocket(G__70860,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70888 = new cljs.core.Keyword(null,"chs","chs",376886120);
var G__70889 = expr__70883;
return (pred__70882.cljs$core$IFn$_invoke$arity$2 ? pred__70882.cljs$core$IFn$_invoke$arity$2(G__70888,G__70889) : pred__70882.call(null,G__70888,G__70889));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__70860,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70890 = new cljs.core.Keyword(null,"params","params",710516235);
var G__70891 = expr__70883;
return (pred__70882.cljs$core$IFn$_invoke$arity$2 ? pred__70882.cljs$core$IFn$_invoke$arity$2(G__70890,G__70891) : pred__70882.call(null,G__70890,G__70891));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__70860,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70892 = new cljs.core.Keyword(null,"packer","packer",66077544);
var G__70893 = expr__70883;
return (pred__70882.cljs$core$IFn$_invoke$arity$2 ? pred__70882.cljs$core$IFn$_invoke$arity$2(G__70892,G__70893) : pred__70882.call(null,G__70892,G__70893));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__70860,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70894 = new cljs.core.Keyword(null,"url","url",276297046);
var G__70895 = expr__70883;
return (pred__70882.cljs$core$IFn$_invoke$arity$2 ? pred__70882.cljs$core$IFn$_invoke$arity$2(G__70894,G__70895) : pred__70882.call(null,G__70894,G__70895));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__70860,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70896 = new cljs.core.Keyword(null,"state_","state_",957667102);
var G__70897 = expr__70883;
return (pred__70882.cljs$core$IFn$_invoke$arity$2 ? pred__70882.cljs$core$IFn$_invoke$arity$2(G__70896,G__70897) : pred__70882.call(null,G__70896,G__70897));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__70860,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70898 = new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457);
var G__70899 = expr__70883;
return (pred__70882.cljs$core$IFn$_invoke$arity$2 ? pred__70882.cljs$core$IFn$_invoke$arity$2(G__70898,G__70899) : pred__70882.call(null,G__70898,G__70899));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__70860,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70900 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913);
var G__70901 = expr__70883;
return (pred__70882.cljs$core$IFn$_invoke$arity$2 ? pred__70882.cljs$core$IFn$_invoke$arity$2(G__70900,G__70901) : pred__70882.call(null,G__70900,G__70901));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__70860,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70902 = new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955);
var G__70903 = expr__70883;
return (pred__70882.cljs$core$IFn$_invoke$arity$2 ? pred__70882.cljs$core$IFn$_invoke$arity$2(G__70902,G__70903) : pred__70882.call(null,G__70902,G__70903));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__70860,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70904 = new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109);
var G__70905 = expr__70883;
return (pred__70882.cljs$core$IFn$_invoke$arity$2 ? pred__70882.cljs$core$IFn$_invoke$arity$2(G__70904,G__70905) : pred__70882.call(null,G__70904,G__70905));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__70860,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70906 = new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696);
var G__70907 = expr__70883;
return (pred__70882.cljs$core$IFn$_invoke$arity$2 ? pred__70882.cljs$core$IFn$_invoke$arity$2(G__70906,G__70907) : pred__70882.call(null,G__70906,G__70907));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__70860,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__70860),null));
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_,null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__70860){
var self__ = this;
var this__4384__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__70860,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (chsk__$1){
return (function (p1__70851_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__70851_SHARP_,reason);
});})(chsk__$1))
);

var temp__5735__auto__ = cljs.core.deref(self__.curr_xhr_);
if(cljs.core.truth_(temp__5735__auto__)){
var x = temp__5735__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__70908 = opts;
var map__70908__$1 = (((((!((map__70908 == null))))?(((((map__70908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70908):map__70908);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70908__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70908__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70908__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_));
var G__70910_71997 = self__.url;
var G__70911_71998 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__4131__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)], 0)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null)], 0));
})()], null)], 0));
var G__70912_71999 = ((function (G__70910_71997,G__70911_71998,csrf_token,map__70908,map__70908__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__70913){
var map__70914 = p__70913;
var map__70914__$1 = (((((!((map__70914 == null))))?(((((map__70914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70914):map__70914);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70914__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70914__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
var G__70917 = new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489);
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__70917) : _QMARK_cb_fn.call(null,G__70917));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (map__70914,map__70914__$1,_QMARK_error,_QMARK_content,G__70910_71997,G__70911_71998,csrf_token,map__70908,map__70908__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__70852_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__70852_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__70914,map__70914__$1,_QMARK_error,_QMARK_content,G__70910_71997,G__70911_71998,csrf_token,map__70908,map__70908__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__70918 = new cljs.core.Keyword("chsk","error","chsk/error",-984175439);
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__70918) : _QMARK_cb_fn.call(null,G__70918));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__70919 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70919,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70919,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null,resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1237,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__70919,resp_clj,___$1,map__70914,map__70914__$1,_QMARK_error,_QMARK_content,G__70910_71997,G__70911_71998,csrf_token,map__70908,map__70908__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__70919,resp_clj,___$1,map__70914,map__70914__$1,_QMARK_error,_QMARK_content,G__70910_71997,G__70911_71998,csrf_token,map__70908,map__70908__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,1159203541);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (content,resp_ppstr,vec__70919,resp_clj,___$1,map__70914,map__70914__$1,_QMARK_error,_QMARK_content,G__70910_71997,G__70911_71998,csrf_token,map__70908,map__70908__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__70853_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__70853_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,resp_ppstr,vec__70919,resp_clj,___$1,map__70914,map__70914__$1,_QMARK_error,_QMARK_content,G__70910_71997,G__70911_71998,csrf_token,map__70908,map__70908__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(G__70910_71997,G__70911_71998,csrf_token,map__70908,map__70908__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
(taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__70910_71997,G__70911_71998,G__70912_71999) : taoensso.sente.ajax_lite.call(null,G__70910_71997,G__70911_71998,G__70912_71999));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_(self__.instance_handle_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var have_handle_QMARK_ = ((function (instance_handle,chsk__$1){
return (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.instance_handle_),instance_handle);
});})(instance_handle,chsk__$1))
;
var poll_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,1247,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,392189519);

if(have_handle_QMARK_()){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1255,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,1791347615);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn(retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__70855_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__70855_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_(self__.curr_xhr_,(function (){var G__70926 = self__.url;
var G__70927 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null))], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))], null)], 0))], null)], 0));
var G__70928 = ((function (G__70926,G__70927,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__70929){
var map__70930 = p__70929;
var map__70930__$1 = (((((!((map__70930 == null))))?(((((map__70930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70930):map__70930);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70930__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70930__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (map__70930,map__70930__$1,_QMARK_error,_QMARK_content,G__70926,G__70927,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__70857_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__70857_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__70930,map__70930__$1,_QMARK_error,_QMARK_content,G__70926,G__70927,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__70934 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70934,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_(clj);
if(handshake_QMARK_){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (content,ppstr,vec__70934,clj,handshake_QMARK_,map__70930,map__70930__$1,_QMARK_error,_QMARK_content,G__70926,G__70927,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__70859_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__70859_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,ppstr,vec__70934,clj,handshake_QMARK_,map__70930,map__70930__$1,_QMARK_error,_QMARK_content,G__70926,G__70927,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

taoensso$sente$poll_fn((0));

if(handshake_QMARK_){
return null;
} else {
var or__4131__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref(taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_(self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});})(G__70926,G__70927,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
;
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__70926,G__70927,G__70928) : taoensso.sente.ajax_lite.call(null,G__70926,G__70927,G__70928));
})());
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
poll_fn((0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAjaxSocket",null,(1),null));
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"taoensso.sente/ChAjaxSocket");
});

/**
 * Positional factory function for taoensso.sente/ChAjaxSocket.
 */
taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAjaxSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__70866){
var extmap__4424__auto__ = (function (){var G__70942 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__70866,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], 0));
if(cljs.core.record_QMARK_(G__70866)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__70942);
} else {
return G__70942;
}
})();
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__70866),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__70866),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__70866),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__70866),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__70866),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__70866),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__70866),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__70866),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__70866),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__70866),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__70866),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAjaxSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k70947,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__70963 = k70947;
var G__70963__$1 = (((G__70963 instanceof cljs.core.Keyword))?G__70963.fqn:null);
switch (G__70963__$1) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k70947,else__4388__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__70967){
var vec__70968 = p__70967;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70968,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70968,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__70946){
var self__ = this;
var G__70946__$1 = this;
return (new cljs.core.RecordIter((0),G__70946__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__70980 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1193508708 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__70980(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this70948,other70949){
var self__ = this;
var this70948__$1 = this;
return (((!((other70949 == null)))) && ((this70948__$1.constructor === other70949.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70948__$1.ws_chsk_opts,other70949.ws_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70948__$1.ajax_chsk_opts,other70949.ajax_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70948__$1.state_,other70949.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70948__$1.impl_,other70949.impl_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this70948__$1.__extmap,other70949.__extmap)));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__70946){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__70987 = cljs.core.keyword_identical_QMARK_;
var expr__70988 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__70990 = new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104);
var G__70991 = expr__70988;
return (pred__70987.cljs$core$IFn$_invoke$arity$2 ? pred__70987.cljs$core$IFn$_invoke$arity$2(G__70990,G__70991) : pred__70987.call(null,G__70990,G__70991));
})())){
return (new taoensso.sente.ChAutoSocket(G__70946,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70992 = new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327);
var G__70993 = expr__70988;
return (pred__70987.cljs$core$IFn$_invoke$arity$2 ? pred__70987.cljs$core$IFn$_invoke$arity$2(G__70992,G__70993) : pred__70987.call(null,G__70992,G__70993));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__70946,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70994 = new cljs.core.Keyword(null,"state_","state_",957667102);
var G__70995 = expr__70988;
return (pred__70987.cljs$core$IFn$_invoke$arity$2 ? pred__70987.cljs$core$IFn$_invoke$arity$2(G__70994,G__70995) : pred__70987.call(null,G__70994,G__70995));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__70946,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__70996 = new cljs.core.Keyword(null,"impl_","impl_",1218818179);
var G__70997 = expr__70988;
return (pred__70987.cljs$core$IFn$_invoke$arity$2 ? pred__70987.cljs$core$IFn$_invoke$arity$2(G__70996,G__70997) : pred__70987.call(null,G__70996,G__70997));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__70946,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__70946),null));
}
}
}
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_,null))], null),self__.__extmap));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__70946){
var self__ = this;
var this__4384__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__70946,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__5735__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5735__auto__)){
var impl = temp__5735__auto__;
return taoensso.sente._chsk_disconnect_BANG_(impl,reason);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5735__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5735__auto__)){
var impl = temp__5735__auto__;
taoensso.sente._chsk_disconnect_BANG_(impl,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
} else {
return null;
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__5733__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5733__auto__)){
var impl = temp__5733__auto__;
return taoensso.sente._chsk_send_BANG_(impl,ev,opts);
} else {
var map__71012 = opts;
var map__71012__$1 = (((((!((map__71012 == null))))?(((((map__71012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71012):map__71012);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71012__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
}
});

taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1){
return (function (){
cljs.core.remove_watch(self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))).taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,chsk__$1))
;
var ws_conn_BANG_ = ((function (ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
var downgraded_QMARK___72005 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.add_watch(self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),((function (downgraded_QMARK___72005,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (_,___$1,old_state,new_state){
var temp__5735__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5735__auto__)){
var impl = temp__5735__auto__;
var temp__5735__auto____$1 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ever_opened_QMARK__ = temp__5735__auto____$1;
if(cljs.core.truth_(cljs.core.deref(ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502).cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.compare_and_set_BANG_(downgraded_QMARK___72005,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1388,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__5735__auto____$1,impl,temp__5735__auto__,downgraded_QMARK___72005,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__5735__auto____$1,impl,temp__5735__auto__,downgraded_QMARK___72005,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,1887047438);

taoensso.sente._chsk_disconnect_BANG_(impl,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720));

return cljs.core.reset_BANG_(self__.impl_,ajax_conn_BANG_());
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});})(downgraded_QMARK___72005,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
);

return taoensso.sente.new_ChWebSocket(ws_chsk_opts__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))).taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});})(ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
;
cljs.core.reset_BANG_(self__.impl_,(function (){var or__4131__auto__ = ws_conn_BANG_();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ajax_conn_BANG_();
}
})());

return chsk__$1;
});

taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
});

taoensso.sente.ChAutoSocket.cljs$lang$type = true;

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAutoSocket",null,(1),null));
});

taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"taoensso.sente/ChAutoSocket");
});

/**
 * Positional factory function for taoensso.sente/ChAutoSocket.
 */
taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAutoSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__70952){
var extmap__4424__auto__ = (function (){var G__71024 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__70952,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], 0));
if(cljs.core.record_QMARK_(G__70952)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__71024);
} else {
return G__71024;
}
})();
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__70952),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__70952),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__70952),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__70952),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAutoSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__71031 = protocol;
var G__71031__$1 = (((G__71031 instanceof cljs.core.Keyword))?G__71031.fqn:null);
switch (G__71031__$1) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if((function (){var fexpr__71034 = ((function (protocol__$1){
return (function (x){
return cljs.core.contains_QMARK_((function (){var G__71035 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__71035) : taoensso.truss.impl.set_STAR_.call(null,G__71035));
})(),x);
});})(protocol__$1))
;
return fexpr__71034(protocol__$1);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e71032){if((e71032 instanceof Error)){
var e = e71032;
return e;
} else {
throw e71032;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1408,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__71036 = type;
var G__71036__$1 = (((G__71036 instanceof cljs.core.Keyword))?G__71036.fqn:null);
switch (G__71036__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__71037 = protocol__$2;
switch (G__71037) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71037)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71036__$1)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$3),"//",taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([host,path], 0))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *     :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72009 = arguments.length;
var i__4731__auto___72010 = (0);
while(true){
if((i__4731__auto___72010 < len__4730__auto___72009)){
args__4736__auto__.push((arguments[i__4731__auto___72010]));

var G__72011 = (i__4731__auto___72010 + (1));
i__4731__auto___72010 = G__72011;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,_QMARK_csrf_token,p__71049){
var vec__71050 = p__71049;
var map__71053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71050,(0),null);
var map__71053__$1 = (((((!((map__71053 == null))))?(((((map__71053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71053):map__71053);
var opts = map__71053__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71053__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71053__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(20)], 0)));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71053__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71053__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71053__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71053__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71053__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71053__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71053__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71053__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71053__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71050,(1),null);
var e_72012 = (function (){try{if((function (){var fexpr__71063 = ((function (vec__71050,map__71053,map__71053__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_((function (){var G__71064 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__71064) : taoensso.truss.impl.set_STAR_.call(null,G__71064));
})(),x);
});})(vec__71050,map__71053,map__71053__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
return fexpr__71063(type);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e71057){if((e71057 instanceof Error)){
var e = e71057;
return e;
} else {
throw e71057;

}
}})();
if((e_72012 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1450,"([:in #{:ws :ajax :auto}] type)",type,e_72012,null);
}

var e_72013 = (function (){try{if(taoensso.encore.nblank_str_QMARK_(client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e71065){if((e71065 instanceof Error)){
var e = e71065;
return e;
} else {
throw e71065;

}
}})();
if((e_72013 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1451,"(enc/nblank-str? client-id)",client_id,e_72013,null);
}

if((!((_deprecated_more_opts == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1453,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__71050,map__71053,map__71053__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__71050,map__71053,map__71053__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,51728422);
} else {
}

if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1454,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__71050,map__71053,map__71053__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__71050,map__71053,map__71053__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-1287082109);
} else {
}

if((((!(typeof _QMARK_csrf_token === 'string'))) || (clojure.string.blank_QMARK_(_QMARK_csrf_token)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1457,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__71050,map__71053,map__71053__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WARNING: no CSRF token provided. Connections will FAIL if server-side CSRF check is enabled (as it is by default)."], null);
});})(vec__71050,map__71053,map__71053__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-102471400);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var vec__71066 = (function (){var win_loc = taoensso.encore.get_win_loc();
var path__$1 = (function (){var or__4131__auto__ = path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__5733__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__71069 = path__$1;
var G__71070 = win_loc;
var G__71071 = new cljs.core.Keyword(null,"ws","ws",86841443);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__71069,G__71070,G__71071) : f.call(null,G__71069,G__71070,G__71071));
})(),(function (){var G__71072 = path__$1;
var G__71073 = win_loc;
var G__71074 = new cljs.core.Keyword(null,"ajax","ajax",814345549);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__71072,G__71073,G__71074) : f.call(null,G__71072,G__71073,G__71074));
})()], null);
} else {
var protocol__$1 = (function (){var or__4131__auto__ = protocol;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (function (){var or__4131__auto__ = host;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71066,(0),null);
var ajax_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71066,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer((512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (buf,packer__$1,vec__71066,ws_url,ajax_url,vec__71050,map__71053,map__71053__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(buf,packer__$1,vec__71066,ws_url,ajax_url,vec__71050,map__71053,map__71053__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null)], 0));
var ajax_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null)], 0));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_((function (){var G__71078 = type;
var G__71078__$1 = (((G__71078 instanceof cljs.core.Keyword))?G__71078.fqn:null);
switch (G__71078__$1) {
case "ws":
return taoensso.sente.new_ChWebSocket(ws_chsk_opts,_QMARK_csrf_token);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts,_QMARK_csrf_token);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket(auto_chsk_opts,_QMARK_csrf_token);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71078__$1)].join('')));

}
})());
var temp__5733__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__5733__auto__)){
var chsk = temp__5733__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__5733__auto__,packer__$1,vec__71066,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__71050,map__71053,map__71053__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__71079 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71079,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71079,(1),null);
var ev__$1 = vec__71079;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__5733__auto__,packer__$1,vec__71066,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__71050,map__71053,map__71053__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente",null,1545,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__5733__auto__,packer__$1,vec__71066,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__71050,map__71053,map__71053__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__5733__auto__,packer__$1,vec__71066,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__71050,map__71053,map__71053__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,763359840);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq71046){
var G__71047 = cljs.core.first(seq71046);
var seq71046__$1 = cljs.core.next(seq71046);
var G__71048 = cljs.core.first(seq71046__$1);
var seq71046__$2 = cljs.core.next(seq71046__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71047,G__71048,seq71046__$2);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__71085 = opts;
var map__71085__$1 = (((((!((map__71085 == null))))?(((((map__71085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71085):map__71085);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71085__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71085__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71085__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var execute1 = ((function (map__71085,map__71085__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});})(map__71085,map__71085__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__60039__auto___72015 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60039__auto___72015,map__71085,map__71085__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__60040__auto__ = (function (){var switch__59756__auto__ = ((function (c__60039__auto___72015,map__71085,map__71085__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_71142){
var state_val_71143 = (state_71142[(1)]);
if((state_val_71143 === (7))){
var inst_71137 = (state_71142[(2)]);
var state_71142__$1 = state_71142;
var statearr_71144_72016 = state_71142__$1;
(statearr_71144_72016[(2)] = inst_71137);

(statearr_71144_72016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71143 === (1))){
var state_71142__$1 = state_71142;
var statearr_71145_72017 = state_71142__$1;
(statearr_71145_72017[(2)] = null);

(statearr_71145_72017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71143 === (4))){
var inst_71100 = (state_71142[(7)]);
var inst_71102 = (state_71142[(8)]);
var inst_71105 = (state_71142[(9)]);
var inst_71101 = (state_71142[(10)]);
var inst_71100__$1 = (state_71142[(2)]);
var inst_71101__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71100__$1,(0),null);
var inst_71102__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71100__$1,(1),null);
var inst_71103 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71102__$1,ch_ctrl);
var inst_71104 = (inst_71101__$1 == null);
var inst_71105__$1 = ((inst_71103) || (inst_71104));
var state_71142__$1 = (function (){var statearr_71146 = state_71142;
(statearr_71146[(7)] = inst_71100__$1);

(statearr_71146[(8)] = inst_71102__$1);

(statearr_71146[(9)] = inst_71105__$1);

(statearr_71146[(10)] = inst_71101__$1);

return statearr_71146;
})();
if(cljs.core.truth_(inst_71105__$1)){
var statearr_71148_72018 = state_71142__$1;
(statearr_71148_72018[(1)] = (5));

} else {
var statearr_71150_72019 = state_71142__$1;
(statearr_71150_72019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71143 === (15))){
var inst_71101 = (state_71142[(10)]);
var state_71142__$1 = state_71142;
var statearr_71153_72020 = state_71142__$1;
(statearr_71153_72020[(2)] = inst_71101);

(statearr_71153_72020[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71143 === (13))){
var inst_71121 = (state_71142[(2)]);
var state_71142__$1 = state_71142;
var statearr_71154_72021 = state_71142__$1;
(statearr_71154_72021[(2)] = inst_71121);

(statearr_71154_72021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71143 === (6))){
var inst_71101 = (state_71142[(10)]);
var inst_71110 = (inst_71101 == null);
var inst_71111 = cljs.core.not(inst_71110);
var state_71142__$1 = state_71142;
if(inst_71111){
var statearr_71155_72022 = state_71142__$1;
(statearr_71155_72022[(1)] = (8));

} else {
var statearr_71159_72023 = state_71142__$1;
(statearr_71159_72023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71143 === (3))){
var inst_71139 = (state_71142[(2)]);
var state_71142__$1 = state_71142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71142__$1,inst_71139);
} else {
if((state_val_71143 === (12))){
var state_71142__$1 = state_71142;
var statearr_71163_72024 = state_71142__$1;
(statearr_71163_72024[(2)] = false);

(statearr_71163_72024[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71143 === (2))){
var inst_71096 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71097 = [ch_recv,ch_ctrl];
var inst_71098 = (new cljs.core.PersistentVector(null,2,(5),inst_71096,inst_71097,null));
var state_71142__$1 = state_71142;
return cljs.core.async.ioc_alts_BANG_(state_71142__$1,(4),inst_71098);
} else {
if((state_val_71143 === (11))){
var state_71142__$1 = state_71142;
var statearr_71164_72025 = state_71142__$1;
(statearr_71164_72025[(2)] = true);

(statearr_71164_72025[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71143 === (9))){
var state_71142__$1 = state_71142;
var statearr_71165_72026 = state_71142__$1;
(statearr_71165_72026[(2)] = false);

(statearr_71165_72026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71143 === (5))){
var state_71142__$1 = state_71142;
var statearr_71166_72027 = state_71142__$1;
(statearr_71166_72027[(2)] = null);

(statearr_71166_72027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71143 === (14))){
var inst_71101 = (state_71142[(10)]);
var inst_71126 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_71101);
var state_71142__$1 = state_71142;
var statearr_71168_72028 = state_71142__$1;
(statearr_71168_72028[(2)] = inst_71126);

(statearr_71168_72028[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71143 === (16))){
var inst_71100 = (state_71142[(7)]);
var inst_71102 = (state_71142[(8)]);
var inst_71105 = (state_71142[(9)]);
var inst_71101 = (state_71142[(10)]);
var inst_71129 = (state_71142[(2)]);
var inst_71130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71129,new cljs.core.Keyword(null,"event","event",301435442));
var inst_71133 = (function (){var vec__71093 = inst_71100;
var v = inst_71101;
var p = inst_71102;
var stop_QMARK_ = inst_71105;
var map__71108 = inst_71129;
var event_msg = inst_71129;
var event = inst_71130;
return ((function (vec__71093,v,p,stop_QMARK_,map__71108,event_msg,event,inst_71100,inst_71102,inst_71105,inst_71101,inst_71129,inst_71130,state_val_71143,c__60039__auto___72015,map__71085,map__71085__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente",null,1572,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__71093,v,p,stop_QMARK_,map__71108,event_msg,event,inst_71100,inst_71102,inst_71105,inst_71101,inst_71129,inst_71130,state_val_71143,c__60039__auto___72015,map__71085,map__71085__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__71093,v,p,stop_QMARK_,map__71108,event_msg,event,inst_71100,inst_71102,inst_71105,inst_71101,inst_71129,inst_71130,state_val_71143,c__60039__auto___72015,map__71085,map__71085__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,766581410);
} else {
}

var G__71174 = (cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(taoensso.sente.server_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e71175){if((e71175 instanceof Error)){
var e = e71175;
return e;
} else {
throw e71175;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1575,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(taoensso.sente.client_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e71176){if((e71176 instanceof Error)){
var e = e71176;
return e;
} else {
throw e71176;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1576,"(client-event-msg? event-msg)",event_msg,e,null);
}
})());
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__71174) : event_msg_handler.call(null,G__71174));
}catch (e71172){if((e71172 instanceof Error)){
var e1 = e71172;
try{var temp__5733__auto__ = error_handler;
if(cljs.core.truth_(temp__5733__auto__)){
var eh = temp__5733__auto__;
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(e1,event_msg) : error_handler.call(null,e1,event_msg));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1581,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__5733__auto__,e1,vec__71093,v,p,stop_QMARK_,map__71108,event_msg,event,inst_71100,inst_71102,inst_71105,inst_71101,inst_71129,inst_71130,state_val_71143,c__60039__auto___72015,map__71085,map__71085__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__5733__auto__,e1,vec__71093,v,p,stop_QMARK_,map__71108,event_msg,event,inst_71100,inst_71102,inst_71105,inst_71101,inst_71129,inst_71130,state_val_71143,c__60039__auto___72015,map__71085,map__71085__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,2015640576);
}
}catch (e71173){if((e71173 instanceof Error)){
var e2 = e71173;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente",null,1582,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e2,e1,vec__71093,v,p,stop_QMARK_,map__71108,event_msg,event,inst_71100,inst_71102,inst_71105,inst_71101,inst_71129,inst_71130,state_val_71143,c__60039__auto___72015,map__71085,map__71085__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__71093,v,p,stop_QMARK_,map__71108,event_msg,event,inst_71100,inst_71102,inst_71105,inst_71101,inst_71129,inst_71130,state_val_71143,c__60039__auto___72015,map__71085,map__71085__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,953096595);
} else {
throw e71173;

}
}} else {
throw e71172;

}
}});
;})(vec__71093,v,p,stop_QMARK_,map__71108,event_msg,event,inst_71100,inst_71102,inst_71105,inst_71101,inst_71129,inst_71130,state_val_71143,c__60039__auto___72015,map__71085,map__71085__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_71134 = execute1(inst_71133);
var state_71142__$1 = (function (){var statearr_71177 = state_71142;
(statearr_71177[(11)] = inst_71134);

return statearr_71177;
})();
var statearr_71178_72029 = state_71142__$1;
(statearr_71178_72029[(2)] = null);

(statearr_71178_72029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71143 === (10))){
var inst_71124 = (state_71142[(2)]);
var state_71142__$1 = state_71142;
if(cljs.core.truth_(inst_71124)){
var statearr_71179_72030 = state_71142__$1;
(statearr_71179_72030[(1)] = (14));

} else {
var statearr_71181_72031 = state_71142__$1;
(statearr_71181_72031[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71143 === (8))){
var inst_71101 = (state_71142[(10)]);
var inst_71113 = inst_71101.cljs$lang$protocol_mask$partition0$;
var inst_71114 = (inst_71113 & (64));
var inst_71115 = inst_71101.cljs$core$ISeq$;
var inst_71116 = (cljs.core.PROTOCOL_SENTINEL === inst_71115);
var inst_71117 = ((inst_71114) || (inst_71116));
var state_71142__$1 = state_71142;
if(cljs.core.truth_(inst_71117)){
var statearr_71183_72032 = state_71142__$1;
(statearr_71183_72032[(1)] = (11));

} else {
var statearr_71184_72033 = state_71142__$1;
(statearr_71184_72033[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__60039__auto___72015,map__71085,map__71085__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__59756__auto__,c__60039__auto___72015,map__71085,map__71085__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__59757__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__59757__auto____0 = (function (){
var statearr_71185 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71185[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__59757__auto__);

(statearr_71185[(1)] = (1));

return statearr_71185;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__59757__auto____1 = (function (state_71142){
while(true){
var ret_value__59758__auto__ = (function (){try{while(true){
var result__59759__auto__ = switch__59756__auto__(state_71142);
if(cljs.core.keyword_identical_QMARK_(result__59759__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59759__auto__;
}
break;
}
}catch (e71186){if((e71186 instanceof Object)){
var ex__59760__auto__ = e71186;
var statearr_71187_72034 = state_71142;
(statearr_71187_72034[(5)] = ex__59760__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71186;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59758__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72035 = state_71142;
state_71142 = G__72035;
continue;
} else {
return ret_value__59758__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__59757__auto__ = function(state_71142){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__59757__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__59757__auto____1.call(this,state_71142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__59757__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__59757__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__59757__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__59757__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__59757__auto__;
})()
;})(switch__59756__auto__,c__60039__auto___72015,map__71085,map__71085__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__60041__auto__ = (function (){var statearr_71189 = (f__60040__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60040__auto__.cljs$core$IFn$_invoke$arity$0() : f__60040__auto__.call(null));
(statearr_71189[(6)] = c__60039__auto___72015);

return statearr_71189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60041__auto__);
});})(c__60039__auto___72015,map__71085,map__71085__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__71085,map__71085__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_(ch_ctrl);
});
;})(map__71085,map__71085__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72036 = arguments.length;
var i__4731__auto___72037 = (0);
while(true){
if((i__4731__auto___72037 < len__4730__auto___72036)){
args__4736__auto__.push((arguments[i__4731__auto___72037]));

var G__72038 = (i__4731__auto___72037 + (1));
i__4731__auto___72037 = G__72038;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__71196){
var vec__71198 = p__71196;
var map__71201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71198,(0),null);
var map__71201__$1 = (((((!((map__71201 == null))))?(((((map__71201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71201):map__71201);
var opts = map__71201__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71201__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71201__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71201__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_(new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq71190){
var G__71191 = cljs.core.first(seq71190);
var seq71190__$1 = cljs.core.next(seq71190);
var G__71192 = cljs.core.first(seq71190__$1);
var seq71190__$2 = cljs.core.next(seq71190__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71191,G__71192,seq71190__$2);
});

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72039 = arguments.length;
var i__4731__auto___72040 = (0);
while(true){
if((i__4731__auto___72040 < len__4730__auto___72039)){
args__4736__auto__.push((arguments[i__4731__auto___72040]));

var G__72041 = (i__4731__auto___72040 + (1));
i__4731__auto___72040 = G__72041;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__71206){
var vec__71207 = p__71206;
var map__71210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71207,(0),null);
var map__71210__$1 = (((((!((map__71210 == null))))?(((((map__71210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71210):map__71210);
var opts = map__71210__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71210__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71210__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq71203){
var G__71204 = cljs.core.first(seq71203);
var seq71203__$1 = cljs.core.next(seq71203);
var G__71205 = cljs.core.first(seq71203__$1);
var seq71203__$2 = cljs.core.next(seq71203__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71204,G__71205,seq71203__$2);
});

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_(ch_recv,(function (ev_msg){
var G__71222 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__71223 = new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__71222,G__71223) : event_handler.call(null,G__71222,G__71223));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__71225,websocket_QMARK_){
var map__71226 = p__71225;
var map__71226__$1 = (((((!((map__71226 == null))))?(((((map__71226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71226):map__71226);
var location = map__71226__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71226__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71226__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71226__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=taoensso.sente.js.map
