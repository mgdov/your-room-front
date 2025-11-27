import { Headphones, Layers3, Workflow } from "lucide-react"

const features = [
    {
        title: "Большой выбор",
        description: "Более 100 услуг в каталоге",
        Icon: Layers3,
    },
    {
        title: "Полная автоматизация",
        description: "Все происходит в реальном времени",
        Icon: Workflow,
    },
    {
        title: "Отзывчивая поддержка",
        description: "Наши агенты всегда помогут вам",
        Icon: Headphones,
    },
]

export function LandingFeatures() {
    return (
        <section className="mt-16 rounded-3xl border border-white/5 bg-slate-950/70 px-4 py-12 shadow-inner shadow-emerald-500/5 sm:px-6">
            <div className="grid gap-6 sm:grid-cols-3">
                {features.map(({ title, description, Icon }) => (
                    <div
                        key={title}
                        className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-8 text-center shadow-[0_20px_40px_-24px_rgba(15,118,110,0.45)]"
                    >
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                            <Icon className="h-7 w-7" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">{title}</h3>
                            <p className="mt-2 text-sm text-slate-300">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
