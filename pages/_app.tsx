import {
  AppContext,
  AppInitialProps,
  AppLayoutProps,
} from 'next/app'
import type { NextComponentType } from 'next'
import { ReactNode } from 'react'
import ThemeProvider from '../containers/ThemeProvider'


const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = (
  { Component, pageProps }: AppLayoutProps,
) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return (
    <ThemeProvider>
      {
        getLayout(
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Component {...pageProps} />,
        )
      }
    </ThemeProvider>
  )
}

export default App
