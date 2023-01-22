---
title: Utiliser moment.js avec Nuxt 3
createdAt: 2023-01-17
---

Vous avez peut-être remarquer que le module [@nuxtjs/moment](https://github.com/nuxt-community/moment-module) n'est pas capatible avec Nuxt 3.

Vous vous demandez sans doute pourquoi as-t-on besoin d'un module pour utiliser [moment.js](https://momentjs.com/) dans Nuxt ?

Dans Nuxt 2, lorsque vous utilisez `moment.js`, Webpack importe toutes les locales par défaut. Cela équivaut à plus d'une centaine de locales qui sont importées alors que vous n'avez probablement besoin que d'une ou deux d'entre elles.

Voilà ou entre en jeu `@nuxtjs/moment`; celui-ci se charge de supprimer les locales inutiles en utilisant `moment-locales-webpack-plugin` afin de réduire la taille du bundle de votre application.

Si vous avez suivi l'actualité, vous savez peut-être que Nuxt 3 utilise maintenant [Vite.js](https://vitejs.dev/) au lieu de Webpack afin de bundler votre application. Il n'est donc plus nécessaire de suppimer les locales inutilisées du bundle puisque Vite.js s'en charge déjà grâce à son meilleur support du tree-shaking.

Voici comment créer votre propre plugin pour utiliser moment.js directement dans une application multilingue utilisant [@nuxtjs/i18n](https://v8.i18n.nuxtjs.org/) et TypeScript dans Nuxt 3.

```ts
import moment from 'moment';
import 'moment/locale/fr-ca';
import type { NuxtApp } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
    const locale = nuxtApp.$i18n.locale.value;
    moment.locale(locale);

    nuxtApp.$i18n.onBeforeLanguageSwitch = (oldLocale: string, newLocale: string, isInitialSetup: boolean, nuxtApp: NuxtApp) => {
        moment.locale(newLocale);
    };

    return {
        provide: {
            moment,
        },
    };
});
```

À première vue, ce code d'importation (ligne 1 et 2) qui provient de la documentation officiel de moment.js devrait fonctionner.
Par contre, si vous avez utiliser ce code directement, vous aurez remarquer cette erreur lors de la compilation:
> Uncaught TypeError: Cannot read properties of undefined (reading 'defineLocale')

Il s'agit d'une erreur déroutante que je pris bien du temps à corriger, mais grâce à cette [issue](https://github.com/moment/moment/issues/5926#issuecomment-1056785251) Github, j'ai finalement réussi à réglé le problème et complété la migration vers Nuxt 3 de mon application.

Avec Vite.js, il faut simplement changer l'import des locales comme ceci:
```diff
- import 'moment/locale/fr-ca';

+ import 'moment/dist/locale/fr-ca';
```

Malheureusement, ne vous attendez pas à une correction de la part de moment.js puisque le projet est en mode maintenance et ne recevera de mise à jour que si une faille de sécurité majeure est découverte.

Vous pouvez migrer vers une alternatives plus modernes à moment.js, mais dans mon cas, je devais migré une code base utilisant largement moment.js en Nuxt 3.

J'ai bien tenté de migrer vers [Day.js](https://day.js.org/) a une API rétrocompatible et à l'avantage d'une approche modulaire et un code plus moderne lui permettant d'avoir un poid réduit (7kb vs 61kb) en prenant avantage des dernières fonctionnalités d'internationalisation d'EcmaScript, mais j'ai fait façe à une fonctionalité manquante en lien avec le parsing des heures (Ex. `10:00:00`) sans date d'associées.

Heureusement, je pourrai peut-être faire la migration éventuellement puisqu'une [pull request](https://github.com/iamkun/dayjs/pull/2197) afin d'apporter cette fonctionnalité à Day.js a été ouverte après que j'aie ouvert '[issue](https://github.com/iamkun/dayjs/issues/2179) sur Github afin de reportée ce manquemant par rapport à moment.js.
