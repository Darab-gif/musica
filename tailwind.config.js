/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "main-bg": "#1D2123",
        "black-bg": "#1A1E1F",
        primary: "rgba(51, 55, 59, 0.37)",
      },
      fontWeight: {
        600: "600",
        400: "400",
        700: "700",
      },
      fontSize: {
        12: "12px",
        14: "14px",
        17: "17px",
        24: "24px",
      },
      borderRadius: {
        20: "20px",
        32: "32px",
        50: "50px",
      },
      borderColor: {
        white: "rgba(255, 255, 255, 0.11)",
      },
      height: {
        230: "230px",
        37: "37px",
        63: "63px",

        96: "96px",
        127: "127px",
        125: "125px",
        193: "193px",
        73: "73px",
        216: "216px",
        832: "832px",
      },
      width: {
        52: "52px",
        37: "37px",
        63: "63px",
        153: "153px",
        284: "284px",
        435: "435px",
        800: "800px",
        1122: "1122px",
        1125: "1125px",
        1280: "1280px",
        1292: "1292px",
      },
      dropShadow: {
        light: "0px -25px 100px rgba(16, 16, 16, 0.51)",
      },
      backdropBlur: {
        5: "5px",
      },
      colors: {
        white: "rgba(239, 238, 224, 0.25);",
        secondary: "#FACD66",
        light: "#FFFFFF",
        red: "#E5524A",
        primary: "#EFEEE0",
        "light-blue": "#A4C7C6",
      },
      backgroundImage: {
        hero: "url(./assets/music1.png)",
      },
    },
  },
  plugins: [],
};
