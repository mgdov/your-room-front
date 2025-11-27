import Link from "next/link"
import { ArrowRight, Rocket, Sparkles, Package, Zap, Headphones } from "lucide-react"

const floatingIcons = [
    { Icon: Rocket, className: "left-[8%] top-8" },
    { Icon: Sparkles, className: "right-[10%] top-16" },
    { Icon: Rocket, className: "left-[15%] bottom-12" },
    { Icon: Sparkles, className: "right-[18%] bottom-8" },
]

const features = [
    {
        icon: Package,
        title: "Большой выбор",
        description: "Более 100 услуг в каталоге",
    },
    {
        icon: Zap,
        title: "Полная автоматизация",
        description: "Все происходит в реальном времени",
    },
    {
        icon: Headphones,
        title: "Отзывчивая поддержка",
        description: "Наши агенты всегда помогут вам",
    },
]

export function LandingHero() {
    return (
        <section className="relative overflow-hidden rounded-3xl border border-emerald-500/10 bg-linear-to-b from-slate-900 to-slate-950 px-4 py-20 text-center shadow-[0_0_120px_rgba(16,185,129,0.08)] sm:px-12">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.15),transparent_55%)]" aria-hidden="true" />
            {floatingIcons.map(({ Icon, className }, index) => (
                <Icon
                    key={index}
                    className={`absolute hidden h-10 w-10 text-emerald-500/60 blur-[0.3px] sm:block ${className}`}
                />
            ))}

            <div className="mx-auto max-w-4xl space-y-8">
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                        Накрутка лайков и подписчиков во всех социальных сетях
                    </h1>
                    <p className="text-base text-slate-300 sm:text-lg">
                        Станьте популярней вместе с нами
                    </p>

                    <div className="flex flex-col gap-3 justify-center sm:flex-row">
                        <Link
                            href="/registration"
                            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition-transform hover:-translate-y-0.5 hover:bg-emerald-400"
                        >
                            Подключиться
                        </Link>
                        <Link
                            href="/order"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/60 bg-transparent px-8 py-3 text-base font-semibold text-white transition-colors hover:border-emerald-400"
                        >
                            Быстрый заказ
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

                <div className="grid gap-6 pt-12 sm:grid-cols-3">
                    {features.map((feature) => {
                        const Icon = feature.icon
                        return (
                            <div key={feature.title} className="space-y-3">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                                    <Icon className="h-7 w-7" />
                                </div>
                                <h3 className="font-semibold text-white">{feature.title}</h3>
                                <p className="text-sm text-slate-400">{feature.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
