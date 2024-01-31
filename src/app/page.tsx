'use client';

// ** Component Import
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectSection from '@/components/sections/ProjectSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';

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
