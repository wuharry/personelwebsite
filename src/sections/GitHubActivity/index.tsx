import { useEffect, useState } from 'react';

import { ActivityCharts } from '@/components/Charts';
import { getGitHubActivity, type ActivityStats } from './fetcher';
import EventItem from '@/components/EventItem';
import { useTranslation } from 'react-i18next';

export function GitHubActivity({ username }: { username: string }) {
  const [stats, setStats] = useState<ActivityStats | null>(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    getGitHubActivity(username)
      .then(setStats)
      .finally(() => setLoading(false));
  }, [username]);

  if (loading) {
    return (
      <section className="relative mx-auto max-w-5xl px-6 py-12">
        <div className="grid gap-3 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-card/50 border-border h-20 animate-pulse rounded-xl border"
            />
          ))}
        </div>
      </section>
    );
  }

  if (!stats?.events.length) return null;

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-12">
      <div className="mb-8 flex items-center gap-4">
        <h2 className="text-primary shrink-0 text-sm font-semibold tracking-widest uppercase">
          {t('github.trendTitle')}
        </h2>
        <div className="bg-border/60 h-px flex-1" />
      </div>

      {/* Stats 摘要列 */}
      <div className="mb-6 grid grid-cols-3 gap-4">
        {[
          { label: t('github.totalCommits'), value: stats.totalCommits },
          { label: t('github.activeRepos'), value: stats.repoCommitMap.length },
          { label: t('github.recentEvents'), value: stats.events.length },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-card/50 border-border rounded-xl border p-4 text-center"
          >
            <p className="text-foreground text-2xl font-bold">{s.value}</p>
            <p className="text-muted-foreground text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <ActivityCharts
          weeklyCommits={stats.weeklyCommits}
          repoCommitMap={stats.repoCommitMap}
        />
      </div>

      {/* 最新動態 Feed */}
      <div className="grid gap-3 sm:grid-cols-2">
        {stats.events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
