/** @format */

import clsx from 'clsx';
import { type FunctionComponent, useEffect, useRef, useState } from 'react';

import { day1, day2, day3, day4, day5 } from '../../assets';
import ProjectCard from '../../components/ProjectCard';
import {
  FILTER_ALL,
  type Category,
  type Project,
  type TechCategory,
} from '../../components/ProjectCard/type';

import { useTranslation } from 'react-i18next';

const BASE_PROJECT_LIST: Project[] = [
  {
    title: 'Drum Kit',
    description: 'JS 的 DOM 練習，當按下按鍵的時候觸發對應鼓聲',
    image: day1,
    category: ['JavaScript'],
    link: 'https://wuharry.github.io/day1/',
  },
  {
    title: 'JS + CSS Clock',
    description: '搭配 JS 跟 CSS 做成的動態時鐘',
    image: day2,
    category: ['JavaScript', 'CSS'],
    link: 'https://wuharry.github.io/day2/',
  },
  {
    title: 'CSS Variables',
    description: '製作一個可控制圖片邊框、模糊與黑白的濾鏡效果',
    image: day3,
    category: ['CSS'],
    link: 'https://wuharry.github.io/day3/',
  },
  {
    title: 'Flex Panel Gallery',
    description: '製作一個動畫展開圖片的效果',
    image: day4,
    category: ['CSS', 'JavaScript'],
    link: 'https://wuharry.github.io/day4/',
  },
  {
    title: 'Type Ahead',
    description: '製作一個即時顯示結果的搜尋框',
    image: day5,
    category: ['JavaScript'],
    link: 'https://wuharry.github.io/day5/',
  },
];

const ProjectsContent: FunctionComponent = () => {
  const { t } = useTranslation();

  const [activeCategory, setActiveCategory] = useState<Category>(FILTER_ALL);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const CATEGORIES: Category[] = [
    FILTER_ALL,
    'JavaScript',
    'CSS',
    'React',
    'Next.js',
  ];
  const PROJECT_LIST: Project[] = (
    t('project.items', { returnObjects: true }) as {
      title: string;
      description: string;
    }[]
  ).map((item, index) => ({
    ...BASE_PROJECT_LIST[index],
    title: item.title,
    description: item.description,
  }));

  const filteredProjects =
    activeCategory === FILTER_ALL
      ? PROJECT_LIST
      : PROJECT_LIST.filter((p) =>
          p.category.includes(activeCategory as TechCategory),
        );
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
      id="project"
      ref={ref}
      className="relative mx-auto max-w-5xl px-6 py-24"
    >
      <div className="mb-12 flex items-center gap-4">
        <h2 className="text-primary shrink-0 text-sm font-semibold tracking-widest uppercase">
          {t('project.sectionTitle')}
        </h2>
        <div className="bg-border/60 h-px flex-1" />
      </div>

      <div
        className={clsx(
          'transition-all duration-700',
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
        )}
      >
        {/* 標題與描述區塊 */}
        <div className="mb-10">
          <h3 className="text-foreground mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t('project.sectionTitle')}
          </h3>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            {t('project.sectionDescription')}
          </p>
        </div>

        {/* 篩選按鈕 (Filter tabs) */}
        <div className="mb-10 flex flex-wrap gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={clsx(
                'rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-primary/20 shadow-md'
                  : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground',
              )}
            >
              {category === FILTER_ALL ? t('project.filterAll') : category}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${project.title}-${project.link}`}
                project={project}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="border-border flex flex-col items-center justify-center rounded-xl border border-dashed py-20">
            <p className="text-muted-foreground text-lg">
              {t('project.noProjects')}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsContent;
