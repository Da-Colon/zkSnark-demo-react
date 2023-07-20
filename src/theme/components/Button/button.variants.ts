import { defineStyle } from '@chakra-ui/react';
const primaryDisabled = {
  bg: 'gray.500',
  color: 'gray.700',
}
const primaryLoading = {} // loading === disabled

const primaryBright = defineStyle({
  bg: 'primary',
  color: 'blue.500',
  _hover: {
    bg: 'blue.700',
    _disabled: {
      ...primaryDisabled,
      _loading: primaryLoading
    },
  },
  _disabled: {
    ...primaryDisabled,
    _loading: primaryLoading
  },
  _active: {
    bg: 'lblue.500',
  },
  _focus: {
    bg: 'blue.500',
  }
})


const buttonVariants = {
  'primary': primaryBright,
}

export default buttonVariants