import { useEffect, useRef, useState, type FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next'; // 引入 i18n
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

import SkillCard from '../../components/SkillCard';
import { SkillProgressBar } from '../../components/SkillProgressBar';
import { SKILLS } from '../../static/constant/data/skillProgresion';

interface SkillProps {}

const Skill: FunctionComponent<SkillProps> = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation(); // 取得 t 函式

  // 將原本寫在外部的常數移入元件內，並利用 t 函式與 returnObjects 動態取得陣列
  const skillCategories = [
    {
      title: t('skill.categories.frontend.title'),
      skills: t('skill.categories.frontend.items', {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t('skill.categories.tools.title'),
      skills: t('skill.categories.tools.items', {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t('skill.categories.soft.title'),
      skills: t('skill.categories.soft.items', {
        returnObjects: true,
      }) as string[],
    },
  ];

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
          {t('skill.sectionTitle')}
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
            {t('skill.proficiency')}
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
