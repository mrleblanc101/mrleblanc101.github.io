import{_ as x}from"./Project.vue_vue_type_script_setup_true_lang.d8904438.js";import{e as g,M as c,o as s,D as n,I as t,P as l,R as i,u as p,c as _}from"./entry.a850cc16.js";import{u}from"./asyncData.ef8f47bb.js";import{q as m}from"./query.f8c228d3.js";import"./utils.5246f8ba.js";const h={class:"max-w-screen-xl w-full mx-auto px-4 my-16 lg:px-8"},j=t("h1",{class:"font-marvin font-black uppercase text-5xl mb-4 tracking-wide sr-only"},"Projets",-1),w=t("h2",{class:"font-marvin font-black uppercase text-5xl mb-4 tracking-wide"},"Libeo",-1),b=t("p",null,null,-1),k={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},y=t("h2",{class:"font-marvin font-black uppercase text-5xl mb-4 tracking-wide mt-16"},"Personnels",-1),B=t("p",null,null,-1),P={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},F=g({__name:"index",async setup(q){let e,o;const{data:d}=([e,o]=c(()=>u("libeo_projects",()=>m("/projets").where({group:{$exists:!1}}).find())),e=await e,o(),e),{data:f}=([e,o]=c(()=>u("personnal_projects",()=>m("/projets").where({group:{$eq:"perso"}}).find())),e=await e,o(),e);return(v,C)=>{const a=x;return s(),n("section",h,[j,w,b,t("ul",k,[(s(!0),n(l,null,i(p(d),r=>(s(),_(a,{project:r},null,8,["project"]))),256))]),y,B,t("ul",P,[(s(!0),n(l,null,i(p(f),r=>(s(),_(a,{project:r},null,8,["project"]))),256))])])}}});export{F as default};