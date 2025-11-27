/**
 * useOrders Hook
 * Хук для работы с заказами
 */

import { useEffect, useState } from 'react'
import { getOrders, type Order, type OrdersResponse } from '@/lib/api/orders'

interface UseOrdersOptions {
    page?: number
    limit?: number
    status?: Order['status']
    autoFetch?: boolean
}

export function useOrders(options: UseOrdersOptions = {}) {
    const {
        page = 1,
        limit = 20,
        status,
        autoFetch = true,
    } = options

    const [data, setData] = useState<OrdersResponse | null>(null)
    const [loading, setLoading] = useState(autoFetch)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (autoFetch) {
            fetchOrders()
        }
    }, [page, limit, status, autoFetch])

    async function fetchOrders() {
        try {
            setLoading(true)
            setError(null)
            const response = await getOrders(page, limit, status)
            setData(response)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Ошибка загрузки заказов')
        } finally {
            setLoading(false)
        }
    }

    return {
        orders: data?.orders || [],
        total: data?.total || 0,
        page: data?.page || page,
        limit: data?.limit || limit,
        loading,
        error,
        refetch: fetchOrders,
    }
}
