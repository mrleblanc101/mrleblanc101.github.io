import f from"./Project.8321869e.js";import{f as g,U as a,o as e,E as n,J as o,O as l,P as i,u as p,c as _,_ as j}from"./entry.0bc1e737.js";import{u as m}from"./asyncData.b638c81a.js";import{q as d}from"./query.08255fe8.js";import"./Project.vue_vue_type_style_index_0_scoped_22304459_lang.0c4cfe18.js";import"./utils.d08eb0f6.js";const h={class:"max-w-screen-xl w-full mx-auto px-4 my-6 lg:my-16 lg:px-8"},b=o("h1",{class:"font-marvin font-black uppercase text-3xl md:text-5xl mb-4 tracking-wide sr-only"},"Projets",-1),k=o("h2",{class:"font-marvin font-black uppercase text-3xl md:text-5xl mb-4 tracking-wide"},"Lib\xE9o",-1),w={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},y=o("h2",{class:"font-marvin font-black uppercase text-3xl md:text-5xl mb-4 tracking-wide mt-16"},"Personnels",-1),v={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},B=g({__name:"index",async setup(P){let t,s;const{data:u}=([t,s]=a(()=>m("libeo_projects",()=>d("/projets/libeo").sort({order:-1,$numeric:!0}).find())),t=await t,s(),t),{data:x}=([t,s]=a(()=>m("personnal_projects",()=>d("/projets/perso").sort({order:-1,$numeric:!0}).find())),t=await t,s(),t);return(C,E)=>{const c=f;return e(),n("section",h,[b,k,o("ul",w,[(e(!0),n(l,null,i(p(u),r=>(e(),_(c,{project:r},null,8,["project"]))),256))]),y,o("ul",v,[(e(!0),n(l,null,i(p(x),r=>(e(),_(c,{project:r},null,8,["project"]))),256))])])}}}),J=j(B,[["__file","index.vue"]]);export{J as default};
