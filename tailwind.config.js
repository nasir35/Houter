/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
    },
    colors: {
      "blue-zodaic": "#1B1C57",
      "green-teal": "#10B981",
      secondary: "#626687",
      tertiary: "#F59E0B",
      "oslo-gray": "#888B97",
      "gun-powder": "#3C4563",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
