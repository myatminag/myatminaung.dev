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
    <nav ref={navbarRef} className="flex items-center justify-between py-5">
      <p className="text-lg font-medium text-black-100 dark:text-white-100">
        Mma
      </p>
      <div className="flex items-center gap-x-6">
        <Link href="#" className="text-black-100 dark:text-white-100">
          Home
        </Link>
        <Link href="#" className="text-black-100 dark:text-white-100">
          About
        </Link>
        <Link href="#" className="text-black-100 dark:text-white-100">
          Experience
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
