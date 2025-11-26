import { useCallback, useEffect, useState } from "react"
import { apiClient } from "@/lib/api/client"
import type { ServiceCatalog } from "@/lib/types"

interface ServiceCatalogState {
    data: ServiceCatalog | null
    isLoading: boolean
    error: string | null
}

export function useServiceCatalog(networkId: string | null | undefined) {
    const [state, setState] = useState<ServiceCatalogState>({ data: null, isLoading: Boolean(networkId), error: null })

    const load = useCallback(async () => {
        if (!networkId) {
            setState({ data: null, isLoading: false, error: null })
            return
        }

        setState({ data: null, isLoading: true, error: null })

        try {
            const data = await apiClient.getServiceCatalog(networkId)
            setState({ data, isLoading: false, error: null })
        } catch (error) {
            const message = error instanceof Error ? error.message : "Не удалось загрузить услуги"
            setState({ data: null, isLoading: false, error: message })
        }
    }, [networkId])

    useEffect(() => {
        void load()
    }, [load])

    return {
        data: state.data,
        isLoading: state.isLoading,
        error: state.error,
        reload: load,
    }
}
