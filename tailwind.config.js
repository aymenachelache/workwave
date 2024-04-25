/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "PrimColor" : "#37B778",
        "SecColor" : "#00AEEF"
      },
      fontFamily:{
        "Unbounded" : "Unbounded"
      }
    },
  },
  plugins: [],
}

