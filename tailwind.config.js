/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        correct: '#34d399',
        wrong: '#f87171',
        primary: '#38bdf8',
      },
    },
  },
  plugins: [],
};
