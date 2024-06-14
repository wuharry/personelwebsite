import React, { useState } from "react";
import day2 from "../../assets/day2.png";

const WebClock: React.FC = () => {
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
            <h1 className="text-xl font-bold">WebClock</h1>
            <p className="text-gray-500 text-sm">2022/1/2</p>
          </div>

          <div className="mt-6">
            <div className="relative">
              <a href="https://wuharry.github.io/day2/" target="_blank">
                <img
                  src={day2}
                  alt=""
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </a>
              {imgshader && (
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
              )}
            </div>

            <h2 className="mt-4 text-xl font-bold">效果講解:</h2>
            <p className="mt-2 text-gray-700">
              Tick Tok~Tick Tok~ is time for lunch
            </p>
            <br></br>
            <h2 className="mt-4 text-xl font-bold">程式講解:</h2>
            <p className="mt-2 text-gray-700">
              一個會自動計時的時鐘， 該作品比較核心的地方在於操作在CSS的部分，
              用now.Date()物件來獲取時間點，
              藉由JavaScript去選取時針，分針，秒針的物件
              然後去改變其樣式來去達成一個時鐘的效果
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { WebClock };
