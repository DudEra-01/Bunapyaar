/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#708238',    // Olive Green
        accent: '#A4C639',     // Lime Tint
        background: '#F7F5EF', // Warm White
        text: '#2B2B2B',       // Dark Gray
      },
    },
  },
  plugins: [],
} 