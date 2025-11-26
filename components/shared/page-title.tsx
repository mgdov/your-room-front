interface PageTitleProps {
    title: string
    subtitle?: string
}

export function PageTitle({ title, subtitle }: PageTitleProps) {
    return (
        <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">{title}</h1>
            {subtitle && <p className="text-slate-400">{subtitle}</p>}
        </div>
    )
}
