/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-animation-apng-backgroundsize-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-borderimage-borderradius-boxshadow-boxsizing-checked-classlist-createelementattrs_createelement_attrs-cssanimations-csscalc-csscolumns-cssexunit-cssfilters-cssgradients-cssgrid_cssgridlegacy-cssmask-csspointerevents-csspositionsticky-csspseudoanimations-csspseudotransitions-cssreflections-cssremunit-cssresize-csstransforms-csstransforms3d-csstransformslevel2-csstransitions-cssvalid-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-devicemotion_deviceorientation-ellipsis-eventlistener-fetch-flexbox-flexboxlegacy-flexboxtweener-flexwrap-focuswithin-fontface-formattribute-formvalidation-geolocation-hidden-hiddenscroll-imgcrossorigin-inlinesvg-input-inputformaction-inputformmethod-inputtypes-lastchild-localizednumber-localstorage-mediaqueries-multiplebgs-nthchild-objectfit-oninput-opacity-overflowscrolling-performance-picture-placeholder-pointerevents-preserve3d-regions-requestautocomplete-rgba-scrollsnappoints-sessionstorage-shapes-siblinggeneral-sizes-smil-srcset-subpixelfont-svg-svgasimg-svgclippaths-svgfilters-svgforeignobject-target-textalignlast-textshadow-touchevents-transferables-userdata-userselect-webpanimation-wrapflow-setclasses !*/
!function(e,t,n){function r(e){var t=C.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?C.className.baseVal=t:C.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function o(e,t){return typeof e===t}function s(){var e,t,n,r,i,s,a;for(var d in x)if(x.hasOwnProperty(d)){if(e=[],t=x[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),y.push((r?"":"no-")+a.join("-"))}}function a(t,n,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var o=e.console;if(null!==i)r&&(i=i.getPropertyValue(r));else if(o){var s=o.error?"error":"log";o[s].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!n&&t.currentStyle&&t.currentStyle[r];return i}function d(e,t){return e-1===t||e===t||e+1===t}function l(){var e=t.body;return e||(e=i(S?"svg":"body"),e.fake=!0),e}function u(e,n,r,o){var s,a,d,u,c="modernizr",f=i("div"),p=l();if(parseInt(r,10))for(;r--;)d=i("div"),d.id=o?o[r]:c+(r+1),f.appendChild(d);return s=i("style"),s.type="text/css",s.id="s"+c,(p.fake?p:f).appendChild(s),p.appendChild(f),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),f.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),a=n(f,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=u,C.offsetHeight):f.parentNode.removeChild(f),!!a}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(e,t){if("object"==typeof e)for(var n in e)G(e,n)&&f(n,e[n]);else{e=e.toLowerCase();var i=e.split("."),o=Modernizr[i[0]];if(2==i.length&&(o=o[i[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==i.length?Modernizr[i[0]]=t:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=t),r([(t&&0!=t?"":"no-")+i.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function p(e,t){return!!~(""+e).indexOf(t)}function m(e,t){return function(){return e.apply(t,arguments)}}function h(e,t,n){var r;for(var i in e)if(e[i]in t)return n===!1?e[i]:(r=t[e[i]],o(r,"function")?m(r,n||t):r);return!1}function g(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function v(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(g(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+g(t[i])+":"+r+")");return o=o.join(" or "),u("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==a(e,null,"position")})}return n}function A(e,t,r,s){function a(){l&&(delete F.style,delete F.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var d=v(e,r);if(!o(d,"undefined"))return d}for(var l,u,f,m,h,g=["modernizr","tspan","samp"];!F.style&&g.length;)l=!0,F.modElem=i(g.shift()),F.style=F.modElem.style;for(f=e.length,u=0;f>u;u++)if(m=e[u],h=F.style[m],p(m,"-")&&(m=c(m)),F.style[m]!==n){if(s||o(r,"undefined"))return a(),"pfx"==t?m:!0;try{F.style[m]=r}catch(A){}if(F.style[m]!=h)return a(),"pfx"==t?m:!0}return a(),!1}function b(e,t,n,r,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+q.join(s+" ")+s).split(" ");return o(t,"string")||o(t,"undefined")?A(a,t,r,i):(a=(e+" "+U.join(s+" ")+s).split(" "),h(a,t,n))}function T(e,t,r){return b(e,n,n,t,r)}var y=[],x=[],w={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){x.push({name:e,fn:t,options:n})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr,Modernizr.addTest("eventlistener","addEventListener"in e),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("focuswithin",function(){try{t.querySelector(":focus-within")}catch(e){return!1}return!0}),Modernizr.addTest("target",function(){var t=e.document;if(!("querySelectorAll"in t))return!1;try{return t.querySelectorAll(":target"),!0}catch(n){return!1}}),Modernizr.addTest("picture","HTMLPictureElement"in e),Modernizr.addTest("devicemotion","DeviceMotionEvent"in e),Modernizr.addTest("deviceorientation","DeviceOrientationEvent"in e),Modernizr.addTest("fetch","fetch"in e),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("svgfilters",function(){var t=!1;try{t="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(n){}return t});var C=t.documentElement;Modernizr.addTest("classlist","classList"in C);var S="svg"===C.nodeName.toLowerCase();Modernizr.addTest("userdata",!!i("div").addBehavior),Modernizr.addTest("webanimations","animate"in i("div")),Modernizr.addTest("bgpositionshorthand",function(){var e=i("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n}),Modernizr.addTest("multiplebgs",function(){var e=i("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("csspointerevents",function(){var e=i("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}),Modernizr.addTest("cssremunit",function(){var e=i("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),Modernizr.addTest("rgba",function(){var e=i("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("preserve3d",function(){var t,n,r=e.CSS,o=!1;return r&&r.supports&&r.supports("(transform-style: preserve-3d)")?!0:(t=i("a"),n=i("a"),t.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",n.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",t.appendChild(n),C.appendChild(t),o=n.getBoundingClientRect(),C.removeChild(t),o=o.width&&o.width<4)}),Modernizr.addTest("createelementattrs",function(){try{return"test"==i('<input name="test" />').getAttribute("name")}catch(e){return!1}},{aliases:["createelement-attrs"]}),Modernizr.addTest("hidden","hidden"in i("a")),Modernizr.addTest("formattribute",function(){var e,n=i("form"),r=i("input"),o=i("div"),s="formtest"+(new Date).getTime(),a=!1;n.id=s;try{r.setAttribute("form",s)}catch(d){t.createAttribute&&(e=t.createAttribute("form"),e.nodeValue=s,r.setAttributeNode(e))}return o.appendChild(n),o.appendChild(r),C.appendChild(o),a=n.elements&&1===n.elements.length&&r.form==n,o.parentNode.removeChild(o),a}),Modernizr.addTest("placeholder","placeholder"in i("input")&&"placeholder"in i("textarea")),Modernizr.addTest("imgcrossorigin","crossOrigin"in i("img")),Modernizr.addTest("srcset","srcset"in i("img")),Modernizr.addTest("inputformaction",!!("formAction"in i("input")),{aliases:["input-formaction"]}),Modernizr.addTest("inputformmethod",!!("formMethod"in i("input")));var z=i("input"),k="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),E={};Modernizr.input=function(t){for(var n=0,r=t.length;r>n;n++)E[t[n]]=!!(t[n]in z);return E.list&&(E.list=!(!i("datalist")||!e.HTMLDataListElement)),E}(k);var B="search tel url email datetime date month week time datetime-local number range color".split(" "),R={};Modernizr.inputtypes=function(e){for(var r,i,o,s=e.length,a="1)",d=0;s>d;d++)z.setAttribute("type",r=e[d]),o="text"!==z.type&&"style"in z,o&&(z.value=a,z.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&z.style.WebkitAppearance!==n?(C.appendChild(z),i=t.defaultView,o=i.getComputedStyle&&"textfield"!==i.getComputedStyle(z,null).WebkitAppearance&&0!==z.offsetHeight,C.removeChild(z)):/^(search|tel)$/.test(r)||(o=/^(url|email)$/.test(r)?z.checkValidity&&z.checkValidity()===!1:z.value!=a)),R[e[d]]=!!o;return R}(B);var _=function(){function e(e,t){var o;return e?(t&&"string"!=typeof t||(t=i(t||"div")),e="on"+e,o=e in t,!o&&r&&(t.setAttribute||(t=i("div")),t.setAttribute(e,""),o="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),o):!1}var r=!("onblur"in t.documentElement);return e}();w.hasEvent=_;var L=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=L,Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=i("a");return n.style.cssText=e+L.join(t+e),!!n.style.length}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",o=0,s=L.length-1;s>o;o++)e=0===o?"to ":"",r+=t+L[o]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var a=i("a"),d=a.style;return d.cssText=r,(""+d.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("opacity",function(){var e=i("a").style;return e.cssText=L.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=i("a"),r=n.style;return r.cssText=e+L.join(t+";"+e).slice(0,-e.length),-1!==r.position.indexOf(t)});var N={elem:i("modernizr")};Modernizr._q.push(function(){delete N.elem}),Modernizr.addTest("cssexunit",function(){var e,t=N.elem.style;try{t.fontSize="3ex",e=-1!==t.fontSize.indexOf("ex")}catch(n){e=!1}return e});var I="CSS"in e&&"supports"in e.CSS,P="supportsCSS"in e;Modernizr.addTest("supports",I||P),Modernizr.addTest("canvas",function(){var e=i("canvas");return!(!e.getContext||!e.getContext("2d"))});var j={}.toString;Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(j.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))}),Modernizr.addTest("svgforeignobject",function(){return!!t.createElementNS&&/SVGForeignObject/.test(j.call(t.createElementNS("http://www.w3.org/2000/svg","foreignObject")))}),Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(j.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("blobconstructor",function(){try{return!!new Blob}catch(e){return!1}},{aliases:["blob-constructor"]}),Modernizr.addTest("webworkers","Worker"in e),Modernizr.addTest("typedarrays","ArrayBuffer"in e);var O=w.testStyles=u;Modernizr.addTest("hiddenscroll",function(){return O("#modernizr {width:100px;height:100px;overflow:scroll}",function(e){return e.offsetWidth===e.clientWidth})}),Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",L.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");O(r,function(e){n=9===e.offsetTop})}return n}),Modernizr.addTest("checked",function(){return O("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=i("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})});var V=function(){var e=navigator.userAgent,t=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return t||n}();V?Modernizr.addTest("fontface",!1):O('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),i=r.sheet||r.styleSheet,o=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"",s=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",s)}),O("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),O("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,r=0;5>r;r++)n=n&&t[r].offsetWidth===r%2+1;Modernizr.addTest("nthchild",n)},5),Modernizr.addTest("siblinggeneral",function(){return O("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(e){return 200==e.lastChild.offsetWidth},2)}),O("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}",function(t){var n=t.firstChild;n.innerHTML="This is a text written in Arial",Modernizr.addTest("subpixelfont",e.getComputedStyle?"44px"!==e.getComputedStyle(n,null).getPropertyValue("width"):!1)},1,["subpixel"]),Modernizr.addTest("cssvalid",function(){return O("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(e){var t=i("input");return e.appendChild(t),t.clientWidth>10})}),O("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),r=parseInt(a(t,null,"height"),10);Modernizr.addTest("cssvhunit",d(r,n))}),O("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],r=e.childNodes[0],i=parseInt((n.offsetWidth-n.clientWidth)/2,10),o=r.clientWidth/100,s=r.clientHeight/100,l=parseInt(50*Math.max(o,s),10),u=parseInt(a(t,null,"width"),10);Modernizr.addTest("cssvmaxunit",d(l,u)||d(l,u-i))},3),O("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],r=e.childNodes[0],i=parseInt((n.offsetWidth-n.clientWidth)/2,10),o=r.clientWidth/100,s=r.clientHeight/100,l=parseInt(50*Math.min(o,s),10),u=parseInt(a(t,null,"width"),10);Modernizr.addTest("cssvminunit",d(l,u)||d(l,u-i))},3),O("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),r=parseInt(a(t,null,"width"),10);Modernizr.addTest("cssvwunit",d(r,n))}),Modernizr.addTest("oninput",function(){var n,r=i("input");if(r.setAttribute("oninput","return"),_("oninput",C)||"function"==typeof r.oninput)return!0;try{var o=t.createEvent("KeyboardEvent");n=!1;var s=function(e){n=!0,e.preventDefault(),e.stopPropagation()};o.initKeyEvent("keypress",!0,!0,e,!1,!1,!1,!1,0,"e".charCodeAt(0)),C.appendChild(r),r.addEventListener("input",s,!1),r.focus(),r.dispatchEvent(o),r.removeEventListener("input",s,!1),C.removeChild(r)}catch(a){n=!1}return n}),Modernizr.addTest("formvalidation",function(){var t=i("form");if(!("checkValidity"in t&&"addEventListener"in t))return!1;if("reportValidity"in t)return!0;var n,r=!1;return Modernizr.formvalidationapi=!0,t.addEventListener("submit",function(t){(!e.opera||e.operamini)&&t.preventDefault(),t.stopPropagation()},!1),t.innerHTML='<input name="modTest" required="required" /><button></button>',O("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(t),n=t.getElementsByTagName("input")[0],n.addEventListener("invalid",function(e){r=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!n.validationMessage,t.getElementsByTagName("button")[0].click()}),r}),Modernizr.addTest("localizednumber",function(){if(!Modernizr.inputtypes.number)return!1;if(!Modernizr.formvalidation)return!1;var e,n=i("div"),r=l(),o=function(){return C.insertBefore(r,C.firstElementChild||C.firstChild)}();n.innerHTML='<input type="number" value="1.0" step="0.1"/>';var s=n.childNodes[0];o.appendChild(n),s.focus();try{t.execCommand("SelectAll",!1),t.execCommand("InsertText",!1,"1,1")}catch(a){}return e="number"===s.type&&1.1===s.valueAsNumber&&s.checkValidity(),o.removeChild(n),r.fake&&o.parentNode.removeChild(o),e});var M=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return u("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();w.mq=M,Modernizr.addTest("mediaqueries",M("only all"));var W="Moz O ms Webkit",U=w._config.usePrefixes?W.toLowerCase().split(" "):[];w._domPrefixes=U,Modernizr.addTest("pointerevents",function(){var e=!1,t=U.length;for(e=Modernizr.hasEvent("pointerdown");t--&&!e;)_(U[t]+"pointerdown")&&(e=!0);return e});var G;!function(){var e={}.hasOwnProperty;G=o(e,"undefined")||o(e.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),w._l={},w.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},w._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){w.addTest=f}),Modernizr.addAsyncTest(function(){if(!Modernizr.canvas)return!1;var e=new Image,t=i("canvas"),n=t.getContext("2d");e.onload=function(){f("apng",function(){return"undefined"==typeof t.getContext?!1:(n.drawImage(e,0,0),0===n.getImageData(0,0,1,1).data[3])})},e.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="}),Modernizr.addAsyncTest(function(){var e,t,n,r=i("img"),o="sizes"in r;!o&&"srcset"in r?(t="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=function(){f("sizes",2==r.width)},r.onload=n,r.onerror=n,r.setAttribute("sizes","9px"),r.srcset=e+" 1w,"+t+" 8w",r.src=e):f("sizes",o)}),Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){f("webpanimation",!1,{aliases:["webp-animation"]})},e.onload=function(){f("webpanimation",1==e.width,{aliases:["webp-animation"]})},e.src="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"}),Modernizr.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")),Modernizr.addTest("inlinesvg",function(){var e=i("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var q=w._config.usePrefixes?W.split(" "):[];w._cssomPrefixes=q;var D=function(t){var r,i=L.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var s=0;i>s;s++){var a=L[s],d=a.toUpperCase()+"_"+r;if(d in o)return"@-"+a.toLowerCase()+"-"+t}return!1};w.atRule=D;var F={style:N.elem.style};Modernizr._q.unshift(function(){delete F.style});var H=w.testProp=function(e,t,r){return A([e],n,t,r)};Modernizr.addTest("textshadow",H("textShadow","1px 1px")),w.testAllProps=b;var Y=w.prefixed=function(e,t,n){return 0===e.indexOf("@")?D(e):(-1!=e.indexOf("-")&&(e=c(e)),t?b(e,t,n):b(e,"pfx"))};Modernizr.addTest("performance",!!Y("performance",e)),Modernizr.addTest("objectfit",!!Y("objectFit"),{aliases:["object-fit"]}),Modernizr.addTest("regions",function(){if(S)return!1;var e=Y("flowFrom"),t=Y("flowInto"),r=!1;if(!e||!t)return r;var o=i("iframe"),s=i("div"),a=i("div"),d=i("div"),l="modernizr_flow_for_regions_check";a.innerText="M",s.style.cssText="top: 150px; left: 150px; padding: 0px;",d.style.cssText="width: 50px; height: 50px; padding: 42px;",d.style[e]=l,s.appendChild(a),s.appendChild(d),C.appendChild(s);var u,c,f=a.getBoundingClientRect();return a.style[t]=l,u=a.getBoundingClientRect(),c=parseInt(u.left-f.left,10),C.removeChild(s),42==c?r=!0:(C.appendChild(o),f=o.getBoundingClientRect(),o.style[t]=l,u=o.getBoundingClientRect(),f.height>0&&f.height!==u.height&&0===u.height&&(r=!0)),a=d=s=o=n,r}),Modernizr.addTest("wrapflow",function(){var e=Y("wrapFlow");if(!e||S)return!1;var t=e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-"),r=i("div"),o=i("div"),s=i("span");o.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+t+":end;",s.innerText="X",r.appendChild(o),r.appendChild(s),C.appendChild(r);var a=s.offsetLeft;return C.removeChild(r),o=s=r=n,150==a}),Modernizr.addTest("requestautocomplete",!!Y("requestAutocomplete",i("form")));var Q=Y("URL",e,!1);Q=Q&&e[Q],Modernizr.addTest("bloburls",Q&&"revokeObjectURL"in Q&&"createObjectURL"in Q),Modernizr.addAsyncTest(function(){function e(){f("transferables",!1),t()}function t(){a&&URL.revokeObjectURL(a),d&&d.terminate(),i&&clearTimeout(i)}var n=!!(Modernizr.blobconstructor&&Modernizr.bloburls&&Modernizr.webworkers&&Modernizr.typedarrays);if(!n)return f("transferables",!1);try{var r,i,o='var hello = "world"',s=new Blob([o],{type:"text/javascript"}),a=URL.createObjectURL(s),d=new Worker(a);d.onerror=e,i=setTimeout(e,200),r=new ArrayBuffer(1),d.postMessage(r,[r]),f("transferables",0===r.byteLength),t()}catch(l){e()}}),w.testAllProps=T,Modernizr.addTest("cssanimations",T("animationName","a",!0)),Modernizr.addTest("csspseudoanimations",function(){var t=!1;if(!Modernizr.cssanimations||!e.getComputedStyle)return t;var n=["@",Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/,""),'#modernizr:before { content:" "; font-size:5px;',Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"}"].join("");return Modernizr.testStyles(n,function(n){t="10px"===e.getComputedStyle(n,":before").getPropertyValue("font-size")}),t}),Modernizr.addTest("bgpositionxy",function(){return T("backgroundPositionX","3px",!0)&&T("backgroundPositionY","5px",!0)}),Modernizr.addTest("bgrepeatround",T("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",T("backgroundRepeat","space")),Modernizr.addTest("backgroundsize",T("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",T("backgroundSize","cover")),Modernizr.addTest("borderimage",T("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",T("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",T("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",T("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=T("columnCount");try{e=!!t,e&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=T("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||T(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("cssgridlegacy",T("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",T("grid-template-rows","none",!0)),Modernizr.addTest("ellipsis",T("textOverflow","ellipsis")),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return T("filter","blur(2px)");var e=i("a");return e.style.cssText=L.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("flexbox",T("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",T("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",T("flexAlign","end",!0)),Modernizr.addTest("flexwrap",T("flexWrap","wrap",!0)),Modernizr.addTest("cssmask",T("maskRepeat","repeat-x",!0)),Modernizr.addTest("overflowscrolling",T("overflowScrolling","touch",!0)),Modernizr.addTest("cssreflections",T("boxReflect","above",!0)),Modernizr.addTest("cssresize",T("resize","both",!0)),Modernizr.addTest("scrollsnappoints",T("scrollSnapType")),Modernizr.addTest("shapes",T("shapeOutside","content-box",!0)),Modernizr.addTest("textalignlast",T("textAlignLast")),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&T("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){return!!T("perspective","1px",!0)}),Modernizr.addTest("csstransformslevel2",function(){return T("translate","45px",!0)}),Modernizr.addTest("csstransitions",T("transition","all",!0)),Modernizr.addTest("csspseudotransitions",function(){var t=!1;if(!Modernizr.csstransitions||!e.getComputedStyle)return t;var n='#modernizr:before { content:" "; font-size:5px;'+Modernizr._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return Modernizr.testStyles(n,function(n){e.getComputedStyle(n,":before").getPropertyValue("font-size"),n.className+="trigger",t="5px"===e.getComputedStyle(n,":before").getPropertyValue("font-size")}),t}),Modernizr.addTest("userselect",T("userSelect","none",!0)),s(),r(y),delete w.addTest,delete w.addAsyncTest;for(var $=0;$<Modernizr._q.length;$++)Modernizr._q[$]();e.Modernizr=Modernizr}(window,document);