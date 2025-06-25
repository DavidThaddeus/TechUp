/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        blue: {
          800: '#1E40AF',
          900: '#1E3A8A'
        },
        orange: {
          500: '#F97316',
          600: '#EA580C'
        },
        teal: {
          400: '#1fc9d5'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        playfair: ['Playfair Display', 'serif']
      }
    }
  },
  plugins: [],
}
