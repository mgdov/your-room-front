"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ChevronLeft, Search } from "lucide-react"
import { PageLayout } from "@/components/shared"
import { useServiceCatalog } from "@/hooks/use-service-catalog"
import { formatCurrency } from "@/lib/utils"
import type { ServiceItem } from "@/lib/types"

export default function OrderPage() {
    return (
        <PageLayout>
            <OrderContent />
        </PageLayout>
    )
}

function OrderContent() {
    const searchParams = useSearchParams()
    const networkId = searchParams.get("network_id")
    const [serviceSearch, setServiceSearch] = useState("")
    const { data, isLoading, error, reload } = useServiceCatalog(networkId)

    const services = useMemo(() => data?.services ?? [], [data])
    const filteredServices = useMemo(() => {
        const query = serviceSearch.trim().toLowerCase()
        if (!query) return services
        return services.filter((service) => service.title.toLowerCase().includes(query))
    }, [services, serviceSearch])

    if (!networkId) {
        return (
            <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Услуги не найдены</h2>
                <p className="text-slate-400 mb-6">Выберите соцсеть из списка на главной странице</p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-800"
                >
                    <ChevronLeft className="w-5 h-5" />
                    <span>Вернуться к списку соцсетей</span>
                </Link>
            </div>
        )
    }

    if (error) {
        return (
            <div className="bg-red-500/10 border border-red-500/40 text-red-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-2">Не удалось загрузить услуги</h2>
                <p className="mb-4">{error}</p>
                <button
                    onClick={() => reload()}
                    className="px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/40 hover:bg-red-500/30"
                >
                    Повторить попытку
                </button>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className="space-y-4">
                <div className="h-10 w-64 bg-slate-900/40 border border-slate-800/40 rounded animate-pulse" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div key={index} className="h-72 bg-slate-900/40 border border-slate-800/40 rounded-lg animate-pulse" />
                    ))}
                </div>
            </div>
        )
    }

    if (!data) {
        return (
            <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Услуги не найдены</h2>
                <p className="text-slate-400">Попробуйте выбрать другую соцсеть</p>
            </div>
        )
    }

    return (
        <div>
            <Link href="/" className="inline-flex items-center text-green-400 hover:text-green-300 mb-6">
                <ChevronLeft className="w-5 h-5" />
                <span>Назад</span>
            </Link>

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
                <h1 className="text-3xl font-bold">{data.networkName}</h1>
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                        type="text"
                        value={serviceSearch}
                        onChange={(event) => setServiceSearch(event.target.value)}
                        placeholder="Поиск услуги..."
                        className="w-full bg-slate-800 text-white placeholder-slate-400 rounded-lg pl-10 pr-4 py-2 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
            </div>

            {filteredServices.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                    <p className="text-lg mb-2">Не найдено услуг по запросу</p>
                    <p className="text-sm">Попробуйте изменить текст поиска</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredServices.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            )}
        </div>
    )
}

function ServiceCard({ service }: { service: ServiceItem }) {
    const hasFraction = Math.round(service.price * 100) % 100 !== 0
    const displayPrice = formatCurrency(service.price, service.currency, {
        minimumFractionDigits: hasFraction ? 2 : 0,
        maximumFractionDigits: hasFraction ? 2 : 0,
    })
    const pricePer = service.priceUnit === "1000"
        ? `за ${service.pricePer ?? 1000} единиц`
        : service.priceUnit === "package"
            ? "за пакет"
            : ""

    return (
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition-colors">
            <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <span className="text-sm text-slate-400 bg-slate-800 px-2 py-1 rounded">{service.category}</span>
            </div>

            <div className="mb-4">
                <div className="text-2xl font-bold text-purple-400">{displayPrice}</div>
                {pricePer && <div className="text-sm text-slate-500">{pricePer}</div>}
            </div>

            <form
                className="space-y-3"
                onSubmit={(event) => {
                    event.preventDefault()
                    // TODO: integrate with backend order creation endpoint
                }}
            >
                <div>
                    <label className="text-sm text-slate-400 mb-1 block" htmlFor={`service-link-${service.id}`}>
                        Ссылка
                    </label>
                    <input
                        id={`service-link-${service.id}`}
                        name="link"
                        type="url"
                        placeholder="https://..."
                        required
                        className="w-full bg-slate-800 text-white placeholder-slate-500 rounded-lg px-3 py-2 text-sm border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div>
                    <label className="text-sm text-slate-400 mb-1 block" htmlFor={`service-quantity-${service.id}`}>
                        Количество
                    </label>
                    <input
                        id={`service-quantity-${service.id}`}
                        name="quantity"
                        type="number"
                        placeholder={(service.minimum ?? 100).toString()}
                        min={service.minimum ?? 100}
                        max={service.maximum ?? 1000000}
                        required
                        className="w-full bg-slate-800 text-white placeholder-slate-500 rounded-lg px-3 py-2 text-sm border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    {(service.minimum || service.maximum) && (
                        <p className="mt-1 text-xs text-slate-500">
                            Минимум {service.minimum ?? 0} • Максимум {service.maximum ?? "без ограничений"}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-medium transition-colors"
                >
                    Заказать
                </button>
            </form>
        </div>
    )
}
