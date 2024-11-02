import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { fetchBlogPost } from '@/lib/hackmd'

type Props = {
    params: {
        slug: string
    }
}

export async function GET(
    _request: NextRequest,
    { params }: { params: { slug: string } }
): Promise<NextResponse> {
    try {
        const data = await fetchBlogPost(params.slug)
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
} 