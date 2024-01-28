import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ** Component Import
import IconPhone from '../icons/IconPhone';
import IconMail from '../icons/IconMail';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const aboutSectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        aboutSectionRef.current,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: aboutSectionRef.current,
          },
        },
      );
    },
    { scope: aboutSectionRef },
  );

  return (
    <section
      id="about"
      ref={aboutSectionRef}
      className="container my-10 grid min-h-screen place-content-center lg:my-0"
    >
      <div className="flex flex-col items-center justify-center gap-y-6 lg:flex-row lg:items-start lg:gap-x-12">
        <aside className="flex flex-col items-start space-y-3 lg:w-[400px] lg:items-center">
          <Image
            src="/myProfile.jpeg"
            alt="my-profile"
            width={500}
            height={500}
            className="rounded-lg lg:w-[300px] lg:scale-100"
          />
          <div className="flex flex-col items-start gap-y-2 lg:w-[300px]">
            <Link
              href="mailto:myatminaung.dev@gmail.com"
              className="flex items-center gap-x-3"
            >
              <IconPhone className="w-4 text-white-100" />
              <p className="font-semibold text-black-100 dark:text-white-100">
                +959427274346
              </p>
            </Link>
            <Link
              href="mailto:myatminaung.dev@gmail.com"
              className="flex items-center gap-x-3"
            >
              <IconMail className="w-4 text-white-100" />
              <p className="font-semibold text-black-100 dark:text-white-100">
                myatminaung.dev@gmail.com
              </p>
            </Link>
          </div>
        </aside>
        <div className="flex-1 space-y-6">
          <div className="space-y-3">
            <p className="text-heading font-semibold text-black-100 dark:text-white-100">
              I&apos;m a frontend developer based in Yangon, Myanmar.
            </p>
            <p className="text-black-100 opacity-70 dark:text-white-200">
              Over the years, that curiosity evolved into a deep-seated passion
              for building software that my journey into the world of code
              started with a curiosity about how technology shapes our daily
              lives.
            </p>
            <p className="text-black-100 opacity-70 dark:text-white-200">
              I&apos;ve honed my skills in{' '}
              <strong className="opacity-100">JavaScript</strong> &{' '}
              <strong>TypeScript,</strong> always staying on the pulse of the
              latest trends and technologies. But beyond the languages and
              frameworks, my true passion lies in the seamless fusion of design
              and functionality.
            </p>
            <p className="text-black-100 opacity-70 dark:text-white-200">
              I&apos;m dedicated to continuously learning and eager to
              contribute my skills to a dynamic team, collaborate on exciting
              projects, and contribute to the creation of innovative digital
              solutions.
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-heading font-semibold text-black-100 dark:text-white-100">
              Work Experience
            </p>
            <div className="flex w-full items-center justify-start">
              <div className="grid w-full grid-cols-1 gap-4">
                <div className="relative flex max-w-2xl items-start gap-x-4 before:absolute before:bottom-0 before:left-6 before:top-[3rem] before:h-[calc(70px)] before:w-[1px] before:bg-zinc-200 dark:before:bg-zinc-800 lg:gap-x-6">
                  <div className="grid min-h-[50px] min-w-[50px] place-content-center rounded-lg bg-zinc-200 text-black-100 dark:bg-black-200 dark:text-white-200">
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
                    <p className="text-lg font-semibold text-black-100 dark:text-white-100">
                      ILBC
                    </p>
                    <p className="mb-1 text-black-100 dark:text-white-100">
                      Frontend Developer
                    </p>
                    <time className="font-mono text-sm text-black-100 opacity-70 dark:text-white-100">
                      Oct 2023 - <span className="text-green-500">Present</span>
                    </time>
                  </div>
                </div>
                <div className="relative flex max-w-2xl items-start gap-x-4 lg:gap-x-6">
                  <div className="grid min-h-[50px] min-w-[50px] place-content-center rounded-lg bg-zinc-200 text-black-100 dark:bg-black-200 dark:text-white-200">
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
                    <p className="text-lg font-semibold text-black-100 dark:text-white-100">
                      Shopdoora
                    </p>
                    <p className="mb-1 text-black-100 dark:text-white-100">
                      Frontend Developer
                    </p>
                    <time className="font-mono text-sm text-black-100 opacity-70 dark:text-white-100">
                      Oct 2022 - Oct 2023
                    </time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
