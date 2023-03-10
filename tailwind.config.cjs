/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      xxs: '300px',
      xs: '360px',
      sm: '430px',
      inbetween: '500px',
      md: '768px',
      mobile: '920px',
      lg: '1070px',
      xl: '1400px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        primary: ['Manrope', 'sans-serif'],
      },
      colors: {
        dark: 'rgb(7, 7, 7)',
        'dark-nav': 'rgb(7, 7, 7, .90)',
        accent: '#9B91B3',
      },
      spacing: {
        double: '200%',
        'almost-double': '150%',
      },
      height: {
        100: '28rem',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        fadeOut: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
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
        'fade-in': 'fadeIn .350s forwards',
        'fade-out': 'fadeOut .550s forwards',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
