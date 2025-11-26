import Link from "next/link"

import type { ProfileStats } from "./profile-settings-content"
import { formatCurrency } from "@/lib/utils"

interface ProfileSidebarProps {
    stats: Pick<ProfileStats, "totalOrders" | "totalSpent">
}

export function ProfileSidebar({ stats }: ProfileSidebarProps) {
    const formatCurrencyOrDash = (value: number | null) => {
        if (value === null) return "—"
        return formatCurrency(value)
    }

    return (
        <div className="space-y-4">
            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-red-500 to-orange-500">
                    <span className="text-3xl">🔑</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">Google Authenticator</h3>
                <Link href="#" className="font-medium text-green-400 hover:text-green-300">
                    Привязать
                </Link>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6 text-center">
                <div className="mb-2 text-4xl font-bold">{stats.totalOrders ?? "—"}</div>
                <div className="text-slate-400">Всего заказов</div>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6 text-center">
                <div className="mb-2 text-4xl font-bold">{formatCurrencyOrDash(stats.totalSpent)}</div>
                <div className="text-slate-400">Вы потратили</div>
            </div>
        </div>
    )
}
