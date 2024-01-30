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
      className="container grid min-h-screen place-content-center lg:pt-28"
    >
      <div className="mb-8 flex flex-col items-center space-y-5 lg:mb-16">
        <p className="text-main-300 text-center text-heading text-xl font-medium lg:text-3xl">
          Feature Projects 💻
        </p>
        <p className="text-primary-100 w-full max-w-lg text-center dark:text-secondary-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolore
          molestiae ipsum quaerat placeat libero consequuntur culpa nobis.
          Beatae, tenetur.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-6 lg:container lg:grid-cols-2 lg:gap-12">
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
            <p className="text-primary-100 text-lg font-medium dark:text-secondary-100">
              New Vision Education Center
            </p>
            <p className="text-primary-100 text-sm dark:text-secondary-100">
              The Learning Management System (LMS) project is a web-based
              platform designed to facilitate online learning and training
            </p>
            <ul className="text-primary-100 ml-4 flex list-[square] flex-wrap gap-x-6 text-sm dark:text-secondary-100">
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
              src="/project-1.png"
              width={500}
              height={500}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
          <div className="space-y-1.5">
            <p className="text-primary-100 text-lg font-medium dark:text-secondary-100">
              New Vision Education Center
            </p>
            <p className="text-primary-100 text-sm dark:text-secondary-100">
              The Learning Management System (LMS) project is a web-based
              platform designed to facilitate online learning and training
            </p>
            <ul className="text-primary-100 ml-4 flex list-[square] flex-wrap gap-x-6 text-sm dark:text-secondary-100">
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
              src="/project-1.png"
              width={500}
              height={500}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
          <div className="space-y-1.5">
            <p className="text-primary-100 text-lg font-medium dark:text-secondary-100">
              New Vision Education Center
            </p>
            <p className="text-primary-100 text-sm dark:text-secondary-100">
              The Learning Management System (LMS) project is a web-based
              platform designed to facilitate online learning and training
            </p>
            <ul className="text-primary-100 ml-4 flex list-[square] flex-wrap gap-x-6 text-sm dark:text-secondary-100">
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
              src="/project-1.png"
              width={500}
              height={500}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
          <div className="space-y-1.5">
            <p className="text-primary-100 text-lg font-medium dark:text-secondary-100">
              New Vision Education Center
            </p>
            <p className="text-primary-100 text-sm dark:text-secondary-100">
              The Learning Management System (LMS) project is a web-based
              platform designed to facilitate online learning and training
            </p>
            <ul className="text-primary-100 ml-4 flex list-[square] flex-wrap gap-x-6 text-sm dark:text-secondary-100">
              <li>Next.js</li>
              <li>Tailwind Css</li>
              <li>React Query</li>
              <li>Zustand</li>
              <li>Nest.js</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
