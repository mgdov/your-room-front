"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { ChevronLeft, Copy } from "lucide-react"
import { PageLayout } from "@/components/shared"
import { useServicePackage } from "@/hooks/use-service-package"
import { formatCurrency } from "@/lib/utils"

export default function CheckoutPage() {
    const params = useParams()
    const router = useRouter()
    const networkId = params.networkId as string
    const categorySlug = params.categorySlug as string
    const packageId = params.packageId as string

    const { data: packageData, isLoading, error } = useServicePackage(networkId, categorySlug, packageId)

    const [quantity, setQuantity] = useState(1000)
    const [targetUrl, setTargetUrl] = useState("")
    const [intervalDelivery, setIntervalDelivery] = useState(false)
    const [promoCode, setPromoCode] = useState("")
    const [isFavorite, setIsFavorite] = useState(false)

    const handleQuantityChange = (value: string) => {
        const num = parseInt(value) || 0
        if (packageData) {
            const min = packageData.minimum || 1
            const max = packageData.maximum || 1000000
            setQuantity(Math.min(Math.max(num, min), max))
        } else {
            setQuantity(num)
        }
    }

    const selectPreset = (preset: number) => {
        setQuantity(preset)
    }

    const totalPrice = packageData ? (packageData.price * quantity) / 1000 : 0
    const originalTotalPrice = packageData?.originalPrice ? (packageData.originalPrice * quantity) / 1000 : totalPrice

    const copyServiceId = () => {
        if (packageData?.serviceId) {
            navigator.clipboard.writeText(packageData.serviceId)
        }
    }

    return (
        <PageLayout
            maxWidth="full"
            containerClassName="px-4 py-6 md:px-6"
            headerProps={{
                showSearch: false,
                showActions: true,
                balance: 0,
                currency: "RUB",
            }}
            contentClassName="space-y-6 max-w-5xl"
        >
            <div className="flex items-center gap-3">
                <button
                    onClick={() => router.back()}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 transition-colors hover:border-slate-700 hover:text-white"
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <div>
                    <h1 className="text-3xl font-semibold text-white">
                        {isLoading ? "Загрузка..." : packageData?.name || "Оформление заказа"}
                    </h1>
                </div>
            </div>

            {error && (
                <div className="rounded-lg border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-200">
                    {error}
                </div>
            )}

            {isLoading ? (
                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/10 p-6 space-y-4">
                    <div className="h-8 w-1/3 bg-slate-800/60 rounded animate-pulse" />
                    <div className="h-32 bg-slate-800/60 rounded animate-pulse" />
                    <div className="h-20 bg-slate-800/60 rounded animate-pulse" />
                </div>
            ) : packageData ? (
                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Left Column - Order Form */}
                    <div className="space-y-6">
                        {/* Quantity Selection */}
                        <div className="rounded-2xl border border-slate-800/70 bg-slate-900/10 p-6">
                            <h3 className="mb-4 text-lg font-semibold text-white">Количество</h3>
                            <div className="grid grid-cols-3 gap-3 mb-4">
                                {[100, 500, 1000, 2500, 5000, 10000].map((preset) => (
                                    <button
                                        key={preset}
                                        onClick={() => selectPreset(preset)}
                                        className={`flex flex-col items-center justify-center rounded-lg border p-3 transition-colors ${quantity === preset
                                            ? "border-green-500 bg-green-500/10"
                                            : "border-slate-800 bg-slate-900/60 hover:border-slate-700"
                                            }`}
                                    >
                                        <span className="text-lg font-semibold text-white">{preset.toLocaleString()}</span>
                                        <span className="text-xs text-slate-400">
                                            {formatCurrency((packageData.price * preset) / 1000, packageData.currency)}
                                        </span>
                                    </button>
                                ))}
                            </div>
                            <input
                                type="number"
                                value={quantity}
                                onChange={(e) => handleQuantityChange(e.target.value)}
                                className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-lg font-semibold text-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                                min={packageData.minimum || 1}
                                max={packageData.maximum || 1000000}
                            />
                            <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                                <span>мин {packageData.minimum || 10}</span>
                                <span>макс {(packageData.maximum || 500000).toLocaleString()}</span>
                            </div>
                        </div>

                        {/* Target URL */}
                        <div className="rounded-2xl border border-slate-800/70 bg-slate-900/10 p-6">
                            <h3 className="mb-4 text-lg font-semibold text-white">Ссылка</h3>
                            <input
                                type="text"
                                value={targetUrl}
                                onChange={(e) => setTargetUrl(e.target.value)}
                                placeholder="t.me/hyperlikeru"
                                className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                            />
                        </div>

                        {/* Interval Delivery */}
                        <div className="rounded-2xl border border-slate-800/70 bg-slate-900/10 p-6">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={intervalDelivery}
                                    onChange={(e) => setIntervalDelivery(e.target.checked)}
                                    className="h-5 w-5 rounded border-slate-800 bg-slate-900/60 text-purple-500 focus:ring-2 focus:ring-purple-500/50"
                                />
                                <div>
                                    <span className="font-medium text-white">Интервальная подача</span>
                                    <span className="ml-2 text-xs text-slate-400">?</span>
                                </div>
                            </label>
                        </div>

                        {/* Promo Code */}
                        <button
                            onClick={() => { }}
                            className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-left text-sm font-medium text-green-400 transition-colors hover:border-slate-700"
                        >
                            У меня есть промокод
                        </button>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="space-y-6">
                        {/* Service ID */}
                        {packageData.serviceId && (
                            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/10 p-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-slate-400">ID услуги</span>
                                    <button
                                        onClick={copyServiceId}
                                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-green-400 transition-colors"
                                    >
                                        {packageData.serviceId}
                                        <Copy className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Favorite Toggle */}
                        <div className="rounded-2xl border border-slate-800/70 bg-slate-900/10 p-6">
                            <label className="flex items-center justify-between cursor-pointer">
                                <span className="flex items-center gap-2 text-white font-medium">
                                    <span>⭐</span>
                                    Избранное
                                </span>
                                <input
                                    type="checkbox"
                                    checked={isFavorite}
                                    onChange={(e) => setIsFavorite(e.target.checked)}
                                    className="h-5 w-5 rounded border-slate-800 bg-slate-900/60"
                                />
                            </label>
                        </div>

                        {/* Features */}
                        {packageData.features && packageData.features.length > 0 && (
                            <div className="rounded-2xl border border-slate-800/70 bg-slate-900/10 p-6 space-y-3">
                                {packageData.features?.map((feature: string, index: number) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <span className="text-lg">{feature.split(" ")[0]}</span>
                                        <span className="text-sm text-slate-300">{feature.substring(feature.indexOf(" ") + 1)}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Price Summary */}
                        <div className="rounded-2xl border border-slate-800/70 bg-slate-900/10 p-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-slate-400">Количество</span>
                                <span className="text-white font-semibold">{quantity.toLocaleString()}</span>
                            </div>
                            <div className="border-t border-slate-800/50 pt-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-semibold text-white">Цена</span>
                                    <div className="flex items-center gap-3">
                                        {packageData.discount && (
                                            <span className="rounded-md bg-orange-500 px-2.5 py-1 text-xs font-bold text-white">
                                                -{packageData.discount}%
                                            </span>
                                        )}
                                        <div className="flex flex-col items-end">
                                            {originalTotalPrice > totalPrice && (
                                                <span className="text-sm text-slate-500 line-through">
                                                    {formatCurrency(originalTotalPrice, packageData.currency)}
                                                </span>
                                            )}
                                            <span className="text-2xl font-bold text-white">
                                                {formatCurrency(totalPrice, packageData.currency)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            className="w-full rounded-xl bg-green-500 py-4 text-lg font-semibold text-white transition-colors hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={!targetUrl || quantity < (packageData.minimum || 1)}
                        >
                            Купить сейчас
                        </button>
                    </div>
                </div>
            ) : null}
        </PageLayout>
    )
}
