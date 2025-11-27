/**
 * Authentication API
 * Методы для работы с авторизацией и регистрацией
 */

import { api } from './http-client'

export interface LoginCredentials {
    email: string
    password: string
}

export interface RegisterData {
    email: string
    username: string
    password: string
    telegram?: string
}

export interface AuthResponse {
    user: {
        id: string
        email: string
        username: string
        telegram?: string
    }
    token: string
}

export interface User {
    id: string
    email: string
    username: string
    telegram?: string
    balance: number
    createdAt: string
}

/**
 * Авторизация пользователя
 */
export async function login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/login', credentials)

    // Сохранение токена в localStorage
    if (response.data.token) {
        localStorage.setItem('auth_token', response.data.token)
    }

    return response.data
}

/**
 * Регистрация нового пользователя
 */
export async function register(data: RegisterData): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/register', data)

    // Сохранение токена в localStorage
    if (response.data.token) {
        localStorage.setItem('auth_token', response.data.token)
    }

    return response.data
}

/**
 * Выход из системы
 */
export async function logout(): Promise<void> {
    localStorage.removeItem('auth_token')
    await api.post('/auth/logout')
}

/**
 * Получение текущего пользователя
 */
export async function getCurrentUser(): Promise<User> {
    const token = localStorage.getItem('auth_token')

    const response = await api.get<User>('/auth/me', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    return response.data
}

/**
 * Проверка токена
 */
export function getAuthToken(): string | null {
    return localStorage.getItem('auth_token')
}

/**
 * OAuth авторизация
 */
export async function loginWithOAuth(provider: 'google' | 'telegram', code: string): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>(`/auth/oauth/${provider}`, { code })

    if (response.data.token) {
        localStorage.setItem('auth_token', response.data.token)
    }

    return response.data
}
