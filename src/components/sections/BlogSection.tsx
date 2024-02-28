import Link from 'next/link';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts, Post } from 'contentlayer/generated';

const BlogSection = () => {
  const blogSectionRef = useRef(null);

  const getData = () => {
    const posts: Post[] = allPosts.sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
    return posts.map((post: Post) => post);
  };

  const blogs: Post[] = getData();

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
        {blogs.map((post) => (
          <Link
            key={post._id}
            href={`/blogs/${post._raw.flattenedPath}`}
            className="blog flex  flex-col space-y-3 rounded-xl bg-secondary-300 p-5 dark:bg-primary-200"
          >
            <p className="line-clamp-2 h-full font-medium tracking-wide text-secondary-200 dark:text-primary-300">
              {post.title}
            </p>
            <div className="mt-auto space-y-3">
              <time className="font-mono text-sm font-light text-secondary-200 dark:text-primary-300">
                {format(parseISO(post.date), 'MMMM dd, yyyy')}
              </time>
              <p className="line-clamp-4 font-light text-secondary-200 dark:text-primary-300">
                {post.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {blogs.length > 6 && (
        <div className="mt-10 flex flex-col items-center justify-center gap-y-5">
          <Link
            href="/blogs"
            className="blog relative flex h-14 w-48 items-center justify-center rounded-full bg-secondary-200 text-secondary-100 dark:bg-primary-300 dark:text-primary-200"
          >
            <p className="relative z-20 text-sm uppercase tracking-wide">
              View Blogs
            </p>
          </Link>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
