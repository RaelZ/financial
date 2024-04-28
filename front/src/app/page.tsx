import HomePage from "@/components/ecosystems/home-page"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Financial",
  description: "A financial application",
}

const Page: React.FC = () => {
  return <HomePage />
}

export default Page
