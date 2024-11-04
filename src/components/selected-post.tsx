import { useState, useEffect, useRef } from "react"
import { BlogPost } from "@/types/blog"
import Image from "next/image"
import { CalendarIcon } from "lucide-react"
import Markdown from "react-markdown"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { truncateText } from "./blog-landing-page";

interface SelectedPostProps {
  post: BlogPost
  onPostSelect?: (post: BlogPost) => void
  type?: 'featured' | 'latest'
}

export default function SelectedPost({ post, onPostSelect, type = 'featured' }: SelectedPostProps) {
    const latestPostRef = useRef<HTMLDivElement>(null)
    const pathname = usePathname()
    const [isExpanded, setIsExpanded] = useState(false)

    // Always truncate initially, regardless of page
    const displayContent = !isExpanded 
        ? truncateText(post.content, 400) 
        : post.content

    useEffect(() => {
        if (pathname === '/blog' && type === 'latest') {
            latestPostRef.current?.scrollIntoView({ behavior: "smooth" })
        }
    }, [post, pathname, type])

    if (!post) return null

    return (
        <section 
            ref={latestPostRef} 
            className="w-full py-12 md:py-24 bg-muted"
        >
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
                {post.coverImage && (
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        width={800}
                        height={400}
                        className="w-full rounded-xl mb-8 object-cover"
                    />
                )}
                <div className="prose prose-lg justify-items-start dark:prose-invert max-w-none mb-8">
                    <Markdown className="text-left">{displayContent}</Markdown>
                </div>
                <div className="flex justify-center mt-4">
                    <Button
                        onClick={() => setIsExpanded(!isExpanded)}
                        variant="outline"
                    >
                        {isExpanded ? 'Show Less' : 'Read More'}
                    </Button>
                </div>
                <div className="flex text-left text-sm text-muted-foreground">
                    <CalendarIcon className="mr-1 h-4 w-4" />
                    {post.lastModified ? new Date(post.lastModified).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }) : 'No date available'}
                </div>
            </div>
        </section>
    )
}