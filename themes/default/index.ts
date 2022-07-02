import { ChakraTheme } from '@chakra-ui/theme'
import type { Dict } from '@chakra-ui/utils'
import { extendTheme } from '@chakra-ui/react'
// eslint-disable-next-line sort-imports
import components from './components'
import config from './config'
import foundations from './foundations'
import styles from './styles'


const overrides: Partial<ChakraTheme> = {
  config,
  styles,
  ...(foundations as Dict),
  components,
}

const theme = extendTheme(overrides)


export default theme
