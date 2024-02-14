// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString,t=Object.prototype.hasOwnProperty,n="function"==typeof Symbol?Symbol:void 0,a="function"==typeof n?n.toStringTag:"",o=r()?function(e){var r,n,o,c,s;if(null==e)return i.call(e);n=e[a],s=a,r=null!=(c=e)&&t.call(c,s);try{e[a]=void 0}catch(r){return i.call(e)}return o=i.call(e),r?e[a]=n:delete e[a],o}:function(e){return i.call(e)},c=Date.prototype.getDay,s=r();function p(e){return"object"==typeof e&&(e instanceof Date||(s?function(e){try{return c.call(e),!0}catch(e){return!1}}(e):"[object Date]"===o(e)))}var l="function"==typeof Object.defineProperty?Object.defineProperty:null,u=Object.defineProperty;function f(e){return"number"==typeof e}function g(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function d(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+g(n):g(n)+e,t&&(e="-"+e)),e}var h=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function b(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!f(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=d(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=d(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===w.call(e.specifier)?w.call(i):h.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function v(e){return"string"==typeof e}var y=Math.abs,m=String.prototype.toLowerCase,E=String.prototype.toUpperCase,x=String.prototype.replace,k=/e\+(\d)$/,S=/e-(\d)$/,_=/^(\d+)$/,I=/^(\d+)e/,T=/\.0$/,V=/\.0*e/,F=/(\..*[^0])0*e/;function j(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!f(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":y(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=x.call(i,F,"$1e"),i=x.call(i,V,"e"),i=x.call(i,T,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=x.call(i,k,"e+0$1"),i=x.call(i,S,"e-0$1"),e.alternate&&(i=x.call(i,_,"$1."),i=x.call(i,I,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===E.call(e.specifier)?E.call(i):m.call(i)}function $(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function A(e,r,i){var t=r-e.length;return t<0?e:e=i?e+$(t):$(t)+e}var C=String.fromCharCode,O=isNaN,N=Array.isArray;function R(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function P(e){var r,i,t,n,a,o,c,s,p;if(!N(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(v(t=e[s]))o+=t;else{if(r=void 0!==t.precision,!(t=R(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,O(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,O(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=b(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!O(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=O(a)?String(t.arg):C(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=j(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=d(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=A(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var Z=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function G(e){var r,i,t,n;for(i=[],n=0,t=Z.exec(e);t;)(r=e.slice(n,Z.lastIndex-t[0].length)).length&&i.push(r),i.push(W(t)),n=Z.lastIndex,t=Z.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function D(e){return"string"==typeof e}function L(e){var r,i;if(!D(e))throw new TypeError(L("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[G(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return P.apply(null,r)}var Y=Object.prototype,M=Y.toString,U=Y.__defineGetter__,X=Y.__defineSetter__,z=Y.__lookupGetter__,q=Y.__lookupSetter__,B=function(){try{return l({},"x",{}),!0}catch(e){return!1}}()?u:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===M.call(e))throw new TypeError(L("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===M.call(i))throw new TypeError(L("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(z.call(e,r)||q.call(e,r)?(t=e.__proto__,e.__proto__=Y,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&U&&U.call(e,r,i.get),o&&X&&X.call(e,r,i.set),e};function H(e,r,i){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function J(e){return"number"==typeof e}var K=Number,Q=K.prototype.toString,ee=r();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Number]"===o(e)))}function ie(e){return J(e)||re(e)}H(ie,"isPrimitive",J),H(ie,"isObject",re);var te=Number.POSITIVE_INFINITY,ne=K.NEGATIVE_INFINITY,ae=Math.floor;function oe(e){return e<te&&e>ne&&ae(r=e)===r;var r}function ce(e){return J(e)&&oe(e)}function se(e){return re(e)&&oe(e.valueOf())}function pe(e){return ce(e)||se(e)}function le(){return(new Date).getFullYear()}function ue(e){var r;if(arguments.length)if(p(e))r=e.getFullYear();else{if(!ce(e))return!1;r=e}else r=le();return r%100==0?r%400==0:r%4==0}function fe(e){return"number"==typeof e}function ge(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function de(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ge(n):ge(n)+e,t&&(e="-"+e)),e}H(pe,"isPrimitive",ce),H(pe,"isObject",se);var he=String.prototype.toLowerCase,we=String.prototype.toUpperCase;function be(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!fe(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=de(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=de(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===we.call(e.specifier)?we.call(i):he.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function ve(e){return"string"==typeof e}var ye=Math.abs,me=String.prototype.toLowerCase,Ee=String.prototype.toUpperCase,xe=String.prototype.replace,ke=/e\+(\d)$/,Se=/e-(\d)$/,_e=/^(\d+)$/,Ie=/^(\d+)e/,Te=/\.0$/,Ve=/\.0*e/,Fe=/(\..*[^0])0*e/;function je(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!fe(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":ye(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=xe.call(i,Fe,"$1e"),i=xe.call(i,Ve,"e"),i=xe.call(i,Te,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=xe.call(i,ke,"e+0$1"),i=xe.call(i,Se,"e-0$1"),e.alternate&&(i=xe.call(i,_e,"$1."),i=xe.call(i,Ie,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Ee.call(e.specifier)?Ee.call(i):me.call(i)}function $e(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Ae(e,r,i){var t=r-e.length;return t<0?e:e=i?e+$e(t):$e(t)+e}var Ce=String.fromCharCode,Oe=isNaN,Ne=Array.isArray;function Re(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Pe(e){var r,i,t,n,a,o,c,s,p;if(!Ne(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(ve(t=e[s]))o+=t;else{if(r=void 0!==t.precision,!(t=Re(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,Oe(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,Oe(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=be(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Oe(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Oe(a)?String(t.arg):Ce(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=je(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=de(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Ae(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var Ze=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function We(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ge(e){var r,i,t,n;for(i=[],n=0,t=Ze.exec(e);t;)(r=e.slice(n,Ze.lastIndex-t[0].length)).length&&i.push(r),i.push(We(t)),n=Ze.lastIndex,t=Ze.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function De(e){return"string"==typeof e}function Le(e){var r,i,t;if(!De(e))throw new TypeError(Le("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Ge(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return Pe.apply(null,i)}return function(e){var r;if(arguments.length)if(p(e))r=e.getFullYear();else{if(!ce(e))throw new TypeError(Le("invalid argument. Must provide either an integer or a Date object. Value: `%s`.",e));r=e}else r=le();return ue(r)?8784:8760}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).hoursInYear=r();
//# sourceMappingURL=browser.js.map
