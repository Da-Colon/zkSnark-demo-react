
import scrollStyles from './scroll'
import toastStyles from './toast'

export default {
  global: {
    body: {
      color: 'cetacean-blue.500',
      height: '100%',
      background: 'baby-powder.500'
    },
    html: {
      scrollBehavior: 'smooth',
      height: '100%',
    },
    ...scrollStyles,
    ...toastStyles,
    "@font-face": [
      {
        fontFamily: "FigTree",
        src: `url('/fonts/Figtree-Light.ttf') format('truetype')`,
        fontWeight: 300,
        fontStyle: "normal"
      },
      {
        fontFamily: "FigTree",
        src: `url('/fonts/Figtree-Regular.ttf') format('truetype')`,
        fontWeight: 400,
        fontStyle: "normal"
      },
      {
        fontFamily: "FigTree",
        src: `url('/fonts/Figtree-Medium.ttf') format('truetype')`,
        fontWeight: 500,
        fontStyle: "normal"
      },
      {
        fontFamily: "FigTree",
        src: `url('/fonts/Figtree-SemiBold.ttf') format('truetype')`,
        fontWeight: 600,
        fontStyle: "normal"
      },
      {
        fontFamily: "FigTree",
        src: `url('/fonts/Figtree-Bold.ttf') format('truetype')`,
        fontWeight: 700,
        fontStyle: "normal"
      },
      {
        fontFamily: "FigTree",
        src: `url('/fonts/Figtree-ExtraBold.ttf') format('truetype')`,
        fontWeight: 800,
        fontStyle: "normal"
      },
      {
        fontFamily: "FigTree",
        src: `url('/fonts/Figtree-Black.ttf') format('truetype')`,
        fontWeight: 900,
        fontStyle: "normal"
      },
      {
        fontFamily: "FigTree",
        src: `url('fonts/Figtree-Italic.ttf') format('truetype')`,
        fontWeight: "normal",
        fontStyle: "italic"
      }
    ]
  },
}