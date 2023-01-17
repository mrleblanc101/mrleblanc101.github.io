import h from"./ContentRenderer.5116a032.js";import{f as v,b as k,U as z,o as c,c as d,L as l,J as t,M as n,Q as y,K as w,u as e,N as u,H as C,_ as D}from"./entry.06d6027f.js";import N from"./ContentDoc.9964f2d6.js";import{q as B}from"./query.c6a4d954.js";import"./ContentRendererMarkdown.47150578.js";import"./_commonjsHelpers.fed2a411.js";import"./composables.c3e3fba1.js";import"./ContentQuery.e59c31eb.js";import"./asyncData.aa8a7924.js";import"./utils.eba5b8f7.js";const S={class:"bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700"},T={class:"max-w-screen-xl mx-auto p-4 lg:px-8 lg:py-16 z-0"},V={class:"text-4xl leading-[1.1111111] font-extrabold text-black dark:text-white lg:leading-none lg:text-[3.5rem]"},L={class:"text-lg mt-3 opacity-70"},q=["data-minutes"],A={class:"max-w-screen-xl mx-auto px-4 py-8 lg:px-8 lg:py-16 z-0"},E={class:"flex flex-col md:flex-row gap-4 mt-8 md:mt-16"},M=t("div",{class:"opacity-70 font-medium"},"Pr\xE9c\xE9dent",-1),P={class:"font-black text-xl"},R=t("div",{class:"opacity-70 font-medium"},"Suivant",-1),U={class:"font-black text-xl"},H=v({__name:"[...slug]",async setup(J){let a,_;const p=k(),[s,i]=([a,_]=z(()=>B("/blog").findSurround(p.fullPath)),a=await a,_(),a);function x(r){return new Date(r).toLocaleDateString("fr",{timeZone:"UTC",year:"numeric",month:"long",day:"numeric"})}function f(r){return Math.ceil(r)}return(r,K)=>{const g=h,m=C,b=N;return c(),d(b,{tag:"article"},{default:l(({doc:o})=>[t("div",S,[t("div",T,[t("h1",V,n(o.title),1),t("div",L,[t("span",null,n(x(o.createdAt)),1),y(" \xB7 "),t("span",{"data-minutes":o.readingTime.minutes},n(f(o.readingTime.minutes))+" minutes",9,q)])])]),t("div",A,[w(g,{class:"prose prose-xl dark:prose-invert",value:o},null,8,["value"]),t("div",E,[e(s)?(c(),d(m,{key:0,class:"md:mr-auto p-6 bg-zinc-100 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded transition w-full md:max-w-sm",to:e(s)._path},{default:l(()=>[M,t("div",P,n(e(s).title),1)]),_:1},8,["to"])):u("",!0),e(i)?(c(),d(m,{key:1,class:"md:ml-auto p-6 bg-zinc-100 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded transition w-full md:max-w-sm",to:e(i)._path},{default:l(()=>[R,t("div",U,n(e(i).title),1)]),_:1},8,["to"])):u("",!0)])])]),_:1})}}}),Y=D(H,[["__file","[...slug].vue"]]);export{Y as default};