import Image from 'next/image';
import Link from 'next/link';
import { useRef, MutableRefObject, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ** Component Import
import IconExplore from '../icons/IconExplore';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  containerRef: MutableRefObject<null>;
}

const ProjectSection = ({ containerRef }: Props) => {
  const sliderRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (sliderRef.current) {
      let context = gsap.context(() => {
        let panels = gsap.utils.toArray('.panel');
        gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: sliderRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1),
            end: () => '+=' + sliderRef.current?.offsetWidth,
          },
        });
      }, containerRef);

      return () => context.revert();
    }
  });

  return (
    <section
      id="projects"
      ref={sliderRef}
      className="flex h-screen w-[400vw] flex-wrap "
    >
      <div className="panel grid min-h-screen w-screen place-content-center px-[1rem] lg:grid-cols-2 lg:px-[8rem]">
        <div>
          <Image
            src="https://myatminag.s3.ap-southeast-1.amazonaws.com/Mac%20Mockup%20Final.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaDmFwLXNvdXRoZWFzdC0xIkcwRQIhAIjgGJGeduorRC6EzfshBmI1cdNXyQisnsN1yeDlgDxeAiAM03tk%2FOwSMhQ%2Fe9NZ%2B4MMCICepzTxy2kYaJJAl9Zx3yrtAgjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDI4OTkyMzU4MjM3MiIMw%2FRBUjfEf%2FwilzsjKsEC5fudmzG9N9PYjob0poTvjrXHaTRawuUzZmCF8IxsiW6qxXtzocMIxIdBwGF3attRJSRcAH6OUhyN7lEApOEQSxYi2vp51XldEyb3WTSaAFY9kojtqGSGKp9PMCfyAl2b%2BZ0vG%2FBN6AFQ8XRdksbOHqzcwnlo26gN21fXKIxUECYqLxNkXFwpo%2BWRNa0tUfTPTPY8Jjg4zw6NQs0Mxx5tCIxOsarBPZvJJBZ%2FQAZmdxuGQ4jIP6Np0wBI5CvtXPTeYxE2t1UwW%2BBe9wApwmMbn%2BnWr7tguSLSS1fWbGjcM%2B4wBmK7SYAGOyGE%2F%2FsJ2CSghwiaxidPvKgUNPWLWcWgl9%2BEM5sH1sn8YIazvDMrVqTgE2pC0QGXmipxYKSBY%2B3K%2FnCScDmjAik4ARmOJOEe5g3GwMGT1aN%2FywdTrbwAQaUFMOX02a0GOrMCCngW105X3gcGanIbxw638gRfo%2B6rgC4PFDalBV0dGKEuQz8MlztZ1sv%2BWxsmjts2I4Eob8nvoBlb19yTcike3oRML8ecr%2BXEYtAAyVk%2FeHXbNIAa7oKTdWfl293jMAx4zEjv6yMjRk%2BMuow%2BAuSwoBw8x1APnJ69onR70j25gPYE58fgZortPfUpIJEQT0GgVoVblW7HRGPU%2Fvic0AktmhSNdR0T7L97N7mEagJR5hE2c7CQFiQ5rZcHn9kjaIky0MDkqKmLy9W3NkgVXcR7%2BLf5X%2Beh1yr60djWUBhIYdWB2DQT1pIweo55fV9sGxrMe7ILtUbTWhhjJCzNVt2AbLiglFIqJwdeeOatcEVwAbPQF7AFhsxi3JvqrMWcdkjt8aWvemC0L1U2ffFQ9nh2QgBXyQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240128T160546Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAUHAGKZGSC4X6SJF5%2F20240128%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=f5ac058cde264e9edcdc8378c343f17250a984f136a5dce47fa544dbcb703470"
            alt="project-image"
            width={500}
            height={500}
          />
        </div>
        <div className="space-y-3">
          <p className="text-heading font-semibold text-black-100 dark:text-white-100">
            New Vision Education Center
          </p>
          <p className="text-black-100 opacity-70 dark:text-white-100">
            Learning Management System (LMS) that designed to streamline and
            automate various administrative tasks related to managing
            student&apos;s information within an educational institution. This
            module allows teachers to input and update student&apos;s grades,
            track their academic progress, and certification. It can handle
            other administrative tasks, such as managing class schedules,
            organizing extracurricular activities, and handling student
            admissions and registrations.
          </p>
          <p className="font-semibold text-black-100 dark:text-white-100">
            Tech Stacks
          </p>
          <ul className="ml-5 list-[square] space-y-1.5 text-black-100 opacity-70 dark:text-white-100">
            <li>Next.js</li>
            <li>Tailwind Css</li>
            <li>React Query</li>
            <li>Nest.js</li>
            <li>MySQL</li>
          </ul>
          <div className="flex items-center gap-x-5">
            <Link
              href="https://dev.new-vision-edu.com/"
              target="_blank"
              className="flex items-center gap-x-3 rounded-lg bg-zinc-200 px-4 py-1.5 dark:bg-black-200"
            >
              <IconExplore className="w-3 text-black-100 dark:text-white-100" />
              <p className="font-mono text-sm text-black-100 dark:text-white-100">
                Explore
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="panel grid  min-h-screen w-screen place-content-center px-[1rem] lg:grid-cols-2 lg:px-[8rem]">
        <div>
          <Image
            src="https://res.cloudinary.com/dxvclcibh/image/upload/v1686150956/mockup_rbdgpm.png"
            alt="project-image"
            width={500}
            height={500}
          />
        </div>
        <div className="space-y-3">
          <p className="text-heading font-semibold text-black-100 dark:text-white-100">
            BitBazaar
          </p>
          <p className="text-black-100 opacity-70 dark:text-white-100">
            BitBazaar represents the future of online game shopping, blending
            cutting-edge web technologies with an immersive and user-centric
            design. It offers an extensive and diverse collection of games and
            also have a wide range of games available, so you can find the
            perfect fit for your gaming setup.
          </p>
          <p className="font-semibold text-black-100 dark:text-white-100">
            Tech Stacks
          </p>
          <ul className="ml-5 list-[square] space-y-1.5 text-black-100 opacity-70 dark:text-white-100">
            <li>Next.js</li>
            <li>Tailwind Css</li>
            <li>React Query</li>
            <li>Rawg.io Api</li>
          </ul>
          <div className="flex items-center gap-x-5">
            <Link
              href="https://bitbazaar.vercel.app"
              target="_blank"
              className=""
            >
              <IconExplore className="w-4" />
              <p className="font-mono text-sm text-black-100 dark:text-white-100">
                Explore
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="panel grid  min-h-screen w-screen place-content-center px-[1rem] lg:grid-cols-2 lg:px-[8rem]">
        <div>
          <Image
            src="https://res.cloudinary.com/dxvclcibh/image/upload/v1686150956/mockup_rbdgpm.png"
            alt="project-image"
            width={500}
            height={500}
          />
        </div>
        <div className="space-y-3">
          <p className="text-heading font-semibold text-black-100 dark:text-white-100">
            BitBazaar
          </p>
          <p className="text-black-100 opacity-70 dark:text-white-100">
            BitBazaar represents the future of online game shopping, blending
            cutting-edge web technologies with an immersive and user-centric
            design. It offers an extensive and diverse collection of games and
            also have a wide range of games available, so you can find the
            perfect fit for your gaming setup.
          </p>
          <p className="font-semibold text-black-100 dark:text-white-100">
            Tech Stacks
          </p>
          <ul className="ml-5 list-[square] space-y-1.5 text-black-100 opacity-70 dark:text-white-100">
            <li>Next.js</li>
            <li>Tailwind Css</li>
            <li>React Query</li>
            <li>Rawg.io Api</li>
          </ul>
          <div className="flex items-center gap-x-5">
            <Link
              href="https://bitbazaar.vercel.app"
              target="_blank"
              className=""
            >
              <IconExplore className="w-4" />
              <p className="font-mono text-sm text-black-100 dark:text-white-100">
                Explore
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="panel grid  min-h-screen w-screen place-content-center px-[1rem] lg:grid-cols-2 lg:px-[8rem]">
        <div>
          <Image
            src="https://res.cloudinary.com/dxvclcibh/image/upload/v1686150956/mockup_rbdgpm.png"
            alt="project-image"
            width={500}
            height={500}
          />
        </div>
        <div className="space-y-3">
          <p className="text-heading font-semibold text-black-100 dark:text-white-100">
            BitBazaar
          </p>
          <p className="text-black-100 opacity-70 dark:text-white-100">
            BitBazaar represents the future of online game shopping, blending
            cutting-edge web technologies with an immersive and user-centric
            design. It offers an extensive and diverse collection of games and
            also have a wide range of games available, so you can find the
            perfect fit for your gaming setup.
          </p>
          <p className="font-semibold text-black-100 dark:text-white-100">
            Tech Stacks
          </p>
          <ul className="ml-5 list-[square] space-y-1.5 text-black-100 opacity-70 dark:text-white-100">
            <li>Next.js</li>
            <li>Tailwind Css</li>
            <li>React Query</li>
            <li>Rawg.io Api</li>
          </ul>
          <div className="flex items-center gap-x-5">
            <Link
              href="https://bitbazaar.vercel.app"
              target="_blank"
              className=""
            >
              <IconExplore className="w-4" />
              <p className="font-mono text-sm text-black-100 dark:text-white-100">
                Explore
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
