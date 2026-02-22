// app/layout.tsx
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import JsonLd from "@/components/json-ld";
import { sharedMetadata, sharedViewport } from "./shared-metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata = sharedMetadata;
export const viewport = sharedViewport;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          <JsonLd />
          <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-24 backdrop-blur-md [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
          <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 h-24 backdrop-blur-md [mask-image:linear-gradient(to_top,white,transparent)]"></div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
