goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__4402){
var map__4403 = p__4402;
var map__4403__$1 = (((((!((map__4403 == null))))?(((((map__4403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4403):map__4403);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4403__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4403__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4403__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4403__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__4416_4499 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__4417_4500 = null;
var count__4418_4501 = (0);
var i__4419_4502 = (0);
while(true){
if((i__4419_4502 < count__4418_4501)){
var vec__4438_4503 = chunk__4417_4500.cljs$core$IIndexed$_nth$arity$2(null,i__4419_4502);
var k_4504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4438_4503,(0),null);
var cb_4505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4438_4503,(1),null);
try{var G__4442_4507 = cljs.core.deref(re_frame.trace.traces);
(cb_4505.cljs$core$IFn$_invoke$arity$1 ? cb_4505.cljs$core$IFn$_invoke$arity$1(G__4442_4507) : cb_4505.call(null,G__4442_4507));
}catch (e4441){var e_4508 = e4441;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_4504,"while storing",cljs.core.deref(re_frame.trace.traces),e_4508], 0));
}

var G__4510 = seq__4416_4499;
var G__4511 = chunk__4417_4500;
var G__4512 = count__4418_4501;
var G__4513 = (i__4419_4502 + (1));
seq__4416_4499 = G__4510;
chunk__4417_4500 = G__4511;
count__4418_4501 = G__4512;
i__4419_4502 = G__4513;
continue;
} else {
var temp__5735__auto___4514 = cljs.core.seq(seq__4416_4499);
if(temp__5735__auto___4514){
var seq__4416_4515__$1 = temp__5735__auto___4514;
if(cljs.core.chunked_seq_QMARK_(seq__4416_4515__$1)){
var c__4550__auto___4517 = cljs.core.chunk_first(seq__4416_4515__$1);
var G__4518 = cljs.core.chunk_rest(seq__4416_4515__$1);
var G__4519 = c__4550__auto___4517;
var G__4520 = cljs.core.count(c__4550__auto___4517);
var G__4521 = (0);
seq__4416_4499 = G__4518;
chunk__4417_4500 = G__4519;
count__4418_4501 = G__4520;
i__4419_4502 = G__4521;
continue;
} else {
var vec__4447_4522 = cljs.core.first(seq__4416_4515__$1);
var k_4523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4447_4522,(0),null);
var cb_4524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4447_4522,(1),null);
try{var G__4451_4528 = cljs.core.deref(re_frame.trace.traces);
(cb_4524.cljs$core$IFn$_invoke$arity$1 ? cb_4524.cljs$core$IFn$_invoke$arity$1(G__4451_4528) : cb_4524.call(null,G__4451_4528));
}catch (e4450){var e_4529 = e4450;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_4523,"while storing",cljs.core.deref(re_frame.trace.traces),e_4529], 0));
}

var G__4533 = cljs.core.next(seq__4416_4515__$1);
var G__4534 = null;
var G__4535 = (0);
var G__4536 = (0);
seq__4416_4499 = G__4533;
chunk__4417_4500 = G__4534;
count__4418_4501 = G__4535;
i__4419_4502 = G__4536;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
