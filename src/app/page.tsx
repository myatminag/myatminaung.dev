'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ** Component Import
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectSection from '@/components/sections/ProjectSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef}>
      <HeroSection />

      <AboutSection />

      <ProjectSection containerRef={containerRef} />

      <BlogSection />

      <ContactSection />
    </div>
  );
}
