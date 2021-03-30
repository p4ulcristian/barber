goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__4389){
var vec__4390 = p__4389;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4390,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4390,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__4396 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4396,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4396,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4396,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__4414 = arguments.length;
switch (G__4414) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__4459_4605 = clojure.data.equality_partition;
var G__4460_4606 = "null";
var G__4461_4607 = ((function (G__4459_4605,G__4460_4606){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__4459_4605,G__4460_4606))
;
goog.object.set(G__4459_4605,G__4460_4606,G__4461_4607);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__4467_4610 = clojure.data.equality_partition;
var G__4468_4611 = "string";
var G__4469_4612 = ((function (G__4467_4610,G__4468_4611){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__4467_4610,G__4468_4611))
;
goog.object.set(G__4467_4610,G__4468_4611,G__4469_4612);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__4474_4614 = clojure.data.equality_partition;
var G__4475_4615 = "number";
var G__4476_4616 = ((function (G__4474_4614,G__4475_4615){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__4474_4614,G__4475_4615))
;
goog.object.set(G__4474_4614,G__4475_4615,G__4476_4616);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__4479_4618 = clojure.data.equality_partition;
var G__4480_4619 = "array";
var G__4481_4620 = ((function (G__4479_4618,G__4480_4619){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__4479_4618,G__4480_4619))
;
goog.object.set(G__4479_4618,G__4480_4619,G__4481_4620);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__4482_4625 = clojure.data.equality_partition;
var G__4483_4626 = "function";
var G__4484_4627 = ((function (G__4482_4625,G__4483_4626){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__4482_4625,G__4483_4626))
;
goog.object.set(G__4482_4625,G__4483_4626,G__4484_4627);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__4487_4628 = clojure.data.equality_partition;
var G__4488_4629 = "boolean";
var G__4489_4630 = ((function (G__4487_4628,G__4488_4629){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__4487_4628,G__4488_4629))
;
goog.object.set(G__4487_4628,G__4488_4629,G__4489_4630);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__4493_4631 = clojure.data.equality_partition;
var G__4494_4632 = "_";
var G__4495_4633 = ((function (G__4493_4631,G__4494_4632){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__4493_4631,G__4494_4632))
;
goog.object.set(G__4493_4631,G__4494_4632,G__4495_4633);
goog.object.set(clojure.data.Diff,"null",true);

var G__4525_4641 = clojure.data.diff_similar;
var G__4526_4642 = "null";
var G__4527_4643 = ((function (G__4525_4641,G__4526_4642){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__4525_4641,G__4526_4642))
;
goog.object.set(G__4525_4641,G__4526_4642,G__4527_4643);

goog.object.set(clojure.data.Diff,"string",true);

var G__4530_4644 = clojure.data.diff_similar;
var G__4531_4645 = "string";
var G__4532_4646 = ((function (G__4530_4644,G__4531_4645){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__4530_4644,G__4531_4645))
;
goog.object.set(G__4530_4644,G__4531_4645,G__4532_4646);

goog.object.set(clojure.data.Diff,"number",true);

var G__4538_4647 = clojure.data.diff_similar;
var G__4539_4648 = "number";
var G__4540_4649 = ((function (G__4538_4647,G__4539_4648){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__4538_4647,G__4539_4648))
;
goog.object.set(G__4538_4647,G__4539_4648,G__4540_4649);

goog.object.set(clojure.data.Diff,"array",true);

var G__4543_4652 = clojure.data.diff_similar;
var G__4544_4654 = "array";
var G__4545_4655 = ((function (G__4543_4652,G__4544_4654){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__4543_4652,G__4544_4654))
;
goog.object.set(G__4543_4652,G__4544_4654,G__4545_4655);

goog.object.set(clojure.data.Diff,"function",true);

var G__4551_4657 = clojure.data.diff_similar;
var G__4552_4658 = "function";
var G__4553_4659 = ((function (G__4551_4657,G__4552_4658){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__4551_4657,G__4552_4658))
;
goog.object.set(G__4551_4657,G__4552_4658,G__4553_4659);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__4558_4664 = clojure.data.diff_similar;
var G__4559_4665 = "boolean";
var G__4560_4666 = ((function (G__4558_4664,G__4559_4665){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__4558_4664,G__4559_4665))
;
goog.object.set(G__4558_4664,G__4559_4665,G__4560_4666);

goog.object.set(clojure.data.Diff,"_",true);

var G__4567_4667 = clojure.data.diff_similar;
var G__4568_4668 = "_";
var G__4569_4669 = ((function (G__4567_4667,G__4568_4668){
return (function (a,b){
var fexpr__4577 = (function (){var G__4578 = clojure.data.equality_partition(a);
var G__4578__$1 = (((G__4578 instanceof cljs.core.Keyword))?G__4578.fqn:null);
switch (G__4578__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4578__$1)].join('')));

}
})();
return (fexpr__4577.cljs$core$IFn$_invoke$arity$2 ? fexpr__4577.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__4577.call(null,a,b));
});})(G__4567_4667,G__4568_4668))
;
goog.object.set(G__4567_4667,G__4568_4668,G__4569_4669);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
