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
    },
  },
  plugins: [],
}