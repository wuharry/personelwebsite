import React, { useState } from 'react';

import { day3 } from '@/assets';
export const BlurPicture: React.FC = () => {
  const [imgshader, setImgshader] = useState(false);

  // function mouseEnterHandler() {
  //   setImgshader(true);
  // }

  // function mouseLeaveHandler() {
  //   setImgshader(false);
  // }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">BlurPicture</h1>
            <p className="text-sm text-gray-500">2022/1/2</p>
          </div>

          <div className="mt-6">
            <div className="relative">
              <a
                href="https://wuharry.github.io/day3/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={day3}
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
              可以調整邊框大小，並去修改模糊度的照片
            </p>
            <br></br>
            <h2 className="mt-4 text-xl font-bold">程式講解:</h2>
            <p className="mt-2 text-gray-700">
              本作品在 CSS 的部分有用到 CSS 變數來去做調整參數，
              並用選擇器去設定該圖可以變化/調整的部分， 藉由 JavaScript 去做 DOM
              操作，並把資料轉乘 nodelist， 藉由事件觸發時，去做渲染頁面的動作。
            </p>
            <a
              href="https://wuharry.github.io/day3/"
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
