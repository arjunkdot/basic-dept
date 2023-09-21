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
      'bs-extradark' : '#191918',
      'bs-grey' : '#5e5e5e',
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
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        menuSlideIn: {
          '0%': {transform: 'translateX(20%)'},
          '100%': {transform: 'translateX(0%)'}
        },
        arrowLinear: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(100%)' },
          '51%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        menuOverlaySlide:{
          '0%': {width: '80%', right: '20vw'},
          '100%': {width: '0%', right: '100vw'}
        }
      },
      animation: {
        'arrow-lead': 'arrowLinear 0.5s ease-in-out forwards',
        'menu-overlay-reveal': 'menuOverlaySlide 0.5s cubic-bezier(.35,.67,.84,.61) 0.5s forwards',
        'menu-slide-in': 'menuSlideIn 0.8s ease 0.4s forwards',
        'menu-fadein': 'fadeIn 0.5s ease-in-out forwards',
        'menu-footer-fadein': 'fadeIn 0.5s ease-in-out 1.2s forwards'
      }
    },
  },
  plugins: [],
}
