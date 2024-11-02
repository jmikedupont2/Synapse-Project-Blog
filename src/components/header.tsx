import Link from "next/link"
import { Button } from "./ui/button"
import { SearchIcon, MenuIcon } from "lucide-react"
import Image from "next/image"

export default function Header() {
    return (
            <div className="container flex h-14 items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/icon.png"
                        alt="SynAI Logo"
                        width={32}
                        height={32}
                        className="h-8 w-8"
                        priority
                    />
                    <span className="font-bold text-xl">SynAI Blog</span>
                </Link>
                <nav className="ml-auto flex items-center space-x-4 sm:space-x-6">
                    <Link href="/#features" className="text-sm font-medium hover:underline underline-offset-4">
                        about
                    </Link>
                    <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4">
                        blog
                    </Link>
                    <Link href="/#newsletter" className="text-sm font-medium hover:underline underline-offset-4">
                        news letter
                    </Link>
                </nav>
                <Button variant="ghost" size="icon" className="ml-4">
                    <SearchIcon className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                </Button>
                <Button variant="ghost" size="icon" className="ml-2 md:hidden">
                    <MenuIcon className="h-4 w-4" />
                    <span className="sr-only">Menu</span>
                </Button>
            </div>
        )
    }