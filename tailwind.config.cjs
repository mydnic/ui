module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif']
            },
            colors: {
                primary: {
                    '50': '#f2f9fd',
                    '100': '#e3f1fb',
                    '200': '#c1e4f6',
                    '300': '#8aceef',
                    '400': '#4bb6e5',
                    '500': '#25a1d8',
                    '600': '#167fb3',
                    '700': '#136491',
                    '800': '#145578',
                    '900': '#164764',
                    '950': '#0f2e42',
                },
                secondary: {
                    '50': '#ecfdf4',
                    '100': '#d2f9e2',
                    '200': '#a9f1ca',
                    '300': '#71e4ac',
                    '400': '#4bd496',
                    '500': '#14b572',
                    '600': '#08935c',
                    '700': '#07754c',
                    '800': '#085d3e',
                    '900': '#084c34',
                    '950': '#032b1d',
                },
            }
        }
    },

    content: [
        './App.vue',
        './src/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}'
    ],

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio')
    ]
}
