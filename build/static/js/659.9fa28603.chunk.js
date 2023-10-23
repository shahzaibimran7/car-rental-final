"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[659],{5659:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(3433),i=t(9439),a=t(2791),c=t(1087),s=t(184);var o=function(e){var n=e.data,t=(e.carID,(0,a.useState)(!1)),r=(0,i.Z)(t,2),o=r[0],l=r[1];return(0,s.jsx)(s.Fragment,{children:n.map((function(e,n){return(0,s.jsxs)("div",{className:"box-cars",children:[(0,s.jsxs)("div",{className:"pick-car",children:[o&&(0,s.jsx)("span",{className:"loader"}),(0,s.jsx)("img",{style:{display:o?"none":"block"},src:e.image,alt:"car_img",onLoad:function(){return l(!1)}})]}),(0,s.jsxs)("div",{className:"pick-description",children:[(0,s.jsxs)("div",{className:"pick-description__price",children:[(0,s.jsxs)("span",{children:["$",e.price]}),"/ rent per day"]}),(0,s.jsxs)("div",{className:"pick-description__table",children:[(0,s.jsxs)("div",{className:"pick-description__table__col",children:[(0,s.jsx)("span",{children:"Mark"}),(0,s.jsx)("span",{children:e.brand})]}),(0,s.jsxs)("div",{className:"pick-description__table__col",children:[(0,s.jsx)("span",{children:"Doors"}),(0,s.jsx)("span",{children:e.doors})]}),(0,s.jsxs)("div",{className:"pick-description__table__col",children:[(0,s.jsx)("span",{children:"AC"}),(0,s.jsx)("span",{children:"yes"})]}),(0,s.jsxs)("div",{className:"pick-description__table__col",children:[(0,s.jsx)("span",{children:"Transmission"}),(0,s.jsx)("span",{children:e.transmission})]}),(0,s.jsxs)("div",{className:"pick-description__table__col",children:[(0,s.jsx)("span",{children:"Fuel"}),(0,s.jsx)("span",{children:e.fuel})]})]}),(0,s.jsx)(c.rU,{className:"cta-btn",to:"/models/".concat(e.id),children:"Reserve Now"})]})]},n)}))})},l=(t(4186),t(1020));var d=function(e){var n,t=e.cars,d=(0,a.useState)(null===t||void 0===t||null===(n=t[0])||void 0===n?void 0:n.name),p=(0,i.Z)(d,2),u=p[0],m=p[1],h=(0,a.useState)(null),v=(0,i.Z)(h,2),x=v[0],f=v[1];return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{className:"pick-section",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"pick-container",children:[(0,s.jsxs)("div",{className:"pick-container__title",children:[(0,s.jsx)("h3",{children:"Vehicle Models"}),(0,s.jsx)("h2",{children:"Our rental fleet"}),(0,s.jsx)("p",{children:"Choose from a variety of our amazing vehicles to rent for your next adventure or business trip"})]}),null!==t&&void 0!==t&&t.length?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"pick-container__car-content",children:[(0,s.jsx)("div",{className:"pick-box",style:{height:"335px",overflow:"auto"},children:null===t||void 0===t?void 0:t.map((function(e){return(0,s.jsx)("button",{className:"button ".concat((n=e.name,n===x?"colored-button":"")),onClick:function(){m(e.name),function(e){f(e)}(e.name)},children:e.name},e.id);var n}))}),null!==u&&(0,s.jsx)(o,{data:(0,r.Z)(null===t||void 0===t?void 0:t.filter((function(e){return e.name===u})))})]}),(0,s.jsx)("span",{style:{marginLeft:"50%",marginTop:"30px",display:"flex",fontSize:"medium"},children:(0,s.jsx)(c.rU,{to:"/models",children:"View All"})})]}):(0,s.jsx)("div",{className:"pick-container__car-content",children:(0,s.jsxs)("div",{style:{marginTop:"44px",marginLeft:"50%"},children:[(0,s.jsx)(l.Z,{color:"#2596be"}),(0,s.jsx)("h2",{style:{color:"#2596be"},children:"Loading..."})]})})]})})})})}},1020:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(2791),i={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function a(e){if("number"===typeof e)return{value:e,unit:"px"};var n,t=(e.match(/^[0-9.]*/)||"").toString();n=t.includes(".")?parseFloat(t):parseInt(t,10);var r=(e.match(/[^0-9]*$/)||"").toString();return i[r]?{value:n,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(n,"px.")),{value:n,unit:"px"})}function c(e){var n=a(e);return"".concat(n.value).concat(n.unit)}var s=function(e,n,t){var r="react-spinners-".concat(e,"-").concat(t);if("undefined"==typeof window||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var a=i.sheet,c="\n    @keyframes ".concat(r," {\n      ").concat(n,"\n    }\n  ");return a&&a.insertRule(c,0),r},o=function(){return o=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},o.apply(this,arguments)},l=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]])}return t},d=s("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}","right"),p=s("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}","left");var u=function(e){var n=e.loading,t=void 0===n||n,i=e.color,s=void 0===i?"#000000":i,u=e.speedMultiplier,m=void 0===u?1:u,h=e.cssOverride,v=void 0===h?{}:h,x=e.size,f=void 0===x?60:x,j=l(e,["loading","color","speedMultiplier","cssOverride","size"]),g=a(f),_=g.value,b=g.unit,y=o({display:"inherit",width:c(f),height:c(f),position:"relative"},v),k=function(e){return{position:"absolute",top:"0",left:"0",width:"".concat(_).concat(b),height:"".concat(_).concat(b),border:"".concat(_/10).concat(b," solid ").concat(s),opacity:"0.4",borderRadius:"100%",animationFillMode:"forwards",perspective:"800px",animation:"".concat(1===e?d:p," ").concat(2/m,"s 0s infinite linear")}};return t?r.createElement("span",o({style:y},j),r.createElement("span",{style:k(1)}),r.createElement("span",{style:k(2)})):null}}}]);
//# sourceMappingURL=659.9fa28603.chunk.js.map