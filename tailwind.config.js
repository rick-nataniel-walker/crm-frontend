/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00351a",
        "primary-light": "rgba(0, 53, 26, 0.15)",
        secondary: "#00a14e",
        "secondary-light": "rgba(0, 161, 78, 0.15)",
        accent: "#ffa500",
        "accent-light": "rgba(255, 165, 0, 0.15)",
        light: "#f8f9fb",
        dark: "#1a2e1f",
        "dark-light": "rgba(0, 53, 26, 0.15)",
      },
    },
  },
  plugins: [],
};
