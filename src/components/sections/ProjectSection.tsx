import { useRef, MutableRefObject } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  containerRef: MutableRefObject<null>;
}

const ProjectSection = ({ containerRef }: Props) => {
  const sliderRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      let panels = gsap.utils.toArray('.panel');

      if (sliderRef.current) {
        let context = gsap.context(() => {
          gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: 'none',
            scrollTrigger: {
              trigger: sliderRef.current,
              pin: true,
              scrub: 1,
              snap: 1 / (panels.length - 1),
              end: () => '+=' + sliderRef.current?.offsetWidth,
            },
          });
        }, containerRef);

        return () => context.revert();
      }
    },
    { scope: sliderRef },
  );

  return (
    <section
      id="projects"
      ref={sliderRef}
      className="flex h-screen w-[400vw] flex-wrap"
    >
      <div className="panel flex min-h-screen w-screen flex-col items-center justify-center bg-red-400">
        Project 1
      </div>
      <div className="panel flex min-h-screen w-screen flex-col items-center justify-center bg-green-400">
        Project 2
      </div>
      <div className="panel flex min-h-screen w-screen flex-col items-center justify-center bg-yellow-400">
        Project 3
      </div>
      <div className="panel flex min-h-screen w-screen flex-col items-center justify-center bg-purple-400">
        Project 4
      </div>
    </section>
  );
};

export default ProjectSection;
