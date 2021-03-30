goog.provide('barber.views');
goog.require('cljs.core');
goog.require('reagent.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('cljs_time.core');
var module$node_modules$react_flatpickr$build$index=shadow.js.require("module$node_modules$react_flatpickr$build$index", {});
var module$node_modules$react_slider$lib$components$ReactSlider$ReactSlider=shadow.js.require("module$node_modules$react_slider$lib$components$ReactSlider$ReactSlider", {});
var module$node_modules$flatpickr$dist$l10n$hu=shadow.js.require("module$node_modules$flatpickr$dist$l10n$hu", {});
var module$node_modules$react_beautiful_dnd$dist$react_beautiful_dnd_cjs=shadow.js.require("module$node_modules$react_beautiful_dnd$dist$react_beautiful_dnd_cjs", {});
barber.views.step_minute = (15);
barber.views.sidebar_width = (340);
barber.views.react_slider = (function barber$views$react_slider(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_slider$lib$components$ReactSlider$ReactSlider.default,props], null);
});
barber.views.flatpickr = (function barber$views$flatpickr(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_flatpickr$build$index.default,props], null);
});
barber.views.one_edit_field = (function barber$views$one_edit_field(p__25506,edit_QMARK_){
var vec__25507 = p__25506;
var the_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25507,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25507,(1),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
});
barber.views.editable = (function barber$views$editable(p__25515,data){
var map__25516 = p__25515;
var map__25516__$1 = (((((!((map__25516 == null))))?(((((map__25516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25516):map__25516);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25516__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var update_func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25516__$1,new cljs.core.Keyword(null,"update-func","update-func",-6020615));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25516__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25516__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var editing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var edit_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(text);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (editing_QMARK_,edit_text,map__25516,map__25516__$1,text,update_func,class$,type){
return (function (this$,old_argv){
var new_argv = cljs.core.rest(reagent.core.argv(this$));
var new_data = cljs.core.first(new_argv);
var old_data = cljs.core.second(old_argv);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(new_data),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(old_data))){
cljs.core.reset_BANG_(edit_text,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(new_data));

return cljs.core.reset_BANG_(editing_QMARK_,false);
} else {
return null;
}
});})(editing_QMARK_,edit_text,map__25516,map__25516__$1,text,update_func,class$,type))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (editing_QMARK_,edit_text,map__25516,map__25516__$1,text,update_func,class$,type){
return (function (p__25518,data__$1){
var map__25519 = p__25518;
var map__25519__$1 = (((((!((map__25519 == null))))?(((((map__25519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25519):map__25519);
var text__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25519__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var update_func__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25519__$1,new cljs.core.Keyword(null,"update-func","update-func",-6020615));
var class$__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25519__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25519__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.editable","div.editable",-1388461587),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$__$1], null),(cljs.core.truth_(cljs.core.deref(editing_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-flex","div.uk-flex",-521895179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-input.uk-input-small","input.uk-input.uk-input-small",352353167),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"auto",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"40px"], null),new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (map__25519,map__25519__$1,text__$1,update_func__$1,class$__$1,type__$1,editing_QMARK_,edit_text,map__25516,map__25516__$1,text,update_func,class$,type){
return (function (p1__25510_SHARP_){
var G__25521 = p1__25510_SHARP_.which;
switch (G__25521) {
case (13):
p1__25510_SHARP_.stopPropagation();

var G__25522_25716 = cljs.core.deref(edit_text);
(update_func__$1.cljs$core$IFn$_invoke$arity$1 ? update_func__$1.cljs$core$IFn$_invoke$arity$1(G__25522_25716) : update_func__$1.call(null,G__25522_25716));

return cljs.core.reset_BANG_(editing_QMARK_,false);

break;
case (27):
p1__25510_SHARP_.stopPropagation();

cljs.core.reset_BANG_(edit_text,text__$1);

return cljs.core.reset_BANG_(editing_QMARK_,false);

break;
default:
return null;

}
});})(map__25519,map__25519__$1,text__$1,update_func__$1,class$__$1,type__$1,editing_QMARK_,edit_text,map__25516,map__25516__$1,text,update_func,class$,type))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__25519,map__25519__$1,text__$1,update_func__$1,class$__$1,type__$1,editing_QMARK_,edit_text,map__25516,map__25516__$1,text,update_func,class$,type){
return (function (p1__25511_SHARP_){
return cljs.core.reset_BANG_(edit_text,(function (){var G__25523 = type__$1;
var G__25523__$1 = (((G__25523 instanceof cljs.core.Keyword))?G__25523.fqn:null);
switch (G__25523__$1) {
case "text":
return p1__25511_SHARP_.target.value;

break;
case "number":
if(cljs.core.truth_(isNaN(parseInt(p1__25511_SHARP_.target.value)))){
return (0);
} else {
return parseInt(p1__25511_SHARP_.target.value);
}

break;
default:
return p1__25511_SHARP_.target.value;

}
})());
});})(map__25519,map__25519__$1,text__$1,update_func__$1,class$__$1,type__$1,editing_QMARK_,edit_text,map__25516,map__25516__$1,text,update_func,class$,type))
,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(edit_text)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.uk-text-middle","span.uk-text-middle",948678842),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"close",new cljs.core.Keyword(null,"data-uk-tooltip","data-uk-tooltip",604665367),"M\u00E9gsem",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"20px",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"30px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__25519,map__25519__$1,text__$1,update_func__$1,class$__$1,type__$1,editing_QMARK_,edit_text,map__25516,map__25516__$1,text,update_func,class$,type){
return (function (p1__25512_SHARP_){
p1__25512_SHARP_.stopPropagation();

cljs.core.reset_BANG_(edit_text,text__$1);

return cljs.core.reset_BANG_(editing_QMARK_,false);
});})(map__25519,map__25519__$1,text__$1,update_func__$1,class$__$1,type__$1,editing_QMARK_,edit_text,map__25516,map__25516__$1,text,update_func,class$,type))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.uk-text-middle","span.uk-text-middle",948678842),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"check",new cljs.core.Keyword(null,"data-uk-tooltip","data-uk-tooltip",604665367),"Ment\u00E9s",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"20px",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"30px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__25519,map__25519__$1,text__$1,update_func__$1,class$__$1,type__$1,editing_QMARK_,edit_text,map__25516,map__25516__$1,text,update_func,class$,type){
return (function (p1__25513_SHARP_){
p1__25513_SHARP_.stopPropagation();

var G__25524_25720 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-modal","set-modal",312437679),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"content","content",15833224),"Biztos m\u00F3dos\u00EDtod?",new cljs.core.Keyword(null,"no-fn","no-fn",-353517111),((function (map__25519,map__25519__$1,text__$1,update_func__$1,class$__$1,type__$1,editing_QMARK_,edit_text,map__25516,map__25516__$1,text,update_func,class$,type){
return (function (){
return cljs.core.reset_BANG_(edit_text,text__$1);
});})(map__25519,map__25519__$1,text__$1,update_func__$1,class$__$1,type__$1,editing_QMARK_,edit_text,map__25516,map__25516__$1,text,update_func,class$,type))
,new cljs.core.Keyword(null,"yes-fn","yes-fn",-193560811),((function (map__25519,map__25519__$1,text__$1,update_func__$1,class$__$1,type__$1,editing_QMARK_,edit_text,map__25516,map__25516__$1,text,update_func,class$,type){
return (function (){
var G__25525 = cljs.core.deref(edit_text);
return (update_func__$1.cljs$core$IFn$_invoke$arity$1 ? update_func__$1.cljs$core$IFn$_invoke$arity$1(G__25525) : update_func__$1.call(null,G__25525));
});})(map__25519,map__25519__$1,text__$1,update_func__$1,class$__$1,type__$1,editing_QMARK_,edit_text,map__25516,map__25516__$1,text,update_func,class$,type))
], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25524_25720) : re_frame.core.dispatch.call(null,G__25524_25720));

return cljs.core.reset_BANG_(editing_QMARK_,false);
});})(map__25519,map__25519__$1,text__$1,update_func__$1,class$__$1,type__$1,editing_QMARK_,edit_text,map__25516,map__25516__$1,text,update_func,class$,type))
], null)], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.editable.uk-flex","div.editable.uk-flex",184182527),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),text__$1], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"40px",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__25519,map__25519__$1,text__$1,update_func__$1,class$__$1,type__$1,editing_QMARK_,edit_text,map__25516,map__25516__$1,text,update_func,class$,type){
return (function (p1__25514_SHARP_){
p1__25514_SHARP_.stopPropagation();

return cljs.core.reset_BANG_(editing_QMARK_,cljs.core.not(cljs.core.deref(editing_QMARK_)));
});})(map__25519,map__25519__$1,text__$1,update_func__$1,class$__$1,type__$1,editing_QMARK_,edit_text,map__25516,map__25516__$1,text,update_func,class$,type))
,new cljs.core.Keyword(null,"data-uk-tooltip","data-uk-tooltip",604665367),"Szerkeszt\u00E9s",new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"pencil",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0px, -5px)",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null)], null)], null))], null);
});})(editing_QMARK_,edit_text,map__25516,map__25516__$1,text,update_func,class$,type))
], null));
});
barber.views.drag_drop_context = (function barber$views$drag_drop_context(component,p__25526){
var map__25527 = p__25526;
var map__25527__$1 = (((((!((map__25527 == null))))?(((((map__25527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25527):map__25527);
var on_drag_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25527__$1,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205));
var on_drag_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25527__$1,new cljs.core.Keyword(null,"on-drag-update","on-drag-update",450200059));
var on_drag_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25527__$1,new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_beautiful_dnd$dist$react_beautiful_dnd_cjs.DragDropContext,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onDragStart","onDragStart",-2108300997),on_drag_start,new cljs.core.Keyword(null,"onDragUpdate","onDragUpdate",-908805754),on_drag_update,new cljs.core.Keyword(null,"onDragEnd","onDragEnd",1520191895),on_drag_end], null),component], null);
});
barber.views.label = (function barber$views$label(title,component){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-flex","div.uk-flex",-521895179),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-margin-small-right","div.uk-margin-small-right",1490567437),title," "], null),component], null);
});
barber.views.modify_employee_services = (function barber$views$modify_employee_services(services,employee){
var id = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(employee);
var emp_services = new cljs.core.Keyword(null,"services","services",970478783).cljs$core$IFn$_invoke$arity$1(employee);
var get_this_service = ((function (id,emp_services){
return (function (service_id){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (id,emp_services){
return (function (p1__25529_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(service_id,new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(p1__25529_SHARP_));
});})(id,emp_services))
,emp_services));
});})(id,emp_services))
;
var modified_service = ((function (id,emp_services,get_this_service){
return (function (service_id){
var mod_serv = get_this_service(service_id);
if(cljs.core.truth_(mod_serv)){
return mod_serv;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});})(id,emp_services,get_this_service))
;
var dispatch_change = ((function (id,emp_services,get_this_service,modified_service){
return (function (id__$1,service_id,the_key,value){
var G__25531 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modify-employee-service","modify-employee-service",773866527),id__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(modified_service(service_id),the_key,value)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25531) : re_frame.core.dispatch.call(null,G__25531));
});})(id,emp_services,get_this_service,modified_service))
;
var overridden_service = ((function (id,emp_services,get_this_service,modified_service,dispatch_change){
return (function (service){
var emp_service = get_this_service(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(service));
if(cljs.core.truth_(emp_service)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([service,emp_service], 0));
} else {
return service;
}
});})(id,emp_services,get_this_service,modified_service,dispatch_change))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(employee),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.uk-table.uk-table-hover","table.uk-table.uk-table-hover",-207943582),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"N\u00E9v"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Hossz"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"\u00C1r"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Rejtett?"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (id,emp_services,get_this_service,modified_service,dispatch_change,overridden_service){
return (function (p1__25530_SHARP_){
var the_service = overridden_service(p1__25530_SHARP_);
var service_id = new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(the_service);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(the_service)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.editable,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(the_service),new cljs.core.Keyword(null,"update-func","update-func",-6020615),((function (the_service,service_id,id,emp_services,get_this_service,modified_service,dispatch_change,overridden_service){
return (function (value){
return dispatch_change(service_id,id,new cljs.core.Keyword(null,"length","length",588987862),value);
});})(the_service,service_id,id,emp_services,get_this_service,modified_service,dispatch_change,overridden_service))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.editable,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(the_service),new cljs.core.Keyword(null,"update-func","update-func",-6020615),((function (the_service,service_id,id,emp_services,get_this_service,modified_service,dispatch_change,overridden_service){
return (function (value){
return dispatch_change(service_id,id,new cljs.core.Keyword(null,"price","price",22129180),value);
});})(the_service,service_id,id,emp_services,get_this_service,modified_service,dispatch_change,overridden_service))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-checkbox","input.uk-checkbox",-981725814),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (the_service,service_id,id,emp_services,get_this_service,modified_service,dispatch_change,overridden_service){
return (function (value){
return dispatch_change(service_id,id,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),value);
});})(the_service,service_id,id,emp_services,get_this_service,modified_service,dispatch_change,overridden_service))
,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"value","value",305978217),true], null),new cljs.core.Keyword(null,"available?","available?",760421264).cljs$core$IFn$_invoke$arity$1(the_service)], null)], null)], null);
});})(id,emp_services,get_this_service,modified_service,dispatch_change,overridden_service))
,services)], null)], null);
});
barber.views.employee_services = (function barber$views$employee_services(employee){
var show_services_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var services = (function (){var G__25532 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"services","services",970478783)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25532) : re_frame.core.subscribe.call(null,G__25532));
})();
return ((function (show_services_QMARK_,services){
return (function (id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-right","div.uk-text-right",-1941585944),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show_services_QMARK_,services){
return (function (){
return cljs.core.reset_BANG_(show_services_QMARK_,cljs.core.not(cljs.core.deref(show_services_QMARK_)));
});})(show_services_QMARK_,services))
], null),"Szolg\u00E1ltat\u00E1sok..."], null)], null),(cljs.core.truth_(cljs.core.deref(show_services_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.modify_employee_services,cljs.core.deref(services),employee], null):null)], null);
});
;})(show_services_QMARK_,services))
});
barber.views.draggable_content = (function barber$views$draggable_content(the_key,data,snapshot){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-position-top-right.uk-button-small","button.uk-button.uk-button-default.uk-position-top-right.uk-button-small",797598577),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__25539 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-modal","set-modal",312437679),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"content","content",15833224),"Biztos m\u00F3dos\u00EDtod?",new cljs.core.Keyword(null,"no-fn","no-fn",-353517111),(function (){
return null;
}),new cljs.core.Keyword(null,"yes-fn","yes-fn",-193560811),(function (){
var G__25540 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-employee-service","remove-employee-service",-1235467788),the_key,new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(data)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25540) : re_frame.core.dispatch.call(null,G__25540));
})], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25539) : re_frame.core.dispatch.call(null,G__25539));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"close"], null)], null)], null),(function (){var G__25541 = the_key;
var G__25541__$1 = (((G__25541 instanceof cljs.core.Keyword))?G__25541.fqn:null);
switch (G__25541__$1) {
case "employees":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(snapshot.isDragging)?"dnd-title-drag":"dnd-title"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.3em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.editable,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"update-func","update-func",-6020615),((function (G__25541,G__25541__$1){
return (function (p1__25533_SHARP_){
var G__25542 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modify-item","modify-item",-1391581039),the_key,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(data),p1__25533_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25542) : re_frame.core.dispatch.call(null,G__25542));
});})(G__25541,G__25541__$1))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Prio: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(data) + (1))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.employee_services,data], null)], null);

break;
case "services":
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(snapshot.isDragging)?"dnd-title-drag":"dnd-title"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.3em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.editable,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"update-func","update-func",-6020615),((function (G__25541,G__25541__$1){
return (function (p1__25534_SHARP_){
var G__25543 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modify-item","modify-item",-1391581039),the_key,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(data),p1__25534_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25543) : re_frame.core.dispatch.call(null,G__25543));
});})(G__25541,G__25541__$1))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.label,"N\u00E9v(en): ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.editable,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"enname","enname",956090365).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"update-func","update-func",-6020615),((function (G__25541,G__25541__$1){
return (function (p1__25535_SHARP_){
var G__25544 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modify-item","modify-item",-1391581039),the_key,new cljs.core.Keyword(null,"enname","enname",956090365),new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(data),p1__25535_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25544) : re_frame.core.dispatch.call(null,G__25544));
});})(G__25541,G__25541__$1))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.label,"Hossz: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.editable,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"update-func","update-func",-6020615),((function (G__25541,G__25541__$1){
return (function (p1__25536_SHARP_){
var G__25545 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modify-item","modify-item",-1391581039),the_key,new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(data),p1__25536_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25545) : re_frame.core.dispatch.call(null,G__25545));
});})(G__25541,G__25541__$1))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.label,"\u00C1r: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.editable,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"update-func","update-func",-6020615),((function (G__25541,G__25541__$1){
return (function (p1__25537_SHARP_){
var G__25546 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modify-item","modify-item",-1391581039),the_key,new cljs.core.Keyword(null,"price","price",22129180),new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(data),p1__25537_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25546) : re_frame.core.dispatch.call(null,G__25546));
});})(G__25541,G__25541__$1))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.label,"Sz\u00EDn: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.editable,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"update-func","update-func",-6020615),((function (G__25541,G__25541__$1){
return (function (p1__25538_SHARP_){
var G__25547 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modify-item","modify-item",-1391581039),the_key,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(data),p1__25538_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25547) : re_frame.core.dispatch.call(null,G__25547));
});})(G__25541,G__25541__$1))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Prio: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),(new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(data) + (1))], null)], null)], null);

break;
default:
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(the_key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join('');

}
})()], null);
});
barber.views.dnd_draggable = (function barber$views$dnd_draggable(data,the_key){
var idx = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(data);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_beautiful_dnd$dist$react_beautiful_dnd_cjs.Draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"draggable-id","draggable-id",1005938374),["draggable-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"index","index",-1531685915),idx], null),((function (idx){
return (function (provided,snapshot){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1.uk-flex.uk-flex-center","div.uk-width-1-1.uk-flex.uk-flex-center",1205209106),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-inline.draggable-row","div.uk-inline.draggable-row",1653956848),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[["dnd-",cljs.core.name(the_key)].join(''),(cljs.core.truth_(snapshot.isDragging)?" dragged":null)].join(''),new cljs.core.Keyword(null,"ref","ref",1289896967),provided.innerRef], null),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(provided.draggableProps),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(provided.dragHandleProps)], 0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.draggable_content,the_key,data,snapshot], null)], null)], null));
});})(idx))
], null);
});
barber.views.dnd_droppable = (function barber$views$dnd_droppable(component,the_key){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_beautiful_dnd$dist$react_beautiful_dnd_cjs.Droppable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"droppable-id","droppable-id",-2146337618),cljs.core.name(the_key),new cljs.core.Keyword(null,"type","type",1174270348),"thing"], null),(function (provided,snapshot){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.droppable-dnd","div.droppable-dnd",2117011890),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),provided.innerRef], null),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(provided.droppableProps)], 0)),component,provided.placeholder], null));
})], null);
});
barber.views.dnd = (function barber$views$dnd(the_key){
var coll = (function (){var G__25551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),the_key], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25551) : re_frame.core.subscribe.call(null,G__25551));
})();
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (coll){
return (function (the_key__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding","div.uk-padding",-1488303471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.uk-text-center.playfair.gold-text.uk-padding-small.uk-margin-top","h2.uk-text-center.playfair.gold-text.uk-padding-small.uk-margin-top",-111198380),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"10px",new cljs.core.Keyword(null,"background","background",-863952629),"#222"], null)], null),(function (){var G__25552 = the_key__$1;
var G__25552__$1 = (((G__25552 instanceof cljs.core.Keyword))?G__25552.fqn:null);
switch (G__25552__$1) {
case "employees":
return "Barberek";

break;
case "services":
return "Szolg\u00E1ltat\u00E1sok";

break;
default:
return "else";

}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1","div.uk-width-1-1",-1131177597),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-align-center.uk-button.uk-button-primary","button.uk-align-center.uk-button.uk-button-primary",1807728756),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (coll){
return (function (){
var G__25553 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-new","add-new",-1399275206),the_key__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25553) : re_frame.core.dispatch.call(null,G__25553));
});})(coll))
], null),"\u00DAj hozz\u00E1ad\u00E1sa"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.drag_drop_context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.dnd_droppable,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (coll){
return (function (p1__25549_SHARP_,p2__25548_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.dnd_draggable,p2__25548_SHARP_,the_key__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(p2__25548_SHARP_)], null));
});})(coll))
,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"priority","priority",1431093715),cljs.core.deref(coll))),the_key__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),((function (coll){
return (function (p1__25550_SHARP_){
var G__25554 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"drag-end","drag-end",-1884248888),the_key__$1,p1__25550_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"content","content",15833224),"Biztos \u00E1thelyezed?",new cljs.core.Keyword(null,"yes-fn","yes-fn",-193560811),((function (coll){
return (function (a){
var G__25555 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modify-positions","modify-positions",1855295881),the_key__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25555) : re_frame.core.dispatch.call(null,G__25555));
});})(coll))
,new cljs.core.Keyword(null,"no-fn","no-fn",-353517111),((function (coll){
return (function (a){
var G__25556 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-positions","restore-positions",-362463111),the_key__$1], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25556) : re_frame.core.dispatch.call(null,G__25556));
});})(coll))
], null)], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__25554) : re_frame.core.dispatch_sync.call(null,G__25554));
});})(coll))
], null)], null)], null);
});})(coll))
], null));
});
barber.views.two_digits = (function barber$views$two_digits(number){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)).length),(1))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(number)].join('');
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(number);
}
});
barber.views.str_from_date = (function barber$views$str_from_date(date){
var year = barber.views.two_digits(cljs_time.core.year(date));
var month = barber.views.two_digits(cljs_time.core.month(date));
var day = barber.views.two_digits(cljs_time.core.day(date));
return [year,"-",month,"-",day].join('');
});
barber.views.get_tomorrow = (function barber$views$get_tomorrow(date_str){
var date_splitted = clojure.string.split.cljs$core$IFn$_invoke$arity$2(date_str,/-/);
var vec__25557 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,date_splitted);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25557,(0),null);
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25557,(1),null);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25557,(2),null);
return barber.views.str_from_date(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,month,day),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
});
barber.views.get_yesterday = (function barber$views$get_yesterday(date_str){
var date_splitted = clojure.string.split.cljs$core$IFn$_invoke$arity$2(date_str,/-/);
var vec__25560 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,date_splitted);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25560,(0),null);
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25560,(1),null);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25560,(2),null);
return barber.views.str_from_date(cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,month,day),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
});
barber.views.anim_to = (function barber$views$anim_to(element,timeout,the_map){
return TweenMax.to(element,timeout,cljs.core.clj__GT_js(the_map));
});
barber.views.set_gsap = (function barber$views$set_gsap(element,the_map){
return TweenMax.set(element,cljs.core.clj__GT_js(the_map));
});
barber.views.todo_input = (function barber$views$todo_input(p__25565){
var map__25566 = p__25565;
var map__25566__$1 = (((((!((map__25566 == null))))?(((((map__25566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25566):map__25566);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25566__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_save = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25566__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var on_stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25566__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
var val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(title);
var stop = ((function (val,map__25566,map__25566__$1,title,on_save,on_stop){
return (function (){
cljs.core.reset_BANG_(val,"");

if(cljs.core.truth_(on_stop)){
return (on_stop.cljs$core$IFn$_invoke$arity$0 ? on_stop.cljs$core$IFn$_invoke$arity$0() : on_stop.call(null));
} else {
return null;
}
});})(val,map__25566,map__25566__$1,title,on_save,on_stop))
;
var save = ((function (val,stop,map__25566,map__25566__$1,title,on_save,on_stop){
return (function (){
var v = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(val)));
(on_save.cljs$core$IFn$_invoke$arity$1 ? on_save.cljs$core$IFn$_invoke$arity$1(v) : on_save.call(null,v));

return stop();
});})(val,stop,map__25566,map__25566__$1,title,on_save,on_stop))
;
return ((function (val,stop,save,map__25566,map__25566__$1,title,on_save,on_stop){
return (function (props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"on-save","on-save",1618176266),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),new cljs.core.Keyword(null,"title","title",636505583)], 0)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(val),new cljs.core.Keyword(null,"class","class",-2030961996),"uk-input",new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),save,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val,stop,save,map__25566,map__25566__$1,title,on_save,on_stop){
return (function (p1__25563_SHARP_){
return cljs.core.reset_BANG_(val,p1__25563_SHARP_.target.value);
});})(val,stop,save,map__25566,map__25566__$1,title,on_save,on_stop))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (val,stop,save,map__25566,map__25566__$1,title,on_save,on_stop){
return (function (p1__25564_SHARP_){
var G__25568 = p1__25564_SHARP_.which;
switch (G__25568) {
case (13):
return save();

break;
case (27):
return stop();

break;
default:
return null;

}
});})(val,stop,save,map__25566,map__25566__$1,title,on_save,on_stop))
], null)], 0))], null);
});
;})(val,stop,save,map__25566,map__25566__$1,title,on_save,on_stop))
});
barber.views.get_el = (function barber$views$get_el(id){
return document.getElementById(id);
});
barber.views.add_event_listener = (function barber$views$add_event_listener(el,type,callback){
return el.addEventListener(type,callback,false);
});
barber.views.remove_event_listener = (function barber$views$remove_event_listener(el,type,callback){
return el.removeEventListener(type,callback,false);
});
barber.views.grid_width = (130);
barber.views.grid_height = (100);
barber.views.step_height = (barber.views.grid_height / (4));
barber.views.border_width = 1.2;
barber.views.title_height = (30);
barber.views.abs = (function barber$views$abs(n){
var x__4219__auto__ = n;
var y__4220__auto__ = ((0) - n);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
barber.views.round_to_grid = (function barber$views$round_to_grid(left,top){
var grid_left = (barber.views.grid_width * cljs.core.quot(left,barber.views.grid_width));
var grid_right = (barber.views.grid_width * (cljs.core.quot(left,barber.views.grid_width) + (1)));
var grid_top = (barber.views.step_height * cljs.core.quot(top,barber.views.step_height));
var grid_bottom = (barber.views.step_height * (cljs.core.quot(top,barber.views.step_height) + (1)));
var final_left = (((barber.views.abs((left - grid_left)) < barber.views.abs((left - grid_right))))?grid_left:grid_right);
var final_top = (((barber.views.abs((top - grid_top)) < barber.views.abs((top - grid_bottom))))?grid_top:grid_bottom);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [final_left,final_top], null);
});
barber.views.round_to_height = (function barber$views$round_to_height(height){
var height_bot = (barber.views.step_height * cljs.core.quot(height,barber.views.step_height));
var height_top = (barber.views.step_height * (cljs.core.quot(height,barber.views.step_height) + (1)));
if((barber.views.abs((height - height_bot)) < barber.views.abs((height - height_top)))){
return height_bot;
} else {
return height_top;
}
});
barber.views.scroll_interval = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
barber.views.last_scroll_pos = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
barber.views.rect = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
barber.views.anim_frame_request = (function barber$views$anim_frame_request(func){
return window.requestAnimationFrame(func);
});
barber.views.get_service_by_id = (function barber$views$get_service_by_id(id){
var services = (function (){
return cljs.core.deref((function (){var G__25570 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"services","services",970478783)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25570) : re_frame.core.subscribe.call(null,G__25570));
})());
});
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (services){
return (function (p1__25569_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(p1__25569_SHARP_));
});})(services))
,services()));
});
if((typeof barber !== 'undefined') && (typeof barber.views !== 'undefined') && (typeof barber.views.dragging_QMARK_ !== 'undefined')){
} else {
barber.views.dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
barber.views.get_employee = (function barber$views$get_employee(number){
var emp = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25571_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(number,new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(p1__25571_SHARP_));
}),cljs.core.deref((function (){var G__25572 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"employees","employees",1002695450)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25572) : re_frame.core.subscribe.call(null,G__25572));
})())));
return new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(emp);
});
barber.views.extend_opening_hours = (function barber$views$extend_opening_hours(open_hours){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first(open_hours) - (60)),(cljs.core.second(open_hours) + (60))], null);
});
barber.views.get_start = (function barber$views$get_start(minutes){
var opening_hours = (function (){var G__25573 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"opening-hours","opening-hours",1887464433)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25573) : re_frame.core.subscribe.call(null,G__25573));
})();
var selected_day = (function (){var G__25574 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"selected-day","selected-day",1859078310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25574) : re_frame.core.subscribe.call(null,G__25574));
})();
var get_pos_now = ((function (opening_hours,selected_day){
return (function (){
return cljs.core.first(barber.views.extend_opening_hours(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opening_hours),cljs.core.deref(selected_day))));
});})(opening_hours,selected_day))
;
return (get_pos_now() + minutes);
});
barber.views.convert_to_time = (function barber$views$convert_to_time(number){
var hours = barber.views.two_digits(cljs.core.quot(number,(60)));
var minutes = barber.views.two_digits(cljs.core.mod(number,(60)));
return [hours,":",minutes].join('');
});
barber.views.hovered_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
barber.views.one_event = (function barber$views$one_event(id,start_left,start_top,start_height,the_event){
var length = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((barber.views.step_minute * start_height));
var drag_end_listener = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var drag_move_listener = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var scroll_listener = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var not_real_scroll_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var dragged_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var last_mouse_pos = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var calc_left = (start_left * barber.views.grid_width);
var calc_top = (start_top * barber.views.step_height);
var left_temporary = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var top_temporary = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var height_temporary = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((start_height * barber.views.step_height));
var height = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((start_height * barber.views.step_height));
var left = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(calc_left);
var top = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(calc_top);
var remove_mouse_move = ((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top){
return (function (){
return barber.views.remove_event_listener(window,"mousemove",cljs.core.deref(drag_move_listener));
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top))
;
var remove_mouse_up = ((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move){
return (function (){
return barber.views.remove_event_listener(window,"mouseup",cljs.core.deref(drag_end_listener));
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move))
;
var remove_touch_move = ((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up){
return (function (){
return barber.views.remove_event_listener(window,"touchmove",cljs.core.deref(drag_move_listener));
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up))
;
var remove_touch_end = ((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move){
return (function (){
return barber.views.remove_event_listener(window,"touchend",cljs.core.deref(drag_end_listener));
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move))
;
var remove_scroll = ((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end){
return (function (){
return barber.views.remove_event_listener(window,"scroll",cljs.core.deref(scroll_listener));
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end))
;
var remove_all = ((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll){
return (function (){
remove_mouse_move();

remove_mouse_up();

remove_touch_move();

remove_touch_end();

return remove_scroll();
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll))
;
var is_touch_QMARK_ = ((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all){
return (function (event){
return clojure.string.includes_QMARK_(event.type,"touch");
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all))
;
var get_pos = ((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_){
return (function (event){
if(is_touch_QMARK_(event)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(event.touches[(0)]).pageX,(event.touches[(0)]).pageY], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event.pageX,event.pageY], null);
}
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_))
;
var scroll_event = ((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos){
return (function (a){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.deref(dragged_QMARK_);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.deref(not_real_scroll_QMARK_));
} else {
return and__4120__auto__;
}
})())){
cljs.core.reset_BANG_(top,(cljs.core.deref(top) + (document.documentElement.scrollTop - cljs.core.deref(barber.views.last_scroll_pos))));

cljs.core.reset_BANG_(last_mouse_pos,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(last_mouse_pos),(1),(cljs.core.second(cljs.core.deref(last_mouse_pos)) + (document.documentElement.scrollTop - cljs.core.deref(barber.views.last_scroll_pos)))));
} else {
}

return cljs.core.reset_BANG_(barber.views.last_scroll_pos,document.documentElement.scrollTop);
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos))
;
var stop_resize = ((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event){
return (function (a){
remove_all();

cljs.core.reset_BANG_(dragged_QMARK_,false);

var G__25578 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modify-reservation","modify-reservation",-1711909658),new cljs.core.Keyword(null,"reservation-id","reservation-id",720153329).cljs$core$IFn$_invoke$arity$1(the_event),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"length","length",588987862),(function (){var x__4219__auto__ = (15);
var y__4220__auto__ = ((15) * (cljs.core.deref(height) / barber.views.step_height));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25578) : re_frame.core.dispatch.call(null,G__25578));
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event))
;
var resize = ((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize){
return (function (a){
a.stopPropagation();

if(cljs.core.truth_(cljs.core.deref(dragged_QMARK_))){
var rect_width = cljs.core.deref(barber.views.rect).width;
var rect_height = cljs.core.deref(barber.views.rect).height;
var new_height = (cljs.core.deref(height_temporary) + (((is_touch_QMARK_(a))?(a.touches[(0)]).pageY:a.pageY) - cljs.core.second(cljs.core.deref(last_mouse_pos))));
if(((cljs.core.deref(top) + new_height) < rect_height)){
cljs.core.reset_BANG_(length,((15) * (barber.views.round_to_height(new_height) / barber.views.step_height)));

cljs.core.reset_BANG_(last_mouse_pos,get_pos(a));

cljs.core.reset_BANG_(height_temporary,new_height);

return cljs.core.reset_BANG_(height,barber.views.round_to_height(new_height));
} else {
return null;
}
} else {
return null;
}
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize))
;
var mouse_down_resize = ((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize){
return (function (a){
a.stopPropagation();

cljs.core.reset_BANG_(dragged_QMARK_,true);

cljs.core.reset_BANG_(last_mouse_pos,get_pos(a));

cljs.core.reset_BANG_(barber.views.last_scroll_pos,document.documentElement.scrollTop);

cljs.core.reset_BANG_(drag_end_listener,stop_resize);

cljs.core.reset_BANG_(drag_move_listener,resize);

if(is_touch_QMARK_(a)){
barber.views.add_event_listener(window,"touchmove",cljs.core.deref(drag_move_listener));

barber.views.add_event_listener(window,"touchend",cljs.core.deref(drag_end_listener));

return barber.views.add_event_listener(window,"touchcancel",cljs.core.deref(drag_end_listener));
} else {
barber.views.add_event_listener(window,"mousemove",cljs.core.deref(drag_move_listener));

return barber.views.add_event_listener(window,"mouseup",cljs.core.deref(drag_end_listener));
}
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize))
;
var scroll_if_close = ((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize){
return (function (a,mouse_top,mouse_left,rect_left,scroll_width,rect_width,rect_height){
var inner_height = window.innerHeight;
var inner_width = window.innerWidth;
var how_much_scroll_y = (inner_height - mouse_top);
var how_much_scroll_x = (inner_width - mouse_left);
var px_number = (5);
if(cljs.core.truth_(cljs.core.deref(barber.views.scroll_interval))){
window.clearInterval(cljs.core.deref(barber.views.scroll_interval));
} else {
}

cljs.core.reset_BANG_(not_real_scroll_QMARK_,true);

return cljs.core.reset_BANG_(barber.views.scroll_interval,window.setInterval(((function (inner_height,inner_width,how_much_scroll_y,how_much_scroll_x,px_number,length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize){
return (function (){
if((how_much_scroll_y < (100))){
document.documentElement.scrollTop = (document.documentElement.scrollTop + px_number);

if(((rect_height - cljs.core.deref(height)) > (cljs.core.deref(top) + px_number))){
cljs.core.reset_BANG_(top,(cljs.core.deref(top) + px_number));
} else {
}

return cljs.core.reset_BANG_(last_mouse_pos,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(last_mouse_pos),(1),(cljs.core.second(cljs.core.deref(last_mouse_pos)) + px_number)));
} else {
if((mouse_top < (100))){
document.documentElement.scrollTop = (document.documentElement.scrollTop - px_number);

if(((0) < (cljs.core.deref(top) - px_number))){
cljs.core.reset_BANG_(top,(cljs.core.deref(top) - px_number));
} else {
}

return cljs.core.reset_BANG_(last_mouse_pos,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(last_mouse_pos),(1),(cljs.core.second(cljs.core.deref(last_mouse_pos)) - px_number)));
} else {
if((mouse_left > ((rect_left + rect_width) - (50)))){
barber.views.get_el("scroll-container").scrollLeft = (barber.views.get_el("scroll-container").scrollLeft + px_number);

if(((cljs.core.deref(left) + px_number) < (scroll_width - barber.views.grid_width))){
cljs.core.reset_BANG_(left,(cljs.core.deref(left) + px_number));
} else {
}

return cljs.core.reset_BANG_(last_mouse_pos,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(last_mouse_pos),(0),(cljs.core.first(cljs.core.deref(last_mouse_pos)) + px_number)));
} else {
if((mouse_left < (rect_left + (50)))){
barber.views.get_el("scroll-container").scrollLeft = (barber.views.get_el("scroll-container").scrollLeft - px_number);

if(((cljs.core.deref(left) - px_number) > (0))){
cljs.core.reset_BANG_(left,(cljs.core.deref(left) - px_number));
} else {
}

return cljs.core.reset_BANG_(last_mouse_pos,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(last_mouse_pos),(0),(cljs.core.first(cljs.core.deref(last_mouse_pos)) - px_number)));
} else {
cljs.core.reset_BANG_(not_real_scroll_QMARK_,false);

return window.clearInterval(cljs.core.deref(barber.views.scroll_interval));

}
}
}
}
});})(inner_height,inner_width,how_much_scroll_y,how_much_scroll_x,px_number,length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize))
,0.01));
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize))
;
var on_pan_end = ((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize,scroll_if_close){
return (function (event){
cljs.core.reset_BANG_(dragged_QMARK_,false);

cljs.core.reset_BANG_(barber.views.dragging_QMARK_,false);

if(cljs.core.truth_(cljs.core.deref(barber.views.scroll_interval))){
window.clearInterval(cljs.core.deref(barber.views.scroll_interval));
} else {
}

remove_all();

var rounded = barber.views.round_to_grid(cljs.core.deref(left),cljs.core.deref(top));
cljs.core.reset_BANG_(left,cljs.core.first(rounded));

cljs.core.reset_BANG_(top,cljs.core.second(rounded));

cljs.core.reset_BANG_(left_temporary,cljs.core.deref(left));

cljs.core.reset_BANG_(top_temporary,cljs.core.deref(top));

var G__25579 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modify-reservation","modify-reservation",-1711909658),new cljs.core.Keyword(null,"reservation-id","reservation-id",720153329).cljs$core$IFn$_invoke$arity$1(the_event),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),barber.views.get_start(((15) * cljs.core.quot(cljs.core.second(rounded),barber.views.step_height))),new cljs.core.Keyword(null,"employee","employee",-504836945),barber.views.get_employee(cljs.core.quot(cljs.core.first(rounded),barber.views.grid_width))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25579) : re_frame.core.dispatch.call(null,G__25579));
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize,scroll_if_close))
;
var on_pan = ((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize,scroll_if_close,on_pan_end){
return (function (a){
if(cljs.core.truth_(cljs.core.deref(dragged_QMARK_))){
var container = barber.views.get_el("container");
var scroll_width = container.scrollWidth;
var rect_width = container.clientWidth;
var rect_height = (container.clientHeight - barber.views.title_height);
var rect_left = cljs.core.deref(barber.views.rect).left;
var rect_top = (barber.views.title_height + container.offsetTop);
var position = get_pos(a);
var click_left = cljs.core.first(position);
var click_top = cljs.core.second(position);
var new_left = (cljs.core.deref(left) - (cljs.core.first(cljs.core.deref(last_mouse_pos)) - click_left));
var new_top = (cljs.core.deref(top) - (cljs.core.second(cljs.core.deref(last_mouse_pos)) - click_top));
scroll_if_close(a,((clojure.string.includes_QMARK_(a.type,"touch"))?(a.touches[(0)]).clientY:a.clientY),((clojure.string.includes_QMARK_(a.type,"touch"))?(a.touches[(0)]).clientX:a.clientX),rect_left,scroll_width,rect_width,rect_height);

if(((((rect_left + (barber.views.grid_width / (2))) <= cljs.core.first(cljs.core.deref(last_mouse_pos)))) && ((cljs.core.first(cljs.core.deref(last_mouse_pos)) <= ((rect_left + container.clientWidth) - (barber.views.grid_width / (2))))) && (((0) <= new_left)) && ((new_left <= (scroll_width - barber.views.grid_width))))){
cljs.core.reset_BANG_(left,new_left);
} else {
if((new_left <= (0))){
cljs.core.reset_BANG_(left,(0));
} else {
}

if(((scroll_width - barber.views.grid_width) <= new_left)){
cljs.core.reset_BANG_(left,(scroll_width - barber.views.grid_width));
} else {
}
}

if((((click_top < (rect_top + (rect_height - (cljs.core.deref(height) / (2)))))) && ((click_top > (rect_top + (cljs.core.deref(height) / (2))))))){
cljs.core.reset_BANG_(top,new_top);
} else {
if((click_top <= (rect_top + (cljs.core.deref(height) / (2))))){
cljs.core.reset_BANG_(top,(0));
} else {
cljs.core.reset_BANG_(top,(rect_height - cljs.core.deref(height)));
}
}

return cljs.core.reset_BANG_(last_mouse_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [click_left,click_top], null));
} else {
return null;
}
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize,scroll_if_close,on_pan_end))
;
var on_pan_start = ((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize,scroll_if_close,on_pan_end,on_pan){
return (function (event){
var position = get_pos(event);
cljs.core.reset_BANG_(barber.views.rect,barber.views.get_el("scroll-container").getBoundingClientRect());

cljs.core.reset_BANG_(dragged_QMARK_,true);

cljs.core.reset_BANG_(barber.views.dragging_QMARK_,true);

event.stopPropagation();

cljs.core.reset_BANG_(last_mouse_pos,position);

cljs.core.reset_BANG_(drag_end_listener,on_pan_end);

cljs.core.reset_BANG_(drag_move_listener,on_pan);

cljs.core.reset_BANG_(scroll_listener,scroll_event);

if(is_touch_QMARK_(event)){
barber.views.add_event_listener(window,"touchmove",cljs.core.deref(drag_move_listener));

barber.views.add_event_listener(window,"touchend",cljs.core.deref(drag_end_listener));

barber.views.add_event_listener(window,"touchcancel",cljs.core.deref(drag_end_listener));
} else {
barber.views.add_event_listener(window,"mousemove",cljs.core.deref(drag_move_listener));

barber.views.add_event_listener(window,"mouseup",cljs.core.deref(drag_end_listener));

barber.views.add_event_listener(window,"scroll",cljs.core.deref(scroll_listener));
}

return false;
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize,scroll_if_close,on_pan_end,on_pan))
;
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize,scroll_if_close,on_pan_end,on_pan,on_pan_start){
return (function (){
cljs.core.reset_BANG_(barber.views.rect,barber.views.get_el("scroll-container").getBoundingClientRect());

barber.views.add_event_listener(barber.views.get_el(id),"touchstart",on_pan_start);

barber.views.add_event_listener(barber.views.get_el(id),"mousedown",on_pan_start);

barber.views.add_event_listener(barber.views.get_el([cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-resize"].join('')),"mousedown",mouse_down_resize);

return barber.views.add_event_listener(barber.views.get_el([cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-resize"].join('')),"touchstart",mouse_down_resize);
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize,scroll_if_close,on_pan_end,on_pan,on_pan_start))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize,scroll_if_close,on_pan_end,on_pan,on_pan_start){
return (function (id__$1,start_left__$1,start_top__$1,start_height__$1,the_event__$1){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.one-event.uk-inline","div.one-event.uk-inline",-279424800),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(dragged_QMARK_))?"active":""),new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize,scroll_if_close,on_pan_end,on_pan,on_pan_start){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(barber.views.hovered_QMARK_),id__$1)){
return cljs.core.reset_BANG_(barber.views.hovered_QMARK_,null);
} else {
return cljs.core.reset_BANG_(barber.views.hovered_QMARK_,id__$1);
}
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize,scroll_if_close,on_pan_end,on_pan,on_pan_start))
,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"touch-action","touch-action",-128660292),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],[["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((3) + cljs.core.deref(left))),"px,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((3) + (barber.views.title_height + cljs.core.deref(top)))),"px)"].join(''),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,new cljs.core.Keyword(null,"confirmed?","confirmed?",356515896).cljs$core$IFn$_invoke$arity$1(the_event__$1)))?"black":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword(null,"confirmed?","confirmed?",356515896).cljs$core$IFn$_invoke$arity$1(the_event__$1)))?"white":"black"
)),"0.01s transform ease",(0),"10px",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((barber.views.grid_width - barber.views.border_width) - (8))),"px"].join(''),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword(null,"confirmed?","confirmed?",356515896).cljs$core$IFn$_invoke$arity$1(the_event__$1))) && (cljs.core.map_QMARK_(new cljs.core.Keyword(null,"payment-data","payment-data",-2127866334).cljs$core$IFn$_invoke$arity$1(the_event__$1)))))?"#9c2d10":((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,new cljs.core.Keyword(null,"confirmed?","confirmed?",356515896).cljs$core$IFn$_invoke$arity$1(the_event__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Succeeded",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payment-data","payment-data",-2127866334).cljs$core$IFn$_invoke$arity$1(the_event__$1))))))?"lightblue":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,new cljs.core.Keyword(null,"confirmed?","confirmed?",356515896).cljs$core$IFn$_invoke$arity$1(the_event__$1)))?"rgb(255, 194, 0)":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,new cljs.core.Keyword(null,"confirmed?","confirmed?",356515896).cljs$core$IFn$_invoke$arity$1(the_event__$1)))?"#FF6F48":"lightgreen"
)))),(cljs.core.truth_(cljs.core.deref(dragged_QMARK_))?"grabbing":"grab"),(cljs.core.truth_((function (){var or__4131__auto__ = dragged_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id__$1,cljs.core.deref(barber.views.hovered_QMARK_));
}
})())?(1000):(1)),"5px","absolute","0.5px solid #222","none","10px",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref(height) - (7))),"px"].join(''),(0)])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(barber.views.get_service_by_id(new cljs.core.Keyword(null,"service-id","service-id",-569220412).cljs$core$IFn$_invoke$arity$1(the_event__$1))),new cljs.core.Keyword(null,"width","width",-384071477),"5px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(2),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"5px",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"5px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"12px"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(the_event__$1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"5px",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"5px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"12px"], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(barber.views.get_service_by_id(new cljs.core.Keyword(null,"service-id","service-id",-569220412).cljs$core$IFn$_invoke$arity$1(the_event__$1))))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id__$1),"-resize"].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"ns-resize",new cljs.core.Keyword(null,"height","height",1025178622),"10px",new cljs.core.Keyword(null,"width","width",-384071477),((barber.views.grid_width - barber.views.border_width) - (4)),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1000)], null)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id__$1,cljs.core.deref(barber.views.hovered_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"uk-position-top",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1000),new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black",new cljs.core.Keyword(null,"transform","transform",1381301764),((cljs.core.not(cljs.core.some(((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize,scroll_if_close,on_pan_end,on_pan,on_pan_start){
return (function (p1__25575_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__25575_SHARP_,start_left__$1);
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize,scroll_if_close,on_pan_end,on_pan,on_pan_start))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))))?["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),start_left__$1))?((0) - (barber.views.grid_width / (2))):((0) - (barber.views.grid_width / (2))))),"px, 0px)"].join(''):["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),start_left__$1))?cljs.core.quot(barber.views.grid_width,(3)):cljs.core.quot(barber.views.grid_width,(3)))),"px, 0)"].join(''))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid-collapse.uk-child-width-1-2","div.uk-grid-collapse.uk-child-width-1-2",-1622853180),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1","div.uk-width-1-1",-1131177597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"4px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"4px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8em"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(the_event__$1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(barber.views.get_service_by_id(new cljs.core.Keyword(null,"service-id","service-id",-569220412).cljs$core$IFn$_invoke$arity$1(the_event__$1)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[barber.views.convert_to_time(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(the_event__$1))," - ",barber.views.convert_to_time((new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(the_event__$1) + new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(the_event__$1)))].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center","div.uk-text-center",-1334382774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid black",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"1px solid black",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize,scroll_if_close,on_pan_end,on_pan,on_pan_start){
return (function (p1__25576_SHARP_){
var G__25580_25724 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-to-db","add-to-db",218374651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sidebar-open?","sidebar-open?",-1099774467),true], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25580_25724) : re_frame.core.dispatch.call(null,G__25580_25724));

p1__25576_SHARP_.preventDefault();

var G__25581_25725 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-to-db","add-to-db",218374651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reservation-editor","reservation-editor",1851449854),the_event__$1], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25581_25725) : re_frame.core.dispatch.call(null,G__25581_25725));

return false;
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize,scroll_if_close,on_pan_end,on_pan,on_pan_start))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"file-edit"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center","div.uk-text-center",-1334382774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid black",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px",new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize,scroll_if_close,on_pan_end,on_pan,on_pan_start){
return (function (p1__25577_SHARP_){
p1__25577_SHARP_.preventDefault();

var G__25582_25726 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-modal","set-modal",312437679),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"content","content",15833224),"Biztos t\u00F6rl\u00F6d?",new cljs.core.Keyword(null,"no-fn","no-fn",-353517111),((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize,scroll_if_close,on_pan_end,on_pan,on_pan_start){
return (function (){
return null;
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize,scroll_if_close,on_pan_end,on_pan,on_pan_start))
,new cljs.core.Keyword(null,"yes-fn","yes-fn",-193560811),((function (length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize,scroll_if_close,on_pan_end,on_pan,on_pan_start){
return (function (){
var G__25583 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-calendar-event","remove-calendar-event",-484550367),cljs.core.name(new cljs.core.Keyword(null,"reservation-id","reservation-id",720153329).cljs$core$IFn$_invoke$arity$1(the_event__$1))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25583) : re_frame.core.dispatch.call(null,G__25583));
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize,scroll_if_close,on_pan_end,on_pan,on_pan_start))
], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25582_25726) : re_frame.core.dispatch.call(null,G__25582_25726));

return false;
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize,scroll_if_close,on_pan_end,on_pan,on_pan_start))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"close"], null)], null)], null)], null)], null):null)], null);
});})(length,drag_end_listener,drag_move_listener,scroll_listener,not_real_scroll_QMARK_,dragged_QMARK_,last_mouse_pos,calc_left,calc_top,left_temporary,top_temporary,height_temporary,height,left,top,remove_mouse_move,remove_mouse_up,remove_touch_move,remove_touch_end,remove_scroll,remove_all,is_touch_QMARK_,get_pos,scroll_event,stop_resize,resize,mouse_down_resize,scroll_if_close,on_pan_end,on_pan,on_pan_start))
], null));
});
barber.views.one_person = (function barber$views$one_person(name,id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center.playfair.gold-text.bold-text","div.uk-text-center.playfair.gold-text.bold-text",-245491031),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return navigator.clipboard.writeText(id);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(barber.views.grid_width),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(barber.views.title_height),"px"].join('')], null)], null),name], null);
});
barber.views.map_row_title = (function barber$views$map_row_title(times){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.black-bg","div.black-bg",791416646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610),"10px",new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(barber.views.title_height),"px"].join('')], null)], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__25584_SHARP_,p2__25585_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-right.uk-text-top","div.uk-text-right.uk-text-top",1959200217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"40px",new cljs.core.Keyword(null,"transform","transform",1381301764),"translateY(-1px)",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"10px",new cljs.core.Keyword(null,"height","height",1025178622),barber.views.step_height,new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"10px",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"10px"], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(p2__25585_SHARP_,(60))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gold-text.bold-text","div.gold-text.bold-text",97538882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8em"], null)], null),barber.views.convert_to_time(p2__25585_SHARP_)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(p2__25585_SHARP_,(30))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bold-text.gold-text","div.bold-text.gold-text",-993566810),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.7em"], null)], null),barber.views.convert_to_time(p2__25585_SHARP_)], null):null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__25584_SHARP_], null));
}),times)], null);
});
barber.views.only_positive = (function barber$views$only_positive(number){
if((number < (0))){
return (0);
} else {
return number;
}
});
barber.views.map_column_title = (function barber$views$map_column_title(employees){
var container = (function (){
if(cljs.core.truth_(document.getElementById("scroll-container"))){
return document.getElementById("scroll-container");
} else {
return null;
}
});
var offset_top = ((function (container){
return (function (){
if(cljs.core.truth_(container())){
return container().offsetTop;
} else {
return (0);
}
});})(container))
;
return ((function (container,offset_top){
return (function (employees__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.black-bg.column-titles","div.black-bg.column-titles",1945511292),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(2000),new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref(barber.views.rect))?(((cljs.core.deref(barber.views.last_scroll_pos) > offset_top()))?(cljs.core.deref(barber.views.last_scroll_pos) - offset_top()):(0)):(0))),"px)"].join('')], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (container,offset_top){
return (function (col_i,a){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.one_person,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),col_i], null));
});})(container,offset_top))
,employees__$1)], null);
});
;})(container,offset_top))
});
barber.views.check_if_in_range = (function barber$views$check_if_in_range(brakes,this$){

if(cljs.core.truth_(cljs.core.some((function (p1__25586_SHARP_){
var start = cljs.core.first(p1__25586_SHARP_);
var finish = cljs.core.second(p1__25586_SHARP_);
return (((this$ >= start)) && ((this$ < finish)));
}),brakes))){
return true;
} else {
return false;
}
});
barber.views.is_break_QMARK_ = (function barber$views$is_break_QMARK_(brakes,this_time){

if(cljs.core.truth_(brakes)){
return barber.views.check_if_in_range(brakes,this_time);
} else {
return true;
}
});
barber.views.one_cell = (function barber$views$one_cell(col_i,employee,row_i,time){
var selected_date = (function (){var G__25587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25587) : re_frame.core.subscribe.call(null,G__25587));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.one-cell","div.one-cell",1773786769),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_date){
return (function (){
var G__25588_25727 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-to-db","add-to-db",218374651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sidebar-open?","sidebar-open?",-1099774467),true], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25588_25727) : re_frame.core.dispatch.call(null,G__25588_25727));

var G__25589 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-to-db","add-to-db",218374651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reservation-editor","reservation-editor",1851449854),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),time,new cljs.core.Keyword(null,"date","date",-1463434462),cljs.core.deref(selected_date),new cljs.core.Keyword(null,"employee","employee",-504836945),new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(employee),new cljs.core.Keyword(null,"service-id","service-id",-569220412),"nil"], null)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25589) : re_frame.core.dispatch.call(null,G__25589));
});})(selected_date))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((barber.views.grid_width - barber.views.border_width)),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((barber.views.step_height - barber.views.border_width)),"px"].join(''),new cljs.core.Keyword(null,"border-right","border-right",-668932860),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(barber.views.border_width),"px solid #222"].join(''),new cljs.core.Keyword(null,"border-top","border-top",-158897573),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(row_i,(4))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(barber.views.border_width),"px solid #222"].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(row_i,(2))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(barber.views.border_width),"px solid silver"].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(barber.views.border_width),"px solid transparent"].join('')))], null)], null)], null);
});
barber.views.map_calendar = (function barber$views$map_calendar(rows,columns){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (col_i,employee){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"white"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(barber.views.title_height),"px"].join('')], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (row_i,time){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.one_cell,col_i,employee,row_i,time], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),row_i], null));
}),rows))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),col_i], null));
}),columns)], null);
});
barber.views.actual_time_sign = (function barber$views$actual_time_sign(container){
var elapsed_time = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var now = (new Date());
var day = now.getDate();
var month = barber.views.two_digits((now.getMonth() + (1)));
var year = now.getFullYear();
var str_date = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),"-",month,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join('');
var selected_date = (function (){var G__25590 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25590) : re_frame.core.subscribe.call(null,G__25590));
})();
var minutes = now.getMinutes();
var hours = now.getHours();
var in_minutes = (minutes + (hours * (60)));
var interval = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var one_minute_step = (barber.views.grid_height / (60));
var opening_hours = (function (){var G__25591 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"opening-hours","opening-hours",1887464433)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25591) : re_frame.core.subscribe.call(null,G__25591));
})();
var selected_day = (function (){var G__25592 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"selected-day","selected-day",1859078310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25592) : re_frame.core.subscribe.call(null,G__25592));
})();
var get_pos_now = ((function (elapsed_time,now,day,month,year,str_date,selected_date,minutes,hours,in_minutes,interval,one_minute_step,opening_hours,selected_day){
return (function (){
return (in_minutes - cljs.core.first(barber.views.extend_opening_hours(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opening_hours),cljs.core.deref(selected_day)))));
});})(elapsed_time,now,day,month,year,str_date,selected_date,minutes,hours,in_minutes,interval,one_minute_step,opening_hours,selected_day))
;
var all_minutes = (in_minutes + cljs.core.deref(elapsed_time));
var height = (2);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-unmount","component-did-unmount",-665071477),window.clearInterval(cljs.core.deref(interval)),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (elapsed_time,now,day,month,year,str_date,selected_date,minutes,hours,in_minutes,interval,one_minute_step,opening_hours,selected_day,get_pos_now,all_minutes,height){
return (function (){
return cljs.core.reset_BANG_(interval,window.setInterval(((function (elapsed_time,now,day,month,year,str_date,selected_date,minutes,hours,in_minutes,interval,one_minute_step,opening_hours,selected_day,get_pos_now,all_minutes,height){
return (function (a){
return cljs.core.reset_BANG_(elapsed_time,(cljs.core.deref(elapsed_time) + (1)));
});})(elapsed_time,now,day,month,year,str_date,selected_date,minutes,hours,in_minutes,interval,one_minute_step,opening_hours,selected_day,get_pos_now,all_minutes,height))
,(60000)));
});})(elapsed_time,now,day,month,year,str_date,selected_date,minutes,hours,in_minutes,interval,one_minute_step,opening_hours,selected_day,get_pos_now,all_minutes,height))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (elapsed_time,now,day,month,year,str_date,selected_date,minutes,hours,in_minutes,interval,one_minute_step,opening_hours,selected_day,get_pos_now,all_minutes,height){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_date),str_date)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#actual-time","div#actual-time",-803759126),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__4222__auto__ = (((one_minute_step * get_pos_now()) + (one_minute_step * cljs.core.deref(elapsed_time))) + barber.views.title_height);
var y__4223__auto__ = (barber.views.title_height + ((one_minute_step * (cljs.core.second(barber.views.extend_opening_hours(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opening_hours),cljs.core.deref(selected_day)))) - cljs.core.first(barber.views.extend_opening_hours(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opening_hours),cljs.core.deref(selected_day)))))) - height));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})()),"px"].join(''),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1000),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(cljs.core.deref(container))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(container).scrollWidth),"px"].join(''):"50px"),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),"px"].join(''),new cljs.core.Keyword(null,"background","background",-863952629),"red"], null)], null)], null);
} else {
return null;
}
});})(elapsed_time,now,day,month,year,str_date,selected_date,minutes,hours,in_minutes,interval,one_minute_step,opening_hours,selected_day,get_pos_now,all_minutes,height))
], null));
});
barber.views.one_brake = (function barber$views$one_brake(column,row,length,the_key){
var calc_left = (column * barber.views.grid_width);
var calc_top = (row * barber.views.step_height);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.break","div.break",-562691729),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(0),new cljs.core.Keyword(null,"background","background",-863952629),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(the_key,new cljs.core.Keyword(null,"work","work",385770312)))?"rgba(0,0,0,0.3)":"rgba(0,0,0,0.3)"),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((barber.views.grid_width - barber.views.border_width)),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((length * barber.views.step_height)),"px"].join(''),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(calc_left),"px,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((barber.views.title_height + calc_top)),"px)"].join('')], null)], null)], null);
});
barber.views.calendar = (function barber$views$calendar(){
var container = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var employees = (function (){var G__25595 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"employees","employees",1002695450)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25595) : re_frame.core.subscribe.call(null,G__25595));
})();
var services = (function (){var G__25596 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"services","services",970478783)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25596) : re_frame.core.subscribe.call(null,G__25596));
})();
var reservations = (function (){var G__25597 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"reservations","reservations",1033801659)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25597) : re_frame.core.subscribe.call(null,G__25597));
})();
var opening_hours = (function (){var G__25598 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"opening-hours","opening-hours",1887464433)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25598) : re_frame.core.subscribe.call(null,G__25598));
})();
var selected_day = (function (){var G__25599 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"selected-day","selected-day",1859078310)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25599) : re_frame.core.subscribe.call(null,G__25599));
})();
var this_open_hours = ((function (container,employees,services,reservations,opening_hours,selected_day){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,barber.views.extend_opening_hours(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opening_hours),cljs.core.deref(selected_day))))){
return null;
} else {
return barber.views.extend_opening_hours(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(opening_hours),cljs.core.deref(selected_day)));
}
});})(container,employees,services,reservations,opening_hours,selected_day))
;
var get_column_number = ((function (container,employees,services,reservations,opening_hours,selected_day,this_open_hours){
return (function (id){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (container,employees,services,reservations,opening_hours,selected_day,this_open_hours){
return (function (index,value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(value))){
return index;
} else {
return null;
}
});})(container,employees,services,reservations,opening_hours,selected_day,this_open_hours))
,cljs.core.deref(employees)));
});})(container,employees,services,reservations,opening_hours,selected_day,this_open_hours))
;
var get_row_number = ((function (container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number){
return (function (start){
return cljs.core.quot((start - cljs.core.first(this_open_hours())),(15));
});})(container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number))
;
var all_columns = ((function (container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number){
return (function (){
return cljs.core.deref(employees);
});})(container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number))
;
var all_rows = ((function (container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns){
return (function (){
if(cljs.core.truth_(this_open_hours())){
return cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((15),cljs.core.range.cljs$core$IFn$_invoke$arity$2(cljs.core.first(this_open_hours()),cljs.core.second(this_open_hours())));
} else {
return cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((15),cljs.core.range.cljs$core$IFn$_invoke$arity$2((800),(1600)));
}
});})(container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns))
;
var keydown_interval = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var brakes = (function (){var G__25600 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"brakes","brakes",963017523)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25600) : re_frame.core.subscribe.call(null,G__25600));
})();
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns,all_rows,keydown_interval,brakes){
return (function (){
return cljs.core.reset_BANG_(container,barber.views.get_el("container"));
});})(container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns,all_rows,keydown_interval,brakes))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns,all_rows,keydown_interval,brakes){
return (function (){
var G__25601_25728 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-loader","dec-loader",2142016857)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25601_25728) : re_frame.core.dispatch.call(null,G__25601_25728));

cljs.core.reset_BANG_(container,barber.views.get_el("container"));

barber.views.add_event_listener(window,"scroll",((function (container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns,all_rows,keydown_interval,brakes){
return (function (a){
if(cljs.core.not(cljs.core.deref(barber.views.dragging_QMARK_))){
return cljs.core.reset_BANG_(barber.views.last_scroll_pos,document.documentElement.scrollTop);
} else {
return null;
}
});})(container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns,all_rows,keydown_interval,brakes))
);

barber.views.add_event_listener(window,"keydown",((function (container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns,all_rows,keydown_interval,brakes){
return (function (a){
var running_QMARK_ = (cljs.core.truth_(cljs.core.deref(keydown_interval))?true:false);
var G__25602 = a.key;
switch (G__25602) {
case "ArrowLeft":
if((!(running_QMARK_))){
return cljs.core.reset_BANG_(keydown_interval,window.setInterval(((function (G__25602,running_QMARK_,container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns,all_rows,keydown_interval,brakes){
return (function (b){
return barber.views.get_el("scroll-container").scrollLeft = (barber.views.get_el("scroll-container").scrollLeft - (5));
});})(G__25602,running_QMARK_,container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns,all_rows,keydown_interval,brakes))
,0.05));
} else {
return null;
}

break;
case "ArrowRight":
if((!(running_QMARK_))){
return cljs.core.reset_BANG_(keydown_interval,window.setInterval(((function (G__25602,running_QMARK_,container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns,all_rows,keydown_interval,brakes){
return (function (b){
return barber.views.get_el("scroll-container").scrollLeft = (barber.views.get_el("scroll-container").scrollLeft + (5));
});})(G__25602,running_QMARK_,container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns,all_rows,keydown_interval,brakes))
,0.05));
} else {
return null;
}

break;
default:
return null;

}
});})(container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns,all_rows,keydown_interval,brakes))
);

return barber.views.add_event_listener(window,"keyup",((function (container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns,all_rows,keydown_interval,brakes){
return (function (a){
if(cljs.core.truth_(cljs.core.deref(keydown_interval))){
window.clearInterval(cljs.core.deref(keydown_interval));

return cljs.core.reset_BANG_(keydown_interval,null);
} else {
return null;
}
});})(container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns,all_rows,keydown_interval,brakes))
);
});})(container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns,all_rows,keydown_interval,brakes))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns,all_rows,keydown_interval,brakes){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#calendar.uk-width-.uk-flex.uk-flex-center","div#calendar.uk-width-.uk-flex.uk-flex-center",1251856600),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"40px",new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"30px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"100px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.map_row_title,all_rows()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#scroll-container","div#scroll-container",-273317204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#container.uk-inline.noselect","div#container.uk-inline.noselect",-1079634102),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(40)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.actual_time_sign,container], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.map_column_title,all_columns()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.map_calendar,all_rows(),all_columns()], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns,all_rows,keydown_interval,brakes){
return (function (p1__25594_SHARP_,p2__25593_SHARP_){
var col = get_column_number(new cljs.core.Keyword(null,"employee","employee",-504836945).cljs$core$IFn$_invoke$arity$1(p2__25593_SHARP_));
var row = get_row_number(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(p2__25593_SHARP_));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.one_event,["box",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reservation-id","reservation-id",720153329).cljs$core$IFn$_invoke$arity$1(p2__25593_SHARP_))].join(''),col,row,(new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(p2__25593_SHARP_) / barber.views.step_minute),p2__25593_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reservation-id","reservation-id",720153329).cljs$core$IFn$_invoke$arity$1(p2__25593_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(p2__25593_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row)].join('')], null));
});})(container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns,all_rows,keydown_interval,brakes))
,cljs.core.deref(reservations))),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns,all_rows,keydown_interval,brakes){
return (function (p__25603){
var vec__25604 = p__25603;
var barber__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25604,(0),null);
var barber_brakes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25604,(1),null);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(((cljs.core.vector_QMARK_(barber_brakes))?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__25604,barber__$1,barber_brakes,container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns,all_rows,keydown_interval,brakes){
return (function (index,one_brake_data){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.one_brake,get_column_number(barber__$1),get_row_number(cljs.core.first(one_brake_data)),((cljs.core.second(one_brake_data) - cljs.core.first(one_brake_data)) / (15)),new cljs.core.Keyword(null,"work","work",385770312)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),cljs.core.str.cljs$core$IFn$_invoke$arity$1(one_brake_data)].join('')], null));
});})(vec__25604,barber__$1,barber_brakes,container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns,all_rows,keydown_interval,brakes))
,barber_brakes):cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.one_brake,get_column_number(barber__$1),(0),(cljs.core.truth_(this_open_hours())?cljs.core.quot((function (){var vec__25607 = this_open_hours();
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25607,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25607,(1),null);
return (b - a);
})(),barber.views.step_minute):cljs.core.quot((815),barber.views.step_minute)),new cljs.core.Keyword(null,"nowork","nowork",-1155374783)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())], null))));
});})(container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns,all_rows,keydown_interval,brakes))
,cljs.core.deref(brakes)))], null)], null)], null);
});})(container,employees,services,reservations,opening_hours,selected_day,this_open_hours,get_column_number,get_row_number,all_columns,all_rows,keydown_interval,brakes))
], null));
});
barber.views.home_page = (function barber$views$home_page(){
var server_time = (function (){var G__25610 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"server-time","server-time",-1527375176)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25610) : re_frame.core.subscribe.call(null,G__25610));
})();
var post_request = (function (){var G__25611 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"post-request","post-request",-1735378278)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25611) : re_frame.core.subscribe.call(null,G__25611));
})();
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (server_time,post_request){
return (function (){
var G__25612 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-user","get-user",-990309598)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25612) : re_frame.core.dispatch.call(null,G__25612));
});})(server_time,post_request))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (server_time,post_request){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-container.uk-container-small.uk-margin-large-top","div.uk-container.uk-container-small.uk-margin-large-top",1931866860),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-default","div.uk-card.uk-card-default",-426074615),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.calendar], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-default","div.uk-card.uk-card-default",-426074615),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card-body","div.uk-card-body",-925280470),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.uk-align-center","img.uk-align-center",-723062974),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/logo.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"150px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.uk-heading.uk-text-center","h1.uk-heading.uk-text-center",662872709),"Szia Bal\u00E1zs!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.uk-text-center","h2.uk-text-center",1828731532),"Ajax test"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-child-width-1-2","div.uk-child-width-1-2",2111524712),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-align-center","button.uk-button.uk-button-default.uk-align-center",1796187020),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (server_time,post_request){
return (function (){
var G__25613 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-server-time","get-server-time",-1141640499)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25613) : re_frame.core.dispatch.call(null,G__25613));
});})(server_time,post_request))
], null),"Test Ajax Get"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding","div.uk-padding",-1488303471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Result: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(server_time))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-align-center","button.uk-button.uk-button-default.uk-align-center",1796187020),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (server_time,post_request){
return (function (){
var G__25614 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-request","post-request",-1735378278)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25614) : re_frame.core.dispatch.call(null,G__25614));
});})(server_time,post_request))
], null),"Test Ajax Post"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding","div.uk-padding",-1488303471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Result: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(post_request))].join('')], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-flex.uk-flex-center","div.uk-flex.uk-flex-center",624786818),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small","div.uk-padding-small",1857323497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-small.uk-button-default","button.uk-button.uk-button-small.uk-button-default",1546687322),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (server_time,post_request){
return (function (){
var G__25615 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-to-mongo","add-to-mongo",1484084037)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25615) : re_frame.core.dispatch.call(null,G__25615));
});})(server_time,post_request))
], null),"Add to database"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small","div.uk-padding-small",1857323497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-small.uk-button-default","button.uk-button.uk-button-small.uk-button-default",1546687322),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (server_time,post_request){
return (function (){
var G__25616 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-user","add-user",-1150614693),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),"admin",new cljs.core.Keyword(null,"password","password",417022471),"admin"], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25616) : re_frame.core.dispatch.call(null,G__25616));
});})(server_time,post_request))
], null),"Add user-> admin : admin"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small","div.uk-padding-small",1857323497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-small.uk-button-default","button.uk-button.uk-button-small.uk-button-default",1546687322),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (server_time,post_request){
return (function (){
var G__25617 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-server-time","ws-server-time",-618838447)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25617) : re_frame.core.dispatch.call(null,G__25617));
});})(server_time,post_request))
], null),"Test Websocket"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null)], null)], null)], null);
});})(server_time,post_request))
], null));
});
barber.views.calendar_loader = (function barber$views$calendar_loader(){
var calendar_data_loaded_QMARK_ = (function (){var G__25618 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"calendar-data-loaded?","calendar-data-loaded?",-1699413915)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25618) : re_frame.core.subscribe.call(null,G__25618));
})();
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (calendar_data_loaded_QMARK_){
return (function (){
var G__25619_25730 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-loader","inc-loader",1725472396)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25619_25730) : re_frame.core.dispatch.call(null,G__25619_25730));

var G__25620 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-calendar-data","get-calendar-data",1380390569)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25620) : re_frame.core.dispatch.call(null,G__25620));
});})(calendar_data_loaded_QMARK_))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (calendar_data_loaded_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.calendar], null)], null);
});})(calendar_data_loaded_QMARK_))
], null));
});
barber.views.input_width = "225px";
barber.views.input_wrapper = (function barber$views$input_wrapper(content){
return null;
});
barber.views.simple_input = (function barber$views$simple_input(config,the_atom,the_key){
var rand_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-align-center.uk-margin-remove-bottom","div.uk-align-center.uk-margin-remove-bottom",1056243342),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"5px",new cljs.core.Keyword(null,"width","width",-384071477),barber.views.input_width], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.uk-form-label.gold-text.bold-text","label.uk-form-label.gold-text.bold-text",31433894),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),rand_id], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(config)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-form-controls","div.uk-form-controls",-1196760527),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-input.rounded","input.uk-input.rounded",-478983985),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),rand_id,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(the_atom),the_key),new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (rand_id){
return (function (p1__25621_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(the_atom,cljs.core.assoc,the_key,p1__25621_SHARP_.target.value);
});})(rand_id))
], null)], null)], null)], null)], null);
});
barber.views.date_input = (function barber$views$date_input(config,the_atom,the_key){
var rand_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-align-center.uk-margin-remove-bottom","div.uk-align-center.uk-margin-remove-bottom",1056243342),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"5px",new cljs.core.Keyword(null,"width","width",-384071477),barber.views.input_width], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.uk-form-label.gold-text.bold-text","label.uk-form-label.gold-text.bold-text",31433894),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),rand_id], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(config)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-form-controls","div.uk-form-controls",-1196760527),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-input.rounded","input.uk-input.rounded",-478983985),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),rand_id,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(the_atom),the_key),new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (rand_id){
return (function (p1__25622_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(the_atom,cljs.core.assoc,the_key,p1__25622_SHARP_.target.value);
});})(rand_id))
], null)], null)], null)], null);
});
barber.views.convert_to_minutes = (function barber$views$convert_to_minutes(time){
var vec__25623 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(time,":");
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25623,(0),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25623,(1),null);
return (parseInt(minutes) + ((60) * parseInt(hours)));
});
barber.views.time_input = (function barber$views$time_input(the_atom){
var rand_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
var rand_id2 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-align-center.uk-margin-remove-bottom","div.uk-align-center.uk-margin-remove-bottom",1056243342),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"5px",new cljs.core.Keyword(null,"width","width",-384071477),barber.views.input_width], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.uk-form-label.gold-text.bold-text","label.uk-form-label.gold-text.bold-text",31433894),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),rand_id], null),"t\u00F3l"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-form-controls","div.uk-form-controls",-1196760527),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-input.rounded","input.uk-input.rounded",-478983985),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),rand_id,new cljs.core.Keyword(null,"value","value",305978217),barber.views.convert_to_time(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(the_atom))),new cljs.core.Keyword(null,"type","type",1174270348),"time",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (rand_id,rand_id2){
return (function (p1__25626_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(the_atom,cljs.core.assoc,new cljs.core.Keyword(null,"start","start",-355208981),barber.views.convert_to_minutes(p1__25626_SHARP_.target.value));
});})(rand_id,rand_id2))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-align-center.uk-margin-remove-bottom","div.uk-align-center.uk-margin-remove-bottom",1056243342),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"5px",new cljs.core.Keyword(null,"width","width",-384071477),barber.views.input_width], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.uk-form-label.gold-text.bold-text","label.uk-form-label.gold-text.bold-text",31433894),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),rand_id2], null),"ig"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-form-controls","div.uk-form-controls",-1196760527),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.uk-input.rounded","input.uk-input.rounded",-478983985),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),rand_id2,new cljs.core.Keyword(null,"value","value",305978217),barber.views.convert_to_time((new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(the_atom)) + new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(the_atom)))),new cljs.core.Keyword(null,"type","type",1174270348),"time",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (rand_id,rand_id2){
return (function (p1__25627_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(the_atom,cljs.core.assoc,new cljs.core.Keyword(null,"length","length",588987862),(barber.views.convert_to_minutes(p1__25627_SHARP_.target.value) - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(the_atom))));
});})(rand_id,rand_id2))
], null)], null)], null)], null)], null);
});
barber.views.select_employee = (function barber$views$select_employee(the_atom,the_key){
var employees = (function (){var G__25630 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"employees","employees",1002695450)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25630) : re_frame.core.subscribe.call(null,G__25630));
})();
return ((function (employees){
return (function (the_atom__$1,the_key__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-align-center.uk-margin-remove-bottom","div.uk-align-center.uk-margin-remove-bottom",1056243342),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"5px",new cljs.core.Keyword(null,"width","width",-384071477),barber.views.input_width], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.uk-form-label.gold-text.bold-text","label.uk-form-label.gold-text.bold-text",31433894),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"form-stacked-text"], null),"Barber"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-form-controls","div.uk-form-controls",-1196760527),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.uk-select.rounded","select.uk-select.rounded",-110471293),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(the_atom__$1),the_key__$1),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (employees){
return (function (a){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(the_atom__$1,cljs.core.assoc,the_key__$1,a.target.value);
});})(employees))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"nil"], null),"Nincs kiv\u00E1lasztva"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (employees){
return (function (p1__25629_SHARP_,p2__25628_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(p2__25628_SHARP_)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p2__25628_SHARP_)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__25628_SHARP_)], null));
});})(employees))
,cljs.core.deref(employees))], null)], null)], null);
});
;})(employees))
});
barber.views.select_service = (function barber$views$select_service(the_atom,the_key){
var services = (function (){var G__25634 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"services","services",970478783)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25634) : re_frame.core.subscribe.call(null,G__25634));
})();
return ((function (services){
return (function (the_atom__$1,the_key__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-align-center.uk-margin-remove-bottom","div.uk-align-center.uk-margin-remove-bottom",1056243342),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"5px",new cljs.core.Keyword(null,"width","width",-384071477),barber.views.input_width], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.uk-form-label.gold-text.bold-text","label.uk-form-label.gold-text.bold-text",31433894),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"form-stacked-text"], null),"Szolg\u00E1ltat\u00E1s"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-form-controls","div.uk-form-controls",-1196760527),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.uk-select.rounded","select.uk-select.rounded",-110471293),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(the_atom__$1),the_key__$1),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (services){
return (function (a){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(the_atom__$1,cljs.core.assoc,the_key__$1,a.target.value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (services){
return (function (p1__25631_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(p1__25631_SHARP_),a.target.value);
});})(services))
,cljs.core.deref(services))))], 0));
});})(services))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"nil"], null),"Nincs kiv\u00E1lasztva"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (services){
return (function (p1__25633_SHARP_,p2__25632_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(p2__25632_SHARP_)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p2__25632_SHARP_)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(p2__25632_SHARP_)], null));
});})(services))
,cljs.core.deref(services))], null)], null)], null);
});
;})(services))
});
barber.views.reservation_editor = (function barber$views$reservation_editor(data_atom){
var editor_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(data_atom);
var user_data = (function (){var G__25635 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"user-data","user-data",2143823568)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25635) : re_frame.core.subscribe.call(null,G__25635));
})();
var esc_listener = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var no_fn = ((function (editor_atom,user_data,esc_listener){
return (function (){
var G__25636 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-to-db","add-to-db",218374651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reservation-editor","reservation-editor",1851449854),null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25636) : re_frame.core.dispatch.call(null,G__25636));
});})(editor_atom,user_data,esc_listener))
;
var yes_fn = ((function (editor_atom,user_data,esc_listener,no_fn){
return (function (){
var G__25637_25731 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modify-reservation","modify-reservation",-1711909658),new cljs.core.Keyword(null,"reservation-id","reservation-id",720153329).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_atom)),cljs.core.deref(editor_atom)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25637_25731) : re_frame.core.dispatch.call(null,G__25637_25731));

var G__25638 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-to-db","add-to-db",218374651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reservation-editor","reservation-editor",1851449854),null], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25638) : re_frame.core.dispatch.call(null,G__25638));
});})(editor_atom,user_data,esc_listener,no_fn))
;
var esc_fn = ((function (editor_atom,user_data,esc_listener,no_fn,yes_fn){
return (function (a){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((27),a.which)){
return no_fn();
} else {
return null;
}
});})(editor_atom,user_data,esc_listener,no_fn,yes_fn))
;
var enter_listener = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var enter_fn = ((function (editor_atom,user_data,esc_listener,no_fn,yes_fn,esc_fn,enter_listener){
return (function (a){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),a.which)){
return yes_fn();
} else {
return null;
}
});})(editor_atom,user_data,esc_listener,no_fn,yes_fn,esc_fn,enter_listener))
;
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (editor_atom,user_data,esc_listener,no_fn,yes_fn,esc_fn,enter_listener,enter_fn){
return (function (this$,old_argv){
var new_argv = cljs.core.rest(reagent.core.argv(this$));
var new_data = cljs.core.first(new_argv);
var old_data = cljs.core.second(old_argv);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_data,new_data)){
return cljs.core.reset_BANG_(editor_atom,new_data);
} else {
return null;
}
});})(editor_atom,user_data,esc_listener,no_fn,yes_fn,esc_fn,enter_listener,enter_fn))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (editor_atom,user_data,esc_listener,no_fn,yes_fn,esc_fn,enter_listener,enter_fn){
return (function (){
cljs.core.reset_BANG_(esc_listener,esc_fn);

cljs.core.reset_BANG_(enter_listener,enter_fn);

barber.views.add_event_listener(window,"keydown",cljs.core.deref(esc_listener));

return barber.views.add_event_listener(barber.views.get_el("reservation-editor"),"keydown",cljs.core.deref(enter_listener));
});})(editor_atom,user_data,esc_listener,no_fn,yes_fn,esc_fn,enter_listener,enter_fn))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (editor_atom,user_data,esc_listener,no_fn,yes_fn,esc_fn,enter_listener,enter_fn){
return (function (){
return barber.views.remove_event_listener(window,"keydown",cljs.core.deref(enter_listener));
});})(editor_atom,user_data,esc_listener,no_fn,yes_fn,esc_fn,enter_listener,enter_fn))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (editor_atom,user_data,esc_listener,no_fn,yes_fn,esc_fn,enter_listener,enter_fn){
return (function (data_atom__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#reservation-editor.uk-width-1-1.uk-margin-large-top","div#reservation-editor.uk-width-1-1.uk-margin-large-top",54706515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-text-center.gold-text.playfair","div.uk-text-center.gold-text.playfair",1835975586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.7em",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"20px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null)], null),((cljs.core.contains_QMARK_(cljs.core.deref(editor_atom),new cljs.core.Keyword(null,"reservation-id","reservation-id",720153329)))?"M\u00F3dos\u00EDt\u00E1s":"\u00DAj foglal\u00E1s")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.uk-form-stacked","form.uk-form-stacked",1747970711),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.simple_input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"N\u00E9v"], null),editor_atom,new cljs.core.Keyword(null,"name","name",1843675177)], null),(((((!(cljs.core.contains_QMARK_(cljs.core.deref(editor_atom),new cljs.core.Keyword(null,"reservation-id","reservation-id",720153329))))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("admin",new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(user_data))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.simple_input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"E-mail"], null),editor_atom,new cljs.core.Keyword(null,"email","email",1415816706)], null):null),(((((!(cljs.core.contains_QMARK_(cljs.core.deref(editor_atom),new cljs.core.Keyword(null,"reservation-id","reservation-id",720153329))))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("admin",new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(user_data))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.simple_input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Telefonsz\u00E1m"], null),editor_atom,new cljs.core.Keyword(null,"phone","phone",-763596057)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.date_input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"D\u00E1tum"], null),editor_atom,new cljs.core.Keyword(null,"date","date",-1463434462)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.time_input,editor_atom], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.select_employee,editor_atom,new cljs.core.Keyword(null,"employee","employee",-504836945)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.select_service,editor_atom,new cljs.core.Keyword(null,"service-id","service-id",-569220412)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1.uk-flex.uk-flex-center.uk-margin-small-top.uk-margin-bottom","div.uk-width-1-1.uk-flex.uk-flex-center.uk-margin-small-top.uk-margin-bottom",1249510440),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small","div.uk-padding-small",1857323497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.res-cancel-button.rounded","button.uk-button.res-cancel-button.rounded",-892106832),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (editor_atom,user_data,esc_listener,no_fn,yes_fn,esc_fn,enter_listener,enter_fn){
return (function (){
return no_fn();
});})(editor_atom,user_data,esc_listener,no_fn,yes_fn,esc_fn,enter_listener,enter_fn))
], null),"M\u00E9gsem"], null)], null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("nil",new cljs.core.Keyword(null,"service-id","service-id",-569220412).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(editor_atom))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small","div.uk-padding-small",1857323497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.res-save-button.rounded","button.uk-button.res-save-button.rounded",994858262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (editor_atom,user_data,esc_listener,no_fn,yes_fn,esc_fn,enter_listener,enter_fn){
return (function (){
return yes_fn();
});})(editor_atom,user_data,esc_listener,no_fn,yes_fn,esc_fn,enter_listener,enter_fn))
], null),"Ment\u00E9s"], null)], null):null)], null)], null);
});})(editor_atom,user_data,esc_listener,no_fn,yes_fn,esc_fn,enter_listener,enter_fn))
], null));
});
barber.views.menu_item = (function barber$views$menu_item(menu_QMARK_,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.menu-item","button.uk-button.menu-item",816700665),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(data))){
cljs.core.reset_BANG_(menu_QMARK_,false);
} else {
}

var G__25639 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-to-db","add-to-db",218374651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actual-page","actual-page",1366885368),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(data)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25639) : re_frame.core.dispatch.call(null,G__25639));
})], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(data)], null);
});
barber.views.menu = (function barber$views$menu(menu_QMARK_){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-animation-fade","div.uk-animation-fade",-655655205),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"40px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.menu_item,menu_QMARK_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Napt\u00E1r",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.menu_item,menu_QMARK_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Sz\u00FCnetek",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"brakes","brakes",963017523)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.menu_item,menu_QMARK_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Kliensek",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"clients","clients",1436018090)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.menu_item,menu_QMARK_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Barberek",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"employees","employees",1002695450)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.menu_item,menu_QMARK_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Szolg\u00E1ltat\u00E1sok",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"services","services",970478783)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.menu_item,menu_QMARK_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Statisztik\u00E1k",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"statistics","statistics",-1140631984)], null)], null)], null);
});
barber.views.sidebar_content = (function barber$views$sidebar_content(){
var user_data = (function (){var G__25640 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"user-data","user-data",2143823568)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25640) : re_frame.core.subscribe.call(null,G__25640));
})();
var selected_date = (function (){var G__25641 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25641) : re_frame.core.subscribe.call(null,G__25641));
})();
var editor_data = (function (){var G__25642 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"reservation-editor","reservation-editor",1851449854)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25642) : re_frame.core.subscribe.call(null,G__25642));
})();
var menu_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var user = (function (){var G__25643 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"user-data","user-data",2143823568)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25643) : re_frame.core.subscribe.call(null,G__25643));
})();
var today = (function (){var G__25644 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"today","today",945271563)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25644) : re_frame.core.subscribe.call(null,G__25644));
})();
return ((function (user_data,selected_date,editor_data,menu_QMARK_,user,today){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#blocks","div#blocks",-257891123),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("admin",new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(user_data))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (user_data,selected_date,editor_data,menu_QMARK_,user,today){
return (function (){
return cljs.core.reset_BANG_(menu_QMARK_,cljs.core.not(cljs.core.deref(menu_QMARK_)));
});})(user_data,selected_date,editor_data,menu_QMARK_,user,today))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1000),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid white",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px"], null),new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"menu"], null)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.menu-item","button.uk-button.menu-item",816700665),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),new cljs.core.Keyword(null,"href","href",-793805698),"/logout"], null),"Kijelentkez\u00E9s"], null)], null),(cljs.core.truth_(cljs.core.deref(editor_data))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.reservation_editor,cljs.core.deref(editor_data)], null)], null):(cljs.core.truth_(cljs.core.deref(menu_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.menu,menu_QMARK_], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-animation-fade","div.uk-animation-fade",-655655205),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding.uk-padding-remove-bottom.uk-padding-remove-top","div.uk-padding.uk-padding-remove-bottom.uk-padding-remove-top",-943625295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.uk-align-center.uk-margin-remove-bottom","img.uk-align-center.uk-margin-remove-bottom",-1942820194),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),["/logo/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shop-id","shop-id",-1692593497).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(user_data)))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.flatpickr,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(selected_date),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"locale","locale",-2115712697),"hu",new cljs.core.Keyword(null,"minDate","minDate",229610480),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("admin",new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(user))))?null:cljs.core.deref(today)),new cljs.core.Keyword(null,"inline","inline",1399884222),true,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (user_data,selected_date,editor_data,menu_QMARK_,user,today){
return (function (selected_dates,date_str,instance){
var G__25645 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-date","select-date",-180125912),date_str], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25645) : re_frame.core.dispatch.call(null,G__25645));
});})(user_data,selected_date,editor_data,menu_QMARK_,user,today))
], null)], null)], null)], null)))], null)], null);
});
;})(user_data,selected_date,editor_data,menu_QMARK_,user,today))
});
barber.views.calendar_sidebar = (function barber$views$calendar_sidebar(){
var open_QMARK_ = (function (){var G__25646 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"sidebar-open?","sidebar-open?",-1099774467)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25646) : re_frame.core.subscribe.call(null,G__25646));
})();
var last_open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var close_func = ((function (open_QMARK_,last_open_QMARK_){
return (function (){
cljs.core.reset_BANG_(last_open_QMARK_,false);

return barber.views.anim_to(barber.views.get_el("sidebar"),0.3,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(-100%)",new cljs.core.Keyword(null,"clearProps","clearProps",1905088417),"transform",new cljs.core.Keyword(null,"onComplete","onComplete",-661010670),((function (open_QMARK_,last_open_QMARK_){
return (function (a){
barber.views.set_gsap(barber.views.get_el("sidebar"),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"0px"], null)));

return barber.views.set_gsap(barber.views.get_el("sidebar-inner"),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),"-340px"], null)));
});})(open_QMARK_,last_open_QMARK_))
], null)));
});})(open_QMARK_,last_open_QMARK_))
;
var open_func = ((function (open_QMARK_,last_open_QMARK_,close_func){
return (function (){
cljs.core.reset_BANG_(last_open_QMARK_,true);

barber.views.set_gsap(barber.views.get_el("sidebar-inner"),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)));

barber.views.set_gsap(barber.views.get_el("sidebar"),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(-100%)"], null)));

return barber.views.anim_to(barber.views.get_el("sidebar"),0.3,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(0%)",new cljs.core.Keyword(null,"width","width",-384071477),"340px",new cljs.core.Keyword(null,"onComplete","onComplete",-661010670),((function (open_QMARK_,last_open_QMARK_,close_func){
return (function (a){
return barber.views.set_gsap(barber.views.get_el("sidebar-inner"),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null)));
});})(open_QMARK_,last_open_QMARK_,close_func))
], null)));
});})(open_QMARK_,last_open_QMARK_,close_func))
;
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (open_QMARK_,last_open_QMARK_,close_func,open_func){
return (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(last_open_QMARK_),cljs.core.deref(open_QMARK_))){
if(cljs.core.truth_(cljs.core.deref(open_QMARK_))){
return open_func();
} else {
return close_func();
}
} else {
return null;
}
});})(open_QMARK_,last_open_QMARK_,close_func,open_func))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (open_QMARK_,last_open_QMARK_,close_func,open_func){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sidebar","div#sidebar",-63515832),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#222",new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(barber.views.sidebar_width),"px"].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sidebar-inner","div#sidebar-inner",-1100236105),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"width","width",-384071477),"340px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-inline","div.uk-inline",-2089757713),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small","div.uk-padding-small",1857323497),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#trapezium.uk-text-center","div#trapezium.uk-text-center",-1690429273),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(100)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,last_open_QMARK_,close_func,open_func){
return (function (){
var G__25647 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-to-db","add-to-db",218374651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sidebar-open?","sidebar-open?",-1099774467),cljs.core.not(cljs.core.deref(open_QMARK_))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25647) : re_frame.core.dispatch.call(null,G__25647));
});})(open_QMARK_,last_open_QMARK_,close_func,open_func))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),["ratio: 1.5; icon: ",(cljs.core.truth_(cljs.core.deref(open_QMARK_))?"chevron-left":"chevron-right")].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.sidebar_content], null)], null)], null)], null)], null)], null);
});})(open_QMARK_,last_open_QMARK_,close_func,open_func))
], null));
});
barber.views.this_date = (function barber$views$this_date(){
var selected_date_and_day = (function (){var G__25648 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-date-and-day","selected-date-and-day",1409782707)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25648) : re_frame.core.subscribe.call(null,G__25648));
})();
var reservations = (function (){var G__25649 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"reservations","reservations",1033801659)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25649) : re_frame.core.subscribe.call(null,G__25649));
})();
var user = (function (){var G__25650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"user-data","user-data",2143823568)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25650) : re_frame.core.subscribe.call(null,G__25650));
})();
var today = (function (){var G__25651 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"today","today",945271563)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25651) : re_frame.core.subscribe.call(null,G__25651));
})();
var day_name = ((function (selected_date_and_day,reservations,user,today){
return (function (day_key){
var G__25652 = day_key;
var G__25652__$1 = (((G__25652 instanceof cljs.core.Keyword))?G__25652.fqn:null);
switch (G__25652__$1) {
case "monday":
return "H\u00E9tf\u0151";

break;
case "tuesday":
return "Kedd";

break;
case "wednesday":
return "Szerda";

break;
case "thursday":
return "Cs\u00FCt\u00F6rt\u00F6k";

break;
case "friday":
return "P\u00E9ntek";

break;
case "saturday":
return "Szombat";

break;
case "sunday":
return "Vas\u00E1rnap";

break;
default:
return "unknown";

}
});})(selected_date_and_day,reservations,user,today))
;
var month_name = ((function (selected_date_and_day,reservations,user,today,day_name){
return (function (month_number){
var G__25653 = month_number;
switch (G__25653) {
case "01":
return "Janu\u00E1r";

break;
case "02":
return "Febru\u00E1r";

break;
case "03":
return "M\u00E1rcius";

break;
case "04":
return "\u00C1prilis";

break;
case "05":
return "M\u00E1jus";

break;
case "06":
return "J\u00FAnius";

break;
case "07":
return "J\u00FAlius";

break;
case "08":
return "Augusztus";

break;
case "09":
return "Szeptember";

break;
case "10":
return "Okt\u00F3ber";

break;
case "11":
return "November";

break;
case "12":
return "December";

break;
default:
return "unknown";

}
});})(selected_date_and_day,reservations,user,today,day_name))
;
var date_in_str = ((function (selected_date_and_day,reservations,user,today,day_name,month_name){
return (function (){
var vec__25654 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.deref(selected_date_and_day)),/-/);
var year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25654,(0),null);
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25654,(1),null);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25654,(2),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(month_name(month))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join('');
});})(selected_date_and_day,reservations,user,today,day_name,month_name))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gold-text.playfair.uk-text-center.uk-padding.uk-padding-bottom-remove.noselect.uk-width-medium.uk-align-center","div.gold-text.playfair.uk-text-center.uk-padding.uk-padding-bottom-remove.noselect.uk-width-medium.uk-align-center",-217682031),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.this-date.uk-inline.uk-height-small","div.this-date.uk-inline.uk-height-small",-1289455458),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#222",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"10px"], null)], null),((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("admin",new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(user)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(today),cljs.core.first(cljs.core.deref(selected_date_and_day))))))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-margin-small-right.uk-position-center-left","div.uk-margin-small-right.uk-position-center-left",-1818253959),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_date_and_day,reservations,user,today,day_name,month_name,date_in_str){
return (function (){
var G__25657_25734 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-to-db","add-to-db",218374651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reservation-editor","reservation-editor",1851449854),null], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25657_25734) : re_frame.core.dispatch.call(null,G__25657_25734));

var G__25658 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-date","select-date",-180125912),barber.views.get_yesterday(cljs.core.first(cljs.core.deref(selected_date_and_day)))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25658) : re_frame.core.dispatch.call(null,G__25658));
});})(selected_date_and_day,reservations,user,today,day_name,month_name,date_in_str))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"ratio:1.5; icon: chevron-left"], null)], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-position-center","div.uk-position-center",531257079),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.8em"], null)], null),date_in_str()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5em"], null)], null),day_name(cljs.core.second(cljs.core.deref(selected_date_and_day)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.3em"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(reservations)))," vend\u00E9g"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-margin-small-left.uk-position-center-right","div.uk-margin-small-left.uk-position-center-right",-1094227233),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_date_and_day,reservations,user,today,day_name,month_name,date_in_str){
return (function (){
var G__25659_25735 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-to-db","add-to-db",218374651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reservation-editor","reservation-editor",1851449854),null], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25659_25735) : re_frame.core.dispatch.call(null,G__25659_25735));

var G__25660 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-date","select-date",-180125912),barber.views.get_tomorrow(cljs.core.first(cljs.core.deref(selected_date_and_day)))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25660) : re_frame.core.dispatch.call(null,G__25660));
});})(selected_date_and_day,reservations,user,today,day_name,month_name,date_in_str))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"ratio:1.5; icon: chevron-right"], null)], null)], null)], null);
});
barber.views.calendar_page = (function barber$views$calendar_page(){
var websocket_QMARK_ = (function (){var G__25661 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"websocket?","websocket?",1552493139)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25661) : re_frame.core.subscribe.call(null,G__25661));
})();
var reservations = (function (){var G__25662 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"reservations","reservations",1033801659)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25662) : re_frame.core.subscribe.call(null,G__25662));
})();
return ((function (websocket_QMARK_,reservations){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-expand","div.uk-width-expand",2031751938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.this_date], null),(cljs.core.truth_(cljs.core.deref(websocket_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.calendar_loader], null):null)], null);
});
;})(websocket_QMARK_,reservations))
});
barber.views.modal = (function barber$views$modal(){
var sidebar_open_QMARK_ = (function (){var G__25663 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"sidebar-open?","sidebar-open?",-1099774467)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25663) : re_frame.core.subscribe.call(null,G__25663));
})();
var modal_state = (function (){var G__25664 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"modal","modal",-1031880850)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25664) : re_frame.core.subscribe.call(null,G__25664));
})();
var last_open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var open_fn = ((function (sidebar_open_QMARK_,modal_state,last_open_QMARK_){
return (function (){
cljs.core.reset_BANG_(last_open_QMARK_,true);

barber.views.set_gsap(barber.views.get_el("modal"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inherit"], null));

return barber.views.anim_to(barber.views.get_el("modal"),(1000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null));
});})(sidebar_open_QMARK_,modal_state,last_open_QMARK_))
;
var close_fn = ((function (sidebar_open_QMARK_,modal_state,last_open_QMARK_,open_fn){
return (function (){
cljs.core.reset_BANG_(last_open_QMARK_,false);

return barber.views.set_gsap(barber.views.get_el("modal"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null));
});})(sidebar_open_QMARK_,modal_state,last_open_QMARK_,open_fn))
;
var esc_listener = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var no_fn = ((function (sidebar_open_QMARK_,modal_state,last_open_QMARK_,open_fn,close_fn,esc_listener){
return (function (){
var G__25665_25736 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-modal","set-modal",312437679),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25665_25736) : re_frame.core.dispatch.call(null,G__25665_25736));

var fexpr__25666 = new cljs.core.Keyword(null,"no-fn","no-fn",-353517111).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(modal_state));
return (fexpr__25666.cljs$core$IFn$_invoke$arity$0 ? fexpr__25666.cljs$core$IFn$_invoke$arity$0() : fexpr__25666.call(null));
});})(sidebar_open_QMARK_,modal_state,last_open_QMARK_,open_fn,close_fn,esc_listener))
;
var yes_fn = ((function (sidebar_open_QMARK_,modal_state,last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn){
return (function (){
var G__25667_25737 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-modal","set-modal",312437679),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25667_25737) : re_frame.core.dispatch.call(null,G__25667_25737));

var fexpr__25668 = new cljs.core.Keyword(null,"yes-fn","yes-fn",-193560811).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(modal_state));
return (fexpr__25668.cljs$core$IFn$_invoke$arity$0 ? fexpr__25668.cljs$core$IFn$_invoke$arity$0() : fexpr__25668.call(null));
});})(sidebar_open_QMARK_,modal_state,last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn))
;
var no_event = ((function (sidebar_open_QMARK_,modal_state,last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn,yes_fn){
return (function (a){
if(cljs.core.truth_(cljs.core.deref(last_open_QMARK_))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((27),a.which)){
return no_fn();
} else {
return null;
}
} else {
return null;
}
});})(sidebar_open_QMARK_,modal_state,last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn,yes_fn))
;
var enter_listener = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var yes_event = ((function (sidebar_open_QMARK_,modal_state,last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn,yes_fn,no_event,enter_listener){
return (function (a){
if(cljs.core.truth_(cljs.core.deref(last_open_QMARK_))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),a.which)){
return yes_fn();
} else {
return null;
}
} else {
return null;
}
});})(sidebar_open_QMARK_,modal_state,last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn,yes_fn,no_event,enter_listener))
;
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (sidebar_open_QMARK_,modal_state,last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn,yes_fn,no_event,enter_listener,yes_event){
return (function (){
cljs.core.reset_BANG_(esc_listener,no_event);

cljs.core.reset_BANG_(enter_listener,yes_event);

barber.views.add_event_listener(window,"keydown",cljs.core.deref(esc_listener));

return barber.views.add_event_listener(window,"keydown",cljs.core.deref(enter_listener));
});})(sidebar_open_QMARK_,modal_state,last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn,yes_fn,no_event,enter_listener,yes_event))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (sidebar_open_QMARK_,modal_state,last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn,yes_fn,no_event,enter_listener,yes_event){
return (function (){
return barber.views.remove_event_listener(window,"keydown",cljs.core.deref(enter_listener));
});})(sidebar_open_QMARK_,modal_state,last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn,yes_fn,no_event,enter_listener,yes_event))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (sidebar_open_QMARK_,modal_state,last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn,yes_fn,no_event,enter_listener,yes_event){
return (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(last_open_QMARK_),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(modal_state)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(modal_state)))){
return open_fn();
} else {
return close_fn();
}
} else {
return null;
}
});})(sidebar_open_QMARK_,modal_state,last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn,yes_fn,no_event,enter_listener,yes_event))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (sidebar_open_QMARK_,modal_state,last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn,yes_fn,no_event,enter_listener,yes_event){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#modal.uk-inline","div#modal.uk-inline",756103389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(cljs.core.truth_(cljs.core.deref(sidebar_open_QMARK_))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(barber.views.sidebar_width),"px"].join(''):"0px"),new cljs.core.Keyword(null,"display","display",242065432),"none",new cljs.core.Keyword(null,"background","background",-863952629),"rgba(0,0,0,0.7)",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1000),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(cljs.core.deref(sidebar_open_QMARK_))?["calc(100% - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(barber.views.sidebar_width),"px)"].join(''):"100%")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(5000)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-position-center.uk-padding-small","div.uk-position-center.uk-padding-small",1329306557),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(5001),new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"10px",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(modal_state)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(modal_state))], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.uk-text-bigger","p.uk-text-bigger",1914040134),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(modal_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1.uk-flex","div.uk-width-1-1.uk-flex",1205095905),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-flex-1","button.uk-button.uk-button-default.uk-flex-1",-1759476927),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),no_fn], null),"Nem"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default.uk-flex-1","button.uk-button.uk-button-default.uk-flex-1",-1759476927),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),yes_fn], null),"Igen"], null)], null)], null)], null);
});})(sidebar_open_QMARK_,modal_state,last_open_QMARK_,open_fn,close_fn,esc_listener,no_fn,yes_fn,no_event,enter_listener,yes_event))
], null));
});
barber.views.brakes_slider = (function barber$views$brakes_slider(brake_coll){
var brake_types = (function (){var G__25671 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"brake-types","brake-types",2060811971)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25671) : re_frame.core.subscribe.call(null,G__25671));
})();
var brake_not_exists_QMARK_ = ((function (brake_types){
return (function (brakes,this_brake){
return cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (brake_types){
return (function (a){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,this_brake);
});})(brake_types))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (brake_types){
return (function (p1__25669_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__25669_SHARP_);
});})(brake_types))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"brakes","brakes",963017523),brakes))));
});})(brake_types))
;
var add_brakes = ((function (brake_types,brake_not_exists_QMARK_){
return (function (coll){
return cljs.core.reset_BANG_(brake_coll,coll);
});})(brake_types,brake_not_exists_QMARK_))
;
return ((function (brake_types,brake_not_exists_QMARK_,add_brakes){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-container.uk-container-small","div.uk-container.uk-container-small",-685335374),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"20px",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.react_slider,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"onAfterChange","onAfterChange",-1922127679),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"pearling","pearling",-148258460),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"trackClassName","trackClassName",-337389748),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"thumbClassName","thumbClassName",126835952),new cljs.core.Keyword(null,"minDistance","minDistance",1415747571),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),new cljs.core.Keyword(null,"renderThumb","renderThumb",-1990448324),new cljs.core.Keyword(null,"step","step",1288888124)],[((function (brake_types,brake_not_exists_QMARK_,add_brakes){
return (function (p1__25670_SHARP_){
return cljs.core.reset_BANG_(brake_coll,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__25670_SHARP_));
});})(brake_types,brake_not_exists_QMARK_,add_brakes))
,(360),true,cljs.core.clj__GT_js(cljs.core.deref(brake_coll)),"example-track","horizontal-slider","example-thumb",(15),(1440),cljs.core.deref(brake_coll),((function (brake_types,brake_not_exists_QMARK_,add_brakes){
return (function (props,state){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.in-thumb","div.in-thumb",-585368976),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(props),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.odd_QMARK_(state.index))?"in-thumb-right":"in-thumb-left")], null)], 0)),barber.views.convert_to_time(state.valueNow)], null));
});})(brake_types,brake_not_exists_QMARK_,add_brakes))
,(5)])], null)], null)], null),((brake_not_exists_QMARK_(cljs.core.deref(brake_types),cljs.core.deref(brake_coll)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1","div.uk-width-1-1",-1131177597),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-align-center.uk-button.uk-button-primary","button.uk-align-center.uk-button.uk-button-primary",1807728756),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (brake_types,brake_not_exists_QMARK_,add_brakes){
return (function (){
var G__25672 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-brake-type","add-brake-type",1129805860),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.deref(brake_coll)))], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25672) : re_frame.core.dispatch.call(null,G__25672));
});})(brake_types,brake_not_exists_QMARK_,add_brakes))
], null),"Sz\u00FCnett\u00EDpus hozz\u00E1ad\u00E1sa"], null)], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-flex.uk-flex-center.uk-width-1-1","div.uk-flex.uk-flex-center.uk-width-1-1",-797339749),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default","button.uk-button.uk-button-default",161862613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (brake_types,brake_not_exists_QMARK_,add_brakes){
return (function (){
return add_brakes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(690)], null));
});})(brake_types,brake_not_exists_QMARK_,add_brakes))
], null),"1 sz\u00FCnet"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default","button.uk-button.uk-button-default",161862613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (brake_types,brake_not_exists_QMARK_,add_brakes){
return (function (){
return add_brakes(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(690),(800),(860)], null));
});})(brake_types,brake_not_exists_QMARK_,add_brakes))
], null),"2 sz\u00FCnet"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default","button.uk-button.uk-button-default",161862613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (brake_types,brake_not_exists_QMARK_,add_brakes){
return (function (){
return add_brakes(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(690),(800),(860),(1000),(1080)], null));
});})(brake_types,brake_not_exists_QMARK_,add_brakes))
], null),"3 sz\u00FCnet"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-default","button.uk-button.uk-button-default",161862613),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (brake_types,brake_not_exists_QMARK_,add_brakes){
return (function (){
return add_brakes(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(690),(800),(860),(1000),(1080),(1210),(1300)], null));
});})(brake_types,brake_not_exists_QMARK_,add_brakes))
], null),"4 sz\u00FCnet"], null)], null)], null);
});
;})(brake_types,brake_not_exists_QMARK_,add_brakes))
});
barber.views.toggle_remove_add = (function barber$views$toggle_remove_add(coll,item){
if(cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25673_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,p1__25673_SHARP_);
}),coll))){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null),coll));
} else {
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__25674_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,p1__25674_SHARP_);
}),coll));
}
});
barber.views.employee_for_brake = (function barber$views$employee_for_brake(the_atom,data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small.uk-width-auto","div.uk-padding-small.uk-width-auto",-1326867960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-default.uk-padding-small","div.uk-card.uk-card-default.uk-padding-small",-1618993051),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.some((function (p1__25675_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(data),p1__25675_SHARP_);
}),cljs.core.deref(the_atom)))?"active-employee":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (a){
return cljs.core.reset_BANG_(the_atom,barber.views.toggle_remove_add(cljs.core.deref(the_atom),new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(data)));
})], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(data))], null)], null);
});
barber.views.employees_for_brakes = (function barber$views$employees_for_brakes(the_atom){
var emps = (function (){var G__25678 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"employees","employees",1002695450)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25678) : re_frame.core.subscribe.call(null,G__25678));
})();
return ((function (emps){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.uk-text-center","h1.uk-text-center",-826267756),"Barberek"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid-collapse","div.uk-grid-collapse",-339271556),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (emps){
return (function (p1__25676_SHARP_,p2__25677_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.employee_for_brake,the_atom,p2__25677_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__25676_SHARP_], null));
});})(emps))
,cljs.core.deref(emps))], null)], null);
});
;})(emps))
});
barber.views.brake_type = (function barber$views$brake_type(selected_brake_types,selected_brakes,data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small.uk-width-auto","div.uk-padding-small.uk-width-auto",-1326867960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.uk-position-right","span.uk-position-right",1055753537),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-uk-icon","data-uk-icon",1809176669),"close",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__25681 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-brake-type","remove-brake-type",-1316197461),new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(data)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25681) : re_frame.core.dispatch.call(null,G__25681));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-default.uk-padding-small","div.uk-card.uk-card-default.uk-padding-small",-1618993051),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"5px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(data),cljs.core.deref(selected_brake_types)))?"active-employee":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (a){
cljs.core.reset_BANG_(selected_brakes,cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,new cljs.core.Keyword(null,"brakes","brakes",963017523).cljs$core$IFn$_invoke$arity$1(data))));

return cljs.core.reset_BANG_(selected_brake_types,new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(data));
})], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__25680_SHARP_,p2__25679_SHARP_){
var vec__25682 = p2__25679_SHARP_;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25682,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25682,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),barber.views.convert_to_time(a)," - ",barber.views.convert_to_time(b)], null);
}),new cljs.core.Keyword(null,"brakes","brakes",963017523).cljs$core$IFn$_invoke$arity$1(data))], null)], null);
});
barber.views.brake_types = (function barber$views$brake_types(selected_brakes,selected_brake_types){
var brake_types = (function (){var G__25687 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"brake-types","brake-types",2060811971)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25687) : re_frame.core.subscribe.call(null,G__25687));
})();
return ((function (brake_types){
return (function (selected_brakes__$1,selected_brake_types__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding-small","div.uk-padding-small",1857323497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.uk-text-center","h1.uk-text-center",-826267756),"Sz\u00FCnett\u00EDpusok"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-grid-collapse","div.uk-grid-collapse",-339271556),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),"masonry: true"], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (brake_types){
return (function (p1__25685_SHARP_,p2__25686_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.brake_type,selected_brake_types__$1,selected_brakes__$1,p2__25686_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__25685_SHARP_], null));
});})(brake_types))
,cljs.core.deref(brake_types))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.brakes_slider,selected_brakes__$1], null)], null);
});
;})(brake_types))
});
barber.views.table_for_brakes = (function barber$views$table_for_brakes(table_data){
var employees = (function (){var G__25693 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"employees","employees",1002695450)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25693) : re_frame.core.subscribe.call(null,G__25693));
})();
var get_emp = ((function (employees){
return (function (id){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (employees){
return (function (p1__25688_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_id","_id",-789960287).cljs$core$IFn$_invoke$arity$1(p1__25688_SHARP_),id);
});})(employees))
,cljs.core.deref(employees))));
});})(employees))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.uk-table.uk-table-striped.uk-table-small.uk-table-divider","table.uk-table.uk-table-striped.uk-table-small.uk-table-divider",-1928912672),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (employees,get_emp){
return (function (p1__25689_SHARP_,p2__25690_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),get_emp(p2__25690_SHARP_)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__25689_SHARP_], null));
});})(employees,get_emp))
,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,table_data))))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (employees,get_emp){
return (function (p1__25691_SHARP_,p2__25692_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p2__25692_SHARP_),(5)))], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (employees,get_emp){
return (function (idx,b){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((((!(cljs.core.empty_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(2)))))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(2))))))?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (employees,get_emp){
return (function (the_idx,p__25694){
var vec__25695 = p__25694;
var time1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25695,(0),null);
var time2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25695,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),barber.views.convert_to_time(time1)," - ",barber.views.convert_to_time(time2)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null));
});})(employees,get_emp))
,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(2))):"-")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null));
});})(employees,get_emp))
,cljs.core.second(p2__25692_SHARP_))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__25691_SHARP_], null));
});})(employees,get_emp))
,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by(cljs.core.second,table_data)))], null)], null);
});
barber.views.brakes = (function barber$views$brakes(){
var selected_dates = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var selected_employees = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var selected_brakes = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(720),(780),(900),(1100)], null));
var selected_brake_type = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var table_data = (function (){var G__25698 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"brakes-on-dates","brakes-on-dates",-1585186918)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25698) : re_frame.core.subscribe.call(null,G__25698));
})();
return ((function (selected_dates,selected_employees,selected_brakes,selected_brake_type,table_data){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-child-width-1-2.uk-grid-collapse.uk-width-1-1.uk-card.uk-card-default","div.uk-child-width-1-2.uk-grid-collapse.uk-width-1-1.uk-card.uk-card-default",1419285016),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-auto.uk-padding-small","div.uk-width-auto.uk-padding-small",-966884477),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.uk-text-center","h1.uk-text-center",-826267756),"Napok"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.flatpickr,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mode","mode",654403691),"multiple",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(selected_dates),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"locale","locale",-2115712697),"hu",new cljs.core.Keyword(null,"inline","inline",1399884222),true,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (selected_dates,selected_employees,selected_brakes,selected_brake_type,table_data){
return (function (a,date_str,instance){
return cljs.core.reset_BANG_(selected_dates,barber.views.toggle_remove_add(cljs.core.deref(selected_dates),date_str));
});})(selected_dates,selected_employees,selected_brakes,selected_brake_type,table_data))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-expand.uk-padding-small","div.uk-width-expand.uk-padding-small",1245257892),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.employees_for_brakes,selected_employees], null)], null),(((((!(cljs.core.empty_QMARK_(cljs.core.deref(selected_dates))))) && ((!(cljs.core.empty_QMARK_(cljs.core.deref(selected_employees)))))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1.uk-padding-small.uk-flex.uk-flex-center","div.uk-width-1-1.uk-padding-small.uk-flex.uk-flex-center",-1655196611),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"1px solid lightgrey",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid lightgrey"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-primary","button.uk-button.uk-button-primary",-1963381556),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_dates,selected_employees,selected_brakes,selected_brake_type,table_data){
return (function (){
var G__25699 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-brakes-on-dates","get-brakes-on-dates",1468232405),cljs.core.deref(selected_dates),cljs.core.deref(selected_employees)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25699) : re_frame.core.dispatch.call(null,G__25699));
});})(selected_dates,selected_employees,selected_brakes,selected_brake_type,table_data))
], null),"T\u00E1bl\u00E1zat lek\u00E9r\u00E9se"], null),(cljs.core.truth_(cljs.core.deref(table_data))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-secondary","button.uk-button.uk-button-secondary",-1877468486),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_dates,selected_employees,selected_brakes,selected_brake_type,table_data){
return (function (){
var G__25700 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-data-to-key","assoc-data-to-key",-1193031033),new cljs.core.Keyword(null,"brakes-on-dates","brakes-on-dates",-1585186918),null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25700) : re_frame.core.dispatch.call(null,G__25700));
});})(selected_dates,selected_employees,selected_brakes,selected_brake_type,table_data))
], null),"T\u00E1bl\u00E1zat t\u00F6rl\u00E9se"], null):null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1","div.uk-width-1-1",-1131177597),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.table_for_brakes,cljs.core.deref(table_data)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1","div.uk-width-1-1",-1131177597),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.brake_types,selected_brakes,selected_brake_type], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1.uk-padding-small","div.uk-width-1-1.uk-padding-small",-2108003574),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-primary.uk-align-center","button.uk-button.uk-button-primary.uk-align-center",2002358487),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_dates,selected_employees,selected_brakes,selected_brake_type,table_data){
return (function (){
var G__25701 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-brakes-to-dates","add-brakes-to-dates",-570394383),cljs.core.deref(selected_dates),cljs.core.deref(selected_employees),cljs.core.deref(selected_brake_type)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25701) : re_frame.core.dispatch.call(null,G__25701));
});})(selected_dates,selected_employees,selected_brakes,selected_brake_type,table_data))
], null),"Sz\u00FCnet ment\u00E9se a kijel\u00F6lt barbekre \u00E9s napokra"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-secondary.uk-align-center","button.uk-button.uk-button-secondary.uk-align-center",-257912463),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_dates,selected_employees,selected_brakes,selected_brake_type,table_data){
return (function (){
var G__25702 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-brakes-to-dates","add-brakes-to-dates",-570394383),cljs.core.deref(selected_dates),cljs.core.deref(selected_employees),null], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25702) : re_frame.core.dispatch.call(null,G__25702));
});})(selected_dates,selected_employees,selected_brakes,selected_brake_type,table_data))
], null),"Sz\u00FCnet t\u00F6rl\u00E9se a kijel\u00F6lt barbekre \u00E9s napokra"], null)], null)], null)], null);
});
;})(selected_dates,selected_employees,selected_brakes,selected_brake_type,table_data))
});
barber.views.clients_page = (function barber$views$clients_page(){
var clients = (function (){var G__25705 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"clients","clients",1436018090)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25705) : re_frame.core.subscribe.call(null,G__25705));
})();
var the_count = (function (){var G__25706 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"clients-count","clients-count",-190617829)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25706) : re_frame.core.subscribe.call(null,G__25706));
})();
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (clients,the_count){
return (function (){
var G__25707_25738 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-clients","get-clients",-794960615)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25707_25738) : re_frame.core.dispatch.call(null,G__25707_25738));

var G__25708 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-clients-count","get-clients-count",401348888)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25708) : re_frame.core.dispatch.call(null,G__25708));
});})(clients,the_count))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (clients,the_count){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-container.uk-container-large","div.uk-container.uk-container-large",-1818682218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding","div.uk-padding",-1488303471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.uk-text-center.playfair.gold-text.uk-padding-small.uk-margin-top","h2.uk-text-center.playfair.gold-text.uk-padding-small.uk-margin-top",-111198380),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"10px",new cljs.core.Keyword(null,"background","background",-863952629),"#222"], null)], null),"Kliensek: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(the_count))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (clients,the_count){
return (function (p1__25703_SHARP_,p2__25704_SHARP_){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-card.uk-card-default.uk-padding-small.uk-grid-collapse.uk-child-width-expand","div.uk-card.uk-card-default.uk-padding-small.uk-grid-collapse.uk-child-width-expand",-1449522427),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-uk-grid","data-uk-grid",-1215416447),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p2__25704_SHARP_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(p2__25704_SHARP_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"phone","phone",-763596057).cljs$core$IFn$_invoke$arity$1(p2__25704_SHARP_)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__25703_SHARP_], null));
});})(clients,the_count))
,cljs.core.deref(clients)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-padding","div.uk-padding",-1488303471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.uk-button.uk-button-primary.uk-align-center","button.uk-button.uk-button-primary.uk-align-center",2002358487),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (clients,the_count){
return (function (){
var G__25709 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-clients","get-clients",-794960615)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25709) : re_frame.core.dispatch.call(null,G__25709));
});})(clients,the_count))
], null),"Tov\u00E1bbi 20"], null)], null)], null)], null);
});})(clients,the_count))
], null));
});
barber.views.current_page = (function barber$views$current_page(){
var actual_page = (function (){var G__25710 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"actual-page","actual-page",1366885368)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25710) : re_frame.core.subscribe.call(null,G__25710));
})();
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (actual_page){
return (function (){
var route_params = (function (){var G__25711 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"route-params","route-params",2111411055)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25711) : re_frame.core.subscribe.call(null,G__25711));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-1-1","div.uk-width-1-1",-1131177597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"url('/main.jpg')"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-flex","div.uk-flex",-521895179),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"100vh"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.calendar_sidebar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.uk-width-expand","div.uk-width-expand",2031751938),(function (){var G__25712 = cljs.core.deref(actual_page);
var G__25712__$1 = (((G__25712 instanceof cljs.core.Keyword))?G__25712.fqn:null);
switch (G__25712__$1) {
case "calendar":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.calendar_page], null);

break;
case "employees":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.dnd,new cljs.core.Keyword(null,"employees","employees",1002695450)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"e"], null));

break;
case "services":
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.dnd,new cljs.core.Keyword(null,"services","services",970478783)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"s"], null));

break;
case "brakes":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.brakes], null);

break;
case "clients":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.clients_page], null);

break;
default:
return "This page doesn't exists.";

}
})()], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [barber.views.modal], null)], null);
});})(actual_page))
], null));
});

//# sourceMappingURL=barber.views.js.map
