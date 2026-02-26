import React, { useState } from 'react';

import { day1 } from '@/assets';

export const DrumKit: React.FC = () => {
  const [imgshader, setImgshader] = useState(false);

  function mouseEnterHandler() {
    setImgshader(true);
  }

  function mouseLeaveHandler() {
    setImgshader(false);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">DrumKit</h1>
            <p className="text-sm text-gray-500">2022/1/2</p>
          </div>

          <div className="mt-6">
            <div className="relative">
              <a
                href="https://wuharry.github.io/day1/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={day1}
                  alt=""
                  className="h-auto w-full rounded-lg shadow-md"
                />
              </a>
              {imgshader && (
                <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>
              )}
            </div>

            <h2 className="mt-4 text-xl font-bold">效果講解:</h2>
            <p className="mt-2 text-gray-700">
              A,S,D,F,G,H,J,K,L分別對應不同的爵士鼓樂器，按下按鍵來演奏吧!!
            </p>
            <br></br>
            <h2 className="mt-4 text-xl font-bold">程式講解:</h2>
            <p className="mt-2 text-gray-700">
              當按下指定按鍵時，播放音效同時會渲染畫面
              在HTML的部分，先設定好鍵盤Key值，然後藉由當JavaScript事件觸發
              去讓JavaScript獲取相對應的鍵盤的Key值，
              當按下按鍵時會同時觸發兩個事件，
              一個是當按下按鍵時，事件觸發時，撥放音樂，重複撥延遲0秒後回撥放起點
              第二個是當按下按鍵時，讓JavaScript做DOM操作，用classList 元素添加
              class屬性 去改變畫面效果。
            </p>
            <a
              href="https://wuharry.github.io/day1/"
              target="_blank"
              className="mt-4 text-blue-500 underline"
              rel="noreferrer"
            >
              點我前往
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
