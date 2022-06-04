module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        robotoCondensed: ['Roboto Condensed'],
        play: ['Play'],
        cardo: ['Cardo']
      },
      transitionProperty: {
        height: 'height'
      }
    }
  },
  plugins: []
}
