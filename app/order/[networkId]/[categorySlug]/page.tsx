"use client"

import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { PageLayout } from "@/components/shared"
import { useServicePackages } from "@/hooks/use-service-packages"
import { formatCurrency } from "@/lib/utils"

export default function ServicePackagesPage() {
    const params = useParams()
    const router = useRouter()
    const networkId = params.networkId as string
    const categorySlug = params.categorySlug as string

    const { data: packages, isLoading, error, categoryName } = useServicePackages(networkId, categorySlug)

    return (
        <PageLayout
            maxWidth="full"
            containerClassName="px-4 py-6 md:px-6"
            headerProps={{
                showSearch: false,
                showActions: true,
                balance: 0,
                currency: "RUB",
            }}
            contentClassName="space-y-6 max-w-5xl"
        >
            <div className="flex items-center gap-3">
                <button
                    onClick={() => router.back()}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 transition-colors hover:border-slate-700 hover:text-white"
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <div>
                    <h1 className="text-3xl font-semibold text-white">{categoryName || "Загрузка..."}</h1>
                    <p className="text-slate-400">Выберите срок действия</p>
                </div>
            </div>

            {error && (
                <div className="rounded-lg border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-200">
                    {error}
                </div>
            )}

            <div className="overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/10">
                {isLoading ? (
                    <div className="divide-y divide-slate-800/60">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="flex items-center gap-4 px-5 py-5">
                                <div className="h-12 w-12 rounded-full border border-slate-800/70 bg-slate-900/60 animate-pulse" />
                                <div className="flex-1 space-y-2">
                                    <div className="h-4 w-3/4 rounded bg-slate-800/60 animate-pulse" />
                                    <div className="h-3 w-1/2 rounded bg-slate-800/50 animate-pulse" />
                                </div>
                                <div className="h-6 w-20 rounded bg-slate-800/60 animate-pulse" />
                            </div>
                        ))}
                    </div>
                ) : packages.length === 0 ? (
                    <div className="px-6 py-12 text-center text-slate-400">
                        <p className="mb-2 text-lg font-medium">Пакеты не найдены</p>
                        <p className="text-sm text-slate-500">Пока нет доступных пакетов для этой категории</p>
                    </div>
                ) : (
                    <div className="divide-y divide-slate-800/50">
                        {packages.map((pkg: any) => (
                            <Link
                                key={pkg.id}
                                href={`/order/${networkId}/${categorySlug}/${pkg.id}`}
                                className="group flex items-center justify-between gap-4 px-4 py-4 text-white transition-colors hover:bg-white/5 sm:px-6"
                            >
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-800 bg-slate-900/80 text-white shadow-[inset_0_6px_18px_rgba(15,15,35,0.8)]">
                                        {pkg.iconUrl ? (
                                            <img
                                                src={pkg.iconUrl}
                                                alt={pkg.name}
                                                className="h-6 w-6 object-contain"
                                            />
                                        ) : (
                                            <span className="text-sm font-semibold">
                                                {pkg.duration ? pkg.duration.match(/\d+/)?.[0] : "?"}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <span className="text-base font-medium tracking-tight group-hover:text-slate-100">
                                            {pkg.name}
                                        </span>
                                        {pkg.duration && (
                                            <span className="text-xs text-slate-500">{pkg.duration}</span>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    {pkg.originalPrice && pkg.originalPrice > pkg.price && (
                                        <span className="text-sm text-slate-500 line-through">
                                            {formatCurrency(pkg.originalPrice, pkg.currency)}
                                        </span>
                                    )}
                                    <div className="flex items-center gap-2">
                                        {pkg.discount && (
                                            <span className="rounded-md bg-orange-500 px-2 py-0.5 text-xs font-bold text-white">
                                                -{pkg.discount}%
                                            </span>
                                        )}
                                        <span className="text-base font-semibold text-white">
                                            {formatCurrency(pkg.price, pkg.currency)}
                                        </span>
                                    </div>
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-500 transition-colors group-hover:border-slate-600 group-hover:text-white">
                                        <ChevronRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </PageLayout>
    )
}
