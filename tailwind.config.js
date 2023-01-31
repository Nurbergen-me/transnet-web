/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        blue: '#2E95D2',
        white: '#fff'
      },
      secondary: {
        burgerbg: 'rgba(255, 255, 255, 0.15)',
        producttitle: 'rgba(24, 24, 24, 0.67)',
        navbar: 'rgba(24, 24, 24, 0.6)',
        blue: '#256E9A',
        gray: '#CCC',
        quoteline: 'rgba(48, 48, 48, 0.2)'
      }
    }
  },
  plugins: [],
}
