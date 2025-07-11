/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fffaf0',
        primary: '#d9a7a0',
        accent: '#6b4c3b',
        text: '#2d2d2d',
      },
    },
  },
  plugins: [],
} 