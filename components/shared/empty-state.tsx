import type { ReactNode } from "react"
import Link from "next/link"

interface EmptyStateProps {
    icon: ReactNode
    message: string
    actionLabel?: string
    actionHref?: string
}

export function EmptyState({ icon, message, actionLabel, actionHref }: EmptyStateProps) {
    return (
        <div className="mt-20 flex flex-col items-center text-center gap-6">
            <div className="rounded-xl bg-green-600/15 text-green-500 p-4">{icon}</div>
            <p className="text-slate-300">{message}</p>
            {actionLabel && actionHref && (
                <Link href={actionHref}>
                    <button className="px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition-colors">
                        {actionLabel}
                    </button>
                </Link>
            )}
        </div>
    )
}
