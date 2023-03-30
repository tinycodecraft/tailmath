/** @type {import('tailwindcss').Config} */


const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/app/**/*.{js,ts,jsx,tsx,css}"],  
  theme: {
    extend: {
      colors: {
        whatever: {
          dark: '#LC2026'
        }
      },
      fontFamily:{
        baseMachine: [ 'var(--font-machine)', ...fontFamily.sans],
        baseTech: ['var(--font-tech)',...fontFamily.serif],
      }


    },
  },
  plugins: [],
}
