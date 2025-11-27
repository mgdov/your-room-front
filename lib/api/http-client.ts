/**
 * API Client Configuration
 * Централизованная настройка для всех API запросов
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'
const API_TIMEOUT = 30000 // 30 seconds

export class ApiError extends Error {
    constructor(
        message: string,
        public status?: number,
        public data?: any
    ) {
        super(message)
        this.name = 'ApiError'
    }
}

export interface ApiResponse<T = any> {
    data: T
    message?: string
    success: boolean
}

/**
 * Generic API request wrapper
 */
export async function apiRequest<T = any>(
    endpoint: string,
    options: RequestInit = {}
): Promise<ApiResponse<T>> {
    const url = `${API_BASE_URL}${endpoint}`

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT)

    try {
        const response = await fetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            signal: controller.signal,
        })

        clearTimeout(timeoutId)

        const data = await response.json()

        if (!response.ok) {
            throw new ApiError(
                data.message || 'Произошла ошибка',
                response.status,
                data
            )
        }

        return data
    } catch (error) {
        clearTimeout(timeoutId)

        if (error instanceof ApiError) {
            throw error
        }

        if (error instanceof Error) {
            if (error.name === 'AbortError') {
                throw new ApiError('Превышено время ожидания запроса')
            }
            throw new ApiError(error.message)
        }

        throw new ApiError('Неизвестная ошибка')
    }
}

/**
 * API methods
 */
export const api = {
    get: <T = any>(endpoint: string, options?: RequestInit) =>
        apiRequest<T>(endpoint, { ...options, method: 'GET' }),

    post: <T = any>(endpoint: string, body?: any, options?: RequestInit) =>
        apiRequest<T>(endpoint, {
            ...options,
            method: 'POST',
            body: body ? JSON.stringify(body) : undefined,
        }),

    put: <T = any>(endpoint: string, body?: any, options?: RequestInit) =>
        apiRequest<T>(endpoint, {
            ...options,
            method: 'PUT',
            body: body ? JSON.stringify(body) : undefined,
        }),

    patch: <T = any>(endpoint: string, body?: any, options?: RequestInit) =>
        apiRequest<T>(endpoint, {
            ...options,
            method: 'PATCH',
            body: body ? JSON.stringify(body) : undefined,
        }),

    delete: <T = any>(endpoint: string, options?: RequestInit) =>
        apiRequest<T>(endpoint, { ...options, method: 'DELETE' }),
}
