'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { number: '99%', label: 'Performance Score', suffix: '' },
  { number: '5K+', label: 'Animated Particles', suffix: '' },
  { number: '60', label: 'FPS Guaranteed', suffix: '+' },
  { number: '100', label: 'Lighthouse Score', suffix: '' },
];

const stack = [
  { name: 'Next.js 16', color: '#fff' },
  { name: 'React 19', color: '#61dafb' },
  { name: 'Three.js', color: '#04b6d4' },
  { name: 'R3F', color: '#8b5cf6' },
  { name: 'Framer Motion', color: '#ec4899' },
  { name: 'Tailwind v4', color: '#38bdf8' },
  { name: 'TypeScript', color: '#3b82f6' },
  { name: 'WebGL', color: '#f59e0b' },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Bg gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 50%, rgba(6,182,212,0.05) 0%, transparent 60%), radial-gradient(ellipse at 20% 50%, rgba(139,92,246,0.05) 0%, transparent 60%)',
        }}
      />

      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="tech-badge mb-4 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse inline-block" />
              About This Project
            </span>
            <h2 className="text-4xl sm:text-5xl font-black mt-4 mb-6 leading-tight">
              Crafted With{' '}
              <span className="gradient-text">Precision</span>
              {' '}& Passion
            </h2>
            <p className="text-[--text-secondary] leading-relaxed mb-6">
              NEXUS pushes the boundaries of what's possible in the browser.
              Every pixel, every animation, and every interaction has been
              meticulously designed to deliver a premium digital experience.
            </p>
            <p className="text-[--text-secondary] leading-relaxed mb-8">
              Built on a foundation of modern web standards and cutting-edge
              technologies, this showcase demonstrates the intersection of
              design artistry and engineering excellence.
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech.name}
                  className="tech-badge"
                  style={{ color: tech.color, borderColor: `${tech.color}30`, background: `${tech.color}12` }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-7 text-center card-lift"
              >
                <div className="stat-number">
                  {stat.number}
                  <span className="text-2xl text-[--text-secondary]">{stat.suffix}</span>
                </div>
                <p className="text-sm text-[--text-secondary] mt-2 font-medium">{stat.label}</p>
              </motion.div>
            ))}

            {/* Large accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="col-span-2 rounded-2xl p-7 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(139,92,246,0.12) 50%, rgba(236,72,153,0.08) 100%)',
                border: '1px solid rgba(139,92,246,0.2)',
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.3)' }}
                >
                  <svg className="w-7 h-7 text-violet-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[--text-primary] text-lg">Production Ready</h3>
                  <p className="text-sm text-[--text-secondary] mt-1">
                    Clean code, optimized assets, and zero compromises on quality.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
