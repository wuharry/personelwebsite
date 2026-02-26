import clsx from 'clsx';
import { type FC } from 'react';
import { type SkillProgressBarProps } from './type';

export const SkillProgressBar: FC<SkillProgressBarProps> = ({
  label,
  percentage,
  progressColor,
}) => {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-foreground text-sm font-medium">{label}</span>
        <span className="text-muted-foreground font-mono text-xs">
          {percentage}%
        </span>
      </div>

      <div className="bg-secondary h-1.5 w-full rounded-full">
        <span
          className={clsx(
            'relative block h-full rounded-full',
            'animate-progress opacity-0',
          )}
          style={{
            width: `${percentage}%`,
            backgroundColor: progressColor,
          }}
        />
      </div>
    </div>
  );
};
