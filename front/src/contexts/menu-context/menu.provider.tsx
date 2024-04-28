"use client"
import { TChildren } from "@/models/types"
import { usePathname } from "next/navigation"
import React from "react"
import { MenuContext } from "./menu.context"

export const MenuProvider: React.FC<TChildren> = ({ children }) => {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)

  const handleDisablePaths = () => {
    const disablePaths = ["/login"]

    return disablePaths.some((path) => pathname.includes(path))
  }

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <MenuContext.Provider
      value={{ isMobile, setIsMobile, isOpen, setIsOpen, handleDisablePaths }}
    >
      {children}
    </MenuContext.Provider>
  )
}
