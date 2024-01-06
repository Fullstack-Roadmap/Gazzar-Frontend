/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "360px", max: "799px" },
      // => @media (min-width: 360px) { ... }

      ipad: "700px",
      // => @media (min-width: 800px) { ... }

      md: "800px",
      // => @media (min-width: 800px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },

    fontFamily: {
      Poppins: "Poppins",
    },
    extend: {},
  },
  plugins: [],
};
