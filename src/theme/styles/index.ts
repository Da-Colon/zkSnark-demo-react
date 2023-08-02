
import scrollStyles from './scroll'
import toastStyles from './toast'

export default {
  global: {
    body: {
      color: 'black.500',
      height: '100%',
      background: 'gray.200'
    },
    html: {
      scrollBehavior: 'smooth',
      height: '100%',
    },
    ...scrollStyles,
    ...toastStyles,
  },
}