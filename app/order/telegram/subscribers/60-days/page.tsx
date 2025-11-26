"use client"

import { PageLayout } from "@/components/shared"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const QUANTITY_OPTIONS = [
    { value: 100, label: "100", price: "36 ₽" },
    { value: 500, label: "500", price: "180 ₽" },
    { value: 1000, label: "1 000", price: "360 ₽", popular: true },
    { value: 2500, label: "2 500", price: "900 ₽" },
    { value: 5000, label: "5 000", price: "1 800 ₽" },
    { value: 10000, label: "10 000", price: "3 600 ₽" },
]

export default function Subscribers60DaysPage() {
    const [selectedQuantity, setSelectedQuantity] = useState(1000)
    const [customQuantity, setCustomQuantity] = useState("")
    const [link, setLink] = useState("")

    const selectedOption = QUANTITY_OPTIONS.find(opt => opt.value === selectedQuantity)

    return (
        <PageLayout>
            <div className="max-w-2xl">
                <Link href="/order/telegram/subscribers" className="inline-flex items-center text-green-400 hover:text-green-300 mb-6">
                    <ChevronLeft className="w-5 h-5" />
                    <span>Назад</span>
                </Link>

                <h1 className="text-3xl font-bold mb-6">Подписчики | 60 дней</h1>

                <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 mb-6">
                    <div className="mb-6">
                        <label className="block text-white font-medium mb-3">Количество</label>
                        <div className="grid grid-cols-3 gap-3 mb-4">
                            {QUANTITY_OPTIONS.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => setSelectedQuantity(option.value)}
                                    className={`relative p-4 rounded-lg border-2 transition-all ${selectedQuantity === option.value
                                            ? "border-green-500 bg-green-500/10"
                                            : "border-slate-700 bg-slate-800 hover:border-slate-600"
                                        }`}
                                >
                                    {option.popular && (
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-0.5 rounded">
                                            Популярно
                                        </div>
                                    )}
                                    <div className="text-white font-bold text-lg">{option.label}</div>
                                    <div className="text-slate-400 text-sm">{option.price}</div>
                                </button>
                            ))}
                        </div>

                        <div className="mt-4">
                            <input
                                type="number"
                                value={customQuantity}
                                onChange={(e) => setCustomQuantity(e.target.value)}
                                placeholder="или введите свое количество"
                                min="10"
                                max="100000"
                                className="w-full bg-slate-800 text-white placeholder-slate-500 rounded-lg px-4 py-3 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <div className="flex justify-between text-sm text-slate-500 mt-2">
                                <span>мин: 10</span>
                                <span>макс: 100000</span>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-white font-medium mb-3">Ссылка</label>
                        <input
                            type="text"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            placeholder="t.me/hyperlike"
                            className="w-full bg-slate-800 text-white placeholder-slate-500 rounded-lg px-4 py-3 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 rounded border-slate-600 text-purple-600 focus:ring-2 focus:ring-purple-500" />
                            <span>Интервальная подача</span>
                            <span className="text-slate-500 text-sm">ℹ️</span>
                        </label>
                    </div>

                    <div className="flex items-center justify-between py-4 border-t border-slate-700">
                        <span className="text-white font-medium">Количество</span>
                        <span className="text-white">{customQuantity || selectedQuantity}</span>
                    </div>

                    <div className="flex items-center justify-between py-4 border-t border-slate-700 mb-6">
                        <span className="text-white font-medium">Цена</span>
                        <div className="flex items-center gap-2">
                            <span className="text-slate-500 line-through text-sm">380 ₽</span>
                            <span className="text-orange-500 font-bold text-xl">{selectedOption?.price || "0 ₽"}</span>
                        </div>
                    </div>

                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-medium text-lg transition-colors">
                        Купить сейчас
                    </button>
                </div>

                <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-6 text-sm text-slate-300 space-y-3">
                    <p className="flex items-start gap-2">
                        <span className="text-blue-400">💎</span>
                        <span>Подписчики на канал/группу. Средние качество</span>
                    </p>
                    <p className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Аккаунты, средний качества с аватарками, описанием</span>
                    </p>
                    <p className="flex items-start gap-2">
                        <span className="text-blue-400">ℹ️</span>
                        <span>Списания с качеством: https://t.me/+v1mGi/CUDOSR1</span>
                    </p>
                    <p className="flex items-start gap-2">
                        <span className="text-orange-400">⚠</span>
                        <span>Макс. блоки в сеть</span>
                    </p>
                    <p className="flex items-start gap-2">
                        <span className="text-blue-400">ℹ️</span>
                        <span>В поле "Ссылка" вводите ссылку на ваш канал/группу</span>
                    </p>
                    <p className="flex items-start gap-2">
                        <span className="text-orange-400">⚠</span>
                        <span>Время старта: до 1 час.</span>
                    </p>
                    <p className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Скорость: 3K/день</span>
                    </p>
                    <p className="flex items-start gap-2">
                        <span className="text-green-400">✓</span>
                        <span>Гарантия: 60 дней</span>
                    </p>
                    <p className="flex items-start gap-2">
                        <span className="text-red-400">✗</span>
                        <span>Телеканалы - Россия</span>
                    </p>
                    <p className="flex items-start gap-2">
                        <span className="text-red-400">✗</span>
                        <span>Нет списаний до дней</span>
                    </p>
                </div>
            </div>
        </PageLayout>
    )
}
