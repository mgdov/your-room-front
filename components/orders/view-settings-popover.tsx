"use client"

import { Settings } from "lucide-react"
import { IconButton } from "@/components/shared"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"

const VIEW_SETTINGS = [
    { key: "multiSelect", label: "Множ. выбор" },
    { key: "showId", label: "Показывать ID" },
    { key: "showDate", label: "Показывать дату" },
    { key: "showPrice", label: "Показывать цену" },
    { key: "showRefill", label: "Кнопка рефилла" },
    { key: "showCancel", label: "Кнопка отмены" },
] as const

interface ViewSettingsState {
    multiSelect: boolean
    showId: boolean
    showDate: boolean
    showPrice: boolean
    showRefill: boolean
    showCancel: boolean
}

interface OrdersViewSettingsPopoverProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    viewSettings: ViewSettingsState
    onToggle: (field: keyof ViewSettingsState, value: boolean) => void
}

export function OrdersViewSettingsPopover({
    open,
    onOpenChange,
    viewSettings,
    onToggle,
}: OrdersViewSettingsPopoverProps) {
    return (
        <Popover open={open} onOpenChange={onOpenChange}>
            <PopoverTrigger asChild>
                <IconButton
                    icon={<Settings className="w-5 h-5 text-slate-300" />}
                    active={open}
                    aria-label="Настройки отображения"
                />
            </PopoverTrigger>
            <PopoverContent
                align="end"
                className="w[340px] max-w-[90vw] rounded-3xl border border-slate-800/80 bg-slate-950 p-6 text-white shadow-xl"
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
                                    onCheckedChange={(value) => onToggle(setting.key, value)}
                                />
                            </label>
                        ))}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
