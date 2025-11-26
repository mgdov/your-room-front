import Link from "next/link"

export function Footer() {
    return (
        <div className="mt-auto hidden border-t border-slate-800/50 pt-6 pb-6 md:block">
            <div className="px-6">
                <div className="flex flex-wrap gap-3">
                    <Link
                        href="/rules"
                        className="px-4 py-2 rounded-lg bg-slate-900/40 border border-slate-800 text-slate-300 hover:border-slate-700 text-sm"
                    >
                        Пользовательское соглашение
                    </Link>
                    <Link
                        href="/privacy"
                        className="px-4 py-2 rounded-lg bg-slate-900/40 border border-slate-800 text-slate-300 hover:border-slate-700 text-sm"
                    >
                        Политика конфиденциальности
                    </Link>
                    <Link
                        href="/contacts"
                        className="px-4 py-2 rounded-lg bg-slate-900/40 border border-slate-800 text-slate-300 hover:border-slate-700 text-sm"
                    >
                        Контакты
                    </Link>
                </div>
            </div>
        </div>
    )
}
