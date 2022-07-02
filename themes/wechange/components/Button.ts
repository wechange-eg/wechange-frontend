import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools'
import type { ComponentStyleConfig } from '@chakra-ui/theme'


const Button: ComponentStyleConfig = {
  variants: {
    inputRightElement: {
      bg: 'gray.100',
      borderRadius: 'base',
      color: 'gray.800',
      fontSize: 'sm',
      fontWeight: 'normal',
      h: 6,
      w: 'full',
    },
    solid: (props: StyleFunctionProps) => ({
      bg: mode('teal.600', 'teal.300')(props),
      color: mode('white', 'gray.900')(props),
    }),
    link: (props: StyleFunctionProps) => ({
      color: mode('teal.600', 'teal.300')(props),
      textDecoration: 'underline',
    }),
  },
}

export default Button
