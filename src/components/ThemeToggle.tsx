"use client";

import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme("light")} className="dark:text-red-500">
        Light
      </button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
};

export default ThemeToggle;
