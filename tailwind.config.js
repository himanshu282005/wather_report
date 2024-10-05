/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add custom animations
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        spinSlow: 'spin 3s linear infinite', // Optional: slow spinner for loading
      },
      // Define keyframes for animations
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      // Customize colors if needed (optional)
      colors: {
        'glass-bg': 'rgba(255, 255, 255, 0.1)', // frosted glass background
      },
    },
  },
  plugins: [],
};
