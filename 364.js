"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[364],{5389:(Y,w,p)=>{p.d(w,{UQ:()=>c,US:()=>B,fx:()=>_});var g=p(6825),f=p(6814),e=p(9212),T=p(5219),x=p(2076),O=p(6005),E=p(4562),S=p(2332);function A(n,s){if(1&n&&e._UZ(0,"span",11),2&n){const t=e.oxw(3);e.Tol(t.accordion.collapseIcon),e.Q6J("ngClass",t.iconClass),e.uIk("aria-hidden",!0)}}function D(n,s){if(1&n&&e._UZ(0,"ChevronDownIcon",11),2&n){const t=e.oxw(3);e.Q6J("ngClass",t.iconClass),e.uIk("aria-hidden",!0)}}function y(n,s){if(1&n&&(e.ynx(0),e.YNc(1,A,1,4,"span",9)(2,D,1,2,"ChevronDownIcon",10),e.BQk()),2&n){const t=e.oxw(2);e.xp6(),e.Q6J("ngIf",t.accordion.collapseIcon),e.xp6(),e.Q6J("ngIf",!t.accordion.collapseIcon)}}function P(n,s){if(1&n&&e._UZ(0,"span",11),2&n){const t=e.oxw(3);e.Tol(t.accordion.expandIcon),e.Q6J("ngClass",t.iconClass),e.uIk("aria-hidden",!0)}}function z(n,s){if(1&n&&e._UZ(0,"ChevronRightIcon",11),2&n){const t=e.oxw(3);e.Q6J("ngClass",t.iconClass),e.uIk("aria-hidden",!0)}}function M(n,s){if(1&n&&(e.ynx(0),e.YNc(1,P,1,4,"span",9)(2,z,1,2,"ChevronRightIcon",10),e.BQk()),2&n){const t=e.oxw(2);e.xp6(),e.Q6J("ngIf",t.accordion.expandIcon),e.xp6(),e.Q6J("ngIf",!t.accordion.expandIcon)}}function F(n,s){if(1&n&&(e.ynx(0),e.YNc(1,y,3,2,"ng-container",3)(2,M,3,2,"ng-container",3),e.BQk()),2&n){const t=e.oxw();e.xp6(),e.Q6J("ngIf",t.selected),e.xp6(),e.Q6J("ngIf",!t.selected)}}function k(n,s){}function d(n,s){1&n&&e.YNc(0,k,0,0,"ng-template")}function C(n,s){if(1&n&&(e.TgZ(0,"span",12),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(),e.hij(" ",t.header," ")}}function u(n,s){1&n&&e.GkF(0)}function b(n,s){1&n&&e.Hsn(0,1,["*ngIf","hasHeaderFacet"])}function N(n,s){1&n&&e.GkF(0)}function Q(n,s){if(1&n&&(e.ynx(0),e.YNc(1,N,1,0,"ng-container",6),e.BQk()),2&n){const t=e.oxw();e.xp6(),e.Q6J("ngTemplateOutlet",t.contentTemplate)}}const H=["*",[["p-header"]]],K=n=>({$implicit:n}),L=n=>({transitionParams:n}),U=n=>({value:"visible",params:n}),Z=n=>({value:"hidden",params:n}),R=["*","p-header"],j=["*"];let B=(()=>{class n{el;changeDetector;id;header;headerStyle;tabStyle;contentStyle;tabStyleClass;headerStyleClass;contentStyleClass;disabled;cache=!0;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";iconPos="start";get selected(){return this._selected}set selected(t){this._selected=t,this.loaded||(this._selected&&this.cache&&(this.loaded=!0),this.changeDetector.detectChanges())}headerAriaLevel=2;selectedChange=new e.vpe;headerFacet;templates;_selected=!1;get iconClass(){return"end"===this.iconPos?"p-accordion-toggle-icon-end":"p-accordion-toggle-icon"}contentTemplate;headerTemplate;iconTemplate;loaded=!1;accordion;constructor(t,o,l){this.el=o,this.changeDetector=l,this.accordion=t,this.id=(0,S.Th)()}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":default:this.contentTemplate=t.template;break;case"header":this.headerTemplate=t.template;break;case"icon":this.iconTemplate=t.template}})}toggle(t){if(this.disabled)return!1;let o=this.findTabIndex();if(this.selected)this.selected=!1,this.accordion.onClose.emit({originalEvent:t,index:o});else{if(!this.accordion.multiple)for(var l=0;l<this.accordion.tabs.length;l++)this.accordion.tabs[l].selected&&(this.accordion.tabs[l].selected=!1,this.accordion.tabs[l].selectedChange.emit(!1),this.accordion.tabs[l].changeDetector.markForCheck());this.selected=!0,this.loaded=!0,this.accordion.onOpen.emit({originalEvent:t,index:o})}this.selectedChange.emit(this.selected),this.accordion.updateActiveIndex(),this.changeDetector.markForCheck(),t?.preventDefault()}findTabIndex(){let t=-1;for(var o=0;o<this.accordion.tabs.length;o++)if(this.accordion.tabs[o]==this){t=o;break}return t}get hasHeaderFacet(){return this.headerFacet&&this.headerFacet.length>0}onKeydown(t){switch(t.code){case"Enter":case"Space":this.toggle(t),t.preventDefault()}}getTabHeaderActionId(t){return`${t}_header_action`}getTabContentId(t){return`${t}_content`}ngOnDestroy(){this.accordion.tabs.splice(this.findTabIndex(),1)}static \u0275fac=function(o){return new(o||n)(e.Y36((0,e.Gpc)(()=>c)),e.Y36(e.SBq),e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:n,selectors:[["p-accordionTab"]],contentQueries:function(o,l,h){if(1&o&&(e.Suo(h,T.h4,4),e.Suo(h,T.jx,4)),2&o){let i;e.iGM(i=e.CRH())&&(l.headerFacet=i),e.iGM(i=e.CRH())&&(l.templates=i)}},hostAttrs:[1,"p-element"],inputs:{id:"id",header:"header",headerStyle:"headerStyle",tabStyle:"tabStyle",contentStyle:"contentStyle",tabStyleClass:"tabStyleClass",headerStyleClass:"headerStyleClass",contentStyleClass:"contentStyleClass",disabled:"disabled",cache:"cache",transitionOptions:"transitionOptions",iconPos:"iconPos",selected:"selected",headerAriaLevel:"headerAriaLevel"},outputs:{selectedChange:"selectedChange"},ngContentSelectors:R,decls:12,vars:45,consts:[[1,"p-accordion-tab",3,"ngClass","ngStyle"],["role","heading",1,"p-accordion-header"],["role","button",1,"p-accordion-header-link",3,"ngClass","click","keydown"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-accordion-header-text",4,"ngIf"],[4,"ngTemplateOutlet"],["role","region",1,"p-toggleable-content"],[1,"p-accordion-content",3,"ngClass","ngStyle"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-accordion-header-text"]],template:function(o,l){1&o&&(e.F$t(H),e.TgZ(0,"div",0)(1,"div",1)(2,"a",2),e.NdJ("click",function(i){return l.toggle(i)})("keydown",function(i){return l.onKeydown(i)}),e.YNc(3,F,3,2,"ng-container",3)(4,d,1,0,null,4)(5,C,2,1,"span",5)(6,u,1,0,"ng-container",6)(7,b,1,0,"ng-content",3),e.qZA()(),e.TgZ(8,"div",7)(9,"div",8),e.Hsn(10),e.YNc(11,Q,2,1,"ng-container",3),e.qZA()()()),2&o&&(e.ekj("p-accordion-tab-active",l.selected),e.Q6J("ngClass",l.tabStyleClass)("ngStyle",l.tabStyle),e.uIk("data-pc-name","accordiontab"),e.xp6(),e.ekj("p-highlight",l.selected)("p-disabled",l.disabled),e.uIk("aria-level",l.headerAriaLevel)("data-p-disabled",l.disabled)("data-pc-section","header"),e.xp6(),e.Akn(l.headerStyle),e.Q6J("ngClass",l.headerStyleClass),e.uIk("tabindex",l.disabled?null:0)("id",l.getTabHeaderActionId(l.id))("aria-controls",l.getTabContentId(l.id))("aria-expanded",l.selected)("aria-disabled",l.disabled)("data-pc-section","headeraction"),e.xp6(),e.Q6J("ngIf",!l.iconTemplate),e.xp6(),e.Q6J("ngTemplateOutlet",l.iconTemplate)("ngTemplateOutletContext",e.VKq(35,K,l.selected)),e.xp6(),e.Q6J("ngIf",!l.hasHeaderFacet),e.xp6(),e.Q6J("ngTemplateOutlet",l.headerTemplate),e.xp6(),e.Q6J("ngIf",l.hasHeaderFacet),e.xp6(),e.Q6J("@tabContent",l.selected?e.VKq(39,U,e.VKq(37,L,l.transitionOptions)):e.VKq(43,Z,e.VKq(41,L,l.transitionOptions))),e.uIk("id",l.getTabContentId(l.id))("aria-hidden",!l.selected)("aria-labelledby",l.getTabHeaderActionId(l.id))("data-pc-section","toggleablecontent"),e.xp6(),e.Q6J("ngClass",l.contentStyleClass)("ngStyle",l.contentStyle),e.xp6(2),e.Q6J("ngIf",l.contentTemplate&&(l.cache?l.loaded:l.selected)))},dependencies:()=>[f.mk,f.O5,f.tP,f.PC,E.X,O.v],styles:["@layer primeng{.p-accordion-header-link{cursor:pointer;display:flex;align-items:center;-webkit-user-select:none;user-select:none;position:relative;text-decoration:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}.p-accordion .p-toggleable-content{overflow:hidden}.p-accordion .p-accordion-tab-active>.p-toggleable-content:not(.ng-animating){overflow:inherit}.p-accordion-toggle-icon-end{order:1;margin-left:auto}.p-accordion-toggle-icon{order:0}}\n"],encapsulation:2,data:{animation:[(0,g.X$)("tabContent",[(0,g.SB)("hidden",(0,g.oB)({height:"0",visibility:"hidden"})),(0,g.SB)("visible",(0,g.oB)({height:"*",visibility:"visible"})),(0,g.eR)("visible <=> hidden",[(0,g.jt)("{{transitionParams}}")]),(0,g.eR)("void => *",(0,g.jt)(0))])]},changeDetection:0})}return n})(),c=(()=>{class n{el;changeDetector;multiple=!1;style;styleClass;expandIcon;collapseIcon;get activeIndex(){return this._activeIndex}set activeIndex(t){this._activeIndex=t,this.preventActiveIndexPropagation?this.preventActiveIndexPropagation=!1:this.updateSelectionState()}selectOnFocus=!1;get headerAriaLevel(){return this._headerAriaLevel}set headerAriaLevel(t){"number"==typeof t&&t>0?this._headerAriaLevel=t:2!==this._headerAriaLevel&&(this._headerAriaLevel=2)}onClose=new e.vpe;onOpen=new e.vpe;activeIndexChange=new e.vpe;tabList;tabListSubscription=null;_activeIndex;_headerAriaLevel=2;preventActiveIndexPropagation=!1;tabs=[];constructor(t,o){this.el=t,this.changeDetector=o}onKeydown(t){switch(t.code){case"ArrowDown":this.onTabArrowDownKey(t);break;case"ArrowUp":this.onTabArrowUpKey(t);break;case"Home":t.shiftKey||this.onTabHomeKey(t);break;case"End":t.shiftKey||this.onTabEndKey(t)}}onTabArrowDownKey(t){const o=this.findNextHeaderAction(t.target.parentElement.parentElement.parentElement);o?this.changeFocusedTab(o):this.onTabHomeKey(t),t.preventDefault()}onTabArrowUpKey(t){const o=this.findPrevHeaderAction(t.target.parentElement.parentElement.parentElement);o?this.changeFocusedTab(o):this.onTabEndKey(t),t.preventDefault()}onTabHomeKey(t){const o=this.findFirstHeaderAction();this.changeFocusedTab(o),t.preventDefault()}changeFocusedTab(t){t&&(x.p.focus(t),this.selectOnFocus&&this.tabs.forEach((o,l)=>{let h=this.multiple?this._activeIndex.includes(l):l===this._activeIndex;this.multiple?(this._activeIndex||(this._activeIndex=[]),o.id==t.id&&(o.selected=!o.selected,this._activeIndex.includes(l)?this._activeIndex=this._activeIndex.filter(i=>i!==l):this._activeIndex.push(l))):o.id==t.id?(o.selected=!o.selected,this._activeIndex=l):o.selected=!1,o.selectedChange.emit(h),this.activeIndexChange.emit(this._activeIndex),o.changeDetector.markForCheck()}))}findNextHeaderAction(t,o=!1){const h=x.p.findSingle(o?t:t.nextElementSibling,'[data-pc-section="header"]');return h?x.p.getAttribute(h,"data-p-disabled")?this.findNextHeaderAction(h.parentElement.parentElement):x.p.findSingle(h,'[data-pc-section="headeraction"]'):null}findPrevHeaderAction(t,o=!1){const h=x.p.findSingle(o?t:t.previousElementSibling,'[data-pc-section="header"]');return h?x.p.getAttribute(h,"data-p-disabled")?this.findPrevHeaderAction(h.parentElement.parentElement):x.p.findSingle(h,'[data-pc-section="headeraction"]'):null}findFirstHeaderAction(){return this.findNextHeaderAction(this.el.nativeElement.firstElementChild.childNodes[0],!0)}findLastHeaderAction(){const t=this.el.nativeElement.firstElementChild.childNodes;return this.findPrevHeaderAction(t[t.length-1],!0)}onTabEndKey(t){const o=this.findLastHeaderAction();this.changeFocusedTab(o),t.preventDefault()}ngAfterContentInit(){this.initTabs(),this.tabListSubscription=this.tabList.changes.subscribe(t=>{this.initTabs()})}initTabs(){this.tabs=this.tabList.toArray(),this.tabs.forEach(t=>{t.headerAriaLevel=this._headerAriaLevel}),this.updateSelectionState(),this.changeDetector.markForCheck()}getBlockableElement(){return this.el.nativeElement.children[0]}updateSelectionState(){if(this.tabs&&this.tabs.length&&null!=this._activeIndex)for(let t=0;t<this.tabs.length;t++){let o=this.multiple?this._activeIndex.includes(t):t===this._activeIndex;o!==this.tabs[t].selected&&(this.tabs[t].selected=o,this.tabs[t].selectedChange.emit(o),this.tabs[t].changeDetector.markForCheck())}}isTabActive(t){return this.multiple?this._activeIndex&&this._activeIndex.includes(t):this._activeIndex===t}getTabProp(t,o){return t.props?t.props[o]:void 0}updateActiveIndex(){let t=this.multiple?[]:null;this.tabs.forEach((o,l)=>{if(o.selected){if(!this.multiple)return void(t=l);t.push(l)}}),this.preventActiveIndexPropagation=!0,this.activeIndexChange.emit(t)}ngOnDestroy(){this.tabListSubscription&&this.tabListSubscription.unsubscribe()}static \u0275fac=function(o){return new(o||n)(e.Y36(e.SBq),e.Y36(e.sBO))};static \u0275cmp=e.Xpm({type:n,selectors:[["p-accordion"]],contentQueries:function(o,l,h){if(1&o&&e.Suo(h,B,5),2&o){let i;e.iGM(i=e.CRH())&&(l.tabList=i)}},hostAttrs:[1,"p-element"],hostBindings:function(o,l){1&o&&e.NdJ("keydown",function(i){return l.onKeydown(i)})},inputs:{multiple:"multiple",style:"style",styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",activeIndex:"activeIndex",selectOnFocus:"selectOnFocus",headerAriaLevel:"headerAriaLevel"},outputs:{onClose:"onClose",onOpen:"onOpen",activeIndexChange:"activeIndexChange"},ngContentSelectors:j,decls:2,vars:4,consts:[[3,"ngClass","ngStyle"]],template:function(o,l){1&o&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA()),2&o&&(e.Tol(l.styleClass),e.Q6J("ngClass","p-accordion p-component")("ngStyle",l.style))},dependencies:[f.mk,f.PC],encapsulation:2,changeDetection:0})}return n})(),_=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=e.oAB({type:n});static \u0275inj=e.cJS({imports:[f.ez,E.X,O.v,T.m8]})}return n})()},4532:(Y,w,p)=>{p.d(w,{d:()=>k});var g=p(6814),f=p(9212),e=p(5219);let k=(()=>{class d{static \u0275fac=function(b){return new(b||d)};static \u0275mod=f.oAB({type:d});static \u0275inj=f.cJS({imports:[g.ez,e.m8]})}return d})()},6748:(Y,w,p)=>{p.d(w,{lC:()=>B});var g=p(6814),f=p(9212),e=p(5219),T=p(6005),x=p(5837);let B=(()=>{class c{static \u0275fac=function(s){return new(s||c)};static \u0275mod=f.oAB({type:c});static \u0275inj=f.cJS({imports:[g.ez,T.v,x.g,e.m8,e.m8]})}return c})()},9445:(Y,w,p)=>{p.d(w,{s:()=>l,Q:()=>h});var g=p(6825),f=p(6814),e=p(9212),T=p(5219),x=p(4713);let O=(()=>{class i extends x.s{static \u0275fac=(()=>{let a;return function(r){return(a||(a=e.n5z(i)))(r||i)}})();static \u0275cmp=e.Xpm({type:i,selectors:[["MinusIcon"]],standalone:!0,features:[e.qOj,e.jDz],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(v,r){1&v&&(e.O4$(),e.TgZ(0,"svg",0),e._UZ(1,"path",1),e.qZA()),2&v&&(e.Tol(r.getClassNames()),e.uIk("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role))},dependencies:[f.ez],encapsulation:2})}return i})();var E=p(2332);let S=(()=>{class i extends x.s{pathId;ngOnInit(){this.pathId="url(#"+(0,E.Th)()+")"}static \u0275fac=(()=>{let a;return function(r){return(a||(a=e.n5z(i)))(r||i)}})();static \u0275cmp=e.Xpm({type:i,selectors:[["PlusIcon"]],standalone:!0,features:[e.qOj,e.jDz],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(v,r){1&v&&(e.O4$(),e.TgZ(0,"svg",0)(1,"g"),e._UZ(2,"path",1),e.qZA(),e.TgZ(3,"defs")(4,"clipPath",2),e._UZ(5,"rect",3),e.qZA()()()),2&v&&(e.Tol(r.getClassNames()),e.uIk("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),e.xp6(),e.uIk("clip-path",r.pathId),e.xp6(3),e.Q6J("id",r.pathId))},encapsulation:2})}return i})();var A=p(4480);function D(i,m){if(1&i&&(e.TgZ(0,"span",10),e._uU(1),e.qZA()),2&i){const a=e.oxw(2);e.uIk("id",a.id+"_header"),e.xp6(),e.Oqu(a.header)}}function y(i,m){1&i&&e.GkF(0)}function P(i,m){}function z(i,m){1&i&&e.YNc(0,P,0,0,"ng-template")}function M(i,m){if(1&i&&e._UZ(0,"span",16),2&i){const a=e.oxw(5);e.Tol(a.expandIcon),e.Q6J("ngClass",a.iconClass)}}function F(i,m){if(1&i&&e._UZ(0,"MinusIcon",17),2&i){const a=e.oxw(5);e.Q6J("styleClass",a.iconClass)}}function k(i,m){if(1&i&&(e.ynx(0),e.YNc(1,M,1,3,"span",14)(2,F,1,1,"MinusIcon",15),e.BQk()),2&i){const a=e.oxw(4);e.xp6(),e.Q6J("ngIf",a.expandIcon),e.xp6(),e.Q6J("ngIf",!a.expandIcon)}}function d(i,m){if(1&i&&e._UZ(0,"span",16),2&i){const a=e.oxw(5);e.Tol(a.collapseIcon),e.Q6J("ngClass",a.iconClass)}}function C(i,m){if(1&i&&e._UZ(0,"PlusIcon",17),2&i){const a=e.oxw(5);e.Q6J("styleClass",a.iconClass)}}function u(i,m){if(1&i&&(e.ynx(0),e.YNc(1,d,1,3,"span",14)(2,C,1,1,"PlusIcon",15),e.BQk()),2&i){const a=e.oxw(4);e.xp6(),e.Q6J("ngIf",a.collapseIcon),e.xp6(),e.Q6J("ngIf",!a.collapseIcon)}}function b(i,m){if(1&i&&(e.ynx(0),e.YNc(1,k,3,2,"ng-container",12)(2,u,3,2,"ng-container",12),e.BQk()),2&i){const a=e.oxw(3);e.xp6(),e.Q6J("ngIf",!a.collapsed),e.xp6(),e.Q6J("ngIf",a.collapsed)}}function N(i,m){}function Q(i,m){1&i&&e.YNc(0,N,0,0,"ng-template")}const H=i=>({$implicit:i});function K(i,m){if(1&i){const a=e.EpF();e.TgZ(0,"button",11),e.NdJ("click",function(r){e.CHM(a);const I=e.oxw(2);return e.KtG(I.onIconClick(r))})("keydown",function(r){e.CHM(a);const I=e.oxw(2);return e.KtG(I.onKeyDown(r))}),e.YNc(1,b,3,2,"ng-container",12)(2,Q,1,0,null,13),e.qZA()}if(2&i){const a=e.oxw(2);e.uIk("id",a.id+"_header")("aria-label",a.buttonAriaLabel)("aria-controls",a.id+"_content")("aria-expanded",!a.collapsed),e.xp6(),e.Q6J("ngIf",!a.headerIconTemplate),e.xp6(),e.Q6J("ngTemplateOutlet",a.headerIconTemplate)("ngTemplateOutletContext",e.VKq(7,H,a.collapsed))}}const L=(i,m,a)=>({"p-panel-icons-start":i,"p-panel-icons-end":m,"p-panel-icons-center":a});function U(i,m){if(1&i){const a=e.EpF();e.TgZ(0,"div",6),e.NdJ("click",function(r){e.CHM(a);const I=e.oxw();return e.KtG(I.onHeaderClick(r))}),e.YNc(1,D,2,2,"span",7),e.Hsn(2,1),e.YNc(3,y,1,0,"ng-container",4),e.TgZ(4,"div",8),e.YNc(5,z,1,0,null,4)(6,K,3,9,"button",9),e.qZA()()}if(2&i){const a=e.oxw();e.uIk("id",a.id+"-titlebar"),e.xp6(),e.Q6J("ngIf",a.header),e.xp6(2),e.Q6J("ngTemplateOutlet",a.headerTemplate),e.xp6(),e.Q6J("ngClass",e.kEZ(6,L,"start"===a.iconPos,"end"===a.iconPos,"center"===a.iconPos)),e.xp6(),e.Q6J("ngTemplateOutlet",a.iconTemplate),e.xp6(),e.Q6J("ngIf",a.toggleable)}}function Z(i,m){1&i&&e.GkF(0)}function R(i,m){1&i&&e.GkF(0)}function j(i,m){if(1&i&&(e.TgZ(0,"div",18),e.Hsn(1,2),e.YNc(2,R,1,0,"ng-container",4),e.qZA()),2&i){const a=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",a.footerTemplate)}}const B=["*",[["p-header"]],[["p-footer"]]],c=(i,m)=>({"p-panel p-component":!0,"p-panel-toggleable":i,"p-panel-expanded":m}),_=i=>({transitionParams:i,height:"0",opacity:"0"}),n=i=>({value:"hidden",params:i}),s=i=>({transitionParams:i,height:"*",opacity:"1"}),t=i=>({value:"visible",params:i}),o=["*","p-header","p-footer"];let l=(()=>{class i{el;toggleable;header;collapsed;style;styleClass;iconPos="end";expandIcon;collapseIcon;showHeader=!0;toggler="icon";transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";collapsedChange=new e.vpe;onBeforeToggle=new e.vpe;onAfterToggle=new e.vpe;footerFacet;templates;iconTemplate;animating;headerTemplate;contentTemplate;footerTemplate;headerIconTemplate;get id(){return(0,E.Th)()}get buttonAriaLabel(){return this.header}constructor(a){this.el=a}ngAfterContentInit(){this.templates.forEach(a=>{switch(a.getType()){case"header":this.headerTemplate=a.template;break;case"content":default:this.contentTemplate=a.template;break;case"footer":this.footerTemplate=a.template;break;case"icons":this.iconTemplate=a.template;break;case"headericons":this.headerIconTemplate=a.template}})}onHeaderClick(a){"header"===this.toggler&&this.toggle(a)}onIconClick(a){"icon"===this.toggler&&this.toggle(a)}toggle(a){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:a,collapsed:this.collapsed}),this.toggleable&&(this.collapsed?this.expand():this.collapse()),a.preventDefault()}expand(){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onKeyDown(a){("Enter"===a.code||"Space"===a.code)&&(this.toggle(a),a.preventDefault())}onToggleDone(a){this.animating=!1,this.onAfterToggle.emit({originalEvent:a,collapsed:this.collapsed})}static \u0275fac=function(v){return new(v||i)(e.Y36(e.SBq))};static \u0275cmp=e.Xpm({type:i,selectors:[["p-panel"]],contentQueries:function(v,r,I){if(1&v&&(e.Suo(I,T.$_,5),e.Suo(I,T.jx,4)),2&v){let J;e.iGM(J=e.CRH())&&(r.footerFacet=J.first),e.iGM(J=e.CRH())&&(r.templates=J)}},hostAttrs:[1,"p-element"],inputs:{toggleable:"toggleable",header:"header",collapsed:"collapsed",style:"style",styleClass:"styleClass",iconPos:"iconPos",expandIcon:"expandIcon",collapseIcon:"collapseIcon",showHeader:"showHeader",toggler:"toggler",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},ngContentSelectors:o,decls:7,vars:25,consts:[[3,"ngClass","ngStyle"],["class","p-panel-header",3,"click",4,"ngIf"],["role","region",1,"p-toggleable-content",3,"id"],[1,"p-panel-content"],[4,"ngTemplateOutlet"],["class","p-panel-footer",4,"ngIf"],[1,"p-panel-header",3,"click"],["class","p-panel-title",4,"ngIf"],[1,"p-panel-icons",3,"ngClass"],["pRipple","","type","button","role","button","class","p-panel-header-icon p-panel-toggler p-link",3,"click","keydown",4,"ngIf"],[1,"p-panel-title"],["pRipple","","type","button","role","button",1,"p-panel-header-icon","p-panel-toggler","p-link",3,"click","keydown"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass",4,"ngIf"],[3,"styleClass",4,"ngIf"],[3,"ngClass"],[3,"styleClass"],[1,"p-panel-footer"]],template:function(v,r){1&v&&(e.F$t(B),e.TgZ(0,"div",0),e.YNc(1,U,7,10,"div",1),e.TgZ(2,"div",2),e.NdJ("@panelContent.done",function(J){return r.onToggleDone(J)}),e.TgZ(3,"div",3),e.Hsn(4),e.YNc(5,Z,1,0,"ng-container",4),e.qZA(),e.YNc(6,j,3,1,"div",5),e.qZA()()),2&v&&(e.Tol(r.styleClass),e.Q6J("ngClass",e.WLB(14,c,r.toggleable,!r.collapsed&&r.toggleable))("ngStyle",r.style),e.uIk("id",r.id)("data-pc-name","panel"),e.xp6(),e.Q6J("ngIf",r.showHeader),e.xp6(),e.Q6J("id",r.id+"_content")("@panelContent",r.collapsed?e.VKq(19,n,e.VKq(17,_,r.animating?r.transitionOptions:"0ms")):e.VKq(23,t,e.VKq(21,s,r.animating?r.transitionOptions:"0ms"))),e.uIk("aria-labelledby",r.id+"_header")("aria-hidden",r.collapsed)("tabindex",r.collapsed?"-1":void 0),e.xp6(3),e.Q6J("ngTemplateOutlet",r.contentTemplate),e.xp6(),e.Q6J("ngIf",r.footerFacet||r.footerTemplate))},dependencies:()=>[f.mk,f.O5,f.tP,f.PC,A.H,S,O],styles:["@layer primeng{.p-panel-header{display:flex;align-items:center}.p-panel-title{line-height:1;order:1}.p-panel-header-icon{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-panel-toggleable.p-panel-expanded>.p-toggleable-content:not(.ng-animating){overflow:visible}.p-panel-toggleable .p-toggleable-content{overflow:hidden}}\n"],encapsulation:2,data:{animation:[(0,g.X$)("panelContent",[(0,g.SB)("hidden",(0,g.oB)({height:"0"})),(0,g.SB)("void",(0,g.oB)({height:"{{height}}"}),{params:{height:"0"}}),(0,g.SB)("visible",(0,g.oB)({height:"*"})),(0,g.eR)("visible <=> hidden",[(0,g.jt)("{{transitionParams}}")]),(0,g.eR)("void => hidden",(0,g.jt)("{{transitionParams}}")),(0,g.eR)("void => visible",(0,g.jt)("{{transitionParams}}"))])]},changeDetection:0})}return i})(),h=(()=>{class i{static \u0275fac=function(v){return new(v||i)};static \u0275mod=e.oAB({type:i});static \u0275inj=e.cJS({imports:[f.ez,T.m8,A.T,S,O,T.m8]})}return i})()}}]);