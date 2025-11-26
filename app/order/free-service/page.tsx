"use client"

import { PageLayout } from "@/components/shared"
import { ChevronRight, ChevronLeft } from "lucide-react"
import Link from "next/link"

const FREE_SERVICES = [
    { title: "Telegram | Подписчики бесплатно", price: "Бесплатно", slug: "besplatnaya-nakrutka-podpischikov-telegram", icon: "https://cdn.hyperlike.ru/cs1/networks/telegram.svg" },
    { title: "Telegram | Реакции бесплатно", price: "Бесплатно", slug: "339", icon: "https://cdn.hyperlike.ru/cs1/networks/telegram.svg" },
    { title: "Instagram | Лайки бесплатно", price: "Бесплатно", slug: "besplatnaya-nakrutka-laykov-instagram", icon: "https://cdn.hyperlike.ru/cs1/networks/instagram.svg" },
    { title: "TikTok | Просмотры бесплатно", price: "Бесплатно", slug: "besplatnaya-nakrutka-prosmotrov-tiktok", icon: "https://cdn.hyperlike.ru/cs1/networks/tiktok.svg" },
]

export default function FreeServicePage() {
    return (
        <PageLayout>
            <div>
                <Link href="/" className="inline-flex items-center text-green-400 hover:text-green-300 mb-6">
                    <ChevronLeft className="w-5 h-5" />
                    <span>Назад</span>
                </Link>

                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold">Бесплатные Услуги</h1>
                    <select className="bg-slate-800 text-white border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option>Цена за 1000</option>
                    </select>
                </div>

                <div className="space-y-2">
                    {FREE_SERVICES.map((service, index) => (
                        <Link key={index} href={`/order/free-service/${service.slug}`}>
                            <div className="flex items-center justify-between p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors cursor-pointer group">
                                <div className="flex items-center gap-4">
                                    <img src={service.icon} alt={service.title} className="w-8 h-8 object-contain" />
                                    <span className="text-white font-medium">{service.title}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded font-medium">
                                        {service.price}
                                    </span>
                                    <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-slate-400 transition-colors" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </PageLayout>
    )
}
