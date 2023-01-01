/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Manrope', 'sans-serif'],
      },
      colors: {
        dark: 'rgb(7, 7, 7)',
        'even-darker': '#020e1e',
        primary: '#ba0053',
        secondary: '#1B6CE0',
        accent: '#9B91B3',
        'accent-2': 'rgb(255, 255, 255, .2)',
        pink: '#AA4382',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fade: 'fade 1s forwards',
        'fade-out': 'fade-out 1s forwards',
      },
    },
  },
  plugins: [],
}
