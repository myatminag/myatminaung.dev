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
  options: ScrollOptions;
};

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({
  children,
  options,
}) => {
  const [scroll, setScroll] = useState<any>(null);

  useEffect(() => {
    if (!scroll) {
      (async () => {
        try {
          const LocomotiveScroll = (await import('locomotive-scroll')).default;

          setScroll(new LocomotiveScroll());
        } catch (error) {
          throw new Error(`[SmoothScrollProvider]: ${error}`);
        }
      })();
    }

    return () => {
      scroll && scroll.destroy();
    };
  }, [scroll, options]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <SmoothScrollContext.Provider value={{ scroll }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

SmoothScrollContext.displayName = 'SmoothScrollContext';
SmoothScrollProvider.displayName = 'SmoothScrollProvider';
