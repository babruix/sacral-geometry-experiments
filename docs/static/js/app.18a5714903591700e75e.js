webpackJsonp([1,2],{104:function(t,e){},105:function(t,e){},106:function(t,e){},110:function(t,e,i){var n=i(18)(i(56),i(116),null,null);t.exports=n.exports},111:function(t,e,i){i(104);var n=i(18)(i(57),i(114),"data-v-41d3f06e",null);t.exports=n.exports},112:function(t,e,i){var n=i(18)(i(58),i(117),null,null);t.exports=n.exports},113:function(t,e,i){i(106);var n=i(18)(i(59),i(118),"data-v-f06f484e",null);t.exports=n.exports},114:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"scene"},[i("div",{staticClass:"boo",style:t.booStyle})])},staticRenderFns:[]}},115:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("a",{attrs:{href:"#/"}},[t._v("Fibonacci Spiral")]),t._v(" "),i("a",{attrs:{href:"#/canvas"}},[t._v("Canvas")]),t._v(" "),i("a",{attrs:{href:"#/tunnel"}},[t._v("Tunnel")]),t._v(" "),i("a",{attrs:{href:"#/sunflower"}},[t._v("Sunflower")]),t._v(" "),i("button",{attrs:{id:"fullscreen"},on:{click:function(e){t.enterFullscreen()}}},[t._v("GO FULL SCREEN")]),t._v(" "),i("router-view")],1)},staticRenderFns:[]}},116:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"canvas"},[i("canvas",{attrs:{id:"canvas",width:"600",height:"600"}})])}]}},117:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"canvas"},[i("canvas",{attrs:{id:"canvas",width:"600",height:"600"}})])}]}},118:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"scene",style:t.sceneStyle,attrs:{id:"tunnel-scene"}},[i("div",{staticClass:"wrapper",style:t.wrapperStyle},[i("ul",{staticClass:"tunnel"},t._l(t.countDivs,function(e){return i("li",{staticClass:"ring",style:t.ringStyle})}))])])])},staticRenderFns:[]}},121:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),a=i(54),r=i.n(a),s=i(53);n.default.config.productionTip=!1,new n.default({el:"#app",router:s.a,template:"<App/>",components:{App:r.a}})},53:function(t,e,i){"use strict";var n=i(0),a=i(119),r=i(111),s=i.n(r),o=i(110),u=i.n(o),h=i(113),l=i.n(h),c=i(112),d=i.n(c);n.default.use(a.a),e.a=new a.a({routes:[{path:"/",name:"SacralCircle",component:s.a},{path:"/canvas",name:"Canvas",component:u.a},{path:"/tunnel",name:"Tunnel",component:l.a},{path:"/sunflower",name:"Sunflower",component:d.a}]})},54:function(t,e,i){i(105);var n=i(18)(i(55),i(115),null,null);t.exports=n.exports},55:function(t,e,i){"use strict";function n(t,e,i,n,a){var r={};return Object.keys(n).forEach(function(t){r[t]=n[t]}),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=i.slice().reverse().reduce(function(i,n){return n(t,e,i)||i},r),a&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(a):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(t,e,r),r=null),r}Object.defineProperty(e,"__esModule",{value:!0});var a=i(38),r=i.n(a),s=i(12),o=i.n(s),u=i(7),h=i.n(u),l=i(8),c=i.n(l),d=i(14),_=i.n(d),f=i(13),p=i.n(f),v=i(0),m=i(19);i.n(m);i.d(e,"default",function(){return b});var g,w,y,b=(g=i.i(m.Watch)("$route"),i.i(m.Component)((y=function(t){function e(){return h()(this,e),_()(this,(e.__proto__||o()(e)).apply(this,arguments))}return p()(e,t),c()(e,[{key:"enterFullscreen",value:function(){var t=document.getElementById("fullscreen").nextSibling.nextSibling;t.webkitRequestFullScreen?t.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):t.mozRequestFullScreen()}},{key:"onRouteChanged",value:function(t,e){var i=document.querySelector(".main.a");i&&i.remove()}}]),e}(v.default),n(y.prototype,"onRouteChanged",[g],r()(y.prototype,"onRouteChanged"),y.prototype),w=y))||w)},56:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(12),a=i.n(n),r=i(7),s=i.n(r),o=i(8),u=i.n(o),h=i(14),l=i.n(h),c=i(13),d=i.n(c),_=i(0),f=i(19),p=(i.n(f),i(23)),v=i.n(p);i.d(e,"default",function(){return g});var m,g=i.i(f.Component)(m=function(t){function e(){var t,i,n,r;s()(this,e);for(var o=arguments.length,u=Array(o),h=0;h<o;h++)u[h]=arguments[h];return i=n=l()(this,(t=e.__proto__||a()(e)).call.apply(t,[this].concat(u))),n.datgui=new v.a.GUI,n.length=200,n.divisions=6,n.speed=12e4,n.colorSpeed=60,r=i,l()(n,r)}return d()(e,t),u()(e,[{key:"drawFrame",value:function(t){var e={},i=Math.floor(t/this.colorSpeed);if(t-this.target.timestamp>this.speed){this.target.timestamp=0;var n=this.target.origin;this.target.origin=this.target.destination,this.target.destination=n}0===this.target.timestamp&&(this.target.timestamp=t);var a=this.easeInOutSine(t-this.target.timestamp,this.target.origin,this.target.destination-this.target.origin,this.speed);this.ctx.fillRect(0,0,this.width,this.height);for(var r=0;r<this.length;r++){var s={};s.r=this.linearEase(r,1,this.radius-1,this.length),s.t=(360/this.divisions*r+a*r)*Math.PI/180,s.x=s.r*Math.cos(s.t)+this.center.x,s.y=s.r*Math.sin(s.t)+this.center.y,this.ctx.beginPath();var o=this.rainbow[(i+r)%this.rLength];this.ctx.strokeStyle="rgba("+o.r+", "+o.g+", "+o.b+", 0.5)",this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(s.x,s.y),this.ctx.stroke(),e.x=s.x,e.y=s.y}window.requestAnimationFrame(this.drawFrame)}},{key:"linearEase",value:function(t,e,i,n){return i*t/n+e}},{key:"easeInOutSine",value:function(t,e,i,n){return i/2*(1-Math.cos(Math.PI*t/n))+e}},{key:"makeColorGradient",value:function(t){for(var e=2*Math.PI/t*1,i=2*Math.PI/t*1,n=2*Math.PI/t*1,a=0,r=2*Math.PI/3,s=4*Math.PI/3,o=127,u=128,h=[],l=0;l<t;l++){var c=Math.round(Math.sin(e*l+a)*o+u),d=Math.round(Math.sin(i*l+r)*o+u),_=Math.round(Math.sin(n*l+s)*o+u);h.push({r:c,g:d,b:_})}return h}},{key:"mounted",value:function(){this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.ctx.fillStyle="#000",this.ctx.strokeStyle="rgba(255, 255, 255, 0.2)",this.ctx.lineWidth=2,this.width=this.canvas.width,this.height=this.canvas.height,this.diameter=this.width-.1*this.width,this.radius=this.diameter/2,this.center={x:this.width/2,y:this.height/2},this.rainbow=this.makeColorGradient(this.length),this.rLength=this.rainbow.length,this.target={origin:-180,destination:180,timestamp:0},window.requestAnimationFrame(this.drawFrame),this.datgui.add(this,"length",200,500,10),this.datgui.add(this,"divisions",0,10),this.datgui.add(this,"speed",120,112e3,100),this.datgui.add(this,"colorSpeed",5,100,1)}}]),e}(_.default))||m},57:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(12),a=i.n(n),r=i(7),s=i.n(r),o=i(8),u=i.n(o),h=i(14),l=i.n(h),c=i(13),d=i.n(c),_=i(0),f=i(19),p=(i.n(f),i(23)),v=i.n(p);i.d(e,"default",function(){return g});var m,g=i.i(f.Component)(m=function(t){function e(){var t,i,n,r;s()(this,e);for(var o=arguments.length,u=Array(o),h=0;h<o;h++)u[h]=arguments[h];return i=n=l()(this,(t=e.__proto__||a()(e)).call.apply(t,[this].concat(u))),n.datgui=new v.a.GUI,n.currentFrame=0,n.fudge=.87,n.nbrCircles=150,n.deviation=5/8,n.lgRad=13,r=i,l()(n,r)}return d()(e,t),u()(e,[{key:"drawFrame",value:function(){this.currentFrame++,window.requestAnimationFrame(this.drawFrame)}},{key:"mounted",value:function(){window.requestAnimationFrame(this.drawFrame),this.datgui.add(this,"nbrCircles",100,1e3,100),this.datgui.add(this,"fudge",0,1,.1),this.datgui.add(this,"deviation",-1,1,.1),this.datgui.add(this,"lgRad",5,30,1)}},{key:"booStyle",get:function(){for(var t="",e=(Math.sqrt(5)+1)/2+3,i=e*(33+Math.PI),n=Math.pow(this.lgRad,2)*Math.PI,a=n/this.nbrCircles,r=a*(1-this.deviation),s=a*(1+this.deviation),o=0,u=2e-4*this.currentFrame+.1,h=.005*this.currentFrame,l=1;l<=this.nbrCircles;++l){var c=l*i+h,d=l/this.nbrCircles,_=r+d*(s-r),f=Math.sqrt(_/Math.PI);o+=_;var p=Math.sqrt(o/Math.PI),v=Math.cos(c)*p,m=Math.sin(c)*p,g=u*l;g-=Math.floor(g),g*=360,t.length>0&&(t+=", "),t+=v+"em "+m+"em 0 "+f*this.fudge+"em hsl("+g+", 100%, 50%)"}return{"box-shadow":t}}}]),e}(_.default))||m},58:function(t,e,i){"use strict";function n(t,e,i,n,a){var r={};return Object.keys(n).forEach(function(t){r[t]=n[t]}),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=i.slice().reverse().reduce(function(i,n){return n(t,e,i)||i},r),a&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(a):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(t,e,r),r=null),r}Object.defineProperty(e,"__esModule",{value:!0});var a=i(38),r=i.n(a),s=i(12),o=i.n(s),u=i(7),h=i.n(u),l=i(8),c=i.n(l),d=i(14),_=i.n(d),f=i(13),p=i.n(f),v=i(0),m=i(19),g=(i.n(m),i(60)),w=i(23),y=i.n(w);i.d(e,"default",function(){return E});var b,M,C,x,k,E=(b=i.i(m.Watch)("seeds"),M=i.i(m.Watch)("rotateOn"),C=i.i(m.Watch)("radius"),i.i(m.Component)((k=function(t){function e(){var t,i,n,a;h()(this,e);for(var r=arguments.length,s=Array(r),u=0;u<r;u++)s[u]=arguments[u];return i=n=_()(this,(t=e.__proto__||o()(e)).call.apply(t,[this].concat(s))),n.datgui=new y.a.GUI,n.seeds=2e3,n.rotateOn=!1,n.radius=2,a=i,_()(n,a)}return p()(e,t),c()(e,[{key:"mounted",value:function(){this.sunflower=new g.a("canvas"),this.sunflower.animate(),this.datgui.add(this,"seeds",70,3e3,10),this.datgui.add(this,"rotateOn"),this.datgui.add(this,"radius",2,100,1)}},{key:"onSeedsChanged",value:function(){this.sunflower.seeds=this.seeds}},{key:"onRotateChanged",value:function(){this.sunflower.rotateOn=this.rotateOn}},{key:"onRadiusChanged",value:function(){this.sunflower.radius=this.radius}}]),e}(v.default),n(k.prototype,"onSeedsChanged",[b],r()(k.prototype,"onSeedsChanged"),k.prototype),n(k.prototype,"onRotateChanged",[M],r()(k.prototype,"onRotateChanged"),k.prototype),n(k.prototype,"onRadiusChanged",[C],r()(k.prototype,"onRadiusChanged"),k.prototype),x=k))||x)},59:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(12),a=i.n(n),r=i(7),s=i.n(r),o=i(8),u=i.n(o),h=i(14),l=i.n(h),c=i(13),d=i.n(c),_=i(0),f=i(19),p=(i.n(f),i(23)),v=i.n(p);i.d(e,"default",function(){return g});var m,g=i.i(f.Component)(m=function(t){function e(){var t,i,n,r;s()(this,e);for(var o=arguments.length,u=Array(o),h=0;h<o;h++)u[h]=arguments[h];return i=n=l()(this,(t=e.__proto__||a()(e)).call.apply(t,[this].concat(u))),n.datgui=new v.a.GUI,n.countDivs=72,n.transformOrigin=25,n.perspective=20,n.wrapperTransformZ=3,n.wrapperTransformY=-2,n.wrapperTransformX=10,r=i,l()(n,r)}return d()(e,t),u()(e,[{key:"mounted",value:function(){this.datgui.add(this,"transformOrigin",20,50),this.datgui.add(this,"perspective",15,50),this.datgui.add(this,"wrapperTransformZ",-40,20).name("Z translate"),this.datgui.add(this,"wrapperTransformY",-20,20).name("Y translate"),this.datgui.add(this,"wrapperTransformX",-100,100).name("X translate")}},{key:"ringStyle",get:function(){return{"transform-origin":this.transformOrigin+"% "+this.transformOrigin+"%"}}},{key:"sceneStyle",get:function(){return{perspective:this.perspective+"em"}}},{key:"wrapperStyle",get:function(){return{transform:"translateZ("+this.wrapperTransformZ+"em) translateY("+this.wrapperTransformY+"em) translateX("+this.wrapperTransformX+"%)"}}}]),e}(_.default))||m},60:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__=__webpack_require__(7),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__=__webpack_require__(8),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);__webpack_require__.d(__webpack_exports__,"a",function(){return Sunflower});var Sunflower=function(){function Sunflower(t){__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this,Sunflower);var e=document.getElementById(t);this.ctx=e.getContext("2d"),this.seeds=2e3,this.rotateOn=!1,this.radius=2,this.SCALE_FACTOR=4,this.MAX_D=e.width,this.xc=this.MAX_D/2,this.yc=this.MAX_D/2,this.TAU=2*Math.PI,this.PHI=(Math.sqrt(5)+1)/2,window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t,e){window.setTimeout(t,1e3/60)}}()}return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Sunflower,[{key:"animate",value:function(){window.requestAnimFrame(this.animate.bind(this)),360===this.rotate&&(this.rotate=0),this.drawFrame()}},{key:"drawFrame",value:function(){this.ctx.clearRect(0,0,this.MAX_D,this.MAX_D),this.ctx.translate(this.xc,this.yc),this.rotateOn&&this.ctx.rotate(Math.PI/180),this.ctx.translate(-this.xc,-this.yc);for(var t=0;t<this.seeds;t++){var e=t*this.TAU/this.PHI,i=Math.sqrt(t)*this.SCALE_FACTOR,n=this.xc+i*Math.cos(e),a=this.yc-i*Math.sin(e);this.drawSeed(n,a,e)}}},{key:"drawSeed",value:function drawSeed(x,y,theta){this.ctx.beginPath(),this.ctx.lineWidth=0,this.ctx.fillStyle="hsl("+Math.cos(theta)*Math.sin(theta)*1e4+", 100%, 50%)";var radius=eval(this.radius);radius=radius<0?radius*-1:radius,this.ctx.arc(x,y,radius,0,this.TAU,!1),this.ctx.fill(),this.ctx.closePath(),this.ctx.stroke()}}]),Sunflower}()}},[121]);
//# sourceMappingURL=app.18a5714903591700e75e.js.map