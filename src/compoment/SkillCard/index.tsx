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

    // 註冊窗口大小變化事件的監聽器
    window.addEventListener("resize", updateSize);

    // 在組件卸載時移除事件監聽器
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const radius = divSize.width;
  const circumference = radius * 2 * Math.PI; //圓周長計算 圓周長公式 C=2πr
  const filledLength = (1 - percentage / 100) * circumference; // 白色的邊長填充長度
  const unfilledLength = circumference - filledLength; //非白色的部分的長度的需求
  console.log("總長度(圓周長)", circumference);
  console.log("邊長填充長度", filledLength);
  console.log("非白色的部分的長度的需求", unfilledLength);

  if (percentage < 100) {
    return (
      <div
        className={clsx(
          "w-1/4 h-52 bg-slate-500 rounded-sm",
          `flex flex-col items-center justify-around text-white text-center`
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
            stroke="white"
            ref={ref}
            strokeDasharray={`${filledLength}px,${unfilledLength}px`}
            //percentage計算 ,stroke-dasharray: filledLength, unfilledLength; 表示繪製 filledLengthpx，然後留空 unfilledLengthpx，重複這個圖案。
          />
        </svg>
        <p className={clsx("")}>{label}</p>
      </div>
    );
  }
  return (
    <div
      className={clsx(
        "w-1/4 h-52 bg-slate-500 rounded-sm",
        "flex flex-col items-center justify-around text-white text-center"
      )}
    />
  );
};

export default SkillCard;
