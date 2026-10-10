import tailwindcss from '@tailwindcss/vite';
import readingTime from 'reading-time';
import ViteSvgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
    compatibilityDate: '2026-10-09',

    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
    },

    modules: ['@nuxtjs/color-mode', '@nuxt/content', '@vueuse/nuxt', '@nuxt/image'],

    content: {
        build: {
            markdown: {
                highlight: {
                    theme: {
                        default: 'solarized-light',
                        dark: 'solarized-dark',
                    },
                },
            },
        },
        experimental: { sqliteConnector: 'native' },
    },

    hooks: {
        'content:file:afterParse'({ file, content, collection }) {
            if (collection.name === 'blog') content.readingTime = readingTime(file.body);
        },
    },

    colorMode: {
        preference: 'system',
        fallback: 'dark',
        classSuffix: '',
    },

    css: ['~/assets/css/app.css'],

    vite: {
        plugins: [
            tailwindcss(),
            ViteSvgLoader({
                svgoConfig: {
                    plugins: [
                        { name: 'prefixIds' },
                        { name: 'removeTitle' },
                        { name: 'removeDesc' },
                        { name: 'removeDimensions' },
                        {
                            name: 'removeAttrs',
                            params: {
                                attrs: '(fill|stroke)',
                            },
                        },
                    ],
                },
            }),
        ],
    },
});
