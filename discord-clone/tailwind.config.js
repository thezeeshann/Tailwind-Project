/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Poppins', 'sans-serif'],
      },
      colors:{
        bgColor:"#404EED"
      }
    },
  },
  plugins: [],
}

