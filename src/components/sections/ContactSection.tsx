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
        '.contact-text',
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
        <p className="contact-text text-center text-3xl font-medium tracking-wide  text-secondary-200 dark:text-secondary-300">
          Let&lsquo;s build something extraordinary together!
        </p>
        <p className="contact-text mb-10 text-center font-light tracking-wide text-secondary-200 dark:text-primary-500 lg:text-heading">
          If you have any inquiries, collaboration opportunities, or just want
          to connect, feel free to reach out. Together, we can turn ideas into
          code and code into exceptional software experiences!
        </p>
        <Link
          href="mailto:myatminaung.dev@gmail.com"
          className="contact-text after:bg-primary-600 border-primary-600 relative flex h-14 w-48 items-center justify-center border text-secondary-200 after:absolute after:left-0 after:top-0 after:h-[100%] after:w-[0%] after:transition-all after:duration-500
        hover:text-secondary-400 hover:after:w-[100%] dark:text-primary-500 dark:hover:text-secondary-300"
        >
          <p className="relative z-20 uppercase tracking-wide">Get In Touch</p>
        </Link>
      </div>
      <p className="absolute bottom-5 left-[50%] translate-x-[-50%] text-xs tracking-wide text-secondary-200 dark:text-primary-500">
        Developed By Myat Min Aung
      </p>
    </section>
  );
};

export default ContactSection;
