/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.html"],
  theme: {
    colors: {
      primary: "#5c6ac4",
      secondary: "#ecc94b",
      bgcolor: "#f0f0f3",
      title: "rgb(120, 137, 179)",
      text: "#85a4c4",
      social: "#7889b3"
    },
    extend: {
      backgroundImage: {
        heroimage: "url(../images/hero.jpg)",
      }
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
