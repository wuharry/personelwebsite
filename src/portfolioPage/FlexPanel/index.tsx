import React, { useState } from "react";
import day4 from "../../assets/day4.png";

const FlexPanel: React.FC = () => {
  const [imgshader, setImgshader] = useState(false);

  function mouseEnterHandler() {
    setImgshader(true);
  }

  function mouseLeaveHandler() {
    setImgshader(false);
  }

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-2xl w-full">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">FlexPanel</h1>
            <p className="text-gray-500 text-sm">2022/1/2</p>
          </div>

          <div className="mt-6">
            <div className="relative">
              <a href="https://wuharry.github.io/day4/" target="_blank">
                <img
                  src={day4}
                  alt=""
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </a>
              {imgshader && (
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
              )}
            </div>

            <h2 className="mt-4 text-xl font-bold">效果講解:</h2>
            <p className="mt-2 text-gray-700">點擊圖片放大相關區域</p>
            <p className="mt-2 text-gray-700">
              Flex Panel，本作品較於著重在 CSS 的部分， 用 flex 去排版網頁，並在
              class 選擇器上的結構也稍微複雜一點， 用 transform
              去呈現網頁動畫的效果，同時搭配 JavaScript 去做事件觸發，
              來重新渲染網頁。
            </p>
            <a
              href="https://wuharry.github.io/day4/"
              target="_blank"
              className="mt-4 text-blue-500 underline"
            >
              點我前往
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FlexPanel };
