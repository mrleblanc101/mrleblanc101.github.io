import{e as g,M as n,o as a,D as o,I as t,N as r,O as i,u as c,P as f,Q as m,R as h,L as b,S as v,G as w}from"./entry.79a2e7a1.js";import{u as d}from"./asyncData.231a2b01.js";import{q as _}from"./query.8e464a59.js";import"./utils.104ae53a.js";const y=""+new URL("profil-2.aaad87c1.png",import.meta.url).href,k={class:"grow w-full"},z=f('<section class="bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700"><div class="flex flex-col relative lg:min-h-[75vh] justify-center max-w-screen-xl mx-auto p-4 lg:px-8 z-0"><div><h1 class="font-marvin text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-black uppercase leading-[1]"> D\xE9veloppeur<br> Front-end </h1><div class="max-w-[480px] text-xl leading-6 sm:leading-8 my-8 lg:mb-0"> Bonjour, je suis S\xE9bastien LeBlanc ! <br> Je con\xE7ois des produits num\xE9riques depuis 2017. </div></div><img class="max-h-full relative -z-10 ml-auto -mb-4 lg:m-0 lg:absolute lg:bottom-0 lg:right-4 lg:w-1/2 max-w-[75%] lg:max-w-none object-contain object-right-bottom" src="'+y+'" alt=""></div></section>',1),E={class:"max-w-screen-xl mx-auto px-4 my-16 lg:px-8"},j=t("h2",{class:"font-marvin text-4xl mb-4"},"R\xE9alisations r\xE9centes",-1),B={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},N={class:"relative after:content-[''] after:absolute after:top-[38%] after:bottom-0 after:w-full after:bg-gradient-to-t after:from-black after:to-transparent z-10"},C=["href"],D=["src"],L={class:"absolute p-6 bottom-0 left-0 w-full z-50"},S=["src"],V={hidden:"",class:"absolute"},q={class:"max-w-screen-xl mx-auto px-4 my-16 lg:px-8"},A=t("h2",{class:"font-marvin text-4xl mb-4"},"Articles r\xE9cents",-1),O=g({__name:"accueil",async setup(R){let e,l;const{data:x}=([e,l]=n(()=>d("articles",()=>_("/blog").find())),e=await e,l(),e),{data:u}=([e,l]=n(()=>d("realisations",()=>_("/realisations").find())),e=await e,l(),e);return(F,$)=>{const p=w;return a(),o("main",k,[z,t("section",E,[j,t("ul",B,[(a(!0),o(r,null,i(c(u),s=>(a(),o("li",N,[t("a",{href:s.url,target:"_blank"},[t("img",{src:`${s._path}/thumbnail.jpg`},null,8,D),t("div",L,[t("img",{src:`${s._path}/logo.svg`},null,8,S)]),t("div",V,m(s.title),1)],8,C)]))),256))])]),t("section",q,[A,t("ul",null,[(a(!0),o(r,null,i(c(x),s=>(a(),o("li",null,[h(p,{class:"hover:underline",to:s._path},{default:b(()=>[v(m(s.title),1)]),_:2},1032,["to"])]))),256))])])])}}});export{O as default};