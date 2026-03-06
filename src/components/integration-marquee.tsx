"use client";

import { motion } from "motion/react";
import Image from "next/image";

const logos = [
  { name: "Slack", src: "https://www.clace.ai/logos/slack.svg" },
  { name: "Gmail", src: "https://www.clace.ai/logos/gmail.svg" },
  { name: "Outlook", src: "https://www.clace.ai/logos/outlook.svg" },
  { name: "Chrome", src: "https://www.clace.ai/logos/chrome.svg" },
  { name: "Teams", src: "https://www.clace.ai/logos/teams.svg" },
  { name: "Zoom", src: "https://www.clace.ai/logos/zoom.svg" },
  { name: "Salesforce", src: "https://www.clace.ai/logos/salesforce.svg" },
  { name: "HubSpot", src: "https://www.clace.ai/logos/hubspot.svg" },
  { name: "Notion", src: "https://www.clace.ai/logos/notion.svg" },
  { name: "Asana", src: "https://www.clace.ai/logos/asana.svg" },
  { name: "Trello", src: "https://www.clace.ai/logos/trello.svg" },
  { name: "Jira", src: "https://www.clace.ai/logos/jira.svg" },
  { name: "Monday", src: "https://www.clace.ai/logos/monday.svg" },
  { name: "Linear", src: "https://www.clace.ai/logos/linear.svg" },
  { name: "GitHub", src: "https://www.clace.ai/logos/github.svg" },
  { name: "Figma", src: "https://www.clace.ai/logos/figma.svg" },
  { name: "Dropbox", src: "https://www.clace.ai/logos/dropbox.svg" },
];

export default function IntegrationMarquee() {
  // Duplicate array slightly more for seamless looping without gaps
  const doubledLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full mt-24 mb-10 overflow-hidden relative">
      <p className="text-sm font-medium tracking-wide text-neutral-400 text-center uppercase mb-8">
        Auto-syncs with your workflows
      </p>

      {/* Fade Masks on Left & Right */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 hidden md:block" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 hidden md:block" />

      <div className="flex w-full group relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          className="flex gap-12 sm:gap-20 items-center whitespace-nowrap pl-12"
        >
          {doubledLogos.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex flex-col items-center gap-2 group/logo flex-shrink-0"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12 opacity-50 grayscale transition-all duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                  unoptimized // since we are fetching from external domains we haven't configured next.config.ts for yet
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
