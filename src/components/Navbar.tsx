'use client';

import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

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
      className="bg-white-400 fixed top-0 z-40 w-full bg-white-100 py-5 shadow-sm transition-colors duration-500 dark:bg-black-100"
    >
      <div className="container flex items-center justify-between">
        <p className="text-lg font-medium text-black-100 dark:text-white-100">
          Mma.dev
        </p>

        <div className="hidden lg:flex lg:items-center lg:gap-x-6">
          <Link href="#" className="text-black-100 dark:text-white-100">
            About
          </Link>
          <Link href="#" className="text-black-100 dark:text-white-100">
            Experience
          </Link>
          <Link href="#" className="text-black-100 dark:text-white-100">
            Projects
          </Link>
          <Link href="#" className="text-black-100 dark:text-white-100">
            Blogs
          </Link>
          <Link href="#" className="text-black-100 dark:text-white-100">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
