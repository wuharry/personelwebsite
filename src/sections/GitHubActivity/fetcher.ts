export interface GitHubEvent {
  id: string;
  type: string;
  created_at: string;
  repo: { name: string };
  payload: {
    head?: string; // ← 這次 push 的最新 SHA
    before?: string; // ← push 前的 SHA
    size?: number;
    distinct_size?: number;
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

// ── 共用：計算單次 push 的 commit 數 ──────────────────────────
function getCommitCount(event: GitHubEvent): number {
  // Token 存在時 payload 會有 size / commits，優先使用
  const fromPayload = event.payload.size ?? event.payload.commits?.length;
  if (fromPayload !== undefined) return fromPayload;

  // 無 Token 時 payload 只有 head/before SHA
  // head !== before 代表這是一次有效的 push，保底算 1
  const hasValidPush =
    event.payload.head && event.payload.head !== event.payload.before;
  return hasValidPush ? 1 : 0;
}

// ── 本地時區日期字串（避免 UTC 時差造成日期錯位）──────────────
function getLocalDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// ── 主要 fetch 函式 ───────────────────────────────────────────
export async function getGitHubActivity(
  username: string, // ⚠️ 呼叫時傳入你的 GitHub 帳號名稱，例如 'wuharry'
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

    // ── 每個 repo 的 commit 數 ──
    const repoMap = new Map<string, number>();
    let totalCommits = 0;

    pushEvents.forEach((event) => {
      const count = getCommitCount(event);
      const repo = event.repo.name.split('/')[1];
      repoMap.set(repo, (repoMap.get(repo) ?? 0) + count);
      totalCommits += count;
    });

    // ── 近 7 天每天 commit 數 ──
    const weeklyMap = new Map<string, number>();

    for (let i = 6; i >= 0; i--) {
      const day = new Date();
      day.setDate(day.getDate() - i);
      weeklyMap.set(getLocalDateString(day), 0);
    }

    pushEvents.forEach((event) => {
      const dayStr = getLocalDateString(new Date(event.created_at));
      if (weeklyMap.has(dayStr)) {
        weeklyMap.set(
          dayStr,
          (weeklyMap.get(dayStr) ?? 0) + getCommitCount(event),
        );
      }
    });

    return {
      events: data.slice(0, 6), // ⚠️ 最新動態顯示筆數，預設 6，可依需求調整
      totalCommits,
      repoCommitMap: [...repoMap.entries()]
        .map(([repo, commits]) => ({ repo, commits }))
        .sort((a, b) => b.commits - a.commits)
        .slice(0, 5), // ⚠️ 最活躍 repo 顯示數量，預設 5，可依需求調整
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
