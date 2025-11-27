import Image from "next/image"

import { cn } from "@/lib/utils"

const LOGO_SRC = "https://cdn.hyperlike.ru/cs1/panel_logos/9D03v6lVO7ER51Xtvu7u7YvX75D2oxXOYmBqtbuq.png"

interface LogoProps {
    showWordmark?: boolean
    wordmark?: string
    className?: string
    iconClassName?: string
    textClassName?: string
    iconSize?: number
    priority?: boolean
}

export function Logo({
    showWordmark = true,
    wordmark = "HYPERLIKE",
    className,
    iconClassName = "h-10 w-10",
    textClassName = "text-lg font-bold uppercase tracking-tight text-white",
    iconSize = 40,
    priority = false,
}: LogoProps) {
    return (
        <span className={cn("flex items-center gap-2", className)}>
            <span className={cn("relative flex items-center justify-center", iconClassName)}>
                <Image
                    src={LOGO_SRC}
                    alt={wordmark}
                    width={iconSize}
                    height={iconSize}
                    className="h-full w-full object-contain"
                    priority={priority}
                />
            </span>
            {showWordmark ? (
                <span className={cn(textClassName)}>{wordmark}</span>
            ) : null}
        </span>
    )
}
