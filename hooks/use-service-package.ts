import { useCallback, useEffect, useState } from "react"
import { apiClient } from "@/lib/api/client"
import type { ServicePackage } from "@/lib/types"

interface UseServicePackageState {
    data: ServicePackage | null
    isLoading: boolean
    error: string | null
}

export function useServicePackage(networkId: string, categorySlug: string, packageId: string) {
    const [state, setState] = useState<UseServicePackageState>({
        data: null,
        isLoading: true,
        error: null,
    })

    const load = useCallback(async () => {
        if (!networkId || !categorySlug || !packageId) {
            setState({ data: null, isLoading: false, error: null })
            return
        }

        setState((prev) => ({ ...prev, isLoading: true, error: null }))

        try {
            const data = await apiClient.getServicePackage(networkId, categorySlug, packageId)
            setState({ data, isLoading: false, error: null })
        } catch (error) {
            const message = error instanceof Error ? error.message : "Не удалось загрузить пакет"
            setState({ data: null, isLoading: false, error: message })
        }
    }, [networkId, categorySlug, packageId])

    useEffect(() => {
        void load()
    }, [load])

    return state
}
