/** @format */

import { FunctionComponent, useEffect, useState } from "react";
import { NavigationBar } from "../../compoment";
import SkillCard from "../../compoment/SkillCard";
import clsx from "clsx";
interface ExperienceProps {}

const Skill: FunctionComponent<ExperienceProps> = () => {
  const [animetion, setAnimetion] = useState(false);
  useEffect(() => {
    setAnimetion(false);
    return () => {
      setTimeout(() => setAnimetion(true), 500);
    };
  }, []);

  return (
    <div className="flex bg-slate-700 flex-col items-start justify-start w-screen !h-auto min-h-screen overflow-y-scroll">
      <NavigationBar />

      <section
        className={clsx(
          "flex w-full min-h-max mt-14 mb-10 justify-center items-center"
        )}
      >
        {/* 技能進度條 */}
        <div className={clsx("flex-1 min-h-max bg-slate-200")}></div>
        {/* 技能圓餅圖 */}
        <div className={clsx("flex-1 grid grid-cols-4 gap-2")}>
          <SkillCard
            label="html"
            percentage={90}
            className={clsx("w-full")}
            progressColor="#FF8000"
            size={10}
          />
          <SkillCard
            label="css"
            percentage={90}
            className={clsx("w-full")}
            progressColor="#0080FF"
            size={10}
          />
          <SkillCard
            label="javascript"
            percentage={90}
            className={clsx("w-full")}
            progressColor="yellow"
            size={10}
          />
          <SkillCard
            label="React"
            percentage={90}
            className={clsx("w-full")}
            progressColor="#00E3E3"
            size={10}
          />
          <SkillCard
            label="NextJS"
            percentage={90}
            className={clsx("w-full")}
            progressColor="red"
            size={10}
          />
        </div>
      </section>
    </div>
  );
};

export default Skill;
