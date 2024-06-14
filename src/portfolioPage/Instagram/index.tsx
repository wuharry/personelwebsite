import React from "react";
import day5 from "../../assets/day5.png";
import { useState } from "react";

interface InstagramProps {
  // 這裡可以定義額外的 props
}

const Instagram: React.FC<InstagramProps> = () => {
  const [imgshader, setImgshader] = useState(false);

  function mouseEnterHandler(e: React.MouseEvent<HTMLDivElement>) {
    setImgshader(true);
  }

  function mouseLeaveHandler(e: React.MouseEvent<HTMLDivElement>) {
    setImgshader(false);
  }

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-2xl w-full">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Instagram</h1>
            <p className="text-gray-500 text-sm">2022/1/2</p>
          </div>

          <div className="mt-6">
            <div className="relative">
              <a
                href="https://62b2624dfafbbb095f5b5e9c--dazzling-rugelach-a2ba75.netlify.app/"
                target="_blank"
              >
                <img
                  src={day5}
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
              模仿IG的頁面，使用 Tailwind 做美化。
            </p>
            <a
              href="https://62b2624dfafbbb095f5b5e9c--dazzling-rugelach-a2ba75.netlify.app/"
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

export { Instagram };
