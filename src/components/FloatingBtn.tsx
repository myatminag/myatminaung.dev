'use client';

import ThemeToggle from './ThemeToggle';

const FloatingBtn = () => {
  return (
    <div className="fixed bottom-5 right-5 z-30">
      <ThemeToggle />
    </div>
  );
};

export default FloatingBtn;
