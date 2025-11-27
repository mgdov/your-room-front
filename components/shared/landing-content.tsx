"use client"

import { Coins, Heart } from "lucide-react"
import Link from "next/link"

const whyCards = [
    {
        title: "Продвижение",
        description: "Становитесь популярными с помощью нашей панели",
        bubbleLabel: "100 500",
        bubbleClassName: "bg-rose-500/90 text-white",
        bubbleIcon: Heart,
        Chart: PromoChart,
    },
    {
        title: "Заработок",
        description: "Вы можете продавать лайки и подписчиков дальнейшим клиентам",
        bubbleLabel: "8500",
        bubbleClassName: "bg-emerald-500 text-slate-950",
        bubbleIcon: Coins,
        Chart: EarningsChart,
    },
]

const benefits = [
    {
        icon: "🚀",
        title: "Быстрый рост популярности",
        description: "Ускорьте продвижение и попадание в рекомендации соцсетей",
    },
    {
        icon: "🤝",
        title: "Увеличение доверия",
        description: "Аккаунт с большой аудиторией вызывает больше доверия",
    },
    {
        icon: "📈",
        title: "Продвижение контента",
        description: "Выход в топ и увеличение органических просмотров",
    },
    {
        icon: "⏱️",
        title: "Экономия времени",
        description: "Сосредоточьтесь на контенте, а рост мы обеспечим",
    },
]

const whatWeOffer = [
    {
        icon: "👥",
        title: "Настоящая аудитория",
        description: "Живые подписчики без отписок и высокая вовлеченность",
    },
    {
        icon: "💳",
        title: "Гибкие тарифы",
        description: "Выгодные цены и условия для любого бюджета",
    },
    {
        icon: "📊",
        title: "Разные виды накрутки",
        description: "Подписчики, лайки, просмотры для всех платформ",
    },
    {
        icon: "🔒",
        title: "Безопасность",
        description: "Конфиденциальность и надежность методов",
    },
]

const reviews = [
    {
        initials: "М",
        name: "Марина К.",
        rating: 5,
        text: "Заказала накрутку для Instagram - через неделю уже +3000 подписчиков! Пришли первые заказы. Сервис реально работает!",
    },
    {
        initials: "А",
        name: "Алексей В.",
        rating: 5,
        text: "Использую сервис для продвижения бизнеса в TikTok. Подписчики добавляются постепенно, выглядит естественно. Уже заметил рост продаж.",
    },
    {
        initials: "Е",
        name: "Елена С.",
        rating: 5,
        text: "Быстрая доставка, качественные подписчики. После накрутки канал стал появляться в рекомендациях. Рекомендую всем!",
    },
]

const faqs = [
    {
        q: "Безопасно ли использовать услуги по накрутке?",
        a: "Да, наши методы полностью соответствуют правилам соцсетей. Мы избегаем резкого прироста, чтобы ваш аккаунт не привлек внимание алгоритмов.",
    },
    {
        q: "Какие подписчики добавляются?",
        a: "Вы можете выбрать между реальными пользователями или качественными ботами в зависимости от ваших целей.",
    },
    {
        q: "Сколько времени занимает накрутка?",
        a: "От нескольких часов до пары дней, в зависимости от объема заказа.",
    },
    {
        q: "Нужно ли мне что-то делать?",
        a: "Нет, мы берем на себя всю работу. Вы просто наслаждаетесь результатами.",
    },
]

type ChartProps = {
    className?: string
}

function OrdersPreview() {
    const orders = [
        { platform: "VK", type: "Premium", progress: "2500 of 2500", logo: "https://hyperlike.ru/ssr-landing-static/default/order-card/vk.svg" },
        { platform: "Instagram", type: "Followers", progress: "9054 of 9571", logo: "https://hyperlike.ru/ssr-landing-static/default/order-card/insta.svg" },
        { platform: "YouTube", type: "Views", progress: "5000 of 5000", logo: "https://hyperlike.ru/ssr-landing-static/default/order-card/youtube.svg" },
        { platform: "VK", type: "Shares", progress: "3500 of 3500", logo: "https://hyperlike.ru/ssr-landing-static/default/order-card/vk.svg" },
        { platform: "Instagram", type: "Followers", progress: "3054 of 6571", logo: "https://hyperlike.ru/ssr-landing-static/default/order-card/insta.svg" },
        { platform: "YouTube", type: "Views", progress: "5000 of 5000", logo: "https://hyperlike.ru/ssr-landing-static/default/order-card/youtube.svg" },
    ]

    return (
        <div className="relative h-64 overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/50 p-3">
            <div className="mb-2 flex items-center justify-between px-2">
                <span className="text-xs font-medium text-slate-400">Menu</span>
            </div>
            <div className="space-y-2">
                {orders.map((order, idx) => {
                    const [current, total] = order.progress.split(" of ")
                    const percentage = (parseFloat(current) / parseFloat(total)) * 100

                    return (
                        <div key={idx} className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-2.5">
                            <div className="mb-2 flex items-center gap-2">
                                <img src={order.logo} alt={order.platform} className="h-5 w-5" />
                                <div className="flex-1">
                                    <div className="text-xs font-medium text-white">{order.type}</div>
                                    <div className="text-[10px] text-slate-400">{order.progress}</div>
                                </div>
                            </div>
                            <div className="h-1 overflow-hidden rounded-full bg-slate-700/50">
                                <div
                                    className="h-full bg-emerald-500 transition-all"
                                    style={{ width: `${percentage}%` }}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function PromoChart({ className = "" }: ChartProps) {
    const lines = Array.from({ length: 9 }, (_, index) => 16 + index * 20.75)

    return (
        <svg
            viewBox="0 0 200 200"
            className={["h-40 w-full", className].filter(Boolean).join(" ")}
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="promo-bg" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0f172a" stopOpacity="0.95" />
                    <stop offset="1" stopColor="#0b1120" stopOpacity="0.85" />
                </linearGradient>
                <linearGradient id="promo-stroke" x1="20" y1="150" x2="180" y2="60" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#34d399" />
                    <stop offset="1" stopColor="#22d3ee" />
                </linearGradient>
            </defs>
            <rect width="200" height="200" rx="36" fill="url(#promo-bg)" />
            <g opacity="0.18">
                {lines.map((x, idx) => (
                    <line key={idx} x1={x} y1="0" x2={x} y2="200" stroke="#94a3b8" strokeWidth="1.2" />
                ))}
            </g>
            <path
                d="M20 150L60 110C61.5 108.7 63.8 108.6 65.4 110L102 144C103.3 145.2 105.2 145.2 106.5 143.9L180 60"
                stroke="url(#promo-stroke)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <circle cx="60" cy="110" r="6" fill="#22d3ee" />
            <circle cx="102" cy="144" r="6" fill="#34d399" />
            <circle cx="180" cy="60" r="8" fill="#22d3ee" />
            <circle cx="180" cy="60" r="13" stroke="#22d3ee" strokeOpacity="0.55" strokeWidth="3" fill="none" />
        </svg>
    )
}

function EarningsChart({ className = "" }: ChartProps) {
    return (
        <svg
            viewBox="0 0 200 200"
            className={["h-40 w-full", className].filter(Boolean).join(" ")}
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="earnings-bg" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0b1120" stopOpacity="0.95" />
                    <stop offset="1" stopColor="#020617" stopOpacity="0.85" />
                </linearGradient>
                <linearGradient id="earnings-bar" x1="0" y1="0" x2="0" y2="160" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#34d399" />
                    <stop offset="1" stopColor="#15803d" />
                </linearGradient>
                <radialGradient id="earnings-coin" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(150 80) scale(40)">
                    <stop offset="0" stopColor="#facc15" />
                    <stop offset="1" stopColor="#f59e0b" />
                </radialGradient>
            </defs>
            <rect width="200" height="200" rx="36" fill="url(#earnings-bg)" />
            <g opacity="0.18">
                {[0, 1, 2, 3, 4].map((index) => (
                    <rect key={index} x={28 + index * 34} y="32" width="3" height="160" fill="#94a3b8" />
                ))}
            </g>
            <g fill="url(#earnings-bar)">
                <rect x="42" y="120" width="28" height="60" rx="8" />
                <rect x="86" y="96" width="28" height="84" rx="8" />
                <rect x="130" y="68" width="28" height="112" rx="8" />
            </g>
            <path
                d="M40 150C70 130 90 110 120 118C142 123 158 112 170 96"
                stroke="#34d399"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
            />
            <circle cx="150" cy="80" r="42" fill="url(#earnings-coin)" opacity="0.85" />
            <circle cx="150" cy="80" r="26" fill="#fde68a" opacity="0.55" />
            <path
                d="M150 56C139 56 130 64.4 130 74.5C130 81.8 134.7 87.8 141.3 90.5C139.8 95.2 136.4 99.1 132 101C139.3 102.5 146.9 100.6 152.6 96.1C158.3 91.5 161.6 84.6 161.1 77.5C160.6 66.8 156.5 56 150 56Z"
                fill="#facc15"
            />
        </svg>
    )
}

export function LandingContent() {
    return (
        <div className="space-y-20 py-12">
            {/* Why Panel Section */}
            <section className="space-y-8">
                <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
                    Для чего нужна панель?
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                    {whyCards.map((card) => {
                        const Chart = card.Chart
                        const BubbleIcon = card.bubbleIcon

                        return (
                            <article
                                key={card.title}
                                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-[0_0_90px_rgba(15,118,110,0.18)]"
                            >
                                <div
                                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#1e293b33,transparent_65%)]"
                                    aria-hidden="true"
                                />

                                <div className="relative mx-auto flex w-full max-w-xs flex-col items-center gap-6">
                                    <div className="relative w-full overflow-hidden rounded-[2.75rem] border border-white/10 bg-slate-900/70 p-6 backdrop-blur">
                                        <Chart className="h-44 w-full" />
                                        <div
                                            className={`absolute right-6 top-6 flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold shadow-[0_8px_20px_rgba(0,0,0,0.35)] ${card.bubbleClassName}`}
                                        >
                                            <BubbleIcon className="h-4 w-4" />
                                            <span>{card.bubbleLabel}</span>
                                        </div>
                                        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/10 via-transparent to-transparent" aria-hidden="true" />
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                                        <p className="text-slate-300">{card.description}</p>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </section>

            {/* Advantages Section */}
            <section className="space-y-8">
                <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
                    Преимущества
                </h2>
                <div className="grid gap-6 sm:grid-cols-3">
                    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-800/40 p-8 text-center transition-all hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]">
                        <div className="relative mb-6 flex h-60 items-center justify-center">
                            <img
                                src="https://hyperlike.ru/ssr-landing-static/second/diamond.svg"
                                alt=""
                                className="mx-auto h-40 w-auto object-contain"
                            />
                        </div>
                        <div className="mt-auto">
                            <h3 className="mb-3 text-xl font-semibold text-white">Высокое качество</h3>
                            <p className="text-sm leading-relaxed text-slate-400">Мы постоянно следим за качеством наших услуг</p>
                        </div>
                    </div>
                    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-800/40 p-8 text-center transition-all hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]">
                        <div className="relative mb-6 flex h-60 items-center justify-center">
                            <div className="mx-auto w-full max-w-sm">
                                <OrdersPreview />
                            </div>
                        </div>
                        <div className="mt-auto">
                            <h3 className="mb-3 text-xl font-semibold text-white">Удобная панель</h3>
                            <p className="text-sm leading-relaxed text-slate-400">Наша панель использует все современные технологии</p>
                        </div>
                    </div>
                    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-800/40 p-8 text-center transition-all hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]">
                        <div className="relative mb-6 flex h-60 items-center justify-center">
                            <img
                                src="https://hyperlike.ru/ssr-landing-static/second/cart.svg"
                                alt=""
                                className="mx-auto h-44 w-auto object-contain"
                            />
                        </div>
                        <div className="mt-auto">
                            <h3 className="mb-3 text-xl font-semibold text-white">Лучшие цены</h3>
                            <p className="text-sm leading-relaxed text-slate-400">Покупайте услуги с первых рук</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pt-4">
                    <Link
                        href="/registration"
                        className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-12 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-emerald-500/30 transition-transform hover:-translate-y-0.5 hover:bg-emerald-400"
                    >
                        Подключиться
                    </Link>
                </div>
            </section>

            {/* Text Section */}
            <section className="mx-auto max-w-4xl space-y-6 text-center">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Накрутка подписчиков, просмотров и лайков во все социальные сети от Hyperlike
                </h2>
                <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
                    Купить накрутку лайков и подписчиков во всех социальных сетях по выгодным ценам — это удобный способ сделать аккаунт более популярным и привлекательным для целевой аудитории. Hyperlike предлагает надежные услуги накрутки для Instagram, TikTok, Telegram, ВКонтакте и других платформ.
                </p>
            </section>

            {/* Benefits Section */}
            <section className="space-y-8">
                <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
                    Чем помогает накрутка лайков и подписчиков?
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <div className="mb-4 text-4xl">{benefit.icon}</div>
                            <h3 className="mb-2 text-lg font-semibold text-white">{benefit.title}</h3>
                            <p className="text-sm text-slate-300">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* What We Offer Section */}
            <section className="space-y-8">
                <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
                    Что дает накрутка от Hyperlike?
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                    {whatWeOffer.map((offer, idx) => (
                        <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
                            <div className="mb-4 text-5xl">{offer.icon}</div>
                            <h3 className="mb-3 text-lg font-semibold text-white">{offer.title}</h3>
                            <p className="text-slate-300">{offer.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Reviews Section */}
            <section className="space-y-8">
                <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
                    Отзывы наших клиентов
                </h2>
                <div className="grid gap-6 sm:grid-cols-3">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-lg font-bold text-emerald-400">
                                    {review.initials}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">{review.name}</h4>
                                    <div className="text-sm text-yellow-400">
                                        {"⭐".repeat(review.rating)}
                                    </div>
                                </div>
                            </div>
                            <p className="text-slate-300">{review.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="space-y-8">
                <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
                    Часто задаваемые вопросы
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <details
                            key={idx}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:bg-white/10"
                        >
                            <summary className="cursor-pointer font-semibold text-white">
                                {faq.q}
                            </summary>
                            <p className="mt-4 text-slate-300">{faq.a}</p>
                        </details>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="rounded-3xl border border-emerald-500/20 bg-linear-to-br from-emerald-950/40 to-slate-950 px-8 py-16 text-center">
                <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                    Начните продвижение прямо сейчас!
                </h2>
                <p className="mb-8 text-lg text-slate-300">
                    С Hyperlike вы получаете гарантию качества, безопасности и результативности. Не ждите, пока конкуренты займут ваше место!
                </p>
                <Link
                    href="/registration"
                    className="inline-block rounded-full bg-emerald-500 px-8 py-4 font-bold text-slate-950 shadow-lg shadow-emerald-500/30 transition-transform hover:-translate-y-0.5 hover:bg-emerald-400"
                >
                    Заказать накрутку
                </Link>
                <p className="mt-6 text-xs text-slate-400">
                    *Первые 10 подписчиков в подарок новым пользователям
                </p>
            </section>
        </div>
    )
}
