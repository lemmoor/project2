/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        cursor: 'cursor .5s linear infinite alternate',
        type: 'type 1.2s ease-out infinite alternate both',
        'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '25%, 30%': { width: '1ch' },
          '55%, 60%': { width: '2ch' },
          '85%, 90%': { width: '3ch' },
          // '90%': { width: '4ch' },
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
