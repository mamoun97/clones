/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        myfont: ["Poppins", "Tajawal", "Cairo", "Noto Sans Arabic"],
      },
      keyframes: {
        show: {
          '0%': { opacity: '0' },
          '100%': { transform: '1' },
        },
        trLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'none' },
        },
        trRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'none' },
        },
        trTop: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'none' },
        },
        trBottom: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'none' },
        },
      },
      animation: {
        'show': 'show .8s linear ',
        'trLeft': 'trLeft 2s linear ',
        'trRight': 'trRight 2s linear ',
        'trTop': 'trTop 1s linear ',
        'trBottom': 'trBottom 3s linear ',
      }

    },
  },
  darkMode: "class",
  plugins: [nextui(
    {
      themes: {
        "light": {
          extend: "dark",
          colors: {
            primary: {
              50: "#EAF4FD",
              100: "#D1E6FB",
              200: "#A3CDF7",
              300: "#75B3F3",
              400: "#479AEE",
              500: "#0875DF",
              600: "#0662B7",
              700: "#054D8F",
              800: "#033868",
              900: "#022340",
              DEFAULT: "#0875DF",
            },
          },
        },
      },
    }
  )],
}



