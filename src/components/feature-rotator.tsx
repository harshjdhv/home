"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface FeatureRotatorProps {
  features: string[];
  interval?: number;
  className?: string;
}

export default function FeatureRotator({
  features,
  interval = 3000,
  className = "",
}: FeatureRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % features.length);
    }, interval);
    return () => clearInterval(timer);
  }, [features.length, interval]);

  // Find the longest string to keep width consistent and prevent layout shifts
  const padWord = features.reduce((longest, current) => 
    current.length > longest.length ? current : longest
  , "");

  return (
    <span 
      className={`relative inline-flex flex-col justify-center overflow-hidden align-top h-[1.4em] ${className}`}
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 35,
            mass: 1 
          }}
          className="absolute inset-y-0 left-0 flex items-center justify-start whitespace-nowrap"
        >
          {features[index]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible spacer to maintain layout width based on the longest feature */}
      <span className="invisible whitespace-nowrap pointer-events-none pr-1">
        {padWord}
      </span>
    </span>
  );
}
