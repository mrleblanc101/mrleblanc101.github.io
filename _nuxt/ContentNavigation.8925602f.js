import{D as A,a as e,b as l,r as v,C as P,P as L,e as I,Q as D,z as h,B as S,d as r,_ as R,A as V,R as b,x as N,S as x}from"./entry.38a47d4c.js";import{u as j}from"./asyncData.01483c15.js";import{h as g,e as B,j as C}from"./query.d5101bbb.js";import{w as c,s as $,u as w,a as k}from"./utils.daeafa04.js";/* empty css                      *//* empty css                            */import"./client-only.afec9680.js";import"./Project.vue.36ee05a3.js";import"./ContentDoc.fde2ba82.js";import"./ContentList.5b81580e.js";import"./ContentQuery.7fa404af.js";import"./ContentRenderer.61267055.js";import"./ContentRendererMarkdown.30cbae47.js";import"./ContentSlot.5cf3e1a1.js";import"./DocumentDrivenEmpty.89caefb9.js";import"./DocumentDrivenNotFound.3289527c.js";import"./Markdown.cb5a785b.js";import{u as z}from"./composables.a2bc7f75.js";import"./_commonjsHelpers.fed2a411.js";const M=async t=>{var _,u;const{content:i}=A().public,o=typeof(t==null?void 0:t.params)=="function"?t.params():t||{};i.locales.length&&((u=(_=o.where)==null?void 0:_.find(m=>m._locale))!=null&&u._locale||(o.where=o.where||[],o.where.push({_locale:i.defaultLocale})));const n=i.experimental.stripQueryParameters?c(`/navigation/${`${g(o)}.${i.integrity}`}/${B(o)}.json`):c(`/navigation/${g(o)}.${i.integrity}.json`);if($())return(await e(()=>import("./client-db.ff090cb3.js"),["./client-db.ff090cb3.js","./entry.38a47d4c.js","./entry.5983158b.css","./utils.daeafa04.js","./query.d5101bbb.js","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(m=>m.generateNavigation))(o);const a=await $fetch(n,{method:"GET",responseType:"json",params:i.experimental.stripQueryParameters?void 0:{_params:C(o),previewToken:w("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const H=l({emits:{error(t){return!0}},setup(t,{slots:i,emit:o}){const n=v(null),a=P();return L(_=>{if(!a.isHydrating)return o("error",_),n.value=_,!1}),()=>{var _,u;return n.value?(_=i.error)==null?void 0:_.call(i,{error:n}):(u=i.default)==null?void 0:u.call(i)}}}),q=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"})),Q=l({name:"DevOnly",setup(t,i){return()=>null}}),U=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"})),F=l({name:"ServerPlaceholder",render(){return I("div")}}),G=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),W=l({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:i}){const o=Y({duration:t.duration,throttle:t.throttle}),n=P();return n.hook("page:start",o.start),n.hook("page:finish",o.finish),D(()=>o.clear),()=>h("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${t.height}px`,opacity:o.isLoading.value?1:0,background:t.color,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},i)}});function Y(t){const i=v(0),o=v(!1),n=S(()=>1e4/t.duration);let a=null,_=null;function u(){m(),i.value=0,o.value=!0,t.throttle?_=setTimeout(E,t.throttle):E()}function s(){i.value=100,T()}function m(){clearInterval(a),clearTimeout(_),a=null,_=null}function O(y){i.value=Math.min(100,i.value+y)}function T(){m(),setTimeout(()=>{o.value=!1,setTimeout(()=>{i.value=0},400)},500)}function E(){a=setInterval(()=>{O(n.value)},100)}return{progress:i,isLoading:o,start:u,finish:s,clear:m}}const J=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"})),K=t=>Object.fromEntries(Object.entries(t).filter(([,i])=>i!==void 0)),d=(t,i)=>(o,n)=>(z(()=>t({...K(o),...n.attrs},n)),()=>{var a,_;return i?(_=(a=n.slots).default)==null?void 0:_.call(a):null}),f={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},X=l({name:"NoScript",inheritAttrs:!1,props:{...f,title:String,body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:i})=>{var a;const o={...t},n=(((a=i.default)==null?void 0:a.call(i))||[]).filter(({children:_})=>_).map(({children:_})=>_).join("");return n&&(o.children=n),{noscript:[o]}})}),Z=l({name:"Link",inheritAttrs:!1,props:{...f,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:d(t=>({link:[t]}))}),tt=l({name:"Base",inheritAttrs:!1,props:{...f,href:String,target:String},setup:d(t=>({base:t}))}),et=l({name:"Title",inheritAttrs:!1,setup:d((t,{slots:i})=>{var n,a,_;return{title:((_=(a=(n=i.default)==null?void 0:n.call(i))==null?void 0:a[0])==null?void 0:_.children)||null}})}),rt=l({name:"Meta",inheritAttrs:!1,props:{...f,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:d(t=>{const i={...t};return i.httpEquiv&&(i["http-equiv"]=i.httpEquiv,delete i.httpEquiv),{meta:[i]}})}),it=l({name:"Style",inheritAttrs:!1,props:{...f,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:i})=>{var a,_,u;const o={...t},n=(u=(_=(a=i.default)==null?void 0:a.call(i))==null?void 0:_[0])==null?void 0:u.children;return n&&(o.children=n),{style:[o]}})}),ot=l({name:"Head",inheritAttrs:!1,setup:(t,i)=>()=>{var o,n;return(n=(o=i.slots).default)==null?void 0:n.call(o)}}),nt=l({name:"Html",inheritAttrs:!1,props:{...f,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:d(t=>({htmlAttrs:t}),!0)}),at=l({name:"Body",inheritAttrs:!1,props:{...f,renderPriority:[String,Number]},setup:d(t=>({bodyAttrs:t}),!0)}),p=Object.freeze(Object.defineProperty({__proto__:null,NoScript:X,Link:Z,Base:tt,Title:et,Meta:rt,Style:it,Head:ot,Html:nt,Body:at},Symbol.toStringTag,{value:"Module"}));r(()=>e(()=>import("./ProseCode.c975d701.js"),["./ProseCode.c975d701.js","./ProseCodeCopyButton.1f172f07.js","./entry.38a47d4c.js","./entry.5983158b.css","./ProseCode.52c63d39.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCodeInline.fbb855c7.js"),["./ProseCodeInline.fbb855c7.js","./entry.38a47d4c.js","./entry.5983158b.css","./ProseCodeInline.1fa8bf79.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./AppFooter.55e79e60.js"),["./AppFooter.55e79e60.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./AppHeader.cf21daed.js"),["./AppHeader.cf21daed.js","./entry.38a47d4c.js","./entry.5983158b.css","./ColorSwitcher.263749b6.js","./component.vue3.de00ff7d.js","./client-only.afec9680.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ColorSwitcher.263749b6.js"),["./ColorSwitcher.263749b6.js","./component.vue3.de00ff7d.js","./client-only.afec9680.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Post.8ddf8689.js"),["./Post.8ddf8689.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Project.2242b7ec.js"),["./Project.2242b7ec.js","./Project.vue.36ee05a3.js","./entry.38a47d4c.js","./entry.5983158b.css","./Project.e7f28591.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCodeCopyButton.1f172f07.js"),["./ProseCodeCopyButton.1f172f07.js","./entry.38a47d4c.js","./entry.5983158b.css","./ProseCode.52c63d39.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentDoc.fde2ba82.js"),["./ContentDoc.fde2ba82.js","./entry.38a47d4c.js","./entry.5983158b.css","./composables.a2bc7f75.js","./ContentRenderer.61267055.js","./ContentRendererMarkdown.30cbae47.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.7fa404af.js","./asyncData.01483c15.js","./query.d5101bbb.js","./utils.daeafa04.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentList.5b81580e.js"),["./ContentList.5b81580e.js","./ContentQuery.7fa404af.js","./entry.38a47d4c.js","./entry.5983158b.css","./asyncData.01483c15.js","./query.d5101bbb.js","./utils.daeafa04.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>lt),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentQuery.7fa404af.js"),["./ContentQuery.7fa404af.js","./entry.38a47d4c.js","./entry.5983158b.css","./asyncData.01483c15.js","./query.d5101bbb.js","./utils.daeafa04.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRenderer.61267055.js"),["./ContentRenderer.61267055.js","./ContentRendererMarkdown.30cbae47.js","./entry.38a47d4c.js","./entry.5983158b.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRendererMarkdown.30cbae47.js"),["./ContentRendererMarkdown.30cbae47.js","./entry.38a47d4c.js","./entry.5983158b.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentSlot.5cf3e1a1.js"),["./ContentSlot.5cf3e1a1.js","./utils.daeafa04.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenEmpty.89caefb9.js"),["./DocumentDrivenEmpty.89caefb9.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenNotFound.3289527c.js"),["./DocumentDrivenNotFound.3289527c.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Markdown.cb5a785b.js"),["./Markdown.cb5a785b.js","./ContentSlot.5cf3e1a1.js","./utils.daeafa04.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseA.e7895f9b.js"),["./ProseA.e7895f9b.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseBlockquote.d7bce69d.js"),["./ProseBlockquote.d7bce69d.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseEm.13933769.js"),["./ProseEm.13933769.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH1.87ac510e.js"),["./ProseH1.87ac510e.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH2.0ebe8993.js"),["./ProseH2.0ebe8993.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH3.2a194908.js"),["./ProseH3.2a194908.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH4.74126e1c.js"),["./ProseH4.74126e1c.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH5.e057ac89.js"),["./ProseH5.e057ac89.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH6.c403fa4d.js"),["./ProseH6.c403fa4d.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseHr.ff032d11.js"),["./ProseHr.ff032d11.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseImg.f909150b.js"),["./ProseImg.f909150b.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseLi.be6f5092.js"),["./ProseLi.be6f5092.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseOl.3ff82828.js"),["./ProseOl.3ff82828.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseP.b5ca660d.js"),["./ProseP.b5ca660d.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseStrong.aa095099.js"),["./ProseStrong.aa095099.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTable.ca384bd0.js"),["./ProseTable.ca384bd0.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTbody.aec6e734.js"),["./ProseTbody.aec6e734.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTd.f729e508.js"),["./ProseTd.f729e508.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTh.58cfeed9.js"),["./ProseTh.58cfeed9.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseThead.063d97b4.js"),["./ProseThead.063d97b4.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTr.af523c23.js"),["./ProseTr.af523c23.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseUl.73f0c42b.js"),["./ProseUl.73f0c42b.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./welcome.34ac3ed8.js"),["./welcome.34ac3ed8.js","./composables.a2bc7f75.js","./entry.38a47d4c.js","./entry.5983158b.css","./asyncData.01483c15.js","./query.d5101bbb.js","./utils.daeafa04.js","./client-only.afec9680.js","./Project.vue.36ee05a3.js","./Project.e7f28591.css","./ContentDoc.fde2ba82.js","./ContentRenderer.61267055.js","./ContentRendererMarkdown.30cbae47.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.7fa404af.js","./ContentList.5b81580e.js","./ContentSlot.5cf3e1a1.js","./DocumentDrivenEmpty.89caefb9.js","./DocumentDrivenNotFound.3289527c.js","./Markdown.cb5a785b.js","./ProseCode.52c63d39.css","./ProseCodeInline.1fa8bf79.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.38a47d4c.js").then(t=>t.a6),["./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>q),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./client-only.afec9680.js"),["./client-only.afec9680.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>U),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>G),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.38a47d4c.js").then(t=>t.a4),["./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>J),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./component.vue3.de00ff7d.js"),["./component.vue3.de00ff7d.js","./client-only.afec9680.js","./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.38a47d4c.js").then(t=>t.a5),["./entry.38a47d4c.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.NoScript));r(()=>e(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Link));r(()=>e(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Base));r(()=>e(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Title));r(()=>e(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Meta));r(()=>e(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Style));r(()=>e(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Head));r(()=>e(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Html));r(()=>e(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Body));const _t=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:i}=V(t),o=S(()=>{var a;return typeof((a=i.value)==null?void 0:a.params)=="function"?i.value.params():i.value});if(!o.value&&b("dd-navigation").value){const{navigation:a}=k();return{navigation:a}}const{data:n}=await j(`content-navigation-${g(o.value)}`,()=>M(o.value));return{navigation:n}},render(t){const i=N(),{navigation:o}=t,n=u=>h(x,{to:u._path},()=>u.title),a=(u,s)=>h("ul",s?{"data-level":s}:null,u.map(m=>m.children?h("li",null,[n(m),a(m.children,s+1)]):h("li",null,n(m)))),_=u=>a(u,0);return i!=null&&i.default?i.default({navigation:o,...this.$attrs}):_(o)}}),ut=R(_t,[["__file","ContentNavigation.vue"]]),lt=Object.freeze(Object.defineProperty({__proto__:null,default:ut},Symbol.toStringTag,{value:"Module"}));export{ut as default};
