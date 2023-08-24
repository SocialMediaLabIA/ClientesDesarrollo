/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/**/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
