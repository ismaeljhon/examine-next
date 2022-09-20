/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#5E3B76',
      'secondary': '#6C757D',
      purple: {
        200: '#C9BDD2',
        600: '#562E69'
      },
      'dark': '#212529',
      'white': '#ffffff'
    },
    backgroundColor: {
      'primary': '#5E3B76',
      'premium': '#ffd747',
      purple: {
        200: '#C9BDD2',
        400: '#826595',
      },
      light: '#EDF2F7'
    },
    borderColor: {
      purple: {
        200: '#C9BDD2',
        400: '#826595',
      },
      gray: {
        400: '#CED4DA'
      },
      light: '#EDF2F7'
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'cursive'],
        'lora': ['Lora'],
      },
    },
  },
  plugins: [],
}
