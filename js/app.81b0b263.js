(function(e){function t(t){for(var r,s,i=t[0],l=t[1],u=t[2],p=0,m=[];p<i.length;p++)s=i[p],o[s]&&m.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-app/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"27cb":function(e,t,n){},"3a8e":function(e,t,n){"use strict";var r=n("27cb"),o=n.n(r);o.a},4805:function(e,t,n){"use strict";var r=n("897e"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Employees")]),n("employee-table",{attrs:{employees:e.employees},on:{"edit:employee":e.editEmployee,"delete:employee":e.deleteEmployee}}),n("employee-form",{on:{"add:employee":e.addEmployee}})],1)},a=[],s=n("bd86"),i=n("75fc"),l=(n("96cf"),n("3b8d")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),e._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],p={name:"HelloWorld",props:{msg:String}},m=p,d=(n("4805"),n("2877")),v=Object(d["a"])(m,u,c,!1,null,"b9167eee",null),f=v.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"employee-table"}},[e.employees.length<1?n("p",[e._v("No employees")]):n("table",[e._m(0),e._l(e.employees,function(t){return n("tbody",{key:t.id},[n("tr",[e.editing===t.id?n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"employee.name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}})]):n("td",[e._v(e._s(t.name))]),e.editing===t.id?n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"employee.email"}],attrs:{type:"text"},domProps:{value:t.email},on:{input:function(n){n.target.composing||e.$set(t,"email",n.target.value)}}})]):n("td",[e._v(e._s(t.email))]),e.editing===t.id?n("td",[n("button",{on:{click:function(n){return e.editEmployee(t)}}},[e._v("Save")]),n("button",{staticClass:"muted-button",on:{click:function(t){e.editing=null}}},[e._v("Cancel")])]):n("td",[n("button",{on:{click:function(n){return e.editMode(t.id)}}},[e._v("Edit")]),n("button",{on:{click:function(n){return e.$emit("delete:employee",t.id)}}},[e._v("Delete")])])])])})],2)])},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Employee name")]),n("th",[e._v("Employee email")])])])}],g=(n("7f7f"),{name:"employee-table",props:{employees:Array},data:function(){return{editing:null}},methods:{editMode:function(e){this.editing=e},editEmployee:function(e){console.log("employee",e),""!==e.name&&""!==e.email&&(this.$emit("edit:employee",e.id,e),this.editing=null)}}}),b=g,_=Object(d["a"])(b,h,y,!1,null,"275c3bfe",null),j=_.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"employee-form"}},[n("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("label",[e._v("Employee name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.name,expression:"employee.name"}],ref:"first",class:{"has-error":e.submitting&&e.invalidName},attrs:{type:"text"},domProps:{value:e.employee.name},on:{focus:e.clearStatus,keypress:e.clearStatus,input:function(t){t.target.composing||e.$set(e.employee,"name",t.target.value)}}}),n("label",[e._v("Employee Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.employee.email,expression:"employee.email"}],ref:"second",class:{"has-error":e.submitting&&e.invalidEmail},attrs:{type:"text"},domProps:{value:e.employee.email},on:{input:function(t){t.target.composing||e.$set(e.employee,"email",t.target.value)}}}),n("button",[e._v("Add Employee")])]),e.error&&e.submitting?n("p",{staticClass:"error-message"},[e._v("\n        Please fill out all required fields\n    ")]):e._e(),e.success?n("p",{staticClass:"success-message"},[e._v("\n        Form successfully submitted\n    ")]):e._e()])},x=[],k={name:"employee-form",data:function(){return{submitting:!1,error:!1,success:!1,employee:{name:"",email:""}}},methods:{handleSubmit:function(){this.submitting=!0,this.clearStatus(),this.invalidName||this.invalidEmail?this.error=!0:(this.$emit("add:employee",this.employee),this.$refs.second.focus(),this.employee={name:"",email:""},this.error=!1,this.success=!0,this.submitting=!1)},clearStatus:function(){this.success=!1,this.error=!1}},computed:{invalidName:function(){return""===this.employee.name},invalidEmail:function(){return""===this.employee.email}}},w=k,O=(n("3a8e"),Object(d["a"])(w,E,x,!1,null,"b6eed73e",null)),$=O.exports,S={name:"app",components:{HelloWorld:f,EmployeeTable:j,EmployeeForm:$},data:function(){return{employees:[]}},methods:Object(s["a"])({addEmployee:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,this.employees=[].concat(Object(i["a"])(this.employees),[r]),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));function t(t){return e.apply(this,arguments)}return t}(),deleteEmployee:function(e){this.employees=this.employees.filter(function(t){return t.id!==e})},getEmployees:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,this.employees=n,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));function t(){return e.apply(this,arguments)}return t}(),editEmployee:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users/".concat(t),{method:"PUT",body:JSON.stringify(n)});case 3:return r=e.sent,e.next=6,r.json();case 6:e.sent,this.employees=this.employees.map(function(e){return e.id===t?n:e}),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log("error",e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));function t(t,n){return e.apply(this,arguments)}return t}()},"deleteEmployee",function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users/".concat(t),{method:"DELETE"});case 3:e.sent,this.employees=this.employees.filter(function(e){return e.id!==t}),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("error",e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()),mounted:function(){this.getEmployees()}},P=S,N=(n("034f"),Object(d["a"])(P,o,a,!1,null,null,null)),C=N.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(C)}}).$mount("#app")},"64a9":function(e,t,n){},"897e":function(e,t,n){}});
//# sourceMappingURL=app.81b0b263.js.map