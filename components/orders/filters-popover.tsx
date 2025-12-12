"use client"

import { Folder, ChevronDown, RotateCcw } from "lucide-react"
import { IconButton } from "@/components/shared"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import type { SVGProps } from "react"

interface FiltersState {
    network: string
    service: string
    from: string
    to: string
}

interface OrdersFiltersPopoverProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    filters: FiltersState
    onFilterChange: (field: keyof FiltersState, value: string) => void
    onReset: () => void
}

function FilterSliderIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
            {...props}
        >
            <path d="M3.5 6.5H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M3.5 13.5H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="8.25" cy="6.5" r="1.75" fill="currentColor" />
            <circle cx="11.75" cy="13.5" r="1.75" fill="currentColor" />
        </svg>
    )
}

export function OrdersFiltersPopover({
    open,
    onOpenChange,
    filters,
    onFilterChange,
    onReset,
}: OrdersFiltersPopoverProps) {
    return (
        <Popover open={open} onOpenChange={onOpenChange}>
            <PopoverTrigger asChild>
                <IconButton
                    className={cn(
                        "rounded-2xl text-[#2FFF61] hover:border-[#2FFF61]/40 hover:bg-slate-900/70",
                        open ? "border-[#2FFF61]/40 bg-slate-900" : "bg-slate-900/60",
                    )}
                    icon={<FilterSliderIcon className="h-5 w-5" />}
                    active={open}
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
                                    onChange={(event) => onFilterChange("network", event.target.value)}
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
                                    onChange={(event) => onFilterChange("service", event.target.value)}
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
                                        onChange={(event) => onFilterChange("from", event.target.value)}
                                        className="w-full bg-transparent text-base font-medium text-white placeholder:text-slate-500 focus:outline-none"
                                        placeholder="От"
                                    />
                                </div>
                                <div className="relative flex h-14 items-center rounded-2xl border border-slate-800/80 bg-slate-900/60 px-4">
                                    <input
                                        type="date"
                                        aria-label="Период до"
                                        value={filters.to}
                                        onChange={(event) => onFilterChange("to", event.target.value)}
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
                                onReset()
                                onOpenChange(false)
                            }}
                            type="button"
                        >
                            <RotateCcw className="mr-2 h-5 w-5" />
                            Сбросить
                        </button>
                        <button
                            className="flex h-14 flex-1 items-center justify-center rounded-2xl bg-[#2FFF61] text-base font-semibold text-slate-950 transition hover:bg-[#42ff6f] md:flex-none md:px-12"
                            onClick={() => onOpenChange(false)}
                            type="button"
                        >
                            Применить
                        </button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
