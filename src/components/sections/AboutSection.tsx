import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ** Component Import
import IconPhone from '../icons/IconPhone';
import IconMail from '../icons/IconMail';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { duration: 0.8, ease: 'power2.out' },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: '50% bottom',
        },
      });

      tl.fromTo(
        '.about-intro',
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          stagger: 0.1,
          opacity: 1,
        },
      ).fromTo(
        '.about-me',
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          stagger: 0.2,
          opacity: 1,
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="container grid min-h-screen place-content-center py-28 lg:py-0"
    >
      <div className="mb-10 flex items-center justify-center gap-x-5">
        <div className="h-[1px] w-16 bg-secondary-200 dark:bg-neutral-500" />
        <header className="text-sm uppercase tracking-wider text-secondary-200 dark:text-primary-500">
          About
        </header>
        <div className="dark:bg-neutral-00 h-[1px] w-16 bg-secondary-200 dark:bg-neutral-500" />
      </div>
      <div className="flex flex-col items-center justify-center gap-y-6 lg:flex-row lg:items-start lg:gap-x-12">
        <aside className="flex flex-col items-start space-y-5">
          <p className="about-intro text-4xl font-medium tracking-wide text-secondary-200 dark:text-secondary-300">
            Turning ideas into immersive digital experiences.
          </p>
          <div className="about-intro hidden space-y-3 lg:block">
            <p className="text-heading font-medium tracking-wide text-primary-100 dark:text-secondary-300">
              Work Experience
            </p>
            <div className="flex w-full items-center justify-start">
              <div className="grid w-full grid-cols-1 gap-4">
                <div className="relative flex max-w-2xl items-start gap-x-4 before:absolute before:bottom-0 before:left-6 before:top-[3rem] before:h-[calc(45px)] before:w-[1px] before:bg-secondary-100 dark:before:bg-primary-400 lg:gap-x-6">
                  <div className="grid min-h-[50px] min-w-[50px] place-content-center rounded-lg bg-secondary-100 text-secondary-300 dark:bg-primary-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <p className="font-medium text-primary-100 dark:text-primary-500">
                      ILBC
                    </p>
                    <p className="mb-1 text-primary-100 dark:text-primary-500">
                      Frontend Developer
                    </p>
                    <time className="font-mono text-sm text-primary-100 dark:text-primary-500">
                      Oct 2023 -{' '}
                      <span className="text-secondary-100 dark:text-primary-400">
                        Present
                      </span>
                    </time>
                  </div>
                </div>
                <div className="relative flex max-w-2xl items-start gap-x-4 lg:gap-x-6">
                  <div className="grid min-h-[50px] min-w-[50px] place-content-center rounded-lg bg-secondary-100 text-secondary-400 dark:bg-primary-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <p className="font-medium text-secondary-200 dark:text-primary-500">
                      Shopdoora
                    </p>
                    <p className="mb-1 text-secondary-200 dark:text-primary-500">
                      Frontend Developer
                    </p>
                    <time className="font-mono text-sm text-secondary-200 dark:text-primary-500">
                      Oct 2022 - Oct 2023
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="space-y-8">
          <div className="space-y-3">
            <p className="about-me w-full text-justify font-light tracking-wide text-primary-100 dark:text-primary-500 lg:text-heading">
              I&apos;m a frontend developer based in Yangon, Myanmar. Over the
              years, that curiosity evolved into a deep-seated passion for
              building software that my journey into the world of code started
              with a curiosity about how technology shapes our daily lives.
            </p>
            <p className="about-me w-full text-justify font-light tracking-wide text-primary-100 dark:text-primary-500 lg:text-heading">
              I&apos;ve honed my skills in{' '}
              <strong className="opacity-100">JavaScript</strong> &{' '}
              <strong>TypeScript,</strong> always staying on the pulse of the
              latest trends and technologies. But beyond the languages and
              frameworks, my true passion lies in the seamless fusion of design
              and functionality.
            </p>
            <p className="about-me font-light tracking-wide text-primary-100 backdrop:text-justify dark:text-primary-500 lg:text-heading">
              I&apos;m dedicated to continuously learning and eager to
              contribute my skills to a dynamic team, collaborate on exciting
              projects, and contribute to the creation of innovative digital
              solutions.
            </p>
          </div>
          <div className="about-me space-y-3">
            <p className="text-heading font-medium tracking-wide text-secondary-200 dark:text-secondary-300">
              Tech Stacks
            </p>
            <ul className="ml-4 flex list-[square] flex-wrap gap-x-6 gap-y-3 font-light text-secondary-200 dark:text-primary-500 lg:gap-x-12">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Nest.js</li>
              <li>Java</li>
            </ul>
          </div>
          <div className="about-me space-y-3 lg:hidden">
            <p className="text-heading font-medium tracking-wide text-secondary-200 dark:text-secondary-300">
              Work Experience 💼
            </p>
            <div className="flex items-end justify-between">
              <div>
                <p className="font-medium tracking-wide text-secondary-200 dark:text-primary-500">
                  Frontend Developer
                </p>
                <p className="text-secondary-200 dark:text-primary-500">ILBC</p>
              </div>
              <time className="text-black-100 font-mono text-sm text-secondary-200 dark:text-primary-500">
                Oct 2023 -{' '}
                <span className="text-secondary-100 dark:text-primary-400">
                  Present
                </span>
              </time>
            </div>
            <div className="h-[1px] w-full bg-secondary-200/40 dark:bg-primary-300" />
            <div className="flex items-end justify-between">
              <div>
                <p className="font-medium tracking-wide text-secondary-200 dark:text-primary-500">
                  Frontend Developer
                </p>
                <p className="text-secondary-200 dark:text-primary-500">
                  Shopdoora
                </p>
              </div>
              <time className="text-black-100 font-mono text-sm text-secondary-200 dark:text-primary-500">
                Oct 2022 - Oct 2023
              </time>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
