'use client';

import React, { createContext, useEffect, useState, ReactNode } from 'react';

type ScrollOptions = {
  [key: string]: any;
};

type SmoothScrollContextType = {
  scroll: any;
};

export const SmoothScrollContext = createContext<SmoothScrollContextType>({
  scroll: null,
});

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({
  children,
}) => {
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

SmoothScrollContext.displayName = 'SmoothScrollContext';
SmoothScrollProvider.displayName = 'SmoothScrollProvider';
