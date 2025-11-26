"use client"

import { useState } from "react"
import { PageLayout } from "@/components/shared"
import ServiceList from "@/components/service-list"
import { useNetworks } from "@/hooks/use-networks"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const { data: networks, isLoading, error, reload } = useNetworks()

  return (
    <PageLayout
      headerProps={{
        searchValue: searchQuery,
        onSearchChange: setSearchQuery,
      }}
    >
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Выберите соцсеть</h1>

        {error ? (
          <div className="bg-red-500/10 border border-red-500/40 text-red-200 rounded-lg p-4">
            <p className="mb-3">{error}</p>
            <button
              onClick={() => reload()}
              className="px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/40 text-sm hover:bg-red-500/30"
            >
              Повторить попытку
            </button>
          </div>
        ) : (
          <ServiceList searchQuery={searchQuery} networks={networks} isLoading={isLoading} />
        )}
      </div>
    </PageLayout>
  )
}
