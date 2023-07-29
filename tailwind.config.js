/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#B3B3B3',
          200: '#BEBEBD',
          300: '#A7A7A7',
          600: '#999999',
          700: '#33332F',
          900: '#101010',
          950: '#000000'
        },
        green: {
          500: '#1ED760'
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

