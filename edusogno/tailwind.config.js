/** @type {import('tailwindcss').Config} */
// import d from './public/bgimg.svg'
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "edusog-image": "url('../public/bgimg.svg')",
      },
    },
  },
  plugins: [],
};
