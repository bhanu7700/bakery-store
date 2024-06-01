/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "playfair":["Playfair Display"]
      },
      animation: {
        'bounce-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    
],
}

