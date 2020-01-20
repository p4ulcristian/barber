goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof reagent !== 'undefined') && (typeof reagent.session !== 'undefined') && (typeof reagent.session.state !== 'undefined')){
} else {
reagent.session.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor(reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__4736__auto__ = [];
var len__4730__auto___67139 = arguments.length;
var i__4731__auto___67140 = (0);
while(true){
if((i__4731__auto___67140 < len__4730__auto___67139)){
args__4736__auto__.push((arguments[i__4731__auto___67140]));

var G__67141 = (i__4731__auto___67140 + (1));
i__4731__auto___67140 = G__67141;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__67076){
var vec__67077 = p__67076;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67077,(0),null);
var temp_a = cljs.core.deref(reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)));
if((!((temp_a == null)))){
return temp_a;
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get.cljs$lang$applyTo = (function (seq67074){
var G__67075 = cljs.core.first(seq67074);
var seq67074__$1 = cljs.core.next(seq67074);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67075,seq67074__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__4736__auto__ = [];
var len__4730__auto___67145 = arguments.length;
var i__4731__auto___67146 = (0);
while(true){
if((i__4731__auto___67146 < len__4730__auto___67145)){
args__4736__auto__.push((arguments[i__4731__auto___67146]));

var G__67147 = (i__4731__auto___67146 + (1));
i__4731__auto___67146 = G__67147;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__67088){
var vec__67090 = p__67088;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67090,(0),null);
var result = cljs.core.deref(reagent.session.cursor(ks));
if((!((result == null)))){
return result;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_in.cljs$lang$applyTo = (function (seq67082){
var G__67083 = cljs.core.first(seq67082);
var seq67082__$1 = cljs.core.next(seq67082);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67083,seq67082__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___67149 = arguments.length;
var i__4731__auto___67150 = (0);
while(true){
if((i__4731__auto___67150 < len__4730__auto___67149)){
args__4736__auto__.push((arguments[i__4731__auto___67150]));

var G__67151 = (i__4731__auto___67150 + (1));
i__4731__auto___67150 = G__67151;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq67096){
var G__67097 = cljs.core.first(seq67096);
var seq67096__$1 = cljs.core.next(seq67096);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67097,seq67096__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_(reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_(reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___67155 = arguments.length;
var i__4731__auto___67156 = (0);
while(true){
if((i__4731__auto___67156 < len__4730__auto___67155)){
args__4736__auto__.push((arguments[i__4731__auto___67156]));

var G__67157 = (i__4731__auto___67156 + (1));
i__4731__auto___67156 = G__67157;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__67108){
var vec__67109 = p__67108;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67109,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq67105){
var G__67106 = cljs.core.first(seq67105);
var seq67105__$1 = cljs.core.next(seq67105);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67106,seq67105__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___67160 = arguments.length;
var i__4731__auto___67161 = (0);
while(true){
if((i__4731__auto___67161 < len__4730__auto___67160)){
args__4736__auto__.push((arguments[i__4731__auto___67161]));

var G__67162 = (i__4731__auto___67161 + (1));
i__4731__auto___67161 = G__67162;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__67118){
var vec__67119 = p__67118;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67119,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq67115){
var G__67117 = cljs.core.first(seq67115);
var seq67115__$1 = cljs.core.next(seq67115);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67117,seq67115__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___67169 = arguments.length;
var i__4731__auto___67170 = (0);
while(true){
if((i__4731__auto___67170 < len__4730__auto___67169)){
args__4736__auto__.push((arguments[i__4731__auto___67170]));

var G__67171 = (i__4731__auto___67170 + (1));
i__4731__auto___67170 = G__67171;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__67125_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__67125_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq67126){
var G__67127 = cljs.core.first(seq67126);
var seq67126__$1 = cljs.core.next(seq67126);
var G__67128 = cljs.core.first(seq67126__$1);
var seq67126__$2 = cljs.core.next(seq67126__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67127,G__67128,seq67126__$2);
});

/**
 * Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___67177 = arguments.length;
var i__4731__auto___67178 = (0);
while(true){
if((i__4731__auto___67178 < len__4730__auto___67177)){
args__4736__auto__.push((arguments[i__4731__auto___67178]));

var G__67179 = (i__4731__auto___67178 + (1));
i__4731__auto___67178 = G__67179;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__67132_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__67132_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq67135){
var G__67136 = cljs.core.first(seq67135);
var seq67135__$1 = cljs.core.next(seq67135);
var G__67137 = cljs.core.first(seq67135__$1);
var seq67135__$2 = cljs.core.next(seq67135__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67136,G__67137,seq67135__$2);
});


//# sourceMappingURL=reagent.session.js.map
