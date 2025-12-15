'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Philosophy from '@/components/Philosophy'
import Contact from '@/components/Contact'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Home() {
  useScrollReveal()

  return (
    <>
      {/* Noise Texture */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1] opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')`
        }}
      ></div>

      {/* Background Gradients */}
      <div className="fixed top-[-10%] left-[50%] -translate-x-1/2 w-[1000px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] left-[20%] w-[800px] h-[600px] bg-orange-900/[0.06] blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      {/* Background Grid */}
      <div className="fixed inset-0 bg-grid pointer-events-none z-0 mask-gradient-b"></div>

      <Navigation />
      <Hero />
      <Marquee />
      <TechStack />
      <Projects />
      <Experience />
      <Philosophy />
      <Contact />
    </>
  )
}

