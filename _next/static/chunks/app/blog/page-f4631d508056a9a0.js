(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{927:function(e,r,t){Promise.resolve().then(t.bind(t,7633))},5601:function(e,r){"use strict";function t(){return null}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return t}}),("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),e.exports=r.default)},7633:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return f}});var n=t(3827),o=t(8792),a=e=>{let{date:r,title:t,des:a,slug:i}=e;return(0,n.jsxs)(o.default,{href:"/blog/post/".concat(i),passHref:!0,className:"w-full my-7",children:[(0,n.jsx)("div",{className:"font-medium text-xs transition text-gray-500 dark:text-gray-300",children:r}),(0,n.jsx)("div",{className:"font-extrabold text-xl sm:text-2xl mt-2 transition text-black dark:text-white hover:text-green-500 dark:hover:text-green-500",children:t}),(0,n.jsx)("div",{className:"font-medium text-lg transition text-gray-600 dark:text-gray-400 sm:text-xl mt-1",children:a})]})};function i(e){let{posts:r}=e;return(0,n.jsx)("div",{className:"flex flex-col",children:r.map(e=>(0,n.jsx)(a,{date:e.date,title:e.title,des:e.description,slug:e._raw.flattenedPath},e._id))})}var s=JSON.parse('[{"title":"제목","date":"2024-03-3","description":"설명","category":"javascript","body":{"raw":"\\n마크 다운 테스트\\n- 내용 1\\n- 내용 2","code":"var Component=(()=>{var sr=Object.create;var A=Object.defineProperty;var cr=Object.getOwnPropertyDescriptor;var lr=Object.getOwnPropertyNames;var fr=Object.getPrototypeOf,dr=Object.prototype.hasOwnProperty;var q=(c,u)=>()=>(u||c((u={exports:{}}).exports,u),u.exports),vr=(c,u)=>{for(var p in u)A(c,p,{get:u[p],enumerable:!0})},ye=(c,u,p,E)=>{if(u&&typeof u==\\"object\\"||typeof u==\\"function\\")for(let _ of lr(u))!dr.call(c,_)&&_!==p&&A(c,_,{get:()=>u[_],enumerable:!(E=cr(u,_))||E.enumerable});return c};var br=(c,u,p)=>(p=c!=null?sr(fr(c)):{},ye(u||!c||!c.__esModule?A(p,\\"default\\",{value:c,enumerable:!0}):p,c)),pr=c=>ye(A({},\\"__esModule\\",{value:!0}),c);var Te=q((yr,Re)=>{Re.exports=React});var we=q(z=>{\\"use strict\\";(function(){\\"use strict\\";var c=Te(),u=Symbol.for(\\"react.element\\"),p=Symbol.for(\\"react.portal\\"),E=Symbol.for(\\"react.fragment\\"),_=Symbol.for(\\"react.strict_mode\\"),X=Symbol.for(\\"react.profiler\\"),K=Symbol.for(\\"react.provider\\"),H=Symbol.for(\\"react.context\\"),P=Symbol.for(\\"react.forward_ref\\"),N=Symbol.for(\\"react.suspense\\"),I=Symbol.for(\\"react.suspense_list\\"),x=Symbol.for(\\"react.memo\\"),Y=Symbol.for(\\"react.lazy\\"),xe=Symbol.for(\\"react.offscreen\\"),J=Symbol.iterator,Se=\\"@@iterator\\";function je(e){if(e===null||typeof e!=\\"object\\")return null;var r=J&&e[J]||e[Se];return typeof r==\\"function\\"?r:null}var R=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function d(e){{for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];ke(\\"error\\",e,n)}}function ke(e,r,n){{var t=R.ReactDebugCurrentFrame,o=t.getStackAddendum();o!==\\"\\"&&(r+=\\"%s\\",n=n.concat([o]));var s=n.map(function(i){return String(i)});s.unshift(\\"Warning: \\"+r),Function.prototype.apply.call(console[e],console,s)}}var De=!1,Fe=!1,Ae=!1,Ne=!1,Ie=!1,Z;Z=Symbol.for(\\"react.module.reference\\");function Ye(e){return!!(typeof e==\\"string\\"||typeof e==\\"function\\"||e===E||e===X||Ie||e===_||e===N||e===I||Ne||e===xe||De||Fe||Ae||typeof e==\\"object\\"&&e!==null&&(e.$$typeof===Y||e.$$typeof===x||e.$$typeof===K||e.$$typeof===H||e.$$typeof===P||e.$$typeof===Z||e.getModuleId!==void 0))}function $e(e,r,n){var t=e.displayName;if(t)return t;var o=r.displayName||r.name||\\"\\";return o!==\\"\\"?n+\\"(\\"+o+\\")\\":n}function Q(e){return e.displayName||\\"Context\\"}function h(e){if(e==null)return null;if(typeof e.tag==\\"number\\"&&d(\\"Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.\\"),typeof e==\\"function\\")return e.displayName||e.name||null;if(typeof e==\\"string\\")return e;switch(e){case E:return\\"Fragment\\";case p:return\\"Portal\\";case X:return\\"Profiler\\";case _:return\\"StrictMode\\";case N:return\\"Suspense\\";case I:return\\"SuspenseList\\"}if(typeof e==\\"object\\")switch(e.$$typeof){case H:var r=e;return Q(r)+\\".Consumer\\";case K:var n=e;return Q(n._context)+\\".Provider\\";case P:return $e(e,e.render,\\"ForwardRef\\");case x:var t=e.displayName||null;return t!==null?t:h(e.type)||\\"Memo\\";case Y:{var o=e,s=o._payload,i=o._init;try{return h(i(s))}catch{return null}}}return null}var y=Object.assign,C=0,ee,re,ne,te,ae,ie,oe;function ue(){}ue.__reactDisabledLog=!0;function Ue(){{if(C===0){ee=console.log,re=console.info,ne=console.warn,te=console.error,ae=console.group,ie=console.groupCollapsed,oe=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ue,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}C++}}function We(){{if(C--,C===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:y({},e,{value:ee}),info:y({},e,{value:re}),warn:y({},e,{value:ne}),error:y({},e,{value:te}),group:y({},e,{value:ae}),groupCollapsed:y({},e,{value:ie}),groupEnd:y({},e,{value:oe})})}C<0&&d(\\"disabledDepth fell below zero. This is a bug in React. Please file an issue.\\")}}var $=R.ReactCurrentDispatcher,U;function S(e,r,n){{if(U===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\\\\n( *(at )?)/);U=t&&t[1]||\\"\\"}return`\\n`+U+e}}var W=!1,j;{var Me=typeof WeakMap==\\"function\\"?WeakMap:Map;j=new Me}function se(e,r){if(!e||W)return\\"\\";{var n=j.get(e);if(n!==void 0)return n}var t;W=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var s;s=$.current,$.current=null,Ue();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,\\"props\\",{set:function(){throw Error()}}),typeof Reflect==\\"object\\"&&Reflect.construct){try{Reflect.construct(i,[])}catch(m){t=m}Reflect.construct(e,[],i)}else{try{i.call()}catch(m){t=m}e.call(i.prototype)}}else{try{throw Error()}catch(m){t=m}e()}}catch(m){if(m&&t&&typeof m.stack==\\"string\\"){for(var a=m.stack.split(`\\n`),v=t.stack.split(`\\n`),l=a.length-1,f=v.length-1;l>=1&&f>=0&&a[l]!==v[f];)f--;for(;l>=1&&f>=0;l--,f--)if(a[l]!==v[f]){if(l!==1||f!==1)do if(l--,f--,f<0||a[l]!==v[f]){var b=`\\n`+a[l].replace(\\" at new \\",\\" at \\");return e.displayName&&b.includes(\\"<anonymous>\\")&&(b=b.replace(\\"<anonymous>\\",e.displayName)),typeof e==\\"function\\"&&j.set(e,b),b}while(l>=1&&f>=0);break}}}finally{W=!1,$.current=s,We(),Error.prepareStackTrace=o}var w=e?e.displayName||e.name:\\"\\",Ee=w?S(w):\\"\\";return typeof e==\\"function\\"&&j.set(e,Ee),Ee}function Ve(e,r,n){return se(e,!1)}function Le(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function k(e,r,n){if(e==null)return\\"\\";if(typeof e==\\"function\\")return se(e,Le(e));if(typeof e==\\"string\\")return S(e);switch(e){case N:return S(\\"Suspense\\");case I:return S(\\"SuspenseList\\")}if(typeof e==\\"object\\")switch(e.$$typeof){case P:return Ve(e.render);case x:return k(e.type,r,n);case Y:{var t=e,o=t._payload,s=t._init;try{return k(s(o),r,n)}catch{}}}return\\"\\"}var D=Object.prototype.hasOwnProperty,ce={},le=R.ReactDebugCurrentFrame;function F(e){if(e){var r=e._owner,n=k(e.type,e._source,r?r.type:null);le.setExtraStackFrame(n)}else le.setExtraStackFrame(null)}function Be(e,r,n,t,o){{var s=Function.call.bind(D);for(var i in e)if(s(e,i)){var a=void 0;try{if(typeof e[i]!=\\"function\\"){var v=Error((t||\\"React class\\")+\\": \\"+n+\\" type `\\"+i+\\"` is invalid; it must be a function, usually from the `prop-types` package, but received `\\"+typeof e[i]+\\"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.\\");throw v.name=\\"Invariant Violation\\",v}a=e[i](r,i,t,n,null,\\"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED\\")}catch(l){a=l}a&&!(a instanceof Error)&&(F(o),d(\\"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).\\",t||\\"React class\\",n,i,typeof a),F(null)),a instanceof Error&&!(a.message in ce)&&(ce[a.message]=!0,F(o),d(\\"Failed %s type: %s\\",n,a.message),F(null))}}}var Ge=Array.isArray;function M(e){return Ge(e)}function qe(e){{var r=typeof Symbol==\\"function\\"&&Symbol.toStringTag,n=r&&e[Symbol.toStringTag]||e.constructor.name||\\"Object\\";return n}}function ze(e){try{return fe(e),!1}catch{return!0}}function fe(e){return\\"\\"+e}function de(e){if(ze(e))return d(\\"The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.\\",qe(e)),fe(e)}var O=R.ReactCurrentOwner,Xe={key:!0,ref:!0,__self:!0,__source:!0},ve,be,V;V={};function Ke(e){if(D.call(e,\\"ref\\")){var r=Object.getOwnPropertyDescriptor(e,\\"ref\\").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function He(e){if(D.call(e,\\"key\\")){var r=Object.getOwnPropertyDescriptor(e,\\"key\\").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Je(e,r){if(typeof e.ref==\\"string\\"&&O.current&&r&&O.current.stateNode!==r){var n=h(O.current.type);V[n]||(d(\'Component \\"%s\\" contains the string ref \\"%s\\". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref\',h(O.current.type),e.ref),V[n]=!0)}}function Ze(e,r){{var n=function(){ve||(ve=!0,d(\\"%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)\\",r))};n.isReactWarning=!0,Object.defineProperty(e,\\"key\\",{get:n,configurable:!0})}}function Qe(e,r){{var n=function(){be||(be=!0,d(\\"%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)\\",r))};n.isReactWarning=!0,Object.defineProperty(e,\\"ref\\",{get:n,configurable:!0})}}var er=function(e,r,n,t,o,s,i){var a={$$typeof:u,type:e,key:r,ref:n,props:i,_owner:s};return a._store={},Object.defineProperty(a._store,\\"validated\\",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,\\"_self\\",{configurable:!1,enumerable:!1,writable:!1,value:t}),Object.defineProperty(a,\\"_source\\",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function rr(e,r,n,t,o){{var s,i={},a=null,v=null;n!==void 0&&(de(n),a=\\"\\"+n),He(r)&&(de(r.key),a=\\"\\"+r.key),Ke(r)&&(v=r.ref,Je(r,o));for(s in r)D.call(r,s)&&!Xe.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps){var l=e.defaultProps;for(s in l)i[s]===void 0&&(i[s]=l[s])}if(a||v){var f=typeof e==\\"function\\"?e.displayName||e.name||\\"Unknown\\":e;a&&Ze(i,f),v&&Qe(i,f)}return er(e,a,v,o,t,O.current,i)}}var L=R.ReactCurrentOwner,pe=R.ReactDebugCurrentFrame;function T(e){if(e){var r=e._owner,n=k(e.type,e._source,r?r.type:null);pe.setExtraStackFrame(n)}else pe.setExtraStackFrame(null)}var B;B=!1;function G(e){return typeof e==\\"object\\"&&e!==null&&e.$$typeof===u}function ge(){{if(L.current){var e=h(L.current.type);if(e)return`\\n\\nCheck the render method of \\\\``+e+\\"`.\\"}return\\"\\"}}function nr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\\\\\\\\\\/]/,\\"\\"),n=e.lineNumber;return`\\n\\nCheck your code at `+r+\\":\\"+n+\\".\\"}return\\"\\"}}var he={};function tr(e){{var r=ge();if(!r){var n=typeof e==\\"string\\"?e:e.displayName||e.name;n&&(r=`\\n\\nCheck the top-level render call using <`+n+\\">.\\")}return r}}function me(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var n=tr(r);if(he[n])return;he[n]=!0;var t=\\"\\";e&&e._owner&&e._owner!==L.current&&(t=\\" It was passed a child from \\"+h(e._owner.type)+\\".\\"),T(e),d(\'Each child in a list should have a unique \\"key\\" prop.%s%s See https://reactjs.org/link/warning-keys for more information.\',n,t),T(null)}}function _e(e,r){{if(typeof e!=\\"object\\")return;if(M(e))for(var n=0;n<e.length;n++){var t=e[n];G(t)&&me(t,r)}else if(G(e))e._store&&(e._store.validated=!0);else if(e){var o=je(e);if(typeof o==\\"function\\"&&o!==e.entries)for(var s=o.call(e),i;!(i=s.next()).done;)G(i.value)&&me(i.value,r)}}}function ar(e){{var r=e.type;if(r==null||typeof r==\\"string\\")return;var n;if(typeof r==\\"function\\")n=r.propTypes;else if(typeof r==\\"object\\"&&(r.$$typeof===P||r.$$typeof===x))n=r.propTypes;else return;if(n){var t=h(r);Be(n,e.props,\\"prop\\",t,e)}else if(r.PropTypes!==void 0&&!B){B=!0;var o=h(r);d(\\"Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?\\",o||\\"Unknown\\")}typeof r.getDefaultProps==\\"function\\"&&!r.getDefaultProps.isReactClassApproved&&d(\\"getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.\\")}}function ir(e){{for(var r=Object.keys(e.props),n=0;n<r.length;n++){var t=r[n];if(t!==\\"children\\"&&t!==\\"key\\"){T(e),d(\\"Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.\\",t),T(null);break}}e.ref!==null&&(T(e),d(\\"Invalid attribute `ref` supplied to `React.Fragment`.\\"),T(null))}}function or(e,r,n,t,o,s){{var i=Ye(e);if(!i){var a=\\"\\";(e===void 0||typeof e==\\"object\\"&&e!==null&&Object.keys(e).length===0)&&(a+=\\" You likely forgot to export your component from the file it\'s defined in, or you might have mixed up default and named imports.\\");var v=nr(o);v?a+=v:a+=ge();var l;e===null?l=\\"null\\":M(e)?l=\\"array\\":e!==void 0&&e.$$typeof===u?(l=\\"<\\"+(h(e.type)||\\"Unknown\\")+\\" />\\",a=\\" Did you accidentally export a JSX literal instead of a component?\\"):l=typeof e,d(\\"React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s\\",l,a)}var f=rr(e,r,n,o,s);if(f==null)return f;if(i){var b=r.children;if(b!==void 0)if(t)if(M(b)){for(var w=0;w<b.length;w++)_e(b[w],e);Object.freeze&&Object.freeze(b)}else d(\\"React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.\\");else _e(b,e)}return e===E?ir(f):ar(f),f}}var ur=or;z.Fragment=E,z.jsxDEV=ur})()});var Oe=q((Tr,Ce)=>{\\"use strict\\";Ce.exports=we()});var _r={};vr(_r,{default:()=>mr,frontmatter:()=>gr});var g=br(Oe()),gr={title:\\"\\\\uC81C\\\\uBAA9\\",date:\\"2024-03-3\\",description:\\"\\\\uC124\\\\uBA85\\",category:\\"javascript\\"};function Pe(c){let u=Object.assign({p:\\"p\\",ul:\\"ul\\",li:\\"li\\"},c.components);return(0,g.jsxDEV)(g.Fragment,{children:[(0,g.jsxDEV)(u.p,{children:\\"\\\\uB9C8\\\\uD06C \\\\uB2E4\\\\uC6B4 \\\\uD14C\\\\uC2A4\\\\uD2B8\\"},void 0,!1,{fileName:\\"/Users/seochangbin/workspace/beenchangseo.github.io/posts/_mdx_bundler_entry_point-e990aaf6-dbec-47e3-99e8-1940a0cbf5cd.mdx\\",lineNumber:8,columnNumber:1},this),`\\n`,(0,g.jsxDEV)(u.ul,{children:[`\\n`,(0,g.jsxDEV)(u.li,{children:\\"\\\\uB0B4\\\\uC6A9 1\\"},void 0,!1,{fileName:\\"/Users/seochangbin/workspace/beenchangseo.github.io/posts/_mdx_bundler_entry_point-e990aaf6-dbec-47e3-99e8-1940a0cbf5cd.mdx\\",lineNumber:9,columnNumber:1},this),`\\n`,(0,g.jsxDEV)(u.li,{children:\\"\\\\uB0B4\\\\uC6A9 2\\"},void 0,!1,{fileName:\\"/Users/seochangbin/workspace/beenchangseo.github.io/posts/_mdx_bundler_entry_point-e990aaf6-dbec-47e3-99e8-1940a0cbf5cd.mdx\\",lineNumber:10,columnNumber:1},this),`\\n`]},void 0,!0,{fileName:\\"/Users/seochangbin/workspace/beenchangseo.github.io/posts/_mdx_bundler_entry_point-e990aaf6-dbec-47e3-99e8-1940a0cbf5cd.mdx\\",lineNumber:9,columnNumber:1},this)]},void 0,!0,{fileName:\\"/Users/seochangbin/workspace/beenchangseo.github.io/posts/_mdx_bundler_entry_point-e990aaf6-dbec-47e3-99e8-1940a0cbf5cd.mdx\\",lineNumber:1,columnNumber:1},this)}function hr(c={}){let{wrapper:u}=c.components||{};return u?(0,g.jsxDEV)(u,Object.assign({},c,{children:(0,g.jsxDEV)(Pe,c,void 0,!1,{fileName:\\"/Users/seochangbin/workspace/beenchangseo.github.io/posts/_mdx_bundler_entry_point-e990aaf6-dbec-47e3-99e8-1940a0cbf5cd.mdx\\"},this)}),void 0,!1,{fileName:\\"/Users/seochangbin/workspace/beenchangseo.github.io/posts/_mdx_bundler_entry_point-e990aaf6-dbec-47e3-99e8-1940a0cbf5cd.mdx\\"},this):Pe(c)}var mr=hr;return pr(_r);})();\\n/*! Bundled license information:\\n\\nreact/cjs/react-jsx-dev-runtime.development.js:\\n  (**\\n   * @license React\\n   * react-jsx-dev-runtime.development.js\\n   *\\n   * Copyright (c) Facebook, Inc. and its affiliates.\\n   *\\n   * This source code is licensed under the MIT license found in the\\n   * LICENSE file in the root directory of this source tree.\\n   *)\\n*/\\n;return Component;"},"_id":"test.mdx","_raw":{"sourceFilePath":"test.mdx","sourceFileName":"test.mdx","sourceFileDir":".","contentType":"mdx","flattenedPath":"test"},"type":"Post"}]');[...s];var c=t(5601),l=t.n(c),u=t(4090);function f(){let e=s.sort((e,r)=>Number(new Date(r.date))-Number(new Date(e.date))),[r,t]=(0,u.useState)("");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("meta",{property:"og:title",content:"Maintain Hoon Blog Page"}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:description",content:"Maintain Hoon의 블로그 페이지 입니다."}),(0,n.jsx)("meta",{property:"og:url",content:"https://maintainhoon.vercel.app"}),(0,n.jsx)("meta",{property:"og:image",content:"https://maintainhoon.vercel.app/images/metaLogo.png"})]}),(0,n.jsxs)("section",{className:"mt-12 mb-8 flex flex-col gap-12",children:[(0,n.jsx)("h1",{className:"font-bold text-2xl sm:text-4xl font-mono",children:"\uD83D\uDCDD Blog"}),(0,n.jsxs)("div",{className:"flex flex-nowrap gap-4 items-center px-4 w-full h-16 rounded-2xl border-2 border-black dark:border-white",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})}),(0,n.jsx)("input",{type:"text",className:"flex-1 outline-none bg-transparent appearance-none",onChange:e=>{t(e.target.value.toLowerCase())},placeholder:"검색하기"})]})]}),(0,n.jsx)(i,{posts:e.filter(e=>e.title.toLowerCase().includes(r))})]})}}},function(e){e.O(0,[792,971,69,744],function(){return e(e.s=927)}),_N_E=e.O()}]);