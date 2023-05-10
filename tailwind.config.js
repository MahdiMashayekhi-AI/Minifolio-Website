/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.html"],
  theme: {
    colors: {
      primary: '#5c6ac4',
      secondary: '#ecc94b',
      // ...
    },
    neumorphismColor: {
      gray: {
        100: "#AAA",
        200: "#F5CEC7",
        500: "#f0f0f3",
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("tailwindcss-neumorphism"),
  ],
}
