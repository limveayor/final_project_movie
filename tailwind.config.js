/** @type {import('tailwindcss').Config} */
export default{
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#051622',
        'secondary': '#1BA098',
        'accent': '#DEB992',
       })
    },
  },
  plugins: [

  ],
}

