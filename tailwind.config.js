/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'login' : "url(../public/images/login.jpg)",
        'chat' : "url(../public/images/chat.jpg)"
      }
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
