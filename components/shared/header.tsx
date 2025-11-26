"use client"

import type { ChangeEvent, ReactNode } from "react"
import Link from "next/link"
import { Search, Plus } from "lucide-react"
import { cn, formatCurrency } from "@/lib/utils"

export interface HeaderProps {
  showSearch?: boolean
  searchValue?: string
  onSearchChange?: (value: string) => void
  searchPlaceholder?: string
  showActions?: boolean
  actions?: ReactNode
  balance?: number
  currency?: string
  topUpHref?: string
  onTopUpClick?: () => void
  discountHref?: string
  discountLabel?: string
  discountValue?: number | string
  className?: string
}

export function Header({
  showSearch = true,
  searchValue = "",
  onSearchChange,
  searchPlaceholder = "Поиск сервиса или заказа",
  showActions = true,
  actions,
  balance = 0,
  currency = "RUB",
  topUpHref = "/pay",
  onTopUpClick,
  discountHref = "/discount",
  discountLabel = "Скидка",
  discountValue = "5%",
  className,
}: HeaderProps) {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange?.(event.target.value)
  }

  const formattedBalance = formatCurrency(balance, currency)
  const discountBadge = typeof discountValue === "number" ? `${discountValue}%` : discountValue

  const defaultActions = (
    <>
      <HeaderAction
        href={topUpHref}
        onClick={onTopUpClick}
        label={<span className="text-white font-medium">{formattedBalance}</span>}
        icon={<Plus className="w-4 h-4" />}
        iconLabel="Пополнить"
        iconLabelClassName="text-green-400"
      />
      {discountLabel && (
        <Link
          href={discountHref}
          className="flex items-center gap-2 bg-slate-900/50 px-4 py-2.5 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors"
        >
          <span className="text-white font-medium">{discountLabel}</span>
          <div className="bg-linear-to-r from-purple-500 to-pink-500 text-white px-2.5 py-1 rounded-md text-sm font-bold">
            {discountBadge}
          </div>
        </Link>
      )}
    </>
  )

  return (
    <div
      className={cn(
        "border-b border-slate-800 p-4 sticky top-0 z-10",
        className,
      )}
      style={{ backgroundColor: "rgb(23, 31, 38)" }}
    >
      <div className="flex items-center justify-between gap-4 px-4">
        {showSearch ? (
          <div className="flex-1 max-w-xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder={searchPlaceholder}
              className="w-full bg-slate-800/50 text-white placeholder-slate-500 rounded-lg pl-10 pr-4 py-2.5 border border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        ) : (
          <div className="flex-1" />
        )}

        {showActions && (
          <div className="flex items-center gap-3">
            {actions ?? defaultActions}
          </div>
        )}
      </div>
    </div>
  )
}

function HeaderAction({
  href,
  onClick,
  label,
  icon,
  iconLabel,
  iconLabelClassName,
}: {
  href?: string
  onClick?: () => void
  label: ReactNode
  icon: ReactNode
  iconLabel?: string
  iconLabelClassName?: string
}) {
  if (href) {
    return (
      <Link
        href={href}
        className="flex items-center gap-2 bg-slate-900/50 px-4 py-2.5 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors"
      >
        {label}
        <div className={cn("flex items-center gap-1.5 text-green-400", iconLabelClassName)}>
          {icon}
          {iconLabel && <span className="font-medium">{iconLabel}</span>}
        </div>
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-slate-900/50 px-4 py-2.5 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors"
      type="button"
    >
      {label}
      <div className={cn("flex items-center gap-1.5 text-green-400", iconLabelClassName)}>
        {icon}
        {iconLabel && <span className="font-medium">{iconLabel}</span>}
      </div>
    </button>
  )
}
