import Link from "next/link"

export default function ContactUsPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                <Link href="/" className="mb-8 inline-flex items-center text-emerald-400 hover:text-emerald-300">
                    ← Вернуться на главную
                </Link>

                <h1 className="mb-8 text-3xl font-bold text-white">Контакты</h1>

                <div className="prose prose-invert max-w-none space-y-6 text-slate-300">
                    <p className="text-lg">
                        Если у вас возникли вопросы любого характера, вы можете обратиться в поддержку.
                    </p>

                    <p className="text-lg">
                        Для обращения в поддержку перейдите в раздел <strong className="text-white">Помощь</strong>.
                    </p>

                    <div className="mt-12 space-y-6 rounded-3xl border border-slate-700/50 bg-slate-800/40 p-8">
                        <h2 className="text-2xl font-bold text-white">Для связи с нами:</h2>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                                    <svg className="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.099.155.232.171.326.016.094.036.308.02.475z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-400">Telegram</div>
                                    <a
                                        href="https://t.me/hyperlikesupport_bot"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg font-medium text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        @hyperlikesupport_bot
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
                                    <svg className="h-6 w-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-400">Email</div>
                                    <a
                                        href="mailto:support@hyperlike.ru"
                                        className="text-lg font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                                    >
                                        support@hyperlike.ru
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
