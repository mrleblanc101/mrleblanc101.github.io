import c from"./ContentRendererMarkdown.6803eabc.js";import{_ as l}from"./entry.5c90798e.js";import{N as m,E as s,ar as _,h as f}from"./app.config.c943217e.js";import"./_commonjsHelpers.0ee3bad0.js";const h=m({name:"ContentRenderer",props:{value:{type:Object,required:!1,default:()=>({})},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"}},setup(t){s(()=>t.excerpt,n=>{var e,r,o;n&&!((e=t.value)!=null&&e.excerpt)&&(console.warn(`No excerpt found for document content/${(r=t==null?void 0:t.value)==null?void 0:r._path}.${(o=t==null?void 0:t.value)==null?void 0:o._extension}!`),console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature."))},{immediate:!0})},render(t){var a,u,i,d;const n=_(),{value:e,excerpt:r,tag:o}=t;return!((u=(a=e==null?void 0:e.body)==null?void 0:a.children)!=null&&u.length)&&(n!=null&&n.empty)?n.empty({value:e,excerpt:r,tag:o,...this.$attrs}):n!=null&&n.default?n.default({value:e,excerpt:r,tag:o,...this.$attrs}):(e==null?void 0:e._type)==="markdown"&&((d=(i=e==null?void 0:e.body)==null?void 0:i.children)!=null&&d.length)?f(c,{value:e,excerpt:r,tag:o,...this.$attrs}):f("pre",null,JSON.stringify({message:"You should use slots with <ContentRenderer>",value:e,excerpt:r,tag:o},null,2))}}),C=l(h,[["__file","ContentRenderer.vue"]]);export{C as default};