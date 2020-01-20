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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__64033){
var vec__64034 = p__64033;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64034,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64034,(1),null);
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
var vec__64037 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64037,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64037,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64037,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__64046 = arguments.length;
switch (G__64046) {
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

var G__64084_64157 = clojure.data.equality_partition;
var G__64085_64158 = "null";
var G__64086_64159 = ((function (G__64084_64157,G__64085_64158){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__64084_64157,G__64085_64158))
;
goog.object.set(G__64084_64157,G__64085_64158,G__64086_64159);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__64088_64160 = clojure.data.equality_partition;
var G__64089_64161 = "string";
var G__64090_64162 = ((function (G__64088_64160,G__64089_64161){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__64088_64160,G__64089_64161))
;
goog.object.set(G__64088_64160,G__64089_64161,G__64090_64162);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__64098_64163 = clojure.data.equality_partition;
var G__64099_64164 = "number";
var G__64100_64165 = ((function (G__64098_64163,G__64099_64164){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__64098_64163,G__64099_64164))
;
goog.object.set(G__64098_64163,G__64099_64164,G__64100_64165);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__64102_64173 = clojure.data.equality_partition;
var G__64103_64174 = "array";
var G__64104_64175 = ((function (G__64102_64173,G__64103_64174){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__64102_64173,G__64103_64174))
;
goog.object.set(G__64102_64173,G__64103_64174,G__64104_64175);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__64107_64176 = clojure.data.equality_partition;
var G__64108_64177 = "function";
var G__64109_64178 = ((function (G__64107_64176,G__64108_64177){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__64107_64176,G__64108_64177))
;
goog.object.set(G__64107_64176,G__64108_64177,G__64109_64178);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__64112_64179 = clojure.data.equality_partition;
var G__64113_64180 = "boolean";
var G__64114_64181 = ((function (G__64112_64179,G__64113_64180){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__64112_64179,G__64113_64180))
;
goog.object.set(G__64112_64179,G__64113_64180,G__64114_64181);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__64117_64184 = clojure.data.equality_partition;
var G__64118_64185 = "_";
var G__64119_64186 = ((function (G__64117_64184,G__64118_64185){
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
});})(G__64117_64184,G__64118_64185))
;
goog.object.set(G__64117_64184,G__64118_64185,G__64119_64186);
goog.object.set(clojure.data.Diff,"null",true);

var G__64123_64189 = clojure.data.diff_similar;
var G__64124_64190 = "null";
var G__64125_64191 = ((function (G__64123_64189,G__64124_64190){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__64123_64189,G__64124_64190))
;
goog.object.set(G__64123_64189,G__64124_64190,G__64125_64191);

goog.object.set(clojure.data.Diff,"string",true);

var G__64126_64192 = clojure.data.diff_similar;
var G__64127_64193 = "string";
var G__64128_64194 = ((function (G__64126_64192,G__64127_64193){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__64126_64192,G__64127_64193))
;
goog.object.set(G__64126_64192,G__64127_64193,G__64128_64194);

goog.object.set(clojure.data.Diff,"number",true);

var G__64129_64195 = clojure.data.diff_similar;
var G__64130_64196 = "number";
var G__64131_64197 = ((function (G__64129_64195,G__64130_64196){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__64129_64195,G__64130_64196))
;
goog.object.set(G__64129_64195,G__64130_64196,G__64131_64197);

goog.object.set(clojure.data.Diff,"array",true);

var G__64132_64198 = clojure.data.diff_similar;
var G__64133_64199 = "array";
var G__64134_64200 = ((function (G__64132_64198,G__64133_64199){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__64132_64198,G__64133_64199))
;
goog.object.set(G__64132_64198,G__64133_64199,G__64134_64200);

goog.object.set(clojure.data.Diff,"function",true);

var G__64144_64201 = clojure.data.diff_similar;
var G__64145_64202 = "function";
var G__64146_64203 = ((function (G__64144_64201,G__64145_64202){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__64144_64201,G__64145_64202))
;
goog.object.set(G__64144_64201,G__64145_64202,G__64146_64203);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__64147_64206 = clojure.data.diff_similar;
var G__64148_64207 = "boolean";
var G__64149_64208 = ((function (G__64147_64206,G__64148_64207){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__64147_64206,G__64148_64207))
;
goog.object.set(G__64147_64206,G__64148_64207,G__64149_64208);

goog.object.set(clojure.data.Diff,"_",true);

var G__64150_64210 = clojure.data.diff_similar;
var G__64151_64211 = "_";
var G__64152_64212 = ((function (G__64150_64210,G__64151_64211){
return (function (a,b){
var fexpr__64154 = (function (){var G__64155 = clojure.data.equality_partition(a);
var G__64155__$1 = (((G__64155 instanceof cljs.core.Keyword))?G__64155.fqn:null);
switch (G__64155__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64155__$1)].join('')));

}
})();
return (fexpr__64154.cljs$core$IFn$_invoke$arity$2 ? fexpr__64154.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__64154.call(null,a,b));
});})(G__64150_64210,G__64151_64211))
;
goog.object.set(G__64150_64210,G__64151_64211,G__64152_64212);
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
