"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Mail } from "lucide-react";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import { FloatingDockDemo } from "@/components/sections/dock-example";
import Header from "@/components/layout/Header";
import { RotatingText } from "@/components/ui/rotating-text";

export default function Home() {
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Thanks for subscribing!');
        setEmail('');
      } else {
        setMessage(data.error || 'Something went wrong');
      }
    } catch (error) {
      setMessage('Failed to subscribe');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-background text-foreground">
        <div className="new-container relative !border-none sm:!border-dashed w-full">
          {/* Hero Section */}
          <motion.section
            className="relative flex flex-col items-start gap-8 sm:gap-10 border-y border-dashed px-4 sm:px-6 py-12 sm:py-16 mt-32 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-8 w-full relative z-10">
              <div className="flex items-start justify-between w-full">
                <div className="flex flex-row items-center gap-4">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-dashed border-muted-foreground/20 shrink-0">
                    <img
                      src="/pfp.jpeg"
                      alt="Harsh Jadhav"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col pt-2 min-w-[200px]">
                    <h1 className="instrument-serif text-4xl sm:text-5xl font-normal tracking-tight mb-2">Harsh Jadhav</h1>
                    <RotatingText texts={['Software Engineer', 'Freelancer', 'OSS Contributor']} />
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 border border-dashed rounded-full bg-muted/20 w-fit h-fit">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                  <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground hidden sm:inline-block">Available for hire</span>
                </div>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl tracking-tight leading-relaxed font-light">
                Building things that people use. Shipping fast, learning faster.
                <br className="hidden sm:block" />
                Currently neck-deep in <span className="text-foreground font-medium">Solana</span> and <span className="text-foreground font-medium">Web3</span>, exploring <span className="text-foreground font-medium">AI</span>, freelancing, and occasionally touching grass.
                <br className="hidden sm:block" />
                If it compiles and works, it ships. Sometimes I write about it too.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://cal.com/harshjdhv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit flex items-center bg-neutral-900 hover:bg-neutral-800 transition-all duration-200 ease-out gap-2 px-4 py-2 text-white text-sm font-medium cursor-pointer rounded-lg group overflow-hidden"
                >
                  <div className="relative w-4 h-4 overflow-hidden">
                    <Calendar className="w-full h-full absolute inset-0 transition-transform duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-5" />
                    <Calendar className="w-full h-full absolute inset-0 translate-y-5 transition-transform duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0" />
                  </div>
                  <span className="relative">Book a call</span>
                </a>

                <a
                  href="mailto:harshjadhav@example.com"
                  className="w-fit flex items-center bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-out gap-2 px-4 py-2 text-neutral-700 text-sm font-medium cursor-pointer rounded-lg group overflow-hidden"
                >
                  <div className="relative w-4 h-4 overflow-hidden">
                    <Mail className="w-full h-full absolute inset-0 transition-transform duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-5" />
                    <Mail className="w-full h-full absolute inset-0 translate-y-5 transition-transform duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0" />
                  </div>
                  <span className="relative">Say hello</span>
                </a>
              </div>

              {/* Check me out - Social Links */}
              <div className="flex items-center gap-4 pt-2">
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Check me out</span>
                <div className="flex items-center gap-1">
                  <a
                    href="https://github.com/jadhavharshh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-neutral-100 transition-all duration-200"
                    title="GitHub"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/harshjdhv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-neutral-100 transition-all duration-200"
                    title="X (Twitter)"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/jadhavharshh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-neutral-100 transition-all duration-200"
                    title="LinkedIn"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/harshjdhv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-neutral-100 transition-all duration-200"
                    title="Instagram"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Work Experience */}
          <motion.section
            className="flex flex-col gap-6 border-b border-dashed px-4 sm:px-6 py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-medium tracking-tight">Experience</h2>
            <ExperienceSection />
          </motion.section>

          {/* Skills */}
          <motion.section
            className="flex flex-col gap-6 border-b border-dashed px-4 sm:px-6 py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-medium tracking-tight">Skills</h2>
            <SkillsSection />
          </motion.section>

          {/* Projects */}
          <motion.section
            id="projects"
            className="flex flex-col gap-6 border-b border-dashed px-4 sm:px-6 py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <ProjectsSection />
          </motion.section>

          {/* Newsletter Subscribe */}
          <motion.section
            className="flex flex-col gap-6 border-b border-dashed px-4 sm:px-6 py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center text-center py-8">
              <h2 className="text-3xl font-medium tracking-tight mb-2">Stay in the loop</h2>
              <p className="text-sm text-muted-foreground tracking-tight mb-6">
                No spam. Just updates when I ship something worth sharing.
              </p>
              <form onSubmit={handleSubscribe} className="w-full max-w-sm">
                <div className="flex items-center border border-neutral-200 bg-white rounded-full overflow-hidden p-1 shadow-sm focus-within:ring-2 focus-within:ring-neutral-200 transition-all">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-2 text-sm bg-transparent border-none focus:outline-none placeholder:text-neutral-400 text-neutral-900 font-medium"
                    required
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2 text-sm font-medium bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors disabled:opacity-50 shadow-md"
                  >
                    {isSubmitting ? '...' : 'Subscribe'}
                  </button>
                </div>
                {message && (
                  <p className="text-xs text-muted-foreground tracking-tight mt-3">{message}</p>
                )}
              </form>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.section
            className="flex flex-col gap-4 px-4 sm:px-6 py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            <p className="text-xs text-muted-foreground tracking-tight text-center">
              © 2024 Harsh Jadhav. Built with Next.js
            </p>
          </motion.section>
        </div>

        {/* Floating Dock */}
        <div className="fixed left-0 right-0 bottom-6 z-[100] flex justify-center items-center w-full">
          <FloatingDockDemo />
        </div>
      </div>
    </>
  );
}
