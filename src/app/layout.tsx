import type { Metadata } from "next"
import { Sarabun, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "sonner"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { JsonLd } from "@/components/json-ld"

const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://devspace-portfolio.vercel.app"),
  title: {
    default: "DevSpace — Senior Full-Stack & UI Architect Portfolio",
    template: "%s | DevSpace",
  },
  description: "Production-ready developer portfolio showcasing high-performance web systems, modern design architecture, and engineering craftsmanship.",
  keywords: [
    "Full-Stack Engineer",
    "Frontend Architect",
    "Next.js 16",
    "React 19",
    "Tailwind CSS v4",
    "TypeScript",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "DevSpace Portfolio" }],
  creator: "DevSpace",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "DevSpace — Senior Full-Stack & UI Architect Portfolio",
    description: "Production-ready developer portfolio showcasing high-performance web systems, modern design architecture, and engineering craftsmanship.",
    siteName: "DevSpace Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevSpace — Senior Full-Stack & UI Architect Portfolio",
    description: "Production-ready developer portfolio showcasing high-performance web systems, modern design architecture, and engineering craftsmanship.",
    creator: "@devspace",
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body
        className={`${sarabun.variable} ${geistMono.variable} min-h-screen bg-background font-sans text-foreground antialiased selection:bg-emerald-500/20 selection:text-emerald-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delay={100}>
            {children}
            <Toaster position="bottom-right" richColors />
            <Analytics />
            <SpeedInsights />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
