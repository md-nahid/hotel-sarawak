module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        meriweather: "'Merriweather', serif",
        lato: "'Lato', sans-serif",
      },
      backgroundColor: {
        DarkOrange: "#F04135",
      },
    },
    screens: {
      xs: "485px",
      // => @media (min-width: 640px) { ... }
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      xmd: "992px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
