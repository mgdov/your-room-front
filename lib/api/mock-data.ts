import type { Network, ServiceCatalog, ServiceCategory, ServicePackage } from "@/lib/types"

export const mockNetworks: Network[] = []

export const mockServiceCatalog: Record<string, ServiceCatalog> = {}

// Mock service categories for hierarchical flow
export const mockServiceCategories: Record<string, ServiceCategory[]> = {}

// Mock service packages (duration/pricing tiers)
export const mockServicePackages: Record<string, ServicePackage[]> = {}

