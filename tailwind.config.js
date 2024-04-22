/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'body': ['Inter', 'san-serif'],
    }
  },
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        darkly: "#181818",
        darklyBlue: "#000000"
      }
    },
  },
  plugins: [],
}
