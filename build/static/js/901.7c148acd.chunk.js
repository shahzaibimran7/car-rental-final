"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[901],{8901:function(e,r,n){n.r(r),n.d(r,{default:function(){return x}});n(2791);var s=n(4165),a=n(5861),i=n(2506),o=n(6727),l=n(4186),t=n(7984),c=n(184),u=o.Ry().shape({name:o.Z_().required("Car Name is required"),price:o.Rx().required("Price is required"),brand:o.Z_().required("Brand is required"),transmission:o.Z_().required("Transmission is required"),fuel:o.Z_().required("Fuel Type is required"),doors:o.Rx().required("Number of Doors is required")}),d=["Mercedes","BMW","Audi","Lexus","Tesla","Bentley","Toyota","Cadillac Escalade","Chevrolet","Ferrari","Ford","GMC","Jeep","Mini Cooper","Nissan","Porsche","Range Rover","Rolls Royce","KIA","Maserati","Yachts","Lamborghini"],m=["Automatic","Manual"],p=["Petrol","Diesel","Electric"];var h=function(){var e=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r,n){var a,i,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.target.files[0],i={maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!0},e.next=4,(0,t.Z)(a,i);case 4:o=e.sent,console.log(o),n("image",o);case 7:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),r=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r){var n,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a in n=new FormData,r)n.append(a,r[a]);return console.log("FORMDATA",n.get("image")),e.next=5,(0,l.NN)(n);case 5:200===e.sent.status?(alert("Car Created Successfully"),window.location.reload()):alert("Something went wrong");case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,c.jsx)("div",{className:"form-container",children:(0,c.jsx)(i.J9,{initialValues:{name:"",image:null,price:"",brand:"",transmission:"",fuel:"",doors:""},validationSchema:u,onSubmit:r,children:function(){return(0,c.jsxs)(i.l0,{className:"signup-form",children:[(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("label",{htmlFor:"name",children:"Car Name:"}),(0,c.jsx)(i.gN,{type:"text",name:"name",id:"carName"}),(0,c.jsx)(i.Bc,{name:"name",component:"div",className:"error"})]}),(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("label",{htmlFor:"image",children:"Image:"}),(0,c.jsx)(i.gN,{name:"image",children:function(r){var n=r.form,s=(r.field,n.setFieldValue);return(0,c.jsx)("input",{type:"file",required:!0,onChange:function(r){return e(r,s)}})}})," ",(0,c.jsx)(i.Bc,{name:"image",className:"error"})]}),(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("label",{htmlFor:"price",children:"Price:"}),(0,c.jsx)(i.gN,{type:"number",name:"price",id:"price"}),(0,c.jsx)(i.Bc,{name:"price",component:"div",className:"error"})]}),(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("label",{htmlFor:"brand",children:"Brand:"}),(0,c.jsxs)(i.gN,{as:"select",name:"brand",id:"brand",children:[(0,c.jsx)("option",{value:"",children:"Select Brand"}),d.map((function(e){return(0,c.jsx)("option",{value:e,children:e},e)}))]}),(0,c.jsx)(i.Bc,{name:"brand",component:"div",className:"error"})]}),(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("label",{htmlFor:"transmission",children:"Transmission:"}),(0,c.jsxs)(i.gN,{as:"select",name:"transmission",id:"transmission",children:[(0,c.jsx)("option",{value:"",children:"Select Transmission"}),m.map((function(e){return(0,c.jsx)("option",{value:e,children:e},e)}))]}),(0,c.jsx)(i.Bc,{name:"transmission",component:"div",className:"error"})]}),(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("label",{htmlFor:"fuel",children:"Fuel Type:"}),(0,c.jsxs)(i.gN,{as:"select",name:"fuel",id:"fuelType",children:[(0,c.jsx)("option",{value:"",children:"Select Fuel Type"}),p.map((function(e){return(0,c.jsx)("option",{value:e,children:e},e)}))]}),(0,c.jsx)(i.Bc,{name:"fuel",component:"div",className:"error"})]}),(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("label",{htmlFor:"doors",children:"Number of Doors:"}),(0,c.jsx)(i.gN,{type:"number",name:"doors",id:"doors"}),(0,c.jsx)(i.Bc,{name:"doors",component:"div",className:"error"})]}),(0,c.jsx)("div",{className:"form-group",children:(0,c.jsx)("button",{type:"submit",children:"Create"})})]})}})})},x=function(){return(0,c.jsx)("div",{children:(0,c.jsx)(h,{})})}}}]);
//# sourceMappingURL=901.7c148acd.chunk.js.map