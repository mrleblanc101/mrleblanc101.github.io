import{l as A,_ as e,e as l,p as v,k as P,C as L,D as I,E as D,i as h,j as S,d as r,t as R,F as V,f as b,G as j}from"./entry.246f9b1e.js";import{u as N}from"./asyncData.7ff2d239.js";import{h as E,e as x,j as B}from"./query.ce7fd6d6.js";import{w as c,s as w,u as $,a as C}from"./utils.a8693684.js";import"./client-only.e5324a7c.js";import"./ContentDoc.44b312a5.js";import"./ContentList.4df6bba3.js";import"./ContentQuery.03057896.js";import"./ContentRenderer.172ffd16.js";import"./ContentRendererMarkdown.acafd8ca.js";import"./ContentSlot.839032a0.js";import"./DocumentDrivenEmpty.f89f9097.js";import"./DocumentDrivenNotFound.2c9f9510.js";import"./Markdown.3d9d7499.js";import"./ProseCode.54180954.js";import{u as k}from"./composables.0ebdc36a.js";import"./_commonjsHelpers.fed2a411.js";const z=async t=>{var u,_;const{content:i}=A().public,o=typeof(t==null?void 0:t.params)=="function"?t.params():t||{};i.locales.length&&((_=(u=o.where)==null?void 0:u.find(m=>m._locale))!=null&&_._locale||(o.where=o.where||[],o.where.push({_locale:i.defaultLocale})));const n=i.experimental.stripQueryParameters?c(`/navigation/${`${E(o)}.${i.integrity}`}/${x(o)}.json`):c(`/navigation/${E(o)}.${i.integrity}.json`);if(w())return(await e(()=>import("./client-db.319604cf.js"),["./client-db.319604cf.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css","./utils.a8693684.js","./query.ce7fd6d6.js","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(m=>m.generateNavigation))(o);const a=await $fetch(n,{method:"GET",responseType:"json",params:i.experimental.stripQueryParameters?void 0:{_params:B(o),previewToken:$("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const M=l({emits:{error(t){return!0}},setup(t,{slots:i,emit:o}){const n=v(null),a=P();return L(u=>{if(!a.isHydrating)return o("error",u),n.value=u,!1}),()=>{var u,_;return n.value?(u=i.error)==null?void 0:u.call(i,{error:n}):(_=i.default)==null?void 0:_.call(i)}}}),H=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),q=l({name:"DevOnly",setup(t,i){return()=>null}}),U=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),Q=l({name:"ServerPlaceholder",render(){return I("div")}}),F=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"})),G=l({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:i}){const o=W({duration:t.duration,throttle:t.throttle}),n=P();return n.hook("page:start",o.start),n.hook("page:finish",o.finish),D(()=>o.clear),()=>h("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${t.height}px`,opacity:o.isLoading.value?1:0,background:t.color,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},i)}});function W(t){const i=v(0),o=v(!1),n=S(()=>1e4/t.duration);let a=null,u=null;function _(){m(),i.value=0,o.value=!0,t.throttle?u=setTimeout(g,t.throttle):g()}function s(){i.value=100,T()}function m(){clearInterval(a),clearTimeout(u),a=null,u=null}function O(y){i.value=Math.min(100,i.value+y)}function T(){m(),setTimeout(()=>{o.value=!1,setTimeout(()=>{i.value=0},400)},500)}function g(){a=setInterval(()=>{O(n.value)},100)}return{progress:i,isLoading:o,start:_,finish:s,clear:m}}const Y=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"})),J=t=>Object.fromEntries(Object.entries(t).filter(([,i])=>i!==void 0)),p=(t,i)=>(o,n)=>(k(()=>t({...J(o),...n.attrs},n)),()=>{var a,u;return i?(u=(a=n.slots).default)==null?void 0:u.call(a):null}),f={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},K=l({name:"NoScript",inheritAttrs:!1,props:{...f,title:String,body:Boolean,renderPriority:[String,Number]},setup:p((t,{slots:i})=>{var a;const o={...t},n=(((a=i.default)==null?void 0:a.call(i))||[]).filter(({children:u})=>u).map(({children:u})=>u).join("");return n&&(o.children=n),{noscript:[o]}})}),X=l({name:"Link",inheritAttrs:!1,props:{...f,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:p(t=>({link:[t]}))}),Z=l({name:"Base",inheritAttrs:!1,props:{...f,href:String,target:String},setup:p(t=>({base:t}))}),tt=l({name:"Title",inheritAttrs:!1,setup:p((t,{slots:i})=>{var n,a,u;return{title:((u=(a=(n=i.default)==null?void 0:n.call(i))==null?void 0:a[0])==null?void 0:u.children)||null}})}),et=l({name:"Meta",inheritAttrs:!1,props:{...f,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:p(t=>{const i={...t};return i.httpEquiv&&(i["http-equiv"]=i.httpEquiv,delete i.httpEquiv),{meta:[i]}})}),rt=l({name:"Style",inheritAttrs:!1,props:{...f,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:p((t,{slots:i})=>{var a,u,_;const o={...t},n=(_=(u=(a=i.default)==null?void 0:a.call(i))==null?void 0:u[0])==null?void 0:_.children;return n&&(o.children=n),{style:[o]}})}),it=l({name:"Head",inheritAttrs:!1,setup:(t,i)=>()=>{var o,n;return(n=(o=i.slots).default)==null?void 0:n.call(o)}}),ot=l({name:"Html",inheritAttrs:!1,props:{...f,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:p(t=>({htmlAttrs:t}),!0)}),nt=l({name:"Body",inheritAttrs:!1,props:{...f,renderPriority:[String,Number]},setup:p(t=>({bodyAttrs:t}),!0)}),d=Object.freeze(Object.defineProperty({__proto__:null,NoScript:K,Link:X,Base:Z,Title:tt,Meta:et,Style:rt,Head:it,Html:ot,Body:nt},Symbol.toStringTag,{value:"Module"}));r(()=>e(()=>import("./AppFooter.a1dfe5f2.js"),["./AppFooter.a1dfe5f2.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./AppHeader.f4eb57d7.js"),["./AppHeader.f4eb57d7.js","./AppHeader.vue_vue_type_script_setup_true_lang.48003a2a.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css","./ColorSwitcher.vue_vue_type_script_setup_true_lang.bc0fe892.js","./component.vue3.6fc63720.js","./client-only.e5324a7c.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ColorSwitcher.7fc29e97.js"),["./ColorSwitcher.7fc29e97.js","./ColorSwitcher.vue_vue_type_script_setup_true_lang.bc0fe892.js","./component.vue3.6fc63720.js","./client-only.e5324a7c.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Post.ff1fbb1a.js"),["./Post.ff1fbb1a.js","./Post.vue_vue_type_script_setup_true_lang.f01da13c.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Project.798f3774.js"),["./Project.798f3774.js","./Project.vue_vue_type_script_setup_true_lang.a6f31146.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentDoc.44b312a5.js"),["./ContentDoc.44b312a5.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css","./composables.0ebdc36a.js","./ContentRenderer.172ffd16.js","./ContentRendererMarkdown.acafd8ca.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.03057896.js","./asyncData.7ff2d239.js","./query.ce7fd6d6.js","./utils.a8693684.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentList.4df6bba3.js"),["./ContentList.4df6bba3.js","./ContentQuery.03057896.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css","./asyncData.7ff2d239.js","./query.ce7fd6d6.js","./utils.a8693684.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>ut),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentQuery.03057896.js"),["./ContentQuery.03057896.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css","./asyncData.7ff2d239.js","./query.ce7fd6d6.js","./utils.a8693684.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRenderer.172ffd16.js"),["./ContentRenderer.172ffd16.js","./ContentRendererMarkdown.acafd8ca.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRendererMarkdown.acafd8ca.js"),["./ContentRendererMarkdown.acafd8ca.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentSlot.839032a0.js"),["./ContentSlot.839032a0.js","./utils.a8693684.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenEmpty.f89f9097.js"),["./DocumentDrivenEmpty.f89f9097.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenNotFound.2c9f9510.js"),["./DocumentDrivenNotFound.2c9f9510.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Markdown.3d9d7499.js"),["./Markdown.3d9d7499.js","./ContentSlot.839032a0.js","./utils.a8693684.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseA.529e0a9e.js"),["./ProseA.529e0a9e.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseBlockquote.38b2f20f.js"),["./ProseBlockquote.38b2f20f.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCode.54180954.js"),["./ProseCode.54180954.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCodeInline.71b6a0fd.js"),["./ProseCodeInline.71b6a0fd.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseEm.33d33091.js"),["./ProseEm.33d33091.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH1.8a176ccc.js"),["./ProseH1.8a176ccc.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH2.6813b05e.js"),["./ProseH2.6813b05e.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH3.df5fbba2.js"),["./ProseH3.df5fbba2.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH4.38ea2a4d.js"),["./ProseH4.38ea2a4d.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH5.f4a3c819.js"),["./ProseH5.f4a3c819.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH6.372a5931.js"),["./ProseH6.372a5931.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseHr.0ea74c3f.js"),["./ProseHr.0ea74c3f.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseImg.3ae3af98.js"),["./ProseImg.3ae3af98.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseLi.6c8afd04.js"),["./ProseLi.6c8afd04.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseOl.113d1ae5.js"),["./ProseOl.113d1ae5.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseP.f713d033.js"),["./ProseP.f713d033.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseStrong.2f5817c4.js"),["./ProseStrong.2f5817c4.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTable.dc0943f7.js"),["./ProseTable.dc0943f7.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTbody.11c6963a.js"),["./ProseTbody.11c6963a.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTd.1ecbfb16.js"),["./ProseTd.1ecbfb16.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTh.562d4f6e.js"),["./ProseTh.562d4f6e.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseThead.0a3bbd2e.js"),["./ProseThead.0a3bbd2e.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTr.53e506df.js"),["./ProseTr.53e506df.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseUl.caab9c8d.js"),["./ProseUl.caab9c8d.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./welcome.32b06937.js"),["./welcome.32b06937.js","./composables.0ebdc36a.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css","./asyncData.7ff2d239.js","./query.ce7fd6d6.js","./utils.a8693684.js","./client-only.e5324a7c.js","./ContentDoc.44b312a5.js","./ContentRenderer.172ffd16.js","./ContentRendererMarkdown.acafd8ca.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.03057896.js","./ContentList.4df6bba3.js","./ContentSlot.839032a0.js","./DocumentDrivenEmpty.f89f9097.js","./DocumentDrivenNotFound.2c9f9510.js","./Markdown.3d9d7499.js","./ProseCode.54180954.js","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.246f9b1e.js").then(t=>t.a2),["./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>H),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./client-only.e5324a7c.js"),["./client-only.e5324a7c.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>U),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>F),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.246f9b1e.js").then(t=>t.a0),["./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>Y),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./component.vue3.6fc63720.js"),["./component.vue3.6fc63720.js","./client-only.e5324a7c.js","./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.246f9b1e.js").then(t=>t.a1),["./entry.246f9b1e.js","./entry.8d9c4e8f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.NoScript));r(()=>e(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Link));r(()=>e(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Base));r(()=>e(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Title));r(()=>e(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Meta));r(()=>e(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Style));r(()=>e(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Head));r(()=>e(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Html));r(()=>e(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Body));const at=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:i}=R(t),o=S(()=>{var a;return typeof((a=i.value)==null?void 0:a.params)=="function"?i.value.params():i.value});if(!o.value&&V("dd-navigation").value){const{navigation:a}=C();return{navigation:a}}const{data:n}=await N(`content-navigation-${E(o.value)}`,()=>z(o.value));return{navigation:n}},render(t){const i=b(),{navigation:o}=t,n=_=>h(j,{to:_._path},()=>_.title),a=(_,s)=>h("ul",s?{"data-level":s}:null,_.map(m=>m.children?h("li",null,[n(m),a(m.children,s+1)]):h("li",null,n(m)))),u=_=>a(_,0);return i!=null&&i.default?i.default({navigation:o,...this.$attrs}):u(o)}}),ut=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"}));export{at as default};
