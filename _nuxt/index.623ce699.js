import f from"./Project.356ebc83.js";import{b as g,Z as a,o as t,e as n,k as o,V as l,W as i,u as _,c as p,_ as j}from"./entry.42d0b062.js";import{u as m,q as d}from"./query.850d35c7.js";import"./Project.vue.4f7f3be8.js";import"./utils.1614010d.js";const b={class:"max-w-screen-xl w-full mx-auto px-4 my-6 lg:my-16 lg:px-8"},h=o("h1",{class:"font-marvin font-black uppercase text-3xl md:text-5xl mb-4 tracking-wide sr-only"},"Projets",-1),k=o("h2",{class:"font-marvin font-black uppercase text-3xl md:text-5xl mb-4 tracking-wide"},"Lib\xE9o",-1),w={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},y=o("h2",{class:"font-marvin font-black uppercase text-3xl md:text-5xl mb-4 tracking-wide mt-16"},"Personnels",-1),v={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},B=g({__name:"index",async setup(C){let e,s;const{data:u}=([e,s]=a(()=>m("libeo_projects",()=>d("/projets/libeo").sort({order:-1,$numeric:!0}).find())),e=await e,s(),e),{data:x}=([e,s]=a(()=>m("personnal_projects",()=>d("/projets/perso").sort({order:-1,$numeric:!0}).find())),e=await e,s(),e);return(P,q)=>{const c=f;return t(),n("section",b,[h,k,o("ul",w,[(t(!0),n(l,null,i(_(u),r=>(t(),p(c,{project:r},null,8,["project"]))),256))]),y,o("ul",v,[(t(!0),n(l,null,i(_(x),r=>(t(),p(c,{project:r},null,8,["project"]))),256))])])}}}),D=j(B,[["__file","index.vue"]]);export{D as default};
