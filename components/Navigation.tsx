'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-6 reveal-on-scroll">
      <div className="glass-panel rounded-full pl-6 pr-2 py-1.5 flex items-center gap-6 shadow-2xl">
        <Link href="#" className="text-white text-sm font-bold tracking-tighter flex items-center gap-2 group">
          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_12px_rgba(249,115,22,1)] animate-pulse"></div>
          <span className="text-glow-orange">Saraans</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <a href="#work" className="text-xs font-medium text-neutral-400 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/10 transition-all duration-300 ease-in-out">Projects</a>
          <a href="#stack" className="text-xs font-medium text-neutral-400 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/10 transition-all duration-300 ease-in-out">Stack</a>
          <a href="#experience" className="text-xs font-medium text-neutral-400 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/10 transition-all duration-300 ease-in-out">Journey</a>
        </div>

        <a href="#contact" className="flex items-center gap-2 text-xs font-medium bg-white text-black pl-3 pr-2 py-1.5 rounded-full hover:bg-neutral-200 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          Contact <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </nav>
  )
}

