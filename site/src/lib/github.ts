export interface GitHubUser {
  login: string;
  name: string | null;
  bio: string | null;
  location: string | null;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
  created_at: string;
  updated_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  updated_at: string;
  created_at: string;
  homepage: string | null;
}

export interface GitHubEvent {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
  payload?: {
    commits?: Array<{ message: string }>;
  };
}

const GITHUB_USERNAME = "luizking30";
const BASE_URL = "https://api.github.com";

async function fetchGitHub<T>(endpoint: string): Promise<T | null> {
  const token = process.env.GITHUB_TOKEN;
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "portfolio-app",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers,
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    if (res.status === 409) {
      // Repositório vazio ou sem commits
      return null;
    }
    console.warn(`GitHub API error: ${res.status} ${res.statusText} on ${endpoint}`);
    return null;
  }

  return res.json();
}

export async function getGitHubUser(): Promise<GitHubUser> {
  return (
    (await fetchGitHub<GitHubUser>(`/users/${GITHUB_USERNAME}`)) ?? {
      login: GITHUB_USERNAME,
      name: null,
      bio: null,
      location: null,
      public_repos: 0,
      followers: 0,
      following: 0,
      avatar_url: "",
      html_url: `https://github.com/${GITHUB_USERNAME}`,
      created_at: "",
      updated_at: "",
    }
  );
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  return (
    (await fetchGitHub<GitHubRepo[]>(
      `/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=100`
    )) ?? []
  );
}

export async function getGitHubEvents(): Promise<GitHubEvent[]> {
  return (
    (await fetchGitHub<GitHubEvent[]>(
      `/users/${GITHUB_USERNAME}/events/public?per_page=10`
    )) ?? []
  );
}

export async function getRepoLanguages(repo: string): Promise<Record<string, number>> {
  return (
    (await fetchGitHub<Record<string, number>>(
      `/repos/${GITHUB_USERNAME}/${repo}/languages`
    )) ?? {}
  );
}

export function getTopLanguages(repos: GitHubRepo[]): string[] {
  const languageCounts: Record<string, number> = {};

  for (const repo of repos) {
    if (repo.language) {
      languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
    }
  }

  return Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([language]) => language);
}

export function getRecentRepos(repos: GitHubRepo[], limit = 4): GitHubRepo[] {
  return [...repos]
    .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
    .slice(0, limit);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export interface GitHubCommit {
  sha: string;
  commit: {
    message: string;
    author: {
      date: string;
    };
  };
}

export interface Contribution {
  date: string;
  count: number;
  level: number;
}

export async function getRepoCommits(
  repo: string,
  perPage = 100
): Promise<GitHubCommit[]> {
  return (
    (await fetchGitHub<GitHubCommit[]>(
      `/repos/${GITHUB_USERNAME}/${repo}/commits?per_page=${perPage}`
    )) ?? []
  );
}

export async function getAllRepoCommits(repo: string): Promise<GitHubCommit[]> {
  const commits: GitHubCommit[] = [];
  let page = 1;
  const perPage = 100;

  while (true) {
    const pageCommits = await fetchGitHub<GitHubCommit[]>(
      `/repos/${GITHUB_USERNAME}/${repo}/commits?per_page=${perPage}&page=${page}`
    );

    if (!pageCommits || pageCommits.length === 0) break;

    commits.push(...pageCommits);

    if (pageCommits.length < perPage) break;
    page++;
  }

  return commits;
}

export async function getTotalCommits(repos: GitHubRepo[]): Promise<number> {
  const commitPromises = repos.map((repo) => getAllRepoCommits(repo.name));
  const allCommits = await Promise.all(commitPromises);
  return allCommits.reduce((total, commits) => total + commits.length, 0);
}

export async function getContributions(): Promise<Contribution[]> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.contributions || [];
  } catch {
    return [];
  }
}

export function getLastCommitInfo(events: GitHubEvent[]) {
  const pushEvent = events.find((event) => event.type === "PushEvent");
  if (!pushEvent) return null;

  return {
    repo: pushEvent.repo.name,
    time: getTimeAgo(pushEvent.created_at),
  };
}

export function getTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "hoje";
  if (diffDays === 1) return "há 1 dia";
  if (diffDays < 7) return `há ${diffDays} dias`;
  if (diffDays < 30) return `há ${Math.floor(diffDays / 7)} semanas`;
  if (diffDays < 365) return `há ${Math.floor(diffDays / 30)} meses`;
  return `há ${Math.floor(diffDays / 365)} anos`;
}
