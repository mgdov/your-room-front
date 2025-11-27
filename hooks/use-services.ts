/**
 * useServices Hook
 * Хук для работы с услугами
 */

import { useEffect, useState } from 'react'
import { getServices, type Service } from '@/lib/api/services'

interface UseServicesOptions {
    platform?: string
    category?: string
    autoFetch?: boolean
}

export function useServices(options: UseServicesOptions = {}) {
    const { platform, category, autoFetch = true } = options

    const [services, setServices] = useState<Service[]>([])
    const [loading, setLoading] = useState(autoFetch)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (autoFetch) {
            fetchServices()
        }
    }, [platform, category, autoFetch])

    async function fetchServices() {
        try {
            setLoading(true)
            setError(null)
            const data = await getServices(platform, category)
            setServices(data)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Ошибка загрузки услуг')
        } finally {
            setLoading(false)
        }
    }

    return {
        services,
        loading,
        error,
        refetch: fetchServices,
    }
}
