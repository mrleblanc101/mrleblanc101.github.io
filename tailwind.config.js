import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';
import typography from '@tailwindcss/typography';

export default {
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
    plugins: [typography],
};
