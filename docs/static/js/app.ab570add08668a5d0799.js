webpackJsonp([1,2],[,,,,,,,,function(t,e,a){"use strict";var n=a(3),r=a(44),i=a(37),s=a.n(i),o=a(35),u=a.n(o),c=a(36),l=a.n(c),_=a(38),h=a.n(_);n.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"SacralCircle",component:s.a},{path:"/canvas",name:"Canvas",component:u.a},{path:"/canvas2",name:"Canvas2",component:l.a},{path:"/sunflower",name:"Sunflower",component:h.a}]})},function(t,e,a){a(32);var n=a(0)(a(10),a(41),null,null);t.exports=n.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r,i,s,o,u,c,l,_,h,d,m,v,f;e.default={name:"Canvas1",data:function(){return{currentFrame:0}},methods:{drawFrame:function(t){var e={},a=Math.floor(t/i);if(t-s.timestamp>o){s.timestamp=0;var n=s.origin;s.origin=s.destination,s.destination=n}0===s.timestamp&&(s.timestamp=t);var l=this.easeInOutSine(t-s.timestamp,s.origin,s.destination-s.origin,o);r.fillRect(0,0,u,c);for(var p=0;p<d;p++){var w={};w.r=this.linearEase(p,1,_-1,d),w.t=(360/m*p+l*p)*Math.PI/180,w.x=w.r*Math.cos(w.t)+h.x,w.y=w.r*Math.sin(w.t)+h.y,r.beginPath();var x=v[(a+p)%f];r.strokeStyle="rgba("+x.r+", "+x.g+", "+x.b+", 0.5)",r.moveTo(e.x,e.y),r.lineTo(w.x,w.y),r.stroke(),e.x=w.x,e.y=w.y}window.requestAnimationFrame(this.drawFrame)},linearEase:function(t,e,a,n){return a*t/n+e},easeInOutSine:function(t,e,a,n){return a/2*(1-Math.cos(Math.PI*t/n))+e},makeColorGradient:function(t){for(var e=2*Math.PI/t*1,a=2*Math.PI/t*1,n=2*Math.PI/t*1,r=0,i=2*Math.PI/3,s=4*Math.PI/3,o=127,u=128,c=[],l=0;l<t;l++){var _=Math.round(Math.sin(e*l+r)*o+u),h=Math.round(Math.sin(a*l+i)*o+u),d=Math.round(Math.sin(n*l+s)*o+u);c.push({r:_,g:h,b:d})}return c}},mounted:function(){n=document.getElementById("canvas"),r=n.getContext("2d"),r.fillStyle="#000",r.strokeStyle="rgba(255, 255, 255, 0.2)",r.lineWidth=2,u=n.width,c=n.height,l=u-.1*u,_=l/2,h={x:u/2,y:c/2},d=100,m=6,o=12e4,i=60,v=this.makeColorGradient(d),f=v.length,s={origin:-180,destination:180,timestamp:0},window.requestAnimationFrame(this.drawFrame)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r,i,s,o,u,c,l,_,h,d,m;e.default={name:"Canvas2",data:function(){return{currentFrame:0}},methods:{drawFrame:function(t){var e={};Math.floor(t/i);if(t-s.timestamp>o){s.timestamp=0;var a=s.origin;s.origin=s.destination,s.destination=a}0===s.timestamp&&(s.timestamp=t);var n=t/i;r.fillRect(0,0,u,c);for(var l=0;l<d;l++){var _={};_.r=100,_.t=(360/m*l+n*l)*Math.PI/180,_.x=_.r*Math.cos(_.t)+h.x,_.y=_.r*Math.sin(_.t)+h.y,r.beginPath();var v={r:10,g:100,b:50};r.strokeStyle="rgba("+v.r+", "+v.g+", "+v.b+", 0.5)",r.moveTo(e.x,e.y),r.lineTo(_.x,_.y),r.stroke(),e.x=_.x,e.y=_.y}window.requestAnimationFrame(this.drawFrame)}},mounted:function(){n=document.getElementById("canvas"),r=n.getContext("2d"),r.fillStyle="#000",r.strokeStyle="rgba(255, 255, 255, 0.2)",r.lineWidth=2,u=n.width,c=n.height,l=u-.1*u,_=l/2,h={x:u/2,y:c/2},d=100,m=6,o=12e4,i=60,s={origin:-180,destination:180,timestamp:0},window.requestAnimationFrame(this.drawFrame)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{currentFrame:0}},methods:{},computed:{booStyle:function(){for(var t=30,e=30,a=this.currentFrame,n="",r=150,i=5/8,s=(Math.sqrt(5)+1)/2+3,o=s*(33+Math.PI),u=.45*t,c=Math.pow(u,2)*Math.PI,l=c/r,_=l*(1-i),h=l*(1+i),d=0,m=.87,v=t/2,f=e/2,p=2e-4*a+.1,w=.01*a,x=1;x<=r;++x){var M=x*o+w,y=x/r,b=_+y*(h-_),P=Math.sqrt(b/Math.PI);d+=b;var g=Math.sqrt(d/Math.PI),C=v+Math.cos(M)*g,E=f+Math.sin(M)*g,O=p*x;O-=Math.floor(O),O*=360,n.length>0&&(n+=", "),n+=C+"em "+E+"em 0 "+P*m+"em hsl("+O+", 100%, 50%)";var F=this;setInterval(function(){F.currentFrame++,F.currentFrame>1e3&&(F.currentFrame=0)},60)}return{margin:-t/2+"em",width:"0.2em",height:"0.2em","box-shadow":n,position:"fixed",top:"50%",left:"50%","border-radius":"50%",animation:"ani 2s ease-in-out infinite alternate"}}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(15);e.default={name:"Canvas3",data:function(){return{seeds:2e3,rotateOn:!1,radius:2}},methods:{setRadiusExpression:function(t){this.radius=t||"Math.cos(theta) * Math.sin(theta) * this.PHI * 25"}},watch:{seeds:function(){this.sunflower.seeds=this.seeds},rotateOn:function(){this.sunflower.rotateOn=this.rotateOn},radius:function(){this.sunflower.radius=this.radius}},mounted:function(){this.sunflower=new n.a("canvas"),this.sunflower.animate()}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__=__webpack_require__(17),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__=__webpack_require__(18),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__),Sunflower=function(){function Sunflower(t){__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this,Sunflower);var e=document.getElementById(t);this.ctx=e.getContext("2d"),this.seeds=2e3,this.rotateOn=!1,this.radius=2,this.SCALE_FACTOR=4,this.MAX_D=e.width,this.xc=this.MAX_D/2,this.yc=this.MAX_D/2,this.TAU=2*Math.PI,this.PHI=(Math.sqrt(5)+1)/2,window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t,e){window.setTimeout(t,1e3/60)}}()}return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Sunflower,[{key:"animate",value:function(){window.requestAnimFrame(this.animate.bind(this)),360==this.rotate&&(this.rotate=0),this.drawFrame()}},{key:"drawFrame",value:function(){this.ctx.clearRect(0,0,this.MAX_D,this.MAX_D),this.ctx.translate(this.xc,this.yc),this.rotateOn&&this.ctx.rotate(Math.PI/180),this.ctx.translate(-this.xc,-this.yc);for(var t=0;t<this.seeds;t++){var e=t*this.TAU/this.PHI,a=Math.sqrt(t)*this.SCALE_FACTOR,n=this.xc+a*Math.cos(e),r=this.yc-a*Math.sin(e);this.drawSeed(n,r,e)}}},{key:"drawSeed",value:function drawSeed(x,y,theta){this.ctx.beginPath(),this.ctx.lineWidth=0,this.ctx.fillStyle="hsl("+Math.cos(theta)*Math.sin(theta)*1e4+", 100%, 50%)";var radius=eval(this.radius);radius=radius<0?radius*-1:radius,this.ctx.arc(x,y,radius,0,this.TAU,!1),this.ctx.fill(),this.ctx.closePath(),this.ctx.stroke()}}]),Sunflower}();__webpack_exports__.a=Sunflower},,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){a(33);var n=a(0)(a(11),a(42),"data-v-5a5048c9",null);t.exports=n.exports},function(t,e,a){a(30);var n=a(0)(a(12),a(39),"data-v-205f0c8e",null);t.exports=n.exports},function(t,e,a){a(31);var n=a(0)(a(13),a(40),"data-v-41d3f06e",null);t.exports=n.exports},function(t,e,a){a(34);var n=a(0)(a(14),a(43),"data-v-6b49e007",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"canvas"},[a("canvas",{attrs:{id:"canvas",width:"600",height:"600"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("div",{attrs:{id:"rangeSlider"}},[t._v("\n    "+t._s(t.currentFrame)+"\n    "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentFrame,expression:"currentFrame"}],staticStyle:{width:"500px"},attrs:{type:"range",min:"1",max:"1000",step:"1"},domProps:{value:t.currentFrame},on:{__r:function(e){t.currentFrame=e.target.value}}})]),t._v(" "),a("div",{staticClass:"boo",style:t.booStyle})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("a",{attrs:{href:"/"}},[t._v("Box shadow 1")]),t._v(" "),a("a",{attrs:{href:"#/canvas"}},[t._v("Canvas 1")]),t._v(" "),a("a",{attrs:{href:"#/canvas2"}},[t._v("Canvas 2")]),t._v(" "),a("a",{attrs:{href:"#/sunflower"}},[t._v("Sunflower")]),t._v(" "),a("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"canvas"},[a("canvas",{attrs:{id:"canvas",width:"600",height:"600"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"canvas"},[a("canvas",{attrs:{id:"canvas",width:"600",height:"600"}}),t._v(" "),a("div",[t._v("\n    Size: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.seeds,expression:"seeds"}],attrs:{id:"slider",min:"70",type:"range",max:"2000",value:"2000"},domProps:{value:t.seeds},on:{__r:function(e){t.seeds=e.target.value}}}),t._v("\n    Rotate: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.rotateOn,expression:"rotateOn"}],attrs:{type:"checkbox",width:"200px"},domProps:{checked:Array.isArray(t.rotateOn)?t._i(t.rotateOn,null)>-1:t.rotateOn},on:{__c:function(e){var a=t.rotateOn,n=e.target,r=!!n.checked;if(Array.isArray(a)){var i=null,s=t._i(a,i);r?s<0&&(t.rotateOn=a.concat(i)):s>-1&&(t.rotateOn=a.slice(0,s).concat(a.slice(s+1)))}else t.rotateOn=r}}}),t._v("\n    Radius: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.radius,expression:"radius"}],attrs:{type:"text"},domProps:{value:t.radius},on:{input:function(e){e.target.composing||(t.radius=e.target.value)}}}),t._v("\n    you can use "),a("a",{attrs:{href:"#/canvas3"},on:{click:function(e){e.preventDefault(),t.setRadiusExpression()}}},[t._v("expressions")]),t._v("\n    or  "),a("a",{attrs:{href:"#/canvas3"},on:{click:function(e){e.preventDefault(),t.setRadiusExpression(3)}}},[t._v("number")])])])},staticRenderFns:[]}},,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3),r=a(9),i=a.n(r),s=a(8);n.a.config.productionTip=!1,new n.a({el:"#app",router:s.a,template:"<App/>",components:{App:i.a}})}],[47]);
//# sourceMappingURL=app.ab570add08668a5d0799.js.map