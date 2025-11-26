"use client"

import { useParams } from "next/navigation"
import { Search, Clock } from "lucide-react"
import { Sidebar, Footer } from "@/components/shared"
import { Button } from "@/components/ui/button"

export default function ServicePage() {
  const params = useParams()
  const service = params.service as string

  const serviceNames: Record<string, string> = {
    free: "Бесплатные услуги",
    telegram: "Telegram",
    instagram: "Instagram",
    "telegram-premium": "Telegram Premium",
    tiktok: "TikTok",
    vk: "VK",
    youtube: "YouTube",
    rutube: "RuTube",
    yandex: "Yandex",
    max: "MAX",
    likee: "Likee",
    soundcloud: "Soundcloud",
    odnoklassniki: "Одноклассники",
    twitter: "Twitter",
  }

  const serviceName = serviceNames[service] || service

  return (
    <div className="flex min-h-screen text-white" style={{ backgroundColor: 'rgb(23, 31, 38)' }}>
      <Sidebar />

      <div className="flex-1 overflow-auto flex flex-col">
        {/* Header */}
        <div className="border-b border-slate-800 bg-slate-900 p-6 sticky top-0 z-10">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                placeholder="Поиск"
                className="w-full bg-slate-800 text-white placeholder-slate-400 rounded-lg pl-10 pr-4 py-2 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
              <Clock className="w-4 h-4 text-slate-400" />
              <span className="text-sm font-mono">03:36:31</span>
              <span className="ml-2 text-xs bg-purple-600 px-2 py-1 rounded">10%</span>
            </div>
          </div>
        </div>????

        {/* Service Content */}
        <div className="p-6 flex-1">
          <h1 className="text-4xl font-bold mb-8">{serviceName}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Service Cards */}
            {[
              { title: "Подписчики", price: "5$" },
              { title: "Лайки", price: "2$" },
              { title: "Просмотры", price: "1$" },
              { title: "Комментарии", price: "3$" },
              { title: "Репосты", price: "2.5$" },
              { title: "Премиум подписчики", price: "10$" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <div className="text-2xl font-bold text-purple-400 mb-4">{item.price}</div>
                <input
                  type="number"
                  placeholder="Количество"
                  min="0"
                  className="w-full bg-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-2 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
                />
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Заказать</Button>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
