"use client";

import { Box, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VersionToggleProps {
    is3D: boolean;
    onToggle: () => void;
}

export function VersionToggle({ is3D, onToggle }: VersionToggleProps) {
    return (
        <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={onToggle}
            className={`
        fixed top-5 right-5 z-[100]
        flex items-center gap-2.5 px-4 py-2.5
        rounded-full border backdrop-blur-2xl
        transition-all duration-500 ease-out
        cursor-pointer select-none
        group
        ${is3D
                    ? "border-white/10 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white shadow-[0_0_30px_rgba(99,102,241,0.15)]"
                    : "border-border bg-background/60 hover:bg-background/90 text-muted-foreground hover:text-foreground shadow-sm hover:shadow-md"
                }
      `}
            aria-label={is3D ? "Switch to classic view" : "Switch to 3D experience"}
        >
            {/* Animated icon swap */}
            <div className="relative w-4 h-4">
                <AnimatePresence mode="wait">
                    {is3D ? (
                        <motion.div
                            key="layers"
                            initial={{ scale: 0, rotate: -90 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 90 }}
                            transition={{ duration: 0.25 }}
                            className="absolute inset-0"
                        >
                            <Layers className="w-4 h-4" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="box"
                            initial={{ scale: 0, rotate: -90 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 90 }}
                            transition={{ duration: 0.25 }}
                            className="absolute inset-0"
                        >
                            <Box className="w-4 h-4" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Label */}
            <span className="font-mono-meta text-[11px] uppercase tracking-wider whitespace-nowrap">
                {is3D ? "Classic" : "3D Experience"}
            </span>

            {/* Animated Indicator Dot */}
            <motion.div
                layout
                className={`
          w-1.5 h-1.5 rounded-full
          ${is3D
                        ? "bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.6)]"
                        : "bg-neutral-400 group-hover:bg-foreground"
                    }
        `}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
        </motion.button>
    );
}
