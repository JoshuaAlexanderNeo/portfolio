module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        robotoCondensed: ['Roboto Condensed'],
        play: ['Play']
      },
      transitionProperty: {
        height: 'height'
      }
    }
  },
  plugins: []
}
