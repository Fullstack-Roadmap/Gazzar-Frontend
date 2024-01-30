/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "360px", max: "799px" },
      // => @media (min-width: 360px) { ... }

      md: "700px",
      // => @media (min-width: 800px) { ... }

      lg: "1200px",
      // => @media (min-width: 1440px) { ... }
    },

    fontFamily: {
      Poppins: "Poppins",
    },
    extend: {
      boxShadow: {
        custom: "rgba(100, 100, 111, 0.1) 0px 7px 29px 0px",
      },
      colors: {
        blue: "#083167",
        gray: "#DFDFDF"
      },
    },
    plugins: [],
  },
};
