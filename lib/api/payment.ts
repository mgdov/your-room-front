/**
 * Payment API
 * Методы для работы с платежами
 */

import { api } from './http-client'

export interface PaymentMethod {
    id: string
    name: string
    type: string
    icon: string
    minAmount: number
    maxAmount: number
}

export interface CreatePaymentData {
    amount: number
    method: string
}

export interface Payment {
    id: string
    userId: string
    amount: number
    method: string
    status: 'pending' | 'completed' | 'failed' | 'cancelled'
    paymentUrl?: string
    createdAt: string
    completedAt?: string
}

/**
 * Получить доступные методы оплаты
 */
export async function getPaymentMethods(): Promise<PaymentMethod[]> {
    const response = await api.get<PaymentMethod[]>('/payment/methods')
    return response.data
}

/**
 * Создать платеж
 */
export async function createPayment(data: CreatePaymentData): Promise<Payment> {
    const token = localStorage.getItem('auth_token')

    const response = await api.post<Payment>('/payment', data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    return response.data
}

/**
 * Получить статус платежа
 */
export async function getPaymentStatus(paymentId: string): Promise<Payment> {
    const token = localStorage.getItem('auth_token')

    const response = await api.get<Payment>(`/payment/${paymentId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    return response.data
}

/**
 * Получить историю платежей
 */
export async function getPaymentHistory(page: number = 1, limit: number = 20): Promise<{
    payments: Payment[]
    total: number
}> {
    const token = localStorage.getItem('auth_token')

    const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
    })

    const response = await api.get<{ payments: Payment[], total: number }>(
        `/payment/history?${params}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    )

    return response.data
}
