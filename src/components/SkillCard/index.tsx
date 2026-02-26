import clsx from 'clsx';
import { type FC, useEffect, useRef, useState } from 'react';
import { type SkillCardProps } from './type';

const SkillCard: FC<SkillCardProps> = ({
  label,
  percentage,
  progressColor,
  className,
}) => {
  const ref = useRef<SVGCircleElement>(null);
  const [divSize, setDivSize] = useState({ width: 0 });
  const [dashOffset, setDashOffset] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      if (ref.current) {
        setDivSize({ width: ref.current.r.baseVal.value });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [percentage]);

  useEffect(() => {
    setDashOffset(0);
    setTimeout(() => {
      if (ref.current) {
        const RADIUS = ref.current.r.baseVal.value;
        const circumference = RADIUS * 2 * Math.PI;
        // ✅ filledLength 是「要顯示的長度」，offset = 剩餘空白
        const filledLength = (percentage / 100) * circumference;
        setDashOffset(circumference - filledLength);
      }
    }, 100);
  }, [percentage]);

  const radius = divSize.width;
  const circumference = radius * 2 * Math.PI;

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
          ref={ref}
          strokeDasharray={`${circumference}px`}
          style={{
            transition: 'stroke-dashoffset 2s ease-in-out',
            strokeDashoffset: dashOffset,
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
