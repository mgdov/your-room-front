/**
 * Orders API
 * Методы для работы с заказами
 */

import { api } from './http-client'

export interface Order {
    id: string
    userId: string
    service: string
    platform: string
    link: string
    quantity: number
    price: number
    status: 'pending' | 'in_progress' | 'completed' | 'cancelled' | 'partial'
    progress: number
    createdAt: string
    updatedAt: string
    completedAt?: string
}

export interface CreateOrderData {
    service: string
    platform: string
    link: string
    quantity: number
}

export interface OrdersResponse {
    orders: Order[]
    total: number
    page: number
    limit: number
}

/**
 * Получить все заказы пользователя
 */
export async function getOrders(
    page: number = 1,
    limit: number = 20,
    status?: Order['status']
): Promise<OrdersResponse> {
    const token = localStorage.getItem('auth_token')

    const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...(status && { status }),
    })

    const response = await api.get<OrdersResponse>(`/orders?${params}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    return response.data
}

/**
 * Получить заказ по ID
 */
export async function getOrder(orderId: string): Promise<Order> {
    const token = localStorage.getItem('auth_token')

    const response = await api.get<Order>(`/orders/${orderId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    return response.data
}

/**
 * Создать новый заказ
 */
export async function createOrder(data: CreateOrderData): Promise<Order> {
    const token = localStorage.getItem('auth_token')

    const response = await api.post<Order>('/orders', data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    return response.data
}

/**
 * Отменить заказ
 */
export async function cancelOrder(orderId: string): Promise<Order> {
    const token = localStorage.getItem('auth_token')

    const response = await api.post<Order>(`/orders/${orderId}/cancel`, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    return response.data
}

/**
 * Получить статистику заказов
 */
export interface OrderStats {
    total: number
    pending: number
    in_progress: number
    completed: number
    cancelled: number
    totalSpent: number
}

export async function getOrderStats(): Promise<OrderStats> {
    const token = localStorage.getItem('auth_token')

    const response = await api.get<OrderStats>('/orders/stats', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    return response.data
}
