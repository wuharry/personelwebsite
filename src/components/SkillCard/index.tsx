import clsx from 'clsx';
import { type FC, useEffect, useState } from 'react';

import { type SkillCardProps } from './type';

const RADIUS = 45;
const CIRCUMFERENCE = RADIUS * 2 * Math.PI;

const SkillCard: FC<SkillCardProps> = ({
  label,
  percentage,
  progressColor,
  className,
}) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => setIsAnimated(true));
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const progressOffset = CIRCUMFERENCE * (1 - percentage / 100);

  return (
    <div
      className={clsx(
        'group flex flex-col items-center justify-center gap-3 rounded-xl',
        'border-border bg-card/50 border p-6',
        'hover:border-primary/30 hover:bg-card/80 transition-all duration-300',
        className,
      )}
    >
      <svg width="80" height="80" viewBox="0 0 100 100">
        {/* 背景圓 */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="5"
          fill="none"
          className="text-border"
        />
        {/* 進度圓 */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          strokeWidth="5"
          strokeLinecap="round"
          stroke={progressColor}
          strokeDasharray={CIRCUMFERENCE}
          style={{
            transition: 'stroke-dashoffset 2s ease-in-out',
            strokeDashoffset: isAnimated ? progressOffset : CIRCUMFERENCE,
          }}
        />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="22"
          fill={progressColor}
          fontWeight="600"
        >
          {`${percentage}%`}
        </text>
      </svg>

      <p className="text-foreground group-hover:text-primary text-center text-sm font-semibold transition-colors">
        {label}
      </p>
    </div>
  );
};

export default SkillCard;
