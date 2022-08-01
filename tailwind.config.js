module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cardo: ['Cardo', 'serif'],
        robotoCondensed: ['"Roboto Condensed"', 'sans-serif'],
        playball: ['Playball', 'cursive'],
        play: ['Play', 'sans-serif'],
        yanone: ['"Yanone Kaffeesatz"', 'sans-serif']
      },
      transitionProperty: {
        height: 'height'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
