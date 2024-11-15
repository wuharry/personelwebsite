/** @format */

import { FunctionComponent, useEffect, useState } from 'react';
import { NavigationBar, HeaderIcon } from '../../compoment';
import clsx from 'clsx';
interface AboutMeProps {}

const AboutMe: FunctionComponent<AboutMeProps> = () => {
  const [animetion, setAnimetion] = useState(false);
  useEffect(() => {
    setAnimetion(true);
    return () => {
      setTimeout(() => setAnimetion(false), 7000);
    };
  }, []);
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center',
        'w-full min-h-screen',
        'bg-gradient-to-b from-[#1f2937] to-[#111827]'
      )}
    >
      <NavigationBar />
      <div
        className={clsx(
          'w-full sm:flex flex-col sm:flex-row sm:justify-evenly items-center gap-1',
          'mt-20 sm:mt-14 backdrop-blur-md bg-white/5 rounded-lg p-8 shadow-xl',
          'max-w-7xl mx-auto'
        )}
      >
        <div className={clsx('sm:mt-0')}>
          <HeaderIcon />
        </div>

        <section className={clsx('flex flex-col justify-between')}>
          <div className={clsx(`${animetion ? `animate-fade-down` : ``}`)}>
            <h1 className={clsx(`text-white text-4xl font-bold mx-0 my-1`)}>
              我是 吳浩維
            </h1>
            <h3 className={clsx(`text-white text-3xl font-medium `)}>
              我是一名前端工程師
            </h3>
          </div>
          <div className={clsx(`mt-4`)}>
            <div className={clsx(`${animetion ? `animate-fade-right` : ``}`)}>
              <h2 className="text-gray-300 text-2xl font-medium mt-4">
                簡介：
              </h2>
              <p className="text-gray-300 mt-4">
                畢業於勤益科技大學資訊工程系。在校期間，我學習了 HTML、CSS
                等前端基礎知識，了解網頁結構和美化的撰寫方式。
              </p>
            </div>
            <div
              className={clsx(
                `${animetion ? `animate-fade-right animate-delay-[1ms]` : ``}`
              )}
            >
              <h2 className="text-gray-300 text-2xl font-medium mt-4">
                學習與成長：
              </h2>
              <p className="text-gray-300 mt-4">
                我熱衷於學習和交流，積極與同學探討問題，尋求解決方案，並解決問題。
              </p>
              <p className="text-gray-300 mt-4">
                這很好的鍛煉了自己的溝通能力和團隊合作能力，也讓我養成了終身學習的習慣。
              </p>

              <p className="text-gray-300 mt-4">
                即使畢業後我也在持續精進前端技能，深入研究 JavaScript、React.js
                等框架和庫，並創作了仿 IG 頁面、個人網站
              </p>
            </div>
            <div
              className={clsx(
                `${animetion ? `animate-fade-right animate-delay-[2ms]` : ``}`
              )}
            >
              <h2 className="text-gray-300 text-2xl font-medium mt-4">
                工作經驗：
              </h2>
              <p className="text-gray-300 mt-4">
                曾在必礦科技擔任過一年的前端工程師，積累了一線開發經驗。
              </p>
              <p className="text-gray-300 mt-4">
                在工作中，我遇到問題時會積極尋求解決方案，並不斷學習新知識和技能。以提升工作效率和質量。
              </p>
            </div>
            <div
              className={clsx(
                `${animetion ? `animate-fade-right animate-delay-[3ms]` : ``}`
              )}
            >
              <h2 className="text-gray-300 text-2xl font-medium mt-4">
                優勢：
              </h2>
              <ul className="list-disc text-white">
                <li className="ml-8">
                  <p className="text-gray-300 mt-4">
                    積極主動：熱情投入工作，積極承擔責任，遇到問題不逃避，主動尋求解決方案。
                  </p>
                </li>
                <li className="ml-8">
                  <p className="text-gray-300 mt-4">
                    學習能力強：善於學習新知識和技能，保持終身學習的態度，不斷提升自身能力。
                  </p>
                </li>
                <li className="ml-8">
                  <p className="text-gray-300 mt-4">
                    善於溝通協作：溝通能力強，團隊合作精神佳，能夠與同事高效協作，完成工作任務。
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
