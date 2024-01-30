import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

// ** Component Import
import IconMouse from '../icons/IconMouse';
import IconBgHero from '../icons/IconBgHero';

const HeroSection = () => {
  const heroSectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.hero-animation',
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.25,
          delay: 3,
          stagger: 0.5,
          ease: 'power2.inOut',
        },
      );

      gsap.fromTo(
        '.img-container',
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.5,
          delay: 3,
        },
      );

      gsap.fromTo(
        '.scroll-animation',
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.5,
          delay: 3,
        },
      );

      let imageTL = gsap.timeline({ repeat: -1 });
      imageTL
        .to('.image-animation', {
          y: '-=30',
          x: '+=20',
          ease: 'power1.inOut',
          duration: 3,
        })
        .to('.image-animation', {
          y: '+=30',
          x: '-=20',
          ease: 'power1.inOut',
          duration: 3,
        })
        .to('.image-animation', {
          y: '-=20',
          ease: 'power1.inOut',
          duration: 3,
        })
        .to('.image-animation', {
          y: '+=20',
          ease: 'power1.inOut',
          duration: 3,
        });
    },
    { scope: heroSectionRef },
  );

  return (
    <section
      ref={heroSectionRef}
      className="relative flex min-h-screen flex-col items-start justify-center lg:flex-row lg:items-center lg:justify-start"
    >
      <IconBgHero className="absolute right-0 text-zinc-300 opacity-50 dark:text-zinc-700" />
      <div className="container">
        <div className="space-y-3">
          <div className="heading">
            <h1
              aria-hidden={true}
              className="hero-animation text-primary-100 text-xl font-medium dark:text-secondary-100 lg:text-3xl"
            >
              Welcome, I&apos;m Myat Min Aung 👋
            </h1>
          </div>
          <div className="heading">
            <h1
              aria-hidden={true}
              className="hero-animation text-main-300 text-3xl font-semibold tracking-wider lg:text-7xl"
            >
              A Frontend Developer
            </h1>
          </div>
          <div className="heading">
            <p className="hero-animation text-primary-100 w-full dark:text-secondary-100 lg:w-9/12 lg:text-lg">
              As a passionate frontend developer, I specialize in translating
              ideas into seamless, user-centric web experiences. 💡
            </p>
          </div>
        </div>
        <div className="scroll-animation absolute bottom-5 z-20 flex items-center gap-x-1">
          <IconMouse className="text-primary-100 w-4 dark:text-secondary-100" />
          <p className="text-primary-100 text-sm dark:text-secondary-100">
            Scroll <br />
            To Explore
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
