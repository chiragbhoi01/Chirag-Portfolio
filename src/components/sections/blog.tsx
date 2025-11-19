import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RESUME_DATA } from "@/lib/data";

export function Blog() {
    return (
        <section className="space-y-8">
            <h2 className="text-3xl font-bold">Blog</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {RESUME_DATA.blog.map((post, i) => (
                    <Link key={i} href={post.link} className="group block space-y-2">
                        <div className="aspect-video bg-muted rounded-lg border border-border group-hover:border-[#2dd4bf]/50 transition-colors" />
                        <h3 className="font-semibold group-hover:text-[#2dd4bf] transition-colors flex items-center gap-2">
                            {post.title}
                            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}