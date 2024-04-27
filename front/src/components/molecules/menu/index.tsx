"use client"
import Button from "@/components/atoms/button"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"

const Menu: React.FC = () => {
  const { push } = useRouter()

  return (
    <div className="min-h-screen min-w-fit p-4 bg-gray-500">
      <div className="flex items-end gap-4">
        <Image src="/assets/favicon.svg" alt="Logo" width={48} height={48} />
        <span className="text-5xl">Financial</span>
      </div>
      <div className="mt-4">
        <Button text="Home" className="w-full" onClick={() => push("/login")} />
      </div>
    </div>
  )
}

export default Menu
