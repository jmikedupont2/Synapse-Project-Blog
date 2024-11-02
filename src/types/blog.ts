export interface BlogPost {
  id: string
  title: string
  content: string
  publishDate: number | null
  lastModified: number | null
  excerpt: string
  slug: string
  coverImage: string | null
  readingTime: string | null
} 