'use client';

import gsap from 'gsap';

import { useGSAP } from '@gsap/react';

export default function Home() {
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

  return (
    <div className="container">
      <section className="flex min-h-[calc(100vh-68px)] flex-col items-start justify-center">
        <div className="heading">
          <h1
            aria-hidden={true}
            className="text-heading whitespace-nowrap text-8xl font-semibold uppercase text-black-100 dark:text-white-100"
          >
            Hi There, I&apos;m <br /> Myat Min Aung
          </h1>
        </div>
        <div className="heading">
          <p className="text-paragraph mt-5 w-9/12 text-lg text-black-100 dark:text-white-100">
            Frontend Developer based in Yangon, Myanmar. I&apos;m dedicated to
            continuously learning and eager to contribute my skills to a dynamic
            team, collaborate on exciting projects, and contribute to the
            creation of innovative digital solutions.
          </p>
        </div>
      </section>

      <section className="min-h-screen"></section>
    </div>
  );
}
