"use client"

import { PageLayout } from "@/components/shared"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function TelegramSubscribersFree() {
    return (
        <PageLayout>
            <div>
                <Link href="/order/free-service" className="inline-flex items-center text-green-400 hover:text-green-300 mb-6">
                    <ChevronLeft className="w-5 h-5" />
                    <span>Назад</span>
                </Link>

                <h1 className="text-3xl font-bold mb-8">Telegram | Подписчики бесплатно</h1>

                <div className="max-w-2xl">
                    <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 space-y-6">
                        <div>
                            <label className="block text-sm text-slate-400 mb-2">Ссылка</label>
                            <input
                                type="text"
                                placeholder="Ссылка на канал/группу"
                                className="w-full bg-slate-800 text-white placeholder-slate-500 rounded-lg px-4 py-3 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-slate-400 mb-2">Количество</label>
                            <input
                                type="number"
                                value="10"
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
                        <p className="font-semibold">Бесплатные подписчики в телеграмм.</p>

                        <p>👉 В поле &quot;Ссылка&quot; вставьте ссылку на ваш канал/группу</p>

                        <ul className="space-y-2">
                            <li>⏱ Время старта 0-1 час</li>
                            <li>🚀 Скорость 10к / день</li>
                            <li>🔄 Без списаний 30 дней</li>
                            <li>🌍 Геолокация - Россия</li>
                        </ul>

                        <div className="pt-4 space-y-2">
                            <p className="font-semibold">Не забудьте следовать важным правилам:</p>
                            <ul className="space-y-1">
                                <li>- Канал должен быть открытым! 📢</li>
                                <li>- &quot;t.me/...&quot; и &quot;t.me/joinchat...&quot; НЕ принимаются! 🚫</li>
                                <li>- Данная реакция должна быть разрешена в канале! ✅</li>
                                <li>- Запрещённые тематики: наркотики, скам, пустые каналы 🚫</li>
                                <li>- Каналу долу должно быть больше 1 дня</li>
                            </ul>

                            <p className="pt-2">Если заказ отменён - вы не выполнили одно из условий. 😔</p>
                            <p>Канал должен иметь минимум 5 записей, 3 дня от создания.</p>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}
