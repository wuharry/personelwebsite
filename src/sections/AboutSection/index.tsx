import clsx from 'clsx';
import { type FC, useEffect, useRef, useState } from 'react';

import { HeaderIcon } from '../../components'; // 保留你的頭像
// import { Separator } from '../ui/separator'; // 如果你有 shadcn

const AboutSection: FC = () => {
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
      id="about"
      ref={ref}
      className="relative mx-auto max-w-5xl px-6 py-24"
    >
      {/* Section title - v0 風格 */}
      <div className="mb-12 flex items-center gap-4">
        <h2 className="text-primary shrink-0 text-sm font-semibold tracking-widest uppercase">
          關於我
        </h2>
        <div className="bg-border/60 h-px flex-1" />
      </div>

      <div
        className={clsx(
          'grid gap-12 transition-all duration-700 md:grid-cols-[200px_1fr]',
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        )}
      >
        {/* 頭像 - 你的個人化元素 */}
        {/* <div className="flex justify-center md:justify-start">
          <HeaderIcon />
        </div> */}

        {/* 文字內容 - 你的原版文字，保留個人味 */}
        <div className="text-muted-foreground space-y-6 text-sm leading-relaxed">
          <div>
            <h3 className="text-foreground mb-2 font-medium">簡介</h3>
            <p>
              畢業於勤益科技大學資訊工程系。在校期間學習了 HTML、CSS
              等前端基礎知識。
            </p>
          </div>
          <div>
            <h3 className="text-foreground mb-2 font-medium">學習與成長</h3>
            <p>
              熱衷學習與交流，畢業後持續精進前端技能，深入研究
              JavaScript、React.js，並創作了仿 IG 頁面、個人網站等專案。
            </p>
          </div>
          <div>
            <h3 className="text-foreground mb-2 font-medium">工作經驗</h3>
            <p>
              曾在必礦科技擔任前端工程師，積累一線開發經驗，遇到問題積極尋求解決方案，持續學習新知識。
            </p>
          </div>
          <div>
            <h3 className="text-foreground mb-2 font-medium">優勢</h3>
            <ul className="list-disc space-y-1 pl-4">
              <li>積極主動，遇到問題不逃避，主動尋求解決方案</li>
              <li>學習能力強，保持終身學習的態度</li>
              <li>善於溝通協作，能與設計師、後端工程師緊密配合</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
