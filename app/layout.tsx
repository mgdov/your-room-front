import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ProgressBarProvider } from "@/components/progress-bar-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hyperlike - Заказ услуг продвижения в соцсетях",
  description: "Продвижение Instagram, TikTok, YouTube — подписчики, лайки, просмотры. Реально. Безопасно. Быстро.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body className={`font-sans antialiased`}>
        <ProgressBarProvider />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
