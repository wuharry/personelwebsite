import { FC, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { SkillCardProps } from "./type";

const SkillCard: FC<SkillCardProps> = ({
  label,
  percentage,
  progressColor,
  size,
  className,
}) => {
  const ref = useRef<SVGCircleElement>(null);
  const [divSize, setDivSize] = useState({ width: 0 });
  const [dashOffset, setDashOffset] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      if (ref.current) {
        const RADIUS = ref.current.r.baseVal.value;
        setDivSize({
          width: RADIUS,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [percentage]);

  useEffect(() => {
    setDashOffset(0);
    setTimeout(() => {
      if (ref.current) {
        const RADIUS = ref.current.r.baseVal.value; //半徑
        const circumference = RADIUS * 2 * Math.PI; //圓周長
        const filledLength = (1 - percentage / 100) * circumference; //留白的進度條
        setDashOffset(circumference - filledLength);
      }
    }, 100);
  }, [percentage]);

  const radius = divSize.width; //半徑
  const circumference = radius * 2 * Math.PI; //圓周長計算

  return (
    <div
      className={clsx(
        "w-1/4 h-52 bg-white rounded-lg shadow-lg shadow-slate-50",
        `flex flex-col items-center justify-around text-fuchsia-500 text-center`,
        className
      )}
    >
      <svg width="60%" height="60%" viewBox="0 0 100 100">
        {/* 外圓 */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke={progressColor ? progressColor : "blue"}
          strokeWidth="5"
          fill="none"
        />
        {/* 內圓 */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          strokeWidth="5"
          strokeLinecap="round"
          stroke="#cccccc"
          ref={ref}
          strokeDasharray={`${circumference}px`} //白線的部分是圓周長
          style={{
            transition: "stroke-dashoffset 2s ease-in-out",
            strokeDashoffset: dashOffset, //白線的偏移量,會是從0~(圓周長 - (100-percentage)的長度),那麼過度偏移的stroke會被忽略只會剩下還在圓周長範圍內的
          }}
        />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="28"
          fill="#4A4AFF"
        >
          {`${percentage}%`}
        </text>
      </svg>
      <p className={clsx("font-bold text-center text-2xl")}>{label}</p>
    </div>
  );
};

export default SkillCard;
