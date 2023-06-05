import 'styled-components'

import { lightTheme } from '../styles/themes/theme'

type ThemeType = typeof lightTheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
