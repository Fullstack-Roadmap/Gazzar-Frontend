/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "300px", max: "700px" },
      // => @media (min-width: 360px) { ... }

      md: "700px",
      // => @media (min-width: 800px) { ... }

      lg: "1200px",
      // => @media (min-width: 1440px) { ... }

      'xs': '425px',
      // => @media (min-width: 480px) { ... }

      'sml': '640px',
      // => @media (min-width: 640px) { ... }

      'mid': '768px',
      // => @media (min-width: 768px) { ... }

      'lrg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xlrg': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xlrg': '1536px',
      // => @media (min-width: 1536px) { ... }
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
        gray: "#DFDFDF",
        outlinegray: "#D9D9D9",
        navyblue: "#CED6E1"
      },
    },
    plugins: [],
  },
};
