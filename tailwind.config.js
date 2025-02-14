/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0047AB',
        'primary-dark': '#003380',
      },
    },
  },
  plugins: [],
};