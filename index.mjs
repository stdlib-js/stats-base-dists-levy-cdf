// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erfc@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";var i=s,a=e,m=r;var d=n,o=s,l=e,f=r;var j=function(t,s,e){var r;return i(t)||i(s)||i(e)||e<=0?NaN:t<s?0:(r=m(e/(2*(t-s))),a(r))},p=function(t,s){return o(t)||o(s)||s<=0?d(NaN):function(e){var r;if(o(e))return NaN;if(e<t)return 0;return r=f(s/(2*(e-t))),l(r)}};t(j,"factory",p);var c=j;export{c as default,p as factory};
//# sourceMappingURL=index.mjs.map
