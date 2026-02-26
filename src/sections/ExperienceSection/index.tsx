import { ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const EXPERIENCES = t('experience.items', { returnObjects: true }) as {
    period: string;
    title: string;
    company: string;
    descriptions: string[];
    tags: string[];
    link: string;
  }[];

  return (
    <section
      id="experience"
      ref={ref}
      className="relative mx-auto max-w-5xl px-6 py-24"
    >
      <div className="mb-12 flex items-center gap-4">
        <h2 className="text-primary shrink-0 text-sm font-semibold tracking-widest uppercase">
          {t('experience.sectionTitle')}
        </h2>
        <div className="bg-border/60 h-px flex-1" />
      </div>

      <div
        className={`space-y-4 transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {EXPERIENCES.map((exp, idx) => (
          <a
            key={`${exp}-${idx}`}
            href={exp.link}
            className="group border-border/0 hover:border-border hover:bg-card/60 block rounded-xl border p-6 transition-all duration-300"
          >
            <div className="grid gap-4 md:grid-cols-[180px_1fr]">
              <div className="pt-1">
                <span className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
                  {exp.period}
                </span>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <h3 className="text-foreground group-hover:text-primary font-semibold transition-colors">
                    {exp.title}
                  </h3>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground text-sm">
                    {exp.company}
                  </span>
                  <ExternalLink className="text-muted-foreground group-hover:text-primary ml-1 h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </div>
                <ul className="text-muted-foreground mb-4 space-y-1 text-sm leading-relaxed">
                  {exp.descriptions.map((desc, index) => (
                    <li key={`${exp.title}-${index}`} className="flex gap-2">
                      <span className="text-primary mt-1.5 h-1 w-1 shrink-0 rounded-full bg-current" />
                      {desc}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="border-primary/20 bg-primary/10 text-primary border font-mono text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
