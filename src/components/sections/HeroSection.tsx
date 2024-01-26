import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

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
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          delay: 3,
          ease: 'power2.inOut',
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
      className="container flex min-h-screen flex-col items-start justify-center lg:flex-row lg:items-center"
    >
      <div className="image-animation block lg:hidden">
        <Image src="/astronaut.svg" alt="astronot" width={500} height={500} />
      </div>
      <div>
        <div className="heading">
          <h1
            aria-hidden={true}
            className="heading-animation whitespace-nowrap text-3xl font-semibold text-black-100 dark:text-white-100 lg:text-7xl"
          >
            <span className="text-lg lg:text-3xl">
              Welcome, I&apos;m Myat Min Aung 👋{' '}
            </span>{' '}
            <br /> A Frontend Developer
          </h1>
        </div>
        <div className="heading space-y-3">
          <p className="paragraph-animation mt-5 w-full text-black-100 dark:text-white-100 lg:w-9/12 lg:text-lg">
            As a passionate frontend developer, I specialize in translating
            ideas into seamless, user-centric web experiences. 💡
          </p>
          <p className="paragraph-animation mt-5 w-full text-black-100 dark:text-white-100 lg:w-9/12 lg:text-lg">
            Ready to transform your ideas into digital brilliance? Let&apos;s
            build something extraordinary together! 💻✨
          </p>
        </div>
      </div>
      <div className="image-animation hidden lg:block">
        <Image src="/astronot.svg" alt="astronot" width={500} height={500} />
      </div>
    </section>
  );
};

export default HeroSection;
