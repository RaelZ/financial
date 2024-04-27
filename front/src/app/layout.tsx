import DefaultLayout from "@/components/ecosystems/default-layout"
import { TChildren } from "@/models/types"
import type { Metadata } from "next"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "Financial",
  description: "A financial application",
}

export default function RootLayout({ children }: Readonly<TChildren>) {
  return <DefaultLayout>{children}</DefaultLayout>
}
