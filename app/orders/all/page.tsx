"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { PageLayout, Tabs, EmptyState, Input } from "@/components/shared"
import { OrdersFiltersPopover } from "@/components/orders/filters-popover"
import { OrdersViewSettingsPopover } from "@/components/orders/view-settings-popover"

const ORDERS_CATEGORIES = [
  { id: 1, name: "Все" },
  { id: 2, name: "Активные" },
  { id: 3, name: "Отмененные" },
  { id: 4, name: "Частичные" },
  { id: 5, name: "Очередь" },
  { id: 6, name: "Завершенные" },
]

export default function OrdersPage() {
  const [selectedCategory, setSelectedCategory] = useState("Все")
  const [searchValue, setSearchValue] = useState("")
  const [filters, setFilters] = useState({ network: "all", service: "all", from: "", to: "" })
  const [viewSettings, setViewSettings] = useState({
    multiSelect: false,
    showId: false,
    showDate: false,
    showPrice: false,
    showRefill: false,
    showCancel: false,
  })
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  const handleFilterChange = (field: keyof typeof filters, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }))
  }

  const resetFilters = () => {
    setFilters({ network: "all", service: "all", from: "", to: "" })
  }

  const toggleViewSetting = (field: keyof typeof viewSettings, value: boolean) => {
    setViewSettings((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <PageLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Мои заказы</h1>
          <Input
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="Поиск сервиса или заказа"
          />
        </div>

        <Tabs
          tabs={ORDERS_CATEGORIES}
          activeTab={selectedCategory}
          onTabChange={(id) => setSelectedCategory(ORDERS_CATEGORIES.find((c) => c.id === id)?.name || "Все")}
          actions={
            <>
              <OrdersFiltersPopover
                open={isFilterOpen}
                onOpenChange={setIsFilterOpen}
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={resetFilters}
              />

              <OrdersViewSettingsPopover
                open={isSettingsOpen}
                onOpenChange={setIsSettingsOpen}
                viewSettings={viewSettings}
                onToggle={toggleViewSetting}
              />
            </>
          }
        />

        <EmptyState
          icon={<ShoppingCart className="w-10 h-10" />}
          message="У вас нет ещё ни одного заказа"
          actionLabel="Купить сейчас"
          actionHref="/"
        />
      </div>
    </PageLayout>
  )
}
