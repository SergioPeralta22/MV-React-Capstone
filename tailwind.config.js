/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#3B5A9A',
        blue_header: '#4369B2',
        blue_l: '#5588E4',
        black: '#1d1d1d',
        blue_map: '#2D4573',
      },
    },
  },
  plugins: [],
};
