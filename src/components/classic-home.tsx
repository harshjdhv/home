import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { CopyEmail } from "@/components/copy-email";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight, GitPullRequest, PenTool } from "lucide-react";

export function ClassicHome() {
    return (
        <main className="min-h-screen w-full px-6 py-12 md:py-20">
            <div className="max-w-[600px] mx-auto flex flex-col gap-10">

                {/* -- Header: Identity -- */}
                <header className="flex flex-col gap-5 select-none">
                    <div className="flex flex-row items-center gap-4">
                        <Image
                            src="https://avatars.githubusercontent.com/u/182950168?v=4"
                            alt="Harsh Jadhav"
                            width={64}
                            height={64}
                            className="rounded-full transition-all duration-500"
                        />
                        <div className="flex flex-col gap-0.5">
                            <h1 className="font-serif-accent text-3xl md:text-3xl text-foreground leading-tight">
                                Harsh Jadhav
                            </h1>
                            <p className="font-mono-meta text-xs text-neutral-400 font-medium uppercase tracking-widest pl-0.5">
                                Software Engineer
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 max-w-[50ch]">
                        <p className="text-muted-foreground leading-relaxed">
                            I build things from zero. <br />
                            Focused on polished web interfaces and performant systems. If it&apos;s boring and reliable, it&apos;s good enough to ship.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 pt-1">
                            <div className="flex items-center gap-4 text-muted-foreground">
                                <Link href="https://github.com/harshjdhv" target="_blank" className="hover:text-foreground transition-colors">
                                    <FaGithub size={18} />
                                </Link>
                                <Link href="https://x.com/harshjdhv" target="_blank" className="hover:text-foreground transition-colors">
                                    <FaXTwitter size={18} />
                                </Link>
                                <Link href="https://linkedin.com/in/jadhavharsh" target="_blank" className="hover:text-foreground transition-colors">
                                    <FaLinkedin size={18} />
                                </Link>
                            </div>

                            <div className="hidden sm:block w-px h-4 bg-border"></div>

                            <div className="flex items-center gap-4">
                                <CopyEmail />
                            </div>
                        </div>
                    </div>
                </header>

                {/* -- Main Content Stream -- */}
                <div className="flex flex-col gap-12">

                    {/* 01. EXPERIENCE */}
                    <div className="flex flex-col gap-5">
                        <div className="font-mono-meta text-[11px] text-neutral-400 uppercase tracking-widest border-b border-border pb-2 w-full">
                            Experience
                        </div>

                        <div className="flex flex-col gap-2">
                            {/* Role 1 */}
                            <div className="group flex flex-col gap-2 border-b border-border/40 pb-4 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                                            <span className="font-medium text-sm text-foreground">Software Engineer</span>
                                            <span className="hidden sm:block text-neutral-400 text-xs">/</span>
                                            <span className="text-sm text-muted-foreground">Independent</span>
                                        </div>
                                    </div>
                                    <span className="font-mono-meta text-[10px] text-neutral-400">2023 — Present</span>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Building web apps and crypto tooling for early-stage products. Work spans payment platforms, wallet integrations, and interface systems.
                                </p>
                            </div>

                            {/* Role 2 */}
                            <div className="group flex flex-col gap-2 border-b border-border/40 pb-4 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                                            <span className="font-medium text-sm text-foreground">Frontend Intern</span>
                                            <span className="hidden sm:block text-neutral-400 text-xs">/</span>
                                            <span className="text-sm text-muted-foreground">CSRBOX</span>
                                        </div>
                                    </div>
                                    <span className="font-mono-meta text-[10px] text-neutral-400">2023</span>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Built accessible, responsive frontend components. Worked on form handling and layout systems.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 02. SELECTED WORK */}
                    <div className="flex flex-col gap-5">
                        <div className="font-mono-meta text-[11px] text-neutral-400 uppercase tracking-widest border-b border-border pb-2 w-full">
                            Selected Work
                        </div>

                        <div className="flex flex-col gap-2">
                            {/* Project 1 */}
                            <Link href="https://componentry.fun" target="_blank" className="group flex flex-col gap-2 border-b border-border/40 pb-4 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                                            <span className="font-medium text-sm text-foreground group-hover:text-muted-foreground transition-colors">Componentry</span>
                                            <span className="hidden sm:block text-neutral-400 text-xs">/</span>
                                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">UI Library</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-mono-meta text-[10px] text-neutral-400 group-hover:text-foreground">React</span>
                                        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    A UI component library. Includes accessible, customizable components for React applications. Published and maintained.
                                </p>
                            </Link>

                            {/* Project 2 */}
                            <Link href="https://github.com/harshjdhv" target="_blank" className="group flex flex-col gap-2 border-b border-border/40 pb-4 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                                            <span className="font-medium text-sm text-foreground group-hover:text-muted-foreground transition-colors">GameSideVault</span>
                                            <span className="hidden sm:block text-neutral-400 text-xs">/</span>
                                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Crypto Wallet</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-mono-meta text-[10px] text-neutral-400 group-hover:text-foreground">Solana</span>
                                        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Crypto wallet infrastructure with multi-chain support. Implements fund locking and automated releases.
                                </p>
                            </Link>

                            {/* Project 3 */}
                            <Link href="https://github.com/harshjdhv" target="_blank" className="group flex flex-col gap-2 border-b border-border/40 pb-4 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                                            <span className="font-medium text-sm text-foreground group-hover:text-muted-foreground transition-colors">Perpetual Trading</span>
                                            <span className="hidden sm:block text-neutral-400 text-xs">/</span>
                                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Exchange UI</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-mono-meta text-[10px] text-neutral-400 group-hover:text-foreground">React</span>
                                        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Frontend for a perpetual futures trading interface. Includes wallet connection and real-time chart rendering.
                                </p>
                            </Link>

                            {/* Project 4 */}
                            <Link href="https://github.com/harshjdhv" target="_blank" className="group flex flex-col gap-2 border-b border-border/40 pb-4 mb-2 last:border-0 last:pb-0 last:mb-0">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                                            <span className="font-medium text-sm text-foreground group-hover:text-muted-foreground transition-colors">AnchorPay</span>
                                            <span className="hidden sm:block text-neutral-400 text-xs">/</span>
                                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Escrow Platform</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-mono-meta text-[10px] text-neutral-400 group-hover:text-foreground">Next.js</span>
                                        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Escrow payment platform. Freelancers and clients can lock funds against milestones.
                                </p>
                            </Link>
                        </div>
                    </div>

                    {/* 03. OPEN SOURCE */}
                    <div className="flex flex-col gap-5">
                        <div className="font-mono-meta text-[11px] text-neutral-400 uppercase tracking-widest border-b border-border pb-2 w-full">
                            Open Source
                        </div>

                        <div className="flex flex-col gap-2">
                            <Link href="https://github.com/RocketChat/Rocket.Chat/pull/38040" target="_blank" className="group flex items-center justify-between py-2 border-b border-border/40 last:border-0">
                                <div className="flex items-center gap-3">
                                    <GitPullRequest className="w-4 h-4 text-neutral-400" />
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                                        <span className="font-medium text-sm text-foreground group-hover:text-muted-foreground transition-colors">Rocket.Chat</span>
                                        <span className="hidden sm:block text-neutral-400 text-xs">/</span>
                                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Fix variable shadowing in Livechat API</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-mono-meta text-[10px] text-neutral-400 group-hover:text-foreground">#38040</span>
                                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </div>
                            </Link>

                            <Link href="https://github.com/calcom/cal.com/pull/23525" target="_blank" className="group flex items-center justify-between py-2 border-b border-border/40 last:border-0">
                                <div className="flex items-center gap-3">
                                    <GitPullRequest className="w-4 h-4 text-neutral-400" />
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                                        <span className="font-medium text-sm text-foreground group-hover:text-muted-foreground transition-colors">Cal.com</span>
                                        <span className="hidden sm:block text-neutral-400 text-xs">/</span>
                                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Hide organizer email in workflows</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-mono-meta text-[10px] text-neutral-400 group-hover:text-foreground">#23525</span>
                                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </div>
                            </Link>

                            <Link href="https://github.com/activepieces/activepieces/pull/8003" target="_blank" className="group flex items-center justify-between py-2 border-b border-border/40 last:border-0">
                                <div className="flex items-center gap-3">
                                    <GitPullRequest className="w-4 h-4 text-neutral-400" />
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                                        <span className="font-medium text-sm text-foreground group-hover:text-muted-foreground transition-colors">ActivePieces</span>
                                        <span className="hidden sm:block text-neutral-400 text-xs">/</span>
                                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Fix Add Tool dialog overflow</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-mono-meta text-[10px] text-neutral-400 group-hover:text-foreground">#8003</span>
                                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </div>
                            </Link>

                            <Link href="https://github.com/collabute/ossdotnow/pull/78" target="_blank" className="group flex items-center justify-between py-2 border-b border-border/40 last:border-0">
                                <div className="flex items-center gap-3">
                                    <GitPullRequest className="w-4 h-4 text-neutral-400" />
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                                        <span className="font-medium text-sm text-foreground group-hover:text-muted-foreground transition-colors">oss.now</span>
                                        <span className="hidden sm:block text-neutral-400 text-xs">/</span>
                                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Fix navbar overflow on mobile</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-mono-meta text-[10px] text-neutral-400 group-hover:text-foreground">#78</span>
                                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* 04. WRITING */}
                    <div className="flex flex-col gap-5">
                        <div className="font-mono-meta text-[11px] text-neutral-400 uppercase tracking-widest border-b border-border pb-2 w-full">
                            Writing
                        </div>

                        <div className="flex flex-col gap-2">
                            <Link href="#" className="group flex items-center justify-between py-2 border-b border-border/40 last:border-0 cursor-not-allowed">
                                <div className="flex items-center gap-3">
                                    <PenTool className="w-4 h-4 text-neutral-400" />
                                    <span className="font-medium text-sm text-foreground group-hover:text-muted-foreground transition-colors">
                                        Trust me, I&apos;ll write something soon
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-mono-meta text-[10px] text-neutral-400 group-hover:text-foreground">Soon™</span>
                                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* -- Footer -- */}
                <footer className="pt-10 flex flex-row items-center justify-between gap-4 text-sm opacity-60">
                    <span className="font-mono-meta text-xs text-neutral-400">© {new Date().getFullYear()} Harsh Jadhav</span>
                    <ModeToggle />
                </footer>

            </div>
        </main>
    );
}
