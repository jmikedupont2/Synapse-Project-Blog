import './globals.css'
import type { Metadata } from 'next'
import { cn } from "../lib/utils"
import localFont from 'next/font/local'


export const metadata: Metadata = {
  title: 'Syn-AI',
  description: 'Empowering AI with collective memory',
}
const fontHeading = localFont({
  src: [
    {
      path: '../app/fonts/Metropolis-SemiBold.otf',
      style: 'normal'
    }
  ],
  variable: '--font-heading',
})

const fontBody = localFont({
  src: [
    {
      path: '../app/fonts/Metropolis-Regular.otf',
      style: 'normal'
    }
  ],
   variable: '--font-body'
})

export default function Layout({ children: children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}