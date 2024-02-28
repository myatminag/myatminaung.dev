'use client';

import { useRef } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface Props {
  title: string;
}

const Preloader = ({ title }: Props) => {
  const textRef = useRef(null);
  const loadingRef = useRef(null);

  useGSAP(
    () => {
      if (textRef.current) {
        SplitType.create(textRef.current, {
          types: 'words,chars',
        });
      }

      const tl = gsap.timeline({ defaults: { duration: 0.7 } });

      tl.to('.char', {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
      }).to('.follow', {
        y: '-100%',
        delay: 0.5,
        duration: 2,
        ease: 'power4.inOut',
      });
    },
    { scope: loadingRef },
  );

  return (
    <div ref={loadingRef} aria-hidden={true}>
      <div className="follow fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-primary-100 dark:bg-secondary-100">
        <h1
          ref={textRef}
          className="heading text-center text-2xl font-medium tracking-wider text-secondary-300 dark:text-secondary-200 lg:text-7xl"
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
