// Used by vite-svg-loader (see nuxt.config.ts) for the `?component` SVG imports
/** @type {import('svgo').Config} */
export default {
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
};
