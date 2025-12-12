"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { PageLayout } from "@/components/shared"
import { useServicePackage } from "@/hooks/use-service-package"
import { QuantityInput } from "@/components/order/quantity-input"
import { TargetUrlInput } from "@/components/order/target-url-input"
import { IntervalDeliveryToggle } from "@/components/order/interval-delivery-toggle"
import { FavoriteToggle } from "@/components/order/favorite-toggle"
import { OrderSummary } from "@/components/order/order-summary"

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
                        <QuantityInput
                            quantity={quantity}
                            packageData={packageData}
                            onChange={handleQuantityChange}
                            onPresetSelect={selectPreset}
                        />

                        <TargetUrlInput value={targetUrl} onChange={setTargetUrl} />

                        <IntervalDeliveryToggle checked={intervalDelivery} onChange={setIntervalDelivery} />

                        <button
                            onClick={() => { }}
                            className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-left text-sm font-medium text-green-400 transition-colors hover:border-slate-700"
                        >
                            У меня есть промокод
                        </button>
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="space-y-6">
                        <FavoriteToggle checked={isFavorite} onChange={setIsFavorite} />

                        <OrderSummary packageData={packageData} quantity={quantity} />

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
