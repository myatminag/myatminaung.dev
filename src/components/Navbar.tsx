import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-5">
      <p className="text-lg font-medium text-black-100 dark:text-white-100">
        Mma
      </p>
      <div className="flex items-center gap-x-6">
        <Link href="#" className="text-black-100 dark:text-white-100">
          Home
        </Link>
        <Link href="#" className="text-black-100 dark:text-white-100">
          About
        </Link>
        <Link href="#" className="text-black-100 dark:text-white-100">
          Experience
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
