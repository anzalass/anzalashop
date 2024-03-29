/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Header: ["Bebas Neue", "sans-serif"],
      Raleway: ["Raleway", "sans-serif"],
    },

    extend: {
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "900px": " 900px",
        "800px": "800px",
        "1300px": "1300px",
        "400px": "400px",
      },
    },
  },
  plugins: [],
};
