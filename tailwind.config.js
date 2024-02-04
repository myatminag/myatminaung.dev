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
        primary: {
          100: '#0D120E',
          200: '#232826',
          300: '#3C413F',
          400: '#1DA756',
          500: '#969996',
        },
        secondary: {
          100: '#F4964D',
          200: '#1A212F',
          300: '#E9EFF2',
          400: '#F9FBFC',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
