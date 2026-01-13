// app/layout.tsx
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import {
  JetBrains_Mono,
  Instrument_Serif,
  Geist
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import JsonLd from "@/components/json-ld";
import { sharedMetadata, sharedViewport } from "./shared-metadata";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});


export const metadata = sharedMetadata;
export const viewport = sharedViewport;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${jetbrains.variable} ${instrumentSerif.variable} ${geist.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          <JsonLd />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
