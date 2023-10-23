"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[384],{3384:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(1413),o=n(4165),s=n(3433),i=n(5861),a=n(9439),l=n(2791),c=n(7689),d=n(1087),h=n(1020),u=function(e,t){return u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},u(e,t)};var p=function(){return p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},p.apply(this,arguments)};var f="Pixel",m="Percent",v={unit:m,value:.8};function g(e){return"number"===typeof e?{unit:m,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:f,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:m,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),v):(console.warn("scrollThreshold should be string or number"),v)}var x=function(e){function t(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){n.lastScrollTop||(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){n.dragging&&(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")}))},n.onScrollListener=function(e){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(e)}),0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(t,n.props.scrollThreshold):n.isElementAtBottom(t,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},n.throttledOnScrollListener=function(e,t,n,r){var o,s=!1,i=0;function a(){o&&clearTimeout(o)}function l(){var l=this,c=Date.now()-i,d=arguments;function h(){i=Date.now(),n.apply(l,d)}s||(r&&!o&&h(),a(),void 0===r&&c>e?h():!0!==t&&(o=setTimeout(r?function(){o=void 0}:h,void 0===r?e-c:e)))}return"boolean"!==typeof t&&(r=n,n=t,t=void 0),l.cancel=function(){a(),s=!0},l}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(e,t){function n(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?p(p({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,r=g(t);return r.unit===f?e.scrollTop<=r.value+n-e.scrollHeight+1:e.scrollTop<=r.value/100+n-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,r=g(t);return r.unit===f?e.scrollTop+n>=e.scrollHeight-r.value:e.scrollTop+n>=r.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=p({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),r=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return l.createElement("div",{style:r,className:"infinite-scroll-component__outerdiv"},l.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&l.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},l.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(l.Component),j=x,y=n(4186),b=n(642),_=n(3366),w=n(184);var N=function(){var e=(0,c.UO)().brand,t=(0,l.useState)(!1),n=(0,a.Z)(t,2),u=n[0],p=(n[1],(0,l.useState)([])),f=(0,a.Z)(p,2),m=f[0],v=f[1],g=(0,l.useState)(null),x=(0,a.Z)(g,2),N=x[0],E=x[1],S=(0,l.useState)(!1),T=(0,a.Z)(S,2),L=T[0],k=T[1],O=(0,l.useState)(null),D=(0,a.Z)(O,2),C=D[0],Z=D[1],R=(0,l.useState)(null),Y=(0,a.Z)(R,2),M=Y[0],P=Y[1],F=(0,l.useRef)(null),A=function(){var t=(0,i.Z)((0,o.Z)().mark((function t(){var n,r,i,a,l;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!L){t.next=2;break}return t.abrupt("return");case 2:if(k(!0),n=N?N.nextPage:null,!e){t.next=21;break}return t.prev=5,console.log("inside the brands api"),t.next=9,(0,y.Jl)(e);case 9:r=t.sent,i=r.data,v((0,s.Z)(i)),k(!1),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(5),console.error("Error loading more cars:",t.t0),k(!1);case 19:t.next=36;break;case 21:return t.prev=21,console.log("inside the all cars api"),t.next=25,(0,y._o)(n?"?page=".concat(n):"");case 25:a=t.sent,l=a.data.cars,v([].concat((0,s.Z)(m),(0,s.Z)(l))),E({page:a.data.page,nextPage:a.data.nextPage}),k(!1),t.next=36;break;case 32:t.prev=32,t.t1=t.catch(21),console.error("Error loading more cars:",t.t1),k(!1);case 36:case"end":return t.stop()}}),t,null,[[5,15],[21,32]])})));return function(){return t.apply(this,arguments)}}();(0,l.useEffect)((function(){A()}),[e]),(0,l.useEffect)((function(){M&&Z((0,r.Z)((0,r.Z)({},C),{},{carId:M}))}),[M]),(0,l.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.aH)(t);case 2:201===e.sent.status&&(alert("Image uploaded successfully"),window.location.reload());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(C&&C.carId){var t=new FormData;t.append("image",C.image),t.append("carId",C.carId),e(t)}}),[C]);var B="ADMIN"===localStorage.getItem("role");return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)("section",{className:"models-section",children:[(0,w.jsx)(_.Z,{name:"Vehicle Models"}),u?(0,w.jsx)("div",{style:{marginTop:"44px",marginLeft:"50%"},children:(0,w.jsx)(h.Z,{color:"#2596be"})}):(0,w.jsx)("div",{className:"container",children:(0,w.jsx)(j,{dataLength:m.length,next:A,hasMore:!(null===N||void 0===N||!N.nextPage),loader:L?(0,w.jsxs)("div",{style:{marginLeft:"50%"},children:[(0,w.jsx)(h.Z,{color:"#2596be"}),(0,w.jsxs)("h2",{style:{color:"#2596be",fontWeight:"normal"},children:[" ","Loading..."]})]}):null,style:{overflow:"hidden"},children:m.length?(0,w.jsx)("div",{className:"models-div",children:m.map((function(e,t){return(0,w.jsx)("div",{className:"models-div__box",style:{borderRadius:"38px",height:"100%"},children:(0,w.jsxs)("div",{className:"models-div__box__img",children:[(0,w.jsx)("img",{src:e.image,alt:"car_img",className:"car-img"}),(0,w.jsxs)("div",{className:"models-div__box__descr",children:[(0,w.jsxs)("div",{className:"models-div__box__descr__name-price",children:[(0,w.jsxs)("div",{className:"models-div__box__descr__name-price__name",children:[(0,w.jsx)("p",{children:e.name}),(0,w.jsxs)("span",{children:[(0,w.jsx)("i",{className:"fa-solid fa-star"}),(0,w.jsx)("i",{className:"fa-solid fa-star"}),(0,w.jsx)("i",{className:"fa-solid fa-star"}),(0,w.jsx)("i",{className:"fa-solid fa-star"}),(0,w.jsx)("i",{className:"fa-solid fa-star"})]})]}),(0,w.jsx)("div",{className:"models-div__box__descr__name-price__price",children:(0,w.jsxs)("h4",{children:["$",e.price,"/ day"]})})]}),(0,w.jsxs)("div",{className:"models-div__box__descr__name-price__details",children:[(0,w.jsxs)("span",{title:"Brand",children:[(0,w.jsx)("i",{className:"fa-solid fa-car-side"})," \xa0"," ",e.brand]}),(0,w.jsxs)("span",{title:"Doors",children:[(0,w.jsx)("i",{className:"fa-solid fa-door-open"}),"\xa0"," ",e.doors,"/5"]}),(0,w.jsxs)("span",{title:"Gear Shift",children:[(0,w.jsx)("i",{className:"fa-solid fa-gear"}),e.transmission]}),(0,w.jsxs)("span",{title:"Fuel Type",children:[(0,w.jsx)("i",{className:"fa-solid fa-gas-pump"}),"\xa0"," ",e.fuel]})]}),B?(0,w.jsxs)("div",{style:{display:"flex",gap:"10px",marginLeft:"5rem"},children:[(0,w.jsxs)("div",{className:"models-div__box__descr__name-price__btn",title:"Upload Additional Image",onClick:function(){F.current.click()},children:[(0,w.jsx)("input",{type:"file",ref:F,style:{display:"none"},onChange:function(t){!function(e){var t=e.target.files[0];t&&Z({image:t})}(t),P(e.id)}}),(0,w.jsx)("i",{className:"fa fa-upload","aria-hidden":"true",id:"additional"})]}),(0,w.jsx)("div",{className:"models-div__box__descr__name-price__btn",title:"Delete Car",onClick:function(){window.confirm("Are you sure?")&&((0,y.uF)(e.id),window.location.reload())},children:(0,w.jsx)("i",{className:"fa fa-archive","aria-hidden":"true",id:"additional"})})]}):(0,w.jsx)(d.rU,{to:"/model/".concat(e.id),className:"models-div__box__descr__name-price__btn",children:"Book Ride"})]})]})},t)}))}):(0,w.jsx)("div",{style:{marginTop:"44px",marginLeft:"50%"},children:(0,w.jsx)(h.Z,{color:"#2596be"})})})}),(0,w.jsxs)("div",{className:"book-banner",children:[(0,w.jsx)("div",{className:"book-banner__overlay"}),(0,w.jsx)("div",{className:"container",children:(0,w.jsxs)("div",{className:"text-content",children:[(0,w.jsx)("h2",{children:"Book a car by getting in touch with us"}),(0,w.jsxs)("span",{children:[(0,w.jsx)("i",{className:"fa-solid fa-phone"}),(0,w.jsx)("h3",{children:"(971) 54 567 5505"})]})]})})]}),(0,w.jsx)(b.Z,{})]})})}},642:function(e,t,n){var r=n(1087),o=n(184);t.Z=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("footer",{children:[(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"footer-content",children:[(0,o.jsxs)("ul",{className:"footer-content__1",children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("span",{children:"55 Car Rental"})," LLC"]}),(0,o.jsx)("li",{children:"We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs."}),(0,o.jsx)("li",{style:{},children:(0,o.jsxs)(r.rU,{to:"",children:[(0,o.jsx)("i",{className:"fa-solid fa-phone",style:{color:"black"},onClick:function(){window.open("tel:971545505407","_blank")}})," ","\xa0 (+971) 54 550 5358"]})}),(0,o.jsx)("li",{children:(0,o.jsxs)(r.rU,{to:"",children:[(0,o.jsx)("i",{className:"fa fa-whatsapp",style:{color:"#25D366"},onClick:function(){window.open("https://wa.me/971545505358","_blank")}})," ","\xa0 (+971) 54 550 5358"]})}),(0,o.jsx)("li",{children:(0,o.jsxs)(r.rU,{to:"",children:[(0,o.jsx)("i",{className:"fa-solid fa-envelope",onClick:function(){window.open("mailto:fiftyfivecarrental@gmail.com","_blank")}}),"\xa0 fiftyfivecarrental@gmail.com"]})})]}),(0,o.jsxs)("ul",{className:"footer-content-mid1",children:[(0,o.jsx)("li",{children:(0,o.jsx)("h2",{children:"Collections"})}),(0,o.jsx)("li",{children:"SUVs"}),(0,o.jsx)("li",{children:"Luxury Cars"}),(0,o.jsx)("li",{children:"Sports Cars"}),(0,o.jsx)("li",{children:"Hybrid Cars"}),(0,o.jsx)("li",{children:"Sedan Cars"}),(0,o.jsx)("li",{children:"Electric Cars"}),(0,o.jsx)("li",{children:"All Cars"})]}),(0,o.jsxs)("ul",{className:"footer-content-mid2",children:[(0,o.jsx)("li",{children:(0,o.jsx)("h2",{children:"Brands"})}),(0,o.jsx)("li",{children:"Ferrari"}),(0,o.jsx)("li",{children:"Audi"}),(0,o.jsx)("li",{children:"Ford"}),(0,o.jsx)("li",{children:"Bentley"}),(0,o.jsx)("li",{children:"Porsche"}),(0,o.jsx)("li",{children:"Rolls-Royce"}),(0,o.jsx)("li",{children:"Range Rover"}),(0,o.jsx)("li",{children:"Mercedes-Benz"}),(0,o.jsx)("li",{children:"Lamborghini"})]}),(0,o.jsxs)("ul",{className:"footer-content__2",children:[(0,o.jsx)("li",{children:"Working Hours"}),(0,o.jsx)("li",{children:"Mon - Sun:24/7"})]})]})}),(0,o.jsxs)("div",{className:"linksContainer",children:[(0,o.jsx)("span",{className:"links",children:(0,o.jsx)(r.rU,{to:"https://www.youtube.com/@FIFTYFIVECARRENTAL",target:"_blank",children:(0,o.jsx)("i",{className:"fa fa-youtube fa-2xl"})})}),(0,o.jsx)("span",{className:"links",children:(0,o.jsx)(r.rU,{to:"https://twitter.com/FiftyFiveCar",target:"_blank",children:(0,o.jsx)("i",{className:"fa fa-twitter fa-2xl"})})}),(0,o.jsx)("span",{className:"links",children:(0,o.jsx)(r.rU,{to:"https://www.facebook.com/profile.php?id=61551860040920",target:"_blank",children:(0,o.jsx)("i",{className:"fa fa-facebook fa-2xl"})})}),(0,o.jsx)("span",{className:"links",children:(0,o.jsx)(r.rU,{to:"https://www.instagram.com/fiftyfivecarrental/",target:"_blank",children:(0,o.jsx)("i",{className:"fa fa-instagram fa-2xl"})})}),(0,o.jsx)("span",{className:"links",children:(0,o.jsx)(r.rU,{to:" https://www.pinterest.com/fiftyfivecarrental/",target:"_blank",children:(0,o.jsx)("i",{className:"fa fa-pinterest fa-2xl"})})})]})]})})}},3366:function(e,t,n){var r=n(1087),o=n(184);t.Z=function(e){var t=e.name;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("section",{className:"hero-pages",children:[(0,o.jsx)("div",{className:"hero-pages__overlay"}),(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"hero-pages__text",children:[(0,o.jsx)("h3",{children:t}),(0,o.jsxs)("p",{children:[(0,o.jsx)(r.rU,{to:"/",children:"Home"})," / ",t]})]})})]})})}},4186:function(e,t,n){n.d(t,{Jl:function(){return a},NN:function(){return c},_o:function(){return i},aH:function(){return h},fH:function(){return l},pX:function(){return s},uF:function(){return d}});var r=n(1243),o=r.Z.create({baseURL:"https://app.fiftyfivecarrental.com/car/"}),s=function(){return o.get("getAllCars")},i=function(e){return o.get("getAllCars".concat(e))},a=function(e){return o.get("getCarsByBrand/".concat(e))},l=function(e){return o.get("getAllDetails/".concat(e))},c=function(e){return o.post("createCar",e)},d=function(e){return o.post("deleteCarById/".concat(e))},h=function(e){return r.Z.post("https://app.fiftyfivecarrental.com/carImage/uploadImage",e)}},1020:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(2791),o={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function s(e){if("number"===typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var r=(e.match(/[^0-9]*$/)||"").toString();return o[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}function i(e){var t=s(e);return"".concat(t.value).concat(t.unit)}var a=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return r;var o=document.createElement("style");document.head.appendChild(o);var s=o.sheet,i="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return s&&s.insertRule(i,0),r},l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},d=a("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}","right"),h=a("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}","left");var u=function(e){var t=e.loading,n=void 0===t||t,o=e.color,a=void 0===o?"#000000":o,u=e.speedMultiplier,p=void 0===u?1:u,f=e.cssOverride,m=void 0===f?{}:f,v=e.size,g=void 0===v?60:v,x=c(e,["loading","color","speedMultiplier","cssOverride","size"]),j=s(g),y=j.value,b=j.unit,_=l({display:"inherit",width:i(g),height:i(g),position:"relative"},m),w=function(e){return{position:"absolute",top:"0",left:"0",width:"".concat(y).concat(b),height:"".concat(y).concat(b),border:"".concat(y/10).concat(b," solid ").concat(a),opacity:"0.4",borderRadius:"100%",animationFillMode:"forwards",perspective:"800px",animation:"".concat(1===e?d:h," ").concat(2/p,"s 0s infinite linear")}};return n?r.createElement("span",l({style:_},x),r.createElement("span",{style:w(1)}),r.createElement("span",{style:w(2)})):null}},4942:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(9142);function o(e,t,n){return(t=(0,r.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1413:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(4942);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=384.8d5c7384.chunk.js.map