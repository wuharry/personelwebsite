import React from 'react';
import style from './detail.module.scss';

const WorkList = () => {
    return <div className={style.wrap}>
        <div className={style.box}>
            <div className={style.title}></div>
            <h1>Clock</h1>
            <p>2022/1/2</p>
            <section className={style.content}>
                <p>
                一個會自動計時的時鐘，
                該作品比較核心的地方在於操作在CSS的部分，
                用now.Date()物件來獲取時間點，
                藉由JavaScript去選取時針，分針，秒針的物件
                然後去改變其樣式來去達成一個時鐘的效果
                </p>

                {/* <a href='https://wuharry.github.io/day2/'>點我前往</a> */}
            </section>
        </div>

    </div>
}
export default WorkList;
