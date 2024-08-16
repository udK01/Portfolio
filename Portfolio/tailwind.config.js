/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_gray: "#181414",
        primary_green: "#4CFFB4",
        primary_purple: "#9747FF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        robot: ["Roboto", "sans-serif"],
      },
      screens: {
        "2xs": "320px",
        xs: "480px",
        sm: "620px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1700px",
      },
      boxShadow: {
        top_left_purple: "-10px -10px 0 #9747FF",
        top_right_purple: "10px -10px 0 #9747FF",
        bottom_left_purple: "-10px 10px 0 #9747FF",
        bottom_right_purple: "10px 10px 0 #9747FF",
        top_left_green: "-10px -10px 0 #4CFFB4",
        top_right_green: "10px -10px 0 #4CFFB4",
        bottom_left_green: "-10px 10px 0 #4CFFB4",
        bottom_right_green: "10px 10px 0 #4CFFB4",
      },
    },
  },
  plugins: [],
};
