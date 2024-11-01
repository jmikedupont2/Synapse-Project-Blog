import { clearCache } from '@/lib/cache'
import { fetchBlogPosts } from '@/lib/hackmd'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    // Optional: Add authentication here
    const authHeader = req.headers.get('authorization')
    if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_API_KEY}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Clear existing cache
    clearCache()

    // Fetch fresh data
    const posts = await fetchBlogPosts()

    return NextResponse.json({ 
      message: 'Cache refreshed successfully',
      postCount: posts.length 
    })
  } catch (error) {
    console.error('Failed to refresh cache:', error)
    return NextResponse.json(
      { error: 'Failed to refresh cache' },
      { status: 500 }
    )
  }
} 