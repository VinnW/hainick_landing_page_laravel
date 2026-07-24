function fd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var md={exports:{}},Wi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0=Symbol.for("react.transitional.element"),l0=Symbol.for("react.fragment");function pd(e,t,a){var l=null;if(a!==void 0&&(l=""+a),t.key!==void 0&&(l=""+t.key),"key"in t){a={};for(var n in t)n!=="key"&&(a[n]=t[n])}else a=t;return t=a.ref,{$$typeof:a0,type:e,key:l,ref:t!==void 0?t:null,props:a}}Wi.Fragment=l0;Wi.jsx=pd;Wi.jsxs=pd;md.exports=Wi;var i=md.exports,hd={exports:{}},L={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fs=Symbol.for("react.transitional.element"),n0=Symbol.for("react.portal"),i0=Symbol.for("react.fragment"),r0=Symbol.for("react.strict_mode"),o0=Symbol.for("react.profiler"),s0=Symbol.for("react.consumer"),c0=Symbol.for("react.context"),u0=Symbol.for("react.forward_ref"),d0=Symbol.for("react.suspense"),f0=Symbol.for("react.memo"),gd=Symbol.for("react.lazy"),m0=Symbol.for("react.activity"),Sc=Symbol.iterator;function p0(e){return e===null||typeof e!="object"?null:(e=Sc&&e[Sc]||e["@@iterator"],typeof e=="function"?e:null)}var xd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bd=Object.assign,vd={};function wl(e,t,a){this.props=e,this.context=t,this.refs=vd,this.updater=a||xd}wl.prototype.isReactComponent={};wl.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wl.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yd(){}yd.prototype=wl.prototype;function ms(e,t,a){this.props=e,this.context=t,this.refs=vd,this.updater=a||xd}var ps=ms.prototype=new yd;ps.constructor=ms;bd(ps,wl.prototype);ps.isPureReactComponent=!0;var kc=Array.isArray;function fo(){}var ne={H:null,A:null,T:null,S:null},jd=Object.prototype.hasOwnProperty;function hs(e,t,a){var l=a.ref;return{$$typeof:fs,type:e,key:t,ref:l!==void 0?l:null,props:a}}function h0(e,t){return hs(e.type,t,e.props)}function gs(e){return typeof e=="object"&&e!==null&&e.$$typeof===fs}function g0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var Nc=/\/+/g;function jr(e,t){return typeof e=="object"&&e!==null&&e.key!=null?g0(""+e.key):t.toString(36)}function x0(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(fo,fo):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function qa(e,t,a,l,n){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(r){case"bigint":case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case fs:case n0:o=!0;break;case gd:return o=e._init,qa(o(e._payload),t,a,l,n)}}if(o)return n=n(e),o=l===""?"."+jr(e,0):l,kc(n)?(a="",o!=null&&(a=o.replace(Nc,"$&/")+"/"),qa(n,t,a,"",function(u){return u})):n!=null&&(gs(n)&&(n=h0(n,a+(n.key==null||e&&e.key===n.key?"":(""+n.key).replace(Nc,"$&/")+"/")+o)),t.push(n)),1;o=0;var s=l===""?".":l+":";if(kc(e))for(var c=0;c<e.length;c++)l=e[c],r=s+jr(l,c),o+=qa(l,t,a,r,n);else if(c=p0(e),typeof c=="function")for(e=c.call(e),c=0;!(l=e.next()).done;)l=l.value,r=s+jr(l,c++),o+=qa(l,t,a,r,n);else if(r==="object"){if(typeof e.then=="function")return qa(x0(e),t,a,l,n);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return o}function Ln(e,t,a){if(e==null)return e;var l=[],n=0;return qa(e,l,"","",function(r){return t.call(a,r,n++)}),l}function b0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var zc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},v0={map:Ln,forEach:function(e,t,a){Ln(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return Ln(e,function(){t++}),t},toArray:function(e){return Ln(e,function(t){return t})||[]},only:function(e){if(!gs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Activity=m0;L.Children=v0;L.Component=wl;L.Fragment=i0;L.Profiler=o0;L.PureComponent=ms;L.StrictMode=r0;L.Suspense=d0;L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ne;L.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ne.H.useMemoCache(e)}};L.cache=function(e){return function(){return e.apply(null,arguments)}};L.cacheSignal=function(){return null};L.cloneElement=function(e,t,a){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var l=bd({},e.props),n=e.key;if(t!=null)for(r in t.key!==void 0&&(n=""+t.key),t)!jd.call(t,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&t.ref===void 0||(l[r]=t[r]);var r=arguments.length-2;if(r===1)l.children=a;else if(1<r){for(var o=Array(r),s=0;s<r;s++)o[s]=arguments[s+2];l.children=o}return hs(e.type,n,l)};L.createContext=function(e){return e={$$typeof:c0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:s0,_context:e},e};L.createElement=function(e,t,a){var l,n={},r=null;if(t!=null)for(l in t.key!==void 0&&(r=""+t.key),t)jd.call(t,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(n[l]=t[l]);var o=arguments.length-2;if(o===1)n.children=a;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];n.children=s}if(e&&e.defaultProps)for(l in o=e.defaultProps,o)n[l]===void 0&&(n[l]=o[l]);return hs(e,r,n)};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:u0,render:e}};L.isValidElement=gs;L.lazy=function(e){return{$$typeof:gd,_payload:{_status:-1,_result:e},_init:b0}};L.memo=function(e,t){return{$$typeof:f0,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=ne.T,a={};ne.T=a;try{var l=e(),n=ne.S;n!==null&&n(a,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(fo,zc)}catch(r){zc(r)}finally{t!==null&&a.types!==null&&(t.types=a.types),ne.T=t}};L.unstable_useCacheRefresh=function(){return ne.H.useCacheRefresh()};L.use=function(e){return ne.H.use(e)};L.useActionState=function(e,t,a){return ne.H.useActionState(e,t,a)};L.useCallback=function(e,t){return ne.H.useCallback(e,t)};L.useContext=function(e){return ne.H.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e,t){return ne.H.useDeferredValue(e,t)};L.useEffect=function(e,t){return ne.H.useEffect(e,t)};L.useEffectEvent=function(e){return ne.H.useEffectEvent(e)};L.useId=function(){return ne.H.useId()};L.useImperativeHandle=function(e,t,a){return ne.H.useImperativeHandle(e,t,a)};L.useInsertionEffect=function(e,t){return ne.H.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ne.H.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ne.H.useMemo(e,t)};L.useOptimistic=function(e,t){return ne.H.useOptimistic(e,t)};L.useReducer=function(e,t,a){return ne.H.useReducer(e,t,a)};L.useRef=function(e){return ne.H.useRef(e)};L.useState=function(e){return ne.H.useState(e)};L.useSyncExternalStore=function(e,t,a){return ne.H.useSyncExternalStore(e,t,a)};L.useTransition=function(){return ne.H.useTransition()};L.version="19.2.8";hd.exports=L;var f=hd.exports;const y0=fd(f);var wd={exports:{}},Ii={},Sd={exports:{}},kd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,C){var R=T.length;T.push(C);e:for(;0<R;){var V=R-1>>>1,q=T[V];if(0<n(q,C))T[V]=C,T[R]=q,R=V;else break e}}function a(T){return T.length===0?null:T[0]}function l(T){if(T.length===0)return null;var C=T[0],R=T.pop();if(R!==C){T[0]=R;e:for(var V=0,q=T.length,St=q>>>1;V<St;){var Pe=2*(V+1)-1,Re=T[Pe],pe=Pe+1,Ba=T[pe];if(0>n(Re,R))pe<q&&0>n(Ba,Re)?(T[V]=Ba,T[pe]=R,V=pe):(T[V]=Re,T[Pe]=R,V=Pe);else if(pe<q&&0>n(Ba,R))T[V]=Ba,T[pe]=R,V=pe;else break e}}return C}function n(T,C){var R=T.sortIndex-C.sortIndex;return R!==0?R:T.id-C.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],u=[],h=1,p=null,m=3,x=!1,y=!1,j=!1,w=!1,d=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;function v(T){for(var C=a(u);C!==null;){if(C.callback===null)l(u);else if(C.startTime<=T)l(u),C.sortIndex=C.expirationTime,t(c,C);else break;C=a(u)}}function S(T){if(j=!1,v(T),!y)if(a(c)!==null)y=!0,N||(N=!0,F());else{var C=a(u);C!==null&&A(S,C.startTime-T)}}var N=!1,k=-1,_=5,M=-1;function E(){return w?!0:!(e.unstable_now()-M<_)}function J(){if(w=!1,N){var T=e.unstable_now();M=T;var C=!0;try{e:{y=!1,j&&(j=!1,g(k),k=-1),x=!0;var R=m;try{t:{for(v(T),p=a(c);p!==null&&!(p.expirationTime>T&&E());){var V=p.callback;if(typeof V=="function"){p.callback=null,m=p.priorityLevel;var q=V(p.expirationTime<=T);if(T=e.unstable_now(),typeof q=="function"){p.callback=q,v(T),C=!0;break t}p===a(c)&&l(c),v(T)}else l(c);p=a(c)}if(p!==null)C=!0;else{var St=a(u);St!==null&&A(S,St.startTime-T),C=!1}}break e}finally{p=null,m=R,x=!1}C=void 0}}finally{C?F():N=!1}}}var F;if(typeof b=="function")F=function(){b(J)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,de=se.port2;se.port1.onmessage=J,F=function(){de.postMessage(null)}}else F=function(){d(J,0)};function A(T,C){k=d(function(){T(e.unstable_now())},C)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var C=3;break;default:C=m}var R=m;m=C;try{return T()}finally{m=R}},e.unstable_requestPaint=function(){w=!0},e.unstable_runWithPriority=function(T,C){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var R=m;m=T;try{return C()}finally{m=R}},e.unstable_scheduleCallback=function(T,C,R){var V=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?V+R:V):R=V,T){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=R+q,T={id:h++,callback:C,priorityLevel:T,startTime:R,expirationTime:q,sortIndex:-1},R>V?(T.sortIndex=R,t(u,T),a(c)===null&&T===a(u)&&(j?(g(k),k=-1):j=!0,A(S,R-V))):(T.sortIndex=q,t(c,T),y||x||(y=!0,N||(N=!0,F()))),T},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(T){var C=m;return function(){var R=m;m=C;try{return T.apply(this,arguments)}finally{m=R}}}})(kd);Sd.exports=kd;var j0=Sd.exports,Nd={exports:{}},Me={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0=f;function zd(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Jt(){}var Ae={d:{f:Jt,r:function(){throw Error(zd(522))},D:Jt,C:Jt,L:Jt,m:Jt,X:Jt,S:Jt,M:Jt},p:0,findDOMNode:null},S0=Symbol.for("react.portal");function k0(e,t,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:S0,key:l==null?null:""+l,children:e,containerInfo:t,implementation:a}}var Ql=w0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Pi(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Me.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ae;Me.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(zd(299));return k0(e,t,null,a)};Me.flushSync=function(e){var t=Ql.T,a=Ae.p;try{if(Ql.T=null,Ae.p=2,e)return e()}finally{Ql.T=t,Ae.p=a,Ae.d.f()}};Me.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Ae.d.C(e,t))};Me.prefetchDNS=function(e){typeof e=="string"&&Ae.d.D(e)};Me.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var a=t.as,l=Pi(a,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;a==="style"?Ae.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:l,integrity:n,fetchPriority:r}):a==="script"&&Ae.d.X(e,{crossOrigin:l,integrity:n,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Me.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var a=Pi(t.as,t.crossOrigin);Ae.d.M(e,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Ae.d.M(e)};Me.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var a=t.as,l=Pi(a,t.crossOrigin);Ae.d.L(e,a,{crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Me.preloadModule=function(e,t){if(typeof e=="string")if(t){var a=Pi(t.as,t.crossOrigin);Ae.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Ae.d.m(e)};Me.requestFormReset=function(e){Ae.d.r(e)};Me.unstable_batchedUpdates=function(e,t){return e(t)};Me.useFormState=function(e,t,a){return Ql.H.useFormState(e,t,a)};Me.useFormStatus=function(){return Ql.H.useHostTransitionStatus()};Me.version="19.2.8";function Td(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Td)}catch(e){console.error(e)}}Td(),Nd.exports=Me;var N0=Nd.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye=j0,Ed=f,z0=N0;function z(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wn(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Cd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ad(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tc(e){if(wn(e)!==e)throw Error(z(188))}function T0(e){var t=e.alternate;if(!t){if(t=wn(e),t===null)throw Error(z(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var r=n.alternate;if(r===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===r.child){for(r=n.child;r;){if(r===a)return Tc(n),e;if(r===l)return Tc(n),t;r=r.sibling}throw Error(z(188))}if(a.return!==l.return)a=n,l=r;else{for(var o=!1,s=n.child;s;){if(s===a){o=!0,a=n,l=r;break}if(s===l){o=!0,l=n,a=r;break}s=s.sibling}if(!o){for(s=r.child;s;){if(s===a){o=!0,a=r,l=n;break}if(s===l){o=!0,l=r,a=n;break}s=s.sibling}if(!o)throw Error(z(189))}}if(a.alternate!==l)throw Error(z(190))}if(a.tag!==3)throw Error(z(188));return a.stateNode.current===a?e:t}function Md(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Md(e),t!==null)return t;e=e.sibling}return null}var ie=Object.assign,E0=Symbol.for("react.element"),Bn=Symbol.for("react.transitional.element"),Gl=Symbol.for("react.portal"),Ja=Symbol.for("react.fragment"),Rd=Symbol.for("react.strict_mode"),mo=Symbol.for("react.profiler"),Dd=Symbol.for("react.consumer"),Mt=Symbol.for("react.context"),xs=Symbol.for("react.forward_ref"),po=Symbol.for("react.suspense"),ho=Symbol.for("react.suspense_list"),bs=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),go=Symbol.for("react.activity"),_0=Symbol.for("react.memo_cache_sentinel"),Ec=Symbol.iterator;function Rl(e){return e===null||typeof e!="object"?null:(e=Ec&&e[Ec]||e["@@iterator"],typeof e=="function"?e:null)}var C0=Symbol.for("react.client.reference");function xo(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===C0?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ja:return"Fragment";case mo:return"Profiler";case Rd:return"StrictMode";case po:return"Suspense";case ho:return"SuspenseList";case go:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Gl:return"Portal";case Mt:return e.displayName||"Context";case Dd:return(e._context.displayName||"Context")+".Consumer";case xs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bs:return t=e.displayName||null,t!==null?t:xo(e.type)||"Memo";case Qt:t=e._payload,e=e._init;try{return xo(e(t))}catch{}}return null}var ql=Array.isArray,U=Ed.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=z0.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Sa={pending:!1,data:null,method:null,action:null},bo=[],Qa=-1;function yt(e){return{current:e}}function Se(e){0>Qa||(e.current=bo[Qa],bo[Qa]=null,Qa--)}function te(e,t){Qa++,bo[Qa]=e.current,e.current=t}var vt=yt(null),on=yt(null),la=yt(null),yi=yt(null);function ji(e,t){switch(te(la,t),te(on,e),te(vt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Du(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Du(t),e=tp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Se(vt),te(vt,e)}function dl(){Se(vt),Se(on),Se(la)}function vo(e){e.memoizedState!==null&&te(yi,e);var t=vt.current,a=tp(t,e.type);t!==a&&(te(on,e),te(vt,a))}function wi(e){on.current===e&&(Se(vt),Se(on)),yi.current===e&&(Se(yi),bn._currentValue=Sa)}var wr,_c;function va(e){if(wr===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);wr=t&&t[1]||"",_c=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wr+e+_c}var Sr=!1;function kr(e,t){if(!e||Sr)return"";Sr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(x){var m=x}Reflect.construct(e,[],p)}else{try{p.call()}catch(x){m=x}e.call(p.prototype)}}else{try{throw Error()}catch(x){m=x}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(x){if(x&&m&&typeof x.stack=="string")return[x.stack,m.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=l.DetermineComponentFrameRoot(),o=r[0],s=r[1];if(o&&s){var c=o.split(`
`),u=s.split(`
`);for(n=l=0;l<c.length&&!c[l].includes("DetermineComponentFrameRoot");)l++;for(;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;if(l===c.length||n===u.length)for(l=c.length-1,n=u.length-1;1<=l&&0<=n&&c[l]!==u[n];)n--;for(;1<=l&&0<=n;l--,n--)if(c[l]!==u[n]){if(l!==1||n!==1)do if(l--,n--,0>n||c[l]!==u[n]){var h=`
`+c[l].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=l&&0<=n);break}}}finally{Sr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?va(a):""}function A0(e,t){switch(e.tag){case 26:case 27:case 5:return va(e.type);case 16:return va("Lazy");case 13:return e.child!==t&&t!==null?va("Suspense Fallback"):va("Suspense");case 19:return va("SuspenseList");case 0:case 15:return kr(e.type,!1);case 11:return kr(e.type.render,!1);case 1:return kr(e.type,!0);case 31:return va("Activity");default:return""}}function Cc(e){try{var t="",a=null;do t+=A0(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var yo=Object.prototype.hasOwnProperty,vs=ye.unstable_scheduleCallback,Nr=ye.unstable_cancelCallback,M0=ye.unstable_shouldYield,R0=ye.unstable_requestPaint,Qe=ye.unstable_now,D0=ye.unstable_getCurrentPriorityLevel,Od=ye.unstable_ImmediatePriority,Ud=ye.unstable_UserBlockingPriority,Si=ye.unstable_NormalPriority,O0=ye.unstable_LowPriority,Ld=ye.unstable_IdlePriority,U0=ye.log,L0=ye.unstable_setDisableYieldValue,Sn=null,Ke=null;function It(e){if(typeof U0=="function"&&L0(e),Ke&&typeof Ke.setStrictMode=="function")try{Ke.setStrictMode(Sn,e)}catch{}}var Ze=Math.clz32?Math.clz32:Y0,B0=Math.log,H0=Math.LN2;function Y0(e){return e>>>=0,e===0?32:31-(B0(e)/H0|0)|0}var Hn=256,Yn=262144,Gn=4194304;function ya(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function er(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~r,l!==0?n=ya(l):(o&=s,o!==0?n=ya(o):a||(a=s&~e,a!==0&&(n=ya(a))))):(s=l&~r,s!==0?n=ya(s):o!==0?n=ya(o):a||(a=l&~e,a!==0&&(n=ya(a)))),n===0?0:t!==0&&t!==n&&!(t&r)&&(r=n&-n,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:n}function kn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function G0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bd(){var e=Gn;return Gn<<=1,!(Gn&62914560)&&(Gn=4194304),e}function zr(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Nn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function q0(e,t,a,l,n,r){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,u=e.hiddenUpdates;for(a=o&~a;0<a;){var h=31-Ze(a),p=1<<h;s[h]=0,c[h]=-1;var m=u[h];if(m!==null)for(u[h]=null,h=0;h<m.length;h++){var x=m[h];x!==null&&(x.lane&=-536870913)}a&=~p}l!==0&&Hd(e,l,0),r!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function Hd(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Ze(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Yd(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-Ze(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function Gd(e,t){var a=t&-t;return a=a&42?1:ys(a),a&(e.suspendedLanes|t)?0:a}function ys(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function js(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function qd(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:fp(e.type))}function Ac(e,t){var a=K.p;try{return K.p=e,t()}finally{K.p=a}}var ga=Math.random().toString(36).slice(2),Ne="__reactFiber$"+ga,He="__reactProps$"+ga,Sl="__reactContainer$"+ga,jo="__reactEvents$"+ga,X0="__reactListeners$"+ga,V0="__reactHandles$"+ga,Mc="__reactResources$"+ga,zn="__reactMarker$"+ga;function ws(e){delete e[Ne],delete e[He],delete e[jo],delete e[X0],delete e[V0]}function Ka(e){var t=e[Ne];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Sl]||a[Ne]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Hu(e);e!==null;){if(a=e[Ne])return a;e=Hu(e)}return t}e=a,a=e.parentNode}return null}function kl(e){if(e=e[Ne]||e[Sl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Xl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(z(33))}function nl(e){var t=e[Mc];return t||(t=e[Mc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function we(e){e[zn]=!0}var Xd=new Set,Vd={};function Ra(e,t){fl(e,t),fl(e+"Capture",t)}function fl(e,t){for(Vd[e]=t,e=0;e<t.length;e++)Xd.add(t[e])}var J0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rc={},Dc={};function Q0(e){return yo.call(Dc,e)?!0:yo.call(Rc,e)?!1:J0.test(e)?Dc[e]=!0:(Rc[e]=!0,!1)}function ai(e,t,a){if(Q0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function qn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Nt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function tt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function K0(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,r=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wo(e){if(!e._valueTracker){var t=Jd(e)?"checked":"value";e._valueTracker=K0(e,t,""+e[t])}}function Qd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Jd(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Z0=/[\n"\\]/g;function nt(e){return e.replace(Z0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function So(e,t,a,l,n,r,o,s){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+tt(t)):e.value!==""+tt(t)&&(e.value=""+tt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?ko(e,o,tt(t)):a!=null?ko(e,o,tt(a)):l!=null&&e.removeAttribute("value"),n==null&&r!=null&&(e.defaultChecked=!!r),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+tt(s):e.removeAttribute("name")}function Kd(e,t,a,l,n,r,o,s){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){wo(e);return}a=a!=null?""+tt(a):"",t=t!=null?""+tt(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),wo(e)}function ko(e,t,a){t==="number"&&ki(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function il(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+tt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Zd(e,t,a){if(t!=null&&(t=""+tt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+tt(a):""}function $d(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(z(92));if(ql(l)){if(1<l.length)throw Error(z(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=tt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),wo(e)}function ml(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var $0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Oc(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||$0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Fd(e,t,a){if(t!=null&&typeof t!="object")throw Error(z(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Oc(e,n,l)}else for(var r in t)t.hasOwnProperty(r)&&Oc(e,r,t[r])}function Ss(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var F0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),W0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function li(e){return W0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Rt(){}var No=null;function ks(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Za=null,rl=null;function Uc(e){var t=kl(e);if(t&&(e=t.stateNode)){var a=e[He]||null;e:switch(e=t.stateNode,t.type){case"input":if(So(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+nt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[He]||null;if(!n)throw Error(z(90));So(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Qd(l)}break e;case"textarea":Zd(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&il(e,!!a.multiple,t,!1)}}}var Tr=!1;function Wd(e,t,a){if(Tr)return e(t,a);Tr=!0;try{var l=e(t);return l}finally{if(Tr=!1,(Za!==null||rl!==null)&&(fr(),Za&&(t=Za,e=rl,rl=Za=null,Uc(t),e)))for(t=0;t<e.length;t++)Uc(e[t])}}function sn(e,t){var a=e.stateNode;if(a===null)return null;var l=a[He]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(z(231,t,typeof a));return a}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zo=!1;if(Bt)try{var Dl={};Object.defineProperty(Dl,"passive",{get:function(){zo=!0}}),window.addEventListener("test",Dl,Dl),window.removeEventListener("test",Dl,Dl)}catch{zo=!1}var Pt=null,Ns=null,ni=null;function Id(){if(ni)return ni;var e,t=Ns,a=t.length,l,n="value"in Pt?Pt.value:Pt.textContent,r=n.length;for(e=0;e<a&&t[e]===n[e];e++);var o=a-e;for(l=1;l<=o&&t[a-l]===n[r-l];l++);return ni=n.slice(e,1<l?1-l:void 0)}function ii(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xn(){return!0}function Lc(){return!1}function Ye(e){function t(a,l,n,r,o){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(r):r[s]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Xn:Lc,this.isPropagationStopped=Lc,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),t}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tr=Ye(Da),Tn=ie({},Da,{view:0,detail:0}),I0=Ye(Tn),Er,_r,Ol,ar=ie({},Tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ol&&(Ol&&e.type==="mousemove"?(Er=e.screenX-Ol.screenX,_r=e.screenY-Ol.screenY):_r=Er=0,Ol=e),Er)},movementY:function(e){return"movementY"in e?e.movementY:_r}}),Bc=Ye(ar),P0=ie({},ar,{dataTransfer:0}),eh=Ye(P0),th=ie({},Tn,{relatedTarget:0}),Cr=Ye(th),ah=ie({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),lh=Ye(ah),nh=ie({},Da,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ih=Ye(nh),rh=ie({},Da,{data:0}),Hc=Ye(rh),oh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ch={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ch[e])?!!t[e]:!1}function zs(){return uh}var dh=ie({},Tn,{key:function(e){if(e.key){var t=oh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ii(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zs,charCode:function(e){return e.type==="keypress"?ii(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ii(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fh=Ye(dh),mh=ie({},ar,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yc=Ye(mh),ph=ie({},Tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zs}),hh=Ye(ph),gh=ie({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),xh=Ye(gh),bh=ie({},ar,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vh=Ye(bh),yh=ie({},Da,{newState:0,oldState:0}),jh=Ye(yh),wh=[9,13,27,32],Ts=Bt&&"CompositionEvent"in window,Kl=null;Bt&&"documentMode"in document&&(Kl=document.documentMode);var Sh=Bt&&"TextEvent"in window&&!Kl,Pd=Bt&&(!Ts||Kl&&8<Kl&&11>=Kl),Gc=" ",qc=!1;function ef(e,t){switch(e){case"keyup":return wh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $a=!1;function kh(e,t){switch(e){case"compositionend":return tf(t);case"keypress":return t.which!==32?null:(qc=!0,Gc);case"textInput":return e=t.data,e===Gc&&qc?null:e;default:return null}}function Nh(e,t){if($a)return e==="compositionend"||!Ts&&ef(e,t)?(e=Id(),ni=Ns=Pt=null,$a=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pd&&t.locale!=="ko"?null:t.data;default:return null}}var zh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zh[e.type]:t==="textarea"}function af(e,t,a,l){Za?rl?rl.push(l):rl=[l]:Za=l,t=qi(t,"onChange"),0<t.length&&(a=new tr("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Zl=null,cn=null;function Th(e){Im(e,0)}function lr(e){var t=Xl(e);if(Qd(t))return e}function Vc(e,t){if(e==="change")return t}var lf=!1;if(Bt){var Ar;if(Bt){var Mr="oninput"in document;if(!Mr){var Jc=document.createElement("div");Jc.setAttribute("oninput","return;"),Mr=typeof Jc.oninput=="function"}Ar=Mr}else Ar=!1;lf=Ar&&(!document.documentMode||9<document.documentMode)}function Qc(){Zl&&(Zl.detachEvent("onpropertychange",nf),cn=Zl=null)}function nf(e){if(e.propertyName==="value"&&lr(cn)){var t=[];af(t,cn,e,ks(e)),Wd(Th,t)}}function Eh(e,t,a){e==="focusin"?(Qc(),Zl=t,cn=a,Zl.attachEvent("onpropertychange",nf)):e==="focusout"&&Qc()}function _h(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lr(cn)}function Ch(e,t){if(e==="click")return lr(t)}function Ah(e,t){if(e==="input"||e==="change")return lr(t)}function Mh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fe=typeof Object.is=="function"?Object.is:Mh;function un(e,t){if(Fe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!yo.call(t,n)||!Fe(e[n],t[n]))return!1}return!0}function Kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zc(e,t){var a=Kc(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Kc(a)}}function rf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function of(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ki(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ki(e.document)}return t}function Es(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Rh=Bt&&"documentMode"in document&&11>=document.documentMode,Fa=null,To=null,$l=null,Eo=!1;function $c(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Eo||Fa==null||Fa!==ki(l)||(l=Fa,"selectionStart"in l&&Es(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),$l&&un($l,l)||($l=l,l=qi(To,"onSelect"),0<l.length&&(t=new tr("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Fa)))}function ba(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Wa={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionrun:ba("Transition","TransitionRun"),transitionstart:ba("Transition","TransitionStart"),transitioncancel:ba("Transition","TransitionCancel"),transitionend:ba("Transition","TransitionEnd")},Rr={},sf={};Bt&&(sf=document.createElement("div").style,"AnimationEvent"in window||(delete Wa.animationend.animation,delete Wa.animationiteration.animation,delete Wa.animationstart.animation),"TransitionEvent"in window||delete Wa.transitionend.transition);function Oa(e){if(Rr[e])return Rr[e];if(!Wa[e])return e;var t=Wa[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in sf)return Rr[e]=t[a];return e}var cf=Oa("animationend"),uf=Oa("animationiteration"),df=Oa("animationstart"),Dh=Oa("transitionrun"),Oh=Oa("transitionstart"),Uh=Oa("transitioncancel"),ff=Oa("transitionend"),mf=new Map,_o="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_o.push("scrollEnd");function pt(e,t){mf.set(e,t),Ra(t,[e])}var Ni=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},et=[],Ia=0,_s=0;function nr(){for(var e=Ia,t=_s=Ia=0;t<e;){var a=et[t];et[t++]=null;var l=et[t];et[t++]=null;var n=et[t];et[t++]=null;var r=et[t];if(et[t++]=null,l!==null&&n!==null){var o=l.pending;o===null?n.next=n:(n.next=o.next,o.next=n),l.pending=n}r!==0&&pf(a,n,r)}}function ir(e,t,a,l){et[Ia++]=e,et[Ia++]=t,et[Ia++]=a,et[Ia++]=l,_s|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Cs(e,t,a,l){return ir(e,t,a,l),zi(e)}function Ua(e,t){return ir(e,null,null,t),zi(e)}function pf(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,r=e.return;r!==null;)r.childLanes|=a,l=r.alternate,l!==null&&(l.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(n=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,n&&t!==null&&(n=31-Ze(a),e=r.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),r):null}function zi(e){if(50<nn)throw nn=0,Fo=null,Error(z(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Pa={};function Lh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(e,t,a,l){return new Lh(e,t,a,l)}function As(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ot(e,t){var a=e.alternate;return a===null?(a=Ve(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function hf(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ri(e,t,a,l,n,r){var o=0;if(l=e,typeof e=="function")As(e)&&(o=1);else if(typeof e=="string")o=qg(e,a,vt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case go:return e=Ve(31,a,t,n),e.elementType=go,e.lanes=r,e;case Ja:return ka(a.children,n,r,t);case Rd:o=8,n|=24;break;case mo:return e=Ve(12,a,t,n|2),e.elementType=mo,e.lanes=r,e;case po:return e=Ve(13,a,t,n),e.elementType=po,e.lanes=r,e;case ho:return e=Ve(19,a,t,n),e.elementType=ho,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Mt:o=10;break e;case Dd:o=9;break e;case xs:o=11;break e;case bs:o=14;break e;case Qt:o=16,l=null;break e}o=29,a=Error(z(130,e===null?"null":typeof e,"")),l=null}return t=Ve(o,a,t,n),t.elementType=e,t.type=l,t.lanes=r,t}function ka(e,t,a,l){return e=Ve(7,e,l,t),e.lanes=a,e}function Dr(e,t,a){return e=Ve(6,e,null,t),e.lanes=a,e}function gf(e){var t=Ve(18,null,null,0);return t.stateNode=e,t}function Or(e,t,a){return t=Ve(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Fc=new WeakMap;function it(e,t){if(typeof e=="object"&&e!==null){var a=Fc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Cc(t)},Fc.set(e,t),t)}return{value:e,source:t,stack:Cc(t)}}var el=[],tl=0,Ti=null,dn=0,at=[],lt=0,fa=null,gt=1,xt="";function Ct(e,t){el[tl++]=dn,el[tl++]=Ti,Ti=e,dn=t}function xf(e,t,a){at[lt++]=gt,at[lt++]=xt,at[lt++]=fa,fa=e;var l=gt;e=xt;var n=32-Ze(l)-1;l&=~(1<<n),a+=1;var r=32-Ze(t)+n;if(30<r){var o=n-n%5;r=(l&(1<<o)-1).toString(32),l>>=o,n-=o,gt=1<<32-Ze(t)+n|a<<n|l,xt=r+e}else gt=1<<r|a<<n|l,xt=e}function Ms(e){e.return!==null&&(Ct(e,1),xf(e,1,0))}function Rs(e){for(;e===Ti;)Ti=el[--tl],el[tl]=null,dn=el[--tl],el[tl]=null;for(;e===fa;)fa=at[--lt],at[lt]=null,xt=at[--lt],at[lt]=null,gt=at[--lt],at[lt]=null}function bf(e,t){at[lt++]=gt,at[lt++]=xt,at[lt++]=fa,gt=t.id,xt=t.overflow,fa=e}var ze=null,le=null,X=!1,na=null,rt=!1,Co=Error(z(519));function ma(e){var t=Error(z(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fn(it(t,e)),Co}function Wc(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ne]=e,t[He]=l,a){case"dialog":H("cancel",t),H("close",t);break;case"iframe":case"object":case"embed":H("load",t);break;case"video":case"audio":for(a=0;a<gn.length;a++)H(gn[a],t);break;case"source":H("error",t);break;case"img":case"image":case"link":H("error",t),H("load",t);break;case"details":H("toggle",t);break;case"input":H("invalid",t),Kd(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":H("invalid",t);break;case"textarea":H("invalid",t),$d(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||ep(t.textContent,a)?(l.popover!=null&&(H("beforetoggle",t),H("toggle",t)),l.onScroll!=null&&H("scroll",t),l.onScrollEnd!=null&&H("scrollend",t),l.onClick!=null&&(t.onclick=Rt),t=!0):t=!1,t||ma(e,!0)}function Ic(e){for(ze=e.return;ze;)switch(ze.tag){case 5:case 31:case 13:rt=!1;return;case 27:case 3:rt=!0;return;default:ze=ze.return}}function Ha(e){if(e!==ze)return!1;if(!X)return Ic(e),X=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ts(e.type,e.memoizedProps)),a=!a),a&&le&&ma(e),Ic(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));le=Bu(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));le=Bu(e)}else t===27?(t=le,xa(e.type)?(e=is,is=null,le=e):le=t):le=ze?st(e.stateNode.nextSibling):null;return!0}function Ea(){le=ze=null,X=!1}function Ur(){var e=na;return e!==null&&(Le===null?Le=e:Le.push.apply(Le,e),na=null),e}function fn(e){na===null?na=[e]:na.push(e)}var Ao=yt(null),La=null,Dt=null;function Zt(e,t,a){te(Ao,t._currentValue),t._currentValue=a}function Ut(e){e._currentValue=Ao.current,Se(Ao)}function Mo(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Ro(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var r=n.dependencies;if(r!==null){var o=n.child;r=r.firstContext;e:for(;r!==null;){var s=r;r=n;for(var c=0;c<t.length;c++)if(s.context===t[c]){r.lanes|=a,s=r.alternate,s!==null&&(s.lanes|=a),Mo(r.return,a,e),l||(o=null);break e}r=s.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(z(341));o.lanes|=a,r=o.alternate,r!==null&&(r.lanes|=a),Mo(o,a,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function Nl(e,t,a,l){e=null;for(var n=t,r=!1;n!==null;){if(!r){if(n.flags&524288)r=!0;else if(n.flags&262144)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(z(387));if(o=o.memoizedProps,o!==null){var s=n.type;Fe(n.pendingProps.value,o.value)||(e!==null?e.push(s):e=[s])}}else if(n===yi.current){if(o=n.alternate,o===null)throw Error(z(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(bn):e=[bn])}n=n.return}e!==null&&Ro(t,e,a,l),t.flags|=262144}function Ei(e){for(e=e.firstContext;e!==null;){if(!Fe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _a(e){La=e,Dt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Te(e){return vf(La,e)}function Vn(e,t){return La===null&&_a(e),vf(e,t)}function vf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Dt===null){if(e===null)throw Error(z(308));Dt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Dt=Dt.next=t;return a}var Bh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Hh=ye.unstable_scheduleCallback,Yh=ye.unstable_NormalPriority,xe={$$typeof:Mt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ds(){return{controller:new Bh,data:new Map,refCount:0}}function En(e){e.refCount--,e.refCount===0&&Hh(Yh,function(){e.controller.abort()})}var Fl=null,Do=0,pl=0,ol=null;function Gh(e,t){if(Fl===null){var a=Fl=[];Do=0,pl=ic(),ol={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Do++,t.then(Pc,Pc),t}function Pc(){if(--Do===0&&Fl!==null){ol!==null&&(ol.status="fulfilled");var e=Fl;Fl=null,pl=0,ol=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function qh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var eu=U.S;U.S=function(e,t){Rm=Qe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Gh(e,t),eu!==null&&eu(e,t)};var Na=yt(null);function Os(){var e=Na.current;return e!==null?e:ee.pooledCache}function oi(e,t){t===null?te(Na,Na.current):te(Na,t.pool)}function yf(){var e=Os();return e===null?null:{parent:xe._currentValue,pool:e}}var zl=Error(z(460)),Us=Error(z(474)),rr=Error(z(542)),_i={then:function(){}};function tu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function jf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Rt,Rt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lu(e),e;default:if(typeof t.status=="string")t.then(Rt,Rt);else{if(e=ee,e!==null&&100<e.shellSuspendCounter)throw Error(z(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,lu(e),e}throw za=t,zl}}function ja(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(za=a,zl):a}}var za=null;function au(){if(za===null)throw Error(z(459));var e=za;return za=null,e}function lu(e){if(e===zl||e===rr)throw Error(z(483))}var sl=null,mn=0;function Jn(e){var t=mn;return mn+=1,sl===null&&(sl=[]),jf(sl,e,t)}function Ul(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Qn(e,t){throw t.$$typeof===E0?Error(z(525)):(e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function wf(e){function t(d,g){if(e){var b=d.deletions;b===null?(d.deletions=[g],d.flags|=16):b.push(g)}}function a(d,g){if(!e)return null;for(;g!==null;)t(d,g),g=g.sibling;return null}function l(d){for(var g=new Map;d!==null;)d.key!==null?g.set(d.key,d):g.set(d.index,d),d=d.sibling;return g}function n(d,g){return d=Ot(d,g),d.index=0,d.sibling=null,d}function r(d,g,b){return d.index=b,e?(b=d.alternate,b!==null?(b=b.index,b<g?(d.flags|=67108866,g):b):(d.flags|=67108866,g)):(d.flags|=1048576,g)}function o(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function s(d,g,b,v){return g===null||g.tag!==6?(g=Dr(b,d.mode,v),g.return=d,g):(g=n(g,b),g.return=d,g)}function c(d,g,b,v){var S=b.type;return S===Ja?h(d,g,b.props.children,v,b.key):g!==null&&(g.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Qt&&ja(S)===g.type)?(g=n(g,b.props),Ul(g,b),g.return=d,g):(g=ri(b.type,b.key,b.props,null,d.mode,v),Ul(g,b),g.return=d,g)}function u(d,g,b,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=Or(b,d.mode,v),g.return=d,g):(g=n(g,b.children||[]),g.return=d,g)}function h(d,g,b,v,S){return g===null||g.tag!==7?(g=ka(b,d.mode,v,S),g.return=d,g):(g=n(g,b),g.return=d,g)}function p(d,g,b){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Dr(""+g,d.mode,b),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Bn:return b=ri(g.type,g.key,g.props,null,d.mode,b),Ul(b,g),b.return=d,b;case Gl:return g=Or(g,d.mode,b),g.return=d,g;case Qt:return g=ja(g),p(d,g,b)}if(ql(g)||Rl(g))return g=ka(g,d.mode,b,null),g.return=d,g;if(typeof g.then=="function")return p(d,Jn(g),b);if(g.$$typeof===Mt)return p(d,Vn(d,g),b);Qn(d,g)}return null}function m(d,g,b,v){var S=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return S!==null?null:s(d,g,""+b,v);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Bn:return b.key===S?c(d,g,b,v):null;case Gl:return b.key===S?u(d,g,b,v):null;case Qt:return b=ja(b),m(d,g,b,v)}if(ql(b)||Rl(b))return S!==null?null:h(d,g,b,v,null);if(typeof b.then=="function")return m(d,g,Jn(b),v);if(b.$$typeof===Mt)return m(d,g,Vn(d,b),v);Qn(d,b)}return null}function x(d,g,b,v,S){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return d=d.get(b)||null,s(g,d,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Bn:return d=d.get(v.key===null?b:v.key)||null,c(g,d,v,S);case Gl:return d=d.get(v.key===null?b:v.key)||null,u(g,d,v,S);case Qt:return v=ja(v),x(d,g,b,v,S)}if(ql(v)||Rl(v))return d=d.get(b)||null,h(g,d,v,S,null);if(typeof v.then=="function")return x(d,g,b,Jn(v),S);if(v.$$typeof===Mt)return x(d,g,b,Vn(g,v),S);Qn(g,v)}return null}function y(d,g,b,v){for(var S=null,N=null,k=g,_=g=0,M=null;k!==null&&_<b.length;_++){k.index>_?(M=k,k=null):M=k.sibling;var E=m(d,k,b[_],v);if(E===null){k===null&&(k=M);break}e&&k&&E.alternate===null&&t(d,k),g=r(E,g,_),N===null?S=E:N.sibling=E,N=E,k=M}if(_===b.length)return a(d,k),X&&Ct(d,_),S;if(k===null){for(;_<b.length;_++)k=p(d,b[_],v),k!==null&&(g=r(k,g,_),N===null?S=k:N.sibling=k,N=k);return X&&Ct(d,_),S}for(k=l(k);_<b.length;_++)M=x(k,d,_,b[_],v),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?_:M.key),g=r(M,g,_),N===null?S=M:N.sibling=M,N=M);return e&&k.forEach(function(J){return t(d,J)}),X&&Ct(d,_),S}function j(d,g,b,v){if(b==null)throw Error(z(151));for(var S=null,N=null,k=g,_=g=0,M=null,E=b.next();k!==null&&!E.done;_++,E=b.next()){k.index>_?(M=k,k=null):M=k.sibling;var J=m(d,k,E.value,v);if(J===null){k===null&&(k=M);break}e&&k&&J.alternate===null&&t(d,k),g=r(J,g,_),N===null?S=J:N.sibling=J,N=J,k=M}if(E.done)return a(d,k),X&&Ct(d,_),S;if(k===null){for(;!E.done;_++,E=b.next())E=p(d,E.value,v),E!==null&&(g=r(E,g,_),N===null?S=E:N.sibling=E,N=E);return X&&Ct(d,_),S}for(k=l(k);!E.done;_++,E=b.next())E=x(k,d,_,E.value,v),E!==null&&(e&&E.alternate!==null&&k.delete(E.key===null?_:E.key),g=r(E,g,_),N===null?S=E:N.sibling=E,N=E);return e&&k.forEach(function(F){return t(d,F)}),X&&Ct(d,_),S}function w(d,g,b,v){if(typeof b=="object"&&b!==null&&b.type===Ja&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Bn:e:{for(var S=b.key;g!==null;){if(g.key===S){if(S=b.type,S===Ja){if(g.tag===7){a(d,g.sibling),v=n(g,b.props.children),v.return=d,d=v;break e}}else if(g.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Qt&&ja(S)===g.type){a(d,g.sibling),v=n(g,b.props),Ul(v,b),v.return=d,d=v;break e}a(d,g);break}else t(d,g);g=g.sibling}b.type===Ja?(v=ka(b.props.children,d.mode,v,b.key),v.return=d,d=v):(v=ri(b.type,b.key,b.props,null,d.mode,v),Ul(v,b),v.return=d,d=v)}return o(d);case Gl:e:{for(S=b.key;g!==null;){if(g.key===S)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){a(d,g.sibling),v=n(g,b.children||[]),v.return=d,d=v;break e}else{a(d,g);break}else t(d,g);g=g.sibling}v=Or(b,d.mode,v),v.return=d,d=v}return o(d);case Qt:return b=ja(b),w(d,g,b,v)}if(ql(b))return y(d,g,b,v);if(Rl(b)){if(S=Rl(b),typeof S!="function")throw Error(z(150));return b=S.call(b),j(d,g,b,v)}if(typeof b.then=="function")return w(d,g,Jn(b),v);if(b.$$typeof===Mt)return w(d,g,Vn(d,b),v);Qn(d,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,g!==null&&g.tag===6?(a(d,g.sibling),v=n(g,b),v.return=d,d=v):(a(d,g),v=Dr(b,d.mode,v),v.return=d,d=v),o(d)):a(d,g)}return function(d,g,b,v){try{mn=0;var S=w(d,g,b,v);return sl=null,S}catch(k){if(k===zl||k===rr)throw k;var N=Ve(29,k,null,d.mode);return N.lanes=v,N.return=d,N}finally{}}}var Ca=wf(!0),Sf=wf(!1),Kt=!1;function Ls(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Oo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ra(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,Q&2){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=zi(e),pf(e,null,a),t}return ir(e,l,t,a),zi(e)}function Wl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Yd(e,a)}}function Lr(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?n=r=o:r=r.next=o,a=a.next}while(a!==null);r===null?n=r=t:r=r.next=t}else n=r=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:r,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Uo=!1;function Il(){if(Uo){var e=ol;if(e!==null)throw e}}function Pl(e,t,a,l){Uo=!1;var n=e.updateQueue;Kt=!1;var r=n.firstBaseUpdate,o=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var c=s,u=c.next;c.next=null,o===null?r=u:o.next=u,o=c;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==o&&(s===null?h.firstBaseUpdate=u:s.next=u,h.lastBaseUpdate=c))}if(r!==null){var p=n.baseState;o=0,h=u=c=null,s=r;do{var m=s.lane&-536870913,x=m!==s.lane;if(x?(G&m)===m:(l&m)===m){m!==0&&m===pl&&(Uo=!0),h!==null&&(h=h.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var y=e,j=s;m=t;var w=a;switch(j.tag){case 1:if(y=j.payload,typeof y=="function"){p=y.call(w,p,m);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=j.payload,m=typeof y=="function"?y.call(w,p,m):y,m==null)break e;p=ie({},p,m);break e;case 2:Kt=!0}}m=s.callback,m!==null&&(e.flags|=64,x&&(e.flags|=8192),x=n.callbacks,x===null?n.callbacks=[m]:x.push(m))}else x={lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(u=h=x,c=p):h=h.next=x,o|=m;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;x=s,s=x.next,x.next=null,n.lastBaseUpdate=x,n.shared.pending=null}}while(!0);h===null&&(c=p),n.baseState=c,n.firstBaseUpdate=u,n.lastBaseUpdate=h,r===null&&(n.shared.lanes=0),ha|=o,e.lanes=o,e.memoizedState=p}}function kf(e,t){if(typeof e!="function")throw Error(z(191,e));e.call(t)}function Nf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)kf(a[e],t)}var hl=yt(null),Ci=yt(0);function nu(e,t){e=qt,te(Ci,e),te(hl,t),qt=e|t.baseLanes}function Lo(){te(Ci,qt),te(hl,hl.current)}function Bs(){qt=Ci.current,Se(hl),Se(Ci)}var We=yt(null),ot=null;function $t(e){var t=e.alternate;te(fe,fe.current&1),te(We,e),ot===null&&(t===null||hl.current!==null||t.memoizedState!==null)&&(ot=e)}function Bo(e){te(fe,fe.current),te(We,e),ot===null&&(ot=e)}function zf(e){e.tag===22?(te(fe,fe.current),te(We,e),ot===null&&(ot=e)):Ft()}function Ft(){te(fe,fe.current),te(We,We.current)}function Xe(e){Se(We),ot===e&&(ot=null),Se(fe)}var fe=yt(0);function Ai(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ls(a)||ns(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ht=0,B=null,I=null,he=null,Mi=!1,cl=!1,Aa=!1,Ri=0,pn=0,ul=null,Xh=0;function ce(){throw Error(z(321))}function Hs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Fe(e[a],t[a]))return!1;return!0}function Ys(e,t,a,l,n,r){return Ht=r,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,U.H=e===null||e.memoizedState===null?lm:Ws,Aa=!1,r=a(l,n),Aa=!1,cl&&(r=Ef(t,a,l,n)),Tf(e),r}function Tf(e){U.H=hn;var t=I!==null&&I.next!==null;if(Ht=0,he=I=B=null,Mi=!1,pn=0,ul=null,t)throw Error(z(300));e===null||be||(e=e.dependencies,e!==null&&Ei(e)&&(be=!0))}function Ef(e,t,a,l){B=e;var n=0;do{if(cl&&(ul=null),pn=0,cl=!1,25<=n)throw Error(z(301));if(n+=1,he=I=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}U.H=nm,r=t(a,l)}while(cl);return r}function Vh(){var e=U.H,t=e.useState()[0];return t=typeof t.then=="function"?_n(t):t,e=e.useState()[0],(I!==null?I.memoizedState:null)!==e&&(B.flags|=1024),t}function Gs(){var e=Ri!==0;return Ri=0,e}function qs(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Xs(e){if(Mi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Mi=!1}Ht=0,he=I=B=null,cl=!1,pn=Ri=0,ul=null}function Ce(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?B.memoizedState=he=e:he=he.next=e,he}function me(){if(I===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=I.next;var t=he===null?B.memoizedState:he.next;if(t!==null)he=t,I=e;else{if(e===null)throw B.alternate===null?Error(z(467)):Error(z(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},he===null?B.memoizedState=he=e:he=he.next=e}return he}function or(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _n(e){var t=pn;return pn+=1,ul===null&&(ul=[]),e=jf(ul,e,t),t=B,(he===null?t.memoizedState:he.next)===null&&(t=t.alternate,U.H=t===null||t.memoizedState===null?lm:Ws),e}function sr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _n(e);if(e.$$typeof===Mt)return Te(e)}throw Error(z(438,String(e)))}function Vs(e){var t=null,a=B.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=B.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=or(),B.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=_0;return t.index++,a}function Yt(e,t){return typeof t=="function"?t(e):t}function si(e){var t=me();return Js(t,I,e)}function Js(e,t,a){var l=e.queue;if(l===null)throw Error(z(311));l.lastRenderedReducer=a;var n=e.baseQueue,r=l.pending;if(r!==null){if(n!==null){var o=n.next;n.next=r.next,r.next=o}t.baseQueue=n=r,l.pending=null}if(r=e.baseState,n===null)e.memoizedState=r;else{t=n.next;var s=o=null,c=null,u=t,h=!1;do{var p=u.lane&-536870913;if(p!==u.lane?(G&p)===p:(Ht&p)===p){var m=u.revertLane;if(m===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===pl&&(h=!0);else if((Ht&m)===m){u=u.next,m===pl&&(h=!0);continue}else p={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},c===null?(s=c=p,o=r):c=c.next=p,B.lanes|=m,ha|=m;p=u.action,Aa&&a(r,p),r=u.hasEagerState?u.eagerState:a(r,p)}else m={lane:p,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},c===null?(s=c=m,o=r):c=c.next=m,B.lanes|=p,ha|=p;u=u.next}while(u!==null&&u!==t);if(c===null?o=r:c.next=s,!Fe(r,e.memoizedState)&&(be=!0,h&&(a=ol,a!==null)))throw a;e.memoizedState=r,e.baseState=o,e.baseQueue=c,l.lastRenderedState=r}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Br(e){var t=me(),a=t.queue;if(a===null)throw Error(z(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,r=t.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do r=e(r,o.action),o=o.next;while(o!==n);Fe(r,t.memoizedState)||(be=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,l]}function _f(e,t,a){var l=B,n=me(),r=X;if(r){if(a===void 0)throw Error(z(407));a=a()}else a=t();var o=!Fe((I||n).memoizedState,a);if(o&&(n.memoizedState=a,be=!0),n=n.queue,Qs(Mf.bind(null,l,n,e),[e]),n.getSnapshot!==t||o||he!==null&&he.memoizedState.tag&1){if(l.flags|=2048,gl(9,{destroy:void 0},Af.bind(null,l,n,a,t),null),ee===null)throw Error(z(349));r||Ht&127||Cf(l,t,a)}return a}function Cf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=B.updateQueue,t===null?(t=or(),B.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Af(e,t,a,l){t.value=a,t.getSnapshot=l,Rf(t)&&Df(e)}function Mf(e,t,a){return a(function(){Rf(t)&&Df(e)})}function Rf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Fe(e,a)}catch{return!0}}function Df(e){var t=Ua(e,2);t!==null&&Be(t,e,2)}function Ho(e){var t=Ce();if(typeof e=="function"){var a=e;if(e=a(),Aa){It(!0);try{a()}finally{It(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:e},t}function Of(e,t,a,l){return e.baseState=a,Js(e,I,typeof l=="function"?l:Yt)}function Jh(e,t,a,l,n){if(ur(e))throw Error(z(485));if(e=t.action,e!==null){var r={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};U.T!==null?a(!0):r.isTransition=!1,l(r),a=t.pending,a===null?(r.next=t.pending=r,Uf(t,r)):(r.next=a.next,t.pending=a.next=r)}}function Uf(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var r=U.T,o={};U.T=o;try{var s=a(n,l),c=U.S;c!==null&&c(o,s),iu(e,t,s)}catch(u){Yo(e,t,u)}finally{r!==null&&o.types!==null&&(r.types=o.types),U.T=r}}else try{r=a(n,l),iu(e,t,r)}catch(u){Yo(e,t,u)}}function iu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){ru(e,t,l)},function(l){return Yo(e,t,l)}):ru(e,t,a)}function ru(e,t,a){t.status="fulfilled",t.value=a,Lf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Uf(e,a)))}function Yo(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Lf(t),t=t.next;while(t!==l)}e.action=null}function Lf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Bf(e,t){return t}function ou(e,t){if(X){var a=ee.formState;if(a!==null){e:{var l=B;if(X){if(le){t:{for(var n=le,r=rt;n.nodeType!==8;){if(!r){n=null;break t}if(n=st(n.nextSibling),n===null){n=null;break t}}r=n.data,n=r==="F!"||r==="F"?n:null}if(n){le=st(n.nextSibling),l=n.data==="F!";break e}}ma(l)}l=!1}l&&(t=a[0])}}return a=Ce(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bf,lastRenderedState:t},a.queue=l,a=em.bind(null,B,l),l.dispatch=a,l=Ho(!1),r=Fs.bind(null,B,!1,l.queue),l=Ce(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Jh.bind(null,B,n,r,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function su(e){var t=me();return Hf(t,I,e)}function Hf(e,t,a){if(t=Js(e,t,Bf)[0],e=si(Yt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=_n(t)}catch(o){throw o===zl?rr:o}else l=t;t=me();var n=t.queue,r=n.dispatch;return a!==t.memoizedState&&(B.flags|=2048,gl(9,{destroy:void 0},Qh.bind(null,n,a),null)),[l,r,e]}function Qh(e,t){e.action=t}function cu(e){var t=me(),a=I;if(a!==null)return Hf(t,a,e);me(),t=t.memoizedState,a=me();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function gl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=B.updateQueue,t===null&&(t=or(),B.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Yf(){return me().memoizedState}function ci(e,t,a,l){var n=Ce();B.flags|=e,n.memoizedState=gl(1|t,{destroy:void 0},a,l===void 0?null:l)}function cr(e,t,a,l){var n=me();l=l===void 0?null:l;var r=n.memoizedState.inst;I!==null&&l!==null&&Hs(l,I.memoizedState.deps)?n.memoizedState=gl(t,r,a,l):(B.flags|=e,n.memoizedState=gl(1|t,r,a,l))}function uu(e,t){ci(8390656,8,e,t)}function Qs(e,t){cr(2048,8,e,t)}function Kh(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=or(),B.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Gf(e){var t=me().memoizedState;return Kh({ref:t,nextImpl:e}),function(){if(Q&2)throw Error(z(440));return t.impl.apply(void 0,arguments)}}function qf(e,t){return cr(4,2,e,t)}function Xf(e,t){return cr(4,4,e,t)}function Vf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jf(e,t,a){a=a!=null?a.concat([e]):null,cr(4,4,Vf.bind(null,t,e),a)}function Ks(){}function Qf(e,t){var a=me();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Hs(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Kf(e,t){var a=me();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Hs(t,l[1]))return l[0];if(l=e(),Aa){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[l,t],l}function Zs(e,t,a){return a===void 0||Ht&1073741824&&!(G&261930)?e.memoizedState=t:(e.memoizedState=a,e=Om(),B.lanes|=e,ha|=e,a)}function Zf(e,t,a,l){return Fe(a,t)?a:hl.current!==null?(e=Zs(e,a,l),Fe(e,t)||(be=!0),e):!(Ht&42)||Ht&1073741824&&!(G&261930)?(be=!0,e.memoizedState=a):(e=Om(),B.lanes|=e,ha|=e,t)}function $f(e,t,a,l,n){var r=K.p;K.p=r!==0&&8>r?r:8;var o=U.T,s={};U.T=s,Fs(e,!1,t,a);try{var c=n(),u=U.S;if(u!==null&&u(s,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=qh(c,l);en(e,t,h,$e(e))}else en(e,t,l,$e(e))}catch(p){en(e,t,{then:function(){},status:"rejected",reason:p},$e())}finally{K.p=r,o!==null&&s.types!==null&&(o.types=s.types),U.T=o}}function Zh(){}function Go(e,t,a,l){if(e.tag!==5)throw Error(z(476));var n=Ff(e).queue;$f(e,n,t,Sa,a===null?Zh:function(){return Wf(e),a(l)})}function Ff(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Sa,baseState:Sa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:Sa},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Wf(e){var t=Ff(e);t.next===null&&(t=e.alternate.memoizedState),en(e,t.next.queue,{},$e())}function $s(){return Te(bn)}function If(){return me().memoizedState}function Pf(){return me().memoizedState}function $h(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=$e();e=ia(a);var l=ra(t,e,a);l!==null&&(Be(l,t,a),Wl(l,t,a)),t={cache:Ds()},e.payload=t;return}t=t.return}}function Fh(e,t,a){var l=$e();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ur(e)?tm(t,a):(a=Cs(e,t,a,l),a!==null&&(Be(a,e,l),am(a,t,l)))}function em(e,t,a){var l=$e();en(e,t,a,l)}function en(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ur(e))tm(t,n);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,s=r(o,a);if(n.hasEagerState=!0,n.eagerState=s,Fe(s,o))return ir(e,t,n,0),ee===null&&nr(),!1}catch{}finally{}if(a=Cs(e,t,n,l),a!==null)return Be(a,e,l),am(a,t,l),!0}return!1}function Fs(e,t,a,l){if(l={lane:2,revertLane:ic(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ur(e)){if(t)throw Error(z(479))}else t=Cs(e,a,l,2),t!==null&&Be(t,e,2)}function ur(e){var t=e.alternate;return e===B||t!==null&&t===B}function tm(e,t){cl=Mi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function am(e,t,a){if(a&4194048){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Yd(e,a)}}var hn={readContext:Te,use:sr,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useLayoutEffect:ce,useInsertionEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useSyncExternalStore:ce,useId:ce,useHostTransitionStatus:ce,useFormState:ce,useActionState:ce,useOptimistic:ce,useMemoCache:ce,useCacheRefresh:ce};hn.useEffectEvent=ce;var lm={readContext:Te,use:sr,useCallback:function(e,t){return Ce().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:uu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ci(4194308,4,Vf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ci(4194308,4,e,t)},useInsertionEffect:function(e,t){ci(4,2,e,t)},useMemo:function(e,t){var a=Ce();t=t===void 0?null:t;var l=e();if(Aa){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Ce();if(a!==void 0){var n=a(t);if(Aa){It(!0);try{a(t)}finally{It(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Fh.bind(null,B,e),[l.memoizedState,e]},useRef:function(e){var t=Ce();return e={current:e},t.memoizedState=e},useState:function(e){e=Ho(e);var t=e.queue,a=em.bind(null,B,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ks,useDeferredValue:function(e,t){var a=Ce();return Zs(a,e,t)},useTransition:function(){var e=Ho(!1);return e=$f.bind(null,B,e.queue,!0,!1),Ce().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=B,n=Ce();if(X){if(a===void 0)throw Error(z(407));a=a()}else{if(a=t(),ee===null)throw Error(z(349));G&127||Cf(l,t,a)}n.memoizedState=a;var r={value:a,getSnapshot:t};return n.queue=r,uu(Mf.bind(null,l,r,e),[e]),l.flags|=2048,gl(9,{destroy:void 0},Af.bind(null,l,r,a,t),null),a},useId:function(){var e=Ce(),t=ee.identifierPrefix;if(X){var a=xt,l=gt;a=(l&~(1<<32-Ze(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ri++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Xh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:$s,useFormState:ou,useActionState:ou,useOptimistic:function(e){var t=Ce();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Fs.bind(null,B,!0,a),a.dispatch=t,[e,t]},useMemoCache:Vs,useCacheRefresh:function(){return Ce().memoizedState=$h.bind(null,B)},useEffectEvent:function(e){var t=Ce(),a={impl:e};return t.memoizedState=a,function(){if(Q&2)throw Error(z(440));return a.impl.apply(void 0,arguments)}}},Ws={readContext:Te,use:sr,useCallback:Qf,useContext:Te,useEffect:Qs,useImperativeHandle:Jf,useInsertionEffect:qf,useLayoutEffect:Xf,useMemo:Kf,useReducer:si,useRef:Yf,useState:function(){return si(Yt)},useDebugValue:Ks,useDeferredValue:function(e,t){var a=me();return Zf(a,I.memoizedState,e,t)},useTransition:function(){var e=si(Yt)[0],t=me().memoizedState;return[typeof e=="boolean"?e:_n(e),t]},useSyncExternalStore:_f,useId:If,useHostTransitionStatus:$s,useFormState:su,useActionState:su,useOptimistic:function(e,t){var a=me();return Of(a,I,e,t)},useMemoCache:Vs,useCacheRefresh:Pf};Ws.useEffectEvent=Gf;var nm={readContext:Te,use:sr,useCallback:Qf,useContext:Te,useEffect:Qs,useImperativeHandle:Jf,useInsertionEffect:qf,useLayoutEffect:Xf,useMemo:Kf,useReducer:Br,useRef:Yf,useState:function(){return Br(Yt)},useDebugValue:Ks,useDeferredValue:function(e,t){var a=me();return I===null?Zs(a,e,t):Zf(a,I.memoizedState,e,t)},useTransition:function(){var e=Br(Yt)[0],t=me().memoizedState;return[typeof e=="boolean"?e:_n(e),t]},useSyncExternalStore:_f,useId:If,useHostTransitionStatus:$s,useFormState:cu,useActionState:cu,useOptimistic:function(e,t){var a=me();return I!==null?Of(a,I,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vs,useCacheRefresh:Pf};nm.useEffectEvent=Gf;function Hr(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:ie({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var qo={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=$e(),n=ia(l);n.payload=t,a!=null&&(n.callback=a),t=ra(e,n,l),t!==null&&(Be(t,e,l),Wl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=$e(),n=ia(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ra(e,n,l),t!==null&&(Be(t,e,l),Wl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=$e(),l=ia(a);l.tag=2,t!=null&&(l.callback=t),t=ra(e,l,a),t!==null&&(Be(t,e,a),Wl(t,e,a))}};function du(e,t,a,l,n,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,o):t.prototype&&t.prototype.isPureReactComponent?!un(a,l)||!un(n,r):!0}function fu(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&qo.enqueueReplaceState(t,t.state,null)}function Ma(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=ie({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function im(e){Ni(e)}function rm(e){console.error(e)}function om(e){Ni(e)}function Di(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function mu(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Xo(e,t,a){return a=ia(a),a.tag=3,a.payload={element:null},a.callback=function(){Di(e,t)},a}function sm(e){return e=ia(e),e.tag=3,e}function cm(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var r=l.value;e.payload=function(){return n(r)},e.callback=function(){mu(t,a,l)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){mu(t,a,l),typeof n!="function"&&(oa===null?oa=new Set([this]):oa.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function Wh(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Nl(t,a,n,!0),a=We.current,a!==null){switch(a.tag){case 31:case 13:return ot===null?Hi():a.alternate===null&&ue===0&&(ue=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===_i?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Fr(e,l,n)),!1;case 22:return a.flags|=65536,l===_i?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Fr(e,l,n)),!1}throw Error(z(435,a.tag))}return Fr(e,l,n),Hi(),!1}if(X)return t=We.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Co&&(e=Error(z(422),{cause:l}),fn(it(e,a)))):(l!==Co&&(t=Error(z(423),{cause:l}),fn(it(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=it(l,a),n=Xo(e.stateNode,l,n),Lr(e,n),ue!==4&&(ue=2)),!1;var r=Error(z(520),{cause:l});if(r=it(r,a),ln===null?ln=[r]:ln.push(r),ue!==4&&(ue=2),t===null)return!0;l=it(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=Xo(a.stateNode,l,e),Lr(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(oa===null||!oa.has(r))))return a.flags|=65536,n&=-n,a.lanes|=n,n=sm(n),cm(n,e,a,l),Lr(a,n),!1}a=a.return}while(a!==null);return!1}var Is=Error(z(461)),be=!1;function ke(e,t,a,l){t.child=e===null?Sf(t,null,a,l):Ca(t,e.child,a,l)}function pu(e,t,a,l,n){a=a.render;var r=t.ref;if("ref"in l){var o={};for(var s in l)s!=="ref"&&(o[s]=l[s])}else o=l;return _a(t),l=Ys(e,t,a,o,r,n),s=Gs(),e!==null&&!be?(qs(e,t,n),Gt(e,t,n)):(X&&s&&Ms(t),t.flags|=1,ke(e,t,l,n),t.child)}function hu(e,t,a,l,n){if(e===null){var r=a.type;return typeof r=="function"&&!As(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,um(e,t,r,l,n)):(e=ri(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ps(e,n)){var o=r.memoizedProps;if(a=a.compare,a=a!==null?a:un,a(o,l)&&e.ref===t.ref)return Gt(e,t,n)}return t.flags|=1,e=Ot(r,l),e.ref=t.ref,e.return=t,t.child=e}function um(e,t,a,l,n){if(e!==null){var r=e.memoizedProps;if(un(r,l)&&e.ref===t.ref)if(be=!1,t.pendingProps=l=r,Ps(e,n))e.flags&131072&&(be=!0);else return t.lanes=e.lanes,Gt(e,t,n)}return Vo(e,t,a,l,n)}function dm(e,t,a,l){var n=l.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if(t.flags&128){if(r=r!==null?r.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~r}else l=0,t.child=null;return gu(e,t,r,a,l)}if(a&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&oi(t,r!==null?r.cachePool:null),r!==null?nu(t,r):Lo(),zf(t);else return l=t.lanes=536870912,gu(e,t,r!==null?r.baseLanes|a:a,a,l)}else r!==null?(oi(t,r.cachePool),nu(t,r),Ft(),t.memoizedState=null):(e!==null&&oi(t,null),Lo(),Ft());return ke(e,t,n,a),t.child}function Vl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function gu(e,t,a,l,n){var r=Os();return r=r===null?null:{parent:xe._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&oi(t,null),Lo(),zf(t),e!==null&&Nl(e,t,l,!0),t.childLanes=n,null}function ui(e,t){return t=Oi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function xu(e,t,a){return Ca(t,e.child,null,a),e=ui(t,t.pendingProps),e.flags|=2,Xe(t),t.memoizedState=null,e}function Ih(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(X){if(l.mode==="hidden")return e=ui(t,l),t.lanes=536870912,Vl(null,e);if(Bo(t),(e=le)?(e=lp(e,rt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fa!==null?{id:gt,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},a=gf(e),a.return=t,t.child=a,ze=t,le=null)):e=null,e===null)throw ma(t);return t.lanes=536870912,null}return ui(t,l)}var r=e.memoizedState;if(r!==null){var o=r.dehydrated;if(Bo(t),n)if(t.flags&256)t.flags&=-257,t=xu(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(z(558));else if(be||Nl(e,t,a,!1),n=(a&e.childLanes)!==0,be||n){if(l=ee,l!==null&&(o=Gd(l,a),o!==0&&o!==r.retryLane))throw r.retryLane=o,Ua(e,o),Be(l,e,o),Is;Hi(),t=xu(e,t,a)}else e=r.treeContext,le=st(o.nextSibling),ze=t,X=!0,na=null,rt=!1,e!==null&&bf(t,e),t=ui(t,l),t.flags|=4096;return t}return e=Ot(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function di(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(z(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Vo(e,t,a,l,n){return _a(t),a=Ys(e,t,a,l,void 0,n),l=Gs(),e!==null&&!be?(qs(e,t,n),Gt(e,t,n)):(X&&l&&Ms(t),t.flags|=1,ke(e,t,a,n),t.child)}function bu(e,t,a,l,n,r){return _a(t),t.updateQueue=null,a=Ef(t,l,a,n),Tf(e),l=Gs(),e!==null&&!be?(qs(e,t,r),Gt(e,t,r)):(X&&l&&Ms(t),t.flags|=1,ke(e,t,a,r),t.child)}function vu(e,t,a,l,n){if(_a(t),t.stateNode===null){var r=Pa,o=a.contextType;typeof o=="object"&&o!==null&&(r=Te(o)),r=new a(l,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=qo,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=l,r.state=t.memoizedState,r.refs={},Ls(t),o=a.contextType,r.context=typeof o=="object"&&o!==null?Te(o):Pa,r.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Hr(t,a,o,l),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&qo.enqueueReplaceState(r,r.state,null),Pl(t,l,r,n),Il(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){r=t.stateNode;var s=t.memoizedProps,c=Ma(a,s);r.props=c;var u=r.context,h=a.contextType;o=Pa,typeof h=="object"&&h!==null&&(o=Te(h));var p=a.getDerivedStateFromProps;h=typeof p=="function"||typeof r.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,h||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s||u!==o)&&fu(t,r,l,o),Kt=!1;var m=t.memoizedState;r.state=m,Pl(t,l,r,n),Il(),u=t.memoizedState,s||m!==u||Kt?(typeof p=="function"&&(Hr(t,a,p,l),u=t.memoizedState),(c=Kt||du(t,a,c,l,m,u,o))?(h||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=u),r.props=l,r.state=u,r.context=o,l=c):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{r=t.stateNode,Oo(e,t),o=t.memoizedProps,h=Ma(a,o),r.props=h,p=t.pendingProps,m=r.context,u=a.contextType,c=Pa,typeof u=="object"&&u!==null&&(c=Te(u)),s=a.getDerivedStateFromProps,(u=typeof s=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==p||m!==c)&&fu(t,r,l,c),Kt=!1,m=t.memoizedState,r.state=m,Pl(t,l,r,n),Il();var x=t.memoizedState;o!==p||m!==x||Kt||e!==null&&e.dependencies!==null&&Ei(e.dependencies)?(typeof s=="function"&&(Hr(t,a,s,l),x=t.memoizedState),(h=Kt||du(t,a,h,l,m,x,c)||e!==null&&e.dependencies!==null&&Ei(e.dependencies))?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(l,x,c),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(l,x,c)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=x),r.props=l,r.state=x,r.context=c,l=h):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),l=!1)}return r=l,di(e,t),l=(t.flags&128)!==0,r||l?(r=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&l?(t.child=Ca(t,e.child,null,n),t.child=Ca(t,null,a,n)):ke(e,t,a,n),t.memoizedState=r.state,e=t.child):e=Gt(e,t,n),e}function yu(e,t,a,l){return Ea(),t.flags|=256,ke(e,t,a,l),t.child}var Yr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gr(e){return{baseLanes:e,cachePool:yf()}}function qr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Je),e}function fm(e,t,a){var l=t.pendingProps,n=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(fe.current&2)!==0),o&&(n=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(X){if(n?$t(t):Ft(),(e=le)?(e=lp(e,rt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:fa!==null?{id:gt,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},a=gf(e),a.return=t,t.child=a,ze=t,le=null)):e=null,e===null)throw ma(t);return ns(e)?t.lanes=32:t.lanes=536870912,null}var s=l.children;return l=l.fallback,n?(Ft(),n=t.mode,s=Oi({mode:"hidden",children:s},n),l=ka(l,n,a,null),s.return=t,l.return=t,s.sibling=l,t.child=s,l=t.child,l.memoizedState=Gr(a),l.childLanes=qr(e,o,a),t.memoizedState=Yr,Vl(null,l)):($t(t),Jo(t,s))}var c=e.memoizedState;if(c!==null&&(s=c.dehydrated,s!==null)){if(r)t.flags&256?($t(t),t.flags&=-257,t=Xr(e,t,a)):t.memoizedState!==null?(Ft(),t.child=e.child,t.flags|=128,t=null):(Ft(),s=l.fallback,n=t.mode,l=Oi({mode:"visible",children:l.children},n),s=ka(s,n,a,null),s.flags|=2,l.return=t,s.return=t,l.sibling=s,t.child=l,Ca(t,e.child,null,a),l=t.child,l.memoizedState=Gr(a),l.childLanes=qr(e,o,a),t.memoizedState=Yr,t=Vl(null,l));else if($t(t),ns(s)){if(o=s.nextSibling&&s.nextSibling.dataset,o)var u=o.dgst;o=u,l=Error(z(419)),l.stack="",l.digest=o,fn({value:l,source:null,stack:null}),t=Xr(e,t,a)}else if(be||Nl(e,t,a,!1),o=(a&e.childLanes)!==0,be||o){if(o=ee,o!==null&&(l=Gd(o,a),l!==0&&l!==c.retryLane))throw c.retryLane=l,Ua(e,l),Be(o,e,l),Is;ls(s)||Hi(),t=Xr(e,t,a)}else ls(s)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,le=st(s.nextSibling),ze=t,X=!0,na=null,rt=!1,e!==null&&bf(t,e),t=Jo(t,l.children),t.flags|=4096);return t}return n?(Ft(),s=l.fallback,n=t.mode,c=e.child,u=c.sibling,l=Ot(c,{mode:"hidden",children:l.children}),l.subtreeFlags=c.subtreeFlags&65011712,u!==null?s=Ot(u,s):(s=ka(s,n,a,null),s.flags|=2),s.return=t,l.return=t,l.sibling=s,t.child=l,Vl(null,l),l=t.child,s=e.child.memoizedState,s===null?s=Gr(a):(n=s.cachePool,n!==null?(c=xe._currentValue,n=n.parent!==c?{parent:c,pool:c}:n):n=yf(),s={baseLanes:s.baseLanes|a,cachePool:n}),l.memoizedState=s,l.childLanes=qr(e,o,a),t.memoizedState=Yr,Vl(e.child,l)):($t(t),a=e.child,e=a.sibling,a=Ot(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Jo(e,t){return t=Oi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Oi(e,t){return e=Ve(22,e,null,t),e.lanes=0,e}function Xr(e,t,a){return Ca(t,e.child,null,a),e=Jo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ju(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Mo(e.return,t,a)}function Vr(e,t,a,l,n,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=a,o.tailMode=n,o.treeForkCount=r)}function mm(e,t,a){var l=t.pendingProps,n=l.revealOrder,r=l.tail;l=l.children;var o=fe.current,s=(o&2)!==0;if(s?(o=o&1|2,t.flags|=128):o&=1,te(fe,o),ke(e,t,l,a),l=X?dn:0,!s&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ju(e,a,t);else if(e.tag===19)ju(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Ai(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Vr(t,!1,n,a,r,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Ai(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Vr(t,!0,a,null,r,l);break;case"together":Vr(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Gt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ha|=t.lanes,!(a&t.childLanes))if(e!==null){if(Nl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,a=Ot(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ot(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ps(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Ei(e)))}function Ph(e,t,a){switch(t.tag){case 3:ji(t,t.stateNode.containerInfo),Zt(t,xe,e.memoizedState.cache),Ea();break;case 27:case 5:vo(t);break;case 4:ji(t,t.stateNode.containerInfo);break;case 10:Zt(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Bo(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?($t(t),t.flags|=128,null):a&t.child.childLanes?fm(e,t,a):($t(t),e=Gt(e,t,a),e!==null?e.sibling:null);$t(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Nl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return mm(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),te(fe,fe.current),l)break;return null;case 22:return t.lanes=0,dm(e,t,a,t.pendingProps);case 24:Zt(t,xe,e.memoizedState.cache)}return Gt(e,t,a)}function pm(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)be=!0;else{if(!Ps(e,a)&&!(t.flags&128))return be=!1,Ph(e,t,a);be=!!(e.flags&131072)}else be=!1,X&&t.flags&1048576&&xf(t,dn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=ja(t.elementType),t.type=e,typeof e=="function")As(e)?(l=Ma(e,l),t.tag=1,t=vu(null,t,e,l,a)):(t.tag=0,t=Vo(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===xs){t.tag=11,t=pu(null,t,e,l,a);break e}else if(n===bs){t.tag=14,t=hu(null,t,e,l,a);break e}}throw t=xo(e)||e,Error(z(306,t,""))}}return t;case 0:return Vo(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ma(l,t.pendingProps),vu(e,t,l,n,a);case 3:e:{if(ji(t,t.stateNode.containerInfo),e===null)throw Error(z(387));l=t.pendingProps;var r=t.memoizedState;n=r.element,Oo(e,t),Pl(t,l,null,a);var o=t.memoizedState;if(l=o.cache,Zt(t,xe,l),l!==r.cache&&Ro(t,[xe],a,!0),Il(),l=o.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=yu(e,t,l,a);break e}else if(l!==n){n=it(Error(z(424)),t),fn(n),t=yu(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(le=st(e.firstChild),ze=t,X=!0,na=null,rt=!0,a=Sf(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ea(),l===n){t=Gt(e,t,a);break e}ke(e,t,l,a)}t=t.child}return t;case 26:return di(e,t),e===null?(a=Gu(t.type,null,t.pendingProps,null))?t.memoizedState=a:X||(a=t.type,e=t.pendingProps,l=Xi(la.current).createElement(a),l[Ne]=t,l[He]=e,Ee(l,a,e),we(l),t.stateNode=l):t.memoizedState=Gu(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return vo(t),e===null&&X&&(l=t.stateNode=np(t.type,t.pendingProps,la.current),ze=t,rt=!0,n=le,xa(t.type)?(is=n,le=st(l.firstChild)):le=n),ke(e,t,t.pendingProps.children,a),di(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&X&&((n=l=le)&&(l=_g(l,t.type,t.pendingProps,rt),l!==null?(t.stateNode=l,ze=t,le=st(l.firstChild),rt=!1,n=!0):n=!1),n||ma(t)),vo(t),n=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,l=r.children,ts(n,r)?l=null:o!==null&&ts(n,o)&&(t.flags|=32),t.memoizedState!==null&&(n=Ys(e,t,Vh,null,null,a),bn._currentValue=n),di(e,t),ke(e,t,l,a),t.child;case 6:return e===null&&X&&((e=a=le)&&(a=Cg(a,t.pendingProps,rt),a!==null?(t.stateNode=a,ze=t,le=null,e=!0):e=!1),e||ma(t)),null;case 13:return fm(e,t,a);case 4:return ji(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ca(t,null,l,a):ke(e,t,l,a),t.child;case 11:return pu(e,t,t.type,t.pendingProps,a);case 7:return ke(e,t,t.pendingProps,a),t.child;case 8:return ke(e,t,t.pendingProps.children,a),t.child;case 12:return ke(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,Zt(t,t.type,l.value),ke(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,_a(t),n=Te(n),l=l(n),t.flags|=1,ke(e,t,l,a),t.child;case 14:return hu(e,t,t.type,t.pendingProps,a);case 15:return um(e,t,t.type,t.pendingProps,a);case 19:return mm(e,t,a);case 31:return Ih(e,t,a);case 22:return dm(e,t,a,t.pendingProps);case 24:return _a(t),l=Te(xe),e===null?(n=Os(),n===null&&(n=ee,r=Ds(),n.pooledCache=r,r.refCount++,r!==null&&(n.pooledCacheLanes|=a),n=r),t.memoizedState={parent:l,cache:n},Ls(t),Zt(t,xe,n)):(e.lanes&a&&(Oo(e,t),Pl(t,null,null,a),Il()),n=e.memoizedState,r=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Zt(t,xe,l)):(l=r.cache,Zt(t,xe,l),l!==n.cache&&Ro(t,[xe],a,!0))),ke(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(z(156,t.tag))}function zt(e){e.flags|=4}function Jr(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Bm())e.flags|=8192;else throw za=_i,Us}else e.flags&=-16777217}function wu(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!op(t))if(Bm())e.flags|=8192;else throw za=_i,Us}function Kn(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Bd():536870912,e.lanes|=t,xl|=t)}function Ll(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function eg(e,t,a){var l=t.pendingProps;switch(Rs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return ae(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Ut(xe),dl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ha(t)?zt(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ur())),ae(t),null;case 26:var n=t.type,r=t.memoizedState;return e===null?(zt(t),r!==null?(ae(t),wu(t,r)):(ae(t),Jr(t,n,null,l,a))):r?r!==e.memoizedState?(zt(t),ae(t),wu(t,r)):(ae(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&zt(t),ae(t),Jr(t,n,e,l,a)),null;case 27:if(wi(t),a=la.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&zt(t);else{if(!l){if(t.stateNode===null)throw Error(z(166));return ae(t),null}e=vt.current,Ha(t)?Wc(t):(e=np(n,l,a),t.stateNode=e,zt(t))}return ae(t),null;case 5:if(wi(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&zt(t);else{if(!l){if(t.stateNode===null)throw Error(z(166));return ae(t),null}if(r=vt.current,Ha(t))Wc(t);else{var o=Xi(la.current);switch(r){case 1:r=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:r=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":r=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":r=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":r=o.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?r.multiple=!0:l.size&&(r.size=l.size);break;default:r=typeof l.is=="string"?o.createElement(n,{is:l.is}):o.createElement(n)}}r[Ne]=t,r[He]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)r.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=r;e:switch(Ee(r,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&zt(t)}}return ae(t),Jr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&zt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(z(166));if(e=la.current,Ha(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=ze,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ne]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||ep(e.nodeValue,a)),e||ma(t,!0)}else e=Xi(e).createTextNode(l),e[Ne]=t,t.stateNode=e}return ae(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=Ha(t),a!==null){if(e===null){if(!l)throw Error(z(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(557));e[Ne]=t}else Ea(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),e=!1}else a=Ur(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Xe(t),t):(Xe(t),null);if(t.flags&128)throw Error(z(558))}return ae(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ha(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(z(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(z(317));n[Ne]=t}else Ea(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),n=!1}else n=Ur(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Xe(t),t):(Xe(t),null)}return Xe(t),t.flags&128?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),r=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(r=l.memoizedState.cachePool.pool),r!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Kn(t,t.updateQueue),ae(t),null);case 4:return dl(),e===null&&rc(t.stateNode.containerInfo),ae(t),null;case 10:return Ut(t.type),ae(t),null;case 19:if(Se(fe),l=t.memoizedState,l===null)return ae(t),null;if(n=(t.flags&128)!==0,r=l.rendering,r===null)if(n)Ll(l,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=Ai(e),r!==null){for(t.flags|=128,Ll(l,!1),e=r.updateQueue,t.updateQueue=e,Kn(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)hf(a,e),a=a.sibling;return te(fe,fe.current&1|2),X&&Ct(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Qe()>Li&&(t.flags|=128,n=!0,Ll(l,!1),t.lanes=4194304)}else{if(!n)if(e=Ai(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Kn(t,e),Ll(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!X)return ae(t),null}else 2*Qe()-l.renderingStartTime>Li&&a!==536870912&&(t.flags|=128,n=!0,Ll(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Qe(),e.sibling=null,a=fe.current,te(fe,n?a&1|2:a&1),X&&Ct(t,l.treeForkCount),e):(ae(t),null);case 22:case 23:return Xe(t),Bs(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?a&536870912&&!(t.flags&128)&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),a=t.updateQueue,a!==null&&Kn(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&Se(Na),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ut(xe),ae(t),null;case 25:return null;case 30:return null}throw Error(z(156,t.tag))}function tg(e,t){switch(Rs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ut(xe),dl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return wi(t),null;case 31:if(t.memoizedState!==null){if(Xe(t),t.alternate===null)throw Error(z(340));Ea()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Xe(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Ea()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(fe),null;case 4:return dl(),null;case 10:return Ut(t.type),null;case 22:case 23:return Xe(t),Bs(),e!==null&&Se(Na),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ut(xe),null;case 25:return null;default:return null}}function hm(e,t){switch(Rs(t),t.tag){case 3:Ut(xe),dl();break;case 26:case 27:case 5:wi(t);break;case 4:dl();break;case 31:t.memoizedState!==null&&Xe(t);break;case 13:Xe(t);break;case 19:Se(fe);break;case 10:Ut(t.type);break;case 22:case 23:Xe(t),Bs(),e!==null&&Se(Na);break;case 24:Ut(xe)}}function Cn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var r=a.create,o=a.inst;l=r(),o.destroy=l}a=a.next}while(a!==n)}}catch(s){$(t,t.return,s)}}function pa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var r=n.next;l=r;do{if((l.tag&e)===e){var o=l.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,n=t;var c=a,u=s;try{u()}catch(h){$(n,c,h)}}}l=l.next}while(l!==r)}}catch(h){$(t,t.return,h)}}function gm(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Nf(t,a)}catch(l){$(e,e.return,l)}}}function xm(e,t,a){a.props=Ma(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){$(e,t,l)}}function tn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){$(e,t,n)}}function bt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){$(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){$(e,t,n)}else a.current=null}function bm(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){$(e,e.return,n)}}function Qr(e,t,a){try{var l=e.stateNode;Sg(l,e.type,a,t),l[He]=t}catch(n){$(e,e.return,n)}}function vm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&xa(e.type)||e.tag===4}function Kr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qo(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Rt));else if(l!==4&&(l===27&&xa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Qo(e,t,a),e=e.sibling;e!==null;)Qo(e,t,a),e=e.sibling}function Ui(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&xa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ui(e,t,a),e=e.sibling;e!==null;)Ui(e,t,a),e=e.sibling}function ym(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ee(t,l,a),t[Ne]=e,t[He]=a}catch(r){$(e,e.return,r)}}var At=!1,ge=!1,Zr=!1,Su=typeof WeakSet=="function"?WeakSet:Set,je=null;function ag(e,t){if(e=e.containerInfo,Po=Ki,e=of(e),Es(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var o=0,s=-1,c=-1,u=0,h=0,p=e,m=null;t:for(;;){for(var x;p!==a||n!==0&&p.nodeType!==3||(s=o+n),p!==r||l!==0&&p.nodeType!==3||(c=o+l),p.nodeType===3&&(o+=p.nodeValue.length),(x=p.firstChild)!==null;)m=p,p=x;for(;;){if(p===e)break t;if(m===a&&++u===n&&(s=o),m===r&&++h===l&&(c=o),(x=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=x}a=s===-1||c===-1?null:{start:s,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(es={focusedElem:e,selectionRange:a},Ki=!1,je=t;je!==null;)if(t=je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,je=e;else for(;je!==null;){switch(t=je,r=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&r!==null){e=void 0,a=t,n=r.memoizedProps,r=r.memoizedState,l=a.stateNode;try{var y=Ma(a.type,n);e=l.getSnapshotBeforeUpdate(y,r),l.__reactInternalSnapshotBeforeUpdate=e}catch(j){$(a,a.return,j)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)as(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":as(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(z(163))}if(e=t.sibling,e!==null){e.return=t.return,je=e;break}je=t.return}}function jm(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Et(e,a),l&4&&Cn(5,a);break;case 1:if(Et(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){$(a,a.return,o)}else{var n=Ma(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){$(a,a.return,o)}}l&64&&gm(a),l&512&&tn(a,a.return);break;case 3:if(Et(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Nf(e,t)}catch(o){$(a,a.return,o)}}break;case 27:t===null&&l&4&&ym(a);case 26:case 5:Et(e,a),t===null&&l&4&&bm(a),l&512&&tn(a,a.return);break;case 12:Et(e,a);break;case 31:Et(e,a),l&4&&km(e,a);break;case 13:Et(e,a),l&4&&Nm(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=dg.bind(null,a),Ag(e,a))));break;case 22:if(l=a.memoizedState!==null||At,!l){t=t!==null&&t.memoizedState!==null||ge,n=At;var r=ge;At=l,(ge=t)&&!r?_t(e,a,(a.subtreeFlags&8772)!==0):Et(e,a),At=n,ge=r}break;case 30:break;default:Et(e,a)}}function wm(e){var t=e.alternate;t!==null&&(e.alternate=null,wm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ws(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var re=null,Ue=!1;function Tt(e,t,a){for(a=a.child;a!==null;)Sm(e,t,a),a=a.sibling}function Sm(e,t,a){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Sn,a)}catch{}switch(a.tag){case 26:ge||bt(a,t),Tt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ge||bt(a,t);var l=re,n=Ue;xa(a.type)&&(re=a.stateNode,Ue=!1),Tt(e,t,a),rn(a.stateNode),re=l,Ue=n;break;case 5:ge||bt(a,t);case 6:if(l=re,n=Ue,re=null,Tt(e,t,a),re=l,Ue=n,re!==null)if(Ue)try{(re.nodeType===9?re.body:re.nodeName==="HTML"?re.ownerDocument.body:re).removeChild(a.stateNode)}catch(r){$(a,t,r)}else try{re.removeChild(a.stateNode)}catch(r){$(a,t,r)}break;case 18:re!==null&&(Ue?(e=re,Uu(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),jl(e)):Uu(re,a.stateNode));break;case 4:l=re,n=Ue,re=a.stateNode.containerInfo,Ue=!0,Tt(e,t,a),re=l,Ue=n;break;case 0:case 11:case 14:case 15:pa(2,a,t),ge||pa(4,a,t),Tt(e,t,a);break;case 1:ge||(bt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&xm(a,t,l)),Tt(e,t,a);break;case 21:Tt(e,t,a);break;case 22:ge=(l=ge)||a.memoizedState!==null,Tt(e,t,a),ge=l;break;default:Tt(e,t,a)}}function km(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{jl(e)}catch(a){$(t,t.return,a)}}}function Nm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{jl(e)}catch(a){$(t,t.return,a)}}function lg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Su),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Su),t;default:throw Error(z(435,e.tag))}}function Zn(e,t){var a=lg(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=fg.bind(null,e,l);l.then(n,n)}})}function De(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],r=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 27:if(xa(s.type)){re=s.stateNode,Ue=!1;break e}break;case 5:re=s.stateNode,Ue=!1;break e;case 3:case 4:re=s.stateNode.containerInfo,Ue=!0;break e}s=s.return}if(re===null)throw Error(z(160));Sm(r,o,n),re=null,Ue=!1,r=n.alternate,r!==null&&(r.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)zm(t,e),t=t.sibling}var dt=null;function zm(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:De(t,e),Oe(e),l&4&&(pa(3,e,e.return),Cn(3,e),pa(5,e,e.return));break;case 1:De(t,e),Oe(e),l&512&&(ge||a===null||bt(a,a.return)),l&64&&At&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=dt;if(De(t,e),Oe(e),l&512&&(ge||a===null||bt(a,a.return)),l&4){var r=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":r=n.getElementsByTagName("title")[0],(!r||r[zn]||r[Ne]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=n.createElement(l),n.head.insertBefore(r,n.querySelector("head > title"))),Ee(r,l,a),r[Ne]=e,we(r),l=r;break e;case"link":var o=Xu("link","href",n).get(l+(a.href||""));if(o){for(var s=0;s<o.length;s++)if(r=o[s],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(s,1);break t}}r=n.createElement(l),Ee(r,l,a),n.head.appendChild(r);break;case"meta":if(o=Xu("meta","content",n).get(l+(a.content||""))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(s,1);break t}}r=n.createElement(l),Ee(r,l,a),n.head.appendChild(r);break;default:throw Error(z(468,l))}r[Ne]=e,we(r),l=r}e.stateNode=l}else Vu(n,e.type,e.stateNode);else e.stateNode=qu(n,l,e.memoizedProps);else r!==l?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,l===null?Vu(n,e.type,e.stateNode):qu(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Qr(e,e.memoizedProps,a.memoizedProps)}break;case 27:De(t,e),Oe(e),l&512&&(ge||a===null||bt(a,a.return)),a!==null&&l&4&&Qr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(De(t,e),Oe(e),l&512&&(ge||a===null||bt(a,a.return)),e.flags&32){n=e.stateNode;try{ml(n,"")}catch(y){$(e,e.return,y)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Qr(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Zr=!0);break;case 6:if(De(t,e),Oe(e),l&4){if(e.stateNode===null)throw Error(z(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(y){$(e,e.return,y)}}break;case 3:if(pi=null,n=dt,dt=Vi(t.containerInfo),De(t,e),dt=n,Oe(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{jl(t.containerInfo)}catch(y){$(e,e.return,y)}Zr&&(Zr=!1,Tm(e));break;case 4:l=dt,dt=Vi(e.stateNode.containerInfo),De(t,e),Oe(e),dt=l;break;case 12:De(t,e),Oe(e);break;case 31:De(t,e),Oe(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zn(e,l)));break;case 13:De(t,e),Oe(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(dr=Qe()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zn(e,l)));break;case 22:n=e.memoizedState!==null;var c=a!==null&&a.memoizedState!==null,u=At,h=ge;if(At=u||n,ge=h||c,De(t,e),ge=h,At=u,Oe(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||c||At||ge||wa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){c=a=t;try{if(r=c.stateNode,n)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=c.stateNode;var p=c.memoizedProps.style,m=p!=null&&p.hasOwnProperty("display")?p.display:null;s.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(y){$(c,c.return,y)}}}else if(t.tag===6){if(a===null){c=t;try{c.stateNode.nodeValue=n?"":c.memoizedProps}catch(y){$(c,c.return,y)}}}else if(t.tag===18){if(a===null){c=t;try{var x=c.stateNode;n?Lu(x,!0):Lu(c.stateNode,!1)}catch(y){$(c,c.return,y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Zn(e,a))));break;case 19:De(t,e),Oe(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Zn(e,l)));break;case 30:break;case 21:break;default:De(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(vm(l)){a=l;break}l=l.return}if(a==null)throw Error(z(160));switch(a.tag){case 27:var n=a.stateNode,r=Kr(e);Ui(e,r,n);break;case 5:var o=a.stateNode;a.flags&32&&(ml(o,""),a.flags&=-33);var s=Kr(e);Ui(e,s,o);break;case 3:case 4:var c=a.stateNode.containerInfo,u=Kr(e);Qo(e,u,c);break;default:throw Error(z(161))}}catch(h){$(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Tm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Et(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)jm(e,t.alternate,t),t=t.sibling}function wa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:pa(4,t,t.return),wa(t);break;case 1:bt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&xm(t,t.return,a),wa(t);break;case 27:rn(t.stateNode);case 26:case 5:bt(t,t.return),wa(t);break;case 22:t.memoizedState===null&&wa(t);break;case 30:wa(t);break;default:wa(t)}e=e.sibling}}function _t(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:_t(n,r,a),Cn(4,r);break;case 1:if(_t(n,r,a),l=r,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(u){$(l,l.return,u)}if(l=r,n=l.updateQueue,n!==null){var s=l.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)kf(c[n],s)}catch(u){$(l,l.return,u)}}a&&o&64&&gm(r),tn(r,r.return);break;case 27:ym(r);case 26:case 5:_t(n,r,a),a&&l===null&&o&4&&bm(r),tn(r,r.return);break;case 12:_t(n,r,a);break;case 31:_t(n,r,a),a&&o&4&&km(n,r);break;case 13:_t(n,r,a),a&&o&4&&Nm(n,r);break;case 22:r.memoizedState===null&&_t(n,r,a),tn(r,r.return);break;case 30:break;default:_t(n,r,a)}t=t.sibling}}function ec(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&En(a))}function tc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&En(e))}function ut(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Em(e,t,a,l),t=t.sibling}function Em(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:ut(e,t,a,l),n&2048&&Cn(9,t);break;case 1:ut(e,t,a,l);break;case 3:ut(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&En(e)));break;case 12:if(n&2048){ut(e,t,a,l),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,s=r.onPostCommit;typeof s=="function"&&s(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){$(t,t.return,c)}}else ut(e,t,a,l);break;case 31:ut(e,t,a,l);break;case 13:ut(e,t,a,l);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?ut(e,t,a,l):an(e,t):r._visibility&2?ut(e,t,a,l):(r._visibility|=2,Xa(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&ec(o,t);break;case 24:ut(e,t,a,l),n&2048&&tc(t.alternate,t);break;default:ut(e,t,a,l)}}function Xa(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,o=t,s=a,c=l,u=o.flags;switch(o.tag){case 0:case 11:case 15:Xa(r,o,s,c,n),Cn(8,o);break;case 23:break;case 22:var h=o.stateNode;o.memoizedState!==null?h._visibility&2?Xa(r,o,s,c,n):an(r,o):(h._visibility|=2,Xa(r,o,s,c,n)),n&&u&2048&&ec(o.alternate,o);break;case 24:Xa(r,o,s,c,n),n&&u&2048&&tc(o.alternate,o);break;default:Xa(r,o,s,c,n)}t=t.sibling}}function an(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:an(a,l),n&2048&&ec(l.alternate,l);break;case 24:an(a,l),n&2048&&tc(l.alternate,l);break;default:an(a,l)}t=t.sibling}}var Jl=8192;function Ya(e,t,a){if(e.subtreeFlags&Jl)for(e=e.child;e!==null;)_m(e,t,a),e=e.sibling}function _m(e,t,a){switch(e.tag){case 26:Ya(e,t,a),e.flags&Jl&&e.memoizedState!==null&&Xg(a,dt,e.memoizedState,e.memoizedProps);break;case 5:Ya(e,t,a);break;case 3:case 4:var l=dt;dt=Vi(e.stateNode.containerInfo),Ya(e,t,a),dt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Jl,Jl=16777216,Ya(e,t,a),Jl=l):Ya(e,t,a));break;default:Ya(e,t,a)}}function Cm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Bl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];je=l,Mm(l,e)}Cm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Am(e),e=e.sibling}function Am(e){switch(e.tag){case 0:case 11:case 15:Bl(e),e.flags&2048&&pa(9,e,e.return);break;case 3:Bl(e);break;case 12:Bl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,fi(e)):Bl(e);break;default:Bl(e)}}function fi(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];je=l,Mm(l,e)}Cm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:pa(8,t,t.return),fi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,fi(t));break;default:fi(t)}e=e.sibling}}function Mm(e,t){for(;je!==null;){var a=je;switch(a.tag){case 0:case 11:case 15:pa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:En(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,je=l;else e:for(a=e;je!==null;){l=je;var n=l.sibling,r=l.return;if(wm(l),l===a){je=null;break e}if(n!==null){n.return=r,je=n;break e}je=r}}}var ng={getCacheForType:function(e){var t=Te(xe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Te(xe).controller.signal}},ig=typeof WeakMap=="function"?WeakMap:Map,Q=0,ee=null,Y=null,G=0,Z=0,qe=null,ea=!1,Tl=!1,ac=!1,qt=0,ue=0,ha=0,Ta=0,lc=0,Je=0,xl=0,ln=null,Le=null,Ko=!1,dr=0,Rm=0,Li=1/0,Bi=null,oa=null,ve=0,sa=null,bl=null,Lt=0,Zo=0,$o=null,Dm=null,nn=0,Fo=null;function $e(){return Q&2&&G!==0?G&-G:U.T!==null?ic():qd()}function Om(){if(Je===0)if(!(G&536870912)||X){var e=Yn;Yn<<=1,!(Yn&3932160)&&(Yn=262144),Je=e}else Je=536870912;return e=We.current,e!==null&&(e.flags|=32),Je}function Be(e,t,a){(e===ee&&(Z===2||Z===9)||e.cancelPendingCommit!==null)&&(vl(e,0),ta(e,G,Je,!1)),Nn(e,a),(!(Q&2)||e!==ee)&&(e===ee&&(!(Q&2)&&(Ta|=a),ue===4&&ta(e,G,Je,!1)),jt(e))}function Um(e,t,a){if(Q&6)throw Error(z(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||kn(e,t),n=l?sg(e,t):$r(e,t,!0),r=l;do{if(n===0){Tl&&!l&&ta(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!rg(a)){n=$r(e,t,!1),r=!1;continue}if(n===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var s=e;n=ln;var c=s.current.memoizedState.isDehydrated;if(c&&(vl(s,o).flags|=256),o=$r(s,o,!1),o!==2){if(ac&&!c){s.errorRecoveryDisabledLanes|=r,Ta|=r,n=4;break e}r=Le,Le=n,r!==null&&(Le===null?Le=r:Le.push.apply(Le,r))}n=o}if(r=!1,n!==2)continue}}if(n===1){vl(e,0),ta(e,t,0,!0);break}e:{switch(l=e,r=n,r){case 0:case 1:throw Error(z(345));case 4:if((t&4194048)!==t)break;case 6:ta(l,t,Je,!ea);break e;case 2:Le=null;break;case 3:case 5:break;default:throw Error(z(329))}if((t&62914560)===t&&(n=dr+300-Qe(),10<n)){if(ta(l,t,Je,!ea),er(l,0,!0)!==0)break e;Lt=t,l.timeoutHandle=ap(ku.bind(null,l,a,Le,Bi,Ko,t,Je,Ta,xl,ea,r,"Throttled",-0,0),n);break e}ku(l,a,Le,Bi,Ko,t,Je,Ta,xl,ea,r,null,-0,0)}}break}while(!0);jt(e)}function ku(e,t,a,l,n,r,o,s,c,u,h,p,m,x){if(e.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Rt},_m(t,r,p);var y=(r&62914560)===r?dr-Qe():(r&4194048)===r?Rm-Qe():0;if(y=Vg(p,y),y!==null){Lt=r,e.cancelPendingCommit=y(zu.bind(null,e,t,r,a,l,n,o,s,c,h,p,null,m,x)),ta(e,r,o,!u);return}}zu(e,t,r,a,l,n,o,s,c)}function rg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],r=n.getSnapshot;n=n.value;try{if(!Fe(r(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ta(e,t,a,l){t&=~lc,t&=~Ta,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var r=31-Ze(n),o=1<<r;l[r]=-1,n&=~o}a!==0&&Hd(e,a,t)}function fr(){return Q&6?!0:(An(0),!1)}function nc(){if(Y!==null){if(Z===0)var e=Y.return;else e=Y,Dt=La=null,Xs(e),sl=null,mn=0,e=Y;for(;e!==null;)hm(e.alternate,e),e=e.return;Y=null}}function vl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,zg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Lt=0,nc(),ee=e,Y=a=Ot(e.current,null),G=t,Z=0,qe=null,ea=!1,Tl=kn(e,t),ac=!1,xl=Je=lc=Ta=ha=ue=0,Le=ln=null,Ko=!1,t&8&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-Ze(l),r=1<<n;t|=e[n],l&=~r}return qt=t,nr(),a}function Lm(e,t){B=null,U.H=hn,t===zl||t===rr?(t=au(),Z=3):t===Us?(t=au(),Z=4):Z=t===Is?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,qe=t,Y===null&&(ue=1,Di(e,it(t,e.current)))}function Bm(){var e=We.current;return e===null?!0:(G&4194048)===G?ot===null:(G&62914560)===G||G&536870912?e===ot:!1}function Hm(){var e=U.H;return U.H=hn,e===null?hn:e}function Ym(){var e=U.A;return U.A=ng,e}function Hi(){ue=4,ea||(G&4194048)!==G&&We.current!==null||(Tl=!0),!(ha&134217727)&&!(Ta&134217727)||ee===null||ta(ee,G,Je,!1)}function $r(e,t,a){var l=Q;Q|=2;var n=Hm(),r=Ym();(ee!==e||G!==t)&&(Bi=null,vl(e,t)),t=!1;var o=ue;e:do try{if(Z!==0&&Y!==null){var s=Y,c=qe;switch(Z){case 8:nc(),o=6;break e;case 3:case 2:case 9:case 6:We.current===null&&(t=!0);var u=Z;if(Z=0,qe=null,al(e,s,c,u),a&&Tl){o=0;break e}break;default:u=Z,Z=0,qe=null,al(e,s,c,u)}}og(),o=ue;break}catch(h){Lm(e,h)}while(!0);return t&&e.shellSuspendCounter++,Dt=La=null,Q=l,U.H=n,U.A=r,Y===null&&(ee=null,G=0,nr()),o}function og(){for(;Y!==null;)Gm(Y)}function sg(e,t){var a=Q;Q|=2;var l=Hm(),n=Ym();ee!==e||G!==t?(Bi=null,Li=Qe()+500,vl(e,t)):Tl=kn(e,t);e:do try{if(Z!==0&&Y!==null){t=Y;var r=qe;t:switch(Z){case 1:Z=0,qe=null,al(e,t,r,1);break;case 2:case 9:if(tu(r)){Z=0,qe=null,Nu(t);break}t=function(){Z!==2&&Z!==9||ee!==e||(Z=7),jt(e)},r.then(t,t);break e;case 3:Z=7;break e;case 4:Z=5;break e;case 7:tu(r)?(Z=0,qe=null,Nu(t)):(Z=0,qe=null,al(e,t,r,7));break;case 5:var o=null;switch(Y.tag){case 26:o=Y.memoizedState;case 5:case 27:var s=Y;if(o?op(o):s.stateNode.complete){Z=0,qe=null;var c=s.sibling;if(c!==null)Y=c;else{var u=s.return;u!==null?(Y=u,mr(u)):Y=null}break t}}Z=0,qe=null,al(e,t,r,5);break;case 6:Z=0,qe=null,al(e,t,r,6);break;case 8:nc(),ue=6;break e;default:throw Error(z(462))}}cg();break}catch(h){Lm(e,h)}while(!0);return Dt=La=null,U.H=l,U.A=n,Q=a,Y!==null?0:(ee=null,G=0,nr(),ue)}function cg(){for(;Y!==null&&!M0();)Gm(Y)}function Gm(e){var t=pm(e.alternate,e,qt);e.memoizedProps=e.pendingProps,t===null?mr(e):Y=t}function Nu(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=bu(a,t,t.pendingProps,t.type,void 0,G);break;case 11:t=bu(a,t,t.pendingProps,t.type.render,t.ref,G);break;case 5:Xs(t);default:hm(a,t),t=Y=hf(t,qt),t=pm(a,t,qt)}e.memoizedProps=e.pendingProps,t===null?mr(e):Y=t}function al(e,t,a,l){Dt=La=null,Xs(t),sl=null,mn=0;var n=t.return;try{if(Wh(e,n,t,a,G)){ue=1,Di(e,it(a,e.current)),Y=null;return}}catch(r){if(n!==null)throw Y=n,r;ue=1,Di(e,it(a,e.current)),Y=null;return}t.flags&32768?(X||l===1?e=!0:Tl||G&536870912?e=!1:(ea=e=!0,(l===2||l===9||l===3||l===6)&&(l=We.current,l!==null&&l.tag===13&&(l.flags|=16384))),qm(t,e)):mr(t)}function mr(e){var t=e;do{if(t.flags&32768){qm(t,ea);return}e=t.return;var a=eg(t.alternate,t,qt);if(a!==null){Y=a;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);ue===0&&(ue=5)}function qm(e,t){do{var a=tg(e.alternate,e);if(a!==null){a.flags&=32767,Y=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Y=e;return}Y=e=a}while(e!==null);ue=6,Y=null}function zu(e,t,a,l,n,r,o,s,c){e.cancelPendingCommit=null;do pr();while(ve!==0);if(Q&6)throw Error(z(327));if(t!==null){if(t===e.current)throw Error(z(177));if(r=t.lanes|t.childLanes,r|=_s,q0(e,a,r,o,s,c),e===ee&&(Y=ee=null,G=0),bl=t,sa=e,Lt=a,Zo=r,$o=n,Dm=l,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,mg(Si,function(){return Km(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,t.subtreeFlags&13878||l){l=U.T,U.T=null,n=K.p,K.p=2,o=Q,Q|=4;try{ag(e,t,a)}finally{Q=o,K.p=n,U.T=l}}ve=1,Xm(),Vm(),Jm()}}function Xm(){if(ve===1){ve=0;var e=sa,t=bl,a=(t.flags&13878)!==0;if(t.subtreeFlags&13878||a){a=U.T,U.T=null;var l=K.p;K.p=2;var n=Q;Q|=4;try{zm(t,e);var r=es,o=of(e.containerInfo),s=r.focusedElem,c=r.selectionRange;if(o!==s&&s&&s.ownerDocument&&rf(s.ownerDocument.documentElement,s)){if(c!==null&&Es(s)){var u=c.start,h=c.end;if(h===void 0&&(h=u),"selectionStart"in s)s.selectionStart=u,s.selectionEnd=Math.min(h,s.value.length);else{var p=s.ownerDocument||document,m=p&&p.defaultView||window;if(m.getSelection){var x=m.getSelection(),y=s.textContent.length,j=Math.min(c.start,y),w=c.end===void 0?j:Math.min(c.end,y);!x.extend&&j>w&&(o=w,w=j,j=o);var d=Zc(s,j),g=Zc(s,w);if(d&&g&&(x.rangeCount!==1||x.anchorNode!==d.node||x.anchorOffset!==d.offset||x.focusNode!==g.node||x.focusOffset!==g.offset)){var b=p.createRange();b.setStart(d.node,d.offset),x.removeAllRanges(),j>w?(x.addRange(b),x.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),x.addRange(b))}}}}for(p=[],x=s;x=x.parentNode;)x.nodeType===1&&p.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<p.length;s++){var v=p[s];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Ki=!!Po,es=Po=null}finally{Q=n,K.p=l,U.T=a}}e.current=t,ve=2}}function Vm(){if(ve===2){ve=0;var e=sa,t=bl,a=(t.flags&8772)!==0;if(t.subtreeFlags&8772||a){a=U.T,U.T=null;var l=K.p;K.p=2;var n=Q;Q|=4;try{jm(e,t.alternate,t)}finally{Q=n,K.p=l,U.T=a}}ve=3}}function Jm(){if(ve===4||ve===3){ve=0,R0();var e=sa,t=bl,a=Lt,l=Dm;t.subtreeFlags&10256||t.flags&10256?ve=5:(ve=0,bl=sa=null,Qm(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(oa=null),js(a),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Sn,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=U.T,n=K.p,K.p=2,U.T=null;try{for(var r=e.onRecoverableError,o=0;o<l.length;o++){var s=l[o];r(s.value,{componentStack:s.stack})}}finally{U.T=t,K.p=n}}Lt&3&&pr(),jt(e),n=e.pendingLanes,a&261930&&n&42?e===Fo?nn++:(nn=0,Fo=e):nn=0,An(0)}}function Qm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,En(t)))}function pr(){return Xm(),Vm(),Jm(),Km()}function Km(){if(ve!==5)return!1;var e=sa,t=Zo;Zo=0;var a=js(Lt),l=U.T,n=K.p;try{K.p=32>a?32:a,U.T=null,a=$o,$o=null;var r=sa,o=Lt;if(ve=0,bl=sa=null,Lt=0,Q&6)throw Error(z(331));var s=Q;if(Q|=4,Am(r.current),Em(r,r.current,o,a),Q=s,An(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Sn,r)}catch{}return!0}finally{K.p=n,U.T=l,Qm(e,t)}}function Tu(e,t,a){t=it(a,t),t=Xo(e.stateNode,t,2),e=ra(e,t,2),e!==null&&(Nn(e,2),jt(e))}function $(e,t,a){if(e.tag===3)Tu(e,e,a);else for(;t!==null;){if(t.tag===3){Tu(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(oa===null||!oa.has(l))){e=it(a,e),a=sm(2),l=ra(t,a,2),l!==null&&(cm(a,l,t,e),Nn(l,2),jt(l));break}}t=t.return}}function Fr(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new ig;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(ac=!0,n.add(a),e=ug.bind(null,e,t,a),t.then(e,e))}function ug(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ee===e&&(G&a)===a&&(ue===4||ue===3&&(G&62914560)===G&&300>Qe()-dr?!(Q&2)&&vl(e,0):lc|=a,xl===G&&(xl=0)),jt(e)}function Zm(e,t){t===0&&(t=Bd()),e=Ua(e,t),e!==null&&(Nn(e,t),jt(e))}function dg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Zm(e,a)}function fg(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(z(314))}l!==null&&l.delete(t),Zm(e,a)}function mg(e,t){return vs(e,t)}var Yi=null,Va=null,Wo=!1,Gi=!1,Wr=!1,aa=0;function jt(e){e!==Va&&e.next===null&&(Va===null?Yi=Va=e:Va=Va.next=e),Gi=!0,Wo||(Wo=!0,hg())}function An(e,t){if(!Wr&&Gi){Wr=!0;do for(var a=!1,l=Yi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var r=0;else{var o=l.suspendedLanes,s=l.pingedLanes;r=(1<<31-Ze(42|e)+1)-1,r&=n&~(o&~s),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,Eu(l,r))}else r=G,r=er(l,l===ee?r:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),!(r&3)||kn(l,r)||(a=!0,Eu(l,r));l=l.next}while(a);Wr=!1}}function pg(){$m()}function $m(){Gi=Wo=!1;var e=0;aa!==0&&Ng()&&(e=aa);for(var t=Qe(),a=null,l=Yi;l!==null;){var n=l.next,r=Fm(l,t);r===0?(l.next=null,a===null?Yi=n:a.next=n,n===null&&(Va=a)):(a=l,(e!==0||r&3)&&(Gi=!0)),l=n}ve!==0&&ve!==5||An(e),aa!==0&&(aa=0)}function Fm(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-Ze(r),s=1<<o,c=n[o];c===-1?(!(s&a)||s&l)&&(n[o]=G0(s,t)):c<=t&&(e.expiredLanes|=s),r&=~s}if(t=ee,a=G,a=er(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Z===2||Z===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Nr(l),e.callbackNode=null,e.callbackPriority=0;if(!(a&3)||kn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Nr(l),js(a)){case 2:case 8:a=Ud;break;case 32:a=Si;break;case 268435456:a=Ld;break;default:a=Si}return l=Wm.bind(null,e),a=vs(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Nr(l),e.callbackPriority=2,e.callbackNode=null,2}function Wm(e,t){if(ve!==0&&ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(pr()&&e.callbackNode!==a)return null;var l=G;return l=er(e,e===ee?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Um(e,l,t),Fm(e,Qe()),e.callbackNode!=null&&e.callbackNode===a?Wm.bind(null,e):null)}function Eu(e,t){if(pr())return null;Um(e,t,!0)}function hg(){Tg(function(){Q&6?vs(Od,pg):$m()})}function ic(){if(aa===0){var e=pl;e===0&&(e=Hn,Hn<<=1,!(Hn&261888)&&(Hn=256)),aa=e}return aa}function _u(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:li(""+e)}function Cu(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function gg(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var r=_u((n[He]||null).action),o=l.submitter;o&&(t=(t=o[He]||null)?_u(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var s=new tr("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(aa!==0){var c=o?Cu(n,o):new FormData(n);Go(a,{pending:!0,data:c,method:n.method,action:r},null,c)}}else typeof r=="function"&&(s.preventDefault(),c=o?Cu(n,o):new FormData(n),Go(a,{pending:!0,data:c,method:n.method,action:r},r,c))},currentTarget:n}]})}}for(var Ir=0;Ir<_o.length;Ir++){var Pr=_o[Ir],xg=Pr.toLowerCase(),bg=Pr[0].toUpperCase()+Pr.slice(1);pt(xg,"on"+bg)}pt(cf,"onAnimationEnd");pt(uf,"onAnimationIteration");pt(df,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Dh,"onTransitionRun");pt(Oh,"onTransitionStart");pt(Uh,"onTransitionCancel");pt(ff,"onTransitionEnd");fl("onMouseEnter",["mouseout","mouseover"]);fl("onMouseLeave",["mouseout","mouseover"]);fl("onPointerEnter",["pointerout","pointerover"]);fl("onPointerLeave",["pointerout","pointerover"]);Ra("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ra("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ra("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ra("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ra("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ra("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gn));function Im(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var r=void 0;if(t)for(var o=l.length-1;0<=o;o--){var s=l[o],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==r&&n.isPropagationStopped())break e;r=s,n.currentTarget=u;try{r(n)}catch(h){Ni(h)}n.currentTarget=null,r=c}else for(o=0;o<l.length;o++){if(s=l[o],c=s.instance,u=s.currentTarget,s=s.listener,c!==r&&n.isPropagationStopped())break e;r=s,n.currentTarget=u;try{r(n)}catch(h){Ni(h)}n.currentTarget=null,r=c}}}}function H(e,t){var a=t[jo];a===void 0&&(a=t[jo]=new Set);var l=e+"__bubble";a.has(l)||(Pm(t,e,2,!1),a.add(l))}function eo(e,t,a){var l=0;t&&(l|=4),Pm(a,e,l,t)}var $n="_reactListening"+Math.random().toString(36).slice(2);function rc(e){if(!e[$n]){e[$n]=!0,Xd.forEach(function(a){a!=="selectionchange"&&(vg.has(a)||eo(a,!1,e),eo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$n]||(t[$n]=!0,eo("selectionchange",!1,t))}}function Pm(e,t,a,l){switch(fp(t)){case 2:var n=Kg;break;case 8:n=Zg;break;default:n=uc}a=n.bind(null,t,a,e),n=void 0,!zo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function to(e,t,a,l,n){var r=l;if(!(t&1)&&!(t&2)&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var s=l.stateNode.containerInfo;if(s===n)break;if(o===4)for(o=l.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;s!==null;){if(o=Ka(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){l=r=o;continue e}s=s.parentNode}}l=l.return}Wd(function(){var u=r,h=ks(a),p=[];e:{var m=mf.get(e);if(m!==void 0){var x=tr,y=e;switch(e){case"keypress":if(ii(a)===0)break e;case"keydown":case"keyup":x=fh;break;case"focusin":y="focus",x=Cr;break;case"focusout":y="blur",x=Cr;break;case"beforeblur":case"afterblur":x=Cr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Bc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=eh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=hh;break;case cf:case uf:case df:x=lh;break;case ff:x=xh;break;case"scroll":case"scrollend":x=I0;break;case"wheel":x=vh;break;case"copy":case"cut":case"paste":x=ih;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Yc;break;case"toggle":case"beforetoggle":x=jh}var j=(t&4)!==0,w=!j&&(e==="scroll"||e==="scrollend"),d=j?m!==null?m+"Capture":null:m;j=[];for(var g=u,b;g!==null;){var v=g;if(b=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||b===null||d===null||(v=sn(g,d),v!=null&&j.push(xn(g,v,b))),w)break;g=g.return}0<j.length&&(m=new x(m,y,null,a,h),p.push({event:m,listeners:j}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&a!==No&&(y=a.relatedTarget||a.fromElement)&&(Ka(y)||y[Sl]))break e;if((x||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,x?(y=a.relatedTarget||a.toElement,x=u,y=y?Ka(y):null,y!==null&&(w=wn(y),j=y.tag,y!==w||j!==5&&j!==27&&j!==6)&&(y=null)):(x=null,y=u),x!==y)){if(j=Bc,v="onMouseLeave",d="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(j=Yc,v="onPointerLeave",d="onPointerEnter",g="pointer"),w=x==null?m:Xl(x),b=y==null?m:Xl(y),m=new j(v,g+"leave",x,a,h),m.target=w,m.relatedTarget=b,v=null,Ka(h)===u&&(j=new j(d,g+"enter",y,a,h),j.target=b,j.relatedTarget=w,v=j),w=v,x&&y)t:{for(j=yg,d=x,g=y,b=0,v=d;v;v=j(v))b++;v=0;for(var S=g;S;S=j(S))v++;for(;0<b-v;)d=j(d),b--;for(;0<v-b;)g=j(g),v--;for(;b--;){if(d===g||g!==null&&d===g.alternate){j=d;break t}d=j(d),g=j(g)}j=null}else j=null;x!==null&&Au(p,m,x,j,!1),y!==null&&w!==null&&Au(p,w,y,j,!0)}}e:{if(m=u?Xl(u):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var N=Vc;else if(Xc(m))if(lf)N=Ah;else{N=_h;var k=Eh}else x=m.nodeName,!x||x.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?u&&Ss(u.elementType)&&(N=Vc):N=Ch;if(N&&(N=N(e,u))){af(p,N,a,h);break e}k&&k(e,m,u),e==="focusout"&&u&&m.type==="number"&&u.memoizedProps.value!=null&&ko(m,"number",m.value)}switch(k=u?Xl(u):window,e){case"focusin":(Xc(k)||k.contentEditable==="true")&&(Fa=k,To=u,$l=null);break;case"focusout":$l=To=Fa=null;break;case"mousedown":Eo=!0;break;case"contextmenu":case"mouseup":case"dragend":Eo=!1,$c(p,a,h);break;case"selectionchange":if(Rh)break;case"keydown":case"keyup":$c(p,a,h)}var _;if(Ts)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else $a?ef(e,a)&&(M="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(M="onCompositionStart");M&&(Pd&&a.locale!=="ko"&&($a||M!=="onCompositionStart"?M==="onCompositionEnd"&&$a&&(_=Id()):(Pt=h,Ns="value"in Pt?Pt.value:Pt.textContent,$a=!0)),k=qi(u,M),0<k.length&&(M=new Hc(M,e,null,a,h),p.push({event:M,listeners:k}),_?M.data=_:(_=tf(a),_!==null&&(M.data=_)))),(_=Sh?kh(e,a):Nh(e,a))&&(M=qi(u,"onBeforeInput"),0<M.length&&(k=new Hc("onBeforeInput","beforeinput",null,a,h),p.push({event:k,listeners:M}),k.data=_)),gg(p,e,u,a,h)}Im(p,t)})}function xn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function qi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,r=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||r===null||(n=sn(e,a),n!=null&&l.unshift(xn(e,n,r)),n=sn(e,t),n!=null&&l.push(xn(e,n,r))),e.tag===3)return l;e=e.return}return[]}function yg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Au(e,t,a,l,n){for(var r=t._reactName,o=[];a!==null&&a!==l;){var s=a,c=s.alternate,u=s.stateNode;if(s=s.tag,c!==null&&c===l)break;s!==5&&s!==26&&s!==27||u===null||(c=u,n?(u=sn(a,r),u!=null&&o.unshift(xn(a,u,c))):n||(u=sn(a,r),u!=null&&o.push(xn(a,u,c)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var jg=/\r\n?/g,wg=/\u0000|\uFFFD/g;function Mu(e){return(typeof e=="string"?e:""+e).replace(jg,`
`).replace(wg,"")}function ep(e,t){return t=Mu(t),Mu(e)===t}function W(e,t,a,l,n,r){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ml(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ml(e,""+l);break;case"className":qn(e,"class",l);break;case"tabIndex":qn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":qn(e,a,l);break;case"style":Fd(e,l,r);break;case"data":if(t!=="object"){qn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=li(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&W(e,t,"name",n.name,n,null),W(e,t,"formEncType",n.formEncType,n,null),W(e,t,"formMethod",n.formMethod,n,null),W(e,t,"formTarget",n.formTarget,n,null)):(W(e,t,"encType",n.encType,n,null),W(e,t,"method",n.method,n,null),W(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=li(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Rt);break;case"onScroll":l!=null&&H("scroll",e);break;case"onScrollEnd":l!=null&&H("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(z(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(z(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=li(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":H("beforetoggle",e),H("toggle",e),ai(e,"popover",l);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ai(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=F0.get(a)||a,ai(e,a,l))}}function Io(e,t,a,l,n,r){switch(a){case"style":Fd(e,l,r);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(z(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(z(60));e.innerHTML=a}}break;case"children":typeof l=="string"?ml(e,l):(typeof l=="number"||typeof l=="bigint")&&ml(e,""+l);break;case"onScroll":l!=null&&H("scroll",e);break;case"onScrollEnd":l!=null&&H("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Rt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),r=e[He]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,n),typeof l=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):ai(e,a,l)}}}function Ee(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":H("error",e),H("load",e);var l=!1,n=!1,r;for(r in a)if(a.hasOwnProperty(r)){var o=a[r];if(o!=null)switch(r){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(z(137,t));default:W(e,t,r,o,a,null)}}n&&W(e,t,"srcSet",a.srcSet,a,null),l&&W(e,t,"src",a.src,a,null);return;case"input":H("invalid",e);var s=r=o=n=null,c=null,u=null;for(l in a)if(a.hasOwnProperty(l)){var h=a[l];if(h!=null)switch(l){case"name":n=h;break;case"type":o=h;break;case"checked":c=h;break;case"defaultChecked":u=h;break;case"value":r=h;break;case"defaultValue":s=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(z(137,t));break;default:W(e,t,l,h,a,null)}}Kd(e,r,s,c,u,o,n,!1);return;case"select":H("invalid",e),l=o=r=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":r=s;break;case"defaultValue":o=s;break;case"multiple":l=s;default:W(e,t,n,s,a,null)}t=r,a=o,e.multiple=!!l,t!=null?il(e,!!l,t,!1):a!=null&&il(e,!!l,a,!0);return;case"textarea":H("invalid",e),r=n=l=null;for(o in a)if(a.hasOwnProperty(o)&&(s=a[o],s!=null))switch(o){case"value":l=s;break;case"defaultValue":n=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(z(91));break;default:W(e,t,o,s,a,null)}$d(e,l,n,r);return;case"option":for(c in a)if(a.hasOwnProperty(c)&&(l=a[c],l!=null))switch(c){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:W(e,t,c,l,a,null)}return;case"dialog":H("beforetoggle",e),H("toggle",e),H("cancel",e),H("close",e);break;case"iframe":case"object":H("load",e);break;case"video":case"audio":for(l=0;l<gn.length;l++)H(gn[l],e);break;case"image":H("error",e),H("load",e);break;case"details":H("toggle",e);break;case"embed":case"source":case"link":H("error",e),H("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(l=a[u],l!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(z(137,t));default:W(e,t,u,l,a,null)}return;default:if(Ss(t)){for(h in a)a.hasOwnProperty(h)&&(l=a[h],l!==void 0&&Io(e,t,h,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&W(e,t,s,l,a,null))}function Sg(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,r=null,o=null,s=null,c=null,u=null,h=null;for(x in a){var p=a[x];if(a.hasOwnProperty(x)&&p!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":c=p;default:l.hasOwnProperty(x)||W(e,t,x,null,l,p)}}for(var m in l){var x=l[m];if(p=a[m],l.hasOwnProperty(m)&&(x!=null||p!=null))switch(m){case"type":r=x;break;case"name":n=x;break;case"checked":u=x;break;case"defaultChecked":h=x;break;case"value":o=x;break;case"defaultValue":s=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(z(137,t));break;default:x!==p&&W(e,t,m,x,l,p)}}So(e,o,s,c,u,h,r,n);return;case"select":x=o=s=m=null;for(r in a)if(c=a[r],a.hasOwnProperty(r)&&c!=null)switch(r){case"value":break;case"multiple":x=c;default:l.hasOwnProperty(r)||W(e,t,r,null,l,c)}for(n in l)if(r=l[n],c=a[n],l.hasOwnProperty(n)&&(r!=null||c!=null))switch(n){case"value":m=r;break;case"defaultValue":s=r;break;case"multiple":o=r;default:r!==c&&W(e,t,n,r,l,c)}t=s,a=o,l=x,m!=null?il(e,!!a,m,!1):!!l!=!!a&&(t!=null?il(e,!!a,t,!0):il(e,!!a,a?[]:"",!1));return;case"textarea":x=m=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:W(e,t,s,null,l,n)}for(o in l)if(n=l[o],r=a[o],l.hasOwnProperty(o)&&(n!=null||r!=null))switch(o){case"value":m=n;break;case"defaultValue":x=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(z(91));break;default:n!==r&&W(e,t,o,n,l,r)}Zd(e,m,x);return;case"option":for(var y in a)if(m=a[y],a.hasOwnProperty(y)&&m!=null&&!l.hasOwnProperty(y))switch(y){case"selected":e.selected=!1;break;default:W(e,t,y,null,l,m)}for(c in l)if(m=l[c],x=a[c],l.hasOwnProperty(c)&&m!==x&&(m!=null||x!=null))switch(c){case"selected":e.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:W(e,t,c,m,l,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var j in a)m=a[j],a.hasOwnProperty(j)&&m!=null&&!l.hasOwnProperty(j)&&W(e,t,j,null,l,m);for(u in l)if(m=l[u],x=a[u],l.hasOwnProperty(u)&&m!==x&&(m!=null||x!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(z(137,t));break;default:W(e,t,u,m,l,x)}return;default:if(Ss(t)){for(var w in a)m=a[w],a.hasOwnProperty(w)&&m!==void 0&&!l.hasOwnProperty(w)&&Io(e,t,w,void 0,l,m);for(h in l)m=l[h],x=a[h],!l.hasOwnProperty(h)||m===x||m===void 0&&x===void 0||Io(e,t,h,m,l,x);return}}for(var d in a)m=a[d],a.hasOwnProperty(d)&&m!=null&&!l.hasOwnProperty(d)&&W(e,t,d,null,l,m);for(p in l)m=l[p],x=a[p],!l.hasOwnProperty(p)||m===x||m==null&&x==null||W(e,t,p,m,l,x)}function Ru(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],r=n.transferSize,o=n.initiatorType,s=n.duration;if(r&&s&&Ru(o)){for(o=0,s=n.responseEnd,l+=1;l<a.length;l++){var c=a[l],u=c.startTime;if(u>s)break;var h=c.transferSize,p=c.initiatorType;h&&Ru(p)&&(c=c.responseEnd,o+=h*(c<s?1:(s-u)/(c-u)))}if(--l,t+=8*(r+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Po=null,es=null;function Xi(e){return e.nodeType===9?e:e.ownerDocument}function Du(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ts(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ao=null;function Ng(){var e=window.event;return e&&e.type==="popstate"?e===ao?!1:(ao=e,!0):(ao=null,!1)}var ap=typeof setTimeout=="function"?setTimeout:void 0,zg=typeof clearTimeout=="function"?clearTimeout:void 0,Ou=typeof Promise=="function"?Promise:void 0,Tg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ou<"u"?function(e){return Ou.resolve(null).then(e).catch(Eg)}:ap;function Eg(e){setTimeout(function(){throw e})}function xa(e){return e==="head"}function Uu(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),jl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")rn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,rn(a);for(var r=a.firstChild;r;){var o=r.nextSibling,s=r.nodeName;r[zn]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=o}}else a==="body"&&rn(e.ownerDocument.body);a=n}while(a);jl(t)}function Lu(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function as(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":as(a),ws(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function _g(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[zn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=st(e.nextSibling),e===null)break}return null}function Cg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=st(e.nextSibling),e===null))return null;return e}function lp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=st(e.nextSibling),e===null))return null;return e}function ls(e){return e.data==="$?"||e.data==="$~"}function ns(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ag(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function st(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var is=null;function Bu(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return st(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Hu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function np(e,t,a){switch(t=Xi(a),e){case"html":if(e=t.documentElement,!e)throw Error(z(452));return e;case"head":if(e=t.head,!e)throw Error(z(453));return e;case"body":if(e=t.body,!e)throw Error(z(454));return e;default:throw Error(z(451))}}function rn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ws(e)}var ct=new Map,Yu=new Set;function Vi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Vt=K.d;K.d={f:Mg,r:Rg,D:Dg,C:Og,L:Ug,m:Lg,X:Hg,S:Bg,M:Yg};function Mg(){var e=Vt.f(),t=fr();return e||t}function Rg(e){var t=kl(e);t!==null&&t.tag===5&&t.type==="form"?Wf(t):Vt.r(e)}var El=typeof document>"u"?null:document;function ip(e,t,a){var l=El;if(l&&typeof t=="string"&&t){var n=nt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Yu.has(n)||(Yu.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Ee(t,"link",e),we(t),l.head.appendChild(t)))}}function Dg(e){Vt.D(e),ip("dns-prefetch",e,null)}function Og(e,t){Vt.C(e,t),ip("preconnect",e,t)}function Ug(e,t,a){Vt.L(e,t,a);var l=El;if(l&&e&&t){var n='link[rel="preload"][as="'+nt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+nt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+nt(a.imageSizes)+'"]')):n+='[href="'+nt(e)+'"]';var r=n;switch(t){case"style":r=yl(e);break;case"script":r=_l(e)}ct.has(r)||(e=ie({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),ct.set(r,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Mn(r))||t==="script"&&l.querySelector(Rn(r))||(t=l.createElement("link"),Ee(t,"link",e),we(t),l.head.appendChild(t)))}}function Lg(e,t){Vt.m(e,t);var a=El;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+nt(l)+'"][href="'+nt(e)+'"]',r=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=_l(e)}if(!ct.has(r)&&(e=ie({rel:"modulepreload",href:e},t),ct.set(r,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Rn(r)))return}l=a.createElement("link"),Ee(l,"link",e),we(l),a.head.appendChild(l)}}}function Bg(e,t,a){Vt.S(e,t,a);var l=El;if(l&&e){var n=nl(l).hoistableStyles,r=yl(e);t=t||"default";var o=n.get(r);if(!o){var s={loading:0,preload:null};if(o=l.querySelector(Mn(r)))s.loading=5;else{e=ie({rel:"stylesheet",href:e,"data-precedence":t},a),(a=ct.get(r))&&oc(e,a);var c=o=l.createElement("link");we(c),Ee(c,"link",e),c._p=new Promise(function(u,h){c.onload=u,c.onerror=h}),c.addEventListener("load",function(){s.loading|=1}),c.addEventListener("error",function(){s.loading|=2}),s.loading|=4,mi(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:s},n.set(r,o)}}}function Hg(e,t){Vt.X(e,t);var a=El;if(a&&e){var l=nl(a).hoistableScripts,n=_l(e),r=l.get(n);r||(r=a.querySelector(Rn(n)),r||(e=ie({src:e,async:!0},t),(t=ct.get(n))&&sc(e,t),r=a.createElement("script"),we(r),Ee(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(n,r))}}function Yg(e,t){Vt.M(e,t);var a=El;if(a&&e){var l=nl(a).hoistableScripts,n=_l(e),r=l.get(n);r||(r=a.querySelector(Rn(n)),r||(e=ie({src:e,async:!0,type:"module"},t),(t=ct.get(n))&&sc(e,t),r=a.createElement("script"),we(r),Ee(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},l.set(n,r))}}function Gu(e,t,a,l){var n=(n=la.current)?Vi(n):null;if(!n)throw Error(z(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=yl(a.href),a=nl(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=yl(a.href);var r=nl(n).hoistableStyles,o=r.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=n.querySelector(Mn(e)))&&!r._p&&(o.instance=r,o.state.loading=5),ct.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ct.set(e,a),r||Gg(n,e,a,o.state))),t&&l===null)throw Error(z(528,""));return o}if(t&&l!==null)throw Error(z(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=_l(a),a=nl(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(z(444,e))}}function yl(e){return'href="'+nt(e)+'"'}function Mn(e){return'link[rel="stylesheet"]['+e+"]"}function rp(e){return ie({},e,{"data-precedence":e.precedence,precedence:null})}function Gg(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ee(t,"link",a),we(t),e.head.appendChild(t))}function _l(e){return'[src="'+nt(e)+'"]'}function Rn(e){return"script[async]"+e}function qu(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+nt(a.href)+'"]');if(l)return t.instance=l,we(l),l;var n=ie({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),we(l),Ee(l,"style",n),mi(l,a.precedence,e),t.instance=l;case"stylesheet":n=yl(a.href);var r=e.querySelector(Mn(n));if(r)return t.state.loading|=4,t.instance=r,we(r),r;l=rp(a),(n=ct.get(n))&&oc(l,n),r=(e.ownerDocument||e).createElement("link"),we(r);var o=r;return o._p=new Promise(function(s,c){o.onload=s,o.onerror=c}),Ee(r,"link",l),t.state.loading|=4,mi(r,a.precedence,e),t.instance=r;case"script":return r=_l(a.src),(n=e.querySelector(Rn(r)))?(t.instance=n,we(n),n):(l=a,(n=ct.get(r))&&(l=ie({},a),sc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),we(n),Ee(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(z(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(l=t.instance,t.state.loading|=4,mi(l,a.precedence,e));return t.instance}function mi(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,r=n,o=0;o<l.length;o++){var s=l[o];if(s.dataset.precedence===t)r=s;else if(r!==n)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function oc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function sc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var pi=null;function Xu(e,t,a){if(pi===null){var l=new Map,n=pi=new Map;n.set(a,l)}else n=pi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var r=a[n];if(!(r[zn]||r[Ne]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var s=l.get(o);s?s.push(r):l.set(o,[r])}}return l}function Vu(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function qg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function op(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function Xg(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&!(a.state.loading&4)){if(a.instance===null){var n=yl(l.href),r=t.querySelector(Mn(n));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ji.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,we(r);return}r=t.ownerDocument||t,l=rp(l),(n=ct.get(n))&&oc(l,n),r=r.createElement("link"),we(r);var o=r;o._p=new Promise(function(s,c){o.onload=s,o.onerror=c}),Ee(r,"link",l),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&!(a.state.loading&3)&&(e.count++,a=Ji.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var lo=0;function Vg(e,t){return e.stylesheets&&e.count===0&&hi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&hi(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&lo===0&&(lo=62500*kg());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hi(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>lo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Ji(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Qi=null;function hi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Qi=new Map,t.forEach(Jg,e),Qi=null,Ji.call(e))}function Jg(e,t){if(!(t.state.loading&4)){var a=Qi.get(e);if(a)var l=a.get(null);else{a=new Map,Qi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<n.length;r++){var o=n[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),l=o)}l&&a.set(null,l)}n=t.instance,o=n.getAttribute("data-precedence"),r=a.get(o)||l,r===l&&a.set(null,n),a.set(o,n),this.count++,l=Ji.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),r?r.parentNode.insertBefore(n,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var bn={$$typeof:Mt,Provider:null,Consumer:null,_currentValue:Sa,_currentValue2:Sa,_threadCount:0};function Qg(e,t,a,l,n,r,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zr(0),this.hiddenUpdates=zr(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function sp(e,t,a,l,n,r,o,s,c,u,h,p){return e=new Qg(e,t,a,o,c,u,h,p,s),t=1,r===!0&&(t|=24),r=Ve(3,null,null,t),e.current=r,r.stateNode=e,t=Ds(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:l,isDehydrated:a,cache:t},Ls(r),e}function cp(e){return e?(e=Pa,e):Pa}function up(e,t,a,l,n,r){n=cp(n),l.context===null?l.context=n:l.pendingContext=n,l=ia(t),l.payload={element:a},r=r===void 0?null:r,r!==null&&(l.callback=r),a=ra(e,l,t),a!==null&&(Be(a,e,t),Wl(a,e,t))}function Ju(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function cc(e,t){Ju(e,t),(e=e.alternate)&&Ju(e,t)}function dp(e){if(e.tag===13||e.tag===31){var t=Ua(e,67108864);t!==null&&Be(t,e,67108864),cc(e,67108864)}}function Qu(e){if(e.tag===13||e.tag===31){var t=$e();t=ys(t);var a=Ua(e,t);a!==null&&Be(a,e,t),cc(e,t)}}var Ki=!0;function Kg(e,t,a,l){var n=U.T;U.T=null;var r=K.p;try{K.p=2,uc(e,t,a,l)}finally{K.p=r,U.T=n}}function Zg(e,t,a,l){var n=U.T;U.T=null;var r=K.p;try{K.p=8,uc(e,t,a,l)}finally{K.p=r,U.T=n}}function uc(e,t,a,l){if(Ki){var n=rs(l);if(n===null)to(e,t,l,Zi,a),Ku(e,l);else if(Fg(n,e,t,a,l))l.stopPropagation();else if(Ku(e,l),t&4&&-1<$g.indexOf(e)){for(;n!==null;){var r=kl(n);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=ya(r.pendingLanes);if(o!==0){var s=r;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ze(o);s.entanglements[1]|=c,o&=~c}jt(r),!(Q&6)&&(Li=Qe()+500,An(0))}}break;case 31:case 13:s=Ua(r,2),s!==null&&Be(s,r,2),fr(),cc(r,2)}if(r=rs(l),r===null&&to(e,t,l,Zi,a),r===n)break;n=r}n!==null&&l.stopPropagation()}else to(e,t,l,null,a)}}function rs(e){return e=ks(e),dc(e)}var Zi=null;function dc(e){if(Zi=null,e=Ka(e),e!==null){var t=wn(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=Cd(t),e!==null)return e;e=null}else if(a===31){if(e=Ad(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zi=e,null}function fp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(D0()){case Od:return 2;case Ud:return 8;case Si:case O0:return 32;case Ld:return 268435456;default:return 32}default:return 32}}var os=!1,ca=null,ua=null,da=null,vn=new Map,yn=new Map,Wt=[],$g="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ku(e,t){switch(e){case"focusin":case"focusout":ca=null;break;case"dragenter":case"dragleave":ua=null;break;case"mouseover":case"mouseout":da=null;break;case"pointerover":case"pointerout":vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yn.delete(t.pointerId)}}function Hl(e,t,a,l,n,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:r,targetContainers:[n]},t!==null&&(t=kl(t),t!==null&&dp(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Fg(e,t,a,l,n){switch(t){case"focusin":return ca=Hl(ca,e,t,a,l,n),!0;case"dragenter":return ua=Hl(ua,e,t,a,l,n),!0;case"mouseover":return da=Hl(da,e,t,a,l,n),!0;case"pointerover":var r=n.pointerId;return vn.set(r,Hl(vn.get(r)||null,e,t,a,l,n)),!0;case"gotpointercapture":return r=n.pointerId,yn.set(r,Hl(yn.get(r)||null,e,t,a,l,n)),!0}return!1}function mp(e){var t=Ka(e.target);if(t!==null){var a=wn(t);if(a!==null){if(t=a.tag,t===13){if(t=Cd(a),t!==null){e.blockedOn=t,Ac(e.priority,function(){Qu(a)});return}}else if(t===31){if(t=Ad(a),t!==null){e.blockedOn=t,Ac(e.priority,function(){Qu(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=rs(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);No=l,a.target.dispatchEvent(l),No=null}else return t=kl(a),t!==null&&dp(t),e.blockedOn=a,!1;t.shift()}return!0}function Zu(e,t,a){gi(e)&&a.delete(t)}function Wg(){os=!1,ca!==null&&gi(ca)&&(ca=null),ua!==null&&gi(ua)&&(ua=null),da!==null&&gi(da)&&(da=null),vn.forEach(Zu),yn.forEach(Zu)}function Fn(e,t){e.blockedOn===t&&(e.blockedOn=null,os||(os=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,Wg)))}var Wn=null;function $u(e){Wn!==e&&(Wn=e,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,function(){Wn===e&&(Wn=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(dc(l||a)===null)continue;break}var r=kl(a);r!==null&&(e.splice(t,3),t-=3,Go(r,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function jl(e){function t(c){return Fn(c,e)}ca!==null&&Fn(ca,e),ua!==null&&Fn(ua,e),da!==null&&Fn(da,e),vn.forEach(t),yn.forEach(t);for(var a=0;a<Wt.length;a++){var l=Wt[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Wt.length&&(a=Wt[0],a.blockedOn===null);)mp(a),a.blockedOn===null&&Wt.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],r=a[l+1],o=n[He]||null;if(typeof r=="function")o||$u(a);else if(o){var s=null;if(r&&r.hasAttribute("formAction")){if(n=r,o=r[He]||null)s=o.formAction;else if(dc(n)!==null)continue}else s=o.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),$u(a)}}}function pp(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function fc(e){this._internalRoot=e}hr.prototype.render=fc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));var a=t.current,l=$e();up(a,l,e,t,null,null)};hr.prototype.unmount=fc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;up(e.current,2,null,e,null,null),fr(),t[Sl]=null}};function hr(e){this._internalRoot=e}hr.prototype.unstable_scheduleHydration=function(e){if(e){var t=qd();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Wt.length&&t!==0&&t<Wt[a].priority;a++);Wt.splice(a,0,e),a===0&&mp(e)}};var Fu=Ed.version;if(Fu!=="19.2.8")throw Error(z(527,Fu,"19.2.8"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=T0(t),e=e!==null?Md(e):null,e=e===null?null:e.stateNode,e};var Ig={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var In=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!In.isDisabled&&In.supportsFiber)try{Sn=In.inject(Ig),Ke=In}catch{}}Ii.createRoot=function(e,t){if(!_d(e))throw Error(z(299));var a=!1,l="",n=im,r=rm,o=om;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=sp(e,1,!1,null,null,a,l,null,n,r,o,pp),e[Sl]=t.current,rc(e),new fc(t)};Ii.hydrateRoot=function(e,t,a){if(!_d(e))throw Error(z(299));var l=!1,n="",r=im,o=rm,s=om,c=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(c=a.formState)),t=sp(e,1,!0,t,a??null,l,n,c,r,o,s,pp),t.context=cp(null),a=t.current,l=$e(),l=ys(l),n=ia(l),n.callback=null,ra(a,n,l),a=l,t.current.lanes=a,Nn(t,a),jt(t),e[Sl]=t.current,rc(e),new hr(t)};Ii.version="19.2.8";function hp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hp)}catch(e){console.error(e)}}hp(),wd.exports=Ii;var Pg=wd.exports;const e1=fd(Pg);/**
 * react-router v7.18.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var mc=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,gp=/^[\\/]{2}/;function t1(e,t){return t+e.replace(/\\/g,"/")}var Wu="popstate";function Iu(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function a1(e={}){function t(l,n){var u;let r=(u=n.state)==null?void 0:u.masked,{pathname:o,search:s,hash:c}=r||l.location;return ss("",{pathname:o,search:s,hash:c},n.state&&n.state.usr||null,n.state&&n.state.key||"default",r?{pathname:l.location.pathname,search:l.location.search,hash:l.location.hash}:void 0)}function a(l,n){return typeof n=="string"?n:jn(n)}return n1(t,a,null,e)}function oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function mt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function l1(){return Math.random().toString(36).substring(2,10)}function Pu(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function ss(e,t,a=null,l,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Cl(t):t,state:a,key:t&&t.key||l||l1(),mask:n}}function jn({pathname:e="/",search:t="",hash:a=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(e+=a.charAt(0)==="#"?a:"#"+a),e}function Cl(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substring(a),e=e.substring(0,a));let l=e.indexOf("?");l>=0&&(t.search=e.substring(l),e=e.substring(0,l)),e&&(t.pathname=e)}return t}function n1(e,t,a,l={}){let{window:n=document.defaultView,v5Compat:r=!1}=l,o=n.history,s="POP",c=null,u=h();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function h(){return(o.state||{idx:null}).idx}function p(){s="POP";let w=h(),d=w==null?null:w-u;u=w,c&&c({action:s,location:j.location,delta:d})}function m(w,d){s="PUSH";let g=Iu(w)?w:ss(j.location,w,d);u=h()+1;let b=Pu(g,u),v=j.createHref(g.mask||g);try{o.pushState(b,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;n.location.assign(v)}r&&c&&c({action:s,location:j.location,delta:1})}function x(w,d){s="REPLACE";let g=Iu(w)?w:ss(j.location,w,d);u=h();let b=Pu(g,u),v=j.createHref(g.mask||g);o.replaceState(b,"",v),r&&c&&c({action:s,location:j.location,delta:0})}function y(w){return i1(n,w)}let j={get action(){return s},get location(){return e(n,o)},listen(w){if(c)throw new Error("A history only accepts one active listener");return n.addEventListener(Wu,p),c=w,()=>{n.removeEventListener(Wu,p),c=null}},createHref(w){return t(n,w)},createURL:y,encodeLocation(w){let d=y(w);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:m,replace:x,go(w){return o.go(w)}};return j}function i1(e,t,a=!1){let l="http://localhost";e&&(l=e.location.origin!=="null"?e.location.origin:e.location.href),oe(l,"No window.location.(origin|href) available to create URL");let n=typeof t=="string"?t:jn(t);return n=n.replace(/ $/,"%20"),!a&&gp.test(n)&&(n=l+n),new URL(n,l)}function xp(e,t,a="/"){return r1(e,t,a,!1)}function r1(e,t,a,l,n){let r=typeof t=="string"?Cl(t):t,o=Xt(r.pathname||"/",a);if(o==null)return null;let s=o1(e),c=null,u=b1(o);for(let h=0;c==null&&h<s.length;++h)c=x1(s[h],u,l);return c}function o1(e){let t=bp(e);return s1(t),t}function bp(e,t=[],a=[],l="",n=!1){let r=(o,s,c=n,u)=>{let h={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};if(h.relativePath.startsWith("/")){if(!h.relativePath.startsWith(l)&&c)return;oe(h.relativePath.startsWith(l),`Absolute route path "${h.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(l.length)}let p=ft([l,h.relativePath]),m=a.concat(h);o.children&&o.children.length>0&&(oe(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),bp(o.children,t,m,p,c)),!(o.path==null&&!o.index)&&t.push({path:p,score:h1(p,o.index),routesMeta:m.map((x,y)=>{let[j,w]=jp(x.relativePath,x.caseSensitive,y===m.length-1);return{...x,matcher:j,compiledParams:w}})})};return e.forEach((o,s)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))r(o,s);else for(let u of vp(o.path))r(o,s,!0,u)}),t}function vp(e){let t=e.split("/");if(t.length===0)return[];let[a,...l]=t,n=a.endsWith("?"),r=a.replace(/\?$/,"");if(l.length===0)return n?[r,""]:[r];let o=vp(l.join("/")),s=[];return s.push(...o.map(c=>c===""?r:[r,c].join("/"))),n&&s.push(...o),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function s1(e){e.sort((t,a)=>t.score!==a.score?a.score-t.score:g1(t.routesMeta.map(l=>l.childrenIndex),a.routesMeta.map(l=>l.childrenIndex)))}var c1=/^:[\w-]+$/,u1=3,d1=2,f1=1,m1=10,p1=-2,ed=e=>e==="*";function h1(e,t){let a=e.split("/"),l=a.length;return a.some(ed)&&(l+=p1),t&&(l+=d1),a.filter(n=>!ed(n)).reduce((n,r)=>n+(c1.test(r)?u1:r===""?f1:m1),l)}function g1(e,t){return e.length===t.length&&e.slice(0,-1).every((l,n)=>l===t[n])?e[e.length-1]-t[t.length-1]:0}function x1(e,t,a=!1){let{routesMeta:l}=e,n={},r="/",o=[];for(let s=0;s<l.length;++s){let c=l[s],u=s===l.length-1,h=r==="/"?t:t.slice(r.length)||"/",p={path:c.relativePath,caseSensitive:c.caseSensitive,end:u},m=c.matcher&&c.compiledParams?yp(p,h,c.matcher,c.compiledParams):$i(p,h),x=c.route;if(!m&&u&&a&&!l[l.length-1].route.index&&(m=$i({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},h)),!m)return null;Object.assign(n,m.params),o.push({params:n,pathname:ft([r,m.pathname]),pathnameBase:j1(ft([r,m.pathnameBase])),route:x}),m.pathnameBase!=="/"&&(r=ft([r,m.pathnameBase]))}return o}function $i(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,l]=jp(e.path,e.caseSensitive,e.end);return yp(e,t,a,l)}function yp(e,t,a,l){let n=t.match(a);if(!n)return null;let r=n[0],o=r.replace(/(.)\/+$/,"$1"),s=n.slice(1);return{params:l.reduce((u,{paramName:h,isOptional:p},m)=>{if(h==="*"){let y=s[m]||"";o=r.slice(0,r.length-y.length).replace(/(.)\/+$/,"$1")}const x=s[m];return p&&!x?u[h]=void 0:u[h]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:r,pathnameBase:o,pattern:e}}function jp(e,t=!1,a=!0){mt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let l=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,c,u,h)=>{if(l.push({paramName:s,isOptional:c!=null}),c){let p=h.charAt(u+o.length);return p&&p!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(l.push({paramName:"*"}),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,t?void 0:"i"),l]}function b1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return mt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Xt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,l=e.charAt(a);return l&&l!=="/"?null:e.slice(a)||"/"}function v1(e,t="/"){let{pathname:a,search:l="",hash:n=""}=typeof e=="string"?Cl(e):e,r;return a?(a=wp(a),a.startsWith("/")?r=td(a.substring(1),"/"):r=td(a,t)):r=t,{pathname:r,search:w1(l),hash:S1(n)}}function td(e,t){let a=Fi(t).split("/");return e.split("/").forEach(n=>{n===".."?a.length>1&&a.pop():n!=="."&&a.push(n)}),a.length>1?a.join("/"):"/"}function no(e,t,a,l){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function y1(e){return e.filter((t,a)=>a===0||t.route.path&&t.route.path.length>0)}function pc(e){let t=y1(e);return t.map((a,l)=>l===t.length-1?a.pathname:a.pathnameBase)}function gr(e,t,a,l=!1){let n;typeof e=="string"?n=Cl(e):(n={...e},oe(!n.pathname||!n.pathname.includes("?"),no("?","pathname","search",n)),oe(!n.pathname||!n.pathname.includes("#"),no("#","pathname","hash",n)),oe(!n.search||!n.search.includes("#"),no("#","search","hash",n)));let r=e===""||n.pathname==="",o=r?"/":n.pathname,s;if(o==null)s=a;else{let p=t.length-1;if(!l&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;n.pathname=m.join("/")}s=p>=0?t[p]:"/"}let c=v1(n,s),u=o&&o!=="/"&&o.endsWith("/"),h=(r||o===".")&&a.endsWith("/");return!c.pathname.endsWith("/")&&(u||h)&&(c.pathname+="/"),c}var wp=e=>e.replace(/[\\/]{2,}/g,"/"),ft=e=>wp(e.join("/")),Fi=e=>e.replace(/\/+$/,""),j1=e=>Fi(e).replace(/^\/*/,"/"),w1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,S1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,k1=class{constructor(e,t,a,l=!1){this.status=e,this.statusText=t||"",this.internal=l,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function N1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function z1(e){let t=e.map(a=>a.route.path).filter(Boolean);return ft(t)||"/"}var Sp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function kp(e,t){let a=e;if(typeof a!="string"||!mc.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let l=a,n=!1;if(Sp)try{let r=new URL(window.location.href),o=gp.test(a)?new URL(t1(a,r.protocol)):new URL(a),s=Xt(o.pathname,t);o.origin===r.origin&&s!=null?a=s+o.search+o.hash:n=!0}catch{mt(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:l,isExternal:n,to:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Np=["POST","PUT","PATCH","DELETE"];new Set(Np);var T1=["GET",...Np];new Set(T1);var E1=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function _1(e){try{return E1.includes(new URL(e).protocol)}catch{return!1}}var Al=f.createContext(null);Al.displayName="DataRouter";var xr=f.createContext(null);xr.displayName="DataRouterState";var zp=f.createContext(!1);function C1(){return f.useContext(zp)}var Tp=f.createContext({isTransitioning:!1});Tp.displayName="ViewTransition";var A1=f.createContext(new Map);A1.displayName="Fetchers";var M1=f.createContext(null);M1.displayName="Await";var Ie=f.createContext(null);Ie.displayName="Navigation";var Dn=f.createContext(null);Dn.displayName="Location";var ht=f.createContext({outlet:null,matches:[],isDataRoute:!1});ht.displayName="Route";var hc=f.createContext(null);hc.displayName="RouteError";var Ep="REACT_ROUTER_ERROR",R1="REDIRECT",D1="ROUTE_ERROR_RESPONSE";function O1(e){if(e.startsWith(`${Ep}:${R1}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function U1(e){if(e.startsWith(`${Ep}:${D1}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new k1(t.status,t.statusText,t.data)}catch{}}function L1(e,{relative:t}={}){oe(Ml(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:l}=f.useContext(Ie),{hash:n,pathname:r,search:o}=On(e,{relative:t}),s=r;return a!=="/"&&(s=r==="/"?a:ft([a,r])),l.createHref({pathname:s,search:o,hash:n})}function Ml(){return f.useContext(Dn)!=null}function wt(){return oe(Ml(),"useLocation() may be used only in the context of a <Router> component."),f.useContext(Dn).location}var _p="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Cp(e){f.useContext(Ie).static||f.useLayoutEffect(e)}function br(){let{isDataRoute:e}=f.useContext(ht);return e?I1():B1()}function B1(){oe(Ml(),"useNavigate() may be used only in the context of a <Router> component.");let e=f.useContext(Al),{basename:t,navigator:a}=f.useContext(Ie),{matches:l}=f.useContext(ht),{pathname:n}=wt(),r=JSON.stringify(pc(l)),o=f.useRef(!1);return Cp(()=>{o.current=!0}),f.useCallback((c,u={})=>{if(mt(o.current,_p),!o.current)return;if(typeof c=="number"){a.go(c);return}let h=gr(c,JSON.parse(r),n,u.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:ft([t,h.pathname])),(u.replace?a.replace:a.push)(h,u.state,u)},[t,a,r,n,e])}var H1=f.createContext(null);function Y1(e){let t=f.useContext(ht).outlet;return f.useMemo(()=>t&&f.createElement(H1.Provider,{value:e},t),[t,e])}function On(e,{relative:t}={}){let{matches:a}=f.useContext(ht),{pathname:l}=wt(),n=JSON.stringify(pc(a));return f.useMemo(()=>gr(e,JSON.parse(n),l,t==="path"),[e,n,l,t])}function G1(e,t){return Ap(e,t)}function Ap(e,t,a){var w;oe(Ml(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=f.useContext(Ie),{matches:n}=f.useContext(ht),r=n[n.length-1],o=r?r.params:{},s=r?r.pathname:"/",c=r?r.pathnameBase:"/",u=r&&r.route;{let d=u&&u.path||"";Rp(s,!u||d.endsWith("*")||d.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${d}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${d}"> to <Route path="${d==="/"?"*":`${d}/*`}">.`)}let h=wt(),p;if(t){let d=typeof t=="string"?Cl(t):t;oe(c==="/"||((w=d.pathname)==null?void 0:w.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${d.pathname}" was given in the \`location\` prop.`),p=d}else p=h;let m=p.pathname||"/",x=m;if(c!=="/"){let d=c.replace(/^\//,"").split("/");x="/"+m.replace(/^\//,"").split("/").slice(d.length).join("/")}let y=a&&a.state.matches.length?a.state.matches.map(d=>Object.assign(d,{route:a.manifest[d.route.id]||d.route})):xp(e,{pathname:x});mt(u||y!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),mt(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let j=Q1(y&&y.map(d=>Object.assign({},d,{params:Object.assign({},o,d.params),pathname:ft([c,l.encodeLocation?l.encodeLocation(d.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?c:ft([c,l.encodeLocation?l.encodeLocation(d.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:d.pathnameBase])})),n,a);return t&&j?f.createElement(Dn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...p},navigationType:"POP"}},j):j}function q1(){let e=W1(),t=N1(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,l="rgba(200,200,200, 0.5)",n={padding:"0.5rem",backgroundColor:l},r={padding:"2px 4px",backgroundColor:l},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=f.createElement(f.Fragment,null,f.createElement("p",null,"💿 Hey developer 👋"),f.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",f.createElement("code",{style:r},"ErrorBoundary")," or"," ",f.createElement("code",{style:r},"errorElement")," prop on your route.")),f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},t),a?f.createElement("pre",{style:n},a):null,o)}var X1=f.createElement(q1,null),Mp=class extends f.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const a=U1(e.digest);a&&(e=a)}let t=e!==void 0?f.createElement(ht.Provider,{value:this.props.routeContext},f.createElement(hc.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?f.createElement(V1,{error:e},t):t}};Mp.contextType=zp;var io=new WeakMap;function V1({children:e,error:t}){let{basename:a}=f.useContext(Ie);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let l=O1(t.digest);if(l){let n=io.get(t);if(n)throw n;let r=kp(l.location,a),o=r.absoluteURL||r.to;if(_1(o))throw new Error("Invalid redirect location");if(Sp&&!io.get(t))if(r.isExternal||l.reloadDocument)window.location.href=o;else{const s=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(r.to,{replace:l.replace}));throw io.set(t,s),s}return f.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o}`})}}return e}function J1({routeContext:e,match:t,children:a}){let l=f.useContext(Al);return l&&l.static&&l.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=t.route.id),f.createElement(ht.Provider,{value:e},a)}function Q1(e,t=[],a){let l=a==null?void 0:a.state;if(e==null){if(!l)return null;if(l.errors)e=l.matches;else if(t.length===0&&!l.initialized&&l.matches.length>0)e=l.matches;else return null}let n=e,r=l==null?void 0:l.errors;if(r!=null){let h=n.findIndex(p=>p.route.id&&(r==null?void 0:r[p.route.id])!==void 0);oe(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(r).join(",")}`),n=n.slice(0,Math.min(n.length,h+1))}let o=!1,s=-1;if(a&&l){o=l.renderFallback;for(let h=0;h<n.length;h++){let p=n[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(s=h),p.route.id){let{loaderData:m,errors:x}=l,y=p.route.loader&&!m.hasOwnProperty(p.route.id)&&(!x||x[p.route.id]===void 0);if(p.route.lazy||y){a.isStatic&&(o=!0),s>=0?n=n.slice(0,s+1):n=[n[0]];break}}}}let c=a==null?void 0:a.onError,u=l&&c?(h,p)=>{var m,x;c(h,{location:l.location,params:((x=(m=l.matches)==null?void 0:m[0])==null?void 0:x.params)??{},pattern:z1(l.matches),errorInfo:p})}:void 0;return n.reduceRight((h,p,m)=>{let x,y=!1,j=null,w=null;l&&(x=r&&p.route.id?r[p.route.id]:void 0,j=p.route.errorElement||X1,o&&(s<0&&m===0?(Rp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,w=null):s===m&&(y=!0,w=p.route.hydrateFallbackElement||null)));let d=t.concat(n.slice(0,m+1)),g=()=>{let b;return x?b=j:y?b=w:p.route.Component?b=f.createElement(p.route.Component,null):p.route.element?b=p.route.element:b=h,f.createElement(J1,{match:p,routeContext:{outlet:h,matches:d,isDataRoute:l!=null},children:b})};return l&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?f.createElement(Mp,{location:l.location,revalidation:l.revalidation,component:j,error:x,children:g(),routeContext:{outlet:null,matches:d,isDataRoute:!0},onError:u}):g()},null)}function gc(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function K1(e){let t=f.useContext(Al);return oe(t,gc(e)),t}function Z1(e){let t=f.useContext(xr);return oe(t,gc(e)),t}function $1(e){let t=f.useContext(ht);return oe(t,gc(e)),t}function xc(e){let t=$1(e),a=t.matches[t.matches.length-1];return oe(a.route.id,`${e} can only be used on routes that contain a unique "id"`),a.route.id}function F1(){return xc("useRouteId")}function W1(){var l;let e=f.useContext(hc),t=Z1("useRouteError"),a=xc("useRouteError");return e!==void 0?e:(l=t.errors)==null?void 0:l[a]}function I1(){let{router:e}=K1("useNavigate"),t=xc("useNavigate"),a=f.useRef(!1);return Cp(()=>{a.current=!0}),f.useCallback(async(n,r={})=>{mt(a.current,_p),a.current&&(typeof n=="number"?await e.navigate(n):await e.navigate(n,{fromRouteId:t,...r}))},[e,t])}var ad={};function Rp(e,t,a){!t&&!ad[e]&&(ad[e]=!0,mt(!1,a))}f.memo(P1);function P1({routes:e,manifest:t,future:a,state:l,isStatic:n,onError:r}){return Ap(e,void 0,{manifest:t,state:l,isStatic:n,onError:r})}function Dp({to:e,replace:t,state:a,relative:l}){oe(Ml(),"<Navigate> may be used only in the context of a <Router> component.");let{static:n}=f.useContext(Ie);mt(!n,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:r}=f.useContext(ht),{pathname:o}=wt(),s=br(),c=gr(e,pc(r),o,l==="path"),u=JSON.stringify(c);return f.useEffect(()=>{s(JSON.parse(u),{replace:t,state:a,relative:l})},[s,u,l,t,a]),null}function Op(e){return Y1(e.context)}function _e(e){oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ex({basename:e="/",children:t=null,location:a,navigationType:l="POP",navigator:n,static:r=!1,useTransitions:o}){oe(!Ml(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),c=f.useMemo(()=>({basename:s,navigator:n,static:r,useTransitions:o,future:{}}),[s,n,r,o]);typeof a=="string"&&(a=Cl(a));let{pathname:u="/",search:h="",hash:p="",state:m=null,key:x="default",mask:y}=a,j=f.useMemo(()=>{let w=Xt(u,s);return w==null?null:{location:{pathname:w,search:h,hash:p,state:m,key:x,mask:y},navigationType:l}},[s,u,h,p,m,x,l,y]);return mt(j!=null,`<Router basename="${s}"> is not able to match the URL "${u}${h}${p}" because it does not start with the basename, so the <Router> won't render anything.`),j==null?null:f.createElement(Ie.Provider,{value:c},f.createElement(Dn.Provider,{children:t,value:j}))}function tx({children:e,location:t}){return G1(cs(e),t)}function cs(e,t=[]){let a=[];return f.Children.forEach(e,(l,n)=>{if(!f.isValidElement(l))return;let r=[...t,n];if(l.type===f.Fragment){a.push.apply(a,cs(l.props.children,r));return}oe(l.type===_e,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),oe(!l.props.index||!l.props.children,"An index route cannot have child routes.");let o={id:l.props.id||r.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,middleware:l.props.middleware,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(o.children=cs(l.props.children,r)),a.push(o)}),a}var xi="get",bi="application/x-www-form-urlencoded";function vr(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function ax(e){return vr(e)&&e.tagName.toLowerCase()==="button"}function lx(e){return vr(e)&&e.tagName.toLowerCase()==="form"}function nx(e){return vr(e)&&e.tagName.toLowerCase()==="input"}function ix(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function rx(e,t){return e.button===0&&(!t||t==="_self")&&!ix(e)}var Pn=null;function ox(){if(Pn===null)try{new FormData(document.createElement("form"),0),Pn=!1}catch{Pn=!0}return Pn}var sx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ro(e){return e!=null&&!sx.has(e)?(mt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bi}"`),null):e}function cx(e,t){let a,l,n,r,o;if(lx(e)){let s=e.getAttribute("action");l=s?Xt(s,t):null,a=e.getAttribute("method")||xi,n=ro(e.getAttribute("enctype"))||bi,r=new FormData(e)}else if(ax(e)||nx(e)&&(e.type==="submit"||e.type==="image")){let s=e.form;if(s==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||s.getAttribute("action");if(l=c?Xt(c,t):null,a=e.getAttribute("formmethod")||s.getAttribute("method")||xi,n=ro(e.getAttribute("formenctype"))||ro(s.getAttribute("enctype"))||bi,r=new FormData(s,e),!ox()){let{name:u,type:h,value:p}=e;if(h==="image"){let m=u?`${u}.`:"";r.append(`${m}x`,"0"),r.append(`${m}y`,"0")}else u&&r.append(u,p)}}else{if(vr(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=xi,l=null,n=bi,o=e}return r&&n==="text/plain"&&(o=r,r=void 0),{action:l,method:a.toLowerCase(),encType:n,formData:r,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function bc(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Up(e,t,a,l){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a?n.pathname.endsWith("/")?n.pathname=`${n.pathname}_.${l}`:n.pathname=`${n.pathname}.${l}`:n.pathname==="/"?n.pathname=`_root.${l}`:t&&Xt(n.pathname,t)==="/"?n.pathname=`${Fi(t)}/_root.${l}`:n.pathname=`${Fi(n.pathname)}.${l}`,n}async function ux(e,t){if(e.id in t)return t[e.id];try{let a=await import(e.module);return t[e.id]=a,a}catch(a){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function dx(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function fx(e,t,a){let l=await Promise.all(e.map(async n=>{let r=t.routes[n.route.id];if(r){let o=await ux(r,a);return o.links?o.links():[]}return[]}));return gx(l.flat(1).filter(dx).filter(n=>n.rel==="stylesheet"||n.rel==="preload").map(n=>n.rel==="stylesheet"?{...n,rel:"prefetch",as:"style"}:{...n,rel:"prefetch"}))}function ld(e,t,a,l,n,r){let o=(c,u)=>a[u]?c.route.id!==a[u].route.id:!0,s=(c,u)=>{var h;return a[u].pathname!==c.pathname||((h=a[u].route.path)==null?void 0:h.endsWith("*"))&&a[u].params["*"]!==c.params["*"]};return r==="assets"?t.filter((c,u)=>o(c,u)||s(c,u)):r==="data"?t.filter((c,u)=>{var p;let h=l.routes[c.route.id];if(!h||!h.hasLoader)return!1;if(o(c,u)||s(c,u))return!0;if(c.route.shouldRevalidate){let m=c.route.shouldRevalidate({currentUrl:new URL(n.pathname+n.search+n.hash,window.origin),currentParams:((p=a[0])==null?void 0:p.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function mx(e,t,{includeHydrateFallback:a}={}){return px(e.map(l=>{let n=t.routes[l.route.id];if(!n)return[];let r=[n.module];return n.clientActionModule&&(r=r.concat(n.clientActionModule)),n.clientLoaderModule&&(r=r.concat(n.clientLoaderModule)),a&&n.hydrateFallbackModule&&(r=r.concat(n.hydrateFallbackModule)),n.imports&&(r=r.concat(n.imports)),r}).flat(1))}function px(e){return[...new Set(e)]}function hx(e){let t={},a=Object.keys(e).sort();for(let l of a)t[l]=e[l];return t}function gx(e,t){let a=new Set;return new Set(t),e.reduce((l,n)=>{let r=JSON.stringify(hx(n));return a.has(r)||(a.add(r),l.push({key:r,link:n})),l},[])}function vc(){let e=f.useContext(Al);return bc(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function xx(){let e=f.useContext(xr);return bc(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var yc=f.createContext(void 0);yc.displayName="FrameworkContext";function yr(){let e=f.useContext(yc);return bc(e,"You must render this element inside a <HydratedRouter> element"),e}function bx(e,t){let a=f.useContext(yc),[l,n]=f.useState(!1),[r,o]=f.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:u,onMouseLeave:h,onTouchStart:p}=t,m=f.useRef(null);f.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let j=d=>{d.forEach(g=>{o(g.isIntersecting)})},w=new IntersectionObserver(j,{threshold:.5});return m.current&&w.observe(m.current),()=>{w.disconnect()}}},[e]),f.useEffect(()=>{if(l){let j=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(j)}}},[l]);let x=()=>{n(!0)},y=()=>{n(!1),o(!1)};return a?e!=="intent"?[r,m,{}]:[r,m,{onFocus:Yl(s,x),onBlur:Yl(c,y),onMouseEnter:Yl(u,x),onMouseLeave:Yl(h,y),onTouchStart:Yl(p,x)}]:[!1,m,{}]}function Yl(e,t){return a=>{e&&e(a),a.defaultPrevented||t(a)}}function vx({page:e,...t}){let a=C1(),{nonce:l}=yr(),{router:n}=vc(),r=f.useMemo(()=>xp(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?(t.nonce==null&&l&&(t={...t,nonce:l}),a?f.createElement(jx,{page:e,matches:r,...t}):f.createElement(wx,{page:e,matches:r,...t})):null}function yx(e){let{manifest:t,routeModules:a}=yr(),[l,n]=f.useState([]);return f.useEffect(()=>{let r=!1;return fx(e,t,a).then(o=>{r||n(o)}),()=>{r=!0}},[e,t,a]),l}function jx({page:e,matches:t,...a}){let l=wt(),{future:n}=yr(),{basename:r}=vc(),o=f.useMemo(()=>{if(e===l.pathname+l.search+l.hash)return[];let s=Up(e,r,n.v8_trailingSlashAwareDataRequests,"rsc"),c=!1,u=[];for(let h of t)typeof h.route.shouldRevalidate=="function"?c=!0:u.push(h.route.id);return c&&u.length>0&&s.searchParams.set("_routes",u.join(",")),[s.pathname+s.search]},[r,n.v8_trailingSlashAwareDataRequests,e,l,t]);return f.createElement(f.Fragment,null,o.map(s=>f.createElement("link",{key:s,rel:"prefetch",as:"fetch",href:s,...a})))}function wx({page:e,matches:t,...a}){let l=wt(),{future:n,manifest:r,routeModules:o}=yr(),{basename:s}=vc(),{loaderData:c,matches:u}=xx(),h=f.useMemo(()=>ld(e,t,u,r,l,"data"),[e,t,u,r,l]),p=f.useMemo(()=>ld(e,t,u,r,l,"assets"),[e,t,u,r,l]),m=f.useMemo(()=>{if(e===l.pathname+l.search+l.hash)return[];let j=new Set,w=!1;if(t.forEach(g=>{var v;let b=r.routes[g.route.id];!b||!b.hasLoader||(!h.some(S=>S.route.id===g.route.id)&&g.route.id in c&&((v=o[g.route.id])!=null&&v.shouldRevalidate)||b.hasClientLoader?w=!0:j.add(g.route.id))}),j.size===0)return[];let d=Up(e,s,n.v8_trailingSlashAwareDataRequests,"data");return w&&j.size>0&&d.searchParams.set("_routes",t.filter(g=>j.has(g.route.id)).map(g=>g.route.id).join(",")),[d.pathname+d.search]},[s,n.v8_trailingSlashAwareDataRequests,c,l,r,h,t,e,o]),x=f.useMemo(()=>mx(p,r),[p,r]),y=yx(p);return f.createElement(f.Fragment,null,m.map(j=>f.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...a})),x.map(j=>f.createElement("link",{key:j,rel:"modulepreload",href:j,...a})),y.map(({key:j,link:w})=>f.createElement("link",{key:j,nonce:a.nonce,...w,crossOrigin:w.crossOrigin??a.crossOrigin})))}function Sx(...e){return t=>{e.forEach(a=>{typeof a=="function"?a(t):a!=null&&(a.current=t)})}}var kx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{kx&&(window.__reactRouterVersion="7.18.1")}catch{}function Nx({basename:e,children:t,useTransitions:a,window:l}){let n=f.useRef();n.current==null&&(n.current=a1({window:l,v5Compat:!0}));let r=n.current,[o,s]=f.useState({action:r.action,location:r.location}),c=f.useCallback(u=>{a===!1?s(u):f.startTransition(()=>s(u))},[a]);return f.useLayoutEffect(()=>r.listen(c),[r,c]),f.createElement(ex,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:r,useTransitions:a})}var Lp=f.forwardRef(function({onClick:t,discover:a="render",prefetch:l="none",relative:n,reloadDocument:r,replace:o,mask:s,state:c,target:u,to:h,preventScrollReset:p,viewTransition:m,defaultShouldRevalidate:x,...y},j){let{basename:w,navigator:d,useTransitions:g}=f.useContext(Ie),b=typeof h=="string"&&mc.test(h),v=kp(h,w);h=v.to;let S=L1(h,{relative:n}),N=wt(),k=null;if(s){let A=gr(s,[],N.mask?N.mask.pathname:"/",!0);w!=="/"&&(A.pathname=A.pathname==="/"?w:ft([w,A.pathname])),k=d.createHref(A)}let[_,M,E]=bx(l,y),J=Ex(h,{replace:o,mask:s,state:c,target:u,preventScrollReset:p,relative:n,viewTransition:m,defaultShouldRevalidate:x,useTransitions:g});function F(A){t&&t(A),A.defaultPrevented||J(A)}let se=!(v.isExternal||r),de=f.createElement("a",{...y,...E,href:(se?k:void 0)||v.absoluteURL||S,onClick:se?F:t,ref:Sx(j,M),target:u,"data-discover":!b&&a==="render"?"true":void 0});return _&&!b?f.createElement(f.Fragment,null,de,f.createElement(vx,{page:S})):de});Lp.displayName="Link";var Bp=f.forwardRef(function({"aria-current":t="page",caseSensitive:a=!1,className:l="",end:n=!1,style:r,to:o,viewTransition:s,children:c,...u},h){let p=On(o,{relative:u.relative}),m=wt(),x=f.useContext(xr),{navigator:y,basename:j}=f.useContext(Ie),w=x!=null&&Rx(p)&&s===!0,d=y.encodeLocation?y.encodeLocation(p).pathname:p.pathname,g=m.pathname,b=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;a||(g=g.toLowerCase(),b=b?b.toLowerCase():null,d=d.toLowerCase()),b&&j&&(b=Xt(b,j)||b);const v=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let S=g===d||!n&&g.startsWith(d)&&g.charAt(v)==="/",N=b!=null&&(b===d||!n&&b.startsWith(d)&&b.charAt(d.length)==="/"),k={isActive:S,isPending:N,isTransitioning:w},_=S?t:void 0,M;typeof l=="function"?M=l(k):M=[l,S?"active":null,N?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let E=typeof r=="function"?r(k):r;return f.createElement(Lp,{...u,"aria-current":_,className:M,ref:h,style:E,to:o,viewTransition:s},typeof c=="function"?c(k):c)});Bp.displayName="NavLink";var zx=f.forwardRef(({discover:e="render",fetcherKey:t,navigate:a,reloadDocument:l,replace:n,state:r,method:o=xi,action:s,onSubmit:c,relative:u,preventScrollReset:h,viewTransition:p,defaultShouldRevalidate:m,...x},y)=>{let{useTransitions:j}=f.useContext(Ie),w=Ax(),d=Mx(s,{relative:u}),g=o.toLowerCase()==="get"?"get":"post",b=typeof s=="string"&&mc.test(s),v=S=>{if(c&&c(S),S.defaultPrevented)return;S.preventDefault();let N=S.nativeEvent.submitter,k=(N==null?void 0:N.getAttribute("formmethod"))||o,_=()=>w(N||S.currentTarget,{fetcherKey:t,method:k,navigate:a,replace:n,state:r,relative:u,preventScrollReset:h,viewTransition:p,defaultShouldRevalidate:m});j&&a!==!1?f.startTransition(()=>_()):_()};return f.createElement("form",{ref:y,method:g,action:d,onSubmit:l?c:v,...x,"data-discover":!b&&e==="render"?"true":void 0})});zx.displayName="Form";function Tx(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Hp(e){let t=f.useContext(Al);return oe(t,Tx(e)),t}function Ex(e,{target:t,replace:a,mask:l,state:n,preventScrollReset:r,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:u}={}){let h=br(),p=wt(),m=On(e,{relative:o});return f.useCallback(x=>{if(rx(x,t)){x.preventDefault();let y=a!==void 0?a:jn(p)===jn(m),j=()=>h(e,{replace:y,mask:l,state:n,preventScrollReset:r,relative:o,viewTransition:s,defaultShouldRevalidate:c});u?f.startTransition(()=>j()):j()}},[p,h,m,a,l,n,t,e,r,o,s,c,u])}var _x=0,Cx=()=>`__${String(++_x)}__`;function Ax(){let{router:e}=Hp("useSubmit"),{basename:t}=f.useContext(Ie),a=F1(),l=e.fetch,n=e.navigate;return f.useCallback(async(r,o={})=>{let{action:s,method:c,encType:u,formData:h,body:p}=cx(r,t);if(o.navigate===!1){let m=o.fetcherKey||Cx();await l(m,a,o.action||s,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:h,body:p,formMethod:o.method||c,formEncType:o.encType||u,flushSync:o.flushSync})}else await n(o.action||s,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:h,body:p,formMethod:o.method||c,formEncType:o.encType||u,replace:o.replace,state:o.state,fromRouteId:a,flushSync:o.flushSync,viewTransition:o.viewTransition})},[l,n,t,a])}function Mx(e,{relative:t}={}){let{basename:a}=f.useContext(Ie),l=f.useContext(ht);oe(l,"useFormAction must be used inside a RouteContext");let[n]=l.matches.slice(-1),r={...On(e||".",{relative:t})},o=wt();if(e==null){r.search=o.search;let s=new URLSearchParams(r.search),c=s.getAll("index");if(c.some(h=>h==="")){s.delete("index"),c.filter(p=>p).forEach(p=>s.append("index",p));let h=s.toString();r.search=h?`?${h}`:""}}return(!e||e===".")&&n.route.index&&(r.search=r.search?r.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(r.pathname=r.pathname==="/"?a:ft([a,r.pathname])),jn(r)}function Rx(e,{relative:t}={}){let a=f.useContext(Tp);oe(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=Hp("useViewTransitionState"),n=On(e,{relative:t});if(!a.isTransitioning)return!1;let r=Xt(a.currentLocation.pathname,l)||a.currentLocation.pathname,o=Xt(a.nextLocation.pathname,l)||a.nextLocation.pathname;return $i(n.pathname,o)!=null||$i(n.pathname,r)!=null}const oo="admin_session",ei="admin_last_activity",Dx=60*60*1e3,ll={login(){localStorage.setItem(oo,"true"),localStorage.setItem(ei,Date.now().toString())},logout(){localStorage.removeItem(oo),localStorage.removeItem(ei)},updateActivity(){this.isLoggedIn()&&localStorage.setItem(ei,Date.now().toString())},isLoggedIn(){const e=localStorage.getItem(oo),t=localStorage.getItem(ei);return!e||!t?!1:Date.now()-parseInt(t,10)>Dx?(this.logout(),!1):!0}},nd=["mousemove","keydown","mousedown","touchstart","scroll","click"],Ox=()=>{const e=f.useRef(null);return f.useEffect(()=>{if(!ll.isLoggedIn())return;const t=()=>{ll.updateActivity(),e.current&&clearTimeout(e.current),e.current=setTimeout(()=>{ll.logout(),window.location.href="/admin/login"},60*60*1e3)};return t(),nd.forEach(a=>window.addEventListener(a,t,{passive:!0})),()=>{e.current&&clearTimeout(e.current),nd.forEach(a=>window.removeEventListener(a,t))}},[]),ll.isLoggedIn()?i.jsx(Op,{}):i.jsx(Dp,{to:"/admin/login",replace:!0})},Un="/build/assets/hainick_logo-BzjGZmkv.png",Ux=()=>{const[e,t]=f.useState(!1),[a,l]=f.useState(!1);f.useEffect(()=>{const r=()=>t(window.scrollY>20);return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]),f.useEffect(()=>{const r=()=>{window.innerWidth>=1024&&l(!1)};return window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]);const n=[{label:"Home",href:"#home"},{label:"About Us",href:"#about"},{label:"Official Talent",href:"#officialTalent"},{label:"Creator+",href:"#creatorPlus"},{label:"Service",href:"#services"},{label:"Creator",href:"#creator"},{label:"Activity",href:"#activity"},{label:"Pricelist",href:"#pricelist"},{label:"Testimony",href:"#testimony"}];return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        /* ── Nav link ── */
        .nav-link {
          color: #222;
          text-decoration: none;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.88rem;
          font-weight: 500;
          letter-spacing: 0.005em;
          padding: 0.25rem 0;
          position: relative;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 2px;
          background: #1a2744;
          border-radius: 2px;
          transition: width 0.25s ease;
        }
        .nav-link:hover { color: #000; }
        .nav-link:hover::after { width: 100%; }

        /* ── Contact button ── */
        .contact-btn {
          background: #1a2744;
          color: #fff;
          padding: 0.55rem 1.35rem;
          border-radius: 100px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 0.875rem;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          white-space: nowrap;
        }
        .contact-btn:hover { background: #263660; transform: translateY(-1px); }

        /* ── Hamburger ── */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
          z-index: 1001;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: #0a0a0a;
          border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s;
          transform-origin: center;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── Desktop nav ── */
        .desktop-nav { display: flex; gap: 1.7rem; align-items: center; }

        /* ── Mobile drawer ── */
        .mobile-drawer {
          display: none;
          position: fixed;
          top: 64px; left: 0; right: 0;
          background: #fff;
          border-top: 1px solid rgba(0,0,0,0.07);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          flex-direction: column;
          padding: 1.2rem 1.5rem 1.5rem;
          gap: 0;
          z-index: 998;
          transform: translateY(-8px);
          opacity: 0;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }
        .mobile-drawer.open {
          display: flex;
          transform: translateY(0);
          opacity: 1;
        }
        .mobile-nav-link {
          color: #222;
          text-decoration: none;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 0.8rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          transition: color 0.2s;
        }
        .mobile-nav-link:last-of-type { border-bottom: none; }
        .mobile-nav-link:hover { color: #1a2744; }
        .mobile-contact-btn {
          margin-top: 1rem;
          background: #1a2744;
          color: #fff;
          padding: 0.75rem;
          border-radius: 100px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          text-align: center;
        }

        /* ── Logo image ── */
        .header-logo-img {
          height: 24px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        /* ── Breakpoints ── */
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger   { display: flex !important; }
        }

        @media (max-width: 480px) {
          .header-logo-img { height: 28px; }
        }
      `}),i.jsx("header",{style:{position:"fixed",top:0,left:0,right:0,zIndex:999,height:64,background:"#fff",borderBottom:e?"1px solid rgba(0,0,0,0.08)":"1px solid transparent",boxShadow:e?"0 2px 16px rgba(0,0,0,0.06)":"none",transition:"all 0.3s ease",display:"flex",alignItems:"center",padding:"0 1.5rem"},children:i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto 1fr",alignItems:"center",width:"100%",maxWidth:1200,margin:"0 auto"},children:[i.jsx("a",{href:"#home",style:{textDecoration:"none",display:"flex",alignItems:"center"},children:i.jsx("img",{src:Un,alt:"Hainick",className:"header-logo-img"})}),i.jsx("nav",{className:"desktop-nav",children:n.map(r=>i.jsx("a",{href:r.href,className:"nav-link",children:r.label},r.href))}),i.jsx("div",{className:"desktop-cta",style:{display:"flex",justifyContent:"flex-end"},children:i.jsx("a",{href:"https://wa.me/6282136358570",className:"contact-btn",target:"_blank",rel:"noreferrer",children:"Contact Us"})}),i.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:i.jsxs("button",{className:`hamburger${a?" open":""}`,onClick:()=>l(!a),"aria-label":"Toggle menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})})]})}),i.jsxs("div",{className:`mobile-drawer${a?" open":""}`,children:[n.map(r=>i.jsx("a",{href:r.href,className:"mobile-nav-link",onClick:()=>l(!1),children:r.label},r.href)),i.jsx("a",{href:"#contact",className:"mobile-contact-btn",onClick:()=>l(!1),children:"Contact Us"})]})]})},Lx=()=>i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})}),Bx=()=>i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),i.jsx("path",{d:"M2 7l10 7 10-7"})]}),Hx=()=>i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),Yx=[[{label:"About Us",href:"#about"},{label:"Talent",href:"#talent"},{label:"Service",href:"#service"}],[{label:"Official Talent",href:"#officialTalent"},{label:"Creator+",href:"#creatorPlus"},{label:"Activity",href:"#activity"}],[{label:"Pricelist",href:"#pricelist"},{label:"Testimony",href:"#testimony"},{label:"Contact Us",href:"#contact"}]],Gx=[{icon:i.jsx(Lx,{}),href:"https://www.instagram.com/hainickreatif/",label:"Instagram"},{icon:i.jsx(Bx,{}),href:"mailto:hainickreatif@gmail.com",label:"Email"},{icon:i.jsx(Hx,{}),href:"https://wa.me/6282136358570",label:"WhatsApp"}];function qx(){return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        .footer-root {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #fff;
          border-top: 1px solid #e8e8e8;
          padding: 52px 1rem 0;
          box-sizing: border-box;
        }

        /* ── Top area ── */
        .footer-top {
          max-width: 1060px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 48px;
          padding-bottom: 48px;
        }

        /* Brand col */
        .footer-brand-logo-img {
          height: 28px;
          width: auto;
          object-fit: contain;
          display: block;
          margin-bottom: 20px;
        }

        .footer-brand-desc {
          font-size: 0.82rem;
          line-height: 1.7;
          color: #555;
          font-weight: 400;
          margin: 0;
          max-width: 220px;
        }

        /* Nav cols */
        .footer-nav {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .footer-nav-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-nav-link {
          font-size: 0.875rem;
          font-weight: 500;
          color: #333;
          text-decoration: none;
          transition: color 0.15s;
          width: fit-content;
        }
        .footer-nav-link:hover { color: #0a0a0a; }

        /* ── Divider ── */
        .footer-divider {
          max-width: 1060px;
          margin: 0 auto;
          border: none;
          border-top: 1px solid #e8e8e8;
        }

        /* ── Bottom bar ── */
        .footer-bottom {
          max-width: 1060px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 0 24px;
        }

        .footer-copy {
          font-size: 0.8rem;
          color: #888;
          font-weight: 400;
          margin: 0;
        }

        .footer-socials {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .footer-social-link {
          color: #0a0a0a;
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: opacity 0.15s;
        }
        .footer-social-link:hover { opacity: 0.5; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-brand-desc { max-width: 100%; }
          .footer-nav { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 480px) {
          .footer-root { padding: 40px 1rem 0; }
          .footer-nav { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .footer-bottom { flex-direction: column; align-items: flex-start; gap: 14px; }
          .footer-brand-logo-img { height: 26px; }
        }
      `}),i.jsxs("footer",{className:"footer-root",children:[i.jsxs("div",{className:"footer-top",children:[i.jsxs("div",{children:[i.jsx("a",{href:"#home",children:i.jsx("img",{src:Un,alt:"Hainick",className:"footer-brand-logo-img"})}),i.jsx("p",{className:"footer-brand-desc",children:"Hainick is a creative management company dedicated to connecting talents with opportunities and creating memorable experiences."})]}),i.jsx("nav",{className:"footer-nav",children:Yx.map((e,t)=>i.jsx("div",{className:"footer-nav-col",children:e.map(a=>i.jsx("a",{href:a.href,className:"footer-nav-link",children:a.label},a.label))},t))})]}),i.jsx("hr",{className:"footer-divider"}),i.jsxs("div",{className:"footer-bottom",children:[i.jsx("p",{className:"footer-copy",children:"© 2026 Hainick.Co. All rights reserved"}),i.jsx("div",{className:"footer-socials",children:Gx.map(e=>i.jsx("a",{href:e.href,className:"footer-social-link",target:"_blank",rel:"noreferrer","aria-label":e.label,children:e.icon},e.label))})]})]})]})}const Ge=window.location.origin,D=`${Ge}/api/hainickkreatif`,Xx="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=90",Vx=()=>{const[e,t]=f.useState(Xx);return f.useEffect(()=>{fetch(`${D}/hainick-assets`).then(a=>a.json()).then(a=>{const l=a.find(n=>n.image_type==="hero_banner");l!=null&&l.image_url&&t(`${Ge}${l.image_url}`)}).catch(a=>console.error("Gagal memuat hero banner:",a))},[]),i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }

        .hero-card {
          position: relative;
          width: 100%;
          max-width: 1060px;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 8px 48px rgba(0,0,0,0.10);
          animation: scaleIn 0.9s cubic-bezier(0.22,1,0.36,1) both;
          animation-delay: 0.3s;
        }

        .hero-img {
          width: 100%;
          height: 520px;
          object-fit: cover;
          object-position: center 20%;
          display: block;
        }

        .hero-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0.82) 0%,
            rgba(255,255,255,0.45) 42%,
            rgba(255,255,255,0.02) 70%,
            transparent 100%
          );
        }

        .hero-text {
          position: absolute;
          top: 0; left: 0; right: 0;
          padding: 2.8rem 1.5rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .hero-sub {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1rem;
          font-weight: 400;
          color: #555;
          text-align: center;
          max-width: 460px;
          line-height: 1.65;
          animation: fadeUp 0.7s ease both;
          animation-delay: 0.72s;
        }

        @media (max-width: 768px) {
          .hero-img { height: 400px; object-position: center top; }
          .hero-text { padding: 2rem 1rem 0; gap: 0.75rem; }
          .hero-sub  { font-size: 0.9rem; max-width: 320px; }
        }

        @media (max-width: 480px) {
          .hero-card { border-radius: 14px; }
          .hero-img  { height: 320px; }
          .hero-text { padding: 1.4rem 0.75rem 0; gap: 0.6rem; }
          .hero-sub  { font-size: 0.82rem; max-width: 260px; }
        }
      `}),i.jsx("section",{id:"home",style:{minHeight:"60vh",background:"#fff",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",padding:"80px 1rem 0"},children:i.jsxs("div",{className:"hero-card",children:[i.jsx("img",{className:"hero-img",src:e,alt:"Hainick Creative Team"}),i.jsx("div",{className:"hero-overlay"}),i.jsx("div",{className:"hero-text"})]})})]})},Jx={description:"PT HAINICK KREATIF INDONESIA is a premier talent and creator management agency established in 2021. We specialize in discovering, nurturing, and representing talented individuals in various industries, including entertainment, digital content creation, and professional brand partnerships. Our mission is to bridge the gap between exceptional talent and leading brands, ensuring mutual growth and success.",services:[{id:1,title:"Talent Management",description:"We represent and manage artists, influencers, and digital creators, helping them grow their careers and maximize their potential."},{id:2,title:"Brand Collaborations",description:"We connect talents with top-tier brands to create impactful marketing campaigns and endorsements."}],vision:"To be the leading talent and creator management agency that empowers individuals to reach their highest potential while delivering innovative and inspiring collaborations.",missions:["To support and elevate emerging and established talent.","To foster meaningful partnerships between creators and brands.","To stay ahead of industry trends and provide top-tier management solutions."],whyChooseUs:"A dedicated team with expertise in talent and brand management. Strong industry connections and collaboration opportunities. Fast response and solution-driven service.",socials:{whatsapp:"https://wa.me/6282136358570",instagram:"https://www.instagram.com/hainickreatif/"},showcaseVideo:{label:"Hainick Talent Showcase",sublabel:"Watch our creators in action"}},Qx=()=>i.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),Kx=()=>i.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})});function Zx(){const[e,t]=f.useState(null),[a,l]=f.useState(!0),n=f.useRef(null),r=f.useRef(null),{description:o,services:s,vision:c,missions:u,whyChooseUs:h,socials:p,showcaseVideo:m}=Jx;return f.useEffect(()=>{(async()=>{try{const y=await fetch(`${D}/hainick-assets`);if(!y.ok)throw new Error("Gagal fetch assets");const w=(await y.json()).find(d=>d.image_type==="talent_showcase");w!=null&&w.image_url&&t(`${Ge}${w.image_url}`)}catch(y){console.error("Gagal memuat video showcase:",y)}finally{l(!1)}})()},[]),f.useEffect(()=>{if(!e||a)return;const x=n.current,y=r.current;if(!x||!y)return;const j=new IntersectionObserver(w=>{w.forEach(d=>{d.isIntersecting?x.play().catch(()=>{x.muted=!0,x.play()}):x.pause()})},{threshold:.3});return j.observe(y),()=>j.disconnect()},[e,a]),i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        :root {
          --clr-bg: #ffffff;
          --clr-text: #1a1a1a;
          --clr-muted: #555555;
          --clr-border: #e5e5e5;
          --clr-accent: #2a6f4e;
          --clr-accent-light: #e8f5ee;
          --clr-tag-bg: #f4f4f4;
          --clr-tag-text: #333;
          --radius-btn: 6px;
          --radius-card: 10px;
          --font-display: 'Plus Jakarta Sans', sans-serif;
          --font-body: 'Plus Jakarta Sans', sans-serif;
          --section-max: 1060px;
        }

        .about-root {
          font-family: var(--font-body);
          color: var(--clr-text);
          background: var(--clr-bg);
          padding: 24px 1rem 64px;
          max-width: var(--section-max);
          margin: 0 auto;
          box-sizing: border-box;
        }

        .about-page-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 4vw, 2.4rem);
          font-weight: 800;
          margin: 0 0 18px;
          letter-spacing: 0.01em;
          line-height: 1.1;
        }

        .about-desc {
          font-size: clamp(0.875rem, 1.8vw, 0.96rem);
          line-height: 1.75;
          color: var(--clr-muted);
          margin: 0 0 40px;
          font-weight: 300;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: clamp(1.1rem, 2.5vw, 1.35rem);
          font-weight: 700;
          margin: 0 0 14px;
          letter-spacing: -0.02em;
          padding-bottom: 10px;
        }
        .section-title::after {
          content: '';
          display: block;
          width: 36px;
          height: 2px;
          background: #4a4a4a; 
          margin-top: 8px;
          border-radius: 2px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 16px;
          margin-bottom: 40px;
        }
        .service-card {
          background: #dce8f5;
          border: 1px solid #ccd9ee;
          border-radius: var(--radius-card);
          padding: 20px 22px;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
        .service-card:hover {
          box-shadow: 0 6px 24px rgba(42,111,78,0.12);
          transform: translateY(-2px);
        }
        .service-card-title { font-size: 0.92rem; font-weight: 600; margin: 0 0 8px; color: #1a2f5e; }
        .service-card-desc { font-size: 0.865rem; line-height: 1.65; color: var(--clr-muted); margin: 0; font-weight: 300; }

        .vision-box {
          background: var(--clr-tag-bg);
          border-left: 3px solid #1a2f5e;
          border-radius: 0 var(--radius-card) var(--radius-card) 0;
          padding: 18px 22px;
          margin-bottom: 40px;
          font-size: 0.9rem;
          line-height: 1.75;
          color: var(--clr-muted);
          font-style: italic;
        }

        .mission-list { list-style: none; padding: 0; margin: 0 0 40px; display: flex; flex-direction: column; gap: 10px; }
        .mission-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; line-height: 1.65; color: var(--clr-muted); }
        .mission-list li::before { content: '✦'; color: var(--clr-accent); font-size: 0.65rem; margin-top: 5px; flex-shrink: 0; }

        .why-box { font-size: 0.9rem; line-height: 1.75; color: var(--clr-muted); margin-bottom: 32px; }

        .social-buttons { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 48px; }
        .social-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 18px; border: 1.5px solid var(--clr-border);
          border-radius: var(--radius-btn); background: white;
          color: var(--clr-text); font-family: var(--font-body);
          font-size: 0.85rem; font-weight: 500; text-decoration: none;
          cursor: pointer; transition: border-color 0.2s, background 0.2s, color 0.2s, box-shadow 0.2s;
        }
        .social-btn:hover { border-color: var(--clr-accent); color: var(--clr-accent); box-shadow: 0 2px 10px rgba(42,111,78,0.1); }
        .social-btn.whatsapp:hover { background: #e8f9ef; }
        .social-btn.instagram:hover { background: #fdf0f8; border-color: #c13584; color: #c13584; }

        /* ── Showcase ── */
        .showcase-wrapper {
          border-radius: 14px;
          overflow: hidden;
          position: relative;
          aspect-ratio: 16/9;
          background: #111;
          box-shadow: 0 8px 40px rgba(0,0,0,0.18);
        }

        /* skeleton shimmer saat loading */
        .showcase-skeleton {
          width: 100%; height: 100%;
          background: linear-gradient(90deg, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%);
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
        }
        @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

        /* Video inline — langsung ditampilkan penuh */
        .showcase-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Overlay info di bawah */
        .showcase-meta {
          position: absolute;
          bottom: 20px;
          left: 24px;
          pointer-events: none;
        }
        .showcase-meta-title { color: white; font-size: 1rem; font-weight: 600; margin: 0 0 2px; text-shadow: 0 1px 6px rgba(0,0,0,0.5); }
        .showcase-meta-sub { color: rgba(255,255,255,0.75); font-size: 0.8rem; margin: 0; }

        /* gradient gelap di bawah supaya teks terbaca */
        .showcase-gradient {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 80px;
          background: linear-gradient(to top, rgba(0,0,0,0.55), transparent);
          pointer-events: none;
        }

        /* badge "no video" */
        .no-video-badge {
          width: 100%; height: 100%;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 8px; color: rgba(255,255,255,0.45);
          font-size: 0.85rem;
        }
        .no-video-badge span { font-size: 2rem; }

        .about-divider { border: none; border-top: 1px solid var(--clr-border); margin: 0 0 36px; }

        @media (max-width: 600px) {
          .about-root { padding: 36px 18px 48px; }
          .services-grid { grid-template-columns: 1fr; }
          .social-buttons { flex-direction: column; align-items: flex-start; }
        }
      `}),i.jsxs("section",{id:"about",className:"about-root",style:{scrollMarginTop:"80px"},children:[i.jsx("h1",{className:"about-page-title",children:"About Hainick"}),i.jsx("p",{className:"about-desc",children:o}),i.jsx("hr",{className:"about-divider"}),i.jsx("h2",{className:"section-title",children:"Our Services"}),i.jsx("div",{className:"services-grid",children:s.map(x=>i.jsxs("div",{className:"service-card",children:[i.jsx("p",{className:"service-card-title",children:x.title}),i.jsx("p",{className:"service-card-desc",children:x.description})]},x.id))}),i.jsx("h2",{className:"section-title",children:"Our Vision"}),i.jsx("div",{className:"vision-box",children:c}),i.jsx("h2",{className:"section-title",children:"Our Mission"}),i.jsx("ul",{className:"mission-list",children:u.map((x,y)=>i.jsx("li",{children:x},y))}),i.jsx("h2",{className:"section-title",children:"Why Choose Us?"}),i.jsx("p",{className:"why-box",children:h}),i.jsxs("div",{className:"social-buttons",children:[i.jsxs("a",{href:p.whatsapp,className:"social-btn whatsapp",target:"_blank",rel:"noreferrer",children:[i.jsx(Qx,{})," Whatsapp"]}),i.jsxs("a",{href:p.instagram,className:"social-btn instagram",target:"_blank",rel:"noreferrer",children:[i.jsx(Kx,{})," Instagram"]})]}),i.jsxs("div",{className:"showcase-wrapper",ref:r,children:[a&&i.jsx("div",{className:"showcase-skeleton"}),!a&&e&&i.jsxs(i.Fragment,{children:[i.jsx("video",{ref:n,className:"showcase-video",src:e,muted:!0,loop:!0,playsInline:!0,preload:"auto"}),i.jsx("div",{className:"showcase-gradient"}),i.jsxs("div",{className:"showcase-meta",children:[i.jsx("p",{className:"showcase-meta-title",children:m.label}),i.jsx("p",{className:"showcase-meta-sub",children:m.sublabel})]})]}),!a&&!e&&i.jsxs("div",{className:"no-video-badge",children:[i.jsx("span",{children:"🎬"}),i.jsx("p",{children:"Video belum tersedia"})]})]})]})]})}const so=e=>{const t=Number(e);return!e||isNaN(t)||t===0?"—":t>=1e6?(t/1e6).toFixed(1).replace(".",",")+"M":t>=1e3?(t/1e3).toFixed(1).replace(".",",")+"K":String(t)},$x=()=>i.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})}),Fx=()=>i.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.77 1.52V6.75a4.85 4.85 0 01-1-.06z"})}),Wx=()=>i.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),Ix=()=>i.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),i.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),Px=()=>i.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"15 18 9 12 15 6"})}),eb=()=>i.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"9 18 15 12 9 6"})}),Yp=()=>i.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"rgba(255,255,255,0.6)",strokeWidth:"1.5",children:[i.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),i.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),tb=({talent:e,onClick:t})=>{const[a,l]=f.useState(!1),n=e!=null&&e.image_url?`${Ge}${e.image_url}`:null,r=!n||a;return i.jsx("button",{className:"ot-card",onClick:t,type:"button","aria-label":`Lihat detail ${(e==null?void 0:e.nama)||"talent"}`,children:i.jsxs("div",{className:"ot-card-photo-wrap",children:[r?i.jsx("div",{className:"ot-card-fallback","aria-hidden":"true",children:i.jsx(Yp,{})}):i.jsx("img",{src:n,alt:(e==null?void 0:e.nama)||"Talent Hainick",className:"ot-card-img",loading:"lazy",onError:()=>l(!0)}),i.jsx("div",{className:"ot-card-overlay",children:i.jsxs("span",{className:"ot-card-hint",children:[i.jsx(Ix,{})," Lihat Profil"]})})]})})},ab=({talentId:e,thumbnailUrl:t,onClose:a})=>{var m;const[l,n]=f.useState(null),[r,o]=f.useState(!0),[s,c]=f.useState(""),u=f.useCallback(()=>{const x=new AbortController;return o(!0),c(""),fetch(`${D}/load-official-talent-desc/${e}`,{method:"GET",signal:x.signal}).then(y=>{if(!y.ok)throw new Error("Gagal memuat detail talent");return y.json()}).then(y=>{const j=Array.isArray(y)?y[0]:y;n(j||null)}).catch(y=>{y.name!=="AbortError"&&c(y.message||"Terjadi kesalahan saat memuat data.")}).finally(()=>{x.signal.aborted||o(!1)}),()=>x.abort()},[e]);f.useEffect(()=>{const x=u();return()=>x()},[u]),f.useEffect(()=>{const x=document.body.style.overflow;document.body.style.overflow="hidden";const y=j=>{j.key==="Escape"&&a()};return window.addEventListener("keydown",y),()=>{document.body.style.overflow=x,window.removeEventListener("keydown",y)}},[a]);const h=l!=null&&l.image_url?`${D}${l.image_url}`:t,p=(l==null?void 0:l.tinggi)||(l==null?void 0:l.berat)||(l==null?void 0:l.umur);return i.jsx("div",{className:"ot-modal-backdrop",onClick:a,role:"dialog","aria-modal":"true","aria-labelledby":"ot-modal-title",children:i.jsxs("div",{className:"ot-modal-box",onClick:x=>x.stopPropagation(),children:[i.jsx("button",{className:"ot-modal-close",onClick:a,"aria-label":"Tutup detail talent",type:"button",children:"✕"}),r?i.jsxs("div",{className:"ot-modal-loading",children:[i.jsx("div",{className:"ot-skel ot-skel-photo"}),i.jsxs("div",{className:"ot-modal-loading-info",children:[i.jsx("div",{className:"ot-skel",style:{width:"70%",height:24}}),i.jsx("div",{className:"ot-skel",style:{width:"100%",height:14,marginTop:16}}),i.jsx("div",{className:"ot-skel",style:{width:"90%",height:14,marginTop:8}}),i.jsx("div",{className:"ot-skel",style:{width:"60%",height:14,marginTop:8}}),i.jsx("div",{className:"ot-skel",style:{width:"80%",height:36,marginTop:24}})]})]}):s?i.jsxs("div",{className:"ot-modal-error-wrap",children:[i.jsx("p",{className:"ot-modal-error",children:s}),i.jsx("button",{className:"ot-retry-btn",onClick:u,type:"button",children:"Coba Lagi"})]}):i.jsxs("div",{className:"ot-modal-content",children:[i.jsx("div",{className:"ot-modal-photo-wrap",children:h?i.jsx("img",{src:h,alt:(l==null?void 0:l.nama)||"Talent",className:"ot-modal-photo"}):i.jsx("div",{className:"ot-modal-photo-fallback",children:i.jsx(Yp,{})})}),i.jsxs("div",{className:"ot-modal-info",children:[i.jsx("h3",{id:"ot-modal-title",className:"ot-modal-name",children:((m=l==null?void 0:l.nama)==null?void 0:m.trim())||"Talent Hainick"}),(l==null?void 0:l.bio)&&i.jsx("p",{className:"ot-modal-bio",children:l.bio}),i.jsxs("div",{className:"ot-modal-socials",children:[i.jsxs("div",{className:"ot-social-stat",children:[i.jsxs("span",{className:"ot-social-label",children:[i.jsx($x,{})," Instagram"]}),i.jsx("span",{className:"ot-social-count",children:so(l==null?void 0:l.followers_ig)})]}),i.jsxs("div",{className:"ot-social-stat",children:[i.jsxs("span",{className:"ot-social-label",children:[i.jsx(Fx,{})," TikTok"]}),i.jsx("span",{className:"ot-social-count",children:so(l==null?void 0:l.followers_tiktok)})]}),i.jsxs("div",{className:"ot-social-stat",children:[i.jsxs("span",{className:"ot-social-label",children:[i.jsx(Wx,{})," Twitter"]}),i.jsx("span",{className:"ot-social-count",children:so(l==null?void 0:l.followers_twitter)})]})]}),p&&i.jsxs("div",{className:"ot-modal-physical",children:[(l==null?void 0:l.tinggi)&&i.jsxs("span",{children:[l.tinggi," cm"]}),(l==null?void 0:l.berat)&&i.jsxs("span",{children:[l.berat," kg"]}),(l==null?void 0:l.umur)&&i.jsxs("span",{children:[l.umur," thn"]})]})]})]})]})})};function lb(){const[e,t]=f.useState([]),[a,l]=f.useState(!0),[n,r]=f.useState(""),[o,s]=f.useState(null),c=f.useRef(null),[u,h]=f.useState(!1),[p,m]=f.useState(!1),x=f.useCallback(()=>{const w=new AbortController;return l(!0),r(""),fetch(`${D}/load-official-talent`,{method:"GET",signal:w.signal}).then(d=>{if(!d.ok)throw new Error(`Gagal mengambil data (${d.status})`);return d.json()}).then(d=>t(Array.isArray(d)?d:[])).catch(d=>{d.name!=="AbortError"&&(console.error("Gagal fetch official talent:",d),r(d.message||"Terjadi kesalahan saat memuat data talent."))}).finally(()=>{w.signal.aborted||l(!1)}),()=>w.abort()},[]);f.useEffect(()=>{const w=x();return()=>w()},[x]);const y=f.useCallback(()=>{const w=c.current;w&&(h(w.scrollLeft>4),m(w.scrollLeft+w.clientWidth<w.scrollWidth-4))},[]);f.useEffect(()=>(y(),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)),[e,a,y]);const j=w=>{const d=c.current;d&&d.scrollBy({left:w*(d.clientWidth*.7),behavior:"smooth"})};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        :root {
          --navy: #1a2744;
          --navy-light: #263660;
          --accent: #4f7cff;
          --accent-soft: #eef2ff;
          --danger: #ef4444;
          --border: #e9ecf0;
          --muted: #9ca3af;
          --text: #1e293b;
          --bg: #f4f6fb;
          --font: 'Plus Jakarta Sans', sans-serif;
          --radius: 16px;
          --shadow: 0 4px 20px rgba(26,39,68,0.08);
        }

        .ot-root {
          font-family: var(--font);
          background: #ffffff;
          padding: 48px 1rem 72px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .ot-title {
          font-size: clamp(1.3rem, 3vw, 1.9rem);
          font-weight: 800;
          letter-spacing: 0.01em;
          color: var(--navy);
          text-align: center;
          margin: 0 0 36px;
        }

        .ot-error-block {
          text-align: center;
          padding: 2.5rem 1rem;
          color: var(--danger);
          font-size: 0.9rem;
          font-weight: 500;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .ot-retry-btn {
          background: var(--navy);
          color: #fff;
          border: none;
          padding: 8px 18px;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        .ot-retry-btn:hover { background: var(--accent); }

        .ot-empty-block {
          text-align: center;
          padding: 3rem 1rem;
          color: var(--muted);
          font-size: 0.9rem;
          border: 1.5px dashed var(--border);
          border-radius: var(--radius);
        }

        /* ── Carousel / Grid ── */
        .ot-scroll-outer { position: relative; }

        .ot-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #ffffff;
          border: 1.5px solid var(--border);
          box-shadow: var(--shadow);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 5;
          color: var(--navy);
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .ot-nav:hover { background: var(--accent-soft); color: var(--accent); transform: translateY(-50%) scale(1.05); }
        .ot-nav:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
        .ot-nav-left { left: -12px; }
        .ot-nav-right { right: -12px; }

        .ot-grid {
          display: grid;
          grid-auto-flow: column;
          grid-template-rows: repeat(2, 1fr);
          grid-auto-columns: 160px;
          gap: 16px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scroll-snap-type: x proximity;
          padding: 6px 4px 12px;
          -ms-overflow-style: none;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        .ot-grid::-webkit-scrollbar { display: none; }

        .ot-card {
          scroll-snap-align: start;
          border: 1.5px solid var(--border);
          background: none;
          padding: 0;
          cursor: pointer;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .ot-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(26,39,68,0.12);
          border-color: rgba(79,124,255,0.3);
        }
        .ot-card:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

        .ot-card-photo-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          background: var(--bg);
        }
        .ot-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          filter: grayscale(100%) contrast(1.03);
          transition: filter 0.4s ease, transform 0.4s ease;
        }
        .ot-card:hover .ot-card-img { filter: grayscale(0%); transform: scale(1.05); }

        .ot-card-fallback {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--navy), var(--navy-light));
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ot-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,15,30,0.72), transparent 60%);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .ot-card:hover .ot-card-overlay { opacity: 1; }

        .ot-card-hint {
          color: #fff;
          font-size: 0.72rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 5px;
          padding-bottom: 12px;
        }

        .ot-skel-card {
          border-radius: 14px;
          aspect-ratio: 1 / 1;
          background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
          background-size: 200% 100%;
          animation: otShimmer 1.4s infinite;
          scroll-snap-align: start;
        }
        @keyframes otShimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* ── Modal ── */
        .ot-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(10,15,30,0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
          animation: otFadeIn 0.2s ease;
        }
        @keyframes otFadeIn { from { opacity: 0; } to { opacity: 1; } }

        .ot-modal-box {
          position: relative;
          background: #ffffff;
          border-radius: 20px;
          width: 100%;
          max-width: 650px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 2rem;
          box-shadow: 0 24px 64px rgba(10,15,30,0.22);
          animation: otSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes otSlideUp {
          from { transform: translateY(24px); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }

        .ot-modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: var(--bg);
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          cursor: pointer;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--muted);
          transition: background 0.15s, color 0.15s;
        }
        .ot-modal-close:hover { background: var(--border); color: var(--navy); }

        .ot-modal-content { display: flex; gap: 1.75rem; align-items: flex-start; }
        @media (max-width: 600px) { .ot-modal-content { flex-direction: column; } }

        .ot-modal-photo-wrap {
          flex: 0 0 200px;
          width: 200px;
          height: 200px;
          border-radius: 14px;
          overflow: hidden;
          background: var(--bg);
        }
        @media (max-width: 600px) {
          .ot-modal-photo-wrap { width: 100%; flex-basis: auto; height: 220px; }
        }
        .ot-modal-photo { width: 100%; height: 100%; object-fit: cover; display: block; }
        .ot-modal-photo-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--navy);
        }

        .ot-modal-info { flex: 1; min-width: 0; padding-top: 4px; }
        .ot-modal-name {
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          color: var(--navy);
          margin: 0 0 10px;
        }
        .ot-modal-bio { font-size: 0.88rem; line-height: 1.65; color: var(--text); margin: 0 0 20px; }

        .ot-modal-socials {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          padding-bottom: 16px;
          margin-bottom: 16px;
          border-bottom: 1px solid var(--border);
        }
        .ot-social-stat { display: flex; flex-direction: column; gap: 4px; }
        .ot-social-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--muted);
        }
        .ot-social-count { font-size: 1.25rem; font-weight: 800; color: var(--navy); }

        .ot-modal-physical {
          display: flex;
          gap: 1.2rem;
          font-size: 0.88rem;
          color: var(--text);
          font-weight: 600;
        }

        .ot-modal-loading { display: flex; gap: 1.75rem; }
        @media (max-width: 600px) { .ot-modal-loading { flex-direction: column; } }
        .ot-modal-loading-info { flex: 1; display: flex; flex-direction: column; }
        .ot-skel {
          border-radius: 8px;
          background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
          background-size: 200% 100%;
          animation: otShimmer 1.4s infinite;
        }
        .ot-skel-photo { width: 200px; height: 200px; border-radius: 14px; flex-shrink: 0; }
        @media (max-width: 600px) { .ot-skel-photo { width: 100%; height: 220px; } }

        .ot-modal-error-wrap { text-align: center; padding: 2rem 0; }
        .ot-modal-error { color: var(--danger); font-size: 0.88rem; font-weight: 500; margin-bottom: 12px; }

        @media (max-width: 600px) {
          .ot-grid { grid-template-rows: repeat(1, 1fr); grid-auto-columns: 135px; }
          .ot-nav { width: 36px; height: 36px; }
          .ot-nav-left { left: 0px; }
          .ot-nav-right { right: 0px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ot-card, .ot-card-img, .ot-card-overlay, .ot-modal-backdrop, .ot-modal-box {
            animation: none !important;
            transition: none !important;
          }
        }
      `}),i.jsxs("section",{id:"officialTalent",className:"ot-root",style:{scrollMarginTop:"80px"},children:[i.jsx("h2",{className:"ot-title",children:"Official Talent Hainick"}),n?i.jsxs("div",{className:"ot-error-block",children:[i.jsx("p",{children:n}),i.jsx("button",{className:"ot-retry-btn",onClick:x,type:"button",children:"Coba Lagi"})]}):a?i.jsx("div",{className:"ot-scroll-outer",children:i.jsx("div",{className:"ot-grid",children:Array.from({length:10}).map((w,d)=>i.jsx("div",{className:"ot-skel-card"},d))})}):e.length===0?i.jsx("div",{className:"ot-empty-block",children:"Belum ada talent yang ditambahkan."}):i.jsxs("div",{className:"ot-scroll-outer",children:[u&&i.jsx("button",{className:"ot-nav ot-nav-left",onClick:()=>j(-1),"aria-label":"Geser ke sebelumnya",type:"button",children:i.jsx(Px,{})}),i.jsx("div",{className:"ot-grid",ref:c,onScroll:y,children:e.map(w=>i.jsx(tb,{talent:w,onClick:()=>s(w)},w.id))}),p&&i.jsx("button",{className:"ot-nav ot-nav-right",onClick:()=>j(1),"aria-label":"Geser ke selanjutnya",type:"button",children:i.jsx(eb,{})})]})]}),o&&i.jsx(ab,{talentId:o.id,thumbnailUrl:o.image_url?`${D}${o.image_url}`:null,onClose:()=>s(null)})]})}const nb=()=>i.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})}),ib=()=>i.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.77 1.52V6.75a4.85 4.85 0 01-1-.06z"})}),rb=()=>i.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),ob=e=>{const t=parseInt(e,10);return isNaN(t)||t===0?null:t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?Math.round(t/1e3)+"K":String(t)},sb=e=>{const t=e.followers_instagram??e.followers_ig??0,a=e.followers_tiktok??0,l=e.followers_x??0,n={};return t&&t!=="0"&&(n.instagram={url:e.url_instagram||"https://instagram.com/",followers:String(t)}),a&&a!=="0"&&(n.tiktok={url:e.url_tiktok||"https://tiktok.com/",followers:String(a)}),l&&l!=="0"&&(n.x={url:e.url_x||"https://x.com/",followers:String(l)}),{id:e.id,name:e.name,photo:e.profile_image?`${Ge}${e.profile_image}`:null,categories:e.roles?e.roles.split(",").map(r=>r.trim()).filter(Boolean):[],socials:n}},cb=[{key:"instagram",icon:i.jsx(nb,{})},{key:"tiktok",icon:i.jsx(ib,{})},{key:"x",icon:i.jsx(rb,{})}];function ub({talent:e,index:t}){var r,o;const[a,l]=f.useState(!1),n=!e.photo||a;return i.jsxs("div",{className:"tc-card",style:{animationDelay:`${t*60}ms`},children:[i.jsx("div",{className:"tc-photo-wrap",children:n?i.jsx("div",{className:"tc-photo-fallback",children:i.jsx("span",{children:((o=(r=e.name)==null?void 0:r[0])==null?void 0:o.toUpperCase())||"?"})}):i.jsx("img",{src:e.photo,alt:e.name,className:"tc-photo",onError:()=>l(!0)})}),i.jsxs("div",{className:"tc-body",children:[i.jsx("h3",{className:"tc-name",children:e.name}),Object.keys(e.socials).length>0&&i.jsx("div",{className:"tc-socials",children:cb.filter(s=>e.socials[s.key]).map(s=>{const c=ob(e.socials[s.key].followers);return c?i.jsxs("a",{href:e.socials[s.key].url,target:"_blank",rel:"noreferrer",className:"tc-social-item",children:[i.jsx("span",{className:"tc-social-icon",children:s.icon}),i.jsx("span",{className:"tc-social-count",children:c})]},s.key):null})}),e.categories.length>0&&i.jsx("div",{className:"tc-cats",children:e.categories.map(s=>i.jsx("span",{className:"tc-cat",children:s},s))})]})]})}function db(){return i.jsxs("div",{className:"tc-card tc-skeleton",children:[i.jsx("div",{className:"tc-photo-wrap skel-photo"}),i.jsxs("div",{className:"tc-body",children:[i.jsx("div",{className:"skel-line",style:{width:"65%",height:13,marginBottom:10}}),i.jsx("div",{className:"skel-line",style:{width:"45%",height:11,marginBottom:8}}),i.jsxs("div",{style:{display:"flex",gap:6},children:[i.jsx("div",{className:"skel-line",style:{width:40,height:18}}),i.jsx("div",{className:"skel-line",style:{width:40,height:18}})]})]})]})}function fb(){const[e,t]=f.useState([]),[a,l]=f.useState(!0),[n,r]=f.useState(null);return f.useEffect(()=>{fetch(`${D}/creators`).then(o=>{if(!o.ok)throw new Error(`HTTP ${o.status}`);return o.json()}).then(o=>{const s=Array.isArray(o)?o.map(sb):[];t(s)}).catch(o=>{console.error("Gagal fetch creators:",o),r(o.message)}).finally(()=>l(!1))},[]),i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        .ts-root {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #fff;
          padding: 48px 1rem 72px;
          max-width: 1060px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .ts-title {
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #0a0a0a;
          text-align: center;
          margin: 0 0 32px;
        }

        /* ── Error ── */
        .ts-error {
          text-align: center;
          padding: 3rem 1rem;
          color: #ef4444;
          font-size: 0.9rem;
          font-weight: 500;
        }

        /* ── Grid ── */
        .ts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 768px) {
          .ts-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
        }
        @media (max-width: 480px) {
          .ts-grid { grid-template-columns: 1fr; }
        }

        /* ── Card ── */
        .tc-card {
          border: 1.5px solid #e8e8e8;
          border-radius: 14px;
          overflow: hidden;
          background: #fff;
          transition: box-shadow 0.25s, transform 0.25s;
          animation: tcFadeIn 0.35s ease both;
        }
        @keyframes tcFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tc-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.10);
          transform: translateY(-3px);
        }

        /* ── Photo ── */
        .tc-photo-wrap {
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          background: #f0f0f0;
        }
        .tc-photo {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.4s ease;
        }
        .tc-card:hover .tc-photo { transform: scale(1.04); }
        .tc-photo-fallback {
          width: 100%; height: 100%;
          background: linear-gradient(135deg, #1a2744, #4f7cff);
          display: flex; align-items: center; justify-content: center;
        }
        .tc-photo-fallback span {
          font-size: 3rem; font-weight: 800; color: #fff;
        }

        /* ── Body ── */
        .tc-body {
          padding: 14px 14px 16px;
        }

        .tc-name {
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          color: #0a0a0a;
          margin: 0 0 8px;
          line-height: 1.25;
        }

        /* ── Socials ── */
        .tc-socials {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 9px;
        }
        .tc-social-item {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          text-decoration: none;
          color: #0a0a0a;
          transition: opacity 0.15s;
        }
        .tc-social-item:hover { opacity: 0.45; }
        .tc-social-icon { display: flex; align-items: center; }
        .tc-social-count {
          font-size: 0.72rem;
          font-weight: 700;
          color: #0a0a0a;
        }

        /* ── Categories ── */
        .tc-cats {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: 2px;
        }
        .tc-cat {
          font-size: 0.67rem;
          font-weight: 500;
          color: #555;
          background: #f2f2f2;
          border-radius: 4px;
          padding: 2px 7px;
        }

        /* ── Skeleton ── */
        .tc-skeleton { pointer-events: none; }
        .skel-photo {
          aspect-ratio: 3 / 4;
          background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
        }
        .skel-line {
          border-radius: 6px;
          display: block;
          background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
        }
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}),i.jsxs("section",{id:"creatorPlus",className:"ts-root",style:{scrollMarginTop:"80px"},children:[i.jsx("h2",{className:"ts-title",children:"Creator+"}),n?i.jsxs("p",{className:"ts-error",children:["Gagal memuat data talent: ",n]}):i.jsx("div",{className:"ts-grid",children:a?Array.from({length:6}).map((o,s)=>i.jsx(db,{},s)):e.map((o,s)=>i.jsx(ub,{talent:o,index:s},o.id))})]})]})}const mb=()=>i.jsxs("svg",{width:"44",height:"44",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),i.jsx("path",{d:"M15.54 8.46a5 5 0 010 7.07"}),i.jsx("path",{d:"M19.07 4.93a10 10 0 010 14.14"})]}),pb=()=>i.jsxs("svg",{width:"44",height:"44",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"2",y:"7",width:"15",height:"10",rx:"2"}),i.jsx("path",{d:"M17 9l5-2v10l-5-2V9z"})]}),hb=()=>i.jsxs("svg",{width:"44",height:"44",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M3 9l1-5h16l1 5"}),i.jsx("path",{d:"M3 9a2 2 0 004 0 2 2 0 004 0 2 2 0 004 0 2 2 0 004 0"}),i.jsx("path",{d:"M5 9v11h14V9"}),i.jsx("path",{d:"M9 21v-6h6v6"})]}),Gp=()=>i.jsx("svg",{width:"44",height:"44",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),gb=()=>i.jsxs("svg",{width:"44",height:"44",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),i.jsx("circle",{cx:"9",cy:"7",r:"4"}),i.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),i.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),xb=()=>i.jsxs("svg",{width:"44",height:"44",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),i.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),i.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),i.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),bb={buzzer:i.jsx(mb,{}),video:i.jsx(pb,{}),store:i.jsx(hb,{}),star:i.jsx(Gp,{}),users:i.jsx(gb,{}),calendar:i.jsx(xb,{})},vb=[{id:1,icon:"buzzer",title:"Buzzer",description:"We provide buzzer for comment, likes, follow and repost. Our buzzer is organic. We will share report for the campaign."},{id:2,icon:"video",title:"Review product",description:"We have 10,000++ content creator TikTok and Instagram, start followers 1000. This is category for Nano kol until makro kol. They can produce video with product and they have a good quality video."},{id:3,icon:"store",title:"Visit event/store",description:"We have 10,000++ content creator tiktok and instagram, start followers 1000. This is category for Nano kol until makro kol. They can visit store and event, include produce video with product and they have a good quality video."}];function yb({service:e,isLast:t}){return i.jsxs("div",{className:`svc-card ${t?"no-border":""}`,children:[i.jsx("div",{className:"svc-icon",children:bb[e.icon]??i.jsx(Gp,{})}),i.jsx("h3",{className:"svc-title",children:e.title}),i.jsx("p",{className:"svc-desc",children:e.description})]})}function jb(){const e=vb;return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        .svc-root {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #fff;
          padding: 56px 1rem 72px;
          max-width: 1060px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .svc-heading {
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #0a0a0a;
          text-align: center;
          margin: 0 0 56px;
        }

        /* ── Grid ── */
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        /* ── Card ── */
        .svc-card {
          padding: 0 40px 0;
          border-right: 1px solid #e0e0e0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }
        .svc-card:first-child { padding-left: 0; }
        .svc-card.no-border { border-right: none; }

        .svc-icon {
          color: #0a0a0a;
          line-height: 0;
        }

        .svc-title {
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #0a0a0a;
          margin: 0;
        }

        .svc-desc {
          font-size: 0.875rem;
          line-height: 1.75;
          color: #555;
          font-weight: 400;
          margin: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .svc-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .svc-card {
            padding: 32px 0;
            border-right: none;
            border-bottom: 1px solid #e0e0e0;
          }
          .svc-card.no-border { border-bottom: none; }
          .svc-card:first-child { padding-top: 0; }
        }

        @media (max-width: 480px) {
          .svc-root { padding: 40px 1rem 56px; }
          .svc-heading { margin-bottom: 40px; }
        }
      `}),i.jsxs("section",{id:"services",className:"svc-root",style:{scrollMarginTop:"80px"},children:[i.jsx("h2",{className:"svc-heading",children:"Our Service"}),i.jsx("div",{className:"svc-grid",children:e.map((t,a)=>i.jsx(yb,{service:t,isLast:a===e.length-1},t.id))})]})]})}const qp=()=>i.jsxs("svg",{width:"44",height:"44",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),i.jsx("path",{d:"M15.54 8.46a5 5 0 010 7.07"}),i.jsx("path",{d:"M19.07 4.93a10 10 0 010 14.14"})]}),wb=()=>i.jsxs("svg",{width:"44",height:"44",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"2",y:"7",width:"15",height:"10",rx:"2"}),i.jsx("path",{d:"M17 9l5-2v10l-5-2V9z"})]}),Sb=()=>i.jsxs("svg",{width:"44",height:"44",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M3 9l1-5h16l1 5"}),i.jsx("path",{d:"M3 9a2 2 0 004 0 2 2 0 004 0 2 2 0 004 0 2 2 0 004 0"}),i.jsx("path",{d:"M5 9v11h14V9"}),i.jsx("path",{d:"M9 21v-6h6v6"})]}),kb={buzzer:qp,video:wb,store:Sb},Nb="6282136358570",zb=[{id:1,icon:"buzzer",title:"Buzzer",buttonText:"Get the Buzzer Package",waMessage:"Halo, saya tertarik dengan paket Buzzer!",tiers:[{price:"IDR 5.000.000",label:null,features:["200 Buzzer organik","Likes","Follow","Repost","Comment","No Hate comment","No black campaign"]}],footNote:null},{id:2,icon:"video",title:"Review Product",buttonText:"Get a Review Pack",waMessage:"Halo, saya tertarik dengan paket Review Product!",tiers:[{price:"IDR 3.500.000",label:"10 KOL",features:["Nano kol IG/TIKTOK","Start 1000 followers","Post 1x video","Revise 1x"]},{price:"IDR 5.000.000",label:"10 KOL",features:["Micro kol IG/TIKTOK","Start 10K followers","Post 1x video","Revise 1x"]}],footNote:"*Min take 10 KOL per package"},{id:3,icon:"store",title:"Visit Event/Store",buttonText:"Get a Visit Package",waMessage:"Halo, saya tertarik dengan paket Visit Event/Store!",tiers:[{price:"IDR 5.000.000",label:"10 KOL",features:["Nano kol IG/TIKTOK","Start 1000 followers","Upload 1x video","Revise 1x"]},{price:"IDR 6.500.000",label:"10 KOL",features:["Micro kol IG/TIKTOK","Start 10K followers","Post 1x video","Revise 1x"]}],footNote:"*Min take 10 KOL per package"}];function Tb({card:e}){const t=kb[e.icon]??qp,a=()=>{const l=encodeURIComponent(e.waMessage);window.open(`https://wa.me/${Nb}?text=${l}`,"_blank")};return i.jsxs("div",{className:"price-card",children:[i.jsxs("div",{className:"card-top",children:[i.jsx("div",{className:"card-icon",children:i.jsx(t,{})}),i.jsx("h2",{className:"card-title",children:e.title}),i.jsx("button",{className:"wa-button",onClick:a,children:e.buttonText})]}),i.jsx("hr",{className:"card-divider"}),i.jsxs("div",{className:"tiers-container",children:[e.tiers.map((l,n)=>i.jsxs("div",{className:n>0?"tier-section":"",children:[i.jsxs("div",{className:"price-row",children:[i.jsx("span",{className:"price",children:l.price}),l.label&&i.jsxs("span",{className:"kol-badge",children:["- ",l.label]})]}),i.jsx("ul",{className:"feature-list",children:l.features.map((r,o)=>i.jsxs("li",{className:"feature-item",children:[i.jsx("span",{className:"bullet",children:"•"})," ",r]},o))})]},n)),e.footNote&&i.jsx("p",{className:"foot-note",children:e.footNote})]})]})}function Eb(){return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .pricelist-section {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #ffffff;
          padding: 60px 24px;
          box-sizing: border-box;
        }

        .pricelist-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .pricelist-title {
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #0a0a0a;
          text-align: center;
          margin: 0 0 56px;
        }

        .pricelist-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .price-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 28px 24px 24px;
          box-shadow: 0 4px 24px rgba(13,27,75,0.08);
          border: 1px solid #e4e9f7;
          box-sizing: border-box;
        }

        .card-top {
          margin-bottom: 4px;
        }

        .card-icon {
          color: #0a0a0a;
          line-height: 0;
          margin-bottom: 10px;
        }

        .card-title {
          font-size: 22px;
          font-weight: 800;
          color: #0d1b4b;
          margin: 0 0 16px 0;
        }

        .wa-button {
          display: block;
          width: 100%;
          padding: 13px;
          background: linear-gradient(135deg, #0d2b8e 0%, #1a3fc4 100%);
          color: #ffffff;
          border: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.2px;
          transition: opacity 0.2s ease, transform 0.1s ease;
          font-family: inherit;
        }

        .wa-button:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        .card-divider {
          border: none;
          border-top: 1px solid #edf0f8;
          margin: 20px 0;
        }

        .tier-section {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px dashed #dde3f5;
        }

        .price-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }

        .price {
          font-size: 15px;
          font-weight: 800;
          color: #0d1b4b;
        }

        .kol-badge {
          font-size: 13px;
          font-weight: 600;
          color: #4a5a8a;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-item {
          font-size: 13.5px;
          color: #3d4f72;
          padding: 4px 0;
          display: flex;
          align-items: flex-start;
          gap: 6px;
          line-height: 1.5;
        }

        .bullet {
          color: #000000;
          font-weight: 800;
          flex-shrink: 0;
        }

        .foot-note {
          font-size: 12px;
          color: #9aa5bf;
          margin-top: 14px;
          font-style: italic;
        }

        /* ── Tablet ── */
        @media (max-width: 1024px) {
          .pricelist-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .pricelist-section { padding: 48px 20px; }
          .pricelist-title { margin: 0 0 40px; }
        }

        /* ── Tablet kecil / landscape mobile ── */
        @media (max-width: 768px) {
          .pricelist-section { padding: 40px 16px; }
          .pricelist-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .pricelist-title { margin: 0 0 32px; }
          .card-title { font-size: 20px; }
        }

        /* ── Mobile ── */
        @media (max-width: 480px) {
          .pricelist-section { padding: 32px 14px; }
          .price-card { padding: 22px 18px 18px; }
          .card-title { font-size: 18px; }
          .price { font-size: 14px; }
          .feature-item { font-size: 13px; }
          .wa-button { font-size: 13px; padding: 12px; }
        }

        /* ── Mobile kecil ── */
        @media (max-width: 360px) {
          .pricelist-section { padding: 28px 12px; }
          .card-icon svg { width: 36px; height: 36px; }
        }
      `}),i.jsxs("section",{id:"pricelist",className:"pricelist-section",style:{scrollMarginTop:"80px"},children:[i.jsx("div",{className:"pricelist-header",children:i.jsx("h2",{className:"pricelist-title",children:"Our Pricelist"})}),i.jsx("div",{className:"pricelist-grid",children:zb.map(e=>i.jsx(Tb,{card:e},e.id))})]})]})}const _b="/build/assets/a-Oz8iOg5P.png",Cb="/build/assets/b-Cb7uzNoD.png",Ab="/build/assets/c-klAzTrvI.png",Mb="/build/assets/d-MPlVTKV-.png",Rb="/build/assets/e-DbejIa2r.png",Db="/build/assets/f-CkhlMSH0.png",Ob="/build/assets/center-CoTVD52n.png",Ub=5e3,Ga=[{id:1,src:_b},{id:2,src:Cb},{id:3,src:Ab},{id:4,src:Mb},{id:5,src:Rb},{id:6,src:Db}],us=["image_left","image_center","image_right","image_bottom_left","image_bottom_right"],Lb="https://wa.me/6282136358570";function Bb(e){const t={};return e.forEach(a=>{const l=a.image_type;!l||!us.includes(l)||(t[l]?(!t[l].image_url&&a.image_url&&(t[l].image_url=a.image_url),!t[l].description&&a.description&&(t[l].description=a.description),a.is_active===1&&(t[l].is_active=1)):t[l]={...a})}),Object.values(t)}function Hb({title:e="Hainick Update"}){const[t,a]=f.useState([]),[l,n]=f.useState(null),[r,o]=f.useState(!0),s=f.useRef(!0),c=f.useCallback(async(p=!1)=>{p&&o(!0);try{const x=await(await fetch(`${D}/updates-section`)).json();if(!s.current)return;const y=Array.isArray(x)?x:[],w=Bb(y).filter(d=>d.is_active===1).slice(0,5).sort((d,g)=>{const b=us.indexOf(d.image_type),v=us.indexOf(g.image_type);return(b===-1?99:b)-(v===-1?99:v)});a(w)}catch(m){console.error("Gagal mengambil data activity:",m)}finally{s.current&&o(!1)}},[]);f.useEffect(()=>{s.current=!0,c(!0);const p=setInterval(()=>c(!1),Ub),m=()=>{document.visibilityState==="visible"&&c(!1)},x=()=>c(!1);return document.addEventListener("visibilitychange",m),window.addEventListener("focus",x),()=>{s.current=!1,clearInterval(p),document.removeEventListener("visibilitychange",m),window.removeEventListener("focus",x)}},[c]);const u=t.slice(0,3),h=t.slice(3);return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        /* ───── UPDATE SECTION ───── */

        .act-outer {
          max-width: 1060px;
          margin: 0 auto;
          padding: 0 1rem;
          box-sizing: border-box;
        }

        .act-root {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #fff;
          padding: 56px 0 0;
          box-sizing: border-box;
        }

        .act-heading {
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #0a0a0a;
          text-align: left;
          margin: 0 0 24px;
        }

        .act-grid-wrapper {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .act-row-top {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .act-row-bottom {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        /* ── Activity Card (clickable) ── */
        .act-card {
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          background: #111;
          aspect-ratio: 4/3;
          cursor: pointer;
        }

        .act-row-bottom .act-card {
          aspect-ratio: 16/9;
        }

        .act-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .act-card:hover img {
          transform: scale(1.04);
        }

        /* ── Hover overlay hint ── */
        .act-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,10,10,0.72) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 14px;
          pointer-events: none;
        }

        .act-card:hover .act-card-overlay {
          opacity: 1;
        }

        .act-card-hint {
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: rgba(255,255,255,0.9);
          font-size: 0.78rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .act-card-hint::before {
          content: '';
          display: block;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.8);
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'/%3E%3C/svg%3E") center/14px no-repeat;
          flex-shrink: 0;
        }

        /* ── Loading skeleton ── */
        .act-skeleton {
          border-radius: 8px;
          background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
          background-size: 200% 100%;
          animation: act-shimmer 1.5s infinite;
          aspect-ratio: 4/3;
        }
        .act-row-bottom .act-skeleton { aspect-ratio: 16/9; }
        @keyframes act-shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* ── Caption teks di bawah grid ── */
        .act-caption {
          margin-top: 20px;
          font-size: 0.875rem;
          line-height: 1.75;
          color: #555;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* ── Activity Detail Modal ── */
        .act-modal-bg {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: rgba(10, 10, 10, 0.65);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: act-fadein 0.2s ease;
        }
        @keyframes act-fadein {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .act-modal {
          background: #fff;
          border-radius: 20px;
          width: 100%;
          max-width: 560px;
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(0,0,0,0.28);
          animation: act-modal-up 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes act-modal-up {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .act-modal-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          background: #0a0a0a;
          overflow: hidden;
        }

        .act-modal-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .act-modal-close {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.92);
          border: none;
          cursor: pointer;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0a0a0a;
          transition: background 0.15s, transform 0.15s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.18);
          line-height: 1;
        }
        .act-modal-close:hover {
          background: #fff;
          transform: scale(1.08);
        }

        .act-modal-body {
          padding: 1.5rem 1.6rem 1.8rem;
        }

        .act-modal-desc {
          font-size: 0.925rem;
          line-height: 1.8;
          color: #444;
          margin: 0;
        }

        .act-modal-empty {
          color: #9ca3af;
          font-style: italic;
          font-size: 0.875rem;
        }

        /* ───── COMMUNITY SECTION ───── */

        .community-root {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #eef0f8;
          border-radius: 20px;
          box-sizing: border-box;
          position: relative;
          padding: 64px 24px;
          text-align: center;
          overflow: hidden;
          margin-top: 56px;
          margin-bottom: 72px;
        }

        .community-title {
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          color: #0a0a0a;
          margin: 0 0 12px;
          position: relative;
          z-index: 1;
        }

        .community-subtitle {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #555;
          margin: 0 auto 32px;
          max-width: 440px;
          position: relative;
          z-index: 1;
        }

        .community-center-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 260px;
        }

        .community-center-avatar {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 8px 32px rgba(13,27,75,0.18);
          position: relative;
          z-index: 2;
        }

        .community-avatar {
          position: absolute;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 4px 16px rgba(0,0,0,0.10);
          z-index: 2;
        }

        .av-1 { top: 8%;  left: 18%; }
        .av-2 { top: 40%; left: 6%;  }
        .av-3 { bottom: 4%; left: 22%; }
        .av-4 { top: 8%;  right: 18%; }
        .av-5 { top: 40%; right: 6%;  }
        .av-6 { bottom: 4%; right: 22%; }

        .community-join-btn {
          display: inline-block;
          padding: 14px 56px;
          background: #0d2b8e;
          color: #fff;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 700;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.15s ease;
          letter-spacing: 0.01em;
          position: relative;
          z-index: 1;
          margin-top: 8px;
        }

        .community-join-btn:hover {
          background: #1a3fc4;
          transform: translateY(-2px);
        }

        /* ── Responsive: tablet ── */
        @media (max-width: 768px) {
          .act-row-top { grid-template-columns: repeat(2, 1fr); }
          .act-row-top .act-card:last-child { grid-column: 1 / -1; aspect-ratio: 16/9; }
          .act-root { padding-top: 40px; }
          .community-root { padding: 48px 24px 56px; margin-top: 40px; margin-bottom: 56px; }
          .community-avatar { width: 56px; height: 56px; }
        }

        /* ── Responsive: mobile ── */
        @media (max-width: 480px) {
          .act-row-top, .act-row-bottom { grid-template-columns: 1fr; }
          .act-row-top .act-card:last-child { grid-column: auto; aspect-ratio: 4/3; }
          .act-card, .act-row-bottom .act-card { aspect-ratio: 4/3; }
          .act-grid-wrapper { gap: 8px; }
          .community-root { padding: 40px 24px 48px; }
          .community-avatar { width: 48px; height: 48px; }
          .av-1 { top: 5%;  left: 4%; }
          .av-2 { top: 38%; left: 2%; }
          .av-3 { bottom: 5%; left: 4%; }
          .av-4 { top: 5%;  right: 4%; }
          .av-5 { top: 38%; right: 2%; }
          .av-6 { bottom: 5%; right: 4%; }
        }
      `}),i.jsxs("div",{className:"act-outer",children:[i.jsxs("section",{id:"activity",className:"act-root",style:{scrollMarginTop:"80px"},children:[i.jsx("h2",{className:"act-heading",children:e}),r?i.jsxs("div",{className:"act-grid-wrapper",children:[i.jsx("div",{className:"act-row-top",children:[0,1,2].map(p=>i.jsx("div",{className:"act-skeleton"},p))}),i.jsx("div",{className:"act-row-bottom",children:[0,1].map(p=>i.jsx("div",{className:"act-skeleton"},p))})]}):t.length>0?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"act-grid-wrapper",children:[u.length>0&&i.jsx("div",{className:"act-row-top",children:u.map(p=>i.jsx(id,{item:p,onClick:()=>n(p)},p.image_type))}),h.length>0&&i.jsx("div",{className:"act-row-bottom",children:h.map(p=>i.jsx(id,{item:p,onClick:()=>n(p)},p.image_type))})]}),i.jsx("p",{className:"act-caption",children:"The Hainick team has traveled across Indonesia to Bali, Jogjakarta, Surabaya, Medan, and Balikpapan, connecting with talented creators in each city. These journeys have allowed us to discover unique local talents and showcase the incredible creative potential throughout our diverse archipelago. We're excited to demonstrate to our partners and clients that compelling campaigns can emerge from every corner of Indonesia. Thank you to all the amazing communities who welcomed us!"})]}):null]}),i.jsxs("div",{className:"community-root",children:[i.jsx("h2",{className:"community-title",children:"Join our community!"}),i.jsxs("p",{className:"community-subtitle",children:["Grow together in a healthy KOL management — not just chasing virality.",i.jsx("br",{}),"Get the opportunity to collaborate with brands and events."]}),i.jsxs("div",{className:"community-center-wrap",children:[i.jsx("img",{className:"community-avatar av-1",src:Ga[0].src,alt:"creator"}),i.jsx("img",{className:"community-avatar av-2",src:Ga[1].src,alt:"creator"}),i.jsx("img",{className:"community-avatar av-3",src:Ga[2].src,alt:"creator"}),i.jsx("img",{className:"community-center-avatar",src:Ob,alt:"community"}),i.jsx("img",{className:"community-avatar av-4",src:Ga[3].src,alt:"creator"}),i.jsx("img",{className:"community-avatar av-5",src:Ga[4].src,alt:"creator"}),i.jsx("img",{className:"community-avatar av-6",src:Ga[5].src,alt:"creator"})]}),i.jsx("a",{className:"community-join-btn",href:Lb,target:"_blank",rel:"noopener noreferrer",children:"Join"})]})]}),l&&i.jsx("div",{className:"act-modal-bg",onClick:p=>p.target===p.currentTarget&&n(null),children:i.jsxs("div",{className:"act-modal",children:[i.jsxs("div",{className:"act-modal-img-wrap",children:[i.jsx("img",{src:`http://localhost:8000${l.image_url}`,alt:l.image_type}),i.jsx("button",{className:"act-modal-close",onClick:()=>n(null),children:"✕"})]}),i.jsx("div",{className:"act-modal-body",children:i.jsx("p",{className:"act-modal-desc",children:l.description?l.description:i.jsx("span",{className:"act-modal-empty",children:"Deskripsi belum tersedia."})})})]})})]})}function id({item:e,onClick:t}){return i.jsxs("div",{className:"act-card",onClick:t,role:"button",tabIndex:0,onKeyDown:a=>(a.key==="Enter"||a.key===" ")&&t(),children:[i.jsx("img",{src:`http://localhost:8000${e.image_url}`,alt:e.image_type,loading:"lazy"}),i.jsx("div",{className:"act-card-overlay",children:i.jsx("span",{className:"act-card-hint",children:"Lihat detail"})})]})}const Xp=e=>e?e.startsWith("http")?e:`${Ge}${e}`:null;function Yb({logos:e}){const t=e.length>0?[...e,...e]:[];if(e.length===0)return null;const a=Math.max(12,e.length*3);return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        .marquee-outer {
          overflow: hidden;
          width: 100%;
          position: relative;
        }
        /* Fade mask kiri-kanan */
        .marquee-outer::before,
        .marquee-outer::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-outer::before {
          left: 0;
          background: linear-gradient(to right, #ffffff, transparent);
        }
        .marquee-outer::after {
          right: 0;
          background: linear-gradient(to left, #ffffff, transparent);
        }
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 0;
          width: max-content;
          animation: marqueeScroll var(--marquee-dur, 20s) linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-item {
          padding: 0 48px;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .marquee-logo {
          height: 36px;
          max-width: 120px;
          object-fit: contain;
          filter: grayscale(1) opacity(0.55);
          transition: filter 0.25s;
          display: block;
        }
        .marquee-logo:hover {
          filter: grayscale(0) opacity(1);
        }
        @media (max-width: 768px) {
          .marquee-logo { height: 28px; max-width: 90px; }
          .marquee-item { padding: 0 32px; }
          .marquee-outer::before, .marquee-outer::after { width: 48px; }
        }
        @media (max-width: 480px) {
          .marquee-logo { height: 24px; max-width: 76px; }
          .marquee-item { padding: 0 24px; }
        }
      `}),i.jsx("div",{className:"marquee-outer",children:i.jsx("div",{className:"marquee-track",style:{"--marquee-dur":`${a}s`},children:t.map((l,n)=>{const r=Xp(l.image_url);return r?i.jsx("div",{className:"marquee-item",children:i.jsx("img",{src:r,alt:`Client logo ${l.id}`,className:"marquee-logo"})},`${l.id}-${n}`):null})})})]})}function Gb({testimonials:e}){const t=f.useRef(null),[a,l]=f.useState(4),[n,r]=f.useState(0),[o,s]=f.useState(!1),c=f.useRef(0),u=f.useRef(0),h=f.useRef(null),p=e.length,m=Math.max(0,p-a);f.useEffect(()=>{const v=()=>{const S=window.innerWidth;S>=1024?l(4):S>=768?l(3):S>=480?l(2):l(1)};return v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[]),f.useEffect(()=>{r(v=>Math.min(v,Math.max(0,p-a)))},[a,p]),f.useEffect(()=>{if(!(p<=a))return h.current=setInterval(()=>{r(v=>v>=m?0:v+1)},3500),()=>clearInterval(h.current)},[p,a,m]);const x=()=>{clearInterval(h.current),p>a&&(h.current=setInterval(()=>{r(v=>v>=m?0:v+1)},3500))},y=v=>{const S=Math.max(0,Math.min(v,m));r(S),x()},j=v=>{s(!0),c.current=v,u.current=0,clearInterval(h.current)},w=v=>{o&&(u.current=v-c.current)},d=()=>{if(!o)return;s(!1);const v=60;u.current<-v?y(n+1):u.current>v?y(n-1):x()},g=100/a,b=-(n*g);return i.jsxs("div",{style:{position:"relative",overflow:"hidden",width:"100%",userSelect:"none"},children:[i.jsx("div",{ref:t,style:{display:"flex",transition:o?"none":"transform 0.45s cubic-bezier(0.4,0,0.2,1)",transform:`translateX(${b}%)`,cursor:o?"grabbing":"grab",willChange:"transform"},onMouseDown:v=>j(v.clientX),onMouseMove:v=>w(v.clientX),onMouseUp:d,onMouseLeave:d,onTouchStart:v=>j(v.touches[0].clientX),onTouchMove:v=>w(v.touches[0].clientX),onTouchEnd:d,children:e.map(v=>{const S=Xp(v.profile_image);return i.jsx("div",{style:{minWidth:`${g}%`,boxSizing:"border-box",padding:"0 10px"},children:i.jsxs("div",{className:"testimony-card",children:[S?i.jsx("img",{src:S,alt:v.name,className:"card-avatar"}):i.jsx("div",{className:"card-avatar-placeholder",children:(v.name||"?").charAt(0).toUpperCase()}),i.jsxs("p",{className:"card-quote",children:['"',v.testimonial,'"']}),i.jsxs("p",{className:"card-name",children:["— ",v.name]})]})},v.id)})}),p>a&&i.jsx("div",{style:{display:"flex",justifyContent:"center",gap:8,marginTop:24},children:Array.from({length:m+1}).map((v,S)=>i.jsx("button",{onClick:()=>y(S),"aria-label":`Slide ${S+1}`,style:{width:n===S?24:8,height:8,borderRadius:4,border:"none",background:n===S?"#1a2744":"#d1d5db",cursor:"pointer",padding:0,transition:"all 0.3s ease"}},S))}),p>a&&i.jsxs(i.Fragment,{children:[i.jsx("button",{onClick:()=>y(n-1),disabled:n===0,"aria-label":"Previous",style:{position:"absolute",top:"50%",left:0,transform:"translateY(-60%)",width:36,height:36,borderRadius:"50%",border:"1.5px solid #e5e7eb",background:"#fff",cursor:n===0?"not-allowed":"pointer",opacity:n===0?.35:1,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,color:"#1a2744",boxShadow:"0 2px 8px rgba(0,0,0,0.08)",transition:"opacity 0.2s",zIndex:2},children:"‹"}),i.jsx("button",{onClick:()=>y(n+1),disabled:n>=m,"aria-label":"Next",style:{position:"absolute",top:"50%",right:0,transform:"translateY(-60%)",width:36,height:36,borderRadius:"50%",border:"1.5px solid #e5e7eb",background:"#fff",cursor:n>=m?"not-allowed":"pointer",opacity:n>=m?.35:1,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,color:"#1a2744",boxShadow:"0 2px 8px rgba(0,0,0,0.08)",transition:"opacity 0.2s",zIndex:2},children:"›"})]})]})}function qb(){const[e,t]=f.useState([]),[a,l]=f.useState([]),[n,r]=f.useState(!0),o=async()=>{try{const u=await(await fetch(`${D}/testimonials`)).json();t(Array.isArray(u)?u:[])}catch(c){console.error("Gagal memuat testimoni publik:",c)}finally{r(!1)}},s=async()=>{try{const u=await(await fetch(`${D}/load-logo`,{method:"POST"})).json();l(Array.isArray(u)?u:[])}catch(c){console.error("Gagal memuat logo publik:",c)}};return f.useEffect(()=>{o(),s()},[]),i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap');
        .testimony-section {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #ffffff;
          padding: 64px 40px 56px;
          box-sizing: border-box;
        }
        .testimony-header { text-align: center; margin-bottom: 48px; }
        .testimony-title { font-size: clamp(1.4rem, 3vw, 2rem); font-weight: 800; letter-spacing: -0.03em; color: #0a0a0a; margin: 0 0 10px; }
        .testimony-subtitle { font-size: 14px; color: #6b7280; font-weight: 400; margin: 0; }
        .testimony-card {
          background: #fff;
          border: 1px solid #e4e9f7;
          border-radius: 18px;
          padding: 24px 20px 20px;
          box-shadow: 0 4px 20px rgba(13,27,75,0.07);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 14px;
          height: 100%;
          transition: box-shadow 0.2s;
        }
        .testimony-card:hover { box-shadow: 0 8px 32px rgba(13,27,75,0.12); }
        .card-avatar { width: 56px; height: 56px; border-radius: 50%; object-fit: cover; border: 2.5px solid #e4e9f7; flex-shrink: 0; }
        .card-avatar-placeholder { width: 56px; height: 56px; border-radius: 50%; background: #f0f3fa; display: flex; align-items: center; justify-content: center; color: #b0bbd4; font-size: 22px; font-weight: 800; flex-shrink: 0; }
        .card-quote { font-size: 13px; color: #3d4f72; font-style: italic; line-height: 1.7; flex: 1; margin: 0; }
        .card-name { font-size: 13px; font-weight: 700; color: #0d1b4b; margin: 0; }
        .clients-strip {
          background: #ffffff;
          padding: 32px 0;
          box-sizing: border-box;
          font-family: 'Plus Jakarta Sans', sans-serif;
          overflow: hidden;
        }
        .section-skeleton { animation: skelPulse 1.4s infinite; background: #f3f4f6; border-radius: 12px; }
        @keyframes skelPulse { 0%,100% { opacity:1 } 50% { opacity:0.4 } }

        @media (max-width: 768px) {
          .testimony-section { padding: 40px 24px 40px; }
          .testimony-header { margin-bottom: 32px; }
          .clients-strip { padding: 28px 0; }
        }
        @media (max-width: 480px) {
          .testimony-section { padding: 32px 14px 32px; }
          .clients-strip { padding: 20px 0; }
        }
      `}),i.jsxs("section",{id:"testimony",className:"testimony-section",style:{scrollMarginTop:"80px"},children:[i.jsxs("div",{className:"testimony-header",children:[i.jsx("h2",{className:"testimony-title",children:"Testimony Our Talent"}),i.jsx("p",{className:"testimony-subtitle",children:"Hainick is an excellent talent agency that provides the best service."})]}),n?i.jsx("div",{style:{display:"flex",gap:20},children:[1,2,3,4].map(c=>i.jsx("div",{style:{flex:"1 0 0",minWidth:0},children:i.jsxs("div",{className:"testimony-card",children:[i.jsx("div",{className:"section-skeleton",style:{width:56,height:56,borderRadius:"50%"}}),i.jsx("div",{className:"section-skeleton",style:{height:14,width:"90%"}}),i.jsx("div",{className:"section-skeleton",style:{height:14,width:"75%"}}),i.jsx("div",{className:"section-skeleton",style:{height:12,width:"40%",marginTop:"auto"}})]})},c))}):e.length===0?i.jsx("div",{style:{textAlign:"center",color:"#9ca3af",padding:"2rem"},children:"Belum ada testimoni yang tersedia."}):i.jsx(Gb,{testimonials:e})]}),a.length>0&&i.jsx("div",{className:"clients-strip",children:i.jsx(Yb,{logos:a})})]})}const Xb="/build/assets/instagram-DQOGCOQU.png",Vb="/build/assets/mail-CoTVKf5L.png",Jb="/build/assets/telephone-CKTxurO6.png",Qb=()=>i.jsx("img",{src:Xb,alt:"Instagram",width:20,height:20,style:{objectFit:"contain",display:"block"}}),Kb=()=>i.jsx("img",{src:Vb,alt:"Email",width:20,height:20,style:{objectFit:"contain",display:"block"}}),Zb=()=>i.jsx("img",{src:Jb,alt:"Telephone",width:20,height:20,style:{objectFit:"contain",display:"block"}});function $b({contact:e}){if(!e)return null;const t=[e.phone_number1,e.phone_number2].filter(Boolean);return i.jsxs("div",{className:"contact-panel",children:[i.jsx("span",{className:"panel-brand",children:i.jsx("img",{src:Un,alt:"hainick logo"})}),i.jsxs("div",{className:"panel-rows",children:[e.instagram&&i.jsxs("div",{className:"panel-row",children:[i.jsx("span",{className:"panel-icon",children:i.jsx(Qb,{})}),i.jsx("span",{className:"panel-text",children:e.instagram})]}),e.gmail&&i.jsxs("div",{className:"panel-row",children:[i.jsx("span",{className:"panel-icon",children:i.jsx(Kb,{})}),i.jsx("span",{className:"panel-text",children:e.gmail})]}),t.length>0&&i.jsxs("div",{className:"panel-row panel-row-phone",children:[i.jsx("span",{className:"panel-icon panel-icon-top",children:i.jsx(Zb,{})}),i.jsx("div",{className:"panel-phones",children:t.map((a,l)=>i.jsx("span",{className:"panel-text panel-phone-line",children:i.jsx("strong",{children:a})},l))})]})]})]})}function Fb(){return i.jsxs("div",{className:"contact-skeleton",children:[i.jsx("div",{className:"skeleton-line short",style:{height:"22px",marginBottom:"4px"}}),i.jsx("div",{className:"skeleton-line mid"}),i.jsx("div",{className:"skeleton-line long"}),i.jsx("div",{className:"skeleton-line mid"})]})}function Wb(){const[e,t]=f.useState({first_name:"",last_name:"",email:"",message:""}),[a,l]=f.useState(null),[n,r]=f.useState(""),o=u=>t(h=>({...h,[u.target.name]:u.target.value})),s=async u=>{u.preventDefault(),l("loading"),r("");try{const h=await fetch(`${D}/create-contact-form`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:e.first_name.trim(),last_name:e.last_name.trim(),email:e.email.trim(),message:e.message.trim()})}),p=await h.json();if(!h.ok){r(p.error||"Gagal mengirim pesan."),l("error"),setTimeout(()=>l(null),4e3);return}l("success"),t({firstName:"",lastName:"",email:"",message:""}),setTimeout(()=>l(null),4e3)}catch{r("Tidak dapat terhubung ke server."),l("error"),setTimeout(()=>l(null),4e3)}},c=a==="loading";return i.jsxs("div",{className:"contact-form-wrap",children:[i.jsx("h3",{className:"form-heading",children:"Let's get in touch"}),i.jsxs("form",{className:"contact-form",onSubmit:s,children:[i.jsxs("div",{className:"form-row",children:[i.jsx("input",{className:"form-input",type:"text",name:"first_name",placeholder:"First name",value:e.first_name,onChange:o,required:!0,disabled:c}),i.jsx("input",{className:"form-input",type:"text",name:"last_name",placeholder:"Last name",value:e.last_name,onChange:o,required:!0,disabled:c})]}),i.jsx("input",{className:"form-input",type:"email",name:"email",placeholder:"Email",value:e.email,onChange:o,required:!0,disabled:c}),i.jsx("textarea",{className:"form-input form-textarea",name:"message",placeholder:"Message",value:e.message,onChange:o,rows:5,required:!0,disabled:c}),i.jsxs("div",{className:"form-footer",children:[i.jsx("button",{className:"submit-btn",type:"submit",disabled:c,children:c?"Sending...":"Submit"}),a==="success"&&i.jsx("span",{className:"form-status form-status-ok",children:"✓ Pesan berhasil terkirim!"}),a==="error"&&i.jsxs("span",{className:"form-status form-status-err",children:["✕ ",n]})]})]})]})}function Ib(){const[e,t]=f.useState(null),[a,l]=f.useState(!0);return f.useEffect(()=>{fetch(`${D}/contact`).then(n=>{if(!n.ok)throw new Error("Gagal fetch contacts");return n.json()}).then(n=>{const r=Array.isArray(n)?n[0]??null:n;t(r)}).catch(console.error).finally(()=>l(!1))},[]),i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .contact-section{font-family:'Plus Jakarta Sans',sans-serif;background:#fff;padding:64px 24px;box-sizing:border-box}
        .contact-section-title{text-align:center;font-size:clamp(1.4rem,3vw,2rem);font-weight:800;letter-spacing:-.03em;color:#0a0a0a;margin:0 0 52px}
        .contact-layout{display:grid;grid-template-columns:1fr 1fr;gap:48px;max-width:1000px;margin:0 auto;align-items:start}
        .form-heading{font-size:22px;font-weight:800;color:#0d1b4b;margin:0 0 28px;letter-spacing:-.02em}
        .contact-form{display:flex;flex-direction:column;gap:14px}
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
        .form-input{width:100%;padding:13px 14px;border:1.5px solid #dde3f0;border-radius:10px;font-size:13.5px;font-family:inherit;color:#0d1b4b;background:#fff;box-sizing:border-box;outline:none;transition:border-color .18s,box-shadow .18s,opacity .2s}
        .form-input::placeholder{color:#aab2c8}
        .form-input:focus{border-color:#1a3fc4;box-shadow:0 0 0 3px rgba(26,63,196,.08)}
        .form-input:disabled{opacity:.55;cursor:not-allowed}
        .form-textarea{resize:vertical;min-height:120px}
        .form-footer{display:flex;align-items:center;gap:16px;justify-content:flex-end}
        .submit-btn{padding:12px 32px;background:#0d1b4b;color:#fff;border:none;border-radius:10px;font-size:14px;font-weight:700;font-family:inherit;cursor:pointer;transition:background .2s,transform .1s,opacity .2s;letter-spacing:.2px}
        .submit-btn:hover:not(:disabled){background:#1a3fc4;transform:translateY(-1px)}
        .submit-btn:disabled{opacity:.6;cursor:not-allowed}
        .form-status{font-size:13px;font-weight:600}
        .form-status-ok{color:#16a34a}
        .form-status-err{color:#dc2626}
        .contact-panel{display:flex;flex-direction:column;gap:22px;padding:32px 28px}
        .panel-brand img{height:34px;width:auto;object-fit:contain;display:block}
        .panel-rows{display:flex;flex-direction:column;gap:16px}
        .panel-row{display:flex;align-items:center;gap:12px}
        .panel-row-phone{align-items:flex-start}
        .panel-icon{color:#0d1b4b;flex-shrink:0;line-height:0}
        .panel-icon-top{margin-top:1px}
        .panel-text{font-size:14px;color:#2d3a5e;font-weight:500;line-height:1.5}
        .panel-phones{display:flex;flex-direction:column;gap:4px}
        .panel-phone-line{display:block}
        .contact-skeleton{display:flex;flex-direction:column;gap:16px;padding:32px 28px}
        .skeleton-line{height:14px;border-radius:6px;background:linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%);background-size:200% 100%;animation:shimmer 1.4s infinite}
        .skeleton-line.short{width:40%}
        .skeleton-line.mid{width:65%}
        .skeleton-line.long{width:85%}
        @keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
        @media(max-width:768px){.contact-layout{grid-template-columns:1fr;gap:32px}.contact-section{padding:40px 16px}.contact-panel{padding:0}}
        @media(max-width:480px){.form-row{grid-template-columns:1fr;gap:14px}.contact-section{padding:32px 14px}.form-heading{font-size:18px}.form-input{padding:11px 12px;font-size:13px}.submit-btn{padding:11px 24px;font-size:13px}.panel-text{font-size:13px}.contact-section-title{margin:0 0 36px}}
      `}),i.jsxs("section",{className:"contact-section",children:[i.jsx("h2",{className:"contact-section-title",children:"Contact Us"}),i.jsxs("div",{className:"contact-layout",children:[i.jsx(Wb,{}),a?i.jsx(Fb,{}):i.jsx($b,{contact:e})]})]})]})}const Vp=[{id:1,col:0,row:0},{id:2,col:0,row:1},{id:3,col:0,row:2},{id:4,col:1,row:0},{id:5,col:1,row:1},{id:6,col:1,row:2},{id:7,col:2,row:0},{id:8,col:2,row:1},{id:9,col:3,row:0},{id:10,col:3,row:1},{id:11,col:4,row:0},{id:12,col:4,row:1},{id:13,col:5,row:0},{id:14,col:5,row:1},{id:15,col:6,row:0},{id:16,col:6,row:1},{id:17,col:6,row:2},{id:18,col:7,row:0},{id:19,col:7,row:1},{id:20,col:7,row:2}],Jp=[0,7,1,6,2,5,3,4],Pb={0:-80,1:-40,2:-80,3:-20,4:-20,5:-80,6:-40,7:-80},ev={0:.35,1:.7,2:1},tv=8,rd=Vp.reduce((e,t)=>(e[t.col]||(e[t.col]=[]),e[t.col].push(t),e),{}),av=Vp.reduce((e,t)=>{const a=Jp.indexOf(t.col);return e[t.id]=a*80+t.row*60,e},{}),lv=`
  .tc {
    width: 100%;
    aspect-ratio: 3 / 4;
    border-radius: clamp(12px, 1.6vw, 22px);
    background: #e8e5df;
    overflow: hidden;
    cursor: pointer;
    will-change: transform, opacity;
    box-shadow: 0 2px 6px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.5);
    transition:
      box-shadow .25s ease,
      transform  .25s ease,
      opacity    .25s ease;
  }
  .tc:hover {
    transform:  translateY(-3px) !important;
    opacity:    1 !important;
    box-shadow: 0 8px 24px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.5);
  }
  .tc img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: grayscale(100%);
    transition: filter .35s ease;
  }
  .tc:hover img {
    filter: grayscale(0%);
  }
`,nv=f.memo(function({imageUrl:t,cardId:a,row:l,visible:n,animDelay:r}){const o=ev[l]??1,s=f.useRef(null),c=u=>{u.propertyName==="transform"&&s.current&&(s.current.style.transition="")};return i.jsx("div",{ref:s,className:"tc",onTransitionEnd:c,style:{opacity:n?o:0,transform:n?"none":"translateY(-50px)",transition:n?`opacity   .65s cubic-bezier(.22,1,.36,1) ${r}ms,
             transform .65s cubic-bezier(.22,1,.36,1) ${r}ms,
             box-shadow .3s ease`:"none"},children:t?i.jsx("img",{src:`${Ge}${t}`,alt:`Talent ${a}`,loading:"lazy",decoding:"async"}):i.jsx("div",{style:{width:"100%",height:"100%",background:"linear-gradient(160deg,#e0ddd7 0%,#ccc9c2 100%)"}})})}),iv=f.memo(function({value:t,label:a,visible:l,delayIndex:n}){return i.jsxs("div",{style:{textAlign:"center",opacity:l?1:0,transform:l?"translateY(0)":"translateY(20px)",transition:"opacity .6s ease, transform .6s ease",transitionDelay:`${n*.12}s`},children:[i.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:800,fontSize:"clamp(2.2rem,5.5vw,4.5rem)",color:"#111",lineHeight:1,letterSpacing:"-0.03em"},children:t}),i.jsx("div",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"clamp(0.6rem,1vw,0.75rem)",color:"#666",letterSpacing:".08em",textTransform:"uppercase",marginTop:"5px",fontWeight:400},children:a})]})}),rv=f.memo(function(){return i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"100px",background:"linear-gradient(to bottom,#fff 0%,#fff 20%,rgba(255,255,255,0) 100%)",zIndex:20,pointerEvents:"none"}}),i.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"220px",background:"linear-gradient(to top,#fff 30%,rgba(255,255,255,0) 100%)",zIndex:8,pointerEvents:"none"}}),i.jsx("div",{style:{position:"absolute",top:0,left:0,bottom:0,width:"calc(max(0px,(100% - 1060px) / 2))",background:"linear-gradient(to right,#fff 40%,rgba(255,255,255,0) 100%)",zIndex:15,pointerEvents:"none"}}),i.jsx("div",{style:{position:"absolute",top:0,right:0,bottom:0,width:"calc(max(0px,(100% - 1060px) / 2))",background:"linear-gradient(to left,#fff 40%,rgba(255,255,255,0) 100%)",zIndex:15,pointerEvents:"none"}})]})});function ov(){const[e,t]=f.useState(()=>new Map),[a,l]=f.useState({creators:"25",brand:"100",projects:"+78"}),[n,r]=f.useState(()=>new Set),[o,s]=f.useState(!1),[c,u]=f.useState(!1),h=f.useRef(null),p=f.useRef(null),m=f.useRef(!1);f.useEffect(()=>{const y=document.createElement("style");return y.setAttribute("data-tc","1"),document.querySelector("[data-tc]")||(y.textContent=lv,document.head.appendChild(y)),()=>y.remove()},[]),f.useEffect(()=>{const y=new AbortController;return(async()=>{try{const j=await fetch(`${D}/creators-photocard`,{signal:y.signal});if(!j.ok)return;const w=await j.json(),d=new Map;w.forEach((g,b)=>{const v=g.id??b+1;g.image_url&&d.set(v,g.image_url)}),t(d)}catch(j){j.name!=="AbortError"&&console.error(j)}})(),(async()=>{try{const j=await fetch(`${D}/creators-photocard-statistics`,{signal:y.signal});if(!j.ok)return;const w=await j.json(),d=Array.isArray(w)?w[0]:w;d&&l({creators:d.creators??"25",brand:d.brand??"100",projects:d.projects??"+78"})}catch(j){j.name!=="AbortError"&&console.error(j)}})(),()=>y.abort()},[]),f.useEffect(()=>{const y=h.current;if(!y)return;const j=[],w=(b,v)=>{j.push(setTimeout(b,v))};function d(){if(m.current)return;m.current=!0,w(()=>u(!0),80);const b=new Map;Jp.forEach((v,S)=>{(rd[v]??[]).forEach((N,k)=>{const _=S*80+k*60,M=Math.round(_/16)*16;b.has(M)||b.set(M,[]),b.get(M).push(N.id)})}),b.forEach((v,S)=>{w(()=>{r(N=>{const k=new Set(N);return v.forEach(_=>k.add(_)),k})},S)}),w(()=>s(!0),800)}p.current=()=>j.forEach(clearTimeout);const g=new IntersectionObserver(b=>{b[0].isIntersecting&&(g.disconnect(),d())},{threshold:0,rootMargin:"50px 0px 50px 0px"});return g.observe(y),()=>{var b;g.disconnect(),(b=p.current)==null||b.call(p),m.current=!1}},[]);const x=f.useMemo(()=>[{value:a.creators,label:"TALENTS"},{value:a.brand,label:"BRANDS"},{value:a.projects,label:"PROJECTS"}],[a]);return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');"}),i.jsxs("section",{ref:h,id:"creator",style:{fontFamily:"'Plus Jakarta Sans',sans-serif",background:"#fff",width:"100%",margin:0,padding:0,boxSizing:"border-box",position:"relative",overflow:"hidden"},children:[i.jsx(rv,{}),i.jsx("div",{style:{display:"flex",alignItems:"flex-start",gap:"clamp(6px,0.9vw,12px)",width:"100%",boxSizing:"border-box",padding:"0 clamp(8px,1.5vw,20px)",paddingBottom:"200px"},children:Array.from({length:tv},(y,j)=>i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"clamp(6px,0.9vw,12px)",flex:"1 1 0%",minWidth:0,marginTop:`${Pb[j]}px`},children:(rd[j]??[]).map(w=>i.jsx(nv,{cardId:w.id,row:w.row,imageUrl:e.get(w.id)??null,visible:n.has(w.id),animDelay:av[w.id]},w.id))},j))}),i.jsxs("div",{style:{position:"absolute",bottom:"220px",left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:"1060px",padding:"0 1rem",boxSizing:"border-box",display:"flex",flexDirection:"column",alignItems:"center",zIndex:10},children:[i.jsx("p",{style:{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"clamp(0.9rem,1.8vw,1.2rem)",fontWeight:700,color:"#111",letterSpacing:"-0.01em",margin:"0 0 clamp(8px,1.5vw,14px)",whiteSpace:"nowrap",opacity:c?1:0,transform:c?"translateY(0)":"translateY(12px)",transition:"opacity .5s ease,transform .5s ease"},children:"Kreator Hainick."}),i.jsx("div",{style:{display:"flex",alignItems:"flex-start",gap:"clamp(24px,5vw,72px)"},children:x.map((y,j)=>i.jsx(iv,{value:y.value,label:y.label,visible:o,delayIndex:j},y.label))})]})]})]})}const sv=`
  .ld-root {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 28px;
    /* Fade out saat visible=false */
    transition: opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1),
                visibility 0.55s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* State: tampil */
  .ld-root.ld-show {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }

  /* State: sembunyi — fade out lalu benar-benar hilang */
  .ld-root.ld-hide {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  /* Logo */
  .ld-logo {
    width: clamp(50px, 22vw, 100px);
    height: auto;
    object-fit: contain;
    /* Muncul dari bawah dengan sedikit bounce */
    animation: ld-logo-in 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  }

  @keyframes ld-logo-in {
    from { opacity: 0; transform: translateY(18px) scale(0.92); }
    to   { opacity: 1; transform: translateY(0)    scale(1);    }
  }

  /* Bar progress tipis di bawah logo */
  .ld-bar-wrap {
    width: clamp(80px, 18vw, 120px);
    height: 2px;
    background: #e5e7eb;
    border-radius: 99px;
    overflow: hidden;
    animation: ld-logo-in 0.7s 0.1s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  }

  .ld-bar-fill {
    height: 100%;
    background: #0d2b8e;
    border-radius: 99px;
    /* Animasi bar mengisi dari 0% → 85% dalam ~1.8s,
       lalu berhenti di sana sampai halaman benar-benar siap */
    animation: ld-progress 1.8s cubic-bezier(0.1, 0.4, 0.6, 1) forwards;
  }

  @keyframes ld-progress {
    from { width: 0%;  }
    to   { width: 85%; }
  }

  /* Saat halaman sudah ready, langsung fill 100% sebelum fade-out */
  .ld-root.ld-hide .ld-bar-fill {
    width: 100% !important;
    transition: width 0.25s ease;
  }
`;function cv({visible:e,logo:t}){const a=f.useRef(null);return f.useEffect(()=>{if(document.querySelector("[data-ld]"))return;const l=document.createElement("style");return l.setAttribute("data-ld","1"),l.textContent=sv,document.head.appendChild(l),a.current=l,()=>l.remove()},[]),i.jsxs("div",{className:`ld-root ${e?"ld-show":"ld-hide"}`,children:[t&&i.jsx("img",{className:"ld-logo",src:t,alt:"Hainick",draggable:!1}),i.jsx("div",{className:"ld-bar-wrap",children:i.jsx("div",{className:"ld-bar-fill"})})]})}const uv="/build/assets/logo512-B8a4W3GC.png",dv=()=>{const[e,t]=f.useState(!1);return f.useEffect(()=>{if(document.readyState==="complete")setTimeout(()=>t(!0),600);else{const a=()=>setTimeout(()=>t(!0),600);return window.addEventListener("load",a),()=>window.removeEventListener("load",a)}},[]),i.jsxs("div",{style:{backgroundColor:"#ffffff",minHeight:"100vh",color:"#0a0a0a"},children:[i.jsx(cv,{visible:!e,logo:uv}),i.jsx(Ux,{}),i.jsxs("main",{style:{display:"flex",flexDirection:"column",gap:"0px"},children:[i.jsx(Vx,{}),i.jsx(Zx,{}),i.jsx(lb,{}),i.jsx(fb,{}),i.jsx(ov,{}),i.jsx(jb,{}),i.jsx(Eb,{}),i.jsx(Hb,{}),i.jsx(qb,{}),i.jsx(Ib,{})]}),i.jsx(qx,{})]})},fv=()=>{const e=br(),[t,a]=f.useState({username:"",password:""}),[l,n]=f.useState(""),[r,o]=f.useState(!1),[s,c]=f.useState(!1),u=p=>a({...t,[p.target.name]:p.target.value}),h=async p=>{if(p.preventDefault(),n(""),!t.username||!t.password){n("Username dan password wajib diisi.");return}o(!0);try{const m=D.replace(/\/$/,""),x=await fetch(`${m}/login`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}),y=await x.json();x.ok&&(y.success||!y.error)?(ll.login(y.token),e("/admin",{replace:!0})):n(y.error||y.message||"Login gagal.")}catch(m){console.error("Login Exception:",m),n("Tidak dapat terhubung ke server.")}finally{o(!1)}};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .login-page {
          min-height: 100vh;
          background: #f4f6fb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Plus Jakarta Sans', sans-serif;
          padding: 1.5rem;
        }

        .login-card {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 8px 40px rgba(26,39,68,0.10);
          width: 100%;
          max-width: 420px;
          padding: 2.8rem 2.4rem;
        }

        .login-logo img {
          height: 28px;
          width: auto;
          display: block;
          margin-bottom: 0.3rem;
          object-fit: contain;
        }

        .login-subtitle {
          font-size: 0.85rem;
          color: #888;
          margin-bottom: 2rem;
        }

        .login-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.45rem;
          letter-spacing: 0.01em;
        }

        .login-input-wrap {
          position: relative;
          margin-bottom: 1.2rem;
        }

        .login-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1.5px solid #e5e7eb;
          border-radius: 10px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.9rem;
          color: #111;
          background: #fafafa;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .login-input:focus {
          border-color: #1a2744;
          box-shadow: 0 0 0 3px rgba(26,39,68,0.08);
          background: #fff;
        }

        .toggle-pass {
          position: absolute;
          right: 12px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none;
          cursor: pointer;
          color: #9ca3af;
          font-size: 0.8rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          padding: 2px 4px;
        }

        .login-error {
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #dc2626;
          border-radius: 8px;
          padding: 0.65rem 0.9rem;
          font-size: 0.82rem;
          margin-bottom: 1.2rem;
        }

        .login-btn {
          width: 100%;
          background: #1a2744;
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 0.85rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          letter-spacing: 0.01em;
        }
        .login-btn:hover:not(:disabled) { background: #263660; transform: translateY(-1px); }
        .login-btn:disabled { opacity: 0.65; cursor: not-allowed; }

        @media (max-width: 480px) {
          .login-card { padding: 2rem 1.4rem; }
        }
      `}),i.jsx("div",{className:"login-page",children:i.jsxs("div",{className:"login-card",children:[i.jsx("div",{className:"login-logo",children:i.jsx("img",{src:Un,alt:"Hainick Logo"})}),i.jsx("p",{className:"login-subtitle",children:"Admin Panel — Masuk untuk melanjutkan"}),i.jsxs("form",{onSubmit:h,noValidate:!0,children:[i.jsx("label",{className:"login-label",htmlFor:"username",children:"Username"}),i.jsx("div",{className:"login-input-wrap",children:i.jsx("input",{id:"username",name:"username",type:"text",className:"login-input",placeholder:"admin",value:t.username,onChange:u,autoComplete:"username"})}),i.jsx("label",{className:"login-label",htmlFor:"password",children:"Password"}),i.jsxs("div",{className:"login-input-wrap",children:[i.jsx("input",{id:"password",name:"password",type:s?"text":"password",className:"login-input",placeholder:"••••••••",value:t.password,onChange:u,autoComplete:"current-password",style:{paddingRight:"3.5rem"}}),i.jsx("button",{type:"button",className:"toggle-pass",onClick:()=>c(!s),children:s?"Hide":"Show"})]}),l&&i.jsx("div",{className:"login-error",children:l}),i.jsx("button",{type:"submit",className:"login-btn",disabled:r,children:r?"Memverifikasi...":"Masuk"})]})]})})]})},mv=[{label:"Home",path:"/admin",icon:"⌂"},{label:"About Us",path:"/admin/about",icon:"◎"},{label:"Official Talent",path:"/admin/officialTalent",icon:"★"},{label:"Creator+",path:"/admin/creatorPlus",icon:"+"},{label:"Creator",path:"/admin/creator",icon:"✦"},{label:"Activity",path:"/admin/activity",icon:"◉"},{label:"Testimony",path:"/admin/testimony",icon:"❝"},{label:"Contact Us",path:"/admin/contact",icon:"✉"}],pv=()=>{const[e,t]=f.useState(!1),a=br(),l=()=>{ll.logout(),a("/admin/login")};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .admin-root {
          display: flex;
          min-height: 100vh;
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #f4f6fb;
        }

        /* ── SIDEBAR ── */
        .sidebar {
          width: 240px;
          min-height: 100vh;
          background: #1a2744;
          display: flex;
          flex-direction: column;
          position: fixed;
          top: 0; left: 0; bottom: 0;
          z-index: 200;
          transition: transform 0.3s ease;
        }
        .sidebar-logo {
          padding: 1.6rem 1.5rem 1.2rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .sidebar-logo img {
          height: 24px;
          width: auto;
          display: block;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }
        .sidebar-role {
          font-size: 0.72rem;
          color: #64748b;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-top: 6px;
        }

        .sidebar-nav {
          flex: 1;
          padding: 1rem 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 2px;
          overflow-y: auto;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 0.85rem;
          border-radius: 10px;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          color: #94a3b8;
          transition: background 0.18s, color 0.18s;
        }
        .sidebar-link:hover { background: rgba(255,255,255,0.07); color: #fff; }
        .sidebar-link.active { background: rgba(255,255,255,0.12); color: #fff; font-weight: 700; }
        .sidebar-link .s-icon {
          font-size: 1rem;
          width: 20px;
          text-align: center;
          flex-shrink: 0;
        }

        .sidebar-footer {
          padding: 1rem 0.75rem;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .logout-btn {
          width: 100%;
          background: rgba(239,68,68,0.12);
          color: #f87171;
          border: none;
          border-radius: 10px;
          padding: 0.65rem 0.85rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          text-align: left;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          transition: background 0.18s;
        }
        .logout-btn:hover { background: rgba(239,68,68,0.22); }

        /* Sidebar overlay (mobile) */
        .sidebar-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.45);
          z-index: 199;
        }
        .sidebar-overlay.show { display: block; }

        /* ── TOPBAR ── */
        .topbar {
          position: fixed;
          top: 0;
          left: 240px;
          right: 0;
          height: 60px;
          background: #fff;
          border-bottom: 1px solid #e9ecf0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.8rem;
          z-index: 100;
          box-shadow: 0 1px 8px rgba(26,39,68,0.05);
        }
        .topbar-left { display: flex; align-items: center; gap: 1rem; }
        .topbar-title {
          font-size: 1rem;
          font-weight: 700;
          color: #0a0a0a;
        }
        .hamburger-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          flex-direction: column;
          gap: 5px;
        }
        .hamburger-btn span {
          display: block;
          width: 22px; height: 2px;
          background: #1a2744;
          border-radius: 2px;
        }
        .topbar-admin {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .admin-avatar {
          width: 34px; height: 34px;
          background: #1a2744;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 0.78rem;
          font-weight: 700;
        }
        .admin-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: #374151;
        }

        /* ── MAIN CONTENT ── */
        .admin-main {
          margin-left: 240px;
          margin-top: 60px;
          padding: 2rem;
          min-height: calc(100vh - 60px);
          width: calc(100% - 240px);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1023px) {
          .sidebar {
            transform: translateX(-100%);
          }
          .sidebar.open {
            transform: translateX(0);
          }
          .topbar {
            left: 0;
          }
          .hamburger-btn {
            display: flex;
          }
          .admin-main {
            margin-left: 0;
            width: 100%;
            padding: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .admin-main {
            padding: 1rem;
          }
          .topbar {
            padding: 0 1rem;
          }
          .admin-name { display: none; }
        }
      `}),i.jsxs("div",{className:"admin-root",children:[i.jsx("div",{className:`sidebar-overlay${e?" show":""}`,onClick:()=>t(!1)}),i.jsxs("aside",{className:`sidebar${e?" open":""}`,children:[i.jsxs("div",{className:"sidebar-logo",children:[i.jsx("img",{src:Un,alt:"Hainick Logo"}),i.jsx("div",{className:"sidebar-role",children:"Admin Panel"})]}),i.jsx("nav",{className:"sidebar-nav",children:mv.map(n=>i.jsxs(Bp,{to:n.path,end:n.path==="/admin",className:({isActive:r})=>`sidebar-link${r?" active":""}`,onClick:()=>t(!1),children:[i.jsx("span",{className:"s-icon",children:n.icon}),n.label]},n.path))}),i.jsx("div",{className:"sidebar-footer",children:i.jsxs("button",{className:"logout-btn",onClick:l,children:[i.jsx("span",{children:"⎋"})," Logout"]})})]}),i.jsxs("header",{className:"topbar",children:[i.jsxs("div",{className:"topbar-left",children:[i.jsxs("button",{className:"hamburger-btn",onClick:()=>t(!e),"aria-label":"Toggle sidebar",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]}),i.jsx("span",{className:"topbar-title",children:"Dashboard"})]}),i.jsxs("div",{className:"topbar-admin",children:[i.jsx("div",{className:"admin-avatar",children:"AD"}),i.jsx("span",{className:"admin-name",children:"Admin"})]})]}),i.jsx("main",{className:"admin-main",children:i.jsx(Op,{})})]})]})},hv=()=>{const[e,t]=f.useState(null),[a,l]=f.useState(!0),[n,r]=f.useState(!1),[o,s]=f.useState(null),c=f.useRef(),u=()=>{l(!0),fetch(`${D}/hainick-assets`).then(p=>p.json()).then(p=>{const m=p.find(x=>x.image_type==="hero_banner");t(m!=null&&m.image_url?`${Ge}${m.image_url}`:null)}).catch(()=>s({type:"error",text:"Gagal memuat data dari server."})).finally(()=>l(!1))};f.useEffect(()=>{u()},[]);const h=async p=>{const m=p.target.files[0];if(!m)return;if(!m.type.startsWith("image/")){s({type:"error",text:"File harus berupa gambar."});return}r(!0),s(null);const x=new FormData;x.append("image_type","hero_banner"),x.append("image_url",m);try{const y=e?`${D}/update-hainick-assets/hero_banner`:`${D}/create-hainick-assets`,j="POST";e&&x.append("_method","PUT");const w=await fetch(y,{method:j,body:x});if(w.ok)s({type:"success",text:"Hero banner berhasil diperbarui!"}),u();else{const d=await w.json();s({type:"error",text:d.error||"Gagal mengunggah gambar."})}}catch{s({type:"error",text:"Tidak dapat terhubung ke server."})}finally{r(!1),p.target.value=""}};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .panel-wrap {
          font-family: 'Plus Jakarta Sans', sans-serif;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .panel-header-left { display: flex; flex-direction: column; gap: 2px; }
        .panel-page-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0a0a0a;
          letter-spacing: -0.02em;
        }
        .panel-page-sub { font-size: 0.82rem; color: #9ca3af; }

        .panel-add-btn {
          background: #1a2744;
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 0.6rem 1.2rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: background 0.2s, transform 0.15s;
        }
        .panel-add-btn:hover:not(:disabled) { background: #263660; transform: translateY(-1px); }
        .panel-add-btn:disabled { opacity: 0.55; cursor: not-allowed; }

        .panel-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #e9ecf0;
          overflow: hidden;
        }
        .panel-card-header {
          padding: 1.1rem 1.4rem;
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .panel-card-title { font-size: 0.9rem; font-weight: 700; color: #1a2744; }

        .hero-preview-wrap {
          padding: 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .hero-preview-img {
          width: 100%;
          max-height: 340px;
          object-fit: cover;
          border-radius: 12px;
          border: 1px solid #e9ecf0;
          display: block;
        }

        .hero-empty {
          width: 100%;
          height: 200px;
          border-radius: 12px;
          border: 2px dashed #e5e7eb;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          font-size: 0.88rem;
          gap: 0.4rem;
        }
        .hero-empty-icon { font-size: 2rem; }

        .hero-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .hero-meta-info { display: flex; flex-direction: column; gap: 2px; }
        .hero-meta-label { font-size: 0.75rem; color: #9ca3af; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
        .hero-meta-val { font-size: 0.85rem; color: #374151; font-weight: 500; word-break: break-all; }

        .badge-type {
          display: inline-block;
          padding: 0.2rem 0.65rem;
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 700;
          background: #dbeafe;
          color: #1d4ed8;
        }

        .alert {
          padding: 0.65rem 1rem;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 500;
          margin: 0 1.4rem 1.4rem;
        }
        .alert-success { background: #dcfce7; color: #16a34a; border: 1px solid #bbf7d0; }
        .alert-error   { background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; }

        .skeleton {
          width: 100%;
          height: 200px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
          border-radius: 12px;
        }
        @keyframes shimmer { to { background-position: -200% 0; } }

        @media (max-width: 600px) {
          .hero-preview-img { max-height: 200px; }
        }
      `}),i.jsxs("div",{className:"panel-wrap",children:[i.jsxs("div",{className:"panel-header",children:[i.jsxs("div",{className:"panel-header-left",children:[i.jsx("h1",{className:"panel-page-title",children:"⌂ Home"}),i.jsx("p",{className:"panel-page-sub",children:"Kelola hero banner landing page"})]}),i.jsx("button",{className:"panel-add-btn",onClick:()=>c.current.click(),disabled:n||a,children:n?"Mengunggah...":e?"🔄 Ganti Banner":"+ Upload Banner"}),i.jsx("input",{ref:c,type:"file",accept:"image/*",style:{display:"none"},onChange:h})]}),o&&i.jsx("div",{className:`alert ${o.type==="success"?"alert-success":"alert-error"}`,children:o.text}),i.jsxs("div",{className:"panel-card",children:[i.jsxs("div",{className:"panel-card-header",children:[i.jsx("span",{className:"panel-card-title",children:"Hero Banner"}),i.jsx("span",{className:"badge-type",children:"hero_banner"})]}),i.jsx("div",{className:"hero-preview-wrap",children:a?i.jsx("div",{className:"skeleton"}):e?i.jsxs(i.Fragment,{children:[i.jsx("img",{className:"hero-preview-img",src:e,alt:"Hero Banner Preview"}),i.jsxs("div",{className:"hero-meta",children:[i.jsxs("div",{className:"hero-meta-info",children:[i.jsx("span",{className:"hero-meta-label",children:"URL Gambar"}),i.jsx("span",{className:"hero-meta-val",children:e})]}),i.jsx("button",{className:"panel-add-btn",style:{background:"#dc2626"},onClick:()=>c.current.click(),disabled:n,children:n?"Mengunggah...":"🔄 Ganti"})]})]}):i.jsxs("div",{className:"hero-empty",children:[i.jsx("span",{className:"hero-empty-icon",children:"🖼️"}),i.jsx("span",{children:"Belum ada hero banner."}),i.jsxs("span",{children:["Klik ",i.jsx("strong",{children:"+ Upload Banner"})," untuk mengunggah."]})]})})]})]})]})},gv=()=>{const[e,t]=f.useState(null),[a,l]=f.useState(!0),[n,r]=f.useState(!1),[o,s]=f.useState(null),[c,u]=f.useState(null),[h,p]=f.useState(null),[m,x]=f.useState(null),[y,j]=f.useState(!1),w=f.useRef(null),d=async()=>{l(!0),s(null);try{const S=await fetch(`${D}/hainick-assets`);if(!S.ok)throw new Error("Gagal mengambil data dari server");const k=(await S.json()).find(_=>_.image_type==="talent_showcase");t(k?`${D}${k.image_url}`:null)}catch{s("Gagal memuat data. Pastikan server berjalan di "+D)}finally{l(!1)}};f.useEffect(()=>{d()},[]),f.useEffect(()=>{if(c){const S=setTimeout(()=>u(null),3500);return()=>clearTimeout(S)}},[c]);const g=S=>{const N=S.target.files[0];if(N){if(!N.type.startsWith("video/")){s("File harus berupa video (mp4, webm, dll.)");return}s(null),p(N),x(URL.createObjectURL(N)),j(!0)}},b=()=>{j(!1),p(null),m&&URL.revokeObjectURL(m),x(null),w.current&&(w.current.value="")},v=async()=>{if(!h)return;r(!0),s(null);const S=new FormData;S.append("image_url",h);try{const _=(await(await fetch(`${D}/hainick-assets`)).json()).find(J=>J.image_type==="talent_showcase");let M;const E="POST";if(_?(S.append("_method","PUT"),M=await fetch(`${D}/update-hainick-assets/talent_showcase`,{method:E,body:S})):(S.append("image_type","talent_showcase"),M=await fetch(`${D}/create-hainick-assets`,{method:E,body:S})),!M.ok){const J=await M.json();throw new Error(J.error||"Gagal menyimpan video")}u("✅ Video Talent Showcase berhasil diperbarui!"),b(),await d()}catch(N){s(N.message)}finally{r(!1)}};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .panel-wrap {
          font-family: 'Plus Jakarta Sans', sans-serif;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* ── Header ── */
        .panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .panel-header-left { display: flex; flex-direction: column; gap: 2px; }
        .panel-page-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0a0a0a;
          letter-spacing: -0.02em;
        }
        .panel-page-sub { font-size: 0.82rem; color: #9ca3af; }

        /* ── Stats ── */
        .panel-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 1rem;
        }
        .stat-card {
          background: #fff;
          border-radius: 14px;
          padding: 1.2rem 1.4rem;
          border: 1px solid #e9ecf0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .stat-label {
          font-size: 0.75rem;
          color: #9ca3af;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .stat-value {
          font-size: 1.8rem;
          font-weight: 800;
          color: #1a2744;
          line-height: 1;
        }
        .stat-hint { font-size: 0.75rem; color: #6b7280; }

        /* ── Card ── */
        .panel-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #e9ecf0;
          overflow: hidden;
        }
        .panel-card-header {
          padding: 1.1rem 1.4rem;
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .panel-card-title { font-size: 0.9rem; font-weight: 700; color: #1a2744; }

        /* ── Video area ── */
        .video-section { padding: 1.5rem; display: flex; flex-direction: column; gap: 1.25rem; }

        .video-preview-wrap {
          position: relative;
          width: 100%;
          max-width: 640px;
          aspect-ratio: 16/9;
          background: #f1f5f9;
          border-radius: 12px;
          overflow: hidden;
          border: 1.5px dashed #cbd5e1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .video-preview-wrap video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }
        .video-empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: #9ca3af;
        }
        .video-empty-icon { font-size: 2.5rem; }
        .video-empty-text { font-size: 0.85rem; font-weight: 500; }

        .video-meta {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-wrap: wrap;
        }
        .badge {
          display: inline-block;
          padding: 0.2rem 0.65rem;
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 700;
        }
        .badge-active { background: #dcfce7; color: #16a34a; }
        .badge-empty  { background: #f3f4f6; color: #6b7280; }

        .video-filename {
          font-size: 0.78rem;
          color: #6b7280;
          word-break: break-all;
        }

        /* ── Buttons ── */
        .btn-primary {
          background: #1a2744;
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 0.6rem 1.2rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-primary:hover:not(:disabled) { background: #263660; transform: translateY(-1px); }
        .btn-primary:disabled { opacity: 0.55; cursor: not-allowed; }

        .btn-outline {
          background: none;
          border: 1.5px solid #e5e7eb;
          border-radius: 10px;
          padding: 0.55rem 1.1rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 0.875rem;
          color: #374151;
          cursor: pointer;
          transition: border-color 0.18s, color 0.18s;
        }
        .btn-outline:hover { border-color: #1a2744; color: #1a2744; }

        /* ── Alerts ── */
        .alert {
          padding: 0.75rem 1rem;
          border-radius: 10px;
          font-size: 0.84rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .alert-error   { background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; }
        .alert-success { background: #f0fdf4; color: #16a34a; border: 1px solid #bbf7d0; }

        /* ── Loading skeleton ── */
        .skeleton {
          border-radius: 12px;
          background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
        }
        @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

        /* ── Modal ── */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10,10,10,0.55);
          backdrop-filter: blur(3px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .modal-box {
          background: #fff;
          border-radius: 18px;
          width: 100%;
          max-width: 520px;
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          box-shadow: 0 20px 60px rgba(0,0,0,0.18);
          animation: modalIn 0.22s ease;
        }
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .modal-title { font-size: 1rem; font-weight: 800; color: #0a0a0a; }
        .modal-sub   { font-size: 0.8rem; color: #9ca3af; margin-top: 2px; }
        .modal-preview {
          width: 100%;
          aspect-ratio: 16/9;
          border-radius: 10px;
          overflow: hidden;
          background: #0a0a0a;
        }
        .modal-preview video { width: 100%; height: 100%; object-fit: contain; }
        .modal-preview-filename {
          font-size: 0.78rem;
          color: #6b7280;
          word-break: break-all;
        }
        .modal-actions { display: flex; gap: 0.75rem; justify-content: flex-end; flex-wrap: wrap; }

        .hidden-input { display: none; }

        @media (max-width: 600px) {
          .video-section { padding: 1rem; }
          .modal-box { padding: 1.25rem; }
        }
      `}),i.jsxs("div",{className:"panel-wrap",children:[i.jsx("div",{className:"panel-header",children:i.jsxs("div",{className:"panel-header-left",children:[i.jsx("h1",{className:"panel-page-title",children:"◎ About Us"}),i.jsx("p",{className:"panel-page-sub",children:"Kelola konten tentang Hainick Creative"})]})}),i.jsxs("div",{className:"panel-stats",children:[i.jsxs("div",{className:"stat-card",children:[i.jsx("span",{className:"stat-label",children:"Konten"}),i.jsx("span",{className:"stat-value",children:"1"}),i.jsx("span",{className:"stat-hint",children:"Talent Showcase Video"})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("span",{className:"stat-label",children:"Status"}),i.jsx("span",{className:"stat-value",style:{fontSize:"1rem",paddingTop:"0.3rem"},children:a?"—":e?i.jsx("span",{className:"badge badge-active",children:"Aktif"}):i.jsx("span",{className:"badge badge-empty",children:"Kosong"})}),i.jsx("span",{className:"stat-hint",children:"ditampilkan di landing"})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("span",{className:"stat-label",children:"Tipe"}),i.jsx("span",{className:"stat-value",style:{fontSize:"0.9rem",paddingTop:"0.35rem",color:"#6b7280"},children:"talent_showcase"}),i.jsx("span",{className:"stat-hint",children:"enum website_assets"})]})]}),o&&i.jsxs("div",{className:"alert alert-error",children:["⚠️ ",o]}),c&&i.jsx("div",{className:"alert alert-success",children:c}),i.jsxs("div",{className:"panel-card",children:[i.jsxs("div",{className:"panel-card-header",children:[i.jsx("span",{className:"panel-card-title",children:"Talent Showcase Video"}),i.jsx("button",{className:"btn-primary",onClick:()=>{var S;return(S=w.current)==null?void 0:S.click()},disabled:n||a,children:e?"🔄 Ganti Video":"＋ Upload Video"})]}),i.jsxs("div",{className:"video-section",children:[i.jsx("input",{ref:w,type:"file",accept:"video/*",className:"hidden-input",onChange:g}),a?i.jsx("div",{className:"skeleton",style:{width:"100%",maxWidth:640,aspectRatio:"16/9"}}):i.jsx("div",{className:"video-preview-wrap",children:e?i.jsx("video",{src:e,controls:!0}):i.jsxs("div",{className:"video-empty-state",children:[i.jsx("div",{className:"video-empty-icon",children:"🎬"}),i.jsx("div",{className:"video-empty-text",children:"Belum ada video diunggah"})]})}),!a&&i.jsx("div",{className:"video-meta",children:e?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"badge badge-active",children:"Aktif"}),i.jsx("span",{className:"video-filename",children:e.split("/").pop()})]}):i.jsx("span",{className:"badge badge-empty",children:"Belum ada video"})}),i.jsxs("p",{style:{fontSize:"0.78rem",color:"#9ca3af",margin:0},children:["Tabel: ",i.jsx("code",{children:"website_assets"})," · image_type:"," ",i.jsx("code",{children:"talent_showcase"})]})]})]})]}),y&&i.jsx("div",{className:"modal-overlay",onClick:S=>S.target===S.currentTarget&&b(),children:i.jsxs("div",{className:"modal-box",children:[i.jsxs("div",{children:[i.jsx("div",{className:"modal-title",children:"Konfirmasi Ganti Video"}),i.jsx("div",{className:"modal-sub",children:"Preview video baru sebelum disimpan ke server"})]}),m&&i.jsx("div",{className:"modal-preview",children:i.jsx("video",{src:m,controls:!0,autoPlay:!0,muted:!0})}),i.jsxs("div",{className:"modal-preview-filename",children:["📁 ",h==null?void 0:h.name,"  · ",h?(h.size/(1024*1024)).toFixed(2)+" MB":""]}),e&&i.jsxs("p",{style:{fontSize:"0.8rem",color:"#f59e0b",margin:0},children:["⚠️ Video lama (",i.jsx("strong",{children:e.split("/").pop()}),") akan diganti."]}),i.jsxs("div",{className:"modal-actions",children:[i.jsx("button",{className:"btn-outline",onClick:b,disabled:n,children:"Batal"}),i.jsx("button",{className:"btn-primary",onClick:v,disabled:n,children:n?"⏳ Mengupload...":"✅ Simpan Video"})]})]})})]})},od=({mode:e,talent:t,onClose:a,onSaved:l})=>{const n=e==="edit",[r,o]=f.useState({nama:"",bio:"",followers_ig:"",followers_tiktok:"",followers_twitter:"",tinggi:"",berat:"",umur:""}),[s,c]=f.useState(null),[u,h]=f.useState(t!=null&&t.image_url?`${Ge}${t.image_url}`:null),[p,m]=f.useState(n),[x,y]=f.useState(!1),[j,w]=f.useState("");f.useEffect(()=>{if(!n||!(t!=null&&t.id))return;let S=!0;return m(!0),fetch(`${D}/load-official-talent-desc/${t.id}`,{method:"GET"}).then(N=>{if(!N.ok)throw new Error("Gagal mengambil detail talent");return N.json()}).then(N=>{if(!S)return;const k=Array.isArray(N)?N[0]:N;k&&o({nama:k.nama||"",bio:k.bio||"",followers_ig:k.followers_ig??"",followers_tiktok:k.followers_tiktok??"",followers_twitter:k.followers_twitter??"",tinggi:k.tinggi??"",berat:k.berat??"",umur:k.umur??""})}).catch(N=>{S&&w(N.message)}).finally(()=>{S&&m(!1)}),()=>{S=!1}},[n,t==null?void 0:t.id]);const d=S=>{o(N=>({...N,[S.target.name]:S.target.value}))},g=S=>{const N=S.target.files[0];N&&(c(N),h(URL.createObjectURL(N)))},b=async()=>{if(!n&&!s){w("Foto talent harus diunggah.");return}y(!0),w("");try{let S=t==null?void 0:t.id;if(n){if(s){const k=new FormData;if(k.append("image_url",s),!(await fetch(`${D}/update-official-talent/${S}`,{method:"PUT",body:k})).ok)throw new Error("Gagal memperbarui foto talent")}}else{const k=new FormData;k.append("image_url",s);const _=await fetch(`${D}/create-official-talent`,{method:"POST",body:k});if(!_.ok)throw new Error("Gagal mengunggah foto talent");S=(await _.json()).id}if(!(await fetch(`${D}/update-official-talent-desc/${S}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({nama:r.nama,bio:r.bio,followers_ig:r.followers_ig||0,followers_tiktok:r.followers_tiktok||0,followers_twitter:r.followers_twitter||0,tinggi:r.tinggi||null,berat:r.berat||null,umur:r.umur||null})})).ok)throw new Error("Gagal menyimpan detail talent");l()}catch(S){w(S.message)}finally{y(!1)}},v=[{label:"Nama Lengkap",name:"nama",placeholder:"Nama lengkap talent"},{label:"Followers Instagram",name:"followers_ig",placeholder:"misal: 50000"},{label:"Followers TikTok",name:"followers_tiktok",placeholder:"misal: 120000"},{label:"Followers Twitter",name:"followers_twitter",placeholder:"misal: 8000"},{label:"Tinggi (cm)",name:"tinggi",placeholder:"misal: 180"},{label:"Berat (kg)",name:"berat",placeholder:"misal: 71"},{label:"Umur (tahun)",name:"umur",placeholder:"misal: 27"}];return i.jsx("div",{className:"otp-modal-backdrop",onClick:a,children:i.jsxs("div",{className:"otp-modal-box",onClick:S=>S.stopPropagation(),children:[i.jsxs("div",{className:"otp-modal-header",children:[i.jsx("h2",{className:"otp-modal-title",children:n?"Edit Talent":"Tambah Talent"}),i.jsx("button",{className:"otp-modal-close-btn",onClick:a,children:"✕"})]}),p?i.jsx("div",{className:"otp-prefill-loading",children:"Memuat data talent..."}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"otp-avatar-upload-wrap",children:[i.jsx("div",{className:"otp-avatar-upload-square",style:{backgroundImage:u?`url(${u})`:"none"},children:!u&&i.jsx("span",{className:"otp-avatar-placeholder",children:"📷"})}),i.jsxs("label",{className:"otp-avatar-change-btn",children:[n?"Ganti Foto":"Pilih Foto",i.jsx("input",{type:"file",accept:"image/*",hidden:!0,onChange:g})]})]}),i.jsxs("div",{className:"otp-modal-fields",children:[v.slice(0,1).map(S=>i.jsxs("div",{className:"otp-field-group",children:[i.jsx("label",{className:"otp-field-label",children:S.label}),i.jsx("input",{className:"otp-field-input",name:S.name,value:r[S.name],onChange:d,placeholder:S.placeholder})]},S.name)),i.jsxs("div",{className:"otp-field-group",children:[i.jsx("label",{className:"otp-field-label",children:"Bio"}),i.jsx("textarea",{className:"otp-field-input otp-field-textarea",name:"bio",value:r.bio,onChange:d,placeholder:"Deskripsi singkat mengenai talent",rows:3})]}),i.jsx("div",{className:"otp-field-row",children:v.slice(1,4).map(S=>i.jsxs("div",{className:"otp-field-group",children:[i.jsx("label",{className:"otp-field-label",children:S.label}),i.jsx("input",{className:"otp-field-input",name:S.name,value:r[S.name],onChange:d,placeholder:S.placeholder,inputMode:"numeric"})]},S.name))}),i.jsx("div",{className:"otp-field-row",children:v.slice(4,7).map(S=>i.jsxs("div",{className:"otp-field-group",children:[i.jsx("label",{className:"otp-field-label",children:S.label}),i.jsx("input",{className:"otp-field-input",name:S.name,value:r[S.name],onChange:d,placeholder:S.placeholder,inputMode:"numeric"})]},S.name))})]}),j&&i.jsx("p",{className:"otp-modal-error",children:j}),i.jsxs("div",{className:"otp-modal-actions",children:[i.jsx("button",{className:"otp-btn-cancel",onClick:a,disabled:x,children:"Batal"}),i.jsx("button",{className:"otp-btn-save",onClick:b,disabled:x,children:x?"Menyimpan...":n?"Simpan Perubahan":"Tambah Talent"})]})]})]})})},xv=({talent:e,desc:t,onClose:a,onDeleted:l})=>{var u;const[n,r]=f.useState(!1),[o,s]=f.useState(""),c=async()=>{r(!0),s("");try{if(!(await fetch(`${D}/delete-official-talent/${e.id}`,{method:"DELETE"})).ok)throw new Error("Gagal menghapus talent");l()}catch(h){s(h.message)}finally{r(!1)}};return i.jsx("div",{className:"otp-modal-backdrop",onClick:a,children:i.jsxs("div",{className:"otp-modal-box otp-confirm-box",onClick:h=>h.stopPropagation(),children:[i.jsx("p",{className:"otp-confirm-icon",children:"🗑️"}),i.jsx("h3",{className:"otp-confirm-title",children:"Hapus Talent?"}),i.jsxs("p",{className:"otp-confirm-desc",children:[i.jsx("strong",{children:((u=t==null?void 0:t.nama)==null?void 0:u.trim())||`Talent #${e.id}`})," ","akan dihapus permanen beserta seluruh detailnya dan tidak bisa dikembalikan."]}),o&&i.jsx("p",{className:"otp-modal-error",children:o}),i.jsxs("div",{className:"otp-modal-actions",children:[i.jsx("button",{className:"otp-btn-cancel",onClick:a,disabled:n,children:"Batal"}),i.jsx("button",{className:"otp-btn-delete",onClick:c,disabled:n,children:n?"Menghapus...":"Ya, Hapus"})]})]})})},bv=({talent:e,desc:t,index:a,onEdit:l,onDelete:n})=>{var h;const[r,o]=f.useState(!1),s=e!=null&&e.image_url?`${Ge}${e.image_url}`:null,c=!s||r,u=(h=t==null?void 0:t.nama)==null?void 0:h.trim();return i.jsxs("div",{className:"otp-card",style:{animationDelay:`${a*50}ms`},children:[i.jsx("div",{className:"otp-card-photo-wrap",children:c?i.jsx("div",{className:"otp-card-fallback",children:"🧑"}):i.jsx("img",{src:s,alt:u||"Talent",className:"otp-card-img",onError:()=>o(!0)})}),i.jsxs("div",{className:"otp-card-body",children:[i.jsx("p",{className:`otp-card-name ${u?"":"otp-card-name-empty"}`,children:u||"Belum diisi"}),t&&(t.followers_ig||t.followers_tiktok||t.followers_twitter)?i.jsxs("p",{className:"otp-card-sub",children:["IG ",t.followers_ig||0," · TT"," ",t.followers_tiktok||0," · TW"," ",t.followers_twitter||0]}):i.jsx("p",{className:"otp-card-sub otp-card-sub-empty",children:"Detail belum lengkap"})]}),i.jsxs("div",{className:"otp-card-actions",children:[i.jsx("button",{className:"otp-action-btn",onClick:()=>l(e),children:"Edit"}),i.jsx("button",{className:"otp-action-btn otp-action-del",onClick:()=>n(e),children:"Hapus"})]})]})},vv=()=>{const[e,t]=f.useState([]),[a,l]=f.useState({}),[n,r]=f.useState(!0),[o,s]=f.useState(""),[c,u]=f.useState(null),h=async()=>{r(!0);try{const j=await(await fetch(`${D}/load-official-talent`,{method:"GET"})).json(),w=Array.isArray(j)?j:[];t(w);const d=await Promise.all(w.map(async g=>{try{const v=await(await fetch(`${D}/load-official-talent-desc/${g.id}`,{method:"GET"})).json();return[g.id,Array.isArray(v)?v[0]:v]}catch{return[g.id,null]}}));l(Object.fromEntries(d))}catch(y){console.error("Gagal fetch official talent:",y)}finally{r(!1)}};f.useEffect(()=>{h()},[]);const p=()=>{u(null),h()},m=()=>{u(null),h()},x=e.filter(y=>{var w;return(((w=a[y.id])==null?void 0:w.nama)||"").toLowerCase().includes(o.toLowerCase())});return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        :root {
          --navy: #1a2744;
          --navy-light: #263660;
          --accent: #4f7cff;
          --accent-soft: #eef2ff;
          --danger: #ef4444;
          --danger-soft: #fef2f2;
          --border: #e9ecf0;
          --muted: #9ca3af;
          --text: #1e293b;
          --bg: #f4f6fb;
          --card-bg: #fff;
          --font: 'Plus Jakarta Sans', sans-serif;
          --radius: 16px;
          --shadow: 0 2px 16px rgba(26,39,68,0.07);
        }
        * { box-sizing: border-box; }

        .otp-wrap { font-family: var(--font); display: flex; flex-direction: column; gap: 1.6rem; }

        .otp-header {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 1rem;
        }
        .otp-page-title { font-size: 1.4rem; font-weight: 800; color: var(--navy); letter-spacing: -0.03em; margin: 0 0 2px; }
        .otp-page-sub { font-size: 0.8rem; color: var(--muted); margin: 0; }
        .otp-add-btn {
          background: var(--navy); color: #fff; border: none; border-radius: 10px;
          padding: 0.6rem 1.25rem; font-family: var(--font); font-weight: 700; font-size: 0.85rem;
          cursor: pointer; transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 14px rgba(26,39,68,0.2);
        }
        .otp-add-btn:hover { background: var(--navy-light); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(26,39,68,0.25); }

        .otp-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 1rem; }
        .otp-stat-card { background: var(--card-bg); border-radius: 14px; padding: 1.1rem 1.3rem; border: 1px solid var(--border); box-shadow: var(--shadow); }
        .otp-stat-label { font-size: 0.7rem; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: 0.07em; display: block; margin-bottom: 6px; }
        .otp-stat-value { font-size: 1.9rem; font-weight: 800; color: var(--navy); line-height: 1; display: block; }
        .otp-stat-hint { font-size: 0.72rem; color: var(--muted); margin-top: 4px; display: block; }

        .otp-search-row { display: flex; align-items: center; gap: 0.75rem; }
        .otp-search {
          flex: 1; max-width: 320px; padding: 0.5rem 0.95rem;
          border: 1.5px solid var(--border); border-radius: 10px;
          font-family: var(--font); font-size: 0.84rem; outline: none; background: #fff;
          transition: border-color 0.2s, box-shadow 0.2s; color: var(--text);
        }
        .otp-search:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(79,124,255,0.12); }
        .otp-count-label { font-size: 0.8rem; color: var(--muted); font-weight: 500; white-space: nowrap; }

        .otp-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; }

        .otp-card {
          background: var(--card-bg); border-radius: var(--radius); border: 1px solid var(--border);
          box-shadow: var(--shadow); overflow: hidden; display: flex; flex-direction: column;
          transition: transform 0.2s, box-shadow 0.2s; animation: otpCardIn 0.35s ease both;
        }
        .otp-card:hover { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(26,39,68,0.12); }
        @keyframes otpCardIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }

        .otp-card-photo-wrap {
          width: 100%;
          height: 220px;
          min-height: 220px;
          max-height: 220px;
          overflow: hidden;
          background: #f0f0f0;
        }
        .otp-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
        }
        .otp-card-fallback {
          width: 100%; height: 100%; background: linear-gradient(135deg, var(--navy), var(--accent));
          display: flex; align-items: center; justify-content: center; font-size: 2rem;
        }

        .otp-card-body { padding: 0.85rem 0.9rem 0.4rem; flex: 1; }
        .otp-card-name { font-size: 0.9rem; font-weight: 700; color: var(--text); margin: 0 0 4px; }
        .otp-card-name-empty { color: var(--muted); font-style: italic; font-weight: 500; }
        .otp-card-sub { font-size: 0.72rem; color: var(--muted); margin: 0; }
        .otp-card-sub-empty { font-style: italic; }

        .otp-card-actions { display: flex; gap: 0.5rem; padding: 0.7rem 0.9rem 0.9rem; }
        .otp-action-btn {
          flex: 1; background: none; border: 1.5px solid var(--border); border-radius: 8px;
          padding: 0.35rem 0; font-family: var(--font); font-size: 0.78rem; font-weight: 600;
          color: var(--text); cursor: pointer; transition: all 0.18s;
        }
        .otp-action-btn:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-soft); }
        .otp-action-del:hover { border-color: var(--danger); color: var(--danger); background: var(--danger-soft); }

        .otp-empty-state {
          grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center;
          padding: 4rem 1rem; color: var(--muted); text-align: center; gap: 0.5rem;
        }
        .otp-empty-icon { font-size: 2.5rem; }
        .otp-empty-title { font-weight: 700; color: var(--text); font-size: 1rem; margin: 0; }
        .otp-empty-sub { font-size: 0.85rem; margin: 0; }

        .otp-skeleton-card { background: #fff; border-radius: var(--radius); border: 1px solid var(--border); overflow: hidden; }
        .otp-skel { border-radius: 8px; background: linear-gradient(90deg, #f1f5f9 25%, #e9edf4 50%, #f1f5f9 75%); background-size: 200% 100%; animation: otpShimmer 1.4s infinite; }
        .otp-skel-photo { width: 100%; height: 220px; border-radius: 0; }
        @keyframes otpShimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

        /* ── Modal ── */
        .otp-modal-backdrop {
          position: fixed; inset: 0; background: rgba(10,15,30,0.55);
          display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 1rem;
          animation: otpFadeIn 0.2s ease;
        }
        @keyframes otpFadeIn { from { opacity: 0; } to { opacity: 1; } }

        .otp-modal-box {
          background: #fff; border-radius: 20px; width: 100%; max-width: 480px; max-height: 90vh;
          overflow-y: auto; padding: 1.8rem; animation: otpSlideUp 0.25s ease;
          box-shadow: 0 24px 64px rgba(10,15,30,0.2);
        }
        @keyframes otpSlideUp { from { transform: translateY(20px); opacity: 0; } to { transform: none; opacity: 1; } }

        .otp-modal-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.4rem; }
        .otp-modal-title { font-size: 1.05rem; font-weight: 800; color: var(--navy); margin: 0; }
        .otp-modal-close-btn {
          background: var(--bg); border: none; border-radius: 8px; width: 30px; height: 30px;
          cursor: pointer; font-size: 0.85rem; display: flex; align-items: center; justify-content: center;
          color: var(--muted); transition: background 0.15s;
        }
        .otp-modal-close-btn:hover { background: var(--border); }

        .otp-prefill-loading { padding: 2rem 0; text-align: center; color: var(--muted); font-size: 0.85rem; }

        .otp-avatar-upload-wrap { display: flex; flex-direction: column; align-items: center; gap: 0.6rem; margin-bottom: 1.2rem; }
        .otp-avatar-upload-square {
          width: 100px; height: 100px; border-radius: 14px; background-color: var(--accent-soft);
          background-size: cover; background-position: center top;
          display: flex; align-items: center; justify-content: center; border: 2px dashed var(--accent);
        }
        .otp-avatar-placeholder { font-size: 1.8rem; }
        .otp-avatar-change-btn {
          font-size: 0.78rem; font-weight: 600; color: var(--accent); cursor: pointer;
          padding: 4px 12px; border-radius: 8px; background: var(--accent-soft); font-family: var(--font);
          transition: background 0.2s;
        }
        .otp-avatar-change-btn:hover { background: #dde8ff; }

        .otp-modal-fields { display: flex; flex-direction: column; gap: 0.85rem; }
        .otp-field-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.6rem; }
        @media (max-width: 420px) { .otp-field-row { grid-template-columns: 1fr; } }
        .otp-field-group { display: flex; flex-direction: column; gap: 4px; }
        .otp-field-label { font-size: 0.7rem; font-weight: 700; color: #6b7280; letter-spacing: 0.03em; text-transform: uppercase; }
        .otp-field-input {
          padding: 0.55rem 0.85rem; border: 1.5px solid var(--border); border-radius: 10px;
          font-family: var(--font); font-size: 0.875rem; color: var(--text); outline: none;
          transition: border-color 0.2s, box-shadow 0.2s; width: 100%;
        }
        .otp-field-textarea { resize: vertical; min-height: 64px; font-family: var(--font); }
        .otp-field-input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(79,124,255,0.12); }

        .otp-modal-error { font-size: 0.82rem; color: var(--danger); margin: 0.8rem 0 0; font-weight: 500; }

        .otp-modal-actions { display: flex; gap: 0.6rem; margin-top: 1.4rem; }
        .otp-btn-cancel {
          flex: 1; padding: 0.65rem; border-radius: 10px; border: 1.5px solid var(--border); background: none;
          font-family: var(--font); font-size: 0.87rem; font-weight: 600; color: var(--text); cursor: pointer;
          transition: background 0.15s;
        }
        .otp-btn-cancel:hover { background: var(--bg); }
        .otp-btn-save {
          flex: 2; padding: 0.65rem; border-radius: 10px; border: none; background: var(--navy);
          font-family: var(--font); font-size: 0.87rem; font-weight: 700; color: #fff; cursor: pointer;
          transition: background 0.2s, transform 0.15s;
        }
        .otp-btn-save:hover:not(:disabled) { background: var(--navy-light); transform: translateY(-1px); }
        .otp-btn-save:disabled, .otp-btn-cancel:disabled { opacity: 0.5; cursor: not-allowed; }

        .otp-confirm-box { text-align: center; }
        .otp-confirm-icon { font-size: 2.4rem; margin: 0 0 0.5rem; }
        .otp-confirm-title { font-size: 1.05rem; font-weight: 800; color: var(--text); margin: 0 0 0.5rem; }
        .otp-confirm-desc { font-size: 0.87rem; color: var(--muted); margin: 0 0 0.5rem; line-height: 1.6; }
        .otp-btn-delete {
          flex: 2; padding: 0.65rem; border-radius: 10px; border: none; background: var(--danger);
          font-family: var(--font); font-size: 0.87rem; font-weight: 700; color: #fff; cursor: pointer;
          transition: background 0.2s;
        }
        .otp-btn-delete:hover:not(:disabled) { background: #dc2626; }
        .otp-btn-delete:disabled { opacity: 0.5; cursor: not-allowed; }

        @media (max-width: 600px) {
          .otp-grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); }
          .otp-stats { grid-template-columns: repeat(1, 1fr); }
          .otp-card-photo-wrap, .otp-skel-photo { height: 150px; min-height: 150px; max-height: 150px; }
        }
      `}),i.jsxs("div",{className:"otp-wrap",children:[i.jsxs("div",{className:"otp-header",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"otp-page-title",children:"Official Talent"}),i.jsx("p",{className:"otp-page-sub",children:"Kelola foto & detail Official Talent Hainick"})]}),i.jsx("button",{className:"otp-add-btn",onClick:()=>u({mode:"add"}),children:"+ Tambah Talent"})]}),i.jsx("div",{className:"otp-stats",children:i.jsxs("div",{className:"otp-stat-card",children:[i.jsx("span",{className:"otp-stat-label",children:"Total"}),i.jsx("span",{className:"otp-stat-value",children:e.length}),i.jsx("span",{className:"otp-stat-hint",children:e.length>10?"Publik akan menampilkan carousel geser":"talent terdaftar"})]})}),i.jsxs("div",{className:"otp-search-row",children:[i.jsx("input",{className:"otp-search",type:"search",placeholder:"Cari nama talent...",value:o,onChange:y=>s(y.target.value)}),!n&&i.jsxs("span",{className:"otp-count-label",children:[x.length," dari ",e.length," talent"]})]}),i.jsx("div",{className:"otp-grid",children:n?Array.from({length:6}).map((y,j)=>i.jsxs("div",{className:"otp-skeleton-card",children:[i.jsx("div",{className:"otp-skel otp-skel-photo"}),i.jsxs("div",{style:{padding:"0.85rem 0.9rem"},children:[i.jsx("div",{className:"otp-skel",style:{width:"60%",height:12,marginBottom:6}}),i.jsx("div",{className:"otp-skel",style:{width:"80%",height:10}})]})]},j)):x.length===0?i.jsxs("div",{className:"otp-empty-state",children:[i.jsx("span",{className:"otp-empty-icon",children:"🎬"}),i.jsx("p",{className:"otp-empty-title",children:o?"Talent tidak ditemukan":"Belum ada talent"}),i.jsx("p",{className:"otp-empty-sub",children:o?`Tidak ada hasil untuk "${o}"`:"Klik + Tambah Talent untuk mulai"})]}):x.map((y,j)=>i.jsx(bv,{talent:y,desc:a[y.id],index:j,onEdit:w=>u({mode:"edit",talent:w}),onDelete:w=>u({mode:"delete",talent:w})},y.id))})]}),(c==null?void 0:c.mode)==="add"&&i.jsx(od,{mode:"add",onClose:()=>u(null),onSaved:p}),(c==null?void 0:c.mode)==="edit"&&i.jsx(od,{mode:"edit",talent:c.talent,onClose:()=>u(null),onSaved:p}),(c==null?void 0:c.mode)==="delete"&&i.jsx(xv,{talent:c.talent,desc:a[c.talent.id],onClose:()=>u(null),onDeleted:m})]})},yv=["Actor","Host","MC","Content Creator","Model","Momfluencer"],co=e=>!e&&e!==0?"—":e>=1e6?(e/1e6).toFixed(1)+"M":e>=1e3?(e/1e3).toFixed(1)+"K":String(e),jv=()=>i.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"})}),wv=()=>i.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})}),Sv=()=>i.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),kv=({open:e})=>i.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{transition:"transform 0.2s",transform:e?"rotate(180deg)":"rotate(0deg)"},children:i.jsx("polyline",{points:"6 9 12 15 18 9"})}),Nv=({selected:e,onChange:t})=>{const[a,l]=f.useState(!1),n=f.useRef(null);f.useEffect(()=>{const s=c=>{n.current&&!n.current.contains(c.target)&&l(!1)};return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[]);const r=s=>{e.includes(s)?t(e.filter(c=>c!==s)):t([...e,s])},o=(s,c)=>{c.stopPropagation(),t(e.filter(u=>u!==s))};return i.jsxs("div",{className:"roles-dropdown-wrap",ref:n,children:[i.jsxs("div",{className:`roles-trigger ${a?"roles-trigger-open":""}`,onClick:()=>l(s=>!s),children:[i.jsx("div",{className:"roles-trigger-content",children:e.length===0?i.jsx("span",{className:"roles-placeholder",children:"Pilih roles..."}):i.jsx("div",{className:"roles-tags",children:e.map(s=>i.jsxs("span",{className:"roles-tag",children:[s,i.jsx("button",{className:"roles-tag-remove",onClick:c=>o(s,c),type:"button",children:"×"})]},s))})}),i.jsx("span",{className:"roles-chevron",children:i.jsx(kv,{open:a})})]}),a&&i.jsx("div",{className:"roles-menu",children:yv.map(s=>{const c=e.includes(s);return i.jsxs("div",{className:`roles-option ${c?"roles-option-checked":""}`,onClick:()=>r(s),children:[i.jsx("span",{className:`roles-checkbox ${c?"roles-checkbox-checked":""}`,children:c&&i.jsx("svg",{width:"10",height:"10",viewBox:"0 0 12 12",fill:"none",children:i.jsx("polyline",{points:"2,6 5,9 10,3",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),i.jsx("span",{className:"roles-option-label",children:s})]},s)})})]})},sd=({mode:e,talent:t,onClose:a,onSaved:l})=>{const n=e==="edit",r=N=>N?N.split(",").map(k=>k.trim()).filter(Boolean):[],[o,s]=f.useState({name:(t==null?void 0:t.name)||"",followers_instagram:(t==null?void 0:t.followers_instagram)||"",url_instagram:(t==null?void 0:t.url_instagram)||"",followers_tiktok:(t==null?void 0:t.followers_tiktok)||"",url_tiktok:(t==null?void 0:t.url_tiktok)||"",followers_x:(t==null?void 0:t.followers_x)||"",url_x:(t==null?void 0:t.url_x)||""}),[c,u]=f.useState(r(t==null?void 0:t.roles)),[h,p]=f.useState(null),[m,x]=f.useState(t!=null&&t.profile_image?`${Ge}${t.profile_image}`:null),[y,j]=f.useState(!1),[w,d]=f.useState(""),g=N=>{s(k=>({...k,[N.target.name]:N.target.value}))},b=N=>{const k=N.target.files[0];k&&(p(k),x(URL.createObjectURL(k)))},v=async()=>{if(!o.name.trim()){d("Nama harus diisi.");return}j(!0),d("");const N=new FormData;N.append("name",o.name),N.append("followers_instagram",o.followers_instagram||0),N.append("url_instagram",o.url_instagram||""),N.append("followers_tiktok",o.followers_tiktok||0),N.append("url_tiktok",o.url_tiktok||""),N.append("followers_x",o.followers_x||0),N.append("url_x",o.url_x||""),N.append("roles",c.join(", ")),h&&N.append("profile_image",h);try{const k=n?`${D}/update-creators/${t.id}`:`${D}/create-creators`;if(!(await fetch(k,{method:n?"PUT":"POST",body:N})).ok)throw new Error("Gagal menyimpan data");l()}catch(k){d(k.message)}finally{j(!1)}},S=[{label:"Nama",name:"name",placeholder:"Nama lengkap talent"},{label:"Followers Instagram",name:"followers_instagram",placeholder:"misal: 50000"},{label:"URL Instagram",name:"url_instagram",placeholder:"https://instagram.com/username"},{label:"Followers TikTok",name:"followers_tiktok",placeholder:"misal: 120000"},{label:"URL TikTok",name:"url_tiktok",placeholder:"https://tiktok.com/@username"},{label:"Followers X",name:"followers_x",placeholder:"misal: 8000"},{label:"URL X",name:"url_x",placeholder:"https://x.com/username"}];return i.jsx("div",{className:"modal-backdrop",onClick:a,children:i.jsxs("div",{className:"modal-box",onClick:N=>N.stopPropagation(),children:[i.jsxs("div",{className:"modal-header",children:[i.jsx("h2",{className:"modal-title",children:n?"Edit Talent":"Tambah Talent"}),i.jsx("button",{className:"modal-close-btn",onClick:a,children:"✕"})]}),i.jsxs("div",{className:"avatar-upload-wrap",children:[i.jsx("div",{className:"avatar-upload-circle",style:{backgroundImage:m?`url(${m})`:"none"},children:!m&&i.jsx("span",{className:"avatar-placeholder",children:"📷"})}),i.jsxs("label",{className:"avatar-change-btn",children:["Pilih Foto",i.jsx("input",{type:"file",accept:"image/*",hidden:!0,onChange:b})]})]}),i.jsxs("div",{className:"modal-fields",children:[S.map(N=>i.jsxs("div",{className:"field-group",children:[i.jsx("label",{className:"field-label",children:N.label}),i.jsx("input",{className:"field-input",name:N.name,value:o[N.name],onChange:g,placeholder:N.placeholder})]},N.name)),i.jsxs("div",{className:"field-group",children:[i.jsx("label",{className:"field-label",children:"Roles"}),i.jsx(Nv,{selected:c,onChange:u}),c.length===0&&i.jsx("span",{className:"field-hint",children:"Pilih satu atau lebih roles"})]})]}),w&&i.jsx("p",{className:"modal-error",children:w}),i.jsxs("div",{className:"modal-actions",children:[i.jsx("button",{className:"btn-cancel",onClick:a,disabled:y,children:"Batal"}),i.jsx("button",{className:"btn-save",onClick:v,disabled:y,children:y?"Menyimpan...":n?"Simpan Perubahan":"Tambah Talent"})]})]})})},zv=({talent:e,onClose:t,onDeleted:a})=>{const[l,n]=f.useState(!1),r=async()=>{n(!0);try{await fetch(`${D}/delete-creators/${e.id}`,{method:"DELETE"}),a()}finally{n(!1)}};return i.jsx("div",{className:"modal-backdrop",onClick:t,children:i.jsxs("div",{className:"modal-box confirm-box",onClick:o=>o.stopPropagation(),children:[i.jsx("p",{className:"confirm-icon",children:"🗑️"}),i.jsx("h3",{className:"confirm-title",children:"Hapus Talent?"}),i.jsxs("p",{className:"confirm-desc",children:[i.jsx("strong",{children:e.name})," akan dihapus permanen dan tidak bisa dikembalikan."]}),i.jsxs("div",{className:"modal-actions",children:[i.jsx("button",{className:"btn-cancel",onClick:t,disabled:l,children:"Batal"}),i.jsx("button",{className:"btn-delete",onClick:r,disabled:l,children:l?"Menghapus...":"Ya, Hapus"})]})]})})},Tv=({talent:e,index:t,onEdit:a,onDelete:l})=>{var o,s;const n=e.roles?e.roles.split(",").map(c=>c.trim()).filter(Boolean):[],r=e.profile_image?`${Ge}${e.profile_image}`:null;return i.jsxs("div",{className:"t-card",style:{animationDelay:`${t*60}ms`},children:[i.jsx("div",{className:"t-card-avatar",children:r?i.jsx("img",{src:r,alt:e.name,className:"t-card-img"}):i.jsx("div",{className:"t-card-img-fallback",children:((s=(o=e.name)==null?void 0:o[0])==null?void 0:s.toUpperCase())||"?"})}),i.jsxs("div",{className:"t-card-body",children:[i.jsx("p",{className:"t-card-name",children:e.name}),n.length>0&&i.jsx("div",{className:"t-card-roles",children:n.map(c=>i.jsx("span",{className:"t-role-badge",children:c},c))}),i.jsxs("div",{className:"t-card-stats",children:[i.jsxs("div",{className:"t-stat",children:[i.jsx("span",{className:"t-stat-icon t-stat-ig",children:i.jsx(wv,{})}),i.jsx("span",{className:"t-stat-val",children:co(e.followers_instagram)})]}),i.jsxs("div",{className:"t-stat",children:[i.jsx("span",{className:"t-stat-icon t-stat-tt",children:i.jsx(jv,{})}),i.jsx("span",{className:"t-stat-val",children:co(e.followers_tiktok)})]}),i.jsxs("div",{className:"t-stat",children:[i.jsx("span",{className:"t-stat-icon t-stat-x",children:i.jsx(Sv,{})}),i.jsx("span",{className:"t-stat-val",children:co(e.followers_x)})]})]})]}),i.jsxs("div",{className:"t-card-actions",children:[i.jsx("button",{className:"t-action-btn",onClick:()=>a(e),children:"Edit"}),i.jsx("button",{className:"t-action-btn t-action-del",onClick:()=>l(e),children:"Hapus"})]})]})},Ev=()=>{const[e,t]=f.useState([]),[a,l]=f.useState(!0),[n,r]=f.useState(""),[o,s]=f.useState(null),c=async()=>{l(!0);try{const x=await(await fetch(`${D}/creators`)).json();t(Array.isArray(x)?x:[])}catch(m){console.error("Gagal fetch creators:",m)}finally{l(!1)}};f.useEffect(()=>{c()},[]);const u=()=>{s(null),c()},h=()=>{s(null),c()},p=e.filter(m=>{var x,y;return((x=m.name)==null?void 0:x.toLowerCase().includes(n.toLowerCase()))||((y=m.roles)==null?void 0:y.toLowerCase().includes(n.toLowerCase()))});return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        :root {
          --navy: #1a2744;
          --navy-light: #263660;
          --accent: #4f7cff;
          --accent-soft: #eef2ff;
          --danger: #ef4444;
          --danger-soft: #fef2f2;
          --green: #16a34a;
          --green-soft: #dcfce7;
          --border: #e9ecf0;
          --muted: #9ca3af;
          --text: #1e293b;
          --bg: #f4f6fb;
          --card-bg: #fff;
          --font: 'Plus Jakarta Sans', sans-serif;
          --radius: 16px;
          --shadow: 0 2px 16px rgba(26,39,68,0.07);
        }

        * { box-sizing: border-box; }

        .panel-wrap {
          font-family: var(--font);
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
        }

        .panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .panel-page-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--navy);
          letter-spacing: -0.03em;
          margin: 0 0 2px;
        }
        .panel-page-sub { font-size: 0.8rem; color: var(--muted); margin: 0; }
        .panel-add-btn {
          background: var(--navy);
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 0.6rem 1.25rem;
          font-family: var(--font);
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 14px rgba(26,39,68,0.2);
        }
        .panel-add-btn:hover { background: var(--navy-light); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(26,39,68,0.25); }

        .panel-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
        }
        .stat-card {
          background: var(--card-bg);
          border-radius: 14px;
          padding: 1.1rem 1.3rem;
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
        }
        .stat-label { font-size: 0.7rem; font-weight: 700; color: var(--muted); text-transform: uppercase; letter-spacing: 0.07em; display: block; margin-bottom: 6px; }
        .stat-value { font-size: 1.9rem; font-weight: 800; color: var(--navy); line-height: 1; display: block; }
        .stat-hint { font-size: 0.72rem; color: var(--muted); margin-top: 4px; display: block; }

        .search-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .panel-search {
          flex: 1;
          max-width: 320px;
          padding: 0.5rem 0.95rem;
          border: 1.5px solid var(--border);
          border-radius: 10px;
          font-family: var(--font);
          font-size: 0.84rem;
          outline: none;
          background: #fff;
          transition: border-color 0.2s, box-shadow 0.2s;
          color: var(--text);
        }
        .panel-search:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(79,124,255,0.12); }

        .count-label {
          font-size: 0.8rem;
          color: var(--muted);
          font-weight: 500;
          white-space: nowrap;
        }

        .talent-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1rem;
        }

        .t-card {
          background: var(--card-bg);
          border-radius: var(--radius);
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          padding: 1.4rem 1.2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
          transition: transform 0.2s, box-shadow 0.2s;
          animation: cardIn 0.35s ease both;
        }
        .t-card:hover { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(26,39,68,0.12); }

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .t-card-avatar { position: relative; }
        .t-card-img {
          width: 76px; height: 76px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--accent-soft);
          display: block;
        }
        .t-card-img-fallback {
          width: 76px; height: 76px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--navy), var(--accent));
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 1.6rem; font-weight: 800;
          border: 3px solid var(--accent-soft);
        }

        .t-card-body { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; width: 100%; }
        .t-card-name { font-size: 0.95rem; font-weight: 700; color: var(--text); margin: 0; text-align: center; }

        .t-card-roles { display: flex; flex-wrap: wrap; justify-content: center; gap: 4px; }
        .t-role-badge {
          background: var(--accent-soft);
          color: var(--accent);
          font-size: 0.67rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 100px;
          letter-spacing: 0.03em;
        }

        .t-card-stats {
          display: flex;
          gap: 0.6rem;
          justify-content: center;
          flex-wrap: wrap;
          width: 100%;
          padding-top: 6px;
          border-top: 1px solid var(--border);
        }
        .t-stat { display: flex; align-items: center; gap: 4px; }
        .t-stat-icon {
          width: 22px; height: 22px;
          border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .t-stat-ig { background: #fce4ec; color: #e91e63; }
        .t-stat-tt { background: #e8eaf6; color: #3d5afe; }
        .t-stat-x  { background: #f3f4f6; color: #374151; }
        .t-stat-val { font-size: 0.75rem; font-weight: 700; color: var(--text); }

        .t-card-actions { display: flex; gap: 0.5rem; width: 100%; }
        .t-action-btn {
          flex: 1;
          background: none;
          border: 1.5px solid var(--border);
          border-radius: 8px;
          padding: 0.35rem 0;
          font-family: var(--font);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text);
          cursor: pointer;
          transition: all 0.18s;
        }
        .t-action-btn:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-soft); }
        .t-action-del:hover { border-color: var(--danger); color: var(--danger); background: var(--danger-soft); }

        .empty-state {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 1rem;
          color: var(--muted);
          text-align: center;
          gap: 0.5rem;
        }
        .empty-icon { font-size: 2.5rem; }
        .empty-title { font-weight: 700; color: var(--text); font-size: 1rem; margin: 0; }
        .empty-sub { font-size: 0.85rem; margin: 0; }

        .skeleton-card {
          background: #fff;
          border-radius: var(--radius);
          border: 1px solid var(--border);
          padding: 1.4rem 1.2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.85rem;
        }
        .skel {
          border-radius: 8px;
          background: linear-gradient(90deg, #f1f5f9 25%, #e9edf4 50%, #f1f5f9 75%);
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
        }
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        .skel-circle { width: 76px; height: 76px; border-radius: 50%; }
        .skel-line  { height: 12px; }
        .skel-sm    { height: 10px; }

        /* ── Modal ── */
        .modal-backdrop {
          position: fixed; inset: 0;
          background: rgba(10,15,30,0.55);
          display: flex; align-items: center; justify-content: center;
          z-index: 1000; padding: 1rem;
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }

        .modal-box {
          background: #fff;
          border-radius: 20px;
          width: 100%;
          max-width: 440px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 1.8rem;
          animation: slideUp 0.25s ease;
          box-shadow: 0 24px 64px rgba(10,15,30,0.2);
        }
        @keyframes slideUp { from{transform:translateY(20px);opacity:0} to{transform:none;opacity:1} }

        .modal-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.4rem; }
        .modal-title { font-size: 1.05rem; font-weight: 800; color: var(--navy); margin: 0; }
        .modal-close-btn {
          background: var(--bg); border: none; border-radius: 8px;
          width: 30px; height: 30px; cursor: pointer; font-size: 0.85rem;
          display: flex; align-items: center; justify-content: center;
          color: var(--muted); transition: background 0.15s;
        }
        .modal-close-btn:hover { background: var(--border); }

        .avatar-upload-wrap { display: flex; flex-direction: column; align-items: center; gap: 0.6rem; margin-bottom: 1.2rem; }
        .avatar-upload-circle {
          width: 84px; height: 84px; border-radius: 50%;
          background-color: var(--accent-soft);
          background-size: cover; background-position: center;
          display: flex; align-items: center; justify-content: center;
          border: 2px dashed var(--accent);
        }
        .avatar-placeholder { font-size: 1.6rem; }
        .avatar-change-btn {
          font-size: 0.78rem; font-weight: 600; color: var(--accent);
          cursor: pointer; padding: 4px 12px; border-radius: 8px;
          background: var(--accent-soft); font-family: var(--font);
          transition: background 0.2s;
        }
        .avatar-change-btn:hover { background: #dde8ff; }

        .modal-fields { display: flex; flex-direction: column; gap: 0.85rem; }
        .field-group { display: flex; flex-direction: column; gap: 4px; }
        .field-label { font-size: 0.76rem; font-weight: 700; color: #6b7280; letter-spacing: 0.04em; text-transform: uppercase; }
        .field-input {
          padding: 0.55rem 0.85rem;
          border: 1.5px solid var(--border);
          border-radius: 10px;
          font-family: var(--font);
          font-size: 0.875rem;
          color: var(--text);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .field-input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(79,124,255,0.12); }
        .field-hint { font-size: 0.72rem; color: var(--muted); margin-top: 2px; }

        /* ── Roles Dropdown ── */
        .roles-dropdown-wrap {
          position: relative;
          font-family: var(--font);
        }

        .roles-trigger {
          min-height: 40px;
          padding: 0.4rem 0.85rem;
          border: 1.5px solid var(--border);
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          background: #fff;
          transition: border-color 0.2s, box-shadow 0.2s;
          user-select: none;
        }
        .roles-trigger:hover { border-color: #c8d0dc; }
        .roles-trigger-open {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(79,124,255,0.12);
        }

        .roles-trigger-content {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          min-width: 0;
        }

        .roles-placeholder {
          font-size: 0.875rem;
          color: var(--muted);
          line-height: 1.6;
        }

        .roles-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }

        .roles-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: var(--accent-soft);
          color: var(--accent);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 2px 6px 2px 8px;
          border-radius: 100px;
          letter-spacing: 0.02em;
          white-space: nowrap;
        }

        .roles-tag-remove {
          background: none;
          border: none;
          padding: 0;
          margin: 0;
          cursor: pointer;
          color: var(--accent);
          font-size: 1rem;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          transition: background 0.15s, color 0.15s;
          font-family: var(--font);
        }
        .roles-tag-remove:hover { background: rgba(79,124,255,0.2); }

        .roles-chevron {
          color: var(--muted);
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        .roles-menu {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          background: #fff;
          border: 1.5px solid var(--border);
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(26,39,68,0.14);
          z-index: 100;
          overflow: hidden;
          animation: menuIn 0.18s ease;
        }
        @keyframes menuIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .roles-option {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.6rem 1rem;
          cursor: pointer;
          font-size: 0.875rem;
          color: var(--text);
          font-weight: 500;
          transition: background 0.12s;
        }
        .roles-option:hover { background: var(--bg); }
        .roles-option-checked { background: var(--accent-soft); color: var(--accent); font-weight: 600; }
        .roles-option-checked:hover { background: #e0e9ff; }

        .roles-checkbox {
          width: 18px;
          height: 18px;
          border-radius: 5px;
          border: 1.5px solid var(--border);
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: border-color 0.15s, background 0.15s;
        }
        .roles-checkbox-checked {
          background: var(--accent);
          border-color: var(--accent);
        }

        .roles-option-label { flex: 1; }

        /* ── Modal actions ── */
        .modal-error { font-size: 0.82rem; color: var(--danger); margin: 0.8rem 0 0; font-weight: 500; }

        .modal-actions { display: flex; gap: 0.6rem; margin-top: 1.4rem; }
        .btn-cancel {
          flex: 1; padding: 0.65rem; border-radius: 10px;
          border: 1.5px solid var(--border); background: none;
          font-family: var(--font); font-size: 0.87rem; font-weight: 600;
          color: var(--text); cursor: pointer; transition: background 0.15s;
        }
        .btn-cancel:hover { background: var(--bg); }
        .btn-save {
          flex: 2; padding: 0.65rem; border-radius: 10px;
          border: none; background: var(--navy);
          font-family: var(--font); font-size: 0.87rem; font-weight: 700;
          color: #fff; cursor: pointer; transition: background 0.2s, transform 0.15s;
        }
        .btn-save:hover:not(:disabled) { background: var(--navy-light); transform: translateY(-1px); }
        .btn-save:disabled, .btn-cancel:disabled { opacity: 0.5; cursor: not-allowed; }

        .confirm-box { text-align: center; }
        .confirm-icon { font-size: 2.4rem; margin: 0 0 0.5rem; }
        .confirm-title { font-size: 1.05rem; font-weight: 800; color: var(--text); margin: 0 0 0.5rem; }
        .confirm-desc { font-size: 0.87rem; color: var(--muted); margin: 0 0 0.5rem; line-height: 1.6; }
        .btn-delete {
          flex: 2; padding: 0.65rem; border-radius: 10px;
          border: none; background: var(--danger);
          font-family: var(--font); font-size: 0.87rem; font-weight: 700;
          color: #fff; cursor: pointer; transition: background 0.2s;
        }
        .btn-delete:hover:not(:disabled) { background: #dc2626; }
        .btn-delete:disabled { opacity: 0.5; cursor: not-allowed; }

        @media (max-width: 600px) {
          .talent-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); }
          .panel-stats { grid-template-columns: repeat(1, 1fr); }
        }
      `}),i.jsxs("div",{className:"panel-wrap",children:[i.jsxs("div",{className:"panel-header",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"panel-page-title",children:"Talent"}),i.jsx("p",{className:"panel-page-sub",children:"Kelola data talent dan creator"})]}),i.jsx("button",{className:"panel-add-btn",onClick:()=>s({mode:"add"}),children:"+ Tambah Talent"})]}),i.jsx("div",{className:"panel-stats",children:i.jsxs("div",{className:"stat-card",children:[i.jsx("span",{className:"stat-label",children:"Total"}),i.jsx("span",{className:"stat-value",children:e.length}),i.jsx("span",{className:"stat-hint",children:"talent terdaftar"})]})}),i.jsxs("div",{className:"search-row",children:[i.jsx("input",{className:"panel-search",type:"search",placeholder:"Cari nama atau role...",value:n,onChange:m=>r(m.target.value)}),!a&&i.jsxs("span",{className:"count-label",children:[p.length," dari ",e.length," talent"]})]}),i.jsx("div",{className:"talent-grid",children:a?Array.from({length:6}).map((m,x)=>i.jsxs("div",{className:"skeleton-card",children:[i.jsx("div",{className:"skel skel-circle"}),i.jsx("div",{className:"skel skel-line",style:{width:"60%"}}),i.jsx("div",{className:"skel skel-sm",style:{width:"80%"}}),i.jsx("div",{className:"skel skel-sm",style:{width:"50%"}})]},x)):p.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx("span",{className:"empty-icon",children:"🎭"}),i.jsx("p",{className:"empty-title",children:n?"Talent tidak ditemukan":"Belum ada talent"}),i.jsx("p",{className:"empty-sub",children:n?`Tidak ada hasil untuk "${n}"`:"Klik + Tambah Talent untuk mulai"})]}):p.map((m,x)=>i.jsx(Tv,{talent:m,index:x,onEdit:y=>s({mode:"edit",talent:y}),onDelete:y=>s({mode:"delete",talent:y})},m.id))})]}),(o==null?void 0:o.mode)==="add"&&i.jsx(sd,{mode:"add",onClose:()=>s(null),onSaved:u}),(o==null?void 0:o.mode)==="edit"&&i.jsx(sd,{mode:"edit",talent:o.talent,onClose:()=>s(null),onSaved:u}),(o==null?void 0:o.mode)==="delete"&&i.jsx(zv,{talent:o.talent,onClose:()=>s(null),onDeleted:h})]})},_v=()=>i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .panel-wrap {
          font-family: 'Plus Jakarta Sans', sans-serif;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .panel-header-left { display: flex; flex-direction: column; gap: 2px; }
        .panel-page-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0a0a0a;
          letter-spacing: -0.02em;
        }
        .panel-page-sub {
          font-size: 0.82rem;
          color: #9ca3af;
        }
        .panel-add-btn {
          background: #1a2744;
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 0.6rem 1.2rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: background 0.2s, transform 0.15s;
        }
        .panel-add-btn:hover { background: #263660; transform: translateY(-1px); }

        .panel-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 1rem;
        }
        .stat-card {
          background: #fff;
          border-radius: 14px;
          padding: 1.2rem 1.4rem;
          border: 1px solid #e9ecf0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .stat-label {
          font-size: 0.75rem;
          color: #9ca3af;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .stat-value {
          font-size: 1.8rem;
          font-weight: 800;
          color: #1a2744;
          line-height: 1;
        }
        .stat-hint { font-size: 0.75rem; color: #6b7280; }

        .panel-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #e9ecf0;
          overflow: hidden;
        }
        .panel-card-header {
          padding: 1.1rem 1.4rem;
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .panel-card-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: #1a2744;
        }
        .panel-search {
          padding: 0.45rem 0.9rem;
          border: 1.5px solid #e5e7eb;
          border-radius: 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.82rem;
          outline: none;
          width: 200px;
          transition: border-color 0.2s;
        }
        .panel-search:focus { border-color: #1a2744; }

        .panel-table-wrap { overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; font-size: 0.855rem; }
        thead tr { background: #f8fafc; }
        th {
          padding: 0.75rem 1.2rem;
          text-align: left;
          font-size: 0.75rem;
          font-weight: 700;
          color: #6b7280;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        td {
          padding: 0.85rem 1.2rem;
          color: #374151;
          border-top: 1px solid #f1f5f9;
          vertical-align: middle;
        }
        tr:hover td { background: #f8fafc; }

        .badge {
          display: inline-block;
          padding: 0.2rem 0.65rem;
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 700;
        }
        .badge-active { background: #dcfce7; color: #16a34a; }
        .badge-draft  { background: #fef9c3; color: #ca8a04; }

        .action-btn {
          background: none;
          border: 1.5px solid #e5e7eb;
          border-radius: 7px;
          padding: 0.28rem 0.65rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.18s;
          color: #374151;
        }
        .action-btn:hover { border-color: #1a2744; color: #1a2744; }
        .action-btn.del:hover { border-color: #ef4444; color: #ef4444; }

        .empty-state {
          padding: 3rem;
          text-align: center;
          color: #9ca3af;
          font-size: 0.9rem;
        }
        .empty-icon { font-size: 2rem; margin-bottom: 0.5rem; }

        @media (max-width: 600px) {
          .panel-search { width: 100%; }
          th, td { padding: 0.65rem 0.85rem; }
        }
      `}),i.jsxs("div",{className:"panel-wrap",children:[i.jsxs("div",{className:"panel-header",children:[i.jsxs("div",{className:"panel-header-left",children:[i.jsx("h1",{className:"panel-page-title",children:"◈ Service"}),i.jsx("p",{className:"panel-page-sub",children:"Kelola layanan yang ditawarkan"})]}),i.jsx("button",{className:"panel-add-btn",children:"+ Tambah Service"})]}),i.jsxs("div",{className:"panel-stats",children:[i.jsxs("div",{className:"stat-card",children:[i.jsx("span",{className:"stat-label",children:"Total"}),i.jsx("span",{className:"stat-value",children:"0"}),i.jsx("span",{className:"stat-hint",children:"item terdaftar"})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("span",{className:"stat-label",children:"Aktif"}),i.jsx("span",{className:"stat-value",children:"0"}),i.jsx("span",{className:"stat-hint",children:"ditampilkan di landing"})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("span",{className:"stat-label",children:"Draft"}),i.jsx("span",{className:"stat-value",children:"0"}),i.jsx("span",{className:"stat-hint",children:"belum dipublikasi"})]})]}),i.jsxs("div",{className:"panel-card",children:[i.jsxs("div",{className:"panel-card-header",children:[i.jsx("span",{className:"panel-card-title",children:"Daftar Service"}),i.jsx("input",{className:"panel-search",placeholder:"Cari...",type:"search"})]}),i.jsx("div",{className:"panel-table-wrap",children:i.jsxs("div",{className:"empty-state",children:[i.jsx("div",{className:"empty-icon",children:"◈"}),i.jsx("p",{children:"Belum ada data Service."}),i.jsxs("p",{children:["Klik ",i.jsx("strong",{children:"+ Tambah Service"})," untuk mulai."]})]})})]})]})]}),Cv=[{id:1,col:0,row:0},{id:2,col:0,row:1},{id:3,col:0,row:2},{id:4,col:1,row:0},{id:5,col:1,row:1},{id:6,col:1,row:2},{id:7,col:2,row:0},{id:8,col:2,row:1},{id:9,col:3,row:0},{id:10,col:3,row:1},{id:11,col:4,row:0},{id:12,col:4,row:1},{id:13,col:5,row:0},{id:14,col:5,row:1},{id:15,col:6,row:0},{id:16,col:6,row:1},{id:17,col:6,row:2},{id:18,col:7,row:0},{id:19,col:7,row:1},{id:20,col:7,row:2}];function Av({card:e,onUpdated:t}){const a=f.useRef(null),[l,n]=f.useState(null),[r,o]=f.useState(null),[s,c]=f.useState(!1),[u,h]=f.useState(null),p=r||(e.image_url?`${Ge}${e.image_url}`:null),m=!!l,x=m,y=d=>{const g=d.target.files[0];g&&(n(g),o(URL.createObjectURL(g)),h(null),d.target.value="")},j=()=>{r&&URL.revokeObjectURL(r),n(null),o(null),h(null)},w=async()=>{if(!l)return;c(!0),h(null);const d=new FormData;d.append("image_url",l);try{const g=await fetch(`${D}/update-creators-photocard/${e.id}`,{method:"PUT",body:d});if(!g.ok)throw new Error("Server error");const b=await g.json();t(e.id,b.imageUrl??null),n(null),o(null),h({type:"ok",text:"✓"}),setTimeout(()=>h(null),2500)}catch(g){console.error(g),h({type:"err",text:"✗ Gagal"})}finally{c(!1)}};return i.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.35rem"},children:[i.jsxs("div",{onClick:()=>{var d;return!s&&((d=a.current)==null?void 0:d.click())},title:"Klik untuk pilih foto baru",style:{width:"100%",aspectRatio:"3/4",borderRadius:"10px",background:"#f1f5f9",border:m?"2px solid #1a2744":"1.5px dashed #d1d5db",overflow:"hidden",cursor:s?"wait":"pointer",position:"relative",transition:"border-color .2s, border-width .15s"},onMouseEnter:d=>{m||(d.currentTarget.style.borderColor="#94a3b8")},onMouseLeave:d=>{m||(d.currentTarget.style.borderColor="#d1d5db")},children:[p?i.jsx("img",{src:p,alt:`Kartu ${e.id}`,style:{width:"100%",height:"100%",objectFit:"cover",display:"block",opacity:s?.4:1,transition:"opacity .2s"}}):i.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",color:"#cbd5e1"},children:"＋"}),m&&!s&&i.jsx("div",{style:{position:"absolute",top:4,right:4,background:"#1a2744",color:"#fff",fontSize:"0.6rem",fontWeight:700,borderRadius:"4px",padding:"1px 5px",lineHeight:1.6},children:"BARU"}),s&&i.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(255,255,255,0.6)",fontSize:"0.68rem",fontWeight:700,color:"#1a2744"},children:"Upload…"})]}),i.jsxs("span",{style:{fontSize:"0.65rem",color:"#9ca3af",fontWeight:600},children:["#",e.id]}),x&&i.jsxs("div",{style:{display:"flex",gap:"0.3rem",width:"100%"},children:[i.jsx("button",{onClick:w,disabled:s,style:{flex:1,padding:"0.28rem 0",background:"#1a2744",color:"#fff",border:"none",borderRadius:"6px",fontSize:"0.65rem",fontWeight:700,cursor:s?"wait":"pointer",transition:"background .15s",fontFamily:"inherit"},onMouseEnter:d=>{s||(d.currentTarget.style.background="#263660")},onMouseLeave:d=>{d.currentTarget.style.background="#1a2744"},children:"Simpan"}),i.jsx("button",{onClick:j,disabled:s,style:{flex:1,padding:"0.28rem 0",background:"none",color:"#6b7280",border:"1.5px solid #e5e7eb",borderRadius:"6px",fontSize:"0.65rem",fontWeight:600,cursor:"pointer",transition:"border-color .15s, color .15s",fontFamily:"inherit"},onMouseEnter:d=>{d.currentTarget.style.borderColor="#ef4444",d.currentTarget.style.color="#ef4444"},onMouseLeave:d=>{d.currentTarget.style.borderColor="#e5e7eb",d.currentTarget.style.color="#6b7280"},children:"Batal"})]}),u&&i.jsx("span",{style:{fontSize:"0.65rem",fontWeight:700,color:u.type==="ok"?"#16a34a":"#dc2626"},children:u.text}),i.jsx("input",{ref:a,type:"file",accept:"image/*",style:{display:"none"},onChange:y})]})}const Mv=()=>{const[e,t]=f.useState(Cv.map(E=>({...E,image_url:null}))),[a,l]=f.useState({creators:"25",brand:"100",projects:"+78"}),[n,r]=f.useState({creators:"25",brand:"100",projects:"+78"}),[o,s]=f.useState(!1),[c,u]=f.useState(null),[h,p]=f.useState(!0),[m,x]=f.useState(!1),[y,j]=f.useState(null),[w,d]=f.useState("");f.useEffect(()=>{g()},[]);const g=async()=>{p(!0);try{const E=await fetch(`${D}/creators-photocard`);if(E.ok){const F=await E.json();t(se=>se.map(de=>{const A=F.find(T=>Number(T.id)===de.id)??F[de.id-1];return A?{...de,image_url:A.image_url??null}:de}))}const J=await fetch(`${D}/creators-photocard-statistics`);if(J.ok){const F=await J.json(),se=Array.isArray(F)?F[0]:F;if(se){const de={creators:String(se.creators??"25"),brand:String(se.brand??"100"),projects:String(se.projects??"+78")};l(de),r(de)}}}catch(E){console.error("Gagal fetch:",E)}finally{p(!1)}},b=async()=>{if(window.confirm("Ini akan membuat 20 row kosong di creators_photocard dan 1 row di creators_photocard_statistics (jika belum ada). Lanjutkan?")){x(!0),j(null);try{const E=await fetch(`${D}/seed-creators-photocard`,{method:"POST"});if(!E.ok)throw new Error("Gagal seed");const J=await E.json();j({type:"ok",text:J.message??"Seed berhasil! Silakan refresh."}),await g()}catch(E){console.error(E),j({type:"err",text:"Gagal seed. Pastikan endpoint /api/seed-creators-photocard sudah ditambahkan di server."})}finally{x(!1)}}},v=(E,J)=>{t(F=>F.map(se=>se.id===E?{...se,image_url:J}:se))},S=async()=>{s(!0),u(null);try{if(!(await fetch(`${D}/update-creators-photocard-statistics`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({creators:n.creators,brand:n.brand,projects:n.projects})})).ok)throw new Error("Gagal menyimpan");l({...n}),u({type:"ok",text:"Statistik berhasil disimpan!"})}catch(E){console.error(E),u({type:"err",text:"Gagal menyimpan statistik."})}finally{s(!1),setTimeout(()=>u(null),3e3)}},N=n.creators!==a.creators||n.brand!==a.brand||n.projects!==a.projects,k=e.filter(E=>E.image_url).length;e.length;const _=k===0&&!h,M=e.filter(E=>w.trim()===""?!0:String(E.id).includes(w.trim()));return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .panel-wrap {
          font-family: 'Plus Jakarta Sans', sans-serif;
          display: flex; flex-direction: column; gap: 1.5rem;
        }
        .panel-header {
          display: flex; align-items: center;
          justify-content: space-between; flex-wrap: wrap; gap: 1rem;
        }
        .panel-header-left { display: flex; flex-direction: column; gap: 2px; }
        .panel-page-title { font-size: 1.35rem; font-weight: 800; color: #0a0a0a; letter-spacing: -0.02em; }
        .panel-page-sub   { font-size: 0.82rem; color: #9ca3af; }

        .panel-stats {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1rem;
        }
        .stat-card {
          background: #fff; border-radius: 14px; padding: 1.2rem 1.4rem;
          border: 1px solid #e9ecf0; display: flex; flex-direction: column; gap: 0.4rem;
        }
        .stat-label {
          font-size: 0.75rem; color: #9ca3af; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.06em;
        }
        .stat-value  { font-size: 1.8rem; font-weight: 800; color: #1a2744; line-height: 1; }
        .stat-hint   { font-size: 0.75rem; color: #6b7280; }

        .panel-card  { background: #fff; border-radius: 16px; border: 1px solid #e9ecf0; overflow: hidden; }
        .panel-card-header {
          padding: 1.1rem 1.4rem; border-bottom: 1px solid #f1f5f9;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 0.75rem;
        }
        .panel-card-title { font-size: 0.9rem; font-weight: 700; color: #1a2744; }

        .panel-search {
          padding: 0.45rem 0.9rem; border: 1.5px solid #e5e7eb;
          border-radius: 8px; font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.82rem; outline: none; width: 180px; transition: border-color .2s;
        }
        .panel-search:focus { border-color: #1a2744; }

        .photo-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          gap: 1rem; padding: 1.2rem 1.4rem;
        }

        .seed-banner {
          margin: 1rem 1.4rem;
          padding: 1rem 1.2rem;
          background: #fffbeb;
          border: 1.5px solid #fde68a;
          border-radius: 10px;
          display: flex; align-items: flex-start; gap: 0.75rem;
          flex-wrap: wrap;
        }
        .seed-banner-text { flex: 1; font-size: 0.82rem; color: #92400e; line-height: 1.5; }
        .seed-btn {
          background: #1a2744; color: #fff; border: none;
          border-radius: 8px; padding: 0.5rem 1.1rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.8rem; font-weight: 700; cursor: pointer;
          transition: background .15s; white-space: nowrap;
        }
        .seed-btn:disabled { opacity: 0.6; cursor: wait; }
        .seed-btn:hover:not(:disabled) { background: #263660; }

        .stats-edit-section { padding: 1.2rem 1.4rem; display: flex; flex-direction: column; gap: 1rem; }
        .stats-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1rem; }
        .stats-field { display: flex; flex-direction: column; gap: 0.35rem; }
        .stats-field label {
          font-size: 0.75rem; font-weight: 700; color: #6b7280;
          text-transform: uppercase; letter-spacing: 0.06em;
        }
        .stats-input {
          padding: 0.6rem 0.9rem; border: 1.5px solid #e5e7eb;
          border-radius: 8px; font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1rem; font-weight: 700; color: #1a2744;
          outline: none; transition: border-color .2s; width: 100%; box-sizing: border-box;
        }
        .stats-input:focus { border-color: #1a2744; }
        .stats-input-hint { font-size: 0.7rem; color: #9ca3af; }

        .save-btn {
          background: #1a2744; color: #fff; border: none; border-radius: 10px;
          padding: 0.6rem 1.4rem; font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600; font-size: 0.875rem; cursor: pointer;
          transition: background .2s, transform .15s; align-self: flex-start;
        }
        .save-btn:hover:not(:disabled) { background: #263660; transform: translateY(-1px); }
        .save-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .msg-ok  { font-size: 0.8rem; color: #16a34a; font-weight: 600; }
        .msg-err { font-size: 0.8rem; color: #dc2626; font-weight: 600; }

        .info-hint {
          font-size: 0.75rem; color: #9ca3af;
          padding: 0.6rem 1.4rem 0;
          display: flex; align-items: center; gap: 0.4rem;
        }

        .loading-overlay { padding: 3rem; text-align: center; color: #9ca3af; font-size: 0.9rem; }

        @media (max-width: 600px) {
          .panel-search { width: 100%; }
          .photo-grid { grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); gap: 0.65rem; padding: 0.9rem; }
        }
      `}),i.jsxs("div",{className:"panel-wrap",children:[i.jsx("div",{className:"panel-header",children:i.jsxs("div",{className:"panel-header-left",children:[i.jsx("h1",{className:"panel-page-title",children:"✦ Creator"}),i.jsx("p",{className:"panel-page-sub",children:"Kelola foto photocard & statistik kreator"})]})}),i.jsxs("div",{className:"panel-stats",children:[i.jsxs("div",{className:"stat-card",children:[i.jsx("span",{className:"stat-label",children:"Total Slot"}),i.jsx("span",{className:"stat-value",children:"20"}),i.jsx("span",{className:"stat-hint",children:"jumlah kartu tetap"})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("span",{className:"stat-label",children:"Terisi"}),i.jsx("span",{className:"stat-value",style:{color:k===20?"#16a34a":"#1a2744"},children:h?"—":k}),i.jsx("span",{className:"stat-hint",children:"sudah ada foto"})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("span",{className:"stat-label",children:"Kosong"}),i.jsx("span",{className:"stat-value",style:{color:20-k>0?"#ca8a04":"#16a34a"},children:h?"—":20-k}),i.jsx("span",{className:"stat-hint",children:"belum ada foto"})]})]}),i.jsxs("div",{className:"panel-card",children:[i.jsxs("div",{className:"panel-card-header",children:[i.jsxs("span",{className:"panel-card-title",children:["Foto Photocard",i.jsx("span",{style:{fontWeight:400,color:"#9ca3af",fontSize:"0.8rem",marginLeft:"0.5rem"},children:"— klik kartu untuk pilih foto, lalu tekan Simpan"})]}),i.jsx("input",{className:"panel-search",placeholder:"Cari nomor kartu…",type:"search",value:w,onChange:E=>d(E.target.value)})]}),_&&i.jsxs("div",{className:"seed-banner",children:[i.jsxs("div",{className:"seed-banner-text",children:[i.jsx("strong",{children:"Database belum diinisialisasi."}),i.jsx("br",{}),"Tabel ",i.jsx("code",{children:"creators_photocard"})," perlu 20 row kosong dan"," ",i.jsx("code",{children:"creators_photocard_statistics"})," perlu 1 row default sebelum bisa digunakan.",i.jsx("br",{}),"Klik tombol di samping untuk membuatnya otomatis,"," ",i.jsx("strong",{children:"atau tambahkan endpoint seed"})," di server.js terlebih dahulu (lihat komentar di bawah tombol)."]}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",alignItems:"flex-end"},children:[i.jsx("button",{className:"seed-btn",onClick:b,disabled:m,children:m?"Memproses…":"⚡ Inisialisasi Database"}),y&&i.jsx("span",{className:y.type==="ok"?"msg-ok":"msg-err",style:{fontSize:"0.75rem",textAlign:"right"},children:y.text})]})]}),i.jsx("p",{className:"info-hint",children:"ℹ️ Jumlah kartu tetap 20 — tidak bisa ditambah atau dihapus, hanya foto yang bisa diganti."}),h?i.jsx("div",{className:"loading-overlay",children:"Memuat data…"}):i.jsxs("div",{className:"photo-grid",children:[M.map(E=>i.jsx(Av,{card:E,onUpdated:v},E.id)),M.length===0&&i.jsxs("div",{style:{gridColumn:"1 / -1",textAlign:"center",padding:"2rem",color:"#9ca3af",fontSize:"0.875rem"},children:["Kartu #",w," tidak ditemukan."]})]})]}),i.jsxs("div",{className:"panel-card",children:[i.jsxs("div",{className:"panel-card-header",children:[i.jsx("span",{className:"panel-card-title",children:"Statistik Kreator"}),i.jsx("span",{style:{fontSize:"0.78rem",color:"#9ca3af"},children:"Ditampilkan di bagian bawah section Creator"})]}),i.jsxs("div",{className:"stats-edit-section",children:[i.jsx("div",{className:"stats-row",children:[{key:"creators",label:"Talents",placeholder:"25"},{key:"brand",label:"Brands",placeholder:"100"},{key:"projects",label:"Projects",placeholder:"+78"}].map(({key:E,label:J,placeholder:F})=>i.jsxs("div",{className:"stats-field",children:[i.jsx("label",{children:J}),i.jsx("input",{className:"stats-input",type:"text",maxLength:10,value:n[E],placeholder:F,onChange:se=>r(de=>({...de,[E]:se.target.value})),style:{borderColor:n[E]!==a[E]?"#1a2744":void 0}}),i.jsxs("span",{className:"stats-input-hint",children:["Tersimpan: ",i.jsx("strong",{children:a[E]})]})]},E))}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",flexWrap:"wrap"},children:[i.jsx("button",{className:"save-btn",onClick:S,disabled:o||!N,title:N?"":"Belum ada perubahan",children:o?"Menyimpan…":"Simpan Statistik"}),!N&&!o&&i.jsx("span",{style:{fontSize:"0.78rem",color:"#9ca3af"},children:"Belum ada perubahan"}),c&&i.jsx("span",{className:c.type==="ok"?"msg-ok":"msg-err",children:c.text})]})]})]})]})]})},vi=["image_left","image_center","image_right","image_bottom_left","image_bottom_right"],ds={image_left:"Kiri Atas",image_center:"Tengah Atas",image_right:"Kanan Atas",image_bottom_left:"Kiri Bawah",image_bottom_right:"Kanan Bawah"},Rv=()=>{const[e,t]=f.useState([]),[a,l]=f.useState([]),[n,r]=f.useState(!0),[o,s]=f.useState(!1),[c,u]=f.useState(null),[h,p]=f.useState(null),[m,x]=f.useState(null),[y,j]=f.useState(null),[w,d]=f.useState(!1),g=a.some(A=>{const T=e.find(C=>C.id===A.id);return T?Number(T.is_active)!==Number(A.is_active)||(T.image_type??null)!==(A.image_type??null):!0}),b=f.useCallback(async()=>{r(!0);try{const T=await(await fetch(`${D}/updates-section`)).json(),C=Array.isArray(T)?T:[];t(C),l(C)}catch{v("Gagal memuat data","error")}finally{r(!1)}},[]);f.useEffect(()=>{b()},[b]);const v=(A,T="success")=>{p({msg:A,type:T}),setTimeout(()=>p(null),3500)},S=a.filter(A=>Number(A.is_active)===1),N=a.filter(A=>Number(A.is_active)!==1),k={};vi.forEach(A=>{k[A]=S.find(T=>T.image_type===A)||null});const _=(A,T)=>{x(T.id),A.dataTransfer.effectAllowed="move"},M=()=>{x(null),j(null),d(!1)},E=(A,T)=>{if(A.preventDefault(),j(null),!m)return;const C=a.find(Pe=>Pe.id===m);if(!C||Number(C.is_active)===1&&C.image_type===T)return;const R=k[T],V=R&&R.id!==C.id,q=C.image_type??null,St=Number(C.is_active)===1;l(Pe=>Pe.map(Re=>Re.id===C.id?{...Re,is_active:1,image_type:T}:V&&Re.id===R.id?St&&q?{...Re,is_active:1,image_type:q}:{...Re,is_active:0,image_type:null}:Re))},J=A=>{if(A.preventDefault(),d(!1),!m)return;const T=a.find(C=>C.id===m);!T||Number(T.is_active)!==1||l(C=>C.map(R=>R.id===T.id?{...R,is_active:0,image_type:null}:R))},F=()=>{l(e)},se=async()=>{s(!0);const A=[...a],T=[...e];try{const C=A.filter(R=>{const V=T.find(q=>q.id===R.id);return V?Number(V.is_active)!==Number(R.is_active)||(V.image_type??null)!==(R.image_type??null):!1});if(C.length===0){v("Tidak ada perubahan"),s(!1);return}for(const R of C){const V=await fetch(`${D}/update-updates-section-status/${R.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({is_active:Number(R.is_active),image_type:R.image_type??null})});if(!V.ok){const q=await V.json().catch(()=>({}));throw new Error(q.error||`Gagal update ID ${R.id}`)}}t(A),v(`✓ ${C.length} perubahan berhasil disimpan`)}catch(C){console.error(C),v((C==null?void 0:C.message)||"Gagal menyimpan perubahan","error")}finally{s(!1)}},de=async A=>{if(window.confirm(`Hapus activity ini (ID: ${A.id})?`))try{const T=await fetch(`${D}/delete-updates-section/${A.id}`,{method:"DELETE"});if(!T.ok){const C=await T.json().catch(()=>({}));throw new Error(C.error||"Gagal menghapus")}t(C=>C.filter(R=>R.id!==A.id)),l(C=>C.filter(R=>R.id!==A.id)),v("Activity dihapus")}catch(T){console.error(T),v((T==null?void 0:T.message)||"Gagal menghapus","error")}};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        .ap-wrap {
          font-family: 'Plus Jakarta Sans', sans-serif;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .ap-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .ap-header-left { display: flex; flex-direction: column; gap: 3px; }
        .ap-page-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0a0a0a;
          letter-spacing: -0.02em;
        }
        .ap-page-sub { font-size: 0.82rem; color: #9ca3af; }
        .ap-add-btn {
          background: #1a2744;
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 0.6rem 1.2rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: background 0.2s, transform 0.15s;
        }
        .ap-add-btn:hover { background: #263660; transform: translateY(-1px); }

        .ap-section-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6b7280;
          margin: 0 0 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .ap-section-label .count-pill {
          background: #e0e7ff;
          color: #3730a3;
          border-radius: 100px;
          padding: 0.1rem 0.55rem;
          font-size: 0.68rem;
          font-weight: 800;
        }
        .ap-section-label .count-pill.green {
          background: #dcfce7;
          color: #15803d;
        }

        .ap-save-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          background: #fffbeb;
          border: 1.5px solid #fbbf24;
          border-radius: 12px;
          padding: 0.85rem 1.2rem;
          animation: ap-bar-in 0.25s ease;
        }
        @keyframes ap-bar-in {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ap-save-bar-msg {
          font-size: 0.83rem;
          font-weight: 600;
          color: #92400e;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .ap-save-bar-actions { display: flex; gap: 0.6rem; }

        .btn-bar-cancel {
          background: #fff;
          border: 1.5px solid #e5e7eb;
          border-radius: 8px;
          padding: 0.45rem 1rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          color: #374151;
          transition: background 0.15s, border-color 0.15s;
        }
        .btn-bar-cancel:hover { background: #f9fafb; border-color: #d1d5db; }

        .btn-bar-save {
          background: #1a2744;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 0.45rem 1.2rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .btn-bar-save:hover:not(:disabled) { background: #263660; }
        .btn-bar-save:disabled { opacity: 0.55; cursor: not-allowed; }

        .ap-active-zone {
          background: #f8fafc;
          border: 1.5px dashed #cbd5e1;
          border-radius: 16px;
          padding: 1.1rem;
          transition: border-color 0.2s, background 0.2s;
        }
        .ap-slots-top {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 10px;
        }
        .ap-slots-bottom {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .ap-slot {
          position: relative;
          border-radius: 10px;
          border: 2px dashed #e2e8f0;
          background: #fff;
          aspect-ratio: 4/3;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 0.4rem;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          overflow: hidden;
        }
        .ap-slots-bottom .ap-slot { aspect-ratio: 16/9; }
        .ap-slot.has-card { border-style: solid; border-color: transparent; }
        .ap-slot.drag-target {
          border-color: #1a2744;
          background: #eef2ff;
          box-shadow: 0 0 0 4px rgba(26,39,68,0.08);
        }
        .ap-slot-label {
          font-size: 0.7rem;
          font-weight: 700;
          color: #94a3b8;
          letter-spacing: 0.05em;
          text-align: center;
          pointer-events: none;
          user-select: none;
          padding: 0 0.5rem;
        }
        .ap-slot-empty-icon {
          font-size: 1.2rem;
          opacity: 0.35;
          pointer-events: none;
        }

        .ap-slot-card {
          position: absolute;
          inset: 0;
          border-radius: 8px;
          overflow: hidden;
          cursor: grab;
        }
        .ap-slot-card:active { cursor: grabbing; }
        .ap-slot-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          pointer-events: none;
          user-select: none;
        }
        .ap-slot-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.2s;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 10px;
          gap: 6px;
        }
        .ap-slot-card:hover .ap-slot-card-overlay { opacity: 1; }
        .ap-slot-card-actions { display: flex; gap: 5px; }
        .ap-slot-card-btn {
          background: rgba(255,255,255,0.92);
          border: none;
          border-radius: 6px;
          padding: 0.2rem 0.55rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          cursor: pointer;
          color: #1a2744;
          transition: background 0.15s;
        }
        .ap-slot-card-btn:hover { background: #fff; }
        .ap-slot-card-btn.del { color: #ef4444; }
        .ap-slot-card-btn.del:hover { background: #fef2f2; }
        .ap-slot-card-drag-hint {
          font-size: 0.65rem;
          color: rgba(255,255,255,0.75);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .ap-slot-badge {
          position: absolute;
          top: 8px;
          left: 8px;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(4px);
          border-radius: 6px;
          padding: 0.15rem 0.5rem;
          font-size: 0.65rem;
          font-weight: 700;
          color: #1a2744;
          pointer-events: none;
          z-index: 2;
        }
        .ap-slot-pending-dot {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #f59e0b;
          border: 2px solid #fff;
          z-index: 3;
          pointer-events: none;
        }
        .ap-slot-card.is-dragging { opacity: 0.4; }

        .ap-inactive-zone {
          border: 1.5px dashed #e2e8f0;
          border-radius: 16px;
          padding: 1.1rem;
          background: #fff;
          min-height: 120px;
          transition: border-color 0.2s, background 0.2s;
        }
        .ap-inactive-zone.drag-over {
          border-color: #f59e0b;
          background: #fffbeb;
        }
        .ap-inactive-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 10px;
        }
        .ap-inactive-card {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          background: #f1f5f9;
          aspect-ratio: 4/3;
          cursor: grab;
          border: 2px solid transparent;
          transition: border-color 0.2s, transform 0.15s;
        }
        .ap-inactive-card:active { cursor: grabbing; }
        .ap-inactive-card:hover { transform: translateY(-2px); }
        .ap-inactive-card.is-dragging { opacity: 0.35; }
        .ap-inactive-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          pointer-events: none;
          user-select: none;
        }
        .ap-inactive-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,10,10,0.65) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.2s;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 8px;
          gap: 5px;
        }
        .ap-inactive-card:hover .ap-inactive-card-overlay { opacity: 1; }
        .ap-inactive-card-actions { display: flex; gap: 4px; }
        .ap-inactive-card-btn {
          background: rgba(255,255,255,0.9);
          border: none;
          border-radius: 5px;
          padding: 0.18rem 0.5rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          cursor: pointer;
          color: #1a2744;
          transition: background 0.15s;
        }
        .ap-inactive-card-btn:hover { background: #fff; }
        .ap-inactive-card-btn.del { color: #ef4444; }
        .ap-inactive-card-btn.del:hover { background: #fef2f2; }
        .ap-inactive-card-drag-hint {
          font-size: 0.6rem;
          color: rgba(255,255,255,0.75);
          font-weight: 600;
        }
        .ap-inactive-empty {
          padding: 2rem;
          text-align: center;
          color: #cbd5e1;
          font-size: 0.82rem;
        }

        .ap-legend {
          background: #f8fafc;
          border-radius: 10px;
          padding: 0.75rem 1rem;
          font-size: 0.78rem;
          color: #64748b;
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          line-height: 1.6;
        }
        .ap-legend-icon { font-size: 1rem; flex-shrink: 0; margin-top: 1px; }

        .ap-toast {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 9999;
          padding: 0.75rem 1.2rem;
          border-radius: 10px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          animation: ap-slidein 0.25s ease;
        }
        .ap-toast.success { background: #1a2744; color: #fff; }
        .ap-toast.error   { background: #ef4444; color: #fff; }
        @keyframes ap-slidein {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .ap-modal-bg {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(10,10,10,0.45);
          backdrop-filter: blur(2px);
          display: flex; align-items: center; justify-content: center;
          padding: 1rem;
        }
        .ap-modal {
          background: #fff;
          border-radius: 18px;
          width: 100%;
          max-width: 500px;
          box-shadow: 0 24px 64px rgba(0,0,0,0.18);
          overflow: hidden;
        }
        .ap-modal-header {
          padding: 1.3rem 1.5rem 1rem;
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .ap-modal-title { font-size: 1rem; font-weight: 700; color: #1a2744; }
        .ap-modal-close {
          background: none; border: none; font-size: 1.2rem;
          cursor: pointer; color: #9ca3af; line-height: 1;
        }
        .ap-modal-close:hover { color: #374151; }
        .ap-modal-body { padding: 1.3rem 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
        .ap-modal-footer {
          padding: 1rem 1.5rem;
          border-top: 1px solid #f1f5f9;
          display: flex; gap: 0.75rem; justify-content: flex-end;
        }
        .ap-field { display: flex; flex-direction: column; gap: 0.35rem; }
        .ap-field label { font-size: 0.8rem; font-weight: 600; color: #374151; }
        .ap-field select,
        .ap-field input[type="text"],
        .ap-field textarea {
          padding: 0.55rem 0.85rem;
          border: 1.5px solid #e5e7eb;
          border-radius: 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.85rem;
          outline: none;
          transition: border-color 0.2s;
          color: #0a0a0a;
        }
        .ap-field select:focus,
        .ap-field input[type="text"]:focus,
        .ap-field textarea:focus { border-color: #1a2744; }
        .ap-field textarea { resize: vertical; min-height: 90px; }
        .ap-field input[type="file"] { font-size: 0.82rem; color: #6b7280; }
        .ap-img-preview {
          width: 100%;
          max-height: 140px;
          object-fit: cover;
          border-radius: 8px;
          margin-top: 0.4rem;
        }
        .btn-cancel {
          background: #f1f5f9; border: none; border-radius: 9px;
          padding: 0.6rem 1.2rem; font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.875rem; font-weight: 600; cursor: pointer;
          color: #374151; transition: background 0.2s;
        }
        .btn-cancel:hover { background: #e2e8f0; }
        .btn-save {
          background: #1a2744; color: #fff; border: none; border-radius: 9px;
          padding: 0.6rem 1.4rem; font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.875rem; font-weight: 600; cursor: pointer;
          transition: background 0.2s;
        }
        .btn-save:hover { background: #263660; }
        .btn-save:disabled { opacity: 0.5; cursor: not-allowed; }

        @media (max-width: 600px) {
          .ap-slots-top { grid-template-columns: repeat(2, 1fr); }
          .ap-inactive-grid { grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); }
          .ap-save-bar { flex-direction: column; align-items: stretch; }
          .ap-save-bar-actions { justify-content: flex-end; }
        }
      `}),i.jsxs("div",{className:"ap-wrap",children:[i.jsxs("div",{className:"ap-header",children:[i.jsxs("div",{className:"ap-header-left",children:[i.jsx("h1",{className:"ap-page-title",children:"◉ Activity"}),i.jsx("p",{className:"ap-page-sub",children:"Drag kartu ke slot posisi untuk mengaktifkan · maks. 5 aktif"})]}),i.jsx("button",{className:"ap-add-btn",onClick:()=>u({mode:"add"}),children:"+ Tambah Activity"})]}),i.jsxs("div",{className:"ap-legend",children:[i.jsx("span",{className:"ap-legend-icon",children:"💡"}),i.jsxs("span",{children:[i.jsx("strong",{children:"Cara pakai:"})," Drag kartu dari ",i.jsx("em",{children:"Non-aktif"})," ke slot posisi yang diinginkan di zona ",i.jsx("em",{children:"Aktif"})," untuk menampilkannya di landing page. Drag kartu aktif ke zona"," ",i.jsx("em",{children:"Non-aktif"})," untuk menyembunyikannya. Drag kartu aktif ke slot lain untuk menukar posisinya. Setelah selesai mengatur, klik"," ",i.jsx("strong",{children:"Simpan Perubahan"})," untuk menerapkan ke tampilan depan."]})]}),g&&i.jsxs("div",{className:"ap-save-bar",children:[i.jsx("span",{className:"ap-save-bar-msg",children:"⚠️ Ada perubahan yang belum disimpan"}),i.jsxs("div",{className:"ap-save-bar-actions",children:[i.jsx("button",{className:"btn-bar-cancel",onClick:F,disabled:o,children:"Batal"}),i.jsx("button",{className:"btn-bar-save",onClick:se,disabled:o,children:o?"⏳ Menyimpan…":"✓ Simpan Perubahan"})]})]}),n?i.jsx("div",{style:{padding:"3rem",textAlign:"center",color:"#9ca3af"},children:"⏳ Memuat data…"}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{children:[i.jsxs("p",{className:"ap-section-label",children:["Aktif",i.jsxs("span",{className:"count-pill green",children:[S.length," / 5"]})]}),i.jsxs("div",{className:"ap-active-zone",children:[i.jsx("div",{className:"ap-slots-top",children:vi.slice(0,3).map(A=>i.jsx(cd,{slot:A,label:ds[A],card:k[A],draggingId:m,isDragTarget:y===A,savedRows:e,onDragStart:_,onDragEnd:M,onDragOver:T=>{T.preventDefault(),j(A)},onDragLeave:()=>j(null),onDrop:T=>E(T,A),onEdit:T=>u({mode:"edit",data:T}),onDelete:de},A))}),i.jsx("div",{className:"ap-slots-bottom",children:vi.slice(3).map(A=>i.jsx(cd,{slot:A,label:ds[A],card:k[A],draggingId:m,isDragTarget:y===A,savedRows:e,onDragStart:_,onDragEnd:M,onDragOver:T=>{T.preventDefault(),j(A)},onDragLeave:()=>j(null),onDrop:T=>E(T,A),onEdit:T=>u({mode:"edit",data:T}),onDelete:de,wide:!0},A))})]})]}),i.jsxs("div",{children:[i.jsxs("p",{className:"ap-section-label",children:["Non-aktif",i.jsx("span",{className:"count-pill",children:N.length})]}),i.jsx("div",{className:`ap-inactive-zone${w?" drag-over":""}`,onDragOver:A=>{A.preventDefault(),d(!0)},onDragLeave:()=>d(!1),onDrop:J,children:N.length===0?i.jsxs("div",{className:"ap-inactive-empty",children:["Tidak ada kartu non-aktif.",i.jsx("br",{}),"Drag kartu aktif ke sini untuk menyembunyikannya."]}):i.jsx("div",{className:"ap-inactive-grid",children:N.map(A=>i.jsx(Dv,{row:A,draggingId:m,savedRows:e,onDragStart:_,onDragEnd:M,onEdit:()=>u({mode:"edit",data:A}),onDelete:()=>de(A)},A.id))})})]})]})]}),c&&i.jsx(Ov,{mode:c.mode,data:c.data,activeCount:S.length,onClose:()=>u(null),onSuccess:()=>{u(null),b(),v(c.mode==="add"?"Activity ditambahkan":"Activity diperbarui")},showToast:v}),h&&i.jsx("div",{className:`ap-toast ${h.type}`,children:h.msg})]})};function cd({slot:e,label:t,card:a,draggingId:l,isDragTarget:n,savedRows:r,onDragStart:o,onDragEnd:s,onDragOver:c,onDragLeave:u,onDrop:h,onEdit:p,onDelete:m,wide:x}){const y=a?(()=>{const j=r.find(w=>w.id===a.id);return!j||Number(j.is_active)!==Number(a.is_active)||(j.image_type??null)!==(a.image_type??null)})():!1;return i.jsx("div",{className:`ap-slot${a?" has-card":""}${n?" drag-target":""}`,onDragOver:c,onDragLeave:u,onDrop:h,style:x?{aspectRatio:"16/9"}:{},children:a?i.jsxs("div",{className:`ap-slot-card${l===a.id?" is-dragging":""}`,draggable:!0,onDragStart:j=>o(j,a),onDragEnd:s,children:[i.jsx("img",{src:`http://localhost:8000${a.image_url}`,alt:t}),i.jsx("span",{className:"ap-slot-badge",children:t}),y&&i.jsx("span",{className:"ap-slot-pending-dot",title:"Belum disimpan"}),i.jsxs("div",{className:"ap-slot-card-overlay",children:[i.jsx("span",{className:"ap-slot-card-drag-hint",children:"⠿ Drag untuk pindah"}),i.jsxs("div",{className:"ap-slot-card-actions",children:[i.jsx("button",{className:"ap-slot-card-btn",onClick:()=>p(a),children:"Edit"}),i.jsx("button",{className:"ap-slot-card-btn del",onClick:()=>m(a),children:"Hapus"})]})]})]}):i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"ap-slot-empty-icon",children:"⊕"}),i.jsx("span",{className:"ap-slot-label",children:t})]})})}function Dv({row:e,draggingId:t,savedRows:a,onDragStart:l,onDragEnd:n,onEdit:r,onDelete:o}){const s=(()=>{const c=a.find(u=>u.id===e.id);return c&&Number(c.is_active)!==Number(e.is_active)})();return i.jsxs("div",{className:`ap-inactive-card${t===e.id?" is-dragging":""}`,draggable:!0,onDragStart:c=>l(c,e),onDragEnd:n,style:s?{outline:"2px solid #f59e0b",outlineOffset:"2px"}:{},children:[e.image_url?i.jsx("img",{src:`http://localhost:8000${e.image_url}`,alt:""}):i.jsx("div",{style:{width:"100%",height:"100%",background:"#e2e8f0",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",color:"#94a3b8"},children:"No img"}),i.jsxs("div",{className:"ap-inactive-card-overlay",children:[i.jsx("span",{className:"ap-inactive-card-drag-hint",children:"⠿ Drag ke slot aktif"}),i.jsxs("div",{className:"ap-inactive-card-actions",children:[i.jsx("button",{className:"ap-inactive-card-btn",onClick:r,children:"Edit"}),i.jsx("button",{className:"ap-inactive-card-btn del",onClick:o,children:"Hapus"})]})]})]})}const Ov=({mode:e,data:t,activeCount:a,onClose:l,onSuccess:n,showToast:r})=>{const o=e==="edit",[s,c]=f.useState((t==null?void 0:t.image_type)||""),[u,h]=f.useState((t==null?void 0:t.description)||""),[p,m]=f.useState(null),[x,y]=f.useState(t!=null&&t.image_url?`http://localhost:8000${t.image_url}`:null),[j,w]=f.useState(!1),d=f.useRef(),g=v=>{const S=v.target.files[0];S&&(m(S),y(URL.createObjectURL(S)))},b=async()=>{if(!s){r("Pilih image type","error");return}w(!0);try{if(o){if(p){const v=new FormData;if(v.append("image_url",p),!(await fetch(`${D}/update-updates-section-image-by-id/${t.id}`,{method:"PUT",body:v})).ok){const N=new FormData;N.append("image",p),N.append("image_type",s),await fetch(`${D}/update-updates-section-image/${s}`,{method:"PUT",body:N})}}u!==((t==null?void 0:t.description)||"")&&await fetch(`${D}/update-updates-section-description`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({description:u,image_type:s})})}else{if(!p){r("Gambar harus diunggah","error"),w(!1);return}const v=new FormData;v.append("image_url",p),v.append("image_type",s),v.append("description",u),v.append("is_active","0"),await fetch(`${D}/create-updates-section-image`,{method:"POST",body:v})}n()}catch(v){console.error(v),r("Gagal menyimpan","error")}finally{w(!1)}};return i.jsx("div",{className:"ap-modal-bg",onClick:v=>v.target===v.currentTarget&&l(),children:i.jsxs("div",{className:"ap-modal",children:[i.jsxs("div",{className:"ap-modal-header",children:[i.jsx("span",{className:"ap-modal-title",children:o?"Edit Activity":"Tambah Activity"}),i.jsx("button",{className:"ap-modal-close",onClick:l,children:"✕"})]}),i.jsxs("div",{className:"ap-modal-body",children:[i.jsxs("div",{className:"ap-field",children:[i.jsxs("label",{children:["Image Type ",i.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),i.jsxs("select",{value:s,onChange:v=>c(v.target.value),disabled:o,children:[i.jsx("option",{value:"",children:"— Pilih posisi —"}),vi.map(v=>i.jsx("option",{value:v,children:ds[v]},v))]})]}),i.jsxs("div",{className:"ap-field",children:[i.jsxs("label",{children:["Gambar ",!o&&i.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),i.jsx("input",{type:"file",accept:"image/*",ref:d,onChange:g}),x&&i.jsx("img",{className:"ap-img-preview",src:x,alt:"preview"})]}),i.jsxs("div",{className:"ap-field",children:[i.jsx("label",{children:"Deskripsi Aktivitas"}),i.jsx("textarea",{placeholder:"Ceritakan tentang aktivitas ini…",value:u,onChange:v=>h(v.target.value)})]}),!o&&a>=5&&i.jsxs("div",{style:{background:"#fef2f2",border:"1px solid #fecaca",borderRadius:"8px",padding:"0.75rem 1rem",fontSize:"0.82rem",color:"#ef4444"},children:["⚠️ Sudah ada 5 activity aktif. Activity baru akan disimpan sebagai"," ",i.jsx("strong",{children:"non-aktif"}),"."]})]}),i.jsxs("div",{className:"ap-modal-footer",children:[i.jsx("button",{className:"btn-cancel",onClick:l,children:"Batal"}),i.jsx("button",{className:"btn-save",onClick:b,disabled:j,children:j?"Menyimpan…":"Simpan"})]})]})})},Uv=()=>i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .panel-wrap {
          font-family: 'Plus Jakarta Sans', sans-serif;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .panel-header-left { display: flex; flex-direction: column; gap: 2px; }
        .panel-page-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0a0a0a;
          letter-spacing: -0.02em;
        }
        .panel-page-sub {
          font-size: 0.82rem;
          color: #9ca3af;
        }
        .panel-add-btn {
          background: #1a2744;
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 0.6rem 1.2rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: background 0.2s, transform 0.15s;
        }
        .panel-add-btn:hover { background: #263660; transform: translateY(-1px); }

        .panel-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 1rem;
        }
        .stat-card {
          background: #fff;
          border-radius: 14px;
          padding: 1.2rem 1.4rem;
          border: 1px solid #e9ecf0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .stat-label {
          font-size: 0.75rem;
          color: #9ca3af;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .stat-value {
          font-size: 1.8rem;
          font-weight: 800;
          color: #1a2744;
          line-height: 1;
        }
        .stat-hint { font-size: 0.75rem; color: #6b7280; }

        .panel-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #e9ecf0;
          overflow: hidden;
        }
        .panel-card-header {
          padding: 1.1rem 1.4rem;
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .panel-card-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: #1a2744;
        }
        .panel-search {
          padding: 0.45rem 0.9rem;
          border: 1.5px solid #e5e7eb;
          border-radius: 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.82rem;
          outline: none;
          width: 200px;
          transition: border-color 0.2s;
        }
        .panel-search:focus { border-color: #1a2744; }

        .panel-table-wrap { overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; font-size: 0.855rem; }
        thead tr { background: #f8fafc; }
        th {
          padding: 0.75rem 1.2rem;
          text-align: left;
          font-size: 0.75rem;
          font-weight: 700;
          color: #6b7280;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        td {
          padding: 0.85rem 1.2rem;
          color: #374151;
          border-top: 1px solid #f1f5f9;
          vertical-align: middle;
        }
        tr:hover td { background: #f8fafc; }

        .badge {
          display: inline-block;
          padding: 0.2rem 0.65rem;
          border-radius: 100px;
          font-size: 0.72rem;
          font-weight: 700;
        }
        .badge-active { background: #dcfce7; color: #16a34a; }
        .badge-draft  { background: #fef9c3; color: #ca8a04; }

        .action-btn {
          background: none;
          border: 1.5px solid #e5e7eb;
          border-radius: 7px;
          padding: 0.28rem 0.65rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.18s;
          color: #374151;
        }
        .action-btn:hover { border-color: #1a2744; color: #1a2744; }
        .action-btn.del:hover { border-color: #ef4444; color: #ef4444; }

        .empty-state {
          padding: 3rem;
          text-align: center;
          color: #9ca3af;
          font-size: 0.9rem;
        }
        .empty-icon { font-size: 2rem; margin-bottom: 0.5rem; }

        @media (max-width: 600px) {
          .panel-search { width: 100%; }
          th, td { padding: 0.65rem 0.85rem; }
        }
      `}),i.jsxs("div",{className:"panel-wrap",children:[i.jsxs("div",{className:"panel-header",children:[i.jsxs("div",{className:"panel-header-left",children:[i.jsx("h1",{className:"panel-page-title",children:"◇ Pricelist"}),i.jsx("p",{className:"panel-page-sub",children:"Kelola paket harga layanan"})]}),i.jsx("button",{className:"panel-add-btn",children:"+ Tambah Pricelist"})]}),i.jsxs("div",{className:"panel-stats",children:[i.jsxs("div",{className:"stat-card",children:[i.jsx("span",{className:"stat-label",children:"Total"}),i.jsx("span",{className:"stat-value",children:"0"}),i.jsx("span",{className:"stat-hint",children:"item terdaftar"})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("span",{className:"stat-label",children:"Aktif"}),i.jsx("span",{className:"stat-value",children:"0"}),i.jsx("span",{className:"stat-hint",children:"ditampilkan di landing"})]}),i.jsxs("div",{className:"stat-card",children:[i.jsx("span",{className:"stat-label",children:"Draft"}),i.jsx("span",{className:"stat-value",children:"0"}),i.jsx("span",{className:"stat-hint",children:"belum dipublikasi"})]})]}),i.jsxs("div",{className:"panel-card",children:[i.jsxs("div",{className:"panel-card-header",children:[i.jsx("span",{className:"panel-card-title",children:"Daftar Pricelist"}),i.jsx("input",{className:"panel-search",placeholder:"Cari...",type:"search"})]}),i.jsx("div",{className:"panel-table-wrap",children:i.jsxs("div",{className:"empty-state",children:[i.jsx("div",{className:"empty-icon",children:"◇"}),i.jsx("p",{children:"Belum ada data Pricelist."}),i.jsxs("p",{children:["Klik ",i.jsx("strong",{children:"+ Tambah Pricelist"})," untuk mulai."]})]})})]})]})]}),uo=e=>e?e.startsWith("http")?e:`${Ge}${e}`:null;function ud({title:e,onClose:t,children:a}){return f.useEffect(()=>{const l=n=>n.key==="Escape"&&t();return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[t]),i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        .modal-backdrop {
          position: fixed; inset: 0; z-index: 999;
          background: rgba(10,10,20,0.45);
          display: flex; align-items: center; justify-content: center;
          padding: 1rem;
          animation: fadeIn 0.18s ease;
        }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        .modal-box {
          background: #fff;
          border-radius: 18px;
          width: 100%; max-width: 500px;
          padding: 2rem;
          box-shadow: 0 20px 60px rgba(10,20,80,0.18);
          animation: slideUp 0.2s ease;
          max-height: 90vh;
          overflow-y: auto;
        }
        @keyframes slideUp { from { transform:translateY(16px); opacity:0 } to { transform:translateY(0); opacity:1 } }
        .modal-head {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 1.5rem;
        }
        .modal-title { font-size: 1rem; font-weight: 800; color: #1a2744; }
        .modal-close {
          background: none; border: none; font-size: 1.3rem;
          cursor: pointer; color: #9ca3af; line-height: 1;
          padding: 0.2rem 0.4rem; border-radius: 6px;
          transition: background 0.15s;
        }
        .modal-close:hover { background: #f1f5f9; color: #374151; }
        .field { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 1.1rem; }
        .field label { font-size: 0.78rem; font-weight: 700; color: #6b7280; letter-spacing: 0.04em; text-transform: uppercase; }
        .field input, .field textarea {
          padding: 0.6rem 0.85rem;
          border: 1.5px solid #e5e7eb;
          border-radius: 9px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.87rem;
          outline: none;
          transition: border-color 0.18s;
          resize: vertical;
        }
        .field input:focus, .field textarea:focus { border-color: #1a2744; }
        .field textarea { min-height: 110px; }
        .photo-preview {
          width: 60px; height: 60px; border-radius: 50%;
          object-fit: cover; border: 2px solid #e4e9f7;
          margin-bottom: 0.5rem;
        }
        .photo-placeholder {
          width: 60px; height: 60px; border-radius: 50%;
          background: #f0f3fa; display: flex; align-items: center;
          justify-content: center; color: #b0bbd4;
          font-size: 20px; font-weight: 800;
          margin-bottom: 0.5rem;
        }
        .modal-actions { display: flex; gap: 0.65rem; justify-content: flex-end; margin-top: 0.5rem; }
        .btn-cancel {
          padding: 0.55rem 1.2rem; border-radius: 9px;
          border: 1.5px solid #e5e7eb; background: none;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.85rem; font-weight: 600;
          cursor: pointer; color: #374151;
          transition: all 0.18s;
        }
        .btn-cancel:hover { border-color: #9ca3af; }
        .btn-save {
          padding: 0.55rem 1.4rem; border-radius: 9px;
          border: none; background: #1a2744;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.85rem; font-weight: 700;
          cursor: pointer; color: #fff;
          transition: background 0.18s, transform 0.15s;
        }
        .btn-save:hover { background: #263660; transform: translateY(-1px); }
        .btn-save:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
      `}),i.jsx("div",{className:"modal-backdrop",onClick:l=>l.target===l.currentTarget&&t(),children:i.jsxs("div",{className:"modal-box",children:[i.jsxs("div",{className:"modal-head",children:[i.jsx("span",{className:"modal-title",children:e}),i.jsx("button",{className:"modal-close",onClick:t,children:"✕"})]}),a]})})]})}const Lv=()=>{const[e,t]=f.useState([]),[a,l]=f.useState(""),[n,r]=f.useState(!0),[o,s]=f.useState(null),[c,u]=f.useState(null),[h,p]=f.useState(!1),[m,x]=f.useState(null),[y,j]=f.useState(""),[w,d]=f.useState(""),[g,b]=f.useState(null),[v,S]=f.useState(null),N=f.useRef(),[k,_]=f.useState([]),[M,E]=f.useState(!0),[J,F]=f.useState(!1),[se,de]=f.useState(null),[A,T]=f.useState(null),[C,R]=f.useState(!1),V=f.useRef(),[q,St]=f.useState("testimony"),Pe=async()=>{r(!0);try{const P=await(await fetch(`${D}/testimonials`)).json();t(Array.isArray(P)?P:[])}catch{pe("Gagal memuat data.","error")}finally{r(!1)}},Re=async()=>{E(!0);try{const P=await(await fetch(`${D}/load-logo`,{method:"POST"})).json();_(Array.isArray(P)?P:[])}catch{pe("Gagal memuat logo.","error")}finally{E(!1)}};f.useEffect(()=>{Pe(),Re()},[]);const pe=(O,P="success")=>{x({msg:O,type:P}),setTimeout(()=>x(null),3e3)},Ba=()=>{u(null),j(""),d(""),b(null),S(null),s("add")},Kp=O=>{u(O),j(O.name||""),d(O.testimonial||""),b(null),S(uo(O.profile_image)),s("edit")},Zp=O=>{const P=O.target.files[0];P&&(b(P),S(URL.createObjectURL(P)))},$p=async()=>{if(!y.trim()||!w.trim()){pe("Nama dan testimoni wajib diisi.","error");return}p(!0);const O=new FormData;O.append("name",y.trim()),O.append("testimonial",w.trim()),g&&O.append("profile_image",g);try{const P=o==="add"?`${D}/create-testimonials`:`${D}/update-testimonials/${c.id}`;if(!(await fetch(P,{method:o==="add"?"POST":"PUT",body:O})).ok)throw new Error;pe(o==="add"?"Testimony berhasil ditambahkan!":"Testimony berhasil diperbarui!"),s(null),Pe()}catch{pe("Gagal menyimpan data.","error")}finally{p(!1)}},Fp=async O=>{if(window.confirm("Yakin hapus testimony ini?"))try{if(!(await fetch(`${D}/delete-testimonials/${O}`,{method:"DELETE"})).ok)throw new Error;pe("Testimony berhasil dihapus."),Pe()}catch{pe("Gagal menghapus data.","error")}},Wp=O=>{const P=O.target.files[0];P&&(de(P),T(URL.createObjectURL(P)))},Ip=()=>{de(null),T(null),F(!0)},Pp=async()=>{if(!se){pe("File logo harus dipilih.","error");return}R(!0);const O=new FormData;O.append("logo",se);try{if(!(await fetch(`${D}/create-logo`,{method:"POST",body:O})).ok)throw new Error;pe("Logo berhasil ditambahkan!"),F(!1),Re()}catch{pe("Gagal menyimpan logo.","error")}finally{R(!1)}},e0=async O=>{if(window.confirm("Yakin hapus logo ini?"))try{if(!(await fetch(`${D}/delete-logo/${O}`,{method:"DELETE"})).ok)throw new Error;pe("Logo berhasil dihapus."),Re()}catch{pe("Gagal menghapus logo.","error")}},jc=e.filter(O=>{var P,kt;return((P=O.name)==null?void 0:P.toLowerCase().includes(a.toLowerCase()))||((kt=O.testimonial)==null?void 0:kt.toLowerCase().includes(a.toLowerCase()))}),t0=e.length;return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .panel-wrap {
          font-family: 'Plus Jakarta Sans', sans-serif;
          display: flex; flex-direction: column; gap: 1.5rem;
        }
        .panel-header {
          display: flex; align-items: center;
          justify-content: space-between;
          flex-wrap: wrap; gap: 1rem;
        }
        .panel-header-left { display: flex; flex-direction: column; gap: 2px; }
        .panel-page-title {
          font-size: 1.35rem; font-weight: 800;
          color: #0a0a0a; letter-spacing: -0.02em;
        }
        .panel-page-sub { font-size: 0.82rem; color: #9ca3af; }
        .panel-add-btn {
          background: #1a2744; color: #fff; border: none;
          border-radius: 10px; padding: 0.6rem 1.2rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600; font-size: 0.875rem;
          cursor: pointer; display: flex; align-items: center;
          gap: 0.4rem; transition: background 0.2s, transform 0.15s;
        }
        .panel-add-btn:hover { background: #263660; transform: translateY(-1px); }

        .panel-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 1rem;
        }
        .stat-card {
          background: #fff; border-radius: 14px;
          padding: 1.2rem 1.4rem; border: 1px solid #e9ecf0;
          display: flex; flex-direction: column; gap: 0.4rem;
        }
        .stat-label {
          font-size: 0.75rem; color: #9ca3af; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.06em;
        }
        .stat-value {
          font-size: 1.8rem; font-weight: 800;
          color: #1a2744; line-height: 1;
        }
        .stat-hint { font-size: 0.75rem; color: #6b7280; }

        .panel-card {
          background: #fff; border-radius: 16px;
          border: 1px solid #e9ecf0; overflow: hidden;
        }
        .panel-card-header {
          padding: 1.1rem 1.4rem;
          border-bottom: 1px solid #f1f5f9;
          display: flex; align-items: center;
          justify-content: space-between;
          flex-wrap: wrap; gap: 0.75rem;
        }
        .panel-card-title { font-size: 0.9rem; font-weight: 700; color: #1a2744; }
        .panel-search {
          padding: 0.45rem 0.9rem;
          border: 1.5px solid #e5e7eb; border-radius: 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.82rem; outline: none; width: 200px;
          transition: border-color 0.2s;
        }
        .panel-search:focus { border-color: #1a2744; }

        .panel-table-wrap { overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; font-size: 0.855rem; }
        thead tr { background: #f8fafc; }
        th {
          padding: 0.75rem 1.2rem; text-align: left;
          font-size: 0.75rem; font-weight: 700; color: #6b7280;
          letter-spacing: 0.06em; text-transform: uppercase; white-space: nowrap;
        }
        td {
          padding: 0.85rem 1.2rem; color: #374151;
          border-top: 1px solid #f1f5f9; vertical-align: middle;
        }
        tr:hover td { background: #f8fafc; }

        .td-avatar {
          width: 40px; height: 40px; border-radius: 50%;
          object-fit: cover; border: 2px solid #e4e9f7;
        }
        .td-avatar-placeholder {
          width: 40px; height: 40px; border-radius: 50%;
          background: #f0f3fa; display: flex; align-items: center;
          justify-content: center; color: #b0bbd4;
          font-size: 16px; font-weight: 800;
        }
        .td-quote {
          max-width: 360px;
          white-space: nowrap; overflow: hidden;
          text-overflow: ellipsis; color: #6b7280;
          font-style: italic; font-size: 0.82rem;
        }

        .action-btn {
          background: none; border: 1.5px solid #e5e7eb;
          border-radius: 7px; padding: 0.28rem 0.65rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.75rem; font-weight: 600;
          cursor: pointer; transition: all 0.18s; color: #374151;
        }
        .action-btn:hover { border-color: #1a2744; color: #1a2744; }
        .action-btn.del:hover { border-color: #ef4444; color: #ef4444; }

        .empty-state {
          padding: 3rem; text-align: center;
          color: #9ca3af; font-size: 0.9rem;
        }
        .empty-icon { font-size: 2rem; margin-bottom: 0.5rem; }

        .skeleton-row td { animation: pulse 1.4s infinite; }
        @keyframes pulse { 0%,100% { opacity:1 } 50% { opacity:0.4 } }
        .skel {
          display: inline-block; background: #e9ecf0;
          border-radius: 6px; height: 14px;
        }

        /* Toast */
        .toast {
          position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 9999;
          padding: 0.75rem 1.2rem; border-radius: 10px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.855rem; font-weight: 600;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          animation: toastIn 0.25s ease;
        }
        @keyframes toastIn { from { opacity:0; transform:translateY(12px) } to { opacity:1; transform:translateY(0) } }
        .toast-success { background: #1a2744; color: #fff; }
        .toast-error   { background: #ef4444; color: #fff; }

        /* Tab navigation */
        .tab-nav {
          display: flex; gap: 0;
          border-bottom: 1.5px solid #e9ecf0;
        }
        .tab-btn {
          padding: 0.7rem 1.4rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.85rem; font-weight: 600;
          border: none; background: none; cursor: pointer;
          color: #9ca3af;
          border-bottom: 2.5px solid transparent;
          margin-bottom: -1.5px;
          transition: color 0.18s, border-color 0.18s;
        }
        .tab-btn.active { color: #1a2744; border-bottom-color: #1a2744; }
        .tab-btn:hover:not(.active) { color: #374151; }

        /* Logo grid */
        .logo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 1rem;
          padding: 1.4rem;
        }
        .logo-card {
          border: 1.5px solid #e9ecf0;
          border-radius: 12px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          background: #fafbfc;
          transition: border-color 0.18s, box-shadow 0.18s;
        }
        .logo-card:hover { border-color: #c8d0e0; box-shadow: 0 2px 10px rgba(26,39,68,0.07); }
        .logo-card img {
          height: 40px; max-width: 120px;
          object-fit: contain;
        }
        .logo-card-id {
          font-size: 0.7rem; color: #b0bbd4; font-weight: 600;
        }
        .logo-empty { padding: 3rem; text-align: center; color: #9ca3af; font-size: 0.9rem; }
        .logo-skel-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 1rem;
          padding: 1.4rem;
        }
        .logo-skel-card {
          border: 1.5px solid #e9ecf0;
          border-radius: 12px;
          height: 90px;
          animation: pulse 1.4s infinite;
          background: #f3f4f6;
        }

        /* Logo upload area in modal */
        .logo-upload-area {
          border: 2px dashed #e5e7eb;
          border-radius: 12px;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          transition: border-color 0.18s, background 0.18s;
          margin-bottom: 1rem;
        }
        .logo-upload-area:hover { border-color: #1a2744; background: #f8faff; }
        .logo-upload-area img { height: 48px; max-width: 160px; object-fit: contain; }
        .logo-upload-hint { font-size: 0.78rem; color: #9ca3af; text-align: center; }

        @media (max-width: 600px) {
          .panel-search { width: 100%; }
          th, td { padding: 0.65rem 0.85rem; }
        }
      `}),m&&i.jsx("div",{className:`toast toast-${m.type}`,children:m.msg}),i.jsxs("div",{className:"panel-wrap",children:[i.jsxs("div",{className:"panel-header",children:[i.jsxs("div",{className:"panel-header-left",children:[i.jsx("h1",{className:"panel-page-title",children:q==="testimony"?"❝ Testimony":"🏷️ Logo Klien"}),i.jsx("p",{className:"panel-page-sub",children:q==="testimony"?"Kelola testimoni klien":"Kelola logo klien yang tampil di website"})]}),q==="testimony"?i.jsx("button",{className:"panel-add-btn",onClick:Ba,children:"+ Tambah Testimony"}):i.jsx("button",{className:"panel-add-btn",onClick:Ip,children:"+ Tambah Logo"})]}),i.jsx("div",{className:"panel-stats",children:i.jsxs("div",{className:"stat-card",children:[i.jsx("span",{className:"stat-label",children:q==="testimony"?"Total Testimony":"Total Logo"}),i.jsx("span",{className:"stat-value",children:q==="testimony"?n?"—":t0:M?"—":k.length}),i.jsx("span",{className:"stat-hint",children:"item terdaftar"})]})}),i.jsxs("div",{className:"panel-card",style:{overflow:"visible"},children:[i.jsxs("div",{className:"tab-nav",children:[i.jsx("button",{className:`tab-btn ${q==="testimony"?"active":""}`,onClick:()=>St("testimony"),children:"❝ Testimony"}),i.jsx("button",{className:`tab-btn ${q==="logo"?"active":""}`,onClick:()=>St("logo"),children:"🏷️ Logo Klien"})]}),q==="testimony"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"panel-card-header",style:{borderTop:"1px solid #f1f5f9"},children:[i.jsx("span",{className:"panel-card-title",children:"Daftar Testimony"}),i.jsx("input",{className:"panel-search",placeholder:"Cari nama / teks…",type:"search",value:a,onChange:O=>l(O.target.value)})]}),i.jsx("div",{className:"panel-table-wrap",children:n?i.jsxs("table",{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"No"}),i.jsx("th",{children:"Foto"}),i.jsx("th",{children:"Nama"}),i.jsx("th",{children:"Testimoni"}),i.jsx("th",{children:"Aksi"})]})}),i.jsx("tbody",{children:[1,2,3].map(O=>i.jsxs("tr",{className:"skeleton-row",children:[i.jsx("td",{children:i.jsx("span",{className:"skel",style:{width:20}})}),i.jsx("td",{children:i.jsx("span",{className:"skel",style:{width:40,height:40,borderRadius:"50%",display:"inline-block"}})}),i.jsx("td",{children:i.jsx("span",{className:"skel",style:{width:120}})}),i.jsx("td",{children:i.jsx("span",{className:"skel",style:{width:220}})}),i.jsx("td",{children:i.jsx("span",{className:"skel",style:{width:80}})})]},O))})]}):jc.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx("div",{className:"empty-icon",children:"❝"}),i.jsx("p",{children:a?"Tidak ada hasil pencarian.":"Belum ada data Testimony."}),!a&&i.jsxs("p",{children:["Klik"," ",i.jsx("strong",{children:"+ Tambah Testimony"})," ","untuk mulai."]})]}):i.jsxs("table",{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"No"}),i.jsx("th",{children:"Foto"}),i.jsx("th",{children:"Nama"}),i.jsx("th",{children:"Testimoni"}),i.jsx("th",{children:"Aksi"})]})}),i.jsx("tbody",{children:jc.map((O,P)=>{const kt=uo(O.profile_image),wc=(O.name||"?").charAt(0).toUpperCase();return i.jsxs("tr",{children:[i.jsx("td",{style:{color:"#9ca3af",fontSize:"0.8rem"},children:P+1}),i.jsx("td",{children:kt?i.jsx("img",{src:kt,alt:O.name,className:"td-avatar"}):i.jsx("div",{className:"td-avatar-placeholder",children:wc})}),i.jsx("td",{style:{fontWeight:600,color:"#1a2744",whiteSpace:"nowrap"},children:O.name}),i.jsx("td",{children:i.jsxs("div",{className:"td-quote",children:['"',O.testimonial,'"']})}),i.jsx("td",{children:i.jsxs("div",{style:{display:"flex",gap:"0.4rem"},children:[i.jsx("button",{className:"action-btn",onClick:()=>Kp(O),children:"Edit"}),i.jsx("button",{className:"action-btn del",onClick:()=>Fp(O.id),children:"Hapus"})]})})]},O.id)})})]})})]}),q==="logo"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"panel-card-header",style:{borderTop:"1px solid #f1f5f9"},children:[i.jsx("span",{className:"panel-card-title",children:"Daftar Logo Klien"}),i.jsx("span",{style:{fontSize:"0.78rem",color:"#9ca3af"},children:"Logo ditampilkan sebagai ticker bergerak di website"})]}),M?i.jsx("div",{className:"logo-skel-grid",children:[1,2,3,4,5,6].map(O=>i.jsx("div",{className:"logo-skel-card"},O))}):k.length===0?i.jsxs("div",{className:"logo-empty",children:[i.jsx("div",{style:{fontSize:"2rem",marginBottom:"0.5rem"},children:"🏷️"}),i.jsx("p",{children:"Belum ada logo yang ditambahkan."}),i.jsxs("p",{children:["Klik ",i.jsx("strong",{children:"+ Tambah Logo"})," ","untuk mulai."]})]}):i.jsx("div",{className:"logo-grid",children:k.map((O,P)=>{const kt=uo(O.image_url);return i.jsxs("div",{className:"logo-card",children:[kt?i.jsx("img",{src:kt,alt:`Logo ${P+1}`}):i.jsx("div",{style:{height:40,display:"flex",alignItems:"center",color:"#b0bbd4",fontSize:"0.8rem"},children:"No image"}),i.jsxs("span",{className:"logo-card-id",children:["ID #",O.id]}),i.jsx("button",{className:"action-btn del",onClick:()=>e0(O.id),children:"Hapus"})]},O.id)})})]})]})]}),o&&i.jsxs(ud,{title:o==="add"?"Tambah Testimony":"Edit Testimony",onClose:()=>s(null),children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.2rem"},children:[v?i.jsx("img",{src:v,alt:"preview",className:"photo-preview"}):i.jsx("div",{className:"photo-placeholder",children:y?y.charAt(0).toUpperCase():"?"}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.3rem"},children:[i.jsx("span",{style:{fontSize:"0.78rem",fontWeight:700,color:"#6b7280",textTransform:"uppercase",letterSpacing:"0.04em"},children:"Foto Profil"}),i.jsx("button",{style:{padding:"0.35rem 0.8rem",border:"1.5px solid #e5e7eb",borderRadius:"7px",background:"none",cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"0.78rem",fontWeight:600,color:"#374151",transition:"all 0.18s"},onClick:()=>N.current.click(),children:v?"Ganti Foto":"Pilih Foto"}),i.jsx("input",{ref:N,type:"file",accept:"image/*",style:{display:"none"},onChange:Zp}),i.jsx("span",{style:{fontSize:"0.72rem",color:"#9ca3af"},children:"JPG / PNG / WebP"})]})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Nama"}),i.jsx("input",{type:"text",placeholder:"Nama klien",value:y,onChange:O=>j(O.target.value)})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Testimoni"}),i.jsx("textarea",{placeholder:"Tulis testimoni di sini…",value:w,onChange:O=>d(O.target.value)})]}),i.jsxs("div",{className:"modal-actions",children:[i.jsx("button",{className:"btn-cancel",onClick:()=>s(null),children:"Batal"}),i.jsx("button",{className:"btn-save",onClick:$p,disabled:h,children:h?"Menyimpan…":"Simpan"})]})]}),J&&i.jsxs(ud,{title:"Tambah Logo Klien",onClose:()=>F(!1),children:[i.jsxs("div",{className:"logo-upload-area",onClick:()=>V.current.click(),children:[A?i.jsx("img",{src:A,alt:"preview logo"}):i.jsxs(i.Fragment,{children:[i.jsx("span",{style:{fontSize:"2rem"},children:"🖼️"}),i.jsx("span",{style:{fontSize:"0.85rem",fontWeight:600,color:"#374151"},children:"Klik untuk pilih file logo"})]}),i.jsx("span",{className:"logo-upload-hint",children:"PNG / SVG / WebP — rekomendasi rasio landscape, background transparan"})]}),i.jsx("input",{ref:V,type:"file",accept:"image/*",style:{display:"none"},onChange:Wp}),i.jsxs("div",{className:"modal-actions",children:[i.jsx("button",{className:"btn-cancel",onClick:()=>F(!1),children:"Batal"}),i.jsx("button",{className:"btn-save",onClick:Pp,disabled:C,children:C?"Menyimpan…":"Simpan"})]})]})]})},Bv=`${D}/contact`,Hv=`${D}/update-contact`,Yv=`${D}/contact-form`;async function Gv(e,t){const a=new FormData;Object.entries(t).forEach(([n,r])=>{r!=null&&a.append(n,r)});const l=await fetch(e,{method:"PUT",body:a});if(!l.ok){const n=await l.json().catch(()=>({}));throw new Error(n.error||`HTTP ${l.status}`)}return l.status!==204?l.json():null}async function Qp(e){const t=await fetch(e);if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()}const qv={instagram:"",gmail:"",phone_number1:"",phone_number2:""};function ti({label:e,type:t="text",field:a,placeholder:l,icon:n,value:r,onChange:o}){return i.jsxs("div",{className:"field",children:[i.jsx("label",{children:e}),i.jsxs("div",{className:"input-wrap",children:[i.jsx("span",{className:"input-icon",children:n}),i.jsx("input",{type:t,placeholder:l,value:r,onChange:s=>o(a,s.target.value)})]})]})}function Xv({item:e,mode:t,onClose:a,onSave:l}){const[n,r]=f.useState(e?{instagram:e.instagram_account??e.instagram??"",gmail:e.gmail_account??e.gmail??"",phone_number1:e.phone_number1??"",phone_number2:e.phone_number2??""}:{...qv}),o=(p,m)=>r(x=>({...x,[p]:m})),s=p=>{p.preventDefault(),l(n)},c=i.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5"}),i.jsx("circle",{cx:"12",cy:"12",r:"4"}),i.jsx("circle",{cx:"17.5",cy:"6.5",r:"0.8",fill:"currentColor",stroke:"none"})]}),u=i.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"3"}),i.jsx("polyline",{points:"2,4 12,13 22,4"})]}),h=i.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"})});return i.jsx("div",{className:"modal-overlay",children:i.jsxs("div",{className:"modal-box",role:"dialog","aria-modal":"true",children:[i.jsxs("div",{className:"modal-head",children:[i.jsx("h3",{className:"modal-title",children:t==="add"?"➕ Tambah Kontak":"✎ Edit Kontak"}),i.jsx("button",{className:"modal-close",onClick:a,"aria-label":"Tutup",children:"✕"})]}),i.jsxs("form",{onSubmit:s,children:[i.jsx(ti,{label:"Instagram",field:"instagram",placeholder:"@username",icon:c,value:n.instagram,onChange:o}),i.jsx(ti,{label:"Gmail / Email",type:"email",field:"gmail",placeholder:"email@domain.com",icon:u,value:n.gmail,onChange:o}),i.jsx(ti,{label:"Nomor Telepon 1",field:"phone_number1",placeholder:"+62 878-xxxx-xxxx",icon:h,value:n.phone_number1,onChange:o}),i.jsx(ti,{label:"Nomor Telepon 2",field:"phone_number2",placeholder:"+62 821-xxxx-xxxx",icon:h,value:n.phone_number2,onChange:o}),i.jsxs("div",{className:"modal-foot",children:[i.jsx("button",{type:"button",className:"btn btn-outline",onClick:a,children:"Batal"}),i.jsx("button",{type:"submit",className:"btn btn-primary",children:t==="add"?"➕ Tambah":"✎ Simpan"})]})]})]})})}function Vv(){const[e,t]=f.useState([]),[a,l]=f.useState(!0),[n,r]=f.useState(null);return f.useEffect(()=>{Qp(Yv).then(o=>t(Array.isArray(o)?o:[])).catch(console.error).finally(()=>l(!1))},[]),i.jsxs("div",{className:"inbox-wrap",children:[i.jsxs("div",{className:"inbox-header",children:[i.jsx("span",{className:"panel-card-title",children:"📨 Pesan Masuk"}),i.jsxs("span",{className:"badge badge-gray",children:[e.length," pesan"]})]}),a?i.jsx("div",{className:"loading-state",children:i.jsx("p",{children:"Memuat pesan…"})}):e.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx("div",{className:"empty-state-icon",children:i.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#9ca3af",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"3"}),i.jsx("polyline",{points:"2,4 12,13 22,4"})]})}),i.jsx("p",{className:"empty-state-title",children:"Belum ada pesan masuk"}),i.jsx("p",{className:"empty-state-sub",children:"Pesan dari form kontak akan muncul di sini."})]}):i.jsx("div",{className:"inbox-list",children:e.map(o=>i.jsxs("div",{className:`inbox-item ${(n==null?void 0:n.id)===o.id?"inbox-item-active":""}`,onClick:()=>r((n==null?void 0:n.id)===o.id?null:o),children:[i.jsxs("div",{className:"inbox-item-top",children:[i.jsxs("span",{className:"inbox-name",children:[o.first_name," ",o.last_name]}),i.jsxs("span",{className:"inbox-id",children:["#",o.id]})]}),i.jsx("span",{className:"inbox-email",children:o.email}),(n==null?void 0:n.id)===o.id&&i.jsx("div",{className:"inbox-message",children:i.jsx("p",{children:o.message})})]},o.id))})]})}const Jv=()=>{const[e,t]=f.useState(null),[a,l]=f.useState(!0),[n,r]=f.useState(null),[o,s]=f.useState({msg:"",type:"success"}),[c,u]=f.useState("info"),h=f.useCallback(async()=>{l(!0);try{const j=await Qp(Bv);console.log("Data mentah dari API:",j),t(Array.isArray(j)?j[0]??null:j)}catch(j){console.error("Gagal fetch contacts:",j),t(null)}finally{l(!1)}},[]);f.useEffect(()=>{h()},[h]);const p=(j,w="success")=>{s({msg:j,type:w}),setTimeout(()=>s({msg:"",type:"success"}),2500)},m=async j=>{try{await Gv(Hv,j),await h(),p(n==="add"?"✓ Data kontak berhasil ditambahkan":"✓ Data kontak berhasil diperbarui")}catch(w){p(`✕ ${w.message||"Gagal menyimpan, coba lagi."}`,"error")}r(null)},x=[{key:"instagram_account",fallbackKey:"instagram",label:"Instagram",icon:i.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5"}),i.jsx("circle",{cx:"12",cy:"12",r:"4"}),i.jsx("circle",{cx:"17.5",cy:"6.5",r:"0.8",fill:"currentColor",stroke:"none"})]})},{key:"gmail_account",fallbackKey:"gmail",label:"Gmail / Email",icon:i.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"3"}),i.jsx("polyline",{points:"2,4 12,13 22,4"})]})},{key:"phone_number1",label:"Nomor Telepon 1",icon:i.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"})})},{key:"phone_number2",label:"Nomor Telepon 2",icon:i.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"})})}],y=(j,w,d)=>(j==null?void 0:j[w])??(d?j==null?void 0:j[d]:void 0);return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        .panel-wrap { font-family: 'Plus Jakarta Sans', sans-serif; display: flex; flex-direction: column; gap: 1.5rem; }
        .panel-header { display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .panel-page-title { font-size: 1.25rem; font-weight: 800; color: #0a0a0a; letter-spacing: -0.02em; margin: 0; }
        .panel-page-sub { font-size: 0.8rem; color: #9ca3af; margin: 2px 0 0; }
        .panel-card { background: #fff; border-radius: 16px; border: 1px solid #e9ecf0; overflow: hidden; }
        .panel-card-header { padding: 1rem 1.25rem; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; }
        .panel-card-title { font-size: 0.875rem; font-weight: 700; color: #1a2744; }
        .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0; }
        .info-item { padding: 1.25rem 1.5rem; border-right: 1px solid #f1f5f9; border-bottom: 1px solid #f1f5f9; }
        .info-item:last-child { border-right: none; }
        .info-label { font-size: 0.7rem; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.07em; display: flex; align-items: center; gap: 6px; margin-bottom: 6px; }
        .info-label svg { opacity: 0.6; }
        .info-value { font-size: 0.9rem; font-weight: 600; color: #1a2744; word-break: break-all; }
        .info-value.empty { color: #d1d5db; font-style: italic; font-weight: 400; }
        .panel-foot { padding: 1rem 1.25rem; display: flex; justify-content: flex-end; gap: 8px; border-top: 1px solid #f1f5f9; }
        .empty-state { padding: 3rem 1.5rem; text-align: center; }
        .empty-state-icon { width: 56px; height: 56px; border-radius: 50%; background: #f1f5f9; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; }
        .empty-state-title { font-size: 0.95rem; font-weight: 700; color: #1a2744; margin: 0 0 4px; }
        .empty-state-sub { font-size: 0.8rem; color: #9ca3af; margin: 0 0 1.25rem; }
        .loading-state { padding: 3rem; text-align: center; color: #9ca3af; font-size: 0.875rem; }
        .btn { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.8rem; font-weight: 600; border-radius: 8px; padding: 7px 14px; cursor: pointer; border: 1.5px solid; transition: all 0.15s; display: inline-flex; align-items: center; gap: 5px; }
        .btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .btn-primary { background: #1a2744; color: #fff; border-color: #1a2744; }
        .btn-primary:hover:not(:disabled) { background: #263660; }
        .btn-success { background: #0d9e6f; color: #fff; border-color: #0d9e6f; }
        .btn-success:hover:not(:disabled) { background: #0b8a60; }
        .btn-outline { background: none; color: #374151; border-color: #e5e7eb; }
        .btn-outline:hover:not(:disabled) { border-color: #1a2744; color: #1a2744; }
        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center; z-index: 1000; }
        .modal-box { background: #fff; border-radius: 16px; padding: 1.75rem; width: 440px; max-width: 95vw; max-height: 90vh; overflow-y: auto; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
        .modal-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; }
        .modal-title { font-size: 1rem; font-weight: 800; color: #0a0a0a; margin: 0; letter-spacing: -0.02em; }
        .modal-close { background: none; border: none; font-size: 1rem; cursor: pointer; color: #9ca3af; padding: 2px 6px; border-radius: 6px; transition: all 0.15s; }
        .modal-close:hover { background: #f1f5f9; color: #1a2744; }
        .field { margin-bottom: 14px; }
        .field label { display: block; font-size: 0.75rem; font-weight: 600; color: #374151; margin-bottom: 5px; }
        .input-wrap { position: relative; }
        .input-icon { position: absolute; left: 11px; top: 50%; transform: translateY(-50%); color: #9ca3af; display: flex; align-items: center; pointer-events: none; }
        .input-wrap input { width: 100%; box-sizing: border-box; padding: 9px 12px 9px 34px; border: 1.5px solid #e5e7eb; border-radius: 8px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.84rem; color: #0a0a0a; outline: none; transition: border-color 0.2s; }
        .input-wrap input:focus { border-color: #1a2744; }
        .modal-foot { display: flex; justify-content: flex-end; gap: 8px; margin-top: 1.25rem; }
        .toast { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); padding: 10px 22px; border-radius: 10px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.82rem; font-weight: 600; pointer-events: none; z-index: 2000; animation: fadeInUp 0.2s ease; white-space: nowrap; }
        .toast.success { background: #1a2744; color: #fff; }
        .toast.error { background: #dc2626; color: #fff; }
        @keyframes fadeInUp { from { opacity:0; transform: translateX(-50%) translateY(8px); } to { opacity:1; transform: translateX(-50%) translateY(0); } }
        .badge { font-size: 0.68rem; font-weight: 700; padding: 2px 8px; border-radius: 20px; letter-spacing: 0.04em; text-transform: uppercase; }
        .badge-success { background: #d1fae5; color: #065f46; }
        .badge-gray { background: #f1f5f9; color: #64748b; }
        .tab-bar { display: flex; gap: 4px; border-bottom: 1px solid #e9ecf0; padding: 0 1.25rem; }
        .tab-btn { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.8rem; font-weight: 600; padding: 10px 14px; border: none; background: none; cursor: pointer; color: #9ca3af; border-bottom: 2px solid transparent; margin-bottom: -1px; transition: all 0.15s; }
        .tab-btn.active { color: #1a2744; border-bottom-color: #1a2744; }
        .tab-btn:hover:not(.active) { color: #374151; }
        .inbox-wrap { display: flex; flex-direction: column; }
        .inbox-header { padding: 1rem 1.25rem; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: space-between; }
        .inbox-list { display: flex; flex-direction: column; }
        .inbox-item { padding: 1rem 1.5rem; border-bottom: 1px solid #f1f5f9; cursor: pointer; transition: background 0.12s; display: flex; flex-direction: column; gap: 3px; }
        .inbox-item:hover { background: #f8fafc; }
        .inbox-item-active { background: #f0f4ff; }
        .inbox-item-top { display: flex; align-items: center; justify-content: space-between; }
        .inbox-name { font-size: 0.875rem; font-weight: 700; color: #1a2744; }
        .inbox-id { font-size: 0.7rem; color: #9ca3af; }
        .inbox-email { font-size: 0.78rem; color: #6b7280; }
        .inbox-message { margin-top: 10px; padding: 10px 14px; background: #fff; border: 1px solid #e9ecf0; border-radius: 10px; }
        .inbox-message p { font-size: 0.84rem; color: #374151; line-height: 1.6; margin: 0; white-space: pre-wrap; }
      `}),i.jsxs("div",{className:"panel-wrap",children:[i.jsxs("div",{className:"panel-header",children:[i.jsxs("div",{children:[i.jsx("h1",{className:"panel-page-title",children:"✉ Contact Us"}),i.jsx("p",{className:"panel-page-sub",children:"Kelola informasi kontak yang tampil di landing page"})]}),!a&&!e&&c==="info"&&i.jsx("button",{className:"btn btn-success",onClick:()=>r("add"),children:"➕ Tambah Kontak"})]}),i.jsxs("div",{className:"panel-card",children:[i.jsxs("div",{className:"tab-bar",children:[i.jsx("button",{className:`tab-btn ${c==="info"?"active":""}`,onClick:()=>u("info"),children:"Informasi Kontak"}),i.jsx("button",{className:`tab-btn ${c==="inbox"?"active":""}`,onClick:()=>u("inbox"),children:"Pesan Masuk"})]}),c==="info"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"panel-card-header",children:[i.jsx("span",{className:"panel-card-title",children:"Informasi Kontak"}),i.jsx("span",{className:`badge ${e?"badge-success":"badge-gray"}`,children:e?"Aktif":"Belum ada data"})]}),a?i.jsx("div",{className:"loading-state",children:i.jsx("p",{children:"Memuat data…"})}):e?i.jsx("div",{className:"info-grid",children:x.map(({key:j,fallbackKey:w,label:d,icon:g})=>{const b=y(e,j,w);return i.jsxs("div",{className:"info-item",children:[i.jsxs("div",{className:"info-label",children:[g,d]}),i.jsx("div",{className:`info-value ${b?"":"empty"}`,children:b||"Belum diisi"})]},j)})}):i.jsxs("div",{className:"empty-state",children:[i.jsx("div",{className:"empty-state-icon",children:i.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#9ca3af",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"3"}),i.jsx("polyline",{points:"2,4 12,13 22,4"})]})}),i.jsx("p",{className:"empty-state-title",children:"Belum ada data kontak"}),i.jsx("p",{className:"empty-state-sub",children:"Tambahkan informasi kontak untuk ditampilkan di landing page."}),i.jsx("button",{className:"btn btn-success",onClick:()=>r("add"),children:"➕ Tambah Kontak Sekarang"})]}),e&&i.jsx("div",{className:"panel-foot",children:i.jsx("button",{className:"btn btn-primary",onClick:()=>r("edit"),disabled:a,children:"✎ Edit Kontak"})})]}),c==="inbox"&&i.jsx(Vv,{})]})]}),n&&i.jsx(Xv,{item:e,mode:n,onClose:()=>r(null),onSave:m}),o.msg&&i.jsx("div",{className:`toast ${o.type}`,children:o.msg})]})};function Qv(){return i.jsxs(tx,{children:[i.jsx(_e,{path:"/",element:i.jsx(dv,{})}),i.jsx(_e,{path:"/admin/login",element:i.jsx(fv,{})}),i.jsx(_e,{element:i.jsx(Ox,{}),children:i.jsxs(_e,{path:"/admin",element:i.jsx(pv,{}),children:[i.jsx(_e,{index:!0,element:i.jsx(hv,{})}),i.jsx(_e,{path:"about",element:i.jsx(gv,{})}),i.jsx(_e,{path:"officialTalent",element:i.jsx(vv,{})}),i.jsx(_e,{path:"creatorPlus",element:i.jsx(Ev,{})}),i.jsx(_e,{path:"service",element:i.jsx(_v,{})}),i.jsx(_e,{path:"creator",element:i.jsx(Mv,{})}),i.jsx(_e,{path:"activity",element:i.jsx(Rv,{})}),i.jsx(_e,{path:"pricelist",element:i.jsx(Uv,{})}),i.jsx(_e,{path:"testimony",element:i.jsx(Lv,{})}),i.jsx(_e,{path:"contact",element:i.jsx(Jv,{})})]})}),i.jsx(_e,{path:"*",element:i.jsx(Dp,{to:"/",replace:!0})})]})}const dd=document.getElementById("root");dd?e1.createRoot(dd).render(i.jsx(y0.StrictMode,{children:i.jsx(Nx,{children:i.jsx(Qv,{})})})):console.error("Elemen dengan id 'root' tidak ditemukan. Pastikan ada <div id='root'></div> di file Blade kamu.");
