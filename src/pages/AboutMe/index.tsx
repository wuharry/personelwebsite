/** @format */

import { FunctionComponent } from "react";
import { Button, NavigationBar, HeaderIcon } from "../../compoment";
import clsx from "clsx";
import headimg from "../../assets/head.jpg";

interface AboutMeProps {}

const AboutMe: FunctionComponent<AboutMeProps> = () => {
  return (
    <div className="flex bg-slate-700 flex-col items-center justify-center w-full h-full">
      <div>
        <NavigationBar />
      </div>
      <div className={clsx(`w-full flex justify-around items-center`)}>
        <HeaderIcon />
        <section className="mt-14 mb-10 flex justify-between">
          <div>
            <h1 className={clsx(`text-white text-4xl font-bold mx-0 my-1`)}>
              我是 吳浩維
            </h1>
            <h3 className={clsx(`text-white text-3xl font-medium `)}>
              我是一名前端工程師
            </h3>

            <div className={clsx(`mt-4`)}>
              <h2 className="text-gray-300 text-2xl font-medium mt-4">
                簡介：
              </h2>
              <p className="text-gray-300 mt-4">
                畢業於勤益科技大學資訊工程系。在校期間，我學習了 HTML、CSS
                等前端基礎知識，了解網頁結構和美化的撰寫方式。
              </p>
              <h2 className="text-gray-300 text-2xl font-medium mt-4">
                學習與成長：
              </h2>
              <p className="text-gray-300 mt-4">
                我熱衷於學習和交流，積極與同學探討問題，尋求解決方案，並解決問題，這很好的鍛煉了自己的溝通能力和團隊合作能力，也讓我養成了終身學習的習慣。
              </p>
              <p className="text-gray-300 mt-4">
                即使畢業後我也在持續精進前端技能，深入研究 JavaScript、React.js
                等框架和庫，並創作了仿 IG 頁面、個人網站
              </p>

              <h2 className="text-gray-300 text-2xl font-medium mt-4">
                工作經驗：
              </h2>
              <p className="text-gray-300 mt-4">
                曾在必礦科技擔任過一年的前端工程師，積累了一線開發經驗。
              </p>
              <p className="text-gray-300 mt-4">
                在工作中，我遇到問題時會積極尋求解決方案，並不斷學習新知識和技能。不斷學習新知識和技能，以提升工作效率和質量。
              </p>
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
      <div
        className={clsx(
          `flex justify-start items-center relative right-[24.5rem]`
        )}
      >
        {/* <Button
              className={clsx(
                `${
                  animetion
                    ? `animate-fade animate-once animate-delay-[1ms] animate-ease-in`
                    : ``
                }`
              )}
              type=""
              onClickEvent={handleClick}
            >
              關於我
            </Button> */}
      </div>
    </div>
  );
};

export default AboutMe;
