# Saraans Portfolio

A modern, dark-themed portfolio website for a Fullstack & AI/ML Developer, built with Next.js, React, and Tailwind CSS. Showcasing AI models, fullstack apps, and spotlight effects.

## Features

- 🎨 Dark theme with orange accent colors
- 🧠 ML/AI focused tech stack showcase

- ✨ Spotlight effects on cards
- 📜 Scroll reveal animations
- 🎭 3D card transforms
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and React 18
- 🎯 TypeScript support
- 🎪 Smooth animations and transitions

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and animations
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero section with code visual
│   ├── Marquee.tsx      # Tech stack marquee
│   ├── TechStack.tsx    # Tech stack bento grid
│   ├── Projects.tsx     # Projects showcase

│   ├── Experience.tsx   # Experience timeline
│   ├── Philosophy.tsx  # Philosophy section
│   └── Contact.tsx      # Contact form
└── hooks/
    ├── useSpotlight.ts  # Spotlight effect hook
    └── useScrollReveal.ts # Scroll reveal hook
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)

## Interactive Features


- **Scroll Reveal**: Elements animate in as you scroll
- **Spotlight Effects**: Cards respond to mouse movement

## License

MIT

