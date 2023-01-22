---
title: Utiliser moment.js avec Nuxt 3
createdAt: 2023-01-17
---

Vous avez peux-être remarquer que le module de la communauté [@nuxtjs/moment](https://github.com/nuxt-community/moment-module) n'est pas capatible avec Nuxt 3.

Vous vous demandez sans doute pourquoi as-t-on besoin d'un module pour utiliser moment.js dans Nuxt ?

Dans Nuxt 2, lorsque vous utiliser `moment.js`, Webpack importe toutes les locales par défaut. Cela équivaut à plus d'une centaine de locales importé alors que vous n'avez probablement besoin que d'une ou deux d'entre elles.

Voilà ou entre en jeu `@nuxtjs/moment`, celui-ci se charge de supprimer les locales inutiles du bundle Webpack en utilisant `moment-locales-webpack-plugin` afin de réduire la taille du bundle de votre application.

Si vous avez suivi l'actualité, vous savez peux-être que Nuxt 3 utilise maintenant [Vite.js](https://vitejs.dev/) pour bundler votre application alors il n'est plus nécessaire d'utiliser `moment-locales-webpack-plugin` pour suppimer les locales inutilisées du bundle.

Voici comment créer votre propre plugin pour utiliser moment.js directement dans une application multilingue utilisant [@nuxtjs/i18n](https://v8.i18n.nuxtjs.org/) et TypeScript dans Nuxt 3.

```ts
import moment from 'moment';
import 'moment/locale/fr-ca';
import type { LocaleObject } from '#i18n';
import type { NuxtApp } from '#app';
import type { ComputedRef } from 'vue';

export default defineNuxtPlugin((nuxtApp) => {
    const locale = nuxtApp.$i18n.locale.value;
    moment.locale(locale);

    nuxtApp.$i18n.onBeforeLanguageSwitch = (oldLocale: string, newLocale: string, isInitialSetup: boolean, nuxtApp: NuxtApp ) => {
        moment.locale(newLocale);
    };

    return {
        provide: {
            moment,
        },
    };
});
```

À première vu, ce code d'importation qui provient directement de la documentation officiel de moment.js devrait marcher.
Par contre, si vous avez utiliser ce code directement, vous aurez remarquer cette erreur lors de la compilation:
> Uncaught TypeError: Cannot read properties of undefined (reading 'defineLocale')

Il s'agit d'une erreur déroutante que je pris bien du temps a compre et corriger, mais grâce à cette issue Github, j'y suis finalement arrivé !

Avec Vite.js, il faut simplement changer l'import des locales comme ceci:
```diff
- import 'moment/locale/fr-ca';

+ import 'moment/dist/locale/fr-ca';
```

Malheureusement, ne vous attendez pas à une correction de la part de moment.js puisque le projet est en mode maintenant et ne recevera de mise à jour que si une faille de sécurité majeure est découverte.

Vous pouvez vous penchez sur des alternatives plus modernes a moment.js qui sont plus modernes et supportent le tree-sharking correctement. Dans mon cas, je devais migré une code base utilisant largement moment.js en Nuxt 3.

J'ai bien tenté de migré vers [Day.js](https://day.js.org/) qui partage une API rétrocompatible et à l'avatange d'une approche modulaire et un code plus moderne lui permet d'avoir un poid bien moindre (7kb vs 61kb) en prenant avantages des dernières fonctions Intl de EcmaScript, mais j'ai fait façe a des fonctionalités manquantes en lien avec le parsing des heures au format `10:00:00` sans date associés.

Heureusement, je pourrai peux-être faire la migration puisqu'une [pull request](https://github.com/iamkun/dayjs/pull/2197) a été ouverte après que j'ai ouvert une [issue](https://github.com/iamkun/dayjs/issues/2179) sur Github afin d'apporter cette fonctionnalité à Day.js.
