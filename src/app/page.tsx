import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { CopyEmail } from "@/components/copy-email";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight, GitPullRequest, PenTool } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Software Engineer",
    company: "Independent",
    period: "2023 — Present",
    description: "Building web apps and crypto tooling for early-stage products. Work spans payment platforms, wallet integrations, and interface systems."
  },
  {
    role: "Frontend Intern",
    company: "CSRBOX",
    period: "2023",
    description: "Built accessible, responsive frontend components. Worked on form handling and layout systems."
  }
];

const PROJECTS = [
  {
    title: "Componentry",
    type: "UI Library",
    stack: "React",
    href: "https://componentry.fun",
    description: "A UI component library. Includes accessible, customizable components for React applications. Published and maintained."
  },
  {
    title: "GameSideVault",
    type: "Crypto Wallet",
    stack: "Solana",
    href: "https://github.com/harshjdhv",
    description: "Crypto wallet infrastructure with multi-chain support. Implements fund locking and automated releases."
  },
  {
    title: "Perpetual Trading",
    type: "Exchange UI",
    stack: "React",
    href: "https://github.com/harshjdhv",
    description: "Frontend for a perpetual futures trading interface. Includes wallet connection and real-time chart rendering."
  },
  {
    title: "AnchorPay",
    type: "Escrow Platform",
    stack: "Next.js",
    href: "https://github.com/harshjdhv",
    description: "Escrow payment platform. Freelancers and clients can lock funds against milestones."
  }
];

const PULL_REQUESTS = [
  {
    title: "Rocket.Chat",
    description: "Fix variable shadowing in Livechat API",
    pr: "#38040",
    href: "https://github.com/RocketChat/Rocket.Chat/pull/38040"
  },
  {
    title: "Cal.com",
    description: "Hide organizer email in workflows",
    pr: "#23525",
    href: "https://github.com/calcom/cal.com/pull/23525"
  },
  {
    title: "ActivePieces",
    description: "Fix Add Tool dialog overflow",
    pr: "#8003",
    href: "https://github.com/activepieces/activepieces/pull/8003"
  },
  {
    title: "oss.now",
    description: "Fix navbar overflow on mobile",
    pr: "#78",
    href: "https://github.com/collabute/ossdotnow/pull/78"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen w-full px-6 pt-16 pb-8 md:pt-24 md:pb-16">
      <div className="max-w-[600px] mx-auto flex flex-col gap-4">

        {/* -- Header: Identity -- */}
        <header className="flex flex-col gap-3 select-none">
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-col gap-0">
              <h1 className="font-sans text-[14px] text-foreground font-semibold">
                Harsh Jadhav
              </h1>
              <p className="font-sans text-[14px] text-neutral-400">
                Updated Feb 22, 2026
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 max-w-[50ch] mt-6">
            <p className="font-sans text-[14px] text-foreground">
              I build things from zero. <br />
              Focused on polished web interfaces and performant systems. If it's boring and reliable, it's good enough to ship.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 pt-1">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Link aria-label="Github Profile" href="https://github.com/harshjdhv" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  <FaGithub size={18} />
                </Link>
                <Link aria-label="X (Twitter) Profile" href="https://x.com/harshjdhv" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  <FaXTwitter size={18} />
                </Link>
                <Link aria-label="LinkedIn Profile" href="https://linkedin.com/in/jadhavharsh" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
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
        <div className="flex flex-col gap-6">

          {/* 01. EXPERIENCE */}
          <div className="flex flex-col gap-2">
            <div className="font-mono-meta text-[11px] text-neutral-400 uppercase tracking-widest border-b border-border pb-1 w-full">
              Experience
            </div>

            <div className="flex flex-col gap-0.5">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="group flex flex-col gap-0.5 border-b border-border/40 pb-2 mb-1 last:border-0 last:pb-0 last:mb-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                        <span className="font-sans text-[14px] font-medium text-foreground">{exp.role}</span>
                        <span className="hidden sm:block text-neutral-400 text-xs">/</span>
                        <span className="font-sans text-[14px] text-muted-foreground">{exp.company}</span>
                      </div>
                    </div>
                    <span className="font-mono-meta text-[10px] text-neutral-400">{exp.period}</span>
                  </div>
                  <p className="font-sans text-[14px] text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 02. SELECTED WORK */}
          <div className="flex flex-col gap-2">
            <div className="font-mono-meta text-[11px] text-neutral-400 uppercase tracking-widest border-b border-border pb-1 w-full">
              Selected Work
            </div>

            <div className="flex flex-col gap-0.5">
              {PROJECTS.map((project, i) => (
                <Link key={i} href={project.href} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-0.5 border-b border-border/40 pb-2 mb-1 last:border-0 last:pb-0 last:mb-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                        <span className="font-sans text-[14px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">{project.title}</span>
                        <span className="hidden sm:block text-neutral-400 text-xs">/</span>
                        <span className="font-sans text-[14px] text-muted-foreground group-hover:text-foreground transition-colors">{project.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono-meta text-[10px] text-neutral-400 group-hover:text-foreground">{project.stack}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                  <p className="font-sans text-[14px] text-muted-foreground">
                    {project.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* 03. OPEN SOURCE */}
          <div className="flex flex-col gap-2">
            <div className="font-mono-meta text-[11px] text-neutral-400 uppercase tracking-widest border-b border-border pb-1 w-full">
              Open Source
            </div>

            <div className="flex flex-col gap-0.5">
              {PULL_REQUESTS.map((pr, i) => (
                <Link key={i} href={pr.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-1 border-b border-border/40 last:border-0">
                  <div className="flex items-center gap-3">
                    <GitPullRequest className="w-4 h-4 text-neutral-400" />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                      <span className="font-sans text-[14px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">{pr.title}</span>
                      <span className="hidden sm:block text-neutral-400 text-xs">/</span>
                      <span className="font-sans text-[14px] text-muted-foreground group-hover:text-foreground transition-colors">{pr.description}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono-meta text-[10px] text-neutral-400 group-hover:text-foreground">{pr.pr}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 04. WRITING */}
          <div className="flex flex-col gap-2">
            <div className="font-mono-meta text-[11px] text-neutral-400 uppercase tracking-widest border-b border-border pb-1 w-full">
              Writing
            </div>

            <div className="flex flex-col gap-0.5">
              <div className="group flex items-center justify-between py-1 border-b border-border/40 last:border-0 cursor-not-allowed select-none">
                <div className="flex items-center gap-3">
                  <PenTool className="w-4 h-4 text-neutral-400" />
                  <span className="font-sans text-[14px] font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    Trust me, I'll write something soon
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono-meta text-[10px] text-neutral-400 group-hover:text-foreground">Soon™</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -- Footer -- */}
        <footer className="pt-10 flex flex-row items-center justify-between gap-4 font-sans text-[14px] opacity-60">
          <span className="font-mono-meta text-xs text-neutral-400">© {new Date().getFullYear()} Harsh Jadhav</span>
          <ModeToggle />
        </footer>

      </div>
    </main>
  );
}

