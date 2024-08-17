/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'playButton': "url('https://cdn-icons-png.flaticon.com/512/153/153752.png')",
        'stopButton': "url('https://cdn-icons-png.flaticon.com/512/5644/5644528.png')",
        'deleteBtn': "url('https://cdn-icons-png.flaticon.com/512/7104/7104075.png')"
      },
      colors:{
        custom:{
          'scrollBg': "#280142",
          'scrollThumb': "#ff5af9"
        }
      },
      gridTemplateRows:{
        'layoutActive': "auto auto 1fr",
        'layoutPassive': "1fr auto 1fr"
      },
      keyframes:{
        appear: {
          '0%': {transform: 'translateY(100%)', opacity: '0%'},
          '80%': {transform: 'translateY(-5%)', opacity: '100%'},
          '90%': {transform: 'translateY(3%)'},
          '100%': {transform: 'translateY(0%)'}
        }
      },
      animation:{
        appear: 'appear 0.2s linear'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}