/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/layouts/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/sections/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    colors: {
      'bs-pink' :'#f9cdcd',
      'bs-dark' : '#252422',
      'bs-light' : '#f4f4f4',
      'bs-white': '#ffffff'
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      transitionTimingFunction: {
        'default': 'cubic-bezier(.61,.38,.33,.95)'
      },
      keyframes: {
        lineProgressLinear: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
