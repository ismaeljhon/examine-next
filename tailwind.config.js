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
      'dark': '#212529',
      'white': '#ffffff',
      purple: {
        200: '#C9BDD2',
        600: '#562E69'
      },
      green: {
        700: '#1B818C'
      },
      'info': '#E2D9F3'
    },
    backgroundColor: {
      'primary': '#5E3B76',
      'premium': '#ffd747',
      'white': '#ffffff',
      'light': '#EDF2F7',
      purple: {
        200: '#C9BDD2',
        400: '#826595',
      },
    },
    borderColor: {
      secondary: '#25A1AF',
      light: '#EDF2F7',
      purple: {
        200: '#C9BDD2',
        400: '#826595',
      },
      gray: {
        400: '#CED4DA'
      },
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'cursive'],
        'lora': ['Lora'],
      },
      boxShadow: {
        'guest-form': '0px 2px 12px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
