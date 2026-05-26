'use client';

import dynamic from 'next/dynamic';

// ssr: false is only allowed in Client Components in the App Router
const MouseFollower = dynamic(() => import('./MouseFollower'), { ssr: false });
const ParticleBackground = dynamic(() => import('./ParticleBackground'), { ssr: false });

export default function ClientEffects() {
  return (
    <>
      <ParticleBackground />
      <MouseFollower />
    </>
  );
}
