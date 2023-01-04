const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    darkMode: 'class',
    theme: {
        extend: {
            colors: { primary: colors.sky },
            fontFamily: {
                sans: [...defaultTheme.fontFamily.sans],
                // sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
            },
        },
    },
};
