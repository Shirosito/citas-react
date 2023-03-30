/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.tsx"], // Esos | ** | significa todos los archivos que estén dentro de | src |. Y con | *.tsx | hacemos que busque en las múltiples carpetas que tenemos los archivos que tengan esa extensión
  theme: {
    extend: {},
  },
  plugins: [],
}
