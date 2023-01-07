import ViteSvgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
    srcDir: 'src/',

    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/content'],

    content: {
        markdown: {
            remarkPlugins: ['remark-reading-time'],
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
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    vite: {
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
