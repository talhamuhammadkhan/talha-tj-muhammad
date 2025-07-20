"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const techStack = [
    { name: "R", src: "/logos/r.png" },
    { name: "C#", src: "/logos/csharp.png" },
    { name: "JavaScript", src: "/logos/javascript.png" },
    { name: "TypeScript", src: "/logos/typescript.png" },
    { name: "React", src: "/logos/react.png" },
    { name: "Next.js", src: "/logos/next.svg" },
    { name: "Node.js", src: "/logos/node.png" },
    { name: "Tailwind CSS", src: "/logos/tailwind.png" },
    { name: "Java", src: "/logos/java.png" },
    { name: "Spring", src: "/logos/spring.png" },
    { name: "Spring Boot", src: "/logos/springboot.svg" },
    { name: "JWT", src: "/logos/jwt.svg" },
    { name: "Python", src: "/logos/python.png" },
    { name: "Tensor Flow", src: "/logos/tensorflow.png" },
    { name: "spaCy", src: "/logos/spacy.png" },
    { name: "Pandas", src: "/logos/pandas.png" },
    { name: "MSSQL Server", src: "/logos/mssqlserver.png" },
    { name: "MySQL", src: "/logos/mysql.png" },
    { name: "MariaDB", src: "/logos/mariadb.svg" },
    { name: "Docker", src: "/logos/docker.png" },
    { name: "AWS", src: "/logos/aws.png" },
    { name: "GCP", src: "/logos/gcp.svg" },
    { name: "Tableau", src: "/logos/tableau.png" },
];

function TechItems() {
    return (
        <>
            {techStack.map((tech, idx) => (
                <div
                    key={idx}
                    className="flex flex-col items-center justify-center min-w-[60px] sm:min-w-[80px] flex-shrink-0"
                >
                    <Image
                        src={tech.src}
                        alt={tech.name}
                        width={40}
                        height={40}
                        className="object-contain sm:w-12 sm:h-12 w-10 h-10"
                        unoptimized
                    />
                    <span className="mt-2 text-[0.65rem] sm:text-xs font-mono text-muted-foreground whitespace-nowrap">
                        {tech.name}
                    </span>
                </div>
            ))}
        </>
    );
}

export default function TechBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 10);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            className={`w-full bg-muted/70 py-4 sm:py-6 overflow-hidden select-none relative transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"
                }`}
        >
            <div className="marquee">
                <div className="marquee__inner">
                    <TechItems />
                    <TechItems />
                </div>
            </div>

            <style jsx>{`
                .marquee {
                    position: relative;
                    display: flex;
                    align-items: center;
                    width: 100%;
                    overflow: hidden;
                }

                .marquee__inner {
                    display: flex;
                    gap: 2rem;
                    width: max-content;
                    white-space: nowrap;
                    animation: scroll 50s linear infinite;
                }

                @media (min-width: 640px) {
                    .marquee__inner {
                        gap: 4rem;
                    }
                }

                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </div>
    );
}
