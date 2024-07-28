/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_green: "#4CFFB4",
        primary_purple: "#9747FF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        top_left_purple_shadow: "-10px -10px 0 #9747FF",
        top_right_purple_shadow: "10px -10px 0 #9747FF",
        bottom_left_purple_shadow: "-10px 10px 0 #9747FF",
        bottom_right_purple_shadow: "10px 10px 0 #9747FF",
        top_left_green_shadow: "-10px -10px 0 #4CFFB4",
        top_right_green_shadow: "10px -10px 0 #4CFFB4",
        bottom_left_green_shadow: "-10px 10px 0 #4CFFB4",
        bottom_right_green_shadow: "10px 10px 0 #4CFFB4",
      },
    },
  },
  plugins: [],
};
