"use client"

import { useCallback } from "react"
import { Copy } from "lucide-react"

import { formatCurrency } from "@/lib/utils"
import type { ProfileSettingsData, ProfileStats } from "./profile-settings-content"

interface ProfileReferralContentProps {
    initialProfile?: Pick<ProfileSettingsData, "referralLink">
    stats: Pick<ProfileStats, "invited" | "monthEarned" | "totalEarned">
}

export function ProfileReferralContent({ initialProfile, stats }: ProfileReferralContentProps) {
    const referralLink = initialProfile?.referralLink ?? ""

    const handleCopy = useCallback((value: string) => {
        if (!value) return

        if (typeof navigator !== "undefined" && navigator.clipboard) {
            navigator.clipboard.writeText(value).catch(() => null)
        }
    }, [])

    const formatCurrencyOrDash = useCallback((value: number | null) => {
        if (value === null) return "—"
        return formatCurrency(value)
    }, [])

    return (
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
            <div className="mb-6 flex items-center gap-4 rounded-lg border border-green-500/30 bg-green-500/10 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-500">
                    <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                    </svg>
                </div>
                <div>
                    <h3 className="mb-1 font-semibold text-white">
                        Приглашайте пользователей и получайте <span className="text-green-400">10%</span> от их платежей
                    </h3>
                    <p className="text-sm text-slate-300">
                        Средства будут добавлены к балансу вашей панели. Полученные деньги не могут быть выведены.
                    </p>
                </div>
            </div>

            <div className="mb-6">
                <label className="mb-3 block font-medium text-white">Ваша ссылка</label>
                <div className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800 px-4 py-3">
                    {referralLink ? (
                        <span className="break-all text-white">{referralLink}</span>
                    ) : (
                        <span className="inline-flex h-4 w-64 max-w-full animate-pulse rounded bg-slate-700/60" aria-hidden="true" />
                    )}
                    <button
                        type="button"
                        onClick={() => handleCopy(referralLink)}
                        disabled={!referralLink}
                        className="text-purple-400 hover:text-purple-300 disabled:cursor-not-allowed disabled:opacity-40"
                        aria-label="Скопировать реферальную ссылку"
                    >
                        <Copy className="h-5 w-5" />
                    </button>
                </div>
            </div>

            <h3 className="mb-4 text-xl font-bold">Statistics</h3>

            <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
                    <div className="mb-2 text-sm text-slate-400">Приглашено</div>
                    <div className="text-3xl font-bold text-white">{stats.invited ?? "—"}</div>
                </div>

                <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
                    <div className="mb-2 text-sm text-slate-400">Заработано за месяц</div>
                    <div className="text-3xl font-bold text-white">{formatCurrencyOrDash(stats.monthEarned)}</div>
                </div>

                <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-6">
                    <div className="mb-2 text-sm text-slate-400">Всего заработано</div>
                    <div className="text-3xl font-bold text-white">{formatCurrencyOrDash(stats.totalEarned)}</div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
                    <svg className="h-10 w-10 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                    </svg>
                </div>
                <p className="text-lg font-medium text-white">Статистика появится после первых приглашённых пользователей</p>
            </div>
        </div>
    )
}
