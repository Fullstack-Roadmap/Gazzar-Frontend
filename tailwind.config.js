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
      
      colors: {
        blue: "#083167",
      }
    },
    plugins: [],
  },
};
