"use client"

export type ProfileTabKey = "settings" | "balance" | "referral"

interface ProfileTabsProps {
    activeTab: ProfileTabKey
    onChange: (key: ProfileTabKey) => void
}

const tabs: Array<{ key: ProfileTabKey; label: string }> = [
    { key: "settings", label: "Настройки" },
    { key: "balance", label: "История баланса" },
    { key: "referral", label: "Реферальная система" },
]

export function ProfileTabs({ activeTab, onChange }: ProfileTabsProps) {
    return (
        <div className="flex flex-wrap gap-3 mb-6">
            {tabs.map((tab) => {
                const isActive = activeTab === tab.key

                return (
                    <button
                        key={tab.key}
                        onClick={() => onChange(tab.key)}
                        className={`px-6 py-2 rounded-lg font-medium transition-colors ${isActive ? "bg-slate-800 text-white" : "bg-slate-900/50 text-slate-400 hover:text-white"
                            }`}
                        type="button"
                    >
                        {tab.label}
                    </button>
                )
            })}
        </div>
    )
}
