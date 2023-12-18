/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#942D3B",
          light: "#CB4C5B"
        },
        secondary: {
          DEFAULT: " #010C29",
          medium: "#19284E",
          light: "#404F7A"
        },
        accent: "#FAF4F3",
        line: "#D5D5D580",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ["lato", "Rubik", "sans-serif"]
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
}

