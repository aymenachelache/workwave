/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  plugins: [
    require('flowbite/plugin')({
      charts: true,
  }),
  ],

  theme: {
    extend: {
      colors:{
        "PrimColor" : "#37B778",
        "SecColor" : "#00AEEF",
        "gradientDark" : "rgba(0, 0, 0, 0.512)"
      },
      fontFamily:{
        "Unbounded" : "Unbounded"
      }
    },
  },
  plugins: [],
}

