import { fetchBlogPosts } from '@/lib/hackmd'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const data = await fetchBlogPosts()
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
} 