/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        deezer: {
          primary: '#FF0066',  // Deezer's primary color
          secondary: '#2C2C2C',  // Deezer's secondary color
          background: '#F5F5F5',  // Deezer's background color
          text: '#000000',  // Deezer's text color
          accent: '#1E1E1E',  // Deezer's accent color
          // Add more colors as needed based on Deezer's identity palette
        },
      },
    },
  },
  plugins: [],
}

