/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        cursor: 'cursor .5s linear infinite alternate',
        type: 'type 1s ease-out infinite alternate both',
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '25%, 30%': { width: '1ch' },
          '55%, 60%': { width: '2ch' },
          '85%, 90%': { width: '3ch' },
          '100%': { width: '3ch' },
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        code: '#1d1f21',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
