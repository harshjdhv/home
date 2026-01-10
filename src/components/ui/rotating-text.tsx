"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const RotatingText = ({ texts }: { texts: string[] }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <div className="h-[20px] overflow-hidden relative w-full">
            <AnimatePresence mode="wait">
                <motion.p
                    key={texts[index]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="jetbrains-mono text-sm text-muted-foreground tracking-tight absolute top-0 left-0 whitespace-nowrap"
                >
                    {texts[index]}
                </motion.p>
            </AnimatePresence>
        </div>
    );
};
