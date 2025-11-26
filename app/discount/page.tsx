"use client"

import { PageLayout } from "@/components/shared"

const discountTiers = [
    {
        id: 1,
        name: "Бронза",
        discount: "5%",
        amount: "0 ₽",
        icon: "🥉",
        color: "orange",
        current: true
    },
    {
        id: 2,
        name: "Серебро",
        discount: "7%",
        amount: "От 5000 ₽",
        icon: "🥈",
        color: "slate"
    },
    {
        id: 3,
        name: "Золото",
        discount: "10%",
        amount: "От 10000 ₽",
        icon: "🥇",
        color: "yellow"
    },
    {
        id: 4,
        name: "Бриллиант",
        discount: "15%",
        amount: "От 30000 ₽",
        icon: "💎",
        color: "blue"
    }
]

export default function DiscountPage() {
    return (
        <PageLayout>
            <div className="max-w-4xl">
                <h1 className="text-3xl font-bold mb-8">Скидка</h1>

                <div className="space-y-4">
                    {discountTiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={`bg-slate-900/50 border ${tier.current ? "border-orange-500" : "border-slate-800"
                                } rounded-lg p-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-800 rounded-full flex items-center justify-center text-3xl sm:text-4xl">
                                    {tier.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{tier.name}</h3>
                                    <p className={`text-sm sm:text-base ${tier.id === 1 ? "text-orange-400" :
                                        tier.id === 2 ? "text-slate-400" :
                                            tier.id === 3 ? "text-yellow-400" :
                                                "text-blue-400"
                                        }`}>
                                        Скидка {tier.discount}
                                    </p>
                                </div>
                            </div>

                            <div className="text-center sm:text-right">
                                {tier.current ? (
                                    <div className="inline-flex items-center gap-1.5 bg-orange-500 text-white px-3 py-1.5 text-sm rounded-full font-medium sm:rounded-lg sm:px-4 sm:py-2 sm:text-base">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Ваш статус
                                    </div>
                                ) : (
                                    <p className="text-white text-sm sm:text-base font-medium">{tier.amount}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    )
}
