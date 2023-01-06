import{l as A,_ as e,e as l,p as v,k as P,C as L,D as I,E as D,i as h,j as S,d as r,t as R,F as V,f as b,G as j}from"./entry.980de4cb.js";import{u as N}from"./asyncData.91614dd5.js";import{h as E,e as x,j as B}from"./query.c073be15.js";import{w as c,s as $,u as w,a as C}from"./utils.b4e4283b.js";import"./client-only.cb634904.js";import"./ContentDoc.4a7ac2ce.js";import"./ContentList.6dbcf4be.js";import"./ContentQuery.d18cc630.js";import"./ContentRenderer.9bf78079.js";import"./ContentRendererMarkdown.9cedfd45.js";import"./ContentSlot.cfc299c1.js";import"./DocumentDrivenEmpty.5b6cc647.js";import"./DocumentDrivenNotFound.a20147f8.js";import"./Markdown.a8c6f926.js";import"./ProseCode.e0e77d78.js";import{u as k}from"./composables.851a7d10.js";import"./_commonjsHelpers.fed2a411.js";const z=async t=>{var u,_;const{content:i}=A().public,o=typeof(t==null?void 0:t.params)=="function"?t.params():t||{};i.locales.length&&((_=(u=o.where)==null?void 0:u.find(m=>m._locale))!=null&&_._locale||(o.where=o.where||[],o.where.push({_locale:i.defaultLocale})));const n=i.experimental.stripQueryParameters?c(`/navigation/${`${E(o)}.${i.integrity}`}/${x(o)}.json`):c(`/navigation/${E(o)}.${i.integrity}.json`);if($())return(await e(()=>import("./client-db.4284c86a.js"),["./client-db.4284c86a.js","./entry.980de4cb.js","./entry.46fbb43e.css","./utils.b4e4283b.js","./query.c073be15.js","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(m=>m.generateNavigation))(o);const a=await $fetch(n,{method:"GET",responseType:"json",params:i.experimental.stripQueryParameters?void 0:{_params:B(o),previewToken:w("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const M=l({emits:{error(t){return!0}},setup(t,{slots:i,emit:o}){const n=v(null),a=P();return L(u=>{if(!a.isHydrating)return o("error",u),n.value=u,!1}),()=>{var u,_;return n.value?(u=i.error)==null?void 0:u.call(i,{error:n}):(_=i.default)==null?void 0:_.call(i)}}}),H=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),q=l({name:"DevOnly",setup(t,i){return()=>null}}),U=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),Q=l({name:"ServerPlaceholder",render(){return I("div")}}),F=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"})),G=l({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:i}){const o=W({duration:t.duration,throttle:t.throttle}),n=P();return n.hook("page:start",o.start),n.hook("page:finish",o.finish),D(()=>o.clear),()=>h("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${t.height}px`,opacity:o.isLoading.value?1:0,background:t.color,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},i)}});function W(t){const i=v(0),o=v(!1),n=S(()=>1e4/t.duration);let a=null,u=null;function _(){m(),i.value=0,o.value=!0,t.throttle?u=setTimeout(g,t.throttle):g()}function s(){i.value=100,T()}function m(){clearInterval(a),clearTimeout(u),a=null,u=null}function O(y){i.value=Math.min(100,i.value+y)}function T(){m(),setTimeout(()=>{o.value=!1,setTimeout(()=>{i.value=0},400)},500)}function g(){a=setInterval(()=>{O(n.value)},100)}return{progress:i,isLoading:o,start:_,finish:s,clear:m}}const Y=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"})),J=t=>Object.fromEntries(Object.entries(t).filter(([,i])=>i!==void 0)),p=(t,i)=>(o,n)=>(k(()=>t({...J(o),...n.attrs},n)),()=>{var a,u;return i?(u=(a=n.slots).default)==null?void 0:u.call(a):null}),f={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},K=l({name:"NoScript",inheritAttrs:!1,props:{...f,title:String,body:Boolean,renderPriority:[String,Number]},setup:p((t,{slots:i})=>{var a;const o={...t},n=(((a=i.default)==null?void 0:a.call(i))||[]).filter(({children:u})=>u).map(({children:u})=>u).join("");return n&&(o.children=n),{noscript:[o]}})}),X=l({name:"Link",inheritAttrs:!1,props:{...f,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:p(t=>({link:[t]}))}),Z=l({name:"Base",inheritAttrs:!1,props:{...f,href:String,target:String},setup:p(t=>({base:t}))}),tt=l({name:"Title",inheritAttrs:!1,setup:p((t,{slots:i})=>{var n,a,u;return{title:((u=(a=(n=i.default)==null?void 0:n.call(i))==null?void 0:a[0])==null?void 0:u.children)||null}})}),et=l({name:"Meta",inheritAttrs:!1,props:{...f,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:p(t=>{const i={...t};return i.httpEquiv&&(i["http-equiv"]=i.httpEquiv,delete i.httpEquiv),{meta:[i]}})}),rt=l({name:"Style",inheritAttrs:!1,props:{...f,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:p((t,{slots:i})=>{var a,u,_;const o={...t},n=(_=(u=(a=i.default)==null?void 0:a.call(i))==null?void 0:u[0])==null?void 0:_.children;return n&&(o.children=n),{style:[o]}})}),it=l({name:"Head",inheritAttrs:!1,setup:(t,i)=>()=>{var o,n;return(n=(o=i.slots).default)==null?void 0:n.call(o)}}),ot=l({name:"Html",inheritAttrs:!1,props:{...f,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:p(t=>({htmlAttrs:t}),!0)}),nt=l({name:"Body",inheritAttrs:!1,props:{...f,renderPriority:[String,Number]},setup:p(t=>({bodyAttrs:t}),!0)}),d=Object.freeze(Object.defineProperty({__proto__:null,NoScript:K,Link:X,Base:Z,Title:tt,Meta:et,Style:rt,Head:it,Html:ot,Body:nt},Symbol.toStringTag,{value:"Module"}));r(()=>e(()=>import("./AppFooter.69e1b44b.js"),["./AppFooter.69e1b44b.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./AppHeader.687e70e9.js"),["./AppHeader.687e70e9.js","./AppHeader.vue_vue_type_script_setup_true_lang.23a1e8d4.js","./entry.980de4cb.js","./entry.46fbb43e.css","./ColorSwitcher.vue_vue_type_script_setup_true_lang.8bb445a7.js","./component.vue3.b64140b7.js","./client-only.cb634904.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ColorSwitcher.743b2af8.js"),["./ColorSwitcher.743b2af8.js","./ColorSwitcher.vue_vue_type_script_setup_true_lang.8bb445a7.js","./component.vue3.b64140b7.js","./client-only.cb634904.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Post.ae4f0659.js"),["./Post.ae4f0659.js","./Post.vue_vue_type_script_setup_true_lang.aa25e77c.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Project.3a455034.js"),["./Project.3a455034.js","./Project.vue_vue_type_script_setup_true_lang.e572ced8.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentDoc.4a7ac2ce.js"),["./ContentDoc.4a7ac2ce.js","./entry.980de4cb.js","./entry.46fbb43e.css","./composables.851a7d10.js","./ContentRenderer.9bf78079.js","./ContentRendererMarkdown.9cedfd45.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.d18cc630.js","./asyncData.91614dd5.js","./query.c073be15.js","./utils.b4e4283b.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentList.6dbcf4be.js"),["./ContentList.6dbcf4be.js","./ContentQuery.d18cc630.js","./entry.980de4cb.js","./entry.46fbb43e.css","./asyncData.91614dd5.js","./query.c073be15.js","./utils.b4e4283b.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>ut),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentQuery.d18cc630.js"),["./ContentQuery.d18cc630.js","./entry.980de4cb.js","./entry.46fbb43e.css","./asyncData.91614dd5.js","./query.c073be15.js","./utils.b4e4283b.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRenderer.9bf78079.js"),["./ContentRenderer.9bf78079.js","./ContentRendererMarkdown.9cedfd45.js","./entry.980de4cb.js","./entry.46fbb43e.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRendererMarkdown.9cedfd45.js"),["./ContentRendererMarkdown.9cedfd45.js","./entry.980de4cb.js","./entry.46fbb43e.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentSlot.cfc299c1.js"),["./ContentSlot.cfc299c1.js","./utils.b4e4283b.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenEmpty.5b6cc647.js"),["./DocumentDrivenEmpty.5b6cc647.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenNotFound.a20147f8.js"),["./DocumentDrivenNotFound.a20147f8.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Markdown.a8c6f926.js"),["./Markdown.a8c6f926.js","./ContentSlot.cfc299c1.js","./utils.b4e4283b.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseA.1425b040.js"),["./ProseA.1425b040.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseBlockquote.f43e781e.js"),["./ProseBlockquote.f43e781e.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCode.e0e77d78.js"),["./ProseCode.e0e77d78.js","./entry.980de4cb.js","./entry.46fbb43e.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCodeInline.da032f31.js"),["./ProseCodeInline.da032f31.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseEm.e7e0701b.js"),["./ProseEm.e7e0701b.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH1.12d93e24.js"),["./ProseH1.12d93e24.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH2.f60b94cf.js"),["./ProseH2.f60b94cf.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH3.0779e865.js"),["./ProseH3.0779e865.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH4.c7d8533b.js"),["./ProseH4.c7d8533b.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH5.d25250a1.js"),["./ProseH5.d25250a1.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH6.a5dc0505.js"),["./ProseH6.a5dc0505.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseHr.1a57b6d8.js"),["./ProseHr.1a57b6d8.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseImg.05cb7063.js"),["./ProseImg.05cb7063.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseLi.c2a5a944.js"),["./ProseLi.c2a5a944.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseOl.a22c0011.js"),["./ProseOl.a22c0011.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseP.dfc01b73.js"),["./ProseP.dfc01b73.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseStrong.084974b8.js"),["./ProseStrong.084974b8.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTable.b2251f5c.js"),["./ProseTable.b2251f5c.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTbody.17e12887.js"),["./ProseTbody.17e12887.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTd.e2c17060.js"),["./ProseTd.e2c17060.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTh.2a6ba543.js"),["./ProseTh.2a6ba543.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseThead.fa21b3ff.js"),["./ProseThead.fa21b3ff.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTr.825d6731.js"),["./ProseTr.825d6731.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseUl.90db41ba.js"),["./ProseUl.90db41ba.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./welcome.dd72b0a7.js"),["./welcome.dd72b0a7.js","./composables.851a7d10.js","./entry.980de4cb.js","./entry.46fbb43e.css","./asyncData.91614dd5.js","./query.c073be15.js","./utils.b4e4283b.js","./client-only.cb634904.js","./ContentDoc.4a7ac2ce.js","./ContentRenderer.9bf78079.js","./ContentRendererMarkdown.9cedfd45.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.d18cc630.js","./ContentList.6dbcf4be.js","./ContentSlot.cfc299c1.js","./DocumentDrivenEmpty.5b6cc647.js","./DocumentDrivenNotFound.a20147f8.js","./Markdown.a8c6f926.js","./ProseCode.e0e77d78.js","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.980de4cb.js").then(t=>t.a1),["./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>H),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./client-only.cb634904.js"),["./client-only.cb634904.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>U),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>F),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.980de4cb.js").then(t=>t.$),["./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>Y),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./component.vue3.b64140b7.js"),["./component.vue3.b64140b7.js","./client-only.cb634904.js","./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.980de4cb.js").then(t=>t.a0),["./entry.980de4cb.js","./entry.46fbb43e.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.NoScript));r(()=>e(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Link));r(()=>e(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Base));r(()=>e(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Title));r(()=>e(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Meta));r(()=>e(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Style));r(()=>e(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Head));r(()=>e(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Html));r(()=>e(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Body));const at=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:i}=R(t),o=S(()=>{var a;return typeof((a=i.value)==null?void 0:a.params)=="function"?i.value.params():i.value});if(!o.value&&V("dd-navigation").value){const{navigation:a}=C();return{navigation:a}}const{data:n}=await N(`content-navigation-${E(o.value)}`,()=>z(o.value));return{navigation:n}},render(t){const i=b(),{navigation:o}=t,n=_=>h(j,{to:_._path},()=>_.title),a=(_,s)=>h("ul",s?{"data-level":s}:null,_.map(m=>m.children?h("li",null,[n(m),a(m.children,s+1)]):h("li",null,n(m)))),u=_=>a(_,0);return i!=null&&i.default?i.default({navigation:o,...this.$attrs}):u(o)}}),ut=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"}));export{at as default};
