export type ProjectCategory = "saas" | "ai" | "ecommerce" | "other";
export type ProjectStatus = "production" | "building" | "archived";

export interface Project {
  $id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  techStack: string[];
  features: string[];
  category: ProjectCategory;
  githubUrl?: string;
  liveUrl?: string;
  coverImage?: string;
  featured: boolean;
  status: ProjectStatus;
  problemStatement?: string;
  challenges?: string;
  createdAt: string;
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

export interface GitHubStats {
  login: string;
  publicRepos: number;
  followers: number;
  totalStars: number;
  totalForks: number;
  topRepos: GitHubRepo[];
}
