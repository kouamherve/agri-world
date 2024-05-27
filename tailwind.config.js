/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "Montserrat",
      },
      colors: {
        primary: "#1FA12E",
        secondary: "#936BE80D",
        footer: "#ABABAB",
        footerLinks: "#6E747B",
      },
    },
  },
  plugins: [],
};
