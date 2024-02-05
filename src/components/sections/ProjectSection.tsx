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
        '.project-intro',
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
        },
      )
        .fromTo(
          '.project-image',
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
          },
        )
        .fromTo(
          '.project-desc',
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
      id="projects"
      ref={sectionRef}
      className="container grid min-h-screen place-content-center py-28"
    >
      <>
        <div className="mb-10 flex items-center justify-center gap-x-5">
          <div className="h-[1px] w-16 bg-secondary-200 dark:bg-primary-500" />
          <header className="text-sm uppercase tracking-wider text-secondary-200 dark:text-primary-500">
            Projects
          </header>
          <div className="h-[1px] w-16 bg-secondary-200 dark:bg-primary-500" />
        </div>
        <div className="flex justify-center">
          <p className="project-intro mb-10 w-full text-center font-light tracking-wide text-secondary-200 dark:text-primary-500 lg:w-6/12 lg:text-heading">
            I&apos;ve built several projects for my works over a year but these
            are the ones of my lastest freelance and personal projects.
          </p>
        </div>
      </>
      <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-12">
        {ProjectList.map((project) => (
          <div key={project.id}>
            <div className="project-image relative mb-2 aspect-[16/9] overflow-hidden">
              <Image
                alt={project.title}
                src={project.image}
                width={500}
                height={500}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
            <div className="space-y-1.5">
              <div className="project-desc flex items-center justify-between">
                <p className="font-light tracking-wide text-secondary-200 dark:text-secondary-400">
                  {project.title}
                </p>
                <div className="flex items-center gap-x-3">
                  {project.githubURL && (
                    <Link href={project.githubURL} target="_blank">
                      <IconGithub className="w-6 text-secondary-200 dark:text-primary-500" />
                    </Link>
                  )}
                  <Link href={project.projectURL} target="_blank">
                    <IconExplore className="text-secondary-200 dark:text-primary-500" />
                  </Link>
                </div>
              </div>
              <p className="project-desc font-light tracking-wide text-secondary-200 dark:text-primary-500">
                {project.desc}
              </p>
              <ul className="project-desc ml-4 flex list-[square] flex-wrap gap-x-6 text-sm font-light text-secondary-200 dark:text-primary-500 lg:gap-x-12">
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
          className="relative flex h-14 w-48 items-center justify-center border border-primary-300 text-primary-100 after:absolute after:left-0 after:top-0 after:h-[100%] after:w-[0%] after:bg-primary-200 after:transition-all after:duration-500
        hover:text-secondary-400 hover:after:w-[100%] dark:text-primary-500"
        >
          <p className="relative z-20 uppercase tracking-wide">View Github</p>
        </Link>
      </div>
    </section>
  );
};

export default ProjectSection;
