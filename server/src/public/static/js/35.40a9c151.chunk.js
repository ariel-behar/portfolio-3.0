"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[35],{4035:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r,a=n(885),i=n(168),s=n(2791),o=n(6934),c=n(1413),l=n(4165),u=n(5861),m=n(1134),d=n(4695),h=n(6863),p={name:h.Z_().required("Your name is required").matches(/[a-zA-z]/i,"Only characters from the latin alphabet are allowed").min(2,"First Name should be at least 2 characters long").max(20,"First Name should be at most 20 characters long"),email:h.Z_().required("Your email address is required").email("Email address should be in valid format"),subject:h.Z_().required("Subject is required").min(2,"Subject should be at least 2 characters long").max(40,"Subject should be at most 40 characters long"),message:h.Z_().required("Your message is required").min(10,"Message should be at least 10 characters long")},g=h.Ry().shape(p),x=n(4554),b=n(1106),j=n(3767),f=n(6151),Z=n(1686),y=n(501),w=n(5335),v=n(1137),k=n(9e3),S=n(890),C=n(184),T=(0,o.ZP)(b.Z)(r||(r=(0,i.Z)(["\n\tinput, textarea, label.Mui-error, label.Mui-focused ,label.Mui-error span {\n\t\tcolor: ",";\n\t}\n\n\tp.Mui-error {\n\t\tcolor: ",";\n\t}\n"])),(function(e){return e.theme.palette.text.secondary}),(function(e){return e.theme.palette.text.muted.light}));var q,z,A,I,P=function(e){var t=e.formSubmitSuccessHandler,n=(0,s.useState)(!1),r=(0,a.Z)(n,2),i=r[0],o=r[1],h=(0,m.cI)({mode:"onBlur",resolver:(0,d.X)(g),defaultValues:{name:"",email:"",subject:"",message:""}}),p=h.register,b=h.handleSubmit,q=h.formState,z=q.errors,A=q.isDirty,I=q.isValid,P=function(){var e=(0,u.Z)((0,l.Z)().mark((function e(n,r){var a,i,s,c,u;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===r||void 0===r||r.preventDefault(),a=n.name,i=n.email,s=n.subject,c=n.message,e.prev=2,e.next=5,l={name:a,email:i,subject:s,message:c},fetch("".concat("http://www.arielbehar.com/api","/form"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(l)});case 5:return u=e.sent,e.next=8,u.json();case 8:e.sent.success?(t(!0),o(!1)):o(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),o(!0);case 15:case"end":return e.stop()}var l}),e,null,[[2,12]])})));return function(t,n){return e.apply(this,arguments)}}();return(0,C.jsx)(x.Z,{children:(0,C.jsx)("form",{onSubmit:b(P),children:(0,C.jsxs)(j.Z,{direction:"column",spacing:3,children:[(0,C.jsxs)(j.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,C.jsx)(y.Z,{fontSize:"large",sx:{color:"custom.grey.darker",marginRight:"15px",marginTop:"10px"}}),(0,C.jsx)(T,(0,c.Z)((0,c.Z)({autoComplete:"off",fullWidth:!0,required:!0},p("name")),{},{variant:"standard",label:"Your name",error:!!z.name,helperText:z.name?z.name.message:""}))]}),(0,C.jsxs)(j.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,C.jsx)(w.Z,{fontSize:"large",sx:{color:"custom.grey.darker",marginRight:"15px",marginTop:"10px"}}),(0,C.jsx)(T,(0,c.Z)((0,c.Z)({autoComplete:"off",fullWidth:!0,required:!0},p("email")),{},{variant:"standard",label:"Your email address",error:!!z.email,helperText:z.email?z.email.message:""}))]}),(0,C.jsxs)(j.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,C.jsx)(v.Z,{fontSize:"large",sx:{color:"custom.grey.darker",marginRight:"15px",marginTop:"10px"}}),(0,C.jsx)(T,(0,c.Z)((0,c.Z)({autoComplete:"off",fullWidth:!0,required:!0},p("subject")),{},{variant:"standard",label:"Subject",error:!!z.subject,helperText:z.subject?z.subject.message:""}))]}),(0,C.jsxs)(j.Z,{direction:"row",justifyContent:"space-between",alignItems:"start",children:[(0,C.jsx)(k.Z,{fontSize:"large",sx:{color:"custom.grey.darker",marginRight:"15px",marginTop:"12px"}}),(0,C.jsx)(T,(0,c.Z)((0,c.Z)({autoComplete:"off",multiline:!0,rows:6,fullWidth:!0,required:!0},p("message")),{},{variant:"standard",label:"Your message",error:!!z.message,helperText:z.message?z.message.message:""}))]}),i&&(0,C.jsx)(S.Z,{variant:"body1",component:"p",color:"error.light",textAlign:"center",style:{backgroundColor:"rgba(0, 0, 0, 0.5)",borderRadius:"20px"},children:"An error occurred while attempting to process your message."}),(0,C.jsx)(j.Z,{direction:"row",justifyContent:"center",children:(0,C.jsx)(f.Z,{type:"submit",size:"large",sx:{backgroundColor:"custom.blue.main",boxShadow:7},variant:"contained",endIcon:(0,C.jsx)(Z.Z,{}),disabled:!(A&&I),children:"Send"})})]})})})},M=n(1889),R=n(9164),Y=n(533),E=(0,o.ZP)(x.Z)(q||(q=(0,i.Z)(["\n    background-image: url('https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/backgrounds/phone-blurred.jpg');\n    background-attachment: fixed; \n    background-size: cover;\n    background-position: right center;\n"]))),N=(0,o.ZP)(j.Z)(z||(z=(0,i.Z)(["\n    background: rgba(0, 0, 0, 0.5);\n    border-radius: 20px;\n"]))),L=(0,o.ZP)("img")(A||(A=(0,i.Z)(["\n    position: absolute;\n    top: 20px;\n    left: -5px;\n    height: 75px;\n    width: 75px;\n\n    @media (max-width: 499px){\n        top: -20px;\n        left: -37px;\n        height: 66px;\n        width: 66px;\n    }\n"]))),O=(0,o.ZP)(j.Z)(I||(I=(0,i.Z)(["\n    a{\n        height: auto;\n        text-align: center;\n    }\n    img {\n        width: auto;\n        height: 128px;\n    }\n\n    @media (max-width: 499px){\n        img {\n            height: 100px;\n        }\n    }\n    \n"])));var _=function(e){var t=e.loadSectionHandler,n=(0,s.useState)(!1),r=(0,a.Z)(n,2),i=r[0],o=r[1];return(0,s.useEffect)((function(){t(8)}),[t]),(0,C.jsx)(E,{component:"section",id:"seventh-section",py:4,children:(0,C.jsx)(R.Z,{children:(0,C.jsxs)(M.ZP,{container:!0,spacing:{xs:2,md:0},children:[(0,C.jsx)(M.ZP,{item:!0,xs:12,md:7,lg:6,children:(0,C.jsxs)(N,{px:3,pb:2,minHeight:"392px",direction:"column",children:[(0,C.jsxs)(j.Z,{direction:"row",position:"relative",justifyContent:"center",alignItems:"center",minHeight:"120px",children:[(0,C.jsx)(L,{src:"https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/logo/logo.png",alt:"logo"}),(0,C.jsx)(S.Z,{variant:"h4",component:"h5",color:"text.secondary",children:"CONTACT ME"})]}),i?(0,C.jsxs)(j.Z,{direction:"column",justifyContent:"center",alignItems:"center",pt:4,spacing:2,children:[(0,C.jsx)(S.Z,{variant:"h3",component:"p",textAlign:"center",color:"white",children:"Thank you!"}),(0,C.jsx)(S.Z,{variant:"h5",component:"p",textAlign:"center",color:"success.light",children:"Your form has successfully been submitted!"})]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(S.Z,{variant:"body1",component:"p",color:"text.secondary",textAlign:"justify",children:'Remarks? Comments? Suggestions? Need a website done or just saying "hi"? Leave your input below and you\'ll get a response from me within the next 24 hours'}),(0,C.jsx)(P,{formSubmitSuccessHandler:function(e){o(e)}})]})]})}),(0,C.jsx)(M.ZP,{item:!0,xs:12,md:1,lg:2}),(0,C.jsx)(M.ZP,{item:!0,xs:12,md:4,children:(0,C.jsxs)(N,{p:4,children:[(0,C.jsx)(S.Z,{variant:"h4",component:"h5",color:"text.secondary",textAlign:"center",mb:3,children:"FIND ME ON"}),(0,C.jsxs)(O,{direction:"row",justifyContent:"space-evenly",mb:3,children:[(0,C.jsx)(Y.Z,{href:"https://www.linkedin.com/in/ariel-behar/",target:"_blank",mr:1,children:(0,C.jsx)("img",{src:"https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/icons/linkedin.svg",alt:"LinkedIn Logo"})}),(0,C.jsx)(Y.Z,{href:"https://github.com/ariel-behar",target:"_blank",ml:1,children:(0,C.jsx)("img",{src:"https://arielbehar-portfolio.s3.eu-central-1.amazonaws.com/icons/github.svg",alt:"Github Logo"})})]}),(0,C.jsx)(S.Z,{variant:"h6",component:"p",color:"text.secondary",textAlign:"center",mb:3,children:"OR EMAIL ME DIRECTLY AT"}),(0,C.jsx)(S.Z,{variant:"body1",component:"p",color:"text.secondary",textAlign:"center",mb:3,children:"ariel.behar@hotmail.com"})]})})]})})})}}}]);
//# sourceMappingURL=35.40a9c151.chunk.js.map