import { useTheme } from 'next-themes';
import IconSun from './icons/IconSun';
import IconMoon from './icons/IconMoon';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <label className="swap swap-rotate rounded-full border border-secondary-300 bg-secondary-300 p-2 transition-all duration-500 dark:border-primary-200 dark:bg-primary-200 lg:hover:-translate-y-1.5 lg:hover:border-secondary-200 lg:dark:hover:border-primary-300">
      <input
        type="checkbox"
        onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />

      <IconSun className="swap-on h-5 w-5 fill-current text-secondary-200 dark:text-primary-300" />

      <IconMoon className="swap-off h-5 w-5 fill-current text-secondary-200 dark:text-primary-300" />
    </label>
  );
};

export default ThemeToggle;
