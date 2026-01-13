// app/layout.tsx
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import {
  JetBrains_Mono,
  Instrument_Serif,
  Geist
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

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


export const metadata = {
  metadataBase: new URL("https://harshjdhv.com"),
  title: "Harsh Jadhav",
  description: "Building things that people use. Shipping fast, learning faster. Currently neck-deep in Solana and Web3, exploring AI, freelancing, and occasionally touching grass.",
  keywords: [
    "Harsh Jadhav",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Solana Developer",
    "Web3",
    "Blockchain",
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "Frontend Developer",
    "Full Stack Developer",
    "AI/ML",
    "Freelancer",
    "Open Source",
  ],
  authors: [{ name: "Harsh Jadhav" }],
  creator: "Harsh Jadhav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshjdhv.com",
    title: "Harsh Jadhav — Builder, Shipper, Learner",
    description: "Building things that people use. Shipping fast, learning faster. Currently neck-deep in Solana and Web3.",
    siteName: "Harsh Jadhav",
    images: [
      {
        url: "/linkbannerpreview.png",
        width: 1200,
        height: 630,
        alt: "Harsh Jadhav",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Jadhav — Builder, Shipper, Learner",
    description: "Building things that people use. Shipping fast, learning faster. Currently neck-deep in Solana and Web3.",
    creator: "@theharshjadhav",
    images: ["/linkbannerpreview.png"],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
