import Link from "next/link";

type Project = {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "Componentry",
        description: "Modern UI component library with accessible, customizable components for React applications.",
        technologies: ["React", "TypeScript", "Tailwind", "Storybook"],
        liveUrl: "https://componentry.fun",
        githubUrl: "https://github.com/harshjdhv/componentry",
    },
    {
        id: 2,
        title: "GameSideVault",
        description: "Secure crypto wallet infrastructure with multi-chain support and automated fund management.",
        technologies: ["Node.js", "HashiCorp Vault", "Ethereum", "Bitcoin"],
        liveUrl: "https://gamesidevault.com",
        githubUrl: "https://github.com/harshjdhv/gamesidevault",
    },
    {
        id: 3,
        title: "Perpetual Trading Platform",
        description: "SEI blockchain perpetual trading platform with real-time charts and wallet integration.",
        technologies: ["Next.js", "TypeScript", "SEI", "WebSocket"],
        liveUrl: "https://perpetual-demo.com",
        githubUrl: "https://github.com/harshjdhv/perpetual",
    },
    {
        id: 4,
        title: "AnchorPay",
        description: "Escrow payment platform for freelancers and clients with secure fund locking and milestone-based releases.",
        technologies: ["Next.js", "Solana", "Anchor", "TypeScript"],
        liveUrl: "https://anchorpay.app",
        githubUrl: "https://github.com/harshjdhv/anchorpay",
    },
];

const ProjectsSection = () => {
    return (
        <section className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-medium tracking-tight">Projects</h2>
                <Link
                    href="/projects"
                    className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                    View all →
                </Link>
            </div>

            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`group py-4 ${index !== projects.length - 1 ? "border-b border-dashed" : ""}`}
                    >
                        <div className="flex items-start gap-3">
                            <span className="text-xs font-medium text-[rgb(96,125,255)] mt-1 shrink-0 w-4 opacity-70">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-4 mb-1.5">
                                    <h3 className="text-base font-medium tracking-tight text-foreground">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-2 shrink-0">
                                        <Link
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors border border-border px-2 py-0.5 rounded-full"
                                        >
                                            Code
                                        </Link>
                                        <Link
                                            href={project.liveUrl}
                                            target="_blank"
                                            className="text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors border border-border px-2 py-0.5 rounded-full"
                                        >
                                            Live
                                        </Link>
                                    </div>
                                </div>

                                <p className="text-sm text-muted-foreground tracking-tight mb-3 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground bg-muted/40 px-2 py-1 rounded-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;