/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aquirelight: ['aquirelight', 'sans-serif'],
        aquirebold: ['aquirebold', 'sans-serif'],
      },
      colors:{
        neongreen:"#0fff50"
      },
      backgroundImage: {
        'hero': "url('./assets/images/background.jpg')",
      },
    },
  },
  plugins: [],
}