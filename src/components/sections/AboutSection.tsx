import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { TechnicalSkills } from '@/utils/data';

import IconWork from '../icons/IconWork';
import IconSkill from '../icons/IconSkill';

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
      className="container grid min-h-screen place-content-center py-28"
    >
      <div className="mb-10 flex items-center justify-center gap-x-5">
        <div className="h-[1px] w-16 bg-secondary-200 dark:bg-neutral-500" />
        <header className="text-sm uppercase tracking-wider text-secondary-200 dark:text-primary-500">
          About
        </header>
        <div className="dark:bg-neutral-00 h-[1px] w-16 bg-secondary-200 dark:bg-neutral-500" />
      </div>
      <div className="flex flex-col items-center justify-center gap-y-6 lg:flex-row lg:items-start lg:gap-x-12">
        <aside className="flex w-full flex-col items-start space-y-5 lg:w-[320px]">
          <p className="about-intro text-4xl font-medium tracking-wide text-secondary-200 dark:text-secondary-300">
            Turning ideas into immersive digital experiences.
          </p>
          <div className="about-intro hidden space-y-3 lg:block">
            <p className="text-heading font-medium tracking-wide text-primary-100 dark:text-secondary-300">
              Work Experience
            </p>
            <div className="flex w-full items-center justify-start">
              <div className="grid w-full grid-cols-1 gap-4">
                <div className="relative flex max-w-2xl items-start gap-x-4 before:absolute before:bottom-0 before:left-6 before:top-[3rem] before:h-[calc(45px)] before:w-[2px] before:bg-secondary-100 dark:before:bg-primary-600 lg:gap-x-6">
                  <div className="grid min-h-[50px] min-w-[50px] place-content-center rounded-lg bg-secondary-100 dark:bg-primary-600">
                    <IconWork className="text-secondary-300" />
                  </div>
                  <div className="w-full">
                    <p className="text-primary-100 dark:text-primary-500">
                      ILBC
                    </p>
                    <p className="mb-1 font-light text-primary-100 dark:text-primary-500">
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
                  <div className="grid min-h-[50px] min-w-[50px] place-content-center rounded-lg bg-secondary-100 dark:bg-primary-600">
                    <IconWork className="text-secondary-300" />
                  </div>
                  <div className="w-full">
                    <p className="text-secondary-200 dark:text-primary-500">
                      Shopdoora
                    </p>
                    <p className="mb-1 font-light text-secondary-200 dark:text-primary-500">
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
        <div className="space-y-8 lg:flex-1">
          <div className="space-y-3">
            <p className="text-heading font-medium tracking-wide text-secondary-200 dark:text-secondary-300">
              Personal Bio
            </p>
            <p className="about-me w-full text-justify font-light tracking-wide text-primary-100 dark:text-primary-500 lg:text-heading">
              I&apos;m a frontend developer based in Yangon, Myanmar. Over the
              years, my journey into the world of code started with a curiosity
              about how technology shapes our daily lives. That curiosity
              evolved into a deep-seated passion for building software.
            </p>
            <p className="about-me w-full text-justify font-light tracking-wide text-primary-100 dark:text-primary-500 lg:text-heading">
              I&apos;ve honed my skills in{' '}
              <strong className="opacity-100">JavaScript</strong> &{' '}
              <strong>TypeScript,</strong> always staying on the pulse of the
              latest trends and technologies. But beyond the languages and
              frameworks, my true passion lies in the seamless fusion of design
              and functionality. My focus is on building responsive and
              accessible web applications that meet modern standards and enhance
              user satisfaction.
            </p>
            <p className="about-me font-light tracking-wide text-primary-100 backdrop:text-justify dark:text-primary-500 lg:text-heading">
              In addition to my technical skills, I am passionate about
              continuous learning and staying up-to-date with the latest trends
              and best practices in software development. I strive to deliver
              high-quality code and have a strong attention to detail. With my
              problem-solving skills and creativity, I enjoy tackling complex
              challenges and finding innovative solutions.
            </p>
            <p className="about-me font-light tracking-wide text-primary-100 backdrop:text-justify dark:text-primary-500 lg:text-heading">
              I am excited about the opportunity to contribute to meaningful
              projects and make a positive impact through my work.
            </p>
          </div>
          <div className="about-me space-y-3">
            <p className="text-heading font-medium tracking-wide text-secondary-200 dark:text-secondary-300">
              Technical Skills
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-4 lg:gap-x-6">
              {TechnicalSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center gap-x-3 rounded-lg border px-4 py-2 dark:border-primary-600"
                >
                  <IconSkill className="h-6 w-6 dark:text-secondary-400" />
                  <li className="font-light text-secondary-200 dark:text-primary-500">
                    {skill.name}
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <div className="about-me space-y-3 lg:hidden">
            <p className="text-heading font-medium tracking-wide text-secondary-200 dark:text-secondary-300">
              Work Experience
            </p>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-secondary-200 dark:text-primary-500">ILBC</p>
                <p className="font-light text-secondary-200 dark:text-primary-500">
                  Frontend Developer
                </p>
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
                <p className="text-secondary-200 dark:text-primary-500">
                  Shopdoora
                </p>
                <p className="font-light text-secondary-200 dark:text-primary-500">
                  Frontend Developer
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
