import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

// 1. Define your base URL (Change this to your actual Vercel domain later)
const baseUrl = "https://chirag-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  verification: {
    google: "0pDVmp2iowfzrkWpE3XlQLGL2iKslhqcrKBU2IvEJGI",
  },
  title: {
    default: "Chirag Bhoi | Frontend Developer",
    template: "%s | Chirag Bhoi",
  },
  description: "Frontend Developer specializing in React, Next.js, and TypeScript. Building accessible and performant web applications.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Tailwind CSS", "Portfolio", "Chirag Bhoi"],
  authors: [{ name: "Chirag Bhoi" }],
  creator: "Chirag Bhoi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Chirag Bhoi | Frontend Developer",
    description: "Building elegant, performant interfaces with modern web technologies.",
    siteName: "Chirag Bhoi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chirag Bhoi | Frontend Developer",
    description: "Building elegant, performant interfaces with modern web technologies.",
    creator: "@Mr_chirag_bhoi",
  },
  icons: {
    icon: "/favicon.ico",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}