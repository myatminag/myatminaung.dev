import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

import { useSmoothScroll } from '@/app/scrollProvider';

import IconMouse from '../icons/IconMouse';
import BackgroundCircuit from '../BackgroundCircuit';

const HeroSection = () => {
  const heroSectionRef = useRef(null);

  const { scroll } = useSmoothScroll();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power2.inOut',
        },
      });

      tl.fromTo(
        '.hero-animation',
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1.5,
          delay: 2.5,
        },
      ).fromTo(
        '.text-bar',
        {
          width: 0,
        },
        {
          width: '384px',
          duration: 1,
        },
      );

      gsap.fromTo(
        '.scroll-animation',
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
    { scope: heroSectionRef },
  );

  return (
    <section
      id="hero"
      ref={heroSectionRef}
      className="relative flex min-h-screen flex-col items-start justify-center lg:flex-row lg:items-center lg:justify-start"
    >
      {/* <BackgroundCircuit className="absolute right-0 text-secondary-300 dark:text-primary-600" /> */}
      <div className="container">
        <div className="space-y-8">
          <div className="heading">
            <h1
              aria-hidden={true}
              className="hero-animation font-light uppercase tracking-wider text-secondary-200 dark:text-primary-300 lg:text-heading"
            >
              Hi, I&apos;m Myat Min Aung
            </h1>
          </div>

          <div className="heading">
            <h1
              aria-hidden={true}
              className="hero-animation w-full text-4xl font-medium tracking-wider text-secondary-200 dark:text-primary-300 lg:w-9/12 lg:text-7xl lg:leading-[1.15]"
            >
              On a mission to innovate, problem-solve, and craft robust digital
              solutions.
            </h1>
          </div>

          <div className="flex flex-col gap-x-10 lg:flex-row lg:items-start">
            <div className="w-96">
              <div className="text-bar mt-4 hidden h-[0.5px] bg-secondary-200 dark:bg-primary-300 lg:block" />
            </div>
            <div className="heading flex-1">
              <p className="hero-animation w-full font-light tracking-wider text-secondary-200 dark:text-primary-300 lg:text-heading">
                As a passionate frontend developer, I specialize in translating
                ideas into seamless, user-centric web experiences.
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() => scroll.scrollTo('#about')}
          className="scroll-animation absolute bottom-5 z-30 flex items-center gap-x-2"
        >
          <IconMouse className="w-4 text-secondary-200 dark:text-primary-300" />
          <p className="text-start text-sm text-secondary-200 dark:text-primary-300">
            Scroll <br />
            To Explore
          </p>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
