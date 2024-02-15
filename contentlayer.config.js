import {
  defineComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import readingTime from 'reading-time';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const computedFields =
  defineComputedFields <
  'Post' >
  {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath,
    },
    readingTime: {
      type: 'json',
      resolve: (doc) => {
        return readingTime(doc.body.raw);
      },
    },
  };

const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    description: {
      type: 'string',
      required: false,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeAutolinkHeadings,
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});
