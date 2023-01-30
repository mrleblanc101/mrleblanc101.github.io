export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W){return {data:{posts:[{_path:"\u002Fblog\u002F2023-01-17-momentjs-avec-nuxt3",_dir:B,_draft:m,_partial:m,_locale:C,_empty:m,title:"Utiliser moment.js avec Nuxt 3",description:"Vous avez peut-être remarquer que le module @nuxtjs\u002Fmoment n'est pas capatible avec Nuxt 3.",createdAt:"2023-01-17T00:00:00.000Z",readingTime:{text:"3 min read",minutes:2.25,time:135000,words:450},body:{type:D,children:[{type:a,tag:f,props:{},children:[{type:b,value:"Vous avez peut-être remarquer que le module "},{type:a,tag:j,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fmoment-module",rel:[k]},children:[{type:b,value:E}]},{type:b,value:" n'est pas capatible avec Nuxt 3."}]},{type:a,tag:f,props:{},children:[{type:b,value:"Vous vous demandez sans doute pourquoi as-t-on besoin d'un module pour utiliser "},{type:a,tag:j,props:{href:"https:\u002F\u002Fmomentjs.com\u002F",rel:[k]},children:[{type:b,value:F}]},{type:b,value:" dans Nuxt ?"}]},{type:a,tag:f,props:{},children:[{type:b,value:"Dans Nuxt 2, lorsque vous utilisez "},{type:a,tag:n,props:{},children:[{type:b,value:F}]},{type:b,value:", Webpack importe toutes les locales par défaut. Cela équivaut à plus d'une centaine de locales qui sont importées alors que vous n'avez probablement besoin que d'une ou deux d'entre elles."}]},{type:a,tag:f,props:{},children:[{type:b,value:"Voilà ou entre en jeu "},{type:a,tag:n,props:{},children:[{type:b,value:E}]},{type:b,value:"; celui-ci se charge de supprimer les locales inutiles en utilisant "},{type:a,tag:n,props:{},children:[{type:b,value:"moment-locales-webpack-plugin"}]},{type:b,value:" afin de réduire la taille du bundle de votre application."}]},{type:a,tag:f,props:{},children:[{type:b,value:"Si vous avez suivi l'actualité, vous savez peut-être que Nuxt 3 utilise maintenant "},{type:a,tag:j,props:{href:"https:\u002F\u002Fvitejs.dev\u002F",rel:[k]},children:[{type:b,value:"Vite.js"}]},{type:b,value:" au lieu de Webpack afin de bundler votre application. Il n'est donc plus nécessaire de suppimer les locales inutilisées du bundle puisque Vite.js s'en charge déjà grâce à son meilleur support du tree-shaking."}]},{type:a,tag:f,props:{},children:[{type:b,value:"Voici comment créer votre propre plugin pour utiliser moment.js directement dans une application multilingue utilisant "},{type:a,tag:j,props:{href:"https:\u002F\u002Fv8.i18n.nuxtjs.org\u002F",rel:[k]},children:[{type:b,value:"@nuxtjs\u002Fi18n"}]},{type:b,value:" et TypeScript dans Nuxt 3."}]},{type:a,tag:q,props:{code:"import moment from 'moment';\nimport 'moment\u002Flocale\u002Ffr-ca';\nimport type { NuxtApp } from '#app';\n\nexport default defineNuxtPlugin((nuxtApp) =\u003E {\n    const locale = nuxtApp.$i18n.locale.value;\n    moment.locale(locale);\n\n    nuxtApp.$i18n.onBeforeLanguageSwitch = (\n        oldLocale: string,\n        newLocale: string,\n        isInitialSetup: boolean,\n        nuxtApp: NuxtApp\n    ) =\u003E {\n        moment.locale(newLocale);\n    };\n\n    return {\n        provide: {\n            moment,\n        },\n    };\n});\n",filename:"plugins\u002Fmoment.ts",highlights:[o],language:"js",meta:G},children:[{type:a,tag:H,props:{},children:[{type:a,tag:q,props:{__ignoreMap:r},children:[{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:x}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:s}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:I}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:y},children:[{type:b,value:"'moment'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]}]},{type:a,tag:c,props:{class:"line highlight"},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:x}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:y},children:[{type:b,value:"'moment\u002Flocale\u002Ffr-ca'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:x}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"type"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" { "}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:J}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" } "}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:I}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:y},children:[{type:b,value:"'#app'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]}]},{type:a,tag:c,props:{class:e},children:[]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:"export"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"default"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"defineNuxtPlugin"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"((nuxtApp) "}]},{type:a,tag:c,props:{class:z},children:[{type:b,value:K}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:A}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:u}]},{type:a,tag:c,props:{class:z},children:[{type:b,value:"const"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:L}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:M}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:N}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"value"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:t}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:u}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:s}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:O}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:P}]}]},{type:a,tag:c,props:{class:e},children:[]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:u}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:M}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:N}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"onBeforeLanguageSwitch"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:L}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" ("}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        oldLocale"}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:v}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:Q}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:w}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        newLocale"}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:v}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:Q}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:w}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        isInitialSetup"}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:v}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"boolean"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:w}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        nuxtApp"}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:v}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:"ct-24cb94"},children:[{type:b,value:J}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"    ) "}]},{type:a,tag:c,props:{class:z},children:[{type:b,value:K}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:A}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        "}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:s}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:l}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:p}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:O}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"newLocale"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:P}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:R}]}]},{type:a,tag:c,props:{class:e},children:[]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:u}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"return"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:A}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        provide: {"}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"            "}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:s}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:w}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        },"}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:R}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"});"}]}]}]}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"À première vue, ce code d'importation (ligne 1 et 2) qui provient de la documentation officiel de moment.js devrait fonctionner.\nPar contre, si vous avez utiliser ce code directement, vous aurez remarquer cette erreur lors de la compilation:"}]},{type:a,tag:"blockquote",props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"Uncaught TypeError: Cannot read properties of undefined (reading 'defineLocale')"}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"Il s'agit d'une erreur déroutante que je pris bien du temps à corriger, mais grâce à cette "},{type:a,tag:j,props:{href:"https:\u002F\u002Fgithub.com\u002Fmoment\u002Fmoment\u002Fissues\u002F5926#issuecomment-1056785251",rel:[k]},children:[{type:b,value:S}]},{type:b,value:" Github, j'ai finalement réussi à réglé le problème et complété la migration vers Nuxt 3 de mon application."}]},{type:a,tag:f,props:{},children:[{type:b,value:"Avec Vite.js, il faut simplement changer l'import des locales comme ceci:"}]},{type:a,tag:q,props:{code:"- import 'moment\u002Flocale\u002Ffr-ca';\n\n+ import 'moment\u002Fdist\u002Flocale\u002Ffr-ca';\n",language:"diff",meta:G},children:[{type:a,tag:H,props:{},children:[{type:a,tag:q,props:{__ignoreMap:r},children:[{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:"ct-c0cf7b"},children:[{type:b,value:"- import 'moment\u002Flocale\u002Ffr-ca';"}]}]},{type:a,tag:c,props:{class:e},children:[]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:"+ import 'moment\u002Fdist\u002Flocale\u002Ffr-ca';"}]}]}]}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"Malheureusement, ne vous attendez pas à une correction de la part de moment.js puisque le projet est en mode maintenance et ne recevera de mise à jour que si une faille de sécurité majeure est découverte."}]},{type:a,tag:f,props:{},children:[{type:b,value:"Vous pouvez migrer vers une alternatives plus modernes à moment.js, mais dans mon cas, je devais migré une code base utilisant largement moment.js en Nuxt 3."}]},{type:a,tag:f,props:{},children:[{type:b,value:"J'ai bien tenté de migrer vers "},{type:a,tag:j,props:{href:"https:\u002F\u002Fday.js.org\u002F",rel:[k]},children:[{type:b,value:"Day.js"}]},{type:b,value:" a une API rétrocompatible et à l'avantage d'une approche modulaire et un code plus moderne lui permettant d'avoir un poid réduit (7kb vs 61kb) en prenant avantage des dernières fonctionnalités d'internationalisation d'EcmaScript, mais j'ai fait façe à une fonctionalité manquante en lien avec le parsing des heures (Ex. "},{type:a,tag:n,props:{},children:[{type:b,value:"10:00:00"}]},{type:b,value:") sans date d'associées."}]},{type:a,tag:f,props:{},children:[{type:b,value:"Heureusement, je pourrai peut-être faire la migration éventuellement puisqu'une "},{type:a,tag:j,props:{href:"https:\u002F\u002Fgithub.com\u002Fiamkun\u002Fdayjs\u002Fpull\u002F2197",rel:[k]},children:[{type:b,value:"pull request"}]},{type:b,value:" afin d'apporter cette fonctionnalité à Day.js a été ouverte après que j'aie ouvert l'"},{type:a,tag:j,props:{href:"https:\u002F\u002Fgithub.com\u002Fiamkun\u002Fdayjs\u002Fissues\u002F2179",rel:[k]},children:[{type:b,value:S}]},{type:b,value:" sur Github afin de reportée ce manquemant par rapport à moment.js."}]},{type:a,tag:"style",children:[{type:b,value:".ct-c0cf7b{color:#DC322F}\n.ct-24cb94{color:#CB4B16}\n.ct-7bdba4{color:#586E75}\n.ct-350fd7{color:#2AA198}\n.ct-1e9b0d{color:#268BD2}\n.ct-a4582a{color:#657B83}\n.ct-12fb62{color:#859900}\n.dark .ct-12fb62{color:#859900}\n.dark .ct-a4582a{color:#839496}\n.dark .ct-1e9b0d{color:#268BD2}\n.dark .ct-350fd7{color:#2AA198}\n.dark .ct-7bdba4{color:#93A1A1}\n.dark .ct-24cb94{color:#CB4B16}\n.dark .ct-c0cf7b{color:#DC322F}"}]}],toc:{title:r,searchDepth:o,depth:o,links:[]}},_type:T,_id:"content:blog:2023-01-17-momentjs-avec-nuxt3.md",_source:U,_file:"blog\u002F2023-01-17-momentjs-avec-nuxt3.md",_extension:V},{_path:"\u002Fblog\u002F2023-01-01-mots-de-bienvenue",_dir:B,_draft:m,_partial:m,_locale:C,_empty:m,title:"Bienvenue sur mon site web !",description:W,createdAt:"2023-01-01T00:00:00.000Z",readingTime:{text:"1 min read",minutes:.43,time:25800,words:86},body:{type:D,children:[{type:a,tag:f,props:{},children:[{type:b,value:W}]},{type:a,tag:f,props:{},children:[{type:b,value:"Après trop de procrastination, j'ai enfin décidé qu'il était temps de refaire mon site personnel de zéro."}]},{type:a,tag:f,props:{},children:[{type:b,value:"En tant qu'à y être, de tester le nouveau "},{type:a,tag:n,props:{},children:[{type:b,value:"nuxt@^3.0.0"}]},{type:b,value:" qui vient tout juste d'être lancé en version stable ainsi que "},{type:a,tag:n,props:{},children:[{type:b,value:"nuxt\u002Fcontent@^2.0.0"}]},{type:b,value:" pour générer un blog de manière statique afin de hoster mon site gratuitement sur Github Pages."}]},{type:a,tag:f,props:{},children:[{type:b,value:"Sur ce blog, vous découvrirez mes expérimentations ainsi que des trucs et astuce sur l'écosystème Vue.js et Nuxt.js"}]},{type:a,tag:f,props:{},children:[{type:b,value:"J'espère vous être utile ! N'hésitez pas à poser des questions dans les commentaires."}]}],toc:{title:r,searchDepth:o,depth:o,links:[]}},_type:T,_id:"content:blog:2023-01-01-mots-de-bienvenue.md",_source:U,_file:"blog\u002F2023-01-01-mots-de-bienvenue.md",_extension:V}]},prerenderedAt:1675050577736}}("element","text","span","ct-a4582a","line","p","ct-12fb62","ct-1e9b0d"," ","a","nofollow",".",false,"code-inline",2,"locale","code","","moment",";","    ",":",",","import","ct-350fd7","ct-7bdba4"," {","blog","en","root","@nuxtjs\u002Fmoment","moment.js",null,"pre","from","NuxtApp","=\u003E","=","nuxtApp","$i18n","(",");","string","    };","issue","markdown","content","md","Nouvelle année, nouvelle résolution !"))