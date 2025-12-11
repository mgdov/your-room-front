import type { Network, ServiceCatalog, ServiceCategory, ServicePackage } from "@/lib/types"
import { mockNetworks, mockServiceCatalog, mockServiceCategories, mockServicePackages } from "./mock-data"

export interface ApiClient {
    getNetworks(): Promise<Network[]>
    getServiceCatalog(networkId: string): Promise<ServiceCatalog | null>
    getServiceCategories(networkId: string): Promise<{ categories: ServiceCategory[]; networkName: string }>
    getServicePackages(networkId: string, categorySlug: string): Promise<{ packages: ServicePackage[]; categoryName: string }>
    getServicePackage(networkId: string, categorySlug: string, packageId: string): Promise<ServicePackage | null>
}

class MockApiClient implements ApiClient {
    async getNetworks(): Promise<Network[]> {
        return mockNetworks
    }

    async getServiceCatalog(networkId: string): Promise<ServiceCatalog | null> {
        return mockServiceCatalog[networkId] ?? null
    }

    async getServiceCategories(networkId: string): Promise<{ categories: ServiceCategory[]; networkName: string }> {
        const network = mockNetworks.find((n) => n.networkId === networkId)
        const categories = mockServiceCategories[networkId] || []
        return {
            categories,
            networkName: network?.name || "Неизвестная сеть",
        }
    }

    async getServicePackages(
        networkId: string,
        categorySlug: string
    ): Promise<{ packages: ServicePackage[]; categoryName: string }> {
        const key = `${networkId}:${categorySlug}`
        const packages = mockServicePackages[key] || []
        const category = mockServiceCategories[networkId]?.find((c) => c.slug === categorySlug)
        return {
            packages,
            categoryName: category?.name || "Неизвестная категория",
        }
    }

    async getServicePackage(networkId: string, categorySlug: string, packageId: string): Promise<ServicePackage | null> {
        const key = `${networkId}:${categorySlug}`
        const packages = mockServicePackages[key] || []
        return packages.find((p) => p.id === packageId) || null
    }
}

class HttpApiClient implements ApiClient {
    private readonly baseUrl: string

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl.replace(/\/$/, "")
    }

    private async request<T>(path: string, init?: RequestInit): Promise<T> {
        const url = `${this.baseUrl}${path}`
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                ...init?.headers,
            },
            ...init,
        })

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`)
        }

        return response.json() as Promise<T>
    }

    getNetworks(): Promise<Network[]> {
        return this.request<Network[]>("/networks")
    }

    getServiceCatalog(networkId: string): Promise<ServiceCatalog | null> {
        return this.request<ServiceCatalog | null>(`/networks/${networkId}/services`)
    }

    getServiceCategories(networkId: string): Promise<{ categories: ServiceCategory[]; networkName: string }> {
        return this.request(`/networks/${networkId}/categories`)
    }

    getServicePackages(
        networkId: string,
        categorySlug: string
    ): Promise<{ packages: ServicePackage[]; categoryName: string }> {
        return this.request(`/networks/${networkId}/categories/${categorySlug}/packages`)
    }

    getServicePackage(networkId: string, categorySlug: string, packageId: string): Promise<ServicePackage | null> {
        return this.request(`/networks/${networkId}/categories/${categorySlug}/packages/${packageId}`)
    }
}

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

export const apiClient: ApiClient = apiBaseUrl ? new HttpApiClient(apiBaseUrl) : new MockApiClient()

export function createApiClient(baseUrl?: string): ApiClient {
    return baseUrl ? new HttpApiClient(baseUrl) : new MockApiClient()
}
