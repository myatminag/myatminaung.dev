'use client';

import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const navbarRef = useRef(null);

  // useGSAP(
  //   () => {
  //     gsap.fromTo(
  //       navbarRef.current,
  //       {
  //         y: '-100%',
  //       },
  //       {
  //         y: '0%',
  //         duration: 1,
  //         delay: 3.5,
  //         ease: 'power4.out',
  //       },
  //     );
  //   },
  //   {
  //     scope: navbarRef,
  //   },
  // );

  return (
    <nav
      ref={navbarRef}
      className="bg-white-400 sticky top-0 z-40 w-full bg-white-100 py-5 shadow-sm transition-colors duration-500 dark:bg-black-100"
    >
      <div className="container flex items-center justify-between">
        <Link
          href="#"
          className="text-lg font-medium text-black-100 dark:text-white-100"
        >
          Mma.dev
        </Link>

        <div className="hidden lg:flex lg:items-center lg:gap-x-12">
          <Link href="#about" className="text-black-100 dark:text-white-100">
            About
          </Link>
          <Link href="#projects" className="text-black-100 dark:text-white-100">
            Projects
          </Link>
          <Link href="#contact" className="text-black-100 dark:text-white-100">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-x-3 lg:hidden">
          <ThemeToggle />

          <label className="swap swap-rotate rounded-full border border-gray-300 bg-gray-300 p-2 transition-all duration-500 dark:border-black-200 dark:bg-black-200 lg:hover:-translate-y-1.5 lg:hover:border-black-200 lg:dark:hover:border-white-100">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* hamburger icon */}
            <svg
              className="swap-off h-5 w-5 fill-current text-black-100 dark:text-white-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on h-5 w-5 fill-current text-black-100 dark:text-white-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
