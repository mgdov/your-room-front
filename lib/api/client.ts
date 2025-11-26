import type { Network, ServiceCatalog } from "@/lib/types"
import { mockNetworks, mockServiceCatalog } from "./mock-data"

export interface ApiClient {
    getNetworks(): Promise<Network[]>
    getServiceCatalog(networkId: string): Promise<ServiceCatalog | null>
}

class MockApiClient implements ApiClient {
    async getNetworks(): Promise<Network[]> {
        return mockNetworks
    }

    async getServiceCatalog(networkId: string): Promise<ServiceCatalog | null> {
        return mockServiceCatalog[networkId] ?? null
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
}

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

export const apiClient: ApiClient = apiBaseUrl ? new HttpApiClient(apiBaseUrl) : new MockApiClient()

export function createApiClient(baseUrl?: string): ApiClient {
    return baseUrl ? new HttpApiClient(baseUrl) : new MockApiClient()
}
