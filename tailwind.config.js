module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '28rem',
        '90': '22rem',
      },
      lineHeight: {
        '12': '4.5rem',
      },
      fontFamily: {
        'yaro': ['Yaro Cut', 'curier new'],
        'kanyon': ['kanyon', 'san serif'],
        montserrat:['Montserrat', 'sans-serif'],
        poppins:['Poppins', 'sans-serif'],
        roboto:['Roboto', 'sans-serif'],
        sans:['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}