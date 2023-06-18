/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        active: "#ff6622",
        normal: "#bbbbcf",
      },
    },
  },
  plugins: [],
};
