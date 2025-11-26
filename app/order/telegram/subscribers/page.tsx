"use client"

import { PageLayout } from "@/components/shared"
import { ChevronRight, ChevronLeft } from "lucide-react"
import Link from "next/link"

const SUBSCRIBER_SERVICES = [
    {
        icon: "🔥",
        title: "Подписчики | 30 дней",
        price: "246",
        oldPrice: "260",
        href: "/order/telegram/subscribers/30-days"
    },
    {
        icon: "💎",
        title: "Подписчики | 60 дней",
        price: "360",
        oldPrice: "380",
        href: "/order/telegram/subscribers/60-days"
    },
    {
        icon: "💗",
        title: "Подписчики | 90 дней",
        price: "522",
        oldPrice: "540",
        href: "/order/telegram/subscribers/90-days"
    },
    {
        icon: "😎",
        title: "Подписчики | Навсегда",
        price: "950",
        oldPrice: "1000",
        href: "/order/telegram/subscribers/forever"
    },
    {
        icon: "❤️",
        title: "Подписчики | Активные",
        price: "1767",
        oldPrice: "1880",
        href: "/order/telegram/subscribers/active"
    },
]

export default function TelegramSubscribersPage() {
    return (
        <PageLayout>
            <div>
                <Link href="/order/telegram" className="inline-flex items-center text-green-400 hover:text-green-300 mb-6">
                    <ChevronLeft className="w-5 h-5" />
                    <span>Назад</span>
                </Link>

                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold">Telegram | Подписчики</h1>
                    <select className="bg-slate-800 text-white border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option>Цена за 1000</option>
                    </select>
                </div>

                <div className="space-y-2">
                    {SUBSCRIBER_SERVICES.map((service, index) => (
                        <Link key={index} href={service.href}>
                            <div className="flex items-center justify-between p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors cursor-pointer group">
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl">{service.icon}</span>
                                    <span className="text-white font-medium">{service.title}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-slate-500 line-through text-sm">{service.oldPrice} ₽</span>
                                        <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded font-medium">
                                            {service.price} ₽
                                        </span>
                                    </div>
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
