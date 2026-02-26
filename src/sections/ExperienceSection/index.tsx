import { ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    period: '2023/05 — 2024/09',
    title: 'Frontend Engineer',
    company: 'PGTalk 必礦科技',
    description:
      '負責亞通兌點後台的功能開發，根據 PM 需求開發客製化時間選擇器，將高重複性元件抽象化為通用元件。主導多項 refactor：移除不必要的 React 優化、改以 custom hook 處理資料邏輯，並透過 code review 維持團隊開發品質。',
    tags: ['React', 'TypeScript', 'Custom Hooks', 'Code Review'],
    link: '#',
  },
  {
    period: '2022/10 — 2023/05',
    title: 'MES Frontend Engineer',
    company: '英業達 Inventec',
    description:
      '參與工廠生產線站台系統開發，負責新站台 .NET 後端 endpoint 開發、維護舊站台並添加輸入防呆機制以防人為錯誤，同時協助站台資料錯誤的除錯工作。',
    tags: ['.NET', 'Vue', 'MES', 'Debug'],
    link: '#',
  },
];

const ExperienceSection = () => {
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

  return (
    <section
      id="experience"
      ref={ref}
      className="relative mx-auto max-w-5xl px-6 py-24"
    >
      <div className="mb-12 flex items-center gap-4">
        <h2 className="text-primary shrink-0 text-sm font-semibold tracking-widest uppercase">
          經歷
        </h2>
        <div className="bg-border/60 h-px flex-1" />
      </div>

      <div
        className={`space-y-4 transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {experiences.map((exp, idx) => (
          <a
            key={idx}
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
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {exp.description}
                </p>
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
