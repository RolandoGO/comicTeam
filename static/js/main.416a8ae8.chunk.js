(this.webpackJsonpcomic_app=this.webpackJsonpcomic_app||[]).push([[0],{205:function(e,t,r){},206:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(74),s=r.n(c),i=r(6),l=r.n(i),o=r(13),d=r(3),u=Object(a.createContext)(),j=["intelligence","power","strength","speed","combat"],h=["weight","height","eye-color","hair-color"],p=["height","weight"],b=r(1);function m(e){var t=e.herosData,r=Object(a.useContext)(u).addCharacter;return Object(b.jsxs)("div",{id:"cardShadow",className:"col-sm-2 d-flex",children:[Object(b.jsx)("div",{onClick:function(){return r(t)},id:"characterAdd",className:"bg-warning",children:Object(b.jsx)("span",{children:"+"})}),Object(b.jsx)("img",{style:{height:"160px",width:"150px"},src:t.image.url,alt:"no image"}),Object(b.jsxs)("div",{style:{height:"160px",width:"160px",lineHeight:"8px",fontSize:"15px",padding:"5px"},children:[Object(b.jsx)("div",{className:"mb-4 ",children:Object(b.jsx)("strong",{style:{lineHeight:"12px"},children:t.name})}),j.map((function(e){return Object(b.jsxs)("p",{children:[e,": ","null"===t.powerstats[e]?"-":t.powerstats[e]]},e)}))]})]},t.id)}var x=r(30),O=r(15),f=r(42),g=r.n(f),v=function(){var e=Object(o.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.post("http://challenge-react.alkemy.org/",{password:t.password,email:t.email});case 3:if(!(r=e.sent)){e.next=7;break}return localStorage.setItem("challengeToken",r.data.token),e.abrupt("return",!0);case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(l.a.mark((function e(t){var r,a,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.name,e.prev=1,e.next=4,g.a.get("https://www.superheroapi.com/api.php/10158473030413985/search/"+r);case 4:if(!(a=e.sent).data.error){e.next=11;break}return n=a.data.error,!1,e.abrupt("return",{error:n,boleean:false});case 11:return c=a.data.results,!0,e.abrupt("return",{results:c,boleean:true});case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(1),"error de conexion o no se encontro el recurso",!1,e.abrupt("return",{error:"error de conexion o no se encontro el recurso",boleean:false});case 21:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}(),N=O.a({name:O.b().required("required!!")});function y(){var e=Object(a.useState)(),t=Object(d.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)(!1),s=Object(d.a)(c,2),i=s[0],u=s[1],j=Object(a.useState)(),h=Object(d.a)(j,2),p=h[0],O=h[1],f=Object(x.a)({initialValues:{name:""},onSubmit:function(){var e=Object(o.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(null),u(!0),O(null),e.next=5,w(t);case 5:(r=e.sent).boleean?(n(r.results),u(!1)):(O(r.error),u(!1));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),validationSchema:N});return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"row  p-2",children:Object(b.jsx)("div",{className:"col d-flex justify-content-center",children:Object(b.jsxs)("form",{onSubmit:f.handleSubmit,children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"text",onBlur:f.handleBlur,onChange:f.handleChange,name:"name",value:f.values.name,className:"form-control",id:"character",placeholder:"Character Name"})}),p&&Object(b.jsx)("strong",{className:"text-danger",children:p}),f.errors.name&&f.touched.name?Object(b.jsx)("div",{className:"text-danger text-uppercase",style:{fontWeight:"bold"},children:f.errors.name}):null,Object(b.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(b.jsx)("button",{type:"submit",className:"btn btn-light mt-2",children:"Search"}),i&&Object(b.jsx)("div",{className:"spinner-border text-success mt-3",role:"status"})]})]})})}),Object(b.jsx)("div",{className:"row p-2",style:{gridGap:"10px"},children:r&&r.map((function(e){return Object(b.jsx)(m,{herosData:e},e.id)}))})]})}function k(e){var t=e.herosData,r=Object(a.useContext)(u).deleteCharacter;return Object(b.jsxs)("div",{id:"teamCard",className:"col-sm-2",children:[Object(b.jsxs)("div",{className:"d-flex",children:[Object(b.jsx)("div",{onClick:function(){return r(t)},id:"characterAdd",className:"bg-danger",children:Object(b.jsx)("span",{children:"x"})}),Object(b.jsx)("img",{style:{height:"160px",width:"150px"},src:t.image.url,alt:"no image"}),Object(b.jsxs)("div",{style:{height:"160px",width:"160px",lineHeight:"8px",fontSize:"15px",padding:"5px"},children:[Object(b.jsx)("div",{className:"mb-4 ",children:Object(b.jsx)("strong",{style:{lineHeight:"12px"},children:t.name})}),j.map((function(e){return Object(b.jsxs)("p",{children:[e,": ","null"===t.powerstats[e]?"-":t.powerstats[e]]},e)}))]})]}),Object(b.jsxs)("div",{className:"row p-2",children:[Object(b.jsxs)("div",{className:"col-sm-12",id:"appearence",style:{wordWrap:"break-word"},children:["name: ",t.biography["full-name"]]}),Object(b.jsx)("div",{className:"col-sm-12",id:"appearence",style:{wordWrap:"break-word"},children:t.work.occupation}),h.map((function(e){return Object(b.jsx)("div",{className:"col-sm-12",id:"appearence",style:{wordWrap:"break-word"},children:typeof t.appearance[e]!==typeof[]?e+": "+t.appearance[e]:e+": "+t.appearance[e][1]},e)}))]})]})}function S(){var e=Object(a.useContext)(u).team;return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row p-2",style:{gridGap:"10px"},children:e.map((function(e){return Object(b.jsx)(k,{herosData:e},e.id)}))})})}function C(){var e=Object(a.useContext)(u).team,t=Object(a.useState)({}),r=Object(d.a)(t,2),n=r[0],c=r[1];return Object(a.useEffect)((function(){!function(e){var t={intelligence:0,power:0,strength:0,combat:0,speed:0,height:0,weight:0};e.forEach((function(e){j.forEach((function(r){return t[r]=t[r]+Number(e.powerstats[r])}))})),e.forEach((function(e){p.forEach((function(r){return t[r]=t[r]+Number(e.appearance[r][1].split(" ")[0])}))})),c(t)}(e)}),[e]),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h2",{children:"User Team "}),Object(b.jsx)("strong",{children:"Powerstats Sum"}),Object(b.jsx)("div",{className:"row p-2",style:{gridGap:"10px"},children:Object(b.jsxs)("div",{className:"col-sm-2 d-flex",id:"cardShadow",style:{lineHeight:"15px"},children:[Object(b.jsx)("div",{children:j.map((function(e){return Object(b.jsxs)("ul",{children:[e,": ",n[e]]},e)}))}),Object(b.jsx)("div",{children:p.map((function(e){return Object(b.jsxs)("ul",{children:[e,": ",n[e]]},e)}))})]})})]})}var E=function(e){var t=e.logOut;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("button",{className:"btn btn-dark mt-2",onClick:t,children:"Log Out"}),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y,{}),Object(b.jsx)(C,{}),Object(b.jsx)(S,{})]})]})},I=O.a({email:O.b().email("put a valid email").required("required!!"),password:O.b().min(5).max(15).required("required!!")}),T=function(e){var t=e.setIsTokenExist,r=function(){var e=Object(o.a)(l.a.mark((function e(r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(r);case 2:e.sent&&t(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=Object(x.a)({initialValues:{email:"",password:""},onSubmit:r,validationSchema:I});return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h2",{children:"Login to create your team"}),Object(b.jsxs)("form",{onSubmit:a.handleSubmit,children:[Object(b.jsxs)("div",{className:"form-group w-50",children:[Object(b.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(b.jsx)("input",{value:a.values.email,name:"email",onChange:a.handleChange,onBlur:a.handleBlur,type:"email",className:"form-control",id:"exampleInputEmail1",placeholder:"Enter email"}),a.errors.email&&a.touched.email?Object(b.jsx)("div",{className:"text-danger text-uppercase",style:{fontWeight:"bold"},children:a.errors.email}):null]}),Object(b.jsxs)("div",{className:"form-group w-50",children:[Object(b.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Password"}),Object(b.jsx)("input",{value:a.values.password,name:"password",onChange:a.handleChange,onBlur:a.handleBlur,type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"}),a.errors.password&&a.touched.password?Object(b.jsx)("div",{className:"text-danger text-uppercase",style:{fontWeight:"bold"},children:a.errors.password}):null]}),Object(b.jsx)("button",{type:"submit",className:"btn btn-warning mt-2",children:"Login"})]})]})},B=r(4),q=function(){var e=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),r=t[0],n=t[1];return{addCharacter:function(e){if(1!==r.filter((function(t){return t.id===e.id})).length)if("good"===e.biography.alignment)if(3===r.filter((function(e){return"good"===e.biography.alignment})).length)alert("3 heroes already, pick the villans");else{var t=[].concat(Object(B.a)(r),[e]);n(t)}else if(3===r.filter((function(e){return"bad"===e.biography.alignment})).length)alert("3 villans already, pick the heroes");else{var a=[].concat(Object(B.a)(r),[e]);n(a)}else alert("pick another")},deleteCharacter:function(e){var t=r.filter((function(t){return t.id!==e.id}));n(t)},team:r,setTeam:n}}(),t=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),r=t[0],n=t[1];return Object(a.useEffect)((function(){localStorage.getItem("challengeToken")&&n(!0)}),[]),{isTokenExist:r,setIsTokenExist:n,logOut:function(){localStorage.clear(),n(!1)}}}(),r=t.isTokenExist,n=t.setIsTokenExist,c=t.logOut;return Object(b.jsxs)(u.Provider,{value:e,children:[Object(b.jsx)("div",{className:"container",children:r?Object(b.jsx)(E,{logOut:c}):Object(b.jsx)(T,{setIsTokenExist:n})}),";"]})};r(204),r(205);s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(q,{})}),document.getElementById("root"))}},[[206,1,2]]]);
//# sourceMappingURL=main.416a8ae8.chunk.js.map