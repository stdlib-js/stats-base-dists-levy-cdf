// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erfc@v0.2.3-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";function i(t,r,i){var m;return s(t)||s(r)||s(i)||i<=0?NaN:t<r?0:(m=n(i/(2*(t-r))),e(m))}function m(t,i){return s(t)||s(i)||i<=0?r(NaN):function(r){var m;if(s(r))return NaN;if(r<t)return 0;return m=n(i/(2*(r-t))),e(m)}}t(i,"factory",m);export{i as default,m as factory};
//# sourceMappingURL=index.mjs.map
