"use client"

import { PageLayout } from "@/components/shared"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ViewsSongPage() {
    const [quantity, setQuantity] = useState("1000")
    const [link, setLink] = useState("")

    return (
        <PageLayout>
            <div className="max-w-4xl">
                <Link href="/order/telegram/views" className="inline-flex items-center text-green-400 hover:text-green-300 mb-6">
                    <ChevronLeft className="w-5 h-5" />
                    <span>Назад</span>
                </Link>

                <h1 className="text-3xl font-bold mb-6">Просмотры лесенкой</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Левая колонка - форма заказа */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                            <div className="mb-6">
                                <label className="block text-white font-medium mb-3">Количество</label>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    min="500"
                                    max="100000"
                                    className="w-full bg-slate-800 text-white placeholder-slate-500 rounded-lg px-4 py-3 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                <div className="flex justify-between text-sm text-slate-500 mt-2">
                                    <span className="text-green-400">мин 500</span>
                                    <span className="text-green-400">макс 100000</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-white font-medium mb-3">Ссылка</label>
                                <input
                                    type="text"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                    placeholder="Ссылка на пост"
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
                                <span className="text-white">{quantity}</span>
                            </div>

                            <div className="flex items-center justify-between py-4 border-t border-slate-700 mb-6">
                                <span className="text-white font-medium">Цена</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-white font-bold text-xl">51 ₽</span>
                                    <span className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium">-20%</span>
                                    <span className="text-slate-500 line-through text-sm">~64 ₽</span>
                                </div>
                            </div>

                            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-medium text-lg transition-colors">
                                Купить сейчас
                            </button>
                        </div>

                        <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-6 text-sm text-slate-300 space-y-3">
                            <p className="text-white font-medium">Просмотры лесенкой для постов телеграмм:</p>

                            <p className="mt-4">1-е сутки (60% от общего числа просмотров)</p>
                            <p className="text-purple-400">⏰ Дневные часы (активный трафик):</p>

                            <div className="ml-4 space-y-1">
                                <p>1-я час 🌅 ~24%</p>
                                <p>2-я час 🌄 ~10%</p>
                                <p>3-я час ⭐ ~6%</p>
                                <p>4-я час 🌟 ~5%</p>
                                <p>5-я час 🌤 ~3%</p>
                                <p>6-я час ⛅ ~2%</p>
                                <p>7-14-я часы (по 0.4%/час) – 5.6%</p>
                            </div>

                            <p className="mt-4 text-yellow-400">🌙 Ночные часы (1:00–8:00, 15–20-я часы):</p>
                            <p className="ml-4">50–100 просмотров в час</p>

                            <p className="mt-4 text-orange-400">🌆 Вечерние часы (21–24-я часы):</p>
                            <p className="ml-4">По 0.4%/час – 3.2%</p>

                            <div className="mt-4 space-y-1">
                                <p>2-е сутки (14.4%)</p>
                                <p>0–12 часы (по 0.7%/час) – 8.4%</p>
                                <p>13–24 часы (по 0.5%/час) – 6%</p>
                            </div>

                            <p className="mt-4">3-я сутки (9.6%)</p>
                            <p className="ml-4">Равномерное распределение</p>

                            <p className="mt-4">4-е сутки (7.2%)</p>
                            <p className="ml-4">Равномерное распределение</p>

                            <p className="mt-4">5-е сутки (5%)</p>
                            <p className="ml-4">Равномерное распределение</p>

                            <p className="mt-4">6-е сутки</p>
                            <p className="ml-4">50–100 просмотров в час (стабильный минимальный трафик)</p>

                            <p className="mt-4 text-green-400">💡 Итого:</p>
                            <p className="ml-4">Пик активности – первые сутки (особенно 1–6 часов).</p>
                            <p className="ml-4">Далее плавное снижение с равномерным распределением.</p>
                            <p className="ml-4">Ночью (1:00–8:00) или в 6-е сутки – минимальное, но стабильный трафик.</p>
                        </div>
                    </div>

                    {/* Правая колонка - информация */}
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
                            <div className="text-white font-bold text-lg">332</div>
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
                            <div className="flex items-center gap-2 text-green-400">
                                <span>🌿</span>
                                <span className="font-medium">Живые</span>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                            <div className="flex items-center gap-2 text-orange-400">
                                <span>🚀</span>
                                <span className="font-medium">Скорость 10K в сутки</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}
