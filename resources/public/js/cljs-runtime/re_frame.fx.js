goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__67248 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__67249 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__67249;

try{try{var seq__67250 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__67251 = null;
var count__67252 = (0);
var i__67253 = (0);
while(true){
if((i__67253 < count__67252)){
var vec__67264 = chunk__67251.cljs$core$IIndexed$_nth$arity$2(null,i__67253);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67264,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67264,(1),null);
var temp__5733__auto___67330 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___67330)){
var effect_fn_67331 = temp__5733__auto___67330;
(effect_fn_67331.cljs$core$IFn$_invoke$arity$1 ? effect_fn_67331.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_67331.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__67332 = seq__67250;
var G__67333 = chunk__67251;
var G__67334 = count__67252;
var G__67335 = (i__67253 + (1));
seq__67250 = G__67332;
chunk__67251 = G__67333;
count__67252 = G__67334;
i__67253 = G__67335;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67250);
if(temp__5735__auto__){
var seq__67250__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67250__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__67250__$1);
var G__67336 = cljs.core.chunk_rest(seq__67250__$1);
var G__67337 = c__4550__auto__;
var G__67338 = cljs.core.count(c__4550__auto__);
var G__67339 = (0);
seq__67250 = G__67336;
chunk__67251 = G__67337;
count__67252 = G__67338;
i__67253 = G__67339;
continue;
} else {
var vec__67267 = cljs.core.first(seq__67250__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67267,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67267,(1),null);
var temp__5733__auto___67340 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___67340)){
var effect_fn_67341 = temp__5733__auto___67340;
(effect_fn_67341.cljs$core$IFn$_invoke$arity$1 ? effect_fn_67341.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_67341.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__67342 = cljs.core.next(seq__67250__$1);
var G__67343 = null;
var G__67344 = (0);
var G__67345 = (0);
seq__67250 = G__67342;
chunk__67251 = G__67343;
count__67252 = G__67344;
i__67253 = G__67345;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__66998__auto___67346 = re_frame.interop.now();
var duration__66999__auto___67347 = (end__66998__auto___67346 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__66999__auto___67347,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__66998__auto___67346);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__67248;
}} else {
var seq__67272 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__67273 = null;
var count__67274 = (0);
var i__67275 = (0);
while(true){
if((i__67275 < count__67274)){
var vec__67284 = chunk__67273.cljs$core$IIndexed$_nth$arity$2(null,i__67275);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67284,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67284,(1),null);
var temp__5733__auto___67351 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___67351)){
var effect_fn_67352 = temp__5733__auto___67351;
(effect_fn_67352.cljs$core$IFn$_invoke$arity$1 ? effect_fn_67352.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_67352.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__67354 = seq__67272;
var G__67355 = chunk__67273;
var G__67356 = count__67274;
var G__67357 = (i__67275 + (1));
seq__67272 = G__67354;
chunk__67273 = G__67355;
count__67274 = G__67356;
i__67275 = G__67357;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67272);
if(temp__5735__auto__){
var seq__67272__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67272__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__67272__$1);
var G__67358 = cljs.core.chunk_rest(seq__67272__$1);
var G__67359 = c__4550__auto__;
var G__67360 = cljs.core.count(c__4550__auto__);
var G__67361 = (0);
seq__67272 = G__67358;
chunk__67273 = G__67359;
count__67274 = G__67360;
i__67275 = G__67361;
continue;
} else {
var vec__67288 = cljs.core.first(seq__67272__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67288,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67288,(1),null);
var temp__5733__auto___67362 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___67362)){
var effect_fn_67363 = temp__5733__auto___67362;
(effect_fn_67363.cljs$core$IFn$_invoke$arity$1 ? effect_fn_67363.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_67363.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__67364 = cljs.core.next(seq__67272__$1);
var G__67365 = null;
var G__67366 = (0);
var G__67367 = (0);
seq__67272 = G__67364;
chunk__67273 = G__67365;
count__67274 = G__67366;
i__67275 = G__67367;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__67293 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__67294 = null;
var count__67295 = (0);
var i__67296 = (0);
while(true){
if((i__67296 < count__67295)){
var map__67302 = chunk__67294.cljs$core$IIndexed$_nth$arity$2(null,i__67296);
var map__67302__$1 = (((((!((map__67302 == null))))?(((((map__67302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67302):map__67302);
var effect = map__67302__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67302__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67302__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__67293,chunk__67294,count__67295,i__67296,map__67302,map__67302__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__67293,chunk__67294,count__67295,i__67296,map__67302,map__67302__$1,effect,ms,dispatch))
,ms);
}


var G__67374 = seq__67293;
var G__67375 = chunk__67294;
var G__67376 = count__67295;
var G__67377 = (i__67296 + (1));
seq__67293 = G__67374;
chunk__67294 = G__67375;
count__67295 = G__67376;
i__67296 = G__67377;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67293);
if(temp__5735__auto__){
var seq__67293__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67293__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__67293__$1);
var G__67378 = cljs.core.chunk_rest(seq__67293__$1);
var G__67379 = c__4550__auto__;
var G__67380 = cljs.core.count(c__4550__auto__);
var G__67381 = (0);
seq__67293 = G__67378;
chunk__67294 = G__67379;
count__67295 = G__67380;
i__67296 = G__67381;
continue;
} else {
var map__67309 = cljs.core.first(seq__67293__$1);
var map__67309__$1 = (((((!((map__67309 == null))))?(((((map__67309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67309):map__67309);
var effect = map__67309__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67309__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67309__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__67293,chunk__67294,count__67295,i__67296,map__67309,map__67309__$1,effect,ms,dispatch,seq__67293__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__67293,chunk__67294,count__67295,i__67296,map__67309,map__67309__$1,effect,ms,dispatch,seq__67293__$1,temp__5735__auto__))
,ms);
}


var G__67385 = cljs.core.next(seq__67293__$1);
var G__67386 = null;
var G__67387 = (0);
var G__67388 = (0);
seq__67293 = G__67385;
chunk__67294 = G__67386;
count__67295 = G__67387;
i__67296 = G__67388;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__67311 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__67312 = null;
var count__67313 = (0);
var i__67314 = (0);
while(true){
if((i__67314 < count__67313)){
var event = chunk__67312.cljs$core$IIndexed$_nth$arity$2(null,i__67314);
re_frame.router.dispatch(event);


var G__67389 = seq__67311;
var G__67390 = chunk__67312;
var G__67391 = count__67313;
var G__67392 = (i__67314 + (1));
seq__67311 = G__67389;
chunk__67312 = G__67390;
count__67313 = G__67391;
i__67314 = G__67392;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67311);
if(temp__5735__auto__){
var seq__67311__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67311__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__67311__$1);
var G__67393 = cljs.core.chunk_rest(seq__67311__$1);
var G__67394 = c__4550__auto__;
var G__67395 = cljs.core.count(c__4550__auto__);
var G__67396 = (0);
seq__67311 = G__67393;
chunk__67312 = G__67394;
count__67313 = G__67395;
i__67314 = G__67396;
continue;
} else {
var event = cljs.core.first(seq__67311__$1);
re_frame.router.dispatch(event);


var G__67397 = cljs.core.next(seq__67311__$1);
var G__67398 = null;
var G__67399 = (0);
var G__67400 = (0);
seq__67311 = G__67397;
chunk__67312 = G__67398;
count__67313 = G__67399;
i__67314 = G__67400;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__67322 = cljs.core.seq(value);
var chunk__67323 = null;
var count__67324 = (0);
var i__67325 = (0);
while(true){
if((i__67325 < count__67324)){
var event = chunk__67323.cljs$core$IIndexed$_nth$arity$2(null,i__67325);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__67401 = seq__67322;
var G__67402 = chunk__67323;
var G__67403 = count__67324;
var G__67404 = (i__67325 + (1));
seq__67322 = G__67401;
chunk__67323 = G__67402;
count__67324 = G__67403;
i__67325 = G__67404;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67322);
if(temp__5735__auto__){
var seq__67322__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67322__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__67322__$1);
var G__67405 = cljs.core.chunk_rest(seq__67322__$1);
var G__67406 = c__4550__auto__;
var G__67407 = cljs.core.count(c__4550__auto__);
var G__67408 = (0);
seq__67322 = G__67405;
chunk__67323 = G__67406;
count__67324 = G__67407;
i__67325 = G__67408;
continue;
} else {
var event = cljs.core.first(seq__67322__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__67409 = cljs.core.next(seq__67322__$1);
var G__67410 = null;
var G__67411 = (0);
var G__67412 = (0);
seq__67322 = G__67409;
chunk__67323 = G__67410;
count__67324 = G__67411;
i__67325 = G__67412;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
