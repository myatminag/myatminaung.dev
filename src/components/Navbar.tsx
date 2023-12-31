import Link from "next/link";

const Navbar = () => {
  return (
    <div className="pt-12 container">
      <div className="flex items-center gap-x-6">
        <Link href="/" className="text-zinc-400">
          Home
        </Link>
        <Link href="/experience" className="text-zinc-400">
          Experience
        </Link>
        <Link href="/resume.pdf" target="__blank" className="text-zinc-400">
          Resume
        </Link>
      </div>
      <div className="w-full h-px bg-zinc-800 my-12" />
    </div>
  );
};

export default Navbar;
