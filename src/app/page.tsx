'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  const sliderRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      '.text-heading',
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.25,
        delay: 3,
        ease: 'power2.inOut',
      },
    );

    gsap.fromTo(
      '.text-paragraph',
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: 3,
        ease: 'power2.inOut',
      },
    );
  });

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
      <section className="container flex min-h-screen flex-col items-start justify-center">
        <div className="heading">
          <h1
            aria-hidden={true}
            className="text-heading whitespace-nowrap text-3xl font-semibold uppercase text-black-100 dark:text-white-100 lg:text-8xl"
          >
            Hi There, I&apos;m <br /> Myat Min Aung
          </h1>
        </div>
        <div className="heading">
          <p className="text-paragraph mt-5 w-full text-black-100 dark:text-white-100 lg:w-9/12 lg:text-lg">
            Frontend Developer based in Yangon, Myanmar. I&apos;m dedicated to
            continuously learning and eager to contribute my skills to a dynamic
            team, collaborate on exciting projects, and contribute to the
            creation of innovative digital solutions.
          </p>
        </div>
      </section>

      <section className="container flex min-h-screen w-full flex-col items-center justify-center">
        About Section
      </section>

      <section ref={sliderRef} className="flex h-screen w-[400vw] flex-wrap">
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

      <section className="flex min-h-screen  w-full flex-col items-center justify-center bg-blue-300">
        Contact Section
      </section>
    </div>
  );
}
