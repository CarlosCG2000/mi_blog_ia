/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,njk,md}"], // Le dice a Tailwind que busque clases en todos tus ficheros
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'), // Activa el plugin para los estilos de artículos
    ],
}