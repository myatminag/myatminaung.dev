'use client';

import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ** Component Import
import HeroSection from '@/components/sections/HeroSection';

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

      <section
        id="about"
        className="container grid min-h-screen grid-cols-1 lg:grid-cols-2"
      >
        <div className="flex w-full items-center justify-start">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-heading font-semibold text-black-100 dark:text-white-100">
                I&apos;m a frontend developer based in Yangon, Myanmar.
              </p>
              <p className="text-black-100 opacity-70 dark:text-white-200">
                I&apos;ve honed my skills in JavaScript & TypeScript, always
                staying on the pulse of the latest trends and technologies. But
                beyond the languages and frameworks, my true passion lies in the
                seamless fusion of design and functionality.
              </p>
              <p className="text-black-100 opacity-70 dark:text-white-200">
                I&apos;ve honed my skills in JavaScript & TypeScript, always
                staying on the pulse of the latest trends and technologies. But
                beyond the languages and frameworks, my true passion lies in the
                seamless fusion of design and functionality.
              </p>
              <p className="text-black-100 opacity-70 dark:text-white-200">
                I&apos;m dedicated to continuously learning and eager to
                contribute my skills to a dynamic team, collaborate on exciting
                projects, and contribute to the creation of innovative digital
                solutions.
              </p>
            </div>
          </div>
        </div>
        {/* <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
          <li>
            <div className="timeline-middle text-black-100 dark:text-white-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <p className="text-lg font-semibold text-black-100 dark:text-white-100 ">
                ILBC
              </p>
              <p className="text-black-100 dark:text-white-100">
                Frontend Developer
              </p>
              <time className="font-mono text-xs uppercase italic text-black-100 dark:text-white-100">
                Oct 2023 - <span className="text-green-500">Present</span>
              </time>
              <p className="text-black-100 opacity-70 dark:text-white-100">
                Implemented eCommerce service platforms and mobile-first
                development approach to ensure seamless user experiences across
                all devices for variety of seller, retailer, and vendor.
              </p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle text-black-100 dark:text-white-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end">
              <p className="text-lg font-semibold text-black-100 dark:text-white-100 ">
                Shopdoora
              </p>
              <p className="text-black-100 dark:text-white-100">
                Frontend Developer
              </p>
              <time className="font-mono text-xs uppercase italic text-black-100 dark:text-white-100">
                Jan 2023 - Oct 2023
              </time>
              <p className="dark:text-white-200 text-black-100 opacity-70">
                Implemented eCommerce service platforms and mobile-first
                development approach to ensure seamless user experiences across
                all devices for variety of seller, retailer, and vendor.
              </p>
            </div>
          </li>
        </ul> */}
      </section>

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
