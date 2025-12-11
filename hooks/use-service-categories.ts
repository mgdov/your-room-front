import { useCallback, useEffect, useState } from "react"
import { apiClient } from "@/lib/api/client"
import type { ServiceCategory } from "@/lib/types"

interface UseServiceCategoriesState {
    data: ServiceCategory[]
    isLoading: boolean
    error: string | null
    networkName: string | null
}

export function useServiceCategories(networkId: string) {
    const [state, setState] = useState<UseServiceCategoriesState>({
        data: [],
        isLoading: true,
        error: null,
        networkName: null,
    })

    const load = useCallback(async () => {
        if (!networkId) {
            setState({ data: [], isLoading: false, error: null, networkName: null })
            return
        }

        setState((prev) => ({ ...prev, isLoading: true, error: null }))

        try {
            const result = await apiClient.getServiceCategories(networkId)
            setState({
                data: result.categories,
                isLoading: false,
                error: null,
                networkName: result.networkName,
            })
        } catch (error) {
            const message = error instanceof Error ? error.message : "Не удалось загрузить категории"
            setState({ data: [], isLoading: false, error: message, networkName: null })
        }
    }, [networkId])

    useEffect(() => {
        void load()
    }, [load])

    return state
}
