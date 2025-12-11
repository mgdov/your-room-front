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

// New hierarchical order flow types
export interface ServiceCategory {
    id: string
    name: string
    slug: string
    networkId: string
    iconUrl?: string
    description?: string
}

export interface ServicePackage {
    id: string
    categoryId: string
    name: string
    duration?: string // e.g., "30 дней", "60 дней"
    price: number
    originalPrice?: number
    discount?: number
    currency: string
    iconUrl?: string
    features?: string[]
    minimum?: number
    maximum?: number
    serviceId?: string
}

export interface OrderCheckout {
    networkId: string
    networkName: string
    categoryId: string
    categoryName: string
    packageId: string
    packageName: string
    quantity: number
    price: number
    totalPrice: number
    currency: string
    targetUrl?: string
    hasPromoCode?: boolean
    promoCode?: string
}
