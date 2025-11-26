"use client"

import { PageLayout } from "@/components/shared"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const reactions = [
    {
        id: 1,
        emoji: "💚",
        name: "(👍🔥👏🎉💯😍) Автореакции | Подписка",
        oldPrice: "99 ₽",
        newPrice: "94 ₽",
        discount: "-5%",
        slug: "auto-reactions"
    },
    {
        id: 2,
        emoji: "🤍",
        name: "(👍🔥👏🎉💯😍) Положительная реакция + просмотр",
        oldPrice: "99 ₽",
        newPrice: "94 ₽",
        discount: "-5%",
        slug: "positive-reaction"
    },
    {
        id: 3,
        emoji: "👾",
        name: "Кастомные реакции | Читать описание",
        oldPrice: "99 ₽",
        newPrice: "94 ₽",
        discount: "-5%",
        slug: "custom-reactions"
    },
    {
        id: 4,
        emoji: "🎉",
        name: "Реакция + Просмотр",
        oldPrice: "99 ₽",
        newPrice: "94 ₽",
        discount: "-5%",
        slug: "party"
    },
    {
        id: 5,
        emoji: "🔥",
        name: "Реакция + Просмотр",
        oldPrice: "99 ₽",
        newPrice: "94 ₽",
        discount: "-5%",
        slug: "fire"
    },
    {
        id: 6,
        emoji: "👍",
        name: "Реакция + Просмотр",
        oldPrice: "99 ₽",
        newPrice: "94 ₽",
        discount: "-5%",
        slug: "like"
    },
    {
        id: 7,
        emoji: "😱",
        name: "Реакция + Просмотр",
        oldPrice: "99 ₽",
        newPrice: "94 ₽",
        discount: "-5%",
        slug: "shocked"
    },
    {
        id: 8,
        emoji: "😢",
        name: "Реакция + Просмотр",
        oldPrice: "99 ₽",
        newPrice: "94 ₽",
        discount: "-5%",
        slug: "cry"
    },
    {
        id: 9,
        emoji: "🤣",
        name: "Реакция + Просмотр",
        oldPrice: "99 ₽",
        newPrice: "94 ₽",
        discount: "-5%",
        slug: "laugh"
    },
    {
        id: 10,
        emoji: "❤️",
        name: "Реакция",
        oldPrice: "99 ₽",
        newPrice: "94 ₽",
        discount: "-5%",
        slug: "heart"
    },
    {
        id: 11,
        emoji: "💩",
        name: "Реакция",
        oldPrice: "99 ₽",
        newPrice: "94 ₽",
        discount: "-5%",
        slug: "poop"
    },
]

export default function TelegramReactionsPage() {
    return (
        <PageLayout>
            <div className="max-w-4xl">
                <Link href="/order/telegram" className="inline-flex items-center text-green-400 hover:text-green-300 mb-6">
                    <ChevronLeft className="w-5 h-5" />
                    <span>Назад</span>
                </Link>

                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold">Telegram | Реакции + Просмотр</h1>
                    <select className="bg-slate-800 text-white rounded-lg px-4 py-2 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option>Цена за 1000</option>
                    </select>
                </div>

                <div className="space-y-3">
                    {reactions.map((reaction) => (
                        <Link
                            key={reaction.id}
                            href={`/order/telegram/reactions/${reaction.slug}`}
                            className="flex items-center justify-between bg-slate-900/50 border border-slate-800 rounded-lg p-4 hover:border-slate-700 transition-colors group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 flex items-center justify-center text-2xl">
                                    {reaction.emoji}
                                </div>
                                <span className="text-white font-medium">{reaction.name}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-slate-500 line-through text-sm">{reaction.oldPrice}</span>
                                    <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">{reaction.discount}</span>
                                    <span className="text-white font-bold">{reaction.newPrice}</span>
                                </div>
                                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-green-400 transition-colors" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </PageLayout>
    )
}
