import { StyleFunctionProps, Styles, mode } from '@chakra-ui/theme-tools'


const styles: Styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('gray.50', 'gray.900')(props),
      color: mode('gray.900', 'white')(props),
    },
  }),
}

export default styles
