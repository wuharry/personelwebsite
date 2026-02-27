export interface GitHubEvent {
  id: string;
  type: string;
  created_at: string;
  repo: { name: string };
  payload: {
    commits?: { message: string }[];
    action?: string;
    pull_request?: { title: string };
    issue?: { title: string };
  };
}

export interface ActivityStats {
  events: GitHubEvent[];
  totalCommits: number;
  repoCommitMap: { repo: string; commits: number }[];
  weeklyCommits: { date: string; commits: number }[];
}

export async function getGitHubActivity(
  username: string,
): Promise<ActivityStats> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/events/public?per_page=100`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          ...(import.meta.env.VITE_GITHUB_TOKEN && {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          }),
        },
      },
    );

    if (!res.ok) throw new Error(`GitHub API Error: ${res.status}`);

    const data: GitHubEvent[] = await res.json();
    const pushEvents = data.filter((e) => e.type === 'PushEvent');

    // 每個 repo 的 commit 數
    const repoMap = new Map<string, number>();
    let totalCommits = 0;
    pushEvents.forEach((e) => {
      const count = e.payload.commits?.length ?? 0;
      const repo = e.repo.name.split('/')[1];
      repoMap.set(repo, (repoMap.get(repo) ?? 0) + count);
      totalCommits += count;
    });

    // 近 7 天每天 commit 數
    const weeklyMap = new Map<string, number>();
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      weeklyMap.set(d.toISOString().slice(0, 10), 0);
    }
    pushEvents.forEach((e) => {
      const day = e.created_at.slice(0, 10);
      if (weeklyMap.has(day)) {
        weeklyMap.set(
          day,
          (weeklyMap.get(day) ?? 0) + (e.payload.commits?.length ?? 0),
        );
      }
    });

    return {
      events: data.slice(0, 6), // 最新 6 筆動態
      totalCommits,
      repoCommitMap: [...repoMap.entries()]
        .map(([repo, commits]) => ({ repo, commits }))
        .sort((a, b) => b.commits - a.commits)
        .slice(0, 5),
      weeklyCommits: [...weeklyMap.entries()].map(([date, commits]) => ({
        date: date.slice(5), // 顯示 MM-DD
        commits,
      })),
    };
  } catch (error) {
    console.error('GitHub fetch error:', error);
    return {
      events: [],
      totalCommits: 0,
      repoCommitMap: [],
      weeklyCommits: [],
    };
  }
}
