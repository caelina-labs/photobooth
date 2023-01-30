/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-to-scale': 'fadeToScale 1050ms linear infinite',
      },
      keyframes: {
        fadeToScale: {
          '0%': { transform: 'scale(1)', opacity:1 },
          '70%': {  transform: 'scale(0.5)', opacity:0  },
          '100%': {  transform: 'scale(0.5)', opacity:0  },
        }
      },
      fontSize:{
        "18xl": "16rem"
      }
    }
  },
  plugins: [],
}
