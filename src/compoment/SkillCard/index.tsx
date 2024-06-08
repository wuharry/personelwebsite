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
  }, []);

  const radius = divSize.width;
  const circumference = radius * 2 * Math.PI; //圓周長計算 圓周長公式 C=2πr
  const filledLength = (1 - percentage / 100) * circumference; // 白色的邊長填充長度
  const unfilledLength = circumference - filledLength; //非白色的部分的長度的需求
  const dashOffset = circumference - filledLength; // 用於讓進度從上方開始

  if (percentage < 100) {
    return (
      <div
        className={clsx(
          "w-1/4 h-52 bg-white rounded-lg shadow-lg shadow-slate-50",
          `flex flex-col items-center justify-around text-fuchsia-500 text-center`,
          className
        )}
      >
        <svg width="60%" height="60%" viewBox="0 0 100 100">
          {/* <!-- 外圓 --> */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke={`${progressColor ? progressColor : "yellow"}`}
            strokeWidth="5"
            fill="none"
          />
          {/* <!-- 內圓 --> */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            strokeWidth="5"
            strokeLinecap="round"
            stroke="#cccccc"
            ref={ref}
            strokeDasharray={`${filledLength}px,${unfilledLength}px`}
            //percentage計算 ,stroke-dasharray: filledLength, unfilledLength; 表示繪製 filledLengthpx，然後留空 unfilledLengthpx，重複這個圖案。
            strokeDashoffset={dashOffset}
          />
          <text
            x="50" // 中央對齊
            y="50" // 中央對齊
            textAnchor="middle" // 中央對齊
            dominantBaseline="middle" // 中央對齊
            fontSize="28" // 調整文字大小
            fill="#4A4AFF	" // 文字顏色
          >
            {`${percentage}%`}
          </text>
        </svg>

        <p className={clsx(" font-bold text-center text-2xl")}>{label}</p>
      </div>
    );
  }
  return (
    <div
      className={clsx(
        "w-1/4 h-52 bg-slate-500 rounded-sm",
        "flex flex-col items-center justify-around text-fuchsia-500 text-center"
      )}
    />
  );
};

export default SkillCard;
