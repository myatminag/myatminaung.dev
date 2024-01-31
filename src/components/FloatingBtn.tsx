'use client';

import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

// ** Component Imports
import ThemeToggle from './ThemeToggle';
import IconGithub from './icons/IconGithub';
import IconLinkedIn from './icons/IconLinkedIn';

const FloatingBtn = () => {
  const floatingBtnRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        floatingBtnRef.current,
        {
          bottom: '-200px',
        },
        {
          bottom: '20px',
          duration: 1.5,
          delay: 3,
          ease: 'power4.out',
        },
      );
    },
    { scope: floatingBtnRef },
  );

  return (
    <div
      ref={floatingBtnRef}
      className="fixed bottom-5 right-5 z-30 hidden flex-col items-center space-y-4 lg:flex"
    >
      <Link
        target="_blank"
        href="https://github.com/myatminag"
        className="hover:border-black-200 rounded-full border border-zinc-200 bg-zinc-100 p-2 transition-all duration-500 hover:-translate-y-1.5 dark:border-primary-100 dark:bg-main-200 dark:hover:border-secondary-100"
      >
        <IconGithub className="h-5 w-5 text-main-100 dark:text-secondary-100" />
      </Link>

      <Link
        target="_blank"
        href="https://www.linkedin.com/in/myat-min-aung-830039245"
        className="hover:border-black-200 rounded-full border border-zinc-200 bg-zinc-100 p-2 transition-all duration-500 hover:-translate-y-1.5 dark:border-primary-100 dark:bg-main-200 dark:hover:border-secondary-100"
      >
        <IconLinkedIn className="h-5 w-5 text-main-100 dark:text-secondary-100" />
      </Link>

      <ThemeToggle />
    </div>
  );
};

export default FloatingBtn;
