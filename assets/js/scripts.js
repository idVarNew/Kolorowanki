( function() {
    'use strict';

    angular.module( 'app', [
        'ngAnimate',
        'ngSanitize',
        'ui.bootstrap',
        'ngRoute',
        'app.canvas',
        'app.intro',
    ] );

}() );

( function() {
    angular
        .module( 'app' )
        .controller( 'mainController', mainController )
        .controller( 'mainPage', mainPage )
        .controller( 'notMainPage', notMainPage );

    mainController.$inject = [];
    mainPage.$inject = [ 'getStorage', ];
    notMainPage.$inject = [ 'setStorage', ];

    function mainController() {}

    function mainPage( getStorage ) {
        getStorage.getData();
    }

    function notMainPage( setStorage ) {
        setStorage.setData();
    }


}() );

( function() {

    "use strict";

    angular.module( "app.canvas", [ "app.painting", "app.options", "app.image", "app.text", ] );
    // Painting
    angular.module( "app.painting", [ "app.brushColors", "app.brushTypes", , "app.brushSizes", "app.eraser" ] );
    angular.module( "app.brushColors", [] );
    angular.module( "app.brushTypes", [] );
    angular.module( "app.brushSizes", [] );
    angular.module( "app.eraser", [] );
    // Options
    angular.module( "app.options", [ "app.reset", "app.save" ] );
    angular.module( "app.reset", [] );
    angular.module( "app.save", [] );
    // Image
    angular.module( "app.image", [] );
    // text
    angular.module( "app.text", [ "app.alignment", "app.fonts", "app.typing" ] );
    angular.module( "app.alignment", [] );
    angular.module( "app.fonts", [] );
    angular.module( "app.typing", [] );
    //  Text - fonts
    angular.module( "app.fonts", [ "app.decorativeFonts", "app.standardFonts", "app.previewFonts", ] );
    angular.module( "app.decorativeFonts", [] );
    angular.module( "app.standardFonts", [] );
    angular.module( "app.previewFonts", [] );
    // Intro
    angular.module( "app.intro", [] );

}() );

( function() {
    angular
        .module( "app" )
        .config( config )

    config.$inject = [ "$routeProvider", "$locationProvider" ];

    function config( $routeProvider, $locationProvider ) {
        $routeProvider
            .when( "/", {
                templateUrl: "app/shared/pages/main.html",
                controller: "mainPage"
            } )
            .when( "/about-app", {
                templateUrl: "app/shared/pages/about-app.html",
                controller: "notMainPage"
            } )
            .when( "/about-me", {
                templateUrl: "app/shared/pages/about-me.html",
                controller: "notMainPage"
            } )

            .otherwise( {
                redirectTo: "/"
            } );

        $locationProvider.html5Mode( true );
    }

}() );

if ( !MouseEvent.prototype.hasOwnProperty( "buttons" ) ) {
    var mousedown = 0;
    addEventListener( "mousedown", function( a ) {
        mousedown = a.button || 1
    } ), addEventListener( "mouseup", function() {
        mousedown = 0
    } ), Object.defineProperty( MouseEvent.prototype, "buttons", {
        get: function() {
            return mousedown
        }
    } )
}

/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 2.5.0 - 2017-01-28
 * License: MIT
 */angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.accordion","ui.bootstrap.collapse","ui.bootstrap.tabindex","ui.bootstrap.modal","ui.bootstrap.multiMap","ui.bootstrap.stackedMap","ui.bootstrap.position","ui.bootstrap.tooltip"]),angular.module("ui.bootstrap.tpls",["uib/template/accordion/accordion-group.html","uib/template/accordion/accordion.html","uib/template/modal/window.html","uib/template/tooltip/tooltip-html-popup.html","uib/template/tooltip/tooltip-popup.html","uib/template/tooltip/tooltip-template-popup.html"]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse","ui.bootstrap.tabindex"]).constant("uibAccordionConfig",{closeOthers:!0}).controller("UibAccordionController",["$scope","$attrs","uibAccordionConfig",function(t,e,o){this.groups=[],this.closeOthers=function(i){var n=angular.isDefined(e.closeOthers)?t.$eval(e.closeOthers):o.closeOthers;n&&angular.forEach(this.groups,function(t){t!==i&&(t.isOpen=!1)})},this.addGroup=function(t){var e=this;this.groups.push(t),t.$on("$destroy",function(){e.removeGroup(t)})},this.removeGroup=function(t){var e=this.groups.indexOf(t);-1!==e&&this.groups.splice(e,1)}}]).directive("uibAccordion",function(){return{controller:"UibAccordionController",controllerAs:"accordion",transclude:!0,templateUrl:function(t,e){return e.templateUrl||"uib/template/accordion/accordion.html"}}}).directive("uibAccordionGroup",function(){return{require:"^uibAccordion",transclude:!0,restrict:"A",templateUrl:function(t,e){return e.templateUrl||"uib/template/accordion/accordion-group.html"},scope:{heading:"@",panelClass:"@?",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(t){this.heading=t}},link:function(t,e,o,i){e.addClass("panel"),i.addGroup(t),t.openClass=o.openClass||"panel-open",t.panelClass=o.panelClass||"panel-default",t.$watch("isOpen",function(o){e.toggleClass(t.openClass,!!o),o&&i.closeOthers(t)}),t.toggleOpen=function(e){t.isDisabled||e&&32!==e.which||(t.isOpen=!t.isOpen)};var n="accordiongroup-"+t.$id+"-"+Math.floor(1e4*Math.random());t.headingId=n+"-tab",t.panelId=n+"-panel"}}}).directive("uibAccordionHeading",function(){return{transclude:!0,template:"",replace:!0,require:"^uibAccordionGroup",link:function(t,e,o,i,n){i.setHeading(n(t,angular.noop))}}}).directive("uibAccordionTransclude",function(){function t(){return"uib-accordion-header,data-uib-accordion-header,x-uib-accordion-header,uib\\:accordion-header,[uib-accordion-header],[data-uib-accordion-header],[x-uib-accordion-header]"}return{require:"^uibAccordionGroup",link:function(e,o,i,n){e.$watch(function(){return n[i.uibAccordionTransclude]},function(e){if(e){var i=angular.element(o[0].querySelector(t()));i.html(""),i.append(e)}})}}}),angular.module("ui.bootstrap.collapse",[]).directive("uibCollapse",["$animate","$q","$parse","$injector",function(t,e,o,i){var n=i.has("$animateCss")?i.get("$animateCss"):null;return{link:function(i,r,a){function l(){g=!!("horizontal"in a),g?(v={width:""},w={width:"0"}):(v={height:""},w={height:"0"}),i.$eval(a.uibCollapse)||r.addClass("in").addClass("collapse").attr("aria-expanded",!0).attr("aria-hidden",!1).css(v)}function p(t){return g?{width:t.scrollWidth+"px"}:{height:t.scrollHeight+"px"}}function s(){r.hasClass("collapse")&&r.hasClass("in")||e.resolve(f(i)).then(function(){r.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),n?n(r,{addClass:"in",easing:"ease",css:{overflow:"hidden"},to:p(r[0])}).start()["finally"](u):t.addClass(r,"in",{css:{overflow:"hidden"},to:p(r[0])}).then(u)},angular.noop)}function u(){r.removeClass("collapsing").addClass("collapse").css(v),m(i)}function c(){return r.hasClass("collapse")||r.hasClass("in")?void e.resolve(h(i)).then(function(){r.css(p(r[0])).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),n?n(r,{removeClass:"in",to:w}).start()["finally"](d):t.removeClass(r,"in",{to:w}).then(d)},angular.noop):d()}function d(){r.css(w),r.removeClass("collapsing").addClass("collapse"),b(i)}var f=o(a.expanding),m=o(a.expanded),h=o(a.collapsing),b=o(a.collapsed),g=!1,v={},w={};l(),i.$watch(a.uibCollapse,function(t){t?c():s()})}}}]),angular.module("ui.bootstrap.tabindex",[]).directive("uibTabindexToggle",function(){return{restrict:"A",link:function(t,e,o){o.$observe("disabled",function(t){o.$set("tabindex",t?-1:null)})}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.multiMap","ui.bootstrap.stackedMap","ui.bootstrap.position"]).provider("$uibResolve",function(){var t=this;this.resolver=null,this.setResolver=function(t){this.resolver=t},this.$get=["$injector","$q",function(e,o){var i=t.resolver?e.get(t.resolver):null;return{resolve:function(t,n,r,a){if(i)return i.resolve(t,n,r,a);var l=[];return angular.forEach(t,function(t){l.push(angular.isFunction(t)||angular.isArray(t)?o.resolve(e.invoke(t)):angular.isString(t)?o.resolve(e.get(t)):o.resolve(t))}),o.all(l).then(function(e){var o={},i=0;return angular.forEach(t,function(t,n){o[n]=e[i++]}),o})}}}]}).directive("uibModalBackdrop",["$animate","$injector","$uibModalStack",function(t,e,o){function i(e,i,n){n.modalInClass&&(t.addClass(i,n.modalInClass),e.$on(o.NOW_CLOSING_EVENT,function(o,r){var a=r();e.modalOptions.animation?t.removeClass(i,n.modalInClass).then(a):a()}))}return{restrict:"A",compile:function(t,e){return t.addClass(e.backdropClass),i}}}]).directive("uibModalWindow",["$uibModalStack","$q","$animateCss","$document",function(t,e,o,i){return{scope:{index:"@"},restrict:"A",transclude:!0,templateUrl:function(t,e){return e.templateUrl||"uib/template/modal/window.html"},link:function(n,r,a){r.addClass(a.windowTopClass||""),n.size=a.size,n.close=function(e){var o=t.getTop();o&&o.value.backdrop&&"static"!==o.value.backdrop&&e.target===e.currentTarget&&(e.preventDefault(),e.stopPropagation(),t.dismiss(o.key,"backdrop click"))},r.on("click",n.close),n.$isRendered=!0;var l=e.defer();n.$$postDigest(function(){l.resolve()}),l.promise.then(function(){var l=null;a.modalInClass&&(l=o(r,{addClass:a.modalInClass}).start(),n.$on(t.NOW_CLOSING_EVENT,function(t,e){var i=e();o(r,{removeClass:a.modalInClass}).start().then(i)})),e.when(l).then(function(){var e=t.getTop();if(e&&t.modalRendered(e.key),!i[0].activeElement||!r[0].contains(i[0].activeElement)){var o=r[0].querySelector("[autofocus]");o?o.focus():r[0].focus()}})})}}}]).directive("uibModalAnimationClass",function(){return{compile:function(t,e){e.modalAnimation&&t.addClass(e.uibModalAnimationClass)}}}).directive("uibModalTransclude",["$animate",function(t){return{link:function(e,o,i,n,r){r(e.$parent,function(e){o.empty(),t.enter(e,o)})}}}]).factory("$uibModalStack",["$animate","$animateCss","$document","$compile","$rootScope","$q","$$multiMap","$$stackedMap","$uibPosition",function(t,e,o,i,n,r,a,l,p){function s(t){var e="-";return t.replace(A,function(t,o){return(o?e:"")+t.toLowerCase()})}function u(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)}function c(){for(var t=-1,e=k.keys(),o=0;o<e.length;o++)k.get(e[o]).value.backdrop&&(t=o);return t>-1&&E>t&&(t=E),t}function d(t,e){var o=k.get(t).value,i=o.appendTo;k.remove(t),O=k.top(),O&&(E=parseInt(O.value.modalDomEl.attr("index"),10)),h(o.modalDomEl,o.modalScope,function(){var e=o.openedClass||y;T.remove(e,t);var n=T.hasKey(e);i.toggleClass(e,n),!n&&C&&C.heightOverflow&&C.scrollbarWidth&&(i.css(C.originalRight?{paddingRight:C.originalRight+"px"}:{paddingRight:""}),C=null),f(!0)},o.closedDeferred),m(),e&&e.focus?e.focus():i.focus&&i.focus()}function f(t){var e;k.length()>0&&(e=k.top().value,e.modalDomEl.toggleClass(e.windowTopClass||"",t))}function m(){if(w&&-1===c()){var t=$;h(w,$,function(){t=null}),w=void 0,$=void 0}}function h(e,o,i,n){function a(){a.done||(a.done=!0,t.leave(e).then(function(){i&&i(),e.remove(),n&&n.resolve()}),o.$destroy())}var l,p=null,s=function(){return l||(l=r.defer(),p=l.promise),function(){l.resolve()}};return o.$broadcast(x.NOW_CLOSING_EVENT,s),r.when(p).then(a)}function b(t){if(t.isDefaultPrevented())return t;var e=k.top();if(e)switch(t.which){case 27:e.value.keyboard&&(t.preventDefault(),n.$apply(function(){x.dismiss(e.key,"escape key press")}));break;case 9:var o=x.loadFocusElementList(e),i=!1;t.shiftKey?(x.isFocusInFirstItem(t,o)||x.isModalFocused(t,e))&&(i=x.focusLastFocusableElement(o)):x.isFocusInLastItem(t,o)&&(i=x.focusFirstFocusableElement(o)),i&&(t.preventDefault(),t.stopPropagation())}}function g(t,e,o){return!t.value.modalScope.$broadcast("modal.closing",e,o).defaultPrevented}function v(){Array.prototype.forEach.call(document.querySelectorAll("["+S+"]"),function(t){var e=parseInt(t.getAttribute(S),10),o=e-1;t.setAttribute(S,o),o||(t.removeAttribute(S),t.removeAttribute("aria-hidden"))})}var w,$,C,y="modal-open",k=l.createNew(),T=a.createNew(),x={NOW_CLOSING_EVENT:"modal.stack.now-closing"},E=0,O=null,S="data-bootstrap-modal-aria-hidden-count",D="a[href], area[href], input:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]",A=/[A-Z]/g;return n.$watch(c,function(t){$&&($.index=t)}),o.on("keydown",b),n.$on("$destroy",function(){o.off("keydown",b)}),x.open=function(e,r){function a(t){function e(t){var e=t.parent()?t.parent().children():[];return Array.prototype.filter.call(e,function(e){return e!==t[0]})}if(t&&"BODY"!==t[0].tagName)return e(t).forEach(function(t){var e="true"===t.getAttribute("aria-hidden"),o=parseInt(t.getAttribute(S),10);o||(o=e?1:0),t.setAttribute(S,o+1),t.setAttribute("aria-hidden","true")}),a(t.parent())}var l=o[0].activeElement,u=r.openedClass||y;f(!1),O=k.top(),k.add(e,{deferred:r.deferred,renderDeferred:r.renderDeferred,closedDeferred:r.closedDeferred,modalScope:r.scope,backdrop:r.backdrop,keyboard:r.keyboard,openedClass:r.openedClass,windowTopClass:r.windowTopClass,animation:r.animation,appendTo:r.appendTo}),T.put(u,e);var d=r.appendTo,m=c();m>=0&&!w&&($=n.$new(!0),$.modalOptions=r,$.index=m,w=angular.element('<div uib-modal-backdrop="modal-backdrop"></div>'),w.attr({"class":"modal-backdrop","ng-style":"{'z-index': 1040 + (index && 1 || 0) + index*10}","uib-modal-animation-class":"fade","modal-in-class":"in"}),r.backdropClass&&w.addClass(r.backdropClass),r.animation&&w.attr("modal-animation","true"),i(w)($),t.enter(w,d),p.isScrollable(d)&&(C=p.scrollbarPadding(d),C.heightOverflow&&C.scrollbarWidth&&d.css({paddingRight:C.right+"px"})));var h;r.component?(h=document.createElement(s(r.component.name)),h=angular.element(h),h.attr({resolve:"$resolve","modal-instance":"$uibModalInstance",close:"$close($value)",dismiss:"$dismiss($value)"})):h=r.content,E=O?parseInt(O.value.modalDomEl.attr("index"),10)+1:0;var b=angular.element('<div uib-modal-window="modal-window"></div>');b.attr({"class":"modal","template-url":r.windowTemplateUrl,"window-top-class":r.windowTopClass,role:"dialog","aria-labelledby":r.ariaLabelledBy,"aria-describedby":r.ariaDescribedBy,size:r.size,index:E,animate:"animate","ng-style":"{'z-index': 1050 + $$topModalIndex*10, display: 'block'}",tabindex:-1,"uib-modal-animation-class":"fade","modal-in-class":"in"}).append(h),r.windowClass&&b.addClass(r.windowClass),r.animation&&b.attr("modal-animation","true"),d.addClass(u),r.scope&&(r.scope.$$topModalIndex=E),t.enter(i(b)(r.scope),d),k.top().value.modalDomEl=b,k.top().value.modalOpener=l,a(b)},x.close=function(t,e){var o=k.get(t);return v(),o&&g(o,e,!0)?(o.value.modalScope.$$uibDestructionScheduled=!0,o.value.deferred.resolve(e),d(t,o.value.modalOpener),!0):!o},x.dismiss=function(t,e){var o=k.get(t);return v(),o&&g(o,e,!1)?(o.value.modalScope.$$uibDestructionScheduled=!0,o.value.deferred.reject(e),d(t,o.value.modalOpener),!0):!o},x.dismissAll=function(t){for(var e=this.getTop();e&&this.dismiss(e.key,t);)e=this.getTop()},x.getTop=function(){return k.top()},x.modalRendered=function(t){var e=k.get(t);e&&e.value.renderDeferred.resolve()},x.focusFirstFocusableElement=function(t){return t.length>0?(t[0].focus(),!0):!1},x.focusLastFocusableElement=function(t){return t.length>0?(t[t.length-1].focus(),!0):!1},x.isModalFocused=function(t,e){if(t&&e){var o=e.value.modalDomEl;if(o&&o.length)return(t.target||t.srcElement)===o[0]}return!1},x.isFocusInFirstItem=function(t,e){return e.length>0?(t.target||t.srcElement)===e[0]:!1},x.isFocusInLastItem=function(t,e){return e.length>0?(t.target||t.srcElement)===e[e.length-1]:!1},x.loadFocusElementList=function(t){if(t){var e=t.value.modalDomEl;if(e&&e.length){var o=e[0].querySelectorAll(D);return o?Array.prototype.filter.call(o,function(t){return u(t)}):o}}},x}]).provider("$uibModal",function(){var t={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$rootScope","$q","$document","$templateRequest","$controller","$uibResolve","$uibModalStack",function(e,o,i,n,r,a,l){function p(t){return t.template?o.when(t.template):n(angular.isFunction(t.templateUrl)?t.templateUrl():t.templateUrl)}var s={},u=null;return s.getPromiseChain=function(){return u},s.open=function(n){function s(){return b}var c=o.defer(),d=o.defer(),f=o.defer(),m=o.defer(),h={result:c.promise,opened:d.promise,closed:f.promise,rendered:m.promise,close:function(t){return l.close(h,t)},dismiss:function(t){return l.dismiss(h,t)}};if(n=angular.extend({},t.options,n),n.resolve=n.resolve||{},n.appendTo=n.appendTo||i.find("body").eq(0),!n.appendTo.length)throw new Error("appendTo element not found. Make sure that the element passed is in DOM.");if(!n.component&&!n.template&&!n.templateUrl)throw new Error("One of component or template or templateUrl options is required.");var b;b=n.component?o.when(a.resolve(n.resolve,{},null,null)):o.all([p(n),a.resolve(n.resolve,{},null,null)]);var g;return g=u=o.all([u]).then(s,s).then(function(t){function o(e,o,i,n){e.$scope=a,e.$scope.$resolve={},i?e.$scope.$uibModalInstance=h:e.$uibModalInstance=h;var r=o?t[1]:t;angular.forEach(r,function(t,o){n&&(e[o]=t),e.$scope.$resolve[o]=t})}var i=n.scope||e,a=i.$new();a.$close=h.close,a.$dismiss=h.dismiss,a.$on("$destroy",function(){a.$$uibDestructionScheduled||a.$dismiss("$uibUnscheduledDestruction")});var p,s,u={scope:a,deferred:c,renderDeferred:m,closedDeferred:f,animation:n.animation,backdrop:n.backdrop,keyboard:n.keyboard,backdropClass:n.backdropClass,windowTopClass:n.windowTopClass,windowClass:n.windowClass,windowTemplateUrl:n.windowTemplateUrl,ariaLabelledBy:n.ariaLabelledBy,ariaDescribedBy:n.ariaDescribedBy,size:n.size,openedClass:n.openedClass,appendTo:n.appendTo},b={},g={};n.component?(o(b,!1,!0,!1),b.name=n.component,u.component=b):n.controller&&(o(g,!0,!1,!0),s=r(n.controller,g,!0,n.controllerAs),n.controllerAs&&n.bindToController&&(p=s.instance,p.$close=a.$close,p.$dismiss=a.$dismiss,angular.extend(p,{$resolve:g.$scope.$resolve},i)),p=s(),angular.isFunction(p.$onInit)&&p.$onInit()),n.component||(u.content=t[0]),l.open(h,u),d.resolve(!0)},function(t){d.reject(t),c.reject(t)})["finally"](function(){u===g&&(u=null)}),h},s}]};return t}),angular.module("ui.bootstrap.multiMap",[]).factory("$$multiMap",function(){return{createNew:function(){var t={};return{entries:function(){return Object.keys(t).map(function(e){return{key:e,value:t[e]}})},get:function(e){return t[e]},hasKey:function(e){return!!t[e]},keys:function(){return Object.keys(t)},put:function(e,o){t[e]||(t[e]=[]),t[e].push(o)},remove:function(e,o){var i=t[e];if(i){var n=i.indexOf(o);-1!==n&&i.splice(n,1),i.length||delete t[e]}}}}}}),angular.module("ui.bootstrap.stackedMap",[]).factory("$$stackedMap",function(){return{createNew:function(){var t=[];return{add:function(e,o){t.push({key:e,value:o})},get:function(e){for(var o=0;o<t.length;o++)if(e===t[o].key)return t[o]},keys:function(){for(var e=[],o=0;o<t.length;o++)e.push(t[o].key);return e},top:function(){return t[t.length-1]},remove:function(e){for(var o=-1,i=0;i<t.length;i++)if(e===t[i].key){o=i;break}return t.splice(o,1)[0]},removeTop:function(){return t.pop()},length:function(){return t.length}}}}}),angular.module("ui.bootstrap.position",[]).factory("$uibPosition",["$document","$window",function(t,e){var o,i,n={normal:/(auto|scroll)/,hidden:/(auto|scroll|hidden)/},r={auto:/\s?auto?\s?/i,primary:/^(top|bottom|left|right)$/,secondary:/^(top|bottom|left|right|center)$/,vertical:/^(top|bottom)$/},a=/(HTML|BODY)/;return{getRawNode:function(t){return t.nodeName?t:t[0]||t},parseStyle:function(t){return t=parseFloat(t),isFinite(t)?t:0},offsetParent:function(o){function i(t){return"static"===(e.getComputedStyle(t).position||"static")}o=this.getRawNode(o);for(var n=o.offsetParent||t[0].documentElement;n&&n!==t[0].documentElement&&i(n);)n=n.offsetParent;return n||t[0].documentElement},scrollbarWidth:function(n){if(n){if(angular.isUndefined(i)){var r=t.find("body");r.addClass("uib-position-body-scrollbar-measure"),i=e.innerWidth-r[0].clientWidth,i=isFinite(i)?i:0,r.removeClass("uib-position-body-scrollbar-measure")}return i}if(angular.isUndefined(o)){var a=angular.element('<div class="uib-position-scrollbar-measure"></div>');t.find("body").append(a),o=a[0].offsetWidth-a[0].clientWidth,o=isFinite(o)?o:0,a.remove()}return o},scrollbarPadding:function(t){t=this.getRawNode(t);var o=e.getComputedStyle(t),i=this.parseStyle(o.paddingRight),n=this.parseStyle(o.paddingBottom),r=this.scrollParent(t,!1,!0),l=this.scrollbarWidth(a.test(r.tagName));return{scrollbarWidth:l,widthOverflow:r.scrollWidth>r.clientWidth,right:i+l,originalRight:i,heightOverflow:r.scrollHeight>r.clientHeight,bottom:n+l,originalBottom:n}},isScrollable:function(t,o){t=this.getRawNode(t);var i=o?n.hidden:n.normal,r=e.getComputedStyle(t);return i.test(r.overflow+r.overflowY+r.overflowX)},scrollParent:function(o,i,r){o=this.getRawNode(o);var a=i?n.hidden:n.normal,l=t[0].documentElement,p=e.getComputedStyle(o);if(r&&a.test(p.overflow+p.overflowY+p.overflowX))return o;var s="absolute"===p.position,u=o.parentElement||l;if(u===l||"fixed"===p.position)return l;for(;u.parentElement&&u!==l;){var c=e.getComputedStyle(u);if(s&&"static"!==c.position&&(s=!1),!s&&a.test(c.overflow+c.overflowY+c.overflowX))break;u=u.parentElement}return u},position:function(o,i){o=this.getRawNode(o);var n=this.offset(o);if(i){var r=e.getComputedStyle(o);n.top-=this.parseStyle(r.marginTop),n.left-=this.parseStyle(r.marginLeft)}var a=this.offsetParent(o),l={top:0,left:0};return a!==t[0].documentElement&&(l=this.offset(a),l.top+=a.clientTop-a.scrollTop,l.left+=a.clientLeft-a.scrollLeft),{width:Math.round(angular.isNumber(n.width)?n.width:o.offsetWidth),height:Math.round(angular.isNumber(n.height)?n.height:o.offsetHeight),top:Math.round(n.top-l.top),left:Math.round(n.left-l.left)}},offset:function(o){o=this.getRawNode(o);var i=o.getBoundingClientRect();return{width:Math.round(angular.isNumber(i.width)?i.width:o.offsetWidth),height:Math.round(angular.isNumber(i.height)?i.height:o.offsetHeight),top:Math.round(i.top+(e.pageYOffset||t[0].documentElement.scrollTop)),left:Math.round(i.left+(e.pageXOffset||t[0].documentElement.scrollLeft))}},viewportOffset:function(o,i,n){o=this.getRawNode(o),n=n!==!1?!0:!1;var r=o.getBoundingClientRect(),a={top:0,left:0,bottom:0,right:0},l=i?t[0].documentElement:this.scrollParent(o),p=l.getBoundingClientRect();if(a.top=p.top+l.clientTop,a.left=p.left+l.clientLeft,l===t[0].documentElement&&(a.top+=e.pageYOffset,a.left+=e.pageXOffset),a.bottom=a.top+l.clientHeight,a.right=a.left+l.clientWidth,n){var s=e.getComputedStyle(l);a.top+=this.parseStyle(s.paddingTop),a.bottom-=this.parseStyle(s.paddingBottom),a.left+=this.parseStyle(s.paddingLeft),a.right-=this.parseStyle(s.paddingRight)}return{top:Math.round(r.top-a.top),bottom:Math.round(a.bottom-r.bottom),left:Math.round(r.left-a.left),right:Math.round(a.right-r.right)}},parsePlacement:function(t){var e=r.auto.test(t);return e&&(t=t.replace(r.auto,"")),t=t.split("-"),t[0]=t[0]||"top",r.primary.test(t[0])||(t[0]="top"),t[1]=t[1]||"center",r.secondary.test(t[1])||(t[1]="center"),t[2]=e?!0:!1,t},positionElements:function(t,o,i,n){t=this.getRawNode(t),o=this.getRawNode(o);var a=angular.isDefined(o.offsetWidth)?o.offsetWidth:o.prop("offsetWidth"),l=angular.isDefined(o.offsetHeight)?o.offsetHeight:o.prop("offsetHeight");i=this.parsePlacement(i);var p=n?this.offset(t):this.position(t),s={top:0,left:0,placement:""};if(i[2]){var u=this.viewportOffset(t,n),c=e.getComputedStyle(o),d={width:a+Math.round(Math.abs(this.parseStyle(c.marginLeft)+this.parseStyle(c.marginRight))),height:l+Math.round(Math.abs(this.parseStyle(c.marginTop)+this.parseStyle(c.marginBottom)))};if(i[0]="top"===i[0]&&d.height>u.top&&d.height<=u.bottom?"bottom":"bottom"===i[0]&&d.height>u.bottom&&d.height<=u.top?"top":"left"===i[0]&&d.width>u.left&&d.width<=u.right?"right":"right"===i[0]&&d.width>u.right&&d.width<=u.left?"left":i[0],i[1]="top"===i[1]&&d.height-p.height>u.bottom&&d.height-p.height<=u.top?"bottom":"bottom"===i[1]&&d.height-p.height>u.top&&d.height-p.height<=u.bottom?"top":"left"===i[1]&&d.width-p.width>u.right&&d.width-p.width<=u.left?"right":"right"===i[1]&&d.width-p.width>u.left&&d.width-p.width<=u.right?"left":i[1],"center"===i[1])if(r.vertical.test(i[0])){var f=p.width/2-a/2;u.left+f<0&&d.width-p.width<=u.right?i[1]="left":u.right+f<0&&d.width-p.width<=u.left&&(i[1]="right")}else{var m=p.height/2-d.height/2;u.top+m<0&&d.height-p.height<=u.bottom?i[1]="top":u.bottom+m<0&&d.height-p.height<=u.top&&(i[1]="bottom")}}switch(i[0]){case"top":s.top=p.top-l;break;case"bottom":s.top=p.top+p.height;break;case"left":s.left=p.left-a;break;case"right":s.left=p.left+p.width}switch(i[1]){case"top":s.top=p.top;break;case"bottom":s.top=p.top+p.height-l;break;case"left":s.left=p.left;break;case"right":s.left=p.left+p.width-a;break;case"center":r.vertical.test(i[0])?s.left=p.left+p.width/2-a/2:s.top=p.top+p.height/2-l/2}return s.top=Math.round(s.top),s.left=Math.round(s.left),s.placement="center"===i[1]?i[0]:i[0]+"-"+i[1],s},adjustTop:function(t,e,o,i){return-1!==t.indexOf("top")&&o!==i?{top:e.top-i+"px"}:void 0},positionArrow:function(t,o){t=this.getRawNode(t);var i=t.querySelector(".tooltip-inner, .popover-inner");if(i){var n=angular.element(i).hasClass("tooltip-inner"),a=t.querySelector(n?".tooltip-arrow":".arrow");if(a){var l={top:"",bottom:"",left:"",right:""};if(o=this.parsePlacement(o),"center"===o[1])return void angular.element(a).css(l);var p="border-"+o[0]+"-width",s=e.getComputedStyle(a)[p],u="border-";u+=r.vertical.test(o[0])?o[0]+"-"+o[1]:o[1]+"-"+o[0],u+="-radius";var c=e.getComputedStyle(n?i:t)[u];switch(o[0]){case"top":l.bottom=n?"0":"-"+s;break;case"bottom":l.top=n?"0":"-"+s;break;case"left":l.right=n?"0":"-"+s;break;case"right":l.left=n?"0":"-"+s}l[o[1]]=c,angular.element(a).css(l)}}}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.stackedMap"]).provider("$uibTooltip",function(){function t(t){var e=/[A-Z]/g,o="-";return t.replace(e,function(t,e){return(e?o:"")+t.toLowerCase()})}var e={placement:"top",placementClassPrefix:"",animation:!0,popupDelay:0,popupCloseDelay:0,useContentExp:!1},o={mouseenter:"mouseleave",click:"click",outsideClick:"outsideClick",focus:"blur",none:""},i={};this.options=function(t){angular.extend(i,t)},this.setTriggers=function(t){angular.extend(o,t)},this.$get=["$window","$compile","$timeout","$document","$uibPosition","$interpolate","$rootScope","$parse","$$stackedMap",function(n,r,a,l,p,s,u,c,d){function f(t){if(27===t.which){var e=m.top();e&&(e.value.close(),e=null)}}var m=d.createNew();return l.on("keyup",f),u.$on("$destroy",function(){l.off("keyup",f)}),function(n,u,d,f){function h(t){var e=(t||f.trigger||d).split(" "),i=e.map(function(t){return o[t]||t});return{show:e,hide:i}}f=angular.extend({},e,i,f);var b=t(n),g=s.startSymbol(),v=s.endSymbol(),w="<div "+b+'-popup uib-title="'+g+"title"+v+'" '+(f.useContentExp?'content-exp="contentExp()" ':'content="'+g+"content"+v+'" ')+'origin-scope="origScope" class="uib-position-measure '+u+'" tooltip-animation-class="fade"uib-tooltip-classes ng-class="{ in: isOpen }" ></div>';return{compile:function(){var t=r(w);return function(e,o,i){function r(){U.isOpen?d():s()}function s(){(!H||e.$eval(i[u+"Enable"]))&&(w(),y(),U.popupDelay?I||(I=a(b,U.popupDelay,!1)):b())}function d(){g(),U.popupCloseDelay?N||(N=a(v,U.popupCloseDelay,!1)):v()}function b(){return g(),w(),U.content?($(),void U.$evalAsync(function(){U.isOpen=!0,k(!0),z()})):angular.noop}function g(){I&&(a.cancel(I),I=null),P&&(a.cancel(P),P=null)}function v(){U&&U.$evalAsync(function(){U&&(U.isOpen=!1,k(!1),U.animation?M||(M=a(C,150,!1)):C())})}function w(){N&&(a.cancel(N),N=null),M&&(a.cancel(M),M=null)}function $(){D||(A=U.$new(),D=t(A,function(t){L?l.find("body").append(t):o.after(t)}),m.add(U,{close:v}),T())}function C(){g(),w(),x(),D&&(D.remove(),D=null,R&&a.cancel(R)),m.remove(U),A&&(A.$destroy(),A=null)}function y(){U.title=i[u+"Title"],U.content=j?j(e):i[n],U.popupClass=i[u+"Class"],U.placement=angular.isDefined(i[u+"Placement"])?i[u+"Placement"]:f.placement;var t=p.parsePlacement(U.placement);F=t[1]?t[0]+"-"+t[1]:t[0];var o=parseInt(i[u+"PopupDelay"],10),r=parseInt(i[u+"PopupCloseDelay"],10);U.popupDelay=isNaN(o)?f.popupDelay:o,U.popupCloseDelay=isNaN(r)?f.popupCloseDelay:r}function k(t){B&&angular.isFunction(B.assign)&&B.assign(e,t)}function T(){G.length=0,j?(G.push(e.$watch(j,function(t){U.content=t,!t&&U.isOpen&&v()})),G.push(A.$watch(function(){q||(q=!0,A.$$postDigest(function(){q=!1,U&&U.isOpen&&z()}))}))):G.push(i.$observe(n,function(t){U.content=t,!t&&U.isOpen?v():z()})),G.push(i.$observe(u+"Title",function(t){U.title=t,U.isOpen&&z()})),G.push(i.$observe(u+"Placement",function(t){U.placement=t?t:f.placement,U.isOpen&&z()}))}function x(){G.length&&(angular.forEach(G,function(t){t()}),G.length=0)}function E(t){U&&U.isOpen&&D&&(o[0].contains(t.target)||D[0].contains(t.target)||d())}function O(t){27===t.which&&d()}function S(){var t=[],n=[],a=e.$eval(i[u+"Trigger"]);_(),angular.isObject(a)?(Object.keys(a).forEach(function(e){t.push(e),n.push(a[e])}),W={show:t,hide:n}):W=h(a),"none"!==W.show&&W.show.forEach(function(t,e){"outsideClick"===t?(o.on("click",r),l.on("click",E)):t===W.hide[e]?o.on(t,r):t&&(o.on(t,s),o.on(W.hide[e],d)),o.on("keypress",O)})}var D,A,M,I,N,P,R,F,L=angular.isDefined(f.appendToBody)?f.appendToBody:!1,W=h(void 0),H=angular.isDefined(i[u+"Enable"]),U=e.$new(!0),q=!1,B=angular.isDefined(i[u+"IsOpen"])?c(i[u+"IsOpen"]):!1,j=f.useContentExp?c(i[n]):!1,G=[],z=function(){D&&D.html()&&(P||(P=a(function(){var t=p.positionElements(o,D,U.placement,L),e=angular.isDefined(D.offsetHeight)?D.offsetHeight:D.prop("offsetHeight"),i=L?p.offset(o):p.position(o);D.css({top:t.top+"px",left:t.left+"px"});var n=t.placement.split("-");D.hasClass(n[0])||(D.removeClass(F.split("-")[0]),D.addClass(n[0])),D.hasClass(f.placementClassPrefix+t.placement)||(D.removeClass(f.placementClassPrefix+F),D.addClass(f.placementClassPrefix+t.placement)),R=a(function(){var t=angular.isDefined(D.offsetHeight)?D.offsetHeight:D.prop("offsetHeight"),o=p.adjustTop(n,i,e,t);o&&D.css(o),R=null},0,!1),D.hasClass("uib-position-measure")?(p.positionArrow(D,t.placement),D.removeClass("uib-position-measure")):F!==t.placement&&p.positionArrow(D,t.placement),F=t.placement,P=null},0,!1)))};U.origScope=e,U.isOpen=!1,U.contentExp=function(){return U.content},i.$observe("disabled",function(t){t&&g(),t&&U.isOpen&&v()}),B&&e.$watch(B,function(t){U&&!t===U.isOpen&&r()});var _=function(){W.show.forEach(function(t){"outsideClick"===t?o.off("click",r):(o.off(t,s),o.off(t,r)),o.off("keypress",O)}),W.hide.forEach(function(t){"outsideClick"===t?l.off("click",E):o.off(t,d)})};S();var Y=e.$eval(i[u+"Animation"]);U.animation=angular.isDefined(Y)?!!Y:f.animation;var X,V=u+"AppendToBody";X=V in i&&void 0===i[V]?!0:e.$eval(i[V]),L=angular.isDefined(X)?X:L,e.$on("$destroy",function(){_(),C(),U=null})}}}}}]}).directive("uibTooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest",function(t,e,o,i){return{link:function(n,r,a){var l,p,s,u=n.$eval(a.tooltipTemplateTranscludeScope),c=0,d=function(){p&&(p.remove(),p=null),l&&(l.$destroy(),l=null),s&&(t.leave(s).then(function(){p=null}),p=s,s=null)};n.$watch(e.parseAsResourceUrl(a.uibTooltipTemplateTransclude),function(e){var a=++c;e?(i(e,!0).then(function(i){if(a===c){var n=u.$new(),p=i,f=o(p)(n,function(e){d(),t.enter(e,r)});l=n,s=f,l.$emit("$includeContentLoaded",e)}},function(){a===c&&(d(),n.$emit("$includeContentError",e))}),n.$emit("$includeContentRequested",e)):d()}),n.$on("$destroy",d)}}}]).directive("uibTooltipClasses",["$uibPosition",function(t){return{restrict:"A",link:function(e,o,i){if(e.placement){var n=t.parsePlacement(e.placement);o.addClass(n[0])}e.popupClass&&o.addClass(e.popupClass),e.animation&&o.addClass(i.tooltipAnimationClass)}}}]).directive("uibTooltipPopup",function(){return{restrict:"A",scope:{content:"@"},templateUrl:"uib/template/tooltip/tooltip-popup.html"}}).directive("uibTooltip",["$uibTooltip",function(t){return t("uibTooltip","tooltip","mouseenter")}]).directive("uibTooltipTemplatePopup",function(){return{restrict:"A",scope:{contentExp:"&",originScope:"&"},templateUrl:"uib/template/tooltip/tooltip-template-popup.html"}}).directive("uibTooltipTemplate",["$uibTooltip",function(t){return t("uibTooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("uibTooltipHtmlPopup",function(){return{restrict:"A",scope:{contentExp:"&"},templateUrl:"uib/template/tooltip/tooltip-html-popup.html"}}).directive("uibTooltipHtml",["$uibTooltip",function(t){return t("uibTooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("uib/template/accordion/accordion-group.html",[]).run(["$templateCache",function(t){t.put("uib/template/accordion/accordion-group.html",'<div role="tab" id="{{::headingId}}" aria-selected="{{isOpen}}" class="panel-heading" ng-keypress="toggleOpen($event)">\n  <h4 class="panel-title">\n    <a role="button" data-toggle="collapse" href aria-expanded="{{isOpen}}" aria-controls="{{::panelId}}" tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" uib-accordion-transclude="heading" ng-disabled="isDisabled" uib-tabindex-toggle><span uib-accordion-header ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n  </h4>\n</div>\n<div id="{{::panelId}}" aria-labelledby="{{::headingId}}" aria-hidden="{{!isOpen}}" role="tabpanel" class="panel-collapse collapse" uib-collapse="!isOpen">\n  <div class="panel-body" ng-transclude></div>\n</div>\n')}]),angular.module("uib/template/accordion/accordion.html",[]).run(["$templateCache",function(t){t.put("uib/template/accordion/accordion.html",'<div role="tablist" class="panel-group" ng-transclude></div>')}]),angular.module("uib/template/modal/window.html",[]).run(["$templateCache",function(t){t.put("uib/template/modal/window.html","<div class=\"modal-dialog {{size ? 'modal-' + size : ''}}\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n")}]),angular.module("uib/template/tooltip/tooltip-html-popup.html",[]).run(["$templateCache",function(t){t.put("uib/template/tooltip/tooltip-html-popup.html",'<div class="tooltip-arrow"></div>\n<div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n')}]),angular.module("uib/template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(t){t.put("uib/template/tooltip/tooltip-popup.html",'<div class="tooltip-arrow"></div>\n<div class="tooltip-inner" ng-bind="content"></div>\n')}]),angular.module("uib/template/tooltip/tooltip-template-popup.html",[]).run(["$templateCache",function(t){t.put("uib/template/tooltip/tooltip-template-popup.html",'<div class="tooltip-arrow"></div>\n<div class="tooltip-inner"\n  uib-tooltip-template-transclude="contentExp()"\n  tooltip-template-transclude-scope="originScope()"></div>\n')}]),angular.module("ui.bootstrap.position").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibPositionCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'),angular.$$uibPositionCss=!0
}),angular.module("ui.bootstrap.tooltip").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTooltipCss&&angular.element(document).find("head").prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'),angular.$$uibTooltipCss=!0});
( function() {

    "use strict";

    angular.module( "app.options" )
        .directive( "appOptions", appOptions );

    appOptions.$inject = [ "pages" ];

    function appOptions( pages ) {
        var directive = {
            restrict: "AE",
            controller: controller,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            scope.oneAtATime = true;
            scope.status = {
                isFirstOpen: true,
                isFirstDisabled: false
            };

            scope.inactive = false;
            vm.pages = pages.isHome;

            scope.$watchCollection( function() {
                return vm.pages[ 0 ];
            }, function( newValue, oldValue ) {

                if ( newValue === oldValue ) {
                    return;
                }
                if ( newValue === false ) {
                    scope.inactive = true;
                } else {
                    scope.inactive = false;
                }
            } );
        }
    }


} )();

( function() {

    "use strict";

    angular.module( "app.intro" )
        .directive( "appIntroImage", appIntroImage );

    appIntroImage.$inject = [ "intro" ];

    function appIntroImage( intro ) {
        var directive = {
            restrict: "EA",
            controllerAs: "vmIntro",
            controller: controller,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            vm.introImage = intro.page[ 0 ]
            vm.page = intro.page;

            scope.$watchCollection( function() {
                return vm.page[ 0 ];
            }, function( newValue, oldValue ) {

                if ( newValue === oldValue ) {
                    return;
                }
                vm.introImage = true;
                intro.page[ 0 ] = true;
            } );
        }
    }


} )();

( function() {

    "use strict";

    angular.module( "app.intro" )
        .directive( "appIntroMessage", appIntroMessage );

    appIntroMessage.$inject = [ "pages", "$uibModal", "$log", "$document", "intro" ];

    function appIntroMessage( pages, $uibModal, $log, $document, intro ) {
        var directive = {
            restrict: "AE",
            replace: true,
            templateUrl: "app/modules/intro/introMessage.html",
            controller: controller,
            controllerAs: "vmWE",
        }

        return directive;

        function controller() {
            var vm = this;
            vm.animationsEnabled = true;

            vm.open = function( parentSelector ) {
                var parentElem = parentSelector ? angular.element( $document[ 0 ].querySelector( ".intro-modal" + parentSelector ) ) : undefined;

                var modalInstance = $uibModal.open( {
                    animation: vm.animationsEnabled,
                    ariaLabelledBy: "modal-title",
                    windowClass: "intro-modal",
                    ariaDescribedBy: "modal-body",
                    templateUrl: "introMessage.html",
                    backdrop: "static",
                    controllerAs: "vmWE",
                    controller: [ "$uibModalInstance", function( $uibModalInstance ) {
                        var vm = this;
                        vm.ok = function() {
                            intro.page.push( true );
                            $uibModalInstance.close();
                        };
                    } ]
                } );
                vm.toggleAnimation = function() {
                    vm.animationsEnabled = !vm.animationsEnabled;
                };
            };
        }
    }

} )();

( function() {
    "use strict";

    angular
        .module( "app.intro" )
        .service( "intro", intro )

    function intro() {
        this.page = [];
    }

}() );

( function() {

    "use strict";

    angular.module( "app.painting" )
        .directive( "appPainting", appPainting );

    appPainting.$inject = [ "getColors", "getBrushSizes", "getBrushes", "eraser", "setCursor" ];

    function appPainting( getColors, getBrushSizes, getBrushes, eraser, setCursor ) {

        var directive = {
            restrict: "EA",
            replace: true,
            templateUrl: "app/shared/canvas/canvas.html",
            link: link
        }

        return directive;

        function link( scope, element ) {

            var canvas = element[ 0 ].querySelector( "#layer1" ),
                canvas2 = element[ 0 ].querySelector( "#layer2" ),
                context = canvas.getContext( "2d" ),
                context2 = canvas2.getContext( "2d" ),
                eraserSettings = {
                    color: "#fff",
                    type: "round"
                },
                pos = {
                    x: 0,
                    y: 0
                },
                color = getColors.brush,
                size = getBrushSizes.brush,
                type = getBrushes.brush;

            scope.$watchCollection( function() {
                return getBrushes.brush.stored[ 0 ];
            }, function( newValue, oldValue ) {

                if ( newValue === oldValue ) {
                    return;
                }

                type.current = newValue;
                type.stored[ 0 ] = newValue;
                color.current = color.stored[ 0 ];

            } );

            scope.$watchCollection( function() {
                return getBrushSizes.brush.stored[ 0 ];
            }, function( newValue, oldValue ) {

                if ( newValue === oldValue ) {
                    return;
                }
                size.current = newValue;
                size.stored[ 0 ] = newValue;

            } );

            scope.$watchCollection( function() {
                return getColors.brush.stored[ 0 ];
            }, function( newValue, oldValue ) {

                if ( newValue === oldValue ) {
                    return;
                }

                color.current = newValue;
                color.stored[ 0 ] = newValue;
                type.current = type.stored[ 0 ];
                eraser.eraser.selected[ 0 ] = false;
            } );

            scope.$watchCollection( function() {
                return eraser.eraser.selected[ 0 ];
            }, function( newValue, oldValue ) {
                if ( newValue === oldValue ) {
                    return;
                }

                if ( newValue === true ) {
                    color.current = eraserSettings.color;
                    type.current = eraserSettings.type;
                } else {
                    color.current = color.stored[ 0 ];
                    type.current = type.stored[ 0 ];
                }

            } );




            var rect = {
                    startX: 0,
                    startY: 0
                },
                drag = false;


            element.bind( "touchstart", touchHandler );
            element.bind( "touchmove", touchHandler );
            element.bind( "touchend", touchHandler );

            function touchHandler( event ) {
                if ( event.targetTouches.length == 1 ) {
                    var touch = event.targetTouches[ 0 ];

                    if ( event.type == "touchstart" ) {
                        rect.startX = touch.pageX;
                        rect.startY = touch.pageY;
                        drag = true;
                    } else if ( event.type == "touchmove" ) {
                        if ( drag ) {

                            var rect1 = canvas.getBoundingClientRect();
                            context.beginPath();
                            context.moveTo( rect.startX, rect.startY );

                            rect.startX = touch.pageX - rect1.left;
                            rect.startY = touch.pageY ;
                            context.lineTo( rect.startX, rect.startY );
                            context.stroke()
                        }
                    } else if ( event.type == "touchend" || event.type == "touchcancel" ) {
                        drag = false;
                    }
                }
            }


            element.bind( "mousemove", draw );
            element.bind( "mousedown", setPosition );
            element.bind( "mouseenter", setPosition );

            function draw( e ) {
                if ( e.buttons !== 1 ) {
                    return;
                }
                context.beginPath();

                // painitng options
                context.strokeStyle = color.current; // color
                context.lineWidth = size.current; // size
                context.lineCap = type.current; // brush type

                //drawing
                context.imageSmoothingEnabled = false;
                context.moveTo( pos.x, pos.y );
                setPosition( e );
                context.lineTo( pos.x, pos.y );
                context.stroke();

            }

            function setPosition( e ) {
                var rect = canvas2.getBoundingClientRect();
                pos.y = e.clientY - rect.top;
                pos.x = e.clientX - rect.left;

            }
        }
    }

} )();

( function() {

    "use strict";

    angular.module( "app.painting" )
        .directive( "appShowCursor", appShowCursor );

    appShowCursor.$inject = [ "setCursor", "getBrushes" ];

    function appShowCursor( setCursor, getBrushes ) {
        var directive = {
            restrict: "EAC",
            controllerAs: "vmCursor",
            controller: controller,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            var canvas = element[ 0 ],
                context = canvas.getContext( "2d" );

            vm.cursor = setCursor.cursor.stored[ 0 ]

            scope.$watch( function() {
                return setCursor.cursor.current
            }, function( newValue, oldValue ) {
                if ( newValue === oldValue ) {
                    return;
                }
                vm.cursor = setCursor.cursor.current
                setCursor.cursor.stored[ 0 ] = setCursor.cursor.current
            } );
        }
    }

} )();

( function() {
    "use strict";

    angular
        .module( "app.painting" )
        .service( "setCursor", setCursor )

    function setCursor() {

        this.cursor = {
            current: "",
            brush: [],
            stored: []
        }
    }

}() );

( function() {

    "use strict";

    angular.module( "app.canvas" )
        .directive( "appBackground", appBackground )


    function appBackground() {
        var directive = {
            restrict: "EA",
            link: link
        }

        return directive;

        function link( scope, element, attrs ) {
            var canvas = element[ 0 ],
                context = canvas.getContext( "2d" );

            angular.element( document ).ready( function() {
                context.rect( 0, 0, canvas.width, canvas.height );
                context.fillStyle = "#fff";
                context.fill();
            } )
        }
    }

} )();

( function() {

    "use strict";

    angular.module( "app.canvas" )
        .directive( "appCanvas", appCanvas );

    appCanvas.$inject = [ "$timeout", "$window", "canvasSize" ];

    function appCanvas( $timeout, $window, canvasSize ) {
        var directive = {
            restrict: "EA",
            require: "^appAdjustWidth",
            controllerAs: "vmCY",
            controller: controller,
            link: link
        }
        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            var canvasWrapper = vm.canvasWrapper;

            scope.adjusted = {
                width: canvasWrapper.offsetWidth - 25,
                height: ( canvasWrapper.offsetWidth - 25 ) / 1.37775061124
            }
        }
    }
} )();

( function() {

    "use strict";

    angular.module( "app.canvas" )
        .directive( "appOnResize", appOnResize );

    appOnResize.$inject = [ "canvasSize" ];

    function appOnResize( canvasSize ) {
        var directive = {
            restrict: "EA",
            controller: controller,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {
            var pageContent = document.getElementById( "page-content" );
            vm.canvasSizeChange = canvasSize.width;

            scope.$watchCollection( function() {
                return vm.canvasSizeChange[ 0 ];
            }, function( newValue, oldValue ) {
                if ( newValue === oldValue ) {
                    return;
                }

                if ( newValue >= element[ 0 ].width ) {
                    pageContent.classList.remove( "show-scroll" );
                } else {
                    pageContent.style.height = element[ 0 ].height + "px";
                    pageContent.classList.add( "show-scroll" );
                }
            } );
        }
    }
} )();

( function() {
    "use strict";

    angular
        .module( "app" )
        .service( "storeCanvas", storeCanvas )

    function storeCanvas() {
        this.canvasContent = [];
    }


}() );

( function() {
    "use strict";

    angular
        .module( "app" )
        .service( "getStorage", getStorage )

    getStorage.$inject = [ "storeCanvas", "getColors", "getBrushSizes", "getBrushes", "pages", "eraser", "setCursor" ];


    function getStorage( storeCanvas, getColors, getBrushSizes, getBrushes, pages, eraser, setCursor ) {
        var canvasContent = storeCanvas.canvasContent;

        this.getData = function() {

            pages.isHome[ 0 ] = true;
            setCursor.cursor.stored[ 0 ] = setCursor.cursor.current
            getBrushSizes.brush.current = getBrushSizes.brush.stored;

            if ( eraser.eraser.selected[ 0 ] === true ) {
                getColors.brush.current = "#fff";
                getBrushes.brush.current = "round";
            } else {
                getColors.brush.current = getColors.brush.stored;
                getBrushes.brush.current = getBrushes.brush.stored;
            }

            angular.element( document ).ready( function() {

                function getData( elementId, index ) {
                    if ( canvasContent.length > 0 ) {
                        var canvas = document.getElementById( elementId ),
                            context = canvas.getContext( "2d" ),
                            dataURL = canvasContent[ index ],
                            img = new Image;

                        img.src = dataURL;
                        img.onload = function() {
                            context.drawImage( img, 0, 0, canvas.width, canvas.height );
                        }
                    }
                }

                getData( "layer1", 0 );
                getData( "layer2", 1 );
                getData( "layer4", 2 );
                getData( "layer5", 3 );

            } )
        }
    }

}() );

( function() {
    "use strict";
    angular
        .module( "app" )
        .service( "pages", pages )

    function pages() {
        this.isHome = [];
    }

}() );

( function() {
    "use strict";
    angular
        .module( "app" )
        .service( "setStorage", setStorage );

    setStorage.$inject = [ "storeCanvas", "getColors", "getBrushSizes", "getBrushes", "pages", "setCursor" ];

    function setStorage( storeCanvas, getColors, getBrushSizes, getBrushes, pages, setCursor ) {

        var canvasContent = storeCanvas.canvasContent;

        this.setData = function() {

            pages.isHome[ 0 ] = false;
            getColors.brush.current = getColors.brush.stored;
            getBrushSizes.brush.current = getBrushSizes.brush.stored;
            getBrushes.brush.current = getBrushes.brush.stored;
            setCursor.cursor.current = setCursor.cursor.stored[ 0 ]

            var canvas = document.getElementById( "layer1" ),
                canvas2 = document.getElementById( "layer2" ),
                canvas4 = document.getElementById( "layer4" ),
                canvas5 = document.getElementById( "layer5" )

            if ( canvas ) {
                canvasContent[ 0 ] = canvas.toDataURL();
                canvasContent[ 1 ] = canvas2.toDataURL();
                canvasContent[ 2 ] = canvas4.toDataURL();
                canvasContent[ 3 ] = canvas5.toDataURL();
            }
        }
    }
}() );

( function() {

    "use strict";

    angular.module( "app.image" )
        .directive( "appAddImage", appAddImage );

    appAddImage.$inject = [ "storeImage", "storeText" ];

    function appAddImage( storeImage, storeText ) {
        var directive = {
            restrict: "EA",
            link: link
        }

        return directive;

        function link( scope, element, attrs ) {
            var canvas = element[ 0 ],
                context = element[ 0 ].getContext( "2d" ),
                img = new Image(),
                sImage = storeImage.imageInUse;

            img.onload = function() {
                context.drawImage( img, 0, 0, canvas.width, canvas.height );
            };

            scope.$watchCollection( function() {
                return sImage[ 0 ]
            }, function( newValue, oldValue ) {
                if ( newValue === oldValue ) {
                    return;
                }

                context.clearRect( 0, 0, canvas.width, canvas.height );
                img.src = storeImage.storedImage[ 0 ];
                storeImage.imageInUse[ 0 ] = true;

                if ( storeText.textes.length !== 0 ) {
                    storeText.textes[ 0 ] = ""
                    document.getElementById( "input-text" ).value = "";
                }
            } );
        }
    }

} )();

( function() {

    "use strict";

    angular.module( "app.image" )
        .directive( "appImagesModal", appImagesModal );

    appImagesModal.$inject = [ "$uibModal", "$log", "$document", "storeImage" ];

    function appImagesModal( $uibModal, $log, $document, storeImage ) {
        var directive = {
            restrict: "AE",
            replace: true,
            templateUrl: "app/modules/options/image/addingArea.html",
            controller: [ '$scope', function( $scope ) {
                var vm = this;
                vm.items = storeImage.allImages
                vm.animationsEnabled = true;

                vm.open = function( size, parentSelector, $scope ) {
                    var parentElem = parentSelector ? angular.element( $document[ 0 ].querySelector( ".images-modal" + parentSelector ) ) : undefined;
                    console.log( storeImage.imageInUse[ 0 ] + " open" )
                    var modalInstance = $uibModal.open( {
                        scope: $scope,
                        animation: vm.animationsEnabled,
                        ariaLabelledBy: "modal-title",
                        ariaDescribedBy: "modal-body",
                        windowClass: "images-modal",
                        templateUrl: "app/modules/options/image/imagesToChoose.html",
                        controller: [ "$scope", "$uibModalInstance", "items", "$uibModal", "storeImage", function( $scope, $uibModalInstance, items, $uibModal, storeImage ) {
                            var vm = this;
                            vm.items = items;
                            vm.selected = {
                                item: null,
                            };

                            vm.ok = function( $scope ) {
                                $uibModalInstance.close( vm.selected.item );
                                storeImage.storedImage[ 0 ] = vm.selected.item;

                                // choose image again
                                if ( storeImage.imageInUse[ 0 ] === true && vm.confirmation === false ) {
                                    storeImage.imageInUse[ 0 ] = false;
                                } else {
                                    storeImage.imageInUse[ 0 ] = true;
                                }
                            };

                            vm.cancel = function() {
                                $uibModalInstance.dismiss( "cancel" );
                            };

                            // if an image is selected
                            vm.highlight = function( index ) {
                                vm.highlighted = index;
                            }

                            // if an image is already in use
                            if ( storeImage.imageInUse[ 0 ] === true ) {
                                vm.imagesContainer = false; //  container with images is hidden
                                vm.confirmation = true;

                                // confirm you want to choose new image
                                vm.confirm = function() {
                                    vm.imagesContainer = true; // show container with images
                                    vm.confirmation = false;
                                }
                            } else {
                                vm.imagesContainer = true;
                                vm.confirmation = false;

                            }
                        } ],
                        controllerAs: "vmIM",
                        size: size,
                        appendTo: parentElem,
                        resolve: {
                            items: function() {
                                return vm.items;
                            }
                        }
                    } );

                    modalInstance.result.then( function( selectedItem, $scope ) {
                        vm.selected = selectedItem;

                    }, function() {
                        $log.info( "Modal dismissed at: " + new Date() );
                    } );
                }
                vm.toggleAnimation = function() {
                    vm.animationsEnabled = !vm.animationsEnabled;
                };
            } ],
            controllerAs: "vmIM"
        }

        return directive;

    }

} )();

( function() {
    "use strict";

    angular
        .module( "app.image" )
        .service( "storeImage", storeImage )

    function storeImage() {

        this.imageInUse = [];

        this.storedImage = [];

        this.allImages = [
            "assets/img/obrazek.png",
            "assets/img/obrazek2.png",
            "assets/img/obrazek3.png",
            "assets/img/obrazek4.png"
        ];
    }


}() );

( function() {

    "use strict";

    angular.module( "app.reset" )
        .directive( "appClearCanvas", appClearCanvas );

    appClearCanvas.$inject = [ "storeImage" ];

    function appClearCanvas( storeImage ) {
        var directive = {
            restrict: "EA",
            controller: controller,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            vm.sImage = storeImage.imageInUse;

            scope.$watchCollection( function() {
                return vm.sImage
            }, function( newValue, oldValue ) {

                if ( newValue === oldValue ) {
                    return;
                }

                element[ 0 ].getContext( "2d" ).clearRect( 0, 0, element[ 0 ].width, element[ 0 ].height );

            } );

        }
    }

} )();

( function() {

    "use strict";

    angular.module( "app.reset" )
        .directive( "appClearCanvasPainting", appClearCanvasPainting );

    appClearCanvasPainting.$inject = [ "storeClearing" ];

    function appClearCanvasPainting( storeClearing ) {
        var directive = {
            restrict: "EA",
            controller: controller,
            link: link
        }
        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            vm.clearCanvas = storeClearing.clear;

            scope.$watchCollection( function() {
                return vm.clearCanvas[ 0 ];
            }, function( newValue, oldValue ) {

                if ( newValue === oldValue ) {
                    return;
                }
                element[ 0 ].getContext( "2d" ).clearRect( 0, 0, element[ 0 ].width, element[ 0 ].height );
            } );

        }
    }
} )();

( function() {

    "use strict";

    angular.module( "app.reset" )
        .directive( "appClearPainting", appClearPainting );

    appClearPainting.$inject = [ "storeClearing" ];

    function appClearPainting( storeClearing ) {
        var directive = {
            restrict: "AE",
            controllerAs: "vmClear",
            controller: controller,
            replace: true,
            templateUrl: "app/modules/options/reset/clearPainting.html",
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            vm.clear = false;
            storeClearing.clear[ 0 ] = false;

            vm.select = function( model ) {
                if ( model === false ) {
                    storeClearing.clear[ 0 ] = true;
                    vm.clear = true;
                } else {
                    storeClearing.clear[ 0 ] = false;
                    vm.clear = false;
                }
            }
        }
    }


} )();

( function() {
    "use strict";

    angular
        .module( "app.reset" )
        .service( "storeClearing", storeClearing )

    function storeClearing() {
        this.clear = [];
    }

}() );

( function() {

    "use strict";

    angular.module( "app.save" )
        .directive( "appSavePicture", appSavePicture );

    appSavePicture.$inject = [ "pages" ];

    function appSavePicture( pages ) {
        var directive = {
            restrict: "EA",
            replace: true,
            templateUrl: "app/modules/options/save/save.html ",
            link: link
        }

        return directive;

        function link( scope, element, attrs ) {

            element.bind( "click", function( e ) {
                if ( pages.isHome[ 0 ] === false ) {
                    e.preventDefault();
                } else {
                    var canvas1 = document.getElementById( "layer1" ),
                        canvas2 = document.getElementById( "layer2" ),
                        canvas3 = document.getElementById( "layer3" ),
                        canvas4 = document.getElementById( "layer4" ),
                        canvas5 = document.getElementById( "layer5" ),
                        context3 = canvas3.getContext( "2d" );

                    context3.drawImage( canvas5, 0, 0 );
                    context3.drawImage( canvas1, 0, 0 );
                    context3.drawImage( canvas2, 0, 0 );
                    context3.drawImage( canvas4, 0, 0 );

                    var download = canvas3.toDataURL( "image/png" );
                    download = download.replace( /^data:image\/[^;]*/, 'data:application/octet-stream' );
                    download = download.replace( /^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png' );
                    this.href = download;

                }
            } );
        }
    }
} )();

( function() {

    "use strict";

    angular.module( "app.brushColors" )
        .directive( "appBrushColors", appBrushColors );

    appBrushColors.$inject = [ "getColors", "setCursor" ];

    function appBrushColors( getColors, setCursor ) {
        var directive = {
            restrict: "EA",
            templateUrl: "app/modules/painting/brushColors/brushColors.html",
            replace: true,
            controllerAs: "vmColors",
            controller: controller,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            var brush = getColors.brush;
            vm.colors = {};
            vm.colors.all = getColors.colors;
            vm.colors.selected = brush.stored[ 0 ];

            vm.select = function( color ) {
                vm.colors.selected = color;
                brush.current = color;
                brush.stored[ 0 ] = color;
                setCursor.cursor.current = setCursor.cursor.brush[ 0 ];
            }
        }
    }


} )();

( function() {
    "use strict";

    angular
        .module( "app.brushColors" )
        .service( "getColors", getColors )


    function getColors() {

        this.brush = {
            current: "#ff8a00",
            stored: [ "#ff8a00" ],
        }

        this.colors = [ {
            code: "#ff5142",

        }, {
            code: "#f57033",

        }, {
            code: "#ff8a00",

        }, {
            code: "#edb718",

        }, {
            code: "#efd31f",

        }, {
            code: "#f1f1f1",

        }, {
            code: "#38c1a0",

        }, {
            code: "#2bd2c9",

        }, {
            code: "#8ade82",

        }, {
            code: "#b5d455",

        }, {
            code: "#7fd542",

        }, {
            code: "#4a4a4a",

        } ];
    }

} )();

( function() {

    "use strict";

    angular.module( "app.brushSizes" )
        .directive( "appBrushSizes", appBrushSizes );

    appBrushSizes.$inject = [ "getBrushSizes" ];

    function appBrushSizes( getBrushSizes ) {
        var directive = {
            restrict: "EA",
            templateUrl: "app/modules/painting/brushSizes/brushSizes.html",
            replace: true,
            controllerAs: "vmBrushSize",
            controller: controller,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {
            vm.sizes = {};
            vm.sizes.brushSizes = getBrushSizes.sizes;
            vm.sizes.selectedBrush = 2;

            vm.chooseBrushSize = function( size, index ) {
                vm.sizes.selectedBrush = index;
                vm.sizes.selectedBrushSize = size;
                getBrushSizes.brush.stored[ 0 ] = size;
            }
        }
    }

} )();

( function() {
    "use strict";

    angular
        .module( "app.brushSizes" )
        .service( "getBrushSizes", getBrushSizes )

    function getBrushSizes() {

        this.brush = {
            current: 15,
            stored: [ 15 ]
        }

        this.sizes = [ {
                size: 10
            },
            {
                size: 15
            },
            {
                size: 25
            },
            {
                size: 35
            },
            {
                size: 45
            }
        ];
    }


}() );

( function() {

    "use strict";

    angular.module( "app.brushTypes" )
        .directive( "appBrushTypes", appBrushTypes );

    appBrushTypes.$inject = [ "getBrushes", "setCursor", "eraser" ];

    function appBrushTypes( getBrushes, setCursor, eraser ) {

        var directive = {
            restrict: "EA",
            templateUrl: "app/modules/painting/brushTypes/brushTypes.html",
            replace: true,
            controllerAs: "vmBrushes",
            controller: controller,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            vm.brushes = {};
            vm.brushes.eraser = eraser.eraser
            vm.brushes.all = getBrushes.types;
            vm.brushes.selected = "assets/img/brush.svg";
            vm.brushes.select = selectBrush;

            function selectBrush( brush ) {

                if ( brush.type === "butt" ) {
                    setCursor.cursor.current = "cursor-pencil";
                    setCursor.cursor.brush[ 0 ] = "cursor-pencil";
                }
                if ( brush.type === "round" ) {
                    setCursor.cursor.current = "cursor-brush";
                    setCursor.cursor.brush[ 0 ] = "cursor-brush";
                }
                if ( brush.type === "square" ) {
                    setCursor.cursor.current = "cursor-pen";
                    setCursor.cursor.brush[ 0 ] = "cursor-pen";
                }

                vm.brushes.selected = brush.url;
                vm.brushes.selectedType = brush.type;
                getBrushes.brush.stored[ 0 ] = brush.type;

                if ( vm.brushes.eraser.selected[ 0 ] === true ) {
                    vm.brushes.eraser.selected[ 0 ] = false;
                }

            }
        }
    }

} )();

( function() {
    "use strict";
    angular
        .module( "app.brushTypes" )
        .service( "getBrushes", getBrushes )

    function getBrushes() {

        this.brush = {
            current: "round",
            stored: [ "round" ],
        }

        this.types = [ {
            url: "assets/img/brush.svg",
            type: "round",
            name: "Pędzel"
        }, {
            url: "assets/img/pen.svg",
            type: "square",
            name: "Ołówek"
        }, {
            url: "assets/img/pencil.svg",
            type: "butt",
            name: "Długopis"
        } ]
    }

}() );

( function() {

    "use strict";

    angular.module( "app.eraser" )
        .directive( "appEraser", appEraser );

    appEraser.$inject = [ "eraser", "setCursor" ];

    function appEraser( eraser, setCursor ) {
        var directive = {
            restrict: "AE",
            replace: true,
            controllerAs: "vmEraser",
            controller: controller,
            templateUrl: "app/modules/painting/eraser/eraser.html",
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            vm.select = function() {
                eraser.eraser.selected[ 0 ] = true;
                setCursor.cursor.current = "cursor-eraser";
            }
        }
    }

} )();

( function() {
    "use strict";

    angular
        .module( "app.eraser" )
        .service( "eraser", eraser )

    function eraser() {

        this.eraser = {
            selected: [ false ],
        }
    }

}() );

( function() {
    "use strict";

    angular
        .module( "app.canvas" )
        .service( "canvasSize", canvasSize )


    function canvasSize() {

        this.width = [];
        this.sWidth = [];

        this.size = {
            width: [],
            height: []
        }
    }


}() );

( function() {

    "use strict";

    angular.module( "app.canvas" )
        .directive( "appAdjustWidth", appAdjustWidth );

    appAdjustWidth.$inject = [ "$window", "canvasSize", "setStorage" ];

    function appAdjustWidth( $window, canvasSize, setStorage ) {
        var directive = {
            restrict: "AE",
            controller: [ "$scope", "$element", function( $scope, $element ) {
                this.canvasWrapper = $element[ 0 ];
                canvasSize.width[ 0 ] = false;

                angular.element( $window ).bind( "resize", function() {
                    canvasSize.size.width[ 0 ] = $element[ 0 ].offsetWidth
                    canvasSize.width[ 0 ] = $element[ 0 ].offsetWidth
                    $scope.$digest();
                } )
            } ]
        }
        return directive;
    }
} )();

( function() {

    "use strict";

    angular
        .module( "app.alignment" )
        .service( "alignment", alignment )

    function alignment() {

        this.current = [];
        this.type = [];
        this.position = [];

        this.types = [ {
            align: "left",
            icon: "glyphicon-align-left"
        }, {
            align: "center",
            icon: "glyphicon-align-center"
        }, {
            align: "right",
            icon: "glyphicon-align-right"
        } ];
    }

}() );

( function() {

    "use strict";

    angular.module( "app.alignment" )
        .directive( "appAlignOptions", appAlignOptions );

    appAlignOptions.$inject = [ "alignment" ];

    function appAlignOptions( alignment ) {
        var directive = {
            restrict: "AE",
            controllerAs: "vmFA",
            controller: controller,
            templateUrl: "app/modules/options/text/alignment/alignment.html",
            replace: true,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {
            vm.alignment = {};
            vm.alignment.types = alignment.types;
            vm.alignment.selectedAlign = 1;

            vm.alignment.select = function( type, index ) {
                alignment.current[ 0 ] = type;
                vm.alignment.selectedAlign = index;
            }
        }
    }

} )();

( function() {

    "use strict";

    angular.module( "app.alignment" )
        .directive( "appChangeAlign", appChangeAlign );

    appChangeAlign.$inject = [ "storeText", "alignment" ];

    function appChangeAlign( storeText, alignment ) {
        var directive = {
            restrict: "AE",
            require: "appText",
            controller: controller,
            link: link
        }
        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            vm.align = alignment.current;

            scope.$watchCollection( function() {

                return vm.align[ 0 ];

            }, function( newValue, oldValue ) {

                if ( newValue === oldValue ) {
                    return;
                }

                alignment.type[ 0 ] = newValue

                switch ( newValue ) {
                    case "left":
                        alignment.position[ 0 ] = 50;
                        break;
                    case "center":
                        alignment.position[ 0 ] = element[ 0 ].width / 2;
                        break;
                    case "right":
                        alignment.position[ 0 ] = element[ 0 ].width - 50;
                        break;
                }

                if ( storeText.textes.length !== 0 ) {
                    vm.modifyTextOnCanva();
                }
            } );
        }
    }

} )();

( function() {

    "use strict";

    angular.module( "app.fonts" )
        .directive( "appChangeFont", appChangeFont );

    appChangeFont.$inject = [ "storeText", "storeFonts" ];

    function appChangeFont( storeText, storeFonts ) {
        var directive = {
            restrict: "AE",
            require: "appText",
            controller: controller,
            link: link
        }
        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            vm.fontName = storeFonts.current.fontName;

            scope.$watchCollection( function() {
                return vm.fontName[ 0 ];
            }, function( newValue, oldValue ) {
                if ( newValue === oldValue ) {
                    return;
                }

                storeFonts.current.fontName[ 0 ] = storeFonts.current.storedFont[ 0 ];

                if ( storeText.textes.length !== 0 ) {
                    vm.modifyTextOnCanva();
                }
            } );
        }
    }

} )();

( function() {
    "use strict";

    angular
        .module( "app.fonts" )
        .service( "storeFonts", storeFonts )

    storeFonts.$inject = [ "$http" ];

    function storeFonts( $http ) {

        this.current = {
            fontName: [],
            storedFont: []
        }

        this.async = function() {
            return $http.get( "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBaP-y495JRLMxcXn0zNd63MTFYwBbQv_o" )
        }

        this.standard = [ {
                name: "Georgia"
            },
            {
                name: "Courier New"
            },
            {
                name: "Tahoma"
            },
            {
                name: "Times New Roman"
            },
            {
                name: "Arial"
            },
            {
                name: "Arial Black"
            },
            {
                name: "Verdana"
            },
        ];

        this.noPolish = [
            "Handlee",
            "Coming Soon",
            "Tangerine",
            "Niconne",
            "Satisfy",
            "Permanent Marker",
            "Rock Salt",
            "Damion",
            "Bad Script",
            "Rancho",
            "Gochi Hand",
            "Nothing You Could Do",
            "Homemade Apple",
            "Alex Brush",
            "Neucha",
            "Calligraffitti",
            "Pinyon Script",
            "Rochester",
            "Mr Dafoe",
            "Leckerli One",
            "Sue Ellen Francisco",
            "Crafty Girls",
            "Walter Turncoat",
            "Merienda",
            "Schoolbell",
            "Lateef",
            "Merienda One",
            "Delius",
            "Herr Von Muellerhoff",
            "Mr De Haviland",
            "Arizonia",
            "Qwigley",
            "Short Stack",
            "Aladin",
            "Kristi",
            "Norican",
            "Bilbo Swash Caps",
            "Rouge Script",
            "Delius Swash Caps",
            "Euphoria Script",
            "Sofia",
            "Dawning of a New Day",
            "Sunshiney",
            "Aguafina Script",
            "Julee",
            "Condiment",
            "Vibur",
            "Delius Unicase",
            "Mrs Saint Delafield",
            "Meie Script",
            "Bilbo",
            "League Script",
            "Ruthie",
            "Lovers Quarrel",
            "Monsieur La Doulaise",
            "Molle",
            "Dr Sugiyama",
            "Felipa",
            "Mrs Sheppards",
            "Miss Fajardose",
            "Princess Sofia",
            "Butterfly Kids",
            "Lakki Reddy",
            "Mr Bedfort",
            "Bonbon",
            "Ruge Boogie",
            "Annie Use Your Telescope",
            "Architects Daughter",
            "Cedarville Cursive",
            "Cookie",
            "Covered By Your Grace",
            "Dancing Script",
            "Indie Flower",
            "Gloria Hallelujah",
            "Give You Glory",
            "Zeyada",
            "Yesteryear",
            "Waiting for the Sunrise",
            "The Girl Next Door",
            "Swanky and Moo Moo",
            "Shadows Into Light",
            "Reenie Beanie",
            "Over the Rainbow",
            "Montez",
            "Meddon",
            "Loved by the King",
            "La Belle Aurore",
            "Just Another Hand",
            "Engagement"
        ];
    }

}() );

( function() {

    "use strict";

    angular.module( "app.text" )
        .directive( "appAddText", appAddText );

    appAddText.$inject = [ "storeText" ];

    function appAddText( storeText ) {
        var directive = {
            restrict: "AE",
            require: "appText",
            controller: controller,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            vm.textOnChange = storeText.textes;

            scope.$watchCollection( function() {
                return vm.textOnChange[ 0 ];
            }, function( newValue, oldValue ) {
                if ( newValue === oldValue ) {
                    return;
                }
                vm.modifyTextOnCanva();
            } );
        }
    }
} )();

( function() {

    "use strict";

    angular.module( "app.text" )
        .directive( "appText", appText );

    appText.$inject = [ "storeText", "alignment", "storeFonts" ];

    function appText( storeText, alignment, storeFonts ) {
        var directive = {
            restrict: "E",
            template: "<canvas></canvas>",
            replace: "true",
            controller: [ "$element", function( $element ) {
                var canvas = $element[ 0 ],
                    context = canvas.getContext( "2d" );

                this.modifyTextOnCanva = function() {
                    context.font = "30px " + storeFonts.current.fontName[ 0 ];
                    context.clearRect( 0, 0, canvas.width, canvas.height );
                    context.textAlign = ( alignment.type[ 0 ] || "center" );
                    context.fillText( storeText.textes[ 0 ], ( alignment.position[ 0 ] || canvas.width / 2 ), ( canvas.height - 40 ) );
                }

            } ]
        }
        return directive;
    }

} )();

( function() {
    "use strict";

    angular
        .module( "app.text" )
        .service( "storeText", storeText )

    function storeText() {
        this.textes = [];
    }

}() );

( function() {

    "use strict";

    angular.module( "app.text" )
        .directive( "appInputText", appInputText );

    appInputText.$inject = [ "storeText" ];

    function appInputText( storeText ) {
        var directive = {
            restrict: "AE",
            controllerAs: "vmText",
            templateUrl: "app/modules/options/text/typing/inputText.html",
            replace: true,
            controller: controller,
            link: link
        }
        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            vm.type = {};
            vm.type.text = function( text ) {
                storeText.textes[ 0 ] = text;
            }

            vm.type.removeText = function() {
                if ( storeText.textes.length > 0 ) {
                    vm.inputText.data = "";
                    storeText.textes[ 0 ] = "";
                }

            }
        }
    }

} )();

( function() {

    "use strict";

    angular.module( "app.decorativeFonts" )
        .directive( "appGoogleFonts", appGoogleFonts );

    appGoogleFonts.$inject = [ "$http", "$timeout", "storeFonts", "googleLink" ];

    function appGoogleFonts( $http, $timeout, storeFonts, googleLink ) {
        var directive = {
            restrict: "AE",
            controllerAs: "vmGF",
            templateUrl: "app/modules/options/text/fonts/decorative/googleFonts.html",
            replace: true,
            controller: controller,
            link: link
        }
        return directive;

        function controller() {
            var vm = this;
            vm.googleFonts = {};

            storeFonts.async().then( success, error )

            function success( response ) {
                var allFonts = response.data.items,
                    handwritingFonts = allFonts.filter( isHandwriting );

                function isHandwriting( font ) {
                    return font.category === "handwriting";
                }
                vm.googleFonts.handwriting = handwritingFonts;
            }

            function error( response ) {
                alert( "Error" );
            }
        }

        function link( scope, element, attrs, vm ) {

            vm.googleFonts.select = function( font ) {
                googleLink.fontName[ 0 ] = font;
                storeFonts.current.storedFont[ 0 ] = font;

                $timeout( function() {
                    storeFonts.current.fontName[ 0 ] = font;
                }, 1250 );

            }
        }
    }

} )();

( function() {

    "use strict";

    angular.module( "app.decorativeFonts" )
        .directive( "appGoogleLink", appGoogleLink );

    appGoogleLink.$inject = [ "googleLink" ];

    function appGoogleLink( googleLink ) {
        var directive = {
            restrict: "AE",
            controllerAs: "vmGL",
            controller: controller,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            vm.googleHeaderLink = googleLink.fontName;

            scope.$watchCollection( function() {
                return vm.googleHeaderLink;
            }, function( newValue, oldValue ) {
                if ( newValue === oldValue ) {
                    return;
                }
                vm.googleLink = googleLink.fontName[ 0 ];
            } );
        }

    }

} )();

( function() {
    "use strict";

    angular
        .module( "app.decorativeFonts" )
        .service( "googleLink", googleLink );

    function googleLink() {
        this.fontName = [];
    }

}() );

( function() {

    "use strict";

    angular.module( "app.previewFonts" )
        .directive( "appFontPreview", appFontPreview );

    appFontPreview.$inject = [ "storeFonts" ];

    function appFontPreview( storeFonts ) {
        var directive = {
            restrict: "AE",
            controllerAs: "vmCF",
            templateUrl: "app/modules/options/text/fonts/preview/fontPreview.html",
            replace: true,
            controller: controller,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            vm.currentFont = {};
            vm.currentFont.display = "Georgia";

            vm.allFonts = storeFonts.current.storedFont;

            scope.$watchCollection( function() {
                return vm.allFonts;
            }, function( newValue, oldValue ) {
                if ( newValue === oldValue ) {
                    return;
                }
                vm.currentFont.display = storeFonts.current.storedFont[ 0 ];

            } );
        }
    }
} )();

( function() {

    "use strict";

    angular.module( "app.previewFonts" )
        .directive( "appIsPolish", appIsPolish );

    appIsPolish.$inject = [ "storeFonts" ];

    function appIsPolish( storeFonts ) {
        var directive = {
            restrict: "AE",
            controllerAs: "vmPL",
            controller: controller,
            templateUrl: "app/modules/options/text/fonts/preview/isPolish.html",
            replace: true,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {

            var isPolish = storeFonts.noPolish;
            vm.currentFont = storeFonts.current.storedFont;
            vm.isPolish = {};
            vm.isPolish.message = "ma polskie litery";
            vm.isPolish.class = "letters-info";

            scope.$watchCollection( function() {
                return vm.currentFont[ 0 ];
            }, function( newValue, oldValue ) {
                if ( newValue === oldValue ) {
                    return;
                }
                var noPolishLetters = isPolish.some( hasPolishLetters )

                if ( noPolishLetters === true ) {
                    vm.isPolish.message = "nie ma polskich liter";
                    vm.isPolish.class = "letters-warning";
                } else {
                    vm.isPolish.message = "ma polskie litery";
                    vm.isPolish.class = "letters-info";
                }

                function hasPolishLetters( currentValue ) {
                    return currentValue === newValue;
                }

            } );
        }
    }


} )();

( function() {

    "use strict";

    angular.module( "app.standardFonts" )
        .directive( "appStandardFonts", appStandardFonts );

    appStandardFonts.$inject = [ "storeFonts" ];

    function appStandardFonts( storeFonts ) {
        var directive = {
            restrict: "AE",
            templateUrl: "app/modules/options/text/fonts/standard/standardFonts.html",
            replace: true,
            controllerAs: "vmFO",
            controller: controller,
            link: link
        }

        return directive;

        function controller() {
            var vm = this;
        }

        function link( scope, element, attrs, vm ) {
            vm.standardFonts = {};
            vm.standardFonts.all = storeFonts.standard;

            vm.standardFonts.select = function( font ) {
                storeFonts.current.fontName[ 0 ] = font.name;
                storeFonts.current.storedFont[ 0 ] = font.name;
            }
        }
    }

} )();
