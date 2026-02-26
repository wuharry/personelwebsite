/** @format */

import { useEffect, useRef, useState } from 'react';
import { type FunctionComponent } from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

import SkillCard from '../../components/SkillCard';
import { SkillProgressBar } from '../../components/SkillProgressBar';
import { SKILLS } from '../../static/constant/data/skillProgresion';

interface SkillProps {}

const skillCategories = [
  {
    title: '前端開發',
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
    ],
  },
  {
    title: '工具與其他',
    skills: [
      'Git',
      'Vite',
      'Webpack',
      'Docker',
      'REST API',
      'Node.js',
      'Linux',
    ],
  },
  {
    title: '軟技能',
    skills: ['問題解決', '團隊合作', 'Code Review', '持續學習', '品質意識'],
  },
];

const Skill: FunctionComponent<SkillProps> = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative mx-auto max-w-5xl px-6 py-24"
    >
      {/* 標題 */}
      <div className="mb-12 flex items-center gap-4">
        <h2 className="text-primary shrink-0 text-sm font-semibold tracking-widest uppercase">
          技能
        </h2>
        <Separator className="bg-border/60" />
      </div>

      <div
        className={`space-y-16 transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {/* 技能分類 Badge */}
        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="group border-border bg-card/50 hover:border-primary/30 hover:bg-card/80 rounded-xl border p-6 transition-all duration-300"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-muted-foreground group-hover:text-primary mb-5 text-sm font-semibold tracking-widest uppercase transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="border-border bg-secondary/80 text-secondary-foreground group-hover:border-primary/20 border font-mono text-xs transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 熟練度進度條 */}
        <div className="border-border bg-card/50 rounded-xl border p-8">
          <h3 className="text-muted-foreground mb-8 text-sm font-semibold tracking-widest uppercase">
            熟練度
          </h3>
          <div className="space-y-5">
            {SKILLS.map((skill) => (
              <SkillProgressBar
                key={skill.label}
                label={skill.label}
                percentage={skill.percentage}
                className={skill.className}
                progressColor={skill.progressColor}
                size={skill.size}
              />
            ))}
          </div>
        </div>

        {/* 技能圓環卡片 */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {SKILLS.map((skill) => (
            <SkillCard
              key={skill.label}
              label={skill.label}
              percentage={skill.percentage}
              className={skill.className}
              progressColor={skill.progressColor}
              size={skill.size}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
