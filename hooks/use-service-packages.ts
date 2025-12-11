import { useCallback, useEffect, useState } from "react"
import { apiClient } from "@/lib/api/client"
import type { ServicePackage } from "@/lib/types"

interface UseServicePackagesState {
    data: ServicePackage[]
    isLoading: boolean
    error: string | null
    categoryName: string | null
}

export function useServicePackages(networkId: string, categorySlug: string) {
    const [state, setState] = useState<UseServicePackagesState>({
        data: [],
        isLoading: true,
        error: null,
        categoryName: null,
    })

    const load = useCallback(async () => {
        if (!networkId || !categorySlug) {
            setState({ data: [], isLoading: false, error: null, categoryName: null })
            return
        }

        setState((prev) => ({ ...prev, isLoading: true, error: null }))

        try {
            const result = await apiClient.getServicePackages(networkId, categorySlug)
            setState({
                data: result.packages,
                isLoading: false,
                error: null,
                categoryName: result.categoryName,
            })
        } catch (error) {
            const message = error instanceof Error ? error.message : "Не удалось загрузить пакеты"
            setState({ data: [], isLoading: false, error: message, categoryName: null })
        }
    }, [networkId, categorySlug])

    useEffect(() => {
        void load()
    }, [load])

    return state
}
