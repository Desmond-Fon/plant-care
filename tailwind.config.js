/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D6A4F",
        secondary: "#52B788",
        tertiary: "#767676",
        quaternary: "#1B4332",
        quinary: "#FFFF00",
        overlayy: "rgba(25, 28, 31, 0.5)",
      },
      fontFamily: {
        futura: ["Futura"], // Add your custom font here
      },
    },
  },
  plugins: [],
};

