const BlogSection = () => {
  return (
    <section
      id="blog"
      className="container grid min-h-screen place-content-center py-10 lg:py-0"
    >
      <>
        <div className="mb-5 flex items-center justify-center gap-x-5">
          <div className="h-[1px] w-16 bg-secondary-200/20" />
          <header className="text-sm uppercase tracking-wider dark:text-secondary-200">
            Blogs
          </header>
          <div className="h-[1px] w-16 bg-secondary-200/20" />
        </div>
        <div className="flex justify-center">
          <p className="mb-10 w-6/12 text-center font-light tracking-wide dark:text-secondary-200 lg:text-heading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur exercitationem voluptatem, aperiam ut inventore et.
          </p>
        </div>
      </>
    </section>
  );
};

export default BlogSection;
