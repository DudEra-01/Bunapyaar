/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      lineHeight: {
        relaxed: '1.75',
        loose: '2',
      },
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