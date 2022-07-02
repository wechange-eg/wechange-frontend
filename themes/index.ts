import { ThemeConfig } from '@chakra-ui/theme'
import { Themes } from './types'
import defaultTheme from './default'
import wechangeTheme from './wechange'


const themes: Record<Themes, ThemeConfig> = {
  [Themes.default]: defaultTheme,
  [Themes.WECHANGE]: wechangeTheme,
}

const getTheme = (selectedTheme: Themes): ThemeConfig => {
  const theme = themes[selectedTheme]
  if (!theme) {
    return themes[Themes.default]
  }

  return theme
}

export default getTheme
