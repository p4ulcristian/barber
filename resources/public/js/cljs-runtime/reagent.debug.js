goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__65937__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__65937 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65938__i = 0, G__65938__a = new Array(arguments.length -  0);
while (G__65938__i < G__65938__a.length) {G__65938__a[G__65938__i] = arguments[G__65938__i + 0]; ++G__65938__i;}
  args = new cljs.core.IndexedSeq(G__65938__a,0,null);
} 
return G__65937__delegate.call(this,args);};
G__65937.cljs$lang$maxFixedArity = 0;
G__65937.cljs$lang$applyTo = (function (arglist__65939){
var args = cljs.core.seq(arglist__65939);
return G__65937__delegate(args);
});
G__65937.cljs$core$IFn$_invoke$arity$variadic = G__65937__delegate;
return G__65937;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__65940__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__65940 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65941__i = 0, G__65941__a = new Array(arguments.length -  0);
while (G__65941__i < G__65941__a.length) {G__65941__a[G__65941__i] = arguments[G__65941__i + 0]; ++G__65941__i;}
  args = new cljs.core.IndexedSeq(G__65941__a,0,null);
} 
return G__65940__delegate.call(this,args);};
G__65940.cljs$lang$maxFixedArity = 0;
G__65940.cljs$lang$applyTo = (function (arglist__65942){
var args = cljs.core.seq(arglist__65942);
return G__65940__delegate(args);
});
G__65940.cljs$core$IFn$_invoke$arity$variadic = G__65940__delegate;
return G__65940;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
