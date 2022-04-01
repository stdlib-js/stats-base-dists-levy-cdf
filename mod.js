// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,a=e.__defineSetter__,i=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,l=function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,t.get),v&&a&&a.call(r,n,t.set),r},y=n()?c:l;var v=function(r,n,t){y(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r){return r!=r},b=Math.floor,w=Math.ceil,A=b,_=w;var m=function(r){return r<0?_(r):A(r)},d=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,h=s,U=d;var N=function(r){return r===h||r===U};var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var g=function(){return j&&"symbol"==typeof Symbol.toStringTag},I=Object.prototype.toString,O=I;var S=function(r){return O.call(r)},E=Object.prototype.hasOwnProperty;var F=function(r,n){return null!=r&&E.call(r,n)},H="function"==typeof Symbol?Symbol.toStringTag:"",T=F,G=H,P=I;var L=S,M=function(r){var n,t,e;if(null==r)return P.call(r);t=r[G],n=T(r,G);try{r[G]=void 0}catch(n){return P.call(r)}return e=P.call(r),n?r[G]=t:delete r[G],e},V=g()?M:L,W=V,k="function"==typeof Uint32Array;var x="function"==typeof Uint32Array?Uint32Array:null,Y=function(r){return k&&r instanceof Uint32Array||"[object Uint32Array]"===W(r)},q=x;var C=function(){var r,n;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,4294967296,4294967297]),r=Y(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var z="function"==typeof Uint32Array?Uint32Array:void 0,B=function(){throw new Error("not implemented")},D=C()?z:B,J=V,K="function"==typeof Float64Array;var Q="function"==typeof Float64Array?Float64Array:null,R=function(r){return K&&r instanceof Float64Array||"[object Float64Array]"===J(r)},X=Q;var Z=function(){var r,n;if("function"!=typeof X)return!1;try{n=new X([1,3.14,-3.14,NaN]),r=R(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var $="function"==typeof Float64Array?Float64Array:void 0,rr=function(){throw new Error("not implemented")},nr=Z()?$:rr,tr=V,er="function"==typeof Uint8Array;var or="function"==typeof Uint8Array?Uint8Array:null,ur=function(r){return er&&r instanceof Uint8Array||"[object Uint8Array]"===tr(r)},ar=or;var ir=function(){var r,n;if("function"!=typeof ar)return!1;try{n=new ar(n=[1,3.14,-3.14,256,257]),r=ur(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var fr="function"==typeof Uint8Array?Uint8Array:void 0,cr=function(){throw new Error("not implemented")},lr=ir()?fr:cr,yr=V,vr="function"==typeof Uint16Array;var pr="function"==typeof Uint16Array?Uint16Array:null,br=function(r){return vr&&r instanceof Uint16Array||"[object Uint16Array]"===yr(r)},wr=pr;var Ar=function(){var r,n;if("function"!=typeof wr)return!1;try{n=new wr(n=[1,3.14,-3.14,65536,65537]),r=br(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var _r,mr="function"==typeof Uint16Array?Uint16Array:void 0,dr=function(){throw new Error("not implemented")},sr={uint16:Ar()?mr:dr,uint8:lr};(_r=new sr.uint16(1))[0]=4660;var hr,Ur,Nr=52===new sr.uint8(_r.buffer)[0];!0===Nr?(hr=1,Ur=0):(hr=0,Ur=1);var jr=D,gr={HIGH:hr,LOW:Ur},Ir=new nr(1),Or=new jr(Ir.buffer),Sr=gr.HIGH,Er=gr.LOW;var Fr=function(r,n){return Ir[0]=n,r[0]=Or[Sr],r[1]=Or[Er],r};var Hr=function(r,n){return 1===arguments.length?Fr([0,0],r):Fr(r,n)},Tr=D,Gr=!0===Nr?1:0,Pr=new nr(1),Lr=new Tr(Pr.buffer);var Mr,Vr,Wr=function(r){return Pr[0]=r,Lr[Gr]};!0===Nr?(Mr=1,Vr=0):(Mr=0,Vr=1);var kr=D,xr={HIGH:Mr,LOW:Vr},Yr=new nr(1),qr=new kr(Yr.buffer),Cr=xr.HIGH,zr=xr.LOW;var Br=function(r,n){return qr[Cr]=r,qr[zr]=n,Yr[0]},Dr=Hr,Jr=Wr,Kr=Br,Qr=[0,0];var Rr=N,Xr=p,Zr=function(r){return Math.abs(r)};var $r=function(r,n){return Xr(n)||Rr(n)?(r[0]=n,r[1]=0,r):0!==n&&Zr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var rn=Wr;var nn=function(r){var n=rn(r);return(n=(2146435072&n)>>>20)-1023|0},tn=s,en=d,on=p,un=N,an=function(r,n){var t,e;return Dr(Qr,r),t=Qr[0],t&=2147483647,e=Jr(n),Kr(t|=e&=2147483648,Qr[1])},fn=function(r,n){return 1===arguments.length?$r([0,0],r):$r(r,n)},cn=nn,ln=Hr,yn=Br,vn=[0,0],pn=[0,0];var bn=function(r,n){var t,e;return 0===n||0===r||on(r)||un(r)?r:(fn(vn,r),n+=vn[1],(n+=cn(r=vn[0]))<-1074?an(0,r):n>1023?r<0?en:tn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,ln(pn,r),t=pn[0],t&=2148532223,e*yn(t|=n+1023<<20,pn[1])))};var wn=bn,An=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var _n=p,mn=m,dn=d,sn=s,hn=function(r,n,t){var e,o,u;return u=(e=r-n)-(o=e*e)*An(o),wn(1-(n-e*u/(2-u)-r),t)};var Un=function(r){var n;return _n(r)||r===sn?r:r===dn?0:r>709.782712893384?sn:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(n=mn(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),hn(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},Nn=D,jn=!0===Nr?0:1,gn=new nr(1),In=new Nn(gn.buffer);var On=function(r,n){return gn[0]=r,In[jn]=n>>>0,gn[0]};var Sn=p,En=Un,Fn=On,Hn=s,Tn=d,Gn=function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015},Pn=function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))},Ln=function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)},Mn=function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))},Vn=function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818},Wn=function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))},kn=function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523},xn=function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))},Yn=.8450629115104675;var qn=function(r){var n,t,e,o,u,a,i,f;if(Sn(r))return NaN;if(r===Hn)return 0;if(r===Tn)return 2;if(0===r)return 1;if(r<0?(n=!0,t=-r):(n=!1,t=r),t<.84375)return t<13877787807814457e-33?1-r:(a=(o=.12837916709551256+(e=r*r)*Gn(e))/(u=1+e*Pn(e)),r<.25?1-(r+r*a):(o=r*a,.5-(o+=r-.5)));if(t<1.25)return i=(u=t-1)*Ln(u)-.0023621185607526594,f=1+u*Mn(u),n?1+Yn+i/f:1-Yn-i/f;if(t<28){if(u=1/(t*t),t<2.857142857142857)o=u*Vn(u)-.009864944034847148,u=1+u*Wn(u);else{if(r<-6)return 2;o=u*kn(u)-.0098649429247001,u=1+u*xn(u)}return e=Fn(t,0),o=En(-e*e-.5625)*En((e-t)*(e+t)+o/u),n?2-o/t:o/t}return n?2:0},Cn=Math.sqrt,zn=p,Bn=qn,Dn=Cn;var Jn=function(r){return function(){return r}},Kn=p,Qn=qn,Rn=Cn;var Xn=function(r,n,t){var e;return zn(r)||zn(n)||zn(t)||t<=0?NaN:r<n?0:(e=Dn(t/(2*(r-n))),Bn(e))},Zn=function(r,n){return Kn(r)||Kn(n)||n<=0?Jn(NaN):function(t){var e;if(Kn(t))return NaN;if(t<r)return 0;return e=Rn(n/(2*(t-r))),Qn(e)}};v(Xn,"factory",Zn);var $n=Xn;export{$n as default,Zn as factory};
//# sourceMappingURL=mod.js.map
