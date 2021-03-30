goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__11747 = e.target.readyState;
var fexpr__11746 = new cljs.core.PersistentArrayMap(null, 6, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276),new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true], null);
return (fexpr__11746.cljs$core$IFn$_invoke$arity$1 ? fexpr__11746.cljs$core$IFn$_invoke$arity$1(G__11747) : fexpr__11746.call(null,G__11747));
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

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__11765,handler){
var map__11767 = p__11765;
var map__11767__$1 = (((((!((map__11767 == null))))?(((((map__11767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11767):map__11767);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11767__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11767__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11767__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11767__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11767__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11767__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11767__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__11767,map__11767__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__11761_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__11761_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__11767,map__11767__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5735__auto___11830 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___11830)){
var response_type_11831 = temp__5735__auto___11830;
this$__$1.responseType = cljs.core.name(response_type_11831);
} else {
}

var seq__11778_11832 = cljs.core.seq(headers);
var chunk__11779_11833 = null;
var count__11780_11834 = (0);
var i__11781_11835 = (0);
while(true){
if((i__11781_11835 < count__11780_11834)){
var vec__11798_11837 = chunk__11779_11833.cljs$core$IIndexed$_nth$arity$2(null,i__11781_11835);
var k_11838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11798_11837,(0),null);
var v_11839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11798_11837,(1),null);
this$__$1.setRequestHeader(k_11838,v_11839);


var G__11841 = seq__11778_11832;
var G__11842 = chunk__11779_11833;
var G__11843 = count__11780_11834;
var G__11844 = (i__11781_11835 + (1));
seq__11778_11832 = G__11841;
chunk__11779_11833 = G__11842;
count__11780_11834 = G__11843;
i__11781_11835 = G__11844;
continue;
} else {
var temp__5735__auto___11846 = cljs.core.seq(seq__11778_11832);
if(temp__5735__auto___11846){
var seq__11778_11847__$1 = temp__5735__auto___11846;
if(cljs.core.chunked_seq_QMARK_(seq__11778_11847__$1)){
var c__4550__auto___11848 = cljs.core.chunk_first(seq__11778_11847__$1);
var G__11849 = cljs.core.chunk_rest(seq__11778_11847__$1);
var G__11850 = c__4550__auto___11848;
var G__11851 = cljs.core.count(c__4550__auto___11848);
var G__11852 = (0);
seq__11778_11832 = G__11849;
chunk__11779_11833 = G__11850;
count__11780_11834 = G__11851;
i__11781_11835 = G__11852;
continue;
} else {
var vec__11804_11853 = cljs.core.first(seq__11778_11847__$1);
var k_11854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11804_11853,(0),null);
var v_11855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11804_11853,(1),null);
this$__$1.setRequestHeader(k_11854,v_11855);


var G__11856 = cljs.core.next(seq__11778_11847__$1);
var G__11857 = null;
var G__11858 = (0);
var G__11859 = (0);
seq__11778_11832 = G__11856;
chunk__11779_11833 = G__11857;
count__11780_11834 = G__11858;
i__11781_11835 = G__11859;
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
