export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM){return {data:{posts:[{_path:"\u002Fblog\u002F2023-01-17-momentjs-avec-nuxt3",_dir:H,_draft:n,_partial:n,_locale:I,_empty:n,title:"Utiliser moment.js avec Nuxt 3",description:"Vous avez peux-être remarquer que le module de la communauté @nuxtjs\u002Fmoment n'est pas capatible avec Nuxt 3.",excerpt:{type:s,children:[{type:a,tag:e,props:{},children:[{type:b,value:J},{type:a,tag:j,props:{href:K,rel:[k]},children:[{type:b,value:t}]},{type:b,value:L}]},{type:a,tag:e,props:{},children:[{type:b,value:M}]},{type:a,tag:e,props:{},children:[{type:b,value:N},{type:a,tag:i,props:{},children:[{type:b,value:O}]},{type:b,value:P}]},{type:a,tag:e,props:{},children:[{type:b,value:Q},{type:a,tag:i,props:{},children:[{type:b,value:t}]},{type:b,value:R},{type:a,tag:i,props:{},children:[{type:b,value:u}]},{type:b,value:S}]},{type:a,tag:e,props:{},children:[{type:b,value:T},{type:a,tag:j,props:{href:U,rel:[k]},children:[{type:b,value:V}]},{type:b,value:W},{type:a,tag:i,props:{},children:[{type:b,value:u}]},{type:b,value:X}]},{type:a,tag:e,props:{},children:[{type:b,value:Y},{type:a,tag:j,props:{href:Z,rel:[k]},children:[{type:b,value:_}]},{type:b,value:$}]},{type:a,tag:m,props:{code:B,language:aa},children:[{type:a,tag:v,props:{},children:[{type:a,tag:m,props:{__ignoreMap:o},children:[{type:b,value:B}]}]}]},{type:a,tag:e,props:{},children:[{type:b,value:ab}]},{type:a,tag:ac,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:ad}]}]},{type:a,tag:e,props:{},children:[{type:b,value:ae}]},{type:a,tag:e,props:{},children:[{type:b,value:af}]},{type:a,tag:m,props:{code:C,language:ag},children:[{type:a,tag:v,props:{},children:[{type:a,tag:m,props:{__ignoreMap:o},children:[{type:b,value:C}]}]}]},{type:a,tag:e,props:{},children:[{type:b,value:ah}]},{type:a,tag:e,props:{},children:[{type:b,value:ai}]},{type:a,tag:e,props:{},children:[{type:b,value:aj},{type:a,tag:j,props:{href:ak,rel:[k]},children:[{type:b,value:al}]},{type:b,value:am},{type:a,tag:i,props:{},children:[{type:b,value:an}]},{type:b,value:ao}]},{type:a,tag:e,props:{},children:[{type:b,value:ap},{type:a,tag:j,props:{href:aq,rel:[k]},children:[{type:b,value:ar}]},{type:b,value:as},{type:a,tag:j,props:{href:at,rel:[k]},children:[{type:b,value:au}]},{type:b,value:av}]}]},createdAt:"2023-01-17T00:00:00.000Z",readingTime:{text:"3 min read",minutes:2.205,time:132300,words:441},body:{type:s,children:[{type:a,tag:e,props:{},children:[{type:b,value:J},{type:a,tag:j,props:{href:K,rel:[k]},children:[{type:b,value:t}]},{type:b,value:L}]},{type:a,tag:e,props:{},children:[{type:b,value:M}]},{type:a,tag:e,props:{},children:[{type:b,value:N},{type:a,tag:i,props:{},children:[{type:b,value:O}]},{type:b,value:P}]},{type:a,tag:e,props:{},children:[{type:b,value:Q},{type:a,tag:i,props:{},children:[{type:b,value:t}]},{type:b,value:R},{type:a,tag:i,props:{},children:[{type:b,value:u}]},{type:b,value:S}]},{type:a,tag:e,props:{},children:[{type:b,value:T},{type:a,tag:j,props:{href:U,rel:[k]},children:[{type:b,value:V}]},{type:b,value:W},{type:a,tag:i,props:{},children:[{type:b,value:u}]},{type:b,value:X}]},{type:a,tag:e,props:{},children:[{type:b,value:Y},{type:a,tag:j,props:{href:Z,rel:[k]},children:[{type:b,value:_}]},{type:b,value:$}]},{type:a,tag:m,props:{code:B,language:aa},children:[{type:a,tag:v,props:{},children:[{type:a,tag:m,props:{__ignoreMap:o},children:[{type:a,tag:c,props:{class:g},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:q}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" moment "}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:w}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:r},children:[{type:b,value:"'moment'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:p}]}]},{type:a,tag:c,props:{class:g},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:q}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:r},children:[{type:b,value:"'moment\u002Flocale\u002Ffr-ca'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:p}]}]},{type:a,tag:c,props:{class:g},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:q}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:D}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" { LocaleObject } "}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:w}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:r},children:[{type:b,value:"'#i18n'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:p}]}]},{type:a,tag:c,props:{class:g},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:q}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:D}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" { NuxtApp } "}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:w}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:r},children:[{type:b,value:"'#app'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:p}]}]},{type:a,tag:c,props:{class:g},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:q}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:D}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" { ComputedRef } "}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:w}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:r},children:[{type:b,value:"'vue'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:p}]}]},{type:a,tag:c,props:{class:g},children:[]},{type:a,tag:c,props:{class:g},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:"export"}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:"default"}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:x},children:[{type:b,value:"defineNuxtPlugin"}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"((nuxtApp) "}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:aw}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"{"}]}]},{type:a,tag:c,props:{class:g},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:ax}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:"const"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:y},children:[{type:b,value:E}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:ay}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" nuxtApp.$i18n.locale.value;"}]}]},{type:a,tag:c,props:{class:g},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"    moment."}]},{type:a,tag:c,props:{class:x},children:[{type:b,value:E}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"(locale);"}]}]},{type:a,tag:c,props:{class:g},children:[]},{type:a,tag:c,props:{class:g},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"    nuxtApp.$i18n."}]},{type:a,tag:c,props:{class:x},children:[{type:b,value:"onBeforeLanguageSwitch"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:ay}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" ("}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"oldLocale"}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:z}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:y},children:[{type:b,value:az}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:F}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"newLocale"}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:z}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:y},children:[{type:b,value:az}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:F}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"isInitialSetup"}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:z}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:y},children:[{type:b,value:"boolean"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:F}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"nuxtApp"}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:z}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:"NuxtApp"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" ) "}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:aw}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:aA}]}]},{type:a,tag:c,props:{class:g},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        moment."}]},{type:a,tag:c,props:{class:x},children:[{type:b,value:E}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"(newLocale);"}]}]},{type:a,tag:c,props:{class:g},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:aB}]}]},{type:a,tag:c,props:{class:g},children:[]},{type:a,tag:c,props:{class:g},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:ax}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:"return"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:aA}]}]},{type:a,tag:c,props:{class:g},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        provide: {"}]}]},{type:a,tag:c,props:{class:g},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"            moment,"}]}]},{type:a,tag:c,props:{class:g},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        },"}]}]},{type:a,tag:c,props:{class:g},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:aB}]}]},{type:a,tag:c,props:{class:g},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"}"}]},{type:a,tag:c,props:{class:l},children:[{type:b,value:")"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:p}]}]}]}]}]},{type:a,tag:e,props:{},children:[{type:b,value:ab}]},{type:a,tag:ac,props:{},children:[{type:a,tag:e,props:{},children:[{type:b,value:ad}]}]},{type:a,tag:e,props:{},children:[{type:b,value:ae}]},{type:a,tag:e,props:{},children:[{type:b,value:af}]},{type:a,tag:m,props:{code:C,language:ag},children:[{type:a,tag:v,props:{},children:[{type:a,tag:m,props:{__ignoreMap:o},children:[{type:a,tag:c,props:{class:g},children:[{type:a,tag:c,props:{class:"ct-90f879"},children:[{type:b,value:"- import 'moment\u002Flocale\u002Ffr-ca';"}]}]},{type:a,tag:c,props:{class:g},children:[]},{type:a,tag:c,props:{class:g},children:[{type:a,tag:c,props:{class:"ct-8f79ad"},children:[{type:b,value:"+ import 'moment\u002Fdist\u002Flocale\u002Ffr-ca';"}]}]}]}]}]},{type:a,tag:e,props:{},children:[{type:b,value:ah}]},{type:a,tag:e,props:{},children:[{type:b,value:ai}]},{type:a,tag:e,props:{},children:[{type:b,value:aj},{type:a,tag:j,props:{href:ak,rel:[k]},children:[{type:b,value:al}]},{type:b,value:am},{type:a,tag:i,props:{},children:[{type:b,value:an}]},{type:b,value:ao}]},{type:a,tag:e,props:{},children:[{type:b,value:ap},{type:a,tag:j,props:{href:aq,rel:[k]},children:[{type:b,value:ar}]},{type:b,value:as},{type:a,tag:j,props:{href:at,rel:[k]},children:[{type:b,value:au}]},{type:b,value:av}]},{type:a,tag:"style",children:[{type:b,value:".ct-8f79ad{color:#116329}\n.ct-90f879{color:#82071E}\n.ct-b61253{color:#0550AE}\n.ct-9be424{color:#8250DF}\n.ct-ef2fe5{color:#953800}\n.ct-7e11c7{color:#0A3069}\n.ct-167cd6{color:#24292F}\n.ct-a9ea75{color:#CF222E}\n.dark .ct-a9ea75{color:#FF7B72}\n.dark .ct-167cd6{color:#C9D1D9}\n.dark .ct-7e11c7{color:#A5D6FF}\n.dark .ct-ef2fe5{color:#FFA657}\n.dark .ct-9be424{color:#D2A8FF}\n.dark .ct-b61253{color:#79C0FF}\n.dark .ct-90f879{color:#FFA198}\n.dark .ct-8f79ad{color:#7EE787}"}]}],toc:{title:o,searchDepth:A,depth:A,links:[]}},_type:aC,_id:"content:blog:2023-01-17-momentjs-avec-nuxt3.md",_source:aD,_file:"blog\u002F2023-01-17-momentjs-avec-nuxt3.md",_extension:aE},{_path:"\u002Fblog\u002F2023-01-01-mots-de-bienvenue",_dir:H,_draft:n,_partial:n,_locale:I,_empty:n,title:"Bienvenue sur mon site web !",description:G,excerpt:{type:s,children:[{type:a,tag:e,props:{},children:[{type:b,value:G}]},{type:a,tag:e,props:{},children:[{type:b,value:aF}]},{type:a,tag:e,props:{},children:[{type:b,value:aG},{type:a,tag:i,props:{},children:[{type:b,value:aH}]},{type:b,value:aI},{type:a,tag:i,props:{},children:[{type:b,value:aJ}]},{type:b,value:aK}]},{type:a,tag:e,props:{},children:[{type:b,value:aL}]},{type:a,tag:e,props:{},children:[{type:b,value:aM}]}]},createdAt:"2023-01-01T00:00:00.000Z",readingTime:{text:"1 min read",minutes:.43,time:25800,words:86},body:{type:s,children:[{type:a,tag:e,props:{},children:[{type:b,value:G}]},{type:a,tag:e,props:{},children:[{type:b,value:aF}]},{type:a,tag:e,props:{},children:[{type:b,value:aG},{type:a,tag:i,props:{},children:[{type:b,value:aH}]},{type:b,value:aI},{type:a,tag:i,props:{},children:[{type:b,value:aJ}]},{type:b,value:aK}]},{type:a,tag:e,props:{},children:[{type:b,value:aL}]},{type:a,tag:e,props:{},children:[{type:b,value:aM}]}],toc:{title:o,searchDepth:A,depth:A,links:[]}},_type:aC,_id:"content:blog:2023-01-01-mots-de-bienvenue.md",_source:aD,_file:"blog\u002F2023-01-01-mots-de-bienvenue.md",_extension:aE}]},prerenderedAt:1674364564074}}("element","text","span","ct-167cd6","p","ct-a9ea75","line"," ","code-inline","a","nofollow","ct-ef2fe5","code",false,"",";","import","ct-7e11c7","root","@nuxtjs\u002Fmoment","moment-locales-webpack-plugin","pre","from","ct-9be424","ct-b61253",":",2,"import moment from 'moment';\nimport 'moment\u002Flocale\u002Ffr-ca';\nimport type { LocaleObject } from '#i18n';\nimport type { NuxtApp } from '#app';\nimport type { ComputedRef } from 'vue';\n\nexport default defineNuxtPlugin((nuxtApp) =\u003E {\n    const locale = nuxtApp.$i18n.locale.value;\n    moment.locale(locale);\n\n    nuxtApp.$i18n.onBeforeLanguageSwitch = (oldLocale: string, newLocale: string, isInitialSetup: boolean, nuxtApp: NuxtApp ) =\u003E {\n        moment.locale(newLocale);\n    };\n\n    return {\n        provide: {\n            moment,\n        },\n    };\n});\n","- import 'moment\u002Flocale\u002Ffr-ca';\n\n+ import 'moment\u002Fdist\u002Flocale\u002Ffr-ca';\n","type","locale",", ","Nouvelle année, nouvelle résolution !","blog","en","Vous avez peux-être remarquer que le module de la communauté ","https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fmoment-module"," n'est pas capatible avec Nuxt 3.","Vous vous demandez sans doute pourquoi as-t-on besoin d'un module pour utiliser moment.js dans Nuxt ?","Dans Nuxt 2, lorsque vous utiliser ","moment.js",", Webpack importe toutes les locales par défaut. Cela équivaut à plus d'une centaine de locales importé alors que vous n'avez probablement besoin que d'une ou deux d'entre elles.","Voilà ou entre en jeu ",", celui-ci se charge de supprimer les locales inutiles du bundle Webpack en utilisant "," afin de réduire la taille du bundle de votre application.","Si vous avez suivi l'actualité, vous savez peux-être que Nuxt 3 utilise maintenant ","https:\u002F\u002Fvitejs.dev\u002F","Vite.js"," pour bundler votre application alors il n'est plus nécessaire d'utiliser "," pour suppimer les locales inutilisées du bundle.","Voici comment créer votre propre plugin pour utiliser moment.js directement dans une application multilingue utilisant ","https:\u002F\u002Fv8.i18n.nuxtjs.org\u002F","@nuxtjs\u002Fi18n"," et TypeScript dans Nuxt 3.","ts","À première vu, ce code d'importation qui provient directement de la documentation officiel de moment.js devrait marcher.\nPar contre, si vous avez utiliser ce code directement, vous aurez remarquer cette erreur lors de la compilation:","blockquote","Uncaught TypeError: Cannot read properties of undefined (reading 'defineLocale')","Il s'agit d'une erreur déroutante que je pris bien du temps a compre et corriger, mais grâce à cette issue Github, j'y suis finalement arrivé !","Avec Vite.js, il faut simplement changer l'import des locales comme ceci:","diff","Malheureusement, ne vous attendez pas à une correction de la part de moment.js puisque le projet est en mode maintenant et ne recevera de mise à jour que si une faille de sécurité majeure est découverte.","Vous pouvez vous penchez sur des alternatives plus modernes a moment.js qui sont plus modernes et supportent le tree-sharking correctement. Dans mon cas, je devais migré une code base utilisant largement moment.js en Nuxt 3.","J'ai bien tenté de migré vers ","https:\u002F\u002Fday.js.org\u002F","Day.js"," qui partage une API rétrocompatible et à l'avatange d'une approche modulaire et un code plus moderne lui permet d'avoir un poid bien moindre (7kb vs 61kb) en prenant avantages des dernières fonctions Intl de EcmaScript, mais j'ai fait façe a des fonctionalités manquantes en lien avec le parsing des heures au format ","10:00:00"," sans date associés.","Heureusement, je pourrai peux-être faire la migration puisqu'une ","https:\u002F\u002Fgithub.com\u002Fiamkun\u002Fdayjs\u002Fpull\u002F2197","pull request"," a été ouverte après que j'ai ouvert une ","https:\u002F\u002Fgithub.com\u002Fiamkun\u002Fdayjs\u002Fissues\u002F2179","issue"," sur Github afin d'apporter cette fonctionnalité à Day.js.","=\u003E","    ","=","string"," {","    };","markdown","content","md","Après trop de procrastination, j'ai enfin décidé qu'il était temps de refaire mon site personnel de zéro.","En tant qu'à y être, de tester le nouveau ","nuxt@^3.0.0"," qui vient tout juste d'être lancé en version stable ainsi que ","nuxt\u002Fcontent@^2.0.0"," pour générer un blog de manière statique afin de hoster mon site gratuitement sur Github Pages.","Sur ce blog, vous découvrirez mes expérimentations ainsi que des trucs et astuce sur l'écosystème Vue.js et Nuxt.js","J'espère vous être utile ! N'hésitez pas à poser des questions dans les commentaires."))