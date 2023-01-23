import{D as A,a as e,b as l,r as v,C as P,P as L,e as I,Q as D,z as h,B as S,d as r,_ as R,A as V,R as b,x as N,S as x}from"./entry.824ef3e8.js";import{u as j}from"./asyncData.81ef9e69.js";import{h as g,e as B,j as C}from"./query.a3617a93.js";import{w as c,s as $,u as w,a as k}from"./utils.89924b28.js";/* empty css                      *//* empty css                            */import"./client-only.b5296f86.js";import"./Project.vue.11fcc1dd.js";import"./ContentDoc.1a8a2c46.js";import"./ContentList.750d1bc7.js";import"./ContentQuery.44d86b12.js";import"./ContentRenderer.59695b5a.js";import"./ContentRendererMarkdown.da71b159.js";import"./ContentSlot.60cb0c02.js";import"./DocumentDrivenEmpty.1c60e86d.js";import"./DocumentDrivenNotFound.754b04fd.js";import"./Markdown.71939c9c.js";import{u as z}from"./composables.de694337.js";import"./_commonjsHelpers.fed2a411.js";const M=async t=>{var _,u;const{content:i}=A().public,o=typeof(t==null?void 0:t.params)=="function"?t.params():t||{};i.locales.length&&((u=(_=o.where)==null?void 0:_.find(m=>m._locale))!=null&&u._locale||(o.where=o.where||[],o.where.push({_locale:i.defaultLocale})));const n=i.experimental.stripQueryParameters?c(`/navigation/${`${g(o)}.${i.integrity}`}/${B(o)}.json`):c(`/navigation/${g(o)}.${i.integrity}.json`);if($())return(await e(()=>import("./client-db.f033bd43.js"),["./client-db.f033bd43.js","./entry.824ef3e8.js","./entry.5983158b.css","./utils.89924b28.js","./query.a3617a93.js","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(m=>m.generateNavigation))(o);const a=await $fetch(n,{method:"GET",responseType:"json",params:i.experimental.stripQueryParameters?void 0:{_params:C(o),previewToken:w("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const H=l({emits:{error(t){return!0}},setup(t,{slots:i,emit:o}){const n=v(null),a=P();return L(_=>{if(!a.isHydrating)return o("error",_),n.value=_,!1}),()=>{var _,u;return n.value?(_=i.error)==null?void 0:_.call(i,{error:n}):(u=i.default)==null?void 0:u.call(i)}}}),q=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"})),Q=l({name:"DevOnly",setup(t,i){return()=>null}}),U=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"})),F=l({name:"ServerPlaceholder",render(){return I("div")}}),G=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),W=l({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:i}){const o=Y({duration:t.duration,throttle:t.throttle}),n=P();return n.hook("page:start",o.start),n.hook("page:finish",o.finish),D(()=>o.clear),()=>h("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${t.height}px`,opacity:o.isLoading.value?1:0,background:t.color,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},i)}});function Y(t){const i=v(0),o=v(!1),n=S(()=>1e4/t.duration);let a=null,_=null;function u(){m(),i.value=0,o.value=!0,t.throttle?_=setTimeout(E,t.throttle):E()}function s(){i.value=100,T()}function m(){clearInterval(a),clearTimeout(_),a=null,_=null}function O(y){i.value=Math.min(100,i.value+y)}function T(){m(),setTimeout(()=>{o.value=!1,setTimeout(()=>{i.value=0},400)},500)}function E(){a=setInterval(()=>{O(n.value)},100)}return{progress:i,isLoading:o,start:u,finish:s,clear:m}}const J=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"})),K=t=>Object.fromEntries(Object.entries(t).filter(([,i])=>i!==void 0)),d=(t,i)=>(o,n)=>(z(()=>t({...K(o),...n.attrs},n)),()=>{var a,_;return i?(_=(a=n.slots).default)==null?void 0:_.call(a):null}),f={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},X=l({name:"NoScript",inheritAttrs:!1,props:{...f,title:String,body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:i})=>{var a;const o={...t},n=(((a=i.default)==null?void 0:a.call(i))||[]).filter(({children:_})=>_).map(({children:_})=>_).join("");return n&&(o.children=n),{noscript:[o]}})}),Z=l({name:"Link",inheritAttrs:!1,props:{...f,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:d(t=>({link:[t]}))}),tt=l({name:"Base",inheritAttrs:!1,props:{...f,href:String,target:String},setup:d(t=>({base:t}))}),et=l({name:"Title",inheritAttrs:!1,setup:d((t,{slots:i})=>{var n,a,_;return{title:((_=(a=(n=i.default)==null?void 0:n.call(i))==null?void 0:a[0])==null?void 0:_.children)||null}})}),rt=l({name:"Meta",inheritAttrs:!1,props:{...f,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:d(t=>{const i={...t};return i.httpEquiv&&(i["http-equiv"]=i.httpEquiv,delete i.httpEquiv),{meta:[i]}})}),it=l({name:"Style",inheritAttrs:!1,props:{...f,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:d((t,{slots:i})=>{var a,_,u;const o={...t},n=(u=(_=(a=i.default)==null?void 0:a.call(i))==null?void 0:_[0])==null?void 0:u.children;return n&&(o.children=n),{style:[o]}})}),ot=l({name:"Head",inheritAttrs:!1,setup:(t,i)=>()=>{var o,n;return(n=(o=i.slots).default)==null?void 0:n.call(o)}}),nt=l({name:"Html",inheritAttrs:!1,props:{...f,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:d(t=>({htmlAttrs:t}),!0)}),at=l({name:"Body",inheritAttrs:!1,props:{...f,renderPriority:[String,Number]},setup:d(t=>({bodyAttrs:t}),!0)}),p=Object.freeze(Object.defineProperty({__proto__:null,NoScript:X,Link:Z,Base:tt,Title:et,Meta:rt,Style:it,Head:ot,Html:nt,Body:at},Symbol.toStringTag,{value:"Module"}));r(()=>e(()=>import("./ProseCode.5a28f3c3.js"),["./ProseCode.5a28f3c3.js","./ProseCodeCopyButton.79e39a0b.js","./entry.824ef3e8.js","./entry.5983158b.css","./ProseCode.52c63d39.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCodeInline.17f53968.js"),["./ProseCodeInline.17f53968.js","./entry.824ef3e8.js","./entry.5983158b.css","./ProseCodeInline.1fa8bf79.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./AppFooter.f5b8cb3e.js"),["./AppFooter.f5b8cb3e.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./AppHeader.fcb3aacb.js"),["./AppHeader.fcb3aacb.js","./entry.824ef3e8.js","./entry.5983158b.css","./ColorSwitcher.96b8b191.js","./component.vue3.9f95248e.js","./client-only.b5296f86.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ColorSwitcher.96b8b191.js"),["./ColorSwitcher.96b8b191.js","./component.vue3.9f95248e.js","./client-only.b5296f86.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Post.590a7fe2.js"),["./Post.590a7fe2.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Project.90520ab7.js"),["./Project.90520ab7.js","./Project.vue.11fcc1dd.js","./entry.824ef3e8.js","./entry.5983158b.css","./Project.e7f28591.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCodeCopyButton.79e39a0b.js"),["./ProseCodeCopyButton.79e39a0b.js","./entry.824ef3e8.js","./entry.5983158b.css","./ProseCode.52c63d39.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentDoc.1a8a2c46.js"),["./ContentDoc.1a8a2c46.js","./entry.824ef3e8.js","./entry.5983158b.css","./composables.de694337.js","./ContentRenderer.59695b5a.js","./ContentRendererMarkdown.da71b159.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.44d86b12.js","./asyncData.81ef9e69.js","./query.a3617a93.js","./utils.89924b28.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentList.750d1bc7.js"),["./ContentList.750d1bc7.js","./ContentQuery.44d86b12.js","./entry.824ef3e8.js","./entry.5983158b.css","./asyncData.81ef9e69.js","./query.a3617a93.js","./utils.89924b28.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>lt),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentQuery.44d86b12.js"),["./ContentQuery.44d86b12.js","./entry.824ef3e8.js","./entry.5983158b.css","./asyncData.81ef9e69.js","./query.a3617a93.js","./utils.89924b28.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRenderer.59695b5a.js"),["./ContentRenderer.59695b5a.js","./ContentRendererMarkdown.da71b159.js","./entry.824ef3e8.js","./entry.5983158b.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRendererMarkdown.da71b159.js"),["./ContentRendererMarkdown.da71b159.js","./entry.824ef3e8.js","./entry.5983158b.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentSlot.60cb0c02.js"),["./ContentSlot.60cb0c02.js","./utils.89924b28.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenEmpty.1c60e86d.js"),["./DocumentDrivenEmpty.1c60e86d.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenNotFound.754b04fd.js"),["./DocumentDrivenNotFound.754b04fd.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Markdown.71939c9c.js"),["./Markdown.71939c9c.js","./ContentSlot.60cb0c02.js","./utils.89924b28.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseA.677c20eb.js"),["./ProseA.677c20eb.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseBlockquote.8da2f6f9.js"),["./ProseBlockquote.8da2f6f9.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseEm.37185ad6.js"),["./ProseEm.37185ad6.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH1.a1cfff58.js"),["./ProseH1.a1cfff58.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH2.f453f984.js"),["./ProseH2.f453f984.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH3.887ecdb8.js"),["./ProseH3.887ecdb8.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH4.7fcdcf51.js"),["./ProseH4.7fcdcf51.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH5.f9067c62.js"),["./ProseH5.f9067c62.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH6.3d844703.js"),["./ProseH6.3d844703.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseHr.ab46d3c8.js"),["./ProseHr.ab46d3c8.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseImg.fdd01784.js"),["./ProseImg.fdd01784.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseLi.54ac8191.js"),["./ProseLi.54ac8191.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseOl.062860d3.js"),["./ProseOl.062860d3.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseP.49b3ccd9.js"),["./ProseP.49b3ccd9.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseStrong.fd977f83.js"),["./ProseStrong.fd977f83.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTable.4d8aa7f8.js"),["./ProseTable.4d8aa7f8.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTbody.6c0ff186.js"),["./ProseTbody.6c0ff186.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTd.f04ff5bc.js"),["./ProseTd.f04ff5bc.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTh.0eefd8e7.js"),["./ProseTh.0eefd8e7.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseThead.14e87013.js"),["./ProseThead.14e87013.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTr.7c2d0f22.js"),["./ProseTr.7c2d0f22.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseUl.d5fea088.js"),["./ProseUl.d5fea088.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./welcome.18739427.js"),["./welcome.18739427.js","./composables.de694337.js","./entry.824ef3e8.js","./entry.5983158b.css","./asyncData.81ef9e69.js","./query.a3617a93.js","./utils.89924b28.js","./client-only.b5296f86.js","./Project.vue.11fcc1dd.js","./Project.e7f28591.css","./ContentDoc.1a8a2c46.js","./ContentRenderer.59695b5a.js","./ContentRendererMarkdown.da71b159.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.44d86b12.js","./ContentList.750d1bc7.js","./ContentSlot.60cb0c02.js","./DocumentDrivenEmpty.1c60e86d.js","./DocumentDrivenNotFound.754b04fd.js","./Markdown.71939c9c.js","./ProseCode.52c63d39.css","./ProseCodeInline.1fa8bf79.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.824ef3e8.js").then(t=>t.a6),["./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>q),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./client-only.b5296f86.js"),["./client-only.b5296f86.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>U),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>G),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.824ef3e8.js").then(t=>t.a4),["./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>J),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./component.vue3.9f95248e.js"),["./component.vue3.9f95248e.js","./client-only.b5296f86.js","./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.824ef3e8.js").then(t=>t.a5),["./entry.824ef3e8.js","./entry.5983158b.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.NoScript));r(()=>e(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Link));r(()=>e(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Base));r(()=>e(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Title));r(()=>e(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Meta));r(()=>e(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Style));r(()=>e(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Head));r(()=>e(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Html));r(()=>e(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Body));const _t=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:i}=V(t),o=S(()=>{var a;return typeof((a=i.value)==null?void 0:a.params)=="function"?i.value.params():i.value});if(!o.value&&b("dd-navigation").value){const{navigation:a}=k();return{navigation:a}}const{data:n}=await j(`content-navigation-${g(o.value)}`,()=>M(o.value));return{navigation:n}},render(t){const i=N(),{navigation:o}=t,n=u=>h(x,{to:u._path},()=>u.title),a=(u,s)=>h("ul",s?{"data-level":s}:null,u.map(m=>m.children?h("li",null,[n(m),a(m.children,s+1)]):h("li",null,n(m)))),_=u=>a(u,0);return i!=null&&i.default?i.default({navigation:o,...this.$attrs}):_(o)}}),ut=R(_t,[["__file","ContentNavigation.vue"]]),lt=Object.freeze(Object.defineProperty({__proto__:null,default:ut},Symbol.toStringTag,{value:"Module"}));export{ut as default};