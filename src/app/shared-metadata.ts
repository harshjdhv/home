import { Metadata, Viewport } from "next";

const MAIN_TITLE = "Harsh Jadhav — Software Engineer";
const MAIN_DESCRIPTION =
  "Harsh Jadhav is a software engineer building user-facing applications and the systems behind them.";

export const sharedMetadata: Metadata = {
  metadataBase: new URL("https://harshjdhv.com"),
  title: {
    default: MAIN_TITLE,
    template: `%s | Harsh Jadhav`,
  },
  description: MAIN_DESCRIPTION,
  keywords: [
    "Harsh Jadhav",
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Engineer",
    "Web Application Development",
    "System Design",
    "Interface Design",
    "Mumbai",
  ],
  authors: [{ name: "Harsh Jadhav", url: "https://harshjdhv.com" }],
  creator: "Harsh Jadhav",
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://harshjdhv.com",
    title: MAIN_TITLE,
    description: MAIN_DESCRIPTION,
    siteName: "Harsh Jadhav",
    firstName: "Harsh",
    lastName: "Jadhav",
    username: "harshjdhv",
    images: [
      {
        url: "/linkbannerpreview.png",
        width: 1200,
        height: 630,
        alt: "Harsh Jadhav - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: MAIN_TITLE,
    description: MAIN_DESCRIPTION,
    creator: "@harshjdhv",
    images: ["/linkbannerpreview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Placeholder
  },
  alternates: {
    canonical: "https://harshjdhv.com",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const sharedViewport: Viewport = {
  themeColor: "white",
  width: "device-width",
  initialScale: 1,
};
