import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      {/* 
        The Asymmetric Grid 
        12 Columns.
        Col 1-3: The "Anchor" (Identity). Fixed on Desktop.
        Col 4:   Gutter/Silence.
        Col 5-11:The "Stream" (Content).
      */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-12 px-6 py-12 md:py-32">

        {/* -- BLock 1: Identity (The Anchor) -- */}
        <header className="md:col-span-3 md:col-start-1 md:sticky md:top-32 h-fit flex flex-col gap-8 select-none">
          <div className="flex flex-col gap-2">
            <h1 className="font-serif-accent text-3xl md:text-3xl  text-neutral-900 leading-tight">
              Harsh Jadhav
            </h1>
            <span className="font-mono-meta text-[11px] text-neutral-400 font-medium uppercase tracking-widest pl-0.5">
              Software Engineer
            </span>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <div className="font-mono-meta text-[10px] text-neutral-300 uppercase tracking-widest">
              Status
            </div>
            <div className="text-sm text-neutral-600 leading-snug max-w-[200px]">
              Building on Solana.
              <br />Web interfaces. Crypto tooling.
              <br />
              <Link href="mailto:hello@harshjdhv.com" className="font-semibold text-neutral-800 hover:text-neutral-900 transition-colors">
                hello@harshjdhv.com
              </Link>
            </div>
          </div>
        </header>

        {/* -- Block 2: The Stream (Content) -- */}
        <section className="md:col-span-7 md:col-start-5 flex flex-col gap-16 md:gap-24">

          {/* Abstract / Intro */}
          <article className="flex flex-col gap-5">
            <h2 className="font-serif-accent text-2xl md:text-3xl text-neutral-900 leading-snug max-w-[42ch]">
              Building software across interfaces and logic.
            </h2>
            <div className="flex flex-col gap-4 max-w-[50ch]">
              <p className="text-neutral-600 text-base leading-relaxed">
                I got into software by messing around and trying to understand how things work.
                I stayed because building things from zero is addictive.
              </p>
              <p className="text-neutral-600 text-base leading-relaxed">
                I work on user-facing software and the logic behind it.
                If it's boring and reliable, it's good enough to ship.
              </p>
            </div>
          </article>

          {/* 01. EXPERIENCE */}
          <div className="flex flex-col gap-10">
            <div className="font-mono-meta text-[10px] text-neutral-400 uppercase tracking-widest border-b border-neutral-100 pb-3 w-full">
              01. Experience
            </div>

            <div className="flex flex-col gap-16">
              {/* Role 1 */}
              <div className="group flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium text-neutral-900 text-base">Software Engineer (Independent)</h3>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-neutral-500">Independent</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                    <span className="font-mono-meta text-xs text-neutral-400">2023 — Present</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pl-0 md:pl-0">
                  <p className="text-sm text-neutral-700 max-w-[55ch] leading-relaxed">
                    Working on web applications and crypto-related tooling for early-stage products.
                    Projects include payment platforms, wallet integrations, and reusable interface systems.
                    Work spans frontend-heavy systems with supporting backend and on-chain components.
                  </p>
                </div>
              </div>

              {/* Role 2 */}
              <div className="group flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium text-neutral-900 text-base">Frontend Intern</h3>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-neutral-500">CSRBOX (IBM SkillsBuild)</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                    <span className="font-mono-meta text-xs text-neutral-400">2023</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pl-0 md:pl-0">
                  <p className="text-sm text-neutral-700 max-w-[55ch] leading-relaxed">
                    Built accessible, responsive frontend components. Worked on form handling and layout systems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 02. SELECTED WORK */}
          <div className="flex flex-col gap-10">
            <div className="font-mono-meta text-[10px] text-neutral-400 uppercase tracking-widest border-b border-neutral-100 pb-3 w-full">
              02. Selected Work
            </div>

            <div className="flex flex-col gap-12">
              {/* Project 1 - Componentry */}
              <Link
                href="https://componentry.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex flex-row items-center justify-between max-w-[55ch]">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-neutral-900 text-base group-hover:text-neutral-600 transition-colors">Componentry</h3>
                    <svg
                      className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <span className="font-mono-meta text-[10px] text-neutral-400 normal-case">React / TypeScript</span>
                </div>
                <p className="text-sm text-neutral-500 max-w-[55ch] leading-relaxed">
                  A UI component library. Includes accessible, customizable components for React applications. Published and maintained.
                </p>
              </Link>

              {/* Project 2 - GameSideVault */}
              <Link
                href="https://github.com/harshjdhv"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex flex-row items-center justify-between max-w-[55ch]">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-neutral-900 text-base group-hover:text-neutral-600 transition-colors">GameSideVault</h3>
                    <svg
                      className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <span className="font-mono-meta text-[10px] text-neutral-400 normal-case">Next.js / Solana</span>
                </div>
                <p className="text-sm text-neutral-500 max-w-[55ch] leading-relaxed">
                  Crypto wallet infrastructure with multi-chain support. Implements fund locking and automated releases.
                </p>
              </Link>

              {/* Project 3 - Perpetual Trading Platform */}
              <Link
                href="https://github.com/harshjdhv"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex flex-row items-center justify-between max-w-[55ch]">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-neutral-900 text-base group-hover:text-neutral-600 transition-colors">Perpetual Trading Platform</h3>
                    <svg
                      className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <span className="font-mono-meta text-[10px] text-neutral-400 normal-case">React / SEI</span>
                </div>
                <p className="text-sm text-neutral-500 max-w-[55ch] leading-relaxed">
                  Frontend for a perpetual futures trading interface. Includes wallet connection and real-time chart rendering.
                </p>
              </Link>

              {/* Project 4 - AnchorPay */}
              <Link
                href="https://github.com/harshjdhv"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 cursor-pointer"
              >
                <div className="flex flex-row items-center justify-between max-w-[55ch]">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-neutral-900 text-base group-hover:text-neutral-600 transition-colors">AnchorPay</h3>
                    <svg
                      className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <span className="font-mono-meta text-[10px] text-neutral-400 normal-case">Next.js / Node.js</span>
                </div>
                <p className="text-sm text-neutral-500 max-w-[55ch] leading-relaxed">
                  Escrow payment platform. Freelancers and clients can lock funds against milestones.
                </p>
              </Link>
            </div>
          </div>

          {/* 03. TOOLING */}
          <div className="flex flex-col gap-10">
            <div className="font-mono-meta text-[10px] text-neutral-400 uppercase tracking-widest border-b border-neutral-100 pb-3 w-full">
              03. Tooling
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-8 max-w-[600px]">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] text-neutral-400 font-mono-meta uppercase tracking-wider">Languages</span>
                <ul className="text-sm text-neutral-600 flex flex-col gap-1.5 font-medium">
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                  <li>Python</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-[10px] text-neutral-400 font-mono-meta uppercase tracking-wider">Frameworks</span>
                <ul className="text-sm text-neutral-600 flex flex-col gap-1.5 font-medium">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Node.js</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-[10px] text-neutral-400 font-mono-meta uppercase tracking-wider">Other</span>
                <ul className="text-sm text-neutral-600 flex flex-col gap-1.5 font-medium">
                  <li>Solana / Anchor</li>
                  <li>PostgreSQL</li>
                  <li>Docker</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 04. EDUCATION */}
          <div className="flex flex-col gap-10">
            <div className="font-mono-meta text-[10px] text-neutral-400 uppercase tracking-widest border-b border-neutral-100 pb-3 w-full">
              04. Education
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 max-w-[55ch]">
              <h3 className="font-medium text-neutral-900 text-base">B.E Information Technology</h3>
              <div className="flex items-center gap-3">
                <span className="text-neutral-500 text-sm">Mumbai University</span>
                <span className="font-mono-meta text-xs text-neutral-400">2021 - 2026</span>
              </div>
            </div>
          </div>


          {/* 05. WRITING */}
          <div className="flex flex-col gap-10">
            <div className="font-mono-meta text-[10px] text-neutral-400 uppercase tracking-widest border-b border-neutral-100 pb-3 w-full">
              05. Writing
            </div>

            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4 text-sm text-neutral-600 hover:text-black transition-colors cursor-pointer group">
                <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full group-hover:bg-neutral-500 transition-colors"></span>
                <span className="border-b border-transparent group-hover:border-neutral-900 decoration-1 underline-offset-4">
                  On the fragility of complex UI
                </span>
              </li>
            </ul>
          </div>

          {/* Footer / Contact (Minimal) */}
          <footer className="pt-32 pb-16 flex flex-col gap-8 text-sm opacity-60 hover:opacity-100 transition-opacity duration-500">
            <div className="flex flex-wrap gap-x-8 gap-y-4 font-mono-meta text-xs text-neutral-500">
              <Link href="mailto:hello@harshjdhv.com" className="hover:text-black transition-colors">Email</Link>
              <Link href="https://github.com/harshjdhv" className="hover:text-black transition-colors">GitHub</Link>
              <Link href="https://x.com/harshjdhv" className="hover:text-black transition-colors">X.com</Link>
              <Link href="https://linkedin.com/in/jadhavharsh" className="hover:text-black transition-colors">LinkedIn</Link>
            </div>

          </footer>

        </section>
      </div>
    </main>
  );
}

