import { RESUME_DATA } from "@/lib/data";
import type { Project } from "@/types/project";

const baseUrl = "https://chiragbhoimarshal.netlify.app";

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: RESUME_DATA.personal.name,
    jobTitle: RESUME_DATA.personal.role,
    url: baseUrl,
    email: RESUME_DATA.personal.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Udaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    sameAs: [RESUME_DATA.personal.github, RESUME_DATA.personal.linkedin],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProjectJsonLd({ project }: { project: Project }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.description,
    url: project.liveUrl ?? `${baseUrl}/projects/${project.slug}`,
    codeRepository: project.githubUrl,
    programmingLanguage: project.techStack,
    author: {
      "@type": "Person",
      name: RESUME_DATA.personal.name,
      url: baseUrl,
    },
    dateCreated: project.createdAt,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
