import {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import wechangeTheme from '../themes/wechange'


const Document = () => (
  <Html>
    <Head />
    <body>
      <ColorModeScript
        initialColorMode={wechangeTheme.config.initialColorMode}
      />
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
