export const RESUME_DATA = {
    personal: {
        name: "Chirag Bhoi",
        initials: "CB",
        role: "Full Stack Developer",
        // Stronger sub-headline: specific positioning over generic title
        headline: "Backend-focused Full Stack Developer building production-grade SaaS & API-driven systems.",
        summary:
            "Full Stack Developer specializing in scalable web systems — from RESTful APIs and RBAC authentication layers to high-performance React frontends. I ship production-ready code that handles real users and real edge cases.",
        location: "Udaipur, Rajasthan, India",
        email: "mr.chiragbhoi2003@gmail.com",
        github: "https://github.com/chiragbhoi01",
        resumeLink: "https://drive.google.com/file/d/1gA11cq86z5Mms0PyGe0up6nNZL59mx2L/view?usp=drive_link",
        linkedin: "https://www.linkedin.com/in/chirag-bhoi-90b89b1b1",
        avatarUrl: "/assets/profile.jpg",
        phone: "(+91) 7427837782"
    },
    // Credibility stats bar — scannable proof points shown in hero
    stats: [
        { label: "Production Apps", value: "4+" },
        { label: "Lighthouse Score", value: "95%" },
        { label: "IBM Intern", value: "✓" },
        { label: "Public Repos", value: "10+" },
    ],
    technicalSkills: [
        {
            category: "Core Stack",
            skills: ["Next.js", "React.js", "TypeScript", "Node.js", "Express.js", "MongoDB"]
        },
        {
            category: "Frontend & UI",
            skills: ["Tailwind CSS", "Shadcn/ui", "Framer Motion", "Responsive Design"]
        },
        {
            category: "Backend & Data",
            skills: ["REST APIs", "JWT & RBAC", "Firebase", "Appwrite", "Mongoose"]
        },
        {
            category: "Tools & Platforms",
            skills: ["Git", "GitHub", "Vercel", "Netlify", "Postman", "Vite"]
        }
    ],
    professionalExperience: [
        {
            title: "Frontend Developer Intern",
            company: "IBM SkillBuild CSRBOX",
            location: "Remote",
            period: "Jul 2024 – Aug 2024",
            type: "Internship",
            achievements: [
                "Built responsive, accessible UI components with React.js, TypeScript, and Tailwind CSS.",
                "Reduced page load times by 15% by implementing code splitting and lazy loading strategies.",
                "Delivered production-ready components under IBM engineering standards."
            ]
        },
        {
            title: "Senior Research Analyst",
            company: "Arcgate Technologies",
            location: "Udaipur, Rajasthan",
            period: "Feb 2024 – Present",
            type: "Full-time",
            achievements: [
                "Maintained 99% data accuracy across large-scale datasets using Excel and Google Sheets.",
                "Built automation scripts that improved data processing throughput by 20%.",
                "Applied structured analytical thinking — directly transferable to backend system design."
            ]
        }
    ],
    // Currently building — problem-focused, not just feature list
    currentlyBuilding: {
        title: "EcoGuard LakeCity",
        subtitle: "AI-Powered Waste Management SaaS",
        description:
            "Building an AI-powered SaaS to automate waste classification and optimize municipal collection routing using real-time sensor data — targeting Udaipur's lake preservation initiative. The problem: manual waste tracking is slow, error-prone, and doesn't scale.",
        tech: ["Next.js 15", "OpenAI API", "MongoDB", "WebSockets", "Node.js"],
        githubLink: "https://github.com/chiragbhoi01/ecoguard-lakecity",
        startedAt: "Mar 2026",
    },
    // "How I Build Systems" — system design thinking section
    systemThinking: [
        {
            title: "API-First Backend Design",
            icon: "Server",
            description:
                "I design APIs before building UIs. Clean contracts, typed request/response shapes, and consistent error formats — so frontends and third-party consumers can rely on them."
        },
        {
            title: "Scalable Architecture",
            icon: "GitBranch",
            description:
                "Modular service layers, separation of concerns, and database indexing decisions made at design time — not after performance problems surface in production."
        },
        {
            title: "Security by Default",
            icon: "Shield",
            description:
                "JWT authentication, role-based access control, input validation, and rate limiting are first-class features — not security theatre added at the end."
        },
        {
            title: "Performance is a Constraint",
            icon: "Zap",
            description:
                "ISR, code splitting, query optimization, and Lighthouse scores are engineering requirements I track — not nice-to-haves left for DevOps to handle."
        }
    ],
    philosophy: [
        {
            principle: "Build for production, not portfolios",
            detail: "Every project I ship handles real users, real data, and real edge cases. I care about error boundaries, loading states, and auth security — not just the happy path."
        },
        {
            principle: "Performance is a feature",
            detail: "Slow UIs lose users. I build with code splitting, ISR, optimized images, and Lighthouse scores as acceptance criteria — not afterthoughts."
        },
        {
            principle: "Backend thinking drives frontend decisions",
            detail: "Understanding APIs, data models, and system constraints makes me a better full stack engineer. I design UIs around the data, not the other way around."
        }
    ],
    targetRoles: [
        "Full Stack Developer",
        "Backend Engineer (Node.js / API)",
        "Frontend Engineer (Next.js / React)",
    ],
    // CTA copy shown in footer — aligned to target roles
    ctaHeadline: "Looking for a Full Stack or Backend role",
    ctaDescription:
        "I'm actively looking for roles where I can build scalable systems, design clean APIs, and contribute to production applications. Open to full-time and contract work.",
    education: [
        {
            degree: "Master of Computer Applications (MCA)",
            institution: "Manipal University Jaipur",
            location: "Remote",
            period: "Mar 2024 – Mar 2026"
        },
        {
            degree: "Bachelor of Science (B.Sc.)",
            institution: "Janardan Rai Nagar Rajasthan Vidyapeeth",
            location: "Udaipur",
            period: "Aug 2020 – Jul 2023"
        }
    ],
    contact: {
        linkedin: "https://www.linkedin.com/in/chirag-bhoi-90b89b1b1",
        github: "https://github.com/chiragbhoi01",
        email: "mr.chiragbhoi2003@gmail.com",
        phone: "(+91) 7427837782"
    }
};
