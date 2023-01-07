import h from"./ContentRenderer.1a120434.js";import{e as k,a as v,M as z,o as c,c as d,L as l,I as t,N as n,O as y,P as w,u as e,Q as u,G as C}from"./entry.b5cd0639.js";import D from"./ContentDoc.fdd30e34.js";import{q as N}from"./query.d885cc71.js";import"./ContentRendererMarkdown.22ab9e84.js";import"./_commonjsHelpers.fed2a411.js";import"./composables.964b3ddc.js";import"./ContentQuery.74ccf984.js";import"./asyncData.d444e039.js";import"./utils.8d9539b0.js";const B={class:"bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700"},S={class:"max-w-screen-xl mx-auto p-4 lg:px-8 lg:py-16 z-0"},T={class:"text-4xl leading-[1.1111111] font-extrabold text-black dark:text-white lg:leading-none lg:text-[3.5rem]"},V={class:"text-lg mt-3 opacity-70"},L=["data-minutes"],P={class:"max-w-screen-xl mx-auto px-4 py-8 lg:px-8 lg:py-16 z-0"},q={class:"flex flex-col md:flex-row gap-4 mt-8 md:mt-16"},A=t("div",{class:"opacity-70 font-medium"},"Pr\xE9c\xE9dent",-1),E={class:"font-black text-xl"},M=t("div",{class:"opacity-70 font-medium"},"Suivant",-1),R={class:"font-black text-xl"},W=k({__name:"[...slug]",async setup($){let a,m;const p=v(),[s,i]=([a,m]=z(()=>N("/blog").findSurround(p.fullPath)),a=await a,m(),a);function x(r){return new Date(r).toLocaleDateString("fr",{timeZone:"UTC",year:"numeric",month:"long",day:"numeric"})}function f(r){return Math.ceil(r)}return(r,G)=>{const g=h,_=C,b=D;return c(),d(b,{tag:"article"},{default:l(({doc:o})=>[t("div",B,[t("div",S,[t("h1",T,n(o.title),1),t("div",V,[t("span",null,n(x(o.createdAt)),1),y(" \xB7 "),t("span",{"data-minutes":o.readingTime.minutes},n(f(o.readingTime.minutes))+" minutes",9,L)])])]),t("div",P,[w(g,{class:"prose prose-xl dark:prose-invert",value:o},null,8,["value"]),t("div",q,[e(s)?(c(),d(_,{key:0,class:"md:mr-auto p-6 bg-zinc-100 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded transition w-full md:max-w-sm",to:e(s)._path},{default:l(()=>[A,t("div",E,n(e(s).title),1)]),_:1},8,["to"])):u("",!0),e(i)?(c(),d(_,{key:1,class:"md:ml-auto p-6 bg-zinc-100 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded transition w-full md:max-w-sm",to:e(i)._path},{default:l(()=>[M,t("div",R,n(e(i).title),1)]),_:1},8,["to"])):u("",!0)])])]),_:1})}}});export{W as default};
