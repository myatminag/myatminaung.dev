import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

const BlogSection = () => {
  const blogSectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { duration: 0.8, ease: 'power2.out' },
        scrollTrigger: {
          trigger: blogSectionRef.current,
          start: '50% bottom',
        },
      });

      tl.fromTo(
        '.blog',
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
    { scope: blogSectionRef },
  );

  return (
    <section
      id="blogs"
      ref={blogSectionRef}
      className="container grid min-h-screen place-content-center py-28"
    >
      <>
        <div className="mb-5 flex items-center justify-center gap-x-5">
          <div className="h-[1px] w-16 bg-secondary-200 dark:bg-primary-300" />
          <header className="text-sm uppercase tracking-wider text-secondary-200 dark:text-primary-300">
            Blogs
          </header>
          <div className="h-[1px] w-16 bg-secondary-200 dark:bg-primary-300" />
        </div>
        <div className="flex justify-center">
          <p className="blog mb-10 w-full text-center font-light tracking-wide text-secondary-200 dark:text-primary-300 lg:w-6/12">
            Here is my blog space that I share collection of insights how
            I&apos;ve learned and understood throughout my career.
          </p>
        </div>
      </>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="blog space-y-3 rounded-xl bg-secondary-300 p-5 dark:bg-primary-200"
          >
            <p className="line-clamp-2 font-medium tracking-wide text-secondary-200 dark:text-primary-300">
              Lorem ipsum dolor sit amet.
            </p>
            <time className="font-mono text-sm font-light text-secondary-200 dark:text-primary-300">
              Sept 14, 2023
            </time>
            <p className="line-clamp-5 font-light text-secondary-200 dark:text-primary-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              vitae cupiditate incidunt vel natus accusantium inventore facere
              nesciunt perspiciatis, ut possimus, aliquam est velit, ratione
              quaerat unde aperiam tempora magnam.
            </p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-y-5">
        <div className="blog relative flex h-14 w-48 items-center justify-center rounded-full bg-secondary-200 text-secondary-100 dark:bg-primary-300 dark:text-primary-200">
          <p className="relative z-20 text-sm uppercase tracking-wide">
            View Blogs
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
