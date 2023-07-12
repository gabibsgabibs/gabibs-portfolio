/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lightblue: '#05F1C7',
        darkblue: '#0E073F',
        midblue: '#606CF5',
        white: '#FFFFFF',
        purple: '#A531B4',
      },
      fill: {
        'sun-color': '#FFFFFF',
        'moon-color': '#FFFFFF',
      }
    },
  },
  plugins: [],
};
