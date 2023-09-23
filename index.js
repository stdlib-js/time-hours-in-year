// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"",o=r()?function(e){var r,i,o,c,s;if(null==e)return t.call(e);i=e[a],s=a,r=null!=(c=e)&&n.call(c,s);try{e[a]=void 0}catch(r){return t.call(e)}return o=t.call(e),r?e[a]=i:delete e[a],o}:function(e){return t.call(e)},c=Date.prototype.getDay,s=r();function l(e){return"object"==typeof e&&(e instanceof Date||(s?function(e){try{return c.call(e),!0}catch(e){return!1}}(e):"[object Date]"===o(e)))}var u="function"==typeof Object.defineProperty?Object.defineProperty:null,p=Object.defineProperty;function f(e){return"number"==typeof e}function g(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function d(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+g(i):g(i)+e,n&&(e="-"+e)),e}var h=String.prototype.toLowerCase,b=String.prototype.toUpperCase;function y(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!f(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=d(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=d(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===b.call(e.specifier)?b.call(t):h.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function w(e){return"string"==typeof e}var v=Math.abs,m=String.prototype.toLowerCase,_=String.prototype.toUpperCase,E=String.prototype.replace,S=/e\+(\d)$/,j=/e-(\d)$/,x=/^(\d+)$/,I=/^(\d+)e/,k=/\.0$/,T=/\.0*e/,F=/(\..*[^0])0*e/;function V(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!f(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":v(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=E.call(t,F,"$1e"),t=E.call(t,T,"e"),t=E.call(t,k,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=E.call(t,S,"e+0$1"),t=E.call(t,j,"e-0$1"),e.alternate&&(t=E.call(t,x,"$1."),t=E.call(t,I,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===_.call(e.specifier)?_.call(t):m.call(t)}function O(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function N(e,r,t){var n=r-e.length;return n<0?e:e=t?e+O(n):O(n)+e}var $=String.fromCharCode,A=isNaN,P=Array.isArray;function C(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function R(e){var r,t,n,i,a,o,c,s,l;if(!P(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(w(n=e[s]))o+=n;else{if(r=void 0!==n.precision,!(n=C(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,A(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=y(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):$(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=V(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=d(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=N(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var Y=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function D(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function G(e){var r,t,n,i;for(t=[],i=0,n=Y.exec(e);n;)(r=e.slice(i,Y.lastIndex-n[0].length)).length&&t.push(r),t.push(D(n)),i=Y.lastIndex,n=Y.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function Z(e){return"string"==typeof e}function L(e){var r,t,n;if(!Z(e))throw new TypeError(L("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=G(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return R.apply(null,t)}var W=Object.prototype,U=W.toString,M=W.__defineGetter__,X=W.__defineSetter__,z=W.__lookupGetter__,H=W.__lookupSetter__,Q=function(){try{return u({},"x",{}),!0}catch(e){return!1}}()?p:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===U.call(e))throw new TypeError(L("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===U.call(t))throw new TypeError(L("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(z.call(e,r)||H.call(e,r)?(n=e.__proto__,e.__proto__=W,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&M&&M.call(e,r,t.get),o&&X&&X.call(e,r,t.set),e};function q(e,r,t){Q(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function B(e){return"number"==typeof e}var J=Number,K=J.prototype.toString,ee=r();function re(e){return"object"==typeof e&&(e instanceof J||(ee?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Number]"===o(e)))}function te(e){return B(e)||re(e)}q(te,"isPrimitive",B),q(te,"isObject",re);var ne=Number.POSITIVE_INFINITY,ie=J.NEGATIVE_INFINITY,ae=Math.floor;function oe(e){return e<ne&&e>ie&&ae(r=e)===r;var r}function ce(e){return B(e)&&oe(e)}function se(e){return re(e)&&oe(e.valueOf())}function le(e){return ce(e)||se(e)}function ue(){return(new Date).getFullYear()}function pe(e){var r;if(arguments.length)if(l(e))r=e.getFullYear();else{if(!ce(e))return!1;r=e}else r=ue();return r%100==0?r%400==0:r%4==0}function fe(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}return q(le,"isPrimitive",ce),q(le,"isObject",se),function(e){var r;if(arguments.length)if(l(e))r=e.getFullYear();else{if(!ce(e))throw new TypeError(fe("1QHLR",e));r=e}else r=ue();return pe(r)?8784:8760}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).hoursInYear=r();
//# sourceMappingURL=index.js.map
