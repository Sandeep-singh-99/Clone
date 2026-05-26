'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    id: 1,
    category: 'WebGL',
    title: 'Quantum Dashboard',
    description: 'Real-time data visualization using Three.js with particle-based chart rendering and smooth transitions.',
    tags: ['Three.js', 'React', 'WebSockets'],
    color: 'cyan',
    accent: '#06b6d4',
    size: 'large',
  },
  {
    id: 2,
    category: 'Motion Design',
    title: 'Aurora UI Kit',
    description: 'A premium component library with 80+ animated glassmorphism components built on Framer Motion.',
    tags: ['Framer Motion', 'Tailwind', 'TypeScript'],
    color: 'violet',
    accent: '#8b5cf6',
    size: 'small',
  },
  {
    id: 3,
    category: '3D Experience',
    title: 'Stellar Metaverse',
    description: 'An immersive virtual space built with React Three Fiber featuring procedural environments.',
    tags: ['R3F', 'GLSL', 'Drei'],
    color: 'pink',
    accent: '#ec4899',
    size: 'small',
  },
  {
    id: 4,
    category: 'Full Stack',
    title: 'Nexus Analytics',
    description: 'Enterprise analytics platform with 3D data graphs and real-time collaboration features.',
    tags: ['Next.js', 'Three.js', 'PostgreSQL'],
    color: 'blue',
    accent: '#3b82f6',
    size: 'large',
  },
];

const colorGlow: Record<string, string> = {
  cyan:   '0 0 40px rgba(6,182,212,0.2)',
  violet: '0 0 40px rgba(139,92,246,0.2)',
  pink:   '0 0 40px rgba(236,72,153,0.2)',
  blue:   '0 0 40px rgba(59,130,246,0.2)',
};

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      className="glass gradient-border card-lift rounded-2xl overflow-hidden group cursor-pointer"
      style={{ gridColumn: project.size === 'large' ? 'span 2' : 'span 1' }}
    >
      {/* Visual placeholder */}
      <div
        className="relative h-52 overflow-hidden"
        style={{
          background: `radial-gradient(ellipse at 30% 50%, ${project.accent}22 0%, transparent 70%), linear-gradient(135deg, ${project.accent}11, rgba(3,7,18,0.8))`,
        }}
      >
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
          style={{
            backgroundImage: `linear-gradient(${project.accent}40 1px, transparent 1px), linear-gradient(90deg, ${project.accent}40 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Floating orb */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
          style={{
            width: 120,
            height: 120,
            background: `radial-gradient(circle, ${project.accent}60, transparent 70%)`,
          }}
        />

        {/* Category chip */}
        <div className="absolute top-4 left-4">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              background: `${project.accent}22`,
              border: `1px solid ${project.accent}44`,
              color: project.accent,
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Arrow icon */}
        <div className="absolute top-4 right-4 w-8 h-8 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[--text-primary] mb-2 group-hover:gradient-text transition-all"
            style={{ '--gradient-start': project.accent } as React.CSSProperties}>
          {project.title}
        </h3>
        <p className="text-sm text-[--text-secondary] leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{
                background: `${project.accent}10`,
                border: `1px solid ${project.accent}25`,
                color: project.accent,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="work" className="section-padding relative overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(236,72,153,0.06) 0%, transparent 70%)',
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="tech-badge mb-4 inline-flex">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse inline-block" />
            Selected Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mt-4 mb-5 leading-tight">
            Projects That{' '}
            <span className="gradient-text">Define Excellence</span>
          </h2>
          <p className="text-[--text-secondary] text-lg max-w-2xl mx-auto">
            A curated collection of projects showcasing the depth and breadth of modern web technology.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-outline">
            Explore All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
