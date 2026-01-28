"use client"

import * as React from "react"
import { Copy, Check } from "lucide-react"

export function CopyEmail() {
    const [copied, setCopied] = React.useState(false)
    const email = "hi@harshjdhv.com"

    const handleCopy = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <button
            onClick={handleCopy}
            className="group flex items-center gap-2 text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors text-left"
        >
            <span>{email}</span>
            <div className="relative w-3.5 h-3.5">
                <Copy
                    className={`absolute inset-0 w-full h-full transition-all ${copied ? "opacity-0 scale-0" : "opacity-100 scale-100"
                        }`}
                />
                <Check
                    className={`absolute inset-0 w-full h-full text-green-500 transition-all ${copied ? "opacity-100 scale-100" : "opacity-0 scale-0"
                        }`}
                />
            </div>
        </button>
    )
}
