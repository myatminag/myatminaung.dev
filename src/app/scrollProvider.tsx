'use client';

import React, { createContext, useEffect, useState, useContext } from 'react';

type SmoothScrollContextType = {
  scroll: any;
};

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  scroll: null,
});

const useSmoothScroll = () => useContext(SmoothScrollContext);

const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [scroll, setScroll] = useState<any>(null);

  useEffect(() => {
    if (!scroll) {
      (async () => {
        try {
          const LocomotiveScroll = (await import('locomotive-scroll')).default;

          setScroll(
            new LocomotiveScroll({
              lenisOptions: {
                smoothWheel: true,
                smoothTouch: false,
                duration: 1,
                orientation: 'vertical',
                gestureOrientation: 'vertical',
              },
            }),
          );
        } catch (error) {
          throw new Error(`[SmoothScrollProvider]: ${error}`);
        }
      })();
    }

    return () => {
      scroll && scroll.destroy();
    };
  }, [scroll]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <SmoothScrollContext.Provider value={{ scroll }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export { useSmoothScroll, SmoothScrollProvider };
