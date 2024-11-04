import { Subscription } from '@/types/subscription'

const API_BASE_URL = process.env.API_URL || 'https://blogbackend-synai.ngrok.dev/api/v1'

export async function createSubscription(email: string, name: string): Promise<Subscription> {
    try {
        const headers = new Headers({
            "Content-Type": "application/json",
            "x-api-key": process.env.ADMIN_API_KEY || 'sk-1234'
        });

        const response = await fetch(`${API_BASE_URL}/subscribers`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({ email, name }),
            credentials: 'include'
        });

        if (!response.ok) {
            const errorText = await response.text()
            console.error('Error response:', errorText)
            throw new Error(`Failed to create subscription: ${response.status} ${response.statusText}`)
        }

        return response.json()
    } catch (error) {
        console.error('Subscription creation error:', error)
        throw error
    }
}

export async function fetchSubscribers(): Promise<Subscription[]> {
    try {
        const headers = new Headers({
            "Content-Type": "application/json",
            "x-api-key": process.env.ADMIN_API_KEY || 'sk-1234'
        });

        const response = await fetch(`${API_BASE_URL}/subscribers`, {
            method: 'GET',
            headers: headers,
            credentials: 'include'
        });

        if (!response.ok) {
            const errorText = await response.text()
            console.error('Error response:', errorText)
            throw new Error(`Failed to fetch subscribers: ${response.status} ${response.statusText}`)
        }

        return response.json()
    } catch (error) {
        console.error('Fetch subscribers error:', error)
        throw error
    }
}

export async function deleteSubscription(id: string): Promise<void> {
    try {
        const headers = new Headers({
            "Content-Type": "application/json",
            "x-api-key": process.env.ADMIN_API_KEY || 'sk-1234'
        });

        const response = await fetch(`${API_BASE_URL}/subscribers/${id}`, {
            method: 'DELETE',
            headers: headers,
            credentials: 'include'
        });

        if (!response.ok) {
            const errorText = await response.text()
            console.error('Error response:', errorText)
            throw new Error(`Failed to delete subscription: ${response.status} ${response.statusText}`)
        }
    } catch (error) {
        console.error('Delete subscription error:', error)
        throw error
    }
} 