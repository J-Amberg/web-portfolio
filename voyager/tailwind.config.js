/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'lawn': '#9DFD8D',
      transparent: 'transparent',
      'white': '#DBE4F5',
      'sky': '#2D90D6',
      'smoky':'rgba(0, 0, 0, 0.55)'
    },
    fontFamily: {
      'body': ['Gowun Dodum', 'sans-serif'],
      'enriqueta': ['Enriqueta', 'serif']
    },
  },
  plugins: [],
}

