'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const HeroCanvas = dynamic(() => import('./HeroCanvas'), {
  ssr: false,
  loading: () => <div className="canvas-container" />,
});

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg"
    >
      {/* 3D canvas background */}
      <HeroCanvas />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, rgba(3,7,18,0.8) 100%)',
        }}
      />

      {/* Content */}
      <div className="hero-content max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <span className="tech-badge text-xs tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse inline-block" />
              Next Generation Experience
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl md:text-8xl font-black leading-[0.95] tracking-tight mb-6"
          >
            Build The{' '}
            <span className="gradient-text block">Future</span>
            <span className="text-[--text-secondary] font-light">Of Digital</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-xl text-[--text-secondary] max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Immersive 3D experiences crafted with React Three Fiber, Framer Motion,
            and cutting-edge WebGL technology. Where creativity meets performance.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a href="#features" className="btn-primary">
              Explore Features
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="#work" className="btn-outline">
              View Work
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-20 flex justify-center"
          >
            <a href="#features" className="flex flex-col items-center gap-2 group opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-xs tracking-widest uppercase text-[--text-muted]">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                className="w-5 h-9 rounded-full border border-[--glass-border] flex items-start justify-center pt-1.5"
              >
                <div className="w-1 h-2 rounded-full bg-gradient-to-b from-cyan-400 to-violet-500" />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[2] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, var(--bg-primary), transparent)',
        }}
      />
    </section>
  );
}
