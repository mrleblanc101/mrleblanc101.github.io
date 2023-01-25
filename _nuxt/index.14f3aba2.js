import{o,e as c,k as t,b as $,Z as m,i as s,u as n,w as p,V as d,W as x,S as j,X as i,c as u,_ as V}from"./entry.42d0b062.js";import B from"./Post.0826cd45.js";import z from"./Project.356ebc83.js";import{u as h,q as g}from"./query.850d35c7.js";import"./Project.vue.4f7f3be8.js";import"./utils.1614010d.js";const C=""+new URL("profil-2.aaad87c1.png",import.meta.url).href,E={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},L=t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28 43.52 0 87.04 5.76 128 17.28 97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0Z"},null,-1),Z=[L];function A(r,e){return o(),c("svg",E,Z)}const H={render:A},I={viewBox:"0 0 72 72",xmlns:"http://www.w3.org/2000/svg"},M=t("path",{d:"M64 0a8 8 0 0 1 8 8v56a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8a8 8 0 0 1 8-8ZM49.383 26.274c-7.357 0-10.453 5.729-10.453 5.729v-4.67H28.633V62H38.93V43.802c0-4.876 2.245-7.777 6.54-7.777 3.95 0 5.846 2.788 5.846 7.777V62H62V40.051c0-9.287-5.264-13.777-12.617-13.777Zm-27.614 1.06H11.033V62h10.736V27.333ZM16.35 10C12.842 10 10 12.864 10 16.397c0 3.533 2.842 6.397 6.35 6.397 3.507 0 6.347-2.864 6.347-6.397 0-3.533-2.84-6.397-6.348-6.397Z"},null,-1),P=[M];function N(r,e){return o(),c("svg",I,P)}const q={render:N},F={viewBox:"0 0 34 56",xmlns:"http://www.w3.org/2000/svg"},G=t("path",{d:"M6.168 55.918.332 50.082 22.418 28 .332 5.918 6.168.082 34.082 28z"},null,-1),R=[G];function S(r,e){return o(),c("svg",F,R)}const f={render:S},D={class:"bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700"},J={class:"flex flex-col relative justify-center max-w-screen-xl mx-auto p-4 lg:px-8 z-0"},T={class:"md:-mt-24 md:absolute lg:mt-0"},U=t("h1",{class:"font-marvin font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-[1] tracking-wide"},[i(" S\xE9bastien"),t("br"),i(" LeBlanc ")],-1),W=t("div",{class:"max-w-[480px] md:text-xl leading-6 md:leading-7 mt-8 lg:mb-0"},[i(" Bonjour, je suis d\xE9veloppeur Front-End\xA0!"),t("br"),i(" Je con\xE7ois des produits num\xE9riques depuis 2017. ")],-1),X={class:"absolute md:static inline-flex gap-5 my-6"},K={class:"hover:opacity-70 transition",href:"https://github.com/mrleblanc101",target:"_blank"},O=t("span",{class:"sr-only"},"Profil Github",-1),Q={class:"hover:opacity-70 transition",href:"https://www.linkedin.com/in/s-leblanc/",target:"_blank"},Y=t("span",{class:"sr-only"},"Profil LinkedIn",-1),tt=t("img",{class:"max-h-full relative -z-10 ml-auto -mb-4 w-1/2 max-w-md md:max-w-none object-contain object-right-bottom pt-8 min-w-[250px]",src:C,alt:"",width:"1537",height:"2057"},null,-1),et={class:"max-w-screen-xl w-full mx-auto px-4 my-6 lg:my-16 lg:px-8"},ot={class:"font-marvin font-black uppercase text-3xl md:text-5xl mb-4 tracking-wide"},st={class:"flex flex-col gap-4"},nt={class:"max-w-screen-xl w-full mx-auto px-4 my-6 lg:my-16 lg:px-8"},ct={class:"font-marvin font-black uppercase text-3xl md:text-5xl mb-4 tracking-wide"},it={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},at=$({__name:"index",async setup(r){let e,a;const{data:w}=([e,a]=m(()=>h("projets",()=>g("/projets").limit(4).sort({order:-1,$numeric:!0}).find())),e=await e,a(),e),{data:b}=([e,a]=m(()=>h("posts",()=>g("/blog").sort({createdAt:-1,pinned:1,$numeric:!0}).limit(3).find())),e=await e,a(),e);return(rt,lt)=>{const _=j,v=B,k=z;return o(),c(d,null,[t("section",D,[t("div",J,[t("div",T,[U,W,t("div",X,[t("a",K,[s(n(H),{class:"w-9"}),O]),t("a",Q,[s(n(q),{class:"w-9"}),Y])])]),tt])]),t("section",et,[t("h2",ot,[s(_,{to:"/blog",class:"inline-flex items-baseline group"},{default:p(()=>[i(" Blog "),s(n(f),{class:"h-6 transition opacity-0 group-hover:opacity-100 text-zinc-500 group-hover:translate-x-2.5 duration-300"})]),_:1})]),t("ul",st,[(o(!0),c(d,null,x(n(b),(l,y)=>(o(),u(v,{post:l,index:y,is_home:""},null,8,["post","index"]))),256))])]),t("section",nt,[t("h2",ct,[s(_,{to:"/blog",class:"inline-flex items-baseline group"},{default:p(()=>[i(" Projets "),s(n(f),{class:"h-6 transition opacity-0 group-hover:opacity-100 text-zinc-500 group-hover:translate-x-2.5 duration-300"})]),_:1})]),t("ul",it,[(o(!0),c(d,null,x(n(w),l=>(o(),u(k,{project:l},null,8,["project"]))),256))])])],64)}}}),ht=V(at,[["__file","index.vue"]]);export{ht as default};
