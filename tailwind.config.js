const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    darkMode: 'class',
    theme: {
        extend: {
            colors: { primary: colors.zinc },
            fontFamily: {
                marvin: ['MarvinVisions', ...defaultTheme.fontFamily.sans],
                sans: [...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
