import{_ as a,o as r,E as n,J as e,M as s,K as l,L as d,Q as c,H as p,a1 as f,a2 as m}from"./entry.145e4af5.js";import{u as x}from"./composables.699ee8f1.js";const h=t=>(f("data-v-04469bb6"),t=t(),m(),t),u={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},b=h(()=>e("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),g={class:"max-w-520px text-center z-20"},_=["textContent"],y=["textContent"],w={class:"w-full flex items-center justify-center"},S={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(t){const o=t;return x({title:`${o.statusCode} - ${o.statusMessage} | ${o.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]}),(k,v)=>{const i=p;return r(),n("div",u,[b,e("div",g,[e("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:s(t.statusCode)},null,8,_),e("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:s(t.description)},null,8,y),e("div",w,[l(i,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:d(()=>[c(s(t.backHome),1)]),_:1})])])])}}},C=a(S,[["__scopeId","data-v-04469bb6"],["__file","error-404.vue"]]);export{C as default};