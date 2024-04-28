import { AuthContext } from "@/contexts/auth-context/auth.context"
import { MenuContext } from "@/contexts/menu-context/menu.context"
import { ThemeContext } from "@/contexts/theme-context/theme.context"
import { useContext } from "react"

export const useAuth = () => useContext(AuthContext)
export const useMenu = () => useContext(MenuContext)
export const useTheme = () => useContext(ThemeContext)
