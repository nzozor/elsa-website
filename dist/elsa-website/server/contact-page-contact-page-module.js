exports.ids=[1],exports.modules={"9oYK":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return CallToActionComponent});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("fXoL"),_angular_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("ofXK"),_angular_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("tyNb");const _c0=function(){return["/contact"]};class CallToActionComponent{constructor(viewportScroller){this.viewportScroller=viewportScroller}ngOnInit(){}scrollTop(){this.viewportScroller.scrollToAnchor("scroll-top-anchor")}}CallToActionComponent.\u0275fac=function CallToActionComponent_Factory(t){return new(t||CallToActionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.o))},CallToActionComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275defineComponent"]({type:CallToActionComponent,selectors:[["benoldi-call-to-action"]],decls:7,vars:2,consts:[["title","Let's Talk",1,"button","button-lg",3,"routerLink","click"]],template:function CallToActionComponent_Template(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementStart"](0,"div"),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementStart"](1,"div"),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275text"](2,"I look forward to "),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275element"](3,"br"),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275text"](4," hearing from you!"),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementEnd"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementStart"](5,"a",0),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275listener"]("click",function CallToActionComponent_Template_a_click_5_listener(){return ctx.scrollTop()}),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275text"](6,"Let's Talk"),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementEnd"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementEnd"]()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275advance"](5),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275property"]("routerLink",_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275pureFunction0"](1,_c0)))},directives:[_angular_router__WEBPACK_IMPORTED_MODULE_2__.c],styles:[".enter-view-port[_ngcontent-%COMP%]{opacity:0;transform:translate3d(0,-30px,0);transition:transform 5s cubic-bezier(.18,1,.21,1),opacity 5s cubic-bezier(.18,1,.21,1)}.enter-view-port.visible[_ngcontent-%COMP%]{opacity:1;transform:translateZ(0)}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{margin-top:50px;display:flex;justify-content:center;min-height:500px;background-color:initial;color:#000;flex-direction:column;text-align:center;font-weight:100;line-height:38px;font-family:degular;font-weight:200;line-height:1.2;font-size:2.7em}@media (max-width:767.98px){[_nghost-%COMP%] > div[_ngcontent-%COMP%]{margin-top:0}}.button[_ngcontent-%COMP%]{max-width:300px;margin:30px auto;font-size:inherit;font-size:18px;font-weight:500;text-decoration:none;background-color:#000;border:1px solid #000;color:#fff;font-family:degular;padding-top:12px;display:flex;align-items:center;transition:all .3s}@media (hover:hover){.button[_ngcontent-%COMP%]:hover{background-color:#fff;color:#000}}.button[_ngcontent-%COMP%]:hover{animation:shake .82s cubic-bezier(.36,.07,.19,.97) both;transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;perspective:1000px}@keyframes shake{10%,90%{transform:translate3d(0,-1px,0)}20%,80%{transform:translate3d(0,2px,0)}30%,50%,70%{transform:translate3d(0,-4px,0)}40%,60%{transform:translate3d(0,4px,0)}}"]})},BDzO:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ContactPageModule",function(){return ContactPageModule});var common=__webpack_require__("ofXK"),router=__webpack_require__("tyNb"),core=__webpack_require__("fXoL"),call_to_action_component=__webpack_require__("9oYK");class ContactPageComponent{constructor(document){this.document=document,this.showSnackBar=!1}ngOnInit(){}copyToClipBoard(){const selBox=this.document.createElement("textarea");selBox.style.position="fixed",selBox.style.left="0",selBox.style.top="0",selBox.style.opacity="0",selBox.value="elsabenoldi@gmail.com",this.document.body.appendChild(selBox),selBox.focus(),selBox.select(),this.document.execCommand("copy"),this.document.body.removeChild(selBox),this.showSnackBarElement()}showSnackBarElement(){this.showSnackBar=!0,setTimeout(()=>this.showSnackBar=!1,3e3)}}ContactPageComponent.\u0275fac=function ContactPageComponent_Factory(t){return new(t||ContactPageComponent)(core["\u0275\u0275directiveInject"](common.d))},ContactPageComponent.\u0275cmp=core["\u0275\u0275defineComponent"]({type:ContactPageComponent,selectors:[["benoldi-contact-page"]],decls:34,vars:2,consts:[[1,"container"],[1,"where-to-meet"],[1,"social-media"],["title","go to Instagram","href"," https://www.instagram.com/elsabenoldi_design/","target","_blank"],["src","../../assets/images/instagram-elsabenoldi.svg","alt","instagram Elsa Benoldi"],["title","go to LinkedIn","href","https://www.linkedin.com/in/elsabenoldi/","target","_blank"],["src","../../assets/images/linkedIn-elsa-benoldi.svg","alt","LinkedIn Elsa Benoldi"],[1,"email",3,"click"],["id","snackbar"],[1,"selfie"],["media","(max-width: 599px)","srcset","assets/images/contact/elsa-benoldi-graphic-design-agency.jpg"],["media","(min-width: 600px)","srcset","assets/images/contact/elsa-benoldi-graphic-design-agency.jpg"],["src","assets/images/contact/elsa-benoldi-graphic-design-agency.jpg","alt","Elsa Benoldi Graphic Design Agency"],["media","(max-width: 599px)","srcset","assets/images/contact/elsa-benoldi-graphic-design-pantone.jpg"],["media","(min-width: 600px)","srcset","assets/images/contact/elsa-benoldi-graphic-design-pantone.jpg"],["src","assets/images/contact/elsa-benoldi-graphic-design-pantone.jpg","alt","Elsa benoldi Graphic Design pantone"],[1,"call-action"]],template:function ContactPageComponent_Template(rf,ctx){1&rf&&(core["\u0275\u0275elementStart"](0,"div",0),core["\u0275\u0275elementStart"](1,"div",1),core["\u0275\u0275elementStart"](2,"div"),core["\u0275\u0275elementStart"](3,"h1"),core["\u0275\u0275text"](4,"Let's work together"),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementStart"](5,"div",2),core["\u0275\u0275elementStart"](6,"a",3),core["\u0275\u0275element"](7,"img",4),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementStart"](8,"a",5),core["\u0275\u0275element"](9,"img",6),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementStart"](10,"div"),core["\u0275\u0275elementStart"](11,"h2"),core["\u0275\u0275text"](12,"Email"),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementStart"](13,"p",7),core["\u0275\u0275listener"]("click",function ContactPageComponent_Template_p_click_13_listener(){return ctx.copyToClipBoard()}),core["\u0275\u0275text"](14,"elsabenoldi@gmail.com"),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementStart"](15,"div",8),core["\u0275\u0275text"](16,"Elsa email address copied to clipboard!"),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementStart"](17,"div"),core["\u0275\u0275elementStart"](18,"h2"),core["\u0275\u0275text"](19,"Where to meet me"),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementStart"](20,"p"),core["\u0275\u0275text"](21,"I'm currently based in London and occasionally you'll find me in my Italian studio in Parma."),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementStart"](22,"div",9),core["\u0275\u0275elementStart"](23,"div"),core["\u0275\u0275elementStart"](24,"picture"),core["\u0275\u0275element"](25,"source",10),core["\u0275\u0275element"](26,"source",11),core["\u0275\u0275element"](27,"img",12),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementStart"](28,"div"),core["\u0275\u0275elementStart"](29,"picture"),core["\u0275\u0275element"](30,"source",13),core["\u0275\u0275element"](31,"source",14),core["\u0275\u0275element"](32,"img",15),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementEnd"](),core["\u0275\u0275elementEnd"](),core["\u0275\u0275element"](33,"benoldi-call-to-action",16)),2&rf&&(core["\u0275\u0275advance"](15),core["\u0275\u0275classProp"]("show",ctx.showSnackBar))},directives:[call_to_action_component.a],styles:[".enter-view-port[_ngcontent-%COMP%]{opacity:0;transform:translate3d(0,-30px,0);transition:transform 5s cubic-bezier(.18,1,.21,1),opacity 5s cubic-bezier(.18,1,.21,1)}.enter-view-port.visible[_ngcontent-%COMP%]{opacity:1;transform:translateZ(0)}.container[_ngcontent-%COMP%]{margin-top:85px;padding:0 25px}@media (max-width:767.98px){.container[_ngcontent-%COMP%]{margin-top:50px}}h1[_ngcontent-%COMP%]{font-weight:500}@media (max-width:767.98px){h1[_ngcontent-%COMP%]{line-height:1em;margin-left:0;margin-bottom:0}}h2[_ngcontent-%COMP%]{font-family:degular;font-weight:500;font-size:1.5em;margin-bottom:10px}p[_ngcontent-%COMP%]{font-family:Calibre-Light;font-size:1.2em;line-height:1.4em;font-weight:100;margin-top:20px}@media (max-width:991.98px){p[_ngcontent-%COMP%]{margin-top:15px}}p.email[_ngcontent-%COMP%]{cursor:pointer}p.email[_ngcontent-%COMP%]:after{opacity:0;transition:all .5s;content:url(content_copy-black-18dp.79438c6771fef7ff2cf0.svg);position:absolute;margin-left:10px;margin-top:1px}p.email[_ngcontent-%COMP%]:hover:after{opacity:1}.selfie[_ngcontent-%COMP%], .where-to-meet[_ngcontent-%COMP%]{display:flex}.selfie[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .where-to-meet[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex-basis:50%;margin:15px}.where-to-meet[_ngcontent-%COMP%]{margin:0;flex-wrap:wrap}@media (max-width:767.98px){.where-to-meet[_ngcontent-%COMP%]{flex-direction:column;margin:45px auto 0}}.where-to-meet[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]{margin-top:9px}@media (min-width:768px){.where-to-meet[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]{align-self:center}}.where-to-meet[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:22px;margin-right:20px}.where-to-meet[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:last-child{margin-top:25px;position:relative;top:-2px}.where-to-meet[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:0;padding:15px}@media (max-width:991.98px){.where-to-meet[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-top:10px}.where-to-meet[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-of-type, .where-to-meet[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){margin-bottom:30px}}@media (max-width:767.98px){.where-to-meet[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:0;padding:0}}.selfie[_ngcontent-%COMP%]{margin:60px 15px 15px}@media (max-width:991.98px){.selfie[_ngcontent-%COMP%]{flex-direction:column;margin:20px 25px 25px}}.selfie[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:15px}@media (max-width:767.98px){.selfie[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin:10px 0}}.selfie[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}benoldi-call-to-action.call-action[_ngcontent-%COMP%]    >div{margin-top:0}"]});const routes=[{path:"",component:ContactPageComponent}];class ContactPageRoutingModule{}ContactPageRoutingModule.\u0275mod=core["\u0275\u0275defineNgModule"]({type:ContactPageRoutingModule}),ContactPageRoutingModule.\u0275inj=core["\u0275\u0275defineInjector"]({factory:function ContactPageRoutingModule_Factory(t){return new(t||ContactPageRoutingModule)},imports:[[router.d.forChild(routes)],router.d]});var call_to_action_module=__webpack_require__("d0zJ");class ContactPageModule{}ContactPageModule.\u0275mod=core["\u0275\u0275defineNgModule"]({type:ContactPageModule}),ContactPageModule.\u0275inj=core["\u0275\u0275defineInjector"]({factory:function ContactPageModule_Factory(t){return new(t||ContactPageModule)},imports:[[common.c,ContactPageRoutingModule,call_to_action_module.a]]})},d0zJ:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return CallToActionModule});var _angular_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ofXK"),_angular_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("tyNb"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("fXoL");class CallToActionModule{}CallToActionModule.\u0275mod=_angular_core__WEBPACK_IMPORTED_MODULE_2__["\u0275\u0275defineNgModule"]({type:CallToActionModule}),CallToActionModule.\u0275inj=_angular_core__WEBPACK_IMPORTED_MODULE_2__["\u0275\u0275defineInjector"]({factory:function CallToActionModule_Factory(t){return new(t||CallToActionModule)},imports:[[_angular_common__WEBPACK_IMPORTED_MODULE_0__.c,_angular_router__WEBPACK_IMPORTED_MODULE_1__.d]]})}};