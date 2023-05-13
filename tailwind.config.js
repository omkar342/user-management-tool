/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
