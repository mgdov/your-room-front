"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import type { Network } from "@/lib/types"

interface ServiceListProps {
  searchQuery?: string
  networks?: Network[]
  isLoading?: boolean
  emptyMessage?: string
}

export default function ServiceList({
  searchQuery = "",
  networks = [],
  isLoading = false,
  emptyMessage = "Соцсети будут добавляться из админ панели",
}: ServiceListProps) {
  const normalizedQuery = searchQuery.trim().toLowerCase()
  const filteredNetworks = networks.filter((network) =>
    normalizedQuery ? network.name.toLowerCase().includes(normalizedQuery) || network.slug.toLowerCase().includes(normalizedQuery) : true,
  )

  if (isLoading) {
    return (
      <div className="space-y-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-16 w-full rounded-lg border border-slate-800/40 bg-slate-900/40 animate-pulse"
          />
        ))}
      </div>
    )
  }

  if (filteredNetworks.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400">
        <p className="text-lg mb-2">{emptyMessage}</p>
        <p className="text-sm">Пока список пуст</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {filteredNetworks.map((network) => (
        <ServiceCard key={network.networkId} network={network} />
      ))}
    </div>
  )
}

function ServiceCard({ network }: { network: Network }) {
  const href = network.orderPath ?? `/order?network_id=${network.networkId}`
  const accentStyle = network.accentColor ? { borderColor: network.accentColor } : undefined

  return (
    <Link href={href}>
      <div className="w-full flex items-center justify-between p-4 rounded-lg transition-all group border border-slate-800/40 hover:border-slate-700/50 bg-slate-900/40">
        <div className="flex items-center gap-4">
          <div
            className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700"
            style={accentStyle}
          >
            {network.iconUrl ? (
              <img src={network.iconUrl} alt={network.name} className="w-6 h-6 object-contain" />
            ) : (
              <span className="text-white font-semibold uppercase">
                {network.name.slice(0, 2)}
              </span>
            )}
          </div>
          <span className="text-white font-medium group-hover:text-gray-100 transition-colors">{network.name}</span>
        </div>
        <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-slate-300 transition-colors" />
      </div>
    </Link>
  )
}