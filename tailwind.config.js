/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      animation: {
        h_spin: 'h_spin 1.5s ease-in-out infinite',
      },
      keyframes: {
        h_spin: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      'dark',
      'winter'
    ]
  }
}
