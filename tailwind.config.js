module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cardo: ['Cardo'],
        robotoCondensed: ['"Roboto Condensed"'],
        play: ['Play'],
        yanone: ['"Yanone Kaffeesatz"'],
        playball: ['Playball']
      },
      transitionProperty: {
        height: 'height'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
