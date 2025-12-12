"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { PageLayout } from "@/components/shared"
import { useServiceCategories } from "@/hooks/use-service-categories"
import { ServiceCategoryList } from "@/components/order/service-category-list"

export default function ServiceCategoryPage() {
    const params = useParams()
    const router = useRouter()
    const networkId = params.networkId as string
    const [searchQuery, setSearchQuery] = useState("")

    const { data: categories, isLoading, error, networkName } = useServiceCategories(networkId)

    const normalizedQuery = searchQuery.trim().toLowerCase()
    const filteredCategories = categories.filter((category) =>
        normalizedQuery ? category.name.toLowerCase().includes(normalizedQuery) : true
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

            <ServiceCategoryList
                categories={filteredCategories}
                isLoading={isLoading}
                error={error}
                networkId={networkId}
            />
        </PageLayout>
    )
}
