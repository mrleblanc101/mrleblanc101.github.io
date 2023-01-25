import y from"./ContentRenderer.9991df42.js";import{b as w,v as C,Z as D,E as N,o as l,c as _,w as r,k as t,t as n,X as S,i as d,u as e,f as x,S as q,_ as B}from"./entry.42d0b062.js";import T from"./client-only.e35333ef.js";import V from"./ContentDoc.1306b6bf.js";import{u as A,q as E}from"./query.850d35c7.js";import"./ContentRendererMarkdown.fd8322e6.js";import"./_commonjsHelpers.fed2a411.js";import"./composables.e33c6c9e.js";import"./ContentQuery.999d31ea.js";import"./utils.1614010d.js";const L={class:"bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700"},P={class:"max-w-screen-xl mx-auto p-4 lg:px-8 lg:py-16 z-0"},R={class:"text-4xl leading-[1.1111111] font-extrabold text-black dark:text-white lg:leading-none lg:text-[3.5rem]"},Z={class:"text-lg mt-3 opacity-70"},$=["data-minutes"],M={class:"max-w-screen-xl mx-auto px-4 py-8 lg:px-8 lg:py-16 z-0"},O={class:"flex flex-col md:flex-row gap-4 mt-8 md:mt-16"},U=t("div",{class:"opacity-70 font-medium"},"Pr\xE9c\xE9dent",-1),X={class:"font-black text-xl"},j=t("div",{class:"opacity-70 font-medium"},"Suivant",-1),F={class:"font-black text-xl"},G=w({__name:"[...slug]",async setup(H){let s,m;const u=C(),{data:f}=([s,m]=D(()=>A(`surround-${u.path}`,()=>E("/blog").only(["title","_path"]).findSurround(u.fullPath))),s=await s,m(),s),[i,c]=f.value||[];function g(a){return new Date(a).toLocaleDateString("fr",{timeZone:"UTC",year:"numeric",month:"long",day:"numeric"})}function h(a){return Math.ceil(a)}return(a,I)=>{const b=y,p=q,v=N("Disqus"),k=T,z=V;return l(),_(z,{tag:"article"},{default:r(({doc:o})=>[t("div",L,[t("div",P,[t("h1",R,n(o.title),1),t("div",Z,[t("span",null,n(g(o.createdAt)),1),S(" \xB7 "),t("span",{"data-minutes":o.readingTime.minutes},n(h(o.readingTime.minutes))+" minutes",9,$)])])]),t("div",M,[d(b,{class:"prose prose-xl dark:prose-invert",value:o},null,8,["value"]),t("div",O,[e(i)?(l(),_(p,{key:0,class:"md:mr-auto p-6 bg-zinc-100 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded transition w-full md:max-w-sm",to:e(i)._path},{default:r(()=>[U,t("div",X,n(e(i).title),1)]),_:1},8,["to"])):x("",!0),e(c)?(l(),_(p,{key:1,class:"md:ml-auto p-6 bg-zinc-100 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded transition w-full md:max-w-sm",to:e(c)._path},{default:r(()=>[j,t("div",F,n(e(c).title),1)]),_:1},8,["to"])):x("",!0)]),d(k,null,{default:r(()=>[d(v,{class:"mt-8"})]),_:1})])]),_:1})}}}),at=B(G,[["__file","[...slug].vue"]]);export{at as default};
