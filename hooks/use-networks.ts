import { useCallback, useEffect, useState } from "react"
import { apiClient } from "@/lib/api/client"
import type { Network } from "@/lib/types"

interface UseNetworksState {
    data: Network[]
    isLoading: boolean
    error: string | null
}

export function useNetworks() {
    const [state, setState] = useState<UseNetworksState>({ data: [], isLoading: true, error: null })

    const load = useCallback(async () => {
        setState((prev) => ({ ...prev, isLoading: true, error: null }))

        try {
            const data = await apiClient.getNetworks()
            setState({ data, isLoading: false, error: null })
        } catch (error) {
            const message = error instanceof Error ? error.message : "Не удалось загрузить список соцсетей"
            setState({ data: [], isLoading: false, error: message })
        }
    }, [])

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
