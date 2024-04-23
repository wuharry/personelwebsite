import React from "react";
import headimg from "../../assets/head.jpg";
import { WorkList } from "../../compoment/WorkList";
import { WORKS } from "../works";
import { Button, NavigationBar } from "../../compoment";

const HomePage: React.FC = () => {
  const clickHandler = () => {
    console.log("click");
  };
  return (
    <div className="flex bg-slate-700 flex-col items-center justify-center w-full h-full">
      <div>
        <NavigationBar />
      </div>

      <section className=" mt-14 mb-10">
        <img src={headimg} alt="" className="rounded-full w-32 h-32 mx-auto" />
        <h2 className="text-2xl font-semibold mt-4">吳浩維</h2>
        <ul className="flex flex-wrap justify-center mt-4">
          <li className="px-4 py-2 rounded-md bg-blue-100 text-gray-700">
            前端工程師
          </li>
        </ul>
        <Button className="" type="button" onClickEvent={clickHandler}>
          button
        </Button>
        <p className="text-gray-500 mt-4">
          熱衷學習新的技術，不放棄任何自我成長的機會，對設計網站有極大的熱忱，樂於與他人合作
        </p>
        <p className="text-gray-500 mt-2">來自南投縣的前端工程師</p>
        <p className="text-gray-500 mt-2">聯絡方式: whw880218we@gmail.com</p>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">作品集</h2>
          <a href="/work" className="text-blue-500 underline">
            到work頁面瀏覽
          </a>
        </div>
        <WorkList dataSource={WORKS} />
      </section>
    </div>
  );
};

export { HomePage };
