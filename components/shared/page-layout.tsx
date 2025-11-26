import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Header, type HeaderProps } from "./header"
import { Footer } from "./footer"
import Sidebar from "./sidebar"

interface PageLayoutProps {
    children: ReactNode
    maxWidth?: "2xl" | "4xl" | "7xl" | "full"
    showHeader?: boolean
    showFooter?: boolean
    showSidebar?: boolean
    headerProps?: HeaderProps
    className?: string
    containerClassName?: string
    contentClassName?: string
}

export function PageLayout({
    children,
    maxWidth = "7xl",
    showHeader = true,
    showFooter = true,
    showSidebar = true,
    headerProps,
    className,
    containerClassName,
    contentClassName,
}: PageLayoutProps) {
    const maxWidthClass = {
        "2xl": "max-w-2xl mx-auto",
        "4xl": "max-w-4xl mx-auto",
        "7xl": "max-w-7xl mx-auto",
        full: "",
    }[maxWidth]

    return (
        <div className={cn("flex min-h-screen text-white", className)} style={{ backgroundColor: "rgb(23, 31, 38)" }}>
            {showSidebar && <Sidebar />}
            <div className="flex-1 overflow-auto flex flex-col">
                {showHeader && <Header {...headerProps} />}
                <div className={cn("p-6 pb-28 md:pb-6 flex-1", containerClassName)}>
                    <div className={cn("w-full", maxWidthClass, contentClassName)}>{children}</div>
                </div>
                {showFooter && <Footer />}
            </div>
        </div>
    )
}
