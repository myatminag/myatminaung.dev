/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '6rem',
          '2xl': '8rem',
        },
      },
      fontSize: {
        heading: '20px',
      },
      colors: {
        main: {
          100: '#22181c',
          200: '#1F1E1E',
        },
        primary: {
          100: '#312f2f',
        },
        secondary: {
          100: '#fef9ff',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
