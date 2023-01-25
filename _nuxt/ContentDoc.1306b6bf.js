import{u as h,q as _,s as g,v as a,x as C,b as v,y as x,z as w,A as r,_ as D}from"./entry.42d0b062.js";import{u as q}from"./composables.e33c6c9e.js";import S from"./ContentRenderer.9991df42.js";import b from"./ContentQuery.999d31ea.js";import"./ContentRendererMarkdown.fd8322e6.js";import"./_commonjsHelpers.fed2a411.js";import"./query.850d35c7.js";import"./utils.1614010d.js";const y=(u,e=a())=>{const f=h(u),p=_();g(()=>h(u),(t=f)=>{if(!e.path||!t)return;const n=Object.assign({},(t==null?void 0:t.head)||{});n.meta=[...n.meta||[]],n.link=[...n.link||[]];const c=n.title||(t==null?void 0:t.title);c&&(n.title=c),p.public.content.host;const s=(n==null?void 0:n.description)||(t==null?void 0:t.description);s&&n.meta.filter(o=>o.name==="description").length===0&&n.meta.push({name:"description",content:s}),n!=null&&n.image||(t==null||t.image),C(()=>q(n))},{immediate:!0})},H=v({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(u){const e=x(),{tag:f,excerpt:p,path:m,query:t,head:n}=u,c={...t||{},path:m||(t==null?void 0:t.path)||w(a().path),find:"one"},s=(o,i)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return r(b,c,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:d})=>{var l;return n&&y(o),(l=e.default)==null?void 0:l.call(e,{doc:o,refresh:i,isPartial:d,excerpt:p,...this.$attrs})}:({data:o})=>(n&&y(o),r(S,{value:o,excerpt:p,tag:f,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):s("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||r("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||r("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),$=D(H,[["__file","ContentDoc.vue"]]);export{$ as default};