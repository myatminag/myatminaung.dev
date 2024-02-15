import { notFound } from 'next/navigation';
import { allPosts, Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';

import MdxComponent from '@/components/MdxComponent';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: {
  params: Props['params'];
}) {
  const post = allPosts.find(
    (post: Post) => post._raw.flattenedPath === params.slug,
  ) as Post;

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<Props['params'][]> {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

const BlogDetail = ({ params }: { params: { slug: string } }) => {
  const post: Post = allPosts.find(
    (post: Post) => post._raw.flattenedPath === params.slug,
  ) as Post;

  if (!post) {
    notFound();
  }

  return (
    <section className="container min-h-[calc(100vh-87px)] pt-28">
      <div className="w-full pb-10 lg:mx-auto lg:max-w-3xl">
        <header className="mb-5 space-y-3">
          <p className="text-2xl font-semibold text-secondary-200 dark:text-primary-300">
            {post.title}
          </p>
          <div>
            <time className="font-mono text-sm font-light text-secondary-200 dark:text-primary-300">
              {format(parseISO(post.date), 'MMMM dd, yyyy')}
            </time>
          </div>
        </header>
        <MdxComponent code={post.body.code} />
      </div>
    </section>
  );
};

export default BlogDetail;
