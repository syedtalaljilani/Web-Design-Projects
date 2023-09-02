/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*'],
  theme: {
    extend: {
      colors:{
        'shark': {
          '50': '#f5f6f6',
          '100': '#e5e7e8',
          '200': '#ced1d3',
          '300': '#abb0b5',
          '400': '#81888f',
          '500': '#666d74',
          '600': '#585c62',
          '700': '#4b4e53',
          '800': '#424548',
          '900': '#3a3c3f',
          '950': '#1c1d1f',
      },
      'woodsmoke': {
        '50': '#f3f7f8',
        '100': '#e1ecec',
        '200': '#c7dada',
        '300': '#a0bfc0',
        '400': '#729c9e',
        '500': '#578183',
        '600': '#4a6b70',
        '700': '#41595d',
        '800': '#3b4c4f',
        '900': '#344145',
        '950': '#0c1011',
    },
    fontFamily: {
      'manrope': 'Manrope',
    }
    
      }
    },
  },
  plugins: [],
}

