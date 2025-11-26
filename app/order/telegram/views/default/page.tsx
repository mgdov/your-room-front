"use client"

import { PageLayout } from "@/components/shared"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const QUANTITY_OPTIONS = [
    { value: 100, label: "100", price: "1.5 ₽" },
    { value: 500, label: "500", price: "7.6 ₽" },
    { value: 1000, label: "1 000", price: "15.2 ₽" },
    { value: 2500, label: "2 500", price: "38 ₽" },
    { value: 5000, label: "5 000", price: "76 ₽" },
    { value: 10000, label: "10 000", price: "152 ₽" },
]

export default function ViewsDefaultPage() {
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

                <h1 className="text-3xl font-bold mb-6">Просмотры</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Левая колонка - форма заказа */}
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
                                        placeholder="1000"
                                        min="10"
                                        max="100000"
                                        className="w-full bg-slate-800 text-white placeholder-slate-500 rounded-lg px-4 py-3 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                    <div className="flex justify-between text-sm text-slate-500 mt-2">
                                        <span>мин 10</span>
                                        <span>макс 100000</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-white font-medium mb-3">Ссылка</label>
                                <input
                                    type="text"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                    placeholder="ССЫЛКА НА ПОСТ ------→ t.me/hyperlike/ru/52"
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
                                    <span className="text-slate-500 line-through text-sm">16.2 ₽</span>
                                    <span className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium">-5%</span>
                                    <span className="text-white font-bold text-xl">15.2 ₽</span>
                                </div>
                            </div>

                            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-medium text-lg transition-colors">
                                Купить сейчас
                            </button>
                        </div>

                        <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-6 text-sm text-slate-300 space-y-3">
                            <p className="flex items-start gap-2">
                                <span className="text-purple-400">👁</span>
                                <span>Просмотры на 1 пост по ссылке</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="text-orange-400">⚠</span>
                                <span>В поле "Ссылка" вставьте ссылку на ваш пост</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="text-orange-400">⚠</span>
                                <span>Время старта - до 20 минут</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="text-green-400">✓</span>
                                <span>Скорость 500K/день</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="text-green-400">✓</span>
                                <span>Гарантия — ⚡</span>
                            </p>

                            <div className="pt-4 border-t border-slate-700">
                                <p className="text-blue-400 mb-2">ℹ️ Ссылки вида <span className="text-green-400">"telesco.pe/nakrutka_supp/52"</span> не принимаются, для накрутки на кружок замените <span className="text-green-400">"telesco.pe"</span> на <span className="text-green-400">"t.me"</span> →</p>
                                <p className="text-green-400">"t.me/nakrutka_supp/52"</p>
                            </div>

                            <div className="pt-4 border-t border-slate-700">
                                <p className="text-slate-400">Не забудьте следовать важным правилам:</p>
                                <ul className="space-y-1 mt-2 text-slate-400">
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
                            <div className="text-white font-bold text-lg">143</div>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="text-white">⭐</span>
                                    <span className="text-white">Избранное</span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                                </label>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                            <div className="flex items-center gap-2 text-green-400 mb-2">
                                <span>🌿</span>
                                <span className="font-medium">Живые</span>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                            <div className="flex items-center gap-2 text-orange-400">
                                <span>🚀</span>
                                <span className="font-medium">Скорость 500K в сутки</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}
