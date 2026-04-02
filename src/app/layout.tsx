import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const baseUrl = "https://chiragbhoimarshal.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  verification: {
    google: "0pDVmp2iowfzrkWpE3XlQLGL2iKslhqcrKBU2IvEJGI",
  },
  title: {
    default: "Chirag Bhoi | Full Stack Developer",
    template: "%s | Chirag Bhoi",
  },
  description:
    "Full Stack Developer specializing in Next.js, Node.js, and MongoDB. Building production-grade web applications — e-commerce platforms, SaaS dashboards, and scalable APIs.",
  keywords: [
    "Full Stack Developer",
    "Full Stack Developer Portfolio",
    "Next.js Developer India",
    "MERN Stack Projects",
    "Node.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Chirag Bhoi",
    "Udaipur Developer",
  ],
  authors: [{ name: "Chirag Bhoi", url: baseUrl }],
  creator: "Chirag Bhoi",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Chirag Bhoi | Full Stack Developer",
    description:
      "Full Stack Developer building production-grade web applications with Next.js, Node.js, and MongoDB.",
    siteName: "Chirag Bhoi Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Chirag Bhoi — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chirag Bhoi | Full Stack Developer",
    description:
      "Full Stack Developer building production-grade web apps with Next.js, Node.js, and MongoDB.",
    creator: "@Mr_chirag_bhoi",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://cloud.appwrite.io" />
      </head>
      <body className="font-sans bg-background text-foreground antialiased" suppressHydrationWarning>
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
