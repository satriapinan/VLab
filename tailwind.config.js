/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffff",
        secondary: "#4F98CA",
        orange: "#E8AA42",
        green: "#32BF75",
        base: "#EEEEEE",
        accent: "#555555",
        dimAccent: "#4A4A4A",
        dark: "#252525",
        light: "#A6A6A6",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};