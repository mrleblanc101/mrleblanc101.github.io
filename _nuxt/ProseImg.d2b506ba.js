import{N as a,O as i,a1 as n,aj as o,H as c,w as u,J as h}from"./app.config.c943217e.js";import{_ as m}from"./entry.7eb5fcb1.js";const d=["src","alt","width","height"],f=a({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const e=t,s=i(()=>{var r;return(r=e.src)!=null&&r.startsWith("/")&&!e.src.startsWith("//")?u(e.src,h().app.baseURL):e.src});return(r,l)=>(n(),o("img",{src:c(s),alt:t.alt,width:t.width,height:t.height},null,8,d))}}),_=m(f,[["__file","ProseImg.vue"]]);export{_ as default};