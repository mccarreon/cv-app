(this["webpackJsonpcv-app"]=this["webpackJsonpcv-app"]||[]).push([[0],{101:function(e,a,t){},102:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),i=t.n(r),c=t(9),o=t(149),m=t(133),u=t(134),d=t(135),s=t(150),h=t(139),E=t(140),b=t(146),p=t(130),v=t(132),g=t(104),f=t(70),j=t.n(f);var O=function(e){return l.a.createElement(b.a,{mt:2,mb:2},l.a.createElement(p.a,{style:{position:"relative"},elevation:2},l.a.createElement(v.a,{color:"primary",onClick:e.handleClickOpen,style:{position:"absolute",right:"10px"}},l.a.createElement(j.a,null)),l.a.createElement(b.a,{display:"flex",flexDirection:"column",alignItems:"center"},l.a.createElement(g.a,{variant:"h2",gutterBottom:!0},e.fullName),l.a.createElement(b.a,{style:{fontSize:"16px"},mt:-4,display:"flex",justifyContent:"center"},l.a.createElement(g.a,{variant:"subtitle1"},e.email),l.a.createElement(g.a,{variant:"subtitle1",gutterBottom:!0},"\xa0\xa0|\xa0\xa0"),l.a.createElement(g.a,{variant:"subtitle1",gutterBottom:!0},e.phoneNumber),l.a.createElement(g.a,{variant:"subtitle1",gutterBottom:!0},"\xa0\xa0|\xa0\xa0"),l.a.createElement(g.a,{variant:"subtitle1",gutterBottom:!0},e.linkedin)))))};var y=function(){var e=Object(n.useState)("Your Name"),a=Object(c.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)("email"),b=Object(c.a)(i,2),p=b[0],v=b[1],g=Object(n.useState)("(xxx)-xxx-xxxx"),f=Object(c.a)(g,2),j=f[0],y=f[1],S=Object(n.useState)("linkedin.com/in/yourlinkedin"),x=Object(c.a)(S,2),C=x[0],k=x[1],w=Object(n.useState)(!1),R=Object(c.a)(w,2),Y=R[0],D=R[1],N=function(){D(!1)},W=function(e,a){a(e.target.value)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{open:Y,onClose:N,maxWidth:"sm",fullWidth:!0},l.a.createElement(m.a,{id:"form-dialog-title"},"Edit Personal Info"),l.a.createElement(u.a,{variant:"middle"}),l.a.createElement(d.a,null,l.a.createElement(s.a,{margin:"dense",fullWidth:!0,id:"fullName",label:"Full Name",type:"text",value:t,onChange:function(e){return W(e,r)}}),l.a.createElement(s.a,{margin:"dense",fullWidth:!0,id:"email",label:"Email",type:"email",value:p,onChange:function(e){return W(e,v)}}),l.a.createElement(s.a,{margin:"dense",fullWidth:!0,id:"phoneNumber",label:"Phone Number",type:"tel",value:j,onChange:function(e){return W(e,y)}}),l.a.createElement(s.a,{margin:"dense",fullWidth:!0,id:"linkedin",label:"Linkedin",type:"text",value:C,onChange:function(e){return W(e,k)}})),l.a.createElement(h.a,null,l.a.createElement(E.a,{onClick:N,color:"primary"},"Submit"))),l.a.createElement(O,{fullName:t,email:p,phoneNumber:j,linkedin:C,handleClickOpen:function(){D(!0)}}))},S=t(16),x=t(12),C=t(29),k=t(56),w=t.n(k),R=t(141);var Y=function(e){return l.a.createElement(R.a,{container:!0,spacing:0,alignItems:"center"},l.a.createElement(R.a,{item:!0,xs:10},l.a.createElement(g.a,{variant:"h6"},e.schoolName,l.a.createElement(E.a,{onClick:e.handleClickOpen,color:"primary",size:"small"},"Edit"))),l.a.createElement(R.a,{item:!0},l.a.createElement(g.a,{align:"right",variant:"subtitle2"},e.startYear," - ",e.endYear)),l.a.createElement(R.a,{item:!0,xs:10},l.a.createElement(g.a,{variant:"subtitle1"},e.degree)),e.gpa&&l.a.createElement(R.a,{item:!0},l.a.createElement(g.a,{variant:"body2"},"GPA: ",e.gpa)),l.a.createElement(R.a,{item:!0,xs:10},l.a.createElement(g.a,{variant:"body2",style:{whiteSpace:"pre"}},e.details)))},D=t(138),N=t(152),W=t(147),T=t(153),A=t(15),F=t.n(A);var B=function(e){var a=Object(n.useState)(e.schoolToAdd),t=Object(c.a)(a,2),r=t[0],i=t[1],b=function(e){var a=e.target,t=a.name,n=a.value;i((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(S.a)({},t,n))}))},p=function(e,a){for(var t=(new Date).getFullYear(),n=t-a,l=[],r=t+e;r>=n;r--)l.push(r);return l};return l.a.createElement(o.a,{open:e.open,onClose:e.handleClose,maxWidth:"sm",fullWidth:!0},l.a.createElement(m.a,{id:"form-dialog-title"},"Add School"),l.a.createElement(u.a,{variant:"middle"}),l.a.createElement(d.a,null,l.a.createElement(s.a,{margin:"dense",fullWidth:!0,name:"schoolName",label:"School Name",type:"text",value:r.schoolName,onChange:b}),l.a.createElement(s.a,{margin:"dense",fullWidth:!0,name:"degree",label:"Degree",type:"text",value:r.degree,onChange:b}),l.a.createElement(s.a,{style:{width:50},margin:"dense",name:"gpa",label:"GPA",type:"text",value:r.gpa,onChange:b}),l.a.createElement("br",null),l.a.createElement(D.a,{style:{minWidth:120}},l.a.createElement(N.a,null,"Start Year"),l.a.createElement(W.a,{name:"startYear",value:r.startYear,onChange:b},p(0,100).map((function(e){return l.a.createElement(T.a,{key:F.a.generate(),value:e},e)})))),l.a.createElement(D.a,{style:{minWidth:120,marginLeft:10}},l.a.createElement(N.a,null,"Grad Year"),l.a.createElement(W.a,{name:"endYear",value:r.endYear,onChange:b},p(7,100).map((function(e){return l.a.createElement(T.a,{key:F.a.generate(),value:e},e)})))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.a,{multiline:!0,name:"details",placeholder:"Details",helperText:"Ex: Club, honors, awards",fullWidth:!0,rows:4,value:r.details,onChange:b})),l.a.createElement(h.a,null,e.showRemove&&l.a.createElement(E.a,{onClick:function(){return e.handleDelete(r)},color:"secondary"},"Remove"),l.a.createElement(E.a,{onClick:function(){return e.handleSubmit(r)},color:"primary"},"Submit")))};var I=function(e){var a=Object(n.useState)(!1),t=Object(c.a)(a,2),r=t[0],i=t[1],o=Object(n.useState)(Object(x.a)({},e.details)),m=Object(c.a)(o,2),u=m[0],d=m[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(B,{open:r,schoolToAdd:u,handleChange:function(e){var a=e.target,t=a.name,n=a.value;d((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(S.a)({},t,n))}))},handleSubmit:e.handleSubmit,handleClose:function(){i(!1),d(Object(x.a)({},e.details))},handleDelete:e.handleDelete,showRemove:e.showRemove}),l.a.createElement(Y,Object.assign({},e.details,{handleClickOpen:function(){e.updateShowRemove(!0),i(!0)}})))};var L=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{elevation:2,style:{position:"relative",paddingTop:"10px",paddingBottom:"10px"}},l.a.createElement(v.a,{color:"primary",onClick:e.handleClickOpen,style:{position:"absolute",right:"10px"}},l.a.createElement(w.a,null)),l.a.createElement(b.a,{display:"flex",flexDirection:"column",style:{marginLeft:"25px"}},l.a.createElement(g.a,{variant:"h4"},e.title),l.a.createElement(u.a,{style:{marginLeft:"0px",marginRight:"25px"},variant:"middle"}),e.data.map((function(a){return l.a.createElement(I,{key:F.a.generate(),details:a,handleSubmit:e.handleSubmit,handleDelete:e.handleDelete,showRemove:e.showRemove,updateShowRemove:e.updateShowRemove})})))))};var P=function(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)(!1),o=Object(c.a)(i,2),m=o[0],u=o[1],d=Object(n.useState)({}),s=Object(c.a)(d,2),h=s[0],E=s[1],b=Object(n.useState)([{schoolName:"California State University, Chico",degree:"B.S. Business Administration, Option in Finance",gpa:"3.6",startYear:"2018",endYear:"2020",details:"- Something here\n- Another thing here",id:F.a.generate()}]),p=Object(c.a)(b,2),v=p[0],g=p[1],f=function(){r(!1),E({})},j=function(e){if(v.some((function(a){return a.id===e.id}))){var a=Object(C.a)(v),t=a.findIndex((function(a){return a.id===e.id}));a[t]=e,g(a)}else g((function(a){return[].concat(Object(C.a)(a),[e])}));f()},O=function(e){var a=Object(C.a)(v),t=a.findIndex((function(a){return a.id===e.id}));a=a.splice(t,0),g(a),f(),console.log("Removed school")},y=function(e){var a=e.target,t=a.name,n=a.value;E((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(S.a)({},t,n))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(B,{open:t,schoolToAdd:h,handleChange:y,handleSubmit:j,handleClose:f,handleDelete:O,showRemove:m}),l.a.createElement(L,{title:"Education",data:v,schoolToAdd:h,open:t,handleClickOpen:function(){u(!1),r(!0);var e={schoolName:"",degree:"",gpa:"",startYear:"",endYear:"",details:"",id:F.a.generate()};E(e)},handleSubmit:j,handleChange:y,handleClose:f,handleDelete:O,showRemove:m,updateShowRemove:u}))};var z=function(e){return l.a.createElement(R.a,{container:!0,spacing:0,alignItems:"center"},l.a.createElement(R.a,{item:!0,xs:10},l.a.createElement(g.a,{variant:"h6"},e.companyName,l.a.createElement(E.a,{onClick:e.handleClickOpen,color:"primary",size:"small"},"Edit"))),l.a.createElement(R.a,{item:!0},l.a.createElement(g.a,{align:"right",variant:"subtitle2"},e.startYear," - ",e.endYear)),l.a.createElement(R.a,{item:!0,xs:10},l.a.createElement(g.a,{variant:"subtitle1"},e.jobTitle)),l.a.createElement(R.a,{item:!0,xs:10},l.a.createElement(g.a,{variant:"body2",style:{whiteSpace:"pre"}},e.details)))};var G=function(e){var a=Object(n.useState)(e.jobToAdd),t=Object(c.a)(a,2),r=t[0],i=t[1],b=function(e){var a=e.target,t=a.name,n=a.value;i((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(S.a)({},t,n))}))},p=function(e,a){for(var t=(new Date).getFullYear(),n=t-a,l=[],r=t+e;r>=n;r--)l.push(r);return l};return l.a.createElement(o.a,{open:e.open,onClose:e.handleClose,maxWidth:"sm",fullWidth:!0},l.a.createElement(m.a,{id:"form-dialog-title"},"Add School"),l.a.createElement(u.a,{variant:"middle"}),l.a.createElement(d.a,null,l.a.createElement(s.a,{margin:"dense",fullWidth:!0,name:"companyName",label:"Company Name",type:"text",value:r.companyName,onChange:b}),l.a.createElement(s.a,{margin:"dense",fullWidth:!0,name:"jobTitle",label:"Job Title",type:"text",value:r.jobTitle,onChange:b}),l.a.createElement(D.a,{style:{minWidth:120}},l.a.createElement(N.a,null,"Start Year"),l.a.createElement(W.a,{name:"startYear",value:r.startYear,onChange:b},p(0,100).map((function(e){return l.a.createElement(T.a,{key:F.a.generate(),value:e},e)})))),l.a.createElement(D.a,{style:{minWidth:120,marginLeft:10}},l.a.createElement(N.a,null,"End Year"),l.a.createElement(W.a,{name:"endYear",value:r.endYear,onChange:b},function(e,a){var t=p(e,a);return t.unshift("Present"),t}(0,100).map((function(e){return l.a.createElement(T.a,{key:F.a.generate(),value:e},e)})))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(s.a,{multiline:!0,name:"details",placeholder:"Details",helperText:"Ex: saved over 1,000 lives by documenting my code",fullWidth:!0,rows:4,value:r.details,onChange:b})),l.a.createElement(h.a,null,e.showRemove&&l.a.createElement(E.a,{onClick:function(){return e.handleDelete(r)},color:"secondary"},"Remove"),l.a.createElement(E.a,{onClick:function(){return e.handleSubmit(r)},color:"primary"},"Submit")))};var J=function(e){var a=Object(n.useState)(!1),t=Object(c.a)(a,2),r=t[0],i=t[1],o=Object(n.useState)(Object(x.a)({},e.details)),m=Object(c.a)(o,2),u=m[0],d=m[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(G,{open:r,jobToAdd:u,handleChange:function(e){var a=e.target,t=a.name,n=a.value;d((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(S.a)({},t,n))}))},handleSubmit:e.handleSubmit,handleClose:function(){i(!1),d(Object(x.a)({},e.details))},handleDelete:e.handleDelete,showRemove:e.showRemove}),l.a.createElement(z,Object.assign({},e.details,{handleClickOpen:function(){e.updateShowRemove(!0),i(!0)}})))};var M=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{elevation:2,style:{position:"relative",paddingTop:"10px",paddingBottom:"10px"}},l.a.createElement(v.a,{color:"primary",onClick:e.handleClickOpen,style:{position:"absolute",right:"10px"}},l.a.createElement(w.a,null)),l.a.createElement(b.a,{display:"flex",flexDirection:"column",style:{marginLeft:"25px"}},l.a.createElement(g.a,{variant:"h4"},e.title),l.a.createElement(u.a,{style:{marginLeft:"0px",marginRight:"25px"},variant:"middle"}),e.data.map((function(a){return l.a.createElement(J,{key:F.a.generate(),details:a,handleSubmit:e.handleSubmit,handleDelete:e.handleDelete,showRemove:e.showRemove,updateShowRemove:e.updateShowRemove})})))))};var U=function(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)(!1),o=Object(c.a)(i,2),m=o[0],u=o[1],d=Object(n.useState)({}),s=Object(c.a)(d,2),h=s[0],E=s[1],b=Object(n.useState)([{companyName:"Sensiba San Filippo",jobTitle:"Full Stack Engineer",startYear:"2020",endYear:"Present",details:"- Something here\n- Another thing here",id:F.a.generate()}]),p=Object(c.a)(b,2),v=p[0],g=p[1],f=function(){r(!1),E({})},j=function(e){if(v.some((function(a){return a.id===e.id}))){var a=Object(C.a)(v),t=a.findIndex((function(a){return a.id===e.id}));a[t]=e,g(a)}else g((function(a){return[].concat(Object(C.a)(a),[e])}));f()},O=function(e){var a=Object(C.a)(v),t=a.findIndex((function(a){return a.id===e.id}));a=a.splice(t,0),g(a),f(),console.log("Removed job")},y=function(e){var a=e.target,t=a.name,n=a.value;E((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(S.a)({},t,n))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(G,{open:t,jobToAdd:h,handleChange:y,handleSubmit:j,handleClose:f,handleDelete:O,showRemove:m}),l.a.createElement(M,{title:"Experience",data:v,jobToAdd:h,open:t,handleClickOpen:function(){u(!1),r(!0);var e={companyName:"",jobTitle:"",startYear:"",endYear:"",details:"",id:F.a.generate()};E(e)},handleSubmit:j,handleChange:y,handleClose:f,handleDelete:O,showRemove:m,updateShowRemove:u}))},q=t(142),H=t(143),K=t(144),Q=t(71),V=Object(Q.a)({props:{MuiTypography:{variantMapping:{h2:"h1"}}}});var X=function(){return l.a.createElement(q.a,{theme:V},l.a.createElement(b.a,{bgcolor:"primary.light",style:{height:"100vh"}},l.a.createElement(H.a,{maxWidth:"md"},l.a.createElement(R.a,{container:!0,direction:"column",spacing:2},l.a.createElement(K.a,null),l.a.createElement(R.a,{item:!0},l.a.createElement(y,null)),l.a.createElement(R.a,{item:!0},l.a.createElement(P,null)),l.a.createElement(R.a,{item:!0},l.a.createElement(U,null))))))};t(101);i.a.render(l.a.createElement(X,null),document.getElementById("root"))},84:function(e,a,t){e.exports=t(102)}},[[84,1,2]]]);
//# sourceMappingURL=main.af410d1e.chunk.js.map