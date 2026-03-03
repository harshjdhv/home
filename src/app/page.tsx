"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--selection-bg)] selection:text-[var(--selection-text)] transition-colors duration-300">

      {/* HEADER */}
      <motion.header
        className="w-full flex items-center justify-between py-8 px-6 md:px-12 text-[10px] md:text-xs font-semibold tracking-widest uppercase font-sans text-[var(--muted-foreground)]"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-2 md:gap-4">
          <span className="text-[var(--foreground)] font-bold">HARSH JADHAV</span>
          <span className="hidden md:inline font-medium">SOFTWARE ENGINEER</span>
        </div>

        <nav className="hidden md:flex gap-10 font-medium">
          <a href="#work" className="hover:text-[var(--foreground)] transition-colors">WORK</a>
          <a href="#principles" className="hover:text-[var(--foreground)] transition-colors">PRINCIPLES</a>
          <a href="#contact" className="hover:text-[var(--foreground)] transition-colors">RESUME</a>
        </nav>

        <div className="flex items-center gap-6">
          <ModeToggle />
          <span className="hidden md:inline font-bold text-[var(--foreground)]">✦ HARSH</span>
        </div>
      </motion.header>

      {/* Main Container */}
      <main className="mx-auto w-full max-w-[1600px] px-6 md:px-12">

        {/* HERO SECTION */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[70vh] items-center pt-8 pb-20 md:pb-32"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="lg:col-span-8 xl:col-span-7 flex flex-col justify-center">
            <motion.h1
              className="font-serif-accent text-5xl font-normal tracking-tight leading-[1.05] md:text-7xl lg:text-[5.5rem]"
              variants={fadeUp}
            >
              I build production-grade internet systems.
            </motion.h1>

            <motion.p
              className="mt-8 max-w-md text-base text-[var(--muted-foreground)] md:mt-10 md:text-lg md:leading-relaxed font-sans font-medium"
              variants={fadeUp}
            >
              Fullstack engineer focused on performance, reliability, and shipping 0→1 products across fintech and crypto.
            </motion.p>

            <motion.div
              className="mt-10 flex items-center gap-6"
              variants={fadeUp}
            >
              <a
                href="#work"
                className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--foreground)] hover:opacity-70 transition-opacity border-b border-[var(--foreground)] pb-1"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-widest text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              >
                Get in touch
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* SELECTED WORK */}
        <section id="work" className="mt-32 md:mt-48">
          <motion.div
            className="font-mono mb-16 text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)] border-b border-[var(--border)] pb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            01 / Selected Work
          </motion.div>

          <div className="flex flex-col gap-32 md:gap-48">
            {[
              {
                title: "Componentry",
                positioning: "A definitive, accessible UI component system for React applications.",
                role: "Lead Engineer",
                year: "2023",
                stack: "React • TypeScript • Radix",
                metrics: ["10k+ Weekly Downloads", "100% WCAG AA Compliant", "Zero Dependency"],
                link: "#componentry"
              },
              {
                title: "GameSideVault",
                positioning: "Robust non-custodial crypto wallet infrastructure with native multi-chain support.",
                role: "Architect",
                year: "2024",
                stack: "Solana • React • Node",
                metrics: ["$10M+ TVL Supported", "Sub-second Finality", "Audited Infrastructure"],
                link: "#gamesidevault"
              },
              {
                title: "AnchorPay",
                positioning: "Institutional-grade escrow payment routing and protection platform.",
                role: "Full-Stack Developer",
                year: "2024",
                stack: "Next.js • Node.js • PostgreSQL",
                metrics: ["0% Dispute Rate", "Automated Release Pipeline", "SOC2 Readiness"],
                link: "#anchorpay"
              },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                className={`flex flex-col md:flex-row gap-12 md:gap-20 items-start ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
              >
                {/* Meta Column */}
                <div className="w-full md:w-5/12 flex flex-col pt-2">
                  <h3 className="font-serif-accent text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight text-[var(--foreground)] mb-6">
                    {project.title}
                  </h3>
                  <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-snug mb-10 font-sans">
                    {project.positioning}
                  </p>
                  
                  <div className="mb-10 grid grid-cols-2 gap-x-8 gap-y-4 text-xs font-mono uppercase tracking-wider text-[var(--muted-foreground)]">
                    <div className="flex flex-col gap-1 border-t border-[var(--border)] pt-3">
                      <span className="opacity-60">Role</span>
                      <span className="text-[var(--foreground)] mt-1">{project.role}</span>
                    </div>
                    <div className="flex flex-col gap-1 border-t border-[var(--border)] pt-3">
                      <span className="opacity-60">Year</span>
                      <span className="text-[var(--foreground)] mt-1">{project.year}</span>
                    </div>
                    <div className="flex flex-col gap-1 border-t border-[var(--border)] pt-3 col-span-2">
                      <span className="opacity-60">Core Stack</span>
                      <span className="text-[var(--foreground)] mt-1">{project.stack}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-10">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="text-sm font-medium text-[var(--foreground)] flex items-center gap-3 font-sans">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-sm"></span>
                        {m}
                      </div>
                    ))}
                  </div>

                  <div>
                    <a href={project.link} className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--foreground)] transition-colors hover:text-blue-500 pb-1 border-b border-[var(--foreground)] hover:border-blue-500">
                      View Case Study
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                    </a>
                  </div>
                </div>

                {/* Preview Visual Column */}
                <div className="w-full md:w-7/12 mt-8 md:mt-0">
                  <div className="group relative aspect-[4/3] w-full overflow-hidden bg-[var(--background)] border border-[var(--border)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--border)] to-transparent opacity-10 transition-opacity duration-700 group-hover:opacity-30"></div>
                    
                    {/* Abstract placeholder for case study visual */}
                    <div className="absolute inset-4 md:inset-8 lg:inset-10 flex flex-col border border-[var(--border)] bg-[var(--background)] shadow-2xl transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]">
                      <div className="h-8 border-b border-[var(--border)] flex items-center px-4 gap-2 bg-[var(--background)] opacity-50">
                        <div className="w-2 h-2 rounded-full border border-[var(--muted-foreground)]"></div>
                        <div className="w-2 h-2 rounded-full border border-[var(--muted-foreground)]"></div>
                        <div className="w-2 h-2 rounded-full border border-[var(--muted-foreground)]"></div>
                      </div>
                      <div className="flex-1 p-6 flex flex-col gap-4 opacity-20">
                        <div className="h-4 w-1/3 bg-[var(--foreground)] rounded-sm"></div>
                        <div className="h-2 w-full bg-[var(--foreground)] rounded-sm mt-4"></div>
                        <div className="h-2 w-5/6 bg-[var(--foreground)] rounded-sm"></div>
                        <div className="h-2 w-4/6 bg-[var(--foreground)] rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="mt-40 md:mt-56">
          <motion.h2
            className="font-sans mb-12 text-sm font-medium uppercase tracking-widest text-[var(--muted-foreground)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            How I Build
          </motion.h2>

          <ul className="flex flex-col gap-6">
            {[
              "Performance is a feature.",
              "Reliability over hacks.",
              "Clean abstractions scale.",
              "If it's worth building, it's worth building properly.",
              "Typography-driven. No icons."
            ].map((principle, idx) => (
              <motion.li
                key={idx}
                className="font-serif-accent text-3xl font-medium md:text-5xl text-[var(--foreground)] opacity-90"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
              >
                {principle}
              </motion.li>
            ))}
          </ul>
        </section>

        {/* OPEN SOURCE */}
        <section className="mt-40 md:mt-56">
          <motion.h2
            className="font-sans mb-12 text-sm font-medium uppercase tracking-widest text-[var(--muted-foreground)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            Open Source
          </motion.h2>

          <div className="flex flex-col">
            {[
              { name: "React Query", desc: "Core bugfixes and feature additions.", link: "#" },
              { name: "Tailwind CSS", desc: "Documentation improvements.", link: "#" },
            ].map((os, idx) => (
              <motion.a
                href={os.link}
                key={idx}
                className="group flex flex-col py-8 border-t border-[var(--border)] first:border-0 md:flex-row md:items-center md:justify-between"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
              >
                <h3 className="font-serif-accent mb-2 text-2xl font-medium md:mb-0 group-hover:text-[var(--muted-foreground)] transition-colors">{os.name}</h3>
                <div className="flex items-center gap-4 text-[var(--muted-foreground)]">
                  <span className="font-sans group-hover:text-[var(--foreground)] transition-colors">{os.desc}</span>
                  <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[var(--foreground)]" strokeWidth={1.5} />
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <motion.footer
          id="contact"
          className="mt-40 pt-20 pb-12 border-t border-[var(--border)] md:mt-56 flex flex-col md:flex-row md:justify-between md:items-end gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div>
            <h2 className="font-serif-accent text-5xl font-medium md:text-7xl leading-tight">
              Shipping is a skill.
            </h2>
          </div>

          <div className="flex flex-col gap-4 font-sans text-sm tracking-widest uppercase">
            <a href="mailto:contact@example.com" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">Email</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">LinkedIn</a>
          </div>
        </motion.footer>

      </main>
    </div>
  );
}