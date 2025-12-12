import type { ServicePackage } from "@/lib/types"

interface TargetUrlInputProps {
    value: string
    onChange: (value: string) => void
}

export function TargetUrlInput({ value, onChange }: TargetUrlInputProps) {
    return (
        <div className="rounded-2xl border border-slate-800/70 bg-slate-900/10 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Ссылка</h3>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="t.me/hyperlikeru"
                className="w-full rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3 text-white placeholder-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
        </div>
    )
}
