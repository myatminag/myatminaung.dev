import { Text, Box, Heading } from "@chakra-ui/react";

const Description = () => {
    return (
        <div className="flex flex-col gap-y-5 text-white">
            <header className="text-3xl tracking-wider font-bold mb-8">
                Hi, I&apos;m Myatmin Aung 👋
            </header>
            <p>I&apos;m a fullstack web developer based in Yangon, Myanmar.</p>
            <p>
                Interested in Javascript & Typescript, I have experience in
                implementing front-end frameworks like React.js, and Next.js. In
                backend development, I have hands-on experience in Node.js,
                Express.js, and MongoDB to build robust and scalable web
                applications.
            </p>
            <p>
                I am dedicated to continuously learning and growth in the field
                of web development. Always eager to contribute my skills to a
                dynamic team, collaborate on exciting projects, and contribute
                to the creation of innovative digital solutions.
            </p>
        </div>
    );
};

export default Description;
