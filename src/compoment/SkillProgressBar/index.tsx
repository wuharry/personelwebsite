import clsx from 'clsx';
import { type FC } from 'react';

import { type SkillProgressBarProps } from './type';

export const SkillProgressBar: FC<SkillProgressBarProps> = ({
  label,
  percentage,
  progressColor,
}) => {
  return (
    <div
      className={clsx(
        'block w-full min-w-60 items-center justify-center sm:min-w-[20rem]',
      )}
    >
      <span className={clsx('block text-sm font-semibold text-zinc-300')}>
        {label}
      </span>

      <div className={clsx('h-3 w-full rounded-lg bg-[rgba(0,0,0,0.1)]')}>
        {/* width,background 需要動態調整,調整為percentage */}
        <span
          className={clsx(
            `relative block h-full rounded-lg`,
            'opacity-0',
            'animate-progress',
          )}
          style={{
            width: `${percentage}%`,
            backgroundColor: progressColor,
          }}
        >
          <span
            className={clsx(
              'absolute -top-7 right-0 rounded bg-blue-600 px-1 py-1 text-[8px] text-white',
              'z-10',
              "before:content-['']",
              'before:bg-blue-600',
              'before:h-2',
              'before:w-2',
              'before:left-2',
              'before:top-4',
              'before:absolute',
              'before:z-0',
              'before:rotate-45',
            )}
          >
            {percentage}%
          </span>
        </span>
      </div>
    </div>
  );
};
