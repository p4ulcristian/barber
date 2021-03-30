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
if(cljs.core.not((function (){var G__13390 = cljs.core.count(x);
var fexpr__13389 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null);
return (fexpr__13389.cljs$core$IFn$_invoke$arity$1 ? fexpr__13389.cljs$core$IFn$_invoke$arity$1(G__13390) : fexpr__13389.call(null,G__13390));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__13391 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13391,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13391,(1),null);
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
var map__13407 = x;
var map__13407__$1 = (((((!((map__13407 == null))))?(((((map__13407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13407):map__13407);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13407__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13407__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13407__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13407__$1,new cljs.core.Keyword(null,"event","event",301435442));
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
var map__13423 = x;
var map__13423__$1 = (((((!((map__13423 == null))))?(((((map__13423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13423):map__13423);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13423__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13423__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13423__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13423__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13423__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13423__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13423__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
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
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__13430){
var map__13431 = p__13430;
var map__13431__$1 = (((((!((map__13431 == null))))?(((((map__13431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13431):map__13431);
var ev_msg = map__13431__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13431__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13431__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__13433 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13433,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13433,(1),null);
var valid_event = vec__13433;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null)], 0));
if((!(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_)))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",189,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__13433,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__13431,map__13431__$1,ev_msg,event,_QMARK_reply_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
});})(vec__13433,ev_id,ev__QMARK_data,valid_event,ev_msg_STAR_,map__13431,map__13431__$1,ev_msg,event,_QMARK_reply_fn))
,null)),null,279549960);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
var fexpr__13439 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null);
return (fexpr__13439.cljs$core$IFn$_invoke$arity$1 ? fexpr__13439.cljs$core$IFn$_invoke$arity$1(cb_reply_clj) : fexpr__13439.call(null,cb_reply_clj));
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
}catch (e13447){var t = e13447;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",210,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (t,wrapped_QMARK_,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t,wrapped_QMARK_,pstr))
,null)),null,-635255224);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__13444 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13444,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13444,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",216,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (wrapped_QMARK_,pstr,clj,vec__13444,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(wrapped_QMARK_,pstr,clj,vec__13444,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null,-173393322);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__13452 = arguments.length;
switch (G__13452) {
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",223,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",clj,pstr], null);
});})(pstr))
,null)),null,-926089922);

return pstr;
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,wrapped_clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",232,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (_QMARK_cb_uuid__$1,wrapped_clj,pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",wrapped_clj,pstr], null);
});})(_QMARK_cb_uuid__$1,wrapped_clj,pstr))
,null)),null,1717494989);

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
var e = (function (){try{if((function (){var fexpr__13461 = (function (p1__13457_SHARP_){
if((!((p1__13457_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__13457_SHARP_.taoensso$sente$interfaces$IPacker$)))){
return true;
} else {
if((!p1__13457_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__13457_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__13457_SHARP_);
}
});
return fexpr__13461(x);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e13458){if((e13458 instanceof Error)){
var e = e13458;
return e;
} else {
throw e13458;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",245,"((fn* [p1__13457#] (satisfies? interfaces/IPacker p1__13457#)) x)",x,e,null);
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
var len__4730__auto___14629 = arguments.length;
var i__4731__auto___14630 = (0);
while(true){
if((i__4731__auto___14630 < len__4730__auto___14629)){
args__4736__auto__.push((arguments[i__4731__auto___14630]));

var G__14632 = (i__4731__auto___14630 + (1));
i__4731__auto___14630 = G__14632;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__13485){
var vec__13487 = p__13485;
var map__13491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13487,(0),null);
var map__13491__$1 = (((((!((map__13491 == null))))?(((((map__13491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13491):map__13491);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13491__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(25)], 0)));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13491__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13491__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(20)], 0)));
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13491__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),((function (vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms){
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
});})(vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms))
);
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13491__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13491__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13491__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),((function (vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax){
return (function (ring_req){
return null;
});})(vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax))
);
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13491__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),((function (vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn){
return (function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
});})(vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn))
);
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13491__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((1000)));
var bad_csrf_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13491__$1,new cljs.core.Keyword(null,"bad-csrf-fn","bad-csrf-fn",16619032),((function (vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n){
return (function (ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Bad CSRF token"], null);
});})(vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n))
);
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e13498){if((e13498 instanceof Error)){
var e = e13498;
return e;
} else {
throw e13498;

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
}catch (e13499){if((e13499 instanceof Error)){
var e = e13499;
return e;
} else {
throw e13499;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",320,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_14648 = (function (){try{if((function (){var fexpr__13510 = ((function (vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (p1__13463_SHARP_){
if((!((p1__13463_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__13463_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)))){
return true;
} else {
if((!p1__13463_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__13463_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__13463_SHARP_);
}
});})(vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
return fexpr__13510(web_server_ch_adapter);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e13500){if((e13500 instanceof Error)){
var e = e13500;
return e;
} else {
throw e13500;

}
}})();
if((e_14648 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",321,"((fn* [p1__13463#] (satisfies? interfaces/IServerChanAdapter p1__13463#)) web-server-ch-adapter)",web_server_ch_adapter,e_14648,null);
}

var max_ms_14653 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_14653)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_14653)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_14653], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var user_id_fn__$1 = ((function (packer__$1,ch_recv,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (ring_req,client_id){
var or__4131__auto__ = (function (){var G__13523 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__13523) : user_id_fn.call(null,G__13523));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});})(packer__$1,ch_recv,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
var conns_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function() {
var G__14663 = null;
var G__14663__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (_QMARK_v){
var vec__13543 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13543,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13543,(1),null);
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);
});
var G__14663__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (_QMARK_v){
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);
});
G__14663 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__14663__3.call(this,conn_type,uid,client_id);
case 4:
return G__14663__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14663.cljs$core$IFn$_invoke$arity$3 = G__14663__3;
G__14663.cljs$core$IFn$_invoke$arity$4 = G__14663__4;
return G__14663;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
var connect_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e13567){if((e13567 instanceof Error)){
var e = e13567;
return e;
} else {
throw e13567;

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

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (p__13577){
var map__13582 = p__13577;
var map__13582__$1 = (((((!((map__13582 == null))))?(((((map__13582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13582):map__13582);
var old_m = map__13582__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13582__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13582__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13582__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__13605 = conn_type;
var G__13605__$1 = (((G__13605 instanceof cljs.core.Keyword))?G__13605.fqn:null);
switch (G__13605__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax__$1,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax__$1,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13605__$1)].join('')));

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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);
return newly_connected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
var upd_connected_uid_BANG_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e13610){if((e13610 instanceof Error)){
var e = e13610;
return e;
} else {
throw e13610;

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

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (p__13614){
var map__13615 = p__13614;
var map__13615__$1 = (((((!((map__13615 == null))))?(((((map__13615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13615):map__13615);
var old_m = map__13615__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13615__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13615__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13615__$1,new cljs.core.Keyword(null,"any","any",1705907423));
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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);
return newly_disconnected_QMARK_;
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
var send_fn = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function() { 
var G__14680__delegate = function (user_id,ev,p__13632){
var vec__13633 = p__13632;
var map__13636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13633,(0),null);
var map__13636__$1 = (((((!((map__13636 == null))))?(((((map__13636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13636):map__13636);
var opts = map__13636__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13636__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_14681 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __14682 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",408,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_14681,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_14681,ev], null);
});})(uid_14681,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,null)),null,-790623401);
var __14683__$1 = (cljs.core.truth_(uid_14681)?null:(function(){throw (new Error(["Assert failed: ",["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join(''),"\n","uid"].join('')))})());
var __14684__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_14685 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__14686 = ((function (uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (conn_type){
var temp__5735__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),((function (uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (m){
var vec__13652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_14681);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13652,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13652,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_14685)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_14681),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_14681));
} else {
return taoensso.encore.swapped(m,null);
}
});})(uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);
if(cljs.core.truth_(temp__5735__auto__)){
var pulled = temp__5735__auto__;
var vec__13659 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13659,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13659,(1),null);
if(cljs.core.vector_QMARK_(buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",435,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_(ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",436,"(set? ev-uuids)",ev_uuids,null,null);
}

var buffered_evs_ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,buffered_evs);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",439,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (buffered_evs_ppstr,vec__13659,buffered_evs,ev_uuids,pulled,temp__5735__auto__,uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s",buffered_evs_ppstr], null);
});})(buffered_evs_ppstr,vec__13659,buffered_evs,ev_uuids,pulled,temp__5735__auto__,uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,null)),null,126055770);

var G__13665 = conn_type;
var G__13665__$1 = (((G__13665 instanceof cljs.core.Keyword))?G__13665.fqn:null);
switch (G__13665__$1) {
case "ws":
return (taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4 ? taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4(conns_,uid_14681,buffered_evs_ppstr,upd_conn_BANG_) : taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_14681,buffered_evs_ppstr,upd_conn_BANG_));

break;
case "ajax":
return (taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,uid_14681,buffered_evs_ppstr) : taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_14681,buffered_evs_ppstr));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13665__$1)].join('')));

}
} else {
return null;
}
});})(uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",448,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,flush_buffer_BANG__14686,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_14681], null);
});})(uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,flush_buffer_BANG__14686,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,null)),null,-263712574);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__14686(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__14686(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__13667_14691 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_14681], null))));
var chunk__13668_14692 = null;
var count__13669_14693 = (0);
var i__13670_14694 = (0);
while(true){
if((i__13670_14694 < count__13669_14693)){
var vec__13679_14697 = chunk__13668_14692.cljs$core$IIndexed$_nth$arity$2(null,i__13670_14694);
var _QMARK_sch_14698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13679_14697,(0),null);
var _udt_14699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13679_14697,(1),null);
var temp__5735__auto___14700 = _QMARK_sch_14698;
if(cljs.core.truth_(temp__5735__auto___14700)){
var sch_14701 = temp__5735__auto___14700;
taoensso.sente.interfaces.sch_close_BANG_(sch_14701);
} else {
}


var G__14702 = seq__13667_14691;
var G__14703 = chunk__13668_14692;
var G__14704 = count__13669_14693;
var G__14705 = (i__13670_14694 + (1));
seq__13667_14691 = G__14702;
chunk__13668_14692 = G__14703;
count__13669_14693 = G__14704;
i__13670_14694 = G__14705;
continue;
} else {
var temp__5735__auto___14706 = cljs.core.seq(seq__13667_14691);
if(temp__5735__auto___14706){
var seq__13667_14707__$1 = temp__5735__auto___14706;
if(cljs.core.chunked_seq_QMARK_(seq__13667_14707__$1)){
var c__4550__auto___14708 = cljs.core.chunk_first(seq__13667_14707__$1);
var G__14709 = cljs.core.chunk_rest(seq__13667_14707__$1);
var G__14710 = c__4550__auto___14708;
var G__14711 = cljs.core.count(c__4550__auto___14708);
var G__14712 = (0);
seq__13667_14691 = G__14709;
chunk__13668_14692 = G__14710;
count__13669_14693 = G__14711;
i__13670_14694 = G__14712;
continue;
} else {
var vec__13682_14714 = cljs.core.first(seq__13667_14707__$1);
var _QMARK_sch_14715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13682_14714,(0),null);
var _udt_14716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13682_14714,(1),null);
var temp__5735__auto___14719__$1 = _QMARK_sch_14715;
if(cljs.core.truth_(temp__5735__auto___14719__$1)){
var sch_14720 = temp__5735__auto___14719__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_14720);
} else {
}


var G__14721 = cljs.core.next(seq__13667_14707__$1);
var G__14722 = null;
var G__14723 = (0);
var G__14724 = (0);
seq__13667_14691 = G__14721;
chunk__13668_14692 = G__14722;
count__13669_14693 = G__14723;
i__13670_14694 = G__14724;
continue;
}
} else {
}
}
break;
}

var seq__13685_14725 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_14681], null))));
var chunk__13686_14726 = null;
var count__13687_14727 = (0);
var i__13688_14728 = (0);
while(true){
if((i__13688_14728 < count__13687_14727)){
var vec__13699_14729 = chunk__13686_14726.cljs$core$IIndexed$_nth$arity$2(null,i__13688_14728);
var _QMARK_sch_14730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13699_14729,(0),null);
var _udt_14731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13699_14729,(1),null);
var temp__5735__auto___14732 = _QMARK_sch_14730;
if(cljs.core.truth_(temp__5735__auto___14732)){
var sch_14734 = temp__5735__auto___14732;
taoensso.sente.interfaces.sch_close_BANG_(sch_14734);
} else {
}


var G__14736 = seq__13685_14725;
var G__14737 = chunk__13686_14726;
var G__14738 = count__13687_14727;
var G__14739 = (i__13688_14728 + (1));
seq__13685_14725 = G__14736;
chunk__13686_14726 = G__14737;
count__13687_14727 = G__14738;
i__13688_14728 = G__14739;
continue;
} else {
var temp__5735__auto___14741 = cljs.core.seq(seq__13685_14725);
if(temp__5735__auto___14741){
var seq__13685_14742__$1 = temp__5735__auto___14741;
if(cljs.core.chunked_seq_QMARK_(seq__13685_14742__$1)){
var c__4550__auto___14743 = cljs.core.chunk_first(seq__13685_14742__$1);
var G__14744 = cljs.core.chunk_rest(seq__13685_14742__$1);
var G__14745 = c__4550__auto___14743;
var G__14746 = cljs.core.count(c__4550__auto___14743);
var G__14747 = (0);
seq__13685_14725 = G__14744;
chunk__13686_14726 = G__14745;
count__13687_14727 = G__14746;
i__13688_14728 = G__14747;
continue;
} else {
var vec__13705_14751 = cljs.core.first(seq__13685_14742__$1);
var _QMARK_sch_14752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13705_14751,(0),null);
var _udt_14753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13705_14751,(1),null);
var temp__5735__auto___14754__$1 = _QMARK_sch_14752;
if(cljs.core.truth_(temp__5735__auto___14754__$1)){
var sch_14755 = temp__5735__auto___14754__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_14755);
} else {
}


var G__14756 = cljs.core.next(seq__13685_14742__$1);
var G__14757 = null;
var G__14758 = (0);
var G__14759 = (0);
seq__13685_14725 = G__14756;
chunk__13686_14726 = G__14757;
count__13687_14727 = G__14758;
i__13688_14728 = G__14759;
continue;
}
} else {
}
}
break;
}
} else {
var seq__13709_14760 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__13710_14761 = null;
var count__13711_14762 = (0);
var i__13712_14763 = (0);
while(true){
if((i__13712_14763 < count__13711_14762)){
var conn_type_14764 = chunk__13710_14761.cljs$core$IIndexed$_nth$arity$2(null,i__13712_14763);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_14764,uid_14681], null),((function (seq__13709_14760,chunk__13710_14761,count__13711_14762,i__13712_14763,conn_type_14764,uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,flush_buffer_BANG__14686,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_14685])], null);
} else {
var vec__13722 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13722,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13722,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_14685)], null);
}
});})(seq__13709_14760,chunk__13710_14761,count__13711_14762,i__13712_14763,conn_type_14764,uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,flush_buffer_BANG__14686,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);


var G__14767 = seq__13709_14760;
var G__14768 = chunk__13710_14761;
var G__14769 = count__13711_14762;
var G__14770 = (i__13712_14763 + (1));
seq__13709_14760 = G__14767;
chunk__13710_14761 = G__14768;
count__13711_14762 = G__14769;
i__13712_14763 = G__14770;
continue;
} else {
var temp__5735__auto___14771 = cljs.core.seq(seq__13709_14760);
if(temp__5735__auto___14771){
var seq__13709_14772__$1 = temp__5735__auto___14771;
if(cljs.core.chunked_seq_QMARK_(seq__13709_14772__$1)){
var c__4550__auto___14775 = cljs.core.chunk_first(seq__13709_14772__$1);
var G__14776 = cljs.core.chunk_rest(seq__13709_14772__$1);
var G__14777 = c__4550__auto___14775;
var G__14778 = cljs.core.count(c__4550__auto___14775);
var G__14779 = (0);
seq__13709_14760 = G__14776;
chunk__13710_14761 = G__14777;
count__13711_14762 = G__14778;
i__13712_14763 = G__14779;
continue;
} else {
var conn_type_14780 = cljs.core.first(seq__13709_14772__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_14780,uid_14681], null),((function (seq__13709_14760,chunk__13710_14761,count__13711_14762,i__13712_14763,conn_type_14780,seq__13709_14772__$1,temp__5735__auto___14771,uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,flush_buffer_BANG__14686,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_14685])], null);
} else {
var vec__13726 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13726,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13726,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_14685)], null);
}
});})(seq__13709_14760,chunk__13710_14761,count__13711_14762,i__13712_14763,conn_type_14780,seq__13709_14772__$1,temp__5735__auto___14771,uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,flush_buffer_BANG__14686,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);


var G__14785 = cljs.core.next(seq__13709_14772__$1);
var G__14786 = null;
var G__14787 = (0);
var G__14788 = (0);
seq__13709_14760 = G__14785;
chunk__13710_14761 = G__14786;
count__13711_14762 = G__14787;
i__13712_14763 = G__14788;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__14686(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__14686(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_14793 = cljs.core.async.timeout(send_buf_ms_ws);
var ajax_timeout_14794 = cljs.core.async.timeout(send_buf_ms_ajax);
var c__7914__auto___14795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto___14795,ws_timeout_14793,ajax_timeout_14794,uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,flush_buffer_BANG__14686,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto___14795,ws_timeout_14793,ajax_timeout_14794,uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,flush_buffer_BANG__14686,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (state_13736){
var state_val_13737 = (state_13736[(1)]);
if((state_val_13737 === (1))){
var state_13736__$1 = state_13736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13736__$1,(2),ws_timeout_14793);
} else {
if((state_val_13737 === (2))){
var inst_13733 = (state_13736[(2)]);
var inst_13734 = flush_buffer_BANG__14686(new cljs.core.Keyword(null,"ws","ws",86841443));
var state_13736__$1 = (function (){var statearr_13738 = state_13736;
(statearr_13738[(7)] = inst_13733);

return statearr_13738;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13736__$1,inst_13734);
} else {
return null;
}
}
});})(c__7914__auto___14795,ws_timeout_14793,ajax_timeout_14794,uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,flush_buffer_BANG__14686,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
return ((function (switch__7528__auto__,c__7914__auto___14795,ws_timeout_14793,ajax_timeout_14794,uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,flush_buffer_BANG__14686,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function() {
var taoensso$sente$state_machine__7529__auto__ = null;
var taoensso$sente$state_machine__7529__auto____0 = (function (){
var statearr_13739 = [null,null,null,null,null,null,null,null];
(statearr_13739[(0)] = taoensso$sente$state_machine__7529__auto__);

(statearr_13739[(1)] = (1));

return statearr_13739;
});
var taoensso$sente$state_machine__7529__auto____1 = (function (state_13736){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_13736);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e13740){if((e13740 instanceof Object)){
var ex__7532__auto__ = e13740;
var statearr_13741_14799 = state_13736;
(statearr_13741_14799[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13740;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14800 = state_13736;
state_13736 = G__14800;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
taoensso$sente$state_machine__7529__auto__ = function(state_13736){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__7529__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__7529__auto____1.call(this,state_13736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__7529__auto____0;
taoensso$sente$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__7529__auto____1;
return taoensso$sente$state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto___14795,ws_timeout_14793,ajax_timeout_14794,uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,flush_buffer_BANG__14686,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
})();
var state__7916__auto__ = (function (){var statearr_13742 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_13742[(6)] = c__7914__auto___14795);

return statearr_13742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto___14795,ws_timeout_14793,ajax_timeout_14794,uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,flush_buffer_BANG__14686,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);


var c__7914__auto___14803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto___14803,ws_timeout_14793,ajax_timeout_14794,uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,flush_buffer_BANG__14686,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto___14803,ws_timeout_14793,ajax_timeout_14794,uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,flush_buffer_BANG__14686,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (state_13747){
var state_val_13748 = (state_13747[(1)]);
if((state_val_13748 === (1))){
var state_13747__$1 = state_13747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13747__$1,(2),ajax_timeout_14794);
} else {
if((state_val_13748 === (2))){
var inst_13744 = (state_13747[(2)]);
var inst_13745 = flush_buffer_BANG__14686(new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_13747__$1 = (function (){var statearr_13750 = state_13747;
(statearr_13750[(7)] = inst_13744);

return statearr_13750;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13747__$1,inst_13745);
} else {
return null;
}
}
});})(c__7914__auto___14803,ws_timeout_14793,ajax_timeout_14794,uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,flush_buffer_BANG__14686,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
return ((function (switch__7528__auto__,c__7914__auto___14803,ws_timeout_14793,ajax_timeout_14794,uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,flush_buffer_BANG__14686,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function() {
var taoensso$sente$state_machine__7529__auto__ = null;
var taoensso$sente$state_machine__7529__auto____0 = (function (){
var statearr_13752 = [null,null,null,null,null,null,null,null];
(statearr_13752[(0)] = taoensso$sente$state_machine__7529__auto__);

(statearr_13752[(1)] = (1));

return statearr_13752;
});
var taoensso$sente$state_machine__7529__auto____1 = (function (state_13747){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_13747);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e13754){if((e13754 instanceof Object)){
var ex__7532__auto__ = e13754;
var statearr_13755_14814 = state_13747;
(statearr_13755_14814[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13754;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14815 = state_13747;
state_13747 = G__14815;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
taoensso$sente$state_machine__7529__auto__ = function(state_13747){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__7529__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__7529__auto____1.call(this,state_13747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__7529__auto____0;
taoensso$sente$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__7529__auto____1;
return taoensso$sente$state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto___14803,ws_timeout_14793,ajax_timeout_14794,uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,flush_buffer_BANG__14686,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
})();
var state__7916__auto__ = (function (){var statearr_13757 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_13757[(6)] = c__7914__auto___14803);

return statearr_13757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto___14803,ws_timeout_14793,ajax_timeout_14794,uid_14681,__14682,__14683__$1,__14684__$2,ev_uuid_14685,flush_buffer_BANG__14686,vec__13633,map__13636,map__13636__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);

}
}

return null;
};
var G__14680 = function (user_id,ev,var_args){
var p__13632 = null;
if (arguments.length > 2) {
var G__14820__i = 0, G__14820__a = new Array(arguments.length -  2);
while (G__14820__i < G__14820__a.length) {G__14820__a[G__14820__i] = arguments[G__14820__i + 2]; ++G__14820__i;}
  p__13632 = new cljs.core.IndexedSeq(G__14820__a,0,null);
} 
return G__14680__delegate.call(this,user_id,ev,p__13632);};
G__14680.cljs$lang$maxFixedArity = 2;
G__14680.cljs$lang$applyTo = (function (arglist__14821){
var user_id = cljs.core.first(arglist__14821);
arglist__14821 = cljs.core.next(arglist__14821);
var ev = cljs.core.first(arglist__14821);
var p__13632 = cljs.core.rest(arglist__14821);
return G__14680__delegate(user_id,ev,p__13632);
});
G__14680.cljs$core$IFn$_invoke$arity$variadic = G__14680__delegate;
return G__14680;
})()
;})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
var bad_csrf_QMARK_ = ((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
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
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (ring_req){
if(bad_csrf_QMARK_(ring_req)){
return (bad_csrf_fn.cljs$core$IFn$_invoke$arity$1 ? bad_csrf_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_csrf_fn.call(null,ring_req));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.not(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__13765 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13765,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13765,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (replied_QMARK__,params,ppstr,client_id,vec__13765,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (resp_clj){
if(cljs.core.compare_and_set_BANG_(replied_QMARK__,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",542,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (replied_QMARK__,params,ppstr,client_id,vec__13765,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
});})(replied_QMARK__,params,ppstr,client_id,vec__13765,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,null)),null,720937836);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,resp_clj));
} else {
return null;
}
});
;})(replied_QMARK__,params,ppstr,client_id,vec__13765,clj,has_cb_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1(ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)], 0)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__5735__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5735__auto__)){
var ms = temp__5735__auto__;
var c__7914__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto__,ms,temp__5735__auto__,params,ppstr,client_id,vec__13765,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto__,ms,temp__5735__auto__,params,ppstr,client_id,vec__13765,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (state_13773){
var state_val_13774 = (state_13773[(1)]);
if((state_val_13774 === (1))){
var inst_13768 = cljs.core.async.timeout(ms);
var state_13773__$1 = state_13773;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13773__$1,(2),inst_13768);
} else {
if((state_val_13774 === (2))){
var inst_13770 = (state_13773[(2)]);
var inst_13771 = (function (){var G__13779 = new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489);
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__13779) : reply_fn.call(null,G__13779));
})();
var state_13773__$1 = (function (){var statearr_13780 = state_13773;
(statearr_13780[(7)] = inst_13770);

return statearr_13780;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13773__$1,inst_13771);
} else {
return null;
}
}
});})(c__7914__auto__,ms,temp__5735__auto__,params,ppstr,client_id,vec__13765,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
return ((function (switch__7528__auto__,c__7914__auto__,ms,temp__5735__auto__,params,ppstr,client_id,vec__13765,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function() {
var taoensso$sente$state_machine__7529__auto__ = null;
var taoensso$sente$state_machine__7529__auto____0 = (function (){
var statearr_13781 = [null,null,null,null,null,null,null,null];
(statearr_13781[(0)] = taoensso$sente$state_machine__7529__auto__);

(statearr_13781[(1)] = (1));

return statearr_13781;
});
var taoensso$sente$state_machine__7529__auto____1 = (function (state_13773){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_13773);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e13782){if((e13782 instanceof Object)){
var ex__7532__auto__ = e13782;
var statearr_13783_14865 = state_13773;
(statearr_13783_14865[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13782;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14868 = state_13773;
state_13773 = G__14868;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
taoensso$sente$state_machine__7529__auto__ = function(state_13773){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__7529__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__7529__auto____1.call(this,state_13773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__7529__auto____0;
taoensso$sente$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__7529__auto____1;
return taoensso$sente$state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto__,ms,temp__5735__auto__,params,ppstr,client_id,vec__13765,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
})();
var state__7916__auto__ = (function (){var statearr_13784 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_13784[(6)] = c__7914__auto__);

return statearr_13784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto__,ms,temp__5735__auto__,params,ppstr,client_id,vec__13765,clj,has_cb_QMARK_,reply_fn,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);

return c__7914__auto__;
} else {
return null;
}
} else {
var G__13785 = new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337);
return (reply_fn.cljs$core$IFn$_invoke$arity$1 ? reply_fn.cljs$core$IFn$_invoke$arity$1(G__13785) : reply_fn.call(null,G__13785));
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
], null));

}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),((function (packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1(ring_req,client_id);
var receive_event_msg_BANG_ = ((function (sch_uuid,params,client_id,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
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
;})(sch_uuid,params,client_id,uid,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
var send_handshake_BANG_ = ((function (sch_uuid,params,client_id,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",586,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
});})(sch_uuid,params,client_id,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,null)),null,415729158);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null,ring_req));
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,handshake_ev));
});})(sch_uuid,params,client_id,uid,receive_event_msg_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",599,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (err_msg,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[err_msg,": %s"].join(''),ring_req], null);
});})(err_msg,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,null)),null,-583967351);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
if(bad_csrf_QMARK_(ring_req)){
return (bad_csrf_fn.cljs$core$IFn$_invoke$arity$1 ? bad_csrf_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_csrf_fn.call(null,ring_req));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),((function (sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",612,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,null)),null,-1140806814);
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
var c__7914__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (state_13821){
var state_val_13822 = (state_13821[(1)]);
if((state_val_13822 === (7))){
var inst_13817 = (state_13821[(2)]);
var state_13821__$1 = state_13821;
var statearr_13823_14911 = state_13821__$1;
(statearr_13823_14911[(2)] = inst_13817);

(statearr_13823_14911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13822 === (1))){
var inst_13786 = udt_open;
var state_13821__$1 = (function (){var statearr_13824 = state_13821;
(statearr_13824[(7)] = inst_13786);

return statearr_13824;
})();
var statearr_13825_14915 = state_13821__$1;
(statearr_13825_14915[(2)] = null);

(statearr_13825_14915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13822 === (4))){
var inst_13795 = (state_13821[(8)]);
var inst_13790 = (state_13821[(2)]);
var inst_13791 = cljs.core.deref(conns_);
var inst_13792 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13793 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_13794 = (new cljs.core.PersistentVector(null,3,(5),inst_13792,inst_13793,null));
var inst_13795__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_13791,inst_13794);
var state_13821__$1 = (function (){var statearr_13826 = state_13821;
(statearr_13826[(8)] = inst_13795__$1);

(statearr_13826[(9)] = inst_13790);

return statearr_13826;
})();
if(cljs.core.truth_(inst_13795__$1)){
var statearr_13827_14917 = state_13821__$1;
(statearr_13827_14917[(1)] = (5));

} else {
var statearr_13828_14919 = state_13821__$1;
(statearr_13828_14919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13822 === (13))){
var inst_13801 = (state_13821[(10)]);
var inst_13810 = (state_13821[(2)]);
var inst_13786 = inst_13801;
var state_13821__$1 = (function (){var statearr_13829 = state_13821;
(statearr_13829[(7)] = inst_13786);

(statearr_13829[(11)] = inst_13810);

return statearr_13829;
})();
var statearr_13830_14921 = state_13821__$1;
(statearr_13830_14921[(2)] = null);

(statearr_13830_14921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13822 === (6))){
var state_13821__$1 = state_13821;
var statearr_13831_14924 = state_13821__$1;
(statearr_13831_14924[(2)] = null);

(statearr_13831_14924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13822 === (3))){
var inst_13819 = (state_13821[(2)]);
var state_13821__$1 = state_13821;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13821__$1,inst_13819);
} else {
if((state_val_13822 === (12))){
var state_13821__$1 = state_13821;
var statearr_13832_14926 = state_13821__$1;
(statearr_13832_14926[(2)] = null);

(statearr_13832_14926[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13822 === (2))){
var inst_13788 = cljs.core.async.timeout(ms);
var state_13821__$1 = state_13821;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13821__$1,(4),inst_13788);
} else {
if((state_val_13822 === (11))){
var inst_13806 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_13807 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_13806);
var state_13821__$1 = state_13821;
var statearr_13833_14932 = state_13821__$1;
(statearr_13833_14932[(2)] = inst_13807);

(statearr_13833_14932[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13822 === (9))){
var state_13821__$1 = state_13821;
var statearr_13834_14934 = state_13821__$1;
(statearr_13834_14934[(2)] = null);

(statearr_13834_14934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13822 === (5))){
var inst_13795 = (state_13821[(8)]);
var inst_13800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13795,(0),null);
var inst_13801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13795,(1),null);
var inst_13802 = taoensso.sente.interfaces.sch_open_QMARK_(server_ch);
var state_13821__$1 = (function (){var statearr_13835 = state_13821;
(statearr_13835[(10)] = inst_13801);

(statearr_13835[(12)] = inst_13800);

return statearr_13835;
})();
if(cljs.core.truth_(inst_13802)){
var statearr_13836_14938 = state_13821__$1;
(statearr_13836_14938[(1)] = (8));

} else {
var statearr_13837_14942 = state_13821__$1;
(statearr_13837_14942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13822 === (10))){
var inst_13814 = (state_13821[(2)]);
var state_13821__$1 = state_13821;
var statearr_13838_14943 = state_13821__$1;
(statearr_13838_14943[(2)] = inst_13814);

(statearr_13838_14943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13822 === (8))){
var inst_13801 = (state_13821[(10)]);
var inst_13786 = (state_13821[(7)]);
var inst_13804 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13801,inst_13786);
var state_13821__$1 = state_13821;
if(inst_13804){
var statearr_13839_14946 = state_13821__$1;
(statearr_13839_14946[(1)] = (11));

} else {
var statearr_13840_14947 = state_13821__$1;
(statearr_13840_14947[(1)] = (12));

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
});})(c__7914__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
return ((function (switch__7528__auto__,c__7914__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function() {
var taoensso$sente$state_machine__7529__auto__ = null;
var taoensso$sente$state_machine__7529__auto____0 = (function (){
var statearr_13841 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13841[(0)] = taoensso$sente$state_machine__7529__auto__);

(statearr_13841[(1)] = (1));

return statearr_13841;
});
var taoensso$sente$state_machine__7529__auto____1 = (function (state_13821){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_13821);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e13842){if((e13842 instanceof Object)){
var ex__7532__auto__ = e13842;
var statearr_13843_14958 = state_13821;
(statearr_13843_14958[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13842;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14959 = state_13821;
state_13821 = G__14959;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
taoensso$sente$state_machine__7529__auto__ = function(state_13821){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__7529__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__7529__auto____1.call(this,state_13821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__7529__auto____0;
taoensso$sente$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__7529__auto____1;
return taoensso$sente$state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
})();
var state__7916__auto__ = (function (){var statearr_13844 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_13844[(6)] = c__7914__auto__);

return statearr_13844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);

return c__7914__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",641,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
});})(sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,null)),null,1238127667);
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
var c__7914__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (state_13870){
var state_val_13871 = (state_13870[(1)]);
if((state_val_13871 === (1))){
var inst_13845 = cljs.core.async.timeout(ms);
var state_13870__$1 = state_13870;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13870__$1,(2),inst_13845);
} else {
if((state_val_13871 === (2))){
var inst_13852 = (state_13870[(7)]);
var inst_13847 = (state_13870[(2)]);
var inst_13848 = cljs.core.deref(conns_);
var inst_13849 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13850 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_13851 = (new cljs.core.PersistentVector(null,3,(5),inst_13849,inst_13850,null));
var inst_13852__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_13848,inst_13851);
var state_13870__$1 = (function (){var statearr_13873 = state_13870;
(statearr_13873[(7)] = inst_13852__$1);

(statearr_13873[(8)] = inst_13847);

return statearr_13873;
})();
if(cljs.core.truth_(inst_13852__$1)){
var statearr_13874_14979 = state_13870__$1;
(statearr_13874_14979[(1)] = (3));

} else {
var statearr_13875_14983 = state_13870__$1;
(statearr_13875_14983[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13871 === (3))){
var inst_13852 = (state_13870[(7)]);
var inst_13857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13852,(0),null);
var inst_13858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13852,(1),null);
var inst_13859 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13858,udt_open);
var state_13870__$1 = (function (){var statearr_13876 = state_13870;
(statearr_13876[(9)] = inst_13857);

return statearr_13876;
})();
if(inst_13859){
var statearr_13877_14990 = state_13870__$1;
(statearr_13877_14990[(1)] = (6));

} else {
var statearr_13878_14991 = state_13870__$1;
(statearr_13878_14991[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13871 === (4))){
var state_13870__$1 = state_13870;
var statearr_13880_14992 = state_13870__$1;
(statearr_13880_14992[(2)] = null);

(statearr_13880_14992[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13871 === (5))){
var inst_13868 = (state_13870[(2)]);
var state_13870__$1 = state_13870;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13870__$1,inst_13868);
} else {
if((state_val_13871 === (6))){
var inst_13861 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_13862 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_13861);
var state_13870__$1 = state_13870;
var statearr_13881_14997 = state_13870__$1;
(statearr_13881_14997[(2)] = inst_13862);

(statearr_13881_14997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13871 === (7))){
var state_13870__$1 = state_13870;
var statearr_13882_14999 = state_13870__$1;
(statearr_13882_14999[(2)] = null);

(statearr_13882_14999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13871 === (8))){
var inst_13865 = (state_13870[(2)]);
var state_13870__$1 = state_13870;
var statearr_13883_15003 = state_13870__$1;
(statearr_13883_15003[(2)] = inst_13865);

(statearr_13883_15003[(1)] = (5));


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
});})(c__7914__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
return ((function (switch__7528__auto__,c__7914__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function() {
var taoensso$sente$state_machine__7529__auto__ = null;
var taoensso$sente$state_machine__7529__auto____0 = (function (){
var statearr_13885 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13885[(0)] = taoensso$sente$state_machine__7529__auto__);

(statearr_13885[(1)] = (1));

return statearr_13885;
});
var taoensso$sente$state_machine__7529__auto____1 = (function (state_13870){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_13870);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e13886){if((e13886 instanceof Object)){
var ex__7532__auto__ = e13886;
var statearr_13887_15008 = state_13870;
(statearr_13887_15008[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13886;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15013 = state_13870;
state_13870 = G__15013;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
taoensso$sente$state_machine__7529__auto__ = function(state_13870){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__7529__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__7529__auto____1.call(this,state_13870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__7529__auto____0;
taoensso$sente$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__7529__auto____1;
return taoensso$sente$state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
})();
var state__7916__auto__ = (function (){var statearr_13888 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_13888[(6)] = c__7914__auto__);

return statearr_13888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto__,ms,temp__5735__auto__,_,updated_conn,udt_open,handshake_QMARK_,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);

return c__7914__auto__;
} else {
return null;
}
}
}
});})(sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),((function (sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__13889 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13889,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13889,(1),null);
return receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$2(clj,(cljs.core.truth_(_QMARK_cb_uuid)?((function (vec__13889,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",671,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__13889,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
});})(vec__13889,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,null)),null,651487551);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,resp_clj,_QMARK_cb_uuid));
});})(vec__13889,clj,_QMARK_cb_uuid,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
:null));
});})(sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",680,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (conn_type,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
});})(conn_type,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,null)),null,-686036665);
var updated_conn = upd_conn_BANG_.cljs$core$IFn$_invoke$arity$4(conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__7914__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (state_13947){
var state_val_13948 = (state_13947[(1)]);
if((state_val_13948 === (7))){
var state_13947__$1 = state_13947;
var statearr_13949_15036 = state_13947__$1;
(statearr_13949_15036[(2)] = null);

(statearr_13949_15036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (1))){
var inst_13893 = cljs.core.async.timeout((5000));
var state_13947__$1 = state_13947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13947__$1,(2),inst_13893);
} else {
if((state_val_13948 === (4))){
var state_13947__$1 = state_13947;
var statearr_13951_15041 = state_13947__$1;
(statearr_13951_15041[(2)] = null);

(statearr_13951_15041[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (13))){
var state_13947__$1 = state_13947;
var statearr_13952_15042 = state_13947__$1;
(statearr_13952_15042[(2)] = null);

(statearr_13952_15042[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (6))){
var inst_13905 = (state_13947[(7)]);
var inst_13923 = (state_13947[(8)]);
var inst_13903 = (state_13947[(9)]);
var inst_13904 = (state_13947[(10)]);
var inst_13916 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13917 = [conn_type,uid,client_id];
var inst_13918 = (new cljs.core.PersistentVector(null,3,(5),inst_13916,inst_13917,null));
var inst_13922 = (function (){var vec__13896 = inst_13903;
var __QMARK_sch = inst_13904;
var udt_t1 = inst_13905;
return ((function (vec__13896,__QMARK_sch,udt_t1,inst_13905,inst_13923,inst_13903,inst_13904,inst_13916,inst_13917,inst_13918,state_val_13948,c__7914__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (p__13921){
var vec__13956 = p__13921;
var _sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13956,(0),null);
var udt_t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13956,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1__$1,udt_close)){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped(udt_t1__$1,false);
}
});
;})(vec__13896,__QMARK_sch,udt_t1,inst_13905,inst_13923,inst_13903,inst_13904,inst_13916,inst_13917,inst_13918,state_val_13948,c__7914__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
})();
var inst_13923__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_13918,inst_13922);
var state_13947__$1 = (function (){var statearr_13959 = state_13947;
(statearr_13959[(8)] = inst_13923__$1);

return statearr_13959;
})();
if(cljs.core.truth_(inst_13923__$1)){
var statearr_13960_15055 = state_13947__$1;
(statearr_13960_15055[(1)] = (9));

} else {
var statearr_13961_15056 = state_13947__$1;
(statearr_13961_15056[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (3))){
var inst_13905 = (state_13947[(7)]);
var inst_13903 = (state_13947[(9)]);
var inst_13904 = (state_13947[(10)]);
var inst_13908 = (function (){var vec__13896 = inst_13903;
var __QMARK_sch = inst_13904;
var udt_t1 = inst_13905;
return ((function (vec__13896,__QMARK_sch,udt_t1,inst_13905,inst_13903,inst_13904,state_val_13948,c__7914__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
;})(vec__13896,__QMARK_sch,udt_t1,inst_13905,inst_13903,inst_13904,state_val_13948,c__7914__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
})();
var inst_13909 = (new cljs.core.Delay(inst_13908,null));
var inst_13910 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",694,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_13909,null,935497659);
var state_13947__$1 = state_13947;
var statearr_13962_15063 = state_13947__$1;
(statearr_13962_15063[(2)] = inst_13910);

(statearr_13962_15063[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (12))){
var inst_13933 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13934 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_13935 = (new cljs.core.PersistentVector(null,2,(5),inst_13933,inst_13934,null));
var inst_13936 = receive_event_msg_BANG_.cljs$core$IFn$_invoke$arity$1(inst_13935);
var state_13947__$1 = state_13947;
var statearr_13963_15064 = state_13947__$1;
(statearr_13963_15064[(2)] = inst_13936);

(statearr_13963_15064[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (2))){
var inst_13903 = (state_13947[(9)]);
var inst_13895 = (state_13947[(2)]);
var inst_13899 = cljs.core.deref(conns_);
var inst_13900 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13901 = [conn_type,uid,client_id];
var inst_13902 = (new cljs.core.PersistentVector(null,3,(5),inst_13900,inst_13901,null));
var inst_13903__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_13899,inst_13902);
var inst_13904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13903__$1,(0),null);
var inst_13905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13903__$1,(1),null);
var inst_13906 = cljs.core.deref(taoensso.sente.debug_mode_QMARK__);
var state_13947__$1 = (function (){var statearr_13965 = state_13947;
(statearr_13965[(7)] = inst_13905);

(statearr_13965[(9)] = inst_13903__$1);

(statearr_13965[(10)] = inst_13904);

(statearr_13965[(11)] = inst_13895);

return statearr_13965;
})();
if(cljs.core.truth_(inst_13906)){
var statearr_13967_15066 = state_13947__$1;
(statearr_13967_15066[(1)] = (3));

} else {
var statearr_13968_15067 = state_13947__$1;
(statearr_13968_15067[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (11))){
var inst_13942 = (state_13947[(2)]);
var state_13947__$1 = state_13947;
var statearr_13970_15068 = state_13947__$1;
(statearr_13970_15068[(2)] = inst_13942);

(statearr_13970_15068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (9))){
var inst_13905 = (state_13947[(7)]);
var inst_13923 = (state_13947[(8)]);
var inst_13903 = (state_13947[(9)]);
var inst_13904 = (state_13947[(10)]);
var inst_13925 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13926 = [conn_type,uid];
var inst_13927 = (new cljs.core.PersistentVector(null,2,(5),inst_13925,inst_13926,null));
var inst_13929 = (function (){var vec__13896 = inst_13903;
var __QMARK_sch = inst_13904;
var udt_t1 = inst_13905;
var disconnect_QMARK_ = inst_13923;
return ((function (vec__13896,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_13905,inst_13923,inst_13903,inst_13904,inst_13925,inst_13926,inst_13927,state_val_13948,c__7914__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_(_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
;})(vec__13896,__QMARK_sch,udt_t1,disconnect_QMARK_,inst_13905,inst_13923,inst_13903,inst_13904,inst_13925,inst_13926,inst_13927,state_val_13948,c__7914__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
})();
var inst_13930 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_13927,inst_13929);
var inst_13931 = upd_connected_uid_BANG_(uid);
var state_13947__$1 = (function (){var statearr_13974 = state_13947;
(statearr_13974[(12)] = inst_13930);

return statearr_13974;
})();
if(cljs.core.truth_(inst_13931)){
var statearr_13975_15069 = state_13947__$1;
(statearr_13975_15069[(1)] = (12));

} else {
var statearr_13976_15070 = state_13947__$1;
(statearr_13976_15070[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (5))){
var inst_13905 = (state_13947[(7)]);
var inst_13913 = (state_13947[(2)]);
var inst_13914 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_13905,udt_close);
var state_13947__$1 = (function (){var statearr_13978 = state_13947;
(statearr_13978[(13)] = inst_13913);

return statearr_13978;
})();
if(inst_13914){
var statearr_13979_15071 = state_13947__$1;
(statearr_13979_15071[(1)] = (6));

} else {
var statearr_13980_15072 = state_13947__$1;
(statearr_13980_15072[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (14))){
var inst_13939 = (state_13947[(2)]);
var state_13947__$1 = state_13947;
var statearr_13981_15073 = state_13947__$1;
(statearr_13981_15073[(2)] = inst_13939);

(statearr_13981_15073[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (10))){
var state_13947__$1 = state_13947;
var statearr_13983_15074 = state_13947__$1;
(statearr_13983_15074[(2)] = null);

(statearr_13983_15074[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (8))){
var inst_13945 = (state_13947[(2)]);
var state_13947__$1 = state_13947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13947__$1,inst_13945);
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
});})(c__7914__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
;
return ((function (switch__7528__auto__,c__7914__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function() {
var taoensso$sente$state_machine__7529__auto__ = null;
var taoensso$sente$state_machine__7529__auto____0 = (function (){
var statearr_13987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13987[(0)] = taoensso$sente$state_machine__7529__auto__);

(statearr_13987[(1)] = (1));

return statearr_13987;
});
var taoensso$sente$state_machine__7529__auto____1 = (function (state_13947){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_13947);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e13990){if((e13990 instanceof Object)){
var ex__7532__auto__ = e13990;
var statearr_13991_15075 = state_13947;
(statearr_13991_15075[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13990;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15076 = state_13947;
state_13947 = G__15076;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
taoensso$sente$state_machine__7529__auto__ = function(state_13947){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__7529__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__7529__auto____1.call(this,state_13947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__7529__auto____0;
taoensso$sente$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__7529__auto____1;
return taoensso$sente$state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
})();
var state__7916__auto__ = (function (){var statearr_13992 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_13992[(6)] = c__7914__auto__);

return statearr_13992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto__,conn_type,_,updated_conn,udt_close,sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);

return c__7914__auto__;
});})(sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,new cljs.core.Keyword(null,"on-error","on-error",1728533530),((function (sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",716,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
});})(sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
,null)),null,353994226);
});})(sch_uuid,params,client_id,uid,receive_event_msg_BANG_,send_handshake_BANG_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
], null));

}
}
});})(packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,send_fn,bad_csrf_QMARK_,ev_msg_const,vec__13487,map__13491,map__13491__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
], null);
});

taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq13482){
var G__13483 = cljs.core.first(seq13482);
var seq13482__$1 = cljs.core.next(seq13482);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13483,seq13482__$1);
});

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",722,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,-1172185811);

var seq__13993 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__13994 = null;
var count__13995 = (0);
var i__13996 = (0);
while(true){
if((i__13996 < count__13995)){
var vec__14025 = chunk__13994.cljs$core$IIndexed$_nth$arity$2(null,i__13996);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14025,(0),null);
var vec__14028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14025,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14028,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14028,(1),null);
var temp__5735__auto___15077 = _QMARK_sch;
if(cljs.core.truth_(temp__5735__auto___15077)){
var sch_15078 = temp__5735__auto___15077;
var G__14031_15079 = new cljs.core.Keyword(null,"ws","ws",86841443);
var G__14032_15080 = uid;
var G__14033_15081 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__14031_15079,G__14032_15080,G__14033_15081) : upd_conn_BANG_.call(null,G__14031_15079,G__14032_15080,G__14033_15081));

taoensso.sente.interfaces.sch_send_BANG_(sch_15078,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__15082 = seq__13993;
var G__15083 = chunk__13994;
var G__15084 = count__13995;
var G__15085 = (i__13996 + (1));
seq__13993 = G__15082;
chunk__13994 = G__15083;
count__13995 = G__15084;
i__13996 = G__15085;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13993);
if(temp__5735__auto__){
var seq__13993__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13993__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13993__$1);
var G__15086 = cljs.core.chunk_rest(seq__13993__$1);
var G__15087 = c__4550__auto__;
var G__15088 = cljs.core.count(c__4550__auto__);
var G__15089 = (0);
seq__13993 = G__15086;
chunk__13994 = G__15087;
count__13995 = G__15088;
i__13996 = G__15089;
continue;
} else {
var vec__14036 = cljs.core.first(seq__13993__$1);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14036,(0),null);
var vec__14039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14036,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14039,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14039,(1),null);
var temp__5735__auto___15091__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__5735__auto___15091__$1)){
var sch_15092 = temp__5735__auto___15091__$1;
var G__14043_15093 = new cljs.core.Keyword(null,"ws","ws",86841443);
var G__14044_15094 = uid;
var G__14045_15095 = client_id;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(G__14043_15093,G__14044_15094,G__14045_15095) : upd_conn_BANG_.call(null,G__14043_15093,G__14044_15094,G__14045_15095));

taoensso.sente.interfaces.sch_send_BANG_(sch_15092,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__15096 = cljs.core.next(seq__13993__$1);
var G__15097 = null;
var G__15098 = (0);
var G__15099 = (0);
seq__13993 = G__15096;
chunk__13994 = G__15097;
count__13995 = G__15098;
i__13996 = G__15099;
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",732,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,807298785);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_(client_ids_unsatisfied)){
return null;
} else {
var c__7914__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (state_14098){
var state_val_14099 = (state_14098[(1)]);
if((state_val_14099 === (7))){
var inst_14050 = (state_14098[(7)]);
var inst_14051 = (state_14098[(8)]);
var inst_14057 = (state_14098[(9)]);
var inst_14069 = (function (){var n = inst_14050;
var client_ids_satisfied = inst_14051;
var _QMARK_pulled = inst_14057;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_14050,inst_14051,inst_14057,state_val_14099,c__7914__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (s,client_id,p__14068){
var vec__14104 = p__14068;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14104,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14104,(1),null);
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
;})(n,client_ids_satisfied,_QMARK_pulled,inst_14050,inst_14051,inst_14057,state_val_14099,c__7914__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_14070 = cljs.core.PersistentHashSet.EMPTY;
var inst_14071 = cljs.core.reduce_kv(inst_14069,inst_14070,inst_14057);
var state_14098__$1 = state_14098;
var statearr_14107_15100 = state_14098__$1;
(statearr_14107_15100[(2)] = inst_14071);

(statearr_14107_15100[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14099 === (1))){
var inst_14049 = cljs.core.PersistentHashSet.EMPTY;
var inst_14050 = (0);
var inst_14051 = inst_14049;
var state_14098__$1 = (function (){var statearr_14109 = state_14098;
(statearr_14109[(7)] = inst_14050);

(statearr_14109[(8)] = inst_14051);

return statearr_14109;
})();
var statearr_14111_15101 = state_14098__$1;
(statearr_14111_15101[(2)] = null);

(statearr_14111_15101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14099 === (4))){
var state_14098__$1 = state_14098;
var statearr_14113_15102 = state_14098__$1;
(statearr_14113_15102[(2)] = true);

(statearr_14113_15102[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14099 === (15))){
var inst_14091 = (state_14098[(2)]);
var state_14098__$1 = state_14098;
var statearr_14115_15103 = state_14098__$1;
(statearr_14115_15103[(2)] = inst_14091);

(statearr_14115_15103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14099 === (13))){
var inst_14077 = (state_14098[(10)]);
var inst_14082 = cljs.core.rand_int(inst_14077);
var inst_14083 = (inst_14077 + inst_14082);
var inst_14084 = cljs.core.async.timeout(inst_14083);
var state_14098__$1 = state_14098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14098__$1,(16),inst_14084);
} else {
if((state_val_14099 === (6))){
var inst_14057 = (state_14098[(9)]);
var inst_14064 = (state_14098[(2)]);
var state_14098__$1 = (function (){var statearr_14116 = state_14098;
(statearr_14116[(11)] = inst_14064);

return statearr_14116;
})();
if(cljs.core.truth_(inst_14057)){
var statearr_14118_15104 = state_14098__$1;
(statearr_14118_15104[(1)] = (7));

} else {
var statearr_14120_15105 = state_14098__$1;
(statearr_14120_15105[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14099 === (3))){
var inst_14096 = (state_14098[(2)]);
var state_14098__$1 = state_14098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14098__$1,inst_14096);
} else {
if((state_val_14099 === (12))){
var inst_14094 = (state_14098[(2)]);
var state_14098__$1 = state_14098;
var statearr_14122_15109 = state_14098__$1;
(statearr_14122_15109[(2)] = inst_14094);

(statearr_14122_15109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14099 === (2))){
var inst_14050 = (state_14098[(7)]);
var inst_14051 = (state_14098[(8)]);
var inst_14057 = (state_14098[(9)]);
var inst_14053 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14054 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_14055 = (new cljs.core.PersistentVector(null,2,(5),inst_14053,inst_14054,null));
var inst_14056 = (function (){var n = inst_14050;
var client_ids_satisfied = inst_14051;
return ((function (n,client_ids_satisfied,inst_14050,inst_14051,inst_14057,inst_14053,inst_14054,inst_14055,state_val_14099,c__7914__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m){
var ks_to_pull = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(client_ids_satisfied,cljs.core.keys(m));
if(cljs.core.empty_QMARK_(ks_to_pull)){
return taoensso.encore.swapped(m,null);
} else {
return taoensso.encore.swapped(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks_to_pull,n,client_ids_satisfied,inst_14050,inst_14051,inst_14057,inst_14053,inst_14054,inst_14055,state_val_14099,c__7914__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (m__$1,k){
var vec__14123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14123,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14123,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
});})(ks_to_pull,n,client_ids_satisfied,inst_14050,inst_14051,inst_14057,inst_14053,inst_14054,inst_14055,state_val_14099,c__7914__auto__,ms_backoffs,client_ids_unsatisfied))
,m,ks_to_pull),cljs.core.select_keys(m,ks_to_pull));
}
});
;})(n,client_ids_satisfied,inst_14050,inst_14051,inst_14057,inst_14053,inst_14054,inst_14055,state_val_14099,c__7914__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_14057__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_14055,inst_14056);
var inst_14058 = (function (){var n = inst_14050;
var client_ids_satisfied = inst_14051;
var _QMARK_pulled = inst_14057__$1;
return ((function (n,client_ids_satisfied,_QMARK_pulled,inst_14050,inst_14051,inst_14057,inst_14053,inst_14054,inst_14055,inst_14056,inst_14057__$1,state_val_14099,c__7914__auto__,ms_backoffs,client_ids_unsatisfied){
return (function (x){
var or__4131__auto__ = (x == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__14130 = taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_);
return (fexpr__14130.cljs$core$IFn$_invoke$arity$1 ? fexpr__14130.cljs$core$IFn$_invoke$arity$1(x) : fexpr__14130.call(null,x));
}
});
;})(n,client_ids_satisfied,_QMARK_pulled,inst_14050,inst_14051,inst_14057,inst_14053,inst_14054,inst_14055,inst_14056,inst_14057__$1,state_val_14099,c__7914__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var inst_14059 = (inst_14058.cljs$core$IFn$_invoke$arity$1 ? inst_14058.cljs$core$IFn$_invoke$arity$1(inst_14057__$1) : inst_14058.call(null,inst_14057__$1));
var state_14098__$1 = (function (){var statearr_14131 = state_14098;
(statearr_14131[(9)] = inst_14057__$1);

return statearr_14131;
})();
if(cljs.core.truth_(inst_14059)){
var statearr_14132_15116 = state_14098__$1;
(statearr_14132_15116[(1)] = (4));

} else {
var statearr_14133_15117 = state_14098__$1;
(statearr_14133_15117[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14099 === (11))){
var state_14098__$1 = state_14098;
var statearr_14134_15118 = state_14098__$1;
(statearr_14134_15118[(2)] = null);

(statearr_14134_15118[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14099 === (9))){
var inst_14050 = (state_14098[(7)]);
var inst_14051 = (state_14098[(8)]);
var inst_14077 = (state_14098[(10)]);
var inst_14074 = (state_14098[(2)]);
var inst_14075 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_14051,inst_14074);
var inst_14077__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms_backoffs,inst_14050);
var state_14098__$1 = (function (){var statearr_14135 = state_14098;
(statearr_14135[(12)] = inst_14075);

(statearr_14135[(10)] = inst_14077__$1);

return statearr_14135;
})();
if(cljs.core.truth_(inst_14077__$1)){
var statearr_14136_15119 = state_14098__$1;
(statearr_14136_15119[(1)] = (10));

} else {
var statearr_14137_15120 = state_14098__$1;
(statearr_14137_15120[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14099 === (5))){
var inst_14057 = (state_14098[(9)]);
var inst_14062 = taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",759,"([:or nil? map?] ?pulled)",inst_14057,null,null);
var state_14098__$1 = state_14098;
var statearr_14138_15121 = state_14098__$1;
(statearr_14138_15121[(2)] = inst_14062);

(statearr_14138_15121[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14099 === (14))){
var state_14098__$1 = state_14098;
var statearr_14139_15124 = state_14098__$1;
(statearr_14139_15124[(2)] = null);

(statearr_14139_15124[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14099 === (16))){
var inst_14050 = (state_14098[(7)]);
var inst_14075 = (state_14098[(12)]);
var inst_14086 = (state_14098[(2)]);
var inst_14087 = (inst_14050 + (1));
var inst_14050__$1 = inst_14087;
var inst_14051 = inst_14075;
var state_14098__$1 = (function (){var statearr_14142 = state_14098;
(statearr_14142[(7)] = inst_14050__$1);

(statearr_14142[(13)] = inst_14086);

(statearr_14142[(8)] = inst_14051);

return statearr_14142;
})();
var statearr_14143_15125 = state_14098__$1;
(statearr_14143_15125[(2)] = null);

(statearr_14143_15125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14099 === (10))){
var inst_14075 = (state_14098[(12)]);
var inst_14079 = cljs.core.complement(inst_14075);
var inst_14080 = taoensso.encore.rsome(inst_14079,client_ids_unsatisfied);
var state_14098__$1 = state_14098;
if(cljs.core.truth_(inst_14080)){
var statearr_14145_15128 = state_14098__$1;
(statearr_14145_15128[(1)] = (13));

} else {
var statearr_14146_15129 = state_14098__$1;
(statearr_14146_15129[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14099 === (8))){
var state_14098__$1 = state_14098;
var statearr_14147_15130 = state_14098__$1;
(statearr_14147_15130[(2)] = null);

(statearr_14147_15130[(1)] = (9));


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
});})(c__7914__auto__,ms_backoffs,client_ids_unsatisfied))
;
return ((function (switch__7528__auto__,c__7914__auto__,ms_backoffs,client_ids_unsatisfied){
return (function() {
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__7529__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__7529__auto____0 = (function (){
var statearr_14148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14148[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__7529__auto__);

(statearr_14148[(1)] = (1));

return statearr_14148;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__7529__auto____1 = (function (state_14098){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_14098);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e14149){if((e14149 instanceof Object)){
var ex__7532__auto__ = e14149;
var statearr_14150_15133 = state_14098;
(statearr_14150_15133[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14149;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15134 = state_14098;
state_14098 = G__15134;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__7529__auto__ = function(state_14098){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__7529__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__7529__auto____1.call(this,state_14098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__7529__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__7529__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto__,ms_backoffs,client_ids_unsatisfied))
})();
var state__7916__auto__ = (function (){var statearr_14154 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_14154[(6)] = c__7914__auto__);

return statearr_14154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto__,ms_backoffs,client_ids_unsatisfied))
);

return c__7914__auto__;
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
var G__14171 = arguments.length;
switch (G__14171) {
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",809,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$(new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,-2124340936);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",814,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,-1332226610);

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__14174_15140 = new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264);
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__14174_15140) : _QMARK_cb_fn.call(null,G__14174_15140));
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
var vec__14179 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null,old_state));
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped(new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14179,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14179,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_15143 = (function (){try{if(cljs.core.map_QMARK_(state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e14182){if((e14182 instanceof Error)){
var e = e14182;
return e;
} else {
throw e14182;

}
}})();
if((e_15143 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",861,"(map? state)",state,e_15143,null);
}

var e_15144 = (function (){try{if((function (){var fexpr__14189 = (function (x){
return cljs.core.contains_QMARK_((function (){var G__14190 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__14190) : taoensso.truss.impl.set_STAR_.call(null,G__14190));
})(),x);
});
return fexpr__14189(reason);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e14186){if((e14186 instanceof Error)){
var e = e14186;
return e;
} else {
throw e14186;

}
}})();
if((e_15144 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",862,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_15144,null);
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
var e_15145 = (function (){try{if(taoensso.encore.chan_QMARK_(_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e14194){if((e14194 instanceof Error)){
var e = e14194;
return e;
} else {
throw e14194;

}
}})();
if((e_15145 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",883,"(enc/chan? ?cb)",_QMARK_cb,e_15145,null);
}

taoensso.sente.assert_event(ev);

var vec__14195 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14195,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14195,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__14195,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([taoensso.encore.as_qname(ev_id),".cb"].join('')),reply], null));
});
;})(vec__14195,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",894,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,580915001);

var buffered_evs = ((cljs.core.vector_QMARK_(clj))?clj:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",895,"(vector? clj)",clj,null,null));
var seq__14198 = cljs.core.seq(buffered_evs);
var chunk__14199 = null;
var count__14200 = (0);
var i__14201 = (0);
while(true){
if((i__14201 < count__14200)){
var ev = chunk__14199.cljs$core$IIndexed$_nth$arity$2(null,i__14201);
taoensso.sente.assert_event(ev);

var vec__14208_15148 = ev;
var id_15149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14208_15148,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_15149),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__15150 = seq__14198;
var G__15151 = chunk__14199;
var G__15152 = count__14200;
var G__15153 = (i__14201 + (1));
seq__14198 = G__15150;
chunk__14199 = G__15151;
count__14200 = G__15152;
i__14201 = G__15153;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__14198);
if(temp__5735__auto__){
var seq__14198__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14198__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__14198__$1);
var G__15154 = cljs.core.chunk_rest(seq__14198__$1);
var G__15155 = c__4550__auto__;
var G__15156 = cljs.core.count(c__4550__auto__);
var G__15157 = (0);
seq__14198 = G__15154;
chunk__14199 = G__15155;
count__14200 = G__15156;
i__14201 = G__15157;
continue;
} else {
var ev = cljs.core.first(seq__14198__$1);
taoensso.sente.assert_event(ev);

var vec__14211_15158 = ev;
var id_15159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14211_15158,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_15159),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__15160 = cljs.core.next(seq__14198__$1);
var G__15161 = null;
var G__15162 = (0);
var G__15163 = (0);
seq__14198 = G__15160;
chunk__14199 = G__15161;
count__14200 = G__15162;
i__14201 = G__15163;
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
var vec__14217 = x;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14217,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return and__4120__auto__;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_15164 = (function (){try{if((function (){var fexpr__14226 = (function (x){
return cljs.core.contains_QMARK_((function (){var G__14227 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__14227) : taoensso.truss.impl.set_STAR_.call(null,G__14227));
})(),x);
});
return fexpr__14226(chsk_type);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e14224){if((e14224 instanceof Error)){
var e = e14224;
return e;
} else {
throw e14224;

}
}})();
if((e_15164 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",909,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_15164,null);
}

var e_15166 = (function (){try{if(taoensso.sente.handshake_QMARK_(clj)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e14229){if((e14229 instanceof Error)){
var e = e14229;
return e;
} else {
throw e14229;

}
}})();
if((e_15166 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",910,"(handshake? clj)",clj,e_15166,null);
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",911,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,-552300051);

var vec__14232 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14232,(0),null);
var vec__14235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14232,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14235,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14235,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14235,(2),null);
var map__14238 = chsk;
var map__14238__$1 = (((((!((map__14238 == null))))?(((((map__14238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14238):map__14238);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14238__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14238__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_(ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,null,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event(handshake_ev);

taoensso.sente.swap_chsk_state_BANG_(chsk,((function (vec__14232,_,vec__14235,_QMARK_uid,___$1,_QMARK_handshake_data,map__14238,map__14238__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev){
return (function (p1__14220_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__14220_SHARP_,new_state], 0));
});})(vec__14232,_,vec__14235,_QMARK_uid,___$1,_QMARK_handshake_data,map__14238,map__14238__$1,chs,ever_opened_QMARK__,first_handshake_QMARK_,new_state,handshake_ev))
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
}catch (e14240){var e = e14240;
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

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k14250,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__14254 = k14250;
var G__14254__$1 = (((G__14254 instanceof cljs.core.Keyword))?G__14254.fqn:null);
switch (G__14254__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14250,else__4388__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__14255){
var vec__14256 = p__14255;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14256,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14256,(1),null);
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14249){
var self__ = this;
var G__14249__$1 = this;
return (new cljs.core.RecordIter((0),G__14249__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__14259 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__14259(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14251,other14252){
var self__ = this;
var this14251__$1 = this;
return (((!((other14252 == null)))) && ((this14251__$1.constructor === other14252.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14251__$1.client_id,other14252.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14251__$1.chs,other14252.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14251__$1.params,other14252.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14251__$1.packer,other14252.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14251__$1.url,other14252.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14251__$1.ws_kalive_ms,other14252.ws_kalive_ms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14251__$1.state_,other14252.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14251__$1.instance_handle_,other14252.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14251__$1.retry_count_,other14252.retry_count_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14251__$1.ever_opened_QMARK__,other14252.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14251__$1.backoff_ms_fn,other14252.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14251__$1.cbs_waiting_,other14252.cbs_waiting_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14251__$1.socket_,other14252.socket_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14251__$1.udt_last_comms_,other14252.udt_last_comms_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14251__$1.__extmap,other14252.__extmap)));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__14249){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__14260 = cljs.core.keyword_identical_QMARK_;
var expr__14261 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__14263 = new cljs.core.Keyword(null,"client-id","client-id",-464622140);
var G__14264 = expr__14261;
return (pred__14260.cljs$core$IFn$_invoke$arity$2 ? pred__14260.cljs$core$IFn$_invoke$arity$2(G__14263,G__14264) : pred__14260.call(null,G__14263,G__14264));
})())){
return (new taoensso.sente.ChWebSocket(G__14249,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14265 = new cljs.core.Keyword(null,"chs","chs",376886120);
var G__14266 = expr__14261;
return (pred__14260.cljs$core$IFn$_invoke$arity$2 ? pred__14260.cljs$core$IFn$_invoke$arity$2(G__14265,G__14266) : pred__14260.call(null,G__14265,G__14266));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__14249,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14267 = new cljs.core.Keyword(null,"params","params",710516235);
var G__14268 = expr__14261;
return (pred__14260.cljs$core$IFn$_invoke$arity$2 ? pred__14260.cljs$core$IFn$_invoke$arity$2(G__14267,G__14268) : pred__14260.call(null,G__14267,G__14268));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__14249,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14269 = new cljs.core.Keyword(null,"packer","packer",66077544);
var G__14270 = expr__14261;
return (pred__14260.cljs$core$IFn$_invoke$arity$2 ? pred__14260.cljs$core$IFn$_invoke$arity$2(G__14269,G__14270) : pred__14260.call(null,G__14269,G__14270));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__14249,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14271 = new cljs.core.Keyword(null,"url","url",276297046);
var G__14272 = expr__14261;
return (pred__14260.cljs$core$IFn$_invoke$arity$2 ? pred__14260.cljs$core$IFn$_invoke$arity$2(G__14271,G__14272) : pred__14260.call(null,G__14271,G__14272));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__14249,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14273 = new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968);
var G__14274 = expr__14261;
return (pred__14260.cljs$core$IFn$_invoke$arity$2 ? pred__14260.cljs$core$IFn$_invoke$arity$2(G__14273,G__14274) : pred__14260.call(null,G__14273,G__14274));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__14249,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14275 = new cljs.core.Keyword(null,"state_","state_",957667102);
var G__14276 = expr__14261;
return (pred__14260.cljs$core$IFn$_invoke$arity$2 ? pred__14260.cljs$core$IFn$_invoke$arity$2(G__14275,G__14276) : pred__14260.call(null,G__14275,G__14276));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__14249,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14277 = new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457);
var G__14278 = expr__14261;
return (pred__14260.cljs$core$IFn$_invoke$arity$2 ? pred__14260.cljs$core$IFn$_invoke$arity$2(G__14277,G__14278) : pred__14260.call(null,G__14277,G__14278));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__14249,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14279 = new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093);
var G__14280 = expr__14261;
return (pred__14260.cljs$core$IFn$_invoke$arity$2 ? pred__14260.cljs$core$IFn$_invoke$arity$2(G__14279,G__14280) : pred__14260.call(null,G__14279,G__14280));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__14249,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14281 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913);
var G__14282 = expr__14261;
return (pred__14260.cljs$core$IFn$_invoke$arity$2 ? pred__14260.cljs$core$IFn$_invoke$arity$2(G__14281,G__14282) : pred__14260.call(null,G__14281,G__14282));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__14249,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14283 = new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955);
var G__14284 = expr__14261;
return (pred__14260.cljs$core$IFn$_invoke$arity$2 ? pred__14260.cljs$core$IFn$_invoke$arity$2(G__14283,G__14284) : pred__14260.call(null,G__14283,G__14284));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__14249,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14285 = new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061);
var G__14286 = expr__14261;
return (pred__14260.cljs$core$IFn$_invoke$arity$2 ? pred__14260.cljs$core$IFn$_invoke$arity$2(G__14285,G__14286) : pred__14260.call(null,G__14285,G__14286));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__14249,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14287 = new cljs.core.Keyword(null,"socket_","socket_",-361048908);
var G__14288 = expr__14261;
return (pred__14260.cljs$core$IFn$_invoke$arity$2 ? pred__14260.cljs$core$IFn$_invoke$arity$2(G__14287,G__14288) : pred__14260.call(null,G__14287,G__14288));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__14249,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14289 = new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639);
var G__14290 = expr__14261;
return (pred__14260.cljs$core$IFn$_invoke$arity$2 ? pred__14260.cljs$core$IFn$_invoke$arity$2(G__14289,G__14290) : pred__14260.call(null,G__14289,G__14290));
})())){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__14249,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__14249),null));
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

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__14249){
var self__ = this;
var this__4384__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__14249,self__.__extmap,self__.__hash));
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
return (function (p1__14244_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__14244_SHARP_,reason);
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
var map__14294 = opts;
var map__14294__$1 = (((((!((map__14294 == null))))?(((((map__14294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14294):map__14294);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14294__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14294__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14294__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,_QMARK_cb_uuid);
var temp__5735__auto___15177 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5735__auto___15177)){
var cb_uuid_15178 = temp__5735__auto___15177;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_15178], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e14296){if((e14296 instanceof Error)){
var e = e14296;
return e;
} else {
throw e14296;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",996,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__5735__auto___15179__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5735__auto___15179__$1)){
var timeout_ms_15180 = temp__5735__auto___15179__$1;
var c__7914__auto___15181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto___15181,timeout_ms_15180,temp__5735__auto___15179__$1,cb_uuid_15178,temp__5735__auto___15177,_QMARK_cb_uuid,ppstr,map__14294,map__14294__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto___15181,timeout_ms_15180,temp__5735__auto___15179__$1,cb_uuid_15178,temp__5735__auto___15177,_QMARK_cb_uuid,ppstr,map__14294,map__14294__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (state_14307){
var state_val_14308 = (state_14307[(1)]);
if((state_val_14308 === (1))){
var inst_14297 = cljs.core.async.timeout(timeout_ms_15180);
var state_14307__$1 = state_14307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14307__$1,(2),inst_14297);
} else {
if((state_val_14308 === (2))){
var inst_14300 = (state_14307[(7)]);
var inst_14299 = (state_14307[(2)]);
var inst_14300__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_14307__$1 = (function (){var statearr_14309 = state_14307;
(statearr_14309[(8)] = inst_14299);

(statearr_14309[(7)] = inst_14300__$1);

return statearr_14309;
})();
if(cljs.core.truth_(inst_14300__$1)){
var statearr_14311_15182 = state_14307__$1;
(statearr_14311_15182[(1)] = (3));

} else {
var statearr_14313_15183 = state_14307__$1;
(statearr_14313_15183[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14308 === (3))){
var inst_14300 = (state_14307[(7)]);
var inst_14302 = (function (){var G__14315 = new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489);
return (inst_14300.cljs$core$IFn$_invoke$arity$1 ? inst_14300.cljs$core$IFn$_invoke$arity$1(G__14315) : inst_14300.call(null,G__14315));
})();
var state_14307__$1 = state_14307;
var statearr_14316_15184 = state_14307__$1;
(statearr_14316_15184[(2)] = inst_14302);

(statearr_14316_15184[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14308 === (4))){
var state_14307__$1 = state_14307;
var statearr_14317_15185 = state_14307__$1;
(statearr_14317_15185[(2)] = null);

(statearr_14317_15185[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14308 === (5))){
var inst_14305 = (state_14307[(2)]);
var state_14307__$1 = state_14307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14307__$1,inst_14305);
} else {
return null;
}
}
}
}
}
});})(c__7914__auto___15181,timeout_ms_15180,temp__5735__auto___15179__$1,cb_uuid_15178,temp__5735__auto___15177,_QMARK_cb_uuid,ppstr,map__14294,map__14294__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
return ((function (switch__7528__auto__,c__7914__auto___15181,timeout_ms_15180,temp__5735__auto___15179__$1,cb_uuid_15178,temp__5735__auto___15177,_QMARK_cb_uuid,ppstr,map__14294,map__14294__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function() {
var taoensso$sente$state_machine__7529__auto__ = null;
var taoensso$sente$state_machine__7529__auto____0 = (function (){
var statearr_14318 = [null,null,null,null,null,null,null,null,null];
(statearr_14318[(0)] = taoensso$sente$state_machine__7529__auto__);

(statearr_14318[(1)] = (1));

return statearr_14318;
});
var taoensso$sente$state_machine__7529__auto____1 = (function (state_14307){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_14307);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e14319){if((e14319 instanceof Object)){
var ex__7532__auto__ = e14319;
var statearr_14320_15186 = state_14307;
(statearr_14320_15186[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14319;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15187 = state_14307;
state_14307 = G__15187;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
taoensso$sente$state_machine__7529__auto__ = function(state_14307){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__7529__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__7529__auto____1.call(this,state_14307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__7529__auto____0;
taoensso$sente$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__7529__auto____1;
return taoensso$sente$state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto___15181,timeout_ms_15180,temp__5735__auto___15179__$1,cb_uuid_15178,temp__5735__auto___15177,_QMARK_cb_uuid,ppstr,map__14294,map__14294__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
})();
var state__7916__auto__ = (function (){var statearr_14321 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_14321[(6)] = c__7914__auto___15181);

return statearr_14321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto___15181,timeout_ms_15180,temp__5735__auto___15179__$1,cb_uuid_15178,temp__5735__auto___15177,_QMARK_cb_uuid,ppstr,map__14294,map__14294__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

} else {
}
} else {
}

try{cljs.core.deref(self__.socket_).send(ppstr);

cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e14322){var e = e14322;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",1008,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,map__14294,map__14294__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,map__14294,map__14294__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,557409708);

var temp__5735__auto___15188 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5735__auto___15188)){
var cb_uuid_15189 = temp__5735__auto___15188;
var cb_fn_STAR__15190 = (function (){var or__4131__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_15189);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e14323){if((e14323 instanceof Error)){
var e__$1 = e14323;
return e__$1;
} else {
throw e14323;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1011,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
var G__14324_15191 = new cljs.core.Keyword("chsk","error","chsk/error",-984175439);
(cb_fn_STAR__15190.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__15190.cljs$core$IFn$_invoke$arity$1(G__14324_15191) : cb_fn_STAR__15190.call(null,G__14324_15191));
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",1033,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
,null)),null,251242439);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (p1__14245_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14245_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
;
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))], null)], 0)))));
}catch (e14325){var e = e14325;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",1048,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
});})(e,retry_fn,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
,null)),null,987100823);

return null;
}})();
if(cljs.core.not(_QMARK_socket)){
return retry_fn();
} else {
return cljs.core.reset_BANG_(self__.socket_,(function (){var G__14326 = _QMARK_socket;
(G__14326["onerror"] = ((function (G__14326,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (ws_ev){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",1058,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (G__14326,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ws_ev);
}catch (e14327){var _ = e14327;
return ws_ev;
}})()], null);
});})(G__14326,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
,null)),null,2013110239);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (last_ws_error,G__14326,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (p1__14246_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14246_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error);
});})(last_ws_error,G__14326,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
);
});})(G__14326,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
);

(G__14326["onmessage"] = ((function (G__14326,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__14328 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14328,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14328,(1),null);
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
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",1094,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__5733__auto____$1,cb_uuid,temp__5733__auto__,or__4131__auto____$1,or__4131__auto__,ppstr,vec__14328,clj,_QMARK_cb_uuid,G__14326,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__5733__auto____$1,cb_uuid,temp__5733__auto__,or__4131__auto____$1,or__4131__auto__,ppstr,vec__14328,clj,_QMARK_cb_uuid,G__14326,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
,null)),null,1116779408);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});})(G__14326,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
);

(G__14326["onclose"] = ((function (G__14326,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"wasClean");
var code = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"code");
var reason = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",1116,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (clean_QMARK_,code,reason,last_ws_close,G__14326,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
});})(clean_QMARK_,code,reason,last_ws_close,G__14326,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
,null)),null,-32442791);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__14326,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (p1__14247_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14247_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__14326,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
);
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (clean_QMARK_,code,reason,last_ws_close,G__14326,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1){
return (function (p1__14248_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.sente.chsk_state__GT_closed(p1__14248_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
});})(clean_QMARK_,code,reason,last_ws_close,G__14326,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
);

return retry_fn();
}
});})(G__14326,retry_fn,_QMARK_socket,instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
);

return G__14326;
})());
}
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,WebSocket,temp__5735__auto__,chsk__$1))
;
var temp__5735__auto___15192__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5735__auto___15192__$1)){
var ms_15193 = temp__5735__auto___15192__$1;
var c__7914__auto___15194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto___15194,ms_15193,temp__5735__auto___15192__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5735__auto__,chsk__$1){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto___15194,ms_15193,temp__5735__auto___15192__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5735__auto__,chsk__$1){
return (function (state_14358){
var state_val_14359 = (state_14358[(1)]);
if((state_val_14359 === (7))){
var inst_14354 = (state_14358[(2)]);
var state_14358__$1 = state_14358;
var statearr_14360_15195 = state_14358__$1;
(statearr_14360_15195[(2)] = inst_14354);

(statearr_14360_15195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14359 === (1))){
var state_14358__$1 = state_14358;
var statearr_14361_15196 = state_14358__$1;
(statearr_14361_15196[(2)] = null);

(statearr_14361_15196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14359 === (4))){
var inst_14335 = (state_14358[(2)]);
var inst_14336 = have_handle_QMARK_();
var state_14358__$1 = (function (){var statearr_14362 = state_14358;
(statearr_14362[(7)] = inst_14335);

return statearr_14362;
})();
if(inst_14336){
var statearr_14363_15197 = state_14358__$1;
(statearr_14363_15197[(1)] = (5));

} else {
var statearr_14364_15198 = state_14358__$1;
(statearr_14364_15198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14359 === (6))){
var state_14358__$1 = state_14358;
var statearr_14365_15199 = state_14358__$1;
(statearr_14365_15199[(2)] = null);

(statearr_14365_15199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14359 === (3))){
var inst_14356 = (state_14358[(2)]);
var state_14358__$1 = state_14358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14358__$1,inst_14356);
} else {
if((state_val_14359 === (2))){
var inst_14332 = cljs.core.deref(self__.udt_last_comms_);
var inst_14333 = cljs.core.async.timeout(ms_15193);
var state_14358__$1 = (function (){var statearr_14366 = state_14358;
(statearr_14366[(8)] = inst_14332);

return statearr_14366;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14358__$1,(4),inst_14333);
} else {
if((state_val_14359 === (9))){
var state_14358__$1 = state_14358;
var statearr_14367_15200 = state_14358__$1;
(statearr_14367_15200[(2)] = null);

(statearr_14367_15200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14359 === (5))){
var inst_14332 = (state_14358[(8)]);
var inst_14338 = cljs.core.deref(self__.udt_last_comms_);
var inst_14339 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14332,inst_14338);
var state_14358__$1 = state_14358;
if(inst_14339){
var statearr_14368_15201 = state_14358__$1;
(statearr_14368_15201[(1)] = (8));

} else {
var statearr_14369_15202 = state_14358__$1;
(statearr_14369_15202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14359 === (10))){
var inst_14350 = (state_14358[(2)]);
var state_14358__$1 = (function (){var statearr_14370 = state_14358;
(statearr_14370[(9)] = inst_14350);

return statearr_14370;
})();
var statearr_14371_15203 = state_14358__$1;
(statearr_14371_15203[(2)] = null);

(statearr_14371_15203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14359 === (8))){
var inst_14341 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14342 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_14343 = (new cljs.core.PersistentVector(null,1,(5),inst_14341,inst_14342,null));
var inst_14344 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_14345 = [true];
var inst_14346 = cljs.core.PersistentHashMap.fromArrays(inst_14344,inst_14345);
var inst_14347 = chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null,inst_14343,inst_14346);
var state_14358__$1 = state_14358;
var statearr_14372_15204 = state_14358__$1;
(statearr_14372_15204[(2)] = inst_14347);

(statearr_14372_15204[(1)] = (10));


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
});})(c__7914__auto___15194,ms_15193,temp__5735__auto___15192__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5735__auto__,chsk__$1))
;
return ((function (switch__7528__auto__,c__7914__auto___15194,ms_15193,temp__5735__auto___15192__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5735__auto__,chsk__$1){
return (function() {
var taoensso$sente$state_machine__7529__auto__ = null;
var taoensso$sente$state_machine__7529__auto____0 = (function (){
var statearr_14373 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14373[(0)] = taoensso$sente$state_machine__7529__auto__);

(statearr_14373[(1)] = (1));

return statearr_14373;
});
var taoensso$sente$state_machine__7529__auto____1 = (function (state_14358){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_14358);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e14374){if((e14374 instanceof Object)){
var ex__7532__auto__ = e14374;
var statearr_14375_15205 = state_14358;
(statearr_14375_15205[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14374;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15206 = state_14358;
state_14358 = G__15206;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
taoensso$sente$state_machine__7529__auto__ = function(state_14358){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__7529__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__7529__auto____1.call(this,state_14358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__7529__auto____0;
taoensso$sente$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__7529__auto____1;
return taoensso$sente$state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto___15194,ms_15193,temp__5735__auto___15192__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5735__auto__,chsk__$1))
})();
var state__7916__auto__ = (function (){var statearr_14376 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_14376[(6)] = c__7914__auto___15194);

return statearr_14376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto___15194,ms_15193,temp__5735__auto___15192__$1,instance_handle,have_handle_QMARK_,connect_fn,WebSocket,temp__5735__auto__,chsk__$1))
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
taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__14253){
var extmap__4424__auto__ = (function (){var G__14377 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14253,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], 0));
if(cljs.core.record_QMARK_(G__14253)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14377);
} else {
return G__14377;
}
})();
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__14253),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__14253),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__14253),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__14253),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__14253),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__14253),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__14253),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__14253),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__14253),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__14253),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__14253),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__14253),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__14253),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__14253),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k14385,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__14389 = k14385;
var G__14389__$1 = (((G__14389 instanceof cljs.core.Keyword))?G__14389.fqn:null);
switch (G__14389__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14385,else__4388__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__14390){
var vec__14391 = p__14390;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14391,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14391,(1),null);
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14384){
var self__ = this;
var G__14384__$1 = this;
return (new cljs.core.RecordIter((0),G__14384__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__14394 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__14394(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14386,other14387){
var self__ = this;
var this14386__$1 = this;
return (((!((other14387 == null)))) && ((this14386__$1.constructor === other14387.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14386__$1.client_id,other14387.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14386__$1.chs,other14387.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14386__$1.params,other14387.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14386__$1.packer,other14387.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14386__$1.url,other14387.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14386__$1.state_,other14387.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14386__$1.instance_handle_,other14387.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14386__$1.ever_opened_QMARK__,other14387.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14386__$1.backoff_ms_fn,other14387.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14386__$1.ajax_opts,other14387.ajax_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14386__$1.curr_xhr_,other14387.curr_xhr_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14386__$1.__extmap,other14387.__extmap)));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__14384){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__14395 = cljs.core.keyword_identical_QMARK_;
var expr__14396 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__14398 = new cljs.core.Keyword(null,"client-id","client-id",-464622140);
var G__14399 = expr__14396;
return (pred__14395.cljs$core$IFn$_invoke$arity$2 ? pred__14395.cljs$core$IFn$_invoke$arity$2(G__14398,G__14399) : pred__14395.call(null,G__14398,G__14399));
})())){
return (new taoensso.sente.ChAjaxSocket(G__14384,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14400 = new cljs.core.Keyword(null,"chs","chs",376886120);
var G__14401 = expr__14396;
return (pred__14395.cljs$core$IFn$_invoke$arity$2 ? pred__14395.cljs$core$IFn$_invoke$arity$2(G__14400,G__14401) : pred__14395.call(null,G__14400,G__14401));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__14384,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14402 = new cljs.core.Keyword(null,"params","params",710516235);
var G__14403 = expr__14396;
return (pred__14395.cljs$core$IFn$_invoke$arity$2 ? pred__14395.cljs$core$IFn$_invoke$arity$2(G__14402,G__14403) : pred__14395.call(null,G__14402,G__14403));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__14384,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14404 = new cljs.core.Keyword(null,"packer","packer",66077544);
var G__14405 = expr__14396;
return (pred__14395.cljs$core$IFn$_invoke$arity$2 ? pred__14395.cljs$core$IFn$_invoke$arity$2(G__14404,G__14405) : pred__14395.call(null,G__14404,G__14405));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__14384,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14406 = new cljs.core.Keyword(null,"url","url",276297046);
var G__14407 = expr__14396;
return (pred__14395.cljs$core$IFn$_invoke$arity$2 ? pred__14395.cljs$core$IFn$_invoke$arity$2(G__14406,G__14407) : pred__14395.call(null,G__14406,G__14407));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__14384,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14408 = new cljs.core.Keyword(null,"state_","state_",957667102);
var G__14409 = expr__14396;
return (pred__14395.cljs$core$IFn$_invoke$arity$2 ? pred__14395.cljs$core$IFn$_invoke$arity$2(G__14408,G__14409) : pred__14395.call(null,G__14408,G__14409));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__14384,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14410 = new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457);
var G__14411 = expr__14396;
return (pred__14395.cljs$core$IFn$_invoke$arity$2 ? pred__14395.cljs$core$IFn$_invoke$arity$2(G__14410,G__14411) : pred__14395.call(null,G__14410,G__14411));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__14384,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14412 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913);
var G__14413 = expr__14396;
return (pred__14395.cljs$core$IFn$_invoke$arity$2 ? pred__14395.cljs$core$IFn$_invoke$arity$2(G__14412,G__14413) : pred__14395.call(null,G__14412,G__14413));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__14384,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14414 = new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955);
var G__14415 = expr__14396;
return (pred__14395.cljs$core$IFn$_invoke$arity$2 ? pred__14395.cljs$core$IFn$_invoke$arity$2(G__14414,G__14415) : pred__14395.call(null,G__14414,G__14415));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__14384,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14416 = new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109);
var G__14417 = expr__14396;
return (pred__14395.cljs$core$IFn$_invoke$arity$2 ? pred__14395.cljs$core$IFn$_invoke$arity$2(G__14416,G__14417) : pred__14395.call(null,G__14416,G__14417));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__14384,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14418 = new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696);
var G__14419 = expr__14396;
return (pred__14395.cljs$core$IFn$_invoke$arity$2 ? pred__14395.cljs$core$IFn$_invoke$arity$2(G__14418,G__14419) : pred__14395.call(null,G__14418,G__14419));
})())){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__14384,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__14384),null));
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

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__14384){
var self__ = this;
var this__4384__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__14384,self__.__extmap,self__.__hash));
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
return (function (p1__14378_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__14378_SHARP_,reason);
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
var map__14420 = opts;
var map__14420__$1 = (((((!((map__14420 == null))))?(((((map__14420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14420):map__14420);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14420__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14420__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14420__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_));
var G__14422_15208 = self__.url;
var G__14423_15209 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__4131__auto__ = _QMARK_timeout_ms;
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
var G__14424_15210 = ((function (G__14422_15208,G__14423_15209,csrf_token,map__14420,map__14420__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function taoensso$sente$ajax_cb(p__14425){
var map__14426 = p__14425;
var map__14426__$1 = (((((!((map__14426 == null))))?(((((map__14426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14426):map__14426);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14426__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14426__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
var G__14428 = new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489);
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__14428) : _QMARK_cb_fn.call(null,G__14428));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (map__14426,map__14426__$1,_QMARK_error,_QMARK_content,G__14422_15208,G__14423_15209,csrf_token,map__14420,map__14420__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__14379_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__14379_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__14426,map__14426__$1,_QMARK_error,_QMARK_content,G__14422_15208,G__14423_15209,csrf_token,map__14420,map__14420__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);

if(cljs.core.truth_(_QMARK_cb_fn)){
var G__14429 = new cljs.core.Keyword("chsk","error","chsk/error",-984175439);
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(G__14429) : _QMARK_cb_fn.call(null,G__14429));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__14430 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14430,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14430,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null,resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",1237,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (content,resp_ppstr,vec__14430,resp_clj,___$1,map__14426,map__14426__$1,_QMARK_error,_QMARK_content,G__14422_15208,G__14423_15209,csrf_token,map__14420,map__14420__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__14430,resp_clj,___$1,map__14426,map__14426__$1,_QMARK_error,_QMARK_content,G__14422_15208,G__14423_15209,csrf_token,map__14420,map__14420__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
,null)),null,1837938522);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (content,resp_ppstr,vec__14430,resp_clj,___$1,map__14426,map__14426__$1,_QMARK_error,_QMARK_content,G__14422_15208,G__14423_15209,csrf_token,map__14420,map__14420__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1){
return (function (p1__14380_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14380_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,resp_ppstr,vec__14430,resp_clj,___$1,map__14426,map__14426__$1,_QMARK_error,_QMARK_content,G__14422_15208,G__14423_15209,csrf_token,map__14420,map__14420__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
);
}
});})(G__14422_15208,G__14423_15209,csrf_token,map__14420,map__14420__$1,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_,_,_QMARK_cb_fn,chsk__$1))
;
(taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__14422_15208,G__14423_15209,G__14424_15210) : taoensso.sente.ajax_lite.call(null,G__14422_15208,G__14423_15209,G__14424_15210));

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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",1247,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,-1935745678);

if(have_handle_QMARK_()){
var retry_fn = ((function (instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",1255,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,null)),null,613318929);

goog.global.setTimeout(((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (){
return taoensso$sente$poll_fn(retry_count_STAR_);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__14381_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14381_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
});})(retry_count_STAR_,backoff_ms,udt_next_reconnect,instance_handle,have_handle_QMARK_,chsk__$1))
);
} else {
return null;
}
});})(instance_handle,have_handle_QMARK_,chsk__$1))
;
return cljs.core.reset_BANG_(self__.curr_xhr_,(function (){var G__14435 = self__.url;
var G__14436 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null))], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))], null)], 0))], null)], 0));
var G__14437 = ((function (G__14435,G__14436,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function taoensso$sente$poll_fn_$_ajax_cb(p__14438){
var map__14439 = p__14438;
var map__14439__$1 = (((((!((map__14439 == null))))?(((((map__14439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14439):map__14439);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14439__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14439__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (map__14439,map__14439__$1,_QMARK_error,_QMARK_content,G__14435,G__14436,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__14382_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__14382_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
});})(map__14439,map__14439__$1,_QMARK_error,_QMARK_content,G__14435,G__14436,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
);

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__14444 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14444,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_(clj);
if(handshake_QMARK_){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,((function (content,ppstr,vec__14444,clj,handshake_QMARK_,map__14439,map__14439__$1,_QMARK_error,_QMARK_content,G__14435,G__14436,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1){
return (function (p1__14383_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14383_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
});})(content,ppstr,vec__14444,clj,handshake_QMARK_,map__14439,map__14439__$1,_QMARK_error,_QMARK_content,G__14435,G__14436,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
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
});})(G__14435,G__14436,retry_fn,instance_handle,have_handle_QMARK_,chsk__$1))
;
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__14435,G__14436,G__14437) : taoensso.sente.ajax_lite.call(null,G__14435,G__14436,G__14437));
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
taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__14388){
var extmap__4424__auto__ = (function (){var G__14447 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14388,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], 0));
if(cljs.core.record_QMARK_(G__14388)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14447);
} else {
return G__14447;
}
})();
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__14388),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__14388),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__14388),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__14388),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__14388),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__14388),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__14388),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__14388),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__14388),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__14388),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__14388),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k14449,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__14453 = k14449;
var G__14453__$1 = (((G__14453 instanceof cljs.core.Keyword))?G__14453.fqn:null);
switch (G__14453__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14449,else__4388__auto__);

}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__14454){
var vec__14455 = p__14454;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14455,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14455,(1),null);
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14448){
var self__ = this;
var G__14448__$1 = this;
return (new cljs.core.RecordIter((0),G__14448__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__14458 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1193508708 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__14458(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14450,other14451){
var self__ = this;
var this14450__$1 = this;
return (((!((other14451 == null)))) && ((this14450__$1.constructor === other14451.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14450__$1.ws_chsk_opts,other14451.ws_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14450__$1.ajax_chsk_opts,other14451.ajax_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14450__$1.state_,other14451.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14450__$1.impl_,other14451.impl_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14450__$1.__extmap,other14451.__extmap)));
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__14448){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__14464 = cljs.core.keyword_identical_QMARK_;
var expr__14465 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__14467 = new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104);
var G__14468 = expr__14465;
return (pred__14464.cljs$core$IFn$_invoke$arity$2 ? pred__14464.cljs$core$IFn$_invoke$arity$2(G__14467,G__14468) : pred__14464.call(null,G__14467,G__14468));
})())){
return (new taoensso.sente.ChAutoSocket(G__14448,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14470 = new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327);
var G__14471 = expr__14465;
return (pred__14464.cljs$core$IFn$_invoke$arity$2 ? pred__14464.cljs$core$IFn$_invoke$arity$2(G__14470,G__14471) : pred__14464.call(null,G__14470,G__14471));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__14448,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14473 = new cljs.core.Keyword(null,"state_","state_",957667102);
var G__14474 = expr__14465;
return (pred__14464.cljs$core$IFn$_invoke$arity$2 ? pred__14464.cljs$core$IFn$_invoke$arity$2(G__14473,G__14474) : pred__14464.call(null,G__14473,G__14474));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__14448,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14475 = new cljs.core.Keyword(null,"impl_","impl_",1218818179);
var G__14476 = expr__14465;
return (pred__14464.cljs$core$IFn$_invoke$arity$2 ? pred__14464.cljs$core$IFn$_invoke$arity$2(G__14475,G__14476) : pred__14464.call(null,G__14475,G__14476));
})())){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__14448,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__14448),null));
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

taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__14448){
var self__ = this;
var this__4384__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__14448,self__.__extmap,self__.__hash));
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
var map__14477 = opts;
var map__14477__$1 = (((((!((map__14477 == null))))?(((((map__14477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14477):map__14477);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14477__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
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
var downgraded_QMARK___15212 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.add_watch(self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),((function (downgraded_QMARK___15212,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
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
if(cljs.core.compare_and_set_BANG_(downgraded_QMARK___15212,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",1388,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (ever_opened_QMARK__,temp__5735__auto____$1,impl,temp__5735__auto__,downgraded_QMARK___15212,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
});})(ever_opened_QMARK__,temp__5735__auto____$1,impl,temp__5735__auto__,downgraded_QMARK___15212,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
,null)),null,-980574724);

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
});})(downgraded_QMARK___15212,ajax_chsk_opts__$1,ws_chsk_opts__$1,ajax_conn_BANG_,chsk__$1))
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
taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__14452){
var extmap__4424__auto__ = (function (){var G__14479 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14452,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], 0));
if(cljs.core.record_QMARK_(G__14452)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14479);
} else {
return G__14479;
}
})();
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__14452),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__14452),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__14452),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__14452),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAutoSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__14480 = protocol;
var G__14480__$1 = (((G__14480 instanceof cljs.core.Keyword))?G__14480.fqn:null);
switch (G__14480__$1) {
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
var protocol__$2 = (function (){var e = (function (){try{if((function (){var fexpr__14483 = ((function (protocol__$1){
return (function (x){
return cljs.core.contains_QMARK_((function (){var G__14484 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__14484) : taoensso.truss.impl.set_STAR_.call(null,G__14484));
})(),x);
});})(protocol__$1))
;
return fexpr__14483(protocol__$1);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e14481){if((e14481 instanceof Error)){
var e = e14481;
return e;
} else {
throw e14481;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1408,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__14485 = type;
var G__14485__$1 = (((G__14485 instanceof cljs.core.Keyword))?G__14485.fqn:null);
switch (G__14485__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__14486 = protocol__$2;
switch (G__14486) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14486)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14485__$1)].join('')));

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
var len__4730__auto___15216 = arguments.length;
var i__4731__auto___15217 = (0);
while(true){
if((i__4731__auto___15217 < len__4730__auto___15216)){
args__4736__auto__.push((arguments[i__4731__auto___15217]));

var G__15218 = (i__4731__auto___15217 + (1));
i__4731__auto___15217 = G__15218;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,_QMARK_csrf_token,p__14490){
var vec__14491 = p__14490;
var map__14494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14491,(0),null);
var map__14494__$1 = (((((!((map__14494 == null))))?(((((map__14494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14494):map__14494);
var opts = map__14494__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14494__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14494__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(20)], 0)));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14494__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14494__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14494__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14494__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14494__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14494__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14494__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14494__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14494__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14491,(1),null);
var e_15219 = (function (){try{if((function (){var fexpr__14499 = ((function (vec__14491,map__14494,map__14494__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (x){
return cljs.core.contains_QMARK_((function (){var G__14500 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__14500) : taoensso.truss.impl.set_STAR_.call(null,G__14500));
})(),x);
});})(vec__14491,map__14494,map__14494__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
return fexpr__14499(type);
})()){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e14496){if((e14496 instanceof Error)){
var e = e14496;
return e;
} else {
throw e14496;

}
}})();
if((e_15219 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1450,"([:in #{:ws :ajax :auto}] type)",type,e_15219,null);
}

var e_15220 = (function (){try{if(taoensso.encore.nblank_str_QMARK_(client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e14501){if((e14501 instanceof Error)){
var e = e14501;
return e;
} else {
throw e14501;

}
}})();
if((e_15220 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1451,"(enc/nblank-str? client-id)",client_id,e_15220,null);
}

if((!((_deprecated_more_opts == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",1453,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__14491,map__14494,map__14494__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__14491,map__14494,map__14494__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,397266726);
} else {
}

if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",1454,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__14491,map__14494,map__14494__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__14491,map__14494,map__14494__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,1792432944);
} else {
}

if((((!(typeof _QMARK_csrf_token === 'string'))) || (clojure.string.blank_QMARK_(_QMARK_csrf_token)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",1457,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__14491,map__14494,map__14494__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WARNING: no CSRF token provided. Connections will FAIL if server-side CSRF check is enabled (as it is by default)."], null);
});})(vec__14491,map__14494,map__14494__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,-732738958);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var vec__14502 = (function (){var win_loc = taoensso.encore.get_win_loc();
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14505 = path__$1;
var G__14506 = win_loc;
var G__14507 = new cljs.core.Keyword(null,"ws","ws",86841443);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14505,G__14506,G__14507) : f.call(null,G__14505,G__14506,G__14507));
})(),(function (){var G__14508 = path__$1;
var G__14509 = win_loc;
var G__14510 = new cljs.core.Keyword(null,"ajax","ajax",814345549);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14508,G__14509,G__14510) : f.call(null,G__14508,G__14509,G__14510));
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
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14502,(0),null);
var ajax_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14502,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer((512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (buf,packer__$1,vec__14502,ws_url,ajax_url,vec__14491,map__14494,map__14494__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(buf,packer__$1,vec__14502,ws_url,ajax_url,vec__14491,map__14494,map__14494__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null)], 0));
var ajax_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null)], 0));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_((function (){var G__14515 = type;
var G__14515__$1 = (((G__14515 instanceof cljs.core.Keyword))?G__14515.fqn:null);
switch (G__14515__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14515__$1)].join('')));

}
})());
var temp__5733__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__5733__auto__)){
var chsk = temp__5733__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__5733__auto__,packer__$1,vec__14502,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__14491,map__14494,map__14494__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__14516 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14516,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14516,(1),null);
var ev__$1 = vec__14516;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(chsk_state_,internal_ch,send_fn,ev_ch,chsk,temp__5733__auto__,packer__$1,vec__14502,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__14491,map__14494,map__14494__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
));
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",1545,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__5733__auto__,packer__$1,vec__14502,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__14491,map__14494,map__14494__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
});})(temp__5733__auto__,packer__$1,vec__14502,ws_url,ajax_url,private_chs,common_chsk_opts,ws_chsk_opts,ajax_chsk_opts,auto_chsk_opts,_QMARK_chsk,vec__14491,map__14494,map__14494__$1,opts,ajax_opts,ws_kalive_ms,client_id,protocol,packer,params,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null,1176149701);
}
});

taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq14487){
var G__14488 = cljs.core.first(seq14487);
var seq14487__$1 = cljs.core.next(seq14487);
var G__14489 = cljs.core.first(seq14487__$1);
var seq14487__$2 = cljs.core.next(seq14487__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14488,G__14489,seq14487__$2);
});

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__14519 = opts;
var map__14519__$1 = (((((!((map__14519 == null))))?(((((map__14519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14519):map__14519);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14519__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14519__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14519__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var execute1 = ((function (map__14519,map__14519__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl){
return (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});})(map__14519,map__14519__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl))
;
var c__7914__auto___15222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto___15222,map__14519,map__14519__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto___15222,map__14519,map__14519__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (state_14568){
var state_val_14569 = (state_14568[(1)]);
if((state_val_14569 === (7))){
var inst_14564 = (state_14568[(2)]);
var state_14568__$1 = state_14568;
var statearr_14570_15223 = state_14568__$1;
(statearr_14570_15223[(2)] = inst_14564);

(statearr_14570_15223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (1))){
var state_14568__$1 = state_14568;
var statearr_14571_15224 = state_14568__$1;
(statearr_14571_15224[(2)] = null);

(statearr_14571_15224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (4))){
var inst_14529 = (state_14568[(7)]);
var inst_14531 = (state_14568[(8)]);
var inst_14530 = (state_14568[(9)]);
var inst_14534 = (state_14568[(10)]);
var inst_14529__$1 = (state_14568[(2)]);
var inst_14530__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14529__$1,(0),null);
var inst_14531__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14529__$1,(1),null);
var inst_14532 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14531__$1,ch_ctrl);
var inst_14533 = (inst_14530__$1 == null);
var inst_14534__$1 = ((inst_14532) || (inst_14533));
var state_14568__$1 = (function (){var statearr_14572 = state_14568;
(statearr_14572[(7)] = inst_14529__$1);

(statearr_14572[(8)] = inst_14531__$1);

(statearr_14572[(9)] = inst_14530__$1);

(statearr_14572[(10)] = inst_14534__$1);

return statearr_14572;
})();
if(cljs.core.truth_(inst_14534__$1)){
var statearr_14573_15225 = state_14568__$1;
(statearr_14573_15225[(1)] = (5));

} else {
var statearr_14574_15226 = state_14568__$1;
(statearr_14574_15226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (15))){
var inst_14530 = (state_14568[(9)]);
var state_14568__$1 = state_14568;
var statearr_14575_15227 = state_14568__$1;
(statearr_14575_15227[(2)] = inst_14530);

(statearr_14575_15227[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (13))){
var inst_14550 = (state_14568[(2)]);
var state_14568__$1 = state_14568;
var statearr_14576_15228 = state_14568__$1;
(statearr_14576_15228[(2)] = inst_14550);

(statearr_14576_15228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (6))){
var inst_14530 = (state_14568[(9)]);
var inst_14539 = (inst_14530 == null);
var inst_14540 = cljs.core.not(inst_14539);
var state_14568__$1 = state_14568;
if(inst_14540){
var statearr_14577_15229 = state_14568__$1;
(statearr_14577_15229[(1)] = (8));

} else {
var statearr_14578_15230 = state_14568__$1;
(statearr_14578_15230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (3))){
var inst_14566 = (state_14568[(2)]);
var state_14568__$1 = state_14568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14568__$1,inst_14566);
} else {
if((state_val_14569 === (12))){
var state_14568__$1 = state_14568;
var statearr_14579_15231 = state_14568__$1;
(statearr_14579_15231[(2)] = false);

(statearr_14579_15231[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (2))){
var inst_14525 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14526 = [ch_recv,ch_ctrl];
var inst_14527 = (new cljs.core.PersistentVector(null,2,(5),inst_14525,inst_14526,null));
var state_14568__$1 = state_14568;
return cljs.core.async.ioc_alts_BANG_(state_14568__$1,(4),inst_14527);
} else {
if((state_val_14569 === (11))){
var state_14568__$1 = state_14568;
var statearr_14580_15232 = state_14568__$1;
(statearr_14580_15232[(2)] = true);

(statearr_14580_15232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (9))){
var state_14568__$1 = state_14568;
var statearr_14581_15233 = state_14568__$1;
(statearr_14581_15233[(2)] = false);

(statearr_14581_15233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (5))){
var state_14568__$1 = state_14568;
var statearr_14582_15234 = state_14568__$1;
(statearr_14582_15234[(2)] = null);

(statearr_14582_15234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (14))){
var inst_14530 = (state_14568[(9)]);
var inst_14555 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14530);
var state_14568__$1 = state_14568;
var statearr_14583_15235 = state_14568__$1;
(statearr_14583_15235[(2)] = inst_14555);

(statearr_14583_15235[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (16))){
var inst_14529 = (state_14568[(7)]);
var inst_14531 = (state_14568[(8)]);
var inst_14530 = (state_14568[(9)]);
var inst_14534 = (state_14568[(10)]);
var inst_14558 = (state_14568[(2)]);
var inst_14559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14558,new cljs.core.Keyword(null,"event","event",301435442));
var inst_14560 = (function (){var vec__14522 = inst_14529;
var v = inst_14530;
var p = inst_14531;
var stop_QMARK_ = inst_14534;
var map__14537 = inst_14558;
var event_msg = inst_14558;
var event = inst_14559;
return ((function (vec__14522,v,p,stop_QMARK_,map__14537,event_msg,event,inst_14529,inst_14531,inst_14530,inst_14534,inst_14558,inst_14559,state_val_14569,c__7914__auto___15222,map__14519,map__14519__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",1572,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__14522,v,p,stop_QMARK_,map__14537,event_msg,event,inst_14529,inst_14531,inst_14530,inst_14534,inst_14558,inst_14559,state_val_14569,c__7914__auto___15222,map__14519,map__14519__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});})(vec__14522,v,p,stop_QMARK_,map__14537,event_msg,event,inst_14529,inst_14531,inst_14530,inst_14534,inst_14558,inst_14559,state_val_14569,c__7914__auto___15222,map__14519,map__14519__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-1002937160);
} else {
}

var G__14586 = (cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(taoensso.sente.server_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e14587){if((e14587 instanceof Error)){
var e = e14587;
return e;
} else {
throw e14587;

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
}catch (e14588){if((e14588 instanceof Error)){
var e = e14588;
return e;
} else {
throw e14588;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1576,"(client-event-msg? event-msg)",event_msg,e,null);
}
})());
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__14586) : event_msg_handler.call(null,G__14586));
}catch (e14584){if((e14584 instanceof Error)){
var e1 = e14584;
try{var temp__5733__auto__ = error_handler;
if(cljs.core.truth_(temp__5733__auto__)){
var eh = temp__5733__auto__;
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(e1,event_msg) : error_handler.call(null,e1,event_msg));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",1581,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (temp__5733__auto__,e1,vec__14522,v,p,stop_QMARK_,map__14537,event_msg,event,inst_14529,inst_14531,inst_14530,inst_14534,inst_14558,inst_14559,state_val_14569,c__7914__auto___15222,map__14519,map__14519__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
});})(temp__5733__auto__,e1,vec__14522,v,p,stop_QMARK_,map__14537,event_msg,event,inst_14529,inst_14531,inst_14530,inst_14534,inst_14558,inst_14559,state_val_14569,c__7914__auto___15222,map__14519,map__14519__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,161032657);
}
}catch (e14585){if((e14585 instanceof Error)){
var e2 = e14585;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/private/var/folders/my/wmh5r77s1b5cxvzg1g2_g02h0000gn/T/form-init11425725752647134390.clj",1582,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e2,e1,vec__14522,v,p,stop_QMARK_,map__14537,event_msg,event,inst_14529,inst_14531,inst_14530,inst_14534,inst_14558,inst_14559,state_val_14569,c__7914__auto___15222,map__14519,map__14519__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
});})(e2,e1,vec__14522,v,p,stop_QMARK_,map__14537,event_msg,event,inst_14529,inst_14531,inst_14530,inst_14534,inst_14558,inst_14559,state_val_14569,c__7914__auto___15222,map__14519,map__14519__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
,null)),null,-1948863291);
} else {
throw e14585;

}
}} else {
throw e14584;

}
}});
;})(vec__14522,v,p,stop_QMARK_,map__14537,event_msg,event,inst_14529,inst_14531,inst_14530,inst_14534,inst_14558,inst_14559,state_val_14569,c__7914__auto___15222,map__14519,map__14519__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var inst_14561 = execute1(inst_14560);
var state_14568__$1 = (function (){var statearr_14589 = state_14568;
(statearr_14589[(11)] = inst_14561);

return statearr_14589;
})();
var statearr_14590_15236 = state_14568__$1;
(statearr_14590_15236[(2)] = null);

(statearr_14590_15236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (10))){
var inst_14553 = (state_14568[(2)]);
var state_14568__$1 = state_14568;
if(cljs.core.truth_(inst_14553)){
var statearr_14591_15237 = state_14568__$1;
(statearr_14591_15237[(1)] = (14));

} else {
var statearr_14592_15238 = state_14568__$1;
(statearr_14592_15238[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14569 === (8))){
var inst_14530 = (state_14568[(9)]);
var inst_14542 = inst_14530.cljs$lang$protocol_mask$partition0$;
var inst_14543 = (inst_14542 & (64));
var inst_14544 = inst_14530.cljs$core$ISeq$;
var inst_14545 = (cljs.core.PROTOCOL_SENTINEL === inst_14544);
var inst_14546 = ((inst_14543) || (inst_14545));
var state_14568__$1 = state_14568;
if(cljs.core.truth_(inst_14546)){
var statearr_14593_15239 = state_14568__$1;
(statearr_14593_15239[(1)] = (11));

} else {
var statearr_14594_15240 = state_14568__$1;
(statearr_14594_15240[(1)] = (12));

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
});})(c__7914__auto___15222,map__14519,map__14519__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
;
return ((function (switch__7528__auto__,c__7914__auto___15222,map__14519,map__14519__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__7529__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__7529__auto____0 = (function (){
var statearr_14595 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14595[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__7529__auto__);

(statearr_14595[(1)] = (1));

return statearr_14595;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__7529__auto____1 = (function (state_14568){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_14568);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e14596){if((e14596 instanceof Object)){
var ex__7532__auto__ = e14596;
var statearr_14597_15241 = state_14568;
(statearr_14597_15241[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14596;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15242 = state_14568;
state_14568 = G__15242;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__7529__auto__ = function(state_14568){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__7529__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__7529__auto____1.call(this,state_14568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__7529__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__7529__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto___15222,map__14519,map__14519__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
})();
var state__7916__auto__ = (function (){var statearr_14598 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_14598[(6)] = c__7914__auto___15222);

return statearr_14598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto___15222,map__14519,map__14519__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
);


return ((function (map__14519,map__14519__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1){
return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_(ch_ctrl);
});
;})(map__14519,map__14519__$1,trace_evs_QMARK_,error_handler,simple_auto_threading_QMARK_,ch_ctrl,execute1))
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
var len__4730__auto___15243 = arguments.length;
var i__4731__auto___15244 = (0);
while(true){
if((i__4731__auto___15244 < len__4730__auto___15243)){
args__4736__auto__.push((arguments[i__4731__auto___15244]));

var G__15245 = (i__4731__auto___15244 + (1));
i__4731__auto___15244 = G__15245;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__14602){
var vec__14603 = p__14602;
var map__14606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14603,(0),null);
var map__14606__$1 = (((((!((map__14606 == null))))?(((((map__14606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14606):map__14606);
var opts = map__14606__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14606__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14606__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14606__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_(new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq14599){
var G__14600 = cljs.core.first(seq14599);
var seq14599__$1 = cljs.core.next(seq14599);
var G__14601 = cljs.core.first(seq14599__$1);
var seq14599__$2 = cljs.core.next(seq14599__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14600,G__14601,seq14599__$2);
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
var len__4730__auto___15246 = arguments.length;
var i__4731__auto___15247 = (0);
while(true){
if((i__4731__auto___15247 < len__4730__auto___15246)){
args__4736__auto__.push((arguments[i__4731__auto___15247]));

var G__15248 = (i__4731__auto___15247 + (1));
i__4731__auto___15247 = G__15248;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__14611){
var vec__14612 = p__14611;
var map__14615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14612,(0),null);
var map__14615__$1 = (((((!((map__14615 == null))))?(((((map__14615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14615):map__14615);
var opts = map__14615__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14615__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14615__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
});

taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq14608){
var G__14609 = cljs.core.first(seq14608);
var seq14608__$1 = cljs.core.next(seq14608);
var G__14610 = cljs.core.first(seq14608__$1);
var seq14608__$2 = cljs.core.next(seq14608__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14609,G__14610,seq14608__$2);
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
var G__14617 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__14618 = new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__14617,G__14618) : event_handler.call(null,G__14617,G__14618));
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
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__14619,websocket_QMARK_){
var map__14620 = p__14619;
var map__14620__$1 = (((((!((map__14620 == null))))?(((((map__14620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14620):map__14620);
var location = map__14620__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14620__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14620__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14620__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
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
