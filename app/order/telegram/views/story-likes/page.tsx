"use client"

import { PageLayout } from "@/components/shared"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const QUANTITY_OPTIONS = [
    { value: 100, label: "100", price: "20 ₽", emoji: "👍" },
    { value: 500, label: "500", price: "100 ₽", emoji: "👍" },
    { value: 1000, label: "1 000", price: "200 ₽", emoji: "👍" },
    { value: 2500, label: "2 500", price: "496 ₽", emoji: "👍" },
    { value: 5000, label: "5 000", price: "998 ₽", emoji: "👍" },
    { value: 10000, label: "10 000", price: "1995 ₽", emoji: "👍" },
]

export default function StoryLikesPage() {
    const [selectedQuantity, setSelectedQuantity] = useState(1000)
    const [customQuantity, setCustomQuantity] = useState("")
    const [link, setLink] = useState("")

    const selectedOption = QUANTITY_OPTIONS.find(opt => opt.value === selectedQuantity)
    const finalQuantity = customQuantity || selectedQuantity

    return (
        <PageLayout>
            <div className="max-w-4xl">
                <Link href="/order/telegram/views" className="inline-flex items-center text-green-400 hover:text-green-300 mb-6">
                    <ChevronLeft className="w-5 h-5" />
                    <span>Назад</span>
                </Link>

                <h1 className="text-3xl font-bold mb-6">Лайки на Story</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                            <div className="mb-6">
                                <label className="block text-white font-medium mb-3">Количество</label>
                                <div className="grid grid-cols-3 gap-3 mb-4">
                                    {QUANTITY_OPTIONS.map((option) => (
                                        <button
                                            key={option.value}
                                            onClick={() => setSelectedQuantity(option.value)}
                                            className={`p-4 rounded-lg border-2 transition-all ${selectedQuantity === option.value
                                                    ? "border-green-500 bg-green-500/10"
                                                    : "border-slate-700 bg-slate-800 hover:border-slate-600"
                                                }`}
                                        >
                                            <div className="text-2xl mb-2">{option.emoji}</div>
                                            <div className="text-white font-bold">{option.label}</div>
                                            <div className="text-slate-400 text-sm">{option.price}</div>
                                        </button>
                                    ))}
                                </div>
                                <input
                                    type="number"
                                    value={customQuantity}
                                    onChange={(e) => setCustomQuantity(e.target.value)}
                                    placeholder="1000"
                                    min="10"
                                    max="300000"
                                    className="w-full bg-slate-800 text-white placeholder-slate-500 rounded-lg px-4 py-3 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                <div className="flex justify-between text-sm text-slate-500 mt-2">
                                    <span className="text-green-400">мин 10</span>
                                    <span className="text-green-400">макс 300000</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-white font-medium mb-3">Ссылка</label>
                                <input
                                    type="text"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                    placeholder="Ссылка на сторис"
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

                            <div className="mb-6">
                                <Link href="#" className="text-green-400 hover:text-green-300 text-sm">
                                    У меня есть промокод
                                </Link>
                            </div>

                            <div className="flex items-center justify-between py-4 border-t border-slate-700">
                                <span className="text-white font-medium">Количество</span>
                                <span className="text-white">{finalQuantity}</span>
                            </div>

                            <div className="flex items-center justify-between py-4 border-t border-slate-700 mb-6">
                                <span className="text-white font-medium">Цена</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-white font-bold text-xl">200 ₽</span>
                                    <span className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium">-5%</span>
                                    <span className="text-slate-500 line-through text-sm">210 ₽</span>
                                </div>
                            </div>

                            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-medium text-lg transition-colors">
                                Купить сейчас
                            </button>
                        </div>

                        <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-6 text-sm text-slate-300 space-y-3">
                            <p className="text-white font-semibold">🔥 Лайки на TG Story</p>
                            <p>Работает как на стори аккаунтов, так и стори каналов</p>

                            <p className="text-orange-400">👉 В поле "Ссылка" вставьте ссылку на вашу стори</p>

                            <p>⏱ Время старта - до 20 минут</p>
                            <p>⚡️ Скорость 200К/день</p>
                            <p>🌍 Геолокация - МИР</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-slate-400 text-sm">ID услуги</span>
                                <button className="text-purple-400 hover:text-purple-300">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="text-white font-bold text-lg">231</div>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="text-white">⭐</span>
                                    <span className="text-white">Избранное</span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                                </label>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                            <div className="flex items-center gap-2 text-blue-400">
                                <span>✓</span>
                                <span className="font-medium">Гарантия</span>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                            <div className="flex items-center gap-2 text-purple-400">
                                <span>💎</span>
                                <span className="font-medium">Микс качество</span>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                            <div className="flex items-center gap-2 text-orange-400">
                                <span>🚀</span>
                                <span className="font-medium">Скорость 200K в сутки</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}
