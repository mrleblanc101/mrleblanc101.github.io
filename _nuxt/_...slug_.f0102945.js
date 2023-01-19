import z from"./ContentRenderer.0e5c39f7.js";import{f as y,b as w,U as C,r as D,o as l,c as _,L as c,J as t,M as s,Q as N,K as m,u as e,N as p,H as q,_ as B}from"./entry.766a3280.js";import S from"./client-only.8b6ceb59.js";import T from"./ContentDoc.26048415.js";import{q as V}from"./query.c97b3236.js";import"./ContentRendererMarkdown.07aed034.js";import"./_commonjsHelpers.fed2a411.js";import"./composables.c53f3e0c.js";import"./ContentQuery.79128d3c.js";import"./asyncData.43b20bff.js";import"./utils.97644071.js";const L={class:"bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700"},A={class:"max-w-screen-xl mx-auto p-4 lg:px-8 lg:py-16 z-0"},E={class:"text-4xl leading-[1.1111111] font-extrabold text-black dark:text-white lg:leading-none lg:text-[3.5rem]"},M={class:"text-lg mt-3 opacity-70"},P=["data-minutes"],R={class:"max-w-screen-xl mx-auto px-4 py-8 lg:px-8 lg:py-16 z-0"},U={class:"flex flex-col md:flex-row gap-4 mt-8 md:mt-16"},H=t("div",{class:"opacity-70 font-medium"},"Pr\xE9c\xE9dent",-1),J={class:"font-black text-xl"},K=t("div",{class:"opacity-70 font-medium"},"Suivant",-1),O={class:"font-black text-xl"},Q=y({__name:"[...slug]",async setup(Z){let a,d;const x=w();let r,i;try{[r,i]=([a,d]=C(()=>V("/blog").findSurround(x.fullPath)),a=await a,d(),a)}catch{}function f(o){return new Date(o).toLocaleDateString("fr",{timeZone:"UTC",year:"numeric",month:"long",day:"numeric"})}function g(o){return Math.ceil(o)}return(o,$)=>{const b=z,u=q,h=D("Disqus"),v=S,k=T;return l(),_(k,{tag:"article"},{default:c(({doc:n})=>[t("div",L,[t("div",A,[t("h1",E,s(n.title),1),t("div",M,[t("span",null,s(f(n.createdAt)),1),N(" \xB7 "),t("span",{"data-minutes":n.readingTime.minutes},s(g(n.readingTime.minutes))+" minutes",9,P)])])]),t("div",R,[m(b,{class:"prose prose-xl dark:prose-invert",value:n},null,8,["value"]),t("div",U,[e(r)?(l(),_(u,{key:0,class:"md:mr-auto p-6 bg-zinc-100 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded transition w-full md:max-w-sm",to:e(r)._path},{default:c(()=>[H,t("div",J,s(e(r).title),1)]),_:1},8,["to"])):p("",!0),e(i)?(l(),_(u,{key:1,class:"md:ml-auto p-6 bg-zinc-100 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded transition w-full md:max-w-sm",to:e(i)._path},{default:c(()=>[K,t("div",O,s(e(i).title),1)]),_:1},8,["to"])):p("",!0)]),m(v,null,{default:c(()=>[m(h,{class:"mt-8",shortname:"mrleblanc101"})]),_:1})])]),_:1})}}}),st=B(Q,[["__file","[...slug].vue"]]);export{st as default};
