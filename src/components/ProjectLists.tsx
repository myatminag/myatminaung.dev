import ProjectCard from "./ProjectCard";

const ProjectLists = () => {
    return (
        <div>
            <header className="text-2xl lg:text-3xl tracking-wider font-bold text-zinc-200 mb-3">
                Featured Projects 👨‍💻
            </header>
            <p className="text-zinc-400 mb-6">
                Some of the projects are from work and some are on my own time.
            </p>
            <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2">
                <div className="grid grid-cols-1 gap-4">
                    <ProjectCard>
                        <div className="p-8">
                            <p className="z-20 text-xl font-medium duration-1000 text-zinc-200 group-hover:text-white font-display">
                                BitBazaar
                            </p>
                            <p className="mt-4 leading-6 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                BitBazaar offers an extensive and diverse
                                collection of games and also have a wide range
                                of games available, so you can find the perfect
                                fit for your gaming setup.
                            </p>
                        </div>
                    </ProjectCard>
                    <ProjectCard>
                        <div className="p-8">
                            <p className="z-20 text-xl font-medium duration-1000 text-zinc-200 group-hover:text-white font-display">
                                Empress
                            </p>
                            <p className="mt-4 leading-6 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                A fully functional ecommerce built with mern
                                stack that users can browse variety of products
                                and also allows for secure online transaction
                                using the integrated stripe gateway.
                            </p>
                        </div>
                    </ProjectCard>
                    <ProjectCard>
                        <div className="p-8">
                            <p className="z-20 text-xl font-medium duration-1000 text-zinc-200 group-hover:text-white font-display">
                                Inner Journey
                            </p>
                            <p className="mt-4 leading-6 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                Blog Website will focus on delivering an
                                engaging and responsive user interface, enabling
                                bloggers and readers to interact with the
                                platform seamlessly.
                            </p>
                        </div>
                    </ProjectCard>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <ProjectCard>
                        <div className="p-8">
                            <p className="z-20 text-xl font-medium duration-1000 text-zinc-200 group-hover:text-white font-display">
                                NVEC LMS
                            </p>
                            <p className="mt-4 leading-6 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                An innovative and comprehensive platform
                                designed to revolutionize the way education and
                                training are delivered in both academic and
                                professional settings. The LMS aims to provide a
                                user-friendly, feature-rich, and customizable
                                environment that enhances the learning
                                experience for students, employees, and
                                educators alike.
                            </p>
                        </div>
                    </ProjectCard>
                    <ProjectCard>
                        <div className="p-8">
                            <p className="z-20 text-xl font-medium duration-1000 text-zinc-200 group-hover:text-white font-display">
                                Kanote API
                            </p>
                            <p className="mt-4 leading-6 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                Dynamic online platform designed to facilitate
                                the seamless buying and selling of art. Art
                                Selling Application is currently under
                                development and aims to create a seamless and
                                user-friendly platform for artists to showcase
                                and sell their artwork online.
                            </p>
                        </div>
                    </ProjectCard>
                </div>
            </div>
        </div>
    );
};

export default ProjectLists;
