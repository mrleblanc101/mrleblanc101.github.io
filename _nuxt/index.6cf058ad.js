import i from"./Post.42403632.js";import{N as l,aD as m,a1 as e,aj as s,ao as n,aA as p,aB as x,H as u,a2 as d}from"./app.config.c943217e.js";import{u as f,q as g}from"./query.7c1579c1.js";import{_ as h}from"./entry.5c90798e.js";import"./cookie.9085de26.js";import"./query.c3f7607a.js";import"./utils.1e3bba06.js";const y={class:"max-w-screen-xl w-full mx-auto px-4 my-6 lg:my-16 lg:px-8"},k=n("h1",{class:"font-marvin font-black uppercase text-3xl md:text-5xl mb-4 tracking-wide"},"blog",-1),w={class:"flex flex-col gap-4"},B=l({__name:"index",async setup(b){let t,o;const{data:a}=([t,o]=m(()=>f("posts",()=>g("/blog").sort({createdAt:-1,pinned:1,$numeric:!0}).find())),t=await t,o(),t);return(A,C)=>{const r=i;return e(),s("section",y,[k,n("ul",w,[(e(!0),s(p,null,x(u(a),(c,_)=>(e(),d(r,{post:c,index:_},null,8,["post","index"]))),256))])])}}}),H=h(B,[["__file","index.vue"]]);export{H as default};