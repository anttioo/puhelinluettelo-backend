(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,t,n){e.exports=n(40)},20:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(13),o=n.n(c),u=(n(20),n(14)),i=n(2),l=n(3),s=n.n(l),m="/api/persons",f=function(){return s.a.get(m).then((function(e){return e.data}))},d=function(e){return s.a.post(m,e).then((function(e){return e.data}))},h=function(e,t){return s.a.put("".concat(m,"/").concat(e),t).then((function(e){return e.data}))},b=function(e){return s.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},v=(n(39),function(e){var t=e.filter,n=e.setFilter;return a.a.createElement(a.a.Fragment,null,"Filter shown with ",a.a.createElement("input",{value:t,onChange:function(e){return n(e.currentTarget.value)}}))}),w=function(e){var t=e.newName,n=e.setNewName,r=e.addPerson,c=e.newNumber,o=e.setNewNumber;return a.a.createElement("form",null,a.a.createElement("div",null,"name: ",a.a.createElement("input",{value:t,onChange:function(e){return n(e.currentTarget.value)}}),a.a.createElement("br",null),"number: ",a.a.createElement("input",{value:c,onChange:function(e){return o(e.currentTarget.value)}}),a.a.createElement("br",null)),a.a.createElement("div",null,a.a.createElement("button",{onClick:r,type:"submit"},"add")))},E=function(e){var t=e.persons,n=e.removePerson;return a.a.createElement("ul",null,t.map((function(e){return a.a.createElement("li",{key:e.id},e.name," ",e.number," ",a.a.createElement("button",{onClick:function(){return n(e.id)}},"delete"))})))},p=function(e){var t=e.msg,n=e.style;return a.a.createElement("div",{id:"notification",className:n},t)},g=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){f().then((function(e){c(e)}))}),[]);var o=Object(r.useState)(""),l=Object(i.a)(o,2),s=l[0],m=l[1],g=Object(r.useState)(""),N=Object(i.a)(g,2),O=N[0],j=N[1],C=Object(r.useState)(""),y=Object(i.a)(C,2),k=y[0],L=y[1],S=Object(r.useState)(null),P=Object(i.a)(S,2),F=P[0],T=P[1],D=n.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())})),J=function(e,t){T({style:e,msg:t}),setTimeout((function(){T(null)}),3e3)};return a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),F?a.a.createElement(p,{style:F.style,msg:F.msg}):null,a.a.createElement(v,{filter:k,setFilter:L}),a.a.createElement("h2",null,"Add a new"),a.a.createElement(w,{newName:s,setNewName:m,newNumber:O,setNewNumber:j,addPerson:function(e){if(e.preventDefault(),n.filter((function(e){return e.name.toLowerCase()===s.toLowerCase()})).length>0){var t=n.filter((function(e){return e.name.toLowerCase()===s.toLowerCase()}))[0].id;h(t,{name:s,number:O}).then((function(e){c(n.map((function(t){return t.id!==e.id?t:e}))),J("success","Edited ".concat(s))}))}else d({name:s,number:O}).then((function(e){c([].concat(Object(u.a)(n),[e])),J("success","Added ".concat(s))})).catch((function(e){J("error",JSON.stringify(e.response.data))}))}}),a.a.createElement("h2",null,"Numbers"),a.a.createElement(E,{persons:D,removePerson:function(e){var t=n.filter((function(t){return t.id===e}))[0].name;window.confirm("Delete ".concat(t," ?"))&&b(e).then((function(){c(n.filter((function(t){return t.id!==e}))),J("success","Deleted ".concat(t))})).catch((function(e){404===e.response.status&&J("error","Information of ".concat(t," has already been removed from server"))}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.5a3bced9.chunk.js.map