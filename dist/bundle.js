!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PersonaQuote=t():e.PersonaQuote=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=7)}([function(e,t){e.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18.1 1C18.5968 1 19 1.41354 19 1.92308V14.8462C19 15.3557 18.5968 15.7692 18.1 15.7692H5.0095L1 19V1.92308C1 1.41354 1.4032 1 1.9 1H18.1ZM17.2 2.84615H2.8V15.2015L4.3867 13.9231H17.2V2.84615ZM8.6635 5.07262L9.0658 5.70769C7.5646 6.54123 7.5907 7.87877 7.5907 8.16677C7.7302 8.14831 7.8769 8.14462 8.0227 8.15846C8.8345 8.236 9.4744 8.92 9.4744 9.76923C9.4744 10.6609 8.7688 11.3846 7.8994 11.3846C7.4161 11.3846 6.9544 11.1585 6.6628 10.84C6.1993 10.336 5.95 9.76923 5.95 8.85077C5.95 7.23538 7.0552 5.788 8.6635 5.07262V5.07262ZM13.1635 5.07262L13.5658 5.70769C12.0646 6.54123 12.0907 7.87877 12.0907 8.16677C12.2302 8.14831 12.3769 8.14462 12.5227 8.15846C13.3345 8.236 13.9744 8.92 13.9744 9.76923C13.9744 10.6609 13.2688 11.3846 12.3994 11.3846C11.9161 11.3846 11.4544 11.1585 11.1628 10.84C10.6993 10.336 10.45 9.76923 10.45 8.85077C10.45 7.23538 11.5552 5.788 13.1635 5.07262V5.07262Z"></path></svg>'},function(e,t,n){window,e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var o=n(2),r=setTimeout;function i(){}function a(e){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function s(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,a._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var o;try{o=n(e._value)}catch(e){return void u(t.promise,e)}c(t.promise,o)}else(1===e._state?c:u)(t.promise,e._value)})):e._deferreds.push(t)}function c(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof a)return e._state=3,e._value=t,void l(e);if("function"==typeof n)return void f((o=n,r=t,function(){o.apply(r,arguments)}),e)}e._state=1,e._value=t,l(e)}catch(t){u(e,t)}var o,r}function u(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&a._immediateFn(function(){e._handled||a._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)s(e,e._deferreds[t]);e._deferreds=null}function d(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function f(e,t){var n=!1;try{e(function(e){n||(n=!0,c(t,e))},function(e){n||(n=!0,u(t,e))})}catch(e){if(n)return;n=!0,u(t,e)}}a.prototype.catch=function(e){return this.then(null,e)},a.prototype.then=function(e,t){var n=new this.constructor(i);return s(this,new d(e,t,n)),n},a.prototype.finally=o.a,a.all=function(e){return new a(function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);var r=o.length;function i(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){i(e,t)},n)}o[e]=a,0==--r&&t(o)}catch(e){n(e)}}for(var a=0;a<o.length;a++)i(a,o[a])})},a.resolve=function(e){return e&&"object"==typeof e&&e.constructor===a?e:new a(function(t){t(e)})},a.reject=function(e){return new a(function(t,n){n(e)})},a.race=function(e){return new a(function(t,n){for(var o=0,r=e.length;o<r;o++)e[o].then(t,n)})},a._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){r(e,0)},a._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=a}).call(this,n(5).setImmediate)},function(e,t,n){"use strict";t.a=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})}},function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n(4);var r,i,a,s,c,u,l,d=n(8),f=(i=function(e){return new Promise(function(t,n){e=s(e),(e=c(e)).beforeSend&&e.beforeSend();var o=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");o.open(e.method,e.url),o.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(e.headers).forEach(function(t){var n=e.headers[t];o.setRequestHeader(t,n)});var r=e.ratio;o.upload.addEventListener("progress",function(t){var n=Math.round(t.loaded/t.total*100),o=Math.ceil(n*r/100);e.progress(Math.min(o,100))},!1),o.addEventListener("progress",function(t){var n=Math.round(t.loaded/t.total*100),o=Math.ceil(n*(100-r)/100)+r;e.progress(Math.min(o,100))},!1),o.onreadystatechange=function(){if(4===o.readyState){var e=o.response;try{e=JSON.parse(e)}catch(e){}var r=d.parseHeaders(o.getAllResponseHeaders()),i={body:e,code:o.status,headers:r};l(o.status)?t(i):n(i)}},o.send(e.data)})},a=function(e){return e.method="POST",i(e)},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.url&&"string"!=typeof e.url)throw new Error("Url must be a string");if(e.url=e.url||"",e.method&&"string"!=typeof e.method)throw new Error("`method` must be a string or null");if(e.method=e.method?e.method.toUpperCase():"GET",e.headers&&"object"!==o(e.headers))throw new Error("`headers` must be an object or null");if(e.headers=e.headers||{},e.type&&("string"!=typeof e.type||!Object.values(r).includes(e.type)))throw new Error("`type` must be taken from module's «contentType» library");if(e.progress&&"function"!=typeof e.progress)throw new Error("`progress` must be a function or null");if(e.progress=e.progress||function(e){},e.beforeSend=e.beforeSend||function(e){},e.ratio&&"number"!=typeof e.ratio)throw new Error("`ratio` must be a number");if(e.ratio<0||e.ratio>100)throw new Error("`ratio` must be in a 0-100 interval");if(e.ratio=e.ratio||90,e.accept&&"string"!=typeof e.accept)throw new Error("`accept` must be a string with a list of allowed mime-types");if(e.accept=e.accept||"*/*",e.multiple&&"boolean"!=typeof e.multiple)throw new Error("`multiple` must be a true or false");if(e.multiple=e.multiple||!1,e.fieldName&&"string"!=typeof e.fieldName)throw new Error("`fieldName` must be a string");return e.fieldName=e.fieldName||"files",e},c=function(e){switch(e.method){case"GET":var t=u(e.data,r.URLENCODED);delete e.data,e.url=/\?/.test(e.url)?e.url+"&"+t:e.url+"?"+t;break;case"POST":case"PUT":case"DELETE":case"UPDATE":var n=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type||r.JSON}(e);(d.isFormData(e.data)||d.isFormElement(e.data))&&(n=r.FORM),e.data=u(e.data,n),n!==f.contentType.FORM&&(e.headers["content-type"]=n)}return e},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(arguments.length>1?arguments[1]:void 0){case r.URLENCODED:return d.urlEncode(e);case r.JSON:return d.jsonEncode(e);case r.FORM:return d.formEncode(e);default:return e}},l=function(e){return e>=200&&e<300},{contentType:r={URLENCODED:"application/x-www-form-urlencoded; charset=utf-8",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},request:i,get:function(e){return e.method="GET",i(e)},post:a,transport:function(e){return e=s(e),d.selectFiles(e).then(function(t){for(var n=new FormData,o=0;o<t.length;o++)n.append(e.fieldName,t[o],t[o].name);d.isObject(e.data)&&Object.keys(e.data).forEach(function(t){var o=e.data[t];n.append(t,o)});var r=e.beforeSend;return e.beforeSend=function(){return r(t)},e.data=n,a(e)})},selectFiles:function(e){return delete(e=s(e)).beforeSend,d.selectFiles(e)}});e.exports=f},function(e,t,n){"use strict";n.r(t);var o=n(1);window.Promise=window.Promise||o.a},function(e,t,n){(function(e){var o=void 0!==e&&e||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(r.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new i(r.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(6),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var o,r,i,a,s,c=1,u={},l=!1,d=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?o=function(e){t.nextTick(function(){h(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?(a="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&h(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),o=function(t){e.postMessage(a+t,"*")}):e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){h(e.data)},o=function(e){i.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(r=d.documentElement,o=function(e){var t=d.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):o=function(e){setTimeout(h,0,e)},f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return u[c]=r,o(c),c++},f.clearImmediate=p}function p(e){delete u[e]}function h(e){if(l)setTimeout(h,0,e);else{var t=u[e];if(t){l=!0;try{!function(e){var t=e.callback,o=e.args;switch(o.length){case 0:t();break;case 1:t(o[0]);break;case 2:t(o[0],o[1]);break;case 3:t(o[0],o[1],o[2]);break;default:t.apply(n,o)}}(t)}finally{p(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(7))},function(e,t){var n,o,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(e){o=a}}();var c,u=[],l=!1,d=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&p())}function p(){if(!l){var e=s(f);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||l||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,t,n){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=n(9);e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"urlEncode",value:function(e){return r(e)}},{key:"jsonEncode",value:function(e){return JSON.stringify(e)}},{key:"formEncode",value:function(e){if(this.isFormData(e))return e;if(this.isFormElement(e))return new FormData(e);if(this.isObject(e)){var t=new FormData;return Object.keys(e).forEach(function(n){var o=e[n];t.append(n,o)}),t}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isObject",value:function(e){return"[object Object]"===Object.prototype.toString.call(e)}},{key:"isFormData",value:function(e){return e instanceof FormData}},{key:"isFormElement",value:function(e){return e instanceof HTMLFormElement}},{key:"selectFiles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(t,n){var o=document.createElement("INPUT");o.type="file",e.multiple&&o.setAttribute("multiple","multiple"),e.accept&&o.setAttribute("accept",e.accept),o.style.display="none",document.body.appendChild(o),o.addEventListener("change",function(e){var n=e.target.files;t(n),document.body.removeChild(o)},!1),o.click()})}},{key:"parseHeaders",value:function(e){var t=e.trim().split(/[\r\n]+/),n={};return t.forEach(function(e){var t=e.split(": "),o=t.shift(),r=t.join(": ");o&&(n[o]=r)}),n}}])&&o(t,n),e}()},function(e,t){var n=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,escape).replace(/%20/g,"+")},o=function(e,t,r,i){return t=t||null,r=r||"&",i=i||null,e?function(e){for(var t=new Array,n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}(Object.keys(e).map(function(a){var s,c,u=a;if(i&&(u=i+"["+u+"]"),"object"==typeof e[a]&&null!==e[a])s=o(e[a],null,r,u);else{t&&(c=u,u=!isNaN(parseFloat(c))&&isFinite(c)?t+Number(u):u);var l=e[a];l=(l=0===(l=!1===(l=!0===l?"1":l)?"0":l)?"0":l)||"",s=n(u)+"="+n(l)}return s})).join(r).replace(/[!'()*]/g,""):""};e.exports=o}])},function(e,t,n){var o=n(3);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(5)(o,r);o.locals&&(e.exports=o.locals)},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,'.cdx-persona-quote {\n    display: flex;\n    flex-direction: column;\n    padding: 30px;\n    margin: 0.7em 0;\n    border: 1px solid #e5e6ec;\n    border-radius: 3px;\n    background: #fff;\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03);\n}\n\n    .cdx-persona-quote::after {\n        content: \'\';\n        clear: both;\n        display: table;\n    }\n\n    .cdx-persona-quote [contentEditable=true][data-placeholder]::before {\n            position: absolute;\n            content: attr(data-placeholder);\n            color: #707684;\n            font-weight: normal;\n            opacity: 0;\n        }\n\n    .cdx-persona-quote [contentEditable=true][data-placeholder]:empty::before {\n                opacity: 1;\n            }\n\n    .cdx-persona-quote [contentEditable=true][data-placeholder]:empty:focus::before {\n                opacity: 0.3;\n            }\n\n    .cdx-persona-quote__card {\n        display: flex;\n        flex-direction: column;\n        margin-bottom: 10px;\n    }\n\n    .cdx-persona-quote__fields {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .cdx-persona-quote__name {\n        font-weight: 600;\n        outline: none;\n    }\n\n    .cdx-persona-quote__position {\n        font-size: 0.86em;\n        margin: 10px 0;\n        outline: none;\n    }\n\n    .cdx-persona-quote__quote {\n        min-height: 158px;\n        margin-bottom: 10px;\n    }\n\n    .cdx-persona-quote__photo {\n        float: right;\n        width: 70px;\n        height: 70px;\n        min-width: 70px;\n        margin-bottom: 10px;\n        margin-right: 15px;\n        border-radius: 3px;\n        background: #f6f6f9 url(\'data:image/svg+xml,<svg fill="rgb(171, 175, 188)" width="35" height="41" xmlns="http://www.w3.org/2000/svg"><path d="M17.347 22.087h.272c2.495-.042 4.514-.916 6.004-2.589 3.278-3.684 2.733-10 2.674-10.602-.213-4.524-2.359-6.689-4.13-7.7C20.847.442 19.305.035 17.585 0H17.441c-.946 0-2.802.153-4.582 1.163-1.788 1.01-3.968 3.175-4.181 7.733-.06.603-.605 6.918 2.674 10.602 1.481 1.673 3.5 2.547 5.995 2.59zM10.95 9.108c0-.025.009-.05.009-.068.28-6.086 4.615-6.74 6.472-6.74H17.534c2.3.051 6.208.985 6.472 6.74 0 .026 0 .051.009.068.008.06.604 5.832-2.104 8.87-1.073 1.206-2.503 1.8-4.385 1.817h-.086c-1.873-.017-3.312-.61-4.377-1.816-2.7-3.022-2.12-8.82-2.112-8.87z"/><path d="M34.983 32.562v-.025c0-.068-.009-.136-.009-.212-.05-1.681-.161-5.611-3.857-6.868l-.085-.025c-3.841-.976-7.034-3.183-7.068-3.209a1.15 1.15 0 0 0-1.601.28 1.142 1.142 0 0 0 .28 1.596c.145.102 3.535 2.453 7.775 3.54 1.985.704 2.206 2.818 2.266 4.754 0 .076 0 .144.008.212.009.764-.042 1.944-.179 2.623-1.38.78-6.787 3.48-15.013 3.48-8.192 0-13.634-2.708-15.022-3.489-.136-.679-.196-1.859-.179-2.623 0-.068.009-.136.009-.212.06-1.935.28-4.049 2.265-4.754 4.24-1.086 7.63-3.446 7.775-3.54.52-.364.647-1.077.281-1.595a1.15 1.15 0 0 0-1.601-.28c-.034.025-3.21 2.232-7.068 3.208-.034.009-.06.017-.085.026C.179 26.714.068 30.644.017 32.316c0 .077 0 .144-.008.212v.026c-.009.441-.018 2.708.434 3.845.085.22.238.408.443.535.255.17 6.378 4.058 16.623 4.058 10.244 0 16.367-3.897 16.622-4.058.196-.127.358-.314.443-.535.426-1.129.417-3.395.409-3.837z"/></svg>\') center center no-repeat;\n        cursor: pointer;\n        overflow: hidden;\n    }\n\n@media (min-width: 728px) {\n        .cdx-persona-quote__card {\n            flex-direction: row;\n        }\n        .cdx-persona-quote__photo {\n            margin-bottom: 0;\n        }\n}\n\n.codex-editor--narrow .cdx-persona-quote {\n        padding: 15px;\n    }\n\n.cdx-persona-personas__placeholder {\n    font-size: 12px;\n    margin-bottom: 10px;\n}\n\n.cdx-persona-personas__select {\n    -webkit-appearance: button;\n    -moz-appearance: button;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -webkit-padding-end: 20px;\n    -moz-padding-end: 20px;\n    -webkit-padding-start: 2px;\n    -moz-padding-start: 2px;\n    background-color: #F4F4F4;\n    border: 1px solid #AAA;\n    border-radius: 2px;\n    box-shadow: 0px 1px 3px rgb(0 0 0 / 10%);\n    color: #555;\n    font-size: inherit;\n    margin: 0;\n    overflow: hidden;\n    padding-top: 2px;\n    padding-bottom: 2px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}',""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=o.sources.map(function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")});return[n].concat(i).concat([r]).join("\n")}var a,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var a=0;a<e.length;a++){var s=e[a];null!=s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},function(e,t,n){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var o=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}}(),c=null,u=0,l=[],d=n(6);function f(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(g(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(g(o.parts[a],t));i[o.id]={id:o.id,refs:1,parts:s}}}}function p(e,t){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(e.insertAt.before,n);n.insertBefore(t,r)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var o=function(){0;return n.nc}();o&&(e.attrs.nonce=o)}return y(t,e.attrs),h(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function g(e,t){var n,o,r,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=u++;n=c||(c=v(t)),o=x.bind(null,n,a,!1),r=x.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),h(e,t),t}(t),o=function(e,t,n){var o=n.css,r=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=d(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),r=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),o=function(e,t){var n=t.css,o=t.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){m(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return f(n,t),function(e){for(var o=[],r=0;r<n.length;r++){var a=n[r];(s=i[a.id]).refs--,o.push(s)}e&&f(p(e,t),t);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var b,w=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function x(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=w(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=(n(2),n(1)),a=n.n(i);function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var c=function(){function e(t){var n=t.config,o=t.onUpload,r=t.onError;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=n,this.onUpload=o,this.onError=r}var t,n,o;return t=e,(n=[{key:"uploadSelectedFile",value:function(e){var t=this,n=e.onPreview;a.a.transport({url:this.config.endpoint,accept:this.config.types,data:this.config.additionalRequestData,headers:this.config.additionalRequestHeaders,beforeSend:function(e){var t=new FileReader;t.readAsDataURL(e[0]),t.onload=function(e){n(e.target.result)}},fieldName:this.config.field}).then(function(e){t.onUpload(e)}).catch(function(e){var n=e.body?e.body.message:"Uploading failed";t.onError(n)})}}])&&s(t.prototype,n),o&&s(t,o),e}();function u(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.d(t,"default",function(){return f});var f=function(){function e(t){var n=this,o=t.data,r=t.config,i=t.api;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=i,this.nodes={wrapper:null,photo:null,name:null,quote:null,position:null,selectDefault:null,personasPlaceholder:null,personasSelect:null},this.config={endpoint:r.endpoint||"",field:r.field||"image",types:r.types||"image/*",additionalRequestData:r.additionalRequestData||{},additionalRequestHeaders:r.additionalRequestHeaders||{},namePlaceholder:r.namePlaceholder||"Name",quotePlaceholder:r.quotePlaceholder||"Quote",positionPlaceholder:r.positionPlaceholder||"Position",designs:r.designs||[],personasPlaceholder:r.personasPlaceholder||"Personas",personas:r.personas||[],selectPlaceholder:r.selectPlaceholder||"Select"},this.data=Object.assign({},o,{design:o.design||(r.designs.length?r.designs[0].key:null)}),this.uploader=new c({config:this.config,onUpload:function(e){return n.onUpload(e)},onError:function(e){return n.uploadingFailed(e)}})}var t,n,o;return t=e,o=[{key:"toolbox",get:function(){return{icon:r.a,title:"Persona Quote"}}},{key:"contentless",get:function(){return!0}},{key:"enableLineBreaks",get:function(){return!0}},{key:"sanitize",get:function(){var e={br:!1,b:!1,i:!1,a:!1};return{name:e,position:e,quote:Object.assign({},e,{br:!0})}}}],(n=[{key:"onUpload",value:function(e){var t=e.body,n=t.success,o=t.file;n&&o&&o.url&&(this.data.photo=o,this.showFullImage())}},{key:"showFullImage",value:function(){var e=this;setTimeout(function(){e.nodes.photo.classList.remove(e.CSS.loader),e.nodes.photo.style.background="url('".concat(e.data.photo.url,"') center center / contain no-repeat")},500)}},{key:"stopLoading",value:function(){var e=this;setTimeout(function(){e.nodes.photo.classList.remove(e.CSS.loader),e.nodes.photo.removeAttribute("style")},500)}},{key:"addLoader",value:function(){this.nodes.photo.style.background="none",this.nodes.photo.classList.add(this.CSS.loader)}},{key:"uploadingFailed",value:function(e){this.stopLoading(),this.api.notifier.show({message:e,style:"error"})}},{key:"save",value:function(e){var t=(this.nodes.name.textContent||"").trim(),n=(this.nodes.position.textContent||"").trim(),o=(this.nodes.quote.innerHTML||"").trim(),r=this.data.design;return Object.assign(this.data,{name:t,position:n,quote:o,design:r}),this.data}},{key:"renderSettings",value:function(){var e=this,t=this.make("div",this.CSS.settingsWrapper);return this.config.designs.map(function(n){var o=e.make("div",e.CSS.settingsButton,{innerHTML:n.icon,title:n.label});return o.dataset.id=n.key,o.classList.toggle(e.CSS.settingsButtonActive,n.key===e.data.design),t.appendChild(o),o}).forEach(function(t,n,o){t.addEventListener("click",function(){e._toggleTune(e.config.designs[n].key),o.forEach(function(t,n){var o=e.config.designs[n].key;t.classList.toggle(e.CSS.settingsButtonActive,o===e.data.design)})})}),t}},{key:"_toggleTune",value:function(e){this.data.design=e}},{key:"render",value:function(){var e=this,t=this.data,n=t.name,o=t.position,r=t.quote,i=t.photo;this.nodes.wrapper=this.make("div",[this.CSS.baseClass,this.CSS.wrapper]),this.nodes.name=this.make("div",this.CSS.name,{contentEditable:!0}),this.nodes.name.dataset.placeholder=this.config.namePlaceholder,n&&(this.nodes.name.textContent=n),this.nodes.position=this.make("div",this.CSS.position,{contentEditable:!0}),this.nodes.position.dataset.placeholder=this.config.positionPlaceholder,o&&(this.nodes.position.textContent=o),this.nodes.quote=this.make("div",[this.CSS.input,this.CSS.quote],{contentEditable:!0,innerHTML:r||""}),this.nodes.quote.dataset.placeholder=this.config.quotePlaceholder,this.nodes.photo=this.make("div",this.CSS.photo),i&&(this.nodes.photo.style.background="url('".concat(i.url,"') center center / contain no-repeat")),this.nodes.photo.addEventListener("click",function(){e.uploader.uploadSelectedFile({onPreview:function(){e.addLoader()}})});var a=this.make("div",this.CSS.fields);a.appendChild(this.nodes.name),a.appendChild(this.nodes.position);var s=this.make("div",this.CSS.card);s.appendChild(this.nodes.photo),s.appendChild(a),this.nodes.wrapper.appendChild(s),this.nodes.wrapper.appendChild(this.nodes.quote),this.nodes.personasPlaceholder=this.make("div",this.CSS.personasPlaceholder,{contentEditable:!1,innerHTML:this.config.personasPlaceholder}),this.nodes.wrapper.appendChild(this.nodes.personasPlaceholder),this.nodes.personasSelect=this.make("select",this.CSS.personasSelect),this.nodes.personasSelect.appendChild(this.make("option",null,{innerHTML:this.config.selectPlaceholder,selected:!0,hidden:!0})),this.config.personas.forEach(function(t){var n=e.make("option",null,{innerHTML:t.name},{"data-photo":t.photo,"data-name":t.name,"data-regalia":t.regalia,"data-about":t.about});e.nodes.personasSelect.appendChild(n)});return this.nodes.personasSelect.addEventListener("change",function(){var t,n=this.options[this.selectedIndex];t=n,e.nodes.photo.style.background="url("+t.dataset.photo+") center center no-repeat",e.nodes.photo.style.backgroundSize="cover",e.nodes.name.innerHTML=t.dataset.name,e.nodes.quote.innerHTML=t.dataset.about,e.nodes.position.innerHTML=t.dataset.regalia,e.data.photo=t.dataset.photo}),this.nodes.wrapper.appendChild(this.nodes.personasSelect),this.nodes.wrapper}},{key:"validate",value:function(e){return!0}},{key:"make",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=document.createElement(e);Array.isArray(n)?(t=i.classList).add.apply(t,u(n)):n&&i.classList.add(n);for(var a in o)i[a]=o[a];for(var s in r)i.setAttribute(s,r[s]);return i}},{key:"CSS",get:function(){return{baseClass:this.api.styles.block,input:this.api.styles.input,loader:this.api.styles.loader,wrapper:"cdx-persona-quote",card:"cdx-persona-quote__card",fields:"cdx-persona-quote__fields",photo:"cdx-persona-quote__photo",name:"cdx-persona-quote__name",quote:"cdx-persona-quote__quote",position:"cdx-persona-quote__position",personasPlaceholder:"cdx-persona-personas__placeholder",personasSelect:"cdx-persona-personas__select",settingsWrapper:"cdx-persona-quote__settings",settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive}}}])&&d(t.prototype,n),o&&d(t,o),e}()}]).default});