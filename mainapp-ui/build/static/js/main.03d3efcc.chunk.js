(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{38:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(32),r=c.n(a),i=(c(38),c(14),c(11)),l=c.n(i),o=c(18),j=c(17),d=c(9),h=c.n(d),u=c(8),b=c(66),p=c(0),O=h.a.create({baseURL:"http://127.0.0.1:8000/api/"});var x=function(){h.a.defaults.xsrfHeaderName="X-CSRFTOKEN",h.a.defaults.xsrfCookieName="XCSRF-TOKEN";var e=b.a,t=Object(n.useState)([]),c=Object(j.a)(t,2),s=c[0],a=c[1];function r(){return(r=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O({method:"DELETE",url:"/users/".concat(t)}).then((function(e){console.log(e)})).catch((function(e){console.log(e.response)}));case 2:alert("User deleted!");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=Object(o.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.post("/users/",{username:"marko",group:"2"},{headers:{"X-CSRFTOKEN":e}}).then((function(e){console.log(e)})).catch((function(e){console.log(e.response)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/users/").then((function(e){a(e.data)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("table",{className:"table",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"Id"}),Object(p.jsx)("th",{scope:"col",children:"User nickname"}),Object(p.jsx)("th",{scope:"col",children:"Created"}),Object(p.jsx)("th",{scope:"col",children:"Group"})]})}),Object(p.jsx)("tbody",{children:s.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row",children:e.id}),Object(p.jsx)("td",{children:e.username}),Object(p.jsx)("td",{children:e.created}),Object(p.jsx)("td",{children:e.group.name}),Object(p.jsx)("td",{children:Object(p.jsx)(u.b,{className:"btn btn-danger",onClick:function(){return function(e){return r.apply(this,arguments)}(e.id)},children:"Delete"})}),Object(p.jsx)("td",{children:Object(p.jsx)(u.b,{className:"btn",onClick:function(){return function(){return i.apply(this,arguments)}()},children:"Create"})})]})}))})]})})};var f=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(p.jsx)("div",{className:"container-fluid",children:Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(p.jsxs)("ul",{className:"navbar-nav",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(u.b,{className:"nav-link",to:{pathname:"/users"},children:"Users"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(u.b,{className:"nav-link",to:{pathname:"/groups"},children:"Groups"})})]})})})})})};var m=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){h()({method:"GET",url:"http://127.0.0.1:8000/api/groups/"}).then((function(e){s(e.data)}))}),[]),Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("table",{className:"table",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"Id"}),Object(p.jsx)("th",{scope:"col",children:"Name"}),Object(p.jsx)("th",{scope:"col",children:"Description"})]})}),Object(p.jsx)("tbody",{children:c.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"row",children:e.id}),Object(p.jsx)("td",{children:e.name}),Object(p.jsx)("td",{children:e.description})]})}))})]})})},v=c(2);var N=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(u.a,{children:[Object(p.jsx)(f,{}),Object(p.jsxs)(v.c,{children:[Object(p.jsx)(v.a,{path:"/users/",exact:!0,component:x}),Object(p.jsx)(v.a,{path:"/groups/",exact:!0,component:m})]})]})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root")),g()}},[[64,1,2]]]);
//# sourceMappingURL=main.03d3efcc.chunk.js.map