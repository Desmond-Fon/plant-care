/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D6A4F",
        secondary: "#52B788",
        tertiary: "#767676",
        quaternary: "#1B4332",
        quinary: "#FFFF00",
      },
      fontFamily: {
        futura: ["Futura"], // Add your custom font here
      },
    },
  },
  plugins: [],
};

