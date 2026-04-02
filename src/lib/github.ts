import type { GitHubStats, GitHubRepo } from "@/types/project";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME ?? "chiragbhoi01";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const headers: HeadersInit = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  ...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {}),
};

export async function getGitHubStats(): Promise<GitHubStats> {
  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers,
      next: { revalidate: 3600 },
    }),
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      { headers, next: { revalidate: 3600 } }
    ),
  ]);

  if (!userRes.ok || !reposRes.ok) {
    throw new Error("GitHub API request failed");
  }

  const user = await userRes.json();
  const repos: GitHubRepo[] = await reposRes.json();

  const totalStars = repos.reduce((acc, r) => acc + r.stargazers_count, 0);
  const totalForks = repos.reduce((acc, r) => acc + r.forks_count, 0);

  const topRepos = repos
    .filter((r) => !r.name.includes(".github"))
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);

  return {
    login: user.login,
    publicRepos: user.public_repos,
    followers: user.followers,
    totalStars,
    totalForks,
    topRepos,
  };
}
