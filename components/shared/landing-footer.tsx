import Link from "next/link"
import Image from "next/image"
import { Logo } from "./logo"

const paymentMethods = [
    { name: "МИР", src: "https://raw.githubusercontent.com/blinover/HLImages/refs/heads/main/Images/mir.png" },
    { name: "СБП", src: "https://raw.githubusercontent.com/blinover/HLImages/refs/heads/main/Images/sbp.png" },
    { name: "СберПей", src: "https://raw.githubusercontent.com/blinover/HLImages/refs/heads/main/Images/sberpay.png" },
    { name: "MasterCard", src: "https://raw.githubusercontent.com/blinover/HLImages/refs/heads/main/Images/mastercard.png" },
    { name: "Visa", src: "https://raw.githubusercontent.com/blinover/HLImages/refs/heads/main/Images/visa.png" },
    { name: "Тинькофф", src: "https://raw.githubusercontent.com/blinover/HLImages/refs/heads/main/Images/tbank.png" },
]

export function LandingFooter() {
    return (
        <footer className="mt-20 border-t border-white/10 bg-slate-950 px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Logo & Legal */}
                    <div className="space-y-6">
                        <Logo
                            className="gap-2"
                            iconClassName="h-10 w-10 rounded-full bg-white p-1.5"
                            textClassName="text-lg font-bold uppercase text-white"
                            iconSize={36}
                        />
                        <div className="space-y-2 text-sm text-slate-400">
                            <Link href="/privacy" className="block hover:text-emerald-400 transition-colors">
                                Политика конфиденциальности
                            </Link>
                            <Link href="/rules" className="block hover:text-emerald-400 transition-colors">
                                Пользовательское соглашение
                            </Link>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-4 text-sm font-bold text-white">Компания</h3>
                        <div className="space-y-2 text-sm text-slate-400">
                            <Link href="/order" className="block hover:text-emerald-400 transition-colors">
                                Услуги
                            </Link>
                            <Link href="/blog" className="block hover:text-emerald-400 transition-colors">
                                Блог
                            </Link>
                            <Link href="/blog/reviews" className="block hover:text-emerald-400 transition-colors">
                                Отзывы
                            </Link>
                        </div>
                    </div>

                    {/* Payment Methods */}
                    <div>
                        <h3 className="mb-4 text-sm font-bold text-white">Способы оплаты</h3>
                        <div className="grid grid-cols-3 gap-3">
                            {paymentMethods.map((method) => (
                                <div
                                    key={method.name}
                                    className="flex h-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2"
                                >
                                    <Image
                                        src={method.src}
                                        alt={method.name}
                                        width={40}
                                        height={24}
                                        className="h-auto w-full max-w-10 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contacts */}
                    <div>
                        <h3 className="mb-4 text-sm font-bold text-white">Контакты</h3>
                        <div className="space-y-3">
                            <a
                                href="https://t.me/hyperlikesupport_bot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-emerald-400"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                                    <Image
                                        src="https://raw.githubusercontent.com/blinover/HLImages/refs/heads/main/Images/tg-support.webp"
                                        alt="Telegram"
                                        width={20}
                                        height={20}
                                    />
                                </div>
                                @hyperlikesupport_bot
                            </a>
                            <a
                                href="mailto:support@hyperlike.ru"
                                className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-emerald-400"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                                    <Image
                                        src="https://raw.githubusercontent.com/blinover/HLImages/refs/heads/main/Images/email.webp"
                                        alt="Email"
                                        width={20}
                                        height={20}
                                    />
                                </div>
                                support@hyperlike.ru
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
