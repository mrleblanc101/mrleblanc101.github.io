import{u as h,w as d,a as g,b as w,e as v,f as C,h as D,i as s}from"./entry.f6244bfc.js";import{u as _}from"./composables.b5a4a835.js";import S from"./ContentRenderer.c2474044.js";import $ from"./ContentQuery.4a125472.js";import"./ContentRendererMarkdown.48d338b7.js";import"./_commonjsHelpers.fed2a411.js";import"./asyncData.2d980a6c.js";import"./query.671cab3e.js";import"./utils.3b9cc7bb.js";const a=(f,e=g())=>{const u=h(f);d(()=>h(f),(o=u)=>{if(!e.path||!o)return;const t=Object.assign({},(o==null?void 0:o.head)||{}),p=t.title||(o==null?void 0:o.title);p&&(t.title=p),t.meta=[...t.meta||[]];const m=(t==null?void 0:t.description)||(o==null?void 0:o.description);m&&t.meta.filter(n=>n.name==="description").length===0&&t.meta.push({name:"description",content:m});const r=(t==null?void 0:t.image)||(o==null?void 0:o.image);if(r&&t.meta.filter(n=>n.property==="og:image").length===0&&(typeof r=="string"&&t.meta.push({property:"og:image",content:r}),typeof r=="object")){const n=["src","secure_url","type","width","height","alt"];for(const i of n)i==="src"&&r.src?t.meta.push({property:"og:image",content:r[i]}):r[i]&&t.meta.push({property:`og:image:${i}`,content:r[i]})}w(()=>_(t))},{immediate:!0})},T=v({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(f){const e=C(),{tag:u,excerpt:c,path:o,query:t,head:p}=f,m={...t||{},path:o||(t==null?void 0:t.path)||D(g().path),find:"one"},r=(n,i)=>s("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:n,data:i},null,2));return s($,m,{default:e!=null&&e.default?({data:n,refresh:i,isPartial:y})=>{var l;return p&&a(n),(l=e.default)==null?void 0:l.call(e,{doc:n,refresh:i,isPartial:y,excerpt:c,...this.$attrs})}:({data:n})=>(p&&a(n),s(S,{value:n,excerpt:c,tag:u,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):r("default",n)})),empty:n=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,n))||s("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":n=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,n))||s("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{T as default};
