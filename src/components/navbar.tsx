import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/lib/data";
import { ModeToggle } from "@/components/mode-toggle";

const NAV_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "How I Built This", href: "/how-i-built-this" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-tight flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt={`${RESUME_DATA.personal.name} Logo`}
            width={32}
            height={32}
            className="rounded-md"
            priority
          />
          <span className="hidden sm:inline">{RESUME_DATA.personal.name}</span>
        </Link>

        {/* Nav links + actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <ModeToggle />

          <Button
            asChild
            size="sm"
            className="bg-[#2dd4bf] text-black hover:bg-[#2dd4bf]/90 font-semibold"
          >
            <Link href="/resume" aria-label="View resume">
              View Resume
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
