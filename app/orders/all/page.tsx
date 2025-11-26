"use client"

import { useState, type SVGProps } from "react"
import { ShoppingCart, Settings, Folder, ChevronDown, RotateCcw } from "lucide-react"
import { PageLayout, Tabs, IconButton, EmptyState, Input } from "@/components/shared"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

const ORDERS_CATEGORIES = [
  { id: 1, name: "Все" },
  { id: 2, name: "Активные" },
  { id: 3, name: "Отмененные" },
  { id: 4, name: "Частичные" },
  { id: 5, name: "Очередь" },
  { id: 6, name: "Завершенные" },
]

const VIEW_SETTINGS = [
  { key: "multiSelect", label: "Множ. выбор" },
  { key: "showId", label: "Показывать ID" },
  { key: "showDate", label: "Показывать дату" },
  { key: "showPrice", label: "Показывать цену" },
  { key: "showRefill", label: "Кнопка рефилла" },
  { key: "showCancel", label: "Кнопка отмены" },
] as const

function FilterSliderIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <path
        d="M3.5 6.5H16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3.5 13.5H16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="8.25" cy="6.5" r="1.75" fill="currentColor" />
      <circle cx="11.75" cy="13.5" r="1.75" fill="currentColor" />
    </svg>
  )
}

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
              <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <PopoverTrigger asChild>
                  <IconButton
                    className={cn(
                      "rounded-2xl text-[#2FFF61] hover:border-[#2FFF61]/40 hover:bg-slate-900/70",
                      isFilterOpen ? "border-[#2FFF61]/40 bg-slate-900" : "bg-slate-900/60",
                    )}
                    icon={<FilterSliderIcon className="h-5 w-5" />}
                    active={isFilterOpen}
                    aria-label="Фильтр заказов"
                  />
                </PopoverTrigger>
                <PopoverContent
                  align="end"
                  className="w-[720px] max-w-[90vw] bg-slate-950 border border-slate-800 text-white p-6 shadow-xl rounded-3xl"
                >
                  <div className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.2fr)]">
                      <div className="space-y-2">
                        <span className="text-sm font-semibold text-slate-200">Социальная сеть</span>
                        <div className="relative flex h-14 items-center rounded-2xl border border-slate-800/80 bg-slate-900/60 px-4">
                          <Folder className="mr-3 h-5 w-5 text-yellow-400" />
                          <span className="text-base font-medium text-white">Все</span>
                          <select
                            aria-label="Социальная сеть"
                            value={filters.network}
                            onChange={(event) => handleFilterChange("network", event.target.value)}
                            className="absolute inset-0 h-full w-full cursor-pointer appearance-none rounded-2xl bg-transparent pl-12 pr-10 text-base font-medium text-white focus:outline-none"
                          >
                            <option value="all">Все</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-4 h-5 w-5 text-slate-400" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <span className="text-sm font-semibold text-slate-200">Услуга</span>
                        <div className="relative flex h-14 items-center rounded-2xl border border-slate-800/80 bg-slate-900/60 px-4">
                          <span className="text-base font-medium text-white">Все</span>
                          <select
                            aria-label="Услуга"
                            value={filters.service}
                            onChange={(event) => handleFilterChange("service", event.target.value)}
                            className="absolute inset-0 h-full w-full cursor-pointer appearance-none rounded-2xl bg-transparent px-4 pr-10 text-base font-medium text-white focus:outline-none"
                          >
                            <option value="all">Все</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-4 h-5 w-5 text-slate-400" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <span className="text-sm font-semibold text-slate-200">Период</span>
                        <div className="grid gap-3 md:grid-cols-2">
                          <div className="relative flex h-14 items-center rounded-2xl border border-slate-800/80 bg-slate-900/60 px-4">
                            <input
                              type="date"
                              aria-label="Период от"
                              value={filters.from}
                              onChange={(event) => handleFilterChange("from", event.target.value)}
                              className="w-full bg-transparent text-base font-medium text-white placeholder:text-slate-500 focus:outline-none"
                              placeholder="От"
                            />
                          </div>
                          <div className="relative flex h-14 items-center rounded-2xl border border-slate-800/80 bg-slate-900/60 px-4">
                            <input
                              type="date"
                              aria-label="Период до"
                              value={filters.to}
                              onChange={(event) => handleFilterChange("to", event.target.value)}
                              className="w-full bg-transparent text-base font-medium text-white placeholder:text-slate-500 focus:outline-none"
                              placeholder="До"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col-reverse gap-3 md:flex-row md:justify-end">
                      <button
                        className="flex h-14 flex-1 items-center justify-center rounded-2xl border border-slate-800/80 bg-slate-900/60 text-base font-semibold text-slate-200 transition hover:border-slate-700 md:flex-none md:px-8"
                        onClick={() => {
                          resetFilters()
                          setIsFilterOpen(false)
                        }}
                        type="button"
                      >
                        <RotateCcw className="mr-2 h-5 w-5" />
                        Сбросить
                      </button>
                      <button
                        className="flex h-14 flex-1 items-center justify-center rounded-2xl bg-[#2FFF61] text-base font-semibold text-slate-950 transition hover:bg-[#42ff6f] md:flex-none md:px-12"
                        onClick={() => setIsFilterOpen(false)}
                        type="button"
                      >
                        Применить
                      </button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <Popover open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
                <PopoverTrigger asChild>
                  <IconButton
                    icon={<Settings className="w-5 h-5 text-slate-300" />}
                    active={isSettingsOpen}
                    aria-label="Настройки отображения"
                  />
                </PopoverTrigger>
                <PopoverContent
                  align="end"
                  className="w-[340px] max-w-[90vw] rounded-3xl border border-slate-800/80 bg-slate-950 p-6 text-white shadow-xl"
                >
                  <div className="space-y-4">
                    <span className="text-base font-semibold text-white">Настройки визуала</span>
                    <div className="space-y-4">
                      {VIEW_SETTINGS.map((setting) => (
                        <label
                          key={setting.key}
                          className="flex items-center justify-between gap-3 text-base text-slate-200"
                        >
                          <span>{setting.label}</span>
                          <Switch
                            className="h-8 w-16 rounded-full border border-slate-800/70 bg-slate-800/60 px-1 transition-colors data-[state=checked]:border-[#2FFF61]/60 data-[state=checked]:bg-[#2FFF61]/90 [--switch-thumb-size:1.5rem] [--switch-translate-x:2rem] [--switch-translate-x-unchecked:0.125rem]"
                            thumbClassName="bg-white shadow-none"
                            checked={viewSettings[setting.key]}
                            onCheckedChange={(value) => toggleViewSetting(setting.key, value)}
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
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
