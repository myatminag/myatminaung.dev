'use client';

import { useLayoutEffect, useRef } from 'react';
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

      <section
        id="about"
        className="container grid min-h-screen w-full grid-cols-2"
      >
        <ul className="timeline timeline-vertical timeline-snap-icon border max-md:timeline-compact">
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
            <div className="timeline-start mb-10 text-black-100 dark:text-white-100 md:text-end">
              <p>@ILBC</p>
              <time className="font-mono uppercase italic">
                Jan 2023 - <span className="text-green-500">Present</span>
              </time>
              <p className="text-lg font-semibold text-black-100 dark:text-white-100">
                Frontend Developer
              </p>
              The Apple Macintosh—later rebranded as the Macintosh 128K—is the
              original Apple Macintosh personal computer.
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
            <div className="timeline-end mb-10 text-black-100 dark:text-white-100">
              <p>@Shopdoora</p>
              <time className="font-mono italic text-black-100 dark:text-white-100">
                Jan 2023 - Oct 2023
              </time>
              <div className="text-lg font-semibold text-black-100 dark:text-white-100">
                Frontend Developer
              </div>
              Implemented eCommerce service platforms and mobile-first
              development approach to ensure seamless user experiences across
              all devices for variety of seller, retailer, and vendor.
            </div>
            <hr />
          </li>
        </ul>
        <div className="border"></div>
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
