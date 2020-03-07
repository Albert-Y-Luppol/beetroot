/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-cssgrid_cssgridlegacy-flexbox-svg-svgclippaths-svgfilters-setclasses !*/
!function(e,t,n){function r(e){var t=E.className,n=Modernizr._config.classPrefix||"";if(_&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),_?E.className.baseVal=t:E.className=t)}function s(e,t){return typeof e===t}function o(){var e,t,n,r,o,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=s(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),S.push((r?"":"no-")+a.join("-"))}}function i(e,t){return!!~(""+e).indexOf(t)}function a(e,t){return function(){return e.apply(t,arguments)}}function l(e,t,n){var r;for(var o in e)if(e[o]in t)return n===!1?e[o]:(r=t[e[o]],s(r,"function")?a(r,n||t):r);return!1}function u(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):_?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,n,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,t,n);var o=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!n&&t.currentStyle&&t.currentStyle[r];return s}function p(){var e=t.body;return e||(e=u(_?"svg":"body"),e.fake=!0),e}function m(e,n,r,s){var o,i,a,l,f="modernizr",c=u("div"),d=p();if(parseInt(r,10))for(;r--;)a=u("div"),a.id=s?s[r]:f+(r+1),c.appendChild(a);return o=u("style"),o.type="text/css",o.id="s"+f,(d.fake?d:c).appendChild(o),d.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),c.id=f,d.fake&&(d.style.background="",d.style.overflow="hidden",l=E.style.overflow,E.style.overflow="hidden",E.appendChild(d)),i=n(c,e),d.fake?(d.parentNode.removeChild(d),E.style.overflow=l,E.offsetHeight):c.parentNode.removeChild(c),!!i}function g(t,r){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(c(t[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+c(t[s])+":"+r+")");return o=o.join(" or "),m("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return n}function v(e,t,r,o){function a(){c&&(delete z.style,delete z.modElem)}if(o=s(o,"undefined")?!1:o,!s(r,"undefined")){var l=g(e,r);if(!s(l,"undefined"))return l}for(var c,d,p,m,v,h=["modernizr","tspan","samp"];!z.style&&h.length;)c=!0,z.modElem=u(h.shift()),z.style=z.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],v=z.style[m],i(m,"-")&&(m=f(m)),z.style[m]!==n){if(o||s(r,"undefined"))return a(),"pfx"==t?m:!0;try{z.style[m]=r}catch(y){}if(z.style[m]!=v)return a(),"pfx"==t?m:!0}return a(),!1}function h(e,t,n,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(i+" ")+i).split(" ");return s(t,"string")||s(t,"undefined")?v(a,t,r,o):(a=(e+" "+N.join(i+" ")+i).split(" "),l(a,t,n))}function y(e,t,r){return h(e,n,n,t,r)}var S=[],C=[],w={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr,Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("svgfilters",function(){var t=!1;try{t="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(n){}return t});var x={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(x.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))});var E=t.documentElement,_="svg"===E.nodeName.toLowerCase(),T="Moz O ms Webkit",b=w._config.usePrefixes?T.split(" "):[];w._cssomPrefixes=b;var N=w._config.usePrefixes?T.toLowerCase().split(" "):[];w._domPrefixes=N;var P={elem:u("modernizr")};Modernizr._q.push(function(){delete P.elem});var z={style:P.elem.style};Modernizr._q.unshift(function(){delete z.style}),w.testAllProps=h,w.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("cssgridlegacy",y("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",y("grid-template-rows","none",!0)),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),o(),r(S),delete w.addTest,delete w.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);