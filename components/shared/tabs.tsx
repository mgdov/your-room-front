import type { ReactNode } from "react"

interface TabsProps {
    tabs: Array<{ id: string | number; name: string }>
    activeTab: string | number
    onTabChange: (id: string | number) => void
    actions?: ReactNode
}

export function Tabs({ tabs, activeTab, onTabChange, actions }: TabsProps) {
    return (
        <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2 overflow-x-auto pb-1">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className={`px-4 py-2 rounded-lg whitespace-nowrap border transition-colors ${activeTab === tab.id
                                ? "bg-slate-800 text-white border-slate-700"
                                : "bg-slate-900/40 text-slate-300 border-slate-800 hover:border-slate-700"
                            }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
            {actions && <div className="hidden sm:flex items-center gap-3">{actions}</div>}
        </div>
    )
}
