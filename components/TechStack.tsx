'use client'

import { Cpu, Clock, Database, Brain } from 'lucide-react'
import { useSpotlight } from '@/hooks/useSpotlight'

export default function TechStack() {
  return (
    <section id="stack" className="py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12 reveal-on-scroll">
          <h2 className="text-3xl font-medium text-white tracking-tighter">Tech Arsenal</h2>
          <span className="text-xs text-neutral-600 font-mono hidden sm:block">// TOOLS I USE DAILY</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[200px]">

          {/* Main Tech Card */}
          <TechCard
            className="col-span-1 md:col-span-2 row-span-2"
            icon={Brain}
            title="Fullstack & AI"
            description="Building across the stack. React & Next.js for web, TensorFlow & Python for AI."
            tags={['Python', 'TensorFlow', 'React', 'Next.js', 'TypeScript', 'JavaScript']}
            delay="delay-100"
          />

          {/* Stats Card */}
          <StatsCard delay="delay-200" />

          {/* Location Card */}
          <LocationCard delay="delay-300" />

          {/* Backend Card */}
          <BackendCard delay="delay-200" />
        </div>
      </div>
    </section>
  )
}

function TechCard({ className, icon: Icon, title, description, tags, delay }: {
  className?: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  tags: string[]
  delay?: string
}) {
  const cardRef = useSpotlight()

  return (
    <div ref={cardRef} className={`${className} card-spotlight rounded-3xl p-8 flex flex-col justify-between group reveal-on-scroll ${delay || ''}`}>
      <div>
        <div className="w-12 h-12 bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/[0.06] transition-colors">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-medium text-white mb-3">{title}</h3>
        <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1.5 bg-white/[0.03] border border-white/[0.08] rounded-lg text-xs text-neutral-300 group-hover:border-white/20 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function StatsCard({ delay }: { delay?: string }) {
  const cardRef = useSpotlight()

  return (
    <div ref={cardRef} className="col-span-1 card-spotlight rounded-3xl p-6 flex flex-col justify-between group reveal-on-scroll delay-200">
      <div className="flex justify-between items-start">
        <Clock className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
        <span className="text-[10px] font-mono text-orange-500 bg-orange-500/10 px-2 py-0.5 rounded">Active</span>
      </div>
      <div>
        <div className="text-4xl font-semibold text-white tracking-tighter mb-2">4+</div>
        <div className="text-xs text-neutral-500">Years of Coding</div>
      </div>
      {/* Sparkline graphic */}
      <div className="flex items-end gap-[3px] h-10 mt-2 opacity-30 group-hover:opacity-60 transition-opacity">
        {[20, 40, 30, 60, 50, 80, 70, 90, 100].map((height, index) => (
          <div
            key={index}
            className={`w-1 bg-white rounded-t-sm ${index === 8 ? 'bg-orange-500' : ''}`}
            style={{ height: `${height}%` }}
          ></div>
        ))}
      </div>
    </div>
  )
}

function LocationCard({ delay }: { delay?: string }) {
  const cardRef = useSpotlight()

  return (
    <div ref={cardRef} className="col-span-1 card-spotlight rounded-3xl p-0 relative overflow-hidden group reveal-on-scroll delay-300">
      <div className="absolute inset-0 bg-[#080808]">
        {/* Abstract Map */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '16px 16px', opacity: 0.3 }}></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_20px_rgba(249,115,22,1)] z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-orange-500/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-orange-500/40 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
        <div className="text-[11px] font-mono text-neutral-400 mb-1">TIMEZONE: IST</div>
        <div className="text-sm font-medium text-white">Kolkata, West Bengal</div>
      </div>
    </div>
  )
}

function BackendCard({ delay }: { delay?: string }) {
  const cardRef = useSpotlight()

  return (
    <div ref={cardRef} className="col-span-1 md:col-span-2 card-spotlight rounded-3xl p-8 flex items-center justify-between group reveal-on-scroll delay-200">
      <div className="flex flex-col h-full justify-between z-10">
        <div className="w-12 h-12 bg-white/[0.03] border border-white/[0.08] rounded-xl flex items-center justify-center group-hover:bg-white/[0.06] transition-colors">
          <Database className="w-6 h-6 text-orange-400" />
        </div>
        <div>
          <h3 className="text-xl font-medium text-white mb-2">Core Engineering</h3>
          <p className="text-xs text-neutral-500">Robust systems with Java & Kotlin. Cross-platform with Dart. Data with MongoDB.</p>
        </div>
      </div>

      {/* Decorative visuals */}
      <div className="flex flex-col gap-3 w-40 opacity-40 group-hover:opacity-100 transition-opacity">
        {[75, 50, 83, 67].map((width, index) => (
          <div key={index} className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden border border-white/5">
            <div
              className={`h-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]`}
              style={{ width: `${width}%`, opacity: index === 0 ? 0.8 : index === 1 ? 0.6 : index === 2 ? 0.4 : 0.2 }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}

