import{f,r as m,h as v,b as a,a as C,i as k,o as n,c as u,w as d,j as x,k as L,l as t,m as _,u as c,p as $,q as b,s as p,t as y}from"./entry.081056ce.js";import{u as M}from"./composables.d80ce3a7.js";const Z=f({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(r,{slots:e,attrs:i}){const s=m(!1);return v(()=>{s.value=!0}),o=>{var g;if(s.value)return(g=e.default)==null?void 0:g.call(e);const l=e.fallback||e.placeholder;if(l)return l();const h=o.fallback||o.placeholder||"",w=o.fallbackTag||o.placeholderTag||"span";return a(w,i,h)}}}),S={name:k,props:{placeholder:String,tag:{type:String,default:"span"}}};function B(r,e,i,s,o,l){const h=Z;return n(),u(h,{placeholder:i.placeholder,"placeholder-tag":i.tag},{default:d(()=>[x(r.$slots,"default")]),_:3},8,["placeholder","placeholder-tag"])}const z=C(S,[["render",B]]),A=()=>L("color-mode").value,H={viewBox:"0 0 21 21",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},T=t("g",{id:"moon_svg__Page-1","stroke-width":"1","fill-rule":"evenodd"},[t("g",{id:"moon_svg__moon",transform:"translate(0.517492, 0.797197)","fill-rule":"nonzero"},[t("path",{d:"M19.6225075,10.7028029 C19.3279972,10.4593688 18.9205111,10.4050374 18.5725075,10.5628029 C17.5150868,11.0466898 16.3653818,11.2957357 15.2025075,11.2928029 C10.7247417,11.2873929 7.08997522,7.67048771 7.06250751,3.19280289 C7.0670675,2.51863558 7.15097832,1.84734904 7.31250751,1.19280289 C7.38230257,0.837563836 7.25464561,0.472342767 6.97874911,0.23793446 C6.70285261,0.00352615328 6.321807,-0.0634587191 5.98250751,0.0628028887 C1.65921559,2.00677993 -0.740367433,6.68660325 0.204344464,11.3317533 C1.14905636,15.9769034 5.18594273,19.3477035 9.92511153,19.4485938 C14.6642803,19.5494841 18.8409636,16.3535395 19.9825075,11.7528029 C20.0856032,11.3622168 19.9435731,10.9479622 19.6225075,10.7028029 L19.6225075,10.7028029 Z M10.1225075,17.3928029 C6.68380114,17.3685394 3.63129713,15.1859763 2.4961901,11.9399291 C1.36108307,8.69388192 2.38827533,5.08469383 5.06250751,2.92280289 L5.06250751,3.19280289 C5.06801996,8.79068533 9.60462507,13.3272904 15.2025075,13.3328029 C15.9083918,13.3353922 16.6124859,13.26163 17.3025075,13.1128029 C15.8961,15.7734559 13.1319996,17.4365358 10.1225075,17.4328092 L10.1225075,17.3928029 Z",id:"moon_svg__Shape"})])],-1),I=[T];function j(r,e){return n(),a("svg",H,I)}const N={render:j},O={viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},E=t("g",{id:"sun_svg__Page-1","stroke-width":"1","fill-rule":"evenodd"},[t("g",{id:"sun_svg__sun","fill-rule":"nonzero"},[t("path",{d:"M3.64,15 L2.93,15.71 C2.54227641,16.1000375 2.54227641,16.7299625 2.93,17.12 C3.32003745,17.5077236 3.94996255,17.5077236 4.34,17.12 L5.05,16.41 C5.3897768,16.0132397 5.36693227,15.4218058 4.99756322,15.0524368 C4.62819417,14.6830677 4.03676028,14.6602232 3.64,15 L3.64,15 Z M3,10 C3,9.44771525 2.55228475,9 2,9 L1,9 C0.44771525,9 0,9.44771525 0,10 C0,10.5522847 0.44771525,11 1,11 L2,11 C2.55228475,11 3,10.5522847 3,10 Z M10,3 C10.5522847,3 11,2.55228475 11,2 L11,1 C11,0.44771525 10.5522847,0 10,0 C9.44771525,0 9,0.44771525 9,1 L9,2 C9,2.55228475 9.44771525,3 10,3 Z M3.64,5.05 C3.82626064,5.23474416 4.07766012,5.33889538 4.34,5.34001674 C4.60580298,5.34153676 4.86128117,5.23718651 5.05,5.05 C5.43772359,4.65996255 5.43772359,4.03003745 5.05,3.64 L4.34,2.93 C3.94323972,2.5902232 3.35180583,2.61306773 2.98243678,2.98243678 C2.61306773,3.35180583 2.5902232,3.94323972 2.93,4.34 L3.64,5.05 Z M15.64,5.34 C15.9023399,5.33889538 16.1537394,5.23474416 16.34,5.05 L17.05,4.34 C17.3353762,4.09561012 17.4596819,3.7118816 17.3718101,3.34658103 C17.2839383,2.98128045 16.9987195,2.69606167 16.633419,2.60818987 C16.2681184,2.52031806 15.8843899,2.64462384 15.64,2.93 L15,3.64 C14.6122764,4.03003745 14.6122764,4.65996255 15,5.05 C15.1762929,5.22536187 15.4115961,5.32875266 15.66,5.34 L15.64,5.34 Z M19,9 L18,9 C17.4477153,9 17,9.44771525 17,10 C17,10.5522847 17.4477153,11 18,11 L19,11 C19.5522847,11 20,10.5522847 20,10 C20,9.44771525 19.5522847,9 19,9 Z M10,17 C9.44771525,17 9,17.4477153 9,18 L9,19 C9,19.5522847 9.44771525,20 10,20 C10.5522847,20 11,19.5522847 11,19 L11,18 C11,17.4477153 10.5522847,17 10,17 Z M16.36,15 C15.9696508,14.7828764 15.4826446,14.8509562 15.1668004,15.1668004 C14.8509562,15.4826446 14.7828764,15.9696508 15,16.36 L15.71,17.07 C16.1000375,17.4577236 16.7299625,17.4577236 17.12,17.07 C17.5077236,16.6799625 17.5077236,16.0500375 17.12,15.66 L16.36,15 Z M10,4.5 C6.96243388,4.5 4.5,6.96243388 4.5,10 C4.5,13.0375661 6.96243388,15.5 10,15.5 C13.0375661,15.5 15.5,13.0375661 15.5,10 C15.4944963,6.96471651 13.0352835,4.5055037 10,4.5 Z M10,13.5 C8.58438214,13.5 7.30815514,12.6472524 6.76642164,11.339392 C6.22468814,10.0315316 6.52413328,8.52611925 7.52512627,7.52512627 C8.52611925,6.52413328 10.0315316,6.22468814 11.339392,6.76642164 C12.6472524,7.30815514 13.5,8.58438214 13.5,10 C13.5,11.9329966 11.9329966,13.5 10,13.5 L10,13.5 Z",id:"sun_svg__Shape"})])],-1),P=[E];function V(r,e){return n(),a("svg",O,P)}const D={render:V},F={viewBox:"0 0 20 18",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},q=t("g",{id:"computer_svg__Page-1","stroke-width":"1","fill-rule":"evenodd"},[t("g",{id:"computer_svg__computer","fill-rule":"nonzero"},[t("path",{d:"M17,0 L3,0 C1.34314575,0 -4.4408921e-16,1.34314575 -4.4408921e-16,3 L-4.4408921e-16,11 C-4.4408921e-16,12.6568542 1.34314575,14 3,14 L9,14 L9,16 L5,16 C4.44771525,16 4,16.4477153 4,17 C4,17.5522847 4.44771525,18 5,18 L15,18 C15.5522847,18 16,17.5522847 16,17 C16,16.4477153 15.5522847,16 15,16 L11,16 L11,14 L17,14 C18.6568542,14 20,12.6568542 20,11 L20,3 C20,1.34314575 18.6568542,0 17,0 Z M18,11 C18,11.5522847 17.5522847,12 17,12 L3,12 C2.44771525,12 2,11.5522847 2,11 L2,3 C2,2.44771525 2.44771525,2 3,2 L17,2 C17.5522847,2 18,2.44771525 18,3 L18,11 Z",id:"computer_svg__Shape"})])],-1),R=[q];function Y(r,e){return n(),a("svg",F,R)}const G={render:Y},J=f({__name:"ColorSwitcher",setup(r){const e=A(),i=()=>{const s=["system","light","dark"],l=(s.indexOf(e.preference)+1)%s.length;e.preference=s[l]};return(s,o)=>{const l=z;return n(),a("button",{type:"button",class:"flex-shrink-0 shadow rounded focus:outline-none ring-primary-200 dark:ring-gray-600 focus:ring bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white dark:text-gray-800 inline-flex items-center justify-center font-bold h-10 w-10 text-sm",onClick:i},[_(l,{placeholder:"..."},{default:d(()=>[c(e).preference==="dark"?(n(),u(c(N),{key:0,class:"h-5"})):c(e).preference==="light"?(n(),u(c(D),{key:1,class:"h-5"})):(n(),u(c(G),{key:2,class:"h-5"}))]),_:1})])}}}),K={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},Q=t("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1),U=[Q];function W(r,e){return n(),a("svg",K,U)}const X={render:W},e1={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 12"},t1=t("path",{d:"M0 1a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1Z","fill-rule":"nonzero"},null,-1),n1=[t1];function o1(r,e){return n(),a("svg",e1,n1)}const s1={render:o1},r1={class:"bg-zinc-100 dark:bg-zinc-800"},a1={class:"max-w-screen-xl flex gap-10 justify-between items-center w-full mx-auto p-4 lg:px-8"},l1=t("div",{class:"text-3xl font-black font-marvin"},"mrleblanc101",-1),c1={class:"flex items-center gap-10"},i1={class:"hidden lg:block"},_1={class:"flex gap-12 font-medium"},d1={class:"flex gap-2"},u1=f({__name:"AppHeader",setup(r){const e=m(!1);return(i,s)=>{const o=b,l=J;return n(),a("header",r1,[t("div",a1,[l1,t("div",c1,[t("nav",i1,[t("ul",_1,[t("li",null,[_(o,{to:"/"},{default:d(()=>[p("Accueil")]),_:1})]),t("li",null,[_(o,{to:"/"},{default:d(()=>[p("Blog")]),_:1})]),t("li",null,[_(o,{to:"/"},{default:d(()=>[p("R\xE9alisation")]),_:1})]),t("li",null,[_(o,{to:"/"},{default:d(()=>[p("A propos")]),_:1})])])]),t("div",d1,[_(l),t("button",{type:"button",class:"flex-shrink-0 shadow rounded focus:outline-none ring-primary-200 dark:ring-gray-600 focus:ring bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white dark:text-gray-800 items-center justify-center font-bold h-10 w-10 text-sm inline-flex lg:hidden",onClick:s[0]||(s[0]=$(h=>e.value=!c(e),["stop"]))},[c(e)?(n(),u(c(X),{key:1,class:"w-6 h-6"})):(n(),u(c(s1),{key:0,class:"w-4 h-4"}))])])])])])}}}),h1={},p1={class:"p-4 lg:px-8 text-center w-full max-w-screen-xl mx-auto"};function f1(r,e){return n(),a("footer",p1,[t("div",null,"\xA9 "+y(new Date().getFullYear())+" - Tous droits r\xE9serv\xE9s.",1)])}const g1=C(h1,[["render",f1]]),m1={class:"min-h-screen flex flex-col"},w1=f({__name:"default",setup(r){return M({title:"S\xE9bastien LeBlanc",meta:[{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0"}],bodyAttrs:{class:"antialiased overflow-x-clip text-gray-700 leading-normal bg-white dark:bg-zinc-900 dark:text-gray-300"}}),(e,i)=>{const s=u1,o=g1;return n(),a("div",m1,[_(s),x(e.$slots,"default"),_(o)])}}});export{w1 as default};
