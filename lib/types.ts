import type { LucideIcon } from "lucide-react"

export interface NavigationItem {
    href: string
    label: string
    Icon: LucideIcon
    isPrimary?: boolean
    external?: boolean
    mobileOrder?: number
}

export interface FooterNavigationItem {
    href: string
    label: string
    Icon: LucideIcon
    external?: boolean
}

export interface Network {
    id: number
    name: string
    networkId: string
    slug: string
    accentColor: string
    orderPath?: string
    iconUrl?: string
    isFree?: boolean
    metadata?: Record<string, unknown>
}

export interface ServiceItem {
    id: string
    title: string
    price: number
    currency: string
    category: string
    pricePer?: number
    priceUnit?: "service" | "1000" | "package"
    minimum?: number
    maximum?: number
    description?: string
}

export interface ServiceCatalog {
    networkId: string
    networkName: string
    services: ServiceItem[]
}
