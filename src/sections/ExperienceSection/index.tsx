import { ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { Badge } from '@/components/ui/badge';

const EXPERIENCES = [
  {
    period: '2025/02 — 2025/12',
    title: 'Frontend Engineer',
    company: '華能平方',
    projectName: '企業內外網與 UI 套件庫',
    descriptions: [
      '推動 JS 漸進式轉移至 TypeScript，建立型別邊界與 ESLint 規範，降低維護成本與執行風險。',
      '以 SonarQube 指標驅動程式碼重構，成功將技術債問題數由 3,011 降低至 1,400（減少 53%）。',
      '基於 shadcn/ui + Tailwind v4 打造企業級 UI 套件庫，並導入 Storybook 與 Vitest 建立測試文檔。',
      '設計 API Factory 與 Router Guard，建立前端架構防護欄，並優化 React State 管理解決非同步渲染 Bug。',
      '建置 CI/CD 自動化流程 (Jenkinsfile)，移除明碼環境變數入庫風險，提升部署安全性與透明度。',
    ],
    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'CI/CD',
      'SonarQube',
      'Storybook',
      'turborepo',
    ],
    link: '#',
  },
  {
    period: '2023/05 — 2024/09',
    title: 'Frontend Engineer',
    company: 'PGTalk 必礦科技',
    projectName: '亞通兌點平台後台',
    descriptions: [
      '使用 React.js / Next.js 負責亞通兌點後台與投資者平台的核心功能開發與維護。',
      '重構高耦合程式碼，將資料處理邏輯抽象為 Custom Hooks，並封裝高頻使用的 UI 為通用元件。',
      '整合 React Hook Form 與客製化時間選擇器，精準實現 PM 需求並提升表單驗證效能。',
      '優化code,移除在組件中宣告組件的寫法，減少不必要的重複宣告與渲染，提升整體效能與可維護性。',
    ],
    tags: ['Next.js', 'React', 'React Hook Form', 'Hooks', 'Redux'],
    link: '#',
  },
  {
    period: '2022/10 — 2023/04',
    title: 'MES Frontend Engineer',
    company: '英業達 Inventec',
    projectName: '工廠生產線站台系統',
    descriptions: [
      '參與生產線系統後端開發，負責 .NET 後端 API end point實作。',
      '維護舊有產線系統，導入前端輸入防呆機制，大幅降低人為操作錯誤率。',
      '負責跨部門溝通，釐清使用者需求並協助排查、修復站台的生產資料異常。',
    ],
    tags: ['.NET', 'Vue', 'JavaScript', 'MES'],
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
        {EXPERIENCES.map((exp, idx) => (
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
