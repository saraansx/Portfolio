'use client'

import { Zap } from 'lucide-react'

export default function Philosophy() {
  return (
    <section className="py-32 relative z-10 overflow-hidden reveal-on-scroll">
      <div className="absolute inset-0 bg-white/[0.01]"></div>
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <div className="w-16 h-16 mx-auto mb-10 rounded-2xl bg-gradient-to-b from-neutral-800 to-black p-[1px]">
          <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
            <Zap className="w-8 h-8 text-neutral-400 animate-[spin_10s_linear_infinite]" />
          </div>
        </div>
        <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter leading-tight mb-8">
          Turning ideas into <br />
          <span className="text-neutral-500">scalable code.</span>
        </h2>
        <p className="text-lg text-neutral-400 font-light max-w-2xl mx-auto">
          Always learning, always building. I believe in writing clean, efficient code that solves real-world problems.
        </p>
      </div>
    </section>
  )
}

