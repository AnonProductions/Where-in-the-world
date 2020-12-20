const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
      gridTemplateColumns: {
        "fill-40": "repeat(auto-fill, minmax(20rem, 1fr))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
