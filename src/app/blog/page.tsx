import Link from "next/link"
import Image from "next/image"
import { fetchBlogPosts } from "@/lib/hackmd"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CalendarIcon, ClockIcon, MenuIcon, SearchIcon } from "lucide-react"

export default async function BlogPage() {
    const posts = await fetchBlogPosts()

    return (
        <div className="container mx-auto px-4">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Blog
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Latest updates and insights about SynAI
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <article key={post.id} className="group relative flex flex-col space-y-2">
                        {post.coverImage && (
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                width={600}
                                height={400}
                                className="rounded-lg object-cover"
                            />
                        )}
                        <h2 className="text-2xl font-bold">{post.title}</h2>
                        <p className="text-muted-foreground">{post.excerpt}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <time dateTime={post.publishDate}>
                                {new Date(post.publishDate).toLocaleDateString()}
                            </time>
                            {post.readingTime && <span>{post.readingTime}</span>}
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                            <Button variant="link">Read More →</Button>
                        </Link>
                    </article>
                ))}
            </section>
        </div>
    )
}