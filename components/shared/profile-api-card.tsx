"use client"

import { useCallback } from "react"
import { Copy } from "lucide-react"

interface ProfileApiCardProps {
    apiToken: string
    onCopyToken: (value: string) => void
}

export function ProfileApiCard({ apiToken, onCopyToken }: ProfileApiCardProps) {
    const maskToken = useCallback((token: string) => {
        if (!token) return "—"
        return token.length <= 12 ? token : `${token.slice(0, 6)}…${token.slice(-6)}`
    }, [])

    return (
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
            <h2 className="mb-4 text-xl font-bold">API</h2>

            <h3 className="mb-3 text-lg font-semibold">Ваш токен</h3>
            <div className="mb-4">
                <div className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800 px-4 py-3">
                    {apiToken ? (
                        <span className="font-mono text-sm text-white">{maskToken(apiToken)}</span>
                    ) : (
                        <span className="inline-flex h-4 w-40 max-w-full animate-pulse rounded bg-slate-700/60" aria-hidden="true" />
                    )}
                    <button
                        type="button"
                        onClick={() => onCopyToken(apiToken)}
                        disabled={!apiToken}
                        className="text-purple-400 hover:text-purple-300 disabled:cursor-not-allowed disabled:opacity-40"
                        aria-label="Скопировать токен"
                    >
                        <Copy className="h-4 w-4" />
                    </button>
                </div>
            </div>

            <button
                type="button"
                disabled={!apiToken}
                className="mb-6 rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
                Сменить токен
            </button>

            <button
                className="w-full rounded-lg bg-green-600 py-3 font-medium text-white transition-colors hover:bg-green-700"
                type="button"
            >
                Выход
            </button>
        </div>
    )
}
