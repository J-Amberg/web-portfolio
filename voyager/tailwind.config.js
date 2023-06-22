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
      'white': '#ffffff',
      'sky': '#2D90D6',
      'smoky':'rgba(0, 0, 0, 0.55)',
      'cloudy': '#DBE4F5',
      'black': '#000000',
      'turquoise': '#27F2FF',
      'autumn': '#FFA323',
      'forestgreen': '#004a2f',
      'crimson': '#AA0000'
    },
    fontFamily: {
      'body': ['Gowun Dodum', 'sans-serif'],
      'enriqueta': ['Enriqueta', 'serif'],
      'delius-unicase': ['Delius Unicase', 'cursive'],
      'castoro': ['serif'],
      'comme': ['Comme', 'sans-serif']
    },
  },
  plugins: [],
}

