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
          lg: '4rem',
          '2xl': '30rem',
        },
      },
      colors: {
        black: {
          100: '#121212',
          200: '#2B2B2B',
        },
        white: {
          100: '#F9FAFC',
        },
        gray: {
          100: '#777777',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
