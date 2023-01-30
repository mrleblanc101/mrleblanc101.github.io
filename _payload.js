export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac){return {data:{projets:[{_path:"\u002Fprojets\u002Flibeo\u002Fsentinelle-nord",_dir:s,_draft:j,_partial:j,_locale:n,title:"Rapports d’activités 2021-2022",url:j,order:21,description:"Sentinelle Nord cherche à mettre en valeurs le résultat de ses recherches. Grace à ce nouveau micro-site, les données n'auront jamais été si bien mise en valeur !",tags:["SSG",D,E,F,"GSAP",t],_id:"content:projets:libeo:sentinelle-nord.yml",_type:u,_source:o,_file:"projets\u002Flibeo\u002Fsentinelle-nord.yml",_extension:v},{_path:"\u002Fprojets\u002Flibeo\u002Faseq",_dir:s,_draft:j,_partial:j,_locale:n,title:"Section contact ASEQ",url:"https:\u002F\u002Fcontact.aseq.ca\u002F",order:20,description:"L'ASEQ cherche à simplifier la vie de ses membres en leur offrant un formulaire multi-étapes afin que ceux-ci puissent s'informer et profiter de ses avantages de sa couverture santé et dentaire.",tags:["Laravel",t],_id:"content:projets:libeo:aseq.yml",_type:u,_source:o,_file:"projets\u002Flibeo\u002Faseq.yml",_extension:v},{_path:"\u002Fprojets\u002Flibeo\u002Feeq",_dir:s,_draft:j,_partial:j,_locale:n,title:"École des entrepreneurs du Québec",url:"https:\u002F\u002Fapp.eequebec.com\u002F",order:19,description:"L'École des entrepreneurs du Québec (ÉEQ) ouvre son Campus Virtuel afin d'aider les jeunes entrepreneurs à développer leurs compétences entrepreneuriales grâces à ses nombreuses formations en ligne.",tags:[D,E,F,K,t],_id:"content:projets:libeo:eeq.yml",_type:u,_source:o,_file:"projets\u002Flibeo\u002Feeq.yml",_extension:v},{_path:"\u002Fprojets\u002Flibeo\u002Fmcel",_dir:s,_draft:j,_partial:j,_locale:n,title:"Mon commerce en ligne",url:"https:\u002F\u002Fapp.moncommerceenligne.org\u002F",order:18,description:"L'Association Québecoise des Technologies (AQT) s'allie avec l'École des entrepreneurs du Québec (ÉEQ) afin d'offrir une plateforme de formation à ligne à tous les commerçants du Québec cherchant à améliorer leurs compétences numériques.",tags:[D,E,F,K,t],_id:"content:projets:libeo:mcel.yml",_type:u,_source:o,_file:"projets\u002Flibeo\u002Fmcel.yml",_extension:v}],posts:[{_path:"\u002Fblog\u002F2023-01-17-momentjs-avec-nuxt3",_dir:L,_draft:j,_partial:j,_locale:n,_empty:j,title:"Utiliser moment.js avec Nuxt 3",description:"Vous avez peut-être remarquer que le module @nuxtjs\u002Fmoment n'est pas capatible avec Nuxt 3.",createdAt:"2023-01-17T00:00:00.000Z",readingTime:{text:"3 min read",minutes:2.25,time:135000,words:450},body:{type:M,children:[{type:a,tag:f,props:{},children:[{type:b,value:"Vous avez peut-être remarquer que le module "},{type:a,tag:k,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fmoment-module",rel:[l]},children:[{type:b,value:N}]},{type:b,value:" n'est pas capatible avec Nuxt 3."}]},{type:a,tag:f,props:{},children:[{type:b,value:"Vous vous demandez sans doute pourquoi as-t-on besoin d'un module pour utiliser "},{type:a,tag:k,props:{href:"https:\u002F\u002Fmomentjs.com\u002F",rel:[l]},children:[{type:b,value:O}]},{type:b,value:" dans Nuxt ?"}]},{type:a,tag:f,props:{},children:[{type:b,value:"Dans Nuxt 2, lorsque vous utilisez "},{type:a,tag:p,props:{},children:[{type:b,value:O}]},{type:b,value:", Webpack importe toutes les locales par défaut. Cela équivaut à plus d'une centaine de locales qui sont importées alors que vous n'avez probablement besoin que d'une ou deux d'entre elles."}]},{type:a,tag:f,props:{},children:[{type:b,value:"Voilà ou entre en jeu "},{type:a,tag:p,props:{},children:[{type:b,value:N}]},{type:b,value:"; celui-ci se charge de supprimer les locales inutiles en utilisant "},{type:a,tag:p,props:{},children:[{type:b,value:"moment-locales-webpack-plugin"}]},{type:b,value:" afin de réduire la taille du bundle de votre application."}]},{type:a,tag:f,props:{},children:[{type:b,value:"Si vous avez suivi l'actualité, vous savez peut-être que Nuxt 3 utilise maintenant "},{type:a,tag:k,props:{href:"https:\u002F\u002Fvitejs.dev\u002F",rel:[l]},children:[{type:b,value:"Vite.js"}]},{type:b,value:" au lieu de Webpack afin de bundler votre application. Il n'est donc plus nécessaire de suppimer les locales inutilisées du bundle puisque Vite.js s'en charge déjà grâce à son meilleur support du tree-shaking."}]},{type:a,tag:f,props:{},children:[{type:b,value:"Voici comment créer votre propre plugin pour utiliser moment.js directement dans une application multilingue utilisant "},{type:a,tag:k,props:{href:"https:\u002F\u002Fv8.i18n.nuxtjs.org\u002F",rel:[l]},children:[{type:b,value:"@nuxtjs\u002Fi18n"}]},{type:b,value:" et TypeScript dans Nuxt 3."}]},{type:a,tag:w,props:{code:"import moment from 'moment';\nimport 'moment\u002Flocale\u002Ffr-ca';\nimport type { NuxtApp } from '#app';\n\nexport default defineNuxtPlugin((nuxtApp) =\u003E {\n    const locale = nuxtApp.$i18n.locale.value;\n    moment.locale(locale);\n\n    nuxtApp.$i18n.onBeforeLanguageSwitch = (\n        oldLocale: string,\n        newLocale: string,\n        isInitialSetup: boolean,\n        nuxtApp: NuxtApp\n    ) =\u003E {\n        moment.locale(newLocale);\n    };\n\n    return {\n        provide: {\n            moment,\n        },\n    };\n});\n",filename:"plugins\u002Fmoment.ts",highlights:[q],language:"js",meta:P},children:[{type:a,tag:Q,props:{},children:[{type:a,tag:w,props:{__ignoreMap:x},children:[{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:G}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:y}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:R}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:H},children:[{type:b,value:"'moment'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:z}]}]},{type:a,tag:c,props:{class:"line highlight"},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:G}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:H},children:[{type:b,value:"'moment\u002Flocale\u002Ffr-ca'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:z}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:G}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"type"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" { "}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:S}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" } "}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:R}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:H},children:[{type:b,value:"'#app'"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:z}]}]},{type:a,tag:c,props:{class:e},children:[]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:"export"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"default"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"defineNuxtPlugin"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:"((nuxtApp) "}]},{type:a,tag:c,props:{class:I},children:[{type:b,value:T}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:J}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:A}]},{type:a,tag:c,props:{class:I},children:[{type:b,value:"const"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:r}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:U}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:V}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:W}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:r}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"value"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:z}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:A}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:y}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:r}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:X}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:r}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:Y}]}]},{type:a,tag:c,props:{class:e},children:[]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:A}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:V}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:W}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"onBeforeLanguageSwitch"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:U}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:" ("}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        oldLocale"}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:B}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:Z}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:C}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        newLocale"}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:B}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:Z}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:C}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        isInitialSetup"}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:B}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"boolean"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:C}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        nuxtApp"}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:B}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:i}]},{type:a,tag:c,props:{class:"ct-785042"},children:[{type:b,value:S}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"    ) "}]},{type:a,tag:c,props:{class:I},children:[{type:b,value:T}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:J}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        "}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:y}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:m}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:r}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:X}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:"newLocale"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:Y}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:_}]}]},{type:a,tag:c,props:{class:e},children:[]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:A}]},{type:a,tag:c,props:{class:g},children:[{type:b,value:"return"}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:J}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        provide: {"}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"            "}]},{type:a,tag:c,props:{class:h},children:[{type:b,value:y}]},{type:a,tag:c,props:{class:d},children:[{type:b,value:C}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"        },"}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:_}]}]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:d},children:[{type:b,value:"});"}]}]}]}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"À première vue, ce code d'importation (ligne 1 et 2) qui provient de la documentation officiel de moment.js devrait fonctionner.\nPar contre, si vous avez utiliser ce code directement, vous aurez remarquer cette erreur lors de la compilation:"}]},{type:a,tag:"blockquote",props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"Uncaught TypeError: Cannot read properties of undefined (reading 'defineLocale')"}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"Il s'agit d'une erreur déroutante que je pris bien du temps à corriger, mais grâce à cette "},{type:a,tag:k,props:{href:"https:\u002F\u002Fgithub.com\u002Fmoment\u002Fmoment\u002Fissues\u002F5926#issuecomment-1056785251",rel:[l]},children:[{type:b,value:$}]},{type:b,value:" Github, j'ai finalement réussi à réglé le problème et complété la migration vers Nuxt 3 de mon application."}]},{type:a,tag:f,props:{},children:[{type:b,value:"Avec Vite.js, il faut simplement changer l'import des locales comme ceci:"}]},{type:a,tag:w,props:{code:"- import 'moment\u002Flocale\u002Ffr-ca';\n\n+ import 'moment\u002Fdist\u002Flocale\u002Ffr-ca';\n",language:"diff",meta:P},children:[{type:a,tag:Q,props:{},children:[{type:a,tag:w,props:{__ignoreMap:x},children:[{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:"ct-bc9a5d"},children:[{type:b,value:"- import 'moment\u002Flocale\u002Ffr-ca';"}]}]},{type:a,tag:c,props:{class:e},children:[]},{type:a,tag:c,props:{class:e},children:[{type:a,tag:c,props:{class:g},children:[{type:b,value:"+ import 'moment\u002Fdist\u002Flocale\u002Ffr-ca';"}]}]}]}]}]},{type:a,tag:f,props:{},children:[{type:b,value:"Malheureusement, ne vous attendez pas à une correction de la part de moment.js puisque le projet est en mode maintenance et ne recevera de mise à jour que si une faille de sécurité majeure est découverte."}]},{type:a,tag:f,props:{},children:[{type:b,value:"Vous pouvez migrer vers une alternatives plus modernes à moment.js, mais dans mon cas, je devais migré une code base utilisant largement moment.js en Nuxt 3."}]},{type:a,tag:f,props:{},children:[{type:b,value:"J'ai bien tenté de migrer vers "},{type:a,tag:k,props:{href:"https:\u002F\u002Fday.js.org\u002F",rel:[l]},children:[{type:b,value:"Day.js"}]},{type:b,value:" a une API rétrocompatible et à l'avantage d'une approche modulaire et un code plus moderne lui permettant d'avoir un poid réduit (7kb vs 61kb) en prenant avantage des dernières fonctionnalités d'internationalisation d'EcmaScript, mais j'ai fait façe à une fonctionalité manquante en lien avec le parsing des heures (Ex. "},{type:a,tag:p,props:{},children:[{type:b,value:"10:00:00"}]},{type:b,value:") sans date d'associées."}]},{type:a,tag:f,props:{},children:[{type:b,value:"Heureusement, je pourrai peut-être faire la migration éventuellement puisqu'une "},{type:a,tag:k,props:{href:"https:\u002F\u002Fgithub.com\u002Fiamkun\u002Fdayjs\u002Fpull\u002F2197",rel:[l]},children:[{type:b,value:"pull request"}]},{type:b,value:" afin d'apporter cette fonctionnalité à Day.js a été ouverte après que j'aie ouvert l'"},{type:a,tag:k,props:{href:"https:\u002F\u002Fgithub.com\u002Fiamkun\u002Fdayjs\u002Fissues\u002F2179",rel:[l]},children:[{type:b,value:$}]},{type:b,value:" sur Github afin de reportée ce manquemant par rapport à moment.js."}]},{type:a,tag:"style",children:[{type:b,value:".ct-bc9a5d{color:#DC322F}\n.ct-785042{color:#CB4B16}\n.ct-62bc02{color:#586E75}\n.ct-7d432c{color:#2AA198}\n.ct-7df2cd{color:#268BD2}\n.ct-70c597{color:#657B83}\n.ct-ef1bbb{color:#859900}\n.dark .ct-ef1bbb{color:#859900}\n.dark .ct-70c597{color:#839496}\n.dark .ct-7df2cd{color:#268BD2}\n.dark .ct-7d432c{color:#2AA198}\n.dark .ct-62bc02{color:#93A1A1}\n.dark .ct-785042{color:#CB4B16}\n.dark .ct-bc9a5d{color:#DC322F}"}]}],toc:{title:x,searchDepth:q,depth:q,links:[]}},_type:aa,_id:"content:blog:2023-01-17-momentjs-avec-nuxt3.md",_source:o,_file:"blog\u002F2023-01-17-momentjs-avec-nuxt3.md",_extension:ab},{_path:"\u002Fblog\u002F2023-01-01-mots-de-bienvenue",_dir:L,_draft:j,_partial:j,_locale:n,_empty:j,title:"Bienvenue sur mon site web !",description:ac,createdAt:"2023-01-01T00:00:00.000Z",readingTime:{text:"1 min read",minutes:.43,time:25800,words:86},body:{type:M,children:[{type:a,tag:f,props:{},children:[{type:b,value:ac}]},{type:a,tag:f,props:{},children:[{type:b,value:"Après trop de procrastination, j'ai enfin décidé qu'il était temps de refaire mon site personnel de zéro."}]},{type:a,tag:f,props:{},children:[{type:b,value:"En tant qu'à y être, de tester le nouveau "},{type:a,tag:p,props:{},children:[{type:b,value:"nuxt@^3.0.0"}]},{type:b,value:" qui vient tout juste d'être lancé en version stable ainsi que "},{type:a,tag:p,props:{},children:[{type:b,value:"nuxt\u002Fcontent@^2.0.0"}]},{type:b,value:" pour générer un blog de manière statique afin de hoster mon site gratuitement sur Github Pages."}]},{type:a,tag:f,props:{},children:[{type:b,value:"Sur ce blog, vous découvrirez mes expérimentations ainsi que des trucs et astuce sur l'écosystème Vue.js et Nuxt.js"}]},{type:a,tag:f,props:{},children:[{type:b,value:"J'espère vous être utile ! N'hésitez pas à poser des questions dans les commentaires."}]}],toc:{title:x,searchDepth:q,depth:q,links:[]}},_type:aa,_id:"content:blog:2023-01-01-mots-de-bienvenue.md",_source:o,_file:"blog\u002F2023-01-01-mots-de-bienvenue.md",_extension:ab}]},prerenderedAt:1675051583743}}("element","text","span","ct-70c597","line","p","ct-ef1bbb","ct-7df2cd"," ",false,"a","nofollow",".","en","content","code-inline",2,"locale","libeo","i18n","yaml","yml","code","","moment",";","    ",":",",","Vue.js 2","Nuxt.js 2","Foundation","import","ct-7d432c","ct-62bc02"," {","Auth","blog","root","@nuxtjs\u002Fmoment","moment.js",null,"pre","from","NuxtApp","=\u003E","=","nuxtApp","$i18n","(",");","string","    };","issue","markdown","md","Nouvelle année, nouvelle résolution !"))