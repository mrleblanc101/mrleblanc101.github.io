import{b as c}from"./utils.1614010d.js";import{_ as g,b as h,y,C as w,A as p,K as C}from"./entry.42d0b062.js";const _=h({name:"ContentSlot",functional:!0,props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(e){const{parent:u}=C(),{between:r,default:l}=y(),i=w(()=>typeof e.unwrap=="string"?e.unwrap.split(" "):["*"]);return{fallbackSlot:l,tags:i,between:r,parent:u}},render({use:e,unwrap:u,fallbackSlot:r,between:l,tags:i,parent:n}){var f;try{let s=e;if(typeof e=="string"&&(s=(n==null?void 0:n.slots[e])||((f=n==null?void 0:n.parent)==null?void 0:f.slots[e]),console.warn(`Please set :use="$slots.${e}" in <ContentSlot> component to enable reactivity`)),!s)return r?r():p("div");if(!u)return[s()];const{flatUnwrap:d}=c(),a=d(s(),i);return l?a.flatMap((t,o)=>o===0?[t]:[l(),t]):a.reduce((t,o)=>(typeof o.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=o.children:t.push(o.children):t.push(o),t),[])}catch{return p("div")}}}),v=g(_,[["__file","ContentSlot.vue"]]);export{v as default};
