(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>b});var o=t(81),r=t.n(o),a=t(645),c=t.n(a),i=t(667),d=t.n(i),s=new URL(t(999),t.b),l=new URL(t(302),t.b),p=new URL(t(245),t.b),u=c()(r());u.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@200;500;700&display=swap);"]);var m=d()(s),h=d()(l),f=d()(p);u.push([n.id,`/* Css Resets */\n\n:root {\n  --color-1: hsl(16, 41%, 76%);\n  --color-2: hsl(17, 33%, 36%);\n  --color-3: hsl(20, 23%, 47%);\n  /* --color-4: hsl(34, 39%, 83%);\n  --color-5: hsl(27, 18%, 90%); */\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Oswald", sans-serif;\n}\n\nbody {\n  min-height: 100vh;\n  background-color: hsl(34, 40%, 83%);\n}\n\n.main {\n  width: 100%;\n}\n\n#content {\n  /* display: grid;\n  justify-items: center;\n  grid-template-rows: 11vh 2fr 100px; */\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n\n.content-1 {\n  height: 85vh;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  /* background-attachment: fixed; */\n  background-image: url(${m});\n  background-size: cover;\n\n  display: flex;\n  align-items: center;\n}\n\n/* TEXT (MAIN) STYLING */\n\n.content-1 .text-container {\n  margin: 0 auto;\n  border: none;\n  font-weight: lighter;\n  padding: 50px;\n  font-size: clamp(1rem, 3.5vw, 4rem);\n  text-align: center;\n}\n\n.content-1 .text-container h1 {\n  color: var(--color-1);\n  text-transform: uppercase;\n}\n\n.content-1 .text-container h2 {\n  color: white;\n}\n\n.content-1 .text-container p {\n  color: var(--color-1);\n  font-weight: 100;\n}\n\n.content-1 .text-container button {\n  margin-top: 30px;\n  padding: 15px 50px;\n  color: white;\n  background-color: transparent;\n  border: 3px solid white;\n  font-size: 1.5rem;\n}\n\n.content-1 .text-container button:hover {\n  transition: all 0.5s;\n  background-color: var(--color-1);\n  cursor: pointer;\n}\n\n.content-2 {\n  height: 35%;\n  padding: 5rem;\n  display: grid;\n  /* grid-template-columns: minmax(400px, 0.5fr) minmax(600px, 1fr); */\n  grid-template-columns: 0.5fr 1.5fr;\n  column-gap: 25px;\n}\n\n.content-2 .gallery {\n  justify-self: end;\n  margin-top: 10px;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(50px, 1fr));\n  grid-template-rows: 200px 1fr;\n  gap: 10px;\n}\n\n.content-2 .gallery img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.content-2 .gallery img:nth-child(1) {\n  grid-row: 1/3;\n}\n\n.content-2 .gallery img:nth-child(2) {\n  grid-column: 2 / -1;\n}\n\n.content-2 .text-container {\n  color: white;\n  font-size: clamp(0.1rem, 5vw, 1.69rem);\n  text-transform: uppercase;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.content-2 .text-container h1 {\n  margin-bottom: -10px;\n  color: var(--color-1);\n}\n\n.content-2 button {\n  width: 75%;\n  margin-top: 30px;\n  padding: 5px 30px;\n  color: white;\n  background-color: transparent;\n  border: 3px solid white;\n  font-size: 1.5rem;\n}\n\n.content-2 .text-container button:hover {\n  transition: all 0.5s;\n  background-color: var(--color-1);\n  cursor: pointer;\n}\n\n/* FOOTER STYLING */\n.footer {\n  position: relative;\n  bottom: 10px;\n\n  letter-spacing: 5px;\n  background-color: transparent;\n  width: 100%;\n  text-align: center;\n  color: white;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/* HEADER STYLING */\n\n.header {\n  width: 100%;\n  text-align: center;\n  /* background-color: rgba(0, 0, 0, 0.404); */\n  position: static;\n  top: 20px;\n}\n\n.header .nav-bar ul {\n  list-style: none;\n\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.header .nav-bar ul li {\n  width: 300px;\n  font-weight: bold;\n  text-transform: uppercase;\n  text-align: center;\n  letter-spacing: 1.5rem;\n  text-indent: 1.5rem;\n  color: white;\n  padding: 25px 0px 20px 0px;\n  font-size: clamp(0.5rem, 2vw, 4rem);\n  cursor: pointer;\n  border-bottom: 10px solid transparent;\n}\n\n.header .nav-bar ul li:hover {\n  transition: all 0.5s;\n  color: white;\n  border-bottom: 10px solid white;\n}\n\n.header .nav-bar ul li.border-bottom {\n  transition: border-bottom 1s;\n  border-bottom: 10px solid white;\n}\n\n.header h1 {\n  font-size: 3rem;\n}\n\n/* MENU */\n\n/* #content.menu {\n  display: grid;\n  justify-items: center;\n  grid-template-rows: 11vh 89vh 150vh 5vh;\n} */\n\n.description-container {\n  height: 85vh;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-image: url(${h});\n  background-size: cover;\n\n  display: flex;\n  align-items: start;\n  justify-content: center;\n  flex-direction: column;\n\n  padding-left: 4rem;\n  font-size: 2rem;\n  color: white;\n}\n\n.description-container h1 span {\n  color: var(--color-3);\n}\n\n.description-container a {\n  color: white;\n  border: 5px solid white;\n  padding: 5px 50px;\n  margin-top: 25px;\n  text-decoration: none;\n}\n\n.description-container a:hover {\n  background: black;\n}\n\n.menu-container {\n  padding: 15px;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  grid-template-rows: 100px 0.5fr;\n  align-content: center;\n  justify-content: center;\n  gap: 40px;\n}\n\n.menu-container h1 {\n  text-transform: uppercase;\n  grid-column: 1 / -1;\n  text-align: center;\n  font-size: 3rem;\n  color: white;\n}\n\n.menu-container button {\n  width: 50px;\n  height: 50px;\n  border: none;\n  cursor: pointer;\n}\n\n.menu-container button {\n  justify-self: center;\n}\n\n.menus {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  font-size: 1.2rem;\n  padding: 25px;\n  text-transform: uppercase;\n\n  box-shadow: 1px 1px 2px rgb(8, 7, 7);\n  background-color: rgba(255, 255, 255, 0.521);\n\n  border-radius: 50px;\n}\n\n.menus img {\n  border-radius: 50%;\n  width: 250px;\n}\n\n.menus h1 {\n  color: black;\n}\n\n.menus p {\n  color: var(--color-2);\n}\n\n.menus ul {\n  list-style: none;\n  display: flex;\n  gap: 25px;\n\n  color: black;\n}\n\n.menus ul li span {\n  color: black;\n}\n\n.menus button {\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 1rem;\n  padding: 10px 30px;\n  width: 100%;\n  background-color: var(--color-2);\n  border: none;\n  border-radius: 25px;\n\n  color: white;\n}\n\n.menus button:hover {\n  background-color: var(--color-3);\n  cursor: pointer;\n}\n\n/* Contact */\n/* #content.contact {\n  display: grid;\n  justify-items: center;\n  grid-template-rows: 11vh 84vh 5vh;\n} */\n\n.contact-container {\n  width: 100%;\n  padding: 25px;\n  background-image: url(${f});\n  background-position: center;\n  background-size: cover;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.contact-container .title {\n  text-align: center;\n  color: white;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n  font-size: 1.2rem;\n}\n\n.contact-container .title h1 {\n  color: var(--color-3);\n  font-size: 4rem;\n}\n\nform {\n  width: 100%;\n  padding: 1rem 5rem;\n  color: white;\n\n  display: flex;\n  flex-direction: column;\n}\n\nform button {\n  width: 50%;\n  margin: 0 auto;\n  margin-top: 20px;\n  font-size: 1.4rem;\n  cursor: pointer;\n  border: 5px solid white;\n  background-color: var(--color-4);\n  color: white;\n  padding: 5px 10px;\n}\n\nform button:hover {\n  transition: all 0.5s;\n  background-color: var(--color-1);\n  cursor: pointer;\n}\n\nform ul {\n  list-style: none;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 650px));\n  justify-content: center;\n  gap: 10px;\n  text-transform: uppercase;\n}\n\nform ul li label {\n  display: block;\n}\n\nform ul li input,\nform ul li textarea {\n  font-size: 1.4rem;\n  width: 100%;\n  padding: 0.5rem 1rem;\n  border-radius: 5px;\n  border: none;\n}\n\nform ul li:last-of-type {\n  grid-column: 1 / -1;\n}\n`,""]);const b=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},c=[],i=0;i<n.length;i++){var d=n[i],s=o.base?d[0]+o.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=r(m,o);o.byIndex=i,e.splice(i,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var d=o(n,r),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},245:(n,e,t)=>{n.exports=t.p+"0ca51f37355b07e98074.jpg"},999:(n,e,t)=>{n.exports=t.p+"3b64022b5f2fe3f36c12.jpg"},302:(n,e,t)=>{n.exports=t.p+"0ddfa14a0206e7e1aeab.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(245);const e=t.p+"61e4d89081ce3018bda4.jpg";var o=t(999);const r=t.p+"2a88cbfded3b48652b8d.jpg",a=t.p+"481f8f7c98c36c05a727.png",c=t.p+"509795849dd386b4df44.png",i=t.p+"750df2d2512f0373faaf.png",d=t.p+"6fe1ae1682281d1d8579.png",s=t.p+"2b5c26b619bfd433e581.png",l=t.p+"7a3b9bc44e2ba655ce0a.png";let p=document.querySelector("#content");console.log(p),function(){const n=document.createElement("div"),e=document.createElement("div"),t=document.createElement("ul");for(let n=0;n<3;n++){const n=document.createElement("li");t.appendChild(n)}n.classList.add("header"),e.classList.add("nav-bar"),t.childNodes[0].textContent="Menu",t.childNodes[1].textContent="Home",t.childNodes[2].textContent="Contact",p.append(n),n.append(e),e.append(t)}(),function(){const n=document.createElement("div");n.classList.add("main"),p.append(n)}(),function(){const n=document.createElement("div"),e=document.createElement("p");n.classList.add("footer"),e.innerHTML="Copyright&copy; agahafiz04",p.append(n),n.append(e)}();let u=document.querySelector(".main");function m(){h(),b("Home"),f("Home"),function(){const n=document.createElement("div"),e=document.createElement("div"),t=document.createElement("h2"),o=document.createElement("h2"),r=document.createElement("h1"),a=document.createElement("p"),c=document.createElement("button");n.classList.add("content-1"),e.classList.add("text-container"),t.textContent="Do you want to taste a delicious donut ?",o.textContent="The best donut shop that you ever find",r.textContent="Say no more!",a.textContent="A meal designed to be explored and experienced in the moment.",c.textContent="Learn More",u.append(n),n.append(e),e.append(t,r,o,a,c)}(),function(){const t=document.createElement("div"),a=document.createElement("div"),c=document.createElement("h1"),i=document.createElement("h2"),d=document.createElement("p"),s=document.createElement("p"),l=document.createElement("button"),p=document.createElement("div");for(let n=0;n<4;n++){const n=document.createElement("img");p.append(n)}t.classList.add("content-2"),a.classList.add("text-container"),p.classList.add("gallery"),c.textContent="Indonesia",i.innerHTML="10890 kyt park. <br />anything street <br />P:14023",d.innerHTML="Monday - Saturday <br />08.00 To 20.00",s.innerHTML="Sunday <br /> 07.00 To 18.00",l.textContent="Contact Now",p.childNodes[0].src=n,p.childNodes[1].src=e,p.childNodes[2].src=o,p.childNodes[3].src=r,u.append(t),t.append(a,p),a.append(c,i,d,s,l)}()}function h(){for(;u.firstChild;)u.removeChild(u.firstChild)}function f(n){const e=document.querySelector("ul");switch(e.childNodes.forEach((n=>{n.classList.remove("border-bottom")})),n){case"Menu":e.childNodes[0].classList.add("border-bottom");break;case"Home":e.childNodes[1].classList.add("border-bottom");break;case"Contact":e.childNodes[2].classList.add("border-bottom")}}function b(n){switch(n){case"Home":p.setAttribute("class","index");break;case"Menu":p.setAttribute("class","menu");break;case"Contact":p.setAttribute("class","contact")}}console.log(u);var g=t(379),x=t.n(g),v=t(795),y=t.n(v),w=t(569),E=t.n(w),C=t(565),L=t.n(C),N=t(216),M=t.n(N),T=t(589),k=t.n(T),S=t(426),H={};H.styleTagTransform=k(),H.setAttributes=L(),H.insert=E().bind(null,"head"),H.domAPI=y(),H.insertStyleElement=M(),x()(S.Z,H),S.Z&&S.Z.locals&&S.Z.locals,m();const A=document.querySelector(".nav-bar ul");A.childNodes[0].addEventListener("click",(()=>{h(),b("Menu"),f("Menu"),function(){const n=document.createElement("div"),e=document.createElement("h1"),t=document.createElement("p"),o=document.createElement("a");n.classList.add("description-container"),e.innerHTML=" <span>Delicious</span> Donut For Your Day",t.textContent=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, reprehenderit. Voluptatibus praesentium et inventore minima.",o.setAttribute("href","#tes"),o.textContent="Order Donuts",u.append(n),n.append(e,t,o)}(),function(){const n=document.createElement("div"),e=document.createElement("h1");n.classList.add("menu-container"),n.setAttribute("id","tes"),e.textContent="Donuts Menu List",u.append(n),n.append(e);for(let e=0;e<6;e++){const e=document.createElement("div"),t=document.createElement("img"),o=document.createElement("h1"),r=document.createElement("p"),a=document.createElement("ul"),c=document.createElement("button");for(let n=0;n<3;n++){const n=document.createElement("li");a.appendChild(n)}c.textContent="Order Now",e.classList.add("menus"),e.append(t,o,r,a,c),n.append(e)}const t=document.querySelectorAll(".menus"),o=t[0].children;o[0].src=a,o[1].textContent="Sprinkle Donut",o[2].textContent="Chocolate From Spain, Fresh From The Oven",o[3].childNodes[0].innerHTML="Small <br /><span>5.00$</span>",o[3].childNodes[1].innerHTML="Medium <br /><span>10.00$</span>",o[3].childNodes[2].innerHTML="Large <br /><span>15.00$</span>";const r=t[1].children;r[0].src=c,r[1].textContent="Coco Donut",r[2].textContent="No Other Donut That Can Compare To This",r[3].childNodes[0].innerHTML="Small <br /><span>7.00$</span>",r[3].childNodes[1].innerHTML="Medium <br /><span>11.00$</span>",r[3].childNodes[2].innerHTML="Large <br /><span>14.00$</span>";const p=t[2].children;p[0].src=i,p[1].textContent="Whitey Donut",p[2].textContent="Its White and Delicious",p[3].childNodes[0].innerHTML="Small <br /><span>5.65$</span>",p[3].childNodes[1].innerHTML="Medium <br /><span>11.22$</span>",p[3].childNodes[2].innerHTML="Large <br /><span>16.10$</span>";const m=t[3].children;m[0].src=d,m[1].textContent="Fizz Donut",m[2].textContent="Make You Fizz All Day",m[3].childNodes[0].innerHTML="Small <br /><span>7.12$</span>",m[3].childNodes[1].innerHTML="Medium <br /><span>12.17$</span>",m[3].childNodes[2].innerHTML="Large <br /><span>17.14$</span>";const h=t[4].children;h[0].src=s,h[1].textContent="Romeo Donut",h[2].textContent="Maybe Im Not As Handsome",h[3].childNodes[0].innerHTML="Small <br /><span>4.35$</span>",h[3].childNodes[1].innerHTML="Medium <br /><span>10.91$</span>",h[3].childNodes[2].innerHTML="Large <br /><span>19.66$</span>";const f=t[5].children;f[0].src=l,f[1].textContent="Latte Donut",f[2].textContent="With Crispy Coco And Creamy Coco",f[3].childNodes[0].innerHTML="Small <br /><span>4.22$</span>",f[3].childNodes[1].innerHTML="Medium <br /><span>12.28$</span>",f[3].childNodes[2].innerHTML="Large <br /><span>16.28$</span>"}()})),A.childNodes[1].addEventListener("click",(()=>{m()})),A.childNodes[2].addEventListener("click",(()=>{h(),b("Contact"),f("Contact"),function(){const n=document.createElement("div"),e=document.createElement("div"),t=document.createElement("h1"),o=document.createElement("h2"),r=document.createElement("h2");n.classList.add("contact-container"),e.classList.add("title"),t.textContent="Contact Us Now",o.textContent="Got Any Complain For Our Service?",r.textContent="Please Be Aware That You Are Sending Us Legit Complain",u.append(n),n.append(e),e.append(o,t,r);const a=document.createElement("form"),c=document.createElement("ul"),i=document.createElement("button");for(let n=0;n<5;n++){const n=document.createElement("li");c.appendChild(n)}i.textContent="Submit",a.append(c,i),n.append(a)}(),function(){const n=document.querySelector(".contact-container form ul");function e(n,e){Object.keys(e).forEach((t=>{n.setAttribute(t,e[t])}))}(function(){const t=document.createElement("label"),o=document.createElement("input"),r=n.childNodes[0];t.setAttribute("for","name"),t.textContent="Your Name",r.append(t,o),e(r.childNodes[1],{type:"text",name:"name",id:"name",placeholder:"Jhonny Cage"})})(),function(){const t=document.createElement("label"),o=document.createElement("input"),r=n.childNodes[1];t.setAttribute("for","phone"),t.textContent="Your Phone Number",r.append(t,o),e(r.childNodes[1],{type:"number",name:"phone",id:"phone",placeholder:"+12 00 99 882 12"})}(),function(){const t=document.createElement("label"),o=document.createElement("input"),r=n.childNodes[2];t.setAttribute("for","e-mail"),t.textContent="Your Email",r.append(t,o),e(r.childNodes[1],{type:"email",name:"e-mail",id:"e-mail",placeholder:"anything@gmail.com"})}(),function(){const t=document.createElement("label"),o=document.createElement("input"),r=n.childNodes[3];t.setAttribute("for","date"),t.textContent="Date",r.append(t,o),e(r.childNodes[1],{type:"date",name:"date",id:"date"})}(),function(){const t=n.childNodes[4],o=document.createElement("label"),r=document.createElement("textarea");o.setAttribute("for","complain"),o.textContent="Complain",t.append(o,r),e(t.childNodes[1],{name:"complain",id:"complain",cols:"30",rows:"7",placeholder:"I Like To Complain About...."})}()}()}))})()})();