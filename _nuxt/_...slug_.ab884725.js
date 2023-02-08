import w from"./ContentRenderer.3fdfdde9.js";import{N as C,aa as D,aD as N,au as T,a1 as n,aj as q,ac as _,ab as i,a2 as c,ao as t,ak as a,aC as B,aE as S,H as e,al as x,az as V}from"./app.config.c943217e.js";import A from"./client-only.0ab36f04.js";import M from"./ContentDoc.7e200f0a.js";import{u as E,q as L}from"./query.ce172b92.js";import{u as P}from"./composables.eca2299c.js";import{_ as R}from"./entry.0fa749bf.js";import"./ContentRendererMarkdown.7e5afcb7.js";import"./_commonjsHelpers.0ee3bad0.js";import"./composables.fb893100.js";import"./ContentQuery.9ee79ffb.js";import"./cookie.9085de26.js";import"./query.c3f7607a.js";import"./utils.1e3bba06.js";const $={class:"max-w-screen-xl mx-auto p-4 lg:px-8 lg:py-16 z-0"},j={class:"text-4xl leading-[1.1111111] font-extrabold text-black dark:text-white lg:leading-none lg:text-[3.5rem]"},H={class:"text-lg mt-3 opacity-70"},O=["data-minutes"],U={class:"max-w-screen-xl mx-auto px-4 py-8 lg:px-8 lg:py-16 z-0"},Z={class:"flex flex-col md:flex-row gap-4 mt-8 md:mt-16"},F=t("div",{class:"opacity-70 font-medium"},"Précédent",-1),G={class:"font-black text-xl"},I=t("div",{class:"opacity-70 font-medium"},"Suivant",-1),J={class:"font-black text-xl"},K=C({__name:"[...slug]",async setup(Q){let s,d;const u=D(),f=P(),{data:g}=([s,d]=N(()=>E(`surround-${u.path}`,()=>L("/blog").only(["title","_path"]).findSurround(u.fullPath))),s=await s,d(),s),[l,m]=g.value||[];function h(r){return new Date(r).toLocaleDateString("fr",{timeZone:"UTC",year:"numeric",month:"long",day:"numeric"})}function v(r){return Math.ceil(r)}return(r,W)=>{const b=w,p=V,k=T("Disqus"),y=A,z=M;return n(),q("div",null,[_(z,{tag:"article"},{default:i(({doc:o})=>[(n(),c(S,{to:".header-inner"},[t("div",$,[t("h1",j,a(o.title),1),t("div",H,[t("span",null,a(h(o.createdAt)),1),B(" · "),t("span",{"data-minutes":o.readingTime.minutes},a(v(o.readingTime.minutes))+" minutes",9,O)])])])),t("div",U,[_(b,{class:"prose prose-xl dark:prose-invert",value:o},null,8,["value"]),t("div",Z,[e(l)?(n(),c(p,{key:0,class:"md:mr-auto p-6 bg-zinc-100 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded transition w-full md:max-w-sm",to:e(l)._path},{default:i(()=>[F,t("div",G,a(e(l).title),1)]),_:1},8,["to"])):x("",!0),e(m)?(n(),c(p,{key:1,class:"md:ml-auto p-6 bg-zinc-100 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded transition w-full md:max-w-sm",to:e(m)._path},{default:i(()=>[I,t("div",J,a(e(m).title),1)]),_:1},8,["to"])):x("",!0)]),_(y,null,{default:i(()=>[(n(),c(k,{class:"mt-8",key:e(f).value}))]),_:1})])]),_:1})])}}}),dt=R(K,[["__file","[...slug].vue"]]);export{dt as default};
