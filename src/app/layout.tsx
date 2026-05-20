import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/animations/custom-cursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const baseUrl = "https://chiragbhoimarshal.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: "Chirag Bhoi",
  verification: {
    google: "0pDVmp2iowfzrkWpE3XlQLGL2iKslhqcrKBU2IvEJGI",
  },
  title: {
    default: "Chirag Bhoi – Full Stack Developer | Next.js, Node.js, React",
    template: "%s | Chirag Bhoi",
  },
  description:
    "Chirag Bhoi — Full Stack Developer from Udaipur. Building production apps with Next.js, Node.js & MongoDB. 4+ shipped projects, State Finalist (Viksit Bharat), currently at Creative Upaay.",
  keywords: [
    "Chirag Bhoi",
    "Full Stack Developer",
    "Full Stack Developer Portfolio",
    "Next.js Developer India",
    "MERN Stack Developer",
    "Node.js Developer",
    "React Developer Udaipur",
    "TypeScript Developer",
    "Hire Full Stack Developer India",
    "Chirag Bhoi Portfolio",
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
    title: "Chirag Bhoi – Full Stack Developer | Next.js, Node.js, React",
    description:
      "Full Stack Developer from Udaipur. 4+ production apps, State Finalist, currently building at Creative Upaay. Next.js, Node.js, MongoDB.",
    siteName: "Chirag Bhoi",
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
    title: "Chirag Bhoi – Full Stack Developer",
    description:
      "Full Stack Developer from Udaipur. 4+ production apps with Next.js, Node.js & MongoDB. State Finalist at Viksit Bharat.",
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head />
      <body className="font-sans bg-background text-foreground antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
