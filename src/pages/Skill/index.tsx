/** @format */

import { FunctionComponent } from 'react';
import { NavigationBar } from '../../compoment';
import SkillCard from '../../compoment/SkillCard';
import { SkillProgressBar } from '../../compoment/SkillProgressBar';
import clsx from 'clsx';
import { SKILLS } from '../../static/constant/data/skillProgresion';

interface ExperienceProps {}

const Skill: FunctionComponent<ExperienceProps> = () => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-start w-full min-h-screen',
        'bg-gradient-to-b from-[#1f2937] to-[#111827]' // 使用漸層背景
      )}
    >
      <NavigationBar />
      <section
        className={clsx(
          'mt-20 sm:mt-14 sm:mb-10 w-full max-w-7xl mx-auto',
          'backdrop-blur-md bg-white/5 rounded-lg p-8 shadow-xl'
        )}
      >
        <div className="flex-1 bg-slate-600 p-4 flex flex-col justify-between gap-4 rounded-md">
          <h2 className="text-lg font-semibold mb-4 text-white">
            Technical Skills
          </h2>
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

        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-600 p-6 rounded-md">
          <h2 className="col-span-full text-lg font-semibold mb-4 text-white">
            Professional Skills
          </h2>
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
