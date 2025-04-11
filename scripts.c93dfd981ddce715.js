const identity={name:"FLARE 2025",image:"Profile-pic"},data={NavBar:{...identity,links:[{name:"Home",id:"home"},{name:"Task 1",id:"task1"},{name:"Task 2",id:"task2"},{name:"Task 3",id:"task3"},{name:"Task 4",id:"task4"},{name:"Task 5",id:"task5"},{name:"Task 6",id:"task6"}]},Home:{name:"FLARE 2025",introduction:"Fast, Low-resource, Accurate, Robust, and Effectual Medical Image Analysis",typedElement:["MICCAI FLARE 2025"]},Task1:{name:"TASK 1",title:"Pan-cancer Segmentation in CT Scans",image:"task1.gif",keywords:[{animationClass:"Right left",textAlignment:"right",text:"10,000+ CT scans"},{animationClass:"Left right",textAlignment:"left",text:"Pan-cancer Segmentation"},{animationClass:"Right left",textAlignment:"right",text:"20+ cancer types"}],link:"https://www.codabench.org/competitions/7149/"},Task2:{name:"TASK 2",title:"Abdominal CT Organ Segmentation on Laptop",image:"task2.gif",keywords:[{animationClass:"Right left",textAlignment:"right",text:"2600+ CT scans"},{animationClass:"Left right",textAlignment:"left",text:"13 organs"},{animationClass:"Right left",textAlignment:"right",text:"CPU-based inference"}],link:"https://www.codabench.org/competitions/2320/"},Task3:{name:"TASK 3",title:"Unsupervised Domain Adaptation for Abdominal Organ Segmentation in MRI and PET Scans",image:"task3.gif",keywords:[{animationClass:"Right left",textAlignment:"right",text:"2300 labeled CT scans"},{animationClass:"Left right",textAlignment:"left",text:"1000 + unlabeled MRI scans"},{animationClass:"Right left",textAlignment:"right",text:"1000 + unlabeled PET scans"}],link:"https://www.codabench.org/competitions/2296/"},Task4:{name:"TASK 4",title:"Foundation Model for 3D CT and MRI scans",image:"task4.png",keywords:[{animationClass:"Right left",textAlignment:"right",text:"10,000+ CT scans"},{animationClass:"Left right",textAlignment:"left",text:"10,000+ MRI scans"},{animationClass:"Right left",textAlignment:"right",text:"Diverse downstream tasks"}],link:"https://www.codabench.org/competitions/7150/"},Task5:{name:"TASK 5",title:"Multimodal Model for Medical Image Parsing",image:"task5.png",keywords:[{animationClass:"Right left",textAlignment:"right",text:"Diverse tasks"},{animationClass:"Left right",textAlignment:"left",text:"Modality integration"},{animationClass:"Right left",textAlignment:"right",text:"Efficiency and scalability"}],link:"https://www.codabench.org/competitions/2320/"},Task6:{name:"TASK 6",title:"Agentic System for Medical Image Analysis",image:"task6.png",keywords:[{animationClass:"Right left",textAlignment:"right",text:"Efficient LLMs"},{animationClass:"Left right",textAlignment:"left",text:"Diverse imaging modalities"},{animationClass:"Right left",textAlignment:"right",text:"Unified tool set"}],link:"https://www.codabench.org/competitions/7152/"},Social:[[{link:"https://github.com/JunMa11",class:"fab fa-github",name:"GitHub",placement:"left"},{link:"https://scholar.google.com.hk/citations?hl=en&user=bW1UV4IAAAAJ&view_op=list_works&sortby=pubdate",class:"fab fa-google-scholar",name:"Google Scholar",placement:"top"},{link:"https://x.com/JunMa_11",class:"fab fa-twitter",name:"Twitter",placement:"right"},{link:"https://www.linkedin.com/in/jun-ma-867b34224/",class:"fab fa-linkedin-in",name:"LinkedIn",placement:"top"}]],Footer:{citation:{template:"Jayant Goel's Portfolio Template",link:"https://github.com/jayantgoel001/jayantgoel001.github.io",animationClass:"flipInX",icon:"fas fa-heart"}}};!function(h,l){"object"==typeof exports&&"object"==typeof module?module.exports=l():"function"==typeof define&&define.amd?define([],l):"object"==typeof exports?exports.Typed=l():h.Typed=l()}(this,function(){return function(h){function l(i){if(t[i])return t[i].exports;var s=t[i]={exports:{},id:i,loaded:!1};return h[i].call(s.exports,s,s.exports,l),s.loaded=!0,s.exports}var t={};return l.m=h,l.c=t,l.p="",l(0)}([function(h,l,t){"use strict";var i=function(){function o(n,a){for(var e=0;e<a.length;e++){var u=a[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(n,u.key,u)}}return function(n,a,e){return a&&o(n.prototype,a),e&&o(n,e),n}}(),s=t(1),r=t(3),c=function(){function o(n,a){(function(e,u){if(!(e instanceof u))throw new TypeError("Cannot call a class as a function")})(this,o),s.initializer.load(this,a,n),this.begin()}return i(o,[{key:"begin",value:function(){var n=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){n.currentElContent&&0!==n.currentElContent.length?n.backspace(n.currentElContent,n.currentElContent.length):n.typewrite(n.strings[n.sequence[n.arrayPos]],n.strPos)},this.startDelay)}},{key:"typewrite",value:function(n,a){var e=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var u=this.humanizer(this.typeSpeed),p=1;return!0===this.pause.status?void this.setPauseStatus(n,a,!0):void(this.timeout=setTimeout(function(){a=r.htmlParser.typeHtmlChars(n,a,e);var d=0,m=n.substr(a);if("^"===m.charAt(0)&&/^\^\d+/.test(m)){var g=1;g+=(m=/\d+/.exec(m)[0]).length,d=parseInt(m),e.temporaryPause=!0,e.options.onTypingPaused(e.arrayPos,e),n=n.substring(0,a)+n.substring(a+g),e.toggleBlinking(!0)}if("`"===m.charAt(0)){for(;"`"!==n.substr(a+p).charAt(0)&&!(a+ ++p>n.length););var f=n.substring(0,a),v=n.substring(f.length+1,a+p),y=n.substring(a+p+1);n=f+v+y,p--}e.timeout=setTimeout(function(){e.toggleBlinking(!1),a>=n.length?e.doneTyping(n,a):e.keepTyping(n,a,p),e.temporaryPause&&(e.temporaryPause=!1,e.options.onTypingResumed(e.arrayPos,e))},d)},u))}},{key:"keepTyping",value:function(n,a,e){0===a&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var u=n.substr(0,a+=e);this.replaceText(u),this.typewrite(n,a)}},{key:"doneTyping",value:function(n,a){var e=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){e.backspace(n,a)},this.backDelay))}},{key:"backspace",value:function(n,a){var e=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var u=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){a=r.htmlParser.backSpaceHtmlChars(n,a,e);var p=n.substr(0,a);if(e.replaceText(p),e.smartBackspace){var d=e.strings[e.arrayPos+1];e.stopNum=d&&p===d.substr(0,a)?a:0}a>e.stopNum?(a--,e.backspace(n,a)):a<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.options.onLastStringBackspaced(),e.shuffleStringsIfNeeded(),e.begin()):e.typewrite(e.strings[e.sequence[e.arrayPos]],a))},u)}else this.setPauseStatus(n,a,!1)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"toggleBlinking",value:function(n){this.cursor&&(this.pause.status||this.cursorBlinking!==n&&(this.cursorBlinking=n,n?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(n){return Math.round(Math.random()*n/2)+n}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"replaceText",value:function(n){this.attr?this.el.setAttribute(this.attr,n):this.isInput?this.el.value=n:"html"===this.contentType?this.el.innerHTML=n:this.el.textContent=n}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),o}();l.default=c,h.exports=l.default},function(h,l,t){"use strict";var i,s=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var u=arguments[e];for(var p in u)Object.prototype.hasOwnProperty.call(u,p)&&(a[p]=u[p])}return a},r=function(){function a(e,u){for(var p=0;p<u.length;p++){var d=u[p];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(e,d.key,d)}}return function(e,u,p){return u&&a(e.prototype,u),p&&a(e,p),e}}(),c=(i=t(2))&&i.__esModule?i:{default:i},o=function(){function a(){!function(e,u){if(!(e instanceof u))throw new TypeError("Cannot call a class as a function")}(this,a)}return r(a,[{key:"load",value:function(e,u,p){if(e.el="string"==typeof p?document.querySelector(p):p,e.options=s({},c.default,u),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map(function(v){return v.trim()}),e.stringsElement="string"==typeof e.options.stringsElement?document.querySelector(e.options.stringsElement):e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.display="none";var d=Array.prototype.slice.apply(e.stringsElement.children),m=d.length;if(m)for(var g=0;g<m;g+=1)e.strings.push(d[g].innerHTML.trim())}for(var g in e.strPos=0,e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.sequence=[],e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.strings)e.sequence[g]=g;e.currentElContent=this.getCurrentElContent(e),e.autoInsertCss=e.options.autoInsertCss,this.appendAnimationCss(e)}},{key:"getCurrentElContent",value:function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:"html"===e.contentType?e.el.innerHTML:e.el.textContent}},{key:"appendAnimationCss",value:function(e){var u="data-typed-js-css";if(e.autoInsertCss&&(e.showCursor||e.fadeOut)&&!document.querySelector("["+u+"]")){var p=document.createElement("style");p.type="text/css",p.setAttribute(u,!0);var d="";e.showCursor&&(d+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),e.fadeOut&&(d+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==p.length&&(p.innerHTML=d,document.body.appendChild(p))}}}]),a}();l.default=o;var n=new o;l.initializer=n},function(h,l){l.default={strings:[],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,i){},onStringTyped:function(t,i){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,i){},onTypingResumed:function(t,i){},onReset:function(t){},onStop:function(t,i){},onStart:function(t,i){},onDestroy:function(t){}},h.exports=l.default},function(h,l){"use strict";var t=function(){function r(c,o){for(var n=0;n<o.length;n++){var a=o[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(c,a.key,a)}}return function(c,o,n){return o&&r(c.prototype,o),n&&r(c,n),c}}(),i=function(){function r(){!function(c,o){if(!(c instanceof o))throw new TypeError("Cannot call a class as a function")}(this,r)}return t(r,[{key:"typeHtmlChars",value:function(c,o,n){if("html"!==n.contentType)return o;var a=c.substr(o).charAt(0);if("<"===a||"&"===a){var e;for(e="<"===a?">":";";c.substr(o+1).charAt(0)!==e&&!(1+ ++o>c.length););o++}return o}},{key:"backSpaceHtmlChars",value:function(c,o,n){if("html"!==n.contentType)return o;var a=c.substr(o).charAt(0);if(">"===a||";"===a){var e;for(e=">"===a?"<":"&";c.substr(o-1).charAt(0)!==e&&!(--o<0););o--}return o}}]),r}();l.default=i;var s=new i;l.htmlParser=s}])});const pJS=function(h){const l=document.querySelector("#"+h+" > .particles-js-canvas-el");var t={canvas:{el:l,w:l.offsetWidth,h:l.offsetHeight},particles:{number:{value:29,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#000000"}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:10,random:!0,anim:{enable:!1,speed:80,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:300,color:"#ff9800",opacity:.4,width:2},move:{enable:!0,speed:12,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}},array:[]},fps_limit:250,interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:800,line_linked:{opacity:1}},bubble:{distance:800,size:80,duration:2,opacity:.8,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};t.tmp.obj={size_value:t.particles.size.value,size_anim_speed:t.particles.size.anim.speed,move_speed:t.particles.move.speed,line_linked_distance:t.particles.line_linked.distance,line_linked_width:t.particles.line_linked.width,mode_grab_distance:t.interactivity.modes.grab.distance,mode_bubble_distance:t.interactivity.modes.bubble.distance,mode_bubble_size:t.interactivity.modes.bubble.size,mode_repulse_distance:t.interactivity.modes.repulse.distance},t.fn.retinaInit=function(){t.retina_detect&&window.devicePixelRatio>1?(t.canvas.pxratio=window.devicePixelRatio,t.tmp.retina=!0):(t.canvas.pxratio=1,t.tmp.retina=!1),t.canvas.w=t.canvas.el.offsetWidth*t.canvas.pxratio,t.canvas.h=t.canvas.el.offsetHeight*t.canvas.pxratio,t.particles.size.value=t.tmp.obj.size_value*t.canvas.pxratio,t.particles.size.anim.speed=t.tmp.obj.size_anim_speed*t.canvas.pxratio,t.particles.move.speed=t.tmp.obj.move_speed*t.canvas.pxratio,t.particles.line_linked.distance=t.tmp.obj.line_linked_distance*t.canvas.pxratio,t.interactivity.modes.grab.distance=t.tmp.obj.mode_grab_distance*t.canvas.pxratio,t.interactivity.modes.bubble.distance=t.tmp.obj.mode_bubble_distance*t.canvas.pxratio,t.particles.line_linked.width=t.tmp.obj.line_linked_width*t.canvas.pxratio,t.interactivity.modes.bubble.size=t.tmp.obj.mode_bubble_size*t.canvas.pxratio,t.interactivity.modes.repulse.distance=t.tmp.obj.mode_repulse_distance*t.canvas.pxratio},t.fn.canvasInit=function(){t.canvas.ctx=t.canvas.el.getContext("2d")},t.fn.canvasSize=function(){t.canvas.el.width=t.canvas.w,t.canvas.el.height=t.canvas.h,t&&t.interactivity.events.resize&&window.addEventListener("resize",function(){t.canvas.w=t.canvas.el.offsetWidth,t.canvas.h=t.canvas.el.offsetHeight,t.canvas.el.width=t.canvas.w,t.canvas.el.height=t.canvas.h,t.fn.vendors.densityAutoParticles()})},t.fn.canvasPaint=function(){t.canvas.ctx.fillRect(0,0,t.canvas.w,t.canvas.h)},t.fn.particle=function(i,s,r){this.radius=(t.particles.size.random?Math.random():1)*t.particles.size.value,this.x=r?r.x:Math.random()*t.canvas.w,this.y=r?r.y:Math.random()*t.canvas.h,this.x>t.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>t.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),this.color={},this.color=i,this.color.rgb=hexToRgb(this.color.value),this.opacity=(t.particles.opacity.random?Math.random():1)*t.particles.opacity.value,this.vx=Math.random()-.5,this.vy=Math.random()-.5,this.vx_i=this.vx,this.vy_i=this.vy,this.shape=t.particles.shape.type},t.fn.particle.prototype.draw=function(){var i=this,s=i.radius;t.canvas.ctx.fillStyle="rgba("+i.color.rgb.r+","+i.color.rgb.g+","+i.color.rgb.b+","+i.opacity+")",t.canvas.ctx.beginPath(),t.canvas.ctx.arc(i.x,i.y,s,0,2*Math.PI,!1),t.canvas.ctx.closePath(),t.canvas.ctx.fill()},t.fn.particlesCreate=function(){for(var i=0;i<t.particles.number.value;i++)t.particles.array.push(new t.fn.particle(t.particles.color,t.particles.opacity.value))},t.fn.particlesUpdate=function(){for(var i=0;i<t.particles.array.length;i++){var s=t.particles.array[i];if(t.particles.move.enable){var r=t.particles.move.speed/2;s.x+=s.vx*r,s.y+=s.vy*r}let n={x_left:-s.radius,x_right:t.canvas.w+s.radius,y_top:-s.radius,y_bottom:t.canvas.h+s.radius};if(s.x-s.radius>t.canvas.w?(s.x=n.x_left,s.y=Math.random()*t.canvas.h):s.x+s.radius<0&&(s.x=n.x_right,s.y=Math.random()*t.canvas.h),s.y-s.radius>t.canvas.h?(s.y=n.y_top,s.x=Math.random()*t.canvas.w):s.y+s.radius<0&&(s.y=n.y_bottom,s.x=Math.random()*t.canvas.w),t.fn.modes.grabParticle(s),t.particles.line_linked.enable)for(var c=i+1;c<t.particles.array.length;c++)t.fn.interact.linkParticles(s,t.particles.array[c])}},t.fn.particlesDraw=function(){t.canvas.ctx.clearRect(0,0,t.canvas.w,t.canvas.h),t.fn.particlesUpdate();for(var i=0;i<t.particles.array.length;i++)t.particles.array[i].draw()},t.fn.interact.linkParticles=function(i,s){var r=i.x-s.x,c=i.y-s.y,o=Math.sqrt(r*r+c*c);if(o<=t.particles.line_linked.distance){var n=t.particles.line_linked.opacity-o/(1/t.particles.line_linked.opacity)/t.particles.line_linked.distance;if(n>0){var a=t.particles.line_linked.color_rgb_line;t.canvas.ctx.strokeStyle="rgba("+a.r+","+a.g+","+a.b+","+n+")",t.canvas.ctx.lineWidth=t.particles.line_linked.width,t.canvas.ctx.beginPath(),t.canvas.ctx.moveTo(i.x,i.y),t.canvas.ctx.lineTo(s.x,s.y),t.canvas.ctx.stroke(),t.canvas.ctx.closePath()}}},t.fn.modes.pushParticles=function(i,s){t.tmp.pushing=!0;for(var r=0;r<i;r++)t.particles.array.push(new t.fn.particle(t.particles.color,t.particles.opacity.value,{x:s?s.pos_x:Math.random()*t.canvas.w,y:s?s.pos_y:Math.random()*t.canvas.h}))},t.fn.modes.removeParticles=function(i){t.particles.array.splice(0,i),t.particles.move.enable||t.fn.particlesDraw()},t.fn.modes.grabParticle=function(i){if(t.interactivity.events.onhover.enable&&"mousemove"===t.interactivity.status){var s=i.x-t.interactivity.mouse.pos_x,r=i.y-t.interactivity.mouse.pos_y,c=Math.sqrt(s*s+r*r);if(c<=t.interactivity.modes.grab.distance){var o=t.interactivity.modes.grab.line_linked.opacity-c/(1/t.interactivity.modes.grab.line_linked.opacity)/t.interactivity.modes.grab.distance;if(o>0){var n=t.particles.line_linked.color_rgb_line;t.canvas.ctx.strokeStyle="rgba("+n.r+","+n.g+","+n.b+","+o+")",t.canvas.ctx.lineWidth=t.particles.line_linked.width,t.canvas.ctx.beginPath(),t.canvas.ctx.moveTo(i.x,i.y),t.canvas.ctx.lineTo(t.interactivity.mouse.pos_x,t.interactivity.mouse.pos_y),t.canvas.ctx.stroke(),t.canvas.ctx.closePath()}}}},t.fn.vendors.eventsListeners=function(){t.interactivity.el="window"===t.interactivity.detect_on?window:t.canvas.el,(t.interactivity.events.onhover.enable||t.interactivity.events.onclick.enable)&&(t.interactivity.el.addEventListener("mousemove",function(i){let r=i.offsetY||i.clientY;t.interactivity.mouse.pos_x=i.offsetX||i.clientX,t.interactivity.mouse.pos_y=r,t.tmp.retina&&(t.interactivity.mouse.pos_x*=t.canvas.pxratio,t.interactivity.mouse.pos_y*=t.canvas.pxratio),t.interactivity.status="mousemove"}),t.interactivity.el.addEventListener("mouseleave",function(i){t.interactivity.mouse.pos_x=null,t.interactivity.mouse.pos_y=null,t.interactivity.status="mouseleave"})),t.interactivity.el.addEventListener("click",function(){t.interactivity.mouse.click_pos_x=t.interactivity.mouse.pos_x,t.interactivity.mouse.click_pos_y=t.interactivity.mouse.pos_y,t.interactivity.mouse.click_time=(new Date).getTime(),t.fn.modes.pushParticles(t.interactivity.modes.push.particles_nb,t.interactivity.mouse)})},t.fn.vendors.densityAutoParticles=function(){if(t.particles.number.density.enable){var i=t.canvas.el.width*t.canvas.el.height/1e3;t.tmp.retina&&(i/=2*t.canvas.pxratio);var r=t.particles.array.length-i*t.particles.number.value/t.particles.number.density.value_area;r<0?t.fn.modes.pushParticles(Math.abs(r)):t.fn.modes.removeParticles(r)}},t.fn.vendors.draw=function(){var i=t.fps_limit;i<=0||setTimeout(function(){t.fn.particlesDraw(),t.particles.move.enable?t.fn.drawAnimFrame=requestAnimFrame(t.fn.vendors.draw):cancelRequestAnimFrame(t.fn.drawAnimFrame)},1e3/i)},t.fn.vendors.init=function(){t.fn.retinaInit(),t.fn.canvasInit(),t.fn.canvasSize(),t.fn.canvasPaint(),t.fn.particlesCreate(),t.fn.vendors.densityAutoParticles(),t.particles.line_linked.color_rgb_line=hexToRgb(t.particles.line_linked.color)},t.fn.vendors.start=function(){t.fn.vendors.init(),t.fn.vendors.draw()},t.fn.vendors.eventsListeners(),t.fn.vendors.start()};function hexToRgb(h){h=h.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,i,s,r){return i+i+s+s+r+r});var l=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);return l?{r:parseInt(l[1],16),g:parseInt(l[2],16),b:parseInt(l[3],16)}:null}window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(h){window.setTimeout(h,1e3/60)},window.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout,window.pJSDom=[],window.particlesJS=function(h){document.getElementById(h).getElementsByClassName("particles-js-canvas-el");var l=document.createElement("canvas");l.className="particles-js-canvas-el",l.style.width="100%",l.style.height="100%",l.style.position="absolute",l.style.top="0px",null!==document.getElementById(h).appendChild(l)&&pJSDom.push(new pJS(h))},window.particlesJS.load=function(h){setTimeout(()=>{window.particlesJS(h)},0)};var VanillaTilt=function(){"use strict";class h{constructor(t,i={}){if(!(t instanceof Node))throw"Can't initialize VanillaTilt because "+t+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=t,this.settings=this.extendSettings(i),this.reverse=this.settings.reverse?-1:1,this.glare=h.isSettingTrue(this.settings.glare),this.glarePrerender=h.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=h.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=h.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.updateInitialPosition()}static isSettingTrue(t){return""===t||!0===t||1===t}getElementListener(){if(this.fullPageListening)return window.document;if("string"==typeof this.settings["mouse-event-element"]){const t=document.querySelector(this.settings["mouse-event-element"]);if(t)return t}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)}onDeviceOrientation(t){if(null===t.gamma||null===t.beta)return;this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,null===this.gammazero?(this.gammazero=t.gamma,this.betazero=t.beta):(this.gammazero=(t.gamma+this.lastgammazero)/2,this.betazero=(t.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);const o=(t.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero))/((this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX)/this.width),n=(t.beta-(this.settings.gyroscopeMinAngleY+this.betazero))/((this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY)/this.height);null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event={clientX:o+this.left,clientY:n+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}onMouseEnter(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.event={clientX:this.left+this.width/2,clientY:this.top+this.height/2},this.element&&this.element.style&&(this.element.style.transform=`perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`),this.resetGlare()}resetGlare(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}updateInitialPosition(){if(0===this.settings.startX&&0===this.settings.startY)return;this.onMouseEnter(),this.event=this.fullPageListening?{clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:{clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};let t=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=t,this.resetGlare()}getValues(){let t,i;return this.fullPageListening?(t=this.event.clientX/this.clientWidth,i=this.event.clientY/this.clientHeight):(t=(this.event.clientX-this.left)/this.width,i=(this.event.clientY-this.top)/this.height),t=Math.min(Math.max(t,0),1),i=Math.min(Math.max(i,0),1),{tiltX:(this.reverse*(this.settings.max-t*this.settings.max*2)).toFixed(2),tiltY:(this.reverse*(i*this.settings.max*2-this.settings.max)).toFixed(2),percentageX:100*t,percentageY:100*i,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}}updateElementPosition(){let t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}update(){let t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${t.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=""+t.percentageY*this.settings["max-glare"]/100),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="",this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(t){let i={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},s={};for(var r in i)if(r in t)s[r]=t[r];else if(this.element.hasAttribute("data-tilt-"+r)){let c=this.element.getAttribute("data-tilt-"+r);try{s[r]=JSON.parse(c)}catch{s[r]=c}}else s[r]=i[r];return s}static init(t,i){t instanceof Node&&(t=[t]),t instanceof NodeList&&(t=[].slice.call(t)),t instanceof Array&&t.forEach(s=>{"vanillaTilt"in s||(s.vanillaTilt=new h(s,i))})}}return typeof document<"u"&&(window.VanillaTilt=h,h.init(document.querySelectorAll("[data-tilt]"))),h}();