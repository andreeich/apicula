const { addDynamicIconSelectors } = require('@iconify/tailwind');
const tailwindcssAnimate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.875rem",
        md: "1.5rem",
        "2xl": "4rem",
      },
      screens: {
        md: "64rem",
        "2xl": "90rem",
      },
    },
    extend: {
      fontFamily: {
        serif: ["Red Hat Display", "sans-serif"],
        sans: ["ClashDisplay-Variable", "sans"],
      },
      colors: {
        yellow: "#FFD601",
        dark: "#030303",
        error: "#FF1919",
        success: "#06D50E",
      },
      backgroundImage: {},
      screens: {
        // sm: "25rem",
        md: "52rem",
        "2xl": "90rem",
      },
      dropShadow: {},
      boxShadow: {},
      spacing: {
        20: "5rem",
        30: "7.5rem",
      },
      fontSize: {
        h1: "7.5rem",
        h2: "3.5rem",
        h3: "2rem",
        h4: "1.75rem",
        h5: "1.5rem",

        p1: "1.125rem",
        p2: "1rem",
        p3: "0.875rem",
      },
      lineHeight: {
        h1: "8.25rem",
        h2: "4.2rem",
        h3: "2.2rem",
        h4: "2.1rem",
        h5: "1.8rem",

        p1: "1.6875rem",
        p2: "1.5rem",
        p3: "1.3125rem",
      },
      borderRadius: {
        10: "10px",
      },
    },
  },
  plugins: [
    // ? Plugin with dynamic selectors for '.icon-'
    addDynamicIconSelectors({
      iconSets: {
        custom: "./icon-sets/custom.json",
      },
    }),
    tailwindcssAnimate,
  ],
};
