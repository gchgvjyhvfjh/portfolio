/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'pearl-white': '#F8F8FF',
        'deep-blue': '#1E3A8A',
        'coral-orange': '#FF6B6B',
        'text-dark': '#2D3748',
        'text-light': '#A0AEC0',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
} 