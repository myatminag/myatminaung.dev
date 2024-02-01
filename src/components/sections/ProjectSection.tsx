import Image from 'next/image';
import Link from 'next/link';
import { MutableRefObject } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ** Component Import
import IconExplore from '../icons/IconExplore';

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="container grid min-h-screen place-content-center py-10 lg:py-0"
    >
      <>
        <div className="mb-5 flex items-center justify-center gap-x-5">
          <div className="h-[1px] w-16 bg-secondary-200/20" />
          <header className="text-sm uppercase tracking-wider dark:text-secondary-200">
            Project
          </header>
          <div className="h-[1px] w-16 bg-secondary-200/20" />
        </div>
        <div className="flex justify-center">
          <p className="mb-10 w-6/12 text-center font-light tracking-wide dark:text-secondary-200 lg:text-heading">
            I&apos;ve built several projects for my works over a year but these
            are the ones of my lastest freelance and personal projects.
          </p>
        </div>
      </>
      <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="relative mb-1 aspect-[16/9] overflow-hidden">
            <Image
              alt="project-image"
              src="/project-1.png"
              width={500}
              height={500}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
          <div className="space-y-1.5">
            <p className="font-light tracking-wide text-primary-100 dark:text-secondary-100">
              New Vision Education Center
            </p>
            <desc className="font-light tracking-wide text-primary-100 dark:text-secondary-200">
              The Learning Management System (LMS) project is a web-based
              platform designed to facilitate online learning and training
            </desc>
            <ul className="ml-4 flex list-[square] flex-wrap gap-x-6 text-sm font-light text-primary-100 dark:text-secondary-200 lg:gap-x-12">
              <li>Next.js</li>
              <li>Tailwind Css</li>
              <li>React Query</li>
              <li>Zustand</li>
              <li>Nest.js</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="relative mb-1 aspect-[16/9] overflow-hidden">
            <Image
              alt="project-image"
              src="/project-2.png"
              width={500}
              height={500}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
          <div className="space-y-1.5">
            <p className="font-light tracking-wide text-primary-100 dark:text-secondary-100">
              BitBazaar
            </p>
            <desc className="font-light tracking-wide text-primary-100 dark:text-secondary-200">
              Game store is designed to evolutionize the gaming industry by
              providing a seamless and immersive shopping experience for gamers.
            </desc>
            <ul className="ml-4 flex list-[square] flex-wrap gap-x-6 text-sm font-light text-primary-100 dark:text-secondary-200 lg:gap-x-12">
              <li>Next.js</li>
              <li>Tailwind Css</li>
              <li>React Query</li>
              <li>Rawg.io Api</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
