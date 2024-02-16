import Link from 'next/link';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ContactSection = () => {
  const contactSectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { duration: 0.8, ease: 'power2.out' },
        scrollTrigger: {
          trigger: contactSectionRef.current,
          start: '50% bottom',
        },
      });

      tl.fromTo(
        '.contact',
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
    { scope: contactSectionRef },
  );

  return (
    <section
      id="contact"
      ref={contactSectionRef}
      className="container relative grid min-h-screen w-full place-content-center py-10 lg:py-0"
    >
      <div className="flex w-full max-w-xl flex-col items-center justify-center gap-y-6">
        <p className="contact text-center text-3xl font-medium tracking-wide  text-secondary-200 dark:text-primary-300">
          Let&lsquo;s build something extraordinary together!
        </p>
        <p className="contact mb-10 text-center font-light tracking-wide text-secondary-200 dark:text-primary-300">
          If you have any inquiries, collaboration opportunities, or just want
          to connect, feel free to reach out. Together, we can turn ideas into
          code and code into exceptional software experiences!
        </p>
        <Link
          href="mailto:myatminaung.dev@gmail.com"
          className="contact relative flex h-14 w-48 items-center justify-center rounded-full bg-secondary-200 text-secondary-100 dark:bg-primary-300 dark:text-primary-200"
        >
          <p className="relative z-20 text-sm uppercase tracking-wide">
            Get In Touch
          </p>
        </Link>
      </div>
      <p className="absolute bottom-5 left-[50%] translate-x-[-50%] text-xs tracking-wide text-secondary-200 dark:text-primary-300">
        Developed By Myat Min Aung
      </p>
    </section>
  );
};

export default ContactSection;
