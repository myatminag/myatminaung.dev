import Link from "next/link";

const Navbar = () => {
    return (
        <div className="w-full py-12">
            <div className="flex items-center gap-x-6">
                <Link href="/" className="text-zinc-400">
                    Home
                </Link>
                <Link href="/experience" className="text-zinc-400">
                    Experience
                </Link>
                <Link
                    href="/resume.pdf"
                    target="__blank"
                    className="text-zinc-400"
                >
                    Resume
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
