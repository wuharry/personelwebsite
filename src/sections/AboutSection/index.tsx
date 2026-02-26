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
          'grid gap-12 transition-all duration-700 md:grid-cols-[1fr_280px]',
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        )}
      >
        {/* 頭像 - 個人化元素 */}
        {/* <div className="flex justify-center md:justify-start">
          <HeaderIcon />
        </div> */}

        <div className="text-muted-foreground space-y-6 text-sm leading-relaxed">
          <div>
            <h3 className="text-foreground mb-2 font-medium">簡介</h3>
            <p>
              我是Harvey,是Frontend enginner,擁有近 3
              年前端開發經驗，專注於打造可維護且具擴展性的 React
              生態系與跨平台應用開發。
            </p>
          </div>
          <div>
            <h3 className="text-foreground mb-2 font-medium">學習與成長</h3>
            <p>
              熟悉 React 與 JavaScript，並持續投入 TypeScript、React
              Native、React Query 等現代化開發模式。 在 Side Project
              中持續拓展後端與全端能力，使用 Hono 建構 Node.js API，並實作
              Next.js 應用、導入 Turborepo 進行 Monorepo 架構管理，同時具備 npm
              套件開發與發佈經驗。
            </p>
          </div>
          <div>
            <h3 className="text-foreground mb-2 font-medium">工作經驗</h3>
            <div className="space-y-4">
              <div>
                <p className="text-foreground text-sm font-medium">
                  華能平方 · 前端工程師
                </p>
                <ul className="mt-1 list-disc space-y-1 pl-4">
                  <li>主導內部 npm 套件開發與發佈，供團隊共用</li>
                  <li>
                    重構既有程式碼，修復 SonarQube 檢測問題，程式碼異味降低 40%
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-foreground text-sm font-medium">
                  必礦科技 · 前端工程師
                </p>
                <ul className="mt-1 list-disc space-y-1 pl-4">
                  <li>與設計師緊密協作，負責核心業務頁面的切版與功能開發</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-foreground mb-2 font-medium">優勢</h3>
            <ul className="list-disc space-y-1 pl-4">
              <li>重視程式碼品質，習慣在開發過程中自我審查與重構</li>
              <li>具備獨立排查問題的能力，能系統性地定位與修復 Bug</li>
              <li>
                保持批判性思維，評估技術方案時不盲從，注重實際場景的適用性
              </li>
              <li>持續關注前端生態趨勢，樂於嘗試並評估新技術的導入價值</li>
              <li>
                善於跨職能協作，能有效與設計師、後端工程師對齊需求與實作細節
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border-border bg-card/50 rounded-xl border p-6">
            <h3 className="text-muted-foreground mb-4 text-sm font-semibold tracking-widest uppercase">
              {'快速資訊'}
            </h3>
            <dl className="space-y-4">
              {[
                { label: '職稱', value: '前端工程師' },
                { label: '經驗', value: '2+ 年' },
                { label: '位置', value: '台灣' },
                { label: '專注', value: 'React / JavaScript' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start justify-between gap-4"
                >
                  <dt className="text-muted-foreground text-sm">
                    {item.label}
                  </dt>
                  <dd className="text-foreground text-right text-sm font-medium">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
