webpackJsonp([1,2],{107:function(t,e){},108:function(t,e){},109:function(t,e){},110:function(t,e){},114:function(t,e,n){var i=n(12)(n(57),n(122),null,null);t.exports=i.exports},115:function(t,e,n){n(108);var i=n(12)(n(59),n(120),"data-v-41d3f06e",null);t.exports=i.exports},116:function(t,e,n){var i=n(12)(n(60),n(124),null,null);t.exports=i.exports},117:function(t,e,n){var i=n(12)(n(61),n(123),null,null);t.exports=i.exports},118:function(t,e,n){n(110);var i=n(12)(n(62),n(125),"data-v-f06f484e",null);t.exports=i.exports},119:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper-1"},[n("ul",{attrs:{id:"nav"}},[n("router-link",{attrs:{tag:"li",to:"/color-spiral"}},[n("a",[t._v("1")])]),t._v(" "),n("router-link",{attrs:{tag:"li",to:"/spiral"}},[n("a",[t._v("2")])]),t._v(" "),n("router-link",{attrs:{tag:"li",to:"/canvas"}},[n("a",[t._v("3")])]),t._v(" "),n("router-link",{attrs:{tag:"li",to:"/tunnel"}},[n("a",[t._v("4")])]),t._v(" "),n("router-link",{attrs:{tag:"li",to:"/sunflower"}},[n("a",[t._v("5")])])],1)])},staticRenderFns:[]}},120:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scene"},[n("div",{staticClass:"boo",style:t.booStyle})])},staticRenderFns:[]}},121:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("a",{attrs:{id:"fullscreen"},on:{click:function(e){t.enterFullscreen()}}},[t._v("FULL SCREEN")]),t._v(" "),n("nav-menu"),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},122:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"canvas"},[n("canvas",{attrs:{id:"canvas",width:"600",height:"600"}})])}]}},123:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"canvas"},[n("canvas",{attrs:{id:"canvas",width:"500",height:"500"}})])}]}},124:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticClass:"boo",style:t.booStyle})])},staticRenderFns:[]}},125:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"scene",style:t.sceneStyle,attrs:{id:"tunnel-scene"}},[n("div",{staticClass:"wrapper",style:t.wrapperStyle},[n("ul",{staticClass:"tunnel"},t._l(t.countDivs,function(e){return n("li",{staticClass:"ring",style:t.ringStyle})}))])])])},staticRenderFns:[]}},128:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=n(55),r=n.n(a),s=n(54);i.default.config.productionTip=!1,new i.default({el:"#app",router:s.a,template:"<App/>",components:{App:r.a}})},52:function(t,e,n){n(107);var i=n(12)(n(58),n(119),null,null);t.exports=i.exports},54:function(t,e,n){"use strict";var i=n(0),a=n(126),r=n(116),s=n.n(r),o=n(115),u=n.n(o),l=n(114),h=n.n(l),c=n(118),d=n.n(c),f=n(117),_=n.n(f);i.default.use(a.a),e.a=new a.a({routes:[{path:"/color-spiral",name:"SacralCircle",component:u.a},{path:"/spiral",name:"Spiral",component:s.a},{path:"/canvas",name:"Canvas",component:h.a},{path:"/tunnel",name:"Tunnel",component:d.a},{path:"/sunflower",name:"Sunflower",component:_.a}]})},55:function(t,e,n){n(109);var i=n(12)(n(56),n(121),null,null);t.exports=i.exports},56:function(t,e,n){"use strict";function i(t,e,n,i,a){var r={};return Object.keys(i).forEach(function(t){r[t]=i[t]}),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=n.slice().reverse().reduce(function(n,i){return i(t,e,n)||n},r),a&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(a):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(t,e,r),r=null),r}Object.defineProperty(e,"__esModule",{value:!0});var a=n(38),r=n.n(a),s=n(5),o=n.n(s),u=n(2),l=n.n(u),h=n(6),c=n.n(h),d=n(8),f=n.n(d),_=n(7),p=n.n(_),v=n(0),m=n(13),g=(n.n(m),n(52));n.n(g);n.d(e,"default",function(){return M});var w,y,b;v.default.component("nav-menu",n(52));var M=(w=n.i(m.Watch)("$route"),n.i(m.Component)((b=function(t){function e(){return l()(this,e),f()(this,(e.__proto__||o()(e)).apply(this,arguments))}return p()(e,t),c()(e,[{key:"enterFullscreen",value:function(){var t=document.getElementById("fullscreen").nextSibling.nextSibling.nextSibling.nextSibling;console.log(t),t.webkitRequestFullScreen?t.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):t.mozRequestFullScreen()}},{key:"onRouteChanged",value:function(t,e){var n=document.querySelector(".main.a");n&&n.remove()}}]),e}(v.default),i(b.prototype,"onRouteChanged",[w],r()(b.prototype,"onRouteChanged"),b.prototype),y=b))||y)},57:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),a=n.n(i),r=n(2),s=n.n(r),o=n(6),u=n.n(o),l=n(8),h=n.n(l),c=n(7),d=n.n(c),f=n(0),_=n(13),p=(n.n(_),n(20)),v=n.n(p);n.d(e,"default",function(){return g});var m,g=n.i(_.Component)(m=function(t){function e(){var t,n,i,r;s()(this,e);for(var o=arguments.length,u=Array(o),l=0;l<o;l++)u[l]=arguments[l];return n=i=h()(this,(t=e.__proto__||a()(e)).call.apply(t,[this].concat(u))),i.datgui=new v.a.GUI,i.length=200,i.divisions=50,i.speed=12e4,i.colorSpeed=60,r=n,h()(i,r)}return d()(e,t),u()(e,[{key:"drawFrame",value:function(t){var e={},n=Math.floor(t/this.colorSpeed);if(t-this.target.timestamp>this.speed){this.target.timestamp=0;var i=this.target.origin;this.target.origin=this.target.destination,this.target.destination=i}0===this.target.timestamp&&(this.target.timestamp=t);var a=this.easeInOutSine(t-this.target.timestamp,this.target.origin,this.target.destination-this.target.origin,this.speed);this.ctx.fillRect(0,0,this.width,this.height);for(var r=0;r<this.length;r++){var s={};s.r=this.linearEase(r,1,this.radius-1,this.length),s.t=(360/this.divisions*r+a*r)*Math.PI/180,s.x=s.r*Math.cos(s.t)+this.center.x,s.y=s.r*Math.sin(s.t)+this.center.y,this.ctx.beginPath();var o=this.rainbow[(n+r)%this.rLength];this.ctx.strokeStyle="rgba("+o.r+", "+o.g+", "+o.b+", 0.5)",this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(s.x,s.y),this.ctx.stroke(),e.x=s.x,e.y=s.y}window.requestAnimationFrame(this.drawFrame)}},{key:"linearEase",value:function(t,e,n,i){return n*t/i+e}},{key:"easeInOutSine",value:function(t,e,n,i){return n/2*(1-Math.cos(Math.PI*t/i))+e}},{key:"makeColorGradient",value:function(t){for(var e=2*Math.PI/t*1,n=2*Math.PI/t*1,i=2*Math.PI/t*1,a=0,r=2*Math.PI/3,s=4*Math.PI/3,o=127,u=128,l=[],h=0;h<t;h++){var c=Math.round(Math.sin(e*h+a)*o+u),d=Math.round(Math.sin(n*h+r)*o+u),f=Math.round(Math.sin(i*h+s)*o+u);l.push({r:c,g:d,b:f})}return l}},{key:"mounted",value:function(){this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.ctx.fillStyle="#000",this.ctx.strokeStyle="rgba(255, 255, 255, 0.2)",this.ctx.lineWidth=2,this.width=this.canvas.width,this.height=this.canvas.height,this.diameter=this.width-.1*this.width,this.radius=this.diameter/2,this.center={x:this.width/2,y:this.height/2},this.rainbow=this.makeColorGradient(this.length),this.rLength=this.rainbow.length,this.target={origin:-180,destination:180,timestamp:0},window.requestAnimationFrame(this.drawFrame),this.datgui.add(this,"length",200,500,10),this.datgui.add(this,"divisions",10,50),this.datgui.add(this,"speed",120,112e3,100),this.datgui.add(this,"colorSpeed",5,100,1)}}]),e}(f.default))||m},58:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),a=n.n(i),r=n(2),s=n.n(r),o=n(8),u=n.n(o),l=n(7),h=n.n(l),c=n(0),d=n(13);n.n(d);n.d(e,"default",function(){return _});var f,_=n.i(d.Component)(f=function(t){function e(){return s()(this,e),u()(this,(e.__proto__||a()(e)).apply(this,arguments))}return h()(e,t),e}(c.default))||f},59:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),a=n.n(i),r=n(2),s=n.n(r),o=n(6),u=n.n(o),l=n(8),h=n.n(l),c=n(7),d=n.n(c),f=n(0),_=n(13),p=(n.n(_),n(20)),v=n.n(p);n.d(e,"default",function(){return g});var m,g=n.i(_.Component)(m=function(t){function e(){var t,n,i,r;s()(this,e);for(var o=arguments.length,u=Array(o),l=0;l<o;l++)u[l]=arguments[l];return n=i=h()(this,(t=e.__proto__||a()(e)).call.apply(t,[this].concat(u))),i.datgui=new v.a.GUI,i.currentFrame=0,i.fudge=.87,i.nbrCircles=150,i.deviation=5/8,i.lgRad=13,r=n,h()(i,r)}return d()(e,t),u()(e,[{key:"drawFrame",value:function(){this.currentFrame++,window.requestAnimationFrame(this.drawFrame)}},{key:"mounted",value:function(){window.requestAnimationFrame(this.drawFrame),this.datgui.add(this,"nbrCircles",100,1e3,100),this.datgui.add(this,"fudge",0,1,.1),this.datgui.add(this,"deviation",-1,1,.1),this.datgui.add(this,"lgRad",5,30,1)}},{key:"booStyle",get:function(){for(var t="",e=(Math.sqrt(5)+1)/2+3,n=e*(33+Math.PI),i=Math.pow(this.lgRad,2)*Math.PI,a=i/this.nbrCircles,r=a*(1-this.deviation),s=a*(1+this.deviation),o=0,u=2e-4*this.currentFrame+.1,l=.005*this.currentFrame,h=1;h<=this.nbrCircles;++h){var c=h*n+l,d=h/this.nbrCircles,f=r+d*(s-r),_=Math.sqrt(f/Math.PI);o+=f;var p=Math.sqrt(o/Math.PI),v=Math.cos(c)*p,m=Math.sin(c)*p,g=u*h;g-=Math.floor(g),g*=360,t.length>0&&(t+=", "),t+=v+"em "+m+"em 0 "+_*this.fudge+"em hsl("+g+", 100%, 50%)"}return{"box-shadow":t}}}]),e}(f.default))||m},60:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),a=n.n(i),r=n(2),s=n.n(r),o=n(6),u=n.n(o),l=n(8),h=n.n(l),c=n(7),d=n.n(c),f=n(0),_=n(13),p=(n.n(_),n(20)),v=n.n(p);n.d(e,"default",function(){return g});var m,g=n.i(_.Component)(m=function(t){function e(){var t,n,i,r;s()(this,e);for(var o=arguments.length,u=Array(o),l=0;l<o;l++)u[l]=arguments[l];return n=i=h()(this,(t=e.__proto__||a()(e)).call.apply(t,[this].concat(u))),i.datgui=new v.a.GUI,i.dotsCount=20,i.colorsCount=7,i.colorsRepeat=3,i.cutOff=.25,i.diam=.125,i.scaleFactor=15,i.cutOffFactor=4,i.multiply=2,i.cutOffShift=1,r=n,h()(i,r)}return d()(e,t),u()(e,[{key:"mounted",value:function(){this.datgui.add(this,"dotsCount",10,100),this.datgui.add(this,"colorsCount",1,15),this.datgui.add(this,"colorsRepeat",1,10),this.datgui.add(this,"cutOff",.1,1,.1),this.datgui.add(this,"diam",.1,1,.1),this.datgui.add(this,"scaleFactor",1,50),this.datgui.add(this,"cutOffShift",1,10)}},{key:"booStyle",get:function(){for(var t=this.colorsCount,e=this.colorsRepeat,n=this.dotsCount,i=this.diam,a=this.cutOff,r="",s="",o=this.multiply,u=0,l=t*e;u<=l;u++)for(var h=u*o*Math.PI/l,c=360*u/t,d=0,f=0,_=0,p=0,v=0,m=0,g=1;g<=n;g++){var w=g*o*Math.PI/n,y=this.scaleFactor*(a*n-g)*(g-(this.cutOffShift+a/this.cutOffFactor)*n)/Math.pow((.5+a)*n,o);g<a*n&&(y=0),d+=1.65*(y+1)*i,f=d*Math.sin(w)/5,_=d*Math.cos(h)-f*Math.sin(h),p=d*Math.sin(h)+f*Math.cos(h),r.length>0&&(r+=", "),r+=_+"em "+p+"em 0 "+y*i+"em hsl("+c+", 100%, 50%)",v=d*Math.cos(h+w),m=d*Math.sin(h+w),s.length>0&&(s+=", "),s+=v+"em "+m+"em 0 "+i/o+"em hsl("+c+", 100%, 50%)"}var b=document.createElement("style");return b.type="text/css",b.innerHTML="\n      @keyframes flexibleSpiral {\n        to {\n          box-shadow: "+s+"\n        }\n      }",document.getElementsByTagName("head")[0].appendChild(b),{margin:-i/2+"em",width:i+"em",height:i+"em","box-shadow":r,position:"absolute",top:"50%",left:"50%","border-radius":"50%","background-color":"black",animation:"flexibleSpiral 2s ease-in-out infinite alternate"}}}]),e}(f.default))||m},61:function(t,e,n){"use strict";function i(t,e,n,i,a){var r={};return Object.keys(i).forEach(function(t){r[t]=i[t]}),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=n.slice().reverse().reduce(function(n,i){return i(t,e,n)||n},r),a&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(a):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(t,e,r),r=null),r}Object.defineProperty(e,"__esModule",{value:!0});var a=n(38),r=n.n(a),s=n(5),o=n.n(s),u=n(2),l=n.n(u),h=n(6),c=n.n(h),d=n(8),f=n.n(d),_=n(7),p=n.n(_),v=n(0),m=n(13),g=(n.n(m),n(63)),w=n(20),y=n.n(w);n.d(e,"default",function(){return O});var b,M,C,x,k,O=(b=n.i(m.Watch)("seeds"),M=n.i(m.Watch)("rotateOn"),C=n.i(m.Watch)("radius"),n.i(m.Component)((k=function(t){function e(){var t,n,i,a;l()(this,e);for(var r=arguments.length,s=Array(r),u=0;u<r;u++)s[u]=arguments[u];return n=i=f()(this,(t=e.__proto__||o()(e)).call.apply(t,[this].concat(s))),i.datgui=new y.a.GUI,i.seeds=2e3,i.rotateOn=!1,i.radius=2,a=n,f()(i,a)}return p()(e,t),c()(e,[{key:"mounted",value:function(){this.sunflower=new g.a("canvas"),this.sunflower.animate(),this.datgui.add(this,"seeds",70,3e3,10),this.datgui.add(this,"rotateOn"),this.datgui.add(this,"radius",2,100,1)}},{key:"onSeedsChanged",value:function(){this.sunflower.seeds=this.seeds}},{key:"onRotateChanged",value:function(){this.sunflower.rotateOn=this.rotateOn}},{key:"onRadiusChanged",value:function(){this.sunflower.radius=this.radius}}]),e}(v.default),i(k.prototype,"onSeedsChanged",[b],r()(k.prototype,"onSeedsChanged"),k.prototype),i(k.prototype,"onRotateChanged",[M],r()(k.prototype,"onRotateChanged"),k.prototype),i(k.prototype,"onRadiusChanged",[C],r()(k.prototype,"onRadiusChanged"),k.prototype),x=k))||x)},62:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),a=n.n(i),r=n(2),s=n.n(r),o=n(6),u=n.n(o),l=n(8),h=n.n(l),c=n(7),d=n.n(c),f=n(0),_=n(13),p=(n.n(_),n(20)),v=n.n(p);n.d(e,"default",function(){return g});var m,g=n.i(_.Component)(m=function(t){function e(){var t,n,i,r;s()(this,e);for(var o=arguments.length,u=Array(o),l=0;l<o;l++)u[l]=arguments[l];return n=i=h()(this,(t=e.__proto__||a()(e)).call.apply(t,[this].concat(u))),i.datgui=new v.a.GUI,i.countDivs=72,i.transformOrigin=25,i.perspective=20,i.wrapperTransformZ=3,i.wrapperTransformY=-2,i.wrapperTransformX=10,r=n,h()(i,r)}return d()(e,t),u()(e,[{key:"mounted",value:function(){this.datgui.add(this,"transformOrigin",20,50),this.datgui.add(this,"perspective",15,50),this.datgui.add(this,"wrapperTransformZ",-40,20).name("Z translate"),this.datgui.add(this,"wrapperTransformY",-20,20).name("Y translate"),this.datgui.add(this,"wrapperTransformX",-100,100).name("X translate")}},{key:"ringStyle",get:function(){return{"transform-origin":this.transformOrigin+"% "+this.transformOrigin+"%"}}},{key:"sceneStyle",get:function(){return{perspective:this.perspective+"em"}}},{key:"wrapperStyle",get:function(){return{transform:"translateZ("+this.wrapperTransformZ+"em) translateY("+this.wrapperTransformY+"em) translateX("+this.wrapperTransformX+"%)"}}}]),e}(f.default))||m},63:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__=__webpack_require__(2),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__=__webpack_require__(6),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);__webpack_require__.d(__webpack_exports__,"a",function(){return Sunflower});var Sunflower=function(){function Sunflower(t){__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this,Sunflower);var e=document.getElementById(t);this.ctx=e.getContext("2d"),this.seeds=2e3,this.rotateOn=!1,this.radius=2,this.SCALE_FACTOR=4,this.MAX_D=e.width,this.xc=this.MAX_D/2,this.yc=this.MAX_D/2,this.TAU=2*Math.PI,this.PHI=(Math.sqrt(5)+1)/2,window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t,e){window.setTimeout(t,1e3/60)}}()}return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Sunflower,[{key:"animate",value:function(){window.requestAnimFrame(this.animate.bind(this)),360===this.rotate&&(this.rotate=0),this.drawFrame()}},{key:"drawFrame",value:function(){this.ctx.clearRect(0,0,this.MAX_D,this.MAX_D),this.ctx.translate(this.xc,this.yc),this.rotateOn&&this.ctx.rotate(Math.PI/180),this.ctx.translate(-this.xc,-this.yc);for(var t=0;t<this.seeds;t++){var e=t*this.TAU/this.PHI,n=Math.sqrt(t)*this.SCALE_FACTOR,i=this.xc+n*Math.cos(e),a=this.yc-n*Math.sin(e);this.drawSeed(i,a,e)}}},{key:"drawSeed",value:function drawSeed(x,y,theta){this.ctx.beginPath(),this.ctx.lineWidth=0,this.ctx.fillStyle="hsl("+Math.cos(theta)*Math.sin(theta)*1e4+", 100%, 50%)";var radius=eval(this.radius);radius=radius<0?radius*-1:radius,this.ctx.arc(x,y,radius,0,this.TAU,!1),this.ctx.fill(),this.ctx.closePath(),this.ctx.stroke()}}]),Sunflower}()}},[128]);
//# sourceMappingURL=app.a668ef56c91b8f565a6f.js.map