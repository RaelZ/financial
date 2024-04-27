import Menu from "@/components/molecules/menu"
import { TChildren } from "@/models/types"
import React from "react"

const Layout: React.FC<TChildren> = ({ children }) => {
  return (
    <div className="flex">
      <Menu />
      {children}
    </div>
  )
}

export default Layout
