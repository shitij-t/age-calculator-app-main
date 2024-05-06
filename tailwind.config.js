/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      md: "600px",
    },
    extend: {},
    colors: {
      purple: "hsl(259, 100%, 65%)",
      lightRed: "hsl(0, 100%, 67%)",
      White: "hsl(0, 0%, 100%)",
      Offwhite: "hsl(0, 0%, 94%)",
      Lightgrey: "hsl(0, 0%, 86%)",
      Smokeygrey: "hsl(0, 1%, 44%)",
      Offblack: "hsl(0, 0%, 8%)",
    },
    fontFamily: {
      poppins: "poppins",
    },
  },
  plugins: [],
};
