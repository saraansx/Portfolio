'use client'

import { FileJson, Triangle, Database, Server, Wind, Brain, Cpu, Bot, FileCode, Code2, Coffee, Smartphone, Atom } from 'lucide-react'

const techItems = [
  { icon: FileJson, name: 'Python' },
  { icon: FileCode, name: 'JavaScript' },
  { icon: Code2, name: 'TypeScript' },
  { icon: Coffee, name: 'Java' },
  { icon: Smartphone, name: 'Kotlin' },
  { icon: Smartphone, name: 'Dart' },
  { icon: Database, name: 'MongoDB' },
  { icon: Triangle, name: 'NextJS' },
  { icon: Cpu, name: 'TensorFlow' },
  { icon: Atom, name: 'React' },
]

export default function Marquee() {
  return (
    <section className="py-10 border-y border-white/[0.06] bg-[#030303] relative z-10 overflow-hidden reveal-on-scroll">
      <div className="max-w-full mx-auto mask-gradient-x">
        <div className="flex items-center gap-24 w-max animate-scroll">
          {[...techItems, ...techItems].map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="flex items-center gap-3 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <Icon className="w-5 h-5" />
                <span className="font-medium text-lg tracking-tight">{item.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

