"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=s(function(p,i){
var n=require('@stdlib/assert-is-date-object/dist'),u=require('@stdlib/assert-is-integer/dist').isPrimitive,o=require('@stdlib/assert-is-leap-year/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist'),c=require('@stdlib/time-current-year/dist'),f=8760,g=8784;function q(e){var r;if(arguments.length)if(n(e))r=e.getFullYear();else if(u(e))r=e;else throw new TypeError(v('1QHDx',e));else r=c();return o(r)?g:f}i.exports=q
});var Y=t();module.exports=Y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
