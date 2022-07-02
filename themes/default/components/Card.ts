import { StyleFunctionProps, mode } from '@chakra-ui/theme-tools'
import type { ComponentStyleConfig } from '@chakra-ui/theme'


const Card: ComponentStyleConfig = {
  baseStyle: (props: StyleFunctionProps) => ({
    bg: mode('white', 'gray.800')(props),
    borderColor: mode('gray.200', 'gray.600')(props),
  }),
}

export default Card
