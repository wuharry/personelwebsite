import { FC } from 'react';
import clsx from 'clsx';
import { SkillProgressBarProps } from './type';

export const SkillProgressBar: FC<SkillProgressBarProps> = ({
  label,
  percentage,
  progressColor,
  size,
  className,
}) => {
  return (
    <div
      className={clsx(
        'block justify-center items-center w-full sm:min-w-[20rem] min-w-[15rem]'
      )}
    >
      <span className={clsx('block text-sm font-semibold text-zinc-300')}>
        {label}
      </span>

      <div className={clsx(' w-full h-3 rounded-lg bg-[rgba(0,0,0,0.1)]')}>
        {/* width,background 需要動態調整,調整為percentage */}
        <span
          className={clsx(
            `relative block h-full rounded-lg`,
            'opacity-0',
            'animate-progress'
          )}
          style={{
            width: `${percentage}%`,
            backgroundColor: progressColor,
          }}
        >
          <span
            className={clsx(
              'absolute right-0 top-[-28px] rounded text-white bg-blue-600 px-1 py-1 text-[8px]',
              'z-10',
              "before:content-['']",
              'before:bg-blue-600',
              'before:h-2',
              'before:w-2',
              'before:left-2',
              'before:top-4',
              'before:absolute',
              'before:z-0',
              'before:rotate-45'
            )}
          >
            {percentage}%
          </span>
        </span>
      </div>
    </div>
  );
};
