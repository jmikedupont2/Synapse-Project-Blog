import { BlogPost } from '@/types/blog'

const API_BASE_URL = process.env.API_URL || 'http://localhost:4050'
const API_KEY = process.env.ADMIN_API_KEY

export async function fetchBlogPosts(): Promise<BlogPost[]> {
    try {
        const headers = new Headers({
            "Content-Type": "application/json",
            "x-api-key": process.env.ADMIN_API_KEY || ''
        });

        console.log('Making request to:', `${API_BASE_URL}/posts`)
        console.log('With headers:', Object.fromEntries(headers.entries()))

        const response = await fetch(`${API_BASE_URL}/posts`, {
            method: 'GET',
            headers: headers,
            credentials: 'include',
        });
        
        // Debug logging
        console.log('Response status:', response.status)
        console.log('Response headers:', Object.fromEntries(response.headers))
        
        if (!response.ok) {
            const errorText = await response.text()
            console.error('Error response:', errorText)
            throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`)
        }

        const text = await response.text()
        console.log('Raw response text:', text)

        try {
            const data = JSON.parse(text)
            console.log('Parsed data:', data)
            return data as BlogPost[]
        } catch (e) {
            console.error('JSON parse error:', e)
            throw new Error('Invalid JSON response')
        }
    } catch (error) {
        console.error('Full error details:', error)
        throw error
    }
}

export async function fetchBlogPost(slug: string): Promise<BlogPost> {
    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": process.env.ADMIN_API_KEY || ''
    });

    const response = await fetch(`${API_BASE_URL}/posts/${slug}`, {
        method: 'GET',
        headers: headers,
        credentials: 'include',
    });

    if (!response.ok) {
        throw new Error('Failed to fetch post')
    }
    return response.json()
}

export async function refreshBlogPosts(slug: string): Promise<BlogPost> {
    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": process.env.ADMIN_API_KEY || ''
    });

    const response = await fetch(`${API_BASE_URL}/posts/${slug}`, {
        method: 'GET',
        headers: headers,
        credentials: 'include',
    });

    if (!response.ok) {
        throw new Error('Failed to fetch post')
    }
    return response.json()
}