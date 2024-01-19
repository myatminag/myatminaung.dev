"use client";

import { useState, useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap, Expo } from "gsap";
gsap.registerPlugin();

const Preloader = () => {
  const textRef = useRef(null);
  const loadingRef = useRef(null);
  const [counter, setCounter] = useState<any>(0);

  useEffect(() => {
    if (textRef.current) {
      SplitType.create(textRef.current, {
        types: "words,chars",
      });
    }

    const count = setInterval(() => {
      setCounter((counter: any) =>
        counter < 100 ? counter + 1 : (clearInterval(count), setCounter(100))
      );
    }, 25);
  }, []);

  useEffect(() => {
    const q = gsap.utils.selector(loadingRef);
    const tl = gsap.timeline({ defaults: { duration: 0.7 } });

    tl.to(q(".char"), {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });

    tl.to(q(".follow"), { y: "-100%", delay: 0.5 });
  }, []);

  return (
    <div ref={loadingRef} aria-hidden={true}>
      <div className="follow w-full h-screen bg-[#2C2C2C] flex items-center justify-center absolute top-0">
        <h1
          ref={textRef}
          className="heading text-xl lg:text-5xl font-semibold lg:leading-[3.5rem] text-white text-center tracking-wider"
        >
          Innovate With Passion.
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
