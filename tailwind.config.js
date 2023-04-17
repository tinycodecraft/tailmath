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
        carthome: {
          beige: '#FEF5EC',
          black: '#111'
        }
      },
      fontFamily:{
        baseMachine: [ 'var(--font-machine)', ...fontFamily.sans],
        baseTech: ['var(--font-tech)',...fontFamily.serif],
      },
      
      minHeight: {
        screenHeightWithoutHeader: 'calc(100vh - 101px)'
      },
      height: {
        screenHeightWithoutHeader: 'calc(100vh - 101px)'
      }

    },
  },
  plugins: [],
}
