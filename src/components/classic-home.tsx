import Link from "next/link";

export function ClassicHome() {
    return (
        <main className="min-h-screen w-full px-6 py-12 md:py-24">
            <div className="max-w-[640px] mx-auto flex flex-col gap-10">
                {/* -- Header -- */}
                <header className="flex flex-col gap-0.5 select-none text-[14px]">
                    <h1 className="font-medium text-foreground">
                        Harsh Jadhav
                    </h1>
                    <p className="text-[#888888]">
                        Updated 22nd Feb 2026
                    </p>
                </header>

                {/* -- About / Intro -- */}
                <div className="flex flex-col gap-6 text-[14px] leading-[1.6] text-[#111111]">
                    <p>
                        I build things from zero. Focused on polished web interfaces and performant systems. If it&apos;s boring and reliable, it&apos;s good enough to ship.
                    </p>
                    <p>
                        I currently work independently, building web apps and crypto tooling for early-stage products. My work spans payment platforms, wallet integrations, and interface systems.
                    </p>
                    <p>
                        Previously, I was a Frontend Intern at CSRBOX, where I built accessible, responsive frontend components, focusing on form handling and layout systems.
                    </p>
                    <p>
                        I enjoy creating developer tools and UI systems. You can find some of my selected work like <Link href="https://componentry.fun" target="_blank" className="underline decoration-neutral-300 hover:decoration-[#111111] underline-offset-4 transition-colors">Componentry</Link>, <Link href="https://github.com/harshjdhv" target="_blank" className="underline decoration-neutral-300 hover:decoration-[#111111] underline-offset-4 transition-colors">GameSideVault</Link>, and <Link href="https://github.com/harshjdhv" target="_blank" className="underline decoration-neutral-300 hover:decoration-[#111111] underline-offset-4 transition-colors">AnchorPay</Link>.
                    </p>
                    <p>
                        I also actively contribute to open source, fixing bugs and improving interfaces for projects like <Link href="https://github.com/RocketChat/Rocket.Chat/pull/38040" target="_blank" className="underline decoration-neutral-300 hover:decoration-[#111111] underline-offset-4 transition-colors">Rocket.Chat</Link> and <Link href="https://github.com/calcom/cal.com/pull/23525" target="_blank" className="underline decoration-neutral-300 hover:decoration-[#111111] underline-offset-4 transition-colors">Cal.com</Link>.
                    </p>
                    <p>
                        You can reach me at <Link href="https://x.com/harshjdhv" target="_blank" className="underline decoration-neutral-300 hover:decoration-[#111111] underline-offset-4 transition-colors">@harshjdhv</Link> or check out my work on <Link href="https://github.com/harshjdhv" target="_blank" className="underline decoration-neutral-300 hover:decoration-[#111111] underline-offset-4 transition-colors">Github</Link>.
                    </p>
                </div>

                {/* -- Writing -- */}
                <div className="flex flex-col gap-4 mt-8">
                    <div className="text-[14px] text-[#888888] mb-2 font-medium">
                        Writing
                    </div>
                    <div className="flex flex-col text-[14px]">
                        {/* Writing Items */}
                        <div className="group grid grid-cols-[60px_1fr_60px] sm:grid-cols-[100px_1fr_60px] gap-4 py-3 -mx-2 px-2 transition-colors hover:bg-[#f5f5f5] rounded-md text-[#888888]">
                            <span>2026</span>
                            <span className="text-[#111111]">Trust me, I&apos;ll write something soon</span>
                            <span className="text-right">Soon</span>
                        </div>
                    </div>
                </div>

                {/* -- Footer -- */}
                <div className="pt-20 pb-4">
                </div>
            </div>
        </main>
    );
}
