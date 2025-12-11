"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { PageLayout } from "@/components/shared"
import { useServiceCategories } from "@/hooks/use-service-categories"

export default function ServiceCategoryPage() {
    const params = useParams()
    const router = useRouter()
    const networkId = params.networkId as string
    const [searchQuery, setSearchQuery] = useState("")

    const { data: categories, isLoading, error, networkName } = useServiceCategories(networkId)

    const normalizedQuery = searchQuery.trim().toLowerCase()
    const filteredCategories = categories.filter((cat: any) =>
        normalizedQuery ? cat.name.toLowerCase().includes(normalizedQuery) : true
    )

    return (
        <PageLayout
            maxWidth="full"
            containerClassName="px-4 py-6 md:px-6"
            headerProps={{
                searchValue: searchQuery,
                onSearchChange: setSearchQuery,
                showSearch: true,
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
                    <h1 className="text-3xl font-semibold text-white">{networkName || "Загрузка..."}</h1>
                    <p className="text-slate-400">Выберите вид накрутки</p>
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
                                <div className="flex-1 h-4 rounded bg-slate-800/60 animate-pulse" />
                            </div>
                        ))}
                    </div>
                ) : filteredCategories.length === 0 ? (
                    <div className="px-6 py-12 text-center text-slate-400">
                        <p className="mb-2 text-lg font-medium">Услуги не найдены</p>
                        <p className="text-sm text-slate-500">Попробуйте изменить поисковый запрос</p>
                    </div>
                ) : (
                    <div className="divide-y divide-slate-800/50">
                        {filteredCategories.map((category: any) => (
                            <Link
                                key={category.id}
                                href={`/order/${networkId}/${category.slug}`}
                                className="group flex items-center justify-between gap-4 px-4 py-4 text-white transition-colors hover:bg-white/5 sm:px-6"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-800 bg-slate-900/80 text-white shadow-[inset_0_6px_18px_rgba(15,15,35,0.8)]">
                                        {category.iconUrl ? (
                                            <img
                                                src={category.iconUrl}
                                                alt={category.name}
                                                className="h-6 w-6 object-contain"
                                            />
                                        ) : (
                                            <span className="text-sm font-semibold uppercase">
                                                {category.name.slice(0, 2)}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-base font-medium tracking-tight group-hover:text-slate-100">
                                            {category.name}
                                        </span>
                                        {category.description && (
                                            <span className="text-xs text-slate-500">{category.description}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-500 transition-colors group-hover:border-slate-600 group-hover:text-white">
                                    <ChevronRight className="h-4 w-4" />
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </PageLayout>
    )
}
