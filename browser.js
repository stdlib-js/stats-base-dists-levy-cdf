// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(t){"use strict";var r,n="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;r=function(){try{return n({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,n){var e,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(t,r)||c.call(t,r)?(e=t.__proto__,t.__proto__=o,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,n.get),p&&f&&f.call(t,r,n.set),t};var l=r;function y(t){return t!=t}var p=Math.floor,v=Math.ceil;function b(t){return t<0?v(t):p(t)}var d=Number.NEGATIVE_INFINITY,_=Number.POSITIVE_INFINITY;function s(t){return t===_||t===d}var w,A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),m=Object.prototype.toString,h=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol.toStringTag:"";w=A&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e,o,u;if(null==t)return m.call(t);n=t[U],u=U,r=null!=(o=t)&&h.call(o,u);try{t[U]=void 0}catch(r){return m.call(t)}return e=m.call(t),r?t[U]=n:delete t[U],e}:function(t){return m.call(t)};var j,g=w,N="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,O="function"==typeof Uint32Array?Uint32Array:void 0;j=function(){var t,r,n;if("function"!=typeof I)return!1;try{r=new I(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(N&&n instanceof Uint32Array||"[object Uint32Array]"===g(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?O:function(){throw new Error("not implemented")};var S,E=j,F="function"==typeof Float64Array,T="function"==typeof Float64Array?Float64Array:null,H="function"==typeof Float64Array?Float64Array:void 0;S=function(){var t,r,n;if("function"!=typeof T)return!1;try{r=new T([1,3.14,-3.14,NaN]),n=r,t=(F&&n instanceof Float64Array||"[object Float64Array]"===g(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?H:function(){throw new Error("not implemented")};var G,P=S,M="function"==typeof Uint8Array,x="function"==typeof Uint8Array?Uint8Array:null,L="function"==typeof Uint8Array?Uint8Array:void 0;G=function(){var t,r,n;if("function"!=typeof x)return!1;try{r=new x(r=[1,3.14,-3.14,256,257]),n=r,t=(M&&n instanceof Uint8Array||"[object Uint8Array]"===g(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?L:function(){throw new Error("not implemented")};var V,W=G,k="function"==typeof Uint16Array,Y="function"==typeof Uint16Array?Uint16Array:null,q="function"==typeof Uint16Array?Uint16Array:void 0;V=function(){var t,r,n;if("function"!=typeof Y)return!1;try{r=new Y(r=[1,3.14,-3.14,65536,65537]),n=r,t=(k&&n instanceof Uint16Array||"[object Uint16Array]"===g(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?q:function(){throw new Error("not implemented")};var C,z={uint16:V,uint8:W};(C=new z.uint16(1))[0]=4660;var B,D,J=52===new z.uint8(C.buffer)[0];!0===J?(B=1,D=0):(B=0,D=1);var K={HIGH:B,LOW:D},Q=new P(1),R=new E(Q.buffer),X=K.HIGH,Z=K.LOW;function $(t,r){return Q[0]=r,t[0]=R[X],t[1]=R[Z],t}function tt(t,r){return 1===arguments.length?$([0,0],t):$(t,r)}var rt,nt,et=!0===J?1:0,ot=new P(1),ut=new E(ot.buffer);function it(t){return ot[0]=t,ut[et]}!0===J?(rt=1,nt=0):(rt=0,nt=1);var ft={HIGH:rt,LOW:nt},at=new P(1),ct=new E(at.buffer),lt=ft.HIGH,yt=ft.LOW;function pt(t,r){return ct[lt]=t,ct[yt]=r,at[0]}var vt=[0,0];function bt(t,r){return y(r)||s(r)?(t[0]=r,t[1]=0,t):0!==r&&function(t){return Math.abs(t)}(r)<22250738585072014e-324?(t[0]=4503599627370496*r,t[1]=-52,t):(t[0]=r,t[1]=0,t)}var dt=[0,0],_t=[0,0];function st(t,r){var n,e,o,u,i;return 0===r||0===t||y(t)||s(t)?t:(function(t,r){1===arguments.length?bt([0,0],t):bt(t,r)}(dt,t),r+=dt[1],r+=function(t){var r=it(t);return(r=(2146435072&r)>>>20)-1023|0}(t=dt[0]),r<-1074?(o=t,tt(vt,0),u=vt[0],u&=2147483647,i=it(o),pt(u|=i&=2147483648,vt[1])):r>1023?t<0?d:_:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,tt(_t,t),n=_t[0],n&=2148532223,e*pt(n|=r+1023<<20,_t[1])))}var wt=1.4426950408889634,At=1/(1<<28);function mt(t){var r;return y(t)||t===_?t:t===d?0:t>709.782712893384?_:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<At?1+t:function(t,r,n){var e,o,u,i;return st(1-(r-(e=t-r)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-t),n)}(t-.6931471803691238*(r=b(t<0?wt*t-.5:wt*t+.5)),1.9082149292705877e-10*r,r)}var ht=!0===J?0:1,Ut=new P(1),jt=new E(Ut.buffer),gt=.8450629115104675;function Nt(t){var r,n,e,o,u,i,f,a;if(y(t))return NaN;if(t===_)return 0;if(t===d)return 2;if(0===t)return 1;if(t<0?(r=!0,n=-t):(r=!1,n=t),n<.84375)return n<13877787807814457e-33?1-t:(o=.12837916709551256+(e=t*t)*function(t){return 0===t?-.3250421072470015:t*(t*(-23763016656650163e-21*t-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),u=1+e*function(t){return 0===t?.39791722395915535:.39791722395915535+t*(.0650222499887673+t*(.005081306281875766+t*(.00013249473800432164+-3960228278775368e-21*t)))}(e),i=o/u,t<.25?1-(t+t*i):(o=t*i,.5-(o+=t-.5)));if(n<1.25)return f=(u=n-1)*function(t){return 0===t?.41485611868374833:.41485611868374833+t*(t*(.31834661990116175+t*(t*(.035478304325618236+-.002166375594868791*t)-.11089469428239668))-.3722078760357013)}(u)-.0023621185607526594,a=1+u*function(t){return 0===t?.10642088040084423:.10642088040084423+t*(.540397917702171+t*(.07182865441419627+t*(.12617121980876164+t*(.01363708391202905+.011984499846799107*t))))}(u),r?1+gt+f/a:1-gt-f/a;if(n<28){if(u=1/(n*n),n<2.857142857142857)o=u*function(t){return 0===t?-.6938585727071818:t*(t*(t*(t*(t*(-9.814329344169145*t-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(u)-.009864944034847148,u=1+u*function(t){return 0===t?19.651271667439257:19.651271667439257+t*(137.65775414351904+t*(434.56587747522923+t*(645.3872717332679+t*(429.00814002756783+t*(108.63500554177944+t*(6.570249770319282+-.0604244152148581*t))))))}(u);else{if(t<-6)return 2;o=u*function(t){return 0===t?-.799283237680523:t*(t*(t*(t*(-483.5191916086514*t-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(u)-.0098649429247001,u=1+u*function(t){return 0===t?30.33806074348246:30.33806074348246+t*(325.7925129965739+t*(1536.729586084437+t*(3199.8582195085955+t*(2553.0504064331644+t*(474.52854120695537+-22.44095244658582*t)))))}(u)}return e=function(t,r){return Ut[0]=t,jt[ht]=r>>>0,Ut[0]}(n,0),o=mt(-e*e-.5625)*mt((e-n)*(e+n)+o/u),r?2-o/n:o/n}return r?2:0}var It=Math.sqrt;function Ot(t,r,n){return y(t)||y(r)||y(n)||n<=0?NaN:t<r?0:Nt(It(n/(2*(t-r))))}function St(t,r){return y(t)||y(r)||r<=0?(n=NaN,function(){return n}):function(n){return y(n)?NaN:n<t?0:Nt(It(r/(2*(n-t))))};var n}l(Ot,"factory",{configurable:!1,enumerable:!1,writable:!1,value:St}),t.default=Ot,t.factory=St,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).cdf={});
//# sourceMappingURL=browser.js.map
