import{a1 as n,aj as m,ao as e,N as w,aa as k,C as _,E as y,aF as z,ac as t,ab as a,H as c,an as $,a2 as C,aC as i,al as B,aG as H,az as N}from"./app.config.c943217e.js";import j from"./ColorSwitcher.77b9b68e.js";import{T as p,w as f,v as L,_ as V}from"./entry.7eb5fcb1.js";import"./component.vue3.6f53c6e5.js";import"./client-only.0ab36f04.js";import"./composables.39bb7fc6.js";const M={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},O=e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10 4.293 5.707a1 1 0 0 1 0-1.414z","clip-rule":"evenodd"},null,-1),T=[O];function Z(u,d){return n(),m("svg",M,T)}const A={render:Z},D={viewBox:"0 0 14 12",xmlns:"http://www.w3.org/2000/svg"},E=e("path",{d:"M0 1a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1Z"},null,-1),F=[E];function I(u,d){return n(),m("svg",D,F)}const P={render:I},S={class:"max-w-screen-xl flex gap-10 items-center w-full mx-auto p-4 lg:px-8"},G={class:"ml-auto flex items-center gap-10"},R={class:"max-lg:p-4 sm:max-md:border-l sm:max-md:border-zinc-300 sm:max-md:dark:border-zinc-700 max-sm:w-full max-md:w-96 max-md:fixed max-md:top-0 max-md:right-0 max-md:bottom-0 max-md:h-[100dvh] max-md:bg-zinc-100 max-md:dark:bg-zinc-900 max-md:z-0 max-md:shadow-lg flex flex-col md:!flex md:!transform-none z-50"},q=e("span",{class:"sr-only"},"Fermer le menu",-1),J={class:"flex flex-col md:flex-row md:gap-12 font-medium"},K={class:"flex gap-2"},Q=e("span",{class:"sr-only"},"Ouvrir le menu",-1),U=e("div",{class:"header-inner"},null,-1),W=w({__name:"AppHeader",setup(u){const d=k(),o=_(!1),x=_(null);y(()=>d.fullPath,()=>{o.value=!1});function b(s){s.target!==x.value&&(o.value=!1)}return(s,r)=>{const l=N,h=j,v=z("on-click-outside");return n(),m("header",{class:$(["bg-zinc-100 dark:bg-zinc-800 z-20",{"border-b border-zinc-200 dark:border-zinc-700":s.$route.name!=="index"}])},[e("div",S,[t(p,{"enter-from-class":"opacity-0 -translate-x-1.5","leave-to-class":"opacity-0 -translate-x-1.5","enter-active-class":"transition duration-300","leave-active-class":"transition duration-300"},{default:a(()=>[s.$route.name!=="index"?(n(),C(l,{key:0,to:"/",class:"text-2xl lg:text-3xl font-marvin font-black uppercase"},{default:a(()=>[i(" mrleblanc101 ")]),_:1})):B("",!0)]),_:1}),e("div",G,[t(p,{"enter-from-class":"translate-x-full","leave-to-class":"translate-x-full","enter-active-class":"transition duration-300","leave-active-class":"transition duration-300"},{default:a(()=>[H((n(),m("nav",R,[e("button",{type:"button",class:"flex-shrink-0 ml-auto mb-4 shadow rounded focus:outline-none ring-primary-200 dark:ring-gray-600 focus:ring bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white items-center justify-center font-bold h-10 w-10 text-sm inline-flex md:hidden transition",onClick:r[0]||(r[0]=f(g=>o.value=!1,["stop"]))},[q,t(c(A),{class:"w-6 h-6"})]),e("ul",J,[e("li",null,[t(l,{class:"block max-md:text-lg max-md:pb-5 max-md:mb-5 max-md:border-b max-md:border-zinc-300 max-md:dark:border-zinc-700",to:"/blog"},{default:a(()=>[i(" Blog ")]),_:1})]),e("li",null,[t(l,{class:"block max-md:text-lg max-md:pb-5 max-md:mb-5 max-md:border-b max-md:border-zinc-300 max-md:dark:border-zinc-700",to:"/projets"},{default:a(()=>[i(" Projets ")]),_:1})]),e("li",null,[t(l,{class:"block max-md:text-lg max-md:pb-5 max-md:mb-5 max-md:border-b max-md:border-zinc-300 max-md:dark:border-zinc-700",to:"/a-propos"},{default:a(()=>[i(" À propos ")]),_:1})])])])),[[L,c(o)],[v,b,void 0,{bubble:!0}]])]),_:1}),e("div",K,[t(h),e("button",{ref_key:"menuBtn",ref:x,type:"button",class:"flex-shrink-0 shadow rounded focus:outline-none ring-primary-200 dark:ring-gray-600 focus:ring bg-primary-500 hover:bg-primary-400 active:bg-primary-600 text-white items-center justify-center font-bold h-10 w-10 text-sm inline-flex md:hidden transition",onClick:r[1]||(r[1]=f(g=>o.value=!0,["stop"]))},[Q,t(c(P),{class:"w-4 h-4"})],512)])])]),U],2)}}}),ne=V(W,[["__file","AppHeader.vue"]]);export{ne as default};