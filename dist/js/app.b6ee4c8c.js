(function(t){function e(e){for(var a,c,i=e[0],l=e[1],s=e[2],d=0,u=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&u.push(n[c][0]),n[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);m&&m(e);while(u.length)u.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,c=1;c<r.length;c++){var l=r[c];0!==n[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},o=[];function c(t){return i.p+"js/"+({about:"about",projects:"projects"}[t]||t)+"."+{about:"b549b176",projects:"ea912e87"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,a){r=n[t]=[e,a]}));e.push(r[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(t);var s=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(d);var r=n[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,r[1](s)}n[t]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=s;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0ea0":function(t,e,r){t.exports=r.p+"img/developer.1e987b35.svg"},"18b8":function(t,e,r){"use strict";r("3cfd")},"198d":function(t,e,r){t.exports=r.p+"img/Flask_web_app.c79f5c64.jpg"},"19d3":function(t,e,r){},"2a70":function(t,e,r){"use strict";var a=r("7a23"),n={class:"pt-10 sm:pt-14"},o={class:"text-center"},c={class:"text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"},i={class:"mt-10 sm:mt-10"},l=Object(a["i"])("h3",{class:"\r\n\t\t\t\t\ttext-center text-secondary-dark\r\n\t\t\t\t\tdark:text-ternary-light\r\n\t\t\t\t\ttext-md\r\n\t\t\t\t\tsm:text-xl\r\n\t\t\t\t\tfont-normal\r\n\t\t\t\t\tmb-3\r\n\t\t\t\t"}," Search projects by title or filter by category ",-1),s={class:"\r\n\t\t\t\t\tflex\r\n\t\t\t\t\tjustify-between\r\n\t\t\t\t\tborder-b border-primary-light\r\n\t\t\t\t\tdark:border-secondary-dark\r\n\t\t\t\t\tpb-3\r\n\t\t\t\t\tgap-3\r\n\t\t\t\t"},d={class:"flex justify-between gap-2"},m=Object(a["i"])("span",{class:"\r\n\t\t\t\t\t\t\thidden\r\n\t\t\t\t\t\t\tsm:block\r\n\t\t\t\t\t\t\tbg-primary-light\r\n\t\t\t\t\t\t\tdark:bg-ternary-dark\r\n\t\t\t\t\t\t\tp-2.5\r\n\t\t\t\t\t\t\tshadow-sm\r\n\t\t\t\t\t\t\trounded-xl\r\n\t\t\t\t\t\t\tcursor-pointer\r\n\t\t\t\t\t\t\t"},[Object(a["i"])("i",{"data-feather":"search",class:"text-ternary-dark dark:text-ternary-light"})],-1),u={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"};function b(t,e,r,b,p,g){var h=Object(a["z"])("ProjectsFilter"),f=Object(a["z"])("ProjectSingle");return Object(a["r"])(),Object(a["e"])("section",n,[Object(a["i"])("div",o,[Object(a["i"])("p",c,Object(a["B"])(t.projectsHeading),1)]),Object(a["i"])("div",i,[l,Object(a["i"])("div",s,[Object(a["i"])("div",d,[m,Object(a["H"])(Object(a["i"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.searchProject=e}),class:"\r\n\t\t\t\t\t\tpl-3\r\n\t\t\t\t\t\tpr-1\r\n\t\t\t\t\t\tsm:px-4\r\n\t\t\t\t\t\tpy-2\r\n\t\t\t\t\t\tborder-1 border-gray-200\r\n\t\t\t\t\t\tdark:border-secondary-dark\r\n\t\t\t\t\t\trounded-lg\r\n\t\t\t\t\t\ttext-sm\r\n\t\t\t\t\t\tsm:text-md\r\n\t\t\t\t\t\tbg-secondary-light\r\n\t\t\t\t\t\tdark:bg-ternary-dark\r\n\t\t\t\t\t\ttext-primary-dark\r\n\t\t\t\t\t\tdark:text-ternary-light\r\n\t\t\t\t\t\t",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"},null,512),[[a["D"],t.searchProject]])]),Object(a["i"])(h,{onChange:e[2]||(e[2]=function(e){return t.selectedProject=e})})])]),Object(a["i"])("div",u,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(g.filteredProjects,(function(t){return Object(a["r"])(),Object(a["e"])(f,{key:t.id,project:t},null,8,["project"])})),128))])])}r("d81d"),r("fb6a"),r("caad"),r("2532"),r("4d63"),r("ac1f"),r("25f0"),r("4de4"),r("466d"),r("5319");var p=r("77c6"),g=r.n(p),h=Object(a["i"])("option",{value:"",class:"text-sm sm:text-md"},"All Projects",-1);function f(t,e,r,n,o,c){return Object(a["r"])(),Object(a["e"])("div",null,[Object(a["i"])("select",{onChange:e[1]||(e[1]=function(e){return t.$emit("change",e.target.value)}),name:r.select,id:r.select,class:"\r\n\t\t\t\tpx-4\r\n\t\t\t\tsm:px-6\r\n\t\t\t\tpy-2\r\n\t\t\t\tborder-1 border-gray-200\r\n\t\t\t\tdark:border-secondary-dark\r\n\t\t\t\trounded-lg\r\n\t\t\t\ttext-sm\r\n\t\t\t\tsm:text-md\r\n\t\t\t\tdark:font-medium\r\n\t\t\t\tbg-secondary-light\r\n\t\t\t\tdark:bg-ternary-dark\r\n\t\t\t\ttext-primary-dark\r\n\t\t\t\tdark:text-ternary-light\r\n\t\t\t"},[h,(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(r.selectOptions,(function(t){return Object(a["r"])(),Object(a["e"])("option",{key:t,value:t,class:"text-normal sm:text-md"},Object(a["B"])(t),9,["value"])})),128))],40,["name","id"])])}var j={props:{select:{type:String,default:"projects",required:!0},selectOptions:{type:Array,default:function(){return["Web Application","Bots Development","Penetration testing","Image processing"]}}}},x=r("6b0d"),y=r.n(x);const O=y()(j,[["render",f]]);var v=O,k={class:"text-center px-4 py-6"},w={class:"text-2xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"},P={class:"text-lg text-ternary-dark dark:text-ternary-light"};function M(t,e,r,n,o,c){return Object(a["r"])(),Object(a["e"])("a",{class:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark","aria-label":"Single Project",href:r.project.url,target:"__blank",rel:"noopener noreferrer"},[Object(a["i"])("div",null,[Object(a["i"])("img",{src:r.project.img,alt:r.project.title,class:"rounded-t-xl border-none"},null,8,["src","alt"])]),Object(a["i"])("div",k,[Object(a["i"])("p",w,Object(a["B"])(r.project.title),1),Object(a["i"])("span",P,Object(a["B"])(r.project.category),1)])],8,["href"])}var S={props:["project"]};const _=y()(S,[["render",M]]);var A=_,T=[{id:1,title:"BDD: Automate Testing Web Applications",url:"https://github.com/MoElaSec/Python_Behave_Selenium_WebApp_Auto_testing",category:"Web Application",img:r("6b87")},{id:2,title:"Image Processing Tools",url:"https://github.com/MoElaSec/Practical-Image-Processing",category:"Image processing",img:r("a7fc")},{id:3,title:"Tools for Pentesters & Net Eng.",url:"https://github.com/MoElaSec/Net_Tools",category:"Penetration testing",img:r("86e6")},{id:4,title:"mathematical analysis & algorithms tools",url:"https://github.com/MoElaSec/Applied_Math",category:"Algorithms",img:r("6ab3")},{id:5,title:"Discord Bots: CoCAPI, RoitAPI",url:"https://github.com/MoElaSec/Discord-Bots-List",category:"Bots",img:r("2d5d")},{id:6,title:"Full-stack python Social Media with jira integration.",url:"https://github.com/MoElaSec/Flask_Blog_Jira",category:"Web Application",img:r("198d")}],C=T,E={components:{ProjectSingle:A,ProjectsFilter:v},data:function(){return{projects:C,projectsHeading:"Projects Portfolio",selectedProject:"",searchProject:""}},computed:{filteredProjects:function(){return this.selectedProject?this.filterProjectsByCategory():this.searchProject?this.filterProjectsBySearch():this.projects}},methods:{filterProjectsByCategory:function(){var t=this;return this.projects.map((function(e){var r=e.category.charAt(0).toUpperCase()+e.category.slice(1);return console.log(r),r.includes(t.selectedProject)}))},filterProjectsBySearch:function(){var t=new RegExp(this.searchProject,"i");return this.projects.filter((function(e){return e.title.match(t)}))}},mounted:function(){g.a.replace()}};const B=y()(E,[["render",b]]);e["a"]=B},"2d5d":function(t,e,r){t.exports=r.p+"img/Discord bots.33088834.jpg"},"2d66":function(t,e,r){t.exports=r.p+"img/logo-dark.67528ee0.svg"},"3cfd":function(t,e,r){},"405b":function(t,e,r){},"557b":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("ac1f"),r("5319");var a=r("7a23"),n=Object(a["i"])("i",{"data-feather":"chevron-up"},null,-1);function o(t,e,r,o,c,i){var l=Object(a["z"])("AppHeader"),s=Object(a["z"])("router-view"),d=Object(a["z"])("back-to-top"),m=Object(a["z"])("AppFooter");return Object(a["r"])(),Object(a["e"])("div",{class:[t.appTheme,"pt-0.5"]},[Object(a["i"])(l),Object(a["i"])(a["b"],{name:"fade",mode:"out-in"},{default:Object(a["G"])((function(){return[Object(a["i"])(s,{theme:t.appTheme},null,8,["theme"])]})),_:1}),Object(a["i"])(d,{visibleoffset:"500",right:"30px",bottom:"20px",class:"shadow-lg"},{default:Object(a["G"])((function(){return[n]})),_:1}),Object(a["i"])(m)],2)}var c=r("77c6"),i=r.n(c),l=r("2d66"),s=r.n(l),d=r("e91d"),m=r.n(d),u=Object(a["J"])("data-v-2144640d");Object(a["u"])("data-v-2144640d");var b={id:"nav",class:"sm:container sm:mx-auto"},p={class:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"},g={class:"flex justify-between items-center px-4 sm:px-0"},h={key:0,src:s.a,class:"w-36",alt:"Dark Logo"},f={key:1,src:m.a,class:"w-36",alt:"Light Logo"},j={class:"sm:hidden"},x={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"},y={key:0,"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z","clip-rule":"evenodd"},O={key:1,"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"},v={class:"hidden sm:flex justify-between items-center flex-col md:flex-row"},k={class:"hidden md:block"};Object(a["s"])();var w=u((function(t,e,r,n,o,c){var i=Object(a["z"])("router-link"),l=Object(a["z"])("theme-switcher"),s=Object(a["z"])("AppHeaderLinks"),d=Object(a["z"])("HireMeModal");return Object(a["r"])(),Object(a["e"])("nav",b,[Object(a["i"])("div",p,[Object(a["i"])("div",g,[Object(a["i"])("div",null,[Object(a["i"])(i,{to:"/"},{default:u((function(){return["light"===o.theme?(Object(a["r"])(),Object(a["e"])("img",h)):(Object(a["r"])(),Object(a["e"])("img",f))]})),_:1})]),Object(a["i"])(l,{theme:o.theme,onThemeChanged:c.updateTheme,class:"block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg"},null,8,["theme","onThemeChanged"]),Object(a["i"])("div",j,[Object(a["i"])("button",{onClick:e[1]||(e[1]=function(t){return o.isOpen=!o.isOpen}),type:"button",class:"focus:outline-none","aria-label":"Hamburger Menu"},[(Object(a["r"])(),Object(a["e"])("svg",x,[o.isOpen?(Object(a["r"])(),Object(a["e"])("path",y)):Object(a["f"])("",!0),o.isOpen?Object(a["f"])("",!0):(Object(a["r"])(),Object(a["e"])("path",O))]))])])]),Object(a["i"])(s,{showModal:c.showModal,isOpen:o.isOpen},null,8,["showModal","isOpen"]),Object(a["i"])("div",v,[Object(a["i"])("div",k,[Object(a["i"])("button",{class:"text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5",onClick:e[2]||(e[2]=function(t){return c.showModal()}),"aria-label":"Hire Me Button"}," Hire Me ")]),Object(a["i"])(l,{theme:o.theme,onThemeChanged:c.updateTheme,class:"ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"},null,8,["theme","onThemeChanged"])])]),Object(a["i"])(d,{showModal:c.showModal,modal:o.modal,categories:o.categories,"aria-modal":"Hire Me Modal"},null,8,["showModal","modal","categories"])])})),P={key:0,"data-feather":"moon",class:"text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"},M={key:1,"data-feather":"sun",class:"text-gray-200 hover:text-gray-50 w-5"};function S(t,e,r,n,o,c){return Object(a["r"])(),Object(a["e"])("a",{href:"#",onClick:e[1]||(e[1]=Object(a["I"])((function(){return c.toggleTheme&&c.toggleTheme.apply(c,arguments)}),["prevent"])),"aria-label":"Theme Switcher"},["light"===r.theme?(Object(a["r"])(),Object(a["e"])("i",P)):(Object(a["r"])(),Object(a["e"])("i",M))])}var _={props:{theme:{type:String,required:!0}},methods:{toggleTheme:function(){var t="light"===this.theme?"dark":"light";localStorage.setItem("theme",t),this.$emit("themeChanged",t),this.$router.go()}}},A=r("6b0d"),T=r.n(A);const C=T()(_,[["render",S]]);var E=C,B=(r("b0c0"),Object(a["J"])("data-v-6589dbc7"));Object(a["u"])("data-v-6589dbc7");var H={class:"fixed inset-0 z-30"},z={class:"flex flex-col items-center justify-center h-full w-full"},I={class:"modal-wrapper flex items-center z-30"},D={class:"modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"},L={class:"modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"},q=Object(a["i"])("h5",{class:" text-primary-dark dark:text-primary-light text-2xl"}," What project are you looking for? ",-1),F=Object(a["i"])("i",{"data-feather":"x"},null,-1),G={class:"modal-body p-5 w-full h-full"},N={action:"https://formspree.io/f/xnqwnlaz",method:"POST",class:"max-w-xl m-4 text-left"},R=Object(a["i"])("div",{class:"mt-0"},[Object(a["i"])("input",{class:"w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"name",name:"name",type:"text",required:"",placeholder:"Name","aria-label":"Name"})],-1),W=Object(a["i"])("div",{class:"mt-6"},[Object(a["i"])("input",{class:"w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"email",name:"email",type:"text",required:"",placeholder:"Email","aria-label":"Email"})],-1),J={class:"mt-6"},V={class:"w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"subject",name:"subject",type:"text",required:"","aria-label":"Project Category"},$=Object(a["i"])("div",{class:"mt-6"},[Object(a["i"])("textarea",{class:"w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"message",name:"message",cols:"14",rows:"6","aria-label":"Details",placeholder:"Project description"})],-1),U=Object(a["i"])("div",{class:"mt-6 pb-4 sm:pb-1"},[Object(a["i"])("button",{class:"px-4\r\n\t\t\t\t\t\t\t\t\t\t\tsm:px-6\r\n\t\t\t\t\t\t\t\t\t\t\tpy-2\r\n\t\t\t\t\t\t\t\t\t\t\tsm:py-2.5\r\n\t\t\t\t\t\t\t\t\t\t\ttext-white\r\n\t\t\t\t\t\t\t\t\t\t\tfont-normal\r\n\t\t\t\t\t\t\t\t\t\t\tsm:font-medium\r\n\t\t\t\t\t\t\t\t\t\t\tbg-indigo-500\r\n\t\t\t\t\t\t\t\t\t\t\thover:bg-indigo-600\r\n\t\t\t\t\t\t\t\t\t\t\trounded-md\r\n\t\t\t\t\t\t\t\t\t\t\tfocus:ring-1 focus:ring-indigo-900",type:"submit","aria-label":"Submit Request"}," Send Request ")],-1),Y={class:"modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right"};Object(a["s"])();var K=B((function(t,e,r,n,o,c){return Object(a["r"])(),Object(a["e"])(a["b"],{name:"fade"},{default:B((function(){return[Object(a["H"])(Object(a["i"])("div",H,[Object(a["H"])(Object(a["i"])("div",{onClick:e[1]||(e[1]=function(t){return r.showModal()}),class:"bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"},null,512),[[a["E"],r.modal]]),Object(a["i"])("main",z,[Object(a["i"])(a["b"],{name:"fade-up-down"},{default:B((function(){return[Object(a["H"])(Object(a["i"])("div",I,[Object(a["i"])("div",D,[Object(a["i"])("div",L,[q,Object(a["i"])("button",{class:"px-4 font-bold text-primary-dark dark:text-primary-light",onClick:e[2]||(e[2]=function(t){return r.showModal()})},[F])]),Object(a["i"])("div",G,[Object(a["i"])("form",N,[R,W,Object(a["i"])("div",J,[Object(a["i"])("select",V,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(r.categories,(function(t){return Object(a["r"])(),Object(a["e"])("option",{key:t.id,value:t.value},Object(a["B"])(t.name),9,["value"])})),128))])]),$,U])]),Object(a["i"])("div",Y,[Object(a["i"])("button",{class:" px-4\r\n\t\t\t\t\t\t\t\t\tsm:px-6\r\n\t\t\t\t\t\t\t\t\tpy-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light\r\n\t\t\t\t\t\t\t\t\trounded-md\r\n\t\t\t\t\t\t\t\t\tfont-normal\r\n\t\t\t\t\t\t\t\t\tsm:font-bold\r\n\t\t\t\t\t\t\t\t\tfocus:ring-1 focus:ring-indigo-900",onClick:e[3]||(e[3]=function(t){return r.showModal()}),"aria-label":"Close Modal"}," Close ")])])],512),[[a["E"],r.modal]])]})),_:1})])],512),[[a["E"],r.modal]])]})),_:1})})),Q={props:["showModal","modal","categories"],data:function(){return{}},mounted:function(){i.a.replace()},updated:function(){i.a.replace()},methods:{}};r("967d");const X=T()(Q,[["render",K],["__scopeId","data-v-6589dbc7"]]);var Z=X,tt=Object(a["h"])("Projects"),et=Object(a["h"])("About Me"),rt=Object(a["h"])("Contact"),at={class:"border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"};function nt(t,e,r,n,o,c){var i=Object(a["z"])("router-link");return Object(a["r"])(),Object(a["e"])("div",{class:[r.isOpen?"block":"hidden","m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"]},[Object(a["i"])(i,{to:"/projects",class:"block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"Projects"},{default:Object(a["G"])((function(){return[tt]})),_:1}),Object(a["i"])(i,{to:"/about",class:"block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"About Me"},{default:Object(a["G"])((function(){return[et]})),_:1}),Object(a["i"])(i,{to:"/contact",class:"block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"Contact"},{default:Object(a["G"])((function(){return[rt]})),_:1}),Object(a["i"])("div",at,[Object(a["i"])("button",{class:"sm:hidden block text-left text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2",onClick:e[1]||(e[1]=function(t){return r.showModal()}),"aria-label":"Hire Me Button"}," Hire Me ")])],2)}var ot={props:["showModal","isOpen"]};const ct=T()(ot,[["render",nt]]);var it=ct,lt={components:{ThemeSwitcher:E,HireMeModal:Z,AppHeaderLinks:it},data:function(){return{isOpen:!1,theme:"",modal:!1,categories:[{id:1,value:"web",name:"Web Application"},{id:2,value:"mobile",name:"Mobile Application"},{id:3,value:"pentesting",name:"Penetration testing"},{id:4,value:"Image processing",name:"Image processing"}]}},created:function(){this.theme=localStorage.getItem("theme")||"light"},mounted:function(){i.a.replace(),this.theme=localStorage.getItem("theme")||"light"},methods:{updateTheme:function(t){this.theme=t},showModal:function(){this.modal?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),this.modal=!1):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),this.modal=!0)}},updated:function(){i.a.replace()}};r("fe7d");const st=T()(lt,[["render",w],["__scopeId","data-v-2144640d"]]);var dt=st,mt={class:"container mx-auto "},ut={class:"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"},bt={class:"flex flex-col justify-center items-center mb-12 sm:mb-28"},pt=Object(a["i"])("p",{class:"text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5"}," Follow me ",-1),gt={class:"flex gap-4 sm:gap-8"},ht={class:"flex justify-center items-center text-center"},ft={class:"text-lg text-ternary-dark dark:text-ternary-light "},jt=Object(a["i"])("a",{href:"https://github.com/MoElaSec/Vue_Portfolio",target:"__blank",rel:"noopener noreferrer",class:"hover:underline"}," Vue.js & TailwindCSS Portfolio ",-1),xt=Object(a["h"])(" . "),yt=Object(a["i"])("a",{href:"https://mo-ela.gitbook.io/",target:"__blank",rel:"noopener noreferrer",class:"text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline"},"Mo Eltahir",-1);function Ot(t,e,r,n,o,c){return Object(a["r"])(),Object(a["e"])("div",mt,[Object(a["i"])("div",ut,[Object(a["i"])("div",bt,[pt,Object(a["i"])("ul",gt,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(o.socials,(function(t){return Object(a["r"])(),Object(a["e"])("a",{key:t.id,href:t.url,target:"__blank",rel:"noopener noreferrer",class:"text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm∫ p-4"},[Object(a["i"])("i",{"data-feather":t.icon,class:"w-5 sm:w-8 h-5 sm:h-8"},null,8,["data-feather"])],8,["href"])})),128))])]),Object(a["i"])("div",ht,[Object(a["i"])("div",ft,[Object(a["h"])(" © "+Object(a["B"])(o.copyrightDate)+". ",1),jt,xt,yt])])])])}var vt={data:function(){return{copyrightDate:(new Date).getFullYear(),socials:[{id:1,name:"GitHub",icon:"github",url:"https://github.com/MoElaSec"},{id:2,name:"Twitter",icon:"twitter",url:"https://twitter.com/ShifraSec"},{id:3,name:"Blog",icon:"book",url:"https://mo-ela.gitbook.io/shifrablog/pentesting/ejpt"},{id:4,name:"Instagram",icon:"instagram",url:"#"}]}},mounted:function(){i.a.replace()},updated:function(){i.a.replace()}};const kt=T()(vt,[["render",Ot]]);var wt=kt,Pt={components:{AppHeader:dt,AppFooter:wt},data:function(){return{appTheme:localStorage.getItem("theme")}},mounted:function(){i.a.replace()},updated:function(){i.a.replace()}};r("18b8");const Mt=T()(Pt,[["render",o]]);var St=Mt,_t=(r("d3b7"),r("3ca3"),r("ddb0"),r("7db0"),r("fb6a"),r("d81d"),r("a630"),r("159b"),r("b64b"),r("6c02")),At={class:"container mx-auto"},Tt={class:"mt-10 sm:mt-20 flex justify-center"},Ct=Object(a["h"])("More Projects");function Et(t,e,r,n,o,c){var i=Object(a["z"])("AppBanner"),l=Object(a["z"])("ProjectsGrid"),s=Object(a["z"])("router-link");return Object(a["r"])(),Object(a["e"])("div",At,[Object(a["i"])(i,{class:"mb-5 sm:mb-8"}),Object(a["i"])(l),Object(a["i"])("div",Tt,[Object(a["i"])(s,{to:"/projects",class:"flex items-center px-6 py-3 rounded-xl shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl font-medium","aria-label":"More Projects"},{default:Object(a["G"])((function(){return[Ct]})),_:1})])])}var Bt=r("0ea0"),Ht=r.n(Bt),zt=r("71d7"),It=r.n(zt),Dt={class:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"},Lt=Object(a["g"])('<div class="w-full md:w-1/3 text-left"><h1 class="text-3xl md:text-4xl xl:text-5xl text-center sm:text-left font-semibold text-ternary-dark dark:text-primary-light uppercase"> Hi, I&#39;m Mo Eltahir </h1><p class="mt-4 text-xl md:text-2xl xl:text-4xl text-center sm:text-left font-semibold leading-none text-gray-400"> A Full-Stack Developer &amp; Penetration Tester </p><div class="flex justify-center sm:block"><a download="Mo_ELtahir_Resume.pdf" href="/files/Mo_ELtahir_Resume.pdf" class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white" aria-label="Download Resume"><i data-feather="arrow-down-circle" class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6"></i><span class="text-sm sm:text-lg">Download CV</span></a></div></div>',1),qt={class:"w-full md:w-2/3 text-right float-right"},Ft={key:0,src:Ht.a,alt:"Developer"},Gt={key:1,src:It.a,alt:"Developer"};function Nt(t,e,r,n,o,c){return Object(a["r"])(),Object(a["e"])("section",Dt,[Lt,Object(a["i"])("div",qt,["light"===t.theme?(Object(a["r"])(),Object(a["e"])("img",Ft)):(Object(a["r"])(),Object(a["e"])("img",Gt))])])}var Rt={name:"Home",data:function(){return{theme:""}},created:function(){this.theme=localStorage.getItem("theme")||"light"},mounted:function(){i.a.replace(),this.theme=localStorage.getItem("theme")||"light"},updated:function(){i.a.replace()},methods:{}};const Wt=T()(Rt,[["render",Nt]]);var Jt=Wt,Vt=r("2a70"),$t={name:"Home",components:{AppBanner:Jt,ProjectsGrid:Vt["a"]}};const Ut=T()($t,[["render",Et]]);var Yt=Ut,Kt=[{path:"/",name:"Home",component:Yt,meta:{title:"Mo - Home"}},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))},meta:{title:"Mo - About"}},{path:"/projects",name:"Projects",component:function(){return r.e("projects").then(r.bind(null,"acca"))},meta:{title:"Mo - Projects"}},{path:"/projects/single-project",name:"Single Project",component:function(){return r.e("projects").then(r.bind(null,"76fc"))},meta:{title:"Mo - Single Project"}},{path:"/contact",name:"Contact",component:function(){return r.e("projects").then(r.bind(null,"b8fa"))},meta:{title:"Mo - Contact"}}],Qt=Object(_t["a"])({history:Object(_t["b"])("/"),routes:Kt,scrollBehavior:function(){document.getElementById("app").scrollIntoView()}}),Xt=Qt;Qt.beforeEach((function(t,e,r){var a=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.title})),n=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags})),o=e.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags}));if(a?document.title=a.meta.title:o&&(document.title=o.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(t){return t.parentNode.removeChild(t)})),!n)return r();n.meta.metaTags.map((function(t){var e=document.createElement("meta");return Object.keys(t).forEach((function(r){e.setAttribute(r,t[r])})),e.setAttribute("data-vue-router-controlled",""),e})).forEach((function(t){return document.head.appendChild(t)})),r()}));r("557b");var Zt=r("6afc"),te=r("77c6");te.replace(),Object(a["d"])(St).use(Xt).use(Zt["a"]).mount("#app");var ee=localStorage.getItem("theme");"dark"===ee&&document.querySelector("body").classList.contains("app-theme")?document.querySelector("body").classList.add("bg-primary-dark"):document.querySelector("body").classList.add("bg-secondary-light")},"6ab3":function(t,e,r){t.exports=r.p+"img/algo.689e7cf3.jpg"},"6b87":function(t,e,r){t.exports=r.p+"img/web-project-2.646cb829.jpg"},"71d7":function(t,e,r){t.exports=r.p+"img/developer-dark.708a2b5d.svg"},"86e6":function(t,e,r){t.exports=r.p+"img/pentesting.5797d306.jpg"},"967d":function(t,e,r){"use strict";r("19d3")},a7fc:function(t,e,r){t.exports=r.p+"img/mobile-project-2.1efd312e.jpg"},e91d:function(t,e,r){t.exports=r.p+"img/logo-light.9fb0346a.svg"},fe7d:function(t,e,r){"use strict";r("405b")}});
//# sourceMappingURL=app.b6ee4c8c.js.map