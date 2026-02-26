/** @format */

import clsx from 'clsx';
import { type FunctionComponent } from 'react';

import { NavigationBar } from '../../components';
import SkillCard from '../../components/SkillCard';
import { SkillProgressBar } from '../../components/SkillProgressBar';
import { SKILLS } from '../../static/constant/data/skillProgresion';

interface ExperienceProps {}

const Skill: FunctionComponent<ExperienceProps> = () => {
  return (
    <section
      className={clsx(
        'mx-auto mt-20 w-full max-w-7xl sm:mt-14 sm:mb-10',
        'rounded-lg bg-white/5 p-8 shadow-xl backdrop-blur-md',
      )}
    >
      <div className="flex flex-1 flex-col justify-between gap-4 rounded-md bg-slate-600 p-4">
        <h2 className="mb-4 text-lg font-semibold text-white">
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

      <div className="grid flex-1 grid-cols-2 gap-4 rounded-md bg-slate-600 p-6 md:grid-cols-4">
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
  );
};

export default Skill;
