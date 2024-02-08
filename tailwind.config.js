/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans_custom: ['"DM Sans"'],
      },
      colors: {
        "background" : "#febc43",
        "index" : "#eab308 ",
        "borders" : "#fafafa",
      },
      cursor: {
        fancy: "url(hand.cur), pointer",
      },
      gridTemplateColumns: {
        "2-cols-layout-index": "12rem, minmax(0, 1fr)",
      },
      gridTemplateRows: {
        "2-rows-layout-index": "5rem, minmax(0, 1fr)",
        "2-rows-products": "auto, minmax(0, 1fr)",
      },
    },
  },
  darkMode: "class", // Add this line to enable dark mode
  plugins: [],
}

