// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,n=Object.prototype,e=n.toString,o=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,a=n.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,f){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(i.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=f.value,r.__proto__=c):r[t]=f.value),y="get"in f,v="set"in f,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,t,f.get),v&&u&&u.call(r,t,f.set),r};function c(r,t,n){f(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(r){return r!=r}var y=Math.floor,v=Math.ceil;function p(r){return r<0?v(r):y(r)}var b=Number.NEGATIVE_INFINITY,w=Number.POSITIVE_INFINITY;function A(r){return r===w||r===b}var _="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var m=Object.prototype.toString;var s=Object.prototype.hasOwnProperty;var d="function"==typeof Symbol?Symbol.toStringTag:"";var U=_&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,u;if(null==r)return m.call(r);n=r[d],u=d,t=null!=(o=r)&&s.call(o,u);try{r[d]=void 0}catch(t){return m.call(r)}return e=m.call(r),t?r[d]=n:delete r[d],e}:function(r){return m.call(r)},h="function"==typeof Uint32Array;var N="function"==typeof Uint32Array?Uint32Array:null;var j,g="function"==typeof Uint32Array?Uint32Array:void 0;j=function(){var r,t,n;if("function"!=typeof N)return!1;try{t=new N(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(h&&n instanceof Uint32Array||"[object Uint32Array]"===U(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?g:function(){throw new Error("not implemented")};var I=j,O="function"==typeof Float64Array;var S="function"==typeof Float64Array?Float64Array:null;var E,F="function"==typeof Float64Array?Float64Array:void 0;E=function(){var r,t,n;if("function"!=typeof S)return!1;try{t=new S([1,3.14,-3.14,NaN]),n=t,r=(O&&n instanceof Float64Array||"[object Float64Array]"===U(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?F:function(){throw new Error("not implemented")};var H=E,T="function"==typeof Uint8Array;var G="function"==typeof Uint8Array?Uint8Array:null;var P,L="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,t,n;if("function"!=typeof G)return!1;try{t=new G(t=[1,3.14,-3.14,256,257]),n=t,r=(T&&n instanceof Uint8Array||"[object Uint8Array]"===U(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?L:function(){throw new Error("not implemented")};var M=P,V="function"==typeof Uint16Array;var W="function"==typeof Uint16Array?Uint16Array:null;var k,x="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,t,n;if("function"!=typeof W)return!1;try{t=new W(t=[1,3.14,-3.14,65536,65537]),n=t,r=(V&&n instanceof Uint16Array||"[object Uint16Array]"===U(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?x:function(){throw new Error("not implemented")};var Y,q={uint16:k,uint8:M};(Y=new q.uint16(1))[0]=4660;var C,z,B=52===new q.uint8(Y.buffer)[0];!0===B?(C=1,z=0):(C=0,z=1);var D={HIGH:C,LOW:z},J=new H(1),K=new I(J.buffer),Q=D.HIGH,R=D.LOW;function X(r,t){return J[0]=t,r[0]=K[Q],r[1]=K[R],r}function Z(r,t){return 1===arguments.length?X([0,0],r):X(r,t)}var $,rr,tr=!0===B?1:0,nr=new H(1),er=new I(nr.buffer);function or(r){return nr[0]=r,er[tr]}!0===B?($=1,rr=0):($=0,rr=1);var ur={HIGH:$,LOW:rr},ir=new H(1),ar=new I(ir.buffer),fr=ur.HIGH,cr=ur.LOW;function lr(r,t){return ar[fr]=r,ar[cr]=t,ir[0]}var yr=[0,0];function vr(r,t,n,e){return l(r)||A(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}c((function(r){return vr(r,[0,0],1,0)}),"assign",vr);var pr=[0,0],br=[0,0];function wr(r,t){var n,e,o,u,i;return 0===t||0===r||l(r)||A(r)?r:(vr(r,pr,1,0),t+=pr[1],t+=function(r){var t=or(r);return(t=(2146435072&t)>>>20)-1023|0}(r=pr[0]),t<-1074?(o=r,Z(yr,0),u=yr[0],u&=2147483647,i=or(o),lr(u|=i&=2147483648,yr[1])):t>1023?r<0?b:w:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Z(br,r),n=br[0],n&=2148532223,e*lr(n|=t+1023<<20,br[1])))}function Ar(r){var t;return l(r)||r===w?r:r===b?0:r>709.782712893384?w:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,o,u,i;return wr(1-(t-(e=r-t)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),n)}(r-.6931471803691238*(t=p(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}var _r=!0===B?0:1,mr=new H(1),sr=new I(mr.buffer);var dr=.8450629115104675;function Ur(r){var t,n,e,o,u,i,a,f;if(l(r))return NaN;if(r===w)return 0;if(r===b)return 2;if(0===r)return 1;if(r<0?(t=!0,n=-r):(t=!1,n=r),n<.84375)return n<13877787807814457e-33?1-r:(o=.12837916709551256+(e=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),u=1+e*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(e),i=o/u,r<.25?1-(r+r*i):(o=r*i,.5-(o+=r-.5)));if(n<1.25)return a=(u=n-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(u)-.0023621185607526594,f=1+u*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(u),t?1+dr+a/f:1-dr-a/f;if(n<28){if(u=1/(n*n),n<2.857142857142857)o=u*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(u)-.009864944034847148,u=1+u*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(u);else{if(r<-6)return 2;o=u*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(u)-.0098649429247001,u=1+u*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(u)}return e=function(r,t){return mr[0]=r,sr[_r]=t>>>0,mr[0]}(n,0),o=Ar(-e*e-.5625)*Ar((e-n)*(e+n)+o/u),t?2-o/n:o/n}return t?2:0}var hr=Math.sqrt;function Nr(r,t,n){return l(r)||l(t)||l(n)||n<=0?NaN:r<t?0:Ur(hr(n/(2*(r-t))))}function jr(r,t){return l(r)||l(t)||t<=0?(n=NaN,function(){return n}):function(n){if(l(n))return NaN;if(n<r)return 0;return Ur(hr(t/(2*(n-r))))};var n}c(Nr,"factory",jr);export{Nr as default,jr as factory};
//# sourceMappingURL=mod.js.map
