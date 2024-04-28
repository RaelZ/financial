import { EThemes } from "../enums"

export type TThemeContext = {
  theme: EThemes
  setTheme: (arg: EThemes) => void
}
