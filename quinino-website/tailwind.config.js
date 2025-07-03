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
          DEFAULT: '#003366',
          dark: '#002244',
        },
        secondary: {
          DEFAULT: '#0A9396',
          light: '#94D2BD',
        },
        accent: '#EE9B00',
        'light-gray': '#f8f9fa',
        'navy-blue': '#001F3F',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}

