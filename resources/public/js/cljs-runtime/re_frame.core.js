goog.provide('re_frame.core');
goog.require('cljs.core');
goog.require('re_frame.events');
goog.require('re_frame.subs');
goog.require('re_frame.interop');
goog.require('re_frame.db');
goog.require('re_frame.fx');
goog.require('re_frame.cofx');
goog.require('re_frame.router');
goog.require('re_frame.loggers');
goog.require('re_frame.registrar');
goog.require('re_frame.interceptor');
goog.require('re_frame.std_interceptors');
goog.require('clojure.set');
re_frame.core.dispatch = re_frame.router.dispatch;
re_frame.core.dispatch_sync = re_frame.router.dispatch_sync;
re_frame.core.reg_sub = re_frame.subs.reg_sub;
re_frame.core.subscribe = re_frame.subs.subscribe;
re_frame.core.clear_sub = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.subs.kind);
re_frame.core.clear_subscription_cache_BANG_ = re_frame.subs.clear_subscription_cache_BANG_;
/**
 * This is a low level, advanced function.  You should probably be
 *   using reg-sub instead.
 *   Docs in https://github.com/Day8/re-frame/blob/master/docs/SubscriptionFlow.md
 */
re_frame.core.reg_sub_raw = (function re_frame$core$reg_sub_raw(query_id,handler_fn){
return re_frame.registrar.register_handler(re_frame.subs.kind,query_id,handler_fn);
});
re_frame.core.reg_fx = re_frame.fx.reg_fx;
re_frame.core.clear_fx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.fx.kind);
re_frame.core.reg_cofx = re_frame.cofx.reg_cofx;
re_frame.core.inject_cofx = re_frame.cofx.inject_cofx;
re_frame.core.clear_cofx = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.cofx.kind);
/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (db event) -> db
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of this
 * chain.
 */
re_frame.core.reg_event_db = (function re_frame$core$reg_event_db(var_args){
var G__5255 = arguments.length;
switch (G__5255) {
case 2:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(id,null,handler);
});

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.db_handler__GT_interceptor(handler)], null));
});

re_frame.core.reg_event_db.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (coeffects-map event-vector) -> effects-map
 *   `interceptors` is a collection of interceptors. Will be flattened and nils removed.
 *   `handler` is wrapped in its own interceptor and added to the end of the interceptor
 * chain, so that, in the end, only a chain is registered.
 * Special effects and coeffects interceptors are added to the front of the
 * interceptor chain.  These interceptors inject the value of app-db into coeffects,
 * and, later, action effects.
 */
re_frame.core.reg_event_fx = (function re_frame$core$reg_event_fx(var_args){
var G__5267 = arguments.length;
switch (G__5267) {
case 2:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
});

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.fx_handler__GT_interceptor(handler)], null));
});

re_frame.core.reg_event_fx.cljs$lang$maxFixedArity = 3;

/**
 * Register the given event `handler` (function) for the given `id`. Optionally, provide
 *   an `interceptors` chain.
 *   `id` is typically a namespaced keyword  (but can be anything)
 *   `handler` is a function: (context-map event-vector) -> context-map
 * 
 *   This form of registration is almost never used. 
 */
re_frame.core.reg_event_ctx = (function re_frame$core$reg_event_ctx(var_args){
var G__5285 = arguments.length;
switch (G__5285) {
case 2:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
});

re_frame.core.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,interceptors,re_frame.std_interceptors.ctx_handler__GT_interceptor(handler)], null));
});

re_frame.core.reg_event_ctx.cljs$lang$maxFixedArity = 3;

re_frame.core.clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
re_frame.core.debug = re_frame.std_interceptors.debug;
re_frame.core.path = re_frame.std_interceptors.path;
re_frame.core.enrich = re_frame.std_interceptors.enrich;
re_frame.core.trim_v = re_frame.std_interceptors.trim_v;
re_frame.core.after = re_frame.std_interceptors.after;
re_frame.core.on_changes = re_frame.std_interceptors.on_changes;
re_frame.core.__GT_interceptor = re_frame.interceptor.__GT_interceptor;
re_frame.core.get_coeffect = re_frame.interceptor.get_coeffect;
re_frame.core.assoc_coeffect = re_frame.interceptor.assoc_coeffect;
re_frame.core.get_effect = re_frame.interceptor.get_effect;
re_frame.core.assoc_effect = re_frame.interceptor.assoc_effect;
re_frame.core.enqueue = re_frame.interceptor.enqueue;
re_frame.core.set_loggers_BANG_ = re_frame.loggers.set_loggers_BANG_;
re_frame.core.console = re_frame.loggers.console;
/**
 * Checkpoints the state of re-frame and returns a function which, when
 *   later called, will restore re-frame to that checkpointed state.
 * 
 *   Checkpoint includes app-db, all registered handlers and all subscriptions.
 *   
 */
re_frame.core.make_restore_fn = (function re_frame$core$make_restore_fn(){
var handlers = cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref(re_frame.db.app_db);
var subs_cache = cljs.core.deref(re_frame.subs.query__GT_reaction);
return ((function (handlers,app_db,subs_cache){
return (function (){
var original_subs_5394 = cljs.core.set(cljs.core.vals(subs_cache));
var current_subs_5395 = cljs.core.set(cljs.core.vals(cljs.core.deref(re_frame.subs.query__GT_reaction)));
var seq__5334_5399 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(current_subs_5395,original_subs_5394));
var chunk__5335_5400 = null;
var count__5336_5401 = (0);
var i__5337_5402 = (0);
while(true){
if((i__5337_5402 < count__5336_5401)){
var sub_5404 = chunk__5335_5400.cljs$core$IIndexed$_nth$arity$2(null,i__5337_5402);
re_frame.interop.dispose_BANG_(sub_5404);


var G__5406 = seq__5334_5399;
var G__5407 = chunk__5335_5400;
var G__5408 = count__5336_5401;
var G__5409 = (i__5337_5402 + (1));
seq__5334_5399 = G__5406;
chunk__5335_5400 = G__5407;
count__5336_5401 = G__5408;
i__5337_5402 = G__5409;
continue;
} else {
var temp__5735__auto___5410 = cljs.core.seq(seq__5334_5399);
if(temp__5735__auto___5410){
var seq__5334_5412__$1 = temp__5735__auto___5410;
if(cljs.core.chunked_seq_QMARK_(seq__5334_5412__$1)){
var c__4550__auto___5413 = cljs.core.chunk_first(seq__5334_5412__$1);
var G__5414 = cljs.core.chunk_rest(seq__5334_5412__$1);
var G__5415 = c__4550__auto___5413;
var G__5416 = cljs.core.count(c__4550__auto___5413);
var G__5417 = (0);
seq__5334_5399 = G__5414;
chunk__5335_5400 = G__5415;
count__5336_5401 = G__5416;
i__5337_5402 = G__5417;
continue;
} else {
var sub_5418 = cljs.core.first(seq__5334_5412__$1);
re_frame.interop.dispose_BANG_(sub_5418);


var G__5419 = cljs.core.next(seq__5334_5412__$1);
var G__5420 = null;
var G__5421 = (0);
var G__5422 = (0);
seq__5334_5399 = G__5419;
chunk__5335_5400 = G__5420;
count__5336_5401 = G__5421;
i__5337_5402 = G__5422;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_(re_frame.db.app_db,app_db);

return null;
});
;})(handlers,app_db,subs_cache))
});
/**
 * Remove all events queued for processing
 */
re_frame.core.purge_event_queue = (function re_frame$core$purge_event_queue(){
return re_frame.router.event_queue.re_frame$router$IEventQueue$purge$arity$1(null);
});
/**
 * Registers a function `f` to be called after each event is processed
 * `f` will be called with two arguments:
 *  - `event`: a vector. The event just processed.
 *  - `queue`: a PersistentQueue, possibly empty, of events yet to be processed.
 * 
 * This is useful in advanced cases like:
 *   - you are implementing a complex bootstrap pipeline
 *   - you want to create your own handling infrastructure, with perhaps multiple
 *     handlers for the one event, etc.  Hook in here.
 *   - libraries providing 'isomorphic javascript' rendering on  Nodejs or Nashorn.
 * 
 *   'id' is typically a keyword. Supplied at "add time" so it can subsequently
 *   be used at "remove time" to get rid of the right callback.
 *   
 */
re_frame.core.add_post_event_callback = (function re_frame$core$add_post_event_callback(var_args){
var G__5351 = arguments.length;
switch (G__5351) {
case 1:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2(f,f);
});

re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return re_frame.router.event_queue.re_frame$router$IEventQueue$add_post_event_callback$arity$3(null,id,f);
});

re_frame.core.add_post_event_callback.cljs$lang$maxFixedArity = 2;

re_frame.core.remove_post_event_callback = (function re_frame$core$remove_post_event_callback(id){
return re_frame.router.event_queue.re_frame$router$IEventQueue$remove_post_event_callback$arity$2(null,id);
});
re_frame.core.register_handler = (function re_frame$core$register_handler(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5426 = arguments.length;
var i__4731__auto___5427 = (0);
while(true){
if((i__4731__auto___5427 < len__4730__auto___5426)){
args__4736__auto__.push((arguments[i__4731__auto___5427]));

var G__5430 = (i__4731__auto___5427 + (1));
i__4731__auto___5427 = G__5430;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__5361_5431 = new cljs.core.Keyword(null,"warn","warn",-436710552);
var G__5362_5432 = "re-frame:  \"register-handler\" has been renamed \"reg-event-db\" (look for registration of";
var G__5363_5433 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
var G__5364_5434 = ")";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__5361_5431,G__5362_5432,G__5363_5433,G__5364_5434) : re_frame.core.console.call(null,G__5361_5431,G__5362_5432,G__5363_5433,G__5364_5434));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.core.reg_event_db,args);
});

re_frame.core.register_handler.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_frame.core.register_handler.cljs$lang$applyTo = (function (seq5358){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5358));
});

re_frame.core.register_sub = (function re_frame$core$register_sub(var_args){
var args__4736__auto__ = [];
var len__4730__auto___5435 = arguments.length;
var i__4731__auto___5436 = (0);
while(true){
if((i__4731__auto___5436 < len__4730__auto___5435)){
args__4736__auto__.push((arguments[i__4731__auto___5436]));

var G__5437 = (i__4731__auto___5436 + (1));
i__4731__auto___5436 = G__5437;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var G__5373_5438 = new cljs.core.Keyword(null,"warn","warn",-436710552);
var G__5374_5439 = "re-frame:  \"register-sub\" is deprecated. Use \"reg-sub-raw\" (look for registration of";
var G__5375_5440 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
var G__5376_5441 = ")";
(re_frame.core.console.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$4(G__5373_5438,G__5374_5439,G__5375_5440,G__5376_5441) : re_frame.core.console.call(null,G__5373_5438,G__5374_5439,G__5375_5440,G__5376_5441));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.core.reg_sub_raw,args);
});

re_frame.core.register_sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_frame.core.register_sub.cljs$lang$applyTo = (function (seq5365){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5365));
});


//# sourceMappingURL=re_frame.core.js.map
