import tailwindcss from '@tailwindcss/vite';
import readingTime from 'reading-time';
import ViteSvgLoader from 'vite-svg-loader';
import svgoConfig from './svgo.config.js';

export default defineNuxtConfig({
    compatibilityDate: '2026-10-09',

    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
    },

    modules: ['@nuxtjs/color-mode', '@nuxt/content', '@vueuse/nuxt', '@nuxt/image', '@nuxt/fonts'],

    fonts: {
        families: [
            // Its fallbacks are declared in app.css: the generated ones are based on lowercase widths and too wide
            { name: 'MarvinVisions', provider: 'local', weights: [700], global: true, fallbacks: [] },
            { name: 'Outfit', provider: 'google', weights: [400, 500, 600, 700, 800, 900], global: true },
        ],
    },

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
        preference: 'dark',
        fallback: 'dark',
        classSuffix: '',
    },

    css: ['~/assets/css/app.css'],

    vite: {
        plugins: [tailwindcss(), ViteSvgLoader({ svgoConfig })],
    },
});
