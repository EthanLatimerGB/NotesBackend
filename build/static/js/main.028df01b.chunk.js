(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),u=n(14),i=n(2),l=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return r.a.createElement("li",{className:"notes"},e.content,r.a.createElement("button",{onClick:n},a))},m=n(3),s=n.n(m),f=function(){var t=s.a.get("/api/notes"),e={id:1e3,content:"This note is not saved to the server",data:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(e)}))},p=function(t){return s.a.post("/api/notes",t).then((function(t){return t.data}))},d=function(t,e){return s.a.put("".concat("/api/notes","/").concat(t),e).then((function(t){return t.data}))},v=function(t){var e=Object(a.useState)([]),n=Object(i.a)(e,2),o=n[0],c=n[1],m=Object(a.useState)("a new note..."),s=Object(i.a)(m,2),v=s[0],E=s[1],b=Object(a.useState)(!0),h=Object(i.a)(b,2),g=h[0],O=h[1],j=Object(a.useState)(null),S=Object(i.a)(j,2),k=S[0],y=S[1];Object(a.useEffect)((function(){f().then((function(t){return c(t)}))}),[]),console.log("render",o.length,"notes");var w=g?o:o.filter((function(t){return t.important})),N=function(t){var e=t.message;return null===e?null:r.a.createElement("div",{className:"error"},e)},I=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note application, designed and tested by Ethan"))};return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement(N,{message:k}),r.a.createElement("button",{onClick:function(){return O(!g)}},"show ",g?"important":"all"),r.a.createElement("ul",null,w.map((function(t){return r.a.createElement(l,{key:t.id,note:t,toggleImportance:function(){return function(t){var e=o.find((function(e){return e.id===t})),n=Object(u.a)({},e,{important:!e.important});d(t,n).then((function(e){c(o.map((function(n){return n.id!==t?n:e})))})).catch((function(t){y("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){y(null)}),5e3)}))}(t.id)}})}))),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:v,date:(new Date).toISOString(),important:Math.random()<.5,id:o.length+1};p(e).then((function(t){c(o.concat(t)),E("")}))}},r.a.createElement("input",{value:v,onChange:function(t){console.log(t.target.value),E(t.target.value)}}),r.a.createElement("button",{type:"submit"},"Save")),r.a.createElement(I,null))};n(37);c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.028df01b.chunk.js.map