import u from"./ContentDoc.596c0c75.js";import{e as x,a as f,M as b,o as n,D as g,N as h,I as e,u as t,c as i,L as _,O as d,P as k,G as v,Q as l}from"./entry.20b1d5ff.js";import{q as z}from"./query.197c92d1.js";import"./composables.afd8620f.js";import"./ContentRenderer.20313cf0.js";import"./ContentRendererMarkdown.3df8be9e.js";import"./_commonjsHelpers.fed2a411.js";import"./ContentQuery.fde7ab63.js";import"./asyncData.ece59a8b.js";import"./utils.345c6f46.js";const y={class:"flex flex-col md:flex-row gap-4 mt-16 px-10 -mx-20 -mx-10"},C=e("div",{class:"opacity-70 font-medium"},"Pr\xE9c\xE9dent",-1),N={class:"font-black text-xl"},w=e("div",{class:"opacity-70 font-medium"},"Suivant",-1),B={class:"font-black text-xl"},Q=x({__name:"[...slug]",async setup(D){let o,s;const m=f(),[a,r]=([o,s]=b(()=>z("/blog").findSurround(m.fullPath)),o=await o,s(),o);return(E,P)=>{const p=u,c=v;return n(),g(k,null,[h(p,{class:"prose md:prose-xl dark:prose-invert"}),e("div",y,[t(a)?(n(),i(c,{key:0,class:"md:mr-auto p-10 bg-zinc-100 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded",to:t(a)._path},{default:_(()=>[C,e("div",N,l(t(r).title),1)]),_:1},8,["to"])):d("",!0),t(r)?(n(),i(c,{key:1,class:"md:ml-auto p-10 bg-zinc-100 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded",to:t(r)._path},{default:_(()=>[w,e("div",B,l(t(r).title),1)]),_:1},8,["to"])):d("",!0)])],64)}}});export{Q as default};
