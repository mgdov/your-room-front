import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: ReactNode
    active?: boolean
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
    { icon, active = false, className, children, type = "button", ...props },
    ref,
) {
    return (
        <button
            ref={ref}
            type={type}
            className={cn(
                "h-10 w-10 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-700 flex items-center justify-center transition-colors",
                active && "border-slate-600 bg-slate-900",
                className,
            )}
            {...props}
        >
            {icon ?? children}
        </button>
    )
})
