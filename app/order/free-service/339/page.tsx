"use client"

import { PageLayout } from "@/components/shared"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function TelegramReactionsFree() {
    return (
        <PageLayout>
            <div>
                <Link href="/order/free-service" className="inline-flex items-center text-green-400 hover:text-green-300 mb-6">
                    <ChevronLeft className="w-5 h-5" />
                    <span>Назад</span>
                </Link>

                <h1 className="text-3xl font-bold mb-8">Telegram | Реакции бесплатно</h1>

                <div className="max-w-2xl">
                    <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="flex-1">
                                <label className="block text-sm text-slate-400 mb-2">ID услуги</label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        value="339"
                                        readOnly
                                        className="flex-1 bg-slate-800 text-white rounded-lg px-4 py-3 border border-slate-700"
                                    />
                                    <button className="p-3 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700">
                                        📋
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-sm text-slate-400">Избранное</span>
                                <button className="w-10 h-10 flex items-center justify-center bg-slate-800 border border-slate-700 rounded-lg">
                                    ⭐
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                            <span>✅ Гарантия</span>
                            <span>🌟 Живые</span>
                            <span>🚀 Скорость 10К в сутки</span>
                        </div>

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
                        <p>👍👎🔥❤️‍🔥😁 Положительная реакция + Просмотр на пост в Telegram.</p>

                        <ul className="space-y-2">
                            <li>⏱ Время старта 0-10 мин</li>
                            <li>🚀 Высокая скорость</li>
                            <li>🔄 Без списаний</li>
                        </ul>

                        <div className="pt-4 space-y-2">
                            <p>При заказе указывайте ссылку на ПОСТ в канале</p>
                            <p>- Откройте канал в телеграмм</p>
                            <p>- Найдите нужный пост в канале</p>
                            <p>- Нажмите на него правой кнопкой мыши</p>
                            <p>- Выберите &quot;Копировать ссылку на сообщение&quot;</p>

                            <p className="pt-2">⚠️ Ссылки вида &quot;telesco.pe/nakrutka_supp/52&quot; не принимаются, для накрутки на рузкок замените &quot;telesco.pe&quot; на &quot;t.me→&quot; → &quot;t.me/nakrutka_supp/52&quot;</p>

                            <p className="pt-2">Не забудьте следовать важным правилам:</p>
                            <ul className="space-y-1">
                                <li>- Канал должен быть открытым! 📢</li>
                                <li>- &quot;t.me/...&quot; и &quot;t.me/joinchat...&quot; НЕ принимаются! 🚫</li>
                                <li>- Данная реакция должна быть разрешена в канале! ✅</li>
                                <li>- Запрещённые тематики: наркотики, скам, пустые каналы 🚫</li>
                                <li>- Каналу долу должно быть больше 1 дня</li>
                            </ul>

                            <p className="pt-2">Если заказ отменён - вы не выполнили одно из условий. 😔</p>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}
