import { useMDXComponent } from 'next-contentlayer/hooks';

interface Props {
  code: string;
}

const MdxComponent = ({ code }: Props) => {
  const Component = useMDXComponent(code);

  return (
    <article className="prose-quoteless prose-neutral dark:prose-invert prose max-w-full">
      <Component />
    </article>
  );
};

export default MdxComponent;
