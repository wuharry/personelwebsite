/** @format */

import { FunctionComponent, useEffect, useState } from "react";
import { NavigationBar } from "../../compoment";
import SkillCard from "../../compoment/SkillCard";
import { SkillProgressBar } from "../../compoment/SkillProgressBar";
import clsx from "clsx";
import { SKILLS } from "../../static/constant/data/skillProgresion";

interface ExperienceProps {}

const Skill: FunctionComponent<ExperienceProps> = () => {
  return (
    <div className="flex flex-col items-start justify-start w-screen min-h-screen bg-slate-700 overflow-y-scroll">
      <NavigationBar />

      <section className="flex flex-col w-full mt-14 mb-10 space-y-10 px-4">
        <div className="flex-1 bg-slate-200 p-6 rounded-md">
          {SKILLS.map((skill) => (
            <SkillProgressBar
              key={skill.label}
              label={skill.label}
              percentage={skill.percentage}
              className={clsx(skill.className)}
              progressColor={skill.progressColor}
              size={skill.size}
            />
          ))}
        </div>

        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-200 p-6 rounded-md">
          {SKILLS.map((skill) => (
            <SkillCard
              key={skill.label}
              label={skill.label}
              percentage={skill.percentage}
              className={clsx(skill.className)}
              progressColor={skill.progressColor}
              size={skill.size}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skill;
