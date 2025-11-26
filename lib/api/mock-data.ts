import type { Network, ServiceCatalog } from "@/lib/types"

// Поддерживаем пустой мок до подключения админ-панели
export const mockNetworks: Network[] = []

export const mockServiceCatalog: Record<string, ServiceCatalog> = {}
