(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],Array(25).concat([function(e,t,n){},,,,function(e,t,n){e.exports=n(64)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),o=n.n(i),c=n(12),l=n(15);function s(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",fontSize:"40px"}},"404")}var u=n(2),m=n(9);n(34),n(23);function f(e){var t=e.item,n=e.onClickSkill;return r.a.createElement(m.LazyLoadComponent,{effetc:"blur"},r.a.createElement("div",{className:"AboutInfo"},r.a.createElement("h3",null,t.title),r.a.createElement("div",{className:"about-wrapper-info"},r.a.createElement("p",null,t.content)),r.a.createElement("a",{className:"btn",href:t.linkUrl,onClick:function(e){return n(e,t.linkUrl)}},t.linkLabel)))}n(35);function p(e){var t=e.zoom,n=e.color;return r.a.createElement("div",{className:"Loading",style:t?{zoom:t}:{zoom:".3"}},r.a.createElement("div",{style:{borderTopColor:n||"#f00"}}),r.a.createElement("div",{style:{borderTopColor:n||"#f00"}}),r.a.createElement("div",{style:{borderTopColor:n||"#f00"}}),r.a.createElement("div",{style:{borderTopColor:n||"#f00"}}))}n(36),n(24);function d(e){var t=e.onGetScroll,n=e.onClickSkill,a=e.aboutInfo,i=e.loading;return r.a.createElement("section",{className:"About",ref:function(e){return t(e)}},r.a.createElement("div",{className:"container"},r.a.createElement(m.LazyLoadImage,{effect:"opacity",className:"about-image",width:"116",height:"116",src:"me.jpeg",alt:"Me"}),r.a.createElement("h1",null,"Diogo Cerc\xedlio"),r.a.createElement("h2",null,r.a.createElement("span",{role:"img","aria-label":"brain"},"\ud83e\udde0")," Brazilian Fullstack developer.",r.a.createElement("br",{className:"show-tablet"})," +",(new Date).getFullYear()-2011," years of Experience / Javascript Certified ",r.a.createElement("span",{role:"img","aria-label":"computer"},"\ud83d\udcbb")),r.a.createElement("div",{className:"about-boxes"},i?r.a.createElement(p,null):a.map((function(e){return r.a.createElement(f,{key:e.id,item:e,onClickSkill:n})})))))}n(37);function b(e){var t=e.item;return r.a.createElement("li",{className:"FooterLink"},r.a.createElement("a",{href:t.link},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:t.icon.viewbox},r.a.createElement("path",{fill:"#fff",d:t.icon.path}))))}n(38);function g(e){var t=e.menu;return r.a.createElement("footer",{className:"Footer"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"footer-list"},t?t.map((function(e){return r.a.createElement(b,{key:e.id,item:e})})):r.a.createElement(p,{color:"#fff"}))))}n(39);var h=n(1),v=n.n(h),E=n(3),k=function(e){window.scroll({top:e,behavior:"smooth"})},S=[{id:1,min:null,max:null},{id:2,min:null,max:null},{id:3,min:null,max:null}],y=n(7),w=n(10),O=[{id:1,title:"Vanilla / NodeJS / React",linkLabel:"See Backend Skills",linkUrl:"backend",content:"Strong experience working as a Javascript developer, both on client-side and server-side. Always considering best code quality. Great ES6+ knowledge"},{id:2,title:"AWS Knowledge",linkLabel:"See devops Skills",linkUrl:"devops",content:"Good experience working on projects with the most used Amazon Web Services technologies for the Web (S3, Lambda, DynamoDB among others)"},{id:3,title:"Html5 / CSS3 / JS Expert",linkLabel:"See Frontend Skills",linkUrl:"frontend",content:"Fast and Pixel perfect development, always considering to develop a maintenable, testable, e performatic code."},{id:4,title:"Good Soft Skills",linkLabel:"See My Linkedin Profile",linkUrl:"https://www.linkedin.com/in/diogocercilio/",content:"I'm a self learner, and I always do my best for the projects. I can teaching a lot, but I'm always open mind to learn new stuff as well. I solve problems, and I'm passionate for the web"}],j=[{id:1,name:"Github",link:"https://github.com/DiogoCercilio",icon:{path:"M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z",viewbox:"0 0 1792 1792"}},{id:2,name:"Linkedin",link:"https://www.linkedin.com/in/diogocercilio/",icon:{path:"M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z",viewbox:"0 -10 550 500"}}],C=[{id:1,name:"About",alias:"about"},{id:2,name:"Portfolio",alias:"portfolio"},{id:3,name:"Skills",alias:"skills"},{id:4,name:"Blog",alias:"blog",to:"https://blog.diogocercilio.com/"}],x={others:[{id:1,name:"Soft Skills",tags:["Extremely Focused","Self learner","Self motivated","Passionated","Friendly"]},{id:1,name:"Methodologies / Tools",tags:["SCRUM","Sprint","Kanban","OKR","JIRA","MVP","AB Testing"]}],frontend:[{id:1,name:"Performance",tags:["Chrome Devtools","Page Speed Insights","Lighthouse","Critical Rendering Path Optimization","HTTP2 Multiplexing Requests","Conca / Minify assets","Lazy load","Gzip","Sprites"]},{id:2,name:"Testing",tags:["Jenkins Pipeline","Github / Bitbucket Hooks","Code review","AB Testing","Cypress","Jest","Mocha","Chai","Jasmine","Husky","Browser Stack","Unit Testing","Integration Testing","E2E Testing"]},{id:3,name:"HTML5",tags:["PWA","Offline First","Mobile First","Semantic","Microformats","SEO","Analytics","Amplitude Analytics","APIS","Pixel Perfect","Cross Browser","Cross Platform","SVG"]},{id:4,name:"CSS3",tags:["Styled Components","SCSS","SMACSSS","BEM","Compass","Advanced selectors","CSS Arquitecture","Material IO","Bootstrap","Animations","Responsive","Fluid","Adaptative","Box Model"]},{id:5,name:"Javascript",tags:["SOLID","Data Structures","Design Patterns","Api integration","Typescript","Semantic Versioning","OOP","Vanilla","ES6+","Ajax","Axios","React","React Native","GraphQL","Electron","Redux","NextJS","Angular 2+","Angular Material","Vuejs","Debugging","JQuery","Canvas","JSON","Ionic","Template Engines"]},{id:6,name:"GIT",tags:["Terminal","SSH","Hooks","Feature Branches","Pull Request","Hard user","Github","Github Pages","Pipelines","Bitbucket","Gitflow"]},{id:7,name:"Tools",tags:["NPM","NPM sripts","Yarn","Webpack","Grunt","Gulp","Bower","Terminal","Visual Studio Code","Docker Compose"]}],backend:[{id:1,name:"Standards",tags:["Serverless","Microservices","OSx","SOLID","Data Structures","Design Patterns","API","Semantic Versioning","OOP","REST"]},{id:2,name:"Testing",tags:["Jenkins Pipeline","Github / Bitbucket Hooks","Code review","AB Testing","Cypress","Jest","Mocha","Chai","Jasmine","Husky","Browser Stack","Unit Testing","Integration Testing","E2E Testing"]},{id:3,name:"NodeJS",tags:["Core","Debugging","ES6+","Typescript","Express","NestJS","AdonisJS","Event Emmiters","Buffers","PM2","SocketIO","Mailer"]},{id:5,name:"Database",tags:["DynamoDB","Mysql","PostgreSQL","NoSql","Relational","MongoDB","GraphQL","Knex","TypeORM"]},{id:6,name:"GIT",tags:["Terminal","SSH","Hooks","Feature Branches","Pull Request","Hard user","Github","Github Pages","Pipelines","Bitbucket","Gitflow"]},{id:7,name:"Tools",tags:["Continous Delivery","Continous Integration","Jenkins","NGINX","Apache","NPM","NPM sripts","Yarn","Webpack","Terminal","Visual Studio Code","Docker Compose","Logging"]}],devops:[{id:1,name:"Devops",tags:["SSH","Terminal","Serverless Framework","Jenkins Configuration","AWS Lambda","AWS S3","AWS Api Gateway","AWS EC2","AWS Cloud Formation","AWS CloudWatch","AWS DynamoBD","Bitbucket Hooks","Github Hooks"]}]},P=[{id:1,name:"Frontend",alias:"frontend"},{id:2,name:"Backend",alias:"backend"},{id:3,name:"Devops",alias:"devops"},{id:4,name:"Others",alias:"others"}],N=[{id:3,img:"omni.png",link:"https://www.omni.com.br/",title:"Omni Banco e Financeira"},{id:4,img:"gv.png",link:"https://www.guichevirtual.com.br/",title:"Guich\xea Virtual"},{id:5,img:"sinduscon.png",link:"https://sindusconsp.com.br/",title:"Sinduscon SP"}],M=[{id:1,type:"img",label:"Embraer",alias:"embraer",src:"embraer.svg"},{id:2,type:"img",label:"Guich\xea Virtual",alias:"guiche",src:"guiche.svg"},{id:3,type:"img",label:"Focusnetworks",alias:"focus",src:"focus.svg"},{id:4,type:"img",label:"Banco Safra",alias:"safra",src:"safra.png"},{id:5,type:"img",label:"Banco BTG Pactual",alias:"btg",src:"btg-pactual.svg"},{id:6,type:"svg",label:"Banco Santander",alias:"santander",src:"santander.svg"},{id:7,type:"img",label:"Sistema Poliedro",alias:"poliedro",src:"poliedro.png"}],I=[{id:1,title:"HTML5 + CSS3 Only Compass",description:"Project Winner from the IMasters competition",link:"https://codepen.io/dcweb/full/WbyYeX",linkLabel:"See on Codepen"},{id:2,title:"Performance for Web Presentation",description:"A complete presentation about Performance for Web",link:"https://slides.com/diogocerciliu/performance-web-guiche-virtual#",linkLabel:"See presentation"},{id:3,title:"NPM Package - DC Form Validator",description:"A Vanilla JS form validator",link:"https://www.npmjs.com/package/dc-form-validator",linkLabel:"See on NPM"},{id:4,title:"NPM Package - Binary 2 Text 2 Binary",description:"A Binary / Text / Binary Converter",link:"https://www.npmjs.com/package/@diogocercilio/binary-2-text-2-binary",linkLabel:"See on NPM"},{id:5,title:"Chrome Dino Game",description:"The Chrome Dino Game re-implemented",link:"https://github.com/DiogoCercilio/dino",linkLabel:"See on Github"},{id:6,title:"Snake Game",description:"The Snake Game using Vanilla JS",link:"https://github.com/DiogoCercilio/snake-game",linkLabel:"See on Github"},{id:7,title:"Node / Express / Typescript Scaffold",description:"Idea for NodeJS project structure",link:"https://github.com/DiogoCercilio/snake-game",linkLabel:"See on Github"}],T=function(){function e(){Object(y.a)(this,e)}return Object(w.a)(e,[{key:"getMocked",value:function(){var e=Object(E.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="/api/sections"===e.t0?3:"/api/contact"===e.t0?4:"/api/about"===e.t0?5:"/api/portfolio/public"===e.t0?6:"/api/portfolio/private"===e.t0?7:"/api/portfolio/personal"===e.t0?8:"/api/skills"===e.t0?9:"/api/categories"===e.t0?10:11;break;case 3:return e.abrupt("return",Promise.resolve(C));case 4:return e.abrupt("return",Promise.resolve(j));case 5:return e.abrupt("return",Promise.resolve(O));case 6:return e.abrupt("return",Promise.resolve(N));case 7:return e.abrupt("return",Promise.resolve(M));case 8:return e.abrupt("return",Promise.resolve(I));case 9:return e.abrupt("return",Promise.resolve(x));case 10:return e.abrupt("return",Promise.resolve(P));case 11:throw new Error("Not implemented yet...");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=Object(E.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getMocked(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),B=n(13),A=n(11),L=n(14),G=function(e){function t(){return Object(y.a)(this,t),Object(B.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(w.a)(t,[{key:"getSections",value:function(){var e=Object(E.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("/api/sections");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFooterLinks",value:function(){var e=Object(E.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("/api/contact");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAboutInfo",value:function(){var e=Object(E.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("/api/about");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(T),D=function(e){function t(){return Object(y.a)(this,t),Object(B.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(w.a)(t,[{key:"getSkills",value:function(){var e=Object(E.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("/api/skills");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCategories",value:function(){var e=Object(E.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("/api/categories");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(T),q=function(e){function t(){return Object(y.a)(this,t),Object(B.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(L.a)(t,e),Object(w.a)(t,[{key:"getPublic",value:function(){var e=Object(E.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("/api/portfolio/public");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getPrivate",value:function(){var e=Object(E.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("/api/portfolio/private");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getPersonal",value:function(){var e=Object(E.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("/api/portfolio/personal");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(T);n(25);function z(e){var t=e.service,n=Object(a.useState)("frontend"),i=Object(u.a)(n,2),o=i[0],c=i[1],l=Object(a.useState)(),s=Object(u.a)(l,2),m=s[0],f=s[1],p=Object(a.useContext)(J);Object(a.useEffect)((function(){Object(E.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,t.getAboutInfo();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))()}),[t]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{aboutInfo:m,onGetScroll:function(e){p.onUpdateOffset(0,e)},onClickSkill:function(e,t){return function(e,t){e.preventDefault(),c(t),k(p.offset[2].min)}(e,t)},loading:!m}),r.a.createElement(ee,{onGetScroll:function(e){return p.onUpdateOffset(1,e)}}),r.a.createElement(se,{onGetScroll:function(e){return p.onUpdateOffset(2,e)},activeCategory:o,onChangeCategory:function(e,t){return c(t)}}))}function F(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",fontSize:"40px"}},"500")}var H=new G,J=r.a.createContext();function R(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)([]),s=Object(u.a)(o,2),m=s[0],f=s[1],p=Object(a.useState)(),d=Object(u.a)(p,2),b=d[0],h=d[1],y=Object(a.useState)(),w=Object(u.a)(y,2),O=w[0],j=w[1],C=Object(a.useState)(!1),x=Object(u.a)(C,2),P=x[0],N=x[1],M=Object(a.useState)(S),I=Object(u.a)(M,2),T=I[0],B=I[1],A=function(){var e=Object(a.useState)({x:document.body.getBoundingClientRect().left,y:document.body.getBoundingClientRect().top,direction:""}),t=Object(u.a)(e,2),n=t[0],r=t[1],i=function(e){r((function(e){return{x:document.body.getBoundingClientRect().left,y:-document.body.getBoundingClientRect().top,direction:e.y>-document.body.getBoundingClientRect().top?"up":"down"}}))};return Object(a.useEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i)}}),[]),n}();Object(a.useEffect)((function(){var e=function(e,t){if(e)return e.find((function(e){return t.y>=e.min&&t.y<=e.max}))}(T,A);e&&h(e.id)}),[A,T]),Object(a.useEffect)((function(){Object(E.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.getSections();case 3:return t=e.sent,f(t),h(t[0].id),e.t0=j,e.next=9,H.getFooterLinks();case 9:e.t1=e.sent,(0,e.t0)(e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(0),N(!0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}),[]);return r.a.createElement(r.a.Fragment,null,P?r.a.createElement(F,null):r.a.createElement(J.Provider,{value:{offset:T,onUpdateOffset:function(e,t){B(function(e,t,n){if(n)return e[t].min=n.offsetTop+20,e[t-1]&&(e[t-1].max=n.offsetTop),e[t+1]||(e[t].max=2*n.offsetTop),e}(T,e,t))},activeMenuItem:b,isShowingSidebar:n,setIsShowingSidebar:i,onChangeMenuHandler:function(e){i(!1),h(e),e<=T.length&&k(T.find((function(t){return t.id===e})).min)}}},r.a.createElement(U,{menu:m}),r.a.createElement(c.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",render:function(){return r.a.createElement(z,{service:H})}})),r.a.createElement(re,{menu:m}),r.a.createElement(g,{menu:O}))))}function W(){var e=Object(a.useContext)(J);return r.a.createElement("div",{className:"MenuTrigger"},r.a.createElement("div",{className:"toggle"},r.a.createElement("input",{id:"menu-trigger",checked:e.isShowingSidebar,type:"checkbox",onChange:function(t){e.setIsShowingSidebar(t.target.checked)}}),r.a.createElement("label",{htmlFor:"menu-trigger"}),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)))}n(46),n(47);function V(e){var t=e.menu,n=Object(a.useContext)(J),i=Object(a.useState)(),o=Object(u.a)(i,2),c=o[0],l=o[1];return Object(a.useEffect)((function(){l(t.find((function(e){return e.id===n.activeMenuItem})))}),[n.activeMenuItem]),r.a.createElement("menu",{className:"MenuHeader"},c&&r.a.createElement("ul",null,r.a.createElement("li",{className:"MenuHeaderItem active"},c.name)))}n(48);function U(e){var t=e.menu;return r.a.createElement("section",{className:"Header"},r.a.createElement("div",{className:"container"},r.a.createElement(V,{menu:t}),r.a.createElement(W,null)))}n(49);function K(e){var t=e.item;return r.a.createElement("div",{className:"PortfolioItem"},r.a.createElement("img",{className:t.alias,src:"logos/".concat(t.src),title:t.label,width:"70",alt:t.label,loading:"lazy",effect:"blur"}))}n(50);function Q(e){var t=e.portfolio;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"Company Experiences:"),r.a.createElement("div",{className:"PortfolioPrivate container"},t?t.map((function(e){return r.a.createElement(K,{key:e.id,item:e})})):r.a.createElement(p,null)))}n(51),n(52);function Y(e){var t=e.banner;return r.a.createElement("div",{className:"PortfolioPublicItem"},r.a.createElement("div",{className:"banner-wrapper"},r.a.createElement("a",{href:t.link,className:"banner-face",title:t.title},r.a.createElement("img",{alt:"Banner",width:"100",src:"screenshots/".concat(t.img),loading:"lazy",effect:"opacity"}))))}function _(e){var t=e.portfolio;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"Some public Projects:"),r.a.createElement("section",{className:"PortfolioPublic flex"},r.a.createElement("div",{className:"container container-small"},t?t.map((function(e){return r.a.createElement(Y,{key:e.id,banner:e})})):r.a.createElement(p,null))))}n(53);function X(e){var t=e.item;return r.a.createElement("div",{className:"PortfolioPersonalItem",style:{backgroundImage:"url(bg.jpg)"}},r.a.createElement("div",{className:"box-content"},r.a.createElement("h3",null,t.title),r.a.createElement("p",null,t.description)),r.a.createElement("a",{className:"btn",href:t.link},t.linkLabel))}n(54);function Z(e){var t=e.portfolio;return r.a.createElement(m.LazyLoadComponent,null,r.a.createElement("h5",null,"Some Personal projects:"),r.a.createElement("div",{className:"PortfolioPersonal"},r.a.createElement("div",{className:"container"},t?t.map((function(e){return r.a.createElement(X,{key:e.id,item:e})})):r.a.createElement(p,null)),r.a.createElement("a",{className:"see-all",href:"https://github.com/DiogoCercilio",target:"_blank",rel:"noopener noreferrer"},"See all projects on Github")))}n(55);var $=new q;function ee(e){var t=e.onGetScroll,n=Object(a.useState)(),i=Object(u.a)(n,2),o=i[0],c=i[1],l=Object(a.useState)(),s=Object(u.a)(l,2),m=s[0],f=s[1],p=Object(a.useState)(),d=Object(u.a)(p,2),b=d[0],g=d[1];return Object(a.useEffect)((function(){Object(E.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,$.getPrivate();case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=f,e.next=8,$.getPublic();case 8:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=g,e.next=13,$.getPersonal();case 13:e.t5=e.sent,(0,e.t4)(e.t5);case 15:case"end":return e.stop()}}),e)})))()}),[]),r.a.createElement("section",{className:"Portfolio",ref:function(e){return t(e)}},r.a.createElement(Q,{portfolio:o}),r.a.createElement(_,{portfolio:m}),r.a.createElement(Z,{portfolio:b}))}n(56);function te(e){var t=e.item,n=Object(a.useContext)(J);return r.a.createElement("li",{className:"MenuSidebarItem".concat(n.activeMenuItem===t.id?" active":"")},t.to?r.a.createElement("a",{href:t.to},t.alias):r.a.createElement(c.b,{to:"#".concat(t.alias),onClick:function(e){e.preventDefault(),n.onChangeMenuHandler(t.id)}},t.alias))}n(57);function ne(e){var t=e.menu;return r.a.createElement("menu",{className:"MenuSidebar"},r.a.createElement("ul",null,t.length?t.map((function(e){return r.a.createElement(te,{key:e.id,item:e})})):r.a.createElement(p,{zoom:".4",color:"#fff"})))}var ae=function(e){function t(e){var n;if(Object(y.a)(this,t),(n=Object(B.a)(this,Object(A.a)(t).call(this,e))).render=function(){return n.state.hasError?n.props.fallback:n.props.children},n.state={hasError:!1},!n.props.fallback)throw new Error("Error Boundary fallback is required");return n}return Object(L.a)(t,e),t}(r.a.Component);ae.getDerivedStateFromError=function(){return{hasError:!0}};n(58);function re(e){var t=e.menu,n=Object(a.useContext)(J);return r.a.createElement("aside",{className:"Sidebar".concat(n.isShowingSidebar?" active":"")},r.a.createElement(ae,{fallback:"Something went wrong..."},r.a.createElement(ne,{menu:t})))}n(59);function ie(e){var t=e.category,n=e.active,a=e.onChangeCategory;return r.a.createElement("li",{className:"SkillsTab".concat(n===t.alias?" active":""),onClick:function(e){a(e,t.alias)}},t.name)}n(60);function oe(e){var t=e.active,n=e.onChangeCategory,a=e.categories,i=e.loading;return r.a.createElement("div",{className:"SkillsTabs"},r.a.createElement("ul",null,i?r.a.createElement(p,null):a.map((function(e){return r.a.createElement(ie,{key:e.id,category:e,active:t,onChangeCategory:n})}))))}n(61);function ce(e){var t=e.category;return r.a.createElement("div",{className:"SkillsItem",style:{backgroundImage:"url(bg.jpg)"}},r.a.createElement("h3",null,t.name),r.a.createElement("div",{className:"skills"},t.tags.map((function(e){return r.a.createElement("span",{key:"".concat(t.name,"_").concat(e)},e)}))))}n(62);var le=new D;function se(e){var t=e.onGetScroll,n=e.activeCategory,i=e.onChangeCategory,o=Object(a.useState)([]),c=Object(u.a)(o,2),l=c[0],s=c[1],f=Object(a.useState)([]),d=Object(u.a)(f,2),b=d[0],g=d[1],h=Object(a.useState)(!0),k=Object(u.a)(h,2),S=k[0],y=k[1];return Object(a.useEffect)((function(){Object(E.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,le.getCategories();case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=g,e.next=8,le.getSkills(n);case 8:e.t3=e.sent,(0,e.t2)(e.t3),y(!1);case 11:case"end":return e.stop()}}),e)})))()}),[n]),r.a.createElement(m.LazyLoadComponent,null,r.a.createElement("section",{className:"Skills",ref:function(e){return t(e)}},r.a.createElement("div",{className:"container"},r.a.createElement(oe,{active:n,categories:l,onChangeCategory:i,loading:!l}),S?r.a.createElement(p,null):b[n].map((function(e,t){return r.a.createElement(ce,{key:"".concat(e.id,"_").concat(t),category:e})})))))}function ue(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),"Blog Home Works")}function me(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",fontSize:"40px"}},"404")}n(63);function fe(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)([]),s=Object(u.a)(o,1)[0],m=Object(a.useState)(),f=Object(u.a)(m,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{onChangeMenuTrigger:function(e){return i(e)},itemActive:s.find((function(e){return e.id===f})),isMenuOpen:n}),r.a.createElement(c.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/blog",exact:!0,render:function(){return r.a.createElement(ue,null)}}),r.a.createElement(l.a,{path:"/",component:me}))))}o.a.render(r.a.createElement((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:R}),r.a.createElement(l.a,{path:"/blog",component:fe}),r.a.createElement(l.a,{path:"/",component:s}))))}),null),document.getElementById("root"))}]),[[29,1,2]]]);
//# sourceMappingURL=main.a7d89fb7.chunk.js.map