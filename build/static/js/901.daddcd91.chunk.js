"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[901],{8901:function(e,r,s){s.r(r),s.d(r,{default:function(){return f}});s(2791);var n=s(4165),a=s(5861),i=s(2506),o=s(6727),l=s(4186),c=s(7984),t=s(184),d=o.Ry().shape({name:o.Z_().required("Car Name is required"),price:o.Rx().required("Price is required"),brand:o.Z_().required("Brand is required"),transmission:o.Z_().required("Transmission is required"),fuel:o.Z_().required("Fuel Type is required"),doors:o.Rx().required("Number of Doors is required"),categories:o.IX().required("Category is required")}),u=["Mercedes","BMW","Audi","Lexus","Tesla","Bentley","Toyota","Cadillac Escalade","Chevrolet","Ferrari","Ford","GMC","Jeep","Mini Cooper","Nissan","Porsche","Range Rover","Rolls Royce","KIA","Maserati","Yachts","Lamborghini"],m=["SUVs","Luxury Cars","Sports Cars","Hybrid Cars","Sedans","Electric Cars"],p=["Automatic","Manual"],h=["Petrol","Diesel","Electric"];var x=function(){var e=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,s){var a,i,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.target.files[0],i={maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!0},e.next=4,(0,c.Z)(a,i);case 4:o=e.sent,console.log(o),s("image",o);case 7:case"end":return e.stop()}}),e)})));return function(r,s){return e.apply(this,arguments)}}(),r=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var s,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a in s=new FormData,r)s.append(a,r[a]);return console.log("FORMDATA",s.get("image")),e.next=5,(0,l.NN)(s);case 5:200===e.sent.status?(alert("Car Created Successfully"),window.location.reload()):alert("Something went wrong");case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,t.jsx)("div",{className:"form-container",children:(0,t.jsx)(i.J9,{initialValues:{name:"",image:null,price:"",brand:"",transmission:"",fuel:"",doors:"",categories:[]},validationSchema:d,onSubmit:r,children:function(){return(0,t.jsxs)(i.l0,{className:"signup-form",children:[(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"name",children:"Car Name:"}),(0,t.jsx)(i.gN,{type:"text",name:"name",id:"carName"}),(0,t.jsx)(i.Bc,{name:"name",component:"div",className:"error"})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"image",children:"Image:"}),(0,t.jsx)(i.gN,{name:"image",children:function(r){var s=r.form,n=(r.field,s.setFieldValue);return(0,t.jsx)("input",{type:"file",required:!0,onChange:function(r){return e(r,n)}})}})," ",(0,t.jsx)(i.Bc,{name:"image",className:"error"})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"price",children:"Price:"}),(0,t.jsx)(i.gN,{type:"number",name:"price",id:"price"}),(0,t.jsx)(i.Bc,{name:"price",component:"div",className:"error"})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"brand",children:"Brand:"}),(0,t.jsxs)(i.gN,{as:"select",name:"brand",id:"brand",children:[(0,t.jsx)("option",{value:"",children:"Select Brand"}),u.map((function(e){return(0,t.jsx)("option",{value:e,children:e},e)}))]}),(0,t.jsx)(i.Bc,{name:"brand",component:"div",className:"error"})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"categories",children:"Categories:"}),(0,t.jsx)(i.gN,{as:"select",name:"categories",id:"categories",multiple:!0,children:m.map((function(e){return(0,t.jsx)("option",{value:e,children:e},e)}))}),(0,t.jsx)(i.Bc,{name:"categories",component:"div",className:"error"})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"transmission",children:"Transmission:"}),(0,t.jsxs)(i.gN,{as:"select",name:"transmission",id:"transmission",children:[(0,t.jsx)("option",{value:"",children:"Select Transmission"}),p.map((function(e){return(0,t.jsx)("option",{value:e,children:e},e)}))]}),(0,t.jsx)(i.Bc,{name:"transmission",component:"div",className:"error"})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"fuel",children:"Fuel Type:"}),(0,t.jsxs)(i.gN,{as:"select",name:"fuel",id:"fuelType",children:[(0,t.jsx)("option",{value:"",children:"Select Fuel Type"}),h.map((function(e){return(0,t.jsx)("option",{value:e,children:e},e)}))]}),(0,t.jsx)(i.Bc,{name:"fuel",component:"div",className:"error"})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"doors",children:"Number of Doors:"}),(0,t.jsx)(i.gN,{type:"number",name:"doors",id:"doors"}),(0,t.jsx)(i.Bc,{name:"doors",component:"div",className:"error"})]}),(0,t.jsx)("div",{className:"form-group",children:(0,t.jsx)("button",{type:"submit",children:"Create"})})]})}})})},f=function(){return(0,t.jsx)("div",{children:(0,t.jsx)(x,{})})}}}]);
//# sourceMappingURL=901.daddcd91.chunk.js.map