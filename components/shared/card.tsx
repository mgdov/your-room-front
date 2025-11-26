import type { ReactNode } from "react"

interface CardProps {
    children: ReactNode
    className?: string
    hover?: boolean
}

export function Card({ children, className = "", hover = false }: CardProps) {
    return (
        <div
            className={`bg-slate-900 p-6 rounded-lg border border-slate-800 ${hover ? "hover:border-slate-700 transition-colors" : ""
                } ${className}`}
        >
            {children}
        </div>
    )
}
