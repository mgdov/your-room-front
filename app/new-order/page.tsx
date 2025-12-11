"use client"

import { useState } from "react"
import { PageLayout, PageTitle } from "@/components/shared"
import ServiceList from "@/components/service-list"
import { useNetworks } from "@/hooks/use-networks"

export default function NewOrderPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const { data: networks, isLoading, error } = useNetworks()

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
                topUpHref: "/pay",
                discountHref: "/discount",
                discountLabel: "Скидка",
                discountValue: "5%",
            }}
            contentClassName="space-y-6 max-w-5xl"
        >
            <PageTitle title="Новый заказ" subtitle="Выберите соцсеть" />

            {error && (
                <div className="rounded-lg border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-200">
                    {error}
                </div>
            )}

            <ServiceList
                searchQuery={searchQuery}
                networks={networks}
                isLoading={isLoading}
                emptyMessage="Соцсети будут добавлены администратором"
            />
        </PageLayout>
    )
}
