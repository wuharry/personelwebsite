/** @format */

import { FunctionComponent } from 'react';
import { NavigationBar } from '../../compoment';
import ProjectCard from '../../compoment/ProjectCard';
import clsx from 'clsx';
import { Project } from '../../compoment/ProjectCard/type';
import { day1, day2, day3, day4, day5 } from '../../assets';

const PROJECT_LIST: Project[] = [
  {
    label: 'Drum Kit',
    link: 'https://wuharry.github.io/day1/',
    description: 'js 的 DOM 練習,當按下按鍵的時候',
    image: day1,
    className: '',
    // 暫時添加mt來對齊
  },
  {
    label: 'JS+CSS clock',
    link: 'https://wuharry.github.io/day2/',
    description: '搭配JS跟CSS做成的動態時鐘',
    image: day2,
    className: '',
  },
  {
    label: 'CSS Variables',
    link: 'https://wuharry.github.io/day3/',
    description: '製作一個可控制圖片邊框、模糊與黑白的濾鏡效果',
    image: day3,
    className: '',
  },
  {
    label: ' Flex Panel Gallery',
    link: 'https://wuharry.github.io/day4/',
    description: '製作一個動畫展開圖片的效果',
    image: day4,
    className: '',
  },
  {
    label: 'Type Ahead',
    link: 'https://wuharry.github.io/day5/',
    description: '製作一個即時顯示結果的搜尋框',
    image: day5,
    className: '',
  },
];

const WorkPage: FunctionComponent = () => {
  return (
    <div
      className={clsx(
        'flex flex-col items-start justify-start',
        'w-full min-h-screen',
        'bg-gradient-to-b from-[#1f2937] to-[#111827]'
      )}
    >
      <NavigationBar />
      <section
        className={clsx(
          'w-full max-w-7xl mx-auto',
          'mt-20 sm:mt-14 mb-10 px-4',
          'backdrop-blur-md bg-white/5 rounded-lg p-8 shadow-xl',
          'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8',
          'place-items-center sm:place-items-start'
        )}
      >
        {PROJECT_LIST.map((project) => (
          <>
            <ProjectCard
              key={`${project.label}-${project.link}`}
              className={project.className}
              label={project.label}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          </>
        ))}
      </section>
    </div>
  );
};

export default WorkPage;
