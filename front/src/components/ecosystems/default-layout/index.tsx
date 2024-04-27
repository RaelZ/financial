import Layout from "@/components/organism/layout"
import { TChildren } from "@/models/types"
import { Inter } from "next/font/google"
import Head from "next/head"
import React from "react"

const inter = Inter({ subsets: ["latin"] })

const DefaultLayout: React.FC<TChildren> = ({ children }) => {
  return (
    <html lang="pt-br">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

export default DefaultLayout
