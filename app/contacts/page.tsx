import { PageLayout, PageTitle } from "@/components/shared"
import { Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContactsPage() {
    return (
        <PageLayout>
            <div className="p-6">
                <PageTitle title="Контакты" />

                <div className="max-w-3xl">
                    <p className="text-slate-400 text-lg mb-8">
                        Если у вас возникли вопросы любого характера, вы можете обратиться в поддержку.
                        Для обращения в поддержку перейдите в раздел <Link href="/help" className="text-blue-400 hover:underline">Помощь</Link>.
                    </p>

                    <div className="bg-slate-900/50 p-8 rounded-lg border border-slate-800 space-y-6">
                        <h2 className="text-2xl font-semibold mb-6">Для связи с нами:</h2>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.67-.52.36-.99.53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.48 1.02-.73 3.99-1.73 6.66-2.88 8-3.44 3.81-1.58 4.6-1.85 5.12-1.86.11 0 .36.03.52.17.14.12.17.28.19.39.01.11.03.36.01.56z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-slate-400 text-sm">Telegram</div>
                                    <Link
                                        href="https://t.me/hyperlikesupport_bot"
                                        target="_blank"
                                        className="text-blue-400 hover:underline font-medium"
                                    >
                                        @hyperlikesupport_bot
                                    </Link>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <div className="text-slate-400 text-sm">Email</div>
                                    <Link
                                        href="mailto:support@hyperlike.ru"
                                        className="text-purple-400 hover:underline font-medium"
                                    >
                                        support@hyperlike.ru
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-700">
                            <h3 className="text-lg font-semibold mb-3">Реквизиты</h3>
                            <div className="text-slate-400 space-y-1">
                                <p>ИП Блинова А.В.</p>
                                <p>ИНН 920162475012</p>
                                <p>ОГРНИП 324920000008901</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}
