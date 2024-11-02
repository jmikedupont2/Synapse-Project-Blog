import { refreshBlogPosts } from '@/lib/hackmd'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(
    request: NextRequest,
    { params }: { params: { slug: string } }
) {
    try {
        const data = await refreshBlogPosts(params.slug)
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
} 