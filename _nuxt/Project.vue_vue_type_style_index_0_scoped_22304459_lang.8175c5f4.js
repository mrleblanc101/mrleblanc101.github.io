import{o as t,D as o,I as a,p as f,e as v,j as x,r as _,J as d,K as b,L as u,M as i,N as w,O as y,P as j,u as s,Q as k}from"./entry.d5b0f123.js";const $={viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},R=a("path",{d:"M12.5 45.832h64.582v8.332H12.5z"},null,-1),z=a("path",{d:"m59.168 77.918-5.836-5.836L75.418 50 53.332 27.918l5.836-5.836L87.082 50z"},null,-1),C=[R,z];function L(e,l){return t(),o("svg",$,C)}const M={render:L},N=["src","alt"],V={class:"absolute top-0 bottom-0 left-0 w-full z-10 overflow-y-auto overscroll-none flex flex-col"},B={class:"relative mt-auto p-4 md:px-5 md:py-4 after:content-[''] after:absolute after:-top-[100%] after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-t after:from-black/80 after:to-transparent after:-z-10 after:pointer-events-none"},T=["src","alt"],I={class:"p-4 md:px-5 md:py-4 pt-0 md:pt-0 bg-black/80 flex flex-col gap-3"},P={key:0,class:"text-gray-300"},D={key:1,class:"flex flex-wrap gap-2"},O={class:"inline-block px-4 py-2 bg-gray-200 text-gray-700 font-medium text-xs uppercase rounded-full shadow-md whitespace-nowrap"},S=["href"],r=f({elementRef:null}),A=v({__name:"Project",props:{project:{type:Object,default:null,required:!0}},setup(e){const l=f(null),p=x(()=>l.value&&r.value.elementRef===l.value||!1);function m(h){r.value.elementRef=l.value}return(h,n)=>{const g=_("Collapse");return t(),o("li",{ref_key:"elementRef",ref:l,class:"group relative rounded overflow-hidden bg-zinc-100 dark:bg-zinc-800",onMouseenter:n[0]||(n[0]=c=>s(r).elementRef=s(l)),onMouseleave:n[1]||(n[1]=c=>s(r).elementRef=null),onTouchend:m,onTouchmove:n[2]||(n[2]=k(()=>{},["stop"]))},[a("img",{class:"w-full aspect-[16/10] object-cover",src:`${e.project._path}/thumbnail.jpg`,width:"600",height:"365",alt:`Image: ${e.project.title}`,loading:"lazy"},null,8,N),a("div",V,[a("div",B,[a("img",{class:"max-h-[60px]",src:`${e.project._path}/logo.svg`,alt:`Logo: ${e.project.title}`},null,8,T)]),d(g,{when:s(p),class:"v-collapse"},{default:b(()=>[a("div",I,[e.project.description?(t(),o("div",P,u(e.project.description),1)):i("",!0),e.project.tags&&e.project.tags.length?(t(),o("ul",D,[(t(!0),o(w,null,y(e.project.tags,c=>(t(),o("li",O,u(c),1))),256))])):i("",!0),e.project.url?(t(),o("a",{key:2,href:e.project.url,target:"_blank",class:"inline-flex gap-1 hover:gap-2 font-bold transition-all delay-300 before:content-[''] before:block [@media(any-hover:hover)]:before:absolute [@media(any-hover:hover)]:before:inset-0 text-gray-300"},[j(" Voir le projet "),d(s(M),{class:"w-5"})],8,S)):i("",!0)])]),_:1},8,["when"])])],544)}}});export{A as _};
