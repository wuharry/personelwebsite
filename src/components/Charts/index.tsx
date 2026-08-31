import { useTranslation } from 'react-i18next';

interface ActivityChartsProps {
  readonly weeklyCommits: readonly { date: string; commits: number }[];
  readonly repoCommitMap: readonly { repo: string; commits: number }[];
}

export function ActivityCharts({
  weeklyCommits,
  repoCommitMap,
}: ActivityChartsProps) {
  const { t } = useTranslation();
  const maxWeeklyCommits = Math.max(
    1,
    ...weeklyCommits.map(({ commits }) => commits),
  );
  const maxRepoCommits = Math.max(
    1,
    ...repoCommitMap.map(({ commits }) => commits),
  );

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <section className="bg-card/50 border-border hover:border-primary/30 rounded-xl border p-5 transition-all">
        <h3 className="text-muted-foreground mb-4 text-xs font-medium tracking-wider uppercase">
          {t('github.trendTitle')}
        </h3>
        <div className="grid h-45 grid-cols-7 items-end gap-2">
          {weeklyCommits.map(({ date, commits }) => {
            const height =
              commits === 0
                ? 3
                : Math.max(12, (commits / maxWeeklyCommits) * 100);

            return (
              <div
                key={date}
                role="img"
                className="flex h-full min-w-0 flex-col items-center justify-end gap-2"
                aria-label={`${date}: ${t('github.commitCount', { count: commits })}`}
              >
                <span className="text-muted-foreground font-mono text-[10px]">
                  {commits}
                </span>
                <div className="flex h-30 w-full items-end">
                  <div
                    className={
                      commits > 0
                        ? 'bg-primary/85 w-full rounded-t-md transition-[height] duration-500'
                        : 'bg-muted/60 w-full rounded-t-md'
                    }
                    style={{ height: `${height}%` }}
                  />
                </div>
                <span className="text-muted-foreground truncate font-mono text-[10px]">
                  {date}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-card/50 border-border hover:border-primary/30 rounded-xl border p-5 transition-all">
        <h3 className="text-muted-foreground mb-5 text-xs font-medium tracking-wider uppercase">
          {t('github.topRepos')}
        </h3>
        <div className="space-y-4">
          {repoCommitMap.map(({ repo, commits }) => (
            <div key={repo}>
              <div className="mb-1.5 flex items-center justify-between gap-3">
                <span className="text-foreground truncate text-xs font-medium">
                  {repo}
                </span>
                <span className="text-muted-foreground font-mono text-xs">
                  {commits}
                </span>
              </div>
              <div className="bg-muted/60 h-2 overflow-hidden rounded-full">
                <div
                  className="bg-primary/80 h-full rounded-full transition-[width] duration-500"
                  style={{ width: `${(commits / maxRepoCommits) * 100}%` }}
                  role="progressbar"
                  aria-label={`${repo}: ${t('github.commitCount', { count: commits })}`}
                  aria-valuemin={0}
                  aria-valuemax={maxRepoCommits}
                  aria-valuenow={commits}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
