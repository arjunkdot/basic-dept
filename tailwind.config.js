/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
      'bs-white': '#ffffff',
      'bs-transparent': 'transparent'
    },
    extend: {
      fontFamily: {
        scoto: ["ScotoGroteskA", "sans-serif"],
      },
      transitionTimingFunction: {
        'default': 'cubic-bezier(.61,.38,.33,.95)'
      },
      keyframes: {
        lineProgressLinear: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        arrowLinear: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(100%)' },
          '51%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        'arrow-lead': 'arrowLinear 0.5s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}
