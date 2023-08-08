import Link from "next/link";

const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-x-6">
                <Link href="/">
                    <p className="text-zinc-500">Home</p>
                </Link>
                <Link href="/experience">
                    <p>Experience</p>
                </Link>
                <Link href="/resume.pdf" target="__blank">
                    <p>Resume</p>
                </Link>
            </div>
            <div>Dark Mode</div>
        </div>
    );
};

export default Navbar;
