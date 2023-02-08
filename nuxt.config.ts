import ViteSvgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
    srcDir: 'src/',

    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
    },

    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/content', '@vueuse/nuxt', '@nuxt/image-edge'],

    content: {
        markdown: {
            remarkPlugins: ['remark-reading-time'],
        },
        highlight: {
            theme: {
                default: 'solarized-light',
                dark: 'solarized-dark',
            },
        },
    },

    colorMode: {
        preference: 'system',
        fallback: 'dark',
        classSuffix: '',
    },

    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': {},
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    vite: {
        define: {
            __VUE_PROD_DEVTOOLS__: true,
        },
        plugins: [
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
