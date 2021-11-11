const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      royalBlue: {
        light: '#2b54d8',
        DEFAULT: '#4169E1',
        dark: '#122458',
      },
      purple: {
        light: '#8e1ae0',
        DEFAULT: '#6A0DAD',
        dark: '#2a0545',
      },
      
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
