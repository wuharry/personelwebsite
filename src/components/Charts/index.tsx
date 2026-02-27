'use client';

import type { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
  type TooltipProps,
} from 'recharts';

interface Props {
  readonly weeklyCommits: { date: string; commits: number }[]; // Sonar: readonly
  readonly repoCommitMap: { repo: string; commits: number }[];
}

// 定義統一的 Tooltip 樣式，符合 Shadcn UI 風格
const tooltipStyle: CSSProperties = {
  backgroundColor: 'var(--popover)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius)',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  padding: '8px 12px',
};

const axisTickStyle = {
  fontSize: 12,
  fill: 'var(--muted-foreground)',
  fontWeight: 500,
};

const cursorStyle = {
  fill: 'var(--primary)',
  opacity: 0.1,
};

// 自定義 Tooltip 內容組件 (可選，讓顯示更精緻)
const CustomTooltip = (
  props: TooltipProps<number, string> & {
    payload?: Array<{
      value: number;
      payload: { date: string; commits: number };
    }>;
  },
) => {
  const { active, payload } = props;
  if (!active || !payload?.length) return null; // ✅ Sonar: optional chain
  return (
    <div style={tooltipStyle} className="text-popover-foreground text-xs">
      <p className="mb-1 font-semibold">{payload[0].payload?.date}</p>
      <p className="text-primary">
        Commits: <span className="font-bold">{payload[0].value}</span>
      </p>
    </div>
  );
};

interface BarShapeProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  commits?: number;
}

const ConditionalBar = (props: BarShapeProps) => {
  const { x = 0, y = 0, width = 0, height = 0, commits = 0 } = props;
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={commits > 0 ? 'var(--primary)' : 'var(--muted)'}
      opacity={commits > 0 ? 0.85 : 0.4}
      rx={6}
      ry={6}
    />
  );
};

export function ActivityCharts({ weeklyCommits, repoCommitMap }: Props) {
  const { t } = useTranslation();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* 7 天趨勢 */}
      <div className="bg-card/50 border-border hover:border-primary/30 rounded-xl border p-5 transition-all">
        <p className="text-muted-foreground mb-4 text-xs font-medium tracking-wider uppercase">
          {t('github.trendTitle')}
        </p>
        <div className="h-45 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyCommits} barSize={24}>
              <XAxis
                dataKey="date"
                tick={axisTickStyle}
                axisLine={false}
                tickLine={false}
                dy={10}
              />
              <YAxis hide allowDecimals={false} />
              <Tooltip
                content={<CustomTooltip />}
                cursor={cursorStyle}
                animationDuration={200}
              />
              {/* ✅ Cell 替換為 shape */}
              <Bar dataKey="commits" shape={<ConditionalBar />} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Repos */}
      <div className="bg-card/50 border-border hover:border-primary/30 rounded-xl border p-5 transition-all">
        <p className="text-muted-foreground mb-4 text-xs font-medium tracking-wider uppercase">
          {t('github.topRepos')}
        </p>
        <div className="h-45 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={repoCommitMap}
              layout="vertical"
              barSize={18}
              margin={{ left: 10, right: 10 }}
            >
              <XAxis type="number" hide />
              <YAxis
                type="category"
                dataKey="repo"
                width={100}
                tick={axisTickStyle}
                axisLine={false}
                tickLine={false}
                dx={-10}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={cursorStyle}
                animationDuration={200}
              />
              <Bar
                dataKey="commits"
                radius={[0, 6, 6, 0]}
                fill="var(--primary)"
                fillOpacity={0.8}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
