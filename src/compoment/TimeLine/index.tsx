/** @format */

import { FunctionComponent, useEffect, useState } from 'react';
import { JOBEXPERIENCEOBJ } from '../../types';
import clsx from 'clsx';
import JobExperience from '../JobExperienceCard';

interface TimeLineProps {}

const EXPERIENCELIST: JOBEXPERIENCEOBJ[] = [
  {
    companyName: '英業達Inventec',
    jobTitle: 'MES Frontend Engineer',
    time: '2022/10 - 2023/05',
    projectName: '工廠生產線站台系統',
    description: [
      '新站台後端功能的開發',
      '維護舊站台功能,添加輸入防呆機制以防人為輸入錯誤',
      '協助站台資料錯誤的除錯',
    ],
  },
  {
    companyName: 'PGTalk必礦科技',
    jobTitle: 'Frontend Engineer',
    time: '2023/05 - now',
    projectName: '亞通兌點後台',
    description: [
      '符合PM的需求以及SA文件去開發新的功能跟頁面',
      '根據PM需求開發出客製化的時間選擇器',
      '將重複性高的部分做成通用元件,以便簡化網頁',
      'refector:移除不必要的react優化',
      'refector:移除不符合react寫法上的程式',
      'refector:將資料處理的部分改成以hook的方式處理',
      '與團隊人員討論和code review來達成高品質的開發',
    ],
  },
];
const TimeLine: FunctionComponent<TimeLineProps> = () => {
  const [animetion, setAnimetion] = useState(false);
  useEffect(() => {
    setAnimetion(true);
    return () => {
      // setTimeout(() => setAnimetion(false), 7000);
    };
  }, []);
  return (
    <div className="border-l-4 border-gray-300 ml-3 mt-3 py-10 space-y-14 w-4/5">
      <div
        className="relative 
        justify-between w-full z-10"
      >
        {EXPERIENCELIST.map((experience, index) => (
          <div
            className={clsx(`flex justify-between items-center p-6`)}
            key={`${experience.companyName}-${experience.time}-${index}`}
          >
            <div
              className={clsx(
                `absolute border-2 border-white bg-blue-300 top-[${
                  index + 1
                }8rem] -left-[0.8rem] h-6 w-6 rounded-full
                `
              )}
              style={{
                top: `${(index + 1) * 12}rem`,
                left: '-0.8rem',
                animationDelay: `${index * 1.5}s`,
              }}
            ></div>
            <JobExperience jobexperience={experience} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
