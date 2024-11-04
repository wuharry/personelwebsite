/** @format */
import React, { useEffect, useState } from 'react';
import { Button, NavigationBar, IconButton } from '../../compoment';
import { Icon104, CakeResume } from '../../static/constant/svg';
import clsx from 'clsx';

const Intro: React.FC = () => {
  const [animetion, setAnimetion] = useState(false);
  const linkHandler = (link: string) => {
    window.open(link, '_blank');
  };
  const handleClick = () => {};
  const ICONLIST = [
    {
      name: 'GitHub',
      SVGElement: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
            ></path>
          </svg>
        </>
      ),
      link: 'https://github.com/wuharry',
    },
    {
      name: 'Gmail',
      SVGElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
        >
          <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path>
        </svg>
      ),
      link: 'mailto:whw880218we@gmail.com',
    },
    {
      name: 'Linkedin',
      SVGElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
        >
          <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
        </svg>
      ),
      link: 'https://www.linkedin.com/feed/',
    },
    {
      name: 'CakeResume',
      SVGElement: <CakeResume></CakeResume>,
      link: 'https://www.cakeresume.com/s--CVgjtgYwBTaPbAWMZfUNhw--/whw880218cool',
    },
    {
      name: 'Telegram',
      SVGElement: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
        >
          <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
        </svg>
      ),
      link: 'https://web.telegram.org/a/',
    },
    {
      name: '104Bank',
      SVGElement: <Icon104></Icon104>,
      link: 'https://pda.104.com.tw/profile/share/8sw2sYtjxtWwHu7cKUoGcgPZdo9ocnmu',
    },
  ];

  useEffect(() => {
    setAnimetion(true);
    return () => {
      setTimeout(() => setAnimetion(false), 7000);
    };
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen
        bg-gradient-to-b from-[#1f2937] to-[#111827]"
    >
      <NavigationBar />

      <section
        className="mt-20 sm:mt-14 sm:mb-10 sm:flex sm:justify-evenly flex flex-col min-h-screen
          backdrop-blur-md bg-white/5 rounded-lg p-8 shadow-xl w-full max-w-7xl mx-auto"
      >
        <div className={clsx('flex justify-start flex-col sm:items-start')}>
          {/* Hello 標題使用漸變色 */}
          <h3
            className={clsx(
              `text-3xl font-medium bg-gradient-to-r from-[#0ef] to-[#2563eb] 
                 bg-clip-text text-transparent`,
              animetion ? `animate-fade-down animate-once animate-ease-in` : ``
            )}
          >
            Hello 你好
          </h3>

          {/* 名字使用白色並加大字體 */}
          <h1
            className={clsx(
              `text-white text-5xl font-bold mx-0 my-3
                 drop-shadow-lg`,
              animetion ? `animate-fade-right animate-once animate-ease-in` : ``
            )}
          >
            我是 吳浩維
          </h1>

          {/* 職稱使用半透明白色 */}
          <h3
            className={clsx(
              `text-white/90 text-3xl font-medium`,
              animetion ? `animate-fade-up animate-once animate-ease-in` : ``
            )}
          >
            我是一名前端工程師
          </h3>

          {/* 內容文字使用更柔和的顏色 */}
          <div
            className={clsx(
              `mt-8 space-y-4`,
              animetion ? `animate-fade-left animate-once animate-ease-in` : ``
            )}
          >
            <p className="text-[#94a3b8] font-medium text-lg">關於我：</p>
            <p className="text-[#cbd5e1] leading-relaxed">
              充滿熱情的前端工程師，擁有 1 年以上前端開發經驗，尋求新的挑戰。
            </p>
            <p className="text-[#cbd5e1] leading-relaxed">
              熟悉 JavaScript、React 和 Linux 系統。
              有解決問題的能力，對程式有高品質要求，並善於與他人溝通,合作。
            </p>
            <p className="text-[#cbd5e1] leading-relaxed">
              渴望學習和成長，始終追求卓越。
            </p>
            <p className="text-[#94a3b8] font-medium text-lg mt-6">
              聯絡方式：
            </p>
          </div>

          {/* 社交媒體圖標區域 */}
          <div className="mt-6">
            {ICONLIST.map((icon, index) => (
              <IconButton
                onClickEvent={() => linkHandler(icon.link)}
                key={`${icon.name}-${index}`}
                classname={clsx(
                  `hover:scale-110 transition-transform duration-300
                     bg-white/10 hover:bg-white/20 rounded-full p-2 mx-2
                     backdrop-blur-sm`,
                  animetion
                    ? `animate-fade animate-delay-[1s] animate-ease-in`
                    : ``
                )}
              >
                {icon.SVGElement}
              </IconButton>
            ))}

            {/* 關於我按鈕 */}
            <div
              className={clsx('sm:flex sm:justify-start sm:items-center mt-8')}
            >
              <Button
                className={clsx(
                  `bg-gradient-to-r from-[#0ef] to-[#2563eb]
                     hover:opacity-90 transition-opacity duration-300
                     text-white font-medium px-6 py-3 rounded-lg
                     shadow-lg hover:shadow-xl`,
                  animetion
                    ? 'animate-fade animate-delay-[1ms] animate-ease-in'
                    : ``
                )}
                type=""
                onClickEvent={handleClick}
              >
                關於我
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
