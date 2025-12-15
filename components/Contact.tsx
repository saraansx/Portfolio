'use client'

import { ArrowUpRight, Send } from 'lucide-react'
import { useSpotlight } from '@/hooks/useSpotlight'

export default function Contact() {
  const cardRef = useSpotlight()

  return (
    <section id="contact" className="pt-20 pb-10 border-t border-white/[0.06] relative z-10 bg-[#000]">
      <div className="max-w-5xl mx-auto px-6 relative">

        <div ref={cardRef} className="card-spotlight rounded-2xl p-8 md:p-12 mb-24 flex flex-col md:flex-row items-center justify-between gap-12 border border-white/[0.08] reveal-on-scroll">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-medium text-white tracking-tighter mb-4">Let&apos;s Connect</h2>
            <p className="text-neutral-400 mb-8 max-w-sm leading-relaxed text-sm">Interested in collaborating on a project or just want to say hi?</p>
            <a href="mailto:zade.wuwa@gmail.com" className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-0.5 hover:text-orange-400 hover:border-orange-400 transition-all text-xs">
              zade.wuwa@gmail.com <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Simple Form */}
          <form action="https://formsubmit.co/zade.wuwa@gmail.com" method="POST" className="w-full max-w-md space-y-4">
            {/* Formsubmit Configuration */}
            <input type="hidden" name="_subject" value="New Portfolio Contact" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="relative group">
              <input
                type="email"
                name="email"
                required
                placeholder="email@domain.com"
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
              />
            </div>
            <div className="relative group">
              <textarea
                name="message"
                rows={3}
                required
                placeholder="Hello Saraans..."
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black font-semibold text-xs py-3.5 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
            >
              Send Message <Send className="w-3 h-3" />
            </button>
          </form>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-neutral-600 font-mono uppercase tracking-wider border-t border-white/[0.06] pt-10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-500/20 rounded-full relative flex items-center justify-center">
              <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
            </div>
            Open for work
          </div>
          <div className="flex items-center gap-8">
            <a href="https://x.com/saraans_" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
            <a href="https://www.instagram.com/saraan._.s/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://github.com/saraansx" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          </div>
          <div>
            © {new Date().getFullYear()} Saraans
          </div>
        </div>
      </div>
    </section>
  )
}

