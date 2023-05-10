/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.html"],
  theme: {
    neumorphismColor: {
      gray: {
        100: "#AAA",
        200: "#F5CEC7",
        500: "#f0f0f3",
      },
    },
  },
  plugins: [require("tailwindcss-neumorphism")],
}
