(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["projects"],{"76fc":function(e,t,i){"use strict";i.r(t);var a=i("7a23"),r={class:"container mx-auto mt-10 sm:mt-20"};function c(e,t,i,c,s,o){var l=Object(a["z"])("ProjectHeader"),n=Object(a["z"])("ProjectGallery"),d=Object(a["z"])("ProjectInfo"),m=Object(a["z"])("ProjectRelatedProjects");return Object(a["r"])(),Object(a["e"])("div",r,[Object(a["i"])(l,{singleProjectHeader:e.singleProjectHeader},null,8,["singleProjectHeader"]),Object(a["i"])(n,{projectImages:e.projectImages},null,8,["projectImages"]),Object(a["i"])(d,{projectInfo:e.projectInfo},null,8,["projectInfo"]),Object(a["i"])(m,{relatedProject:e.relatedProject},null,8,["relatedProject"])])}i("ac1f"),i("5319");var s=i("77c6"),o=i.n(s),l={class:"text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"},n={class:"flex"},d={class:"flex items-center mr-10"},m=Object(a["i"])("i",{"data-feather":"clock",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),u={class:"ml-2 leading-none text-primary-dark dark:text-primary-light"},b={class:"flex items-center"},p=Object(a["i"])("i",{"data-feather":"tag",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),j={class:"ml-2 leading-none text-primary-dark dark:text-primary-light"};function g(e,t,i,r,c,s){return Object(a["r"])(),Object(a["e"])("div",null,[Object(a["i"])("p",l,Object(a["B"])(i.singleProjectHeader.singleProjectTitle),1),Object(a["i"])("div",n,[Object(a["i"])("div",d,[m,Object(a["i"])("span",u,Object(a["B"])(i.singleProjectHeader.singleProjectDate),1)]),Object(a["i"])("div",b,[p,Object(a["i"])("span",j,Object(a["B"])(i.singleProjectHeader.singleProjectTag),1)])])])}var f={props:["singleProjectHeader"]},x=i("6b0d"),O=i.n(x);const h=O()(f,[["render",g]]);var y=h,k={class:"grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12"};function v(e,t,i,r,c,s){return Object(a["r"])(),Object(a["e"])("div",k,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(i.projectImages,(function(e){return Object(a["r"])(),Object(a["e"])("div",{class:"mb-10 sm:mb-0",key:e.id},[Object(a["i"])("img",{src:e.img,class:"rounded-xl cursor-pointer shadow-lg sm:shadow-none",alt:"{{ projectImage.title }}"},null,8,["src"])])})),128))])}var P={props:["projectImages"]};const w=O()(P,[["render",v]]);var I=w,q=(i("a15b"),{class:"block sm:flex gap-0 sm:gap-10 mt-14"}),H={class:"w-full sm:w-1/3 text-left"},S={class:"mb-7"},B={class:"text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2"},D={class:"leading-loose"},L={class:"mb-7"},C={class:"text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2"},M={class:"text-primary-dark dark:text-ternary-light"},T={class:"mb-7"},U={class:"text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2"},z={class:"text-primary-dark dark:text-ternary-light"},N={class:"text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2"},A={class:"flex items-center gap-3 mt-5"},F={class:"w-full sm:w-2/3 text-left mt-10 sm:mt-0"},W={class:"text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"};function G(e,t,i,r,c,s){return Object(a["r"])(),Object(a["e"])("div",q,[Object(a["i"])("div",H,[Object(a["i"])("div",S,[Object(a["i"])("p",B,Object(a["B"])(i.projectInfo.clientHeading),1),Object(a["i"])("ul",D,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(i.projectInfo.companyInfos,(function(e){return Object(a["r"])(),Object(a["e"])("li",{key:e,class:"text-ternary-dark dark:text-ternary-light"},[Object(a["i"])("span",null,Object(a["B"])(e.title)+": ",1),Object(a["i"])("a",{href:"#",class:"Website"==e.title||"Phone"==e.title?"hover:underline cursor-pointer":"","aria-label":"Project Website and Phone"},Object(a["B"])(e.details),3)])})),128))])]),Object(a["i"])("div",L,[Object(a["i"])("p",C,Object(a["B"])(i.projectInfo.objectivesHeading),1),Object(a["i"])("p",M,Object(a["B"])(i.projectInfo.objectivesDetails),1)]),Object(a["i"])("div",T,[Object(a["i"])("p",U,Object(a["B"])(i.projectInfo.technologies[0].title),1),Object(a["i"])("p",z,Object(a["B"])(i.projectInfo.technologies[0].techs.join(", ")),1)]),Object(a["i"])("div",null,[Object(a["i"])("p",N,Object(a["B"])(i.projectInfo.socialSharingsHeading),1),Object(a["i"])("div",A,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(i.projectInfo.socialSharings,(function(e){return Object(a["r"])(),Object(a["e"])("a",{key:e.id,href:e.url,target:"__blank","aria-label":"Share Project",class:"bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm"},[Object(a["i"])("i",{"data-feather":e.icon,class:"w-4 lg:w-5 h-4 lg:h-5"},null,8,["data-feather"])],8,["href"])})),128))])])]),Object(a["i"])("div",F,[Object(a["i"])("p",W,Object(a["B"])(i.projectInfo.projectDetailsHeading),1),(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(i.projectInfo.projectDetails,(function(e){return Object(a["r"])(),Object(a["e"])("p",{key:e.id,class:"mb-5 text-lg text-ternary-dark dark:text-ternary-light"},Object(a["B"])(e.details),1)})),128))])])}var J={props:["projectInfo"],mounted:function(){o.a.replace()},updated:function(){o.a.replace()}};const K=O()(J,[["render",G]]);var E=K,R={class:"mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark"},Y={class:"text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left"},_={class:"grid grid-cols-1 sm:grid-cols-4 gap-10"};function Q(e,t,i,r,c,s){return Object(a["r"])(),Object(a["e"])("div",R,[Object(a["i"])("p",Y,Object(a["B"])(i.relatedProject.relatedProjectsHeading),1),Object(a["i"])("div",_,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(i.relatedProject.relatedProjects,(function(e){return Object(a["r"])(),Object(a["e"])("div",{key:e.id},[Object(a["i"])("img",{src:e.img,class:"rounded-xl cursor-pointer",alt:e.title},null,8,["src","alt"])])})),128))])])}var V={props:["relatedProject"]};const X=O()(V,[["render",Q]]);var Z=X,$={name:"Projects",components:{ProjectHeader:y,ProjectGallery:I,ProjectInfo:E,ProjectRelatedProjects:Z},data:function(){return{singleProjectHeader:{singleProjectTitle:"Project Management UI",singleProjectDate:"Jul 26, 2021",singleProjectTag:"UI / Frontend"},projectImages:[{id:1,title:"Kabul Project Management UI",img:i("ccf7")},{id:2,title:"Kabul Project Management UI",img:i("6b87")},{id:3,title:"Kabul Project Management UI",img:i("a7fc")}],projectInfo:{clientHeading:"About Client",companyInfos:[{id:1,title:"Name",details:"Company Ltd"},{id:2,title:"Services",details:"UI Design & Frontend Development"},{id:3,title:"Website",details:"https://company.com"},{id:4,title:"Phone",details:"555 8888 888"}],objectivesHeading:"Objective",objectivesDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",technologies:[{title:"Tools & Technologies",techs:["HTML","CSS","JavaScript","Vue.js","TailwindCSS","AdobeXD"]}],projectDetailsHeading:"Challenge",projectDetails:[{id:1,details:"123Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."},{id:2,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"},{id:3,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"},{id:4,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."}],socialSharingsHeading:"Share This",socialSharings:[{id:1,name:"Twitter",icon:"twitter",url:"https://twitter.com/ShifraSec"},{id:2,name:"Instagram",icon:"instagram",url:"https://instagram.com/"},{id:3,name:"Facebook",icon:"facebook",url:"https://facebook.com/"},{id:4,name:"LinkedIn",icon:"linkedin",url:"https://www.linkedin.com/in/mo-eltahir/"},{id:5,name:"Youtube",icon:"youtube",url:"https://www.youtube.com/"}]},relatedProject:{relatedProjectsHeading:"Related Projects",relatedProjects:[{id:1,title:"Mobile UI",img:i("8422")},{id:2,title:"Web Application",img:i("ce5f")},{id:3,title:"UI Design",img:i("a8cf")},{id:4,title:"Kabul Mobile App UI",img:i("a7fc")}]}}},mounted:function(){o.a.replace()},updated:function(){o.a.replace()},methods:{}};const ee=O()($,[["render",c]]);t["default"]=ee},8422:function(e,t,i){e.exports=i.p+"img/mobile-project-1.b09ab92a.jpg"},a15b:function(e,t,i){"use strict";var a=i("23e7"),r=i("44ad"),c=i("fc6a"),s=i("a640"),o=[].join,l=r!=Object,n=s("join",",");a({target:"Array",proto:!0,forced:l||!n},{join:function(e){return o.call(c(this),void 0===e?",":e)}})},a8cf:function(e,t,i){e.exports=i.p+"img/ui-project-2.cfacc409.jpg"},acca:function(e,t,i){"use strict";i.r(t);var a=i("7a23"),r={class:"container mx-auto"};function c(e,t,i,c,s,o){var l=Object(a["z"])("ProjectsGrid");return Object(a["r"])(),Object(a["e"])("div",r,[Object(a["i"])(l)])}var s=i("2a70"),o={name:"Projects",components:{ProjectsGrid:s["a"]}},l=i("6b0d"),n=i.n(l);const d=n()(o,[["render",c]]);t["default"]=d},b8fa:function(e,t,i){"use strict";i.r(t);var a=i("7a23"),r={class:"container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"};function c(e,t,i,c,s,o){var l=Object(a["z"])("ContactForm"),n=Object(a["z"])("ContactDetails");return Object(a["r"])(),Object(a["e"])("div",r,[Object(a["i"])(l),Object(a["i"])(n,{contacts:e.contacts},null,8,["contacts"])])}i("ac1f"),i("5319");var s=i("77c6"),o=i.n(s),l={class:"w-full md:w-1/2"},n=Object(a["i"])("div",{class:"leading-loose"},[Object(a["i"])("form",{action:"https://formspree.io/f/xnqwnlaz",method:"POST",class:"max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"},[Object(a["i"])("p",{class:"text-primary-dark dark:text-primary-light text-2xl font-semibold mb-8"}," Contact Form "),Object(a["i"])("div",{class:""},[Object(a["i"])("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"name"},"Full Name"),Object(a["i"])("input",{class:"w-full px-5 py-2 border-0 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md dark:font-medium",id:"name",name:"name",type:"text",required:"",placeholder:"Your Name","aria-label":"Name"})]),Object(a["i"])("div",{class:"mt-6"},[Object(a["i"])("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"email"},"Email"),Object(a["i"])("input",{class:"w-full px-5 py-2 border-0 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md dark:font-medium",id:"email",name:"email",type:"text",required:"",placeholder:"Your Email","aria-label":"Email"})]),Object(a["i"])("div",{class:"mt-6"},[Object(a["i"])("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"subject"},"Subject"),Object(a["i"])("input",{class:"w-full px-5 py-2 border-0 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md dark:font-medium",id:"subject",name:"subject",type:"text",required:"",placeholder:"Subject","aria-label":"Subject"})]),Object(a["i"])("div",{class:"mt-6"},[Object(a["i"])("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"message"},"Message"),Object(a["i"])("textarea",{class:"w-full px-5 py-2 border-0 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md dark:font-medium",id:"message",name:"message",cols:"14",rows:"6","aria-label":"Message"})]),Object(a["i"])("div",{class:"mt-6"},[Object(a["i"])("button",{class:"px-4 py-2.5 text-white font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg",type:"submit","aria-label":"Send Message"}," Send Message ")])])],-1);function d(e,t,i,r,c,s){return Object(a["r"])(),Object(a["e"])("div",l,[n])}var m={},u=i("6b0d"),b=i.n(u);const p=b()(m,[["render",d]]);var j=p,g=(i("b0c0"),{class:"w-full md:w-1/2"}),f={class:"text-left max-w-xl px-6"},x=Object(a["i"])("h2",{class:"text-2xl text-primary-dark dark:text-primary-light font-semibold mt-12 mb-8"}," Contact details ",-1),O={class:""};function h(e,t,i,r,c,s){return Object(a["r"])(),Object(a["e"])("div",g,[Object(a["i"])("div",f,[x,Object(a["i"])("ul",O,[(Object(a["r"])(!0),Object(a["e"])(a["a"],null,Object(a["x"])(i.contacts,(function(e){return Object(a["r"])(),Object(a["e"])("li",{class:"flex",key:e.id},[Object(a["i"])("i",{"data-feather":e.icon,class:"w-5 text-gray-500 dark:text-gray-400 mr-4"},null,8,["data-feather"]),Object(a["i"])("a",{href:"#",class:["text-lg mb-4 text-ternary-dark dark:text-ternary-light","mail"===e.icon||"phone"===e.icon?"hover:underline cursor-pointer":""],"aria-label":"Website and Phone"},Object(a["B"])(e.name),3)])})),128))])])])}var y={props:["contacts"]};const k=b()(y,[["render",h]]);var v=k,P={components:{ContactForm:j,ContactDetails:v},data:function(){return{contacts:[{id:1,name:"Budapest, Hungary",icon:"map-pin"},{id:2,name:"mohd.debrecen@gmail.com",icon:"mail"},{id:3,name:"nope..🙇‍♂️",icon:"phone"}]}},mounted:function(){o.a.replace()},updated:function(){o.a.replace()},methods:{}};const w=b()(P,[["render",c]]);t["default"]=w},ccf7:function(e,t,i){e.exports=i.p+"img/ui-project-1.c80ae247.jpg"},ce5f:function(e,t,i){e.exports=i.p+"img/web-project-1.08bcb26f.jpg"}}]);
//# sourceMappingURL=projects.ea912e87.js.map