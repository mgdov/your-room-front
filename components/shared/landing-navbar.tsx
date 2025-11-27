"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Grid2X2, LogIn } from "lucide-react"

import { Logo } from "./logo"

const menuLinks = [
    { label: "Публичная оферта", href: "/offer" },
    { label: "Политика конфиденциальности", href: "/privacy-standalone" },
    { label: "Пользовательское соглашение", href: "/user-agreement" },
    { label: "Обработка персональных данных", href: "/data-processing" },
    { label: "Контакты", href: "/contact-us" },
]

export function LandingNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!isMenuOpen) return

        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false)
            }
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        document.addEventListener("keydown", handleEscape)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("keydown", handleEscape)
        }
    }, [isMenuOpen])

    return (
        <header className="relative z-40 border-b border-white/5 bg-slate-950/70 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6">
                <Link href="/" className="flex items-center text-white">
                    <Logo
                        className="gap-2"
                        iconClassName="h-10 w-10 rounded-full bg-white p-1.5"
                        textClassName="text-lg font-bold uppercase text-white"
                        iconSize={36}
                        priority
                    />
                </Link>

                <div className="relative" ref={menuRef}>
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="inline-flex items-center gap-2 rounded-[18px] border border-white/20 px-4 py-2 text-base font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={isMenuOpen}
                    >
                        <Grid2X2 className="h-4 w-4" />
                        Меню
                    </button>

                    {isMenuOpen && (
                        <div className="absolute right-0 top-full z-50 mt-4 w-64 rounded-3xl border border-white/10 bg-slate-900/95 p-4 shadow-xl shadow-emerald-500/10">
                            <ul className="space-y-3">
                                {menuLinks.map(({ label, href }) => (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/5"
                                        >
                                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-emerald-400">
                                                <ArrowUpRight className="h-4 w-4" />
                                            </span>
                                            <span className="truncate">{label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-4 border-t border-white/10 pt-4">
                                <Link
                                    href="/login"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                                >
                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-emerald-400">
                                        <LogIn className="h-4 w-4" />
                                    </span>
                                    Войти
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}
