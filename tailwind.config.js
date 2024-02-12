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
          100: '#121315',
          200: '#242527',
          300: '#e0eeee',
        },
        secondary: {
          100: '#F7FAFC',
          200: '#3f4144',
          300: '#E8EDF2',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
