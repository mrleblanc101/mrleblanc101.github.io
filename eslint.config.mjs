// @ts-check
import prettier from 'eslint-plugin-prettier/recommended';
import withNuxt from './.nuxt/eslint.config.mjs';

// Runs Prettier (see .prettierrc) as an ESLint rule, so `eslint --fix` also formats and sorts Tailwind classes
export default withNuxt(prettier, {
    rules: {
        // Single-word component names (Post, Project) are Nuxt components, they can't clash with HTML elements
        'vue/multi-word-component-names': 'off',
    },
});
