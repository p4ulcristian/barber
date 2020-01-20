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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__67018){
var map__67019 = p__67018;
var map__67019__$1 = (((((!((map__67019 == null))))?(((((map__67019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67019):map__67019);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67019__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67019__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67019__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67019__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__67021_67048 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__67022_67049 = null;
var count__67023_67050 = (0);
var i__67024_67051 = (0);
while(true){
if((i__67024_67051 < count__67023_67050)){
var vec__67035_67052 = chunk__67022_67049.cljs$core$IIndexed$_nth$arity$2(null,i__67024_67051);
var k_67053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67035_67052,(0),null);
var cb_67054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67035_67052,(1),null);
try{var G__67039_67055 = cljs.core.deref(re_frame.trace.traces);
(cb_67054.cljs$core$IFn$_invoke$arity$1 ? cb_67054.cljs$core$IFn$_invoke$arity$1(G__67039_67055) : cb_67054.call(null,G__67039_67055));
}catch (e67038){var e_67056 = e67038;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_67053,"while storing",cljs.core.deref(re_frame.trace.traces),e_67056], 0));
}

var G__67057 = seq__67021_67048;
var G__67058 = chunk__67022_67049;
var G__67059 = count__67023_67050;
var G__67060 = (i__67024_67051 + (1));
seq__67021_67048 = G__67057;
chunk__67022_67049 = G__67058;
count__67023_67050 = G__67059;
i__67024_67051 = G__67060;
continue;
} else {
var temp__5735__auto___67061 = cljs.core.seq(seq__67021_67048);
if(temp__5735__auto___67061){
var seq__67021_67062__$1 = temp__5735__auto___67061;
if(cljs.core.chunked_seq_QMARK_(seq__67021_67062__$1)){
var c__4550__auto___67063 = cljs.core.chunk_first(seq__67021_67062__$1);
var G__67064 = cljs.core.chunk_rest(seq__67021_67062__$1);
var G__67065 = c__4550__auto___67063;
var G__67066 = cljs.core.count(c__4550__auto___67063);
var G__67067 = (0);
seq__67021_67048 = G__67064;
chunk__67022_67049 = G__67065;
count__67023_67050 = G__67066;
i__67024_67051 = G__67067;
continue;
} else {
var vec__67040_67068 = cljs.core.first(seq__67021_67062__$1);
var k_67069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67040_67068,(0),null);
var cb_67070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67040_67068,(1),null);
try{var G__67044_67071 = cljs.core.deref(re_frame.trace.traces);
(cb_67070.cljs$core$IFn$_invoke$arity$1 ? cb_67070.cljs$core$IFn$_invoke$arity$1(G__67044_67071) : cb_67070.call(null,G__67044_67071));
}catch (e67043){var e_67072 = e67043;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_67069,"while storing",cljs.core.deref(re_frame.trace.traces),e_67072], 0));
}

var G__67073 = cljs.core.next(seq__67021_67062__$1);
var G__67074 = null;
var G__67075 = (0);
var G__67076 = (0);
seq__67021_67048 = G__67073;
chunk__67022_67049 = G__67074;
count__67023_67050 = G__67075;
i__67024_67051 = G__67076;
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
