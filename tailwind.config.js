/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.html"],
  theme: {
    // colors: {
    //   primary: '#5c6ac4',
    //   secondary: '#ecc94b',
    //   // ...
    // },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
  ],
}
