const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
                mono: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            height: {
                18: '4.5rem',
            },
            screens: {
                mobile: { max: '767px' },
                us: { max: '350px' },
            },
            colors: {
                delivery: '#4338CA',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
