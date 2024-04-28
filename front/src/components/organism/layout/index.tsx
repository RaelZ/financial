"use client"
import Menu from "@/components/molecules/menu"
import MobileMenu from "@/components/molecules/mobile-menu"
import { useMenu } from "@/hooks/contexts"
import { TChildren } from "@/models/types"
import React from "react"

const Layout: React.FC<TChildren> = ({ children }) => {
  const { handleDisablePaths, isMobile } = useMenu()
  const avaibleMenu = handleDisablePaths()

  return (
    <div className="flex min-w-full min-h-screen">
      {!avaibleMenu && <div>{isMobile ? <MobileMenu /> : <Menu />}</div>}
      {children}
    </div>
  )
}

export default Layout
