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
          lg: '5rem',
          '2xl': '30rem',
        },
      },
      fontSize: {
        heading: '20px',
      },
      colors: {
        black: {
          100: '#121212',
          200: '#2B2B2B',
        },
        white: {
          100: '#F9FAFC',
          200: '#F3F4F6',
        },
        gray: {
          100: '#777777',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
