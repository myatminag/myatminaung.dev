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
          bottom: '-100%',
        },
        {
          bottom: '2.5%',
          duration: 2,
          delay: 2.5,
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
        className="rounded-full border border-secondary-300 bg-secondary-300 p-2 transition-all duration-500 hover:-translate-y-1.5 hover:border-secondary-200 dark:border-primary-200 dark:bg-primary-200 dark:hover:border-primary-300"
      >
        <IconGithub className="text-main-100 h-5 w-5 text-secondary-200 dark:text-primary-300" />
      </Link>

      <Link
        target="_blank"
        href="https://www.linkedin.com/in/myat-min-aung-830039245"
        className="rounded-full border border-secondary-300 bg-secondary-300 p-2 transition-all duration-500 hover:-translate-y-1.5 hover:border-secondary-200 dark:border-primary-200 dark:bg-primary-200 dark:hover:border-primary-300"
      >
        <IconLinkedIn className="text-main-100 h-5 w-5 text-secondary-200 dark:text-primary-300" />
      </Link>

      <ThemeToggle />
    </div>
  );
};

export default FloatingBtn;
