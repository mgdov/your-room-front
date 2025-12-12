import { useState } from "react"
import { Copy } from "lucide-react"
import type { ServicePackage } from "@/lib/types"
import { formatCurrency } from "@/lib/utils"

interface QuantityInputProps {
    quantity: number
    packageData: ServicePackage | null
    onChange: (value: string) => void
    onPresetSelect: (preset: number) => void
}

export function QuantityInput({
    quantity,
    packageData,
    onChange,
    onPresetSelect,
}: QuantityInputProps) {
    const presets = [100, 500, 1000, 2500, 5000, 10000]

    return (
        <div className="rounded-2xl border border-slate-800/70 bg-slate-900/10 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Количество</h3>
            <div className="grid grid-cols-3 gap-3 mb-4">
                {presets.map((preset) => (
                    <button
                        key={preset}
                        onClick={() => onPresetSelect(preset)}
                        className={`flex flex-col items-center justify-center rounded-lg border p-3 transition-colors ${quantity === preset
                                ? "border-green-500 bg-green-500/10"
                                : "border-slate-800 bg-slate-900/60 hover:border-slate-700"
                            }`}
                    >
                        <span className="text-lg font-semibold text-white">{preset.toLocaleString()}</span>
                        <span className="text-xs text-slate-400">
                            {packageData
                                ? formatCurrency((packageData.price * preset) / 1000, packageData.currency)
                                : "—"}
                        </span>
                    </button>
                ))}
            </div>
            <input
                type="number"
                value={quantity}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-lg font-semibold text-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                min={packageData?.minimum || 1}
                max={packageData?.maximum || 1000000}
            />
            <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                <span>мин {packageData?.minimum || 10}</span>
                <span>макс {(packageData?.maximum || 500000).toLocaleString()}</span>
            </div>
        </div>
    )
}
