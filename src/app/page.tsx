'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ** Component Import
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectSection from '@/components/sections/ProjectSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';
import IconBgWave from '@/components/icons/IconBgWave';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main>
      <HeroSection />

      <AboutSection />

      <ProjectSection />

      <BlogSection />

      <ContactSection />
    </main>
  );
}
