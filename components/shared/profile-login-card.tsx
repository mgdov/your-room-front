"use client"

import { useState } from "react"
import { Copy, Eye, EyeOff } from "lucide-react"

interface PasswordFormState {
    current: string
    next: string
}

interface ProfileLoginCardProps {
    username: string
    onCopyUsername: (value: string) => void
}

export function ProfileLoginCard({ username, onCopyUsername }: ProfileLoginCardProps) {
    const [passwordForm, setPasswordForm] = useState<PasswordFormState>({ current: "", next: "" })
    const [showOldPassword, setShowOldPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [endOldSessions, setEndOldSessions] = useState(false)

    return (
        <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6">
            <h2 className="mb-4 text-xl font-bold">Логин</h2>
            <div className="mb-4">
                <div className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800 px-4 py-3">
                    {username ? (
                        <span className="text-white">{username}</span>
                    ) : (
                        <span className="inline-flex h-4 w-24 animate-pulse rounded bg-slate-700/60" aria-hidden="true" />
                    )}
                    <button
                        type="button"
                        onClick={() => onCopyUsername(username)}
                        disabled={!username}
                        className="text-purple-400 hover:text-purple-300 disabled:cursor-not-allowed disabled:opacity-40"
                        aria-label="Скопировать логин"
                    >
                        <Copy className="h-4 w-4" />
                    </button>
                </div>
            </div>

            <h3 className="mt-6 mb-3 text-lg font-semibold">Старый пароль</h3>
            <div className="mb-4">
                <div className="relative">
                    <input
                        type={showOldPassword ? "text" : "password"}
                        value={passwordForm.current}
                        onChange={(event) =>
                            setPasswordForm((prev) => ({ ...prev, current: event.target.value }))
                        }
                        className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 pr-12 text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                        onClick={() => setShowOldPassword((prev) => !prev)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                        type="button"
                    >
                        {showOldPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            <h3 className="mt-6 mb-3 text-lg font-semibold">Изменить пароль</h3>
            <div className="mb-4">
                <div className="relative">
                    <input
                        type={showNewPassword ? "text" : "password"}
                        value={passwordForm.next}
                        onChange={(event) =>
                            setPasswordForm((prev) => ({ ...prev, next: event.target.value }))
                        }
                        className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 pr-12 text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                        onClick={() => setShowNewPassword((prev) => !prev)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                        type="button"
                    >
                        {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            <div className="mb-6">
                <label className="flex items-center gap-2 text-slate-300">
                    <input
                        type="checkbox"
                        checked={endOldSessions}
                        onChange={(event) => setEndOldSessions(event.target.checked)}
                        className="h-4 w-4 rounded border-slate-600 text-purple-600 focus:ring-2 focus:ring-purple-500"
                    />
                    <span>Завершить старые сессии</span>
                </label>
            </div>

            <button
                type="button"
                className="w-full rounded-lg bg-slate-800 py-3 font-medium text-white transition-colors hover:bg-slate-700"
            >
                Сохранить
            </button>
        </div>
    )
}
