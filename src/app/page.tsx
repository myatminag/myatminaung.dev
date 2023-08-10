import Description from "@/components/Description";
import ProjectLists from "@/components/ProjectLists";
import Particles from "@/components/Particles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="pb-8 container">
            <Navbar />

            <div className="w-full h-px bg-zinc-800 mb-12" />

            <Description />
            {/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}

            <div className="w-full h-px bg-zinc-800 my-12" />

            <ProjectLists />

            <div className="w-full h-px bg-zinc-800 my-12" />

            <Footer />

            {/* <h1 className="z-10 text-3xl text-center text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-4xl whitespace-nowrap bg-clip-text">
                Myat Min Aung
            </h1> */}

            {/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
        </div>
    );
}
