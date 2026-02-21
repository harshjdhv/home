"use client";

export function ThreeDExperience({ onExit }: { onExit: () => void }) {
    return (
        <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
            <p className="text-muted-foreground font-mono-meta text-sm">
                3D Experience — Coming Soon
            </p>
        </div>
    );
}
