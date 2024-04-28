import DefaultLayout from "@/components/ecosystems/default-layout"
import { TChildren } from "@/models/types"
import "../styles/globals.css"

export default function RootLayout({ children }: Readonly<TChildren>) {
  return <DefaultLayout>{children}</DefaultLayout>
}
