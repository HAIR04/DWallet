/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bgr' : '#181818',
        'custom-bgr-hd' : '#323232',
        'custom-bd' : '#4f4f4f',
        'custom-dl' : '#5c00a3',
        'custom-text' : '#bdbdbd',
        'custom-color-body-2' : '#2d2933',
        'custom-color-body-3' : '#B9F890',
        'custom-color-footer' : '#330c69',
        'custom-color-footer-end' : '#160230',
       'custom-color-text-footer' : '#c6c8ce',
       'color-form' : '#e3d0ff',
       'color-border-form' : '#a7a6a8',
       'color-submit' : '#5c00a3',
       'bgr-download' : '#070a13cc'
      },
      height: {
        'custom-body-2' : '31.25rem',
      },
      borderRadius: {
          '4xl' : '2rem',
      },
      width:{
        'w-custom' : '31%'
      },
      fontSize: {
        '5.5xl' : '55px'
      }
    },
  },
  plugins: [],
}