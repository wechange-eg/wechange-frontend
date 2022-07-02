import { FC, ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Themes } from '../themes/types'
import getTheme from '../themes'


interface ThemeProviderProps {
  children: ReactNode
}

const theme = getTheme(Themes.WECHANGE)

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children } = props

  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  )
}

export default ThemeProvider
