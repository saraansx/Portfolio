'use client'

export default function Experience() {
  const experiences = [
    {
      title: 'AI & Fullstack Engineer',
      period: '2024 — Present',
      company: 'Personal Projects',
      description: 'Building intelligent agents like Ava using LLMs (OpenRouter/Ollama). Integrating AI with modern web stacks for next-gen applications.',
    },
    {
      title: 'Fullstack Developer',
      period: '2023',
      company: 'Freelance',
      description: 'Mastered the MERN stack and Next.js. Built scalable web applications with secure authentication and real-time database integrations.',
    },
    {
      title: 'Frontend & UI Specialist',
      period: '2022',
      company: 'Skill Building',
      description: 'Deep dive into React ecosystem and Tailwind CSS. Focused on creating pixel-perfect, responsive user interfaces and smooth animations.',
    },
    {
      title: 'Started Coding',
      period: '2021',
      company: 'The Beginning',
      description: 'Wrote my first line of Python code. Started exploring logic building, algorithms, and the basics of HTML & CSS.',
    },
  ]

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-medium text-white tracking-tighter mb-16 text-center reveal-on-scroll">My Journey</h2>

        <div className="relative pl-8 space-y-16 before:absolute before:left-[11px] before:top-0 before:bottom-0 before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-white/[0.1] before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group reveal-on-scroll delay-100">
              <div className="absolute -left-[29px] top-1.5 w-6 h-6 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition-colors z-10">
                <div className={`w-1.5 h-1.5 rounded-full ${index === 0 ? 'bg-orange-500 group-hover:bg-orange-500' : 'bg-neutral-500 group-hover:bg-white'} transition-colors`}></div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                <h3 className="text-xl font-medium text-white">{exp.title}</h3>
                <span className="text-xs font-mono text-neutral-500">{exp.period}</span>
              </div>
              <div className="text-sm font-medium text-neutral-300 mb-3">{exp.company}</div>
              <p className="text-sm text-neutral-500 leading-relaxed max-w-xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

