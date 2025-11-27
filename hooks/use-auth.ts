/**
 * useAuth Hook
 * Хук для работы с авторизацией
 */

import { useEffect, useState } from 'react'
import { getCurrentUser, logout, type User } from '@/lib/api/auth'

export function useAuth() {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        checkAuth()
    }, [])

    async function checkAuth() {
        try {
            setLoading(true)
            setError(null)
            const currentUser = await getCurrentUser()
            setUser(currentUser)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Ошибка авторизации')
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    async function handleLogout() {
        try {
            await logout()
            setUser(null)
        } catch (err) {
            console.error('Logout error:', err)
        }
    }

    return {
        user,
        loading,
        error,
        isAuthenticated: !!user,
        logout: handleLogout,
        refetch: checkAuth,
    }
}
