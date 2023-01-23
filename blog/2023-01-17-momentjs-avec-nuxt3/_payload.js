export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P){return {data:{surround:[{_path:"\u002Fblog\u002F2023-01-01-mots-de-bienvenue",title:"Bienvenue sur mon site web !"},u],"content-query-tKGWIcYRfz":{_path:"\u002Fblog\u002F2023-01-17-momentjs-avec-nuxt3",_dir:"blog",_draft:v,_partial:v,_locale:"en",_empty:v,title:"Utiliser moment.js avec Nuxt 3",description:"Vous avez peut-être remarquer que le module @nuxtjs\u002Fmoment n'est pas capatible avec Nuxt 3.",createdAt:"2023-01-17T00:00:00.000Z",readingTime:{text:"3 min read",minutes:2.25,time:135000,words:450},body:{type:"root",children:[{type:a,tag:i,props:{},children:[{type:b,value:"Vous avez peut-être remarquer que le module "},{type:a,tag:j,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fmoment-module",rel:[k]},children:[{type:b,value:C}]},{type:b,value:" n'est pas capatible avec Nuxt 3."}]},{type:a,tag:i,props:{},children:[{type:b,value:"Vous vous demandez sans doute pourquoi as-t-on besoin d'un module pour utiliser "},{type:a,tag:j,props:{href:"https:\u002F\u002Fmomentjs.com\u002F",rel:[k]},children:[{type:b,value:D}]},{type:b,value:" dans Nuxt ?"}]},{type:a,tag:i,props:{},children:[{type:b,value:"Dans Nuxt 2, lorsque vous utilisez "},{type:a,tag:n,props:{},children:[{type:b,value:D}]},{type:b,value:", Webpack importe toutes les locales par défaut. Cela équivaut à plus d'une centaine de locales qui sont importées alors que vous n'avez probablement besoin que d'une ou deux d'entre elles."}]},{type:a,tag:i,props:{},children:[{type:b,value:"Voilà ou entre en jeu "},{type:a,tag:n,props:{},children:[{type:b,value:C}]},{type:b,value:"; celui-ci se charge de supprimer les locales inutiles en utilisant "},{type:a,tag:n,props:{},children:[{type:b,value:"moment-locales-webpack-plugin"}]},{type:b,value:" afin de réduire la taille du bundle de votre application."}]},{type:a,tag:i,props:{},children:[{type:b,value:"Si vous avez suivi l'actualité, vous savez peut-être que Nuxt 3 utilise maintenant "},{type:a,tag:j,props:{href:"https:\u002F\u002Fvitejs.dev\u002F",rel:[k]},children:[{type:b,value:"Vite.js"}]},{type:b,value:" au lieu de Webpack afin de bundler votre application. Il n'est donc plus nécessaire de suppimer les locales inutilisées du bundle puisque Vite.js s'en charge déjà grâce à son meilleur support du tree-shaking."}]},{type:a,tag:i,props:{},children:[{type:b,value:"Voici comment créer votre propre plugin pour utiliser moment.js directement dans une application multilingue utilisant "},{type:a,tag:j,props:{href:"https:\u002F\u002Fv8.i18n.nuxtjs.org\u002F",rel:[k]},children:[{type:b,value:"@nuxtjs\u002Fi18n"}]},{type:b,value:" et TypeScript dans Nuxt 3."}]},{type:a,tag:o,props:{code:"import moment from 'moment';\nimport 'moment\u002Flocale\u002Ffr-ca';\nimport type { NuxtApp } from '#app';\n\nexport default defineNuxtPlugin((nuxtApp) =\u003E {\n    const locale = nuxtApp.$i18n.locale.value;\n    moment.locale(locale);\n\n    nuxtApp.$i18n.onBeforeLanguageSwitch = (\n        oldLocale: string,\n        newLocale: string,\n        isInitialSetup: boolean,\n        nuxtApp: NuxtApp\n    ) =\u003E {\n        moment.locale(newLocale);\n    };\n\n    return {\n        provide: {\n            moment,\n        },\n    };\n});\n",filename:"plugins\u002Fmoment.ts",highlights:[w],language:"js",meta:u},children:[{type:a,tag:E,props:{},children:[{type:a,tag:o,props:{__ignoreMap:x},children:[{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:y}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:F}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:z},children:[{type:b,value:"'moment'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:q}]}]},{type:a,tag:c,props:{class:"line highlight"},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:y}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:z},children:[{type:b,value:"'moment\u002Flocale\u002Ffr-ca'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:q}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:y}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:"type"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" { "}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:G}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" } "}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:F}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:z},children:[{type:b,value:"'#app'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:q}]}]},{type:a,tag:c,props:{class:e},children:[]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:"export"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:"default"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"defineNuxtPlugin"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"((nuxtApp) "}]},{type:a,tag:c,props:{class:A},children:[{type:b,value:H}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:B}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:r}]},{type:a,tag:c,props:{class:A},children:[{type:b,value:"const"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:I}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:J}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:K}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"value"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:q}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:r}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:L}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:M}]}]},{type:a,tag:c,props:{class:e},children:[]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:r}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:J}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:K}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"onBeforeLanguageSwitch"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:I}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" ("}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        oldLocale"}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:s}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:N}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        newLocale"}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:s}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:N}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        isInitialSetup"}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:s}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:"boolean"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        nuxtApp"}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:s}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:h}]},{type:a,tag:c,props:{class:"ct-170b8b"},children:[{type:b,value:G}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"    ) "}]},{type:a,tag:c,props:{class:A},children:[{type:b,value:H}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:B}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        "}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:L}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"newLocale"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:M}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:O}]}]},{type:a,tag:c,props:{class:e},children:[]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:r}]},{type:a,tag:c,props:{class:f},children:[{type:b,value:"return"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:B}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        provide: {"}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"            "}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        },"}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:O}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"});"}]}]}]}]}]},{type:a,tag:i,props:{},children:[{type:b,value:"À première vue, ce code d'importation (ligne 1 et 2) qui provient de la documentation officiel de moment.js devrait fonctionner.\nPar contre, si vous avez utiliser ce code directement, vous aurez remarquer cette erreur lors de la compilation:"}]},{type:a,tag:"blockquote",props:{},children:[{type:a,tag:i,props:{},children:[{type:b,value:"Uncaught TypeError: Cannot read properties of undefined (reading 'defineLocale')"}]}]},{type:a,tag:i,props:{},children:[{type:b,value:"Il s'agit d'une erreur déroutante que je pris bien du temps à corriger, mais grâce à cette "},{type:a,tag:j,props:{href:"https:\u002F\u002Fgithub.com\u002Fmoment\u002Fmoment\u002Fissues\u002F5926#issuecomment-1056785251",rel:[k]},children:[{type:b,value:P}]},{type:b,value:" Github, j'ai finalement réussi à réglé le problème et complété la migration vers Nuxt 3 de mon application."}]},{type:a,tag:i,props:{},children:[{type:b,value:"Avec Vite.js, il faut simplement changer l'import des locales comme ceci:"}]},{type:a,tag:o,props:{code:"- import 'moment\u002Flocale\u002Ffr-ca';\n\n+ import 'moment\u002Fdist\u002Flocale\u002Ffr-ca';\n",language:"diff",meta:u},children:[{type:a,tag:E,props:{},children:[{type:a,tag:o,props:{__ignoreMap:x},children:[{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:"ct-3e0803"},children:[{type:b,value:"- import 'moment\u002Flocale\u002Ffr-ca';"}]}]},{type:a,tag:c,props:{class:e},children:[]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:f},children:[{type:b,value:"+ import 'moment\u002Fdist\u002Flocale\u002Ffr-ca';"}]}]}]}]}]},{type:a,tag:i,props:{},children:[{type:b,value:"Malheureusement, ne vous attendez pas à une correction de la part de moment.js puisque le projet est en mode maintenance et ne recevera de mise à jour que si une faille de sécurité majeure est découverte."}]},{type:a,tag:i,props:{},children:[{type:b,value:"Vous pouvez migrer vers une alternatives plus modernes à moment.js, mais dans mon cas, je devais migré une code base utilisant largement moment.js en Nuxt 3."}]},{type:a,tag:i,props:{},children:[{type:b,value:"J'ai bien tenté de migrer vers "},{type:a,tag:j,props:{href:"https:\u002F\u002Fday.js.org\u002F",rel:[k]},children:[{type:b,value:"Day.js"}]},{type:b,value:" a une API rétrocompatible et à l'avantage d'une approche modulaire et un code plus moderne lui permettant d'avoir un poid réduit (7kb vs 61kb) en prenant avantage des dernières fonctionnalités d'internationalisation d'EcmaScript, mais j'ai fait façe à une fonctionalité manquante en lien avec le parsing des heures (Ex. "},{type:a,tag:n,props:{},children:[{type:b,value:"10:00:00"}]},{type:b,value:") sans date d'associées."}]},{type:a,tag:i,props:{},children:[{type:b,value:"Heureusement, je pourrai peut-être faire la migration éventuellement puisqu'une "},{type:a,tag:j,props:{href:"https:\u002F\u002Fgithub.com\u002Fiamkun\u002Fdayjs\u002Fpull\u002F2197",rel:[k]},children:[{type:b,value:"pull request"}]},{type:b,value:" afin d'apporter cette fonctionnalité à Day.js a été ouverte après que j'aie ouvert l'"},{type:a,tag:j,props:{href:"https:\u002F\u002Fgithub.com\u002Fiamkun\u002Fdayjs\u002Fissues\u002F2179",rel:[k]},children:[{type:b,value:P}]},{type:b,value:" sur Github afin de reportée ce manquemant par rapport à moment.js."}]},{type:a,tag:"style",children:[{type:b,value:".ct-3e0803{color:#DC322F}\n.ct-170b8b{color:#CB4B16}\n.ct-f82ae3{color:#586E75}\n.ct-6952db{color:#2AA198}\n.ct-046bb4{color:#268BD2}\n.ct-ac56ac{color:#657B83}\n.ct-e5bd2d{color:#859900}\n.dark .ct-e5bd2d{color:#859900}\n.dark .ct-ac56ac{color:#839496}\n.dark .ct-046bb4{color:#268BD2}\n.dark .ct-6952db{color:#2AA198}\n.dark .ct-f82ae3{color:#93A1A1}\n.dark .ct-170b8b{color:#CB4B16}\n.dark .ct-3e0803{color:#DC322F}"}]}],toc:{title:x,searchDepth:w,depth:w,links:[]}},_type:"markdown",_id:"content:blog:2023-01-17-momentjs-avec-nuxt3.md",_source:"content",_file:"blog\u002F2023-01-17-momentjs-avec-nuxt3.md",_extension:"md"}},prerenderedAt:1674441879148}}("element","text","span","ct-ac56ac","line","ct-e5bd2d","ct-046bb4"," ","p","a","nofollow",".","locale","code-inline","code","moment",";","    ",":",",",null,false,2,"","import","ct-6952db","ct-f82ae3"," {","@nuxtjs\u002Fmoment","moment.js","pre","from","NuxtApp","=\u003E","=","nuxtApp","$i18n","(",");","string","    };","issue"))