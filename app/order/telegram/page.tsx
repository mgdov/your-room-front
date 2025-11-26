"use client"

import { PageLayout } from "@/components/shared"
import { ChevronRight, ChevronLeft } from "lucide-react"
import Link from "next/link"

const TELEGRAM_CATEGORIES = [
    {
        icon: "👥",
        title: "Telegram | Подписчики",
        href: "/order/telegram/subscribers"
    },
    {
        icon: "👁",
        title: "Telegram | Просмотры",
        href: "/order/telegram/views"
    },
    {
        icon: "❤️",
        title: "Telegram | Реакции + Просмотр",
        href: "/order/telegram/reactions"
    },
    {
        icon: "🔵",
        title: "Telegram | Голоса в опросы",
        href: "/order/telegram/polls"
    },
    {
        icon: "🚀",
        title: "Telegram | BOOST Канала",
        href: "/order/telegram/boost"
    },
    {
        icon: "📱",
        title: "Telegram | Рефералы для ботов",
        href: "/order/telegram/referrals"
    },
    {
        icon: "💬",
        title: "Telegram | Комментарии",
        href: "/order/telegram/comments"
    },
    {
        icon: "🤖",
        title: "Telegram | Продвижение ботов | Bot START",
        href: "/order/telegram/bot-promotion"
    },
    {
        icon: "📊",
        title: "Telegram | Просмотры со статистикой",
        href: "/order/telegram/views-stats"
    },
    {
        icon: "⭐",
        title: "Telegram | Stars",
        href: "/order/telegram/stars"
    },
]

export default function TelegramCategoriesPage() {
    return (
        <PageLayout>
            <div>
                <Link href="/" className="inline-flex items-center text-green-400 hover:text-green-300 mb-6">
                    <ChevronLeft className="w-5 h-5" />
                    <span>Назад</span>
                </Link>

                <h1 className="text-3xl font-bold mb-6">Telegram</h1>

                <div className="space-y-2">
                    {TELEGRAM_CATEGORIES.map((category, index) => (
                        <Link key={index} href={category.href}>
                            <div className="flex items-center justify-between p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors cursor-pointer group">
                                <div className="flex items-center gap-4">
                                    <span className="text-2xl">{category.icon}</span>
                                    <span className="text-white font-medium">{category.title}</span>
                                </div>
                                <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-slate-400 transition-colors" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </PageLayout>
    )
}
