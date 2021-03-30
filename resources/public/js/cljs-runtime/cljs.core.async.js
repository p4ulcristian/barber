goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__8015 = arguments.length;
switch (G__8015) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8022 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8022 = (function (f,blockable,meta8023){
this.f = f;
this.blockable = blockable;
this.meta8023 = meta8023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8024,meta8023__$1){
var self__ = this;
var _8024__$1 = this;
return (new cljs.core.async.t_cljs$core$async8022(self__.f,self__.blockable,meta8023__$1));
});

cljs.core.async.t_cljs$core$async8022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8024){
var self__ = this;
var _8024__$1 = this;
return self__.meta8023;
});

cljs.core.async.t_cljs$core$async8022.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8022.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async8022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async8022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta8023","meta8023",1086227166,null)], null);
});

cljs.core.async.t_cljs$core$async8022.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8022.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8022";

cljs.core.async.t_cljs$core$async8022.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async8022");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8022.
 */
cljs.core.async.__GT_t_cljs$core$async8022 = (function cljs$core$async$__GT_t_cljs$core$async8022(f__$1,blockable__$1,meta8023){
return (new cljs.core.async.t_cljs$core$async8022(f__$1,blockable__$1,meta8023));
});

}

return (new cljs.core.async.t_cljs$core$async8022(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__8075 = arguments.length;
switch (G__8075) {
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
var G__8090 = arguments.length;
switch (G__8090) {
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
var G__8107 = arguments.length;
switch (G__8107) {
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
var val_10600 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_10600) : fn1.call(null,val_10600));
} else {
cljs.core.async.impl.dispatch.run(((function (val_10600,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_10600) : fn1.call(null,val_10600));
});})(val_10600,ret))
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
var G__8119 = arguments.length;
switch (G__8119) {
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
var n__4607__auto___10602 = n;
var x_10603 = (0);
while(true){
if((x_10603 < n__4607__auto___10602)){
(a[x_10603] = (0));

var G__10604 = (x_10603 + (1));
x_10603 = G__10604;
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

var G__10605 = (i + (1));
i = G__10605;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8136 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8136 = (function (flag,meta8137){
this.flag = flag;
this.meta8137 = meta8137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_8138,meta8137__$1){
var self__ = this;
var _8138__$1 = this;
return (new cljs.core.async.t_cljs$core$async8136(self__.flag,meta8137__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async8136.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_8138){
var self__ = this;
var _8138__$1 = this;
return self__.meta8137;
});})(flag))
;

cljs.core.async.t_cljs$core$async8136.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8136.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async8136.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8136.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async8136.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta8137","meta8137",-652253128,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async8136.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8136";

cljs.core.async.t_cljs$core$async8136.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async8136");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8136.
 */
cljs.core.async.__GT_t_cljs$core$async8136 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async8136(flag__$1,meta8137){
return (new cljs.core.async.t_cljs$core$async8136(flag__$1,meta8137));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async8136(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async8154 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8154 = (function (flag,cb,meta8155){
this.flag = flag;
this.cb = cb;
this.meta8155 = meta8155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async8154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8156,meta8155__$1){
var self__ = this;
var _8156__$1 = this;
return (new cljs.core.async.t_cljs$core$async8154(self__.flag,self__.cb,meta8155__$1));
});

cljs.core.async.t_cljs$core$async8154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8156){
var self__ = this;
var _8156__$1 = this;
return self__.meta8155;
});

cljs.core.async.t_cljs$core$async8154.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async8154.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async8154.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async8154.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async8154.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta8155","meta8155",-864952597,null)], null);
});

cljs.core.async.t_cljs$core$async8154.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8154.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8154";

cljs.core.async.t_cljs$core$async8154.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async8154");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async8154.
 */
cljs.core.async.__GT_t_cljs$core$async8154 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async8154(flag__$1,cb__$1,meta8155){
return (new cljs.core.async.t_cljs$core$async8154(flag__$1,cb__$1,meta8155));
});

}

return (new cljs.core.async.t_cljs$core$async8154(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__8172_SHARP_){
var G__8180 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8172_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__8180) : fret.call(null,G__8180));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__8173_SHARP_){
var G__8183 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8173_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__8183) : fret.call(null,G__8183));
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
var G__10606 = (i + (1));
i = G__10606;
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
var len__4730__auto___10607 = arguments.length;
var i__4731__auto___10608 = (0);
while(true){
if((i__4731__auto___10608 < len__4730__auto___10607)){
args__4736__auto__.push((arguments[i__4731__auto___10608]));

var G__10609 = (i__4731__auto___10608 + (1));
i__4731__auto___10608 = G__10609;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__8199){
var map__8200 = p__8199;
var map__8200__$1 = (((((!((map__8200 == null))))?(((((map__8200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8200):map__8200);
var opts = map__8200__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq8188){
var G__8189 = cljs.core.first(seq8188);
var seq8188__$1 = cljs.core.next(seq8188);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8189,seq8188__$1);
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
var G__8214 = arguments.length;
switch (G__8214) {
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
var c__7914__auto___10611 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto___10611){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto___10611){
return (function (state_8303){
var state_val_8305 = (state_8303[(1)]);
if((state_val_8305 === (7))){
var inst_8292 = (state_8303[(2)]);
var state_8303__$1 = state_8303;
var statearr_8325_10612 = state_8303__$1;
(statearr_8325_10612[(2)] = inst_8292);

(statearr_8325_10612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8305 === (1))){
var state_8303__$1 = state_8303;
var statearr_8333_10613 = state_8303__$1;
(statearr_8333_10613[(2)] = null);

(statearr_8333_10613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8305 === (4))){
var inst_8259 = (state_8303[(7)]);
var inst_8259__$1 = (state_8303[(2)]);
var inst_8266 = (inst_8259__$1 == null);
var state_8303__$1 = (function (){var statearr_8334 = state_8303;
(statearr_8334[(7)] = inst_8259__$1);

return statearr_8334;
})();
if(cljs.core.truth_(inst_8266)){
var statearr_8337_10614 = state_8303__$1;
(statearr_8337_10614[(1)] = (5));

} else {
var statearr_8339_10615 = state_8303__$1;
(statearr_8339_10615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8305 === (13))){
var state_8303__$1 = state_8303;
var statearr_8346_10616 = state_8303__$1;
(statearr_8346_10616[(2)] = null);

(statearr_8346_10616[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8305 === (6))){
var inst_8259 = (state_8303[(7)]);
var state_8303__$1 = state_8303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8303__$1,(11),to,inst_8259);
} else {
if((state_val_8305 === (3))){
var inst_8297 = (state_8303[(2)]);
var state_8303__$1 = state_8303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8303__$1,inst_8297);
} else {
if((state_val_8305 === (12))){
var state_8303__$1 = state_8303;
var statearr_8356_10617 = state_8303__$1;
(statearr_8356_10617[(2)] = null);

(statearr_8356_10617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8305 === (2))){
var state_8303__$1 = state_8303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8303__$1,(4),from);
} else {
if((state_val_8305 === (11))){
var inst_8281 = (state_8303[(2)]);
var state_8303__$1 = state_8303;
if(cljs.core.truth_(inst_8281)){
var statearr_8357_10618 = state_8303__$1;
(statearr_8357_10618[(1)] = (12));

} else {
var statearr_8358_10619 = state_8303__$1;
(statearr_8358_10619[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8305 === (9))){
var state_8303__$1 = state_8303;
var statearr_8361_10620 = state_8303__$1;
(statearr_8361_10620[(2)] = null);

(statearr_8361_10620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8305 === (5))){
var state_8303__$1 = state_8303;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8363_10621 = state_8303__$1;
(statearr_8363_10621[(1)] = (8));

} else {
var statearr_8364_10623 = state_8303__$1;
(statearr_8364_10623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8305 === (14))){
var inst_8290 = (state_8303[(2)]);
var state_8303__$1 = state_8303;
var statearr_8365_10625 = state_8303__$1;
(statearr_8365_10625[(2)] = inst_8290);

(statearr_8365_10625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8305 === (10))){
var inst_8278 = (state_8303[(2)]);
var state_8303__$1 = state_8303;
var statearr_8368_10626 = state_8303__$1;
(statearr_8368_10626[(2)] = inst_8278);

(statearr_8368_10626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8305 === (8))){
var inst_8275 = cljs.core.async.close_BANG_(to);
var state_8303__$1 = state_8303;
var statearr_8371_10627 = state_8303__$1;
(statearr_8371_10627[(2)] = inst_8275);

(statearr_8371_10627[(1)] = (10));


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
});})(c__7914__auto___10611))
;
return ((function (switch__7528__auto__,c__7914__auto___10611){
return (function() {
var cljs$core$async$state_machine__7529__auto__ = null;
var cljs$core$async$state_machine__7529__auto____0 = (function (){
var statearr_8372 = [null,null,null,null,null,null,null,null];
(statearr_8372[(0)] = cljs$core$async$state_machine__7529__auto__);

(statearr_8372[(1)] = (1));

return statearr_8372;
});
var cljs$core$async$state_machine__7529__auto____1 = (function (state_8303){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_8303);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e8374){if((e8374 instanceof Object)){
var ex__7532__auto__ = e8374;
var statearr_8375_10630 = state_8303;
(statearr_8375_10630[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8374;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10631 = state_8303;
state_8303 = G__10631;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
cljs$core$async$state_machine__7529__auto__ = function(state_8303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7529__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7529__auto____1.call(this,state_8303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7529__auto____0;
cljs$core$async$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7529__auto____1;
return cljs$core$async$state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto___10611))
})();
var state__7916__auto__ = (function (){var statearr_8378 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_8378[(6)] = c__7914__auto___10611);

return statearr_8378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto___10611))
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
return (function (p__8402){
var vec__8404 = p__8402;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8404,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8404,(1),null);
var job = vec__8404;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__7914__auto___10638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto___10638,res,vec__8404,v,p,job,jobs,results){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto___10638,res,vec__8404,v,p,job,jobs,results){
return (function (state_8416){
var state_val_8417 = (state_8416[(1)]);
if((state_val_8417 === (1))){
var state_8416__$1 = state_8416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8416__$1,(2),res,v);
} else {
if((state_val_8417 === (2))){
var inst_8413 = (state_8416[(2)]);
var inst_8414 = cljs.core.async.close_BANG_(res);
var state_8416__$1 = (function (){var statearr_8425 = state_8416;
(statearr_8425[(7)] = inst_8413);

return statearr_8425;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_8416__$1,inst_8414);
} else {
return null;
}
}
});})(c__7914__auto___10638,res,vec__8404,v,p,job,jobs,results))
;
return ((function (switch__7528__auto__,c__7914__auto___10638,res,vec__8404,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____0 = (function (){
var statearr_8427 = [null,null,null,null,null,null,null,null];
(statearr_8427[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__);

(statearr_8427[(1)] = (1));

return statearr_8427;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____1 = (function (state_8416){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_8416);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e8430){if((e8430 instanceof Object)){
var ex__7532__auto__ = e8430;
var statearr_8431_10640 = state_8416;
(statearr_8431_10640[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8430;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10641 = state_8416;
state_8416 = G__10641;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__ = function(state_8416){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____1.call(this,state_8416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto___10638,res,vec__8404,v,p,job,jobs,results))
})();
var state__7916__auto__ = (function (){var statearr_8434 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_8434[(6)] = c__7914__auto___10638);

return statearr_8434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto___10638,res,vec__8404,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__8441){
var vec__8445 = p__8441;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8445,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8445,(1),null);
var job = vec__8445;
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
var n__4607__auto___10647 = n;
var __10648 = (0);
while(true){
if((__10648 < n__4607__auto___10647)){
var G__8453_10651 = type;
var G__8453_10652__$1 = (((G__8453_10651 instanceof cljs.core.Keyword))?G__8453_10651.fqn:null);
switch (G__8453_10652__$1) {
case "compute":
var c__7914__auto___10658 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__10648,c__7914__auto___10658,G__8453_10651,G__8453_10652__$1,n__4607__auto___10647,jobs,results,process,async){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (__10648,c__7914__auto___10658,G__8453_10651,G__8453_10652__$1,n__4607__auto___10647,jobs,results,process,async){
return (function (state_8478){
var state_val_8479 = (state_8478[(1)]);
if((state_val_8479 === (1))){
var state_8478__$1 = state_8478;
var statearr_8487_10663 = state_8478__$1;
(statearr_8487_10663[(2)] = null);

(statearr_8487_10663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8479 === (2))){
var state_8478__$1 = state_8478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8478__$1,(4),jobs);
} else {
if((state_val_8479 === (3))){
var inst_8475 = (state_8478[(2)]);
var state_8478__$1 = state_8478;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8478__$1,inst_8475);
} else {
if((state_val_8479 === (4))){
var inst_8458 = (state_8478[(2)]);
var inst_8460 = process(inst_8458);
var state_8478__$1 = state_8478;
if(cljs.core.truth_(inst_8460)){
var statearr_8494_10668 = state_8478__$1;
(statearr_8494_10668[(1)] = (5));

} else {
var statearr_8496_10669 = state_8478__$1;
(statearr_8496_10669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8479 === (5))){
var state_8478__$1 = state_8478;
var statearr_8498_10670 = state_8478__$1;
(statearr_8498_10670[(2)] = null);

(statearr_8498_10670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8479 === (6))){
var state_8478__$1 = state_8478;
var statearr_8500_10673 = state_8478__$1;
(statearr_8500_10673[(2)] = null);

(statearr_8500_10673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8479 === (7))){
var inst_8473 = (state_8478[(2)]);
var state_8478__$1 = state_8478;
var statearr_8506_10679 = state_8478__$1;
(statearr_8506_10679[(2)] = inst_8473);

(statearr_8506_10679[(1)] = (3));


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
});})(__10648,c__7914__auto___10658,G__8453_10651,G__8453_10652__$1,n__4607__auto___10647,jobs,results,process,async))
;
return ((function (__10648,switch__7528__auto__,c__7914__auto___10658,G__8453_10651,G__8453_10652__$1,n__4607__auto___10647,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____0 = (function (){
var statearr_8511 = [null,null,null,null,null,null,null];
(statearr_8511[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__);

(statearr_8511[(1)] = (1));

return statearr_8511;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____1 = (function (state_8478){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_8478);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e8512){if((e8512 instanceof Object)){
var ex__7532__auto__ = e8512;
var statearr_8517_10680 = state_8478;
(statearr_8517_10680[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8512;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10681 = state_8478;
state_8478 = G__10681;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__ = function(state_8478){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____1.call(this,state_8478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__;
})()
;})(__10648,switch__7528__auto__,c__7914__auto___10658,G__8453_10651,G__8453_10652__$1,n__4607__auto___10647,jobs,results,process,async))
})();
var state__7916__auto__ = (function (){var statearr_8525 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_8525[(6)] = c__7914__auto___10658);

return statearr_8525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(__10648,c__7914__auto___10658,G__8453_10651,G__8453_10652__$1,n__4607__auto___10647,jobs,results,process,async))
);


break;
case "async":
var c__7914__auto___10684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__10648,c__7914__auto___10684,G__8453_10651,G__8453_10652__$1,n__4607__auto___10647,jobs,results,process,async){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (__10648,c__7914__auto___10684,G__8453_10651,G__8453_10652__$1,n__4607__auto___10647,jobs,results,process,async){
return (function (state_8551){
var state_val_8552 = (state_8551[(1)]);
if((state_val_8552 === (1))){
var state_8551__$1 = state_8551;
var statearr_8557_10685 = state_8551__$1;
(statearr_8557_10685[(2)] = null);

(statearr_8557_10685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8552 === (2))){
var state_8551__$1 = state_8551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8551__$1,(4),jobs);
} else {
if((state_val_8552 === (3))){
var inst_8548 = (state_8551[(2)]);
var state_8551__$1 = state_8551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8551__$1,inst_8548);
} else {
if((state_val_8552 === (4))){
var inst_8537 = (state_8551[(2)]);
var inst_8538 = async(inst_8537);
var state_8551__$1 = state_8551;
if(cljs.core.truth_(inst_8538)){
var statearr_8562_10690 = state_8551__$1;
(statearr_8562_10690[(1)] = (5));

} else {
var statearr_8563_10691 = state_8551__$1;
(statearr_8563_10691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8552 === (5))){
var state_8551__$1 = state_8551;
var statearr_8569_10694 = state_8551__$1;
(statearr_8569_10694[(2)] = null);

(statearr_8569_10694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8552 === (6))){
var state_8551__$1 = state_8551;
var statearr_8574_10697 = state_8551__$1;
(statearr_8574_10697[(2)] = null);

(statearr_8574_10697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8552 === (7))){
var inst_8543 = (state_8551[(2)]);
var state_8551__$1 = state_8551;
var statearr_8591_10699 = state_8551__$1;
(statearr_8591_10699[(2)] = inst_8543);

(statearr_8591_10699[(1)] = (3));


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
});})(__10648,c__7914__auto___10684,G__8453_10651,G__8453_10652__$1,n__4607__auto___10647,jobs,results,process,async))
;
return ((function (__10648,switch__7528__auto__,c__7914__auto___10684,G__8453_10651,G__8453_10652__$1,n__4607__auto___10647,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____0 = (function (){
var statearr_8594 = [null,null,null,null,null,null,null];
(statearr_8594[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__);

(statearr_8594[(1)] = (1));

return statearr_8594;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____1 = (function (state_8551){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_8551);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e8597){if((e8597 instanceof Object)){
var ex__7532__auto__ = e8597;
var statearr_8599_10702 = state_8551;
(statearr_8599_10702[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8597;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10703 = state_8551;
state_8551 = G__10703;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__ = function(state_8551){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____1.call(this,state_8551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__;
})()
;})(__10648,switch__7528__auto__,c__7914__auto___10684,G__8453_10651,G__8453_10652__$1,n__4607__auto___10647,jobs,results,process,async))
})();
var state__7916__auto__ = (function (){var statearr_8602 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_8602[(6)] = c__7914__auto___10684);

return statearr_8602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(__10648,c__7914__auto___10684,G__8453_10651,G__8453_10652__$1,n__4607__auto___10647,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__8453_10652__$1)].join('')));

}

var G__10709 = (__10648 + (1));
__10648 = G__10709;
continue;
} else {
}
break;
}

var c__7914__auto___10713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto___10713,jobs,results,process,async){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto___10713,jobs,results,process,async){
return (function (state_8637){
var state_val_8639 = (state_8637[(1)]);
if((state_val_8639 === (7))){
var inst_8631 = (state_8637[(2)]);
var state_8637__$1 = state_8637;
var statearr_8641_10716 = state_8637__$1;
(statearr_8641_10716[(2)] = inst_8631);

(statearr_8641_10716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8639 === (1))){
var state_8637__$1 = state_8637;
var statearr_8644_10717 = state_8637__$1;
(statearr_8644_10717[(2)] = null);

(statearr_8644_10717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8639 === (4))){
var inst_8606 = (state_8637[(7)]);
var inst_8606__$1 = (state_8637[(2)]);
var inst_8607 = (inst_8606__$1 == null);
var state_8637__$1 = (function (){var statearr_8648 = state_8637;
(statearr_8648[(7)] = inst_8606__$1);

return statearr_8648;
})();
if(cljs.core.truth_(inst_8607)){
var statearr_8650_10718 = state_8637__$1;
(statearr_8650_10718[(1)] = (5));

} else {
var statearr_8652_10721 = state_8637__$1;
(statearr_8652_10721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8639 === (6))){
var inst_8613 = (state_8637[(8)]);
var inst_8606 = (state_8637[(7)]);
var inst_8613__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_8620 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_8622 = [inst_8606,inst_8613__$1];
var inst_8623 = (new cljs.core.PersistentVector(null,2,(5),inst_8620,inst_8622,null));
var state_8637__$1 = (function (){var statearr_8653 = state_8637;
(statearr_8653[(8)] = inst_8613__$1);

return statearr_8653;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8637__$1,(8),jobs,inst_8623);
} else {
if((state_val_8639 === (3))){
var inst_8633 = (state_8637[(2)]);
var state_8637__$1 = state_8637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8637__$1,inst_8633);
} else {
if((state_val_8639 === (2))){
var state_8637__$1 = state_8637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8637__$1,(4),from);
} else {
if((state_val_8639 === (9))){
var inst_8628 = (state_8637[(2)]);
var state_8637__$1 = (function (){var statearr_8658 = state_8637;
(statearr_8658[(9)] = inst_8628);

return statearr_8658;
})();
var statearr_8659_10729 = state_8637__$1;
(statearr_8659_10729[(2)] = null);

(statearr_8659_10729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8639 === (5))){
var inst_8609 = cljs.core.async.close_BANG_(jobs);
var state_8637__$1 = state_8637;
var statearr_8670_10730 = state_8637__$1;
(statearr_8670_10730[(2)] = inst_8609);

(statearr_8670_10730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8639 === (8))){
var inst_8613 = (state_8637[(8)]);
var inst_8625 = (state_8637[(2)]);
var state_8637__$1 = (function (){var statearr_8672 = state_8637;
(statearr_8672[(10)] = inst_8625);

return statearr_8672;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8637__$1,(9),results,inst_8613);
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
});})(c__7914__auto___10713,jobs,results,process,async))
;
return ((function (switch__7528__auto__,c__7914__auto___10713,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____0 = (function (){
var statearr_8674 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_8674[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__);

(statearr_8674[(1)] = (1));

return statearr_8674;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____1 = (function (state_8637){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_8637);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e8675){if((e8675 instanceof Object)){
var ex__7532__auto__ = e8675;
var statearr_8676_10737 = state_8637;
(statearr_8676_10737[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8675;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10738 = state_8637;
state_8637 = G__10738;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__ = function(state_8637){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____1.call(this,state_8637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto___10713,jobs,results,process,async))
})();
var state__7916__auto__ = (function (){var statearr_8683 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_8683[(6)] = c__7914__auto___10713);

return statearr_8683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto___10713,jobs,results,process,async))
);


var c__7914__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto__,jobs,results,process,async){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto__,jobs,results,process,async){
return (function (state_8729){
var state_val_8730 = (state_8729[(1)]);
if((state_val_8730 === (7))){
var inst_8725 = (state_8729[(2)]);
var state_8729__$1 = state_8729;
var statearr_8741_10739 = state_8729__$1;
(statearr_8741_10739[(2)] = inst_8725);

(statearr_8741_10739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8730 === (20))){
var state_8729__$1 = state_8729;
var statearr_8747_10740 = state_8729__$1;
(statearr_8747_10740[(2)] = null);

(statearr_8747_10740[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8730 === (1))){
var state_8729__$1 = state_8729;
var statearr_8755_10741 = state_8729__$1;
(statearr_8755_10741[(2)] = null);

(statearr_8755_10741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8730 === (4))){
var inst_8688 = (state_8729[(7)]);
var inst_8688__$1 = (state_8729[(2)]);
var inst_8693 = (inst_8688__$1 == null);
var state_8729__$1 = (function (){var statearr_8762 = state_8729;
(statearr_8762[(7)] = inst_8688__$1);

return statearr_8762;
})();
if(cljs.core.truth_(inst_8693)){
var statearr_8767_10742 = state_8729__$1;
(statearr_8767_10742[(1)] = (5));

} else {
var statearr_8769_10743 = state_8729__$1;
(statearr_8769_10743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8730 === (15))){
var inst_8706 = (state_8729[(8)]);
var state_8729__$1 = state_8729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8729__$1,(18),to,inst_8706);
} else {
if((state_val_8730 === (21))){
var inst_8720 = (state_8729[(2)]);
var state_8729__$1 = state_8729;
var statearr_8782_10744 = state_8729__$1;
(statearr_8782_10744[(2)] = inst_8720);

(statearr_8782_10744[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8730 === (13))){
var inst_8722 = (state_8729[(2)]);
var state_8729__$1 = (function (){var statearr_8786 = state_8729;
(statearr_8786[(9)] = inst_8722);

return statearr_8786;
})();
var statearr_8791_10745 = state_8729__$1;
(statearr_8791_10745[(2)] = null);

(statearr_8791_10745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8730 === (6))){
var inst_8688 = (state_8729[(7)]);
var state_8729__$1 = state_8729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8729__$1,(11),inst_8688);
} else {
if((state_val_8730 === (17))){
var inst_8715 = (state_8729[(2)]);
var state_8729__$1 = state_8729;
if(cljs.core.truth_(inst_8715)){
var statearr_8797_10746 = state_8729__$1;
(statearr_8797_10746[(1)] = (19));

} else {
var statearr_8798_10747 = state_8729__$1;
(statearr_8798_10747[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8730 === (3))){
var inst_8727 = (state_8729[(2)]);
var state_8729__$1 = state_8729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8729__$1,inst_8727);
} else {
if((state_val_8730 === (12))){
var inst_8703 = (state_8729[(10)]);
var state_8729__$1 = state_8729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8729__$1,(14),inst_8703);
} else {
if((state_val_8730 === (2))){
var state_8729__$1 = state_8729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8729__$1,(4),results);
} else {
if((state_val_8730 === (19))){
var state_8729__$1 = state_8729;
var statearr_8800_10757 = state_8729__$1;
(statearr_8800_10757[(2)] = null);

(statearr_8800_10757[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8730 === (11))){
var inst_8703 = (state_8729[(2)]);
var state_8729__$1 = (function (){var statearr_8801 = state_8729;
(statearr_8801[(10)] = inst_8703);

return statearr_8801;
})();
var statearr_8802_10762 = state_8729__$1;
(statearr_8802_10762[(2)] = null);

(statearr_8802_10762[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8730 === (9))){
var state_8729__$1 = state_8729;
var statearr_8805_10763 = state_8729__$1;
(statearr_8805_10763[(2)] = null);

(statearr_8805_10763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8730 === (5))){
var state_8729__$1 = state_8729;
if(cljs.core.truth_(close_QMARK_)){
var statearr_8806_10764 = state_8729__$1;
(statearr_8806_10764[(1)] = (8));

} else {
var statearr_8807_10765 = state_8729__$1;
(statearr_8807_10765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8730 === (14))){
var inst_8706 = (state_8729[(8)]);
var inst_8708 = (state_8729[(11)]);
var inst_8706__$1 = (state_8729[(2)]);
var inst_8707 = (inst_8706__$1 == null);
var inst_8708__$1 = cljs.core.not(inst_8707);
var state_8729__$1 = (function (){var statearr_8809 = state_8729;
(statearr_8809[(8)] = inst_8706__$1);

(statearr_8809[(11)] = inst_8708__$1);

return statearr_8809;
})();
if(inst_8708__$1){
var statearr_8814_10766 = state_8729__$1;
(statearr_8814_10766[(1)] = (15));

} else {
var statearr_8815_10767 = state_8729__$1;
(statearr_8815_10767[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8730 === (16))){
var inst_8708 = (state_8729[(11)]);
var state_8729__$1 = state_8729;
var statearr_8818_10768 = state_8729__$1;
(statearr_8818_10768[(2)] = inst_8708);

(statearr_8818_10768[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8730 === (10))){
var inst_8700 = (state_8729[(2)]);
var state_8729__$1 = state_8729;
var statearr_8826_10769 = state_8729__$1;
(statearr_8826_10769[(2)] = inst_8700);

(statearr_8826_10769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8730 === (18))){
var inst_8712 = (state_8729[(2)]);
var state_8729__$1 = state_8729;
var statearr_8828_10774 = state_8729__$1;
(statearr_8828_10774[(2)] = inst_8712);

(statearr_8828_10774[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8730 === (8))){
var inst_8697 = cljs.core.async.close_BANG_(to);
var state_8729__$1 = state_8729;
var statearr_8829_10775 = state_8729__$1;
(statearr_8829_10775[(2)] = inst_8697);

(statearr_8829_10775[(1)] = (10));


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
});})(c__7914__auto__,jobs,results,process,async))
;
return ((function (switch__7528__auto__,c__7914__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____0 = (function (){
var statearr_8832 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8832[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__);

(statearr_8832[(1)] = (1));

return statearr_8832;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____1 = (function (state_8729){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_8729);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e8833){if((e8833 instanceof Object)){
var ex__7532__auto__ = e8833;
var statearr_8834_10777 = state_8729;
(statearr_8834_10777[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8833;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10778 = state_8729;
state_8729 = G__10778;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__ = function(state_8729){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____1.call(this,state_8729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7529__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto__,jobs,results,process,async))
})();
var state__7916__auto__ = (function (){var statearr_8838 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_8838[(6)] = c__7914__auto__);

return statearr_8838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto__,jobs,results,process,async))
);

return c__7914__auto__;
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
var G__8840 = arguments.length;
switch (G__8840) {
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
var G__8845 = arguments.length;
switch (G__8845) {
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
var G__8853 = arguments.length;
switch (G__8853) {
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
var c__7914__auto___10782 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto___10782,tc,fc){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto___10782,tc,fc){
return (function (state_8890){
var state_val_8891 = (state_8890[(1)]);
if((state_val_8891 === (7))){
var inst_8884 = (state_8890[(2)]);
var state_8890__$1 = state_8890;
var statearr_8902_10783 = state_8890__$1;
(statearr_8902_10783[(2)] = inst_8884);

(statearr_8902_10783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8891 === (1))){
var state_8890__$1 = state_8890;
var statearr_8904_10784 = state_8890__$1;
(statearr_8904_10784[(2)] = null);

(statearr_8904_10784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8891 === (4))){
var inst_8863 = (state_8890[(7)]);
var inst_8863__$1 = (state_8890[(2)]);
var inst_8864 = (inst_8863__$1 == null);
var state_8890__$1 = (function (){var statearr_8906 = state_8890;
(statearr_8906[(7)] = inst_8863__$1);

return statearr_8906;
})();
if(cljs.core.truth_(inst_8864)){
var statearr_8908_10785 = state_8890__$1;
(statearr_8908_10785[(1)] = (5));

} else {
var statearr_8918_10786 = state_8890__$1;
(statearr_8918_10786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8891 === (13))){
var state_8890__$1 = state_8890;
var statearr_8922_10787 = state_8890__$1;
(statearr_8922_10787[(2)] = null);

(statearr_8922_10787[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8891 === (6))){
var inst_8863 = (state_8890[(7)]);
var inst_8870 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_8863) : p.call(null,inst_8863));
var state_8890__$1 = state_8890;
if(cljs.core.truth_(inst_8870)){
var statearr_8935_10788 = state_8890__$1;
(statearr_8935_10788[(1)] = (9));

} else {
var statearr_8936_10793 = state_8890__$1;
(statearr_8936_10793[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8891 === (3))){
var inst_8887 = (state_8890[(2)]);
var state_8890__$1 = state_8890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_8890__$1,inst_8887);
} else {
if((state_val_8891 === (12))){
var state_8890__$1 = state_8890;
var statearr_8939_10794 = state_8890__$1;
(statearr_8939_10794[(2)] = null);

(statearr_8939_10794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8891 === (2))){
var state_8890__$1 = state_8890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_8890__$1,(4),ch);
} else {
if((state_val_8891 === (11))){
var inst_8863 = (state_8890[(7)]);
var inst_8874 = (state_8890[(2)]);
var state_8890__$1 = state_8890;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_8890__$1,(8),inst_8874,inst_8863);
} else {
if((state_val_8891 === (9))){
var state_8890__$1 = state_8890;
var statearr_8940_10795 = state_8890__$1;
(statearr_8940_10795[(2)] = tc);

(statearr_8940_10795[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8891 === (5))){
var inst_8866 = cljs.core.async.close_BANG_(tc);
var inst_8867 = cljs.core.async.close_BANG_(fc);
var state_8890__$1 = (function (){var statearr_8944 = state_8890;
(statearr_8944[(8)] = inst_8866);

return statearr_8944;
})();
var statearr_8946_10796 = state_8890__$1;
(statearr_8946_10796[(2)] = inst_8867);

(statearr_8946_10796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8891 === (14))){
var inst_8882 = (state_8890[(2)]);
var state_8890__$1 = state_8890;
var statearr_8949_10797 = state_8890__$1;
(statearr_8949_10797[(2)] = inst_8882);

(statearr_8949_10797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8891 === (10))){
var state_8890__$1 = state_8890;
var statearr_8951_10798 = state_8890__$1;
(statearr_8951_10798[(2)] = fc);

(statearr_8951_10798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8891 === (8))){
var inst_8877 = (state_8890[(2)]);
var state_8890__$1 = state_8890;
if(cljs.core.truth_(inst_8877)){
var statearr_8953_10800 = state_8890__$1;
(statearr_8953_10800[(1)] = (12));

} else {
var statearr_8954_10801 = state_8890__$1;
(statearr_8954_10801[(1)] = (13));

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
});})(c__7914__auto___10782,tc,fc))
;
return ((function (switch__7528__auto__,c__7914__auto___10782,tc,fc){
return (function() {
var cljs$core$async$state_machine__7529__auto__ = null;
var cljs$core$async$state_machine__7529__auto____0 = (function (){
var statearr_8958 = [null,null,null,null,null,null,null,null,null];
(statearr_8958[(0)] = cljs$core$async$state_machine__7529__auto__);

(statearr_8958[(1)] = (1));

return statearr_8958;
});
var cljs$core$async$state_machine__7529__auto____1 = (function (state_8890){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_8890);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e8959){if((e8959 instanceof Object)){
var ex__7532__auto__ = e8959;
var statearr_8960_10802 = state_8890;
(statearr_8960_10802[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_8890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8959;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10803 = state_8890;
state_8890 = G__10803;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
cljs$core$async$state_machine__7529__auto__ = function(state_8890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7529__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7529__auto____1.call(this,state_8890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7529__auto____0;
cljs$core$async$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7529__auto____1;
return cljs$core$async$state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto___10782,tc,fc))
})();
var state__7916__auto__ = (function (){var statearr_8964 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_8964[(6)] = c__7914__auto___10782);

return statearr_8964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto___10782,tc,fc))
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
var c__7914__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto__){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto__){
return (function (state_9001){
var state_val_9002 = (state_9001[(1)]);
if((state_val_9002 === (7))){
var inst_8996 = (state_9001[(2)]);
var state_9001__$1 = state_9001;
var statearr_9008_10804 = state_9001__$1;
(statearr_9008_10804[(2)] = inst_8996);

(statearr_9008_10804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9002 === (1))){
var inst_8978 = init;
var state_9001__$1 = (function (){var statearr_9012 = state_9001;
(statearr_9012[(7)] = inst_8978);

return statearr_9012;
})();
var statearr_9013_10805 = state_9001__$1;
(statearr_9013_10805[(2)] = null);

(statearr_9013_10805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9002 === (4))){
var inst_8981 = (state_9001[(8)]);
var inst_8981__$1 = (state_9001[(2)]);
var inst_8982 = (inst_8981__$1 == null);
var state_9001__$1 = (function (){var statearr_9015 = state_9001;
(statearr_9015[(8)] = inst_8981__$1);

return statearr_9015;
})();
if(cljs.core.truth_(inst_8982)){
var statearr_9017_10806 = state_9001__$1;
(statearr_9017_10806[(1)] = (5));

} else {
var statearr_9018_10807 = state_9001__$1;
(statearr_9018_10807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9002 === (6))){
var inst_8978 = (state_9001[(7)]);
var inst_8981 = (state_9001[(8)]);
var inst_8985 = (state_9001[(9)]);
var inst_8985__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_8978,inst_8981) : f.call(null,inst_8978,inst_8981));
var inst_8986 = cljs.core.reduced_QMARK_(inst_8985__$1);
var state_9001__$1 = (function (){var statearr_9019 = state_9001;
(statearr_9019[(9)] = inst_8985__$1);

return statearr_9019;
})();
if(inst_8986){
var statearr_9020_10808 = state_9001__$1;
(statearr_9020_10808[(1)] = (8));

} else {
var statearr_9021_10809 = state_9001__$1;
(statearr_9021_10809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9002 === (3))){
var inst_8998 = (state_9001[(2)]);
var state_9001__$1 = state_9001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9001__$1,inst_8998);
} else {
if((state_val_9002 === (2))){
var state_9001__$1 = state_9001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9001__$1,(4),ch);
} else {
if((state_val_9002 === (9))){
var inst_8985 = (state_9001[(9)]);
var inst_8978 = inst_8985;
var state_9001__$1 = (function (){var statearr_9022 = state_9001;
(statearr_9022[(7)] = inst_8978);

return statearr_9022;
})();
var statearr_9023_10810 = state_9001__$1;
(statearr_9023_10810[(2)] = null);

(statearr_9023_10810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9002 === (5))){
var inst_8978 = (state_9001[(7)]);
var state_9001__$1 = state_9001;
var statearr_9024_10811 = state_9001__$1;
(statearr_9024_10811[(2)] = inst_8978);

(statearr_9024_10811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9002 === (10))){
var inst_8994 = (state_9001[(2)]);
var state_9001__$1 = state_9001;
var statearr_9025_10812 = state_9001__$1;
(statearr_9025_10812[(2)] = inst_8994);

(statearr_9025_10812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9002 === (8))){
var inst_8985 = (state_9001[(9)]);
var inst_8988 = cljs.core.deref(inst_8985);
var state_9001__$1 = state_9001;
var statearr_9026_10813 = state_9001__$1;
(statearr_9026_10813[(2)] = inst_8988);

(statearr_9026_10813[(1)] = (10));


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
});})(c__7914__auto__))
;
return ((function (switch__7528__auto__,c__7914__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7529__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7529__auto____0 = (function (){
var statearr_9027 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9027[(0)] = cljs$core$async$reduce_$_state_machine__7529__auto__);

(statearr_9027[(1)] = (1));

return statearr_9027;
});
var cljs$core$async$reduce_$_state_machine__7529__auto____1 = (function (state_9001){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_9001);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e9028){if((e9028 instanceof Object)){
var ex__7532__auto__ = e9028;
var statearr_9029_10818 = state_9001;
(statearr_9029_10818[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9028;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10819 = state_9001;
state_9001 = G__10819;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7529__auto__ = function(state_9001){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7529__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7529__auto____1.call(this,state_9001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7529__auto____0;
cljs$core$async$reduce_$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7529__auto____1;
return cljs$core$async$reduce_$_state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto__))
})();
var state__7916__auto__ = (function (){var statearr_9030 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_9030[(6)] = c__7914__auto__);

return statearr_9030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto__))
);

return c__7914__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__7914__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto__,f__$1){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto__,f__$1){
return (function (state_9044){
var state_val_9045 = (state_9044[(1)]);
if((state_val_9045 === (1))){
var inst_9038 = cljs.core.async.reduce(f__$1,init,ch);
var state_9044__$1 = state_9044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9044__$1,(2),inst_9038);
} else {
if((state_val_9045 === (2))){
var inst_9041 = (state_9044[(2)]);
var inst_9042 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_9041) : f__$1.call(null,inst_9041));
var state_9044__$1 = state_9044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9044__$1,inst_9042);
} else {
return null;
}
}
});})(c__7914__auto__,f__$1))
;
return ((function (switch__7528__auto__,c__7914__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__7529__auto__ = null;
var cljs$core$async$transduce_$_state_machine__7529__auto____0 = (function (){
var statearr_9054 = [null,null,null,null,null,null,null];
(statearr_9054[(0)] = cljs$core$async$transduce_$_state_machine__7529__auto__);

(statearr_9054[(1)] = (1));

return statearr_9054;
});
var cljs$core$async$transduce_$_state_machine__7529__auto____1 = (function (state_9044){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_9044);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e9055){if((e9055 instanceof Object)){
var ex__7532__auto__ = e9055;
var statearr_9059_10820 = state_9044;
(statearr_9059_10820[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9055;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10821 = state_9044;
state_9044 = G__10821;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__7529__auto__ = function(state_9044){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__7529__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__7529__auto____1.call(this,state_9044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__7529__auto____0;
cljs$core$async$transduce_$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__7529__auto____1;
return cljs$core$async$transduce_$_state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto__,f__$1))
})();
var state__7916__auto__ = (function (){var statearr_9072 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_9072[(6)] = c__7914__auto__);

return statearr_9072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto__,f__$1))
);

return c__7914__auto__;
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
var G__9080 = arguments.length;
switch (G__9080) {
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
var c__7914__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto__){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto__){
return (function (state_9107){
var state_val_9108 = (state_9107[(1)]);
if((state_val_9108 === (7))){
var inst_9089 = (state_9107[(2)]);
var state_9107__$1 = state_9107;
var statearr_9111_10823 = state_9107__$1;
(statearr_9111_10823[(2)] = inst_9089);

(statearr_9111_10823[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9108 === (1))){
var inst_9082 = cljs.core.seq(coll);
var inst_9083 = inst_9082;
var state_9107__$1 = (function (){var statearr_9113 = state_9107;
(statearr_9113[(7)] = inst_9083);

return statearr_9113;
})();
var statearr_9114_10824 = state_9107__$1;
(statearr_9114_10824[(2)] = null);

(statearr_9114_10824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9108 === (4))){
var inst_9083 = (state_9107[(7)]);
var inst_9087 = cljs.core.first(inst_9083);
var state_9107__$1 = state_9107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9107__$1,(7),ch,inst_9087);
} else {
if((state_val_9108 === (13))){
var inst_9101 = (state_9107[(2)]);
var state_9107__$1 = state_9107;
var statearr_9115_10825 = state_9107__$1;
(statearr_9115_10825[(2)] = inst_9101);

(statearr_9115_10825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9108 === (6))){
var inst_9092 = (state_9107[(2)]);
var state_9107__$1 = state_9107;
if(cljs.core.truth_(inst_9092)){
var statearr_9116_10826 = state_9107__$1;
(statearr_9116_10826[(1)] = (8));

} else {
var statearr_9117_10827 = state_9107__$1;
(statearr_9117_10827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9108 === (3))){
var inst_9105 = (state_9107[(2)]);
var state_9107__$1 = state_9107;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9107__$1,inst_9105);
} else {
if((state_val_9108 === (12))){
var state_9107__$1 = state_9107;
var statearr_9118_10828 = state_9107__$1;
(statearr_9118_10828[(2)] = null);

(statearr_9118_10828[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9108 === (2))){
var inst_9083 = (state_9107[(7)]);
var state_9107__$1 = state_9107;
if(cljs.core.truth_(inst_9083)){
var statearr_9119_10829 = state_9107__$1;
(statearr_9119_10829[(1)] = (4));

} else {
var statearr_9120_10830 = state_9107__$1;
(statearr_9120_10830[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9108 === (11))){
var inst_9098 = cljs.core.async.close_BANG_(ch);
var state_9107__$1 = state_9107;
var statearr_9126_10831 = state_9107__$1;
(statearr_9126_10831[(2)] = inst_9098);

(statearr_9126_10831[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9108 === (9))){
var state_9107__$1 = state_9107;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9128_10832 = state_9107__$1;
(statearr_9128_10832[(1)] = (11));

} else {
var statearr_9129_10833 = state_9107__$1;
(statearr_9129_10833[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9108 === (5))){
var inst_9083 = (state_9107[(7)]);
var state_9107__$1 = state_9107;
var statearr_9130_10834 = state_9107__$1;
(statearr_9130_10834[(2)] = inst_9083);

(statearr_9130_10834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9108 === (10))){
var inst_9103 = (state_9107[(2)]);
var state_9107__$1 = state_9107;
var statearr_9136_10835 = state_9107__$1;
(statearr_9136_10835[(2)] = inst_9103);

(statearr_9136_10835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9108 === (8))){
var inst_9083 = (state_9107[(7)]);
var inst_9094 = cljs.core.next(inst_9083);
var inst_9083__$1 = inst_9094;
var state_9107__$1 = (function (){var statearr_9140 = state_9107;
(statearr_9140[(7)] = inst_9083__$1);

return statearr_9140;
})();
var statearr_9141_10838 = state_9107__$1;
(statearr_9141_10838[(2)] = null);

(statearr_9141_10838[(1)] = (2));


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
});})(c__7914__auto__))
;
return ((function (switch__7528__auto__,c__7914__auto__){
return (function() {
var cljs$core$async$state_machine__7529__auto__ = null;
var cljs$core$async$state_machine__7529__auto____0 = (function (){
var statearr_9148 = [null,null,null,null,null,null,null,null];
(statearr_9148[(0)] = cljs$core$async$state_machine__7529__auto__);

(statearr_9148[(1)] = (1));

return statearr_9148;
});
var cljs$core$async$state_machine__7529__auto____1 = (function (state_9107){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_9107);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e9149){if((e9149 instanceof Object)){
var ex__7532__auto__ = e9149;
var statearr_9150_10840 = state_9107;
(statearr_9150_10840[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9149;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10841 = state_9107;
state_9107 = G__10841;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
cljs$core$async$state_machine__7529__auto__ = function(state_9107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7529__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7529__auto____1.call(this,state_9107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7529__auto____0;
cljs$core$async$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7529__auto____1;
return cljs$core$async$state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto__))
})();
var state__7916__auto__ = (function (){var statearr_9159 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_9159[(6)] = c__7914__auto__);

return statearr_9159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto__))
);

return c__7914__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9196 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9196 = (function (ch,cs,meta9197){
this.ch = ch;
this.cs = cs;
this.meta9197 = meta9197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9198,meta9197__$1){
var self__ = this;
var _9198__$1 = this;
return (new cljs.core.async.t_cljs$core$async9196(self__.ch,self__.cs,meta9197__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async9196.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9198){
var self__ = this;
var _9198__$1 = this;
return self__.meta9197;
});})(cs))
;

cljs.core.async.t_cljs$core$async9196.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9196.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async9196.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9196.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9196.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9196.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9196.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta9197","meta9197",-71817195,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async9196.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9196";

cljs.core.async.t_cljs$core$async9196.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async9196");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9196.
 */
cljs.core.async.__GT_t_cljs$core$async9196 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async9196(ch__$1,cs__$1,meta9197){
return (new cljs.core.async.t_cljs$core$async9196(ch__$1,cs__$1,meta9197));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async9196(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7914__auto___10886 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto___10886,cs,m,dchan,dctr,done){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto___10886,cs,m,dchan,dctr,done){
return (function (state_9364){
var state_val_9365 = (state_9364[(1)]);
if((state_val_9365 === (7))){
var inst_9360 = (state_9364[(2)]);
var state_9364__$1 = state_9364;
var statearr_9366_10888 = state_9364__$1;
(statearr_9366_10888[(2)] = inst_9360);

(statearr_9366_10888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (20))){
var inst_9249 = (state_9364[(7)]);
var inst_9261 = cljs.core.first(inst_9249);
var inst_9262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9261,(0),null);
var inst_9263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9261,(1),null);
var state_9364__$1 = (function (){var statearr_9367 = state_9364;
(statearr_9367[(8)] = inst_9262);

return statearr_9367;
})();
if(cljs.core.truth_(inst_9263)){
var statearr_9368_10890 = state_9364__$1;
(statearr_9368_10890[(1)] = (22));

} else {
var statearr_9369_10892 = state_9364__$1;
(statearr_9369_10892[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (27))){
var inst_9305 = (state_9364[(9)]);
var inst_9311 = (state_9364[(10)]);
var inst_9303 = (state_9364[(11)]);
var inst_9216 = (state_9364[(12)]);
var inst_9311__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_9303,inst_9305);
var inst_9312 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_9311__$1,inst_9216,done);
var state_9364__$1 = (function (){var statearr_9370 = state_9364;
(statearr_9370[(10)] = inst_9311__$1);

return statearr_9370;
})();
if(cljs.core.truth_(inst_9312)){
var statearr_9371_10906 = state_9364__$1;
(statearr_9371_10906[(1)] = (30));

} else {
var statearr_9372_10907 = state_9364__$1;
(statearr_9372_10907[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (1))){
var state_9364__$1 = state_9364;
var statearr_9373_10910 = state_9364__$1;
(statearr_9373_10910[(2)] = null);

(statearr_9373_10910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (24))){
var inst_9249 = (state_9364[(7)]);
var inst_9273 = (state_9364[(2)]);
var inst_9275 = cljs.core.next(inst_9249);
var inst_9227 = inst_9275;
var inst_9228 = null;
var inst_9229 = (0);
var inst_9230 = (0);
var state_9364__$1 = (function (){var statearr_9374 = state_9364;
(statearr_9374[(13)] = inst_9228);

(statearr_9374[(14)] = inst_9227);

(statearr_9374[(15)] = inst_9229);

(statearr_9374[(16)] = inst_9273);

(statearr_9374[(17)] = inst_9230);

return statearr_9374;
})();
var statearr_9375_10915 = state_9364__$1;
(statearr_9375_10915[(2)] = null);

(statearr_9375_10915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (39))){
var state_9364__$1 = state_9364;
var statearr_9380_10916 = state_9364__$1;
(statearr_9380_10916[(2)] = null);

(statearr_9380_10916[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (4))){
var inst_9216 = (state_9364[(12)]);
var inst_9216__$1 = (state_9364[(2)]);
var inst_9217 = (inst_9216__$1 == null);
var state_9364__$1 = (function (){var statearr_9383 = state_9364;
(statearr_9383[(12)] = inst_9216__$1);

return statearr_9383;
})();
if(cljs.core.truth_(inst_9217)){
var statearr_9384_10920 = state_9364__$1;
(statearr_9384_10920[(1)] = (5));

} else {
var statearr_9385_10923 = state_9364__$1;
(statearr_9385_10923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (15))){
var inst_9228 = (state_9364[(13)]);
var inst_9227 = (state_9364[(14)]);
var inst_9229 = (state_9364[(15)]);
var inst_9230 = (state_9364[(17)]);
var inst_9245 = (state_9364[(2)]);
var inst_9246 = (inst_9230 + (1));
var tmp9376 = inst_9228;
var tmp9377 = inst_9227;
var tmp9378 = inst_9229;
var inst_9227__$1 = tmp9377;
var inst_9228__$1 = tmp9376;
var inst_9229__$1 = tmp9378;
var inst_9230__$1 = inst_9246;
var state_9364__$1 = (function (){var statearr_9387 = state_9364;
(statearr_9387[(18)] = inst_9245);

(statearr_9387[(13)] = inst_9228__$1);

(statearr_9387[(14)] = inst_9227__$1);

(statearr_9387[(15)] = inst_9229__$1);

(statearr_9387[(17)] = inst_9230__$1);

return statearr_9387;
})();
var statearr_9388_10925 = state_9364__$1;
(statearr_9388_10925[(2)] = null);

(statearr_9388_10925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (21))){
var inst_9278 = (state_9364[(2)]);
var state_9364__$1 = state_9364;
var statearr_9392_10928 = state_9364__$1;
(statearr_9392_10928[(2)] = inst_9278);

(statearr_9392_10928[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (31))){
var inst_9311 = (state_9364[(10)]);
var inst_9315 = done(null);
var inst_9316 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_9311);
var state_9364__$1 = (function (){var statearr_9393 = state_9364;
(statearr_9393[(19)] = inst_9315);

return statearr_9393;
})();
var statearr_9394_10931 = state_9364__$1;
(statearr_9394_10931[(2)] = inst_9316);

(statearr_9394_10931[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (32))){
var inst_9305 = (state_9364[(9)]);
var inst_9303 = (state_9364[(11)]);
var inst_9302 = (state_9364[(20)]);
var inst_9304 = (state_9364[(21)]);
var inst_9318 = (state_9364[(2)]);
var inst_9319 = (inst_9305 + (1));
var tmp9389 = inst_9303;
var tmp9390 = inst_9302;
var tmp9391 = inst_9304;
var inst_9302__$1 = tmp9390;
var inst_9303__$1 = tmp9389;
var inst_9304__$1 = tmp9391;
var inst_9305__$1 = inst_9319;
var state_9364__$1 = (function (){var statearr_9395 = state_9364;
(statearr_9395[(9)] = inst_9305__$1);

(statearr_9395[(11)] = inst_9303__$1);

(statearr_9395[(20)] = inst_9302__$1);

(statearr_9395[(22)] = inst_9318);

(statearr_9395[(21)] = inst_9304__$1);

return statearr_9395;
})();
var statearr_9396_10937 = state_9364__$1;
(statearr_9396_10937[(2)] = null);

(statearr_9396_10937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (40))){
var inst_9332 = (state_9364[(23)]);
var inst_9336 = done(null);
var inst_9337 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_9332);
var state_9364__$1 = (function (){var statearr_9397 = state_9364;
(statearr_9397[(24)] = inst_9336);

return statearr_9397;
})();
var statearr_9398_10938 = state_9364__$1;
(statearr_9398_10938[(2)] = inst_9337);

(statearr_9398_10938[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (33))){
var inst_9322 = (state_9364[(25)]);
var inst_9324 = cljs.core.chunked_seq_QMARK_(inst_9322);
var state_9364__$1 = state_9364;
if(inst_9324){
var statearr_9399_10939 = state_9364__$1;
(statearr_9399_10939[(1)] = (36));

} else {
var statearr_9400_10940 = state_9364__$1;
(statearr_9400_10940[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (13))){
var inst_9239 = (state_9364[(26)]);
var inst_9242 = cljs.core.async.close_BANG_(inst_9239);
var state_9364__$1 = state_9364;
var statearr_9401_10941 = state_9364__$1;
(statearr_9401_10941[(2)] = inst_9242);

(statearr_9401_10941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (22))){
var inst_9262 = (state_9364[(8)]);
var inst_9270 = cljs.core.async.close_BANG_(inst_9262);
var state_9364__$1 = state_9364;
var statearr_9402_10942 = state_9364__$1;
(statearr_9402_10942[(2)] = inst_9270);

(statearr_9402_10942[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (36))){
var inst_9322 = (state_9364[(25)]);
var inst_9327 = cljs.core.chunk_first(inst_9322);
var inst_9328 = cljs.core.chunk_rest(inst_9322);
var inst_9329 = cljs.core.count(inst_9327);
var inst_9302 = inst_9328;
var inst_9303 = inst_9327;
var inst_9304 = inst_9329;
var inst_9305 = (0);
var state_9364__$1 = (function (){var statearr_9405 = state_9364;
(statearr_9405[(9)] = inst_9305);

(statearr_9405[(11)] = inst_9303);

(statearr_9405[(20)] = inst_9302);

(statearr_9405[(21)] = inst_9304);

return statearr_9405;
})();
var statearr_9408_10949 = state_9364__$1;
(statearr_9408_10949[(2)] = null);

(statearr_9408_10949[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (41))){
var inst_9322 = (state_9364[(25)]);
var inst_9339 = (state_9364[(2)]);
var inst_9340 = cljs.core.next(inst_9322);
var inst_9302 = inst_9340;
var inst_9303 = null;
var inst_9304 = (0);
var inst_9305 = (0);
var state_9364__$1 = (function (){var statearr_9409 = state_9364;
(statearr_9409[(9)] = inst_9305);

(statearr_9409[(11)] = inst_9303);

(statearr_9409[(20)] = inst_9302);

(statearr_9409[(27)] = inst_9339);

(statearr_9409[(21)] = inst_9304);

return statearr_9409;
})();
var statearr_9410_10951 = state_9364__$1;
(statearr_9410_10951[(2)] = null);

(statearr_9410_10951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (43))){
var state_9364__$1 = state_9364;
var statearr_9413_10953 = state_9364__$1;
(statearr_9413_10953[(2)] = null);

(statearr_9413_10953[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (29))){
var inst_9348 = (state_9364[(2)]);
var state_9364__$1 = state_9364;
var statearr_9415_10954 = state_9364__$1;
(statearr_9415_10954[(2)] = inst_9348);

(statearr_9415_10954[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (44))){
var inst_9357 = (state_9364[(2)]);
var state_9364__$1 = (function (){var statearr_9416 = state_9364;
(statearr_9416[(28)] = inst_9357);

return statearr_9416;
})();
var statearr_9417_10957 = state_9364__$1;
(statearr_9417_10957[(2)] = null);

(statearr_9417_10957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (6))){
var inst_9294 = (state_9364[(29)]);
var inst_9293 = cljs.core.deref(cs);
var inst_9294__$1 = cljs.core.keys(inst_9293);
var inst_9295 = cljs.core.count(inst_9294__$1);
var inst_9296 = cljs.core.reset_BANG_(dctr,inst_9295);
var inst_9301 = cljs.core.seq(inst_9294__$1);
var inst_9302 = inst_9301;
var inst_9303 = null;
var inst_9304 = (0);
var inst_9305 = (0);
var state_9364__$1 = (function (){var statearr_9421 = state_9364;
(statearr_9421[(9)] = inst_9305);

(statearr_9421[(30)] = inst_9296);

(statearr_9421[(11)] = inst_9303);

(statearr_9421[(20)] = inst_9302);

(statearr_9421[(21)] = inst_9304);

(statearr_9421[(29)] = inst_9294__$1);

return statearr_9421;
})();
var statearr_9422_10958 = state_9364__$1;
(statearr_9422_10958[(2)] = null);

(statearr_9422_10958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (28))){
var inst_9322 = (state_9364[(25)]);
var inst_9302 = (state_9364[(20)]);
var inst_9322__$1 = cljs.core.seq(inst_9302);
var state_9364__$1 = (function (){var statearr_9425 = state_9364;
(statearr_9425[(25)] = inst_9322__$1);

return statearr_9425;
})();
if(inst_9322__$1){
var statearr_9426_10964 = state_9364__$1;
(statearr_9426_10964[(1)] = (33));

} else {
var statearr_9428_10965 = state_9364__$1;
(statearr_9428_10965[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (25))){
var inst_9305 = (state_9364[(9)]);
var inst_9304 = (state_9364[(21)]);
var inst_9308 = (inst_9305 < inst_9304);
var inst_9309 = inst_9308;
var state_9364__$1 = state_9364;
if(cljs.core.truth_(inst_9309)){
var statearr_9429_10966 = state_9364__$1;
(statearr_9429_10966[(1)] = (27));

} else {
var statearr_9430_10967 = state_9364__$1;
(statearr_9430_10967[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (34))){
var state_9364__$1 = state_9364;
var statearr_9431_10968 = state_9364__$1;
(statearr_9431_10968[(2)] = null);

(statearr_9431_10968[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (17))){
var state_9364__$1 = state_9364;
var statearr_9433_10969 = state_9364__$1;
(statearr_9433_10969[(2)] = null);

(statearr_9433_10969[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (3))){
var inst_9362 = (state_9364[(2)]);
var state_9364__$1 = state_9364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9364__$1,inst_9362);
} else {
if((state_val_9365 === (12))){
var inst_9283 = (state_9364[(2)]);
var state_9364__$1 = state_9364;
var statearr_9435_10970 = state_9364__$1;
(statearr_9435_10970[(2)] = inst_9283);

(statearr_9435_10970[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (2))){
var state_9364__$1 = state_9364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9364__$1,(4),ch);
} else {
if((state_val_9365 === (23))){
var state_9364__$1 = state_9364;
var statearr_9437_10976 = state_9364__$1;
(statearr_9437_10976[(2)] = null);

(statearr_9437_10976[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (35))){
var inst_9346 = (state_9364[(2)]);
var state_9364__$1 = state_9364;
var statearr_9438_10977 = state_9364__$1;
(statearr_9438_10977[(2)] = inst_9346);

(statearr_9438_10977[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (19))){
var inst_9249 = (state_9364[(7)]);
var inst_9253 = cljs.core.chunk_first(inst_9249);
var inst_9254 = cljs.core.chunk_rest(inst_9249);
var inst_9255 = cljs.core.count(inst_9253);
var inst_9227 = inst_9254;
var inst_9228 = inst_9253;
var inst_9229 = inst_9255;
var inst_9230 = (0);
var state_9364__$1 = (function (){var statearr_9439 = state_9364;
(statearr_9439[(13)] = inst_9228);

(statearr_9439[(14)] = inst_9227);

(statearr_9439[(15)] = inst_9229);

(statearr_9439[(17)] = inst_9230);

return statearr_9439;
})();
var statearr_9441_10979 = state_9364__$1;
(statearr_9441_10979[(2)] = null);

(statearr_9441_10979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (11))){
var inst_9249 = (state_9364[(7)]);
var inst_9227 = (state_9364[(14)]);
var inst_9249__$1 = cljs.core.seq(inst_9227);
var state_9364__$1 = (function (){var statearr_9442 = state_9364;
(statearr_9442[(7)] = inst_9249__$1);

return statearr_9442;
})();
if(inst_9249__$1){
var statearr_9443_10991 = state_9364__$1;
(statearr_9443_10991[(1)] = (16));

} else {
var statearr_9444_10999 = state_9364__$1;
(statearr_9444_10999[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (9))){
var inst_9285 = (state_9364[(2)]);
var state_9364__$1 = state_9364;
var statearr_9446_11000 = state_9364__$1;
(statearr_9446_11000[(2)] = inst_9285);

(statearr_9446_11000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (5))){
var inst_9224 = cljs.core.deref(cs);
var inst_9225 = cljs.core.seq(inst_9224);
var inst_9227 = inst_9225;
var inst_9228 = null;
var inst_9229 = (0);
var inst_9230 = (0);
var state_9364__$1 = (function (){var statearr_9448 = state_9364;
(statearr_9448[(13)] = inst_9228);

(statearr_9448[(14)] = inst_9227);

(statearr_9448[(15)] = inst_9229);

(statearr_9448[(17)] = inst_9230);

return statearr_9448;
})();
var statearr_9449_11005 = state_9364__$1;
(statearr_9449_11005[(2)] = null);

(statearr_9449_11005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (14))){
var state_9364__$1 = state_9364;
var statearr_9450_11006 = state_9364__$1;
(statearr_9450_11006[(2)] = null);

(statearr_9450_11006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (45))){
var inst_9354 = (state_9364[(2)]);
var state_9364__$1 = state_9364;
var statearr_9451_11007 = state_9364__$1;
(statearr_9451_11007[(2)] = inst_9354);

(statearr_9451_11007[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (26))){
var inst_9294 = (state_9364[(29)]);
var inst_9350 = (state_9364[(2)]);
var inst_9351 = cljs.core.seq(inst_9294);
var state_9364__$1 = (function (){var statearr_9453 = state_9364;
(statearr_9453[(31)] = inst_9350);

return statearr_9453;
})();
if(inst_9351){
var statearr_9454_11012 = state_9364__$1;
(statearr_9454_11012[(1)] = (42));

} else {
var statearr_9457_11013 = state_9364__$1;
(statearr_9457_11013[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (16))){
var inst_9249 = (state_9364[(7)]);
var inst_9251 = cljs.core.chunked_seq_QMARK_(inst_9249);
var state_9364__$1 = state_9364;
if(inst_9251){
var statearr_9458_11014 = state_9364__$1;
(statearr_9458_11014[(1)] = (19));

} else {
var statearr_9459_11019 = state_9364__$1;
(statearr_9459_11019[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (38))){
var inst_9343 = (state_9364[(2)]);
var state_9364__$1 = state_9364;
var statearr_9460_11021 = state_9364__$1;
(statearr_9460_11021[(2)] = inst_9343);

(statearr_9460_11021[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (30))){
var state_9364__$1 = state_9364;
var statearr_9461_11027 = state_9364__$1;
(statearr_9461_11027[(2)] = null);

(statearr_9461_11027[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (10))){
var inst_9228 = (state_9364[(13)]);
var inst_9230 = (state_9364[(17)]);
var inst_9238 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_9228,inst_9230);
var inst_9239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9238,(0),null);
var inst_9240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9238,(1),null);
var state_9364__$1 = (function (){var statearr_9462 = state_9364;
(statearr_9462[(26)] = inst_9239);

return statearr_9462;
})();
if(cljs.core.truth_(inst_9240)){
var statearr_9463_11043 = state_9364__$1;
(statearr_9463_11043[(1)] = (13));

} else {
var statearr_9464_11044 = state_9364__$1;
(statearr_9464_11044[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (18))){
var inst_9281 = (state_9364[(2)]);
var state_9364__$1 = state_9364;
var statearr_9465_11045 = state_9364__$1;
(statearr_9465_11045[(2)] = inst_9281);

(statearr_9465_11045[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (42))){
var state_9364__$1 = state_9364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9364__$1,(45),dchan);
} else {
if((state_val_9365 === (37))){
var inst_9332 = (state_9364[(23)]);
var inst_9322 = (state_9364[(25)]);
var inst_9216 = (state_9364[(12)]);
var inst_9332__$1 = cljs.core.first(inst_9322);
var inst_9333 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_9332__$1,inst_9216,done);
var state_9364__$1 = (function (){var statearr_9466 = state_9364;
(statearr_9466[(23)] = inst_9332__$1);

return statearr_9466;
})();
if(cljs.core.truth_(inst_9333)){
var statearr_9467_11046 = state_9364__$1;
(statearr_9467_11046[(1)] = (39));

} else {
var statearr_9468_11047 = state_9364__$1;
(statearr_9468_11047[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9365 === (8))){
var inst_9229 = (state_9364[(15)]);
var inst_9230 = (state_9364[(17)]);
var inst_9232 = (inst_9230 < inst_9229);
var inst_9233 = inst_9232;
var state_9364__$1 = state_9364;
if(cljs.core.truth_(inst_9233)){
var statearr_9470_11050 = state_9364__$1;
(statearr_9470_11050[(1)] = (10));

} else {
var statearr_9471_11051 = state_9364__$1;
(statearr_9471_11051[(1)] = (11));

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
});})(c__7914__auto___10886,cs,m,dchan,dctr,done))
;
return ((function (switch__7528__auto__,c__7914__auto___10886,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7529__auto__ = null;
var cljs$core$async$mult_$_state_machine__7529__auto____0 = (function (){
var statearr_9474 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9474[(0)] = cljs$core$async$mult_$_state_machine__7529__auto__);

(statearr_9474[(1)] = (1));

return statearr_9474;
});
var cljs$core$async$mult_$_state_machine__7529__auto____1 = (function (state_9364){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_9364);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e9477){if((e9477 instanceof Object)){
var ex__7532__auto__ = e9477;
var statearr_9478_11056 = state_9364;
(statearr_9478_11056[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9477;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11059 = state_9364;
state_9364 = G__11059;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7529__auto__ = function(state_9364){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7529__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7529__auto____1.call(this,state_9364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7529__auto____0;
cljs$core$async$mult_$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7529__auto____1;
return cljs$core$async$mult_$_state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto___10886,cs,m,dchan,dctr,done))
})();
var state__7916__auto__ = (function (){var statearr_9479 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_9479[(6)] = c__7914__auto___10886);

return statearr_9479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto___10886,cs,m,dchan,dctr,done))
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
var G__9482 = arguments.length;
switch (G__9482) {
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
var len__4730__auto___11096 = arguments.length;
var i__4731__auto___11097 = (0);
while(true){
if((i__4731__auto___11097 < len__4730__auto___11096)){
args__4736__auto__.push((arguments[i__4731__auto___11097]));

var G__11109 = (i__4731__auto___11097 + (1));
i__4731__auto___11097 = G__11109;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__9501){
var map__9503 = p__9501;
var map__9503__$1 = (((((!((map__9503 == null))))?(((((map__9503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9503):map__9503);
var opts = map__9503__$1;
var statearr_9505_11127 = state;
(statearr_9505_11127[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__9503,map__9503__$1,opts){
return (function (val){
var statearr_9506_11130 = state;
(statearr_9506_11130[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__9503,map__9503__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_9508_11135 = state;
(statearr_9508_11135[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq9495){
var G__9496 = cljs.core.first(seq9495);
var seq9495__$1 = cljs.core.next(seq9495);
var G__9497 = cljs.core.first(seq9495__$1);
var seq9495__$2 = cljs.core.next(seq9495__$1);
var G__9498 = cljs.core.first(seq9495__$2);
var seq9495__$3 = cljs.core.next(seq9495__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9496,G__9497,G__9498,seq9495__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9517 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9517 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta9518){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta9518 = meta9518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9519,meta9518__$1){
var self__ = this;
var _9519__$1 = this;
return (new cljs.core.async.t_cljs$core$async9517(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta9518__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9517.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_9519){
var self__ = this;
var _9519__$1 = this;
return self__.meta9518;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9517.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9517.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9517.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9517.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9517.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9517.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9517.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9517.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async9517.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta9518","meta9518",1191882491,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async9517.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9517";

cljs.core.async.t_cljs$core$async9517.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async9517");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9517.
 */
cljs.core.async.__GT_t_cljs$core$async9517 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async9517(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9518){
return (new cljs.core.async.t_cljs$core$async9517(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta9518));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async9517(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7914__auto___11184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto___11184,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto___11184,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_9659){
var state_val_9660 = (state_9659[(1)]);
if((state_val_9660 === (7))){
var inst_9553 = (state_9659[(2)]);
var state_9659__$1 = state_9659;
var statearr_9670_11199 = state_9659__$1;
(statearr_9670_11199[(2)] = inst_9553);

(statearr_9670_11199[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (20))){
var inst_9565 = (state_9659[(7)]);
var state_9659__$1 = state_9659;
var statearr_9674_11201 = state_9659__$1;
(statearr_9674_11201[(2)] = inst_9565);

(statearr_9674_11201[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (27))){
var state_9659__$1 = state_9659;
var statearr_9676_11206 = state_9659__$1;
(statearr_9676_11206[(2)] = null);

(statearr_9676_11206[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (1))){
var inst_9538 = (state_9659[(8)]);
var inst_9538__$1 = calc_state();
var inst_9541 = (inst_9538__$1 == null);
var inst_9542 = cljs.core.not(inst_9541);
var state_9659__$1 = (function (){var statearr_9677 = state_9659;
(statearr_9677[(8)] = inst_9538__$1);

return statearr_9677;
})();
if(inst_9542){
var statearr_9681_11207 = state_9659__$1;
(statearr_9681_11207[(1)] = (2));

} else {
var statearr_9682_11208 = state_9659__$1;
(statearr_9682_11208[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (24))){
var inst_9623 = (state_9659[(9)]);
var inst_9600 = (state_9659[(10)]);
var inst_9589 = (state_9659[(11)]);
var inst_9623__$1 = (inst_9589.cljs$core$IFn$_invoke$arity$1 ? inst_9589.cljs$core$IFn$_invoke$arity$1(inst_9600) : inst_9589.call(null,inst_9600));
var state_9659__$1 = (function (){var statearr_9685 = state_9659;
(statearr_9685[(9)] = inst_9623__$1);

return statearr_9685;
})();
if(cljs.core.truth_(inst_9623__$1)){
var statearr_9686_11211 = state_9659__$1;
(statearr_9686_11211[(1)] = (29));

} else {
var statearr_9687_11213 = state_9659__$1;
(statearr_9687_11213[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (4))){
var inst_9556 = (state_9659[(2)]);
var state_9659__$1 = state_9659;
if(cljs.core.truth_(inst_9556)){
var statearr_9689_11215 = state_9659__$1;
(statearr_9689_11215[(1)] = (8));

} else {
var statearr_9690_11216 = state_9659__$1;
(statearr_9690_11216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (15))){
var inst_9583 = (state_9659[(2)]);
var state_9659__$1 = state_9659;
if(cljs.core.truth_(inst_9583)){
var statearr_9694_11217 = state_9659__$1;
(statearr_9694_11217[(1)] = (19));

} else {
var statearr_9695_11218 = state_9659__$1;
(statearr_9695_11218[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (21))){
var inst_9588 = (state_9659[(12)]);
var inst_9588__$1 = (state_9659[(2)]);
var inst_9589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9588__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9588__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9588__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_9659__$1 = (function (){var statearr_9697 = state_9659;
(statearr_9697[(12)] = inst_9588__$1);

(statearr_9697[(13)] = inst_9590);

(statearr_9697[(11)] = inst_9589);

return statearr_9697;
})();
return cljs.core.async.ioc_alts_BANG_(state_9659__$1,(22),inst_9591);
} else {
if((state_val_9660 === (31))){
var inst_9636 = (state_9659[(2)]);
var state_9659__$1 = state_9659;
if(cljs.core.truth_(inst_9636)){
var statearr_9698_11229 = state_9659__$1;
(statearr_9698_11229[(1)] = (32));

} else {
var statearr_9699_11230 = state_9659__$1;
(statearr_9699_11230[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (32))){
var inst_9599 = (state_9659[(14)]);
var state_9659__$1 = state_9659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9659__$1,(35),out,inst_9599);
} else {
if((state_val_9660 === (33))){
var inst_9588 = (state_9659[(12)]);
var inst_9565 = inst_9588;
var state_9659__$1 = (function (){var statearr_9703 = state_9659;
(statearr_9703[(7)] = inst_9565);

return statearr_9703;
})();
var statearr_9704_11231 = state_9659__$1;
(statearr_9704_11231[(2)] = null);

(statearr_9704_11231[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (13))){
var inst_9565 = (state_9659[(7)]);
var inst_9572 = inst_9565.cljs$lang$protocol_mask$partition0$;
var inst_9573 = (inst_9572 & (64));
var inst_9574 = inst_9565.cljs$core$ISeq$;
var inst_9575 = (cljs.core.PROTOCOL_SENTINEL === inst_9574);
var inst_9576 = ((inst_9573) || (inst_9575));
var state_9659__$1 = state_9659;
if(cljs.core.truth_(inst_9576)){
var statearr_9706_11232 = state_9659__$1;
(statearr_9706_11232[(1)] = (16));

} else {
var statearr_9711_11233 = state_9659__$1;
(statearr_9711_11233[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (22))){
var inst_9599 = (state_9659[(14)]);
var inst_9600 = (state_9659[(10)]);
var inst_9597 = (state_9659[(2)]);
var inst_9599__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9597,(0),null);
var inst_9600__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9597,(1),null);
var inst_9606 = (inst_9599__$1 == null);
var inst_9607 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_9600__$1,change);
var inst_9608 = ((inst_9606) || (inst_9607));
var state_9659__$1 = (function (){var statearr_9713 = state_9659;
(statearr_9713[(14)] = inst_9599__$1);

(statearr_9713[(10)] = inst_9600__$1);

return statearr_9713;
})();
if(cljs.core.truth_(inst_9608)){
var statearr_9714_11235 = state_9659__$1;
(statearr_9714_11235[(1)] = (23));

} else {
var statearr_9715_11236 = state_9659__$1;
(statearr_9715_11236[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (36))){
var inst_9588 = (state_9659[(12)]);
var inst_9565 = inst_9588;
var state_9659__$1 = (function (){var statearr_9716 = state_9659;
(statearr_9716[(7)] = inst_9565);

return statearr_9716;
})();
var statearr_9717_11237 = state_9659__$1;
(statearr_9717_11237[(2)] = null);

(statearr_9717_11237[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (29))){
var inst_9623 = (state_9659[(9)]);
var state_9659__$1 = state_9659;
var statearr_9718_11242 = state_9659__$1;
(statearr_9718_11242[(2)] = inst_9623);

(statearr_9718_11242[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (6))){
var state_9659__$1 = state_9659;
var statearr_9719_11244 = state_9659__$1;
(statearr_9719_11244[(2)] = false);

(statearr_9719_11244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (28))){
var inst_9619 = (state_9659[(2)]);
var inst_9620 = calc_state();
var inst_9565 = inst_9620;
var state_9659__$1 = (function (){var statearr_9720 = state_9659;
(statearr_9720[(15)] = inst_9619);

(statearr_9720[(7)] = inst_9565);

return statearr_9720;
})();
var statearr_9721_11248 = state_9659__$1;
(statearr_9721_11248[(2)] = null);

(statearr_9721_11248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (25))){
var inst_9650 = (state_9659[(2)]);
var state_9659__$1 = state_9659;
var statearr_9725_11249 = state_9659__$1;
(statearr_9725_11249[(2)] = inst_9650);

(statearr_9725_11249[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (34))){
var inst_9648 = (state_9659[(2)]);
var state_9659__$1 = state_9659;
var statearr_9726_11250 = state_9659__$1;
(statearr_9726_11250[(2)] = inst_9648);

(statearr_9726_11250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (17))){
var state_9659__$1 = state_9659;
var statearr_9727_11253 = state_9659__$1;
(statearr_9727_11253[(2)] = false);

(statearr_9727_11253[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (3))){
var state_9659__$1 = state_9659;
var statearr_9728_11254 = state_9659__$1;
(statearr_9728_11254[(2)] = false);

(statearr_9728_11254[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (12))){
var inst_9652 = (state_9659[(2)]);
var state_9659__$1 = state_9659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9659__$1,inst_9652);
} else {
if((state_val_9660 === (2))){
var inst_9538 = (state_9659[(8)]);
var inst_9545 = inst_9538.cljs$lang$protocol_mask$partition0$;
var inst_9546 = (inst_9545 & (64));
var inst_9547 = inst_9538.cljs$core$ISeq$;
var inst_9548 = (cljs.core.PROTOCOL_SENTINEL === inst_9547);
var inst_9549 = ((inst_9546) || (inst_9548));
var state_9659__$1 = state_9659;
if(cljs.core.truth_(inst_9549)){
var statearr_9730_11269 = state_9659__$1;
(statearr_9730_11269[(1)] = (5));

} else {
var statearr_9731_11272 = state_9659__$1;
(statearr_9731_11272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (23))){
var inst_9599 = (state_9659[(14)]);
var inst_9610 = (inst_9599 == null);
var state_9659__$1 = state_9659;
if(cljs.core.truth_(inst_9610)){
var statearr_9732_11275 = state_9659__$1;
(statearr_9732_11275[(1)] = (26));

} else {
var statearr_9733_11276 = state_9659__$1;
(statearr_9733_11276[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (35))){
var inst_9639 = (state_9659[(2)]);
var state_9659__$1 = state_9659;
if(cljs.core.truth_(inst_9639)){
var statearr_9735_11277 = state_9659__$1;
(statearr_9735_11277[(1)] = (36));

} else {
var statearr_9736_11278 = state_9659__$1;
(statearr_9736_11278[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (19))){
var inst_9565 = (state_9659[(7)]);
var inst_9585 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_9565);
var state_9659__$1 = state_9659;
var statearr_9738_11280 = state_9659__$1;
(statearr_9738_11280[(2)] = inst_9585);

(statearr_9738_11280[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (11))){
var inst_9565 = (state_9659[(7)]);
var inst_9569 = (inst_9565 == null);
var inst_9570 = cljs.core.not(inst_9569);
var state_9659__$1 = state_9659;
if(inst_9570){
var statearr_9741_11283 = state_9659__$1;
(statearr_9741_11283[(1)] = (13));

} else {
var statearr_9742_11284 = state_9659__$1;
(statearr_9742_11284[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (9))){
var inst_9538 = (state_9659[(8)]);
var state_9659__$1 = state_9659;
var statearr_9743_11287 = state_9659__$1;
(statearr_9743_11287[(2)] = inst_9538);

(statearr_9743_11287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (5))){
var state_9659__$1 = state_9659;
var statearr_9744_11288 = state_9659__$1;
(statearr_9744_11288[(2)] = true);

(statearr_9744_11288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (14))){
var state_9659__$1 = state_9659;
var statearr_9746_11290 = state_9659__$1;
(statearr_9746_11290[(2)] = false);

(statearr_9746_11290[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (26))){
var inst_9600 = (state_9659[(10)]);
var inst_9616 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_9600);
var state_9659__$1 = state_9659;
var statearr_9752_11296 = state_9659__$1;
(statearr_9752_11296[(2)] = inst_9616);

(statearr_9752_11296[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (16))){
var state_9659__$1 = state_9659;
var statearr_9754_11299 = state_9659__$1;
(statearr_9754_11299[(2)] = true);

(statearr_9754_11299[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (38))){
var inst_9644 = (state_9659[(2)]);
var state_9659__$1 = state_9659;
var statearr_9755_11303 = state_9659__$1;
(statearr_9755_11303[(2)] = inst_9644);

(statearr_9755_11303[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (30))){
var inst_9590 = (state_9659[(13)]);
var inst_9600 = (state_9659[(10)]);
var inst_9589 = (state_9659[(11)]);
var inst_9631 = cljs.core.empty_QMARK_(inst_9589);
var inst_9632 = (inst_9590.cljs$core$IFn$_invoke$arity$1 ? inst_9590.cljs$core$IFn$_invoke$arity$1(inst_9600) : inst_9590.call(null,inst_9600));
var inst_9633 = cljs.core.not(inst_9632);
var inst_9634 = ((inst_9631) && (inst_9633));
var state_9659__$1 = state_9659;
var statearr_9756_11308 = state_9659__$1;
(statearr_9756_11308[(2)] = inst_9634);

(statearr_9756_11308[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (10))){
var inst_9538 = (state_9659[(8)]);
var inst_9561 = (state_9659[(2)]);
var inst_9562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9561,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_9563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9561,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_9564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9561,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_9565 = inst_9538;
var state_9659__$1 = (function (){var statearr_9758 = state_9659;
(statearr_9758[(16)] = inst_9563);

(statearr_9758[(17)] = inst_9564);

(statearr_9758[(7)] = inst_9565);

(statearr_9758[(18)] = inst_9562);

return statearr_9758;
})();
var statearr_9759_11310 = state_9659__$1;
(statearr_9759_11310[(2)] = null);

(statearr_9759_11310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (18))){
var inst_9580 = (state_9659[(2)]);
var state_9659__$1 = state_9659;
var statearr_9760_11311 = state_9659__$1;
(statearr_9760_11311[(2)] = inst_9580);

(statearr_9760_11311[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (37))){
var state_9659__$1 = state_9659;
var statearr_9761_11312 = state_9659__$1;
(statearr_9761_11312[(2)] = null);

(statearr_9761_11312[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9660 === (8))){
var inst_9538 = (state_9659[(8)]);
var inst_9558 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_9538);
var state_9659__$1 = state_9659;
var statearr_9762_11313 = state_9659__$1;
(statearr_9762_11313[(2)] = inst_9558);

(statearr_9762_11313[(1)] = (10));


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
});})(c__7914__auto___11184,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7528__auto__,c__7914__auto___11184,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7529__auto__ = null;
var cljs$core$async$mix_$_state_machine__7529__auto____0 = (function (){
var statearr_9770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9770[(0)] = cljs$core$async$mix_$_state_machine__7529__auto__);

(statearr_9770[(1)] = (1));

return statearr_9770;
});
var cljs$core$async$mix_$_state_machine__7529__auto____1 = (function (state_9659){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_9659);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e9772){if((e9772 instanceof Object)){
var ex__7532__auto__ = e9772;
var statearr_9773_11320 = state_9659;
(statearr_9773_11320[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9772;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11323 = state_9659;
state_9659 = G__11323;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7529__auto__ = function(state_9659){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7529__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7529__auto____1.call(this,state_9659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7529__auto____0;
cljs$core$async$mix_$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7529__auto____1;
return cljs$core$async$mix_$_state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto___11184,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7916__auto__ = (function (){var statearr_9774 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_9774[(6)] = c__7914__auto___11184);

return statearr_9774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto___11184,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__9783 = arguments.length;
switch (G__9783) {
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
var G__9796 = arguments.length;
switch (G__9796) {
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
return (function (p1__9794_SHARP_){
if(cljs.core.truth_((p1__9794_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__9794_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__9794_SHARP_.call(null,topic)))){
return p1__9794_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__9794_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9799 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9799 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta9800){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta9800 = meta9800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_9801,meta9800__$1){
var self__ = this;
var _9801__$1 = this;
return (new cljs.core.async.t_cljs$core$async9799(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta9800__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9799.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_9801){
var self__ = this;
var _9801__$1 = this;
return self__.meta9800;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9799.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9799.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9799.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9799.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9799.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async9799.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9799.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9799.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta9800","meta9800",1954531914,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async9799.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9799";

cljs.core.async.t_cljs$core$async9799.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async9799");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9799.
 */
cljs.core.async.__GT_t_cljs$core$async9799 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async9799(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9800){
return (new cljs.core.async.t_cljs$core$async9799(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta9800));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async9799(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7914__auto___11359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto___11359,mults,ensure_mult,p){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto___11359,mults,ensure_mult,p){
return (function (state_9895){
var state_val_9897 = (state_9895[(1)]);
if((state_val_9897 === (7))){
var inst_9890 = (state_9895[(2)]);
var state_9895__$1 = state_9895;
var statearr_9904_11361 = state_9895__$1;
(statearr_9904_11361[(2)] = inst_9890);

(statearr_9904_11361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (20))){
var state_9895__$1 = state_9895;
var statearr_9906_11365 = state_9895__$1;
(statearr_9906_11365[(2)] = null);

(statearr_9906_11365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (1))){
var state_9895__$1 = state_9895;
var statearr_9911_11367 = state_9895__$1;
(statearr_9911_11367[(2)] = null);

(statearr_9911_11367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (24))){
var inst_9871 = (state_9895[(7)]);
var inst_9882 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_9871);
var state_9895__$1 = state_9895;
var statearr_9912_11374 = state_9895__$1;
(statearr_9912_11374[(2)] = inst_9882);

(statearr_9912_11374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (4))){
var inst_9809 = (state_9895[(8)]);
var inst_9809__$1 = (state_9895[(2)]);
var inst_9811 = (inst_9809__$1 == null);
var state_9895__$1 = (function (){var statearr_9915 = state_9895;
(statearr_9915[(8)] = inst_9809__$1);

return statearr_9915;
})();
if(cljs.core.truth_(inst_9811)){
var statearr_9916_11377 = state_9895__$1;
(statearr_9916_11377[(1)] = (5));

} else {
var statearr_9917_11379 = state_9895__$1;
(statearr_9917_11379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (15))){
var inst_9864 = (state_9895[(2)]);
var state_9895__$1 = state_9895;
var statearr_9919_11381 = state_9895__$1;
(statearr_9919_11381[(2)] = inst_9864);

(statearr_9919_11381[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (21))){
var inst_9887 = (state_9895[(2)]);
var state_9895__$1 = (function (){var statearr_9920 = state_9895;
(statearr_9920[(9)] = inst_9887);

return statearr_9920;
})();
var statearr_9921_11382 = state_9895__$1;
(statearr_9921_11382[(2)] = null);

(statearr_9921_11382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (13))){
var inst_9841 = (state_9895[(10)]);
var inst_9843 = cljs.core.chunked_seq_QMARK_(inst_9841);
var state_9895__$1 = state_9895;
if(inst_9843){
var statearr_9924_11383 = state_9895__$1;
(statearr_9924_11383[(1)] = (16));

} else {
var statearr_9925_11384 = state_9895__$1;
(statearr_9925_11384[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (22))){
var inst_9879 = (state_9895[(2)]);
var state_9895__$1 = state_9895;
if(cljs.core.truth_(inst_9879)){
var statearr_9926_11385 = state_9895__$1;
(statearr_9926_11385[(1)] = (23));

} else {
var statearr_9927_11386 = state_9895__$1;
(statearr_9927_11386[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (6))){
var inst_9873 = (state_9895[(11)]);
var inst_9871 = (state_9895[(7)]);
var inst_9809 = (state_9895[(8)]);
var inst_9871__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_9809) : topic_fn.call(null,inst_9809));
var inst_9872 = cljs.core.deref(mults);
var inst_9873__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_9872,inst_9871__$1);
var state_9895__$1 = (function (){var statearr_9930 = state_9895;
(statearr_9930[(11)] = inst_9873__$1);

(statearr_9930[(7)] = inst_9871__$1);

return statearr_9930;
})();
if(cljs.core.truth_(inst_9873__$1)){
var statearr_9931_11387 = state_9895__$1;
(statearr_9931_11387[(1)] = (19));

} else {
var statearr_9933_11388 = state_9895__$1;
(statearr_9933_11388[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (25))){
var inst_9884 = (state_9895[(2)]);
var state_9895__$1 = state_9895;
var statearr_9934_11389 = state_9895__$1;
(statearr_9934_11389[(2)] = inst_9884);

(statearr_9934_11389[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (17))){
var inst_9841 = (state_9895[(10)]);
var inst_9854 = cljs.core.first(inst_9841);
var inst_9855 = cljs.core.async.muxch_STAR_(inst_9854);
var inst_9856 = cljs.core.async.close_BANG_(inst_9855);
var inst_9857 = cljs.core.next(inst_9841);
var inst_9820 = inst_9857;
var inst_9821 = null;
var inst_9822 = (0);
var inst_9823 = (0);
var state_9895__$1 = (function (){var statearr_9936 = state_9895;
(statearr_9936[(12)] = inst_9856);

(statearr_9936[(13)] = inst_9820);

(statearr_9936[(14)] = inst_9821);

(statearr_9936[(15)] = inst_9822);

(statearr_9936[(16)] = inst_9823);

return statearr_9936;
})();
var statearr_9937_11390 = state_9895__$1;
(statearr_9937_11390[(2)] = null);

(statearr_9937_11390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (3))){
var inst_9892 = (state_9895[(2)]);
var state_9895__$1 = state_9895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9895__$1,inst_9892);
} else {
if((state_val_9897 === (12))){
var inst_9866 = (state_9895[(2)]);
var state_9895__$1 = state_9895;
var statearr_9944_11392 = state_9895__$1;
(statearr_9944_11392[(2)] = inst_9866);

(statearr_9944_11392[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (2))){
var state_9895__$1 = state_9895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9895__$1,(4),ch);
} else {
if((state_val_9897 === (23))){
var state_9895__$1 = state_9895;
var statearr_9949_11393 = state_9895__$1;
(statearr_9949_11393[(2)] = null);

(statearr_9949_11393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (19))){
var inst_9873 = (state_9895[(11)]);
var inst_9809 = (state_9895[(8)]);
var inst_9877 = cljs.core.async.muxch_STAR_(inst_9873);
var state_9895__$1 = state_9895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9895__$1,(22),inst_9877,inst_9809);
} else {
if((state_val_9897 === (11))){
var inst_9820 = (state_9895[(13)]);
var inst_9841 = (state_9895[(10)]);
var inst_9841__$1 = cljs.core.seq(inst_9820);
var state_9895__$1 = (function (){var statearr_9951 = state_9895;
(statearr_9951[(10)] = inst_9841__$1);

return statearr_9951;
})();
if(inst_9841__$1){
var statearr_9952_11394 = state_9895__$1;
(statearr_9952_11394[(1)] = (13));

} else {
var statearr_9953_11395 = state_9895__$1;
(statearr_9953_11395[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (9))){
var inst_9868 = (state_9895[(2)]);
var state_9895__$1 = state_9895;
var statearr_9954_11396 = state_9895__$1;
(statearr_9954_11396[(2)] = inst_9868);

(statearr_9954_11396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (5))){
var inst_9817 = cljs.core.deref(mults);
var inst_9818 = cljs.core.vals(inst_9817);
var inst_9819 = cljs.core.seq(inst_9818);
var inst_9820 = inst_9819;
var inst_9821 = null;
var inst_9822 = (0);
var inst_9823 = (0);
var state_9895__$1 = (function (){var statearr_9956 = state_9895;
(statearr_9956[(13)] = inst_9820);

(statearr_9956[(14)] = inst_9821);

(statearr_9956[(15)] = inst_9822);

(statearr_9956[(16)] = inst_9823);

return statearr_9956;
})();
var statearr_9959_11403 = state_9895__$1;
(statearr_9959_11403[(2)] = null);

(statearr_9959_11403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (14))){
var state_9895__$1 = state_9895;
var statearr_9963_11407 = state_9895__$1;
(statearr_9963_11407[(2)] = null);

(statearr_9963_11407[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (16))){
var inst_9841 = (state_9895[(10)]);
var inst_9848 = cljs.core.chunk_first(inst_9841);
var inst_9849 = cljs.core.chunk_rest(inst_9841);
var inst_9850 = cljs.core.count(inst_9848);
var inst_9820 = inst_9849;
var inst_9821 = inst_9848;
var inst_9822 = inst_9850;
var inst_9823 = (0);
var state_9895__$1 = (function (){var statearr_9967 = state_9895;
(statearr_9967[(13)] = inst_9820);

(statearr_9967[(14)] = inst_9821);

(statearr_9967[(15)] = inst_9822);

(statearr_9967[(16)] = inst_9823);

return statearr_9967;
})();
var statearr_9968_11408 = state_9895__$1;
(statearr_9968_11408[(2)] = null);

(statearr_9968_11408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (10))){
var inst_9820 = (state_9895[(13)]);
var inst_9821 = (state_9895[(14)]);
var inst_9822 = (state_9895[(15)]);
var inst_9823 = (state_9895[(16)]);
var inst_9833 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_9821,inst_9823);
var inst_9834 = cljs.core.async.muxch_STAR_(inst_9833);
var inst_9835 = cljs.core.async.close_BANG_(inst_9834);
var inst_9837 = (inst_9823 + (1));
var tmp9960 = inst_9820;
var tmp9961 = inst_9821;
var tmp9962 = inst_9822;
var inst_9820__$1 = tmp9960;
var inst_9821__$1 = tmp9961;
var inst_9822__$1 = tmp9962;
var inst_9823__$1 = inst_9837;
var state_9895__$1 = (function (){var statearr_9969 = state_9895;
(statearr_9969[(17)] = inst_9835);

(statearr_9969[(13)] = inst_9820__$1);

(statearr_9969[(14)] = inst_9821__$1);

(statearr_9969[(15)] = inst_9822__$1);

(statearr_9969[(16)] = inst_9823__$1);

return statearr_9969;
})();
var statearr_9970_11409 = state_9895__$1;
(statearr_9970_11409[(2)] = null);

(statearr_9970_11409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (18))){
var inst_9860 = (state_9895[(2)]);
var state_9895__$1 = state_9895;
var statearr_9972_11410 = state_9895__$1;
(statearr_9972_11410[(2)] = inst_9860);

(statearr_9972_11410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9897 === (8))){
var inst_9822 = (state_9895[(15)]);
var inst_9823 = (state_9895[(16)]);
var inst_9828 = (inst_9823 < inst_9822);
var inst_9829 = inst_9828;
var state_9895__$1 = state_9895;
if(cljs.core.truth_(inst_9829)){
var statearr_9978_11412 = state_9895__$1;
(statearr_9978_11412[(1)] = (10));

} else {
var statearr_9979_11413 = state_9895__$1;
(statearr_9979_11413[(1)] = (11));

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
});})(c__7914__auto___11359,mults,ensure_mult,p))
;
return ((function (switch__7528__auto__,c__7914__auto___11359,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7529__auto__ = null;
var cljs$core$async$state_machine__7529__auto____0 = (function (){
var statearr_9980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9980[(0)] = cljs$core$async$state_machine__7529__auto__);

(statearr_9980[(1)] = (1));

return statearr_9980;
});
var cljs$core$async$state_machine__7529__auto____1 = (function (state_9895){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_9895);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e9981){if((e9981 instanceof Object)){
var ex__7532__auto__ = e9981;
var statearr_9982_11422 = state_9895;
(statearr_9982_11422[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9981;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11423 = state_9895;
state_9895 = G__11423;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
cljs$core$async$state_machine__7529__auto__ = function(state_9895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7529__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7529__auto____1.call(this,state_9895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7529__auto____0;
cljs$core$async$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7529__auto____1;
return cljs$core$async$state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto___11359,mults,ensure_mult,p))
})();
var state__7916__auto__ = (function (){var statearr_9983 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_9983[(6)] = c__7914__auto___11359);

return statearr_9983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto___11359,mults,ensure_mult,p))
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
var G__9998 = arguments.length;
switch (G__9998) {
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
var G__10015 = arguments.length;
switch (G__10015) {
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
var G__10021 = arguments.length;
switch (G__10021) {
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
var c__7914__auto___11440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto___11440,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto___11440,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_10067){
var state_val_10068 = (state_10067[(1)]);
if((state_val_10068 === (7))){
var state_10067__$1 = state_10067;
var statearr_10069_11441 = state_10067__$1;
(statearr_10069_11441[(2)] = null);

(statearr_10069_11441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10068 === (1))){
var state_10067__$1 = state_10067;
var statearr_10070_11442 = state_10067__$1;
(statearr_10070_11442[(2)] = null);

(statearr_10070_11442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10068 === (4))){
var inst_10029 = (state_10067[(7)]);
var inst_10031 = (inst_10029 < cnt);
var state_10067__$1 = state_10067;
if(cljs.core.truth_(inst_10031)){
var statearr_10071_11444 = state_10067__$1;
(statearr_10071_11444[(1)] = (6));

} else {
var statearr_10072_11445 = state_10067__$1;
(statearr_10072_11445[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10068 === (15))){
var inst_10063 = (state_10067[(2)]);
var state_10067__$1 = state_10067;
var statearr_10073_11447 = state_10067__$1;
(statearr_10073_11447[(2)] = inst_10063);

(statearr_10073_11447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10068 === (13))){
var inst_10056 = cljs.core.async.close_BANG_(out);
var state_10067__$1 = state_10067;
var statearr_10074_11453 = state_10067__$1;
(statearr_10074_11453[(2)] = inst_10056);

(statearr_10074_11453[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10068 === (6))){
var state_10067__$1 = state_10067;
var statearr_10075_11457 = state_10067__$1;
(statearr_10075_11457[(2)] = null);

(statearr_10075_11457[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10068 === (3))){
var inst_10065 = (state_10067[(2)]);
var state_10067__$1 = state_10067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10067__$1,inst_10065);
} else {
if((state_val_10068 === (12))){
var inst_10053 = (state_10067[(8)]);
var inst_10053__$1 = (state_10067[(2)]);
var inst_10054 = cljs.core.some(cljs.core.nil_QMARK_,inst_10053__$1);
var state_10067__$1 = (function (){var statearr_10077 = state_10067;
(statearr_10077[(8)] = inst_10053__$1);

return statearr_10077;
})();
if(cljs.core.truth_(inst_10054)){
var statearr_10078_11459 = state_10067__$1;
(statearr_10078_11459[(1)] = (13));

} else {
var statearr_10079_11460 = state_10067__$1;
(statearr_10079_11460[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10068 === (2))){
var inst_10028 = cljs.core.reset_BANG_(dctr,cnt);
var inst_10029 = (0);
var state_10067__$1 = (function (){var statearr_10080 = state_10067;
(statearr_10080[(7)] = inst_10029);

(statearr_10080[(9)] = inst_10028);

return statearr_10080;
})();
var statearr_10081_11461 = state_10067__$1;
(statearr_10081_11461[(2)] = null);

(statearr_10081_11461[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10068 === (11))){
var inst_10029 = (state_10067[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_10067,(10),Object,null,(9));
var inst_10038 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_10029) : chs__$1.call(null,inst_10029));
var inst_10039 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_10029) : done.call(null,inst_10029));
var inst_10040 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_10038,inst_10039);
var state_10067__$1 = state_10067;
var statearr_10082_11462 = state_10067__$1;
(statearr_10082_11462[(2)] = inst_10040);


cljs.core.async.impl.ioc_helpers.process_exception(state_10067__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10068 === (9))){
var inst_10029 = (state_10067[(7)]);
var inst_10042 = (state_10067[(2)]);
var inst_10043 = (inst_10029 + (1));
var inst_10029__$1 = inst_10043;
var state_10067__$1 = (function (){var statearr_10083 = state_10067;
(statearr_10083[(7)] = inst_10029__$1);

(statearr_10083[(10)] = inst_10042);

return statearr_10083;
})();
var statearr_10084_11463 = state_10067__$1;
(statearr_10084_11463[(2)] = null);

(statearr_10084_11463[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10068 === (5))){
var inst_10050 = (state_10067[(2)]);
var state_10067__$1 = (function (){var statearr_10085 = state_10067;
(statearr_10085[(11)] = inst_10050);

return statearr_10085;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10067__$1,(12),dchan);
} else {
if((state_val_10068 === (14))){
var inst_10053 = (state_10067[(8)]);
var inst_10058 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_10053);
var state_10067__$1 = state_10067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10067__$1,(16),out,inst_10058);
} else {
if((state_val_10068 === (16))){
var inst_10060 = (state_10067[(2)]);
var state_10067__$1 = (function (){var statearr_10086 = state_10067;
(statearr_10086[(12)] = inst_10060);

return statearr_10086;
})();
var statearr_10087_11464 = state_10067__$1;
(statearr_10087_11464[(2)] = null);

(statearr_10087_11464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10068 === (10))){
var inst_10033 = (state_10067[(2)]);
var inst_10034 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_10067__$1 = (function (){var statearr_10088 = state_10067;
(statearr_10088[(13)] = inst_10033);

return statearr_10088;
})();
var statearr_10089_11465 = state_10067__$1;
(statearr_10089_11465[(2)] = inst_10034);


cljs.core.async.impl.ioc_helpers.process_exception(state_10067__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10068 === (8))){
var inst_10048 = (state_10067[(2)]);
var state_10067__$1 = state_10067;
var statearr_10090_11470 = state_10067__$1;
(statearr_10090_11470[(2)] = inst_10048);

(statearr_10090_11470[(1)] = (5));


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
});})(c__7914__auto___11440,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7528__auto__,c__7914__auto___11440,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7529__auto__ = null;
var cljs$core$async$state_machine__7529__auto____0 = (function (){
var statearr_10091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10091[(0)] = cljs$core$async$state_machine__7529__auto__);

(statearr_10091[(1)] = (1));

return statearr_10091;
});
var cljs$core$async$state_machine__7529__auto____1 = (function (state_10067){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_10067);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e10092){if((e10092 instanceof Object)){
var ex__7532__auto__ = e10092;
var statearr_10093_11471 = state_10067;
(statearr_10093_11471[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10092;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11475 = state_10067;
state_10067 = G__11475;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
cljs$core$async$state_machine__7529__auto__ = function(state_10067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7529__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7529__auto____1.call(this,state_10067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7529__auto____0;
cljs$core$async$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7529__auto____1;
return cljs$core$async$state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto___11440,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7916__auto__ = (function (){var statearr_10094 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_10094[(6)] = c__7914__auto___11440);

return statearr_10094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto___11440,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__10114 = arguments.length;
switch (G__10114) {
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
var c__7914__auto___11483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto___11483,out){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto___11483,out){
return (function (state_10178){
var state_val_10179 = (state_10178[(1)]);
if((state_val_10179 === (7))){
var inst_10148 = (state_10178[(7)]);
var inst_10147 = (state_10178[(8)]);
var inst_10147__$1 = (state_10178[(2)]);
var inst_10148__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10147__$1,(0),null);
var inst_10153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10147__$1,(1),null);
var inst_10154 = (inst_10148__$1 == null);
var state_10178__$1 = (function (){var statearr_10184 = state_10178;
(statearr_10184[(7)] = inst_10148__$1);

(statearr_10184[(8)] = inst_10147__$1);

(statearr_10184[(9)] = inst_10153);

return statearr_10184;
})();
if(cljs.core.truth_(inst_10154)){
var statearr_10185_11484 = state_10178__$1;
(statearr_10185_11484[(1)] = (8));

} else {
var statearr_10186_11485 = state_10178__$1;
(statearr_10186_11485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10179 === (1))){
var inst_10134 = cljs.core.vec(chs);
var inst_10135 = inst_10134;
var state_10178__$1 = (function (){var statearr_10189 = state_10178;
(statearr_10189[(10)] = inst_10135);

return statearr_10189;
})();
var statearr_10190_11486 = state_10178__$1;
(statearr_10190_11486[(2)] = null);

(statearr_10190_11486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10179 === (4))){
var inst_10135 = (state_10178[(10)]);
var state_10178__$1 = state_10178;
return cljs.core.async.ioc_alts_BANG_(state_10178__$1,(7),inst_10135);
} else {
if((state_val_10179 === (6))){
var inst_10171 = (state_10178[(2)]);
var state_10178__$1 = state_10178;
var statearr_10191_11487 = state_10178__$1;
(statearr_10191_11487[(2)] = inst_10171);

(statearr_10191_11487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10179 === (3))){
var inst_10173 = (state_10178[(2)]);
var state_10178__$1 = state_10178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10178__$1,inst_10173);
} else {
if((state_val_10179 === (2))){
var inst_10135 = (state_10178[(10)]);
var inst_10138 = cljs.core.count(inst_10135);
var inst_10139 = (inst_10138 > (0));
var state_10178__$1 = state_10178;
if(cljs.core.truth_(inst_10139)){
var statearr_10193_11491 = state_10178__$1;
(statearr_10193_11491[(1)] = (4));

} else {
var statearr_10194_11492 = state_10178__$1;
(statearr_10194_11492[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10179 === (11))){
var inst_10135 = (state_10178[(10)]);
var inst_10164 = (state_10178[(2)]);
var tmp10192 = inst_10135;
var inst_10135__$1 = tmp10192;
var state_10178__$1 = (function (){var statearr_10195 = state_10178;
(statearr_10195[(10)] = inst_10135__$1);

(statearr_10195[(11)] = inst_10164);

return statearr_10195;
})();
var statearr_10196_11497 = state_10178__$1;
(statearr_10196_11497[(2)] = null);

(statearr_10196_11497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10179 === (9))){
var inst_10148 = (state_10178[(7)]);
var state_10178__$1 = state_10178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10178__$1,(11),out,inst_10148);
} else {
if((state_val_10179 === (5))){
var inst_10169 = cljs.core.async.close_BANG_(out);
var state_10178__$1 = state_10178;
var statearr_10198_11499 = state_10178__$1;
(statearr_10198_11499[(2)] = inst_10169);

(statearr_10198_11499[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10179 === (10))){
var inst_10167 = (state_10178[(2)]);
var state_10178__$1 = state_10178;
var statearr_10199_11504 = state_10178__$1;
(statearr_10199_11504[(2)] = inst_10167);

(statearr_10199_11504[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10179 === (8))){
var inst_10135 = (state_10178[(10)]);
var inst_10148 = (state_10178[(7)]);
var inst_10147 = (state_10178[(8)]);
var inst_10153 = (state_10178[(9)]);
var inst_10156 = (function (){var cs = inst_10135;
var vec__10142 = inst_10147;
var v = inst_10148;
var c = inst_10153;
return ((function (cs,vec__10142,v,c,inst_10135,inst_10148,inst_10147,inst_10153,state_val_10179,c__7914__auto___11483,out){
return (function (p1__10096_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__10096_SHARP_);
});
;})(cs,vec__10142,v,c,inst_10135,inst_10148,inst_10147,inst_10153,state_val_10179,c__7914__auto___11483,out))
})();
var inst_10160 = cljs.core.filterv(inst_10156,inst_10135);
var inst_10135__$1 = inst_10160;
var state_10178__$1 = (function (){var statearr_10200 = state_10178;
(statearr_10200[(10)] = inst_10135__$1);

return statearr_10200;
})();
var statearr_10201_11507 = state_10178__$1;
(statearr_10201_11507[(2)] = null);

(statearr_10201_11507[(1)] = (2));


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
});})(c__7914__auto___11483,out))
;
return ((function (switch__7528__auto__,c__7914__auto___11483,out){
return (function() {
var cljs$core$async$state_machine__7529__auto__ = null;
var cljs$core$async$state_machine__7529__auto____0 = (function (){
var statearr_10202 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10202[(0)] = cljs$core$async$state_machine__7529__auto__);

(statearr_10202[(1)] = (1));

return statearr_10202;
});
var cljs$core$async$state_machine__7529__auto____1 = (function (state_10178){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_10178);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e10203){if((e10203 instanceof Object)){
var ex__7532__auto__ = e10203;
var statearr_10204_11513 = state_10178;
(statearr_10204_11513[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10203;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11516 = state_10178;
state_10178 = G__11516;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
cljs$core$async$state_machine__7529__auto__ = function(state_10178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7529__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7529__auto____1.call(this,state_10178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7529__auto____0;
cljs$core$async$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7529__auto____1;
return cljs$core$async$state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto___11483,out))
})();
var state__7916__auto__ = (function (){var statearr_10205 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_10205[(6)] = c__7914__auto___11483);

return statearr_10205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto___11483,out))
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
var G__10207 = arguments.length;
switch (G__10207) {
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
var c__7914__auto___11520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto___11520,out){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto___11520,out){
return (function (state_10231){
var state_val_10232 = (state_10231[(1)]);
if((state_val_10232 === (7))){
var inst_10213 = (state_10231[(7)]);
var inst_10213__$1 = (state_10231[(2)]);
var inst_10214 = (inst_10213__$1 == null);
var inst_10215 = cljs.core.not(inst_10214);
var state_10231__$1 = (function (){var statearr_10233 = state_10231;
(statearr_10233[(7)] = inst_10213__$1);

return statearr_10233;
})();
if(inst_10215){
var statearr_10234_11521 = state_10231__$1;
(statearr_10234_11521[(1)] = (8));

} else {
var statearr_10235_11522 = state_10231__$1;
(statearr_10235_11522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10232 === (1))){
var inst_10208 = (0);
var state_10231__$1 = (function (){var statearr_10236 = state_10231;
(statearr_10236[(8)] = inst_10208);

return statearr_10236;
})();
var statearr_10237_11523 = state_10231__$1;
(statearr_10237_11523[(2)] = null);

(statearr_10237_11523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10232 === (4))){
var state_10231__$1 = state_10231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10231__$1,(7),ch);
} else {
if((state_val_10232 === (6))){
var inst_10226 = (state_10231[(2)]);
var state_10231__$1 = state_10231;
var statearr_10238_11527 = state_10231__$1;
(statearr_10238_11527[(2)] = inst_10226);

(statearr_10238_11527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10232 === (3))){
var inst_10228 = (state_10231[(2)]);
var inst_10229 = cljs.core.async.close_BANG_(out);
var state_10231__$1 = (function (){var statearr_10239 = state_10231;
(statearr_10239[(9)] = inst_10228);

return statearr_10239;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10231__$1,inst_10229);
} else {
if((state_val_10232 === (2))){
var inst_10208 = (state_10231[(8)]);
var inst_10210 = (inst_10208 < n);
var state_10231__$1 = state_10231;
if(cljs.core.truth_(inst_10210)){
var statearr_10240_11528 = state_10231__$1;
(statearr_10240_11528[(1)] = (4));

} else {
var statearr_10241_11529 = state_10231__$1;
(statearr_10241_11529[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10232 === (11))){
var inst_10208 = (state_10231[(8)]);
var inst_10218 = (state_10231[(2)]);
var inst_10219 = (inst_10208 + (1));
var inst_10208__$1 = inst_10219;
var state_10231__$1 = (function (){var statearr_10242 = state_10231;
(statearr_10242[(10)] = inst_10218);

(statearr_10242[(8)] = inst_10208__$1);

return statearr_10242;
})();
var statearr_10243_11530 = state_10231__$1;
(statearr_10243_11530[(2)] = null);

(statearr_10243_11530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10232 === (9))){
var state_10231__$1 = state_10231;
var statearr_10244_11531 = state_10231__$1;
(statearr_10244_11531[(2)] = null);

(statearr_10244_11531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10232 === (5))){
var state_10231__$1 = state_10231;
var statearr_10245_11532 = state_10231__$1;
(statearr_10245_11532[(2)] = null);

(statearr_10245_11532[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10232 === (10))){
var inst_10223 = (state_10231[(2)]);
var state_10231__$1 = state_10231;
var statearr_10246_11536 = state_10231__$1;
(statearr_10246_11536[(2)] = inst_10223);

(statearr_10246_11536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10232 === (8))){
var inst_10213 = (state_10231[(7)]);
var state_10231__$1 = state_10231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10231__$1,(11),out,inst_10213);
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
});})(c__7914__auto___11520,out))
;
return ((function (switch__7528__auto__,c__7914__auto___11520,out){
return (function() {
var cljs$core$async$state_machine__7529__auto__ = null;
var cljs$core$async$state_machine__7529__auto____0 = (function (){
var statearr_10247 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10247[(0)] = cljs$core$async$state_machine__7529__auto__);

(statearr_10247[(1)] = (1));

return statearr_10247;
});
var cljs$core$async$state_machine__7529__auto____1 = (function (state_10231){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_10231);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e10248){if((e10248 instanceof Object)){
var ex__7532__auto__ = e10248;
var statearr_10249_11537 = state_10231;
(statearr_10249_11537[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10248;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11538 = state_10231;
state_10231 = G__11538;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
cljs$core$async$state_machine__7529__auto__ = function(state_10231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7529__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7529__auto____1.call(this,state_10231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7529__auto____0;
cljs$core$async$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7529__auto____1;
return cljs$core$async$state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto___11520,out))
})();
var state__7916__auto__ = (function (){var statearr_10250 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_10250[(6)] = c__7914__auto___11520);

return statearr_10250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto___11520,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10252 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10252 = (function (f,ch,meta10253){
this.f = f;
this.ch = ch;
this.meta10253 = meta10253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10254,meta10253__$1){
var self__ = this;
var _10254__$1 = this;
return (new cljs.core.async.t_cljs$core$async10252(self__.f,self__.ch,meta10253__$1));
});

cljs.core.async.t_cljs$core$async10252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10254){
var self__ = this;
var _10254__$1 = this;
return self__.meta10253;
});

cljs.core.async.t_cljs$core$async10252.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10252.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async10252.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async10252.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10252.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10255 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10255 = (function (f,ch,meta10253,_,fn1,meta10256){
this.f = f;
this.ch = ch;
this.meta10253 = meta10253;
this._ = _;
this.fn1 = fn1;
this.meta10256 = meta10256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10257,meta10256__$1){
var self__ = this;
var _10257__$1 = this;
return (new cljs.core.async.t_cljs$core$async10255(self__.f,self__.ch,self__.meta10253,self__._,self__.fn1,meta10256__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async10255.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10257){
var self__ = this;
var _10257__$1 = this;
return self__.meta10256;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10255.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10255.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10255.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10255.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__10251_SHARP_){
var G__10258 = (((p1__10251_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__10251_SHARP_) : self__.f.call(null,p1__10251_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__10258) : f1.call(null,G__10258));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async10255.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10253","meta10253",2048362489,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async10252","cljs.core.async/t_cljs$core$async10252",-165734521,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta10256","meta10256",1346661845,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10255.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10255";

cljs.core.async.t_cljs$core$async10255.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async10255");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10255.
 */
cljs.core.async.__GT_t_cljs$core$async10255 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10255(f__$1,ch__$1,meta10253__$1,___$2,fn1__$1,meta10256){
return (new cljs.core.async.t_cljs$core$async10255(f__$1,ch__$1,meta10253__$1,___$2,fn1__$1,meta10256));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async10255(self__.f,self__.ch,self__.meta10253,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__10259 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__10259) : self__.f.call(null,G__10259));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async10252.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10252.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async10252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10253","meta10253",2048362489,null)], null);
});

cljs.core.async.t_cljs$core$async10252.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10252";

cljs.core.async.t_cljs$core$async10252.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async10252");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10252.
 */
cljs.core.async.__GT_t_cljs$core$async10252 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10252(f__$1,ch__$1,meta10253){
return (new cljs.core.async.t_cljs$core$async10252(f__$1,ch__$1,meta10253));
});

}

return (new cljs.core.async.t_cljs$core$async10252(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10260 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10260 = (function (f,ch,meta10261){
this.f = f;
this.ch = ch;
this.meta10261 = meta10261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10262,meta10261__$1){
var self__ = this;
var _10262__$1 = this;
return (new cljs.core.async.t_cljs$core$async10260(self__.f,self__.ch,meta10261__$1));
});

cljs.core.async.t_cljs$core$async10260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10262){
var self__ = this;
var _10262__$1 = this;
return self__.meta10261;
});

cljs.core.async.t_cljs$core$async10260.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10260.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async10260.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10260.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10260.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10260.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async10260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10261","meta10261",-741742888,null)], null);
});

cljs.core.async.t_cljs$core$async10260.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10260";

cljs.core.async.t_cljs$core$async10260.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async10260");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10260.
 */
cljs.core.async.__GT_t_cljs$core$async10260 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async10260(f__$1,ch__$1,meta10261){
return (new cljs.core.async.t_cljs$core$async10260(f__$1,ch__$1,meta10261));
});

}

return (new cljs.core.async.t_cljs$core$async10260(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10263 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10263 = (function (p,ch,meta10264){
this.p = p;
this.ch = ch;
this.meta10264 = meta10264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10265,meta10264__$1){
var self__ = this;
var _10265__$1 = this;
return (new cljs.core.async.t_cljs$core$async10263(self__.p,self__.ch,meta10264__$1));
});

cljs.core.async.t_cljs$core$async10263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10265){
var self__ = this;
var _10265__$1 = this;
return self__.meta10264;
});

cljs.core.async.t_cljs$core$async10263.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10263.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async10263.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async10263.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10263.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10263.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10263.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async10263.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta10264","meta10264",-212104601,null)], null);
});

cljs.core.async.t_cljs$core$async10263.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10263";

cljs.core.async.t_cljs$core$async10263.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async10263");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10263.
 */
cljs.core.async.__GT_t_cljs$core$async10263 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async10263(p__$1,ch__$1,meta10264){
return (new cljs.core.async.t_cljs$core$async10263(p__$1,ch__$1,meta10264));
});

}

return (new cljs.core.async.t_cljs$core$async10263(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__10267 = arguments.length;
switch (G__10267) {
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
var c__7914__auto___11573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto___11573,out){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto___11573,out){
return (function (state_10288){
var state_val_10289 = (state_10288[(1)]);
if((state_val_10289 === (7))){
var inst_10284 = (state_10288[(2)]);
var state_10288__$1 = state_10288;
var statearr_10290_11577 = state_10288__$1;
(statearr_10290_11577[(2)] = inst_10284);

(statearr_10290_11577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10289 === (1))){
var state_10288__$1 = state_10288;
var statearr_10291_11578 = state_10288__$1;
(statearr_10291_11578[(2)] = null);

(statearr_10291_11578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10289 === (4))){
var inst_10270 = (state_10288[(7)]);
var inst_10270__$1 = (state_10288[(2)]);
var inst_10271 = (inst_10270__$1 == null);
var state_10288__$1 = (function (){var statearr_10292 = state_10288;
(statearr_10292[(7)] = inst_10270__$1);

return statearr_10292;
})();
if(cljs.core.truth_(inst_10271)){
var statearr_10293_11583 = state_10288__$1;
(statearr_10293_11583[(1)] = (5));

} else {
var statearr_10294_11584 = state_10288__$1;
(statearr_10294_11584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10289 === (6))){
var inst_10270 = (state_10288[(7)]);
var inst_10275 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_10270) : p.call(null,inst_10270));
var state_10288__$1 = state_10288;
if(cljs.core.truth_(inst_10275)){
var statearr_10295_11585 = state_10288__$1;
(statearr_10295_11585[(1)] = (8));

} else {
var statearr_10296_11586 = state_10288__$1;
(statearr_10296_11586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10289 === (3))){
var inst_10286 = (state_10288[(2)]);
var state_10288__$1 = state_10288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10288__$1,inst_10286);
} else {
if((state_val_10289 === (2))){
var state_10288__$1 = state_10288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10288__$1,(4),ch);
} else {
if((state_val_10289 === (11))){
var inst_10278 = (state_10288[(2)]);
var state_10288__$1 = state_10288;
var statearr_10297_11587 = state_10288__$1;
(statearr_10297_11587[(2)] = inst_10278);

(statearr_10297_11587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10289 === (9))){
var state_10288__$1 = state_10288;
var statearr_10298_11588 = state_10288__$1;
(statearr_10298_11588[(2)] = null);

(statearr_10298_11588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10289 === (5))){
var inst_10273 = cljs.core.async.close_BANG_(out);
var state_10288__$1 = state_10288;
var statearr_10299_11590 = state_10288__$1;
(statearr_10299_11590[(2)] = inst_10273);

(statearr_10299_11590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10289 === (10))){
var inst_10281 = (state_10288[(2)]);
var state_10288__$1 = (function (){var statearr_10300 = state_10288;
(statearr_10300[(8)] = inst_10281);

return statearr_10300;
})();
var statearr_10301_11600 = state_10288__$1;
(statearr_10301_11600[(2)] = null);

(statearr_10301_11600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10289 === (8))){
var inst_10270 = (state_10288[(7)]);
var state_10288__$1 = state_10288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10288__$1,(11),out,inst_10270);
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
});})(c__7914__auto___11573,out))
;
return ((function (switch__7528__auto__,c__7914__auto___11573,out){
return (function() {
var cljs$core$async$state_machine__7529__auto__ = null;
var cljs$core$async$state_machine__7529__auto____0 = (function (){
var statearr_10302 = [null,null,null,null,null,null,null,null,null];
(statearr_10302[(0)] = cljs$core$async$state_machine__7529__auto__);

(statearr_10302[(1)] = (1));

return statearr_10302;
});
var cljs$core$async$state_machine__7529__auto____1 = (function (state_10288){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_10288);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e10303){if((e10303 instanceof Object)){
var ex__7532__auto__ = e10303;
var statearr_10304_11602 = state_10288;
(statearr_10304_11602[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10303;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11604 = state_10288;
state_10288 = G__11604;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
cljs$core$async$state_machine__7529__auto__ = function(state_10288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7529__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7529__auto____1.call(this,state_10288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7529__auto____0;
cljs$core$async$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7529__auto____1;
return cljs$core$async$state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto___11573,out))
})();
var state__7916__auto__ = (function (){var statearr_10305 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_10305[(6)] = c__7914__auto___11573);

return statearr_10305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto___11573,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__10307 = arguments.length;
switch (G__10307) {
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
var c__7914__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto__){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto__){
return (function (state_10369){
var state_val_10370 = (state_10369[(1)]);
if((state_val_10370 === (7))){
var inst_10365 = (state_10369[(2)]);
var state_10369__$1 = state_10369;
var statearr_10371_11608 = state_10369__$1;
(statearr_10371_11608[(2)] = inst_10365);

(statearr_10371_11608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10370 === (20))){
var inst_10335 = (state_10369[(7)]);
var inst_10346 = (state_10369[(2)]);
var inst_10347 = cljs.core.next(inst_10335);
var inst_10321 = inst_10347;
var inst_10322 = null;
var inst_10323 = (0);
var inst_10324 = (0);
var state_10369__$1 = (function (){var statearr_10372 = state_10369;
(statearr_10372[(8)] = inst_10322);

(statearr_10372[(9)] = inst_10321);

(statearr_10372[(10)] = inst_10323);

(statearr_10372[(11)] = inst_10324);

(statearr_10372[(12)] = inst_10346);

return statearr_10372;
})();
var statearr_10373_11610 = state_10369__$1;
(statearr_10373_11610[(2)] = null);

(statearr_10373_11610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10370 === (1))){
var state_10369__$1 = state_10369;
var statearr_10374_11611 = state_10369__$1;
(statearr_10374_11611[(2)] = null);

(statearr_10374_11611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10370 === (4))){
var inst_10310 = (state_10369[(13)]);
var inst_10310__$1 = (state_10369[(2)]);
var inst_10311 = (inst_10310__$1 == null);
var state_10369__$1 = (function (){var statearr_10375 = state_10369;
(statearr_10375[(13)] = inst_10310__$1);

return statearr_10375;
})();
if(cljs.core.truth_(inst_10311)){
var statearr_10376_11615 = state_10369__$1;
(statearr_10376_11615[(1)] = (5));

} else {
var statearr_10377_11616 = state_10369__$1;
(statearr_10377_11616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10370 === (15))){
var state_10369__$1 = state_10369;
var statearr_10381_11617 = state_10369__$1;
(statearr_10381_11617[(2)] = null);

(statearr_10381_11617[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10370 === (21))){
var state_10369__$1 = state_10369;
var statearr_10382_11618 = state_10369__$1;
(statearr_10382_11618[(2)] = null);

(statearr_10382_11618[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10370 === (13))){
var inst_10322 = (state_10369[(8)]);
var inst_10321 = (state_10369[(9)]);
var inst_10323 = (state_10369[(10)]);
var inst_10324 = (state_10369[(11)]);
var inst_10331 = (state_10369[(2)]);
var inst_10332 = (inst_10324 + (1));
var tmp10378 = inst_10322;
var tmp10379 = inst_10321;
var tmp10380 = inst_10323;
var inst_10321__$1 = tmp10379;
var inst_10322__$1 = tmp10378;
var inst_10323__$1 = tmp10380;
var inst_10324__$1 = inst_10332;
var state_10369__$1 = (function (){var statearr_10383 = state_10369;
(statearr_10383[(8)] = inst_10322__$1);

(statearr_10383[(14)] = inst_10331);

(statearr_10383[(9)] = inst_10321__$1);

(statearr_10383[(10)] = inst_10323__$1);

(statearr_10383[(11)] = inst_10324__$1);

return statearr_10383;
})();
var statearr_10384_11623 = state_10369__$1;
(statearr_10384_11623[(2)] = null);

(statearr_10384_11623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10370 === (22))){
var state_10369__$1 = state_10369;
var statearr_10385_11624 = state_10369__$1;
(statearr_10385_11624[(2)] = null);

(statearr_10385_11624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10370 === (6))){
var inst_10310 = (state_10369[(13)]);
var inst_10319 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_10310) : f.call(null,inst_10310));
var inst_10320 = cljs.core.seq(inst_10319);
var inst_10321 = inst_10320;
var inst_10322 = null;
var inst_10323 = (0);
var inst_10324 = (0);
var state_10369__$1 = (function (){var statearr_10386 = state_10369;
(statearr_10386[(8)] = inst_10322);

(statearr_10386[(9)] = inst_10321);

(statearr_10386[(10)] = inst_10323);

(statearr_10386[(11)] = inst_10324);

return statearr_10386;
})();
var statearr_10387_11630 = state_10369__$1;
(statearr_10387_11630[(2)] = null);

(statearr_10387_11630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10370 === (17))){
var inst_10335 = (state_10369[(7)]);
var inst_10339 = cljs.core.chunk_first(inst_10335);
var inst_10340 = cljs.core.chunk_rest(inst_10335);
var inst_10341 = cljs.core.count(inst_10339);
var inst_10321 = inst_10340;
var inst_10322 = inst_10339;
var inst_10323 = inst_10341;
var inst_10324 = (0);
var state_10369__$1 = (function (){var statearr_10388 = state_10369;
(statearr_10388[(8)] = inst_10322);

(statearr_10388[(9)] = inst_10321);

(statearr_10388[(10)] = inst_10323);

(statearr_10388[(11)] = inst_10324);

return statearr_10388;
})();
var statearr_10389_11636 = state_10369__$1;
(statearr_10389_11636[(2)] = null);

(statearr_10389_11636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10370 === (3))){
var inst_10367 = (state_10369[(2)]);
var state_10369__$1 = state_10369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10369__$1,inst_10367);
} else {
if((state_val_10370 === (12))){
var inst_10355 = (state_10369[(2)]);
var state_10369__$1 = state_10369;
var statearr_10390_11638 = state_10369__$1;
(statearr_10390_11638[(2)] = inst_10355);

(statearr_10390_11638[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10370 === (2))){
var state_10369__$1 = state_10369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10369__$1,(4),in$);
} else {
if((state_val_10370 === (23))){
var inst_10363 = (state_10369[(2)]);
var state_10369__$1 = state_10369;
var statearr_10391_11639 = state_10369__$1;
(statearr_10391_11639[(2)] = inst_10363);

(statearr_10391_11639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10370 === (19))){
var inst_10350 = (state_10369[(2)]);
var state_10369__$1 = state_10369;
var statearr_10392_11641 = state_10369__$1;
(statearr_10392_11641[(2)] = inst_10350);

(statearr_10392_11641[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10370 === (11))){
var inst_10321 = (state_10369[(9)]);
var inst_10335 = (state_10369[(7)]);
var inst_10335__$1 = cljs.core.seq(inst_10321);
var state_10369__$1 = (function (){var statearr_10393 = state_10369;
(statearr_10393[(7)] = inst_10335__$1);

return statearr_10393;
})();
if(inst_10335__$1){
var statearr_10394_11642 = state_10369__$1;
(statearr_10394_11642[(1)] = (14));

} else {
var statearr_10395_11643 = state_10369__$1;
(statearr_10395_11643[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10370 === (9))){
var inst_10357 = (state_10369[(2)]);
var inst_10358 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_10369__$1 = (function (){var statearr_10396 = state_10369;
(statearr_10396[(15)] = inst_10357);

return statearr_10396;
})();
if(cljs.core.truth_(inst_10358)){
var statearr_10397_11647 = state_10369__$1;
(statearr_10397_11647[(1)] = (21));

} else {
var statearr_10398_11648 = state_10369__$1;
(statearr_10398_11648[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10370 === (5))){
var inst_10313 = cljs.core.async.close_BANG_(out);
var state_10369__$1 = state_10369;
var statearr_10399_11649 = state_10369__$1;
(statearr_10399_11649[(2)] = inst_10313);

(statearr_10399_11649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10370 === (14))){
var inst_10335 = (state_10369[(7)]);
var inst_10337 = cljs.core.chunked_seq_QMARK_(inst_10335);
var state_10369__$1 = state_10369;
if(inst_10337){
var statearr_10400_11651 = state_10369__$1;
(statearr_10400_11651[(1)] = (17));

} else {
var statearr_10401_11652 = state_10369__$1;
(statearr_10401_11652[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10370 === (16))){
var inst_10353 = (state_10369[(2)]);
var state_10369__$1 = state_10369;
var statearr_10402_11653 = state_10369__$1;
(statearr_10402_11653[(2)] = inst_10353);

(statearr_10402_11653[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10370 === (10))){
var inst_10322 = (state_10369[(8)]);
var inst_10324 = (state_10369[(11)]);
var inst_10329 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_10322,inst_10324);
var state_10369__$1 = state_10369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10369__$1,(13),out,inst_10329);
} else {
if((state_val_10370 === (18))){
var inst_10335 = (state_10369[(7)]);
var inst_10344 = cljs.core.first(inst_10335);
var state_10369__$1 = state_10369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10369__$1,(20),out,inst_10344);
} else {
if((state_val_10370 === (8))){
var inst_10323 = (state_10369[(10)]);
var inst_10324 = (state_10369[(11)]);
var inst_10326 = (inst_10324 < inst_10323);
var inst_10327 = inst_10326;
var state_10369__$1 = state_10369;
if(cljs.core.truth_(inst_10327)){
var statearr_10403_11659 = state_10369__$1;
(statearr_10403_11659[(1)] = (10));

} else {
var statearr_10404_11660 = state_10369__$1;
(statearr_10404_11660[(1)] = (11));

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
});})(c__7914__auto__))
;
return ((function (switch__7528__auto__,c__7914__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7529__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7529__auto____0 = (function (){
var statearr_10405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10405[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7529__auto__);

(statearr_10405[(1)] = (1));

return statearr_10405;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7529__auto____1 = (function (state_10369){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_10369);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e10406){if((e10406 instanceof Object)){
var ex__7532__auto__ = e10406;
var statearr_10407_11663 = state_10369;
(statearr_10407_11663[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10406;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11665 = state_10369;
state_10369 = G__11665;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7529__auto__ = function(state_10369){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7529__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7529__auto____1.call(this,state_10369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7529__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7529__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto__))
})();
var state__7916__auto__ = (function (){var statearr_10408 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_10408[(6)] = c__7914__auto__);

return statearr_10408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto__))
);

return c__7914__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__10410 = arguments.length;
switch (G__10410) {
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
var G__10412 = arguments.length;
switch (G__10412) {
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
var G__10414 = arguments.length;
switch (G__10414) {
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
var c__7914__auto___11676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto___11676,out){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto___11676,out){
return (function (state_10438){
var state_val_10439 = (state_10438[(1)]);
if((state_val_10439 === (7))){
var inst_10433 = (state_10438[(2)]);
var state_10438__$1 = state_10438;
var statearr_10440_11677 = state_10438__$1;
(statearr_10440_11677[(2)] = inst_10433);

(statearr_10440_11677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10439 === (1))){
var inst_10415 = null;
var state_10438__$1 = (function (){var statearr_10441 = state_10438;
(statearr_10441[(7)] = inst_10415);

return statearr_10441;
})();
var statearr_10442_11678 = state_10438__$1;
(statearr_10442_11678[(2)] = null);

(statearr_10442_11678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10439 === (4))){
var inst_10418 = (state_10438[(8)]);
var inst_10418__$1 = (state_10438[(2)]);
var inst_10419 = (inst_10418__$1 == null);
var inst_10420 = cljs.core.not(inst_10419);
var state_10438__$1 = (function (){var statearr_10443 = state_10438;
(statearr_10443[(8)] = inst_10418__$1);

return statearr_10443;
})();
if(inst_10420){
var statearr_10444_11679 = state_10438__$1;
(statearr_10444_11679[(1)] = (5));

} else {
var statearr_10445_11680 = state_10438__$1;
(statearr_10445_11680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10439 === (6))){
var state_10438__$1 = state_10438;
var statearr_10446_11682 = state_10438__$1;
(statearr_10446_11682[(2)] = null);

(statearr_10446_11682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10439 === (3))){
var inst_10435 = (state_10438[(2)]);
var inst_10436 = cljs.core.async.close_BANG_(out);
var state_10438__$1 = (function (){var statearr_10447 = state_10438;
(statearr_10447[(9)] = inst_10435);

return statearr_10447;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10438__$1,inst_10436);
} else {
if((state_val_10439 === (2))){
var state_10438__$1 = state_10438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10438__$1,(4),ch);
} else {
if((state_val_10439 === (11))){
var inst_10418 = (state_10438[(8)]);
var inst_10427 = (state_10438[(2)]);
var inst_10415 = inst_10418;
var state_10438__$1 = (function (){var statearr_10448 = state_10438;
(statearr_10448[(7)] = inst_10415);

(statearr_10448[(10)] = inst_10427);

return statearr_10448;
})();
var statearr_10449_11684 = state_10438__$1;
(statearr_10449_11684[(2)] = null);

(statearr_10449_11684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10439 === (9))){
var inst_10418 = (state_10438[(8)]);
var state_10438__$1 = state_10438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10438__$1,(11),out,inst_10418);
} else {
if((state_val_10439 === (5))){
var inst_10415 = (state_10438[(7)]);
var inst_10418 = (state_10438[(8)]);
var inst_10422 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_10418,inst_10415);
var state_10438__$1 = state_10438;
if(inst_10422){
var statearr_10451_11686 = state_10438__$1;
(statearr_10451_11686[(1)] = (8));

} else {
var statearr_10452_11687 = state_10438__$1;
(statearr_10452_11687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10439 === (10))){
var inst_10430 = (state_10438[(2)]);
var state_10438__$1 = state_10438;
var statearr_10453_11688 = state_10438__$1;
(statearr_10453_11688[(2)] = inst_10430);

(statearr_10453_11688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10439 === (8))){
var inst_10415 = (state_10438[(7)]);
var tmp10450 = inst_10415;
var inst_10415__$1 = tmp10450;
var state_10438__$1 = (function (){var statearr_10454 = state_10438;
(statearr_10454[(7)] = inst_10415__$1);

return statearr_10454;
})();
var statearr_10455_11690 = state_10438__$1;
(statearr_10455_11690[(2)] = null);

(statearr_10455_11690[(1)] = (2));


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
});})(c__7914__auto___11676,out))
;
return ((function (switch__7528__auto__,c__7914__auto___11676,out){
return (function() {
var cljs$core$async$state_machine__7529__auto__ = null;
var cljs$core$async$state_machine__7529__auto____0 = (function (){
var statearr_10456 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10456[(0)] = cljs$core$async$state_machine__7529__auto__);

(statearr_10456[(1)] = (1));

return statearr_10456;
});
var cljs$core$async$state_machine__7529__auto____1 = (function (state_10438){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_10438);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e10457){if((e10457 instanceof Object)){
var ex__7532__auto__ = e10457;
var statearr_10458_11694 = state_10438;
(statearr_10458_11694[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10457;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11695 = state_10438;
state_10438 = G__11695;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
cljs$core$async$state_machine__7529__auto__ = function(state_10438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7529__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7529__auto____1.call(this,state_10438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7529__auto____0;
cljs$core$async$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7529__auto____1;
return cljs$core$async$state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto___11676,out))
})();
var state__7916__auto__ = (function (){var statearr_10459 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_10459[(6)] = c__7914__auto___11676);

return statearr_10459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto___11676,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__10461 = arguments.length;
switch (G__10461) {
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
var c__7914__auto___11698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto___11698,out){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto___11698,out){
return (function (state_10499){
var state_val_10500 = (state_10499[(1)]);
if((state_val_10500 === (7))){
var inst_10495 = (state_10499[(2)]);
var state_10499__$1 = state_10499;
var statearr_10501_11702 = state_10499__$1;
(statearr_10501_11702[(2)] = inst_10495);

(statearr_10501_11702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (1))){
var inst_10462 = (new Array(n));
var inst_10463 = inst_10462;
var inst_10464 = (0);
var state_10499__$1 = (function (){var statearr_10502 = state_10499;
(statearr_10502[(7)] = inst_10464);

(statearr_10502[(8)] = inst_10463);

return statearr_10502;
})();
var statearr_10503_11708 = state_10499__$1;
(statearr_10503_11708[(2)] = null);

(statearr_10503_11708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (4))){
var inst_10467 = (state_10499[(9)]);
var inst_10467__$1 = (state_10499[(2)]);
var inst_10468 = (inst_10467__$1 == null);
var inst_10469 = cljs.core.not(inst_10468);
var state_10499__$1 = (function (){var statearr_10504 = state_10499;
(statearr_10504[(9)] = inst_10467__$1);

return statearr_10504;
})();
if(inst_10469){
var statearr_10505_11713 = state_10499__$1;
(statearr_10505_11713[(1)] = (5));

} else {
var statearr_10506_11715 = state_10499__$1;
(statearr_10506_11715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (15))){
var inst_10489 = (state_10499[(2)]);
var state_10499__$1 = state_10499;
var statearr_10507_11718 = state_10499__$1;
(statearr_10507_11718[(2)] = inst_10489);

(statearr_10507_11718[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (13))){
var state_10499__$1 = state_10499;
var statearr_10508_11719 = state_10499__$1;
(statearr_10508_11719[(2)] = null);

(statearr_10508_11719[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (6))){
var inst_10464 = (state_10499[(7)]);
var inst_10485 = (inst_10464 > (0));
var state_10499__$1 = state_10499;
if(cljs.core.truth_(inst_10485)){
var statearr_10509_11722 = state_10499__$1;
(statearr_10509_11722[(1)] = (12));

} else {
var statearr_10510_11723 = state_10499__$1;
(statearr_10510_11723[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (3))){
var inst_10497 = (state_10499[(2)]);
var state_10499__$1 = state_10499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10499__$1,inst_10497);
} else {
if((state_val_10500 === (12))){
var inst_10463 = (state_10499[(8)]);
var inst_10487 = cljs.core.vec(inst_10463);
var state_10499__$1 = state_10499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10499__$1,(15),out,inst_10487);
} else {
if((state_val_10500 === (2))){
var state_10499__$1 = state_10499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10499__$1,(4),ch);
} else {
if((state_val_10500 === (11))){
var inst_10479 = (state_10499[(2)]);
var inst_10480 = (new Array(n));
var inst_10463 = inst_10480;
var inst_10464 = (0);
var state_10499__$1 = (function (){var statearr_10511 = state_10499;
(statearr_10511[(7)] = inst_10464);

(statearr_10511[(8)] = inst_10463);

(statearr_10511[(10)] = inst_10479);

return statearr_10511;
})();
var statearr_10512_11726 = state_10499__$1;
(statearr_10512_11726[(2)] = null);

(statearr_10512_11726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (9))){
var inst_10463 = (state_10499[(8)]);
var inst_10477 = cljs.core.vec(inst_10463);
var state_10499__$1 = state_10499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10499__$1,(11),out,inst_10477);
} else {
if((state_val_10500 === (5))){
var inst_10464 = (state_10499[(7)]);
var inst_10463 = (state_10499[(8)]);
var inst_10472 = (state_10499[(11)]);
var inst_10467 = (state_10499[(9)]);
var inst_10471 = (inst_10463[inst_10464] = inst_10467);
var inst_10472__$1 = (inst_10464 + (1));
var inst_10473 = (inst_10472__$1 < n);
var state_10499__$1 = (function (){var statearr_10513 = state_10499;
(statearr_10513[(12)] = inst_10471);

(statearr_10513[(11)] = inst_10472__$1);

return statearr_10513;
})();
if(cljs.core.truth_(inst_10473)){
var statearr_10514_11728 = state_10499__$1;
(statearr_10514_11728[(1)] = (8));

} else {
var statearr_10515_11729 = state_10499__$1;
(statearr_10515_11729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (14))){
var inst_10492 = (state_10499[(2)]);
var inst_10493 = cljs.core.async.close_BANG_(out);
var state_10499__$1 = (function (){var statearr_10517 = state_10499;
(statearr_10517[(13)] = inst_10492);

return statearr_10517;
})();
var statearr_10518_11730 = state_10499__$1;
(statearr_10518_11730[(2)] = inst_10493);

(statearr_10518_11730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (10))){
var inst_10483 = (state_10499[(2)]);
var state_10499__$1 = state_10499;
var statearr_10519_11731 = state_10499__$1;
(statearr_10519_11731[(2)] = inst_10483);

(statearr_10519_11731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (8))){
var inst_10463 = (state_10499[(8)]);
var inst_10472 = (state_10499[(11)]);
var tmp10516 = inst_10463;
var inst_10463__$1 = tmp10516;
var inst_10464 = inst_10472;
var state_10499__$1 = (function (){var statearr_10520 = state_10499;
(statearr_10520[(7)] = inst_10464);

(statearr_10520[(8)] = inst_10463__$1);

return statearr_10520;
})();
var statearr_10521_11734 = state_10499__$1;
(statearr_10521_11734[(2)] = null);

(statearr_10521_11734[(1)] = (2));


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
});})(c__7914__auto___11698,out))
;
return ((function (switch__7528__auto__,c__7914__auto___11698,out){
return (function() {
var cljs$core$async$state_machine__7529__auto__ = null;
var cljs$core$async$state_machine__7529__auto____0 = (function (){
var statearr_10522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10522[(0)] = cljs$core$async$state_machine__7529__auto__);

(statearr_10522[(1)] = (1));

return statearr_10522;
});
var cljs$core$async$state_machine__7529__auto____1 = (function (state_10499){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_10499);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e10523){if((e10523 instanceof Object)){
var ex__7532__auto__ = e10523;
var statearr_10524_11745 = state_10499;
(statearr_10524_11745[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10523;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11753 = state_10499;
state_10499 = G__11753;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
cljs$core$async$state_machine__7529__auto__ = function(state_10499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7529__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7529__auto____1.call(this,state_10499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7529__auto____0;
cljs$core$async$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7529__auto____1;
return cljs$core$async$state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto___11698,out))
})();
var state__7916__auto__ = (function (){var statearr_10525 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_10525[(6)] = c__7914__auto___11698);

return statearr_10525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto___11698,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__10527 = arguments.length;
switch (G__10527) {
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
var c__7914__auto___11759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7914__auto___11759,out){
return (function (){
var f__7915__auto__ = (function (){var switch__7528__auto__ = ((function (c__7914__auto___11759,out){
return (function (state_10569){
var state_val_10570 = (state_10569[(1)]);
if((state_val_10570 === (7))){
var inst_10565 = (state_10569[(2)]);
var state_10569__$1 = state_10569;
var statearr_10571_11769 = state_10569__$1;
(statearr_10571_11769[(2)] = inst_10565);

(statearr_10571_11769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (1))){
var inst_10528 = [];
var inst_10529 = inst_10528;
var inst_10530 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_10569__$1 = (function (){var statearr_10572 = state_10569;
(statearr_10572[(7)] = inst_10530);

(statearr_10572[(8)] = inst_10529);

return statearr_10572;
})();
var statearr_10573_11770 = state_10569__$1;
(statearr_10573_11770[(2)] = null);

(statearr_10573_11770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (4))){
var inst_10533 = (state_10569[(9)]);
var inst_10533__$1 = (state_10569[(2)]);
var inst_10534 = (inst_10533__$1 == null);
var inst_10535 = cljs.core.not(inst_10534);
var state_10569__$1 = (function (){var statearr_10574 = state_10569;
(statearr_10574[(9)] = inst_10533__$1);

return statearr_10574;
})();
if(inst_10535){
var statearr_10575_11782 = state_10569__$1;
(statearr_10575_11782[(1)] = (5));

} else {
var statearr_10576_11783 = state_10569__$1;
(statearr_10576_11783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (15))){
var inst_10559 = (state_10569[(2)]);
var state_10569__$1 = state_10569;
var statearr_10577_11785 = state_10569__$1;
(statearr_10577_11785[(2)] = inst_10559);

(statearr_10577_11785[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (13))){
var state_10569__$1 = state_10569;
var statearr_10578_11789 = state_10569__$1;
(statearr_10578_11789[(2)] = null);

(statearr_10578_11789[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (6))){
var inst_10529 = (state_10569[(8)]);
var inst_10554 = inst_10529.length;
var inst_10555 = (inst_10554 > (0));
var state_10569__$1 = state_10569;
if(cljs.core.truth_(inst_10555)){
var statearr_10579_11793 = state_10569__$1;
(statearr_10579_11793[(1)] = (12));

} else {
var statearr_10580_11795 = state_10569__$1;
(statearr_10580_11795[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (3))){
var inst_10567 = (state_10569[(2)]);
var state_10569__$1 = state_10569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10569__$1,inst_10567);
} else {
if((state_val_10570 === (12))){
var inst_10529 = (state_10569[(8)]);
var inst_10557 = cljs.core.vec(inst_10529);
var state_10569__$1 = state_10569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10569__$1,(15),out,inst_10557);
} else {
if((state_val_10570 === (2))){
var state_10569__$1 = state_10569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10569__$1,(4),ch);
} else {
if((state_val_10570 === (11))){
var inst_10533 = (state_10569[(9)]);
var inst_10537 = (state_10569[(10)]);
var inst_10547 = (state_10569[(2)]);
var inst_10548 = [];
var inst_10549 = inst_10548.push(inst_10533);
var inst_10529 = inst_10548;
var inst_10530 = inst_10537;
var state_10569__$1 = (function (){var statearr_10581 = state_10569;
(statearr_10581[(7)] = inst_10530);

(statearr_10581[(8)] = inst_10529);

(statearr_10581[(11)] = inst_10549);

(statearr_10581[(12)] = inst_10547);

return statearr_10581;
})();
var statearr_10582_11821 = state_10569__$1;
(statearr_10582_11821[(2)] = null);

(statearr_10582_11821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (9))){
var inst_10529 = (state_10569[(8)]);
var inst_10545 = cljs.core.vec(inst_10529);
var state_10569__$1 = state_10569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10569__$1,(11),out,inst_10545);
} else {
if((state_val_10570 === (5))){
var inst_10533 = (state_10569[(9)]);
var inst_10530 = (state_10569[(7)]);
var inst_10537 = (state_10569[(10)]);
var inst_10537__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_10533) : f.call(null,inst_10533));
var inst_10538 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_10537__$1,inst_10530);
var inst_10539 = cljs.core.keyword_identical_QMARK_(inst_10530,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_10540 = ((inst_10538) || (inst_10539));
var state_10569__$1 = (function (){var statearr_10583 = state_10569;
(statearr_10583[(10)] = inst_10537__$1);

return statearr_10583;
})();
if(cljs.core.truth_(inst_10540)){
var statearr_10584_11823 = state_10569__$1;
(statearr_10584_11823[(1)] = (8));

} else {
var statearr_10585_11824 = state_10569__$1;
(statearr_10585_11824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (14))){
var inst_10562 = (state_10569[(2)]);
var inst_10563 = cljs.core.async.close_BANG_(out);
var state_10569__$1 = (function (){var statearr_10587 = state_10569;
(statearr_10587[(13)] = inst_10562);

return statearr_10587;
})();
var statearr_10588_11825 = state_10569__$1;
(statearr_10588_11825[(2)] = inst_10563);

(statearr_10588_11825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (10))){
var inst_10552 = (state_10569[(2)]);
var state_10569__$1 = state_10569;
var statearr_10589_11826 = state_10569__$1;
(statearr_10589_11826[(2)] = inst_10552);

(statearr_10589_11826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10570 === (8))){
var inst_10533 = (state_10569[(9)]);
var inst_10529 = (state_10569[(8)]);
var inst_10537 = (state_10569[(10)]);
var inst_10542 = inst_10529.push(inst_10533);
var tmp10586 = inst_10529;
var inst_10529__$1 = tmp10586;
var inst_10530 = inst_10537;
var state_10569__$1 = (function (){var statearr_10590 = state_10569;
(statearr_10590[(7)] = inst_10530);

(statearr_10590[(8)] = inst_10529__$1);

(statearr_10590[(14)] = inst_10542);

return statearr_10590;
})();
var statearr_10591_11828 = state_10569__$1;
(statearr_10591_11828[(2)] = null);

(statearr_10591_11828[(1)] = (2));


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
});})(c__7914__auto___11759,out))
;
return ((function (switch__7528__auto__,c__7914__auto___11759,out){
return (function() {
var cljs$core$async$state_machine__7529__auto__ = null;
var cljs$core$async$state_machine__7529__auto____0 = (function (){
var statearr_10592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10592[(0)] = cljs$core$async$state_machine__7529__auto__);

(statearr_10592[(1)] = (1));

return statearr_10592;
});
var cljs$core$async$state_machine__7529__auto____1 = (function (state_10569){
while(true){
var ret_value__7530__auto__ = (function (){try{while(true){
var result__7531__auto__ = switch__7528__auto__(state_10569);
if(cljs.core.keyword_identical_QMARK_(result__7531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7531__auto__;
}
break;
}
}catch (e10593){if((e10593 instanceof Object)){
var ex__7532__auto__ = e10593;
var statearr_10594_11840 = state_10569;
(statearr_10594_11840[(5)] = ex__7532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10593;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11845 = state_10569;
state_10569 = G__11845;
continue;
} else {
return ret_value__7530__auto__;
}
break;
}
});
cljs$core$async$state_machine__7529__auto__ = function(state_10569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7529__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7529__auto____1.call(this,state_10569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7529__auto____0;
cljs$core$async$state_machine__7529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7529__auto____1;
return cljs$core$async$state_machine__7529__auto__;
})()
;})(switch__7528__auto__,c__7914__auto___11759,out))
})();
var state__7916__auto__ = (function (){var statearr_10595 = (f__7915__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7915__auto__.cljs$core$IFn$_invoke$arity$0() : f__7915__auto__.call(null));
(statearr_10595[(6)] = c__7914__auto___11759);

return statearr_10595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7916__auto__);
});})(c__7914__auto___11759,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
