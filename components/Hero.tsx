'use client'

import { Code2 } from 'lucide-react'

export default function Hero() {
  return (
    <main className="relative z-10 pt-40 pb-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* Status Badge */}
        <div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm mb-10 group hover:border-white/[0.15] transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          <span className="text-xs font-mono text-neutral-400 tracking-wide uppercase group-hover:text-neutral-300 transition-colors">17 y/o • Kolkata, IN</span>
        </div>

        {/* Main Heading */}
        <h1 className="reveal-on-scroll delay-100 text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50">
          Fullstack &amp; AI/ML<br />
          <span className="text-neutral-600">developer.</span>
        </h1>

        <p className="reveal-on-scroll delay-200 text-sm sm:text-base text-neutral-400 max-w-xl mx-auto mb-12 font-light leading-relaxed tracking-tight">
          Building intelligent web solutions. Fluent in Python, PyTorch, and the Modern Web. Crafting the intersection of AI and Engineering.
        </p>

        {/* Actions */}
        <div className="reveal-on-scroll delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a href="#work" className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-white font-medium text-xs rounded-lg transition-all duration-300 ease-out hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-[0_4px_10px_rgba(0,0,0,0.5)] group">
            <Code2 className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
            View Projects
          </a>
          <a href="https://github.com/saraansx" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-transparent hover:border-white/10 hover:bg-white/[0.02] text-neutral-500 hover:text-white font-medium text-xs rounded-lg transition-all duration-300 ease-out hover:scale-105 active:scale-95">
            github.com/saraansx
          </a>
        </div>

        {/* Code Visual */}
        <div className="mt-24 w-full max-w-3xl mx-auto perspective-1000 animate-float reveal-on-scroll delay-300">
          <div className="relative bg-[#050505]/90 backdrop-blur-xl border border-white/[0.08] rounded-xl p-1 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
            {/* Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.01]">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#333] border border-white/5"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#333] border border-white/5"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#333] border border-white/5"></div>
              </div>
              <div className="ml-4 text-[10px] font-mono text-neutral-600">portfolio.ts</div>
            </div>
            {/* Editor */}
            <div className="p-6 overflow-hidden relative">
              {/* Glow effect in code */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none"></div>

              <div className="font-mono text-xs leading-7 text-neutral-400">
                <div className="flex"><span className="w-6 inline-block text-neutral-700 select-none">1</span><span className="text-orange-400">interface</span> <span className="text-amber-200">Engineer</span> {'{'}</div>
                <div className="flex"><span className="w-6 inline-block text-neutral-700 select-none">2</span><span className="pl-4 text-orange-400">stack</span>: <span className="text-green-400">string</span>[];</div>
                <div className="flex"><span className="w-6 inline-block text-neutral-700 select-none">3</span><span className="pl-4 text-orange-400">focus</span>: <span className="text-green-400">'Web'</span> | <span className="text-green-400">'AI/ML'</span>;</div>
                <div className="flex"><span className="w-6 inline-block text-neutral-700 select-none">4</span>{'}'}</div>
                <div className="flex"><span className="w-6 inline-block text-neutral-700 select-none">5</span></div>
                <div className="flex"><span className="w-6 inline-block text-neutral-700 select-none">6</span><span className="text-orange-400">const</span> <span className="text-amber-200">saraans</span>: <span className="text-amber-200">Engineer</span> = {'{'}</div>
                <div className="flex"><span className="w-6 inline-block text-neutral-700 select-none">7</span><span className="pl-4">stack: [<span className="text-green-400">'Python'</span>, <span className="text-green-400">'Java'</span>, <span className="text-green-400">'React'</span>, <span className="text-green-400">'TensorFlow'</span>],</span></div>
                <div className="flex"><span className="w-6 inline-block text-neutral-700 select-none">8</span><span className="pl-4">focus: <span className="text-green-400">'AI/ML'</span>,</span></div>
                <div className="flex"><span className="w-6 inline-block text-neutral-700 select-none">9</span>{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

