import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import StructuredData from "@/components/structured-data";
import { ErrorBoundary } from "@/components/error-boundary";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asmit.fun"),
  title: "Asmit Pandey - Backend Engineer | Portfolio",
  description:
    "Backend-focused developer building scalable systems, webhook infrastructure, and event-driven architectures.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "India",
    "Asmit Pandey",
    "Backend Development Intern",
    "Gautam Buddha University",
    "GBU",
    "Backend Engineer",
    "Distributed Systems",
    "Event-Driven Architecture",
    "REST APIs",
    "MAIT",
    "Best Portfolio",
    "Minimalist Portfolio",
    "69ftw",
    "Developer Portfolio",
    "Student Portfolio",
    "Tech Portfolio",
    "Modern Portfolio",
    "Clean Portfolio",
    "Professional Portfolio",
    "Portfolio Website",
    "Personal Website",
    "Developer Website",
  ],
  authors: [{ name: "Asmit Pandey" }],
  creator: "Asmit Pandey",
  publisher: "Asmit Pandey",
  generator: "Next.js",
  applicationName: "Asmit Pandey Portfolio",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://asmit.fun",
    siteName: "Asmit Pandey Portfolio",
    title: "Asmit Pandey - Backend Engineer",
    description:
      "Backend-focused developer building scalable systems, webhook infrastructure, and event-driven architectures.",
    images: [
      {
        url: "/facedemo.jpeg",
        width: 1086,
        height: 724,
        alt: "Asmit Pandey - Backend Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@asmitpandey",
    creator: "@asmitpandey",
    title: "Asmit Pandey - Backend Engineer",
    description:
      "Backend-focused developer building scalable systems, webhook infrastructure, and event-driven architectures.",
    images: ["/facedemo.jpeg"],
  },

  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "contact:email": "asmitpandeyw4354@gmail.com",
    "contact:phone_number": "+91-9416293757",
    "contact:country_name": "India",
    "contact:region": "Delhi",
    "contact:locality": "New Delhi",
    "og:image:width": "1086",
    "og:image:height": "724",
    "og:image:type": "image/jpeg",
    "og:image:alt": "Asmit Pandey - Backend Engineer Portfolio",
    "og:site_name": "Asmit Pandey Portfolio",
    "og:locale": "en_US",
    "og:type": "website",
    "og:url": "https://asmit.fun",
    "og:title": "Asmit Pandey - Backend Engineer",
    "og:description":
      "Backend-focused developer building scalable systems, webhook infrastructure, and event-driven architectures.",
    "og:image": "https://asmit.fun/facedemo.jpeg",
    "twitter:image:alt": "Asmit Pandey - Backend Engineer Portfolio",
    "twitter:domain": "asmit.fun",
    "twitter:url": "https://asmit.fun",
    "whatsapp:image": "https://asmit.fun/facedemo.jpeg",
    "whatsapp:title": "Asmit Pandey - Backend Engineer",
    "whatsapp:description":
      "Backend-focused developer building scalable systems, webhook infrastructure, and event-driven architectures.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <StructuredData />
      </head>
      <body className="font-sans min-h-dvh bg-grid text-foreground">
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-dvh">{children}</div>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
