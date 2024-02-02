import Link from 'next/link';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="container relative grid min-h-screen w-full place-content-center py-10 lg:py-0"
    >
      <div className="flex w-full max-w-xl flex-col items-center justify-center gap-y-6">
        <p className="text-center text-3xl font-medium tracking-wide  text-primary-100 dark:text-secondary-100">
          Let&lsquo;s build something extraordinary together!
        </p>
        <p className="mb-10 text-center font-light tracking-wide text-primary-100 dark:text-secondary-200 lg:text-heading">
          If you have any inquiries, collaboration opportunities, or just want
          to connect, feel free to reach out. Together, we can turn ideas into
          code and code into exceptional software experiences!
        </p>
        <Link
          href="mailto:myatminaung.dev@gmail.com"
          className="after:bg-primaryColor relative flex h-14 w-48 items-center justify-center border border-main-200 text-primary-100 after:absolute after:left-0 after:top-0 after:h-[100%] after:w-[0%] after:bg-main-200 after:transition-all after:duration-500
        hover:text-secondary-100 hover:after:w-[100%] dark:text-secondary-200"
        >
          <p className="relative z-20 uppercase tracking-wide">Get In Touch</p>
        </Link>
      </div>
      <p className="absolute bottom-5 left-[50%] translate-x-[-50%] text-xs tracking-wide text-primary-100 dark:text-secondary-200">
        Developed By Myat Min Aung
      </p>
    </section>
  );
};

export default ContactSection;
