// @ts-check
import prettier from 'eslint-plugin-prettier/recommended';
import withNuxt from './.nuxt/eslint.config.mjs';

// Runs Prettier (see .prettierrc) as an ESLint rule, so `eslint --fix` also formats and sorts Tailwind classes
export default withNuxt(prettier);
