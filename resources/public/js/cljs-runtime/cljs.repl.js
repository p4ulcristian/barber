goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__66368){
var map__66369 = p__66368;
var map__66369__$1 = (((((!((map__66369 == null))))?(((((map__66369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66369):map__66369);
var m = map__66369__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66369__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66369__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__66372_66570 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66373_66571 = null;
var count__66374_66572 = (0);
var i__66375_66573 = (0);
while(true){
if((i__66375_66573 < count__66374_66572)){
var f_66574 = chunk__66373_66571.cljs$core$IIndexed$_nth$arity$2(null,i__66375_66573);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_66574], 0));


var G__66575 = seq__66372_66570;
var G__66576 = chunk__66373_66571;
var G__66577 = count__66374_66572;
var G__66578 = (i__66375_66573 + (1));
seq__66372_66570 = G__66575;
chunk__66373_66571 = G__66576;
count__66374_66572 = G__66577;
i__66375_66573 = G__66578;
continue;
} else {
var temp__5735__auto___66579 = cljs.core.seq(seq__66372_66570);
if(temp__5735__auto___66579){
var seq__66372_66584__$1 = temp__5735__auto___66579;
if(cljs.core.chunked_seq_QMARK_(seq__66372_66584__$1)){
var c__4550__auto___66585 = cljs.core.chunk_first(seq__66372_66584__$1);
var G__66586 = cljs.core.chunk_rest(seq__66372_66584__$1);
var G__66587 = c__4550__auto___66585;
var G__66588 = cljs.core.count(c__4550__auto___66585);
var G__66589 = (0);
seq__66372_66570 = G__66586;
chunk__66373_66571 = G__66587;
count__66374_66572 = G__66588;
i__66375_66573 = G__66589;
continue;
} else {
var f_66593 = cljs.core.first(seq__66372_66584__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_66593], 0));


var G__66594 = cljs.core.next(seq__66372_66584__$1);
var G__66595 = null;
var G__66596 = (0);
var G__66597 = (0);
seq__66372_66570 = G__66594;
chunk__66373_66571 = G__66595;
count__66374_66572 = G__66596;
i__66375_66573 = G__66597;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_66598 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_66598], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_66598)))?cljs.core.second(arglists_66598):arglists_66598)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__66383_66613 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66384_66614 = null;
var count__66385_66615 = (0);
var i__66386_66616 = (0);
while(true){
if((i__66386_66616 < count__66385_66615)){
var vec__66398_66621 = chunk__66384_66614.cljs$core$IIndexed$_nth$arity$2(null,i__66386_66616);
var name_66622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66398_66621,(0),null);
var map__66401_66623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66398_66621,(1),null);
var map__66401_66624__$1 = (((((!((map__66401_66623 == null))))?(((((map__66401_66623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66401_66623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66401_66623):map__66401_66623);
var doc_66625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66401_66624__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_66626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66401_66624__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_66622], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_66626], 0));

if(cljs.core.truth_(doc_66625)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_66625], 0));
} else {
}


var G__66631 = seq__66383_66613;
var G__66632 = chunk__66384_66614;
var G__66633 = count__66385_66615;
var G__66634 = (i__66386_66616 + (1));
seq__66383_66613 = G__66631;
chunk__66384_66614 = G__66632;
count__66385_66615 = G__66633;
i__66386_66616 = G__66634;
continue;
} else {
var temp__5735__auto___66635 = cljs.core.seq(seq__66383_66613);
if(temp__5735__auto___66635){
var seq__66383_66636__$1 = temp__5735__auto___66635;
if(cljs.core.chunked_seq_QMARK_(seq__66383_66636__$1)){
var c__4550__auto___66637 = cljs.core.chunk_first(seq__66383_66636__$1);
var G__66638 = cljs.core.chunk_rest(seq__66383_66636__$1);
var G__66639 = c__4550__auto___66637;
var G__66640 = cljs.core.count(c__4550__auto___66637);
var G__66641 = (0);
seq__66383_66613 = G__66638;
chunk__66384_66614 = G__66639;
count__66385_66615 = G__66640;
i__66386_66616 = G__66641;
continue;
} else {
var vec__66403_66646 = cljs.core.first(seq__66383_66636__$1);
var name_66647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66403_66646,(0),null);
var map__66406_66648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66403_66646,(1),null);
var map__66406_66649__$1 = (((((!((map__66406_66648 == null))))?(((((map__66406_66648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66406_66648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66406_66648):map__66406_66648);
var doc_66650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66406_66649__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_66651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66406_66649__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_66647], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_66651], 0));

if(cljs.core.truth_(doc_66650)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_66650], 0));
} else {
}


var G__66652 = cljs.core.next(seq__66383_66636__$1);
var G__66653 = null;
var G__66654 = (0);
var G__66655 = (0);
seq__66383_66613 = G__66652;
chunk__66384_66614 = G__66653;
count__66385_66615 = G__66654;
i__66386_66616 = G__66655;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__66408 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__66409 = null;
var count__66410 = (0);
var i__66411 = (0);
while(true){
if((i__66411 < count__66410)){
var role = chunk__66409.cljs$core$IIndexed$_nth$arity$2(null,i__66411);
var temp__5735__auto___66657__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___66657__$1)){
var spec_66658 = temp__5735__auto___66657__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_66658)], 0));
} else {
}


var G__66659 = seq__66408;
var G__66660 = chunk__66409;
var G__66661 = count__66410;
var G__66662 = (i__66411 + (1));
seq__66408 = G__66659;
chunk__66409 = G__66660;
count__66410 = G__66661;
i__66411 = G__66662;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__66408);
if(temp__5735__auto____$1){
var seq__66408__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__66408__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__66408__$1);
var G__66663 = cljs.core.chunk_rest(seq__66408__$1);
var G__66664 = c__4550__auto__;
var G__66665 = cljs.core.count(c__4550__auto__);
var G__66666 = (0);
seq__66408 = G__66663;
chunk__66409 = G__66664;
count__66410 = G__66665;
i__66411 = G__66666;
continue;
} else {
var role = cljs.core.first(seq__66408__$1);
var temp__5735__auto___66667__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___66667__$2)){
var spec_66668 = temp__5735__auto___66667__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_66668)], 0));
} else {
}


var G__66669 = cljs.core.next(seq__66408__$1);
var G__66670 = null;
var G__66671 = (0);
var G__66672 = (0);
seq__66408 = G__66669;
chunk__66409 = G__66670;
count__66410 = G__66671;
i__66411 = G__66672;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__66676 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__66677 = cljs.core.ex_cause(t);
via = G__66676;
t = G__66677;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__66427 = datafied_throwable;
var map__66427__$1 = (((((!((map__66427 == null))))?(((((map__66427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66427):map__66427);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66427__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66427__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66427__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__66428 = cljs.core.last(via);
var map__66428__$1 = (((((!((map__66428 == null))))?(((((map__66428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66428):map__66428);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66428__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66428__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66428__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__66429 = data;
var map__66429__$1 = (((((!((map__66429 == null))))?(((((map__66429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66429):map__66429);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66429__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66429__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66429__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__66430 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__66430__$1 = (((((!((map__66430 == null))))?(((((map__66430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66430):map__66430);
var top_data = map__66430__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66430__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__66437 = phase;
var G__66437__$1 = (((G__66437 instanceof cljs.core.Keyword))?G__66437.fqn:null);
switch (G__66437__$1) {
case "read-source":
var map__66438 = data;
var map__66438__$1 = (((((!((map__66438 == null))))?(((((map__66438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66438):map__66438);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66438__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66438__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__66440 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__66440__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66440,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__66440);
var G__66440__$2 = (cljs.core.truth_((function (){var fexpr__66441 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__66441.cljs$core$IFn$_invoke$arity$1 ? fexpr__66441.cljs$core$IFn$_invoke$arity$1(source) : fexpr__66441.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__66440__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__66440__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66440__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__66440__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__66442 = top_data;
var G__66442__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66442,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__66442);
var G__66442__$2 = (cljs.core.truth_((function (){var fexpr__66443 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__66443.cljs$core$IFn$_invoke$arity$1 ? fexpr__66443.cljs$core$IFn$_invoke$arity$1(source) : fexpr__66443.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__66442__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__66442__$1);
var G__66442__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66442__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__66442__$2);
var G__66442__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66442__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__66442__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66442__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__66442__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__66444 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66444,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66444,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66444,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66444,(3),null);
var G__66447 = top_data;
var G__66447__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66447,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__66447);
var G__66447__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66447__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__66447__$1);
var G__66447__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66447__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__66447__$2);
var G__66447__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66447__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__66447__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66447__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__66447__$4;
}

break;
case "execution":
var vec__66450 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66450,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66450,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66450,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66450,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__66450,source__$1,method,file,line,G__66437,G__66437__$1,map__66427,map__66427__$1,via,trace,phase,map__66428,map__66428__$1,type,message,data,map__66429,map__66429__$1,problems,fn,caller,map__66430,map__66430__$1,top_data,source){
return (function (p1__66424_SHARP_){
var or__4131__auto__ = (p1__66424_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__66454 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__66454.cljs$core$IFn$_invoke$arity$1 ? fexpr__66454.cljs$core$IFn$_invoke$arity$1(p1__66424_SHARP_) : fexpr__66454.call(null,p1__66424_SHARP_));
}
});})(vec__66450,source__$1,method,file,line,G__66437,G__66437__$1,map__66427,map__66427__$1,via,trace,phase,map__66428,map__66428__$1,type,message,data,map__66429,map__66429__$1,problems,fn,caller,map__66430,map__66430__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__66455 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__66455__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66455,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__66455);
var G__66455__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66455__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__66455__$1);
var G__66455__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66455__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__66455__$2);
var G__66455__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66455__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__66455__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66455__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__66455__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66437__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__66476){
var map__66477 = p__66476;
var map__66477__$1 = (((((!((map__66477 == null))))?(((((map__66477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66477):map__66477);
var triage_data = map__66477__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66477__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66477__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66477__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66477__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66477__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66477__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66477__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66477__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__66485 = phase;
var G__66485__$1 = (((G__66485 instanceof cljs.core.Keyword))?G__66485.fqn:null);
switch (G__66485__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__66490 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__66491 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__66492 = loc;
var G__66493 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__66497_66702 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__66498_66703 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__66499_66704 = true;
var _STAR_print_fn_STAR__temp_val__66500_66705 = ((function (_STAR_print_newline_STAR__orig_val__66497_66702,_STAR_print_fn_STAR__orig_val__66498_66703,_STAR_print_newline_STAR__temp_val__66499_66704,sb__4661__auto__,G__66490,G__66491,G__66492,G__66485,G__66485__$1,loc,class_name,simple_class,cause_type,format,map__66477,map__66477__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__66497_66702,_STAR_print_fn_STAR__orig_val__66498_66703,_STAR_print_newline_STAR__temp_val__66499_66704,sb__4661__auto__,G__66490,G__66491,G__66492,G__66485,G__66485__$1,loc,class_name,simple_class,cause_type,format,map__66477,map__66477__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__66499_66704;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__66500_66705;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__66497_66702,_STAR_print_fn_STAR__orig_val__66498_66703,_STAR_print_newline_STAR__temp_val__66499_66704,_STAR_print_fn_STAR__temp_val__66500_66705,sb__4661__auto__,G__66490,G__66491,G__66492,G__66485,G__66485__$1,loc,class_name,simple_class,cause_type,format,map__66477,map__66477__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__66497_66702,_STAR_print_fn_STAR__orig_val__66498_66703,_STAR_print_newline_STAR__temp_val__66499_66704,_STAR_print_fn_STAR__temp_val__66500_66705,sb__4661__auto__,G__66490,G__66491,G__66492,G__66485,G__66485__$1,loc,class_name,simple_class,cause_type,format,map__66477,map__66477__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__66474_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__66474_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__66497_66702,_STAR_print_fn_STAR__orig_val__66498_66703,_STAR_print_newline_STAR__temp_val__66499_66704,_STAR_print_fn_STAR__temp_val__66500_66705,sb__4661__auto__,G__66490,G__66491,G__66492,G__66485,G__66485__$1,loc,class_name,simple_class,cause_type,format,map__66477,map__66477__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__66497_66702,_STAR_print_fn_STAR__orig_val__66498_66703,_STAR_print_newline_STAR__temp_val__66499_66704,_STAR_print_fn_STAR__temp_val__66500_66705,sb__4661__auto__,G__66490,G__66491,G__66492,G__66485,G__66485__$1,loc,class_name,simple_class,cause_type,format,map__66477,map__66477__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__66498_66703;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__66497_66702;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__66490,G__66491,G__66492,G__66493) : format.call(null,G__66490,G__66491,G__66492,G__66493));

break;
case "macroexpansion":
var G__66506 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__66507 = cause_type;
var G__66508 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__66509 = loc;
var G__66510 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__66506,G__66507,G__66508,G__66509,G__66510) : format.call(null,G__66506,G__66507,G__66508,G__66509,G__66510));

break;
case "compile-syntax-check":
var G__66518 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__66519 = cause_type;
var G__66520 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__66521 = loc;
var G__66522 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__66518,G__66519,G__66520,G__66521,G__66522) : format.call(null,G__66518,G__66519,G__66520,G__66521,G__66522));

break;
case "compilation":
var G__66526 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__66527 = cause_type;
var G__66528 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__66529 = loc;
var G__66530 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__66526,G__66527,G__66528,G__66529,G__66530) : format.call(null,G__66526,G__66527,G__66528,G__66529,G__66530));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__66531 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__66532 = symbol;
var G__66533 = loc;
var G__66534 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__66535_66719 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__66536_66720 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__66537_66721 = true;
var _STAR_print_fn_STAR__temp_val__66538_66722 = ((function (_STAR_print_newline_STAR__orig_val__66535_66719,_STAR_print_fn_STAR__orig_val__66536_66720,_STAR_print_newline_STAR__temp_val__66537_66721,sb__4661__auto__,G__66531,G__66532,G__66533,G__66485,G__66485__$1,loc,class_name,simple_class,cause_type,format,map__66477,map__66477__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__66535_66719,_STAR_print_fn_STAR__orig_val__66536_66720,_STAR_print_newline_STAR__temp_val__66537_66721,sb__4661__auto__,G__66531,G__66532,G__66533,G__66485,G__66485__$1,loc,class_name,simple_class,cause_type,format,map__66477,map__66477__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__66537_66721;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__66538_66722;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__66535_66719,_STAR_print_fn_STAR__orig_val__66536_66720,_STAR_print_newline_STAR__temp_val__66537_66721,_STAR_print_fn_STAR__temp_val__66538_66722,sb__4661__auto__,G__66531,G__66532,G__66533,G__66485,G__66485__$1,loc,class_name,simple_class,cause_type,format,map__66477,map__66477__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__66535_66719,_STAR_print_fn_STAR__orig_val__66536_66720,_STAR_print_newline_STAR__temp_val__66537_66721,_STAR_print_fn_STAR__temp_val__66538_66722,sb__4661__auto__,G__66531,G__66532,G__66533,G__66485,G__66485__$1,loc,class_name,simple_class,cause_type,format,map__66477,map__66477__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__66475_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__66475_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__66535_66719,_STAR_print_fn_STAR__orig_val__66536_66720,_STAR_print_newline_STAR__temp_val__66537_66721,_STAR_print_fn_STAR__temp_val__66538_66722,sb__4661__auto__,G__66531,G__66532,G__66533,G__66485,G__66485__$1,loc,class_name,simple_class,cause_type,format,map__66477,map__66477__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__66535_66719,_STAR_print_fn_STAR__orig_val__66536_66720,_STAR_print_newline_STAR__temp_val__66537_66721,_STAR_print_fn_STAR__temp_val__66538_66722,sb__4661__auto__,G__66531,G__66532,G__66533,G__66485,G__66485__$1,loc,class_name,simple_class,cause_type,format,map__66477,map__66477__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__66536_66720;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__66535_66719;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__66531,G__66532,G__66533,G__66534) : format.call(null,G__66531,G__66532,G__66533,G__66534));
} else {
var G__66548 = "Execution error%s at %s(%s).\n%s\n";
var G__66549 = cause_type;
var G__66550 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__66551 = loc;
var G__66552 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__66548,G__66549,G__66550,G__66551,G__66552) : format.call(null,G__66548,G__66549,G__66550,G__66551,G__66552));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66485__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
