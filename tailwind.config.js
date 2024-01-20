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
          xl: '18rem',
          '2xl': '30rem',
        },
      },
      colors: {
        black: {
          100: '#1C1C1C',
        },
        white: {
          100: '#FAFAF9',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
