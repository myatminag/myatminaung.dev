import Image from 'next/image';
import Link from 'next/link';
import { MutableRefObject } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ** Component Import
import IconExplore from '../icons/IconExplore';

interface Props {
  containerRef: MutableRefObject<null>;
}

const ProjectSection = ({ containerRef }: Props) => {
  return (
    <section id="projects" className="container min-h-screen">
      <div>
        <p className="text-heading font-semibold text-black-100 dark:text-white-100 lg:text-2xl">
          Feature Projects 💻
        </p>
        <p className="w-full text-black-100 dark:text-white-100 lg:w-[600px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolore
          molestiae ipsum quaerat placeat libero consequuntur culpa nobis.
          Beatae, tenetur.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-y-6 border-b border-dashed border-zinc-400 pb-5 pt-8 lg:grid-cols-2 lg:gap-x-12 lg:pb-0">
        <div className="w-full">
          <Image
            width={500}
            height={500}
            alt="project-image"
            className="h-[90%] w-full border object-top opacity-90"
            src="https://myatminag.s3.ap-southeast-1.amazonaws.com/Screenshot%202024-01-28%20at%2020.10.48.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaDmFwLXNvdXRoZWFzdC0xIkcwRQIhALj%2FLUlJipUHjxs3SeS0Q0D2gasN8QfP%2B%2BCyc8n886nnAiA2PdI%2Bf%2Bpz%2BiXs2Rob8VLjakJGINr%2FVFiiuRQaSZLl7SrtAgjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDI4OTkyMzU4MjM3MiIMIpOeuWnPQKbMo91dKsEC%2BIV%2BdsxNRT1VK36hV%2FDjzCSuKnIaLUxEzxyn6MIApIJM86%2BzY6dae7y%2FYwo3ipGKfvrwypP4isH9h1YgojurCXdCkb6mT8p24zhBHe6pQvs909MieHtZ63ptlYCAnRUKQwgN90K5fdFx4xzPK6vL6dU1fkVdRT%2B0DGMbBhvXGkHb5YpUITHyx5Iht1Z8LXt0l%2Bk%2BMJ%2BiiiAvsqRw3mNl6fXRVLyvffhixcSSEuuKms5wJbiLxccT%2Bwo535L%2FvqrWVU6nW9aV5qgoSuq%2B1C0eOQlbEQEQgCcJwVDP0P3oa3NVFHKVUP7Ty1c5D2UFWvjyHzPoDXkVaf3BKUuNTLRa0Pfff4XgREwMpUcS788D2cZ6nZWIVugam%2BHa9LdVWkGjhTG%2BnT7QDYzuSv5XCHWfg0CMWkouX7PAhy4nn0eOL%2BGcMJ3k3q0GOrMCSglJf69Y5P3kB64%2BAGsLzKJR5k0XPcmaT537TnCRZ4gt32Wi1f%2Fl8AXExQkKaOZXwmp%2FY%2BwOHDLb8RAR8L4dyAcVo58A6hiBWb8npD%2BtG0KLr4julwcgeJXUSZtzJymQBKgzuNS824pt2NO9l5q5781G0PdiyLbniLwqqFkks%2B%2FD%2BiiqW0YkiTymylG6nN%2B7jE1DWVX1KtA4dXduZR%2Br%2FxHZXVXXDOcxrCHPIe1jwInjU%2BvxO9F78N2mIrq1M0mI7ssWZDL7Px2q70dlUAhRZjT0QG%2BGRuVsG79B2kOVkzWvdV%2BDPuV%2BV9beASuJ0zhEUyxPy2ljTHe0qUJqolUTx9Il5IQ6B9EmPWgFWobbS45dGkmvgSwYz0ZkNFUUFVRtccGFYapSNw7GP6iJMXBG5Gu9XQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240129T141727Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAUHAGKZGSK3ZDYFHI%2F20240129%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=664ecd2a27169d7c6616eead35cbddf361b2321cee40f91022472f88b2cbff9c"
          />
        </div>
        <div className="space-y-3">
          <p className="text-xl font-semibold text-black-100 dark:text-white-100">
            New Vision Education Center
          </p>
          <p className="text-black-100 opacity-70 dark:text-white-100">
            The Learning Management System (LMS) project is a web-based platform
            designed to facilitate online learning and training. The LMS allows
            administrators to manage not only classes and courses but also user
            accounts, enrollments, and access permissions. It supports online
            quizzes, assignments, and assessments, with automated grading and
            feedback mechanisms.
          </p>
          <ul className="ml-4 flex list-[square] flex-wrap gap-x-6 text-black-100 opacity-70 dark:text-white-100">
            <li>Next.js</li>
            <li>Tailwind Css</li>
            <li>React Query</li>
            <li>Zustand</li>
            <li>Nest.js</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-y-6 border-b border-dashed border-zinc-400 pb-5 pt-8 lg:grid-cols-2 lg:gap-x-12 lg:pb-0">
        <div className="space-y-3">
          <p className="text-xl font-semibold text-black-100 dark:text-white-100">
            BitBazaar
          </p>
          <p className="text-black-100 opacity-70 dark:text-white-100">
            The Learning Management System (LMS) project is a web-based platform
            designed to facilitate online learning and training. The LMS allows
            administrators to manage not only classes and courses but also user
            accounts, enrollments, and access permissions. It supports online
            quizzes, assignments, and assessments, with automated grading and
            feedback mechanisms.
          </p>
          <ul className="ml-4 flex list-[square] flex-wrap gap-x-6 text-black-100 opacity-70 dark:text-white-100">
            <li>Next.js</li>
            <li>Tailwind Css</li>
            <li>React Query</li>
            <li>Rawg.io Api</li>
          </ul>
        </div>
        <div className="w-full">
          <Image
            width={500}
            height={500}
            alt="project-image"
            className="h-[90%] w-full border border-zinc-400 object-top"
            src="https://myatminag.s3.ap-southeast-1.amazonaws.com/Screenshot%202024-01-29%20at%2021.21.28.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaDmFwLXNvdXRoZWFzdC0xIkcwRQIhALj%2FLUlJipUHjxs3SeS0Q0D2gasN8QfP%2B%2BCyc8n886nnAiA2PdI%2Bf%2Bpz%2BiXs2Rob8VLjakJGINr%2FVFiiuRQaSZLl7SrtAgjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDI4OTkyMzU4MjM3MiIMIpOeuWnPQKbMo91dKsEC%2BIV%2BdsxNRT1VK36hV%2FDjzCSuKnIaLUxEzxyn6MIApIJM86%2BzY6dae7y%2FYwo3ipGKfvrwypP4isH9h1YgojurCXdCkb6mT8p24zhBHe6pQvs909MieHtZ63ptlYCAnRUKQwgN90K5fdFx4xzPK6vL6dU1fkVdRT%2B0DGMbBhvXGkHb5YpUITHyx5Iht1Z8LXt0l%2Bk%2BMJ%2BiiiAvsqRw3mNl6fXRVLyvffhixcSSEuuKms5wJbiLxccT%2Bwo535L%2FvqrWVU6nW9aV5qgoSuq%2B1C0eOQlbEQEQgCcJwVDP0P3oa3NVFHKVUP7Ty1c5D2UFWvjyHzPoDXkVaf3BKUuNTLRa0Pfff4XgREwMpUcS788D2cZ6nZWIVugam%2BHa9LdVWkGjhTG%2BnT7QDYzuSv5XCHWfg0CMWkouX7PAhy4nn0eOL%2BGcMJ3k3q0GOrMCSglJf69Y5P3kB64%2BAGsLzKJR5k0XPcmaT537TnCRZ4gt32Wi1f%2Fl8AXExQkKaOZXwmp%2FY%2BwOHDLb8RAR8L4dyAcVo58A6hiBWb8npD%2BtG0KLr4julwcgeJXUSZtzJymQBKgzuNS824pt2NO9l5q5781G0PdiyLbniLwqqFkks%2B%2FD%2BiiqW0YkiTymylG6nN%2B7jE1DWVX1KtA4dXduZR%2Br%2FxHZXVXXDOcxrCHPIe1jwInjU%2BvxO9F78N2mIrq1M0mI7ssWZDL7Px2q70dlUAhRZjT0QG%2BGRuVsG79B2kOVkzWvdV%2BDPuV%2BV9beASuJ0zhEUyxPy2ljTHe0qUJqolUTx9Il5IQ6B9EmPWgFWobbS45dGkmvgSwYz0ZkNFUUFVRtccGFYapSNw7GP6iJMXBG5Gu9XQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240129T145622Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAUHAGKZGSK3ZDYFHI%2F20240129%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=77b2f5560ea9973debbc2a7669c5244aa757191cb74649140d67c93efbac6db3"
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-y-6 border-b border-dashed border-zinc-400 pb-5 pt-8 lg:grid-cols-2 lg:gap-x-12 lg:pb-0">
        <div className="w-full">
          <Image
            width={500}
            height={500}
            alt="project-image"
            className="h-[90%] w-full border object-top"
            src="https://myatminag.s3.ap-southeast-1.amazonaws.com/Screenshot%202024-01-28%20at%2020.10.48.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaDmFwLXNvdXRoZWFzdC0xIkcwRQIhALj%2FLUlJipUHjxs3SeS0Q0D2gasN8QfP%2B%2BCyc8n886nnAiA2PdI%2Bf%2Bpz%2BiXs2Rob8VLjakJGINr%2FVFiiuRQaSZLl7SrtAgjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDI4OTkyMzU4MjM3MiIMIpOeuWnPQKbMo91dKsEC%2BIV%2BdsxNRT1VK36hV%2FDjzCSuKnIaLUxEzxyn6MIApIJM86%2BzY6dae7y%2FYwo3ipGKfvrwypP4isH9h1YgojurCXdCkb6mT8p24zhBHe6pQvs909MieHtZ63ptlYCAnRUKQwgN90K5fdFx4xzPK6vL6dU1fkVdRT%2B0DGMbBhvXGkHb5YpUITHyx5Iht1Z8LXt0l%2Bk%2BMJ%2BiiiAvsqRw3mNl6fXRVLyvffhixcSSEuuKms5wJbiLxccT%2Bwo535L%2FvqrWVU6nW9aV5qgoSuq%2B1C0eOQlbEQEQgCcJwVDP0P3oa3NVFHKVUP7Ty1c5D2UFWvjyHzPoDXkVaf3BKUuNTLRa0Pfff4XgREwMpUcS788D2cZ6nZWIVugam%2BHa9LdVWkGjhTG%2BnT7QDYzuSv5XCHWfg0CMWkouX7PAhy4nn0eOL%2BGcMJ3k3q0GOrMCSglJf69Y5P3kB64%2BAGsLzKJR5k0XPcmaT537TnCRZ4gt32Wi1f%2Fl8AXExQkKaOZXwmp%2FY%2BwOHDLb8RAR8L4dyAcVo58A6hiBWb8npD%2BtG0KLr4julwcgeJXUSZtzJymQBKgzuNS824pt2NO9l5q5781G0PdiyLbniLwqqFkks%2B%2FD%2BiiqW0YkiTymylG6nN%2B7jE1DWVX1KtA4dXduZR%2Br%2FxHZXVXXDOcxrCHPIe1jwInjU%2BvxO9F78N2mIrq1M0mI7ssWZDL7Px2q70dlUAhRZjT0QG%2BGRuVsG79B2kOVkzWvdV%2BDPuV%2BV9beASuJ0zhEUyxPy2ljTHe0qUJqolUTx9Il5IQ6B9EmPWgFWobbS45dGkmvgSwYz0ZkNFUUFVRtccGFYapSNw7GP6iJMXBG5Gu9XQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240129T141727Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAUHAGKZGSK3ZDYFHI%2F20240129%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=664ecd2a27169d7c6616eead35cbddf361b2321cee40f91022472f88b2cbff9c"
          />
        </div>
        <div className="space-y-3">
          <p className="text-xl font-semibold text-black-100 dark:text-white-100">
            New Vision Education Center
          </p>
          <p className="text-black-100 opacity-70 dark:text-white-100">
            The Learning Management System (LMS) project is a web-based platform
            designed to facilitate online learning and training. The LMS allows
            administrators to manage not only classes and courses but also user
            accounts, enrollments, and access permissions. It supports online
            quizzes, assignments, and assessments, with automated grading and
            feedback mechanisms.
          </p>
          <ul className="ml-4 flex list-[square] flex-wrap gap-x-6 text-black-100 opacity-70 dark:text-white-100">
            <li>Next.js</li>
            <li>Tailwind Css</li>
            <li>React Query</li>
            <li>Zustand</li>
            <li>Nest.js</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-y-6 border-b border-dashed border-zinc-400 pb-5 pt-8 lg:grid-cols-2 lg:gap-x-12 lg:pb-0">
        <div className="space-y-3">
          <p className="text-xl font-semibold text-black-100 dark:text-white-100">
            BitBazaar
          </p>
          <p className="text-black-100 opacity-70 dark:text-white-100">
            The Learning Management System (LMS) project is a web-based platform
            designed to facilitate online learning and training. The LMS allows
            administrators to manage not only classes and courses but also user
            accounts, enrollments, and access permissions. It supports online
            quizzes, assignments, and assessments, with automated grading and
            feedback mechanisms.
          </p>
          <ul className="ml-4 flex list-[square] flex-wrap gap-x-6 text-black-100 opacity-70 dark:text-white-100">
            <li>Next.js</li>
            <li>Tailwind Css</li>
            <li>React Query</li>
            <li>Rawg.io Api</li>
          </ul>
        </div>
        <div className="w-full">
          <Image
            width={500}
            height={500}
            alt="project-image"
            className="h-[90%] w-full border border-zinc-400 object-top"
            src="https://myatminag.s3.ap-southeast-1.amazonaws.com/Screenshot%202024-01-29%20at%2021.21.28.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaDmFwLXNvdXRoZWFzdC0xIkcwRQIhALj%2FLUlJipUHjxs3SeS0Q0D2gasN8QfP%2B%2BCyc8n886nnAiA2PdI%2Bf%2Bpz%2BiXs2Rob8VLjakJGINr%2FVFiiuRQaSZLl7SrtAgjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDI4OTkyMzU4MjM3MiIMIpOeuWnPQKbMo91dKsEC%2BIV%2BdsxNRT1VK36hV%2FDjzCSuKnIaLUxEzxyn6MIApIJM86%2BzY6dae7y%2FYwo3ipGKfvrwypP4isH9h1YgojurCXdCkb6mT8p24zhBHe6pQvs909MieHtZ63ptlYCAnRUKQwgN90K5fdFx4xzPK6vL6dU1fkVdRT%2B0DGMbBhvXGkHb5YpUITHyx5Iht1Z8LXt0l%2Bk%2BMJ%2BiiiAvsqRw3mNl6fXRVLyvffhixcSSEuuKms5wJbiLxccT%2Bwo535L%2FvqrWVU6nW9aV5qgoSuq%2B1C0eOQlbEQEQgCcJwVDP0P3oa3NVFHKVUP7Ty1c5D2UFWvjyHzPoDXkVaf3BKUuNTLRa0Pfff4XgREwMpUcS788D2cZ6nZWIVugam%2BHa9LdVWkGjhTG%2BnT7QDYzuSv5XCHWfg0CMWkouX7PAhy4nn0eOL%2BGcMJ3k3q0GOrMCSglJf69Y5P3kB64%2BAGsLzKJR5k0XPcmaT537TnCRZ4gt32Wi1f%2Fl8AXExQkKaOZXwmp%2FY%2BwOHDLb8RAR8L4dyAcVo58A6hiBWb8npD%2BtG0KLr4julwcgeJXUSZtzJymQBKgzuNS824pt2NO9l5q5781G0PdiyLbniLwqqFkks%2B%2FD%2BiiqW0YkiTymylG6nN%2B7jE1DWVX1KtA4dXduZR%2Br%2FxHZXVXXDOcxrCHPIe1jwInjU%2BvxO9F78N2mIrq1M0mI7ssWZDL7Px2q70dlUAhRZjT0QG%2BGRuVsG79B2kOVkzWvdV%2BDPuV%2BV9beASuJ0zhEUyxPy2ljTHe0qUJqolUTx9Il5IQ6B9EmPWgFWobbS45dGkmvgSwYz0ZkNFUUFVRtccGFYapSNw7GP6iJMXBG5Gu9XQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240129T145622Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAUHAGKZGSK3ZDYFHI%2F20240129%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=77b2f5560ea9973debbc2a7669c5244aa757191cb74649140d67c93efbac6db3"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
