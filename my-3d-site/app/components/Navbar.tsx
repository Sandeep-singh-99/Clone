'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Home',     href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'About',    href: '#about' },
  { label: 'Work',     href: '#work' },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-violet), var(--accent-pink))',
        }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-2 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'px-4' : 'px-6'
        }`}
      >
        <div
          className={`max-w-6xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
            scrolled ? 'glass shadow-2xl' : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-[2px] rounded-[6px] bg-[--bg-primary] flex items-center justify-center">
                <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none">
                  <polygon points="8,2 14,6 14,10 8,14 2,10 2,6" stroke="url(#lg)" strokeWidth="1.5" fill="none"/>
                  <defs>
                    <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4"/>
                      <stop offset="100%" stopColor="#8b5cf6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <span className="text-lg font-bold gradient-text tracking-tight">NEXUS</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="nav-link text-sm font-medium text-[--text-secondary] hover:text-[--text-primary] transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="btn-primary text-sm px-5 py-2">
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, translateY: menuOpen ? 8 : 0 }}
              className="block w-6 h-[2px] bg-[--text-primary] origin-center transition-all"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              className="block w-6 h-[2px] bg-[--text-primary] origin-center transition-all"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, translateY: menuOpen ? -8 : 0 }}
              className="block w-6 h-[2px] bg-[--text-primary] origin-center transition-all"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden md:hidden mt-2 mx-auto max-w-6xl"
        >
          <div className="glass rounded-2xl p-6">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-medium text-[--text-secondary] hover:text-[--text-primary] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-primary mt-6 w-full justify-center text-sm">
              Get Started
            </a>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}
