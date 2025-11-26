"use client"

import { PageLayout } from "@/components/shared"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function AutoSubscriptionPage() {
    const [link, setLink] = useState("")
    const [newPostsCount, setNewPostsCount] = useState("")
    const [min, setMin] = useState("")
    const [max, setMax] = useState("")

    return (
        <PageLayout>
            <div className="max-w-4xl">
                <Link href="/order/telegram/views" className="inline-flex items-center text-green-400 hover:text-green-300 mb-6">
                    <ChevronLeft className="w-5 h-5" />
                    <span>Назад</span>
                </Link>

                <h1 className="text-3xl font-bold mb-6">Автопросмотры | Подписка</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Левая колонка - форма заказа */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                            <div className="mb-6">
                                <label className="block text-white font-medium mb-3">Ссылка</label>
                                <input
                                    type="text"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                    placeholder="t.me/hyperlikeru"
                                    className="w-full bg-slate-800 text-white placeholder-slate-500 rounded-lg px-4 py-3 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-white font-medium mb-3">Количество новых постов</label>
                                <input
                                    type="number"
                                    value={newPostsCount}
                                    onChange={(e) => setNewPostsCount(e.target.value)}
                                    placeholder=""
                                    className="w-full bg-slate-800 text-white placeholder-slate-500 rounded-lg px-4 py-3 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <label className="block text-white font-medium mb-3">Мин</label>
                                    <input
                                        type="number"
                                        value={min}
                                        onChange={(e) => setMin(e.target.value)}
                                        placeholder=""
                                        className="w-full bg-slate-800 text-white placeholder-slate-500 rounded-lg px-4 py-3 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-white font-medium mb-3">Макс</label>
                                    <input
                                        type="number"
                                        value={max}
                                        onChange={(e) => setMax(e.target.value)}
                                        placeholder=""
                                        className="w-full bg-slate-800 text-white placeholder-slate-500 rounded-lg px-4 py-3 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <Link href="#" className="text-green-400 hover:text-green-300 text-sm">
                                    У меня есть промокод
                                </Link>
                            </div>

                            <div className="flex items-center justify-between py-4 border-t border-slate-700">
                                <span className="text-white font-medium">Количество</span>
                                <span className="text-white">0</span>
                            </div>

                            <div className="flex items-center justify-between py-4 border-t border-slate-700 mb-6">
                                <span className="text-white font-medium">Цена</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-white font-bold text-xl">0 ₽</span>
                                    <span className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium">~5%</span>
                                </div>
                            </div>

                            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-medium text-lg transition-colors">
                                Купить сейчас
                            </button>
                        </div>

                        <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-6 text-sm text-slate-300 space-y-3">
                            <p className="text-white font-medium">Подписка на просмотры в Telegram</p>

                            <p className="flex items-start gap-2">
                                <span className="text-purple-400">⏱</span>
                                <span>Время старта - до 20 минут</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="text-green-400">✓</span>
                                <span>Скорость: 500К/день</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="text-green-400">✓</span>
                                <span>Геолокация - ⚡</span>
                            </p>

                            <div className="pt-4 border-t border-slate-700 space-y-2">
                                <p className="flex items-start gap-2">
                                    <span className="text-orange-400">⚠️</span>
                                    <span>В поле "Ссылка" укажите ваш телеграмм канал: <span className="text-green-400">t.me/hyperlikeru</span></span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <span className="text-orange-400">⚠️</span>
                                    <span>В поле "Количество новых постов" укажите количество будущих публикаций на выбранное количество просмотров</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <span className="text-orange-400">⚠️</span>
                                    <span>В поле "Мин" и "Макс" укажите минимальное количество просмотров и максимальное для накрутки. Количество просмотров будет выбрано случайно.</span>
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-700">
                                <p className="text-slate-400 mb-2">Не забудьте следовать важным правилам:</p>
                                <ul className="space-y-1 text-slate-400">
                                    <li>- Канал должен быть открытым! 📢</li>
                                    <li>- <span className="line-through">t.me/+...</span> и <span className="line-through">t.me/joinchat...</span> НЕ принимаются! 🚫</li>
                                    <li>- Запрещённые тематики: наркотики, скам, пустые каналы 🛑</li>
                                </ul>
                            </div>

                            <div className="pt-4 border-t border-slate-700">
                                <p className="text-slate-400">Если заказ отменён - мы не выполнили одно из условий. 🤔</p>
                            </div>
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
                            <div className="text-white font-bold text-lg">258</div>
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
                            <div className="flex items-center gap-2 text-slate-400 mb-2">
                                <span>🚫</span>
                                <span className="font-medium">Без списаний</span>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                            <div className="flex items-center gap-2 text-blue-400 mb-2">
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
                                <span className="font-medium">Скорость 40K в сутки</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}
