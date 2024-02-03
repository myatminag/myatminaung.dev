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
          lg: '1rem',
          '2xl': '8rem',
        },
      },
      fontSize: {
        heading: '20px',
      },
      colors: {
        main: {
          100: '#242429',
          200: '#292d36',
        },
        primary: {
          100: '#312f2f',
        },
        secondary: {
          100: '#fef9ff',
          200: '#969996',
          300: '#e8e6ea',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
