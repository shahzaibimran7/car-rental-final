"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[624],{5624:function(n,t,e){e.r(t);var r=e(4165),c=e(5861),i=e(9439),a=e(2791),u=e(96),o=e(4186),s=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,i.Z)(n,2),e=t[0],d=t[1],l=(0,a.useState)([]),f=(0,i.Z)(l,2),h=f[0],p=f[1];(0,a.useEffect)((function(){var n=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.hd)();case 2:t=n.sent,d(t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,a.useEffect)((function(){var n=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.pX)();case 2:t=n.sent,p(t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]);var x=function(n){return new Date(n).toLocaleDateString("en-UK")},v=null===e||void 0===e?void 0:e.filter((function(n){return"pending"===n.status||"PENDING"===n.status})),j=null===h||void 0===h?void 0:h.map((function(n){return{id:n.id,name:n.name}}));return(0,s.jsx)("div",{className:"table-container",children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Model"}),(0,s.jsx)("th",{children:"Client Name"}),(0,s.jsx)("th",{children:"Client Email"}),(0,s.jsx)("th",{children:"Start Date"}),(0,s.jsx)("th",{children:"End Date"}),(0,s.jsx)("th",{children:"Client Contact Number"}),(0,s.jsx)("th",{children:"Client Address"}),(0,s.jsx)("th",{children:"Drop-off Location"}),(0,s.jsx)("th",{children:"License Number"}),(0,s.jsx)("th",{children:"End Booking"})]})}),(0,s.jsx)("tbody",{children:null===v||void 0===v?void 0:v.map((function(n){var t;return(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{children:[" ",(null===j||void 0===j||null===(t=j.find((function(t){return t.id===n.carId})))||void 0===t?void 0:t.name)||"N/A"]}),(0,s.jsx)("td",{children:n.firstName+" "+n.lastName}),(0,s.jsx)("td",{children:n.email}),(0,s.jsx)("td",{children:x(n.pickupDate)}),(0,s.jsx)("td",{children:x(n.dropOffDate)}),(0,s.jsx)("td",{children:n.phoneNumber}),(0,s.jsx)("td",{children:n.address}),(0,s.jsx)("td",{children:n.location}),(0,s.jsx)("td",{children:n.licenseNumber}),(0,s.jsx)("td",{children:(0,s.jsx)("button",{title:"End Booking",onClick:(0,c.Z)((0,r.Z)().mark((function t(){var e,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.aX)(n.id);case 2:return t.next=4,(0,u.hd)();case 4:e=t.sent,c=e.data.filter((function(n){return"pending"===n.status||"PENDING"===n.status})),d(c);case 7:case"end":return t.stop()}}),t)}))),children:(0,s.jsx)("i",{className:"fa fa-archive","aria-hidden":"true",style:{color:"red",cursor:"pointer",fontSize:"12px"}})})})]})}))})]})})}},96:function(n,t,e){e.d(t,{aX:function(){return a},bk:function(){return c},hd:function(){return i}});var r=e(1243).Z.create({baseURL:"https://app.fiftyfivecarrental.com/booking/"}),c=function(n){return r.post("createBooking",n)},i=function(){return r.get("getAllBooking")},a=function(n){return r.post("markBookingDone/".concat(n))}},4186:function(n,t,e){e.d(t,{Jl:function(){return u},NN:function(){return s},_o:function(){return a},aH:function(){return l},fH:function(){return o},pX:function(){return i},uF:function(){return d}});var r=e(1243),c=r.Z.create({baseURL:"https://app.fiftyfivecarrental.com/car/"}),i=function(){return c.get("getAllCars")},a=function(n){return c.get("getAllCars".concat(n))},u=function(n){return c.get("getCarsByBrand/".concat(n))},o=function(n){return c.get("getAllDetails/".concat(n))},s=function(n){return c.post("createCar",n)},d=function(n){return c.post("deleteCarById/".concat(n))},l=function(n){return r.Z.post("https://app.fiftyfivecarrental.com/carImage/uploadImage",n)}}}]);
//# sourceMappingURL=624.f5aaea20.chunk.js.map