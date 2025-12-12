interface FavoriteToggleProps {
    checked: boolean
    onChange: (checked: boolean) => void
}

export function FavoriteToggle({ checked, onChange }: FavoriteToggleProps) {
    return (
        <div className="rounded-2xl border border-slate-800/70 bg-slate-900/10 p-6">
            <label className="flex items-center justify-between cursor-pointer">
                <span className="flex items-center gap-2 text-white font-medium">
                    <span>⭐</span>
                    Избранное
                </span>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    className="h-5 w-5 rounded border-slate-800 bg-slate-900/60"
                />
            </label>
        </div>
    )
}
