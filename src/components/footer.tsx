import Link from "next/link";


export default function Footer() {
    return (
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © 2024 SynAI. All rights reserved.
                </p>
                <nav className="flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Privacy
                    </Link>
                </nav>
            </div>
        )
    }