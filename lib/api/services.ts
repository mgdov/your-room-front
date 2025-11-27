/**
 * Services API
 * Методы для работы с услугами
 */

import { api } from './http-client'

export interface Service {
    id: string
    name: string
    platform: string
    category: string
    description: string
    price: number
    minQuantity: number
    maxQuantity: number
    averageTime: string
    isActive: boolean
}

export interface Platform {
    id: string
    name: string
    slug: string
    icon: string
    categories: string[]
}

/**
 * Получить все платформы
 */
export async function getPlatforms(): Promise<Platform[]> {
    const response = await api.get<Platform[]>('/services/platforms')
    return response.data
}

/**
 * Получить все услуги
 */
export async function getServices(platform?: string, category?: string): Promise<Service[]> {
    const params = new URLSearchParams()
    if (platform) params.append('platform', platform)
    if (category) params.append('category', category)

    const response = await api.get<Service[]>(`/services?${params}`)
    return response.data
}

/**
 * Получить услугу по ID
 */
export async function getService(serviceId: string): Promise<Service> {
    const response = await api.get<Service>(`/services/${serviceId}`)
    return response.data
}

/**
 * Рассчитать стоимость заказа
 */
export interface PriceCalculation {
    serviceId: string
    quantity: number
    price: number
    total: number
    discount?: number
    finalPrice: number
}

export async function calculatePrice(serviceId: string, quantity: number): Promise<PriceCalculation> {
    const response = await api.post<PriceCalculation>('/services/calculate', {
        serviceId,
        quantity,
    })

    return response.data
}
