import LoginPage from "@/components/ecosystems/login-page"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Financial - Login",
  description: "A financial application",
}

const Page: React.FC = () => <LoginPage />

export default Page
