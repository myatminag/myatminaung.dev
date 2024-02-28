import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ProjectList } from '@/utils/data';

import IconExplore from '../icons/IconExplore';
import IconGithub from '../icons/IconGithub';

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { duration: 0.8, ease: 'power2.out' },
        scrollTrigger: {
          trigger: sectionRef.current,
        },
      });

      tl.fromTo(
        '.project',
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="container grid min-h-screen place-content-center py-28"
    >
      <>
        <div className="mb-10 flex items-center justify-center gap-x-5">
          <div className="h-[1px] w-16 bg-secondary-200 dark:bg-primary-300" />
          <header className="text-sm uppercase tracking-wider text-secondary-200 dark:text-primary-300">
            Projects
          </header>
          <div className="h-[1px] w-16 bg-secondary-200 dark:bg-primary-300" />
        </div>
        <div className="flex justify-center">
          <p className="project mb-10 w-full text-center font-light tracking-wide text-secondary-200 dark:text-primary-300 lg:w-6/12">
            I&apos;ve built several projects for my works over a year but these
            are the ones of my lastest freelance and personal projects.
          </p>
        </div>
      </>
      <div className="grid w-full grid-cols-1 gap-y-6 lg:max-w-[1000px] lg:grid-cols-2 lg:gap-12">
        {ProjectList.map((project) => (
          <div key={project.id}>
            <div className="project relative mb-2 aspect-[16/9] overflow-hidden">
              <Image
                alt={project.title}
                src={project.image}
                width={500}
                height={500}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
            <div className="space-y-1.5">
              <div className="project flex items-center justify-between">
                <p className="font-medium tracking-wide text-secondary-200 dark:text-primary-300">
                  {project.title}
                </p>
                <div className="flex items-center gap-x-3">
                  {project.githubURL && (
                    <Link href={project.githubURL} target="_blank">
                      <IconGithub className="w-6 text-secondary-200 dark:text-primary-300" />
                    </Link>
                  )}
                  <Link href={project.projectURL} target="_blank">
                    <IconExplore className="text-secondary-200 dark:text-primary-300" />
                  </Link>
                </div>
              </div>
              <p className="project font-light tracking-wide text-secondary-200 dark:text-primary-300">
                {project.desc}
              </p>
              <ul className="project ml-4 flex list-[square] flex-wrap gap-x-6 text-sm font-light text-secondary-200 dark:text-primary-300 lg:gap-x-12">
                {project.stacks.map((stack) => (
                  <li key={stack.id}>{stack.name}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-y-5">
        <Link
          href="https://github.com/myatminag"
          className="project relative flex h-14 w-48 items-center justify-center rounded-full bg-secondary-200 dark:bg-primary-300"
        >
          <p className="relative z-20 text-sm uppercase tracking-wide text-secondary-100 dark:text-primary-200">
            View Github
          </p>
        </Link>
      </div>
    </section>
  );
};

export default ProjectSection;
