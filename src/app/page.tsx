import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="dark:bg-black-100 bg-white-100 h-screen w-full bg-white">
      <p className="dark:text-white-100 text-black-100">This is Content</p>
      <ThemeToggle />
    </div>
  );
}
