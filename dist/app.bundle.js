(()=>{"use strict";var e={523:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(354),r=n.n(i),s=n(314),a=n.n(s)()(r());a.push([e.id,".row {\n  height: 50px;\n  width: 50%;\n  display: flex;\n}\n\n.cell {\n  width: 50px;\n  height: 100%;\n  border: 1px black solid;\n}\n\n.filled {\n  background: black;\n  color: white;\n}\n\n.is-ship {\n  background: green;\n  color: white;\n}\n\n.is-not-ship {\n  background: red;\n  color: white;\n}\n","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAAA;EACE,YAAY;EACZ,UAAU;EACV,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,YAAY;AACd",sourcesContent:[".row {\n  height: 50px;\n  width: 50%;\n  display: flex;\n}\n\n.cell {\n  width: 50px;\n  height: 100%;\n  border: 1px black solid;\n}\n\n.filled {\n  background: black;\n  color: white;\n}\n\n.is-ship {\n  background: green;\n  color: white;\n}\n\n.is-not-ship {\n  background: red;\n  color: white;\n}\n"],sourceRoot:""}]);const o=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,r,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);i&&a[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},354:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),s="/*# ".concat(r," */");return[t].concat([s]).join("\n")}return[t].join("\n")}},72:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var s={},a=[],o=0;o<e.length;o++){var c=e[o],l=i.base?c[0]+i.base:c[0],d=s[l]||0,h="".concat(l," ").concat(d);s[l]=d+1;var p=n(h),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var f=r(u,i);i.byIndex=o,t.splice(o,0,{identifier:h,updater:f,references:1})}a.push(h)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var s=i(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var o=n(s[a]);t[o].references--}for(var c=i(e,r),l=0;l<s.length;l++){var d=n(s[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=c}}},659:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={id:i,exports:{}};return e[i](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;class i{#e;#t;#n;#i;constructor(e,t){this.#e=e,this.#t=0,this.#n=!1,this.#i=t}hit=()=>{this.#t+=1,this.#t===this.#e+1&&(this.#n=!0)};isSunk=()=>this.#n;getHits=()=>this.#t;getName=()=>this.#i;getLength=()=>this.#e}class r{#r;#s;#a;#o;#c;constructor(e=10){this.#a=[],this.#o=[],this.#r=e,this.#s=Array(e).fill().map(((t,n)=>Array(e).fill(null))),this.#c=[]}placeShip=(e,t,n,i)=>{if(this.canPlaceShip(e,t,n,i)){for(let r=0;r<=n.getLength();r++)i?this.#s[e+r][t]=n:this.#s[e][t+r]=n;return this.#a.push(n),!0}return!1};canPlaceShip=(e,t,n,r)=>{if(r?e+n.getLength()>this.#r:t+n.getLength()>this.#r)return!1;if(this.#s[e][t]instanceof i)return!1;for(let s=0;s<=n.getLength();s++)if(r?this.#s[e+s][t]instanceof i:this.#s[e][t+s]instanceof i)return!1;return!0};receiveAttack=(e,t)=>this.#s[e][t]instanceof i?(this.#s[e][t].hit(),this.#c.push([e,t]),!0):(this.#o.push([e,t]),!1);isAllSunk=()=>this.#a.every((e=>e.isSunk()));getBoard=()=>this.#s;getShips=()=>this.#a;getMissedAttacks=()=>this.#o;getAllHists=()=>this.#c;getSize=()=>this.#r}class s{#i;constructor(e){this.#i=e,this.gameboard=new r}attack=(e,t,n)=>e.receiveAttack(t,n)}var a=n(72),o=n.n(a),c=n(825),l=n.n(c),d=n(659),h=n.n(d),p=n(56),u=n.n(p),f=n(540),A=n.n(f),m=n(113),g=n.n(m),v=n(523),b={};b.styleTagTransform=g(),b.setAttributes=u(),b.insert=h().bind(null,"head"),b.domAPI=l(),b.insertStyleElement=A(),o()(v.A,b),v.A&&v.A.locals&&v.A.locals;let y=new s("Yesid"),w=new s("Computer"),C=new i(5,"Carrier"),E=new i(4,"Battleship"),k=new i(3,"Destroyer"),S=new i(3,"Submarine"),x=new i(2,"Patrol"),L=new i(5),B=new i(4),Y=new i(3),M=new i(3),j=new i(2);var z,T;(z=w.gameboard).placeShip(0,0,L,!1),z.placeShip(0,1,Y,!0),z.placeShip(1,1,B,!0),z.placeShip(2,1,M,!1),z.placeShip(2,2,j,!0),(T=y.gameboard).placeShip(0,0,C,!0),T.placeShip(0,1,k,!1),T.placeShip(1,1,E,!1),T.placeShip(2,1,S,!0),T.placeShip(2,2,x,!1);let H=document.body,I=document.createElement("div");H.appendChild(I);for(let e=0;e<y.gameboard.getSize();e++){const t=document.createElement("div");t.classList.add("row"),t.id=e,I.appendChild(t);for(let n=0;n<y.gameboard.getSize();n++){const r=document.createElement("div");r.id=n,r.classList.add("cell"),t.appendChild(r),r.addEventListener("click",(()=>{y.gameboard.receiveAttack(e,n),y.gameboard.getBoard()[e][n]instanceof i?r.classList.add("is-ship"):r.classList.add("is-not-ship")}))}}})();
//# sourceMappingURL=app.bundle.js.map