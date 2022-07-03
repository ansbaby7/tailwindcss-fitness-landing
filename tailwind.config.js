const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
      'xs': '475px'
    },
    extend: {},
  },
  plugins: [],
}