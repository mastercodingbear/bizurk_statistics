/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#7F7FD5",
        secondary: "#E786D7",
        white: "#FDFDFF",
      },
      backgroundColor: {
        light: "#EFF3F9",
        "light-secondary": "#FDFDFF",
        dark: "#212427",
        "dark-secondary": "#282C31",
        grey: "#4D4D4D",
      },
      borderColor: {
        light: "#EBEBEB",
        "light-secondary": "#4F4F4F",
        dark: "#4D4D4D",
      },
      textColor: {
        light: "#979797",
        "light-secondary": "#4F4F4F",
        dark: "#CACACA",
      },
      fill: {
        light: "#DFE6F1",
        dark: "#CACACA",
      },
      stroke: {
        light: "#4F4F4F",
        dark: "#CACACA",
        grey: "#5B5B5B",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
