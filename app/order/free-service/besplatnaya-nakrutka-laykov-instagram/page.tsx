"use client"

import { PageLayout } from "@/components/shared"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function InstagramLikesFree() {
    return (
        <PageLayout>
            <div>
                <Link href="/order/free-service" className="inline-flex items-center text-green-400 hover:text-green-300 mb-6">
                    <ChevronLeft className="w-5 h-5" />
                    <span>Назад</span>
                </Link>

                <h1 className="text-3xl font-bold mb-8">Instagram | Лайки бесплатно</h1>

                <div className="max-w-2xl">
                    <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 space-y-6">
                        <div>
                            <label className="block text-sm text-slate-400 mb-2">Ссылка</label>
                            <input
                                type="text"
                                placeholder="Ссылка на пост"
                                className="w-full bg-slate-800 text-white placeholder-slate-500 rounded-lg px-4 py-3 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-slate-400 mb-2">Количество</label>
                            <input
                                type="number"
                                value="20"
                                readOnly
                                className="w-full bg-slate-800 text-white rounded-lg px-4 py-3 border border-slate-700"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-slate-400 mb-2">Цена</label>
                            <div className="flex items-center gap-2">
                                <span className="bg-orange-500 text-white text-lg px-4 py-2 rounded font-semibold">
                                    Бесплатно
                                </span>
                            </div>
                        </div>

                        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-lg transition-colors">
                            Получить
                        </button>
                    </div>

                    <div className="mt-8 space-y-4 text-slate-300 text-sm">
                        <p>😊 Лайки в Instagram.</p>

                        <p>👉 В поле &quot;Ссылка&quot; вставьте ссылку на аккаунт</p>

                        <ul className="space-y-2">
                            <li>⏱ Время старта 0-10 мин</li>
                            <li>✅ Гарантия 60 дней</li>
                            <li>🌍 Россия</li>
                        </ul>

                        <div className="pt-4">
                            <p className="text-slate-400 text-xs">
                                Instagram, продукт компании Meta, которая признана экстремистской организацией в России
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}
