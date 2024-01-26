'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ** Component Import
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  const sliderRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    let panels = gsap.utils.toArray('.panel');

    if (sliderRef.current) {
      let context = gsap.context(() => {
        gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: sliderRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1),
            end: () => '+=' + sliderRef.current?.offsetWidth,
          },
        });
      }, containerRef);

      return () => context.revert();
    }
  }, []);

  return (
    <div ref={containerRef}>
      <HeroSection />

      <AboutSection />

      <section
        id="projects"
        ref={sliderRef}
        className="flex h-screen w-[400vw] flex-wrap"
      >
        <div className="panel flex min-h-screen w-screen flex-col items-center justify-center bg-red-400">
          Project 1
        </div>
        <div className="panel flex min-h-screen w-screen flex-col items-center justify-center bg-green-400">
          Project 2
        </div>
        <div className="panel flex min-h-screen w-screen flex-col items-center justify-center bg-yellow-400">
          Project 3
        </div>
        <div className="panel flex min-h-screen w-screen flex-col items-center justify-center bg-purple-400">
          Project 4
        </div>
      </section>

      <section
        id="blog"
        className="flex min-h-screen w-full flex-col items-center justify-center"
      >
        Blog Section
      </section>

      <section
        id="contact"
        className="flex min-h-screen w-full flex-col items-center justify-center bg-blue-300"
      >
        Contact Section
      </section>
    </div>
  );
}
