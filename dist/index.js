"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=f(function(g,s){
var n=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/math-base-special-erfc/dist'),y=require('@stdlib/math-base-special-sqrt/dist');function d(e,r,i){var t;return n(e)||n(r)||n(i)||i<=0?NaN:e<r?0:(t=y(i/(2*(e-r))),N(t))}s.exports=d
});var c=f(function(h,v){
var p=require('@stdlib/utils-constant-function/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),z=require('@stdlib/math-base-special-erfc/dist'),l=require('@stdlib/math-base-special-sqrt/dist');function F(e,r){if(a(e)||a(r)||r<=0)return p(NaN);return i;function i(t){var u;return a(t)?NaN:t<e?0:(u=l(r/(2*(t-e))),z(u))}}v.exports=F
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=q(),R=c();O(o,"factory",R);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
