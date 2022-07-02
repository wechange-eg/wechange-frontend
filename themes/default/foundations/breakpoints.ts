import { Breakpoints, createBreakpoints } from '@chakra-ui/theme-tools'
import type { Dict } from '@chakra-ui/utils'


const breakpoints: Breakpoints<Dict> = createBreakpoints({
  base: '0em',
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
})


export default breakpoints
