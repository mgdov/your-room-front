"use client"

import { PageLayout } from "@/components/shared"
import { ChevronRight, ChevronLeft } from "lucide-react"
import Link from "next/link"

const VIEW_SERVICES = [
    {
        icon: "👁",
        title: "Просмотры",
        price: "15.2",
        oldPrice: "16.2",
        href: "/order/telegram/views/default"
    },
    {
        icon: "👁",
        title: "Автопросмотры | Подписка",
        price: "15.2",
        oldPrice: "16.2",
        href: "/order/telegram/views/auto-subscription"
    },
    {
        icon: "🎬",
        title: "Просмотры лесенкой",
        price: "51",
        oldPrice: "64",
        href: "/order/telegram/views/song"
    },
    {
        icon: "🎬",
        title: "Просмотры лесенкой | Подписка",
        price: "51",
        oldPrice: "64",
        href: "/order/telegram/views/song-subscription"
    },
    {
        icon: "🔒",
        title: "Просмотры для закрытых каналов | Читать описание",
        price: "171",
        oldPrice: "18",
        href: "/order/telegram/views/private"
    },
    {
        icon: "👁",
        title: "Просмотры на 10 последних постов в канале",
        price: "85",
        oldPrice: "80",
        href: "/order/telegram/views/last-10"
    },
    {
        icon: "👁",
        title: "Просмотры на 30 последних постов в канале",
        price: "113",
        oldPrice: "110",
        href: "/order/telegram/views/last-30"
    },
    {
        icon: "👁",
        title: "Просмотры на 50 последних постов в канале",
        price: "180",
        oldPrice: "180",
        href: "/order/telegram/views/last-50"
    },
    {
        icon: "😍",
        title: "Просмотры Story",
        price: "66",
        oldPrice: "60",
        href: "/order/telegram/views/story"
    },
    {
        icon: "👍",
        title: "Лайки на Story",
        price: "200",
        oldPrice: "210",
        href: "/order/telegram/views/story-likes"
    },
]

export default function TelegramViewsPage() {
    return (
        <PageLayout>
            <div>
                <Link href="/order/telegram" className="inline-flex items-center text-green-400 hover:text-green-300 mb-6">
                    <ChevronLeft className="w-5 h-5" />
                    <span>Назад</span>
                </Link>

                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold">Telegram | Просмотры</h1>
                    <select className="bg-slate-800 text-white border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option>Цена за 1000</option>
                    </select>
                </div>

                <div className="space-y-2">
                    {VIEW_SERVICES.map((service, index) => (
                        <Link key={index} href={service.href}>
                            <div className="flex items-center justify-between p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors cursor-pointer group">
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl">{service.icon}</span>
                                    <span className="text-white font-medium">{service.title}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    {service.price && (
                                        <div className="flex items-center gap-2">
                                            {service.oldPrice && (
                                                <span className="text-slate-500 line-through text-sm">{service.oldPrice} ₽</span>
                                            )}
                                            <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded font-medium">
                                                {service.price} ₽
                                            </span>
                                        </div>
                                    )}
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
