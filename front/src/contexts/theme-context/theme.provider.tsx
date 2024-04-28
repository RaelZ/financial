"use client"
import { EThemes } from "@/models/enums"
import { TChildren } from "@/models/types"
import React from "react"
import { ThemeContext } from "./theme.context"

export const ThemeProvider: React.FC<TChildren> = ({ children }) => {
  const [theme, setTheme] = React.useState<EThemes>(EThemes.LIGHT)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
