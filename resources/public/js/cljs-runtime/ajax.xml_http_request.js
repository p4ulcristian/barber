goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__68451 = e.target.readyState;
var fexpr__68450 = new cljs.core.PersistentArrayMap(null, 6, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276),new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true], null);
return (fexpr__68450.cljs$core$IFn$_invoke$arity$1 ? fexpr__68450.cljs$core$IFn$_invoke$arity$1(G__68451) : fexpr__68450.call(null,G__68451));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__68459,handler){
var map__68461 = p__68459;
var map__68461__$1 = (((((!((map__68461 == null))))?(((((map__68461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68461):map__68461);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68461__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68461__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68461__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68461__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68461__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68461__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68461__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__68461,map__68461__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__68457_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__68457_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__68461,map__68461__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5735__auto___68486 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___68486)){
var response_type_68487 = temp__5735__auto___68486;
this$__$1.responseType = cljs.core.name(response_type_68487);
} else {
}

var seq__68464_68488 = cljs.core.seq(headers);
var chunk__68465_68489 = null;
var count__68466_68490 = (0);
var i__68467_68491 = (0);
while(true){
if((i__68467_68491 < count__68466_68490)){
var vec__68480_68492 = chunk__68465_68489.cljs$core$IIndexed$_nth$arity$2(null,i__68467_68491);
var k_68493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68480_68492,(0),null);
var v_68494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68480_68492,(1),null);
this$__$1.setRequestHeader(k_68493,v_68494);


var G__68495 = seq__68464_68488;
var G__68496 = chunk__68465_68489;
var G__68497 = count__68466_68490;
var G__68498 = (i__68467_68491 + (1));
seq__68464_68488 = G__68495;
chunk__68465_68489 = G__68496;
count__68466_68490 = G__68497;
i__68467_68491 = G__68498;
continue;
} else {
var temp__5735__auto___68499 = cljs.core.seq(seq__68464_68488);
if(temp__5735__auto___68499){
var seq__68464_68500__$1 = temp__5735__auto___68499;
if(cljs.core.chunked_seq_QMARK_(seq__68464_68500__$1)){
var c__4550__auto___68501 = cljs.core.chunk_first(seq__68464_68500__$1);
var G__68502 = cljs.core.chunk_rest(seq__68464_68500__$1);
var G__68503 = c__4550__auto___68501;
var G__68504 = cljs.core.count(c__4550__auto___68501);
var G__68505 = (0);
seq__68464_68488 = G__68502;
chunk__68465_68489 = G__68503;
count__68466_68490 = G__68504;
i__68467_68491 = G__68505;
continue;
} else {
var vec__68483_68506 = cljs.core.first(seq__68464_68500__$1);
var k_68507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68483_68506,(0),null);
var v_68508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68483_68506,(1),null);
this$__$1.setRequestHeader(k_68507,v_68508);


var G__68509 = cljs.core.next(seq__68464_68500__$1);
var G__68510 = null;
var G__68511 = (0);
var G__68512 = (0);
seq__68464_68488 = G__68509;
chunk__68465_68489 = G__68510;
count__68466_68490 = G__68511;
i__68467_68491 = G__68512;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4131__auto__ = body;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});

//# sourceMappingURL=ajax.xml_http_request.js.map
