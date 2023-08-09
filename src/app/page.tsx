"use client";

import Link from "next/link";

import Description from "@/components/Description";
import ProjectLists from "@/components/projects/ProjectLists";
import Particles from "@/components/Particles";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <div className="pb-8 container">
            <Navbar />

            {/* <div className="w-full h-[0.5px] bg-zinc-500 my-8" /> */}

            <Description />
            {/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}

            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />

            <ProjectLists />

            {/* <h1 className="z-10 text-3xl text-center text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-4xl whitespace-nowrap bg-clip-text">
                Myat Min Aung
            </h1> */}

            {/* <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" /> */}
        </div>
    );
}
