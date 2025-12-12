import { Copy } from "lucide-react"
import type { ServicePackage } from "@/lib/types"
import { formatCurrency } from "@/lib/utils"

interface OrderSummaryProps {
    packageData: ServicePackage
    quantity: number
}

export function OrderSummary({ packageData, quantity }: OrderSummaryProps) {
    const totalPrice = (packageData.price * quantity) / 1000
    const originalTotalPrice = packageData.originalPrice
        ? (packageData.originalPrice * quantity) / 1000
        : totalPrice

    const copyServiceId = () => {
        if (packageData.serviceId) {
            navigator.clipboard.writeText(packageData.serviceId)
        }
    }

    return (
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

            {/* Features */}
            {packageData.features && packageData.features.length > 0 && (
                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/10 p-6 space-y-3">
                    {packageData.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-start gap-3">
                            <span className="text-lg">{feature.split(" ")[0]}</span>
                            <span className="text-sm text-slate-300">
                                {feature.substring(feature.indexOf(" ") + 1)}
                            </span>
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
        </div>
    )
}
