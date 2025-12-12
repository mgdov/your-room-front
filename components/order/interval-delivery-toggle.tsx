interface IntervalDeliveryToggleProps {
    checked: boolean
    onChange: (checked: boolean) => void
}

export function IntervalDeliveryToggle({ checked, onChange }: IntervalDeliveryToggleProps) {
    return (
        <div className="rounded-2xl border border-slate-800/70 bg-slate-900/10 p-6">
            <label className="flex items-center gap-3 cursor-pointer">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    className="h-5 w-5 rounded border-slate-800 bg-slate-900/60 text-purple-500 focus:ring-2 focus:ring-purple-500/50"
                />
                <div>
                    <span className="font-medium text-white">Интервальная подача</span>
                    <span className="ml-2 text-xs text-slate-400">?</span>
                </div>
            </label>
        </div>
    )
}
