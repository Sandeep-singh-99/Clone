'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'About', href: '#about' },
      { label: 'Work', href: '#work' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Technology',
    links: [
      { label: 'Next.js', href: 'https://nextjs.org' },
      { label: 'Three.js', href: 'https://threejs.org' },
      { label: 'Framer Motion', href: 'https://framer.com/motion' },
      { label: 'Tailwind CSS', href: 'https://tailwindcss.com' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[--glass-border] bg-[--bg-secondary]">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px]"
           style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5), rgba(6,182,212,0.5), transparent)' }} />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="#home" className="flex items-center gap-2 mb-5 group w-fit">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 opacity-80" />
                <div className="absolute inset-[2px] rounded-[6px] bg-[--bg-primary] flex items-center justify-center">
                  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none">
                    <polygon points="8,2 14,6 14,10 8,14 2,10 2,6" stroke="url(#lg2)" strokeWidth="1.5" fill="none"/>
                    <defs>
                      <linearGradient id="lg2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4"/>
                        <stop offset="100%" stopColor="#8b5cf6"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <span className="text-xl font-black gradient-text tracking-tight">NEXUS</span>
            </Link>
            <p className="text-sm text-[--text-muted] leading-relaxed max-w-xs">
              Building the next generation of immersive digital experiences with cutting-edge 3D technology.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-[--text-muted] mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-[--text-secondary] hover:text-[--text-primary] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="hr-gradient mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[--text-muted]">
            © {new Date().getFullYear()} NEXUS Studio. All rights reserved.
          </p>
          <p className="text-xs text-[--text-muted]">
            Built with{' '}
            <span className="gradient-text font-semibold">Next.js 16 · React Three Fiber · Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
