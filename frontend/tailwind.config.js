const colors = require('tailwindcss/colors');

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'primary': '#364FC7',
            },
        },
    },
    plugins: [
        require("daisyui"),
        require('tailwind-scrollbar-hide')
    ],
    daisyui: {
        themes: ["light", "dark", "pink"],
    },
}
