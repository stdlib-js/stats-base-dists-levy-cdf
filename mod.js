// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function a(r,t,n){var a=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(a=!0,r=r.substr(1)),r=n?r+e(i):e(i)+r,a&&(r="-"+r)),r}var i=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var t,e,c;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,c=parseInt(e,10),!isFinite(c)){if(!n(e))throw new Error("invalid integer. Value: "+e);c=0}return c<0&&("u"===r.specifier||10!==t)&&(c=4294967295+c+1),c<0?(e=(-c).toString(t),r.precision&&(e=a(e,r.precision,r.padRight)),e="-"+e):(e=c.toString(t),c||r.precision?r.precision&&(e=a(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):i.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function u(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function A(r){var t,e,a=parseFloat(r.arg);if(!isFinite(a)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);a=r.arg}switch(r.specifier){case"e":case"E":e=a.toExponential(r.precision);break;case"f":case"F":e=a.toFixed(r.precision);break;case"g":case"G":f(a)<1e-4?((t=r.precision)>0&&(t-=1),e=a.toExponential(t)):e=a.toPrecision(r.precision),r.alternate||(e=s.call(e,b,"$1e"),e=s.call(e,w,"e"),e=s.call(e,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=s.call(e,y,"e+0$1"),e=s.call(e,v,"e-0$1"),r.alternate&&(e=s.call(e,g,"$1."),e=s.call(e,d,"$1.e")),a>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):l.call(e)}function m(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function F(r,t,n){var e=t-r.length;return e<0?r:r=n?r+m(e):m(e)+r}var I=String.fromCharCode,N=isNaN,E=Array.isArray;function _(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function T(r){var t,n,e,i,o,f,l,p,s;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,p=0;p<r.length;p++)if(u(e=r[p]))f+=e;else{if(t=void 0!==e.precision,!(e=_(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,s=0;s<n.length;s++)switch(i=n.charAt(s)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,N(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,N(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=c(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!N(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=N(o)?String(e.arg):I(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=A(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=a(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=F(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function j(r){var t,n,e,a;for(n=[],a=0,e=S.exec(r);e;)(t=r.slice(a,S.lastIndex-e[0].length)).length&&n.push(t),n.push(U(e)),a=S.lastIndex,e=S.exec(r);return(t=r.slice(a)).length&&n.push(t),n}function V(r){return"string"==typeof r}function k(r){var t,n;if(!V(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[j(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return T.apply(null,t)}var x=Object.prototype,O=x.toString,G=x.__defineGetter__,H=x.__defineSetter__,P=x.__lookupGetter__,W=x.__lookupSetter__;var $=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,a,i,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===O.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((a="value"in n)&&(P.call(r,t)||W.call(r,t)?(e=r.__proto__,r.__proto__=x,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),i="get"in n,o="set"in n,a&&(i||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,n.get),o&&H&&H.call(r,t,n.set),r};function L(r,t,n){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Y(r){return r!=r}var C=Math.floor,R=Math.ceil;function M(r){return r<0?R(r):C(r)}var Z=Number,X=Z.NEGATIVE_INFINITY,q=Number.POSITIVE_INFINITY,z=Number.POSITIVE_INFINITY,B=Z.NEGATIVE_INFINITY,D=Number.POSITIVE_INFINITY,J=Z.NEGATIVE_INFINITY;function K(r){return r===D||r===J}var Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var rr=Object.prototype.toString;var tr=Object.prototype.hasOwnProperty;var nr="function"==typeof Symbol?Symbol:void 0,er="function"==typeof nr?nr.toStringTag:"";var ar=Q&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,a,i;if(null==r)return rr.call(r);n=r[er],i=er,t=null!=(a=r)&&tr.call(a,i);try{r[er]=void 0}catch(t){return rr.call(r)}return e=rr.call(r),t?r[er]=n:delete r[er],e}:function(r){return rr.call(r)},ir="function"==typeof Uint32Array;var or="function"==typeof Uint32Array?Uint32Array:null;var cr,ur="function"==typeof Uint32Array?Uint32Array:void 0;cr=function(){var r,t,n;if("function"!=typeof or)return!1;try{t=new or(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(ir&&n instanceof Uint32Array||"[object Uint32Array]"===ar(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr=cr,lr="function"==typeof Float64Array;var pr="function"==typeof Float64Array?Float64Array:null;var sr,yr="function"==typeof Float64Array?Float64Array:void 0;sr=function(){var r,t,n;if("function"!=typeof pr)return!1;try{t=new pr([1,3.14,-3.14,NaN]),n=t,r=(lr&&n instanceof Float64Array||"[object Float64Array]"===ar(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var vr=sr,gr="function"==typeof Uint8Array;var dr="function"==typeof Uint8Array?Uint8Array:null;var hr,wr="function"==typeof Uint8Array?Uint8Array:void 0;hr=function(){var r,t,n;if("function"!=typeof dr)return!1;try{t=new dr(t=[1,3.14,-3.14,256,257]),n=t,r=(gr&&n instanceof Uint8Array||"[object Uint8Array]"===ar(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var br=hr,Ar="function"==typeof Uint16Array;var mr="function"==typeof Uint16Array?Uint16Array:null;var Fr,Ir="function"==typeof Uint16Array?Uint16Array:void 0;Fr=function(){var r,t,n;if("function"!=typeof mr)return!1;try{t=new mr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Ar&&n instanceof Uint16Array||"[object Uint16Array]"===ar(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ir:function(){throw new Error("not implemented")};var Nr,Er={uint16:Fr,uint8:br};(Nr=new Er.uint16(1))[0]=4660;var _r,Tr,Sr=52===new Er.uint8(Nr.buffer)[0];!0===Sr?(_r=1,Tr=0):(_r=0,Tr=1);var Ur={HIGH:_r,LOW:Tr},jr=new vr(1),Vr=new fr(jr.buffer),kr=Ur.HIGH,xr=Ur.LOW;function Or(r,t,n,e){return jr[0]=r,t[e]=Vr[kr],t[e+n]=Vr[xr],t}function Gr(r){return Or(r,[0,0],1,0)}L(Gr,"assign",Or);var Hr="function"==typeof Float64Array;var Pr="function"==typeof Float64Array?Float64Array:null;var Wr,$r="function"==typeof Float64Array?Float64Array:void 0;Wr=function(){var r,t,n;if("function"!=typeof Pr)return!1;try{t=new Pr([1,3.14,-3.14,NaN]),n=t,r=(Hr&&n instanceof Float64Array||"[object Float64Array]"===ar(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Lr=!0===Sr?1:0,Yr=new Wr(1),Cr=new fr(Yr.buffer);function Rr(r){return Yr[0]=r,Cr[Lr]}var Mr="function"==typeof Float64Array;var Zr="function"==typeof Float64Array?Float64Array:null;var Xr,qr,zr,Br="function"==typeof Float64Array?Float64Array:void 0;Xr=function(){var r,t,n;if("function"!=typeof Zr)return!1;try{t=new Zr([1,3.14,-3.14,NaN]),n=t,r=(Mr&&n instanceof Float64Array||"[object Float64Array]"===ar(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Br:function(){throw new Error("not implemented")},!0===Sr?(qr=1,zr=0):(qr=0,zr=1);var Dr={HIGH:qr,LOW:zr},Jr=new Xr(1),Kr=new fr(Jr.buffer),Qr=Dr.HIGH,rt=Dr.LOW;function tt(r,t){return Kr[Qr]=r,Kr[rt]=t,Jr[0]}var nt=[0,0];function et(r,t,n,e){return Y(r)||K(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}L((function(r){return et(r,[0,0],1,0)}),"assign",et);var at="function"==typeof Float64Array;var it="function"==typeof Float64Array?Float64Array:null;var ot,ct,ut,ft="function"==typeof Float64Array?Float64Array:void 0;ot=function(){var r,t,n;if("function"!=typeof it)return!1;try{t=new it([1,3.14,-3.14,NaN]),n=t,r=(at&&n instanceof Float64Array||"[object Float64Array]"===ar(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ft:function(){throw new Error("not implemented")},!0===Sr?(ct=1,ut=0):(ct=0,ut=1);var lt={HIGH:ct,LOW:ut},pt=new ot(1),st=new fr(pt.buffer),yt=lt.HIGH,vt=lt.LOW;function gt(r,t,n,e){return pt[0]=r,t[e]=st[yt],t[e+n]=st[vt],t}function dt(r){return gt(r,[0,0],1,0)}L(dt,"assign",gt);var ht=[0,0],wt=[0,0];function bt(r,t){var n,e,a,i,o,c;return 0===t||0===r||Y(r)||K(r)?r:(et(r,ht,1,0),t+=ht[1],t+=function(r){var t=Rr(r);return(t=(2146435072&t)>>>20)-1023|0}(r=ht[0]),t<-1074?(a=0,i=r,Gr.assign(a,nt,1,0),o=nt[0],o&=2147483647,c=Rr(i),tt(o|=c&=2147483648,nt[1])):t>1023?r<0?B:z:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,dt.assign(r,wt,1,0),n=wt[0],n&=2148532223,e*tt(n|=t+1023<<20,wt[1])))}function At(r){var t;return Y(r)||r===q?r:r===X?0:r>709.782712893384?q:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,a,i,o;return bt(1-(t-(e=r-t)*(i=e-(a=e*e)*(0===(o=a)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),n)}(r-.6931471803691238*(t=M(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}var mt="function"==typeof Float64Array;var Ft="function"==typeof Float64Array?Float64Array:null;var It,Nt="function"==typeof Float64Array?Float64Array:void 0;It=function(){var r,t,n;if("function"!=typeof Ft)return!1;try{t=new Ft([1,3.14,-3.14,NaN]),n=t,r=(mt&&n instanceof Float64Array||"[object Float64Array]"===ar(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Nt:function(){throw new Error("not implemented")};var Et=!0===Sr?0:1,_t=new It(1),Tt=new fr(_t.buffer);var St=Number.POSITIVE_INFINITY,Ut=Z.NEGATIVE_INFINITY;var jt=.8450629115104675;function Vt(r){var t,n,e,a,i,o,c,u;if(Y(r))return NaN;if(r===St)return 0;if(r===Ut)return 2;if(0===r)return 1;if(r<0?(t=!0,n=-r):(t=!1,n=r),n<.84375)return n<13877787807814457e-33?1-r:(a=.12837916709551256+(e=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),i=1+e*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(e),o=a/i,r<.25?1-(r+r*o):(a=r*o,.5-(a+=r-.5)));if(n<1.25)return c=(i=n-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(i)-.0023621185607526594,u=1+i*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(i),t?1+jt+c/u:1-jt-c/u;if(n<28){if(i=1/(n*n),n<2.857142857142857)a=i*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(i)-.009864944034847148,i=1+i*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(i);else{if(r<-6)return 2;a=i*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(i)-.0098649429247001,i=1+i*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(i)}return e=function(r,t){return _t[0]=r,Tt[Et]=t>>>0,_t[0]}(n,0),a=At(-e*e-.5625)*At((e-n)*(e+n)+a/i),t?2-a/n:a/n}return t?2:0}var kt=Math.sqrt;function xt(r,t,n){return Y(r)||Y(t)||Y(n)||n<=0?NaN:r<t?0:Vt(kt(n/(2*(r-t))))}function Ot(r,t){return Y(r)||Y(t)||t<=0?(n=NaN,function(){return n}):function(n){if(Y(n))return NaN;if(n<r)return 0;return Vt(kt(t/(2*(n-r))))};var n}L(xt,"factory",Ot);export{xt as default,Ot as factory};
//# sourceMappingURL=mod.js.map
