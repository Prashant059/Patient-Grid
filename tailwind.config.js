/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2A0896',
        accent: '#D9D9D9',
        subdued: '#282828'
      },
      keyframes: {
        fade: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        fadeIn: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      animation: {
        'fade-out': 'fade 5500ms ease-out 1000ms infinite',
        'fade-in': 'fadeIn 5500ms ease-out 1000ms infinite',
      }
    },
  },
  plugins: [],
}