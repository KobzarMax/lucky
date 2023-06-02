/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', "./node_modules/flowbite/**/*.js"],
  
  theme: {
    extend: {
      colors: {
        dark_green: '#7CCA3F',
        dark_gray: '#BCBCBC',
        primary: '#FF1B5E'
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}
