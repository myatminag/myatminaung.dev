/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  daisyui: {
    themes: false,
  },
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "18rem",
          "2xl": "30rem",
        },
      },
      colors: {
        gray: {
          DEFAULT: "#6c757d",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
