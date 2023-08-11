/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '1': '0px 0px 4px 0px rgba(239, 68, 59, 0.40)',
        '2':' 0px 0px 40px 0px rgba(239, 68, 59, 0.40)',
        '3':' 0px 0px 20px 0px rgba(239, 68, 59, 0.40)',
      },

    },
  },
  plugins: [],
}