/**
 * User API
 * Методы для работы с профилем пользователя
 */

import { api } from './http-client'

export interface UserProfile {
    id: string
    email: string
    username: string
    telegram?: string
    balance: number
    avatar?: string
    createdAt: string
}

export interface UpdateProfileData {
    username?: string
    telegram?: string
    avatar?: string
}

export interface ChangePasswordData {
    currentPassword: string
    newPassword: string
}

/**
 * Получить профиль пользователя
 */
export async function getProfile(): Promise<UserProfile> {
    const token = localStorage.getItem('auth_token')

    const response = await api.get<UserProfile>('/user/profile', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    return response.data
}

/**
 * Обновить профиль
 */
export async function updateProfile(data: UpdateProfileData): Promise<UserProfile> {
    const token = localStorage.getItem('auth_token')

    const response = await api.patch<UserProfile>('/user/profile', data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    return response.data
}

/**
 * Изменить пароль
 */
export async function changePassword(data: ChangePasswordData): Promise<void> {
    const token = localStorage.getItem('auth_token')

    await api.post('/user/password', data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}

/**
 * Получить баланс
 */
export async function getBalance(): Promise<number> {
    const token = localStorage.getItem('auth_token')

    const response = await api.get<{ balance: number }>('/user/balance', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    return response.data.balance
}
