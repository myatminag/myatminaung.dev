import Link from "next/link";

const Navbar = () => {
    return (
        <div className="w-full py-12">
            <div className="flex items-center gap-x-6">
                <Link href="/" className="text-[#ced4da]">
                    Home
                </Link>
                <Link href="/experience" className="text-[#ced4da]">
                    Experience
                </Link>
                <Link
                    href="/resume.pdf"
                    target="__blank"
                    className="text-[#ced4da]"
                >
                    Resume
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
