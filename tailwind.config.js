
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        neutral: {
          750: '#333333',
          850: '#1f1f1f',
          950: '#0a0a0a',
        }
      }
    },
  },
  plugins: [],
}
