import Image from 'next/image';
import Link from 'next/link';
import { MutableRefObject } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ** Component Import
import IconExplore from '../icons/IconExplore';

interface Props {
  containerRef: MutableRefObject<null>;
}

const ProjectSection = ({ containerRef }: Props) => {
  return (
    <section id="projects" className="container min-h-screen">
      <div className="mb-10 flex flex-col items-center space-y-5">
        <p className="text-heading font-semibold text-black-100 dark:text-white-100 lg:text-2xl">
          Feature Projects 💻
        </p>
        <p className="w-full text-black-100 dark:text-white-100 lg:w-[600px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolore
          molestiae ipsum quaerat placeat libero consequuntur culpa nobis.
          Beatae, tenetur.
        </p>
      </div>
      <div className="container grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-x-12">
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
          <div className="space-y-1">
            <p className="text-lg font-medium text-black-100 dark:text-white-100">
              New Vision Education Center
            </p>
            <p className="text-sm text-black-100 dark:text-secondary-100">
              The Learning Management System (LMS) project is a web-based
              platform designed to facilitate online learning and training
            </p>
            <ul className="ml-4 flex list-[square] flex-wrap gap-x-6 text-sm text-black-100 opacity-70 dark:text-white-100">
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
          <div className="space-y-1">
            <p className="text-lg font-medium text-black-100 dark:text-white-100">
              New Vision Education Center
            </p>
            <p className="text-sm text-black-100 dark:text-secondary-100">
              The Learning Management System (LMS) project is a web-based
              platform designed to facilitate online learning and training
            </p>
            <ul className="ml-4 flex list-[square] flex-wrap gap-x-6 text-sm text-black-100 opacity-70 dark:text-white-100">
              <li>Next.js</li>
              <li>Tailwind Css</li>
              <li>React Query</li>
              <li>Zustand</li>
              <li>Nest.js</li>
              <li>SQL</li>
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
          <div className="space-y-1">
            <p className="text-lg font-medium text-black-100 dark:text-white-100">
              New Vision Education Center
            </p>
            <p className="text-sm text-black-100 dark:text-secondary-100">
              The Learning Management System (LMS) project is a web-based
              platform designed to facilitate online learning and training
            </p>
            <ul className="ml-4 flex list-[square] flex-wrap gap-x-6 text-sm text-black-100 opacity-70 dark:text-white-100">
              <li>Next.js</li>
              <li>Tailwind Css</li>
              <li>React Query</li>
              <li>Zustand</li>
              <li>Nest.js</li>
              <li>SQL</li>
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
          <div className="space-y-1">
            <p className="text-lg font-medium text-black-100 dark:text-white-100">
              New Vision Education Center
            </p>
            <p className="text-sm text-black-100 dark:text-secondary-100">
              The Learning Management System (LMS) project is a web-based
              platform designed to facilitate online learning and training
            </p>
            <ul className="ml-4 flex list-[square] flex-wrap gap-x-6 text-sm text-black-100 opacity-70 dark:text-white-100">
              <li>Next.js</li>
              <li>Tailwind Css</li>
              <li>React Query</li>
              <li>Zustand</li>
              <li>Nest.js</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
