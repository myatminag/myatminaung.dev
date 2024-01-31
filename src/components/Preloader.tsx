'use client';

import { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';
gsap.registerPlugin();

const Preloader = () => {
  const textRef = useRef(null);
  const loadingRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      SplitType.create(textRef.current, {
        types: 'words,chars',
      });
    }

    const q = gsap.utils.selector(loadingRef);
    const tl = gsap.timeline({ defaults: { duration: 0.7 } });

    tl.to(q('.char'), {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });

    tl.to(q('.follow'), {
      y: '-100%',
      delay: 0.5,
      duration: 2,
      ease: 'power4.inOut',
    });
  }, []);

  return (
    <div ref={loadingRef} aria-hidden={true}>
      <div className="follow fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-main-100 dark:bg-secondary-100">
        <h1
          ref={textRef}
          className="heading text-white-100 text-center text-xl font-semibold tracking-wider text-secondary-100 dark:text-primary-100 lg:text-5xl lg:leading-[3rem]"
        >
          Innovate With Passion.
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
