"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[852],{3256:(j,A,p)=>{p.d(A,{C:()=>_,E8:()=>K,G7:()=>c});var g=p(9684),f=p(1368),e=p(4496),b=p(7564),y=p(144),E=p(2452),O=p(552),S=p(4616);function w(n,s){if(1&n&&e.wR5(0,"span",11),2&n){const t=e.GaO(3);e.m8U(t.accordion.collapseIcon),e.E7m("ngClass",t.iconClass),e.e48("aria-hidden",!0)}}function M(n,s){if(1&n&&e.wR5(0,"ChevronDownIcon",11),2&n){const t=e.GaO(3);e.E7m("ngClass",t.iconClass),e.e48("aria-hidden",!0)}}function I(n,s){if(1&n&&(e.SAx(0),e.yuY(1,w,1,4,"span",9)(2,M,1,2,"ChevronDownIcon",10),e.k70()),2&n){const t=e.GaO(2);e.yG2(),e.E7m("ngIf",t.accordion.collapseIcon),e.yG2(),e.E7m("ngIf",!t.accordion.collapseIcon)}}function P(n,s){if(1&n&&e.wR5(0,"span",11),2&n){const t=e.GaO(3);e.m8U(t.accordion.expandIcon),e.E7m("ngClass",t.iconClass),e.e48("aria-hidden",!0)}}function z(n,s){if(1&n&&e.wR5(0,"ChevronRightIcon",11),2&n){const t=e.GaO(3);e.E7m("ngClass",t.iconClass),e.e48("aria-hidden",!0)}}function N(n,s){if(1&n&&(e.SAx(0),e.yuY(1,P,1,4,"span",9)(2,z,1,2,"ChevronRightIcon",10),e.k70()),2&n){const t=e.GaO(2);e.yG2(),e.E7m("ngIf",t.accordion.expandIcon),e.yG2(),e.E7m("ngIf",!t.accordion.expandIcon)}}function G(n,s){if(1&n&&(e.SAx(0),e.yuY(1,I,3,2,"ng-container",3)(2,N,3,2,"ng-container",3),e.k70()),2&n){const t=e.GaO();e.yG2(),e.E7m("ngIf",t.selected),e.yG2(),e.E7m("ngIf",!t.selected)}}function D(n,s){}function d(n,s){1&n&&e.yuY(0,D,0,0,"ng-template")}function v(n,s){if(1&n&&(e.I0R(0,"span",12),e.OEk(1),e.C$Y()),2&n){const t=e.GaO();e.yG2(),e.oRS(" ",t.header," ")}}function m(n,s){1&n&&e.C_f(0)}function T(n,s){1&n&&e._Xx(0,1,["*ngIf","hasHeaderFacet"])}function k(n,s){1&n&&e.C_f(0)}function F(n,s){if(1&n&&(e.SAx(0),e.yuY(1,k,1,0,"ng-container",6),e.k70()),2&n){const t=e.GaO();e.yG2(),e.E7m("ngTemplateOutlet",t.contentTemplate)}}const R=["*",[["p-header"]]],L=n=>({$implicit:n}),U=n=>({transitionParams:n}),Y=n=>({value:"visible",params:n}),B=n=>({value:"hidden",params:n}),Q=["*","p-header"],$=["*"];let K=(()=>{class n{el;changeDetector;id;header;headerStyle;tabStyle;contentStyle;tabStyleClass;headerStyleClass;contentStyleClass;disabled;cache=!0;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";iconPos="start";get selected(){return this._selected}set selected(t){this._selected=t,this.loaded||(this._selected&&this.cache&&(this.loaded=!0),this.changeDetector.detectChanges())}headerAriaLevel=2;selectedChange=new e._w7;headerFacet;templates;_selected=!1;get iconClass(){return"end"===this.iconPos?"p-accordion-toggle-icon-end":"p-accordion-toggle-icon"}contentTemplate;headerTemplate;iconTemplate;loaded=!1;accordion;constructor(t,o,l){this.el=o,this.changeDetector=l,this.accordion=t,this.id=(0,S.Oc)()}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":default:this.contentTemplate=t.template;break;case"header":this.headerTemplate=t.template;break;case"icon":this.iconTemplate=t.template}})}toggle(t){if(this.disabled)return!1;let o=this.findTabIndex();if(this.selected)this.selected=!1,this.accordion.onClose.emit({originalEvent:t,index:o});else{if(!this.accordion.multiple)for(var l=0;l<this.accordion.tabs.length;l++)this.accordion.tabs[l].selected&&(this.accordion.tabs[l].selected=!1,this.accordion.tabs[l].selectedChange.emit(!1),this.accordion.tabs[l].changeDetector.markForCheck());this.selected=!0,this.loaded=!0,this.accordion.onOpen.emit({originalEvent:t,index:o})}this.selectedChange.emit(this.selected),this.accordion.updateActiveIndex(),this.changeDetector.markForCheck(),t?.preventDefault()}findTabIndex(){let t=-1;for(var o=0;o<this.accordion.tabs.length;o++)if(this.accordion.tabs[o]==this){t=o;break}return t}get hasHeaderFacet(){return this.headerFacet&&this.headerFacet.length>0}onKeydown(t){switch(t.code){case"Enter":case"Space":this.toggle(t),t.preventDefault()}}getTabHeaderActionId(t){return`${t}_header_action`}getTabContentId(t){return`${t}_content`}ngOnDestroy(){this.accordion.tabs.splice(this.findTabIndex(),1)}static \u0275fac=function(o){return new(o||n)(e.GI1((0,e.wd)(()=>c)),e.GI1(e.GMv),e.GI1(e.kD9))};static \u0275cmp=e.In1({type:n,selectors:[["p-accordionTab"]],contentQueries:function(o,l,h){if(1&o&&(e.szK(h,b.ek,4),e.szK(h,b.U3,4)),2&o){let i;e.wto(i=e.Gqi())&&(l.headerFacet=i),e.wto(i=e.Gqi())&&(l.templates=i)}},hostAttrs:[1,"p-element"],inputs:{id:"id",header:"header",headerStyle:"headerStyle",tabStyle:"tabStyle",contentStyle:"contentStyle",tabStyleClass:"tabStyleClass",headerStyleClass:"headerStyleClass",contentStyleClass:"contentStyleClass",disabled:"disabled",cache:"cache",transitionOptions:"transitionOptions",iconPos:"iconPos",selected:"selected",headerAriaLevel:"headerAriaLevel"},outputs:{selectedChange:"selectedChange"},ngContentSelectors:Q,decls:12,vars:45,consts:[[1,"p-accordion-tab",3,"ngClass","ngStyle"],["role","heading",1,"p-accordion-header"],["role","button",1,"p-accordion-header-link",3,"ngClass","click","keydown"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-accordion-header-text",4,"ngIf"],[4,"ngTemplateOutlet"],["role","region",1,"p-toggleable-content"],[1,"p-accordion-content",3,"ngClass","ngStyle"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-accordion-header-text"]],template:function(o,l){1&o&&(e.kPM(R),e.I0R(0,"div",0)(1,"div",1)(2,"a",2),e.qCj("click",function(i){return l.toggle(i)})("keydown",function(i){return l.onKeydown(i)}),e.yuY(3,G,3,2,"ng-container",3)(4,d,1,0,null,4)(5,v,2,1,"span",5)(6,m,1,0,"ng-container",6)(7,T,1,0,"ng-content",3),e.C$Y()(),e.I0R(8,"div",7)(9,"div",8),e._Xx(10),e.yuY(11,F,2,1,"ng-container",3),e.C$Y()()()),2&o&&(e.eAK("p-accordion-tab-active",l.selected),e.E7m("ngClass",l.tabStyleClass)("ngStyle",l.tabStyle),e.e48("data-pc-name","accordiontab"),e.yG2(),e.eAK("p-highlight",l.selected)("p-disabled",l.disabled),e.e48("aria-level",l.headerAriaLevel)("data-p-disabled",l.disabled)("data-pc-section","header"),e.yG2(),e.m_g(l.headerStyle),e.E7m("ngClass",l.headerStyleClass),e.e48("tabindex",l.disabled?null:0)("id",l.getTabHeaderActionId(l.id))("aria-controls",l.getTabContentId(l.id))("aria-expanded",l.selected)("aria-disabled",l.disabled)("data-pc-section","headeraction"),e.yG2(),e.E7m("ngIf",!l.iconTemplate),e.yG2(),e.E7m("ngTemplateOutlet",l.iconTemplate)("ngTemplateOutletContext",e.S45(35,L,l.selected)),e.yG2(),e.E7m("ngIf",!l.hasHeaderFacet),e.yG2(),e.E7m("ngTemplateOutlet",l.headerTemplate),e.yG2(),e.E7m("ngIf",l.hasHeaderFacet),e.yG2(),e.E7m("@tabContent",l.selected?e.S45(39,Y,e.S45(37,U,l.transitionOptions)):e.S45(43,B,e.S45(41,U,l.transitionOptions))),e.e48("id",l.getTabContentId(l.id))("aria-hidden",!l.selected)("aria-labelledby",l.getTabHeaderActionId(l.id))("data-pc-section","toggleablecontent"),e.yG2(),e.E7m("ngClass",l.contentStyleClass)("ngStyle",l.contentStyle),e.yG2(2),e.E7m("ngIf",l.contentTemplate&&(l.cache?l.loaded:l.selected)))},dependencies:()=>[f.QF,f.u_,f.XV,f.Qt,O.Q,E.w],styles:["@layer primeng{.p-accordion-header-link{cursor:pointer;display:flex;align-items:center;-webkit-user-select:none;user-select:none;position:relative;text-decoration:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}.p-accordion .p-toggleable-content{overflow:hidden}.p-accordion .p-accordion-tab-active>.p-toggleable-content:not(.ng-animating){overflow:inherit}.p-accordion-toggle-icon-end{order:1;margin-left:auto}.p-accordion-toggle-icon{order:0}}\n"],encapsulation:2,data:{animation:[(0,g.gV)("tabContent",[(0,g.K2)("hidden",(0,g.wb)({height:"0",visibility:"hidden"})),(0,g.K2)("visible",(0,g.wb)({height:"*",visibility:"visible"})),(0,g.aK)("visible <=> hidden",[(0,g.Cs)("{{transitionParams}}")]),(0,g.aK)("void => *",(0,g.Cs)(0))])]},changeDetection:0})}return n})(),c=(()=>{class n{el;changeDetector;multiple=!1;style;styleClass;expandIcon;collapseIcon;get activeIndex(){return this._activeIndex}set activeIndex(t){this._activeIndex=t,this.preventActiveIndexPropagation?this.preventActiveIndexPropagation=!1:this.updateSelectionState()}selectOnFocus=!1;get headerAriaLevel(){return this._headerAriaLevel}set headerAriaLevel(t){"number"==typeof t&&t>0?this._headerAriaLevel=t:2!==this._headerAriaLevel&&(this._headerAriaLevel=2)}onClose=new e._w7;onOpen=new e._w7;activeIndexChange=new e._w7;tabList;tabListSubscription=null;_activeIndex;_headerAriaLevel=2;preventActiveIndexPropagation=!1;tabs=[];constructor(t,o){this.el=t,this.changeDetector=o}onKeydown(t){switch(t.code){case"ArrowDown":this.onTabArrowDownKey(t);break;case"ArrowUp":this.onTabArrowUpKey(t);break;case"Home":t.shiftKey||this.onTabHomeKey(t);break;case"End":t.shiftKey||this.onTabEndKey(t)}}onTabArrowDownKey(t){const o=this.findNextHeaderAction(t.target.parentElement.parentElement.parentElement);o?this.changeFocusedTab(o):this.onTabHomeKey(t),t.preventDefault()}onTabArrowUpKey(t){const o=this.findPrevHeaderAction(t.target.parentElement.parentElement.parentElement);o?this.changeFocusedTab(o):this.onTabEndKey(t),t.preventDefault()}onTabHomeKey(t){const o=this.findFirstHeaderAction();this.changeFocusedTab(o),t.preventDefault()}changeFocusedTab(t){t&&(y.k.focus(t),this.selectOnFocus&&this.tabs.forEach((o,l)=>{let h=this.multiple?this._activeIndex.includes(l):l===this._activeIndex;this.multiple?(this._activeIndex||(this._activeIndex=[]),o.id==t.id&&(o.selected=!o.selected,this._activeIndex.includes(l)?this._activeIndex=this._activeIndex.filter(i=>i!==l):this._activeIndex.push(l))):o.id==t.id?(o.selected=!o.selected,this._activeIndex=l):o.selected=!1,o.selectedChange.emit(h),this.activeIndexChange.emit(this._activeIndex),o.changeDetector.markForCheck()}))}findNextHeaderAction(t,o=!1){const h=y.k.findSingle(o?t:t.nextElementSibling,'[data-pc-section="header"]');return h?y.k.getAttribute(h,"data-p-disabled")?this.findNextHeaderAction(h.parentElement.parentElement):y.k.findSingle(h,'[data-pc-section="headeraction"]'):null}findPrevHeaderAction(t,o=!1){const h=y.k.findSingle(o?t:t.previousElementSibling,'[data-pc-section="header"]');return h?y.k.getAttribute(h,"data-p-disabled")?this.findPrevHeaderAction(h.parentElement.parentElement):y.k.findSingle(h,'[data-pc-section="headeraction"]'):null}findFirstHeaderAction(){return this.findNextHeaderAction(this.el.nativeElement.firstElementChild.childNodes[0],!0)}findLastHeaderAction(){const t=this.el.nativeElement.firstElementChild.childNodes;return this.findPrevHeaderAction(t[t.length-1],!0)}onTabEndKey(t){const o=this.findLastHeaderAction();this.changeFocusedTab(o),t.preventDefault()}ngAfterContentInit(){this.initTabs(),this.tabListSubscription=this.tabList.changes.subscribe(t=>{this.initTabs()})}initTabs(){this.tabs=this.tabList.toArray(),this.tabs.forEach(t=>{t.headerAriaLevel=this._headerAriaLevel}),this.updateSelectionState(),this.changeDetector.markForCheck()}getBlockableElement(){return this.el.nativeElement.children[0]}updateSelectionState(){if(this.tabs&&this.tabs.length&&null!=this._activeIndex)for(let t=0;t<this.tabs.length;t++){let o=this.multiple?this._activeIndex.includes(t):t===this._activeIndex;o!==this.tabs[t].selected&&(this.tabs[t].selected=o,this.tabs[t].selectedChange.emit(o),this.tabs[t].changeDetector.markForCheck())}}isTabActive(t){return this.multiple?this._activeIndex&&this._activeIndex.includes(t):this._activeIndex===t}getTabProp(t,o){return t.props?t.props[o]:void 0}updateActiveIndex(){let t=this.multiple?[]:null;this.tabs.forEach((o,l)=>{if(o.selected){if(!this.multiple)return void(t=l);t.push(l)}}),this.preventActiveIndexPropagation=!0,this.activeIndexChange.emit(t)}ngOnDestroy(){this.tabListSubscription&&this.tabListSubscription.unsubscribe()}static \u0275fac=function(o){return new(o||n)(e.GI1(e.GMv),e.GI1(e.kD9))};static \u0275cmp=e.In1({type:n,selectors:[["p-accordion"]],contentQueries:function(o,l,h){if(1&o&&e.szK(h,K,5),2&o){let i;e.wto(i=e.Gqi())&&(l.tabList=i)}},hostAttrs:[1,"p-element"],hostBindings:function(o,l){1&o&&e.qCj("keydown",function(i){return l.onKeydown(i)})},inputs:{multiple:"multiple",style:"style",styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",activeIndex:"activeIndex",selectOnFocus:"selectOnFocus",headerAriaLevel:"headerAriaLevel"},outputs:{onClose:"onClose",onOpen:"onOpen",activeIndexChange:"activeIndexChange"},ngContentSelectors:$,decls:2,vars:4,consts:[[3,"ngClass","ngStyle"]],template:function(o,l){1&o&&(e.kPM(),e.I0R(0,"div",0),e._Xx(1),e.C$Y()),2&o&&(e.m8U(l.styleClass),e.E7m("ngClass","p-accordion p-component")("ngStyle",l.style))},dependencies:[f.QF,f.Qt],encapsulation:2,changeDetection:0})}return n})(),_=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=e.a4G({type:n});static \u0275inj=e.s3X({imports:[f.MD,O.Q,E.w,b.kT]})}return n})()},9216:(j,A,p)=>{p.d(A,{W:()=>D});var g=p(1368),f=p(4496),e=p(7564);let D=(()=>{class d{static \u0275fac=function(T){return new(T||d)};static \u0275mod=f.a4G({type:d});static \u0275inj=f.s3X({imports:[g.MD,e.kT]})}return d})()},9772:(j,A,p)=>{p.d(A,{Q1:()=>K});var g=p(1368),f=p(4496),e=p(7564),b=p(2452),y=p(6232);let K=(()=>{class c{static \u0275fac=function(s){return new(s||c)};static \u0275mod=f.a4G({type:c});static \u0275inj=f.s3X({imports:[g.MD,b.w,y.I,e.kT,e.kT]})}return c})()},9480:(j,A,p)=>{p.d(A,{s:()=>l,Y:()=>h});var g=p(9684),f=p(1368),e=p(4496),b=p(7564),y=p(7200);let E=(()=>{class i extends y.m{static \u0275fac=(()=>{let a;return function(r){return(a||(a=e.otF(i)))(r||i)}})();static \u0275cmp=e.In1({type:i,selectors:[["MinusIcon"]],standalone:!0,features:[e.eg9,e.UHJ],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(C,r){1&C&&(e.S2Z(),e.I0R(0,"svg",0),e.wR5(1,"path",1),e.C$Y()),2&C&&(e.m8U(r.getClassNames()),e.e48("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},dependencies:[f.MD],encapsulation:2})}return i})();var O=p(4616);let S=(()=>{class i extends y.m{pathId;ngOnInit(){this.pathId="url(#"+(0,O.Oc)()+")"}static \u0275fac=(()=>{let a;return function(r){return(a||(a=e.otF(i)))(r||i)}})();static \u0275cmp=e.In1({type:i,selectors:[["PlusIcon"]],standalone:!0,features:[e.eg9,e.UHJ],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(C,r){1&C&&(e.S2Z(),e.I0R(0,"svg",0)(1,"g"),e.wR5(2,"path",1),e.C$Y(),e.I0R(3,"defs")(4,"clipPath",2),e.wR5(5,"rect",3),e.C$Y()()()),2&C&&(e.m8U(r.getClassNames()),e.e48("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),e.yG2(),e.e48("clip-path",r.pathId),e.yG2(3),e.E7m("id",r.pathId))},encapsulation:2})}return i})();var w=p(4520);function M(i,u){if(1&i&&(e.I0R(0,"span",10),e.OEk(1),e.C$Y()),2&i){const a=e.GaO(2);e.e48("id",a.id+"_header"),e.yG2(),e.cNF(a.header)}}function I(i,u){1&i&&e.C_f(0)}function P(i,u){}function z(i,u){1&i&&e.yuY(0,P,0,0,"ng-template")}function N(i,u){if(1&i&&e.wR5(0,"span",16),2&i){const a=e.GaO(5);e.m8U(a.expandIcon),e.E7m("ngClass",a.iconClass)}}function G(i,u){if(1&i&&e.wR5(0,"MinusIcon",17),2&i){const a=e.GaO(5);e.E7m("styleClass",a.iconClass)}}function D(i,u){if(1&i&&(e.SAx(0),e.yuY(1,N,1,3,"span",14)(2,G,1,1,"MinusIcon",15),e.k70()),2&i){const a=e.GaO(4);e.yG2(),e.E7m("ngIf",a.expandIcon),e.yG2(),e.E7m("ngIf",!a.expandIcon)}}function d(i,u){if(1&i&&e.wR5(0,"span",16),2&i){const a=e.GaO(5);e.m8U(a.collapseIcon),e.E7m("ngClass",a.iconClass)}}function v(i,u){if(1&i&&e.wR5(0,"PlusIcon",17),2&i){const a=e.GaO(5);e.E7m("styleClass",a.iconClass)}}function m(i,u){if(1&i&&(e.SAx(0),e.yuY(1,d,1,3,"span",14)(2,v,1,1,"PlusIcon",15),e.k70()),2&i){const a=e.GaO(4);e.yG2(),e.E7m("ngIf",a.collapseIcon),e.yG2(),e.E7m("ngIf",!a.collapseIcon)}}function T(i,u){if(1&i&&(e.SAx(0),e.yuY(1,D,3,2,"ng-container",12)(2,m,3,2,"ng-container",12),e.k70()),2&i){const a=e.GaO(3);e.yG2(),e.E7m("ngIf",!a.collapsed),e.yG2(),e.E7m("ngIf",a.collapsed)}}function k(i,u){}function F(i,u){1&i&&e.yuY(0,k,0,0,"ng-template")}const R=i=>({$implicit:i});function L(i,u){if(1&i){const a=e.KQA();e.I0R(0,"button",11),e.qCj("click",function(r){e.usT(a);const x=e.GaO(2);return e.CGJ(x.onIconClick(r))})("keydown",function(r){e.usT(a);const x=e.GaO(2);return e.CGJ(x.onKeyDown(r))}),e.yuY(1,T,3,2,"ng-container",12)(2,F,1,0,null,13),e.C$Y()}if(2&i){const a=e.GaO(2);e.e48("id",a.id+"_header")("aria-label",a.buttonAriaLabel)("aria-controls",a.id+"_content")("aria-expanded",!a.collapsed),e.yG2(),e.E7m("ngIf",!a.headerIconTemplate),e.yG2(),e.E7m("ngTemplateOutlet",a.headerIconTemplate)("ngTemplateOutletContext",e.S45(7,R,a.collapsed))}}const U=(i,u,a)=>({"p-panel-icons-start":i,"p-panel-icons-end":u,"p-panel-icons-center":a});function Y(i,u){if(1&i){const a=e.KQA();e.I0R(0,"div",6),e.qCj("click",function(r){e.usT(a);const x=e.GaO();return e.CGJ(x.onHeaderClick(r))}),e.yuY(1,M,2,2,"span",7),e._Xx(2,1),e.yuY(3,I,1,0,"ng-container",4),e.I0R(4,"div",8),e.yuY(5,z,1,0,null,4)(6,L,3,9,"button",9),e.C$Y()()}if(2&i){const a=e.GaO();e.e48("id",a.id+"-titlebar"),e.yG2(),e.E7m("ngIf",a.header),e.yG2(2),e.E7m("ngTemplateOutlet",a.headerTemplate),e.yG2(),e.E7m("ngClass",e.uAc(6,U,"start"===a.iconPos,"end"===a.iconPos,"center"===a.iconPos)),e.yG2(),e.E7m("ngTemplateOutlet",a.iconTemplate),e.yG2(),e.E7m("ngIf",a.toggleable)}}function B(i,u){1&i&&e.C_f(0)}function Q(i,u){1&i&&e.C_f(0)}function $(i,u){if(1&i&&(e.I0R(0,"div",18),e._Xx(1,2),e.yuY(2,Q,1,0,"ng-container",4),e.C$Y()),2&i){const a=e.GaO();e.yG2(2),e.E7m("ngTemplateOutlet",a.footerTemplate)}}const K=["*",[["p-header"]],[["p-footer"]]],c=(i,u)=>({"p-panel p-component":!0,"p-panel-toggleable":i,"p-panel-expanded":u}),_=i=>({transitionParams:i,height:"0",opacity:"0"}),n=i=>({value:"hidden",params:i}),s=i=>({transitionParams:i,height:"*",opacity:"1"}),t=i=>({value:"visible",params:i}),o=["*","p-header","p-footer"];let l=(()=>{class i{el;toggleable;header;collapsed;style;styleClass;iconPos="end";expandIcon;collapseIcon;showHeader=!0;toggler="icon";transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";collapsedChange=new e._w7;onBeforeToggle=new e._w7;onAfterToggle=new e._w7;footerFacet;templates;iconTemplate;animating;headerTemplate;contentTemplate;footerTemplate;headerIconTemplate;get id(){return(0,O.Oc)()}get buttonAriaLabel(){return this.header}constructor(a){this.el=a}ngAfterContentInit(){this.templates.forEach(a=>{switch(a.getType()){case"header":this.headerTemplate=a.template;break;case"content":default:this.contentTemplate=a.template;break;case"footer":this.footerTemplate=a.template;break;case"icons":this.iconTemplate=a.template;break;case"headericons":this.headerIconTemplate=a.template}})}onHeaderClick(a){"header"===this.toggler&&this.toggle(a)}onIconClick(a){"icon"===this.toggler&&this.toggle(a)}toggle(a){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:a,collapsed:this.collapsed}),this.toggleable&&(this.collapsed?this.expand():this.collapse()),a.preventDefault()}expand(){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onKeyDown(a){("Enter"===a.code||"Space"===a.code)&&(this.toggle(a),a.preventDefault())}onToggleDone(a){this.animating=!1,this.onAfterToggle.emit({originalEvent:a,collapsed:this.collapsed})}static \u0275fac=function(C){return new(C||i)(e.GI1(e.GMv))};static \u0275cmp=e.In1({type:i,selectors:[["p-panel"]],contentQueries:function(C,r,x){if(1&C&&(e.szK(x,b.Go,5),e.szK(x,b.U3,4)),2&C){let H;e.wto(H=e.Gqi())&&(r.footerFacet=H.first),e.wto(H=e.Gqi())&&(r.templates=H)}},hostAttrs:[1,"p-element"],inputs:{toggleable:"toggleable",header:"header",collapsed:"collapsed",style:"style",styleClass:"styleClass",iconPos:"iconPos",expandIcon:"expandIcon",collapseIcon:"collapseIcon",showHeader:"showHeader",toggler:"toggler",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},ngContentSelectors:o,decls:7,vars:25,consts:[[3,"ngClass","ngStyle"],["class","p-panel-header",3,"click",4,"ngIf"],["role","region",1,"p-toggleable-content",3,"id"],[1,"p-panel-content"],[4,"ngTemplateOutlet"],["class","p-panel-footer",4,"ngIf"],[1,"p-panel-header",3,"click"],["class","p-panel-title",4,"ngIf"],[1,"p-panel-icons",3,"ngClass"],["pRipple","","type","button","role","button","class","p-panel-header-icon p-panel-toggler p-link",3,"click","keydown",4,"ngIf"],[1,"p-panel-title"],["pRipple","","type","button","role","button",1,"p-panel-header-icon","p-panel-toggler","p-link",3,"click","keydown"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass",4,"ngIf"],[3,"styleClass",4,"ngIf"],[3,"ngClass"],[3,"styleClass"],[1,"p-panel-footer"]],template:function(C,r){1&C&&(e.kPM(K),e.I0R(0,"div",0),e.yuY(1,Y,7,10,"div",1),e.I0R(2,"div",2),e.qCj("@panelContent.done",function(H){return r.onToggleDone(H)}),e.I0R(3,"div",3),e._Xx(4),e.yuY(5,B,1,0,"ng-container",4),e.C$Y(),e.yuY(6,$,3,1,"div",5),e.C$Y()()),2&C&&(e.m8U(r.styleClass),e.E7m("ngClass",e.IBC(14,c,r.toggleable,!r.collapsed&&r.toggleable))("ngStyle",r.style),e.e48("id",r.id)("data-pc-name","panel"),e.yG2(),e.E7m("ngIf",r.showHeader),e.yG2(),e.E7m("id",r.id+"_content")("@panelContent",r.collapsed?e.S45(19,n,e.S45(17,_,r.animating?r.transitionOptions:"0ms")):e.S45(23,t,e.S45(21,s,r.animating?r.transitionOptions:"0ms"))),e.e48("aria-labelledby",r.id+"_header")("aria-hidden",r.collapsed)("tabindex",r.collapsed?"-1":void 0),e.yG2(3),e.E7m("ngTemplateOutlet",r.contentTemplate),e.yG2(),e.E7m("ngIf",r.footerFacet||r.footerTemplate))},dependencies:()=>[f.QF,f.u_,f.XV,f.Qt,w.I,S,E],styles:["@layer primeng{.p-panel-header{display:flex;align-items:center}.p-panel-title{line-height:1;order:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-panel-toggleable.p-panel-expanded>.p-toggleable-content:not(.ng-animating){overflow:visible}.p-panel-toggleable .p-toggleable-content{overflow:hidden}}\n"],encapsulation:2,data:{animation:[(0,g.gV)("panelContent",[(0,g.K2)("hidden",(0,g.wb)({height:"0"})),(0,g.K2)("void",(0,g.wb)({height:"{{height}}"}),{params:{height:"0"}}),(0,g.K2)("visible",(0,g.wb)({height:"*"})),(0,g.aK)("visible <=> hidden",[(0,g.Cs)("{{transitionParams}}")]),(0,g.aK)("void => hidden",(0,g.Cs)("{{transitionParams}}")),(0,g.aK)("void => visible",(0,g.Cs)("{{transitionParams}}"))])]},changeDetection:0})}return i})(),h=(()=>{class i{static \u0275fac=function(C){return new(C||i)};static \u0275mod=e.a4G({type:i});static \u0275inj=e.s3X({imports:[f.MD,b.kT,w.c,S,E,b.kT]})}return i})()}}]);