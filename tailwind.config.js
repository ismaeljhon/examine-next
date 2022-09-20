/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#5E3B76',
      'purple-200': '#C9BDD2',
    },
    backgroundColor: {
      'primary': '#5E3B76',
      'premium': '#ffd747'
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'cursive'],
      },
    },
  },
  plugins: [],
}
