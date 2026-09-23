import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif, Syne } from "next/font/google";
import { site } from "@/lib/content";
import { asset } from "@/lib/paths";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const title = `${site.name} — ${site.role}`;
const description =
  "Abuja-based full-stack engineer shipping production systems across frontend, backend, and operations.";

function publicSiteUrl() {
  const vercel =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    (process.env.VERCEL_URL && !process.env.VERCEL_URL.includes("-git-") ? process.env.VERCEL_URL : "");
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;
  return site.pagesUrl;
}

const origin = publicSiteUrl();
const ogImage = `${origin}/og.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title,
  description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: ["full-stack engineer", "Abuja", "Next.js", "React", "Naseer Lawan"],
  alternates: { canonical: origin },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: origin,
    siteName: site.displayName,
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${site.displayName}, full-stack engineer in Abuja`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#071422",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href={asset("/nasiru.jpg")} fetchPriority="high" />
      </head>
      <body className={`${geist.variable} ${instrument.variable} ${syne.variable} font-sans antialiased`}>
        <a
          href="#work"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:text-void"
        >
          Skip to work
        </a>
        {children}
      </body>
    </html>
  );
}
