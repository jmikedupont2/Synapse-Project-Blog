'use client'

import Link from "next/link"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Code, FileCode, Zap } from "lucide-react"
import NetworkCheckIcon from "./networkCheckIcon"
import Header from "./header"
import Footer from "./footer"
import SelectedPost from "./selected-post"
import { truncateText } from "./blog-landing-page";
import { fetchBlogPost, fetchBlogPosts } from "@/lib/hackmd"
import { BlogPost } from '@/types/blog'
import { useState, useRef, useEffect } from "react"
import { EmailSignupDialog } from './email-signup-dialog'


export function V0LandingPageComponent() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const featuredPostRef = useRef<HTMLDivElement>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  
  const postSlug = "GAyasoaES5yaquQPmiwRIw"

  useEffect(() => {
  
    async function loadFeaturedPost(){
      try {
        setIsLoading(true)
        const post = await fetchBlogPost(postSlug)
        setSelectedPost(post)
      } catch (err) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    loadFeaturedPost()
  }, [])

  return (
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Header />
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-12 lg:py-24 xl:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    SynAI: Empowering AI with Collective Memory
                  </h1>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Using block chain technology to create an immutable, secure, and auditable collective AI memory store. 
                  </p>
                </div>
                <iframe 
                  width="100%" 
                  height="300" 
                  scrolling="no" 
                  frameBorder="no" 
                  allow="autoplay" 
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1946373975&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                />
                <div style={{
                  fontSize: "10px",
                  color: "#cccccc",
                  lineBreak: "anywhere",
                  wordBreak: "normal",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis", 
                  fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                  fontWeight: 100,
                }}>
                  <a href="https://soundcloud.com/bakobiibizo" title="Bakobiibizo" target="_blank" style={{ color: "#cccccc", textDecoration: "none" }}>
                    Bakobiibizo
                  </a>
                  {" · "}
                  <a href="https://soundcloud.com/bakobiibizo/synapse-breakdown" title="SynAI - Breakdown" target="_blank" style={{ color: "#cccccc", textDecoration: "none" }}>
                    SynAI - Breakdown
                  </a>
                </div>
                <div className="space-x-4">
                  <Button 
                    asChild 
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    <Link href="/blog">Read the Blog</Link>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline"
                  >
                    <Link href="#get-started">Stay Up to Date</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <NetworkCheckIcon className="h-8 w-8 mb-2" />
                    <CardTitle>Persistent Consensus Driven Memory for AI Agents</CardTitle>
                  </CardHeader>
                  <CardContent>
                  Agents use blockchain to store memories in a decentralized manner, voting to add knowledge and receiving rewards for high-quality contributions.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <FileCode className="h-8 w-8 mb-2" />
                    <CardTitle>State Management and Consistency</CardTitle>
                  </CardHeader>
                  <CardContent>
                  Blockchain enables agents to log states in a public, immutable ledger, facilitating long-term task completion, planning, and providing a public history for auditing.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Code className="h-8 w-8 mb-2" />
                    <CardTitle>Dual Token Economy</CardTitle>
                  </CardHeader>
                  <CardContent>
                  The economy is divided into two tokens: Syn for humans to stake and earn rewards from agent performance, and Cortext for agents to pay for memory access, stake additions, and bid on tasks, protecting the agent economy from human market influences.
                  </CardContent>
                </Card>
              </div>
              <Card>
                  <CardHeader>
                    <Code className="h-8 w-8 mb-2" />
                    <CardTitle>Proof of Stake, Proof of Memory Value and Proof of Work</CardTitle>
                  </CardHeader>
                  <CardContent>
                  Proof of Stake supports the human economy by funding agents' network participation and memory access, while Proof of Memory Value rewards agents for accessed memories, and Proof of Work allows agents to earn external income that underwrites the network's liquidity and emission control.
                    </CardContent>
                </Card>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div ref={featuredPostRef} id="featured-post" className="container mx-auto px-4 text-center">
              <p className="text-4xl font-bold mb-8">Featured Blog Post</p>
              {selectedPost && (
                <SelectedPost
                  post={selectedPost}
                  type="featured"
                />
              )}
            </div>
          </section>
          <section id="get-started" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stay Informed</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join the news letter to keep up to date on the project. 
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <Button 
                    onClick={() => setIsDialogOpen(true)}
                    className="w-full"
                  >
                    Subscribe to Newsletter
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    We respect your privacy and will not sell your information.
                  </p>
                  <EmailSignupDialog 
                    open={isDialogOpen} 
                    onOpenChange={setIsDialogOpen}
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="w-full border-t py-6">
          <Footer />
        </footer>
      </div>
    )
  }