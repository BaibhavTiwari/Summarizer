/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "Sans-Serif"],
        inter: ["Inter", "Sans-Serif"],
      }
    },
  },
  plugins: [],
}