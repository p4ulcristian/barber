goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__60200 = arguments.length;
switch (G__60200) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60202 = (function (f,blockable,meta60203){
this.f = f;
this.blockable = blockable;
this.meta60203 = meta60203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async60202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60204,meta60203__$1){
var self__ = this;
var _60204__$1 = this;
return (new cljs.core.async.t_cljs$core$async60202(self__.f,self__.blockable,meta60203__$1));
});

cljs.core.async.t_cljs$core$async60202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60204){
var self__ = this;
var _60204__$1 = this;
return self__.meta60203;
});

cljs.core.async.t_cljs$core$async60202.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async60202.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async60202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async60202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta60203","meta60203",59318323,null)], null);
});

cljs.core.async.t_cljs$core$async60202.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60202";

cljs.core.async.t_cljs$core$async60202.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async60202");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60202.
 */
cljs.core.async.__GT_t_cljs$core$async60202 = (function cljs$core$async$__GT_t_cljs$core$async60202(f__$1,blockable__$1,meta60203){
return (new cljs.core.async.t_cljs$core$async60202(f__$1,blockable__$1,meta60203));
});

}

return (new cljs.core.async.t_cljs$core$async60202(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__60230 = arguments.length;
switch (G__60230) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__60234 = arguments.length;
switch (G__60234) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__60254 = arguments.length;
switch (G__60254) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_62474 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_62474) : fn1.call(null,val_62474));
} else {
cljs.core.async.impl.dispatch.run(((function (val_62474,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_62474) : fn1.call(null,val_62474));
});})(val_62474,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__60272 = arguments.length;
switch (G__60272) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___62491 = n;
var x_62492 = (0);
while(true){
if((x_62492 < n__4607__auto___62491)){
(a[x_62492] = (0));

var G__62494 = (x_62492 + (1));
x_62492 = G__62494;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__62496 = (i + (1));
i = G__62496;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60284 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60284 = (function (flag,meta60285){
this.flag = flag;
this.meta60285 = meta60285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async60284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_60286,meta60285__$1){
var self__ = this;
var _60286__$1 = this;
return (new cljs.core.async.t_cljs$core$async60284(self__.flag,meta60285__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async60284.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_60286){
var self__ = this;
var _60286__$1 = this;
return self__.meta60285;
});})(flag))
;

cljs.core.async.t_cljs$core$async60284.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60284.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async60284.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async60284.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async60284.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta60285","meta60285",-2128090181,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async60284.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60284";

cljs.core.async.t_cljs$core$async60284.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async60284");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60284.
 */
cljs.core.async.__GT_t_cljs$core$async60284 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async60284(flag__$1,meta60285){
return (new cljs.core.async.t_cljs$core$async60284(flag__$1,meta60285));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async60284(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60300 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60300 = (function (flag,cb,meta60301){
this.flag = flag;
this.cb = cb;
this.meta60301 = meta60301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async60300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60302,meta60301__$1){
var self__ = this;
var _60302__$1 = this;
return (new cljs.core.async.t_cljs$core$async60300(self__.flag,self__.cb,meta60301__$1));
});

cljs.core.async.t_cljs$core$async60300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60302){
var self__ = this;
var _60302__$1 = this;
return self__.meta60301;
});

cljs.core.async.t_cljs$core$async60300.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60300.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async60300.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async60300.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async60300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta60301","meta60301",-1851834971,null)], null);
});

cljs.core.async.t_cljs$core$async60300.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60300.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60300";

cljs.core.async.t_cljs$core$async60300.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async60300");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60300.
 */
cljs.core.async.__GT_t_cljs$core$async60300 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async60300(flag__$1,cb__$1,meta60301){
return (new cljs.core.async.t_cljs$core$async60300(flag__$1,cb__$1,meta60301));
});

}

return (new cljs.core.async.t_cljs$core$async60300(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__60310_SHARP_){
var G__60314 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__60310_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__60314) : fret.call(null,G__60314));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__60311_SHARP_){
var G__60315 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__60311_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__60315) : fret.call(null,G__60315));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__62503 = (i + (1));
i = G__62503;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___62505 = arguments.length;
var i__4731__auto___62506 = (0);
while(true){
if((i__4731__auto___62506 < len__4730__auto___62505)){
args__4736__auto__.push((arguments[i__4731__auto___62506]));

var G__62507 = (i__4731__auto___62506 + (1));
i__4731__auto___62506 = G__62507;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__60329){
var map__60330 = p__60329;
var map__60330__$1 = (((((!((map__60330 == null))))?(((((map__60330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60330):map__60330);
var opts = map__60330__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq60325){
var G__60326 = cljs.core.first(seq60325);
var seq60325__$1 = cljs.core.next(seq60325);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60326,seq60325__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__60337 = arguments.length;
switch (G__60337) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__60108__auto___62518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60108__auto___62518){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (c__60108__auto___62518){
return (function (state_60366){
var state_val_60367 = (state_60366[(1)]);
if((state_val_60367 === (7))){
var inst_60359 = (state_60366[(2)]);
var state_60366__$1 = state_60366;
var statearr_60370_62519 = state_60366__$1;
(statearr_60370_62519[(2)] = inst_60359);

(statearr_60370_62519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60367 === (1))){
var state_60366__$1 = state_60366;
var statearr_60371_62521 = state_60366__$1;
(statearr_60371_62521[(2)] = null);

(statearr_60371_62521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60367 === (4))){
var inst_60342 = (state_60366[(7)]);
var inst_60342__$1 = (state_60366[(2)]);
var inst_60343 = (inst_60342__$1 == null);
var state_60366__$1 = (function (){var statearr_60376 = state_60366;
(statearr_60376[(7)] = inst_60342__$1);

return statearr_60376;
})();
if(cljs.core.truth_(inst_60343)){
var statearr_60377_62523 = state_60366__$1;
(statearr_60377_62523[(1)] = (5));

} else {
var statearr_60378_62524 = state_60366__$1;
(statearr_60378_62524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60367 === (13))){
var state_60366__$1 = state_60366;
var statearr_60379_62525 = state_60366__$1;
(statearr_60379_62525[(2)] = null);

(statearr_60379_62525[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60367 === (6))){
var inst_60342 = (state_60366[(7)]);
var state_60366__$1 = state_60366;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60366__$1,(11),to,inst_60342);
} else {
if((state_val_60367 === (3))){
var inst_60361 = (state_60366[(2)]);
var state_60366__$1 = state_60366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60366__$1,inst_60361);
} else {
if((state_val_60367 === (12))){
var state_60366__$1 = state_60366;
var statearr_60390_62528 = state_60366__$1;
(statearr_60390_62528[(2)] = null);

(statearr_60390_62528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60367 === (2))){
var state_60366__$1 = state_60366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60366__$1,(4),from);
} else {
if((state_val_60367 === (11))){
var inst_60352 = (state_60366[(2)]);
var state_60366__$1 = state_60366;
if(cljs.core.truth_(inst_60352)){
var statearr_60391_62529 = state_60366__$1;
(statearr_60391_62529[(1)] = (12));

} else {
var statearr_60395_62530 = state_60366__$1;
(statearr_60395_62530[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60367 === (9))){
var state_60366__$1 = state_60366;
var statearr_60399_62531 = state_60366__$1;
(statearr_60399_62531[(2)] = null);

(statearr_60399_62531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60367 === (5))){
var state_60366__$1 = state_60366;
if(cljs.core.truth_(close_QMARK_)){
var statearr_60400_62532 = state_60366__$1;
(statearr_60400_62532[(1)] = (8));

} else {
var statearr_60403_62533 = state_60366__$1;
(statearr_60403_62533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60367 === (14))){
var inst_60357 = (state_60366[(2)]);
var state_60366__$1 = state_60366;
var statearr_60410_62534 = state_60366__$1;
(statearr_60410_62534[(2)] = inst_60357);

(statearr_60410_62534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60367 === (10))){
var inst_60349 = (state_60366[(2)]);
var state_60366__$1 = state_60366;
var statearr_60411_62537 = state_60366__$1;
(statearr_60411_62537[(2)] = inst_60349);

(statearr_60411_62537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60367 === (8))){
var inst_60346 = cljs.core.async.close_BANG_(to);
var state_60366__$1 = state_60366;
var statearr_60412_62539 = state_60366__$1;
(statearr_60412_62539[(2)] = inst_60346);

(statearr_60412_62539[(1)] = (10));


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
});})(c__60108__auto___62518))
;
return ((function (switch__59851__auto__,c__60108__auto___62518){
return (function() {
var cljs$core$async$state_machine__59852__auto__ = null;
var cljs$core$async$state_machine__59852__auto____0 = (function (){
var statearr_60415 = [null,null,null,null,null,null,null,null];
(statearr_60415[(0)] = cljs$core$async$state_machine__59852__auto__);

(statearr_60415[(1)] = (1));

return statearr_60415;
});
var cljs$core$async$state_machine__59852__auto____1 = (function (state_60366){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_60366);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e60416){if((e60416 instanceof Object)){
var ex__59855__auto__ = e60416;
var statearr_60417_62540 = state_60366;
(statearr_60417_62540[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60416;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62542 = state_60366;
state_60366 = G__62542;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
cljs$core$async$state_machine__59852__auto__ = function(state_60366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59852__auto____1.call(this,state_60366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59852__auto____0;
cljs$core$async$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59852__auto____1;
return cljs$core$async$state_machine__59852__auto__;
})()
;})(switch__59851__auto__,c__60108__auto___62518))
})();
var state__60110__auto__ = (function (){var statearr_60418 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_60418[(6)] = c__60108__auto___62518);

return statearr_60418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(c__60108__auto___62518))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__60425){
var vec__60426 = p__60425;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60426,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60426,(1),null);
var job = vec__60426;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__60108__auto___62551 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60108__auto___62551,res,vec__60426,v,p,job,jobs,results){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (c__60108__auto___62551,res,vec__60426,v,p,job,jobs,results){
return (function (state_60433){
var state_val_60434 = (state_60433[(1)]);
if((state_val_60434 === (1))){
var state_60433__$1 = state_60433;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60433__$1,(2),res,v);
} else {
if((state_val_60434 === (2))){
var inst_60430 = (state_60433[(2)]);
var inst_60431 = cljs.core.async.close_BANG_(res);
var state_60433__$1 = (function (){var statearr_60435 = state_60433;
(statearr_60435[(7)] = inst_60430);

return statearr_60435;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60433__$1,inst_60431);
} else {
return null;
}
}
});})(c__60108__auto___62551,res,vec__60426,v,p,job,jobs,results))
;
return ((function (switch__59851__auto__,c__60108__auto___62551,res,vec__60426,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____0 = (function (){
var statearr_60440 = [null,null,null,null,null,null,null,null];
(statearr_60440[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__);

(statearr_60440[(1)] = (1));

return statearr_60440;
});
var cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____1 = (function (state_60433){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_60433);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e60441){if((e60441 instanceof Object)){
var ex__59855__auto__ = e60441;
var statearr_60442_62570 = state_60433;
(statearr_60442_62570[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62573 = state_60433;
state_60433 = G__62573;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__ = function(state_60433){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____1.call(this,state_60433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__;
})()
;})(switch__59851__auto__,c__60108__auto___62551,res,vec__60426,v,p,job,jobs,results))
})();
var state__60110__auto__ = (function (){var statearr_60447 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_60447[(6)] = c__60108__auto___62551);

return statearr_60447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(c__60108__auto___62551,res,vec__60426,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__60449){
var vec__60450 = p__60449;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60450,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60450,(1),null);
var job = vec__60450;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___62586 = n;
var __62587 = (0);
while(true){
if((__62587 < n__4607__auto___62586)){
var G__60454_62588 = type;
var G__60454_62589__$1 = (((G__60454_62588 instanceof cljs.core.Keyword))?G__60454_62588.fqn:null);
switch (G__60454_62589__$1) {
case "compute":
var c__60108__auto___62591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__62587,c__60108__auto___62591,G__60454_62588,G__60454_62589__$1,n__4607__auto___62586,jobs,results,process,async){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (__62587,c__60108__auto___62591,G__60454_62588,G__60454_62589__$1,n__4607__auto___62586,jobs,results,process,async){
return (function (state_60469){
var state_val_60470 = (state_60469[(1)]);
if((state_val_60470 === (1))){
var state_60469__$1 = state_60469;
var statearr_60471_62592 = state_60469__$1;
(statearr_60471_62592[(2)] = null);

(statearr_60471_62592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60470 === (2))){
var state_60469__$1 = state_60469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60469__$1,(4),jobs);
} else {
if((state_val_60470 === (3))){
var inst_60467 = (state_60469[(2)]);
var state_60469__$1 = state_60469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60469__$1,inst_60467);
} else {
if((state_val_60470 === (4))){
var inst_60459 = (state_60469[(2)]);
var inst_60460 = process(inst_60459);
var state_60469__$1 = state_60469;
if(cljs.core.truth_(inst_60460)){
var statearr_60472_62597 = state_60469__$1;
(statearr_60472_62597[(1)] = (5));

} else {
var statearr_60473_62598 = state_60469__$1;
(statearr_60473_62598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60470 === (5))){
var state_60469__$1 = state_60469;
var statearr_60474_62599 = state_60469__$1;
(statearr_60474_62599[(2)] = null);

(statearr_60474_62599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60470 === (6))){
var state_60469__$1 = state_60469;
var statearr_60475_62603 = state_60469__$1;
(statearr_60475_62603[(2)] = null);

(statearr_60475_62603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60470 === (7))){
var inst_60465 = (state_60469[(2)]);
var state_60469__$1 = state_60469;
var statearr_60479_62607 = state_60469__$1;
(statearr_60479_62607[(2)] = inst_60465);

(statearr_60479_62607[(1)] = (3));


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
});})(__62587,c__60108__auto___62591,G__60454_62588,G__60454_62589__$1,n__4607__auto___62586,jobs,results,process,async))
;
return ((function (__62587,switch__59851__auto__,c__60108__auto___62591,G__60454_62588,G__60454_62589__$1,n__4607__auto___62586,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____0 = (function (){
var statearr_60482 = [null,null,null,null,null,null,null];
(statearr_60482[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__);

(statearr_60482[(1)] = (1));

return statearr_60482;
});
var cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____1 = (function (state_60469){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_60469);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e60483){if((e60483 instanceof Object)){
var ex__59855__auto__ = e60483;
var statearr_60490_62622 = state_60469;
(statearr_60490_62622[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60483;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62623 = state_60469;
state_60469 = G__62623;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__ = function(state_60469){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____1.call(this,state_60469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__;
})()
;})(__62587,switch__59851__auto__,c__60108__auto___62591,G__60454_62588,G__60454_62589__$1,n__4607__auto___62586,jobs,results,process,async))
})();
var state__60110__auto__ = (function (){var statearr_60491 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_60491[(6)] = c__60108__auto___62591);

return statearr_60491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(__62587,c__60108__auto___62591,G__60454_62588,G__60454_62589__$1,n__4607__auto___62586,jobs,results,process,async))
);


break;
case "async":
var c__60108__auto___62633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__62587,c__60108__auto___62633,G__60454_62588,G__60454_62589__$1,n__4607__auto___62586,jobs,results,process,async){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (__62587,c__60108__auto___62633,G__60454_62588,G__60454_62589__$1,n__4607__auto___62586,jobs,results,process,async){
return (function (state_60506){
var state_val_60507 = (state_60506[(1)]);
if((state_val_60507 === (1))){
var state_60506__$1 = state_60506;
var statearr_60508_62649 = state_60506__$1;
(statearr_60508_62649[(2)] = null);

(statearr_60508_62649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60507 === (2))){
var state_60506__$1 = state_60506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60506__$1,(4),jobs);
} else {
if((state_val_60507 === (3))){
var inst_60504 = (state_60506[(2)]);
var state_60506__$1 = state_60506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60506__$1,inst_60504);
} else {
if((state_val_60507 === (4))){
var inst_60496 = (state_60506[(2)]);
var inst_60497 = async(inst_60496);
var state_60506__$1 = state_60506;
if(cljs.core.truth_(inst_60497)){
var statearr_60510_62657 = state_60506__$1;
(statearr_60510_62657[(1)] = (5));

} else {
var statearr_60512_62658 = state_60506__$1;
(statearr_60512_62658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60507 === (5))){
var state_60506__$1 = state_60506;
var statearr_60514_62661 = state_60506__$1;
(statearr_60514_62661[(2)] = null);

(statearr_60514_62661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60507 === (6))){
var state_60506__$1 = state_60506;
var statearr_60515_62662 = state_60506__$1;
(statearr_60515_62662[(2)] = null);

(statearr_60515_62662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60507 === (7))){
var inst_60502 = (state_60506[(2)]);
var state_60506__$1 = state_60506;
var statearr_60516_62667 = state_60506__$1;
(statearr_60516_62667[(2)] = inst_60502);

(statearr_60516_62667[(1)] = (3));


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
});})(__62587,c__60108__auto___62633,G__60454_62588,G__60454_62589__$1,n__4607__auto___62586,jobs,results,process,async))
;
return ((function (__62587,switch__59851__auto__,c__60108__auto___62633,G__60454_62588,G__60454_62589__$1,n__4607__auto___62586,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____0 = (function (){
var statearr_60517 = [null,null,null,null,null,null,null];
(statearr_60517[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__);

(statearr_60517[(1)] = (1));

return statearr_60517;
});
var cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____1 = (function (state_60506){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_60506);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e60521){if((e60521 instanceof Object)){
var ex__59855__auto__ = e60521;
var statearr_60522_62673 = state_60506;
(statearr_60522_62673[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60521;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62674 = state_60506;
state_60506 = G__62674;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__ = function(state_60506){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____1.call(this,state_60506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__;
})()
;})(__62587,switch__59851__auto__,c__60108__auto___62633,G__60454_62588,G__60454_62589__$1,n__4607__auto___62586,jobs,results,process,async))
})();
var state__60110__auto__ = (function (){var statearr_60527 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_60527[(6)] = c__60108__auto___62633);

return statearr_60527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(__62587,c__60108__auto___62633,G__60454_62588,G__60454_62589__$1,n__4607__auto___62586,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60454_62589__$1)].join('')));

}

var G__62681 = (__62587 + (1));
__62587 = G__62681;
continue;
} else {
}
break;
}

var c__60108__auto___62682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60108__auto___62682,jobs,results,process,async){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (c__60108__auto___62682,jobs,results,process,async){
return (function (state_60551){
var state_val_60552 = (state_60551[(1)]);
if((state_val_60552 === (7))){
var inst_60547 = (state_60551[(2)]);
var state_60551__$1 = state_60551;
var statearr_60556_62684 = state_60551__$1;
(statearr_60556_62684[(2)] = inst_60547);

(statearr_60556_62684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60552 === (1))){
var state_60551__$1 = state_60551;
var statearr_60557_62691 = state_60551__$1;
(statearr_60557_62691[(2)] = null);

(statearr_60557_62691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60552 === (4))){
var inst_60531 = (state_60551[(7)]);
var inst_60531__$1 = (state_60551[(2)]);
var inst_60532 = (inst_60531__$1 == null);
var state_60551__$1 = (function (){var statearr_60558 = state_60551;
(statearr_60558[(7)] = inst_60531__$1);

return statearr_60558;
})();
if(cljs.core.truth_(inst_60532)){
var statearr_60559_62696 = state_60551__$1;
(statearr_60559_62696[(1)] = (5));

} else {
var statearr_60562_62697 = state_60551__$1;
(statearr_60562_62697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60552 === (6))){
var inst_60537 = (state_60551[(8)]);
var inst_60531 = (state_60551[(7)]);
var inst_60537__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_60538 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60539 = [inst_60531,inst_60537__$1];
var inst_60540 = (new cljs.core.PersistentVector(null,2,(5),inst_60538,inst_60539,null));
var state_60551__$1 = (function (){var statearr_60567 = state_60551;
(statearr_60567[(8)] = inst_60537__$1);

return statearr_60567;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60551__$1,(8),jobs,inst_60540);
} else {
if((state_val_60552 === (3))){
var inst_60549 = (state_60551[(2)]);
var state_60551__$1 = state_60551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60551__$1,inst_60549);
} else {
if((state_val_60552 === (2))){
var state_60551__$1 = state_60551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60551__$1,(4),from);
} else {
if((state_val_60552 === (9))){
var inst_60544 = (state_60551[(2)]);
var state_60551__$1 = (function (){var statearr_60571 = state_60551;
(statearr_60571[(9)] = inst_60544);

return statearr_60571;
})();
var statearr_60572_62709 = state_60551__$1;
(statearr_60572_62709[(2)] = null);

(statearr_60572_62709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60552 === (5))){
var inst_60534 = cljs.core.async.close_BANG_(jobs);
var state_60551__$1 = state_60551;
var statearr_60573_62714 = state_60551__$1;
(statearr_60573_62714[(2)] = inst_60534);

(statearr_60573_62714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60552 === (8))){
var inst_60537 = (state_60551[(8)]);
var inst_60542 = (state_60551[(2)]);
var state_60551__$1 = (function (){var statearr_60583 = state_60551;
(statearr_60583[(10)] = inst_60542);

return statearr_60583;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60551__$1,(9),results,inst_60537);
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
});})(c__60108__auto___62682,jobs,results,process,async))
;
return ((function (switch__59851__auto__,c__60108__auto___62682,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____0 = (function (){
var statearr_60590 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60590[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__);

(statearr_60590[(1)] = (1));

return statearr_60590;
});
var cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____1 = (function (state_60551){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_60551);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e60591){if((e60591 instanceof Object)){
var ex__59855__auto__ = e60591;
var statearr_60592_62728 = state_60551;
(statearr_60592_62728[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60591;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62733 = state_60551;
state_60551 = G__62733;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__ = function(state_60551){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____1.call(this,state_60551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__;
})()
;})(switch__59851__auto__,c__60108__auto___62682,jobs,results,process,async))
})();
var state__60110__auto__ = (function (){var statearr_60593 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_60593[(6)] = c__60108__auto___62682);

return statearr_60593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(c__60108__auto___62682,jobs,results,process,async))
);


var c__60108__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60108__auto__,jobs,results,process,async){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (c__60108__auto__,jobs,results,process,async){
return (function (state_60634){
var state_val_60635 = (state_60634[(1)]);
if((state_val_60635 === (7))){
var inst_60630 = (state_60634[(2)]);
var state_60634__$1 = state_60634;
var statearr_60637_62752 = state_60634__$1;
(statearr_60637_62752[(2)] = inst_60630);

(statearr_60637_62752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60635 === (20))){
var state_60634__$1 = state_60634;
var statearr_60640_62756 = state_60634__$1;
(statearr_60640_62756[(2)] = null);

(statearr_60640_62756[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60635 === (1))){
var state_60634__$1 = state_60634;
var statearr_60641_62763 = state_60634__$1;
(statearr_60641_62763[(2)] = null);

(statearr_60641_62763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60635 === (4))){
var inst_60599 = (state_60634[(7)]);
var inst_60599__$1 = (state_60634[(2)]);
var inst_60600 = (inst_60599__$1 == null);
var state_60634__$1 = (function (){var statearr_60646 = state_60634;
(statearr_60646[(7)] = inst_60599__$1);

return statearr_60646;
})();
if(cljs.core.truth_(inst_60600)){
var statearr_60647_62773 = state_60634__$1;
(statearr_60647_62773[(1)] = (5));

} else {
var statearr_60648_62774 = state_60634__$1;
(statearr_60648_62774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60635 === (15))){
var inst_60612 = (state_60634[(8)]);
var state_60634__$1 = state_60634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60634__$1,(18),to,inst_60612);
} else {
if((state_val_60635 === (21))){
var inst_60625 = (state_60634[(2)]);
var state_60634__$1 = state_60634;
var statearr_60649_62775 = state_60634__$1;
(statearr_60649_62775[(2)] = inst_60625);

(statearr_60649_62775[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60635 === (13))){
var inst_60627 = (state_60634[(2)]);
var state_60634__$1 = (function (){var statearr_60651 = state_60634;
(statearr_60651[(9)] = inst_60627);

return statearr_60651;
})();
var statearr_60652_62776 = state_60634__$1;
(statearr_60652_62776[(2)] = null);

(statearr_60652_62776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60635 === (6))){
var inst_60599 = (state_60634[(7)]);
var state_60634__$1 = state_60634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60634__$1,(11),inst_60599);
} else {
if((state_val_60635 === (17))){
var inst_60620 = (state_60634[(2)]);
var state_60634__$1 = state_60634;
if(cljs.core.truth_(inst_60620)){
var statearr_60654_62781 = state_60634__$1;
(statearr_60654_62781[(1)] = (19));

} else {
var statearr_60655_62784 = state_60634__$1;
(statearr_60655_62784[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60635 === (3))){
var inst_60632 = (state_60634[(2)]);
var state_60634__$1 = state_60634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60634__$1,inst_60632);
} else {
if((state_val_60635 === (12))){
var inst_60609 = (state_60634[(10)]);
var state_60634__$1 = state_60634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60634__$1,(14),inst_60609);
} else {
if((state_val_60635 === (2))){
var state_60634__$1 = state_60634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60634__$1,(4),results);
} else {
if((state_val_60635 === (19))){
var state_60634__$1 = state_60634;
var statearr_60656_62787 = state_60634__$1;
(statearr_60656_62787[(2)] = null);

(statearr_60656_62787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60635 === (11))){
var inst_60609 = (state_60634[(2)]);
var state_60634__$1 = (function (){var statearr_60657 = state_60634;
(statearr_60657[(10)] = inst_60609);

return statearr_60657;
})();
var statearr_60662_62788 = state_60634__$1;
(statearr_60662_62788[(2)] = null);

(statearr_60662_62788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60635 === (9))){
var state_60634__$1 = state_60634;
var statearr_60667_62789 = state_60634__$1;
(statearr_60667_62789[(2)] = null);

(statearr_60667_62789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60635 === (5))){
var state_60634__$1 = state_60634;
if(cljs.core.truth_(close_QMARK_)){
var statearr_60668_62790 = state_60634__$1;
(statearr_60668_62790[(1)] = (8));

} else {
var statearr_60669_62791 = state_60634__$1;
(statearr_60669_62791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60635 === (14))){
var inst_60614 = (state_60634[(11)]);
var inst_60612 = (state_60634[(8)]);
var inst_60612__$1 = (state_60634[(2)]);
var inst_60613 = (inst_60612__$1 == null);
var inst_60614__$1 = cljs.core.not(inst_60613);
var state_60634__$1 = (function (){var statearr_60674 = state_60634;
(statearr_60674[(11)] = inst_60614__$1);

(statearr_60674[(8)] = inst_60612__$1);

return statearr_60674;
})();
if(inst_60614__$1){
var statearr_60675_62792 = state_60634__$1;
(statearr_60675_62792[(1)] = (15));

} else {
var statearr_60676_62793 = state_60634__$1;
(statearr_60676_62793[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60635 === (16))){
var inst_60614 = (state_60634[(11)]);
var state_60634__$1 = state_60634;
var statearr_60681_62797 = state_60634__$1;
(statearr_60681_62797[(2)] = inst_60614);

(statearr_60681_62797[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60635 === (10))){
var inst_60606 = (state_60634[(2)]);
var state_60634__$1 = state_60634;
var statearr_60682_62799 = state_60634__$1;
(statearr_60682_62799[(2)] = inst_60606);

(statearr_60682_62799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60635 === (18))){
var inst_60617 = (state_60634[(2)]);
var state_60634__$1 = state_60634;
var statearr_60683_62809 = state_60634__$1;
(statearr_60683_62809[(2)] = inst_60617);

(statearr_60683_62809[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60635 === (8))){
var inst_60603 = cljs.core.async.close_BANG_(to);
var state_60634__$1 = state_60634;
var statearr_60687_62812 = state_60634__$1;
(statearr_60687_62812[(2)] = inst_60603);

(statearr_60687_62812[(1)] = (10));


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
}
}
}
}
}
});})(c__60108__auto__,jobs,results,process,async))
;
return ((function (switch__59851__auto__,c__60108__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____0 = (function (){
var statearr_60689 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60689[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__);

(statearr_60689[(1)] = (1));

return statearr_60689;
});
var cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____1 = (function (state_60634){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_60634);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e60690){if((e60690 instanceof Object)){
var ex__59855__auto__ = e60690;
var statearr_60691_62828 = state_60634;
(statearr_60691_62828[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60690;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62834 = state_60634;
state_60634 = G__62834;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__ = function(state_60634){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____1.call(this,state_60634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__59852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__59852__auto__;
})()
;})(switch__59851__auto__,c__60108__auto__,jobs,results,process,async))
})();
var state__60110__auto__ = (function (){var statearr_60692 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_60692[(6)] = c__60108__auto__);

return statearr_60692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(c__60108__auto__,jobs,results,process,async))
);

return c__60108__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__60694 = arguments.length;
switch (G__60694) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__60697 = arguments.length;
switch (G__60697) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__60706 = arguments.length;
switch (G__60706) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__60108__auto___62891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60108__auto___62891,tc,fc){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (c__60108__auto___62891,tc,fc){
return (function (state_60732){
var state_val_60733 = (state_60732[(1)]);
if((state_val_60733 === (7))){
var inst_60728 = (state_60732[(2)]);
var state_60732__$1 = state_60732;
var statearr_60734_62892 = state_60732__$1;
(statearr_60734_62892[(2)] = inst_60728);

(statearr_60734_62892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60733 === (1))){
var state_60732__$1 = state_60732;
var statearr_60735_62894 = state_60732__$1;
(statearr_60735_62894[(2)] = null);

(statearr_60735_62894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60733 === (4))){
var inst_60709 = (state_60732[(7)]);
var inst_60709__$1 = (state_60732[(2)]);
var inst_60710 = (inst_60709__$1 == null);
var state_60732__$1 = (function (){var statearr_60737 = state_60732;
(statearr_60737[(7)] = inst_60709__$1);

return statearr_60737;
})();
if(cljs.core.truth_(inst_60710)){
var statearr_60738_62901 = state_60732__$1;
(statearr_60738_62901[(1)] = (5));

} else {
var statearr_60739_62902 = state_60732__$1;
(statearr_60739_62902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60733 === (13))){
var state_60732__$1 = state_60732;
var statearr_60742_62903 = state_60732__$1;
(statearr_60742_62903[(2)] = null);

(statearr_60742_62903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60733 === (6))){
var inst_60709 = (state_60732[(7)]);
var inst_60715 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_60709) : p.call(null,inst_60709));
var state_60732__$1 = state_60732;
if(cljs.core.truth_(inst_60715)){
var statearr_60744_62908 = state_60732__$1;
(statearr_60744_62908[(1)] = (9));

} else {
var statearr_60745_62909 = state_60732__$1;
(statearr_60745_62909[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60733 === (3))){
var inst_60730 = (state_60732[(2)]);
var state_60732__$1 = state_60732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60732__$1,inst_60730);
} else {
if((state_val_60733 === (12))){
var state_60732__$1 = state_60732;
var statearr_60748_62911 = state_60732__$1;
(statearr_60748_62911[(2)] = null);

(statearr_60748_62911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60733 === (2))){
var state_60732__$1 = state_60732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60732__$1,(4),ch);
} else {
if((state_val_60733 === (11))){
var inst_60709 = (state_60732[(7)]);
var inst_60719 = (state_60732[(2)]);
var state_60732__$1 = state_60732;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60732__$1,(8),inst_60719,inst_60709);
} else {
if((state_val_60733 === (9))){
var state_60732__$1 = state_60732;
var statearr_60749_62914 = state_60732__$1;
(statearr_60749_62914[(2)] = tc);

(statearr_60749_62914[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60733 === (5))){
var inst_60712 = cljs.core.async.close_BANG_(tc);
var inst_60713 = cljs.core.async.close_BANG_(fc);
var state_60732__$1 = (function (){var statearr_60750 = state_60732;
(statearr_60750[(8)] = inst_60712);

return statearr_60750;
})();
var statearr_60751_62922 = state_60732__$1;
(statearr_60751_62922[(2)] = inst_60713);

(statearr_60751_62922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60733 === (14))){
var inst_60726 = (state_60732[(2)]);
var state_60732__$1 = state_60732;
var statearr_60755_62925 = state_60732__$1;
(statearr_60755_62925[(2)] = inst_60726);

(statearr_60755_62925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60733 === (10))){
var state_60732__$1 = state_60732;
var statearr_60757_62927 = state_60732__$1;
(statearr_60757_62927[(2)] = fc);

(statearr_60757_62927[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60733 === (8))){
var inst_60721 = (state_60732[(2)]);
var state_60732__$1 = state_60732;
if(cljs.core.truth_(inst_60721)){
var statearr_60758_62930 = state_60732__$1;
(statearr_60758_62930[(1)] = (12));

} else {
var statearr_60759_62932 = state_60732__$1;
(statearr_60759_62932[(1)] = (13));

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
});})(c__60108__auto___62891,tc,fc))
;
return ((function (switch__59851__auto__,c__60108__auto___62891,tc,fc){
return (function() {
var cljs$core$async$state_machine__59852__auto__ = null;
var cljs$core$async$state_machine__59852__auto____0 = (function (){
var statearr_60760 = [null,null,null,null,null,null,null,null,null];
(statearr_60760[(0)] = cljs$core$async$state_machine__59852__auto__);

(statearr_60760[(1)] = (1));

return statearr_60760;
});
var cljs$core$async$state_machine__59852__auto____1 = (function (state_60732){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_60732);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e60761){if((e60761 instanceof Object)){
var ex__59855__auto__ = e60761;
var statearr_60762_62936 = state_60732;
(statearr_60762_62936[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60761;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62938 = state_60732;
state_60732 = G__62938;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
cljs$core$async$state_machine__59852__auto__ = function(state_60732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59852__auto____1.call(this,state_60732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59852__auto____0;
cljs$core$async$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59852__auto____1;
return cljs$core$async$state_machine__59852__auto__;
})()
;})(switch__59851__auto__,c__60108__auto___62891,tc,fc))
})();
var state__60110__auto__ = (function (){var statearr_60764 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_60764[(6)] = c__60108__auto___62891);

return statearr_60764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(c__60108__auto___62891,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__60108__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60108__auto__){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (c__60108__auto__){
return (function (state_60788){
var state_val_60789 = (state_60788[(1)]);
if((state_val_60789 === (7))){
var inst_60784 = (state_60788[(2)]);
var state_60788__$1 = state_60788;
var statearr_60792_62941 = state_60788__$1;
(statearr_60792_62941[(2)] = inst_60784);

(statearr_60792_62941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (1))){
var inst_60765 = init;
var state_60788__$1 = (function (){var statearr_60793 = state_60788;
(statearr_60793[(7)] = inst_60765);

return statearr_60793;
})();
var statearr_60794_62942 = state_60788__$1;
(statearr_60794_62942[(2)] = null);

(statearr_60794_62942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (4))){
var inst_60769 = (state_60788[(8)]);
var inst_60769__$1 = (state_60788[(2)]);
var inst_60770 = (inst_60769__$1 == null);
var state_60788__$1 = (function (){var statearr_60795 = state_60788;
(statearr_60795[(8)] = inst_60769__$1);

return statearr_60795;
})();
if(cljs.core.truth_(inst_60770)){
var statearr_60796_62943 = state_60788__$1;
(statearr_60796_62943[(1)] = (5));

} else {
var statearr_60797_62944 = state_60788__$1;
(statearr_60797_62944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (6))){
var inst_60774 = (state_60788[(9)]);
var inst_60765 = (state_60788[(7)]);
var inst_60769 = (state_60788[(8)]);
var inst_60774__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_60765,inst_60769) : f.call(null,inst_60765,inst_60769));
var inst_60775 = cljs.core.reduced_QMARK_(inst_60774__$1);
var state_60788__$1 = (function (){var statearr_60799 = state_60788;
(statearr_60799[(9)] = inst_60774__$1);

return statearr_60799;
})();
if(inst_60775){
var statearr_60800_62949 = state_60788__$1;
(statearr_60800_62949[(1)] = (8));

} else {
var statearr_60801_62950 = state_60788__$1;
(statearr_60801_62950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (3))){
var inst_60786 = (state_60788[(2)]);
var state_60788__$1 = state_60788;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60788__$1,inst_60786);
} else {
if((state_val_60789 === (2))){
var state_60788__$1 = state_60788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60788__$1,(4),ch);
} else {
if((state_val_60789 === (9))){
var inst_60774 = (state_60788[(9)]);
var inst_60765 = inst_60774;
var state_60788__$1 = (function (){var statearr_60811 = state_60788;
(statearr_60811[(7)] = inst_60765);

return statearr_60811;
})();
var statearr_60812_62966 = state_60788__$1;
(statearr_60812_62966[(2)] = null);

(statearr_60812_62966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (5))){
var inst_60765 = (state_60788[(7)]);
var state_60788__$1 = state_60788;
var statearr_60817_62969 = state_60788__$1;
(statearr_60817_62969[(2)] = inst_60765);

(statearr_60817_62969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (10))){
var inst_60782 = (state_60788[(2)]);
var state_60788__$1 = state_60788;
var statearr_60818_62970 = state_60788__$1;
(statearr_60818_62970[(2)] = inst_60782);

(statearr_60818_62970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60789 === (8))){
var inst_60774 = (state_60788[(9)]);
var inst_60778 = cljs.core.deref(inst_60774);
var state_60788__$1 = state_60788;
var statearr_60819_62972 = state_60788__$1;
(statearr_60819_62972[(2)] = inst_60778);

(statearr_60819_62972[(1)] = (10));


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
});})(c__60108__auto__))
;
return ((function (switch__59851__auto__,c__60108__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__59852__auto__ = null;
var cljs$core$async$reduce_$_state_machine__59852__auto____0 = (function (){
var statearr_60828 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60828[(0)] = cljs$core$async$reduce_$_state_machine__59852__auto__);

(statearr_60828[(1)] = (1));

return statearr_60828;
});
var cljs$core$async$reduce_$_state_machine__59852__auto____1 = (function (state_60788){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_60788);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e60839){if((e60839 instanceof Object)){
var ex__59855__auto__ = e60839;
var statearr_60840_62978 = state_60788;
(statearr_60840_62978[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60839;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62982 = state_60788;
state_60788 = G__62982;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__59852__auto__ = function(state_60788){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__59852__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__59852__auto____1.call(this,state_60788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__59852__auto____0;
cljs$core$async$reduce_$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__59852__auto____1;
return cljs$core$async$reduce_$_state_machine__59852__auto__;
})()
;})(switch__59851__auto__,c__60108__auto__))
})();
var state__60110__auto__ = (function (){var statearr_60843 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_60843[(6)] = c__60108__auto__);

return statearr_60843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(c__60108__auto__))
);

return c__60108__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__60108__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60108__auto__,f__$1){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (c__60108__auto__,f__$1){
return (function (state_60849){
var state_val_60850 = (state_60849[(1)]);
if((state_val_60850 === (1))){
var inst_60844 = cljs.core.async.reduce(f__$1,init,ch);
var state_60849__$1 = state_60849;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60849__$1,(2),inst_60844);
} else {
if((state_val_60850 === (2))){
var inst_60846 = (state_60849[(2)]);
var inst_60847 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_60846) : f__$1.call(null,inst_60846));
var state_60849__$1 = state_60849;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60849__$1,inst_60847);
} else {
return null;
}
}
});})(c__60108__auto__,f__$1))
;
return ((function (switch__59851__auto__,c__60108__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__59852__auto__ = null;
var cljs$core$async$transduce_$_state_machine__59852__auto____0 = (function (){
var statearr_60851 = [null,null,null,null,null,null,null];
(statearr_60851[(0)] = cljs$core$async$transduce_$_state_machine__59852__auto__);

(statearr_60851[(1)] = (1));

return statearr_60851;
});
var cljs$core$async$transduce_$_state_machine__59852__auto____1 = (function (state_60849){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_60849);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e60852){if((e60852 instanceof Object)){
var ex__59855__auto__ = e60852;
var statearr_60853_62991 = state_60849;
(statearr_60853_62991[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60852;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62993 = state_60849;
state_60849 = G__62993;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__59852__auto__ = function(state_60849){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__59852__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__59852__auto____1.call(this,state_60849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__59852__auto____0;
cljs$core$async$transduce_$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__59852__auto____1;
return cljs$core$async$transduce_$_state_machine__59852__auto__;
})()
;})(switch__59851__auto__,c__60108__auto__,f__$1))
})();
var state__60110__auto__ = (function (){var statearr_60854 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_60854[(6)] = c__60108__auto__);

return statearr_60854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(c__60108__auto__,f__$1))
);

return c__60108__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__60856 = arguments.length;
switch (G__60856) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__60108__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60108__auto__){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (c__60108__auto__){
return (function (state_60893){
var state_val_60894 = (state_60893[(1)]);
if((state_val_60894 === (7))){
var inst_60875 = (state_60893[(2)]);
var state_60893__$1 = state_60893;
var statearr_60895_62999 = state_60893__$1;
(statearr_60895_62999[(2)] = inst_60875);

(statearr_60895_62999[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60894 === (1))){
var inst_60869 = cljs.core.seq(coll);
var inst_60870 = inst_60869;
var state_60893__$1 = (function (){var statearr_60896 = state_60893;
(statearr_60896[(7)] = inst_60870);

return statearr_60896;
})();
var statearr_60897_63001 = state_60893__$1;
(statearr_60897_63001[(2)] = null);

(statearr_60897_63001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60894 === (4))){
var inst_60870 = (state_60893[(7)]);
var inst_60873 = cljs.core.first(inst_60870);
var state_60893__$1 = state_60893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60893__$1,(7),ch,inst_60873);
} else {
if((state_val_60894 === (13))){
var inst_60887 = (state_60893[(2)]);
var state_60893__$1 = state_60893;
var statearr_60899_63002 = state_60893__$1;
(statearr_60899_63002[(2)] = inst_60887);

(statearr_60899_63002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60894 === (6))){
var inst_60878 = (state_60893[(2)]);
var state_60893__$1 = state_60893;
if(cljs.core.truth_(inst_60878)){
var statearr_60900_63004 = state_60893__$1;
(statearr_60900_63004[(1)] = (8));

} else {
var statearr_60901_63005 = state_60893__$1;
(statearr_60901_63005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60894 === (3))){
var inst_60891 = (state_60893[(2)]);
var state_60893__$1 = state_60893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60893__$1,inst_60891);
} else {
if((state_val_60894 === (12))){
var state_60893__$1 = state_60893;
var statearr_60902_63008 = state_60893__$1;
(statearr_60902_63008[(2)] = null);

(statearr_60902_63008[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60894 === (2))){
var inst_60870 = (state_60893[(7)]);
var state_60893__$1 = state_60893;
if(cljs.core.truth_(inst_60870)){
var statearr_60903_63010 = state_60893__$1;
(statearr_60903_63010[(1)] = (4));

} else {
var statearr_60904_63011 = state_60893__$1;
(statearr_60904_63011[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60894 === (11))){
var inst_60884 = cljs.core.async.close_BANG_(ch);
var state_60893__$1 = state_60893;
var statearr_60905_63013 = state_60893__$1;
(statearr_60905_63013[(2)] = inst_60884);

(statearr_60905_63013[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60894 === (9))){
var state_60893__$1 = state_60893;
if(cljs.core.truth_(close_QMARK_)){
var statearr_60906_63016 = state_60893__$1;
(statearr_60906_63016[(1)] = (11));

} else {
var statearr_60907_63017 = state_60893__$1;
(statearr_60907_63017[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60894 === (5))){
var inst_60870 = (state_60893[(7)]);
var state_60893__$1 = state_60893;
var statearr_60908_63018 = state_60893__$1;
(statearr_60908_63018[(2)] = inst_60870);

(statearr_60908_63018[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60894 === (10))){
var inst_60889 = (state_60893[(2)]);
var state_60893__$1 = state_60893;
var statearr_60909_63019 = state_60893__$1;
(statearr_60909_63019[(2)] = inst_60889);

(statearr_60909_63019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60894 === (8))){
var inst_60870 = (state_60893[(7)]);
var inst_60880 = cljs.core.next(inst_60870);
var inst_60870__$1 = inst_60880;
var state_60893__$1 = (function (){var statearr_60910 = state_60893;
(statearr_60910[(7)] = inst_60870__$1);

return statearr_60910;
})();
var statearr_60911_63027 = state_60893__$1;
(statearr_60911_63027[(2)] = null);

(statearr_60911_63027[(1)] = (2));


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
});})(c__60108__auto__))
;
return ((function (switch__59851__auto__,c__60108__auto__){
return (function() {
var cljs$core$async$state_machine__59852__auto__ = null;
var cljs$core$async$state_machine__59852__auto____0 = (function (){
var statearr_60912 = [null,null,null,null,null,null,null,null];
(statearr_60912[(0)] = cljs$core$async$state_machine__59852__auto__);

(statearr_60912[(1)] = (1));

return statearr_60912;
});
var cljs$core$async$state_machine__59852__auto____1 = (function (state_60893){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_60893);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e60913){if((e60913 instanceof Object)){
var ex__59855__auto__ = e60913;
var statearr_60914_63044 = state_60893;
(statearr_60914_63044[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_60893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60913;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63047 = state_60893;
state_60893 = G__63047;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
cljs$core$async$state_machine__59852__auto__ = function(state_60893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59852__auto____1.call(this,state_60893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59852__auto____0;
cljs$core$async$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59852__auto____1;
return cljs$core$async$state_machine__59852__auto__;
})()
;})(switch__59851__auto__,c__60108__auto__))
})();
var state__60110__auto__ = (function (){var statearr_60915 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_60915[(6)] = c__60108__auto__);

return statearr_60915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(c__60108__auto__))
);

return c__60108__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60919 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60919 = (function (ch,cs,meta60920){
this.ch = ch;
this.cs = cs;
this.meta60920 = meta60920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async60919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_60921,meta60920__$1){
var self__ = this;
var _60921__$1 = this;
return (new cljs.core.async.t_cljs$core$async60919(self__.ch,self__.cs,meta60920__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async60919.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_60921){
var self__ = this;
var _60921__$1 = this;
return self__.meta60920;
});})(cs))
;

cljs.core.async.t_cljs$core$async60919.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60919.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async60919.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async60919.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async60919.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async60919.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async60919.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta60920","meta60920",335939103,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async60919.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60919";

cljs.core.async.t_cljs$core$async60919.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async60919");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60919.
 */
cljs.core.async.__GT_t_cljs$core$async60919 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async60919(ch__$1,cs__$1,meta60920){
return (new cljs.core.async.t_cljs$core$async60919(ch__$1,cs__$1,meta60920));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async60919(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__60108__auto___63113 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60108__auto___63113,cs,m,dchan,dctr,done){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (c__60108__auto___63113,cs,m,dchan,dctr,done){
return (function (state_61069){
var state_val_61070 = (state_61069[(1)]);
if((state_val_61070 === (7))){
var inst_61065 = (state_61069[(2)]);
var state_61069__$1 = state_61069;
var statearr_61071_63115 = state_61069__$1;
(statearr_61071_63115[(2)] = inst_61065);

(statearr_61071_63115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (20))){
var inst_60967 = (state_61069[(7)]);
var inst_60979 = cljs.core.first(inst_60967);
var inst_60980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60979,(0),null);
var inst_60981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60979,(1),null);
var state_61069__$1 = (function (){var statearr_61072 = state_61069;
(statearr_61072[(8)] = inst_60980);

return statearr_61072;
})();
if(cljs.core.truth_(inst_60981)){
var statearr_61073_63118 = state_61069__$1;
(statearr_61073_63118[(1)] = (22));

} else {
var statearr_61074_63119 = state_61069__$1;
(statearr_61074_63119[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (27))){
var inst_60936 = (state_61069[(9)]);
var inst_61016 = (state_61069[(10)]);
var inst_61009 = (state_61069[(11)]);
var inst_61011 = (state_61069[(12)]);
var inst_61016__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_61009,inst_61011);
var inst_61017 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_61016__$1,inst_60936,done);
var state_61069__$1 = (function (){var statearr_61077 = state_61069;
(statearr_61077[(10)] = inst_61016__$1);

return statearr_61077;
})();
if(cljs.core.truth_(inst_61017)){
var statearr_61078_63120 = state_61069__$1;
(statearr_61078_63120[(1)] = (30));

} else {
var statearr_61079_63121 = state_61069__$1;
(statearr_61079_63121[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (1))){
var state_61069__$1 = state_61069;
var statearr_61080_63122 = state_61069__$1;
(statearr_61080_63122[(2)] = null);

(statearr_61080_63122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (24))){
var inst_60967 = (state_61069[(7)]);
var inst_60986 = (state_61069[(2)]);
var inst_60987 = cljs.core.next(inst_60967);
var inst_60945 = inst_60987;
var inst_60946 = null;
var inst_60947 = (0);
var inst_60948 = (0);
var state_61069__$1 = (function (){var statearr_61082 = state_61069;
(statearr_61082[(13)] = inst_60948);

(statearr_61082[(14)] = inst_60946);

(statearr_61082[(15)] = inst_60947);

(statearr_61082[(16)] = inst_60986);

(statearr_61082[(17)] = inst_60945);

return statearr_61082;
})();
var statearr_61084_63130 = state_61069__$1;
(statearr_61084_63130[(2)] = null);

(statearr_61084_63130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (39))){
var state_61069__$1 = state_61069;
var statearr_61089_63135 = state_61069__$1;
(statearr_61089_63135[(2)] = null);

(statearr_61089_63135[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (4))){
var inst_60936 = (state_61069[(9)]);
var inst_60936__$1 = (state_61069[(2)]);
var inst_60937 = (inst_60936__$1 == null);
var state_61069__$1 = (function (){var statearr_61090 = state_61069;
(statearr_61090[(9)] = inst_60936__$1);

return statearr_61090;
})();
if(cljs.core.truth_(inst_60937)){
var statearr_61091_63138 = state_61069__$1;
(statearr_61091_63138[(1)] = (5));

} else {
var statearr_61092_63139 = state_61069__$1;
(statearr_61092_63139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (15))){
var inst_60948 = (state_61069[(13)]);
var inst_60946 = (state_61069[(14)]);
var inst_60947 = (state_61069[(15)]);
var inst_60945 = (state_61069[(17)]);
var inst_60963 = (state_61069[(2)]);
var inst_60964 = (inst_60948 + (1));
var tmp61086 = inst_60946;
var tmp61087 = inst_60947;
var tmp61088 = inst_60945;
var inst_60945__$1 = tmp61088;
var inst_60946__$1 = tmp61086;
var inst_60947__$1 = tmp61087;
var inst_60948__$1 = inst_60964;
var state_61069__$1 = (function (){var statearr_61093 = state_61069;
(statearr_61093[(13)] = inst_60948__$1);

(statearr_61093[(18)] = inst_60963);

(statearr_61093[(14)] = inst_60946__$1);

(statearr_61093[(15)] = inst_60947__$1);

(statearr_61093[(17)] = inst_60945__$1);

return statearr_61093;
})();
var statearr_61094_63147 = state_61069__$1;
(statearr_61094_63147[(2)] = null);

(statearr_61094_63147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (21))){
var inst_60990 = (state_61069[(2)]);
var state_61069__$1 = state_61069;
var statearr_61098_63148 = state_61069__$1;
(statearr_61098_63148[(2)] = inst_60990);

(statearr_61098_63148[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (31))){
var inst_61016 = (state_61069[(10)]);
var inst_61020 = done(null);
var inst_61021 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_61016);
var state_61069__$1 = (function (){var statearr_61099 = state_61069;
(statearr_61099[(19)] = inst_61020);

return statearr_61099;
})();
var statearr_61100_63150 = state_61069__$1;
(statearr_61100_63150[(2)] = inst_61021);

(statearr_61100_63150[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (32))){
var inst_61010 = (state_61069[(20)]);
var inst_61008 = (state_61069[(21)]);
var inst_61009 = (state_61069[(11)]);
var inst_61011 = (state_61069[(12)]);
var inst_61023 = (state_61069[(2)]);
var inst_61024 = (inst_61011 + (1));
var tmp61095 = inst_61010;
var tmp61096 = inst_61008;
var tmp61097 = inst_61009;
var inst_61008__$1 = tmp61096;
var inst_61009__$1 = tmp61097;
var inst_61010__$1 = tmp61095;
var inst_61011__$1 = inst_61024;
var state_61069__$1 = (function (){var statearr_61101 = state_61069;
(statearr_61101[(20)] = inst_61010__$1);

(statearr_61101[(21)] = inst_61008__$1);

(statearr_61101[(11)] = inst_61009__$1);

(statearr_61101[(12)] = inst_61011__$1);

(statearr_61101[(22)] = inst_61023);

return statearr_61101;
})();
var statearr_61102_63156 = state_61069__$1;
(statearr_61102_63156[(2)] = null);

(statearr_61102_63156[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (40))){
var inst_61036 = (state_61069[(23)]);
var inst_61041 = done(null);
var inst_61042 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_61036);
var state_61069__$1 = (function (){var statearr_61103 = state_61069;
(statearr_61103[(24)] = inst_61041);

return statearr_61103;
})();
var statearr_61107_63157 = state_61069__$1;
(statearr_61107_63157[(2)] = inst_61042);

(statearr_61107_63157[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (33))){
var inst_61027 = (state_61069[(25)]);
var inst_61029 = cljs.core.chunked_seq_QMARK_(inst_61027);
var state_61069__$1 = state_61069;
if(inst_61029){
var statearr_61108_63158 = state_61069__$1;
(statearr_61108_63158[(1)] = (36));

} else {
var statearr_61109_63159 = state_61069__$1;
(statearr_61109_63159[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (13))){
var inst_60957 = (state_61069[(26)]);
var inst_60960 = cljs.core.async.close_BANG_(inst_60957);
var state_61069__$1 = state_61069;
var statearr_61110_63160 = state_61069__$1;
(statearr_61110_63160[(2)] = inst_60960);

(statearr_61110_63160[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (22))){
var inst_60980 = (state_61069[(8)]);
var inst_60983 = cljs.core.async.close_BANG_(inst_60980);
var state_61069__$1 = state_61069;
var statearr_61111_63161 = state_61069__$1;
(statearr_61111_63161[(2)] = inst_60983);

(statearr_61111_63161[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (36))){
var inst_61027 = (state_61069[(25)]);
var inst_61031 = cljs.core.chunk_first(inst_61027);
var inst_61032 = cljs.core.chunk_rest(inst_61027);
var inst_61033 = cljs.core.count(inst_61031);
var inst_61008 = inst_61032;
var inst_61009 = inst_61031;
var inst_61010 = inst_61033;
var inst_61011 = (0);
var state_61069__$1 = (function (){var statearr_61112 = state_61069;
(statearr_61112[(20)] = inst_61010);

(statearr_61112[(21)] = inst_61008);

(statearr_61112[(11)] = inst_61009);

(statearr_61112[(12)] = inst_61011);

return statearr_61112;
})();
var statearr_61113_63164 = state_61069__$1;
(statearr_61113_63164[(2)] = null);

(statearr_61113_63164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (41))){
var inst_61027 = (state_61069[(25)]);
var inst_61044 = (state_61069[(2)]);
var inst_61045 = cljs.core.next(inst_61027);
var inst_61008 = inst_61045;
var inst_61009 = null;
var inst_61010 = (0);
var inst_61011 = (0);
var state_61069__$1 = (function (){var statearr_61114 = state_61069;
(statearr_61114[(20)] = inst_61010);

(statearr_61114[(21)] = inst_61008);

(statearr_61114[(11)] = inst_61009);

(statearr_61114[(27)] = inst_61044);

(statearr_61114[(12)] = inst_61011);

return statearr_61114;
})();
var statearr_61115_63166 = state_61069__$1;
(statearr_61115_63166[(2)] = null);

(statearr_61115_63166[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (43))){
var state_61069__$1 = state_61069;
var statearr_61116_63167 = state_61069__$1;
(statearr_61116_63167[(2)] = null);

(statearr_61116_63167[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (29))){
var inst_61053 = (state_61069[(2)]);
var state_61069__$1 = state_61069;
var statearr_61117_63168 = state_61069__$1;
(statearr_61117_63168[(2)] = inst_61053);

(statearr_61117_63168[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (44))){
var inst_61062 = (state_61069[(2)]);
var state_61069__$1 = (function (){var statearr_61118 = state_61069;
(statearr_61118[(28)] = inst_61062);

return statearr_61118;
})();
var statearr_61119_63169 = state_61069__$1;
(statearr_61119_63169[(2)] = null);

(statearr_61119_63169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (6))){
var inst_61000 = (state_61069[(29)]);
var inst_60999 = cljs.core.deref(cs);
var inst_61000__$1 = cljs.core.keys(inst_60999);
var inst_61001 = cljs.core.count(inst_61000__$1);
var inst_61002 = cljs.core.reset_BANG_(dctr,inst_61001);
var inst_61007 = cljs.core.seq(inst_61000__$1);
var inst_61008 = inst_61007;
var inst_61009 = null;
var inst_61010 = (0);
var inst_61011 = (0);
var state_61069__$1 = (function (){var statearr_61120 = state_61069;
(statearr_61120[(20)] = inst_61010);

(statearr_61120[(29)] = inst_61000__$1);

(statearr_61120[(21)] = inst_61008);

(statearr_61120[(30)] = inst_61002);

(statearr_61120[(11)] = inst_61009);

(statearr_61120[(12)] = inst_61011);

return statearr_61120;
})();
var statearr_61121_63189 = state_61069__$1;
(statearr_61121_63189[(2)] = null);

(statearr_61121_63189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (28))){
var inst_61008 = (state_61069[(21)]);
var inst_61027 = (state_61069[(25)]);
var inst_61027__$1 = cljs.core.seq(inst_61008);
var state_61069__$1 = (function (){var statearr_61123 = state_61069;
(statearr_61123[(25)] = inst_61027__$1);

return statearr_61123;
})();
if(inst_61027__$1){
var statearr_61124_63190 = state_61069__$1;
(statearr_61124_63190[(1)] = (33));

} else {
var statearr_61126_63191 = state_61069__$1;
(statearr_61126_63191[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (25))){
var inst_61010 = (state_61069[(20)]);
var inst_61011 = (state_61069[(12)]);
var inst_61013 = (inst_61011 < inst_61010);
var inst_61014 = inst_61013;
var state_61069__$1 = state_61069;
if(cljs.core.truth_(inst_61014)){
var statearr_61129_63192 = state_61069__$1;
(statearr_61129_63192[(1)] = (27));

} else {
var statearr_61130_63193 = state_61069__$1;
(statearr_61130_63193[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (34))){
var state_61069__$1 = state_61069;
var statearr_61131_63194 = state_61069__$1;
(statearr_61131_63194[(2)] = null);

(statearr_61131_63194[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (17))){
var state_61069__$1 = state_61069;
var statearr_61132_63195 = state_61069__$1;
(statearr_61132_63195[(2)] = null);

(statearr_61132_63195[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (3))){
var inst_61067 = (state_61069[(2)]);
var state_61069__$1 = state_61069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61069__$1,inst_61067);
} else {
if((state_val_61070 === (12))){
var inst_60995 = (state_61069[(2)]);
var state_61069__$1 = state_61069;
var statearr_61133_63196 = state_61069__$1;
(statearr_61133_63196[(2)] = inst_60995);

(statearr_61133_63196[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (2))){
var state_61069__$1 = state_61069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61069__$1,(4),ch);
} else {
if((state_val_61070 === (23))){
var state_61069__$1 = state_61069;
var statearr_61134_63197 = state_61069__$1;
(statearr_61134_63197[(2)] = null);

(statearr_61134_63197[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (35))){
var inst_61051 = (state_61069[(2)]);
var state_61069__$1 = state_61069;
var statearr_61135_63198 = state_61069__$1;
(statearr_61135_63198[(2)] = inst_61051);

(statearr_61135_63198[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (19))){
var inst_60967 = (state_61069[(7)]);
var inst_60971 = cljs.core.chunk_first(inst_60967);
var inst_60972 = cljs.core.chunk_rest(inst_60967);
var inst_60973 = cljs.core.count(inst_60971);
var inst_60945 = inst_60972;
var inst_60946 = inst_60971;
var inst_60947 = inst_60973;
var inst_60948 = (0);
var state_61069__$1 = (function (){var statearr_61136 = state_61069;
(statearr_61136[(13)] = inst_60948);

(statearr_61136[(14)] = inst_60946);

(statearr_61136[(15)] = inst_60947);

(statearr_61136[(17)] = inst_60945);

return statearr_61136;
})();
var statearr_61137_63200 = state_61069__$1;
(statearr_61137_63200[(2)] = null);

(statearr_61137_63200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (11))){
var inst_60967 = (state_61069[(7)]);
var inst_60945 = (state_61069[(17)]);
var inst_60967__$1 = cljs.core.seq(inst_60945);
var state_61069__$1 = (function (){var statearr_61138 = state_61069;
(statearr_61138[(7)] = inst_60967__$1);

return statearr_61138;
})();
if(inst_60967__$1){
var statearr_61139_63201 = state_61069__$1;
(statearr_61139_63201[(1)] = (16));

} else {
var statearr_61140_63202 = state_61069__$1;
(statearr_61140_63202[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (9))){
var inst_60997 = (state_61069[(2)]);
var state_61069__$1 = state_61069;
var statearr_61141_63204 = state_61069__$1;
(statearr_61141_63204[(2)] = inst_60997);

(statearr_61141_63204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (5))){
var inst_60943 = cljs.core.deref(cs);
var inst_60944 = cljs.core.seq(inst_60943);
var inst_60945 = inst_60944;
var inst_60946 = null;
var inst_60947 = (0);
var inst_60948 = (0);
var state_61069__$1 = (function (){var statearr_61142 = state_61069;
(statearr_61142[(13)] = inst_60948);

(statearr_61142[(14)] = inst_60946);

(statearr_61142[(15)] = inst_60947);

(statearr_61142[(17)] = inst_60945);

return statearr_61142;
})();
var statearr_61143_63206 = state_61069__$1;
(statearr_61143_63206[(2)] = null);

(statearr_61143_63206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (14))){
var state_61069__$1 = state_61069;
var statearr_61144_63207 = state_61069__$1;
(statearr_61144_63207[(2)] = null);

(statearr_61144_63207[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (45))){
var inst_61059 = (state_61069[(2)]);
var state_61069__$1 = state_61069;
var statearr_61145_63209 = state_61069__$1;
(statearr_61145_63209[(2)] = inst_61059);

(statearr_61145_63209[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (26))){
var inst_61000 = (state_61069[(29)]);
var inst_61055 = (state_61069[(2)]);
var inst_61056 = cljs.core.seq(inst_61000);
var state_61069__$1 = (function (){var statearr_61146 = state_61069;
(statearr_61146[(31)] = inst_61055);

return statearr_61146;
})();
if(inst_61056){
var statearr_61147_63215 = state_61069__$1;
(statearr_61147_63215[(1)] = (42));

} else {
var statearr_61148_63216 = state_61069__$1;
(statearr_61148_63216[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (16))){
var inst_60967 = (state_61069[(7)]);
var inst_60969 = cljs.core.chunked_seq_QMARK_(inst_60967);
var state_61069__$1 = state_61069;
if(inst_60969){
var statearr_61149_63217 = state_61069__$1;
(statearr_61149_63217[(1)] = (19));

} else {
var statearr_61150_63218 = state_61069__$1;
(statearr_61150_63218[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (38))){
var inst_61048 = (state_61069[(2)]);
var state_61069__$1 = state_61069;
var statearr_61151_63219 = state_61069__$1;
(statearr_61151_63219[(2)] = inst_61048);

(statearr_61151_63219[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (30))){
var state_61069__$1 = state_61069;
var statearr_61152_63221 = state_61069__$1;
(statearr_61152_63221[(2)] = null);

(statearr_61152_63221[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (10))){
var inst_60948 = (state_61069[(13)]);
var inst_60946 = (state_61069[(14)]);
var inst_60956 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_60946,inst_60948);
var inst_60957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60956,(0),null);
var inst_60958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60956,(1),null);
var state_61069__$1 = (function (){var statearr_61154 = state_61069;
(statearr_61154[(26)] = inst_60957);

return statearr_61154;
})();
if(cljs.core.truth_(inst_60958)){
var statearr_61155_63222 = state_61069__$1;
(statearr_61155_63222[(1)] = (13));

} else {
var statearr_61156_63223 = state_61069__$1;
(statearr_61156_63223[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (18))){
var inst_60993 = (state_61069[(2)]);
var state_61069__$1 = state_61069;
var statearr_61157_63224 = state_61069__$1;
(statearr_61157_63224[(2)] = inst_60993);

(statearr_61157_63224[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (42))){
var state_61069__$1 = state_61069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61069__$1,(45),dchan);
} else {
if((state_val_61070 === (37))){
var inst_60936 = (state_61069[(9)]);
var inst_61036 = (state_61069[(23)]);
var inst_61027 = (state_61069[(25)]);
var inst_61036__$1 = cljs.core.first(inst_61027);
var inst_61038 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_61036__$1,inst_60936,done);
var state_61069__$1 = (function (){var statearr_61158 = state_61069;
(statearr_61158[(23)] = inst_61036__$1);

return statearr_61158;
})();
if(cljs.core.truth_(inst_61038)){
var statearr_61159_63229 = state_61069__$1;
(statearr_61159_63229[(1)] = (39));

} else {
var statearr_61160_63230 = state_61069__$1;
(statearr_61160_63230[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61070 === (8))){
var inst_60948 = (state_61069[(13)]);
var inst_60947 = (state_61069[(15)]);
var inst_60950 = (inst_60948 < inst_60947);
var inst_60951 = inst_60950;
var state_61069__$1 = state_61069;
if(cljs.core.truth_(inst_60951)){
var statearr_61161_63231 = state_61069__$1;
(statearr_61161_63231[(1)] = (10));

} else {
var statearr_61162_63232 = state_61069__$1;
(statearr_61162_63232[(1)] = (11));

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
});})(c__60108__auto___63113,cs,m,dchan,dctr,done))
;
return ((function (switch__59851__auto__,c__60108__auto___63113,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__59852__auto__ = null;
var cljs$core$async$mult_$_state_machine__59852__auto____0 = (function (){
var statearr_61166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61166[(0)] = cljs$core$async$mult_$_state_machine__59852__auto__);

(statearr_61166[(1)] = (1));

return statearr_61166;
});
var cljs$core$async$mult_$_state_machine__59852__auto____1 = (function (state_61069){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_61069);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e61169){if((e61169 instanceof Object)){
var ex__59855__auto__ = e61169;
var statearr_61170_63234 = state_61069;
(statearr_61170_63234[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61169;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63235 = state_61069;
state_61069 = G__63235;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__59852__auto__ = function(state_61069){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__59852__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__59852__auto____1.call(this,state_61069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__59852__auto____0;
cljs$core$async$mult_$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__59852__auto____1;
return cljs$core$async$mult_$_state_machine__59852__auto__;
})()
;})(switch__59851__auto__,c__60108__auto___63113,cs,m,dchan,dctr,done))
})();
var state__60110__auto__ = (function (){var statearr_61173 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_61173[(6)] = c__60108__auto___63113);

return statearr_61173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(c__60108__auto___63113,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__61179 = arguments.length;
switch (G__61179) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63245 = arguments.length;
var i__4731__auto___63246 = (0);
while(true){
if((i__4731__auto___63246 < len__4730__auto___63245)){
args__4736__auto__.push((arguments[i__4731__auto___63246]));

var G__63247 = (i__4731__auto___63246 + (1));
i__4731__auto___63246 = G__63247;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__61208){
var map__61209 = p__61208;
var map__61209__$1 = (((((!((map__61209 == null))))?(((((map__61209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61209):map__61209);
var opts = map__61209__$1;
var statearr_61211_63249 = state;
(statearr_61211_63249[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__61209,map__61209__$1,opts){
return (function (val){
var statearr_61212_63250 = state;
(statearr_61212_63250[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__61209,map__61209__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_61213_63252 = state;
(statearr_61213_63252[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq61199){
var G__61200 = cljs.core.first(seq61199);
var seq61199__$1 = cljs.core.next(seq61199);
var G__61201 = cljs.core.first(seq61199__$1);
var seq61199__$2 = cljs.core.next(seq61199__$1);
var G__61202 = cljs.core.first(seq61199__$2);
var seq61199__$3 = cljs.core.next(seq61199__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61200,G__61201,G__61202,seq61199__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61218 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61218 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta61219){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta61219 = meta61219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_61220,meta61219__$1){
var self__ = this;
var _61220__$1 = this;
return (new cljs.core.async.t_cljs$core$async61218(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta61219__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61218.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_61220){
var self__ = this;
var _61220__$1 = this;
return self__.meta61219;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61218.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61218.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61218.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61218.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61218.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61218.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61218.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61218.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61218.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta61219","meta61219",-686380677,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async61218.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61218";

cljs.core.async.t_cljs$core$async61218.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async61218");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61218.
 */
cljs.core.async.__GT_t_cljs$core$async61218 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async61218(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta61219){
return (new cljs.core.async.t_cljs$core$async61218(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta61219));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async61218(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__60108__auto___63287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60108__auto___63287,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (c__60108__auto___63287,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_61364){
var state_val_61365 = (state_61364[(1)]);
if((state_val_61365 === (7))){
var inst_61276 = (state_61364[(2)]);
var state_61364__$1 = state_61364;
var statearr_61366_63294 = state_61364__$1;
(statearr_61366_63294[(2)] = inst_61276);

(statearr_61366_63294[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (20))){
var inst_61288 = (state_61364[(7)]);
var state_61364__$1 = state_61364;
var statearr_61367_63295 = state_61364__$1;
(statearr_61367_63295[(2)] = inst_61288);

(statearr_61367_63295[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (27))){
var state_61364__$1 = state_61364;
var statearr_61370_63296 = state_61364__$1;
(statearr_61370_63296[(2)] = null);

(statearr_61370_63296[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (1))){
var inst_61242 = (state_61364[(8)]);
var inst_61242__$1 = calc_state();
var inst_61244 = (inst_61242__$1 == null);
var inst_61245 = cljs.core.not(inst_61244);
var state_61364__$1 = (function (){var statearr_61375 = state_61364;
(statearr_61375[(8)] = inst_61242__$1);

return statearr_61375;
})();
if(inst_61245){
var statearr_61378_63305 = state_61364__$1;
(statearr_61378_63305[(1)] = (2));

} else {
var statearr_61379_63310 = state_61364__$1;
(statearr_61379_63310[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (24))){
var inst_61314 = (state_61364[(9)]);
var inst_61323 = (state_61364[(10)]);
var inst_61338 = (state_61364[(11)]);
var inst_61338__$1 = (inst_61314.cljs$core$IFn$_invoke$arity$1 ? inst_61314.cljs$core$IFn$_invoke$arity$1(inst_61323) : inst_61314.call(null,inst_61323));
var state_61364__$1 = (function (){var statearr_61380 = state_61364;
(statearr_61380[(11)] = inst_61338__$1);

return statearr_61380;
})();
if(cljs.core.truth_(inst_61338__$1)){
var statearr_61381_63323 = state_61364__$1;
(statearr_61381_63323[(1)] = (29));

} else {
var statearr_61382_63324 = state_61364__$1;
(statearr_61382_63324[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (4))){
var inst_61279 = (state_61364[(2)]);
var state_61364__$1 = state_61364;
if(cljs.core.truth_(inst_61279)){
var statearr_61394_63325 = state_61364__$1;
(statearr_61394_63325[(1)] = (8));

} else {
var statearr_61395_63326 = state_61364__$1;
(statearr_61395_63326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (15))){
var inst_61308 = (state_61364[(2)]);
var state_61364__$1 = state_61364;
if(cljs.core.truth_(inst_61308)){
var statearr_61397_63327 = state_61364__$1;
(statearr_61397_63327[(1)] = (19));

} else {
var statearr_61399_63331 = state_61364__$1;
(statearr_61399_63331[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (21))){
var inst_61313 = (state_61364[(12)]);
var inst_61313__$1 = (state_61364[(2)]);
var inst_61314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61313__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_61315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61313__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_61316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61313__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_61364__$1 = (function (){var statearr_61404 = state_61364;
(statearr_61404[(9)] = inst_61314);

(statearr_61404[(12)] = inst_61313__$1);

(statearr_61404[(13)] = inst_61315);

return statearr_61404;
})();
return cljs.core.async.ioc_alts_BANG_(state_61364__$1,(22),inst_61316);
} else {
if((state_val_61365 === (31))){
var inst_61346 = (state_61364[(2)]);
var state_61364__$1 = state_61364;
if(cljs.core.truth_(inst_61346)){
var statearr_61405_63335 = state_61364__$1;
(statearr_61405_63335[(1)] = (32));

} else {
var statearr_61406_63338 = state_61364__$1;
(statearr_61406_63338[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (32))){
var inst_61322 = (state_61364[(14)]);
var state_61364__$1 = state_61364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61364__$1,(35),out,inst_61322);
} else {
if((state_val_61365 === (33))){
var inst_61313 = (state_61364[(12)]);
var inst_61288 = inst_61313;
var state_61364__$1 = (function (){var statearr_61416 = state_61364;
(statearr_61416[(7)] = inst_61288);

return statearr_61416;
})();
var statearr_61417_63343 = state_61364__$1;
(statearr_61417_63343[(2)] = null);

(statearr_61417_63343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (13))){
var inst_61288 = (state_61364[(7)]);
var inst_61295 = inst_61288.cljs$lang$protocol_mask$partition0$;
var inst_61296 = (inst_61295 & (64));
var inst_61297 = inst_61288.cljs$core$ISeq$;
var inst_61298 = (cljs.core.PROTOCOL_SENTINEL === inst_61297);
var inst_61299 = ((inst_61296) || (inst_61298));
var state_61364__$1 = state_61364;
if(cljs.core.truth_(inst_61299)){
var statearr_61421_63345 = state_61364__$1;
(statearr_61421_63345[(1)] = (16));

} else {
var statearr_61422_63346 = state_61364__$1;
(statearr_61422_63346[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (22))){
var inst_61322 = (state_61364[(14)]);
var inst_61323 = (state_61364[(10)]);
var inst_61321 = (state_61364[(2)]);
var inst_61322__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61321,(0),null);
var inst_61323__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61321,(1),null);
var inst_61324 = (inst_61322__$1 == null);
var inst_61325 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_61323__$1,change);
var inst_61326 = ((inst_61324) || (inst_61325));
var state_61364__$1 = (function (){var statearr_61425 = state_61364;
(statearr_61425[(14)] = inst_61322__$1);

(statearr_61425[(10)] = inst_61323__$1);

return statearr_61425;
})();
if(cljs.core.truth_(inst_61326)){
var statearr_61427_63347 = state_61364__$1;
(statearr_61427_63347[(1)] = (23));

} else {
var statearr_61429_63348 = state_61364__$1;
(statearr_61429_63348[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (36))){
var inst_61313 = (state_61364[(12)]);
var inst_61288 = inst_61313;
var state_61364__$1 = (function (){var statearr_61431 = state_61364;
(statearr_61431[(7)] = inst_61288);

return statearr_61431;
})();
var statearr_61432_63352 = state_61364__$1;
(statearr_61432_63352[(2)] = null);

(statearr_61432_63352[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (29))){
var inst_61338 = (state_61364[(11)]);
var state_61364__$1 = state_61364;
var statearr_61435_63359 = state_61364__$1;
(statearr_61435_63359[(2)] = inst_61338);

(statearr_61435_63359[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (6))){
var state_61364__$1 = state_61364;
var statearr_61436_63360 = state_61364__$1;
(statearr_61436_63360[(2)] = false);

(statearr_61436_63360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (28))){
var inst_61334 = (state_61364[(2)]);
var inst_61335 = calc_state();
var inst_61288 = inst_61335;
var state_61364__$1 = (function (){var statearr_61437 = state_61364;
(statearr_61437[(15)] = inst_61334);

(statearr_61437[(7)] = inst_61288);

return statearr_61437;
})();
var statearr_61439_63362 = state_61364__$1;
(statearr_61439_63362[(2)] = null);

(statearr_61439_63362[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (25))){
var inst_61360 = (state_61364[(2)]);
var state_61364__$1 = state_61364;
var statearr_61440_63363 = state_61364__$1;
(statearr_61440_63363[(2)] = inst_61360);

(statearr_61440_63363[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (34))){
var inst_61358 = (state_61364[(2)]);
var state_61364__$1 = state_61364;
var statearr_61442_63370 = state_61364__$1;
(statearr_61442_63370[(2)] = inst_61358);

(statearr_61442_63370[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (17))){
var state_61364__$1 = state_61364;
var statearr_61443_63371 = state_61364__$1;
(statearr_61443_63371[(2)] = false);

(statearr_61443_63371[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (3))){
var state_61364__$1 = state_61364;
var statearr_61444_63372 = state_61364__$1;
(statearr_61444_63372[(2)] = false);

(statearr_61444_63372[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (12))){
var inst_61362 = (state_61364[(2)]);
var state_61364__$1 = state_61364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61364__$1,inst_61362);
} else {
if((state_val_61365 === (2))){
var inst_61242 = (state_61364[(8)]);
var inst_61268 = inst_61242.cljs$lang$protocol_mask$partition0$;
var inst_61269 = (inst_61268 & (64));
var inst_61270 = inst_61242.cljs$core$ISeq$;
var inst_61271 = (cljs.core.PROTOCOL_SENTINEL === inst_61270);
var inst_61272 = ((inst_61269) || (inst_61271));
var state_61364__$1 = state_61364;
if(cljs.core.truth_(inst_61272)){
var statearr_61447_63373 = state_61364__$1;
(statearr_61447_63373[(1)] = (5));

} else {
var statearr_61449_63374 = state_61364__$1;
(statearr_61449_63374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (23))){
var inst_61322 = (state_61364[(14)]);
var inst_61329 = (inst_61322 == null);
var state_61364__$1 = state_61364;
if(cljs.core.truth_(inst_61329)){
var statearr_61450_63375 = state_61364__$1;
(statearr_61450_63375[(1)] = (26));

} else {
var statearr_61451_63376 = state_61364__$1;
(statearr_61451_63376[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (35))){
var inst_61349 = (state_61364[(2)]);
var state_61364__$1 = state_61364;
if(cljs.core.truth_(inst_61349)){
var statearr_61452_63377 = state_61364__$1;
(statearr_61452_63377[(1)] = (36));

} else {
var statearr_61453_63378 = state_61364__$1;
(statearr_61453_63378[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (19))){
var inst_61288 = (state_61364[(7)]);
var inst_61310 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61288);
var state_61364__$1 = state_61364;
var statearr_61454_63379 = state_61364__$1;
(statearr_61454_63379[(2)] = inst_61310);

(statearr_61454_63379[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (11))){
var inst_61288 = (state_61364[(7)]);
var inst_61292 = (inst_61288 == null);
var inst_61293 = cljs.core.not(inst_61292);
var state_61364__$1 = state_61364;
if(inst_61293){
var statearr_61458_63380 = state_61364__$1;
(statearr_61458_63380[(1)] = (13));

} else {
var statearr_61459_63381 = state_61364__$1;
(statearr_61459_63381[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (9))){
var inst_61242 = (state_61364[(8)]);
var state_61364__$1 = state_61364;
var statearr_61460_63382 = state_61364__$1;
(statearr_61460_63382[(2)] = inst_61242);

(statearr_61460_63382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (5))){
var state_61364__$1 = state_61364;
var statearr_61461_63383 = state_61364__$1;
(statearr_61461_63383[(2)] = true);

(statearr_61461_63383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (14))){
var state_61364__$1 = state_61364;
var statearr_61462_63384 = state_61364__$1;
(statearr_61462_63384[(2)] = false);

(statearr_61462_63384[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (26))){
var inst_61323 = (state_61364[(10)]);
var inst_61331 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_61323);
var state_61364__$1 = state_61364;
var statearr_61463_63385 = state_61364__$1;
(statearr_61463_63385[(2)] = inst_61331);

(statearr_61463_63385[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (16))){
var state_61364__$1 = state_61364;
var statearr_61465_63392 = state_61364__$1;
(statearr_61465_63392[(2)] = true);

(statearr_61465_63392[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (38))){
var inst_61354 = (state_61364[(2)]);
var state_61364__$1 = state_61364;
var statearr_61467_63393 = state_61364__$1;
(statearr_61467_63393[(2)] = inst_61354);

(statearr_61467_63393[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (30))){
var inst_61314 = (state_61364[(9)]);
var inst_61323 = (state_61364[(10)]);
var inst_61315 = (state_61364[(13)]);
var inst_61341 = cljs.core.empty_QMARK_(inst_61314);
var inst_61342 = (inst_61315.cljs$core$IFn$_invoke$arity$1 ? inst_61315.cljs$core$IFn$_invoke$arity$1(inst_61323) : inst_61315.call(null,inst_61323));
var inst_61343 = cljs.core.not(inst_61342);
var inst_61344 = ((inst_61341) && (inst_61343));
var state_61364__$1 = state_61364;
var statearr_61468_63394 = state_61364__$1;
(statearr_61468_63394[(2)] = inst_61344);

(statearr_61468_63394[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (10))){
var inst_61242 = (state_61364[(8)]);
var inst_61284 = (state_61364[(2)]);
var inst_61285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61284,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_61286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61284,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_61287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61284,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_61288 = inst_61242;
var state_61364__$1 = (function (){var statearr_61469 = state_61364;
(statearr_61469[(16)] = inst_61287);

(statearr_61469[(17)] = inst_61286);

(statearr_61469[(7)] = inst_61288);

(statearr_61469[(18)] = inst_61285);

return statearr_61469;
})();
var statearr_61470_63395 = state_61364__$1;
(statearr_61470_63395[(2)] = null);

(statearr_61470_63395[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (18))){
var inst_61303 = (state_61364[(2)]);
var state_61364__$1 = state_61364;
var statearr_61475_63402 = state_61364__$1;
(statearr_61475_63402[(2)] = inst_61303);

(statearr_61475_63402[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (37))){
var state_61364__$1 = state_61364;
var statearr_61478_63403 = state_61364__$1;
(statearr_61478_63403[(2)] = null);

(statearr_61478_63403[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61365 === (8))){
var inst_61242 = (state_61364[(8)]);
var inst_61281 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_61242);
var state_61364__$1 = state_61364;
var statearr_61479_63404 = state_61364__$1;
(statearr_61479_63404[(2)] = inst_61281);

(statearr_61479_63404[(1)] = (10));


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
}
}
}
}
}
}
});})(c__60108__auto___63287,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__59851__auto__,c__60108__auto___63287,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__59852__auto__ = null;
var cljs$core$async$mix_$_state_machine__59852__auto____0 = (function (){
var statearr_61481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61481[(0)] = cljs$core$async$mix_$_state_machine__59852__auto__);

(statearr_61481[(1)] = (1));

return statearr_61481;
});
var cljs$core$async$mix_$_state_machine__59852__auto____1 = (function (state_61364){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_61364);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e61482){if((e61482 instanceof Object)){
var ex__59855__auto__ = e61482;
var statearr_61483_63405 = state_61364;
(statearr_61483_63405[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61482;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63406 = state_61364;
state_61364 = G__63406;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__59852__auto__ = function(state_61364){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__59852__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__59852__auto____1.call(this,state_61364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__59852__auto____0;
cljs$core$async$mix_$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__59852__auto____1;
return cljs$core$async$mix_$_state_machine__59852__auto__;
})()
;})(switch__59851__auto__,c__60108__auto___63287,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__60110__auto__ = (function (){var statearr_61486 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_61486[(6)] = c__60108__auto___63287);

return statearr_61486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(c__60108__auto___63287,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__61497 = arguments.length;
switch (G__61497) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__61504 = arguments.length;
switch (G__61504) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__61502_SHARP_){
if(cljs.core.truth_((p1__61502_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__61502_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__61502_SHARP_.call(null,topic)))){
return p1__61502_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__61502_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61507 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61507 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta61508){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta61508 = meta61508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_61509,meta61508__$1){
var self__ = this;
var _61509__$1 = this;
return (new cljs.core.async.t_cljs$core$async61507(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta61508__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61507.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_61509){
var self__ = this;
var _61509__$1 = this;
return self__.meta61508;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61507.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61507.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61507.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61507.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61507.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61507.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61507.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61507.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta61508","meta61508",1586778473,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async61507.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61507";

cljs.core.async.t_cljs$core$async61507.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async61507");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61507.
 */
cljs.core.async.__GT_t_cljs$core$async61507 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async61507(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta61508){
return (new cljs.core.async.t_cljs$core$async61507(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta61508));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async61507(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__60108__auto___63435 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60108__auto___63435,mults,ensure_mult,p){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (c__60108__auto___63435,mults,ensure_mult,p){
return (function (state_61593){
var state_val_61594 = (state_61593[(1)]);
if((state_val_61594 === (7))){
var inst_61589 = (state_61593[(2)]);
var state_61593__$1 = state_61593;
var statearr_61595_63439 = state_61593__$1;
(statearr_61595_63439[(2)] = inst_61589);

(statearr_61595_63439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61594 === (20))){
var state_61593__$1 = state_61593;
var statearr_61596_63440 = state_61593__$1;
(statearr_61596_63440[(2)] = null);

(statearr_61596_63440[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61594 === (1))){
var state_61593__$1 = state_61593;
var statearr_61599_63442 = state_61593__$1;
(statearr_61599_63442[(2)] = null);

(statearr_61599_63442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61594 === (24))){
var inst_61572 = (state_61593[(7)]);
var inst_61581 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_61572);
var state_61593__$1 = state_61593;
var statearr_61600_63443 = state_61593__$1;
(statearr_61600_63443[(2)] = inst_61581);

(statearr_61600_63443[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61594 === (4))){
var inst_61524 = (state_61593[(8)]);
var inst_61524__$1 = (state_61593[(2)]);
var inst_61525 = (inst_61524__$1 == null);
var state_61593__$1 = (function (){var statearr_61601 = state_61593;
(statearr_61601[(8)] = inst_61524__$1);

return statearr_61601;
})();
if(cljs.core.truth_(inst_61525)){
var statearr_61602_63444 = state_61593__$1;
(statearr_61602_63444[(1)] = (5));

} else {
var statearr_61603_63445 = state_61593__$1;
(statearr_61603_63445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61594 === (15))){
var inst_61566 = (state_61593[(2)]);
var state_61593__$1 = state_61593;
var statearr_61604_63446 = state_61593__$1;
(statearr_61604_63446[(2)] = inst_61566);

(statearr_61604_63446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61594 === (21))){
var inst_61586 = (state_61593[(2)]);
var state_61593__$1 = (function (){var statearr_61607 = state_61593;
(statearr_61607[(9)] = inst_61586);

return statearr_61607;
})();
var statearr_61610_63447 = state_61593__$1;
(statearr_61610_63447[(2)] = null);

(statearr_61610_63447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61594 === (13))){
var inst_61548 = (state_61593[(10)]);
var inst_61550 = cljs.core.chunked_seq_QMARK_(inst_61548);
var state_61593__$1 = state_61593;
if(inst_61550){
var statearr_61613_63448 = state_61593__$1;
(statearr_61613_63448[(1)] = (16));

} else {
var statearr_61615_63449 = state_61593__$1;
(statearr_61615_63449[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61594 === (22))){
var inst_61578 = (state_61593[(2)]);
var state_61593__$1 = state_61593;
if(cljs.core.truth_(inst_61578)){
var statearr_61618_63450 = state_61593__$1;
(statearr_61618_63450[(1)] = (23));

} else {
var statearr_61623_63451 = state_61593__$1;
(statearr_61623_63451[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61594 === (6))){
var inst_61574 = (state_61593[(11)]);
var inst_61524 = (state_61593[(8)]);
var inst_61572 = (state_61593[(7)]);
var inst_61572__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_61524) : topic_fn.call(null,inst_61524));
var inst_61573 = cljs.core.deref(mults);
var inst_61574__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_61573,inst_61572__$1);
var state_61593__$1 = (function (){var statearr_61624 = state_61593;
(statearr_61624[(11)] = inst_61574__$1);

(statearr_61624[(7)] = inst_61572__$1);

return statearr_61624;
})();
if(cljs.core.truth_(inst_61574__$1)){
var statearr_61625_63452 = state_61593__$1;
(statearr_61625_63452[(1)] = (19));

} else {
var statearr_61626_63453 = state_61593__$1;
(statearr_61626_63453[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61594 === (25))){
var inst_61583 = (state_61593[(2)]);
var state_61593__$1 = state_61593;
var statearr_61628_63454 = state_61593__$1;
(statearr_61628_63454[(2)] = inst_61583);

(statearr_61628_63454[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61594 === (17))){
var inst_61548 = (state_61593[(10)]);
var inst_61557 = cljs.core.first(inst_61548);
var inst_61558 = cljs.core.async.muxch_STAR_(inst_61557);
var inst_61559 = cljs.core.async.close_BANG_(inst_61558);
var inst_61560 = cljs.core.next(inst_61548);
var inst_61534 = inst_61560;
var inst_61535 = null;
var inst_61536 = (0);
var inst_61537 = (0);
var state_61593__$1 = (function (){var statearr_61629 = state_61593;
(statearr_61629[(12)] = inst_61537);

(statearr_61629[(13)] = inst_61535);

(statearr_61629[(14)] = inst_61534);

(statearr_61629[(15)] = inst_61536);

(statearr_61629[(16)] = inst_61559);

return statearr_61629;
})();
var statearr_61630_63455 = state_61593__$1;
(statearr_61630_63455[(2)] = null);

(statearr_61630_63455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61594 === (3))){
var inst_61591 = (state_61593[(2)]);
var state_61593__$1 = state_61593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61593__$1,inst_61591);
} else {
if((state_val_61594 === (12))){
var inst_61568 = (state_61593[(2)]);
var state_61593__$1 = state_61593;
var statearr_61631_63456 = state_61593__$1;
(statearr_61631_63456[(2)] = inst_61568);

(statearr_61631_63456[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61594 === (2))){
var state_61593__$1 = state_61593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61593__$1,(4),ch);
} else {
if((state_val_61594 === (23))){
var state_61593__$1 = state_61593;
var statearr_61632_63457 = state_61593__$1;
(statearr_61632_63457[(2)] = null);

(statearr_61632_63457[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61594 === (19))){
var inst_61574 = (state_61593[(11)]);
var inst_61524 = (state_61593[(8)]);
var inst_61576 = cljs.core.async.muxch_STAR_(inst_61574);
var state_61593__$1 = state_61593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61593__$1,(22),inst_61576,inst_61524);
} else {
if((state_val_61594 === (11))){
var inst_61534 = (state_61593[(14)]);
var inst_61548 = (state_61593[(10)]);
var inst_61548__$1 = cljs.core.seq(inst_61534);
var state_61593__$1 = (function (){var statearr_61633 = state_61593;
(statearr_61633[(10)] = inst_61548__$1);

return statearr_61633;
})();
if(inst_61548__$1){
var statearr_61634_63460 = state_61593__$1;
(statearr_61634_63460[(1)] = (13));

} else {
var statearr_61635_63461 = state_61593__$1;
(statearr_61635_63461[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61594 === (9))){
var inst_61570 = (state_61593[(2)]);
var state_61593__$1 = state_61593;
var statearr_61636_63462 = state_61593__$1;
(statearr_61636_63462[(2)] = inst_61570);

(statearr_61636_63462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61594 === (5))){
var inst_61531 = cljs.core.deref(mults);
var inst_61532 = cljs.core.vals(inst_61531);
var inst_61533 = cljs.core.seq(inst_61532);
var inst_61534 = inst_61533;
var inst_61535 = null;
var inst_61536 = (0);
var inst_61537 = (0);
var state_61593__$1 = (function (){var statearr_61645 = state_61593;
(statearr_61645[(12)] = inst_61537);

(statearr_61645[(13)] = inst_61535);

(statearr_61645[(14)] = inst_61534);

(statearr_61645[(15)] = inst_61536);

return statearr_61645;
})();
var statearr_61646_63465 = state_61593__$1;
(statearr_61646_63465[(2)] = null);

(statearr_61646_63465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61594 === (14))){
var state_61593__$1 = state_61593;
var statearr_61654_63467 = state_61593__$1;
(statearr_61654_63467[(2)] = null);

(statearr_61654_63467[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61594 === (16))){
var inst_61548 = (state_61593[(10)]);
var inst_61552 = cljs.core.chunk_first(inst_61548);
var inst_61553 = cljs.core.chunk_rest(inst_61548);
var inst_61554 = cljs.core.count(inst_61552);
var inst_61534 = inst_61553;
var inst_61535 = inst_61552;
var inst_61536 = inst_61554;
var inst_61537 = (0);
var state_61593__$1 = (function (){var statearr_61655 = state_61593;
(statearr_61655[(12)] = inst_61537);

(statearr_61655[(13)] = inst_61535);

(statearr_61655[(14)] = inst_61534);

(statearr_61655[(15)] = inst_61536);

return statearr_61655;
})();
var statearr_61656_63469 = state_61593__$1;
(statearr_61656_63469[(2)] = null);

(statearr_61656_63469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61594 === (10))){
var inst_61537 = (state_61593[(12)]);
var inst_61535 = (state_61593[(13)]);
var inst_61534 = (state_61593[(14)]);
var inst_61536 = (state_61593[(15)]);
var inst_61542 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_61535,inst_61537);
var inst_61543 = cljs.core.async.muxch_STAR_(inst_61542);
var inst_61544 = cljs.core.async.close_BANG_(inst_61543);
var inst_61545 = (inst_61537 + (1));
var tmp61647 = inst_61535;
var tmp61648 = inst_61534;
var tmp61649 = inst_61536;
var inst_61534__$1 = tmp61648;
var inst_61535__$1 = tmp61647;
var inst_61536__$1 = tmp61649;
var inst_61537__$1 = inst_61545;
var state_61593__$1 = (function (){var statearr_61657 = state_61593;
(statearr_61657[(12)] = inst_61537__$1);

(statearr_61657[(13)] = inst_61535__$1);

(statearr_61657[(14)] = inst_61534__$1);

(statearr_61657[(15)] = inst_61536__$1);

(statearr_61657[(17)] = inst_61544);

return statearr_61657;
})();
var statearr_61658_63470 = state_61593__$1;
(statearr_61658_63470[(2)] = null);

(statearr_61658_63470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61594 === (18))){
var inst_61563 = (state_61593[(2)]);
var state_61593__$1 = state_61593;
var statearr_61659_63471 = state_61593__$1;
(statearr_61659_63471[(2)] = inst_61563);

(statearr_61659_63471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61594 === (8))){
var inst_61537 = (state_61593[(12)]);
var inst_61536 = (state_61593[(15)]);
var inst_61539 = (inst_61537 < inst_61536);
var inst_61540 = inst_61539;
var state_61593__$1 = state_61593;
if(cljs.core.truth_(inst_61540)){
var statearr_61660_63473 = state_61593__$1;
(statearr_61660_63473[(1)] = (10));

} else {
var statearr_61661_63474 = state_61593__$1;
(statearr_61661_63474[(1)] = (11));

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
}
}
}
}
}
}
}
}
}
});})(c__60108__auto___63435,mults,ensure_mult,p))
;
return ((function (switch__59851__auto__,c__60108__auto___63435,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__59852__auto__ = null;
var cljs$core$async$state_machine__59852__auto____0 = (function (){
var statearr_61662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61662[(0)] = cljs$core$async$state_machine__59852__auto__);

(statearr_61662[(1)] = (1));

return statearr_61662;
});
var cljs$core$async$state_machine__59852__auto____1 = (function (state_61593){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_61593);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e61663){if((e61663 instanceof Object)){
var ex__59855__auto__ = e61663;
var statearr_61664_63486 = state_61593;
(statearr_61664_63486[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61663;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63488 = state_61593;
state_61593 = G__63488;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
cljs$core$async$state_machine__59852__auto__ = function(state_61593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59852__auto____1.call(this,state_61593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59852__auto____0;
cljs$core$async$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59852__auto____1;
return cljs$core$async$state_machine__59852__auto__;
})()
;})(switch__59851__auto__,c__60108__auto___63435,mults,ensure_mult,p))
})();
var state__60110__auto__ = (function (){var statearr_61665 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_61665[(6)] = c__60108__auto___63435);

return statearr_61665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(c__60108__auto___63435,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__61667 = arguments.length;
switch (G__61667) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__61670 = arguments.length;
switch (G__61670) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__61685 = arguments.length;
switch (G__61685) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__60108__auto___63512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60108__auto___63512,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (c__60108__auto___63512,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_61734){
var state_val_61735 = (state_61734[(1)]);
if((state_val_61735 === (7))){
var state_61734__$1 = state_61734;
var statearr_61737_63520 = state_61734__$1;
(statearr_61737_63520[(2)] = null);

(statearr_61737_63520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61735 === (1))){
var state_61734__$1 = state_61734;
var statearr_61738_63525 = state_61734__$1;
(statearr_61738_63525[(2)] = null);

(statearr_61738_63525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61735 === (4))){
var inst_61695 = (state_61734[(7)]);
var inst_61697 = (inst_61695 < cnt);
var state_61734__$1 = state_61734;
if(cljs.core.truth_(inst_61697)){
var statearr_61739_63533 = state_61734__$1;
(statearr_61739_63533[(1)] = (6));

} else {
var statearr_61740_63534 = state_61734__$1;
(statearr_61740_63534[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61735 === (15))){
var inst_61730 = (state_61734[(2)]);
var state_61734__$1 = state_61734;
var statearr_61745_63538 = state_61734__$1;
(statearr_61745_63538[(2)] = inst_61730);

(statearr_61745_63538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61735 === (13))){
var inst_61723 = cljs.core.async.close_BANG_(out);
var state_61734__$1 = state_61734;
var statearr_61746_63539 = state_61734__$1;
(statearr_61746_63539[(2)] = inst_61723);

(statearr_61746_63539[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61735 === (6))){
var state_61734__$1 = state_61734;
var statearr_61749_63540 = state_61734__$1;
(statearr_61749_63540[(2)] = null);

(statearr_61749_63540[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61735 === (3))){
var inst_61732 = (state_61734[(2)]);
var state_61734__$1 = state_61734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61734__$1,inst_61732);
} else {
if((state_val_61735 === (12))){
var inst_61720 = (state_61734[(8)]);
var inst_61720__$1 = (state_61734[(2)]);
var inst_61721 = cljs.core.some(cljs.core.nil_QMARK_,inst_61720__$1);
var state_61734__$1 = (function (){var statearr_61754 = state_61734;
(statearr_61754[(8)] = inst_61720__$1);

return statearr_61754;
})();
if(cljs.core.truth_(inst_61721)){
var statearr_61755_63542 = state_61734__$1;
(statearr_61755_63542[(1)] = (13));

} else {
var statearr_61756_63543 = state_61734__$1;
(statearr_61756_63543[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61735 === (2))){
var inst_61694 = cljs.core.reset_BANG_(dctr,cnt);
var inst_61695 = (0);
var state_61734__$1 = (function (){var statearr_61757 = state_61734;
(statearr_61757[(9)] = inst_61694);

(statearr_61757[(7)] = inst_61695);

return statearr_61757;
})();
var statearr_61758_63544 = state_61734__$1;
(statearr_61758_63544[(2)] = null);

(statearr_61758_63544[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61735 === (11))){
var inst_61695 = (state_61734[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_61734,(10),Object,null,(9));
var inst_61707 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_61695) : chs__$1.call(null,inst_61695));
var inst_61708 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_61695) : done.call(null,inst_61695));
var inst_61709 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_61707,inst_61708);
var state_61734__$1 = state_61734;
var statearr_61761_63545 = state_61734__$1;
(statearr_61761_63545[(2)] = inst_61709);


cljs.core.async.impl.ioc_helpers.process_exception(state_61734__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61735 === (9))){
var inst_61695 = (state_61734[(7)]);
var inst_61711 = (state_61734[(2)]);
var inst_61712 = (inst_61695 + (1));
var inst_61695__$1 = inst_61712;
var state_61734__$1 = (function (){var statearr_61762 = state_61734;
(statearr_61762[(10)] = inst_61711);

(statearr_61762[(7)] = inst_61695__$1);

return statearr_61762;
})();
var statearr_61765_63546 = state_61734__$1;
(statearr_61765_63546[(2)] = null);

(statearr_61765_63546[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61735 === (5))){
var inst_61718 = (state_61734[(2)]);
var state_61734__$1 = (function (){var statearr_61766 = state_61734;
(statearr_61766[(11)] = inst_61718);

return statearr_61766;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61734__$1,(12),dchan);
} else {
if((state_val_61735 === (14))){
var inst_61720 = (state_61734[(8)]);
var inst_61725 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_61720);
var state_61734__$1 = state_61734;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61734__$1,(16),out,inst_61725);
} else {
if((state_val_61735 === (16))){
var inst_61727 = (state_61734[(2)]);
var state_61734__$1 = (function (){var statearr_61772 = state_61734;
(statearr_61772[(12)] = inst_61727);

return statearr_61772;
})();
var statearr_61776_63547 = state_61734__$1;
(statearr_61776_63547[(2)] = null);

(statearr_61776_63547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61735 === (10))){
var inst_61702 = (state_61734[(2)]);
var inst_61703 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_61734__$1 = (function (){var statearr_61777 = state_61734;
(statearr_61777[(13)] = inst_61702);

return statearr_61777;
})();
var statearr_61778_63548 = state_61734__$1;
(statearr_61778_63548[(2)] = inst_61703);


cljs.core.async.impl.ioc_helpers.process_exception(state_61734__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61735 === (8))){
var inst_61716 = (state_61734[(2)]);
var state_61734__$1 = state_61734;
var statearr_61780_63549 = state_61734__$1;
(statearr_61780_63549[(2)] = inst_61716);

(statearr_61780_63549[(1)] = (5));


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
});})(c__60108__auto___63512,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__59851__auto__,c__60108__auto___63512,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__59852__auto__ = null;
var cljs$core$async$state_machine__59852__auto____0 = (function (){
var statearr_61787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61787[(0)] = cljs$core$async$state_machine__59852__auto__);

(statearr_61787[(1)] = (1));

return statearr_61787;
});
var cljs$core$async$state_machine__59852__auto____1 = (function (state_61734){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_61734);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e61788){if((e61788 instanceof Object)){
var ex__59855__auto__ = e61788;
var statearr_61789_63551 = state_61734;
(statearr_61789_63551[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61788;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63552 = state_61734;
state_61734 = G__63552;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
cljs$core$async$state_machine__59852__auto__ = function(state_61734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59852__auto____1.call(this,state_61734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59852__auto____0;
cljs$core$async$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59852__auto____1;
return cljs$core$async$state_machine__59852__auto__;
})()
;})(switch__59851__auto__,c__60108__auto___63512,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__60110__auto__ = (function (){var statearr_61792 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_61792[(6)] = c__60108__auto___63512);

return statearr_61792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(c__60108__auto___63512,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__61805 = arguments.length;
switch (G__61805) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__60108__auto___63554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60108__auto___63554,out){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (c__60108__auto___63554,out){
return (function (state_61837){
var state_val_61838 = (state_61837[(1)]);
if((state_val_61838 === (7))){
var inst_61817 = (state_61837[(7)]);
var inst_61816 = (state_61837[(8)]);
var inst_61816__$1 = (state_61837[(2)]);
var inst_61817__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61816__$1,(0),null);
var inst_61818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61816__$1,(1),null);
var inst_61819 = (inst_61817__$1 == null);
var state_61837__$1 = (function (){var statearr_61840 = state_61837;
(statearr_61840[(7)] = inst_61817__$1);

(statearr_61840[(8)] = inst_61816__$1);

(statearr_61840[(9)] = inst_61818);

return statearr_61840;
})();
if(cljs.core.truth_(inst_61819)){
var statearr_61841_63555 = state_61837__$1;
(statearr_61841_63555[(1)] = (8));

} else {
var statearr_61842_63556 = state_61837__$1;
(statearr_61842_63556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61838 === (1))){
var inst_61806 = cljs.core.vec(chs);
var inst_61807 = inst_61806;
var state_61837__$1 = (function (){var statearr_61844 = state_61837;
(statearr_61844[(10)] = inst_61807);

return statearr_61844;
})();
var statearr_61845_63557 = state_61837__$1;
(statearr_61845_63557[(2)] = null);

(statearr_61845_63557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61838 === (4))){
var inst_61807 = (state_61837[(10)]);
var state_61837__$1 = state_61837;
return cljs.core.async.ioc_alts_BANG_(state_61837__$1,(7),inst_61807);
} else {
if((state_val_61838 === (6))){
var inst_61833 = (state_61837[(2)]);
var state_61837__$1 = state_61837;
var statearr_61848_63563 = state_61837__$1;
(statearr_61848_63563[(2)] = inst_61833);

(statearr_61848_63563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61838 === (3))){
var inst_61835 = (state_61837[(2)]);
var state_61837__$1 = state_61837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61837__$1,inst_61835);
} else {
if((state_val_61838 === (2))){
var inst_61807 = (state_61837[(10)]);
var inst_61809 = cljs.core.count(inst_61807);
var inst_61810 = (inst_61809 > (0));
var state_61837__$1 = state_61837;
if(cljs.core.truth_(inst_61810)){
var statearr_61850_63574 = state_61837__$1;
(statearr_61850_63574[(1)] = (4));

} else {
var statearr_61851_63575 = state_61837__$1;
(statearr_61851_63575[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61838 === (11))){
var inst_61807 = (state_61837[(10)]);
var inst_61826 = (state_61837[(2)]);
var tmp61849 = inst_61807;
var inst_61807__$1 = tmp61849;
var state_61837__$1 = (function (){var statearr_61853 = state_61837;
(statearr_61853[(11)] = inst_61826);

(statearr_61853[(10)] = inst_61807__$1);

return statearr_61853;
})();
var statearr_61854_63602 = state_61837__$1;
(statearr_61854_63602[(2)] = null);

(statearr_61854_63602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61838 === (9))){
var inst_61817 = (state_61837[(7)]);
var state_61837__$1 = state_61837;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61837__$1,(11),out,inst_61817);
} else {
if((state_val_61838 === (5))){
var inst_61831 = cljs.core.async.close_BANG_(out);
var state_61837__$1 = state_61837;
var statearr_61856_63603 = state_61837__$1;
(statearr_61856_63603[(2)] = inst_61831);

(statearr_61856_63603[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61838 === (10))){
var inst_61829 = (state_61837[(2)]);
var state_61837__$1 = state_61837;
var statearr_61857_63604 = state_61837__$1;
(statearr_61857_63604[(2)] = inst_61829);

(statearr_61857_63604[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61838 === (8))){
var inst_61807 = (state_61837[(10)]);
var inst_61817 = (state_61837[(7)]);
var inst_61816 = (state_61837[(8)]);
var inst_61818 = (state_61837[(9)]);
var inst_61821 = (function (){var cs = inst_61807;
var vec__61812 = inst_61816;
var v = inst_61817;
var c = inst_61818;
return ((function (cs,vec__61812,v,c,inst_61807,inst_61817,inst_61816,inst_61818,state_val_61838,c__60108__auto___63554,out){
return (function (p1__61803_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__61803_SHARP_);
});
;})(cs,vec__61812,v,c,inst_61807,inst_61817,inst_61816,inst_61818,state_val_61838,c__60108__auto___63554,out))
})();
var inst_61822 = cljs.core.filterv(inst_61821,inst_61807);
var inst_61807__$1 = inst_61822;
var state_61837__$1 = (function (){var statearr_61858 = state_61837;
(statearr_61858[(10)] = inst_61807__$1);

return statearr_61858;
})();
var statearr_61859_63605 = state_61837__$1;
(statearr_61859_63605[(2)] = null);

(statearr_61859_63605[(1)] = (2));


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
});})(c__60108__auto___63554,out))
;
return ((function (switch__59851__auto__,c__60108__auto___63554,out){
return (function() {
var cljs$core$async$state_machine__59852__auto__ = null;
var cljs$core$async$state_machine__59852__auto____0 = (function (){
var statearr_61862 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61862[(0)] = cljs$core$async$state_machine__59852__auto__);

(statearr_61862[(1)] = (1));

return statearr_61862;
});
var cljs$core$async$state_machine__59852__auto____1 = (function (state_61837){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_61837);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e61863){if((e61863 instanceof Object)){
var ex__59855__auto__ = e61863;
var statearr_61864_63642 = state_61837;
(statearr_61864_63642[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61863;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63647 = state_61837;
state_61837 = G__63647;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
cljs$core$async$state_machine__59852__auto__ = function(state_61837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59852__auto____1.call(this,state_61837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59852__auto____0;
cljs$core$async$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59852__auto____1;
return cljs$core$async$state_machine__59852__auto__;
})()
;})(switch__59851__auto__,c__60108__auto___63554,out))
})();
var state__60110__auto__ = (function (){var statearr_61865 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_61865[(6)] = c__60108__auto___63554);

return statearr_61865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(c__60108__auto___63554,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__61867 = arguments.length;
switch (G__61867) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__60108__auto___63649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60108__auto___63649,out){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (c__60108__auto___63649,out){
return (function (state_61892){
var state_val_61893 = (state_61892[(1)]);
if((state_val_61893 === (7))){
var inst_61874 = (state_61892[(7)]);
var inst_61874__$1 = (state_61892[(2)]);
var inst_61875 = (inst_61874__$1 == null);
var inst_61876 = cljs.core.not(inst_61875);
var state_61892__$1 = (function (){var statearr_61894 = state_61892;
(statearr_61894[(7)] = inst_61874__$1);

return statearr_61894;
})();
if(inst_61876){
var statearr_61895_63662 = state_61892__$1;
(statearr_61895_63662[(1)] = (8));

} else {
var statearr_61896_63664 = state_61892__$1;
(statearr_61896_63664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61893 === (1))){
var inst_61869 = (0);
var state_61892__$1 = (function (){var statearr_61897 = state_61892;
(statearr_61897[(8)] = inst_61869);

return statearr_61897;
})();
var statearr_61898_63665 = state_61892__$1;
(statearr_61898_63665[(2)] = null);

(statearr_61898_63665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61893 === (4))){
var state_61892__$1 = state_61892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61892__$1,(7),ch);
} else {
if((state_val_61893 === (6))){
var inst_61887 = (state_61892[(2)]);
var state_61892__$1 = state_61892;
var statearr_61899_63667 = state_61892__$1;
(statearr_61899_63667[(2)] = inst_61887);

(statearr_61899_63667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61893 === (3))){
var inst_61889 = (state_61892[(2)]);
var inst_61890 = cljs.core.async.close_BANG_(out);
var state_61892__$1 = (function (){var statearr_61900 = state_61892;
(statearr_61900[(9)] = inst_61889);

return statearr_61900;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_61892__$1,inst_61890);
} else {
if((state_val_61893 === (2))){
var inst_61869 = (state_61892[(8)]);
var inst_61871 = (inst_61869 < n);
var state_61892__$1 = state_61892;
if(cljs.core.truth_(inst_61871)){
var statearr_61901_63669 = state_61892__$1;
(statearr_61901_63669[(1)] = (4));

} else {
var statearr_61902_63670 = state_61892__$1;
(statearr_61902_63670[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61893 === (11))){
var inst_61869 = (state_61892[(8)]);
var inst_61879 = (state_61892[(2)]);
var inst_61880 = (inst_61869 + (1));
var inst_61869__$1 = inst_61880;
var state_61892__$1 = (function (){var statearr_61903 = state_61892;
(statearr_61903[(10)] = inst_61879);

(statearr_61903[(8)] = inst_61869__$1);

return statearr_61903;
})();
var statearr_61904_63671 = state_61892__$1;
(statearr_61904_63671[(2)] = null);

(statearr_61904_63671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61893 === (9))){
var state_61892__$1 = state_61892;
var statearr_61905_63672 = state_61892__$1;
(statearr_61905_63672[(2)] = null);

(statearr_61905_63672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61893 === (5))){
var state_61892__$1 = state_61892;
var statearr_61906_63697 = state_61892__$1;
(statearr_61906_63697[(2)] = null);

(statearr_61906_63697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61893 === (10))){
var inst_61884 = (state_61892[(2)]);
var state_61892__$1 = state_61892;
var statearr_61907_63705 = state_61892__$1;
(statearr_61907_63705[(2)] = inst_61884);

(statearr_61907_63705[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61893 === (8))){
var inst_61874 = (state_61892[(7)]);
var state_61892__$1 = state_61892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61892__$1,(11),out,inst_61874);
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
});})(c__60108__auto___63649,out))
;
return ((function (switch__59851__auto__,c__60108__auto___63649,out){
return (function() {
var cljs$core$async$state_machine__59852__auto__ = null;
var cljs$core$async$state_machine__59852__auto____0 = (function (){
var statearr_61908 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61908[(0)] = cljs$core$async$state_machine__59852__auto__);

(statearr_61908[(1)] = (1));

return statearr_61908;
});
var cljs$core$async$state_machine__59852__auto____1 = (function (state_61892){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_61892);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e61909){if((e61909 instanceof Object)){
var ex__59855__auto__ = e61909;
var statearr_61910_63724 = state_61892;
(statearr_61910_63724[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61909;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63725 = state_61892;
state_61892 = G__63725;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
cljs$core$async$state_machine__59852__auto__ = function(state_61892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59852__auto____1.call(this,state_61892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59852__auto____0;
cljs$core$async$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59852__auto____1;
return cljs$core$async$state_machine__59852__auto__;
})()
;})(switch__59851__auto__,c__60108__auto___63649,out))
})();
var state__60110__auto__ = (function (){var statearr_61911 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_61911[(6)] = c__60108__auto___63649);

return statearr_61911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(c__60108__auto___63649,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61920 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61920 = (function (f,ch,meta61921){
this.f = f;
this.ch = ch;
this.meta61921 = meta61921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61922,meta61921__$1){
var self__ = this;
var _61922__$1 = this;
return (new cljs.core.async.t_cljs$core$async61920(self__.f,self__.ch,meta61921__$1));
});

cljs.core.async.t_cljs$core$async61920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61922){
var self__ = this;
var _61922__$1 = this;
return self__.meta61921;
});

cljs.core.async.t_cljs$core$async61920.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61920.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async61920.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async61920.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61920.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61951 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61951 = (function (f,ch,meta61921,_,fn1,meta61952){
this.f = f;
this.ch = ch;
this.meta61921 = meta61921;
this._ = _;
this.fn1 = fn1;
this.meta61952 = meta61952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_61953,meta61952__$1){
var self__ = this;
var _61953__$1 = this;
return (new cljs.core.async.t_cljs$core$async61951(self__.f,self__.ch,self__.meta61921,self__._,self__.fn1,meta61952__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async61951.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_61953){
var self__ = this;
var _61953__$1 = this;
return self__.meta61952;
});})(___$1))
;

cljs.core.async.t_cljs$core$async61951.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61951.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async61951.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async61951.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__61918_SHARP_){
var G__61959 = (((p1__61918_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__61918_SHARP_) : self__.f.call(null,p1__61918_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__61959) : f1.call(null,G__61959));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async61951.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61921","meta61921",2001586826,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async61920","cljs.core.async/t_cljs$core$async61920",1601040963,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta61952","meta61952",-1401395641,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async61951.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61951.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61951";

cljs.core.async.t_cljs$core$async61951.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async61951");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61951.
 */
cljs.core.async.__GT_t_cljs$core$async61951 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async61951(f__$1,ch__$1,meta61921__$1,___$2,fn1__$1,meta61952){
return (new cljs.core.async.t_cljs$core$async61951(f__$1,ch__$1,meta61921__$1,___$2,fn1__$1,meta61952));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async61951(self__.f,self__.ch,self__.meta61921,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__61963 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__61963) : self__.f.call(null,G__61963));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async61920.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61920.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async61920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61921","meta61921",2001586826,null)], null);
});

cljs.core.async.t_cljs$core$async61920.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61920";

cljs.core.async.t_cljs$core$async61920.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async61920");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61920.
 */
cljs.core.async.__GT_t_cljs$core$async61920 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async61920(f__$1,ch__$1,meta61921){
return (new cljs.core.async.t_cljs$core$async61920(f__$1,ch__$1,meta61921));
});

}

return (new cljs.core.async.t_cljs$core$async61920(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61968 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61968 = (function (f,ch,meta61969){
this.f = f;
this.ch = ch;
this.meta61969 = meta61969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61970,meta61969__$1){
var self__ = this;
var _61970__$1 = this;
return (new cljs.core.async.t_cljs$core$async61968(self__.f,self__.ch,meta61969__$1));
});

cljs.core.async.t_cljs$core$async61968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61970){
var self__ = this;
var _61970__$1 = this;
return self__.meta61969;
});

cljs.core.async.t_cljs$core$async61968.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61968.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async61968.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61968.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async61968.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61968.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async61968.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61969","meta61969",1902471371,null)], null);
});

cljs.core.async.t_cljs$core$async61968.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61968";

cljs.core.async.t_cljs$core$async61968.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async61968");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61968.
 */
cljs.core.async.__GT_t_cljs$core$async61968 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async61968(f__$1,ch__$1,meta61969){
return (new cljs.core.async.t_cljs$core$async61968(f__$1,ch__$1,meta61969));
});

}

return (new cljs.core.async.t_cljs$core$async61968(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61973 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61973 = (function (p,ch,meta61974){
this.p = p;
this.ch = ch;
this.meta61974 = meta61974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61975,meta61974__$1){
var self__ = this;
var _61975__$1 = this;
return (new cljs.core.async.t_cljs$core$async61973(self__.p,self__.ch,meta61974__$1));
});

cljs.core.async.t_cljs$core$async61973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61975){
var self__ = this;
var _61975__$1 = this;
return self__.meta61974;
});

cljs.core.async.t_cljs$core$async61973.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61973.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async61973.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async61973.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61973.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async61973.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61973.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async61973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61974","meta61974",1396285358,null)], null);
});

cljs.core.async.t_cljs$core$async61973.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61973";

cljs.core.async.t_cljs$core$async61973.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async61973");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61973.
 */
cljs.core.async.__GT_t_cljs$core$async61973 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async61973(p__$1,ch__$1,meta61974){
return (new cljs.core.async.t_cljs$core$async61973(p__$1,ch__$1,meta61974));
});

}

return (new cljs.core.async.t_cljs$core$async61973(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__61983 = arguments.length;
switch (G__61983) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__60108__auto___63741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60108__auto___63741,out){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (c__60108__auto___63741,out){
return (function (state_62014){
var state_val_62015 = (state_62014[(1)]);
if((state_val_62015 === (7))){
var inst_62009 = (state_62014[(2)]);
var state_62014__$1 = state_62014;
var statearr_62016_63742 = state_62014__$1;
(statearr_62016_63742[(2)] = inst_62009);

(statearr_62016_63742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62015 === (1))){
var state_62014__$1 = state_62014;
var statearr_62018_63743 = state_62014__$1;
(statearr_62018_63743[(2)] = null);

(statearr_62018_63743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62015 === (4))){
var inst_61989 = (state_62014[(7)]);
var inst_61989__$1 = (state_62014[(2)]);
var inst_61990 = (inst_61989__$1 == null);
var state_62014__$1 = (function (){var statearr_62023 = state_62014;
(statearr_62023[(7)] = inst_61989__$1);

return statearr_62023;
})();
if(cljs.core.truth_(inst_61990)){
var statearr_62024_63744 = state_62014__$1;
(statearr_62024_63744[(1)] = (5));

} else {
var statearr_62025_63745 = state_62014__$1;
(statearr_62025_63745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62015 === (6))){
var inst_61989 = (state_62014[(7)]);
var inst_61994 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_61989) : p.call(null,inst_61989));
var state_62014__$1 = state_62014;
if(cljs.core.truth_(inst_61994)){
var statearr_62029_63746 = state_62014__$1;
(statearr_62029_63746[(1)] = (8));

} else {
var statearr_62030_63747 = state_62014__$1;
(statearr_62030_63747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62015 === (3))){
var inst_62011 = (state_62014[(2)]);
var state_62014__$1 = state_62014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62014__$1,inst_62011);
} else {
if((state_val_62015 === (2))){
var state_62014__$1 = state_62014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62014__$1,(4),ch);
} else {
if((state_val_62015 === (11))){
var inst_61999 = (state_62014[(2)]);
var state_62014__$1 = state_62014;
var statearr_62031_63748 = state_62014__$1;
(statearr_62031_63748[(2)] = inst_61999);

(statearr_62031_63748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62015 === (9))){
var state_62014__$1 = state_62014;
var statearr_62035_63749 = state_62014__$1;
(statearr_62035_63749[(2)] = null);

(statearr_62035_63749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62015 === (5))){
var inst_61992 = cljs.core.async.close_BANG_(out);
var state_62014__$1 = state_62014;
var statearr_62036_63750 = state_62014__$1;
(statearr_62036_63750[(2)] = inst_61992);

(statearr_62036_63750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62015 === (10))){
var inst_62002 = (state_62014[(2)]);
var state_62014__$1 = (function (){var statearr_62037 = state_62014;
(statearr_62037[(8)] = inst_62002);

return statearr_62037;
})();
var statearr_62038_63751 = state_62014__$1;
(statearr_62038_63751[(2)] = null);

(statearr_62038_63751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62015 === (8))){
var inst_61989 = (state_62014[(7)]);
var state_62014__$1 = state_62014;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62014__$1,(11),out,inst_61989);
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
});})(c__60108__auto___63741,out))
;
return ((function (switch__59851__auto__,c__60108__auto___63741,out){
return (function() {
var cljs$core$async$state_machine__59852__auto__ = null;
var cljs$core$async$state_machine__59852__auto____0 = (function (){
var statearr_62041 = [null,null,null,null,null,null,null,null,null];
(statearr_62041[(0)] = cljs$core$async$state_machine__59852__auto__);

(statearr_62041[(1)] = (1));

return statearr_62041;
});
var cljs$core$async$state_machine__59852__auto____1 = (function (state_62014){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_62014);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e62043){if((e62043 instanceof Object)){
var ex__59855__auto__ = e62043;
var statearr_62044_63752 = state_62014;
(statearr_62044_63752[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62043;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63753 = state_62014;
state_62014 = G__63753;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
cljs$core$async$state_machine__59852__auto__ = function(state_62014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59852__auto____1.call(this,state_62014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59852__auto____0;
cljs$core$async$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59852__auto____1;
return cljs$core$async$state_machine__59852__auto__;
})()
;})(switch__59851__auto__,c__60108__auto___63741,out))
})();
var state__60110__auto__ = (function (){var statearr_62047 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_62047[(6)] = c__60108__auto___63741);

return statearr_62047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(c__60108__auto___63741,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__62050 = arguments.length;
switch (G__62050) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__60108__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60108__auto__){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (c__60108__auto__){
return (function (state_62126){
var state_val_62127 = (state_62126[(1)]);
if((state_val_62127 === (7))){
var inst_62122 = (state_62126[(2)]);
var state_62126__$1 = state_62126;
var statearr_62135_63755 = state_62126__$1;
(statearr_62135_63755[(2)] = inst_62122);

(statearr_62135_63755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62127 === (20))){
var inst_62092 = (state_62126[(7)]);
var inst_62103 = (state_62126[(2)]);
var inst_62104 = cljs.core.next(inst_62092);
var inst_62074 = inst_62104;
var inst_62075 = null;
var inst_62076 = (0);
var inst_62077 = (0);
var state_62126__$1 = (function (){var statearr_62139 = state_62126;
(statearr_62139[(8)] = inst_62103);

(statearr_62139[(9)] = inst_62077);

(statearr_62139[(10)] = inst_62076);

(statearr_62139[(11)] = inst_62074);

(statearr_62139[(12)] = inst_62075);

return statearr_62139;
})();
var statearr_62140_63757 = state_62126__$1;
(statearr_62140_63757[(2)] = null);

(statearr_62140_63757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62127 === (1))){
var state_62126__$1 = state_62126;
var statearr_62141_63758 = state_62126__$1;
(statearr_62141_63758[(2)] = null);

(statearr_62141_63758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62127 === (4))){
var inst_62062 = (state_62126[(13)]);
var inst_62062__$1 = (state_62126[(2)]);
var inst_62063 = (inst_62062__$1 == null);
var state_62126__$1 = (function (){var statearr_62142 = state_62126;
(statearr_62142[(13)] = inst_62062__$1);

return statearr_62142;
})();
if(cljs.core.truth_(inst_62063)){
var statearr_62143_63759 = state_62126__$1;
(statearr_62143_63759[(1)] = (5));

} else {
var statearr_62144_63760 = state_62126__$1;
(statearr_62144_63760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62127 === (15))){
var state_62126__$1 = state_62126;
var statearr_62148_63761 = state_62126__$1;
(statearr_62148_63761[(2)] = null);

(statearr_62148_63761[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62127 === (21))){
var state_62126__$1 = state_62126;
var statearr_62149_63762 = state_62126__$1;
(statearr_62149_63762[(2)] = null);

(statearr_62149_63762[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62127 === (13))){
var inst_62077 = (state_62126[(9)]);
var inst_62076 = (state_62126[(10)]);
var inst_62074 = (state_62126[(11)]);
var inst_62075 = (state_62126[(12)]);
var inst_62088 = (state_62126[(2)]);
var inst_62089 = (inst_62077 + (1));
var tmp62145 = inst_62076;
var tmp62146 = inst_62074;
var tmp62147 = inst_62075;
var inst_62074__$1 = tmp62146;
var inst_62075__$1 = tmp62147;
var inst_62076__$1 = tmp62145;
var inst_62077__$1 = inst_62089;
var state_62126__$1 = (function (){var statearr_62150 = state_62126;
(statearr_62150[(9)] = inst_62077__$1);

(statearr_62150[(10)] = inst_62076__$1);

(statearr_62150[(14)] = inst_62088);

(statearr_62150[(11)] = inst_62074__$1);

(statearr_62150[(12)] = inst_62075__$1);

return statearr_62150;
})();
var statearr_62151_63763 = state_62126__$1;
(statearr_62151_63763[(2)] = null);

(statearr_62151_63763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62127 === (22))){
var state_62126__$1 = state_62126;
var statearr_62152_63764 = state_62126__$1;
(statearr_62152_63764[(2)] = null);

(statearr_62152_63764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62127 === (6))){
var inst_62062 = (state_62126[(13)]);
var inst_62072 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_62062) : f.call(null,inst_62062));
var inst_62073 = cljs.core.seq(inst_62072);
var inst_62074 = inst_62073;
var inst_62075 = null;
var inst_62076 = (0);
var inst_62077 = (0);
var state_62126__$1 = (function (){var statearr_62153 = state_62126;
(statearr_62153[(9)] = inst_62077);

(statearr_62153[(10)] = inst_62076);

(statearr_62153[(11)] = inst_62074);

(statearr_62153[(12)] = inst_62075);

return statearr_62153;
})();
var statearr_62154_63765 = state_62126__$1;
(statearr_62154_63765[(2)] = null);

(statearr_62154_63765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62127 === (17))){
var inst_62092 = (state_62126[(7)]);
var inst_62096 = cljs.core.chunk_first(inst_62092);
var inst_62097 = cljs.core.chunk_rest(inst_62092);
var inst_62098 = cljs.core.count(inst_62096);
var inst_62074 = inst_62097;
var inst_62075 = inst_62096;
var inst_62076 = inst_62098;
var inst_62077 = (0);
var state_62126__$1 = (function (){var statearr_62158 = state_62126;
(statearr_62158[(9)] = inst_62077);

(statearr_62158[(10)] = inst_62076);

(statearr_62158[(11)] = inst_62074);

(statearr_62158[(12)] = inst_62075);

return statearr_62158;
})();
var statearr_62159_63766 = state_62126__$1;
(statearr_62159_63766[(2)] = null);

(statearr_62159_63766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62127 === (3))){
var inst_62124 = (state_62126[(2)]);
var state_62126__$1 = state_62126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62126__$1,inst_62124);
} else {
if((state_val_62127 === (12))){
var inst_62112 = (state_62126[(2)]);
var state_62126__$1 = state_62126;
var statearr_62167_63767 = state_62126__$1;
(statearr_62167_63767[(2)] = inst_62112);

(statearr_62167_63767[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62127 === (2))){
var state_62126__$1 = state_62126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62126__$1,(4),in$);
} else {
if((state_val_62127 === (23))){
var inst_62120 = (state_62126[(2)]);
var state_62126__$1 = state_62126;
var statearr_62170_63768 = state_62126__$1;
(statearr_62170_63768[(2)] = inst_62120);

(statearr_62170_63768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62127 === (19))){
var inst_62107 = (state_62126[(2)]);
var state_62126__$1 = state_62126;
var statearr_62172_63771 = state_62126__$1;
(statearr_62172_63771[(2)] = inst_62107);

(statearr_62172_63771[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62127 === (11))){
var inst_62074 = (state_62126[(11)]);
var inst_62092 = (state_62126[(7)]);
var inst_62092__$1 = cljs.core.seq(inst_62074);
var state_62126__$1 = (function (){var statearr_62173 = state_62126;
(statearr_62173[(7)] = inst_62092__$1);

return statearr_62173;
})();
if(inst_62092__$1){
var statearr_62178_63772 = state_62126__$1;
(statearr_62178_63772[(1)] = (14));

} else {
var statearr_62179_63773 = state_62126__$1;
(statearr_62179_63773[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62127 === (9))){
var inst_62114 = (state_62126[(2)]);
var inst_62115 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_62126__$1 = (function (){var statearr_62180 = state_62126;
(statearr_62180[(15)] = inst_62114);

return statearr_62180;
})();
if(cljs.core.truth_(inst_62115)){
var statearr_62185_63774 = state_62126__$1;
(statearr_62185_63774[(1)] = (21));

} else {
var statearr_62186_63775 = state_62126__$1;
(statearr_62186_63775[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62127 === (5))){
var inst_62065 = cljs.core.async.close_BANG_(out);
var state_62126__$1 = state_62126;
var statearr_62187_63777 = state_62126__$1;
(statearr_62187_63777[(2)] = inst_62065);

(statearr_62187_63777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62127 === (14))){
var inst_62092 = (state_62126[(7)]);
var inst_62094 = cljs.core.chunked_seq_QMARK_(inst_62092);
var state_62126__$1 = state_62126;
if(inst_62094){
var statearr_62192_63778 = state_62126__$1;
(statearr_62192_63778[(1)] = (17));

} else {
var statearr_62193_63779 = state_62126__$1;
(statearr_62193_63779[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62127 === (16))){
var inst_62110 = (state_62126[(2)]);
var state_62126__$1 = state_62126;
var statearr_62194_63780 = state_62126__$1;
(statearr_62194_63780[(2)] = inst_62110);

(statearr_62194_63780[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62127 === (10))){
var inst_62077 = (state_62126[(9)]);
var inst_62075 = (state_62126[(12)]);
var inst_62086 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_62075,inst_62077);
var state_62126__$1 = state_62126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62126__$1,(13),out,inst_62086);
} else {
if((state_val_62127 === (18))){
var inst_62092 = (state_62126[(7)]);
var inst_62101 = cljs.core.first(inst_62092);
var state_62126__$1 = state_62126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62126__$1,(20),out,inst_62101);
} else {
if((state_val_62127 === (8))){
var inst_62077 = (state_62126[(9)]);
var inst_62076 = (state_62126[(10)]);
var inst_62083 = (inst_62077 < inst_62076);
var inst_62084 = inst_62083;
var state_62126__$1 = state_62126;
if(cljs.core.truth_(inst_62084)){
var statearr_62195_63785 = state_62126__$1;
(statearr_62195_63785[(1)] = (10));

} else {
var statearr_62199_63786 = state_62126__$1;
(statearr_62199_63786[(1)] = (11));

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
}
}
}
}
}
}
}
});})(c__60108__auto__))
;
return ((function (switch__59851__auto__,c__60108__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__59852__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__59852__auto____0 = (function (){
var statearr_62200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62200[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__59852__auto__);

(statearr_62200[(1)] = (1));

return statearr_62200;
});
var cljs$core$async$mapcat_STAR__$_state_machine__59852__auto____1 = (function (state_62126){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_62126);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e62201){if((e62201 instanceof Object)){
var ex__59855__auto__ = e62201;
var statearr_62202_63789 = state_62126;
(statearr_62202_63789[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62201;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63790 = state_62126;
state_62126 = G__63790;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__59852__auto__ = function(state_62126){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__59852__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__59852__auto____1.call(this,state_62126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__59852__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__59852__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__59852__auto__;
})()
;})(switch__59851__auto__,c__60108__auto__))
})();
var state__60110__auto__ = (function (){var statearr_62207 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_62207[(6)] = c__60108__auto__);

return statearr_62207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(c__60108__auto__))
);

return c__60108__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__62214 = arguments.length;
switch (G__62214) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__62221 = arguments.length;
switch (G__62221) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__62223 = arguments.length;
switch (G__62223) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__60108__auto___63801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60108__auto___63801,out){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (c__60108__auto___63801,out){
return (function (state_62255){
var state_val_62256 = (state_62255[(1)]);
if((state_val_62256 === (7))){
var inst_62250 = (state_62255[(2)]);
var state_62255__$1 = state_62255;
var statearr_62261_63802 = state_62255__$1;
(statearr_62261_63802[(2)] = inst_62250);

(statearr_62261_63802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62256 === (1))){
var inst_62228 = null;
var state_62255__$1 = (function (){var statearr_62262 = state_62255;
(statearr_62262[(7)] = inst_62228);

return statearr_62262;
})();
var statearr_62263_63808 = state_62255__$1;
(statearr_62263_63808[(2)] = null);

(statearr_62263_63808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62256 === (4))){
var inst_62235 = (state_62255[(8)]);
var inst_62235__$1 = (state_62255[(2)]);
var inst_62236 = (inst_62235__$1 == null);
var inst_62237 = cljs.core.not(inst_62236);
var state_62255__$1 = (function (){var statearr_62265 = state_62255;
(statearr_62265[(8)] = inst_62235__$1);

return statearr_62265;
})();
if(inst_62237){
var statearr_62266_63818 = state_62255__$1;
(statearr_62266_63818[(1)] = (5));

} else {
var statearr_62267_63819 = state_62255__$1;
(statearr_62267_63819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62256 === (6))){
var state_62255__$1 = state_62255;
var statearr_62271_63820 = state_62255__$1;
(statearr_62271_63820[(2)] = null);

(statearr_62271_63820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62256 === (3))){
var inst_62252 = (state_62255[(2)]);
var inst_62253 = cljs.core.async.close_BANG_(out);
var state_62255__$1 = (function (){var statearr_62272 = state_62255;
(statearr_62272[(9)] = inst_62252);

return statearr_62272;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62255__$1,inst_62253);
} else {
if((state_val_62256 === (2))){
var state_62255__$1 = state_62255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62255__$1,(4),ch);
} else {
if((state_val_62256 === (11))){
var inst_62235 = (state_62255[(8)]);
var inst_62244 = (state_62255[(2)]);
var inst_62228 = inst_62235;
var state_62255__$1 = (function (){var statearr_62276 = state_62255;
(statearr_62276[(10)] = inst_62244);

(statearr_62276[(7)] = inst_62228);

return statearr_62276;
})();
var statearr_62277_63831 = state_62255__$1;
(statearr_62277_63831[(2)] = null);

(statearr_62277_63831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62256 === (9))){
var inst_62235 = (state_62255[(8)]);
var state_62255__$1 = state_62255;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62255__$1,(11),out,inst_62235);
} else {
if((state_val_62256 === (5))){
var inst_62228 = (state_62255[(7)]);
var inst_62235 = (state_62255[(8)]);
var inst_62239 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62235,inst_62228);
var state_62255__$1 = state_62255;
if(inst_62239){
var statearr_62279_63846 = state_62255__$1;
(statearr_62279_63846[(1)] = (8));

} else {
var statearr_62280_63847 = state_62255__$1;
(statearr_62280_63847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62256 === (10))){
var inst_62247 = (state_62255[(2)]);
var state_62255__$1 = state_62255;
var statearr_62281_63849 = state_62255__$1;
(statearr_62281_63849[(2)] = inst_62247);

(statearr_62281_63849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62256 === (8))){
var inst_62228 = (state_62255[(7)]);
var tmp62278 = inst_62228;
var inst_62228__$1 = tmp62278;
var state_62255__$1 = (function (){var statearr_62284 = state_62255;
(statearr_62284[(7)] = inst_62228__$1);

return statearr_62284;
})();
var statearr_62286_63892 = state_62255__$1;
(statearr_62286_63892[(2)] = null);

(statearr_62286_63892[(1)] = (2));


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
});})(c__60108__auto___63801,out))
;
return ((function (switch__59851__auto__,c__60108__auto___63801,out){
return (function() {
var cljs$core$async$state_machine__59852__auto__ = null;
var cljs$core$async$state_machine__59852__auto____0 = (function (){
var statearr_62287 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62287[(0)] = cljs$core$async$state_machine__59852__auto__);

(statearr_62287[(1)] = (1));

return statearr_62287;
});
var cljs$core$async$state_machine__59852__auto____1 = (function (state_62255){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_62255);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e62290){if((e62290 instanceof Object)){
var ex__59855__auto__ = e62290;
var statearr_62292_63904 = state_62255;
(statearr_62292_63904[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62290;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63905 = state_62255;
state_62255 = G__63905;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
cljs$core$async$state_machine__59852__auto__ = function(state_62255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59852__auto____1.call(this,state_62255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59852__auto____0;
cljs$core$async$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59852__auto____1;
return cljs$core$async$state_machine__59852__auto__;
})()
;})(switch__59851__auto__,c__60108__auto___63801,out))
})();
var state__60110__auto__ = (function (){var statearr_62295 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_62295[(6)] = c__60108__auto___63801);

return statearr_62295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(c__60108__auto___63801,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__62299 = arguments.length;
switch (G__62299) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__60108__auto___63927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60108__auto___63927,out){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (c__60108__auto___63927,out){
return (function (state_62341){
var state_val_62342 = (state_62341[(1)]);
if((state_val_62342 === (7))){
var inst_62337 = (state_62341[(2)]);
var state_62341__$1 = state_62341;
var statearr_62345_63928 = state_62341__$1;
(statearr_62345_63928[(2)] = inst_62337);

(statearr_62345_63928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62342 === (1))){
var inst_62301 = (new Array(n));
var inst_62302 = inst_62301;
var inst_62303 = (0);
var state_62341__$1 = (function (){var statearr_62347 = state_62341;
(statearr_62347[(7)] = inst_62302);

(statearr_62347[(8)] = inst_62303);

return statearr_62347;
})();
var statearr_62348_63933 = state_62341__$1;
(statearr_62348_63933[(2)] = null);

(statearr_62348_63933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62342 === (4))){
var inst_62306 = (state_62341[(9)]);
var inst_62306__$1 = (state_62341[(2)]);
var inst_62307 = (inst_62306__$1 == null);
var inst_62308 = cljs.core.not(inst_62307);
var state_62341__$1 = (function (){var statearr_62350 = state_62341;
(statearr_62350[(9)] = inst_62306__$1);

return statearr_62350;
})();
if(inst_62308){
var statearr_62352_63936 = state_62341__$1;
(statearr_62352_63936[(1)] = (5));

} else {
var statearr_62354_63937 = state_62341__$1;
(statearr_62354_63937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62342 === (15))){
var inst_62331 = (state_62341[(2)]);
var state_62341__$1 = state_62341;
var statearr_62355_63938 = state_62341__$1;
(statearr_62355_63938[(2)] = inst_62331);

(statearr_62355_63938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62342 === (13))){
var state_62341__$1 = state_62341;
var statearr_62359_63940 = state_62341__$1;
(statearr_62359_63940[(2)] = null);

(statearr_62359_63940[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62342 === (6))){
var inst_62303 = (state_62341[(8)]);
var inst_62327 = (inst_62303 > (0));
var state_62341__$1 = state_62341;
if(cljs.core.truth_(inst_62327)){
var statearr_62364_63941 = state_62341__$1;
(statearr_62364_63941[(1)] = (12));

} else {
var statearr_62366_63942 = state_62341__$1;
(statearr_62366_63942[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62342 === (3))){
var inst_62339 = (state_62341[(2)]);
var state_62341__$1 = state_62341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62341__$1,inst_62339);
} else {
if((state_val_62342 === (12))){
var inst_62302 = (state_62341[(7)]);
var inst_62329 = cljs.core.vec(inst_62302);
var state_62341__$1 = state_62341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62341__$1,(15),out,inst_62329);
} else {
if((state_val_62342 === (2))){
var state_62341__$1 = state_62341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62341__$1,(4),ch);
} else {
if((state_val_62342 === (11))){
var inst_62320 = (state_62341[(2)]);
var inst_62322 = (new Array(n));
var inst_62302 = inst_62322;
var inst_62303 = (0);
var state_62341__$1 = (function (){var statearr_62375 = state_62341;
(statearr_62375[(7)] = inst_62302);

(statearr_62375[(10)] = inst_62320);

(statearr_62375[(8)] = inst_62303);

return statearr_62375;
})();
var statearr_62376_63949 = state_62341__$1;
(statearr_62376_63949[(2)] = null);

(statearr_62376_63949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62342 === (9))){
var inst_62302 = (state_62341[(7)]);
var inst_62318 = cljs.core.vec(inst_62302);
var state_62341__$1 = state_62341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62341__$1,(11),out,inst_62318);
} else {
if((state_val_62342 === (5))){
var inst_62302 = (state_62341[(7)]);
var inst_62303 = (state_62341[(8)]);
var inst_62313 = (state_62341[(11)]);
var inst_62306 = (state_62341[(9)]);
var inst_62310 = (inst_62302[inst_62303] = inst_62306);
var inst_62313__$1 = (inst_62303 + (1));
var inst_62314 = (inst_62313__$1 < n);
var state_62341__$1 = (function (){var statearr_62377 = state_62341;
(statearr_62377[(11)] = inst_62313__$1);

(statearr_62377[(12)] = inst_62310);

return statearr_62377;
})();
if(cljs.core.truth_(inst_62314)){
var statearr_62378_63950 = state_62341__$1;
(statearr_62378_63950[(1)] = (8));

} else {
var statearr_62379_63951 = state_62341__$1;
(statearr_62379_63951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62342 === (14))){
var inst_62334 = (state_62341[(2)]);
var inst_62335 = cljs.core.async.close_BANG_(out);
var state_62341__$1 = (function (){var statearr_62381 = state_62341;
(statearr_62381[(13)] = inst_62334);

return statearr_62381;
})();
var statearr_62382_63952 = state_62341__$1;
(statearr_62382_63952[(2)] = inst_62335);

(statearr_62382_63952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62342 === (10))){
var inst_62325 = (state_62341[(2)]);
var state_62341__$1 = state_62341;
var statearr_62383_63953 = state_62341__$1;
(statearr_62383_63953[(2)] = inst_62325);

(statearr_62383_63953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62342 === (8))){
var inst_62302 = (state_62341[(7)]);
var inst_62313 = (state_62341[(11)]);
var tmp62380 = inst_62302;
var inst_62302__$1 = tmp62380;
var inst_62303 = inst_62313;
var state_62341__$1 = (function (){var statearr_62384 = state_62341;
(statearr_62384[(7)] = inst_62302__$1);

(statearr_62384[(8)] = inst_62303);

return statearr_62384;
})();
var statearr_62385_63954 = state_62341__$1;
(statearr_62385_63954[(2)] = null);

(statearr_62385_63954[(1)] = (2));


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
});})(c__60108__auto___63927,out))
;
return ((function (switch__59851__auto__,c__60108__auto___63927,out){
return (function() {
var cljs$core$async$state_machine__59852__auto__ = null;
var cljs$core$async$state_machine__59852__auto____0 = (function (){
var statearr_62386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62386[(0)] = cljs$core$async$state_machine__59852__auto__);

(statearr_62386[(1)] = (1));

return statearr_62386;
});
var cljs$core$async$state_machine__59852__auto____1 = (function (state_62341){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_62341);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e62387){if((e62387 instanceof Object)){
var ex__59855__auto__ = e62387;
var statearr_62388_63955 = state_62341;
(statearr_62388_63955[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62387;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63956 = state_62341;
state_62341 = G__63956;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
cljs$core$async$state_machine__59852__auto__ = function(state_62341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59852__auto____1.call(this,state_62341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59852__auto____0;
cljs$core$async$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59852__auto____1;
return cljs$core$async$state_machine__59852__auto__;
})()
;})(switch__59851__auto__,c__60108__auto___63927,out))
})();
var state__60110__auto__ = (function (){var statearr_62389 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_62389[(6)] = c__60108__auto___63927);

return statearr_62389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(c__60108__auto___63927,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__62391 = arguments.length;
switch (G__62391) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__60108__auto___63958 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60108__auto___63958,out){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (c__60108__auto___63958,out){
return (function (state_62433){
var state_val_62434 = (state_62433[(1)]);
if((state_val_62434 === (7))){
var inst_62429 = (state_62433[(2)]);
var state_62433__$1 = state_62433;
var statearr_62435_63959 = state_62433__$1;
(statearr_62435_63959[(2)] = inst_62429);

(statearr_62435_63959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62434 === (1))){
var inst_62392 = [];
var inst_62393 = inst_62392;
var inst_62394 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_62433__$1 = (function (){var statearr_62436 = state_62433;
(statearr_62436[(7)] = inst_62394);

(statearr_62436[(8)] = inst_62393);

return statearr_62436;
})();
var statearr_62437_63961 = state_62433__$1;
(statearr_62437_63961[(2)] = null);

(statearr_62437_63961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62434 === (4))){
var inst_62397 = (state_62433[(9)]);
var inst_62397__$1 = (state_62433[(2)]);
var inst_62398 = (inst_62397__$1 == null);
var inst_62399 = cljs.core.not(inst_62398);
var state_62433__$1 = (function (){var statearr_62438 = state_62433;
(statearr_62438[(9)] = inst_62397__$1);

return statearr_62438;
})();
if(inst_62399){
var statearr_62439_63962 = state_62433__$1;
(statearr_62439_63962[(1)] = (5));

} else {
var statearr_62440_63963 = state_62433__$1;
(statearr_62440_63963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62434 === (15))){
var inst_62423 = (state_62433[(2)]);
var state_62433__$1 = state_62433;
var statearr_62441_63964 = state_62433__$1;
(statearr_62441_63964[(2)] = inst_62423);

(statearr_62441_63964[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62434 === (13))){
var state_62433__$1 = state_62433;
var statearr_62442_63966 = state_62433__$1;
(statearr_62442_63966[(2)] = null);

(statearr_62442_63966[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62434 === (6))){
var inst_62393 = (state_62433[(8)]);
var inst_62418 = inst_62393.length;
var inst_62419 = (inst_62418 > (0));
var state_62433__$1 = state_62433;
if(cljs.core.truth_(inst_62419)){
var statearr_62443_63971 = state_62433__$1;
(statearr_62443_63971[(1)] = (12));

} else {
var statearr_62444_63972 = state_62433__$1;
(statearr_62444_63972[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62434 === (3))){
var inst_62431 = (state_62433[(2)]);
var state_62433__$1 = state_62433;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62433__$1,inst_62431);
} else {
if((state_val_62434 === (12))){
var inst_62393 = (state_62433[(8)]);
var inst_62421 = cljs.core.vec(inst_62393);
var state_62433__$1 = state_62433;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62433__$1,(15),out,inst_62421);
} else {
if((state_val_62434 === (2))){
var state_62433__$1 = state_62433;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62433__$1,(4),ch);
} else {
if((state_val_62434 === (11))){
var inst_62397 = (state_62433[(9)]);
var inst_62401 = (state_62433[(10)]);
var inst_62411 = (state_62433[(2)]);
var inst_62412 = [];
var inst_62413 = inst_62412.push(inst_62397);
var inst_62393 = inst_62412;
var inst_62394 = inst_62401;
var state_62433__$1 = (function (){var statearr_62445 = state_62433;
(statearr_62445[(11)] = inst_62413);

(statearr_62445[(7)] = inst_62394);

(statearr_62445[(8)] = inst_62393);

(statearr_62445[(12)] = inst_62411);

return statearr_62445;
})();
var statearr_62446_63974 = state_62433__$1;
(statearr_62446_63974[(2)] = null);

(statearr_62446_63974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62434 === (9))){
var inst_62393 = (state_62433[(8)]);
var inst_62409 = cljs.core.vec(inst_62393);
var state_62433__$1 = state_62433;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62433__$1,(11),out,inst_62409);
} else {
if((state_val_62434 === (5))){
var inst_62397 = (state_62433[(9)]);
var inst_62394 = (state_62433[(7)]);
var inst_62401 = (state_62433[(10)]);
var inst_62401__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_62397) : f.call(null,inst_62397));
var inst_62402 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62401__$1,inst_62394);
var inst_62403 = cljs.core.keyword_identical_QMARK_(inst_62394,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_62404 = ((inst_62402) || (inst_62403));
var state_62433__$1 = (function (){var statearr_62447 = state_62433;
(statearr_62447[(10)] = inst_62401__$1);

return statearr_62447;
})();
if(cljs.core.truth_(inst_62404)){
var statearr_62448_63980 = state_62433__$1;
(statearr_62448_63980[(1)] = (8));

} else {
var statearr_62449_63981 = state_62433__$1;
(statearr_62449_63981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62434 === (14))){
var inst_62426 = (state_62433[(2)]);
var inst_62427 = cljs.core.async.close_BANG_(out);
var state_62433__$1 = (function (){var statearr_62451 = state_62433;
(statearr_62451[(13)] = inst_62426);

return statearr_62451;
})();
var statearr_62452_63982 = state_62433__$1;
(statearr_62452_63982[(2)] = inst_62427);

(statearr_62452_63982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62434 === (10))){
var inst_62416 = (state_62433[(2)]);
var state_62433__$1 = state_62433;
var statearr_62453_63983 = state_62433__$1;
(statearr_62453_63983[(2)] = inst_62416);

(statearr_62453_63983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62434 === (8))){
var inst_62397 = (state_62433[(9)]);
var inst_62393 = (state_62433[(8)]);
var inst_62401 = (state_62433[(10)]);
var inst_62406 = inst_62393.push(inst_62397);
var tmp62450 = inst_62393;
var inst_62393__$1 = tmp62450;
var inst_62394 = inst_62401;
var state_62433__$1 = (function (){var statearr_62454 = state_62433;
(statearr_62454[(14)] = inst_62406);

(statearr_62454[(7)] = inst_62394);

(statearr_62454[(8)] = inst_62393__$1);

return statearr_62454;
})();
var statearr_62455_63984 = state_62433__$1;
(statearr_62455_63984[(2)] = null);

(statearr_62455_63984[(1)] = (2));


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
});})(c__60108__auto___63958,out))
;
return ((function (switch__59851__auto__,c__60108__auto___63958,out){
return (function() {
var cljs$core$async$state_machine__59852__auto__ = null;
var cljs$core$async$state_machine__59852__auto____0 = (function (){
var statearr_62456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62456[(0)] = cljs$core$async$state_machine__59852__auto__);

(statearr_62456[(1)] = (1));

return statearr_62456;
});
var cljs$core$async$state_machine__59852__auto____1 = (function (state_62433){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_62433);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e62457){if((e62457 instanceof Object)){
var ex__59855__auto__ = e62457;
var statearr_62458_63990 = state_62433;
(statearr_62458_63990[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62457;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63991 = state_62433;
state_62433 = G__63991;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
cljs$core$async$state_machine__59852__auto__ = function(state_62433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59852__auto____1.call(this,state_62433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59852__auto____0;
cljs$core$async$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59852__auto____1;
return cljs$core$async$state_machine__59852__auto__;
})()
;})(switch__59851__auto__,c__60108__auto___63958,out))
})();
var state__60110__auto__ = (function (){var statearr_62459 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_62459[(6)] = c__60108__auto___63958);

return statearr_62459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(c__60108__auto___63958,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
