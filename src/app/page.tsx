'use client';

import Preloader from '@/components/Preloader';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectSection from '@/components/sections/ProjectSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main>
      <Preloader title="Innovate With Passion." />

      <HeroSection />

      <AboutSection />

      <ProjectSection />

      <BlogSection />

      <ContactSection />
    </main>
  );
}
