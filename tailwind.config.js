/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      league: ["League Gothic", "sans-serif"],
    },
    extend: {
      colors: {
        deezer: {
          white: "#FDFCFE",
          gray: "#555555",
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

