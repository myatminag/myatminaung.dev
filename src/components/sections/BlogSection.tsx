const BlogSection = () => {
  return (
    <section
      id="blog"
      className="container grid min-h-screen place-content-center py-10 lg:py-0"
    >
      <>
        <div className="mb-5 flex items-center justify-center gap-x-5">
          <div className="h-[1px] w-16 bg-secondary-200/40 dark:bg-secondary-200/20" />
          <header className="text-sm uppercase tracking-wider text-primary-100 dark:text-secondary-200">
            Blogs
          </header>
          <div className="h-[1px] w-16 bg-secondary-200/40 dark:bg-secondary-200/20" />
        </div>
        <div className="flex justify-center">
          <p className="mb-10 w-full text-center font-light tracking-wide text-primary-100 dark:text-secondary-200 lg:w-6/12 lg:text-heading">
            Here is my blog space that I share collection of insights how
            I&apos;ve learned and understood throughout my career.
          </p>
        </div>
      </>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-3 rounded-md border border-secondary-200/40 p-4 dark:border-secondary-200/20">
          <p className="line-clamp-2 font-light tracking-wide text-primary-100 dark:text-secondary-100">
            Function Experssion & Function Declaration in JS
          </p>
          <time className="font-mono text-sm font-light text-primary-100 dark:text-secondary-200">
            Sept 14, 2023
          </time>
          <p className="line-clamp-5 text-primary-100 dark:text-secondary-200">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            vitae cupiditate incidunt vel natus accusantium inventore facere
            nesciunt perspiciatis, ut possimus, aliquam est velit, ratione
            quaerat unde aperiam tempora magnam.
          </p>
        </div>
        <div className="space-y-3 rounded-md border border-secondary-200/40 p-4 dark:border-secondary-200/20">
          <p className="line-clamp-2 font-light tracking-wide text-primary-100 dark:text-secondary-100">
            Function Experssion & Function Declaration in JS
          </p>
          <time className="font-mono text-sm font-light text-primary-100 dark:text-secondary-200">
            Sept 14, 2023
          </time>
          <p className="line-clamp-5 text-primary-100 dark:text-secondary-200">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            vitae cupiditate incidunt vel natus accusantium inventore facere
            nesciunt perspiciatis, ut possimus, aliquam est velit, ratione
            quaerat unde aperiam tempora magnam.
          </p>
        </div>
        <div className="space-y-3 rounded-md border border-secondary-200/40 p-4 dark:border-secondary-200/20">
          <p className="line-clamp-2 font-light tracking-wide text-primary-100 dark:text-secondary-100">
            Function Experssion & Function Declaration in JS
          </p>
          <time className="font-mono text-sm font-light text-primary-100 dark:text-secondary-200">
            Sept 14, 2023
          </time>
          <p className="line-clamp-5 text-primary-100 dark:text-secondary-200">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            vitae cupiditate incidunt vel natus accusantium inventore facere
            nesciunt perspiciatis, ut possimus, aliquam est velit, ratione
            quaerat unde aperiam tempora magnam.
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-y-5">
        <div
          className="after:bg-primaryColor relative flex h-14 w-48 items-center justify-center border border-secondary-200/40 text-primary-100 after:absolute after:left-0 after:top-0 after:h-[100%] after:w-[0%] after:bg-main-200 after:transition-all after:duration-500
        hover:text-secondary-100 hover:after:w-[100%] dark:text-secondary-200"
        >
          <p className="relative z-20 uppercase tracking-wide">View Blogs</p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
