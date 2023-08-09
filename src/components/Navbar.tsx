import Link from "next/link";

const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-between py-6">
            <div className="flex items-center gap-x-6">
                <Link href="/" className="text-gray">
                    Home
                </Link>
                <Link href="/experience" className="text-gray">
                    Experience
                </Link>
                <Link href="/resume.pdf" target="__blank" className="text-gray">
                    Resume
                </Link>
            </div>
            <div>Dark Mode</div>
        </div>
    );
};

export default Navbar;
