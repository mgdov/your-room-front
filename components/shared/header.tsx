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
        label={<span className="text-white text-sm font-medium text-center md:text-base">{formattedBalance}</span>}
        icon={<Plus className="w-4 h-4" />}
        iconLabel="Пополнить"
        iconLabelClassName="text-green-400"
        className="flex-1 md:flex-initial"
      />
      {discountLabel && (
        <Link
          href={discountHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-2.5 text-sm transition-colors hover:border-slate-700 md:flex-initial md:px-5 md:py-3 md:text-base"
        >
          <span className="text-white text-sm font-medium text-center md:text-base">{discountLabel}</span>
          <div className="rounded-md bg-linear-to-r from-purple-500 to-pink-500 px-2.5 py-0.5 text-xs font-bold text-white md:px-3 md:py-1 md:text-sm">
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
      <div className="flex flex-col gap-3 px-4 md:flex-row md:items-center md:justify-between md:gap-4">
        {showSearch ? (
          <div className="relative w-full flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
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
          <div className="flex w-full flex-wrap items-stretch gap-2 md:w-auto md:flex-nowrap md:items-center md:justify-end md:gap-3">
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
  className,
}: {
  href?: string
  onClick?: () => void
  label: ReactNode
  icon: ReactNode
  iconLabel?: string
  iconLabelClassName?: string
  className?: string
}) {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-2.5 text-sm transition-colors hover:border-slate-700 md:px-5 md:py-3 md:text-base",
          className,
        )}
      >
        {label}
        <div className={cn("flex items-center gap-1.5 text-green-400", iconLabelClassName)}>
          {icon}
          {iconLabel && <span className="font-medium text-sm md:text-base">{iconLabel}</span>}
        </div>
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900/50 px-4 py-2.5 text-sm transition-colors hover:border-slate-700 md:px-5 md:py-3 md:text-base",
        className,
      )}
      type="button"
    >
      {label}
      <div className={cn("flex items-center gap-1.5 text-green-400", iconLabelClassName)}>
        {icon}
        {iconLabel && <span className="font-medium text-sm md:text-base">{iconLabel}</span>}
      </div>
    </button>
  )
}
