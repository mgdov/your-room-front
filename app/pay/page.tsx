"use client"

import { PageLayout } from "@/components/shared"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const paymentMethods = [
    {
        id: 1,
        name: "SberPay",
        icon: "https://cdn.hyperlike.ru/cs1/project_images/9gEAYQfFt7tLs6dsaxDOAskvJYDy5pYn88tCnDnw.png",
        bonus: "🎁 5% бонус при пополнении от 1000 ₽"
    },
    {
        id: 2,
        name: "Система быстрых платежей / СБП",
        icon: "https://cdn.hyperlike.ru/cs1/project_images/nT9jlmMGfBxbHfQitLO9CM0UMf2YTy2LU91zi6i0.png",
        bonus: "🎁 5% бонус при пополнении от 1000 ₽"
    },
    {
        id: 3,
        name: "Tinkoff Pay",
        icon: "https://hyperlike.ru/storage/payment_systems/KJ6jGZgLkxphpy33muXoxFykkH4mM0qBqd8WusIU.png",
        bonus: "🎁 5% бонус при пополнении от 1000 ₽"
    },
    {
        id: 4,
        name: "YandexPay",
        icon: "https://cdn.hyperlike.ru/cs1/project_images/c2dcK4fz9zPODSlzfJfp9E5O5PAuqCdW3y4i4nYl.png",
        bonus: "🎁 5% бонус при пополнении от 1000 ₽"
    },
    {
        id: 5,
        name: "Криптовалюты - BTC, USDT и тд",
        icon: "https://cdn.hyperlike.ru/cs1/project_images/CJGr7cKQd487kZfuP0EmEzZfkFxBuB8qglQIyvsX.png",
        bonus: ""
    }
]

export default function PaymentPage() {
    return (
        <PageLayout>
            <div className="max-w-3xl">
                <h1 className="text-3xl font-bold mb-8">Выберите платежную систему</h1>

                <div className="space-y-3">
                    {paymentMethods.map((method) => (
                        <Link
                            key={method.id}
                            href="#"
                            className="block bg-slate-900/50 border border-slate-800 rounded-lg p-4 hover:border-slate-700 transition-colors group"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center overflow-hidden">
                                        <img src={method.icon} alt={method.name} className="w-full h-full object-contain p-1" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">{method.name}</h3>
                                        {method.bonus && (
                                            <div className="inline-flex items-center gap-1 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-md text-sm">
                                                {method.bonus}
                                            </div>
                                        )}
                                    </div>
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
