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
        primary: '#ba0053',
        secondary: '#1B6CE0',
        accent: '#9B91B3',
        'accent-2': 'rgb(255, 255, 255, .2)',
      },
      screens: {
        sm: '420px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      keyframes: {
        fade: {
          '0%': {
            opacity: '0',
            top: '100px',
          },
          '75%': {
            opacity: '0.5',
            top: '0px',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        'fade-in-list': 'fade 0.5s linear',
      },
    },
  },
  plugins: [],
}
