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

      <section className={clsx("flex w-full mt-14 mb-10 ")}>
        {/* 技能進度條 */}
        <div className={clsx("flex-1 bg-slate-200")}></div>
        {/* 技能圓餅圖 */}
        <div className={clsx("flex-1")}>
          <SkillCard
            label="html"
            percentage={90}
            progressColor="green"
            size={10}
          />
        </div>
      </section>
    </div>
  );
};

export default Skill;
