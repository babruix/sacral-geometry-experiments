webpackJsonp([1,2],[,function(t,e,a){"use strict";var n=a(11),r=a.n(n);e.a=function(){r()({targets:"canvas",translateX:[{value:250,duration:1e3,delay:500,elasticity:0},{value:0,duration:1e3,delay:500,elasticity:0}],translateY:[{value:-40,duration:500,elasticity:100},{value:40,duration:500,delay:1e3,elasticity:100},{value:0,duration:500,delay:1e3,elasticity:100}],scaleX:[{value:4,duration:100,delay:500,easing:"easeOutExpo"},{value:1,duration:900,elasticity:300},{value:4,duration:100,delay:500,easing:"easeOutExpo"},{value:1,duration:900,elasticity:300}],scaleY:[{value:[1.75,1],duration:500},{value:2,duration:50,delay:1e3,easing:"easeOutExpo"},{value:1,duration:450},{value:1.75,duration:50,delay:1e3,easing:"easeOutExpo"},{value:1,duration:450}]})}},,,,,,,,function(t,e,a){"use strict";var n=a(4),r=a(46),i=a(39),s=a.n(i),o=a(37),u=a.n(o),c=a(38),l=a.n(c),d=a(40),_=a.n(d);n.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"SacralCircle",component:s.a},{path:"/canvas",name:"Canvas",component:u.a},{path:"/canvas2",name:"Canvas2",component:l.a},{path:"/sunflower",name:"Sunflower",component:_.a}]})},function(t,e,a){a(34);var n=a(0)(a(12),a(43),null,null);t.exports=n.exports},,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1);e.default={name:"app",mounted:function(){a.i(n.a)()}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r,i,s,o,u,c,l,d,_,h,m,v,f,p=a(1);e.default={name:"Canvas1",data:function(){return{currentFrame:0}},methods:{drawFrame:function(t){var e={},a=Math.floor(t/i);if(t-s.timestamp>o){s.timestamp=0;var n=s.origin;s.origin=s.destination,s.destination=n}0===s.timestamp&&(s.timestamp=t);var l=this.easeInOutSine(t-s.timestamp,s.origin,s.destination-s.origin,o);r.fillRect(0,0,u,c);for(var p=0;p<h;p++){var w={};w.r=this.linearEase(p,1,d-1,h),w.t=(360/m*p+l*p)*Math.PI/180,w.x=w.r*Math.cos(w.t)+_.x,w.y=w.r*Math.sin(w.t)+_.y,r.beginPath();var x=v[(a+p)%f];r.strokeStyle="rgba("+x.r+", "+x.g+", "+x.b+", 0.5)",r.moveTo(e.x,e.y),r.lineTo(w.x,w.y),r.stroke(),e.x=w.x,e.y=w.y}window.requestAnimationFrame(this.drawFrame)},linearEase:function(t,e,a,n){return a*t/n+e},easeInOutSine:function(t,e,a,n){return a/2*(1-Math.cos(Math.PI*t/n))+e},makeColorGradient:function(t){for(var e=2*Math.PI/t*1,a=2*Math.PI/t*1,n=2*Math.PI/t*1,r=0,i=2*Math.PI/3,s=4*Math.PI/3,o=127,u=128,c=[],l=0;l<t;l++){var d=Math.round(Math.sin(e*l+r)*o+u),_=Math.round(Math.sin(a*l+i)*o+u),h=Math.round(Math.sin(n*l+s)*o+u);c.push({r:d,g:_,b:h})}return c}},mounted:function(){n=document.getElementById("canvas"),r=n.getContext("2d"),r.fillStyle="#000",r.strokeStyle="rgba(255, 255, 255, 0.2)",r.lineWidth=2,u=n.width,c=n.height,l=u-.1*u,d=l/2,_={x:u/2,y:c/2},h=100,m=6,o=12e4,i=60,v=this.makeColorGradient(h),f=v.length,s={origin:-180,destination:180,timestamp:0},window.requestAnimationFrame(this.drawFrame),a.i(p.a)()}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r,i,s,o,u,c,l,d,_,h,m,v=a(1);e.default={name:"Canvas2",data:function(){return{currentFrame:0}},methods:{drawFrame:function(t){var e={};Math.floor(t/i);if(t-s.timestamp>o){s.timestamp=0;var a=s.origin;s.origin=s.destination,s.destination=a}0===s.timestamp&&(s.timestamp=t);var n=t/i;r.fillRect(0,0,u,c);for(var l=this.hexToRgb(t),d=0;d<h;d++){var v={};v.r=200,v.t=(360/m*d+n*d)*Math.PI/90,v.x=v.r*Math.cos(v.t)+_.x,v.y=v.r*Math.sin(v.t)+_.y,r.beginPath(),r.strokeStyle="rgba("+l.r+", "+l.g+", "+l.b+", 0.5)",r.moveTo(e.x,e.y),r.lineTo(v.x,v.y),r.stroke(),e.x=v.x,e.y=v.y}window.requestAnimationFrame(this.drawFrame)},hexToRgb:function(t){var e=parseInt(t,16),a=e>>16&255,n=e>>8&255,r=255&e;return{r:a,g:n,b:r}}},mounted:function(){n=document.getElementById("canvas"),r=n.getContext("2d"),r.fillStyle="#000",r.strokeStyle="rgba(255, 255, 255, 0.2)",r.lineWidth=2,u=n.width,c=n.height,l=u-.1*u,d=l/2,_={x:u/2,y:c/2},h=100,m=6,o=12e4,i=60,s={origin:-180,destination:180,timestamp:0},window.requestAnimationFrame(this.drawFrame),a.i(v.a)()}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{currentFrame:0}},methods:{},computed:{booStyle:function(){for(var t=30,e=30,a=this.currentFrame,n="",r=150,i=5/8,s=(Math.sqrt(5)+1)/2+3,o=s*(33+Math.PI),u=.45*t,c=Math.pow(u,2)*Math.PI,l=c/r,d=l*(1-i),_=l*(1+i),h=0,m=.87,v=t/2,f=e/2,p=2e-4*a+.1,w=.01*a,x=1;x<=r;++x){var M=x*o+w,y=x/r,b=d+y*(_-d),g=Math.sqrt(b/Math.PI);h+=b;var P=Math.sqrt(h/Math.PI),E=v+Math.cos(M)*P,O=f+Math.sin(M)*P,C=p*x;C-=Math.floor(C),C*=360,n.length>0&&(n+=", "),n+=E+"em "+O+"em 0 "+g*m+"em hsl("+C+", 100%, 50%)";var F=this;setInterval(function(){F.currentFrame++,F.currentFrame>1e3&&(F.currentFrame=0)},60)}return{margin:-t/2+"em",width:"0.2em",height:"0.2em","box-shadow":n,position:"fixed",top:"50%",left:"50%","border-radius":"50%",animation:"ani 2s ease-in-out infinite alternate"}}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(17),r=a(1);e.default={name:"Canvas3",data:function(){return{seeds:2e3,rotateOn:!1,radius:2}},methods:{setRadiusExpression:function(t){this.radius=t||"Math.cos(theta) * Math.sin(theta) * this.PHI * 25"}},watch:{seeds:function(){this.sunflower.seeds=this.seeds},rotateOn:function(){this.sunflower.rotateOn=this.rotateOn},radius:function(){this.sunflower.radius=this.radius}},mounted:function(){this.sunflower=new n.a("canvas"),this.sunflower.animate(),a.i(r.a)()}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__=__webpack_require__(19),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__=__webpack_require__(20),__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__),Sunflower=function(){function Sunflower(t){__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this,Sunflower);var e=document.getElementById(t);this.ctx=e.getContext("2d"),this.seeds=2e3,this.rotateOn=!1,this.radius=2,this.SCALE_FACTOR=4,this.MAX_D=e.width,this.xc=this.MAX_D/2,this.yc=this.MAX_D/2,this.TAU=2*Math.PI,this.PHI=(Math.sqrt(5)+1)/2,window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t,e){window.setTimeout(t,1e3/60)}}()}return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Sunflower,[{key:"animate",value:function(){window.requestAnimFrame(this.animate.bind(this)),360==this.rotate&&(this.rotate=0),this.drawFrame()}},{key:"drawFrame",value:function(){this.ctx.clearRect(0,0,this.MAX_D,this.MAX_D),this.ctx.translate(this.xc,this.yc),this.rotateOn&&this.ctx.rotate(Math.PI/180),this.ctx.translate(-this.xc,-this.yc);for(var t=0;t<this.seeds;t++){var e=t*this.TAU/this.PHI,a=Math.sqrt(t)*this.SCALE_FACTOR,n=this.xc+a*Math.cos(e),r=this.yc-a*Math.sin(e);this.drawSeed(n,r,e)}}},{key:"drawSeed",value:function drawSeed(x,y,theta){this.ctx.beginPath(),this.ctx.lineWidth=0,this.ctx.fillStyle="hsl("+Math.cos(theta)*Math.sin(theta)*1e4+", 100%, 50%)";var radius=eval(this.radius);radius=radius<0?radius*-1:radius,this.ctx.arc(x,y,radius,0,this.TAU,!1),this.ctx.fill(),this.ctx.closePath(),this.ctx.stroke()}}]),Sunflower}();__webpack_exports__.a=Sunflower},,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){a(35);var n=a(0)(a(13),a(44),"data-v-5a5048c9",null);t.exports=n.exports},function(t,e,a){a(32);var n=a(0)(a(14),a(41),"data-v-205f0c8e",null);t.exports=n.exports},function(t,e,a){a(33);var n=a(0)(a(15),a(42),"data-v-41d3f06e",null);t.exports=n.exports},function(t,e,a){a(36);var n=a(0)(a(16),a(45),"data-v-6b49e007",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"canvas"},[a("canvas",{attrs:{id:"canvas",width:"600",height:"600"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("div",{attrs:{id:"rangeSlider"}},[t._v("\n    "+t._s(t.currentFrame)+"\n    "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentFrame,expression:"currentFrame"}],staticStyle:{width:"500px"},attrs:{type:"range",min:"1",max:"1000",step:"1"},domProps:{value:t.currentFrame},on:{__r:function(e){t.currentFrame=e.target.value}}})]),t._v(" "),a("div",{staticClass:"boo",style:t.booStyle})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("a",{attrs:{href:"#/"}},[t._v("Box shadow 1")]),t._v(" "),a("a",{attrs:{href:"#/canvas"}},[t._v("Canvas 1")]),t._v(" "),a("a",{attrs:{href:"#/canvas2"}},[t._v("Canvas 2")]),t._v(" "),a("a",{attrs:{href:"#/sunflower"}},[t._v("Sunflower")]),t._v(" "),a("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"canvas"},[a("canvas",{attrs:{id:"canvas",width:"600",height:"600"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"canvas"},[a("canvas",{attrs:{id:"canvas",width:"600",height:"600"}}),t._v(" "),a("div",[t._v("\n    Size: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.seeds,expression:"seeds"}],attrs:{id:"slider",min:"70",type:"range",max:"2000",value:"2000"},domProps:{value:t.seeds},on:{__r:function(e){t.seeds=e.target.value}}}),t._v("\n    Rotate: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.rotateOn,expression:"rotateOn"}],attrs:{type:"checkbox",width:"200px"},domProps:{checked:Array.isArray(t.rotateOn)?t._i(t.rotateOn,null)>-1:t.rotateOn},on:{__c:function(e){var a=t.rotateOn,n=e.target,r=!!n.checked;if(Array.isArray(a)){var i=null,s=t._i(a,i);r?s<0&&(t.rotateOn=a.concat(i)):s>-1&&(t.rotateOn=a.slice(0,s).concat(a.slice(s+1)))}else t.rotateOn=r}}}),t._v("\n    Radius: "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.radius,expression:"radius"}],attrs:{type:"text"},domProps:{value:t.radius},on:{input:function(e){e.target.composing||(t.radius=e.target.value)}}}),t._v("\n    you can use "),a("a",{attrs:{href:"#/canvas3"},on:{click:function(e){e.preventDefault(),t.setRadiusExpression()}}},[t._v("expressions")]),t._v("\n    or  "),a("a",{attrs:{href:"#/canvas3"},on:{click:function(e){e.preventDefault(),t.setRadiusExpression(3)}}},[t._v("number")])])])},staticRenderFns:[]}},,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(4),r=a(10),i=a.n(r),s=a(9);n.a.config.productionTip=!1,new n.a({el:"#app",router:s.a,template:"<App/>",components:{App:i.a}})}],[49]);
//# sourceMappingURL=app.5e848917d411eb78059b.js.map