'use client'

import { useEffect, useState, useRef } from 'react'
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
import SelectedPost from "@/components/selected-post"

function formatDate(timestamp?: number | null): string {
  if (!timestamp) return 'Date unavailable'
  return new Date(timestamp).toLocaleDateString()
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

export default function BlogLandingPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const latestPostRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    async function loadPosts() {
      try {
        setIsLoading(true)
        const data = await fetchBlogPosts()
        if (!Array.isArray(data)) {
          throw new Error('Invalid response format')
        }
        setPosts(data)
        setSelectedPost(data[2])
      } catch (err) {
        console.error('Error loading posts:', err)
        setError(err instanceof Error ? err.message : 'Failed to load blog posts')
      } finally {
        setIsLoading(false)
      }
    }

    loadPosts()
  }, [])

  const handlePostSelect = (post: BlogPost) => {
    setSelectedPost(post)
    latestPostRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Header />
        </header>
        <main className="flex-1">
        
          {/* Newsletter Section */}
          <section className="w-full py-6 md:py-12 lg:py-24">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-lg font-bold tracking-tighter sm:text-xl">Stay Updated</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-2xl/relaxed lg:text-base/relaxed 2xl:text-lg/relaxed">
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

          {/* Latest Post Section */} 
          <div  className="container mx-auto px-4 text-center text-4xl md:text-5xl lg:text-6xl font-extrabold">
            <p className="text-4xl font-bold mb-8">Latest Post</p>
          </div> 
          <div ref={latestPostRef} id="latest-post" className="container mx-auto px-4">
            {selectedPost && (
              <SelectedPost
                post={selectedPost}
                type="latest"
                onPostSelect={handlePostSelect}
              />
            )}
          </div>

          {/* Other Posts Grid */}
          <section className="w-full py-12 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8">More Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.filter(post => post.id !== selectedPost?.id).map((post) => (
                  <Card 
                    key={post.id} 
                    className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => handlePostSelect(post)}
                  >
                    <CardHeader>
                      {post.coverImage && (
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          width={900}
                          height={700}
                          className="aspect-video overflow-hidden rounded-t-xl object-cover"
                        />
                      )}
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="prose prose-sm dark:prose-invert line-clamp-3">
                        <Markdown>{post.excerpt || truncateText(post.content, 200)}</Markdown>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between mt-auto">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarIcon className="mr-1 h-4 w-4" />
                        {formatDate(post.lastModified)}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={(e) => {
                          e.stopPropagation()
                          handlePostSelect(post)
                        }}
                      >
                        Read More
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
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