'use client';

import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const navbarRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        navbarRef.current,
        {
          y: '-100%',
        },
        {
          y: '0%',
          duration: 1,
          delay: 3.5,
          ease: 'power4.out',
        },
      );
    },
    {
      scope: navbarRef,
    },
  );

  return (
    <nav
      ref={navbarRef}
      className="dark:border-primary-100 dark:bg-main-100 fixed top-0 z-40 w-full border-b border-zinc-200 bg-secondary-100 py-5"
    >
      <div className="container flex items-center justify-between">
        <Link
          href="#"
          className="text-lg font-medium text-black-100 dark:text-secondary-100"
        >
          Mma.dev
        </Link>

        <div className="hidden lg:flex lg:items-center lg:gap-x-12">
          <Link
            href="#about"
            className="uppercase text-black-100 dark:text-secondary-100"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="uppercase text-black-100 dark:text-secondary-100"
          >
            Projects
          </Link>
          <Link
            href="#blog"
            className="uppercase text-black-100 dark:text-secondary-100"
          >
            Blogs
          </Link>
          <Link
            href="#contact"
            className="uppercase text-black-100 dark:text-secondary-100"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-x-3 lg:hidden">
          <ThemeToggle />

          <label className="dark:border-primary-100 dark:bg-main-200 swap swap-rotate rounded-full border border-zinc-200 bg-zinc-100 p-2 transition-all duration-500 lg:hover:-translate-y-1.5 lg:hover:border-black-200 lg:dark:hover:border-white-100">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* hamburger icon */}
            <svg
              className="text-main-100 swap-off h-5 w-5 fill-current dark:text-secondary-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="text-main-100 swap-on h-5 w-5 fill-current dark:text-secondary-100"
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
