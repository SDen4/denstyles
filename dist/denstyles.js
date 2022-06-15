/*! For license information please see denstyles.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("denstyles",[],t):"object"==typeof exports?exports.denstyles=t():e.denstyles=t()}("undefined"==typeof self?this:self,(function(){return function(){"use strict";var e={126:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(294)),u=r(n(229));t.default=function(e){var t=e.type,n=void 0===t?"button":t,r=e.title,a=void 0===r?"Push":r,i=e.disabled,c=void 0!==i&&i,l=e.onclick,s=void 0===l?function(){return null}:l,f=e.addClass,p=void 0===f?{}:f;return o.default.createElement("button",{type:n,onClick:s,disabled:c,className:"".concat(u.default.button," ").concat(p)},a)}},670:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(294)),u=r(n(533));t.default=function(e){var t=e.placeholder,n=void 0===t?"Enter the value":t,r=e.label,a=e.vertical,i=void 0!==a&&a,c=e.onChange,l=void 0===c?function(){return null}:c,s=e.onSubmit,f=void 0===s?function(){return null}:s,p=e.addClass,d=void 0===p?{}:p;return o.default.createElement("div",{className:"".concat(u.default.textInputWrapper," ").concat(i&&u.default.vertical," ").concat(d)},(null==r?void 0:r.length)&&o.default.createElement("label",{className:"".concat(u.default.label," ").concat(i&&u.default.labelVertical),htmlFor:"testInput"},r),o.default.createElement("input",{id:"testInput",className:u.default.input,type:"text",placeholder:n,onChange:l,onSubmit:f}))}},822:function(e,t,n){var r=n(81),o=n.n(r),u=n(645),a=n.n(u)()(o());a.push([e.id,".VZgOG4bDx90YRDAnq6OS {\n  padding: 10px 15px;\n  margin: 0;\n  border: 0;\n  border-radius: 3px;\n  outline: none;\n  background-color: rgb(10, 160, 10);\n  color: #fff;\n  transition: background-color 0.2s;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n.VZgOG4bDx90YRDAnq6OS:hover {\n  background-color: rgb(10, 140, 10);\n}\n\n.VZgOG4bDx90YRDAnq6OS:disabled {\n  background-color: rgba(210, 210, 210, 0.7);\n  cursor: not-allowed;\n}\n",""]),a.locals={button:"VZgOG4bDx90YRDAnq6OS"},t.Z=a},67:function(e,t,n){var r=n(81),o=n.n(r),u=n(645),a=n.n(u)()(o());a.push([e.id,".nNUeUOOU4Bz9qNs11eya {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.Kt0viif7ZKGGPHR2IKED {\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.efArtjYH3qu2gMBDU_9n {\n  font-size: 16px;\n  border: 0;\n  margin: 0;\n  padding: 3px 5px;\n  border-radius: 3px;\n}\n\n.XP6EoE6UiR7EWeE3992O {\n  font-size: 16px;\n  margin: 0 10px 0 0;\n  padding: 0;\n}\n\n.e7bmjmAq5pPMtOhV0YGC {\n  margin: 0 0 10px;\n}\n",""]),a.locals={textInputWrapper:"nNUeUOOU4Bz9qNs11eya",vertical:"Kt0viif7ZKGGPHR2IKED",input:"efArtjYH3qu2gMBDU_9n",label:"XP6EoE6UiR7EWeE3992O",labelVertical:"e7bmjmAq5pPMtOhV0YGC"},t.Z=a},645:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,u){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&a[s[0]]||(void 0!==u&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=u),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},81:function(e){e.exports=function(e){return e[1]}},408:function(e,t){var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator,y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,m={};function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}function h(){}function _(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=b.prototype;var g=_.prototype=new h;g.constructor=_,v(g,b.prototype),g.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,E={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var o,u={},a=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,o)&&!O.hasOwnProperty(o)&&(u[o]=t[o]);var c=arguments.length-2;if(1===c)u.children=r;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];u.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===u[o]&&(u[o]=c[o]);return{$$typeof:n,type:e,key:a,ref:i,props:u,_owner:E.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var R=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function k(e,t,o,u,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return a=a(c=e),e=""===u?"."+w(c,0):u,x(a)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),k(a,t,o,"",(function(e){return e}))):null!=a&&(j(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(R,"$&/")+"/")+e)),t.push(a)),1;if(c=0,u=""===u?".":u+":",x(e))for(var l=0;l<e.length;l++){var s=u+w(i=e[l],l);c+=k(i,t,o,s,a)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),l=0;!(i=e.next()).done;)c+=k(i=i.value,t,o,s=u+w(i,l++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function P(e,t,n){if(null==e)return e;var r=[],o=0;return k(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},M={transition:null},A={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:M,ReactCurrentOwner:E};t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=a,t.PureComponent=_,t.StrictMode=u,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=v({},e.props),u=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=E.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)S.call(t,l)&&!O.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){c=Array(l);for(var s=0;s<l;s++)c[s]=arguments[s+2];o.children=c}return{$$typeof:n,type:e.type,key:u,ref:a,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=M.transition;M.transition={};try{e()}finally{M.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return $.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},294:function(e,t,n){e.exports=n(408)},229:function(e,t,n){n.r(t);var r=n(379),o=n.n(r),u=n(795),a=n.n(u),i=n(569),c=n.n(i),l=n(565),s=n.n(l),f=n(216),p=n.n(f),d=n(589),y=n.n(d),v=n(822),m={};m.styleTagTransform=y(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=p(),o()(v.Z,m),t.default=v.Z&&v.Z.locals?v.Z.locals:void 0},533:function(e,t,n){n.r(t);var r=n(379),o=n.n(r),u=n(795),a=n.n(u),i=n(569),c=n.n(i),l=n(565),s=n.n(l),f=n(216),p=n.n(f),d=n(589),y=n.n(d),v=n(67),m={};m.styleTagTransform=y(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=p(),o()(v.Z,m),t.default=v.Z&&v.Z.locals?v.Z.locals:void 0},379:function(e){var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var u={},a=[],i=0;i<e.length;i++){var c=e[i],l=r.base?c[0]+r.base:c[0],s=u[l]||0,f="".concat(l," ").concat(s);u[l]=s+1;var p=n(f),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var y=o(d,r);r.byIndex=i,t.splice(i,0,{identifier:f,updater:y,references:1})}a.push(f)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var u=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<u.length;a++){var i=n(u[a]);t[i].references--}for(var c=r(e,o),l=0;l<u.length;l++){var s=n(u[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}u=c}}},569:function(e){var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:function(e){e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,n){e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var u=n.sourceMap;u&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(u))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={id:r,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var r,o,u,a,i={};return r=n(126),o=n.n(r),u=n(670),a=n.n(u),i.default={Button:o(),TextInput:a()},i.default}()}));