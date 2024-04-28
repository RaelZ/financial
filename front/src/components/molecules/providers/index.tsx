import { MenuProvider } from "@/contexts"
import { AuthProvider } from "@/contexts/auth-context/auth.provider"
import { ThemeProvider } from "@/contexts/theme-context/theme.provider"
import { TChildren } from "@/models/types"
import React from "react"

const Providers: React.FC<TChildren> = ({ children }) => {
  const providers = [AuthProvider, ThemeProvider, MenuProvider]

  return providers.reduce(
    (acc, Provider) => <Provider>{acc}</Provider>,
    children
  )
}

export default Providers
