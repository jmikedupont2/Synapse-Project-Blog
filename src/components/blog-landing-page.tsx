'use client'

import { useEffect, useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, ClockIcon } from "lucide-react"
import { fetchBlogPosts } from "@/lib/hackmd"
import { BlogPost } from '@/types/blog'
import Markdown from 'react-markdown'
import Header from "./header"
import Footer from "./footer"
import { Input } from './ui/input'

function formatDate(timestamp?: number | null): string {
  if (!timestamp) return 'Date unavailable'
  return new Date(timestamp).toLocaleDateString()
}

function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

export default function BlogLandingPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadPosts() {
      try {
        setIsLoading(true)
        const data = await fetchBlogPosts()
        if (!Array.isArray(data)) {
          throw new Error('Invalid response format')
        }
        setPosts(data)
      } catch (err) {
        console.error('Error loading posts:', err)
        setError(err instanceof Error ? err.message : 'Failed to load blog posts')
      } finally {
        setIsLoading(false)
      }
    }

    loadPosts()
  }, [])


  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">{error}</div>
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Header />
      </header>
      <main className="flex-1">
        {/* Blog Posts Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Syn-AI Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Card key={post.id} className="flex flex-col">
                  <CardHeader>
                    {post.coverImage && (
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        width={400}
                        height={225}
                        className="aspect-video overflow-hidden rounded-t-xl object-cover"
                      />
                    )}
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="prose prose-sm dark:prose-invert line-clamp-3">
                      <Markdown>{post.excerpt || truncateText(post.content, 150)}</Markdown>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between mt-auto">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CalendarIcon className="mr-1 h-4 w-4" />
                      {formatDate(post.lastModified)}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" size="sm">Read More</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stay Updated</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter to receive the latest blog posts and updates.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <Footer />
      </footer> 
    </div>
    </div>
  )
}