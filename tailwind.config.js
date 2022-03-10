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
      fontFamily: {
        montserrat:['Montserrat', 'sans-serif'],
        poppins:['Poppins', 'sans-serif'],
        quicksand:['Quicksand', 'sans-serif'],
        roboto:['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}