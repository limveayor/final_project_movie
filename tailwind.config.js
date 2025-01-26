/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],// Ensure paths match your project structure
  theme: {
    extend: {
      colors: {
        primary: "#051622",
        secondary: "#1BA098",
        accent: "#DEB992",
      },
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
       }
    },
  },
  plugins: [],
};
