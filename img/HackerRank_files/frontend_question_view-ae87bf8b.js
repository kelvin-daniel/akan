(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"214P":function(e,t,n){"use strict";n.d(t,"t",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"q",(function(){return u})),n.d(t,"r",(function(){return c})),n.d(t,"b",(function(){return d})),n.d(t,"u",(function(){return l})),n.d(t,"v",(function(){return h})),n.d(t,"m",(function(){return f})),n.d(t,"j",(function(){return p})),n.d(t,"l",(function(){return m})),n.d(t,"k",(function(){return g})),n.d(t,"h",(function(){return v})),n.d(t,"x",(function(){return b})),n.d(t,"n",(function(){return S})),n.d(t,"o",(function(){return y})),n.d(t,"y",(function(){return E})),n.d(t,"s",(function(){return C})),n.d(t,"w",(function(){return w})),n.d(t,"i",(function(){return j})),n.d(t,"a",(function(){return O})),n.d(t,"g",(function(){return T})),n.d(t,"p",(function(){return _}));n("DW2E");var a={time:750,align:{top:0}},i={className:"ui-btn-line-primary"},r={className:"confirm-button ui-btn-line"},o={TAB_TEST_OUTPUT:"tab_test_output",TAB_TEST_INPUT:"tab_test_input",TAB_NONE:"tab_none"},s={CUSTOM:"custom",ALL:"all"},u=10240,c=10,d=[".question-view__title",".question-view__instruction"],l=["pre","code","samp","kbd"],h=["samp","kbd"],f="focus",p="blur",m="copy",g="context",v=[m,"cut","paste"],b=3,S={TAB_INDEX:{html:0,css:1,javascript:2},TAB_LIST:["question.design.html","question.design.css","question.design.js"],LANGUAGES:["html","css","javascript"],FILE_EXTENSIONS:{html:"html",css:"css",javascript:"js"}},y=500,E=100,C=3e3,w={MIN_TEXT_FIELD_LENGTH:20,MIN_TEXT_OVERFLOW:5,BLANK_SPACE_REGEX:/\{\s*blank\s*\}/gim},j={COUNTDOWN:"test:countdown"},O=Object.freeze(["php","swift"]),T="DiffEditor",_="MainEditor"},"7L+V":function(e,t,n){},ADev:function(e,t,n){},BXv2:function(e,t,n){},RBsM:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("eOGF");function i(e){var t=window.location,n=t.protocol,i=t.host,r=e.useCurrentHostAsDesignDomain,o=e.designSubdomainPrefix,s=e.designDomain,u=e.attemptId,c=e.questionId;return"development"===Object(a.b)()?"".concat(n,"//design.").concat(i):r?"".concat(n,"//").concat(i):"".concat(n,"//").concat(o,"-").concat(u,"-").concat(c,".").concat(s)}},SS6Y:function(e,t,n){},kGUV:function(e,t,n){},oQfB:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return g})),n.d(t,"a",(function(){return v}));n("HAE/"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("ioFf"),n("rGqo"),n("yt8O"),n("RW0V");var a=n("o0o1"),i=n.n(a),r=n("lSNA"),o=n.n(r),s=(n("ls82"),n("yXPU")),u=n.n(s),c=(n("a1Th"),n("h7Nl"),n("Btvt"),n("ZaSc")),d=n("j4W8"),l=n("7fp8");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e){return Object(c.c)({url:Object(l.c)("fetchRenderAuth",{attemptId:e})})}function m(e){var t=e.attemptId,n=e.regKey,a=e.prefixUrl,i=void 0===a?"":a;return Object(c.e)({url:"".concat(i).concat(Object(l.c)("registerRenderAuth",{attemptId:t})),data:{reg_key:n},noCsrf:!0,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},withCredentials:!0})}function g(e){var t=e.code,n=e.attemptId,a=e.questionId,i={0:t[0],1:t[1],2:t[2]};return Object(c.e)({url:Object(l.c)("renderDesign",{attemptId:n,questionId:a}),data:i})}function v(e,t){var n={data:{message:Math.random().toString(36).substring(7)},noCsrf:!0,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},withCredentials:!0};return function(a){return(r=u()(i.a.mark((function r(){return i.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,Object(c.e)(f({url:"".concat(t).concat(Object(l.c)("setTestCookie",{testId:e}))},n));case 3:return i.next=5,Object(c.e)(f({url:"".concat(t).concat(Object(l.c)("checkTestCookie",{testId:e}))},n));case 5:a({type:d.a.APP.PREFETCH_DATA,data:{metadata:{browserSupportsDesignQuestion:!0}}}),i.next=11;break;case 8:i.prev=8,i.t0=i.catch(0),a({type:d.a.APP.PREFETCH_DATA,data:{metadata:{browserSupportsDesignQuestion:!1}}});case 11:case"end":return i.stop()}}),r,null,[[0,8]])}))),function(){return r.apply(this,arguments)})();var r}}},uroe:function(e,t,n){"use strict";n.r(t);n("a1Th"),n("h7Nl"),n("I5cv"),n("f3/d");var a=n("o0o1"),i=n.n(a),r=(n("ls82"),n("yXPU")),o=n.n(r),s=(n("VRzm"),n("Btvt"),n("CX2u"),n("2Spj"),n("lwsE")),u=n.n(s),c=n("W8MJ"),d=n.n(c),l=n("PJYZ"),h=n.n(l),f=n("7W2i"),p=n.n(f),m=n("a1gu"),g=n.n(m),v=n("Nsbk"),b=n.n(v),S=n("lSNA"),y=n.n(S),E=n("cDcd"),C=n.n(E),w=n("Y+p1"),j=n.n(w),O=n("EfbJ"),T=n("msTz"),_=n("EY3D"),q=(n("HAE/"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("ioFf"),n("rGqo"),n("yt8O"),n("RW0V"),n("DNiP"),n("bWfx"),n("TSYQ")),R=n.n(q),D=n("eHHv"),P=n("DzJC"),A=n.n(P),N=n("eOGF"),k=n("xNbf"),x=n("z5MK"),I=n("VlMD"),L=n("JoEb"),U=n("Ojj1"),B=n("214P");n("BXv2"),n("ynPJ");function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=b()(e);if(t){var i=b()(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return g()(this,n)}}var W=function(e){p()(n,e);var t=z(n);function n(e){var a;u()(this,n),a=t.call(this,e),y()(h()(a),"answer",void 0),y()(h()(a),"editorComponent",void 0),y()(h()(a),"editor",void 0),y()(h()(a),"mounted",void 0),y()(h()(a),"throttledSaveLanguageCode",void 0),y()(h()(a),"updateWindowDimensions",void 0),y()(h()(a),"wrapperRef",void 0),y()(h()(a),"layoutTimeout",void 0),y()(h()(a),"throttledScroll",void 0),y()(h()(a),"autoSaveKey",void 0),y()(h()(a),"settings",void 0),y()(h()(a),"currentCode",void 0),y()(h()(a),"changeLanguage",(function(e){var t;if(window.monaco){var n=window.monaco.Range;a.editor.setSelection(new n(1,1,1,1));var i=a.state,r=i.currentLanguage,o=i.code;a.saveLanguageCode(r);var s=B.n.LANGUAGES[e],u=a.autoSaveKey[s],c=Object(U.f)(u);a.setState({currentLanguage:B.n.LANGUAGES[e],code:H(H({},o),{},(t={},y()(t,s,H(H({},o[s]),{},{defaultText:c})),y()(t,r,H(H({},o[r]),{},{defaultText:a.currentCode})),t))})}})),y()(h()(a),"editorDidMount",(function(e){a.layoutTimeout=setTimeout((function(){return a.adjustHeight()}),B.o),a.editor=e,a.editor.onDidScrollChange(a.throttledScroll)})),y()(h()(a),"onChangeSettings",(function(e,t){Object(U.n)(e,t)})),y()(h()(a),"onCodeChange",(function(e,t){a.currentCode=t;var n=a.state.currentLanguage,i=a.props,r=i.onCodeChange,o=i.resetInactivityTimer;r(),o(),a.throttledSaveLanguageCode(n)})),y()(h()(a),"renderItem",(function(e,t){var n=a.changeLanguage.bind(h()(a),t);return C.a.createElement("div",{className:"design-question-editor__language",onClick:n,onKeyPress:n,role:"tab",tabIndex:0},C.a.createElement("span",{className:"design-question-editor__language__item"},e.title))}));var i=e.scrollThrottleWait,r=e.templates,o=e.autosaveNamespace,s=e.submissionData,c=Object(N.k)()?600:window.innerHeight-154;a.autoSaveKey={html:Object(L.e)(o,"html"),css:Object(L.e)(o,"css"),javascript:Object(L.e)(o,"javascript")};var d=n.getSubmittedCode(s),l=Object(U.f)(a.autoSaveKey.css)||d.css||r.css,f=Object(U.f)(a.autoSaveKey.html)||d.html||r.html,p=Object(U.f)(a.autoSaveKey.javascript)||d.javascript||r.javascript;return a.state={currentLanguage:"html",editorHeight:c,loaded:!1,wrapperClass:"",code:{css:{defaultText:l,headEnd:"",tailStart:""},html:{defaultText:f,headEnd:"",tailStart:""},javascript:{defaultText:p,headEnd:"",tailStart:""}}},a.mounted=!1,a.wrapperRef=C.a.createRef(),a.throttledSaveLanguageCode=A()(a.saveLanguageCode,B.s),a.updateWindowDimensions=A()(a.adjustHeight.bind(h()(a)),B.y),a.throttledScroll=A()(a.handleEditorScroll.bind(h()(a)),i),a.settings=n.setUpSettings(),a.currentCode=f,Object(U.l)(a.autoSaveKey.css,l),Object(U.l)(a.autoSaveKey.html,f),Object(U.l)(a.autoSaveKey.javascript,p),a}return d()(n,[{key:"componentDidMount",value:function(){this.mounted=!0,this.loadModules(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.editorHeight;if(this.editor&&n!==t.editorHeight){var a=this.editor.getPosition();this.editor.revealPositionInCenterIfOutsideViewport(a)}}},{key:"componentWillUnmount",value:function(){this.throttledScroll.cancel(),this.layoutTimeout&&clearTimeout(this.layoutTimeout),this.throttledSaveLanguageCode.flush(),window.removeEventListener("resize",this.updateWindowDimensions),this.updateWindowDimensions.cancel(),this.mounted=!1}},{key:"loadModules",value:function(){var e=this;Object(I.o)().then((function(t){var a=t.withModes,i=t.withSettings,r=t.withStatusBar,o=t.BaseEditor;e.mounted&&(Object(U.m)(e.props.assetPath),e.editorComponent=Object(D.a)(a,i,r)(n.getEditor(o)),e.setState({loaded:!0}))})).catch((function(e){console.error(e)}))}},{key:"adjustHeight",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!0===e&&this.editor)this.editor.layout();else{var t=this.wrapperRef.current;if(t&&t.parentElement){var n=t.parentElement,a=n.getBoundingClientRect().height,i=t.querySelector(".hr-monaco-editor-statusbar"),r=i?i.getBoundingClientRect().height:0,o=n.querySelector(".design-question-footer"),s=o?o.getBoundingClientRect().height:0,u=n.querySelector(".design-question-editor__tab-list"),c=u?u.getBoundingClientRect().height:0,d=a-r-s-c;this.setState({editorHeight:d})}}}},{key:"handleEditorScroll",value:function(e){var t=this.state.wrapperClass,n=this.props.toolbarHideScrollThreshold;if(e.scrollTop>=n){if("candidate-site-editor--scrolled"===t)return;this.setState({wrapperClass:"candidate-site-editor--scrolled"})}else{if(""===t)return;this.setState({wrapperClass:""})}}},{key:"saveLanguageCode",value:function(e){var t=this.autoSaveKey[e];if(this.editor){var n=this.editor.getValue();Object(U.l)(t,n)}}},{key:"getCode",value:function(){var e=this,t=this.state,n=t.code,a=t.currentLanguage;return B.n.LANGUAGES.map((function(t){var i={code:n[t].defaultText,language:t};return t===a&&(i.code=e.currentCode),i}))}},{key:"renderEditor",value:function(){var e=this.state.loaded,t=this.state,n=t.currentLanguage,a=t.code,i=t.editorHeight,r=a[n],o=this.props.options,s=this.editorComponent,u=this.settings,c=u.enableAutoComplete,d=u.mode,l=u.tabSize,h=u.theme;return e?C.a.createElement(s,{code:r,showModes:!0,showIntellisense:!1,enableAutoComplete:c,mode:d,tabSize:l,theme:h,options:o,height:i,language:n,fileExtension:B.n.FILE_EXTENSIONS[n],editorDidMount:this.editorDidMount,onChange:this.onCodeChange,onChangeSettings:this.onChangeSettings,loaderComponent:k.a,"data-automation":"design-question-editor"}):C.a.createElement("div",{className:"d-flex align-items-center justify-content-center candidate-site-editor__loader"},C.a.createElement(k.a,null))}},{key:"render",value:function(){var e=this.state,t=e.currentLanguage,n=e.loaded,a=e.wrapperClass,i=this.props.t,r=[{title:i("question.design.html")},{title:i("question.design.css")},{title:i("question.design.javascript")}],o=R()("candidate-site-editor design-question-editor ".concat(a),{"candidate-site-editor--loaded":n}),s=B.n.TAB_INDEX[t];return C.a.createElement("div",{ref:this.wrapperRef,className:o},C.a.createElement(x.a,{enableA11y:!0,className:"design-question-editor__tabs"},C.a.createElement(x.a.List,{activeTab:s,tabList:r,className:"design-question-editor__tab-list",renderItem:this.renderItem}),C.a.createElement(x.a.Content,{className:"design-question-editor__tab-content"},this.renderEditor())))}}],[{key:"getEditor",value:function(e){return function(t){return C.a.createElement(E.Fragment,null,t.renderSettings(),C.a.createElement(e,t))}}},{key:"setUpSettings",value:function(){var e=U.a.THEME,t=U.a.TAB_SIZE,n=U.a.AUTO_COMPLETE,a=U.a.MODE;return H(H({},U.c),{},{tabSize:Object(U.d)(t),theme:Object(U.d)(e),enableAutoComplete:Object(U.d)(n),mode:Object(U.d)(a)})}},{key:"getSubmittedCode",value:function(e){return e?e.answer.reduce((function(e,t){var n=t.code;return e[t.language]=n,e}),{}):{}}}]),n}(E.Component);y()(W,"defaultProps",{submission:null,options:H(H({},U.b),{},{automaticLayout:!1}),toolbarHideScrollThreshold:50,scrollThrottleWait:100});var X=W,K=n("OEX3");n("SS6Y");var F=function(e){var t=e.disableRenderCode,n=e.disableSubmitCode,a=e.onSubmitCode,i=e.onRenderCode,r=e.renderButtonText,o=e.submitButtonText,s=e.isTabActive,u=e.onTabClick,c=e.t;return C.a.createElement("div",{className:"d-flex design-question-footer",role:"tablist"},C.a.createElement("div",{className:R()("d-flex align-items-center justify-content-center design-question-footer__rendered-view",{active:s}),role:"tab",tabIndex:0,onClick:u,onKeyPress:u},c("question.design.footer.rendered_view")),C.a.createElement("div",{className:"d-flex justify-content-end design-question-footer__buttons"},C.a.createElement(K.c,{disabled:t,onClick:i,className:"design-question-footer__render"},r),C.a.createElement(K.c,{disabled:n,onClick:a,className:"design-question-footer__submit"},o)))},G=n("9kay"),V=n("bIS8"),J=n("wqqT"),Q=n("bSd7");n("7L+V");function Y(e){var t=e.message,n=e.statusType,a=e.children,i="question-run-status question-run-status--".concat(n),r=n===Q.h.INFO;return C.a.createElement("div",{className:i},t&&C.a.createElement("h3",{"aria-live":"polite",className:"question-run-status__message"},r&&C.a.createElement(J.a,null),C.a.createElement("span",{className:"question-run-status__info"},t)),a)}Y.defaultProps={statusType:"info"};var Z=Y;n("ADev");function $(e){var t=e.message,n=e.url,a=e.statusType,i=e.t,r=a===Q.h.SUCCESS&&n;return C.a.createElement("section",{className:"design-question-output"},!a&&C.a.createElement("span",{className:"d-flex design-question-output__placeholder"},i("question.design.render_placeholder")),C.a.createElement(Z,{message:t,statusType:a},r&&C.a.createElement("span",{className:"design-question-output__new-window"},i("question.design.no_render_pre"),C.a.createElement("a",{className:"design-question-output__url",href:n,target:"_blank",rel:"noreferrer noopener"},C.a.createElement(V.OpenNewWindowIcon,{className:"design-question-output__new-window--icon"})),i("question.design.no_render_post"))),r&&C.a.createElement("iframe",{title:"design question output content",sandbox:"allow-forms allow-modals allow-popups allow-scripts allow-same-origin",src:n,className:"design-question-output__content"}))}$.defaultProps={statusType:Q.h.INFO};var ee=Object(G.c)(["questionview"])($),te=n("oQfB"),ne=n("RBsM"),ae=(n("kGUV"),n("7fp8"));function ie(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=b()(e);if(t){var i=b()(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return g()(this,n)}}n.d(t,"PureDesignQuestion",(function(){return re}));var re=function(e){p()(a,e);var t,n=ie(a);function a(e){var t;return u()(this,a),t=n.call(this,e),y()(h()(t),"autosaveNamespace",void 0),y()(h()(t),"editorRef",void 0),y()(h()(t),"prefixUrl",void 0),y()(h()(t),"renderAuthenticated",void 0),y()(h()(t),"ajaxRequestXhr",void 0),y()(h()(t),"codeEdited",void 0),y()(h()(t),"showRenderDoc",(function(){if(t.editorRef.current){var e=t.props,n=e.attemptId,a=e.questionId,i=e.t;t.setState({status:i("question.design.prepare"),statusType:Q.h.INFO});var r=t.editorRef.current.getCode(),o={attemptId:n,questionId:a,code:r};Object(te.d)(o).then((function(e){var i=e.model.id,r="".concat(t.prefixUrl).concat(Object(ae.c)("designUrl",{attemptId:n,questionId:a,renderId:i}));t.setState({designUrl:r,status:"",disableRender:!1,statusType:Q.h.SUCCESS})}),(function(){t.setDesignError()}))}})),y()(h()(t),"onPrimarySplitDragEnd",t.adjustEditorLayout.bind(h()(t),!0)),y()(h()(t),"onCodingAreaSizeChange",t.adjustEditorLayout.bind(h()(t))),y()(h()(t),"onMainSplitSizeChange",(function(e,n){n!==t.state.leftPaneShrinked&&t.setState({leftPaneShrinked:n}),t.onPrimarySplitDragEnd()})),y()(h()(t),"onLeftPaneVerticalBarClick",(function(){t.setState({shouldRightPaneAutoCollapse:!0})})),y()(h()(t),"handleRender",(function(){t.setState({disableRender:!0,isTabActive:!0}),t.renderAuthenticated?t.showRenderDoc():t.fetchAndRegisterDesignUrl(t.showRenderDoc),t.setState({shouldAutoExpand:!0})})),y()(h()(t),"handleSubmit",(function(){if(t.editorRef.current){var e=t.editorRef.current.getCode(),n=t.props,a=n.questionData,i=a.uniqueId,r=a.type,o=n.saveAnswer,s=n.navigateToPath,u=n.submissionData;if(u&&j()(e,u.answer))s();else{var c={qid:i,qtype:r,answer:{answer:e}};t.setState({disableRender:!0,disableSubmit:!0},(function(){return o(c).finally(t.toggleSubmitAndRender)}))}}})),y()(h()(t),"handleTabClick",(function(){t.setState({isTabActive:!0,shouldAutoExpand:!0})})),y()(h()(t),"onCodeChange",(function(){var e=t.props.markAnswerDirty;t.codeEdited&&e(),t.codeEdited||(t.codeEdited=!0),t.setPingData()})),y()(h()(t),"toggleSubmitAndRender",(function(){var e=t.state,n=e.disableRender,a=e.disableSubmit;t.setState({disableRender:!n,disableSubmit:!a})})),t.state={disableRender:!1,disableSubmit:!1,leftPaneShrinked:!1,shouldRightPaneAutoCollapse:!1,shouldAutoExpand:!1,status:"",designUrl:"",statusType:"",isTabActive:!1},t.autosaveNamespace="".concat(e.attemptId,"-").concat(e.questionId),t.editorRef=C.a.createRef(),t.codeEdited=!1,t}return d()(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.metadata,n={designDomain:t.designDomain,designSubdomainPrefix:t.designSubdomainPrefix,useCurrentHostAsDesignDomain:t.useCurrentHostAsDesignDomain,attemptId:e.attemptId,questionId:e.questionId};this.prefixUrl=Object(ne.a)(n),this.fetchAndRegisterDesignUrl()}},{key:"componentWillUnmount",value:function(){this.ajaxRequestXhr&&this.ajaxRequestXhr.abort()}},{key:"fetchAndRegisterDesignUrl",value:(t=o()(i.a.mark((function e(t){var n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.attemptId,e.prev=1,this.ajaxRequestXhr=Object(te.b)(n),e.next=5,this.ajaxRequestXhr;case 5:return a=e.sent,r=a.reg_key,o={regKey:r,attemptId:n,prefixUrl:this.prefixUrl},this.ajaxRequestXhr=Object(te.c)(o),e.next=11,this.ajaxRequestXhr;case 11:this.renderAuthenticated=!0,"function"==typeof t&&t(),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),this.setDesignError();case 18:case"end":return e.stop()}}),e,this,[[1,15]])}))),function(e){return t.apply(this,arguments)})},{key:"setDesignError",value:function(){var e=(0,this.props.t)("question.design.cookie_error");this.setState({statusType:Q.h.ERROR,status:e,disableRender:!1})}},{key:"adjustEditorLayout",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.state,n=t.shouldAutoExpand,a=t.shouldRightPaneAutoCollapse,i={};n&&(i.shouldAutoExpand=!1),a&&(i.shouldRightPaneAutoCollapse=!1),this.setState(i),this.editorRef.current&&this.editorRef.current.adjustHeight(e)}},{key:"setPingData",value:function(){this.editorRef.current&&(0,this.props.setAnswerToPing)(this.editorRef.current.getCode())}},{key:"renderQuestionRightPaneContent",value:function(){var e=this.state,t=e.disableRender,n=e.disableSubmit,a=e.shouldAutoExpand,i=e.status,r=e.designUrl,o=e.statusType,s=e.isTabActive,u=this.props,c=u.questionData.templates,d=u.t,l=u.appUtil.assetPath,h=u.submissionData,f=u.resetInactivityTimer,p=d(t?"actions.redirecting":"actions.submit_continue");return C.a.createElement("div",{className:"d-flex flex-column design-question__right-pane"},C.a.createElement("div",{className:"d-flex design-question__editor-area"},C.a.createElement(T.b,{className:"design-question__solution-split",percentage:!0,primaryMinSize:40,secondaryInitialSize:0,vertical:!0,onSecondaryPaneSizeChange:this.onCodingAreaSizeChange,onDragEnd:this.onCodingAreaSizeChange,shouldAutoExpand:a},C.a.createElement(E.Fragment,null,C.a.createElement(X,{ref:this.editorRef,templates:c,autosaveNamespace:this.autosaveNamespace,assetPath:l,t:d,onCodeChange:this.onCodeChange,submissionData:h,resetInactivityTimer:f}),C.a.createElement(F,{disableRenderCode:t,disableSubmitCode:n,onSubmitCode:this.handleSubmit,onRenderCode:this.handleRender,renderButtonText:d("actions.render"),submitButtonText:p,isTabActive:s,onTabClick:this.handleTabClick,t:d})),s&&C.a.createElement(ee,{message:i,url:r,statusType:o}))))}},{key:"render",value:function(){var e=this.state,t=e.leftPaneShrinked,n=e.shouldRightPaneAutoCollapse,a=this.props,i=a.questionData,r=a.questionNumber,o=a.t,s=i.name,u=i.uniqueId,c=i.question;return C.a.createElement("section",{className:"design-question"},C.a.createElement(T.b,{percentage:!0,primaryMinSize:3,secondaryInitialSize:70,secondaryMinSize:30,vertical:!1,arrowPosition:"top",arrowMargin:24,onSecondaryPaneSizeChange:this.onMainSplitSizeChange,onDragEnd:this.onPrimarySplitDragEnd,shouldAutoCollapse:n},C.a.createElement(_.a,{className:"design-question__left-pane",questionNumber:r,questionTitle:s,questionStatement:c,questionId:u,shrinked:t,onVerticalBarClick:this.onLeftPaneVerticalBarClick,t:o}),this.renderQuestionRightPaneContent()))}}]),a}(E.PureComponent);t.default=Object(O.a)(re)},ynPJ:function(e,t,n){}}]);
//# sourceMappingURL=https://hrcdn.net/candidate-site/assets/sourcemaps/frontend_question_view-ae87bf8b.js.map