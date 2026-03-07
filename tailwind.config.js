/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#FDB913",
        dark: "#1a1a1a",
        darkGray: "#2a2a2a",
      },
    },
  },
  plugins: [],
};
