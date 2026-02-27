import type { GitHubEvent } from '@/sections/GitHubActivity/fetcher';
import {
  ExternalLink,
  GitCommit,
  GitPullRequest,
  Star,
  AlertCircle,
} from 'lucide-react';
import type { ReactNode } from 'react';

// 事件對應的 icon 與描述
export default function EventItem({ event }: { event: GitHubEvent }) {
  const repoName = event.repo.name.split('/')[1] || event.repo.name;
  const date = new Date(event.created_at).toLocaleDateString('zh-TW');

  const config: Record<
    string,
    { icon: ReactNode; label: string; detail: string }
  > = {
    PushEvent: {
      icon: <GitCommit className="h-4 w-4" />,
      label: 'Pushed to',
      detail: event.payload.commits?.[0]?.message ?? '',
    },
    PullRequestEvent: {
      icon: <GitPullRequest className="h-4 w-4" />,
      label: `PR ${event.payload.action}`,
      detail: event.payload.pull_request?.title ?? '',
    },
    WatchEvent: {
      icon: <Star className="h-4 w-4" />,
      label: 'Starred',
      detail: '',
    },
    IssuesEvent: {
      icon: <AlertCircle className="h-4 w-4" />,
      label: `Issue ${event.payload.action}`,
      detail: event.payload.issue?.title ?? '',
    },
  };

  const c = config[event.type] ?? {
    icon: <GitCommit className="h-4 w-4" />,
    label: event.type.replace('Event', ''),
    detail: '',
  };

  return (
    <div className="group border-border bg-card/50 hover:border-primary/30 hover:bg-card/80 flex items-start gap-3 rounded-xl border p-4 transition-all duration-300">
      <div className="bg-primary/10 text-primary mt-0.5 shrink-0 rounded-full p-2">
        {c.icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1">
          <span className="text-muted-foreground text-xs">{c.label}</span>
          <a
            href={`https://github.com/${event.repo.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary flex items-center gap-1 text-sm font-semibold transition-colors"
          >
            {repoName}
            <ExternalLink className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
          </a>
        </div>
        {c.detail && (
          <p className="text-muted-foreground mt-0.5 line-clamp-1 text-xs">
            {c.detail}
          </p>
        )}
      </div>
      <span className="text-muted-foreground shrink-0 font-mono text-xs">
        {date}
      </span>
    </div>
  );
}
