/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        dancingScript : ["Dancing Script", "sans-sarif"]
      },
      colors : {
        "customPink":"#ff1248",
      }
    },
  },
  plugins: [],
}

