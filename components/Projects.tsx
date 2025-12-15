'use client'

import { Layout, Check, ArrowUpRight, Code2 } from 'lucide-react'


export default function Projects() {
  return (
    <section id="work" className="py-32 bg-[#020202] border-t border-white/[0.06] relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-medium text-white tracking-tighter mb-20 reveal-on-scroll">Recent Projects</h2>

        <div className="space-y-32">

          {/* Project 1: Ava - AI Assistant */}
          <div className="group grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 relative perspective-1000 reveal-on-scroll delay-100">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* 3D Card Effect */}
              <div className="relative rounded-xl bg-[#0a0a0a] border border-white/[0.08] overflow-hidden shadow-2xl transition-all duration-500 transform group-hover:rotate-y-2 group-hover:scale-[1.01] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                {/* Browser Chrome */}
                <div className="h-10 bg-[#0f0f0f] border-b border-white/[0.06] flex items-center px-4 gap-2.5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#2a2a2a]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#2a2a2a]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#2a2a2a]"></div>
                  </div>
                  <div className="ml-4 flex-1 h-6 bg-[#1a1a1a] rounded-md border border-white/[0.02] text-[10px] text-neutral-600 flex items-center px-3 font-mono">ava.local</div>
                </div>
                {/* UI Content */}
                <div className="aspect-[16/10] bg-[#050505] p-6 relative flex flex-col justify-end">
                  {/* Chat Interface Visual */}
                  <div className="space-y-4 max-w-[90%] mx-auto w-full">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/10">
                        <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="h-2 w-20 bg-white/10 rounded-full"></div>
                        <div className="p-3 rounded-2xl rounded-tl-none bg-white/[0.05] border border-white/[0.05]">
                          <div className="h-2 w-48 bg-white/10 rounded mb-2"></div>
                          <div className="h-2 w-32 bg-white/10 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 flex-row-reverse">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-white/50"></div>
                      </div>
                      <div className="flex-1 space-y-2 flex flex-col items-end">
                        <div className="p-3 rounded-2xl rounded-tr-none bg-orange-500/10 border border-orange-500/10">
                          <div className="h-2 w-36 bg-orange-500/30 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Input Area */}
                  <div className="mt-8 mx-auto w-full max-w-[90%] h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center px-4">
                    <div className="h-2 w-24 bg-white/10 rounded-full"></div>
                  </div>

                  {/* Overlay Buttons for Ava */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                    <a href="https://github.com/saraansx/Ava" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-medium rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-white/10 hover:scale-105 active:scale-95 flex items-center gap-2 hover:border-white/40">
                      <Code2 className="w-3.5 h-3.5" /> View Source
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:col-span-5 reveal-on-scroll delay-200">
              <div className="mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                  <Layout className="w-5 h-5 text-orange-500" />
                </div>
                <span className="text-[11px] font-mono text-orange-400 uppercase tracking-widest">AI Personal Assistant</span>
              </div>
              <h3 className="text-3xl font-medium text-white mb-4 group-hover:text-shine transition-all">Ava</h3>
              <p className="text-neutral-400 leading-relaxed mb-8 text-sm">
                AVA is an advanced AI personal assistant using OpenRouter for powerful cloud models and Ollama for fast, private local inference. It’s built to be flexible, efficient, and developer-friendly.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-xs text-neutral-400">
                  <Check className="w-4 h-4 text-white" /> OpenRouter Cloud Models
                </li>
                <li className="flex items-center gap-3 text-xs text-neutral-400">
                  <Check className="w-4 h-4 text-white" /> Private Local Inference (Ollama)
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-[11px] text-neutral-300 bg-white/[0.05] border border-white/[0.08] rounded-full">Python</span>
                <span className="px-3 py-1 text-[11px] text-neutral-300 bg-white/[0.05] border border-white/[0.08] rounded-full">OpenRouter</span>
                <span className="px-3 py-1 text-[11px] text-neutral-300 bg-white/[0.05] border border-white/[0.08] rounded-full">Ollama</span>
                <span className="px-3 py-1 text-[11px] text-neutral-300 bg-white/[0.05] border border-white/[0.08] rounded-full">AI/ML</span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

