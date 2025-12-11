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

  const containerClassName = "overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/10"

  if (isLoading) {
    return (
      <div className={containerClassName}>
        <div className="divide-y divide-slate-800/60">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex items-center gap-4 px-5 py-5">
              <div className="h-12 w-12 rounded-full border border-slate-800/70 bg-slate-900/60 animate-pulse" />
              <div className="flex-1 h-4 rounded bg-slate-800/60 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (filteredNetworks.length === 0) {
    return (
      <div className={containerClassName}>
        <div className="px-6 py-12 text-center text-slate-400">
          <p className="mb-2 text-lg font-medium">{emptyMessage}</p>
          <p className="text-sm text-slate-500">Пока список пуст</p>
        </div>
      </div>
    )
  }

  return (
    <div className={containerClassName}>
      <div className="divide-y divide-slate-800/50">
        {filteredNetworks.map((network) => (
          <ServiceCard key={network.networkId} network={network} />
        ))}
      </div>
    </div>
  )
}

function ServiceCard({ network }: { network: Network }) {
  const href = network.orderPath ?? `/order/${network.networkId}`
  const accentStyle = network.accentColor ? { borderColor: network.accentColor } : undefined

  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-4 px-4 py-4 text-white transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 sm:px-6"
    >
      <div className="flex items-center gap-4">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-800 bg-slate-900/80 text-white shadow-[inset_0_6px_18px_rgba(15,15,35,0.8)]"
          style={accentStyle}
        >
          {network.iconUrl ? (
            <img src={network.iconUrl} alt={network.name} className="h-6 w-6 object-contain" />
          ) : (
            <span className="text-sm font-semibold uppercase">
              {network.name.slice(0, 2)}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <span className="text-base font-medium tracking-tight group-hover:text-slate-100">
            {network.name}
          </span>
          {network.isFree && <span className="text-xs font-medium text-green-400/80">Бесплатно</span>}
        </div>
      </div>
      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 text-slate-500 transition-colors group-hover:border-slate-600 group-hover:text-white">
        <ChevronRight className="h-4 w-4" />
      </div>
    </Link>
  )
}