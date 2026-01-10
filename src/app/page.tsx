"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
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
            className="relative flex flex-col items-start gap-6 border-y border-dashed px-4 sm:px-6 py-8 mt-32 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-6 w-full relative z-10">
              <div className="flex items-start justify-between w-full">
                <div className="flex flex-row items-center gap-4">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-dashed border-muted-foreground/20 shrink-0">
                    <img
                      src="/portfolio/assets/profile.jpg"
                      alt="Harsh Jadhav"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col pt-2 min-w-[200px]">
                    <h1 className="instrument-serif text-3xl sm:text-4xl font-normal tracking-tight mb-1">Harsh Jadhav</h1>
                    <RotatingText texts={['Software Engineer', 'Freelancer', 'OSS Contributor']} />
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 border border-dashed rounded-sm bg-muted/20 w-fit h-fit">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="jetbrains-mono text-[10px] tracking-tight text-muted-foreground hidden sm:inline-block">Available for hire</span>
                </div>
              </div>

              <p className="jetbrains-mono text-sm text-muted-foreground max-w-xl tracking-tight leading-relaxed">
                Building things that people use. Shipping fast, learning faster. Currently neck-deep in <span className="text-foreground font-medium">Solana</span> and <span className="text-foreground font-medium">Web3</span>.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="jetbrains-mono text-xs px-4 py-2 border border-dashed rounded-sm hover:bg-muted/20 transition-colors"
                >
                  View work →
                </button>
                <a
                  href="https://x.com/harshjdhv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jetbrains-mono text-xs px-4 py-2 border border-dashed rounded-sm bg-[rgba(96,125,255,0.12)] hover:bg-[rgba(96,125,255,0.18)] transition-colors"
                >
                  Say hello
                </a>
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
            <h2 className="instrument-serif text-2xl tracking-tight">Experience</h2>
            <ExperienceSection />
          </motion.section>

          {/* Skills */}
          <motion.section
            className="flex flex-col gap-6 border-b border-dashed px-4 sm:px-6 py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="instrument-serif text-2xl tracking-tight">Skills</h2>
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
              <h2 className="instrument-serif text-3xl tracking-tight mb-2">Stay in the loop</h2>
              <p className="jetbrains-mono text-xs text-muted-foreground tracking-tight mb-6">
                No spam. Just updates when I ship something worth sharing.
              </p>
              <form onSubmit={handleSubscribe} className="w-full max-w-sm">
                <div className="flex items-center border border-dashed rounded-sm overflow-hidden">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 jetbrains-mono text-xs bg-transparent focus:outline-none"
                    required
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-3 jetbrains-mono text-xs bg-foreground text-background hover:bg-foreground/90 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? '...' : 'Subscribe'}
                  </button>
                </div>
                {message && (
                  <p className="jetbrains-mono text-xs text-muted-foreground tracking-tight mt-3">{message}</p>
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
            <p className="jetbrains-mono text-xs text-muted-foreground tracking-tight text-center">
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
