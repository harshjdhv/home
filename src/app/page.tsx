import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { CopyEmail } from "@/components/copy-email";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
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
              Currently building on Solana. Focused on web interfaces and crypto tooling. If it's boring and reliable, it's good enough to ship.
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

            <div className="flex flex-col gap-6">
              {/* Role 1 */}
              <div className="group flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="font-medium text-foreground">Software Engineer (Independent)</h3>
                  <span className="font-mono-meta text-xs text-neutral-400">2023 — Present</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Building web apps and crypto tooling for early-stage products. Work spans payment platforms, wallet integrations, and interface systems.
                </p>
              </div>

              {/* Role 2 */}
              <div className="group flex flex-col gap-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="font-medium text-foreground">Frontend Intern</h3>
                  <span className="font-mono-meta text-xs text-neutral-400">2023</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span>CSRBOX (IBM SkillsBuild)</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pt-1">
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

            <div className="flex flex-col gap-6">
              {/* Project 1 */}
              <Link href="https://componentry.fun" target="_blank" className="group flex flex-col gap-2 cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-foreground group-hover:text-muted-foreground transition-colors">Componentry</h3>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <span className="font-mono-meta text-xs text-neutral-400">React / TypeScript</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A UI component library. Includes accessible, customizable components for React applications. Published and maintained.
                </p>
              </Link>

              {/* Project 2 */}
              <Link href="https://github.com/harshjdhv" target="_blank" className="group flex flex-col gap-2 cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-foreground group-hover:text-muted-foreground transition-colors">GameSideVault</h3>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <span className="font-mono-meta text-xs text-neutral-400">Next.js / Solana</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Crypto wallet infrastructure with multi-chain support. Implements fund locking and automated releases.
                </p>
              </Link>

              {/* Project 3 */}
              <Link href="https://github.com/harshjdhv" target="_blank" className="group flex flex-col gap-2 cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-foreground group-hover:text-muted-foreground transition-colors">Perpetual Trading Platform</h3>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <span className="font-mono-meta text-xs text-neutral-400">React / SEI</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Frontend for a perpetual futures trading interface. Includes wallet connection and real-time chart rendering.
                </p>
              </Link>

              {/* Project 4 */}
              <Link href="https://github.com/harshjdhv" target="_blank" className="group flex flex-col gap-2 cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-foreground group-hover:text-muted-foreground transition-colors">AnchorPay</h3>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <span className="font-mono-meta text-xs text-neutral-400">Next.js / Node.js</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Escrow payment platform. Freelancers and clients can lock funds against milestones.
                </p>
              </Link>
            </div>
          </div>

          {/* 03. WRITING */}
          <div className="flex flex-col gap-5">
            <div className="font-mono-meta text-[11px] text-neutral-400 uppercase tracking-widest border-b border-border pb-2 w-full">
              Writing
            </div>

            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-4 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer group">
                <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full group-hover:bg-neutral-500 transition-colors"></span>
                <span className="border-b border-transparent group-hover:border-foreground decoration-1 underline-offset-4">
                  On the fragility of complex UI
                </span>
              </li>
            </ul>
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

