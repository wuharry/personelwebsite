import React, { useState } from "react";
import "./detail.module.scss";
import day4 from "../../assets/day4.png";

const FlexPanel: React.FC = () => {
  const [imgshader, setimgshader] = useState(false);
  function MouseEnterHandler() {
    setimgshader(true);
  }
  function MouseLeaveHandler() {
    setimgshader(false);
  }
  return (
    <div className={`wrap`}>
      <div className={`box`}>
        <div className={`title`}></div>
        <h1> FLEX PANEL</h1>
        <p>2022/1/2</p>
        <section className={`content`}>
          <div
            style={{ width: "350px" }}
            onMouseEnter={MouseEnterHandler}
            onMouseLeave={MouseLeaveHandler}
            className={imgshader ? `shaderin` : `shaderouut`}
          >
            <a href="https://wuharry.github.io/day4/">
              <img src={day4} alt="" className={`tileimg`}></img>
            </a>
          </div>
          <h2>效果講解:</h2>
          <p>點擊圖片放大相關區域</p>
          <p>
            FLEX PANEL， 本作品較於著重在CSS的部分，
            用flex去排版網頁，並在class選擇器上的結構也稍微複雜一點，
            用transform去呈現網頁動畫的效果，同時搭配JavaScript去做事件觸發
            ，來重新選染網頁。
          </p>
          <a href="https://wuharry.github.io/day4/">點我前往</a>
        </section>
      </div>
    </div>
  );
};
export { FlexPanel };
