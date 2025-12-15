import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Saraans | Fullstack & AI/ML Developer',
  description: 'Fullstack & AI/ML Developer crafting intelligent web applications and machine learning solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="text-neutral-400 antialiased relative selection:bg-orange-500/20 selection:text-orange-200">
        {children}
      </body>
    </html>
  )
}

