import type { Metadata } from "next"
import {
  LandingHero,
  LandingNavbar,
  LandingFooter,
} from "@/components/shared"
import { LandingContent } from "@/components/shared/landing-content"

export const metadata: Metadata = {
  title: "Hyperlike - Накрутка лайков и подписчиков во всех социальных сетях",
  description: "Купить накрутку лайков и подписчиков в Instagram, TikTok, Telegram, ВКонтакте и YouTube. Быстрое продвижение, живые подписчики, безопасные методы. Первые 10 подписчиков в подарок!",
  keywords: "накрутка подписчиков, накрутка лайков, купить подписчиков, продвижение в инстаграм, накрутка тикток, накрутка телеграм",
  openGraph: {
    title: "Hyperlike - Накрутка подписчиков и лайков",
    description: "Быстрое и безопасное продвижение в социальных сетях. Более 100 услуг по выгодным ценам.",
    type: "website",
    locale: "ru_RU",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="relative z-10 flex min-h-screen flex-col">
        <LandingNavbar />

        <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-16 pt-8 sm:px-6 sm:pt-12">
          <LandingHero />
          <LandingContent />
        </main>

        <LandingFooter />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_45%)]"
      />
    </div>
  )
}
