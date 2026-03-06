"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 400, damping: 30, mass: 0.8 } 
  },
};

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.6 },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 350, damping: 25 } 
  },
};

const promptText = "Draft a follow-up email for the client meeting...";

export default function HowItWorks() {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* Animated Background ambient light */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] -z-10 pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-serif font-light text-center mb-24 text-neutral-900"
        >
          How Clace Works
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-4 lg:px-8"
        >
          
          {/* STEP 1: Prompt */}
          <motion.div variants={itemVariants} className="flex-1 flex flex-col items-center group/prompt">
            <h3 className="text-xl font-medium text-neutral-900 mb-6">Prompt</h3>
            <div className="w-full flex flex-col min-h-[280px]">
              <div className="flex-1 relative w-full bg-white rounded-3xl border border-neutral-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.04),_inset_0_1px_0_rgba(255,255,255,0.6)] p-8 flex items-center justify-center transition-all duration-500 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1">
                <p className="text-neutral-500 font-light text-lg text-center leading-relaxed">
                  &quot;
                  {promptText.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.05, delay: 0.4 + index * 0.03 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  &quot;
                </p>
              </div>
              <div className="h-10 mt-4" />
            </div>
          </motion.div>

          {/* ARROW 1 */}
          <motion.div variants={itemVariants} className="hidden lg:flex items-center justify-center pb-14 shrink-0 px-2 lg:px-4">
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowRight className="w-6 h-6 text-blue-500/60" />
            </motion.div>
          </motion.div>
          <div className="flex lg:hidden items-center justify-center py-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowDown className="w-6 h-6 text-blue-500/60" />
            </motion.div>
          </div>

          {/* STEP 2: Clace On-device (Premium Active Box) */}
          <motion.div variants={itemVariants} className="flex-1 flex flex-col items-center relative lg:-mt-2 lg:scale-[1.03] z-10">
            <h3 className="text-xl font-medium text-neutral-900 mb-6 flex items-center gap-2">
              Clace <span className="text-neutral-400 font-normal">{"(On-device)"}</span>
            </h3>
            <div className="w-full flex flex-col min-h-[280px] relative">
              
              {/* Premium Animated Background Glow */}
              <div className="absolute -inset-[2px] bg-gradient-to-b from-[#3a86ff] to-purple-400 rounded-[26px] opacity-20 blur-sm pointer-events-none group-hover:opacity-40 transition-opacity duration-700" />
              
              <div className="relative group w-full bg-white rounded-3xl ring-1 ring-blue-500/20 shadow-[0_8px_32px_rgba(10,100,255,0.12),_inset_0_1px_1px_rgba(255,255,255,1),_inset_0_-1px_1px_rgba(0,0,0,0.05)] p-6 transition-all duration-500 hover:shadow-[0_16px_48px_rgba(10,100,255,0.2)] bg-gradient-to-b from-white to-blue-50/10">
                {/* Subtle top shine matching the blue button */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mix-blend-overlay" />
                
                {/* Shimmer sweep effect */}
                <div className="absolute inset-0 -translate-x-[150%] skew-x-[30deg] bg-gradient-to-r from-transparent via-blue-100/20 to-transparent animate-[shimmer_3s_infinite] pointer-events-none" />
                
                <motion.div variants={listContainerVariants} className="space-y-4 relative z-10">
                  {/* Item 1 - Active / Blue */}
                  <motion.div variants={listItemVariants} className="flex items-center gap-3 p-2.5 rounded-2xl bg-blue-50/60 border border-blue-100/80 shadow-sm backdrop-blur-sm transition-all hover:bg-blue-50 hover:scale-[1.02]">
                    <div className="w-8 h-8 shrink-0 relative flex items-center justify-center bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-neutral-100 p-1.5">
                      <Image src="https://www.clace.ai/logos/notion.svg" alt="Notion" fill className="object-contain p-1.5" unoptimized />
                    </div>
                    <span className="text-[14px] font-medium text-blue-600 truncate">
                      Detected Ruleset: My Email...
                    </span>
                  </motion.div>

                  {/* Item 2 */}
                  <motion.div variants={listItemVariants} className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-neutral-50/80 transition-all cursor-default">
                    <div className="w-8 h-8 shrink-0 relative flex items-center justify-center bg-white rounded-xl shadow-sm border border-neutral-100 p-1.5 grayscale opacity-60">
                      <Image src="https://www.clace.ai/logos/chrome.svg" alt="Chrome" fill className="object-contain p-1.5" unoptimized />
                    </div>
                    <span className="text-[14px] text-neutral-500 truncate font-light">
                      History: LinkedIn - Sarah M...
                    </span>
                  </motion.div>

                  {/* Item 3 */}
                  <motion.div variants={listItemVariants} className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-neutral-50/80 transition-all cursor-default">
                    <div className="w-8 h-8 shrink-0 relative flex items-center justify-center bg-white rounded-xl shadow-sm border border-neutral-100 p-1.5 grayscale opacity-60">
                      <Image src="https://www.clace.ai/logos/gmail.svg" alt="Gmail" fill className="object-contain p-1.5" unoptimized />
                    </div>
                    <span className="text-[14px] text-neutral-500 truncate font-light">
                      Sarah mentioned budget on...
                    </span>
                  </motion.div>

                  {/* Item 4 */}
                  <motion.div variants={listItemVariants} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-neutral-50/80 transition-all cursor-default">
                    <div className="w-8 h-8 shrink-0 relative flex items-center justify-center bg-white rounded-xl shadow-sm border border-neutral-100 p-1.5 grayscale opacity-60">
                      <Image src="https://www.clace.ai/logos/salesforce.svg" alt="Salesforce" fill className="object-contain p-1.5" unoptimized />
                    </div>
                    <span className="text-[14px] text-neutral-500 truncate font-light">
                      Deal stage: Negotiation...
                    </span>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Caption */}
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="text-center text-sm text-neutral-400 font-light mt-6 px-4"
              >
                Context querying and processing.
              </motion.p>
            </div>
          </motion.div>

          {/* ARROW 2 */}
          <motion.div variants={itemVariants} className="hidden lg:flex items-center justify-center pb-14 shrink-0 px-2 lg:px-4">
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            >
              <ArrowRight className="w-6 h-6 text-blue-500/60" />
            </motion.div>
          </motion.div>
          <div className="flex lg:hidden items-center justify-center py-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            >
              <ArrowDown className="w-6 h-6 text-blue-500/60" />
            </motion.div>
          </div>

          {/* STEP 3: Output */}
          <motion.div variants={itemVariants} className="flex-1 flex flex-col items-center">
            <h3 className="text-xl font-medium text-neutral-900 mb-6">Local or Cloud AI</h3>
            <div className="w-full flex flex-col min-h-[280px]">
              <div className="flex-1 relative overflow-hidden w-full bg-white rounded-3xl border border-neutral-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.04),_inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center p-8 transition-all duration-500 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1">
                <span className="text-3xl font-medium tracking-tight text-neutral-900 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-blue-800 to-neutral-900 bg-300% animate-gradient">
                  Gemma 3
                </span>
                
                {/* Subtle decorative grid/glow inside AI box */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none opacity-50" />
              </div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="text-center text-sm text-neutral-400 font-light mt-6 px-4"
              >
                Data not used to train models.
              </motion.p>
            </div>
          </motion.div>

        </motion.div>
      </div>
      
      {/* Add Custom Keyframes inline for things like the shimmer and text gradient */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(150%) skewX(30deg); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .bg-300\\% { background-size: 300% 300%; }
        .animate-gradient { animation: gradient 6s ease infinite; }
      `}} />
    </section>
  );
}
