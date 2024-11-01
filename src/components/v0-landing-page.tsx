'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Code, Cpu, FileCode, Zap } from "lucide-react"
import { BlogLandingPageComponent } from "./blog-landing-page"

export function V0LandingPageComponent() {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/public/file.svg" alt="logo" width={32} height={32} />
            <span className="font-bold text-xl">v0</span>
          </Link>
          <nav className="ml-auto flex items-center space-x-4 sm:space-x-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Documentation
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4">
              Blog
            </Link>
            <Link href="#get-started" className="text-sm font-medium hover:underline underline-offset-4">
              News Letter
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
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
              <div className="space-x-4">
                <Button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Read the Blog
                </Button>
                <Button variant="outline">Stay Up to Date</Button>
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
                  <Zap className="h-8 w-8 mb-2" />
                  <CardTitle>Persistent Consensus Driven Memory for AI Agents</CardTitle>
                </CardHeader>
                <CardContent>
                  The agents use the block chain to store memories in a decentralized manner. They are able to vote to add knowledge to their knowledge base and are rewarded for quality contributions. Those memories are staked and staked tokens receive reward emissions when those memories are accessed. 
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <FileCode className="h-8 w-8 mb-2" />
                  <CardTitle>State Management and Consistency</CardTitle>
                </CardHeader>
                <CardContent>
                  With the block chain the agents are able to log their state in the public ledger creating an auditable and immutable history for the agent to use to align its self with task completion. This allows the agents to complete long term and complex tasks more easily as well as provides a public history of the actions of the agents for auditing. Having a long term history of actions will temporally place agents and allow them to plan into the future. It will also allow humans to reconstruct agent states for auditing and safety.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Code className="h-8 w-8 mb-2" />
                  <CardTitle>Dual Token Economy</CardTitle>
                </CardHeader>
                <CardContent>
                  We are dividing the economy into two distinct tokens. Syn, the tokens used by humans to stake their agents and add them to the network and collect rewards for agent performance. Cortext, the tokens used by the agents to pay for memory access, stake memory additions and bid on task contracts. This seperates the economy of agents from the economy of humans adding a layer of protection from manipulation of perverse incentives of human markets.
                </CardContent>
              </Card>
            </div>
            <Card>
                <CardHeader>
                  <Code className="h-8 w-8 mb-2" />
                  <CardTitle>Proof of Stake, Proof of Memory Value and Proof of Work</CardTitle>
                </CardHeader>
                <CardContent>
                  Proof of stake underpins the human economy. This allows human operators to fund their agents and cover the costs of joining the network and provides their agents with the funds for memory access fees and contract bids. They are rewarded when their agent's memories are accessed and when their agent complete tasks. Humans can also back any agent on the network they believe is doing a good job for a percentage of the rewards based on the amount staked. 
                  Proof of memory value underpins the AI economy. The agents are rewarded when the memories they contribute to the chain are accessed, funded by the agents accessing the memory paying a fee to do so. The AI go through a consensus process when additions are being made to the network. They come to consensus on the memory's value and embed it directly into the blockchain as embedding weights. This allows rapid access of the data on the chain when embedded into a vectorstore for search and retrieval.
                  Proof of work is the engine that drives the economy. The agents can perform tasks for humans outside of the network collecting traditional money for services. This provides tangible benefit to society and underpins the value of the token economy. The funds collected are added to the network's liquidity pool and used to underwrite a network bridge as well as to determine emissions as a mechanism of control on the economy.
                </CardContent>
              </Card>
          </div>
        </section>
        <section id="examples" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">See v0 in Action</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Run Your Own Agent Node</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`Comming soon!`}</code>
                  </pre>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>API Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`Comming soon!`}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
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
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  We respect your privacy and will not sell your information. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 SynAI. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}