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
    className: 'mt-10',
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
    <div className="flex bg-slate-700 flex-col items-start justify-start w-full h-full min-h-screen">
      <NavigationBar />
      <section
        className={clsx(
          'flex flex-wrap gap-8 w-full mt-16 mb-10 space-y-10 px-4'
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
