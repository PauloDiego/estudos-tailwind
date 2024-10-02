/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

// npx tailwindcss -i ./src/css/style.css -o ./src/dist/style.css --watch