goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__62499 = coll;
var G__62500 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__62499,G__62500) : shadow.dom.lazy_native_coll_seq.call(null,G__62499,G__62500));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__62514 = arguments.length;
switch (G__62514) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__62522 = arguments.length;
switch (G__62522) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__62527 = arguments.length;
switch (G__62527) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__62536 = arguments.length;
switch (G__62536) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__62543 = arguments.length;
switch (G__62543) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__62547 = document;
var G__62548 = shadow.dom.dom_node(el);
return goog.dom.contains(G__62547,G__62548);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__62549 = shadow.dom.dom_node(parent);
var G__62550 = shadow.dom.dom_node(el);
return goog.dom.contains(G__62549,G__62550);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__62552 = shadow.dom.dom_node(el);
var G__62553 = cls;
return goog.dom.classlist.add(G__62552,G__62553);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__62556 = shadow.dom.dom_node(el);
var G__62557 = cls;
return goog.dom.classlist.remove(G__62556,G__62557);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__62559 = arguments.length;
switch (G__62559) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__62571 = shadow.dom.dom_node(el);
var G__62572 = cls;
return goog.dom.classlist.toggle(G__62571,G__62572);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e62574){if((e62574 instanceof Object)){
var e = e62574;
return console.log("didnt support attachEvent",el,e);
} else {
throw e62574;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__62593 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__62594 = null;
var count__62595 = (0);
var i__62596 = (0);
while(true){
if((i__62596 < count__62595)){
var el = chunk__62594.cljs$core$IIndexed$_nth$arity$2(null,i__62596);
var handler_63472__$1 = ((function (seq__62593,chunk__62594,count__62595,i__62596,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__62593,chunk__62594,count__62595,i__62596,el))
;
var G__62625_63475 = el;
var G__62626_63476 = cljs.core.name(ev);
var G__62627_63477 = handler_63472__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__62625_63475,G__62626_63476,G__62627_63477) : shadow.dom.dom_listen.call(null,G__62625_63475,G__62626_63476,G__62627_63477));


var G__63478 = seq__62593;
var G__63479 = chunk__62594;
var G__63480 = count__62595;
var G__63481 = (i__62596 + (1));
seq__62593 = G__63478;
chunk__62594 = G__63479;
count__62595 = G__63480;
i__62596 = G__63481;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62593);
if(temp__5735__auto__){
var seq__62593__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62593__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62593__$1);
var G__63482 = cljs.core.chunk_rest(seq__62593__$1);
var G__63483 = c__4550__auto__;
var G__63484 = cljs.core.count(c__4550__auto__);
var G__63485 = (0);
seq__62593 = G__63482;
chunk__62594 = G__63483;
count__62595 = G__63484;
i__62596 = G__63485;
continue;
} else {
var el = cljs.core.first(seq__62593__$1);
var handler_63487__$1 = ((function (seq__62593,chunk__62594,count__62595,i__62596,el,seq__62593__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__62593,chunk__62594,count__62595,i__62596,el,seq__62593__$1,temp__5735__auto__))
;
var G__62652_63489 = el;
var G__62653_63490 = cljs.core.name(ev);
var G__62654_63491 = handler_63487__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__62652_63489,G__62653_63490,G__62654_63491) : shadow.dom.dom_listen.call(null,G__62652_63489,G__62653_63490,G__62654_63491));


var G__63492 = cljs.core.next(seq__62593__$1);
var G__63493 = null;
var G__63494 = (0);
var G__63495 = (0);
seq__62593 = G__63492;
chunk__62594 = G__63493;
count__62595 = G__63494;
i__62596 = G__63495;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__62660 = arguments.length;
switch (G__62660) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__62670 = shadow.dom.dom_node(el);
var G__62671 = cljs.core.name(ev);
var G__62672 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__62670,G__62671,G__62672) : shadow.dom.dom_listen.call(null,G__62670,G__62671,G__62672));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__62677 = shadow.dom.dom_node(el);
var G__62678 = cljs.core.name(ev);
var G__62679 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__62677,G__62678,G__62679) : shadow.dom.dom_listen_remove.call(null,G__62677,G__62678,G__62679));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__62687 = cljs.core.seq(events);
var chunk__62688 = null;
var count__62689 = (0);
var i__62690 = (0);
while(true){
if((i__62690 < count__62689)){
var vec__62703 = chunk__62688.cljs$core$IIndexed$_nth$arity$2(null,i__62690);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62703,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62703,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__63500 = seq__62687;
var G__63501 = chunk__62688;
var G__63502 = count__62689;
var G__63503 = (i__62690 + (1));
seq__62687 = G__63500;
chunk__62688 = G__63501;
count__62689 = G__63502;
i__62690 = G__63503;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62687);
if(temp__5735__auto__){
var seq__62687__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62687__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62687__$1);
var G__63504 = cljs.core.chunk_rest(seq__62687__$1);
var G__63505 = c__4550__auto__;
var G__63506 = cljs.core.count(c__4550__auto__);
var G__63507 = (0);
seq__62687 = G__63504;
chunk__62688 = G__63505;
count__62689 = G__63506;
i__62690 = G__63507;
continue;
} else {
var vec__62706 = cljs.core.first(seq__62687__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62706,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62706,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__63508 = cljs.core.next(seq__62687__$1);
var G__63509 = null;
var G__63510 = (0);
var G__63511 = (0);
seq__62687 = G__63508;
chunk__62688 = G__63509;
count__62689 = G__63510;
i__62690 = G__63511;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__62717 = cljs.core.seq(styles);
var chunk__62718 = null;
var count__62719 = (0);
var i__62720 = (0);
while(true){
if((i__62720 < count__62719)){
var vec__62746 = chunk__62718.cljs$core$IIndexed$_nth$arity$2(null,i__62720);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62746,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62746,(1),null);
var G__62749_63513 = dom;
var G__62750_63514 = cljs.core.name(k);
var G__62751_63515 = (((v == null))?"":v);
goog.style.setStyle(G__62749_63513,G__62750_63514,G__62751_63515);


var G__63516 = seq__62717;
var G__63517 = chunk__62718;
var G__63518 = count__62719;
var G__63519 = (i__62720 + (1));
seq__62717 = G__63516;
chunk__62718 = G__63517;
count__62719 = G__63518;
i__62720 = G__63519;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62717);
if(temp__5735__auto__){
var seq__62717__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62717__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62717__$1);
var G__63521 = cljs.core.chunk_rest(seq__62717__$1);
var G__63522 = c__4550__auto__;
var G__63523 = cljs.core.count(c__4550__auto__);
var G__63524 = (0);
seq__62717 = G__63521;
chunk__62718 = G__63522;
count__62719 = G__63523;
i__62720 = G__63524;
continue;
} else {
var vec__62757 = cljs.core.first(seq__62717__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62757,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62757,(1),null);
var G__62760_63526 = dom;
var G__62761_63527 = cljs.core.name(k);
var G__62762_63528 = (((v == null))?"":v);
goog.style.setStyle(G__62760_63526,G__62761_63527,G__62762_63528);


var G__63529 = cljs.core.next(seq__62717__$1);
var G__63530 = null;
var G__63531 = (0);
var G__63532 = (0);
seq__62717 = G__63529;
chunk__62718 = G__63530;
count__62719 = G__63531;
i__62720 = G__63532;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__62768_63535 = key;
var G__62768_63536__$1 = (((G__62768_63535 instanceof cljs.core.Keyword))?G__62768_63535.fqn:null);
switch (G__62768_63536__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_63541 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_63541,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_63541,"aria-");
}
})())){
el.setAttribute(ks_63541,value);
} else {
(el[ks_63541] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__62785 = shadow.dom.dom_node(el);
var G__62786 = cls;
return goog.dom.classlist.contains(G__62785,G__62786);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__62794){
var map__62796 = p__62794;
var map__62796__$1 = (((((!((map__62796 == null))))?(((((map__62796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62796):map__62796);
var props = map__62796__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62796__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__62804 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62804,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62804,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62804,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__62808 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__62808,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__62808;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__62817 = arguments.length;
switch (G__62817) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__62839){
var vec__62840 = p__62839;
var seq__62841 = cljs.core.seq(vec__62840);
var first__62842 = cljs.core.first(seq__62841);
var seq__62841__$1 = cljs.core.next(seq__62841);
var nn = first__62842;
var first__62842__$1 = cljs.core.first(seq__62841__$1);
var seq__62841__$2 = cljs.core.next(seq__62841__$1);
var np = first__62842__$1;
var nc = seq__62841__$2;
var node = vec__62840;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__62846 = nn;
var G__62847 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__62846,G__62847) : create_fn.call(null,G__62846,G__62847));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__62848 = nn;
var G__62849 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__62848,G__62849) : create_fn.call(null,G__62848,G__62849));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__62855 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62855,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62855,(1),null);
var seq__62858_63558 = cljs.core.seq(node_children);
var chunk__62859_63559 = null;
var count__62860_63560 = (0);
var i__62861_63561 = (0);
while(true){
if((i__62861_63561 < count__62860_63560)){
var child_struct_63562 = chunk__62859_63559.cljs$core$IIndexed$_nth$arity$2(null,i__62861_63561);
var children_63564 = shadow.dom.dom_node(child_struct_63562);
if(cljs.core.seq_QMARK_(children_63564)){
var seq__62895_63565 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_63564));
var chunk__62897_63566 = null;
var count__62898_63567 = (0);
var i__62899_63568 = (0);
while(true){
if((i__62899_63568 < count__62898_63567)){
var child_63569 = chunk__62897_63566.cljs$core$IIndexed$_nth$arity$2(null,i__62899_63568);
if(cljs.core.truth_(child_63569)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_63569);


var G__63570 = seq__62895_63565;
var G__63571 = chunk__62897_63566;
var G__63572 = count__62898_63567;
var G__63573 = (i__62899_63568 + (1));
seq__62895_63565 = G__63570;
chunk__62897_63566 = G__63571;
count__62898_63567 = G__63572;
i__62899_63568 = G__63573;
continue;
} else {
var G__63576 = seq__62895_63565;
var G__63577 = chunk__62897_63566;
var G__63578 = count__62898_63567;
var G__63579 = (i__62899_63568 + (1));
seq__62895_63565 = G__63576;
chunk__62897_63566 = G__63577;
count__62898_63567 = G__63578;
i__62899_63568 = G__63579;
continue;
}
} else {
var temp__5735__auto___63580 = cljs.core.seq(seq__62895_63565);
if(temp__5735__auto___63580){
var seq__62895_63581__$1 = temp__5735__auto___63580;
if(cljs.core.chunked_seq_QMARK_(seq__62895_63581__$1)){
var c__4550__auto___63582 = cljs.core.chunk_first(seq__62895_63581__$1);
var G__63583 = cljs.core.chunk_rest(seq__62895_63581__$1);
var G__63584 = c__4550__auto___63582;
var G__63585 = cljs.core.count(c__4550__auto___63582);
var G__63586 = (0);
seq__62895_63565 = G__63583;
chunk__62897_63566 = G__63584;
count__62898_63567 = G__63585;
i__62899_63568 = G__63586;
continue;
} else {
var child_63587 = cljs.core.first(seq__62895_63581__$1);
if(cljs.core.truth_(child_63587)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_63587);


var G__63588 = cljs.core.next(seq__62895_63581__$1);
var G__63589 = null;
var G__63590 = (0);
var G__63591 = (0);
seq__62895_63565 = G__63588;
chunk__62897_63566 = G__63589;
count__62898_63567 = G__63590;
i__62899_63568 = G__63591;
continue;
} else {
var G__63592 = cljs.core.next(seq__62895_63581__$1);
var G__63593 = null;
var G__63594 = (0);
var G__63595 = (0);
seq__62895_63565 = G__63592;
chunk__62897_63566 = G__63593;
count__62898_63567 = G__63594;
i__62899_63568 = G__63595;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_63564);
}


var G__63596 = seq__62858_63558;
var G__63597 = chunk__62859_63559;
var G__63598 = count__62860_63560;
var G__63599 = (i__62861_63561 + (1));
seq__62858_63558 = G__63596;
chunk__62859_63559 = G__63597;
count__62860_63560 = G__63598;
i__62861_63561 = G__63599;
continue;
} else {
var temp__5735__auto___63600 = cljs.core.seq(seq__62858_63558);
if(temp__5735__auto___63600){
var seq__62858_63601__$1 = temp__5735__auto___63600;
if(cljs.core.chunked_seq_QMARK_(seq__62858_63601__$1)){
var c__4550__auto___63606 = cljs.core.chunk_first(seq__62858_63601__$1);
var G__63607 = cljs.core.chunk_rest(seq__62858_63601__$1);
var G__63608 = c__4550__auto___63606;
var G__63609 = cljs.core.count(c__4550__auto___63606);
var G__63610 = (0);
seq__62858_63558 = G__63607;
chunk__62859_63559 = G__63608;
count__62860_63560 = G__63609;
i__62861_63561 = G__63610;
continue;
} else {
var child_struct_63611 = cljs.core.first(seq__62858_63601__$1);
var children_63612 = shadow.dom.dom_node(child_struct_63611);
if(cljs.core.seq_QMARK_(children_63612)){
var seq__62916_63613 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_63612));
var chunk__62918_63614 = null;
var count__62919_63615 = (0);
var i__62920_63616 = (0);
while(true){
if((i__62920_63616 < count__62919_63615)){
var child_63617 = chunk__62918_63614.cljs$core$IIndexed$_nth$arity$2(null,i__62920_63616);
if(cljs.core.truth_(child_63617)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_63617);


var G__63618 = seq__62916_63613;
var G__63619 = chunk__62918_63614;
var G__63620 = count__62919_63615;
var G__63621 = (i__62920_63616 + (1));
seq__62916_63613 = G__63618;
chunk__62918_63614 = G__63619;
count__62919_63615 = G__63620;
i__62920_63616 = G__63621;
continue;
} else {
var G__63622 = seq__62916_63613;
var G__63623 = chunk__62918_63614;
var G__63624 = count__62919_63615;
var G__63625 = (i__62920_63616 + (1));
seq__62916_63613 = G__63622;
chunk__62918_63614 = G__63623;
count__62919_63615 = G__63624;
i__62920_63616 = G__63625;
continue;
}
} else {
var temp__5735__auto___63626__$1 = cljs.core.seq(seq__62916_63613);
if(temp__5735__auto___63626__$1){
var seq__62916_63627__$1 = temp__5735__auto___63626__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62916_63627__$1)){
var c__4550__auto___63628 = cljs.core.chunk_first(seq__62916_63627__$1);
var G__63629 = cljs.core.chunk_rest(seq__62916_63627__$1);
var G__63630 = c__4550__auto___63628;
var G__63631 = cljs.core.count(c__4550__auto___63628);
var G__63632 = (0);
seq__62916_63613 = G__63629;
chunk__62918_63614 = G__63630;
count__62919_63615 = G__63631;
i__62920_63616 = G__63632;
continue;
} else {
var child_63633 = cljs.core.first(seq__62916_63627__$1);
if(cljs.core.truth_(child_63633)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_63633);


var G__63634 = cljs.core.next(seq__62916_63627__$1);
var G__63635 = null;
var G__63636 = (0);
var G__63637 = (0);
seq__62916_63613 = G__63634;
chunk__62918_63614 = G__63635;
count__62919_63615 = G__63636;
i__62920_63616 = G__63637;
continue;
} else {
var G__63638 = cljs.core.next(seq__62916_63627__$1);
var G__63639 = null;
var G__63640 = (0);
var G__63641 = (0);
seq__62916_63613 = G__63638;
chunk__62918_63614 = G__63639;
count__62919_63615 = G__63640;
i__62920_63616 = G__63641;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_63612);
}


var G__63643 = cljs.core.next(seq__62858_63601__$1);
var G__63644 = null;
var G__63645 = (0);
var G__63646 = (0);
seq__62858_63558 = G__63643;
chunk__62859_63559 = G__63644;
count__62860_63560 = G__63645;
i__62861_63561 = G__63646;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__62953 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__62953);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__62957 = cljs.core.seq(node);
var chunk__62958 = null;
var count__62959 = (0);
var i__62960 = (0);
while(true){
if((i__62960 < count__62959)){
var n = chunk__62958.cljs$core$IIndexed$_nth$arity$2(null,i__62960);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__63650 = seq__62957;
var G__63651 = chunk__62958;
var G__63652 = count__62959;
var G__63653 = (i__62960 + (1));
seq__62957 = G__63650;
chunk__62958 = G__63651;
count__62959 = G__63652;
i__62960 = G__63653;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62957);
if(temp__5735__auto__){
var seq__62957__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62957__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__62957__$1);
var G__63654 = cljs.core.chunk_rest(seq__62957__$1);
var G__63655 = c__4550__auto__;
var G__63656 = cljs.core.count(c__4550__auto__);
var G__63657 = (0);
seq__62957 = G__63654;
chunk__62958 = G__63655;
count__62959 = G__63656;
i__62960 = G__63657;
continue;
} else {
var n = cljs.core.first(seq__62957__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__63658 = cljs.core.next(seq__62957__$1);
var G__63659 = null;
var G__63660 = (0);
var G__63661 = (0);
seq__62957 = G__63658;
chunk__62958 = G__63659;
count__62959 = G__63660;
i__62960 = G__63661;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__62973 = shadow.dom.dom_node(new$);
var G__62974 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__62973,G__62974);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__62980 = arguments.length;
switch (G__62980) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__62985 = arguments.length;
switch (G__62985) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__63000 = arguments.length;
switch (G__63000) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63673 = arguments.length;
var i__4731__auto___63674 = (0);
while(true){
if((i__4731__auto___63674 < len__4730__auto___63673)){
args__4736__auto__.push((arguments[i__4731__auto___63674]));

var G__63675 = (i__4731__auto___63674 + (1));
i__4731__auto___63674 = G__63675;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__63033_63676 = cljs.core.seq(nodes);
var chunk__63034_63677 = null;
var count__63035_63678 = (0);
var i__63036_63679 = (0);
while(true){
if((i__63036_63679 < count__63035_63678)){
var node_63680 = chunk__63034_63677.cljs$core$IIndexed$_nth$arity$2(null,i__63036_63679);
fragment.appendChild(shadow.dom._to_dom(node_63680));


var G__63681 = seq__63033_63676;
var G__63682 = chunk__63034_63677;
var G__63683 = count__63035_63678;
var G__63684 = (i__63036_63679 + (1));
seq__63033_63676 = G__63681;
chunk__63034_63677 = G__63682;
count__63035_63678 = G__63683;
i__63036_63679 = G__63684;
continue;
} else {
var temp__5735__auto___63685 = cljs.core.seq(seq__63033_63676);
if(temp__5735__auto___63685){
var seq__63033_63686__$1 = temp__5735__auto___63685;
if(cljs.core.chunked_seq_QMARK_(seq__63033_63686__$1)){
var c__4550__auto___63687 = cljs.core.chunk_first(seq__63033_63686__$1);
var G__63688 = cljs.core.chunk_rest(seq__63033_63686__$1);
var G__63689 = c__4550__auto___63687;
var G__63690 = cljs.core.count(c__4550__auto___63687);
var G__63691 = (0);
seq__63033_63676 = G__63688;
chunk__63034_63677 = G__63689;
count__63035_63678 = G__63690;
i__63036_63679 = G__63691;
continue;
} else {
var node_63692 = cljs.core.first(seq__63033_63686__$1);
fragment.appendChild(shadow.dom._to_dom(node_63692));


var G__63693 = cljs.core.next(seq__63033_63686__$1);
var G__63694 = null;
var G__63695 = (0);
var G__63696 = (0);
seq__63033_63676 = G__63693;
chunk__63034_63677 = G__63694;
count__63035_63678 = G__63695;
i__63036_63679 = G__63696;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq63024){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63024));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__63051_63698 = cljs.core.seq(scripts);
var chunk__63052_63699 = null;
var count__63053_63700 = (0);
var i__63054_63701 = (0);
while(true){
if((i__63054_63701 < count__63053_63700)){
var vec__63071_63702 = chunk__63052_63699.cljs$core$IIndexed$_nth$arity$2(null,i__63054_63701);
var script_tag_63703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63071_63702,(0),null);
var script_body_63704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63071_63702,(1),null);
eval(script_body_63704);


var G__63706 = seq__63051_63698;
var G__63707 = chunk__63052_63699;
var G__63708 = count__63053_63700;
var G__63709 = (i__63054_63701 + (1));
seq__63051_63698 = G__63706;
chunk__63052_63699 = G__63707;
count__63053_63700 = G__63708;
i__63054_63701 = G__63709;
continue;
} else {
var temp__5735__auto___63710 = cljs.core.seq(seq__63051_63698);
if(temp__5735__auto___63710){
var seq__63051_63711__$1 = temp__5735__auto___63710;
if(cljs.core.chunked_seq_QMARK_(seq__63051_63711__$1)){
var c__4550__auto___63712 = cljs.core.chunk_first(seq__63051_63711__$1);
var G__63713 = cljs.core.chunk_rest(seq__63051_63711__$1);
var G__63714 = c__4550__auto___63712;
var G__63715 = cljs.core.count(c__4550__auto___63712);
var G__63716 = (0);
seq__63051_63698 = G__63713;
chunk__63052_63699 = G__63714;
count__63053_63700 = G__63715;
i__63054_63701 = G__63716;
continue;
} else {
var vec__63080_63717 = cljs.core.first(seq__63051_63711__$1);
var script_tag_63718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63080_63717,(0),null);
var script_body_63719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63080_63717,(1),null);
eval(script_body_63719);


var G__63720 = cljs.core.next(seq__63051_63711__$1);
var G__63721 = null;
var G__63722 = (0);
var G__63723 = (0);
seq__63051_63698 = G__63720;
chunk__63052_63699 = G__63721;
count__63053_63700 = G__63722;
i__63054_63701 = G__63723;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__63083){
var vec__63084 = p__63083;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63084,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63084,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__63098 = shadow.dom.dom_node(el);
var G__63099 = cls;
return goog.dom.getAncestorByClass(G__63098,G__63099);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__63101 = arguments.length;
switch (G__63101) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__63106 = shadow.dom.dom_node(el);
var G__63107 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__63106,G__63107);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__63108 = shadow.dom.dom_node(el);
var G__63109 = cljs.core.name(tag);
var G__63110 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__63108,G__63109,G__63110);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__63114 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__63114);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__63116 = shadow.dom.dom_node(dom);
var G__63117 = value;
return goog.dom.forms.setValue(G__63116,G__63117);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__63125 = cljs.core.seq(style_keys);
var chunk__63126 = null;
var count__63127 = (0);
var i__63128 = (0);
while(true){
if((i__63128 < count__63127)){
var it = chunk__63126.cljs$core$IIndexed$_nth$arity$2(null,i__63128);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__63727 = seq__63125;
var G__63728 = chunk__63126;
var G__63729 = count__63127;
var G__63730 = (i__63128 + (1));
seq__63125 = G__63727;
chunk__63126 = G__63728;
count__63127 = G__63729;
i__63128 = G__63730;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__63125);
if(temp__5735__auto__){
var seq__63125__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63125__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__63125__$1);
var G__63731 = cljs.core.chunk_rest(seq__63125__$1);
var G__63732 = c__4550__auto__;
var G__63733 = cljs.core.count(c__4550__auto__);
var G__63734 = (0);
seq__63125 = G__63731;
chunk__63126 = G__63732;
count__63127 = G__63733;
i__63128 = G__63734;
continue;
} else {
var it = cljs.core.first(seq__63125__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__63735 = cljs.core.next(seq__63125__$1);
var G__63736 = null;
var G__63737 = (0);
var G__63738 = (0);
seq__63125 = G__63735;
chunk__63126 = G__63736;
count__63127 = G__63737;
i__63128 = G__63738;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k63143,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__63151 = k63143;
var G__63151__$1 = (((G__63151 instanceof cljs.core.Keyword))?G__63151.fqn:null);
switch (G__63151__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63143,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__63152){
var vec__63153 = p__63152;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63153,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63153,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63142){
var self__ = this;
var G__63142__$1 = this;
return (new cljs.core.RecordIter((0),G__63142__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__63163 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__63163(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63144,other63145){
var self__ = this;
var this63144__$1 = this;
return (((!((other63145 == null)))) && ((this63144__$1.constructor === other63145.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63144__$1.x,other63145.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63144__$1.y,other63145.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63144__$1.__extmap,other63145.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__63142){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__63170 = cljs.core.keyword_identical_QMARK_;
var expr__63171 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__63173 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__63174 = expr__63171;
return (pred__63170.cljs$core$IFn$_invoke$arity$2 ? pred__63170.cljs$core$IFn$_invoke$arity$2(G__63173,G__63174) : pred__63170.call(null,G__63173,G__63174));
})())){
return (new shadow.dom.Coordinate(G__63142,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__63179 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__63180 = expr__63171;
return (pred__63170.cljs$core$IFn$_invoke$arity$2 ? pred__63170.cljs$core$IFn$_invoke$arity$2(G__63179,G__63180) : pred__63170.call(null,G__63179,G__63180));
})())){
return (new shadow.dom.Coordinate(self__.x,G__63142,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__63142),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__63142){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__63142,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__63146){
var extmap__4424__auto__ = (function (){var G__63199 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63146,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__63146)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63199);
} else {
return G__63199;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__63146),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__63146),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__63203 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__63203);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__63205 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__63205);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__63208 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__63208);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k63211,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__63220 = k63211;
var G__63220__$1 = (((G__63220 instanceof cljs.core.Keyword))?G__63220.fqn:null);
switch (G__63220__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63211,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__63225){
var vec__63226 = p__63225;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63226,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63226,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63210){
var self__ = this;
var G__63210__$1 = this;
return (new cljs.core.RecordIter((0),G__63210__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__63233 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__63233(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63212,other63213){
var self__ = this;
var this63212__$1 = this;
return (((!((other63213 == null)))) && ((this63212__$1.constructor === other63213.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63212__$1.w,other63213.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63212__$1.h,other63213.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63212__$1.__extmap,other63213.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__63210){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__63237 = cljs.core.keyword_identical_QMARK_;
var expr__63238 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__63240 = new cljs.core.Keyword(null,"w","w",354169001);
var G__63241 = expr__63238;
return (pred__63237.cljs$core$IFn$_invoke$arity$2 ? pred__63237.cljs$core$IFn$_invoke$arity$2(G__63240,G__63241) : pred__63237.call(null,G__63240,G__63241));
})())){
return (new shadow.dom.Size(G__63210,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__63242 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__63243 = expr__63238;
return (pred__63237.cljs$core$IFn$_invoke$arity$2 ? pred__63237.cljs$core$IFn$_invoke$arity$2(G__63242,G__63243) : pred__63237.call(null,G__63242,G__63243));
})())){
return (new shadow.dom.Size(self__.w,G__63210,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__63210),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__63210){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__63210,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__63214){
var extmap__4424__auto__ = (function (){var G__63248 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63214,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__63214)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63248);
} else {
return G__63248;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__63214),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__63214),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__63251 = shadow.dom.dom_node(el);
return goog.style.getSize(G__63251);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__63769 = (i + (1));
var G__63770 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__63769;
ret = G__63770;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__63258){
var vec__63259 = p__63258;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63259,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63259,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__63263 = arguments.length;
switch (G__63263) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__63266_63781 = new_node;
var G__63267_63782 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__63266_63781,G__63267_63782);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__63272_63783 = new_node;
var G__63273_63784 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__63272_63783,G__63273_63784);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__63787 = ps;
var G__63788 = (i + (1));
el__$1 = G__63787;
i = G__63788;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__63276 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__63276);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__63282 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__63282);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__63289 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__63289);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__63302 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63302,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63302,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63302,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__63311_63793 = cljs.core.seq(props);
var chunk__63312_63794 = null;
var count__63313_63795 = (0);
var i__63314_63796 = (0);
while(true){
if((i__63314_63796 < count__63313_63795)){
var vec__63332_63798 = chunk__63312_63794.cljs$core$IIndexed$_nth$arity$2(null,i__63314_63796);
var k_63799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63332_63798,(0),null);
var v_63800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63332_63798,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_63799);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_63799),v_63800);


var G__63803 = seq__63311_63793;
var G__63804 = chunk__63312_63794;
var G__63805 = count__63313_63795;
var G__63806 = (i__63314_63796 + (1));
seq__63311_63793 = G__63803;
chunk__63312_63794 = G__63804;
count__63313_63795 = G__63805;
i__63314_63796 = G__63806;
continue;
} else {
var temp__5735__auto___63807 = cljs.core.seq(seq__63311_63793);
if(temp__5735__auto___63807){
var seq__63311_63809__$1 = temp__5735__auto___63807;
if(cljs.core.chunked_seq_QMARK_(seq__63311_63809__$1)){
var c__4550__auto___63810 = cljs.core.chunk_first(seq__63311_63809__$1);
var G__63811 = cljs.core.chunk_rest(seq__63311_63809__$1);
var G__63812 = c__4550__auto___63810;
var G__63813 = cljs.core.count(c__4550__auto___63810);
var G__63814 = (0);
seq__63311_63793 = G__63811;
chunk__63312_63794 = G__63812;
count__63313_63795 = G__63813;
i__63314_63796 = G__63814;
continue;
} else {
var vec__63340_63815 = cljs.core.first(seq__63311_63809__$1);
var k_63816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63340_63815,(0),null);
var v_63817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63340_63815,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_63816);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_63816),v_63817);


var G__63821 = cljs.core.next(seq__63311_63809__$1);
var G__63822 = null;
var G__63823 = (0);
var G__63824 = (0);
seq__63311_63793 = G__63821;
chunk__63312_63794 = G__63822;
count__63313_63795 = G__63823;
i__63314_63796 = G__63824;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__63349 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63349,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63349,(1),null);
var seq__63353_63825 = cljs.core.seq(node_children);
var chunk__63355_63826 = null;
var count__63356_63827 = (0);
var i__63357_63828 = (0);
while(true){
if((i__63357_63828 < count__63356_63827)){
var child_struct_63829 = chunk__63355_63826.cljs$core$IIndexed$_nth$arity$2(null,i__63357_63828);
if((!((child_struct_63829 == null)))){
if(typeof child_struct_63829 === 'string'){
var text_63830 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_63830),child_struct_63829].join(''));
} else {
var children_63832 = shadow.dom.svg_node(child_struct_63829);
if(cljs.core.seq_QMARK_(children_63832)){
var seq__63396_63833 = cljs.core.seq(children_63832);
var chunk__63398_63834 = null;
var count__63399_63835 = (0);
var i__63400_63836 = (0);
while(true){
if((i__63400_63836 < count__63399_63835)){
var child_63837 = chunk__63398_63834.cljs$core$IIndexed$_nth$arity$2(null,i__63400_63836);
if(cljs.core.truth_(child_63837)){
node.appendChild(child_63837);


var G__63838 = seq__63396_63833;
var G__63839 = chunk__63398_63834;
var G__63840 = count__63399_63835;
var G__63841 = (i__63400_63836 + (1));
seq__63396_63833 = G__63838;
chunk__63398_63834 = G__63839;
count__63399_63835 = G__63840;
i__63400_63836 = G__63841;
continue;
} else {
var G__63842 = seq__63396_63833;
var G__63843 = chunk__63398_63834;
var G__63844 = count__63399_63835;
var G__63845 = (i__63400_63836 + (1));
seq__63396_63833 = G__63842;
chunk__63398_63834 = G__63843;
count__63399_63835 = G__63844;
i__63400_63836 = G__63845;
continue;
}
} else {
var temp__5735__auto___63848 = cljs.core.seq(seq__63396_63833);
if(temp__5735__auto___63848){
var seq__63396_63850__$1 = temp__5735__auto___63848;
if(cljs.core.chunked_seq_QMARK_(seq__63396_63850__$1)){
var c__4550__auto___63851 = cljs.core.chunk_first(seq__63396_63850__$1);
var G__63852 = cljs.core.chunk_rest(seq__63396_63850__$1);
var G__63853 = c__4550__auto___63851;
var G__63854 = cljs.core.count(c__4550__auto___63851);
var G__63855 = (0);
seq__63396_63833 = G__63852;
chunk__63398_63834 = G__63853;
count__63399_63835 = G__63854;
i__63400_63836 = G__63855;
continue;
} else {
var child_63856 = cljs.core.first(seq__63396_63850__$1);
if(cljs.core.truth_(child_63856)){
node.appendChild(child_63856);


var G__63857 = cljs.core.next(seq__63396_63850__$1);
var G__63858 = null;
var G__63859 = (0);
var G__63860 = (0);
seq__63396_63833 = G__63857;
chunk__63398_63834 = G__63858;
count__63399_63835 = G__63859;
i__63400_63836 = G__63860;
continue;
} else {
var G__63861 = cljs.core.next(seq__63396_63850__$1);
var G__63862 = null;
var G__63863 = (0);
var G__63864 = (0);
seq__63396_63833 = G__63861;
chunk__63398_63834 = G__63862;
count__63399_63835 = G__63863;
i__63400_63836 = G__63864;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_63832);
}
}


var G__63865 = seq__63353_63825;
var G__63866 = chunk__63355_63826;
var G__63867 = count__63356_63827;
var G__63868 = (i__63357_63828 + (1));
seq__63353_63825 = G__63865;
chunk__63355_63826 = G__63866;
count__63356_63827 = G__63867;
i__63357_63828 = G__63868;
continue;
} else {
var G__63869 = seq__63353_63825;
var G__63870 = chunk__63355_63826;
var G__63871 = count__63356_63827;
var G__63872 = (i__63357_63828 + (1));
seq__63353_63825 = G__63869;
chunk__63355_63826 = G__63870;
count__63356_63827 = G__63871;
i__63357_63828 = G__63872;
continue;
}
} else {
var temp__5735__auto___63873 = cljs.core.seq(seq__63353_63825);
if(temp__5735__auto___63873){
var seq__63353_63874__$1 = temp__5735__auto___63873;
if(cljs.core.chunked_seq_QMARK_(seq__63353_63874__$1)){
var c__4550__auto___63875 = cljs.core.chunk_first(seq__63353_63874__$1);
var G__63876 = cljs.core.chunk_rest(seq__63353_63874__$1);
var G__63877 = c__4550__auto___63875;
var G__63878 = cljs.core.count(c__4550__auto___63875);
var G__63879 = (0);
seq__63353_63825 = G__63876;
chunk__63355_63826 = G__63877;
count__63356_63827 = G__63878;
i__63357_63828 = G__63879;
continue;
} else {
var child_struct_63880 = cljs.core.first(seq__63353_63874__$1);
if((!((child_struct_63880 == null)))){
if(typeof child_struct_63880 === 'string'){
var text_63881 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_63881),child_struct_63880].join(''));
} else {
var children_63882 = shadow.dom.svg_node(child_struct_63880);
if(cljs.core.seq_QMARK_(children_63882)){
var seq__63407_63883 = cljs.core.seq(children_63882);
var chunk__63409_63884 = null;
var count__63410_63885 = (0);
var i__63411_63886 = (0);
while(true){
if((i__63411_63886 < count__63410_63885)){
var child_63887 = chunk__63409_63884.cljs$core$IIndexed$_nth$arity$2(null,i__63411_63886);
if(cljs.core.truth_(child_63887)){
node.appendChild(child_63887);


var G__63888 = seq__63407_63883;
var G__63889 = chunk__63409_63884;
var G__63890 = count__63410_63885;
var G__63891 = (i__63411_63886 + (1));
seq__63407_63883 = G__63888;
chunk__63409_63884 = G__63889;
count__63410_63885 = G__63890;
i__63411_63886 = G__63891;
continue;
} else {
var G__63893 = seq__63407_63883;
var G__63894 = chunk__63409_63884;
var G__63895 = count__63410_63885;
var G__63896 = (i__63411_63886 + (1));
seq__63407_63883 = G__63893;
chunk__63409_63884 = G__63894;
count__63410_63885 = G__63895;
i__63411_63886 = G__63896;
continue;
}
} else {
var temp__5735__auto___63897__$1 = cljs.core.seq(seq__63407_63883);
if(temp__5735__auto___63897__$1){
var seq__63407_63898__$1 = temp__5735__auto___63897__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63407_63898__$1)){
var c__4550__auto___63899 = cljs.core.chunk_first(seq__63407_63898__$1);
var G__63900 = cljs.core.chunk_rest(seq__63407_63898__$1);
var G__63901 = c__4550__auto___63899;
var G__63902 = cljs.core.count(c__4550__auto___63899);
var G__63903 = (0);
seq__63407_63883 = G__63900;
chunk__63409_63884 = G__63901;
count__63410_63885 = G__63902;
i__63411_63886 = G__63903;
continue;
} else {
var child_63906 = cljs.core.first(seq__63407_63898__$1);
if(cljs.core.truth_(child_63906)){
node.appendChild(child_63906);


var G__63907 = cljs.core.next(seq__63407_63898__$1);
var G__63908 = null;
var G__63909 = (0);
var G__63910 = (0);
seq__63407_63883 = G__63907;
chunk__63409_63884 = G__63908;
count__63410_63885 = G__63909;
i__63411_63886 = G__63910;
continue;
} else {
var G__63911 = cljs.core.next(seq__63407_63898__$1);
var G__63912 = null;
var G__63913 = (0);
var G__63914 = (0);
seq__63407_63883 = G__63911;
chunk__63409_63884 = G__63912;
count__63410_63885 = G__63913;
i__63411_63886 = G__63914;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_63882);
}
}


var G__63915 = cljs.core.next(seq__63353_63874__$1);
var G__63916 = null;
var G__63917 = (0);
var G__63918 = (0);
seq__63353_63825 = G__63915;
chunk__63355_63826 = G__63916;
count__63356_63827 = G__63917;
i__63357_63828 = G__63918;
continue;
} else {
var G__63919 = cljs.core.next(seq__63353_63874__$1);
var G__63920 = null;
var G__63921 = (0);
var G__63922 = (0);
seq__63353_63825 = G__63919;
chunk__63355_63826 = G__63920;
count__63356_63827 = G__63921;
i__63357_63828 = G__63922;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__63413_63924 = shadow.dom._to_svg;
var G__63414_63925 = "string";
var G__63415_63926 = ((function (G__63413_63924,G__63414_63925){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__63413_63924,G__63414_63925))
;
goog.object.set(G__63413_63924,G__63414_63925,G__63415_63926);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__63417_63929 = shadow.dom._to_svg;
var G__63418_63930 = "null";
var G__63419_63931 = ((function (G__63417_63929,G__63418_63930){
return (function (_){
return null;
});})(G__63417_63929,G__63418_63930))
;
goog.object.set(G__63417_63929,G__63418_63930,G__63419_63931);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___63932 = arguments.length;
var i__4731__auto___63934 = (0);
while(true){
if((i__4731__auto___63934 < len__4730__auto___63932)){
args__4736__auto__.push((arguments[i__4731__auto___63934]));

var G__63935 = (i__4731__auto___63934 + (1));
i__4731__auto___63934 = G__63935;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq63420){
var G__63421 = cljs.core.first(seq63420);
var seq63420__$1 = cljs.core.next(seq63420);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63421,seq63420__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__63424 = arguments.length;
switch (G__63424) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__63425_63943 = shadow.dom.dom_node(el);
var G__63426_63944 = cljs.core.name(event);
var G__63427_63945 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__63425_63943,G__63426_63944,G__63427_63945) : shadow.dom.dom_listen.call(null,G__63425_63943,G__63426_63944,G__63427_63945));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__60108__auto___63946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__60108__auto___63946,buf,chan,event_fn){
return (function (){
var f__60109__auto__ = (function (){var switch__59851__auto__ = ((function (c__60108__auto___63946,buf,chan,event_fn){
return (function (state_63432){
var state_val_63433 = (state_63432[(1)]);
if((state_val_63433 === (1))){
var state_63432__$1 = state_63432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63432__$1,(2),once_or_cleanup);
} else {
if((state_val_63433 === (2))){
var inst_63429 = (state_63432[(2)]);
var inst_63430 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_63432__$1 = (function (){var statearr_63434 = state_63432;
(statearr_63434[(7)] = inst_63429);

return statearr_63434;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63432__$1,inst_63430);
} else {
return null;
}
}
});})(c__60108__auto___63946,buf,chan,event_fn))
;
return ((function (switch__59851__auto__,c__60108__auto___63946,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__59852__auto__ = null;
var shadow$dom$state_machine__59852__auto____0 = (function (){
var statearr_63436 = [null,null,null,null,null,null,null,null];
(statearr_63436[(0)] = shadow$dom$state_machine__59852__auto__);

(statearr_63436[(1)] = (1));

return statearr_63436;
});
var shadow$dom$state_machine__59852__auto____1 = (function (state_63432){
while(true){
var ret_value__59853__auto__ = (function (){try{while(true){
var result__59854__auto__ = switch__59851__auto__(state_63432);
if(cljs.core.keyword_identical_QMARK_(result__59854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59854__auto__;
}
break;
}
}catch (e63437){if((e63437 instanceof Object)){
var ex__59855__auto__ = e63437;
var statearr_63438_63947 = state_63432;
(statearr_63438_63947[(5)] = ex__59855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63437;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63948 = state_63432;
state_63432 = G__63948;
continue;
} else {
return ret_value__59853__auto__;
}
break;
}
});
shadow$dom$state_machine__59852__auto__ = function(state_63432){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__59852__auto____0.call(this);
case 1:
return shadow$dom$state_machine__59852__auto____1.call(this,state_63432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__59852__auto____0;
shadow$dom$state_machine__59852__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__59852__auto____1;
return shadow$dom$state_machine__59852__auto__;
})()
;})(switch__59851__auto__,c__60108__auto___63946,buf,chan,event_fn))
})();
var state__60110__auto__ = (function (){var statearr_63441 = (f__60109__auto__.cljs$core$IFn$_invoke$arity$0 ? f__60109__auto__.cljs$core$IFn$_invoke$arity$0() : f__60109__auto__.call(null));
(statearr_63441[(6)] = c__60108__auto___63946);

return statearr_63441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__60110__auto__);
});})(c__60108__auto___63946,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
