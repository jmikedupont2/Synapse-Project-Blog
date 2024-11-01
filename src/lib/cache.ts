import fs from 'fs'
import path from 'path'
import { BlogPost } from '@/types/blog'

const CACHE_DIR = path.join(process.cwd(), '.cache')
const POSTS_CACHE_FILE = path.join(CACHE_DIR, 'blog-posts.json')
const POST_CACHE_DIR = path.join(CACHE_DIR, 'posts')
// const CACHE_TTL = 1000 * 60 * 60 * 24 // 24 hours

interface CacheData {
  timestamp: number
  posts: BlogPost[]
}

export function ensureCacheDirectory() {
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true })
  }
  if (!fs.existsSync(POST_CACHE_DIR)) {
    fs.mkdirSync(POST_CACHE_DIR, { recursive: true })
  }
}

export function saveToCache(posts: BlogPost[]) {
  ensureCacheDirectory()
  const cacheData: CacheData = {
    timestamp: Date.now(),
    posts,
  }
  fs.writeFileSync(POSTS_CACHE_FILE, JSON.stringify(cacheData, null, 2))
}

export function getFromCache(): BlogPost[] | null {
  try {
    if (!fs.existsSync(POSTS_CACHE_FILE)) {
      return null
    }

    const cacheData: CacheData = JSON.parse(fs.readFileSync(POSTS_CACHE_FILE, 'utf-8'))
    
    // if (Date.now() - cacheData.timestamp > CACHE_TTL) {
    //   return null
    // }

    return cacheData.posts
  } catch (error) {
    return null
  }
}

export function savePostToCache(post: BlogPost) {
  ensureCacheDirectory()
  const cacheData = {
    timestamp: Date.now(),
    post,
  }
  fs.writeFileSync(
    path.join(POST_CACHE_DIR, `${post.slug}.json`),
    JSON.stringify(cacheData, null, 2)
  )
}

export function getPostFromCache(slug: string): BlogPost | null {
  try {
    const cachePath = path.join(POST_CACHE_DIR, `${slug}.json`)
    if (!fs.existsSync(cachePath)) {
      return null
    }

    const cacheData = JSON.parse(fs.readFileSync(cachePath, 'utf-8'))
    
    // if (Date.now() - cacheData.timestamp > CACHE_TTL) {
    //   return null
    // }

    return cacheData.post
  } catch (error) {
    return null
  }
}

export function clearCache() {
  if (fs.existsSync(POSTS_CACHE_FILE)) {
    fs.unlinkSync(POSTS_CACHE_FILE)
  }
  if (fs.existsSync(POST_CACHE_DIR)) {
    fs.rmSync(POST_CACHE_DIR, { recursive: true, force: true })
    fs.mkdirSync(POST_CACHE_DIR)
  }
} 