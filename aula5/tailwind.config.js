/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",           // Todos os HTML na pasta raiz e subpastas
    "./*.html",              // HTML na pasta raiz
    "./src/**/*.{js,ts,jsx,tsx}", // Arquivos JS/TS na pasta src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}