import React from "react";

export default function LinkBannerPage() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#EDEDED] p-4 text-[#171717]">
            {/* Container - 1200x630 (Standard OG Image size) scale-down for visibility on smaller screens */}
            <div
                className="relative flex flex-col justify-between w-[1200px] h-[630px] bg-[#FAFAFA] p-16 shadow-2xl overflow-hidden"
                style={{
                    boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)"
                }}
            >
                {/* 1. Identity Block (Top-Left) */}
                <div className="flex flex-col gap-1.5 items-start">
                    <h2 className="font-serif-accent text-4xl tracking-tight text-[#171717]">
                        Harsh Jadhav
                    </h2>
                    <span className="font-mono-meta text-base text-[#737373] tracking-normal">
                        Software Engineer
                    </span>
                </div>

                {/* 2 & 3. Primary Statement & Context (Center / Dominant) */}
                <div className="absolute top-1/2 left-16 right-16 -translate-y-1/2 flex flex-col gap-6">
                    <h1 className="font-serif-accent text-7xl leading-[0.95] tracking-tight max-w-[900px] text-[#171717]">
                        Building software that feels inevitable.
                    </h1>
                    <p className="font-sans text-xl text-[#525252] tracking-tight max-w-lg">
                        Selected works, technical notes, and experiments in interface design.
                    </p>
                </div>

                {/* 4. Metadata (Bottom / Footnote) */}
                <div className="flex w-full items-end justify-between border-t border-[#E5E5E5] pt-6">
                    <div className="flex gap-8">
                        <span className="font-mono-meta text-xs uppercase tracking-wider text-[#737373]">
                            Est. 2026
                        </span>
                        <span className="font-mono-meta text-xs uppercase tracking-wider text-[#737373]">
                            harshjdhv.com
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
