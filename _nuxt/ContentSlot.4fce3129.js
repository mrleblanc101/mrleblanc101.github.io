import{b as c}from"./utils.d08eb0f6.js";import{_ as h,f as g,h as y,k as w,j as p,y as _}from"./entry.0bc1e737.js";const m=g({name:"ContentSlot",functional:!0,props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(e){const{parent:u}=_(),{between:r,default:l}=y(),f=w(()=>typeof e.unwrap=="string"?e.unwrap.split(" "):["*"]);return{fallbackSlot:l,tags:f,between:r,parent:u}},render({use:e,unwrap:u,fallbackSlot:r,between:l,tags:f,parent:n}){var i;try{let s=e;if(typeof e=="string"&&(s=(n==null?void 0:n.slots[e])||((i=n==null?void 0:n.parent)==null?void 0:i.slots[e]),console.warn(`Please set :use="$slots.${e}" in <ContentSlot> component to enable reactivity`)),!s)return r?r():p("div");if(!u)return[s()];const{flatUnwrap:d}=c(),a=d(s(),f);return l?a.flatMap((t,o)=>o===0?[t]:[l(),t]):a.reduce((t,o)=>(typeof o.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=o.children:t.push(o.children):t.push(o),t),[])}catch{return p("div")}}}),v=h(m,[["__file","ContentSlot.vue"]]);export{v as default};
