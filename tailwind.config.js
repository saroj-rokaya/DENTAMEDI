/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // text color
        blue: {
          10:['#5eb2f2'],
          20:['#3d95d8'],
          30: ["#013a65"],
          40:['#002744'],
        }
      },
      fontFamily: {
        gabarito: ['Gabarito', 'sans-serif']
      }
    },
  },
  plugins: [],
}