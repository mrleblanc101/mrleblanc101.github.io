import{b as q,B as _,C,s as g,y as b,_ as S,A as k}from"./entry.42d0b062.js";import{u as N,h as Q,q as c}from"./query.850d35c7.js";import"./utils.1614010d.js";const $=q({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(i){const{path:t,only:r,without:a,where:n,sort:l,limit:o,skip:s,locale:f,find:d}=_(i),y=C(()=>{var e;return(e=t.value)==null?void 0:e.includes("/_")});g(()=>i,()=>p(),{deep:!0});const{data:h,refresh:p}=await N(`content-query-${Q(i)}`,()=>{let e;return t.value?e=c(t.value):e=c(),r.value&&(e=e.only(r.value)),a.value&&(e=e.without(a.value)),n.value&&(e=e.where(n.value)),l.value&&(e=e.sort(l.value)),o.value&&(e=e.limit(o.value)),s.value&&(e=e.skip(s.value)),f.value&&(e=e.where({_locale:f.value})),d.value==="one"?e.findOne():d.value==="surround"?t.value?e.findSurround(t.value):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find()):e.find()});return{isPartial:y,data:h,refresh:p}},render(i){var v;const t=b(),{data:r,refresh:a,isPartial:n,path:l,only:o,without:s,where:f,sort:d,limit:y,skip:h,locale:p,find:e}=i,u={path:l,only:o,without:s,where:f,sort:d,limit:y,skip:h,locale:p,find:e};if(u.find==="one"){if(!r&&(t==null?void 0:t["not-found"]))return t["not-found"]({props:u,...this.$attrs});if((t==null?void 0:t.empty)&&(r==null?void 0:r._type)==="markdown"&&!((v=r==null?void 0:r.body)!=null&&v.children.length))return t.empty({props:u,...this.$attrs})}else if((!r||!r.length)&&t!=null&&t["not-found"])return t["not-found"]({props:u,...this.$attrs});return t!=null&&t.default?t.default({data:r,refresh:a,isPartial:n,props:u,...this.$attrs}):((m,w)=>k("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:m,data:w},null,2)))("default",{data:r,props:u,isPartial:n})}}),B=S($,[["__file","ContentQuery.vue"]]);export{B as default};