'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, MouseEvent, useState } from 'react';

import ThemeToggle from './ThemeToggle';
import { useSmoothScroll } from '@/app/scrollProvider';

const NavMenu = [
  { id: 1, title: 'About', href: '#about' },
  { id: 2, title: 'Projects', href: '#projects' },
  { id: 3, title: 'Blogs', href: '#blogs' },
  { id: 4, title: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { scroll } = useSmoothScroll();

  useGSAP(
    () => {
      gsap.fromTo(
        navbarRef.current,
        {
          y: '-100%',
        },
        {
          y: '0%',
          duration: 1.5,
          delay: 3,
          ease: 'power4.out',
        },
      );
    },
    {
      scope: navbarRef,
    },
  );

  const handleToScrollSection = (
    e: MouseEvent<HTMLLIElement>,
    section: string,
  ) => {
    e.preventDefault();
    scroll.scrollTo(section);
  };

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 z-40 w-full border-b border-zinc-200 bg-secondary-100 py-6 dark:border-primary-100 dark:bg-primary-100"
    >
      <div className="container flex items-center justify-between">
        <button
          onClick={() => scroll.scrollTo('#hero')}
          className="text-heading font-medium tracking-wide text-secondary-200 dark:text-primary-300"
        >
          Mma.dev
        </button>

        <ul className="hidden lg:flex lg:items-center lg:gap-x-16">
          {NavMenu.map((menu) => (
            <li
              key={menu.id}
              onClick={(e) => handleToScrollSection(e, menu.href)}
              className="relative cursor-pointer text-sm uppercase tracking-wider text-secondary-200 after:absolute 
            after:-bottom-[5px] after:left-0 after:h-[3px] after:w-[0%] after:rounded-xl after:bg-secondary-200 
            after:duration-300 hover:after:w-[100%] 
            dark:text-primary-300 dark:after:bg-primary-300"
            >
              {menu.title}
            </li>
          ))}
        </ul>

        <div className="relative flex items-center gap-x-3 lg:hidden">
          <ThemeToggle />

          <label className="dark:border-primary-600 swap-rotate swap rounded-full border border-secondary-300 bg-secondary-300 p-2 transition-all duration-500 dark:border-primary-200 dark:bg-primary-200 lg:hover:-translate-y-1.5">
            <input type="checkbox" onClick={() => setIsOpen(!isOpen)} />

            <svg
              className="dark:text-secondary-400 swap-off h-5 w-5 fill-current text-secondary-200  dark:text-primary-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className="dark:text-secondary-400 swap-on h-5 w-5 fill-current text-secondary-200 dark:text-primary-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>

          {isOpen && (
            <div className="absolute right-2 top-12 rounded-md bg-secondary-300 px-5 py-2.5 dark:bg-primary-200 lg:hidden">
              <ul className="flex flex-col items-start gap-y-4 lg:hidden">
                {NavMenu.map((menu) => (
                  <li
                    key={menu.id}
                    onClick={(e) => handleToScrollSection(e, '#about')}
                    className="menu-item cursor-pointer text-sm uppercase text-primary-100 dark:text-primary-300"
                  >
                    {menu.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
