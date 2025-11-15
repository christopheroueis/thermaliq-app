/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1976D2',
          dark: '#0D47A1',
          light: '#42A5F5',
        },
        accent: '#42A5F5',
        success: '#10b981',
        warning: '#fbbf24',
      },
    },
  },
  plugins: [],
}