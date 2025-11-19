import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { RESUME_DATA } from "@/lib/data";
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight flex items-center gap-2">

          {/* Logo Image */}
          <Image
            src="/logo.svg"
            alt={`${RESUME_DATA.personal.name} Logo`}
            width={32}
            height={32}
            className="rounded-md"
            priority
          />

          <span className="hidden sm:inline">{RESUME_DATA.personal.name}</span>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button asChild size="sm" className="bg-[#2dd4bf] text-black hover:bg-[#2dd4bf]/90 font-semibold">
            {/* Use the link from data.ts and open in new tab */}
            <a href={RESUME_DATA.personal.resumeLink} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" /> Resume
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}