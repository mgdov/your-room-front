"use client"

import { useParams, useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { PageLayout } from "@/components/shared"
import { useServicePackages } from "@/hooks/use-service-packages"
import { ServicePackageList } from "@/components/order/service-package-list"

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

            <ServicePackageList
                packages={packages}
                isLoading={isLoading}
                error={error}
                networkId={networkId}
                categorySlug={categorySlug}
            />
        </PageLayout>
    )
}
