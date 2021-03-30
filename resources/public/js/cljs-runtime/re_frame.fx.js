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
var _STAR_current_trace_STAR__orig_val__5062 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__5063 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__5063;

try{try{var seq__5068 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__5069 = null;
var count__5070 = (0);
var i__5071 = (0);
while(true){
if((i__5071 < count__5070)){
var vec__5087 = chunk__5069.cljs$core$IIndexed$_nth$arity$2(null,i__5071);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5087,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5087,(1),null);
var temp__5733__auto___5203 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___5203)){
var effect_fn_5204 = temp__5733__auto___5203;
(effect_fn_5204.cljs$core$IFn$_invoke$arity$1 ? effect_fn_5204.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_5204.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__5206 = seq__5068;
var G__5207 = chunk__5069;
var G__5208 = count__5070;
var G__5209 = (i__5071 + (1));
seq__5068 = G__5206;
chunk__5069 = G__5207;
count__5070 = G__5208;
i__5071 = G__5209;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__5068);
if(temp__5735__auto__){
var seq__5068__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5068__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5068__$1);
var G__5211 = cljs.core.chunk_rest(seq__5068__$1);
var G__5212 = c__4550__auto__;
var G__5213 = cljs.core.count(c__4550__auto__);
var G__5214 = (0);
seq__5068 = G__5211;
chunk__5069 = G__5212;
count__5070 = G__5213;
i__5071 = G__5214;
continue;
} else {
var vec__5093 = cljs.core.first(seq__5068__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5093,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5093,(1),null);
var temp__5733__auto___5215 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___5215)){
var effect_fn_5218 = temp__5733__auto___5215;
(effect_fn_5218.cljs$core$IFn$_invoke$arity$1 ? effect_fn_5218.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_5218.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__5219 = cljs.core.next(seq__5068__$1);
var G__5220 = null;
var G__5221 = (0);
var G__5222 = (0);
seq__5068 = G__5219;
chunk__5069 = G__5220;
count__5070 = G__5221;
i__5071 = G__5222;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__4334__auto___5223 = re_frame.interop.now();
var duration__4335__auto___5224 = (end__4334__auto___5223 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__4335__auto___5224,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__4334__auto___5223);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__5062;
}} else {
var seq__5096 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__5097 = null;
var count__5098 = (0);
var i__5099 = (0);
while(true){
if((i__5099 < count__5098)){
var vec__5116 = chunk__5097.cljs$core$IIndexed$_nth$arity$2(null,i__5099);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5116,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5116,(1),null);
var temp__5733__auto___5227 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___5227)){
var effect_fn_5233 = temp__5733__auto___5227;
(effect_fn_5233.cljs$core$IFn$_invoke$arity$1 ? effect_fn_5233.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_5233.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__5235 = seq__5096;
var G__5236 = chunk__5097;
var G__5237 = count__5098;
var G__5238 = (i__5099 + (1));
seq__5096 = G__5235;
chunk__5097 = G__5236;
count__5098 = G__5237;
i__5099 = G__5238;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__5096);
if(temp__5735__auto__){
var seq__5096__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5096__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5096__$1);
var G__5239 = cljs.core.chunk_rest(seq__5096__$1);
var G__5240 = c__4550__auto__;
var G__5241 = cljs.core.count(c__4550__auto__);
var G__5242 = (0);
seq__5096 = G__5239;
chunk__5097 = G__5240;
count__5098 = G__5241;
i__5099 = G__5242;
continue;
} else {
var vec__5120 = cljs.core.first(seq__5096__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5120,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5120,(1),null);
var temp__5733__auto___5243 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___5243)){
var effect_fn_5244 = temp__5733__auto___5243;
(effect_fn_5244.cljs$core$IFn$_invoke$arity$1 ? effect_fn_5244.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_5244.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__5245 = cljs.core.next(seq__5096__$1);
var G__5246 = null;
var G__5247 = (0);
var G__5248 = (0);
seq__5096 = G__5245;
chunk__5097 = G__5246;
count__5098 = G__5247;
i__5099 = G__5248;
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
var seq__5126 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__5127 = null;
var count__5128 = (0);
var i__5129 = (0);
while(true){
if((i__5129 < count__5128)){
var map__5146 = chunk__5127.cljs$core$IIndexed$_nth$arity$2(null,i__5129);
var map__5146__$1 = (((((!((map__5146 == null))))?(((((map__5146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5146):map__5146);
var effect = map__5146__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5146__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5146__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__5126,chunk__5127,count__5128,i__5129,map__5146,map__5146__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__5126,chunk__5127,count__5128,i__5129,map__5146,map__5146__$1,effect,ms,dispatch))
,ms);
}


var G__5258 = seq__5126;
var G__5259 = chunk__5127;
var G__5260 = count__5128;
var G__5261 = (i__5129 + (1));
seq__5126 = G__5258;
chunk__5127 = G__5259;
count__5128 = G__5260;
i__5129 = G__5261;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__5126);
if(temp__5735__auto__){
var seq__5126__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5126__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5126__$1);
var G__5262 = cljs.core.chunk_rest(seq__5126__$1);
var G__5263 = c__4550__auto__;
var G__5264 = cljs.core.count(c__4550__auto__);
var G__5265 = (0);
seq__5126 = G__5262;
chunk__5127 = G__5263;
count__5128 = G__5264;
i__5129 = G__5265;
continue;
} else {
var map__5149 = cljs.core.first(seq__5126__$1);
var map__5149__$1 = (((((!((map__5149 == null))))?(((((map__5149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5149):map__5149);
var effect = map__5149__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5149__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5149__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__5126,chunk__5127,count__5128,i__5129,map__5149,map__5149__$1,effect,ms,dispatch,seq__5126__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__5126,chunk__5127,count__5128,i__5129,map__5149,map__5149__$1,effect,ms,dispatch,seq__5126__$1,temp__5735__auto__))
,ms);
}


var G__5290 = cljs.core.next(seq__5126__$1);
var G__5291 = null;
var G__5292 = (0);
var G__5293 = (0);
seq__5126 = G__5290;
chunk__5127 = G__5291;
count__5128 = G__5292;
i__5129 = G__5293;
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
var seq__5158 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__5159 = null;
var count__5160 = (0);
var i__5161 = (0);
while(true){
if((i__5161 < count__5160)){
var event = chunk__5159.cljs$core$IIndexed$_nth$arity$2(null,i__5161);
re_frame.router.dispatch(event);


var G__5302 = seq__5158;
var G__5303 = chunk__5159;
var G__5304 = count__5160;
var G__5305 = (i__5161 + (1));
seq__5158 = G__5302;
chunk__5159 = G__5303;
count__5160 = G__5304;
i__5161 = G__5305;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__5158);
if(temp__5735__auto__){
var seq__5158__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5158__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5158__$1);
var G__5306 = cljs.core.chunk_rest(seq__5158__$1);
var G__5307 = c__4550__auto__;
var G__5308 = cljs.core.count(c__4550__auto__);
var G__5309 = (0);
seq__5158 = G__5306;
chunk__5159 = G__5307;
count__5160 = G__5308;
i__5161 = G__5309;
continue;
} else {
var event = cljs.core.first(seq__5158__$1);
re_frame.router.dispatch(event);


var G__5310 = cljs.core.next(seq__5158__$1);
var G__5311 = null;
var G__5312 = (0);
var G__5313 = (0);
seq__5158 = G__5310;
chunk__5159 = G__5311;
count__5160 = G__5312;
i__5161 = G__5313;
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
var seq__5166 = cljs.core.seq(value);
var chunk__5167 = null;
var count__5168 = (0);
var i__5169 = (0);
while(true){
if((i__5169 < count__5168)){
var event = chunk__5167.cljs$core$IIndexed$_nth$arity$2(null,i__5169);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__5322 = seq__5166;
var G__5323 = chunk__5167;
var G__5324 = count__5168;
var G__5325 = (i__5169 + (1));
seq__5166 = G__5322;
chunk__5167 = G__5323;
count__5168 = G__5324;
i__5169 = G__5325;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__5166);
if(temp__5735__auto__){
var seq__5166__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5166__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__5166__$1);
var G__5330 = cljs.core.chunk_rest(seq__5166__$1);
var G__5331 = c__4550__auto__;
var G__5332 = cljs.core.count(c__4550__auto__);
var G__5333 = (0);
seq__5166 = G__5330;
chunk__5167 = G__5331;
count__5168 = G__5332;
i__5169 = G__5333;
continue;
} else {
var event = cljs.core.first(seq__5166__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__5338 = cljs.core.next(seq__5166__$1);
var G__5339 = null;
var G__5340 = (0);
var G__5341 = (0);
seq__5166 = G__5338;
chunk__5167 = G__5339;
count__5168 = G__5340;
i__5169 = G__5341;
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
