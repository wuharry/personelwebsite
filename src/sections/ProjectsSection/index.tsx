/** @format */

import clsx from 'clsx';
import { type FunctionComponent } from 'react';

import { day1, day2, day3, day4, day5 } from '../../assets';
import { NavigationBar } from '../../components';
import ProjectCard from '../../components/ProjectCard';
import { type Project } from '../../components/ProjectCard/type';

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
        'min-h-screen w-full',
        'bg-linear-to-b from-[#1f2937] to-[#111827]',
      )}
    >
      <NavigationBar />
      <section
        className={clsx(
          'mx-auto w-full max-w-7xl',
          'mt-20 mb-10 px-4 sm:mt-14',
          'rounded-lg bg-white/5 p-8 shadow-xl backdrop-blur-md',
          'grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3',
          'place-items-center sm:place-items-start',
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
