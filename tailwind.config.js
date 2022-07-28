
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
    "pages/**/*.{js,ts,jsx,tsx}",
    "pages/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'xlinner': 'inset 0 20px 25px -5px rgb(0 0 0 / 0.05);',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '32': 'repeat(32, minmax(0, 1fr))',

      }
    },
  },
  plugins: [],
}