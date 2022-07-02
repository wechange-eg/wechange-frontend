import {
  Colors,
  RecursiveObject,
  ThemeTransitions,
} from '@chakra-ui/theme'
import { Breakpoints } from '@chakra-ui/theme-tools'
import type { Dict } from '@chakra-ui/utils'


export interface Typography {
  fonts: RecursiveObject<string>
  fontSizes: RecursiveObject
  fontWeights: RecursiveObject
  letterSpacings: RecursiveObject
  lineHeights: RecursiveObject
}

export interface Foundations extends Typography {
  borders: RecursiveObject
  breakpoints: Breakpoints<Dict>
  colors: Colors
  radii: RecursiveObject
  shadows: RecursiveObject<string>
  sizes: RecursiveObject
  space: RecursiveObject
  transition: ThemeTransitions,
}

export enum Themes {
  default,
  WECHANGE,
}
