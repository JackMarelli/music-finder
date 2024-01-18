/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      league: ["League Gothic", "sans-serif"],
    },
    container: {
      padding: {
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        deezer: {
          white: "#FDFCFE",
          gray: {
            light: "#999999",
            DEFAULT: "#7777777",
            dark: "#444444",
          },
          black: "#0F0D13",
          primary: '#FF0066',
          secondary: '#2C2C2C',
          background: '#F5F5F5',
          text: '#000000',
          accent: '#1E1E1E',
        },
      },
    },
  },
  plugins: [],
}

