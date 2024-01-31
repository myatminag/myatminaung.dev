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
          delay: 2.5,
          stagger: 0.5,
          ease: 'power2.inOut',
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
          delay: 2.5,
        },
      );
    },
    { scope: heroSectionRef },
  );

  return (
    <section
      ref={heroSectionRef}
      className="relative flex min-h-screen flex-col items-start justify-center lg:flex-row lg:items-center lg:justify-start"
    >
      <IconBgHero className="absolute right-0 text-zinc-300 dark:text-main-200" />
      <div className="container">
        <div className="space-y-5">
          <div className="heading">
            <h1
              aria-hidden={true}
              className="hero-animation dark:text-secondary-200 text-heading font-light uppercase tracking-wider text-primary-100"
            >
              Hi, I&apos;m Myat Min Aung
            </h1>
          </div>
          <h1
            aria-hidden={true}
            className="hero-animation text-5xl font-medium tracking-wider text-main-100 dark:text-secondary-100 lg:text-8xl"
          >
            On a mission to innovate, problem-solve, and craft robust digital
            solutions.
          </h1>
          <div className="flex flex-col gap-x-10 pt-10 lg:flex-row lg:items-start">
            <div className="mt-4 hidden h-0.5 w-96 bg-[#292d36] lg:block" />
            <div className="heading flex-1">
              <p className="hero-animation dark:text-secondary-200 w-full text-heading font-light tracking-wider text-primary-100">
                As a passionate frontend developer, I specialize in translating
                ideas into seamless, user-centric web experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="scroll-animation absolute bottom-5 z-20 flex items-center gap-x-1">
          <IconMouse className="w-4 text-primary-100 dark:text-secondary-100" />
          <p className="text-sm text-primary-100 dark:text-secondary-100">
            Scroll <br />
            To Explore
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
