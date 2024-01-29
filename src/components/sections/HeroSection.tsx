import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

// ** Component Import
import IconMouse from '../icons/IconMouse';

const HeroSection = () => {
  const heroSectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.heading-animation',
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.25,
          delay: 3,
          ease: 'power2.inOut',
        },
      );

      gsap.fromTo(
        '.paragraph-animation',
        {
          y: 150,
        },
        {
          y: 0,
          duration: 1.5,
          stagger: 0.2,
          delay: 3,
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
          y: '+=30',
          x: '-=30',
          duration: 3,
          ease: 'power1',
          rotation: '+=5',
        })
        .to('.image-animation', {
          y: '-=30',
          x: '+=30',
          duration: 3,
          ease: 'power1.out',
          rotation: '-=5',
        })
        .to('.image-animation', {
          x: '-=30',
          duration: 3,
          ease: 'power1.out',
        })
        .to('.image-animation', {
          x: '+=30',
          duration: 3,
          ease: 'power1.out',
        });
    },
    { scope: heroSectionRef },
  );

  return (
    <section
      ref={heroSectionRef}
      className="container relative flex min-h-[calc(100vh-68px)] flex-col items-start justify-center lg:flex-row lg:items-center"
    >
      <div className="img-container">
        <Image
          src="/avatar.png"
          alt="astronot"
          width={500}
          height={500}
          className="image-animation block lg:hidden"
        />
      </div>
      <div>
        <div className="heading">
          <h1
            aria-hidden={true}
            className="heading-animation text-3xl font-semibold text-black-100 dark:text-white-100 lg:text-4xl"
          >
            Full-time Frontend Developer,
          </h1>
        </div>
        <div className="heading">
          <h1
            aria-hidden={true}
            className="heading-animation text-3xl font-semibold text-black-100 dark:text-white-100 lg:text-4xl"
          >
            Academically pursuing Software Engineering
          </h1>
        </div>
        <div className="heading space-y-3">
          <p className="paragraph-animation mt-5 w-full text-black-100 opacity-70 dark:text-white-200 lg:w-9/12 lg:text-lg">
            As a passionate frontend developer, I specialize in translating
            ideas into seamless, user-centric web experiences. 💡
          </p>
          <p className="paragraph-animation mt-5 w-full text-black-100 opacity-70 dark:text-white-200 lg:w-9/12 lg:text-lg">
            Ready to transform your ideas into digital brilliance? Let&apos;s
            build something extraordinary together! 💻✨
          </p>
        </div>
      </div>
      <div className="img-container">
        <Image
          src="/avatar.png"
          alt="astronot"
          width={500}
          height={500}
          className="image-animation hidden lg:block"
        />
      </div>
    </section>
  );
};

export default HeroSection;
