"use client";

import { useState, useCallback, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ClassicHome } from "./classic-home";
import { VersionToggle } from "./version-toggle";

const ThreeDExperience = lazy(() =>
    import("./three-d-experience").then((mod) => ({ default: mod.ThreeDExperience }))
);

function ThreeDLoader() {
    return (
        <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="relative w-10 h-10">
                    <div className="absolute inset-0 rounded-full border-2 border-border" />
                    <div className="absolute inset-0 rounded-full border-2 border-t-foreground animate-spin" />
                </div>
                <span className="font-mono-meta text-[11px] text-muted-foreground uppercase tracking-widest">
                    Loading 3D
                </span>
            </div>
        </div>
    );
}

export function HomePageWrapper() {
    const [is3D, setIs3D] = useState(false);

    const handleToggle = useCallback(() => {
        setIs3D((prev) => !prev);
    }, []);

    return (
        <>
            <VersionToggle is3D={is3D} onToggle={handleToggle} />

            <AnimatePresence mode="wait">
                {is3D ? (
                    <motion.div
                        key="three-d"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Suspense fallback={<ThreeDLoader />}>
                            <ThreeDExperience onExit={handleToggle} />
                        </Suspense>
                    </motion.div>
                ) : (
                    <motion.div
                        key="classic"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <ClassicHome />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
