import React from 'react';
import style from './detail.module.scss';

const WorkList = () => {
    return <div className={style.wrap}>
        <div className={style.box}>
            <div className={style.title}></div>
            <h1>Drum kit</h1>
            <p>2022/1/2</p>
            <section className={style.content}>
                <p>
                當按下指定按鍵時，播放音效同時會渲染畫面
                在HTML的部分，先設定好鍵盤Key值，然後藉由當JavaScript事件觸發
                去讓JavaScript獲取相對應的鍵盤的Key值，
                當按下按鍵時會同時觸發兩個事件，
                一個是當按下按鍵時，事件觸發時，撥放音樂，重複撥延遲0秒後回撥放起點
                第二個是當按下按鍵時，讓JavaScript做DOM操作，用classList 元素添加 class屬性
                去改變畫面效果。
                </p>
                {/* <a href='https://wuharry.github.io/day1/'>點我前往</a> */}
            </section>
        </div>

    </div>
}
export default WorkList;
