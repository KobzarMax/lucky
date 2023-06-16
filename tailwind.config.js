/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],

  theme: {
    extend: {
      colors: {
        dark_green: '#7CCA3F',
        dark_gray: '#BCBCBC',
        primary: '#FF1B5E',
        round_gray: '#252525',
        light_gray_text: '#707070',
        gray_text: '#5B5B5B',
        dark_gray_text: '#464646',
        dark_green_text: '#42711D',
        middle_gray_text: '#757575',
        dark_gray_bg: '#2D2D2D',
        dark_gray_bg_opacity60: '#2b2b2b99',
        dark_gray_bg_opacity80: '#2b2b2bcc',
        night_gray_border: '#313131',
        night_gray_border_opacity80: '#38383899',
        night_gray_bg_opacity60: '#1b1b1bcc',
        light_action_text: '#8A8A8A',
        duration_text: '#BEBEBE',
        modal_bg: '#1A1B1F',
        article_gray: '#929292',
        small_text_gray: '#797979',
        wrap_gray_border: '#363636',
        header_popup_bg: '#2B2B2B',
        scrollbar_thumb: '#7CCA3F',
        scrollbar_track: '#343434'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
