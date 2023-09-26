/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/layouts/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/sections/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    colors: {
      "bs-pink": "#f9cdcd",
      "bs-dark": "#252422",
      "bs-extradark": "#191918",
      "bs-grey": "#5e5e5e",
      "bs-light": "#f4f4f4",
      "bs-white": "#ffffff",
      "bs-transparent": "transparent",
    },
    extend: {
      fontFamily: {
        scoto: ["ScotoGroteskA", "sans-serif"],
      },
      transitionTimingFunction: {
        default: "cubic-bezier(.61,.38,.33,.95)",
      },
      keyframes: {
        lineProgressLinear: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        loaderFadeOut: {
          "0%": { opacity: "1" },
          "99%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        menuSlideIn: {
          "0%": { transform: "translateX(20%)" },
          "100%": { transform: "translateX(0%)" },
        },
        arrowLinear: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(100%)" },
          "51%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        menuOverlaySlide: {
          "0%": { width: "80%", right: "20vw" },
          "100%": { width: "0%", right: "100vw" },
        },
        fadeInUp: {
          "0%": { opacity: 0, top: "10px" },
          "100%": { opacity: 1, top: "0px" },
        },
        overlayInUp: {
          "0%": { opacity: 1, transform: "translateY(100%)", height: "100vh" },
          "99%": { opacity: 1, transform: "translateY(50%)"},
          "100%": { opacity: 1 },
        },
        shutterInUp: {
          "0%": { opacity: 1, height: "100vh" },
          "100%": { opacity: 1, height: "0vh", display: "none" },
        },
      },
      animation: {
        "arrow-lead": "arrowLinear 0.5s ease-in-out forwards",
        "menu-overlay-reveal":
          "menuOverlaySlide 0.5s cubic-bezier(.35,.67,.84,.61) 0.5s forwards",
        "menu-slide-in": "menuSlideIn 0.8s ease 0.4s forwards",
        "menu-fadein": "fadeIn 0.5s ease-in-out forwards",
        "menu-footer-fadein": "fadeIn 0.5s ease-in-out 1.2s forwards",
        "fade-in-up": "fadeInUp 0.3s ease-in-out forwards",
        "loader-fade-out": "loaderFadeOut 0.3s ease-in-out 0.5s forwards",
        "overlay-up": "overlayInUp 0.5s ease-in-out 0.1s forwards",
        "shutter-up": "shutterInUp 0.5s ease-in-out 0.6s forwards",
      },
    },
  },
  plugins: [],
};
