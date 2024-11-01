const HACKMD_API_URL = 'https://api.hackmd.io/v1';

export interface BlogPost {
  id: string
  title: string
  content: string
  publishDate: string
  lastModified: string
  excerpt: string
  coverImage?: string
  readingTime?: string
  slug: string
}

import { getFromCache, saveToCache, getPostFromCache, savePostToCache } from './cache'

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  // Try to get from cache first
  const cachedPosts = getFromCache()
  if (cachedPosts) {
    return cachedPosts
  }

  // If not in cache, fetch from API
  const response = await fetch(`${HACKMD_API_URL}/notes`, {
    headers: {
      'Authorization': `Bearer ${process.env.HACKMD_API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch blog posts');
  }

  const posts = await response.json();
  
  // Transform HackMD response to our BlogPost type
  return posts.map((post: any) => ({
    id: post.id,
    title: post.title,
    content: post.content,
    publishDate: post.publishedAt,
    lastModified: post.lastChangedAt,
    excerpt: post.excerpt || post.content.substring(0, 150) + '...',
    slug: post.permalink,
    // Add other transformations as needed
  }));
}

export async function fetchBlogPost(slug: string): Promise<BlogPost> {
  // Try to get from cache first
  const cachedPost = getPostFromCache(slug)
  if (cachedPost) {
    return cachedPost
  }

  const response = await fetch(`${HACKMD_API_URL}/notes/${slug}`, {
    headers: {
      'Authorization': `Bearer ${process.env.HACKMD_API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch blog post');
  }

  const post = await response.json();
  
  const transformedPost = {
    id: post.id,
    title: post.title,
    content: post.content,
    publishDate: post.publishedAt,
    lastModified: post.lastChangedAt,
    excerpt: post.excerpt || post.content.substring(0, 150) + '...',
    slug: post.permalink,
  };

  // Save to cache
  savePostToCache(transformedPost);

  return transformedPost;
}

export async function refreshBlogPosts(): Promise<BlogPost[]> {
  const posts = await fetchBlogPosts();
  saveToCache(posts);
  return posts;
} 