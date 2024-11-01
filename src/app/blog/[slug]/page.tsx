import { fetchBlogPost } from "@/lib/hackmd"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface BlogPostPageProps {
    params: {
        slug: string
    }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    try {
        const post = await fetchBlogPost(params.slug)

        return (
            <article className="container mx-auto px-4 py-12">
                <Button variant="ghost" asChild className="mb-8">
                    <Link href="/blog">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>
                </Button>

                {post.coverImage && (
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        width={1200}
                        height={600}
                        className="rounded-lg object-cover mb-8"
                    />
                )}

                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-8">
                    <time dateTime={post.publishDate}>
                        {new Date(post.publishDate).toLocaleDateString()}
                    </time>
                    {post.readingTime && <span>{post.readingTime}</span>}
                </div>

                <div className="prose prose-lg max-w-none">
                    {/* You'll need a markdown renderer here */}
                    {post.content}
                </div>
            </article>
        )
    } catch (error) {
        notFound()
    }
} 