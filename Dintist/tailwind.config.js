/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out', // Animation definition
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' }, // Start with full transparency
          '100%': { opacity: '1' }, // End with full visibility
        },
      },
    },
  },
  plugins: [],
};
