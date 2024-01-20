'use client';

import { useState, useEffect, useRef } from 'react';
import SplitType from 'split-type';
import { gsap, Expo } from 'gsap';
gsap.registerPlugin();

const Preloader = () => {
  const textRef = useRef(null);
  const loadingRef = useRef(null);
  const [counter, setCounter] = useState<any>(0);

  useEffect(() => {
    if (textRef.current) {
      SplitType.create(textRef.current, {
        types: 'words,chars',
      });
    }

    const count = setInterval(() => {
      setCounter((counter: any) =>
        counter < 100 ? counter + 1 : (clearInterval(count), setCounter(100)),
      );
    }, 25);
  }, []);

  useEffect(() => {
    const q = gsap.utils.selector(loadingRef);
    const tl = gsap.timeline({ defaults: { duration: 0.7 } });

    tl.to(q('.char'), {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });

    tl.to(q('.follow'), { y: '-100%', delay: 0.5 });
  }, []);

  return (
    <div ref={loadingRef} aria-hidden={true}>
      <div className="follow absolute top-0 z-50 flex h-screen w-full items-center justify-center bg-black-100 dark:bg-white-100">
        <h1
          ref={textRef}
          className="heading text-white text-center text-xl font-semibold tracking-wider text-white-100 dark:text-black-100 lg:text-5xl lg:leading-[3.5rem]"
        >
          Innovate With Passion.
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
