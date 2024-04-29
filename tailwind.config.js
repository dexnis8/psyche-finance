/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        grey: {
          100: "#F7F9FB",
          200: "#E7EFF6",
          300: "#778899 ",
        },
        primary: {
          100: "#FCEABB",
          200: "#E5AE40",
        },
        black: {
          100: "#1B1C1E",
        },
      },
    },
  },
  plugins: [],
};
