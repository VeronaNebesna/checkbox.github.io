(this.webpackJsonpcheckbox=this.webpackJsonpcheckbox||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),i=c.n(s),d=c(4),o=c.n(d),r=c(2),a=(c(10),function(e){var t=e.id,c=e.desc,s=e.deleteTodos,i=e.isChecked,d=e.changeTodo;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"checkout_items",children:[Object(n.jsx)("input",{type:"checkbox",id:"select_1",onClick:function(){return d(t)}}),Object(n.jsx)("p",{className:i?"line-through":"par",children:c}),Object(n.jsx)("button",{className:"delete_btn",onClick:function(){return s(t)},children:"delete"})]},t),Object(n.jsx)("span",{className:"line_ufter_items"})]})}),u=function(e){var t=e.deleteTodos,c=e.todos,s=e.changeTodo;return console.log(c),Object(n.jsx)("div",{children:c.map((function(e){var c=e.id,i=e.desc,d=e.isChecked;return Object(n.jsx)(a,{id:c,desc:i,deleteTodos:t,changeTodo:s,isChecked:d})}))},"check")},j=[{id:1,isChecked:!1,desc:"Water"},{id:2,isChecked:!1,desc:"Milk"},{id:3,isChecked:!1,desc:"Coffee"}],l=function(e){var t=e.onChange,c=Object(s.useState)(""),i=Object(r.a)(c,2),d=i[0],o=i[1];return Object(n.jsx)("div",{className:"input_fild",children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d.trim()&&t(d)},children:[Object(n.jsx)("input",{value:d,onChange:function(e){return o(e.target.value)},placeholder:"add to do"}),Object(n.jsx)("button",{type:"submit",children:"Add"})]})})},h=function(){var e=Object(s.useState)(j),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(n.jsxs)("div",{className:"checkout_box",children:[Object(n.jsx)("h1",{children:"to do list"}),Object(n.jsx)(l,{onChange:function(e){i(c.concat([{desc:e,id:Date.now(),isChecked:!1}]))}}),Object(n.jsx)("span",{className:"line"}),Object(n.jsx)(u,{todos:c,deleteTodos:function(e){i(c.filter((function(t){return t.id!==e})))},changeTodo:function(e){i(c.map((function(t){return t.id===e&&(t.isChecked=!t.isChecked),t})))}})]})};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.636200de.chunk.js.map