import type { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

export function Input({ label, className = "", ...props }: InputProps) {
    return (
        <div>
            {label && <label className="block text-sm text-slate-400 mb-2">{label}</label>}
            <input
                className={`w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
                {...props}
            />
        </div>
    )
}
